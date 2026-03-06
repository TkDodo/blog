import type { ParsedBlueskyPostUrl } from "./bluesky-types";

export function parseBlueskyPostUrl(url: string): ParsedBlueskyPostUrl | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (parsed.hostname !== "bsky.app") return null;
  const match = parsed.pathname.match(/^\/profile\/([^/]+)\/post\/([^/?#]+)\/?$/);
  if (!match) return null;

  const actor = decodeURIComponent(match[1] ?? "").trim();
  const rkey = decodeURIComponent(match[2] ?? "").trim();
  if (!actor || !rkey) return null;

  return { actor, rkey };
}
