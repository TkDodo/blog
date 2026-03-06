import { describe, expect, it, vi } from "vitest";
import {
  fetchBlueskyThreadData,
  normalizeThreadResponse,
  resolveActorDid,
  toCanonicalAtUri,
} from "./bluesky-api";
import { parseBlueskyPostUrl } from "./bluesky-url";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("parseBlueskyPostUrl", () => {
  it("parses valid web URLs", () => {
    expect(
      parseBlueskyPostUrl(
        "https://bsky.app/profile/tkdodo.eu/post/3mfkeyprshs24",
      ),
    ).toEqual({ actor: "tkdodo.eu", rkey: "3mfkeyprshs24" });
  });

  it("returns null for invalid URLs", () => {
    expect(parseBlueskyPostUrl("https://example.com/foo")).toBeNull();
    expect(parseBlueskyPostUrl("https://bsky.app/profile/tkdodo.eu")).toBeNull();
  });
});

describe("resolveActorDid", () => {
  it("returns did input unchanged", async () => {
    expect(await resolveActorDid("did:plc:abc123")).toBe("did:plc:abc123");
  });

  it("resolves handle to did", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ did: "did:plc:resolved" }));

    await expect(resolveActorDid("tkdodo.eu", fetchMock)).resolves.toBe(
      "did:plc:resolved",
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toContain("resolveHandle?handle=tkdodo.eu");
  });
});

describe("toCanonicalAtUri", () => {
  it("builds canonical at-uri", () => {
    expect(toCanonicalAtUri("did:plc:abc", "3mfk")).toBe(
      "at://did:plc:abc/app.bsky.feed.post/3mfk",
    );
  });
});

describe("normalizeThreadResponse", () => {
  it("flattens nested replies and skips malformed entries", () => {
    const normalized = normalizeThreadResponse(
      {
        thread: {
          post: {
            uri: "at://did:plc:root/app.bsky.feed.post/root",
            replyCount: 2,
            likeCount: 10,
            quoteCount: 3,
          },
          replies: [
            {
              post: {
                uri: "at://did:plc:one/app.bsky.feed.post/one",
                likeCount: 8,
                author: { handle: "alice.tld", displayName: "Alice" },
                record: {
                  text: "hello https://example.com",
                  createdAt: "2026-01-01T00:00:00.000Z",
                  facets: [
                    {
                      index: { byteStart: 6, byteEnd: 25 },
                      features: [
                        {
                          $type: "app.bsky.richtext.facet#link",
                          uri: "https://example.com",
                        },
                      ],
                    },
                  ],
                },
              },
              replies: [
                {
                  post: {
                    uri: "at://did:plc:two/app.bsky.feed.post/two",
                    likeCount: 1,
                    author: { handle: "bob.tld", displayName: "Bob" },
                    record: { text: "nested" },
                  },
                },
              ],
            },
            {
              post: {
                uri: "at://did:plc:bad/app.bsky.feed.post/bad",
                author: { handle: "bad.tld" },
                record: { text: "" },
              },
            },
          ],
        },
      },
      "https://bsky.app/profile/root/post/root",
    );

    expect(normalized?.summary).toEqual({
      canonicalAtUri: "at://did:plc:root/app.bsky.feed.post/root",
      replyCount: 2,
      likeCount: 10,
      quoteCount: 3,
      replyUrl: "https://bsky.app/profile/did:plc:root/post/root",
    });

    expect(normalized?.replies).toHaveLength(2);
    expect(normalized?.replies[0]?.segments.some((s) => s.href)).toBe(true);
  });
});

describe("fetchBlueskyThreadData", () => {
  it("returns unavailable when thread fetch fails", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(jsonResponse({ did: "did:plc:resolved" }))
      .mockResolvedValueOnce(jsonResponse({}, 500));

    await expect(
      fetchBlueskyThreadData(
        "https://bsky.app/profile/tkdodo.eu/post/3mfkeyprshs24",
        fetchMock,
      ),
    ).resolves.toEqual({ status: "unavailable" });
  });

  it("returns normalized result on success", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(jsonResponse({ did: "did:plc:resolved" }))
      .mockResolvedValueOnce(
        jsonResponse({
          thread: {
            post: {
              uri: "at://did:plc:resolved/app.bsky.feed.post/3mfkeyprshs24",
              replyCount: 1,
              likeCount: 2,
              quoteCount: 0,
            },
            replies: [
              {
                post: {
                  uri: "at://did:plc:r1/app.bsky.feed.post/r1",
                  likeCount: 4,
                  author: { handle: "reply.dev", displayName: "Reply" },
                  record: { text: "nice post" },
                },
              },
            ],
          },
        }),
      );

    const result = await fetchBlueskyThreadData(
      "https://bsky.app/profile/tkdodo.eu/post/3mfkeyprshs24",
      fetchMock,
    );

    expect(result.status).toBe("ok");
    if (result.status === "ok") {
      expect(result.data.summary.replyCount).toBe(1);
      expect(result.data.replies).toHaveLength(1);
      expect(result.data.replies[0]?.likeCount).toBe(4);
    }
  });
});
