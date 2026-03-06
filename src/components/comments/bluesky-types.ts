export const BLUESKY_API = "https://public.api.bsky.app";

export interface BlueskyReplySegment {
  text: string;
  href?: string;
}

export interface BlueskyReplyItem {
  id: string;
  depth: number;
  hasReplies: boolean;
  author: {
    handle: string;
    displayName?: string;
    avatar?: string;
  };
  createdAt?: string;
  likeCount: number;
  segments: BlueskyReplySegment[];
  externalEmbed?: {
    uri: string;
    title?: string;
    description?: string;
    thumb?: string;
  };
}

export interface BlueskyThreadSummary {
  canonicalAtUri: string;
  replyCount: number;
  likeCount: number;
  quoteCount: number;
  replyUrl: string;
}

export interface BlueskyThreadData {
  summary: BlueskyThreadSummary;
  replies: BlueskyReplyItem[];
}

export type BlueskyThreadResult =
  | { status: "ok"; data: BlueskyThreadData }
  | { status: "unavailable" };

export interface ParsedBlueskyPostUrl {
  actor: string;
  rkey: string;
}
