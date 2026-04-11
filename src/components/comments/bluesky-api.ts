import type { Facet } from "@atcute/bluesky-richtext-segmenter";
import type {
  BlueskyReplyItem,
  BlueskyReplySegment,
  BlueskyThreadData,
  BlueskyThreadResult,
} from "./bluesky-types";
import { segmentize } from "@atcute/bluesky-richtext-segmenter";
import { BLUESKY_API } from "./bluesky-types";
import { parseBlueskyPostUrl } from "./bluesky-url";

type JsonObject = Record<string, unknown>;

interface BlueskyFeature {
  $type?: string;
  uri?: string;
  did?: string;
  tag?: string;
}

interface BlueskyRecord {
  text?: string;
  createdAt?: string;
  facets?: Array<Facet<BlueskyFeature>>;
}

interface BlueskyAuthor {
  handle?: string;
  displayName?: string;
  avatar?: string;
}

interface BlueskyExternalEmbed {
  external?: {
    uri?: string;
    title?: string;
    description?: string;
    thumb?: string;
  };
}

interface BlueskyPost {
  uri?: string;
  author?: BlueskyAuthor;
  record?: BlueskyRecord;
  replyCount?: number;
  likeCount?: number;
  quoteCount?: number;
  embed?: BlueskyExternalEmbed;
}

interface BlueskyThreadNode {
  post?: BlueskyPost;
  replies?: unknown[];
}

export function toCanonicalAtUri(did: string, rkey: string): string {
  return `at://${did}/app.bsky.feed.post/${rkey}`;
}

export async function resolveActorDid(
  actor: string,
  fetchImpl: typeof fetch = fetch,
): Promise<string | null> {
  if (!actor) return null;
  if (actor.startsWith("did:")) return actor;

  const endpoint = `${BLUESKY_API}/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(actor)}`;
  const response = await fetchImpl(endpoint);
  if (!response.ok) return null;

  const data = (await response.json()) as JsonObject;
  const did = data.did;
  return typeof did === "string" && did.startsWith("did:") ? did : null;
}

function toWebProfileUrl(handle: string): string {
  return `https://bsky.app/profile/${encodeURIComponent(handle)}`;
}

function toWebPostUrlFromAtUri(atUri: string): string | null {
  const match = atUri.match(/^at:\/\/([^/]+)\/app\.bsky\.feed\.post\/([^/]+)$/);
  if (!match) return null;
  return `https://bsky.app/profile/${match[1]}/post/${match[2]}`;
}

function segmentPostText(
  text: string,
  facets: Array<Facet<BlueskyFeature>> | undefined,
): BlueskyReplySegment[] {
  const segments = segmentize(text, facets);

  return segments
    .map((segment) => {
      const feature = segment.features?.[0];
      if (!feature || typeof feature !== "object") {
        return { text: segment.text };
      }

      if (feature.$type === "app.bsky.richtext.facet#link" && feature.uri) {
        return { text: segment.text, href: feature.uri };
      }

      if (feature.$type === "app.bsky.richtext.facet#mention" && feature.did) {
        return { text: segment.text, href: toWebProfileUrl(feature.did) };
      }

      if (feature.$type === "app.bsky.richtext.facet#tag" && feature.tag) {
        return {
          text: segment.text,
          href: `https://bsky.app/hashtag/${encodeURIComponent(feature.tag)}`,
        };
      }

      return { text: segment.text };
    })
    .filter((segment) => segment.text.length > 0);
}

function isThreadNode(value: unknown): value is BlueskyThreadNode {
  return Boolean(value && typeof value === "object");
}

function toNumber(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function toReplyItem(
  node: BlueskyThreadNode,
  depth: number,
  hasReplies: boolean,
): BlueskyReplyItem | null {
  const post = node.post;
  const uri = post?.uri;
  const author = post?.author;
  const handle = author?.handle;
  const record = post?.record;
  const text = record?.text;

  if (!uri || !handle || !text || typeof text !== "string") {
    return null;
  }

  const external = post?.embed?.external;
  return {
    id: uri,
    replyUrl: toWebPostUrlFromAtUri(uri) ?? "",
    depth,
    hasReplies,
    author: {
      handle,
      displayName: author.displayName,
      avatar: author.avatar,
    },
    createdAt: record.createdAt,
    likeCount: toNumber(post.likeCount),
    segments: segmentPostText(text, record.facets),
    externalEmbed: external?.uri
      ? {
          uri: external.uri,
          title: external.title,
          description: external.description,
          thumb: external.thumb,
        }
      : undefined,
  };
}

function flattenReplies(nodes: unknown[] | undefined): BlueskyReplyItem[] {
  if (!nodes) return [];

  const replies: BlueskyReplyItem[] = [];
  const stack: Array<{ node: unknown; depth: number }> = nodes
    .map((node) => ({ node, depth: 0 }))
    .reverse();

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    const value = current.node;
    if (!isThreadNode(value)) continue;
    const childReplies = Array.isArray(value.replies) ? value.replies : [];

    const reply = toReplyItem(value, current.depth, childReplies.length > 0);
    if (reply) {
      replies.push(reply);
    }

    if (childReplies.length > 0) {
      for (let index = childReplies.length - 1; index >= 0; index -= 1) {
        stack.push({ node: childReplies[index], depth: current.depth + 1 });
      }
    }
  }

  return replies;
}

export function normalizeThreadResponse(
  threadResponse: unknown,
  fallbackReplyUrl: string,
): BlueskyThreadData | null {
  if (!threadResponse || typeof threadResponse !== "object") return null;

  const root = (threadResponse as JsonObject).thread;
  if (!isThreadNode(root) || !root.post?.uri) return null;

  const rootPost = root.post;
  if (typeof rootPost.uri !== "string") return null;
  const rootUri = rootPost.uri;
  const summary = {
    canonicalAtUri: rootUri,
    replyCount: toNumber(rootPost.replyCount),
    likeCount: toNumber(rootPost.likeCount),
    quoteCount: toNumber(rootPost.quoteCount),
    replyUrl: toWebPostUrlFromAtUri(rootUri) ?? fallbackReplyUrl,
  };

  return {
    summary,
    replies: flattenReplies(root.replies),
  };
}

async function fetchThread(
  atUri: string,
  fetchImpl: typeof fetch,
): Promise<unknown> {
  const endpoint = `${BLUESKY_API}/xrpc/app.bsky.feed.getPostThread?uri=${encodeURIComponent(atUri)}&depth=50`;
  const response = await fetchImpl(endpoint);
  if (!response.ok) return null;
  return response.json();
}

export async function fetchBlueskyThreadData(
  postUrl: string,
  fetchImpl: typeof fetch = fetch,
): Promise<BlueskyThreadResult> {
  const parsed = parseBlueskyPostUrl(postUrl);
  if (!parsed) return { status: "unavailable" };

  const did = await resolveActorDid(parsed.actor, fetchImpl);
  if (!did) return { status: "unavailable" };

  const atUri = toCanonicalAtUri(did, parsed.rkey);
  const thread = await fetchThread(atUri, fetchImpl);
  if (!thread) return { status: "unavailable" };

  const normalized = normalizeThreadResponse(thread, postUrl);
  if (!normalized) return { status: "unavailable" };

  return { status: "ok", data: normalized };
}
