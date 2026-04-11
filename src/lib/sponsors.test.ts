import type { GithubSponsorshipNode } from "./sponsors";
import { describe, expect, it, vi } from "vitest";
import {
  compareSponsors,
  getTierEmoji,
  isPremiumAmount,
  loadSponsors,
  normalizeSponsors,
} from "./sponsors";

const createResponse = (json: unknown, status = 200) =>
  new Response(JSON.stringify(json), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const createNode = (
  overrides: Partial<GithubSponsorshipNode> = {},
): GithubSponsorshipNode => ({
  createdAt: "2024-01-01T00:00:00.000Z",
  isOneTimePayment: false,
  privacyLevel: "PUBLIC",
  sponsorEntity: {
    __typename: "User" as const,
    avatarUrl: "https://avatars.githubusercontent.com/u/1?s=400",
    login: "alice",
    name: "Alice",
    url: "https://github.com/alice",
  },
  tier: {
    isCustomAmount: false,
    monthlyPriceInDollars: 100,
    name: "Gold",
  },
  ...overrides,
});

describe("getTierEmoji", () => {
  it("maps sponsor amounts to the correct emojis", () => {
    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 1,
        name: "$1 a month",
      }),
    ).toBe("🙏");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 5,
        name: "$5 a month",
      }),
    ).toBe("❤️");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 10,
        name: "$10 a month",
      }),
    ).toBe("🎗️");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 20,
        name: "$20 a month",
      }),
    ).toBe("🥳");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 50,
        name: "$50 a month",
      }),
    ).toBe("🥉");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 100,
        name: "$100 a month",
      }),
    ).toBe("🥈");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 200,
        name: "$200 a month",
      }),
    ).toBe("🥇");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 300,
        name: "$300 a month",
      }),
    ).toBe("💎");

    expect(
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 500,
        name: "$500 a month",
      }),
    ).toBe("💍");
  });

  it("fails for unknown tiers", () => {
    expect(() =>
      getTierEmoji({
        isCustomAmount: false,
        monthlyPriceInDollars: 42,
        name: "Mystery",
      }),
    ).toThrow(/Unknown GitHub Sponsors tier/);
  });
});

describe("normalizeSponsors", () => {
  it("maps GitHub sponsor nodes into the site sponsor shape", () => {
    expect(normalizeSponsors([createNode()])).toEqual([
      {
        amount: 100,
        emoji: "🥈",
        image: "https://avatars.githubusercontent.com/u/1?s=400",
        name: "Alice",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/alice",
      },
    ]);
  });

  it("filters out one-time sponsorships", () => {
    expect(
      normalizeSponsors([
        createNode({ isOneTimePayment: true }),
        createNode({
          sponsorEntity: {
            __typename: "User",
            avatarUrl: "https://avatars.githubusercontent.com/u/2?s=400",
            login: "bob",
            name: "Bob",
            url: "https://github.com/bob",
          },
        }),
      ]),
    ).toEqual([
      {
        amount: 100,
        emoji: "🥈",
        image: "https://avatars.githubusercontent.com/u/2?s=400",
        name: "Bob",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/bob",
      },
    ]);
  });

  it("filters out private sponsors", () => {
    expect(
      normalizeSponsors([
        createNode({ privacyLevel: "PRIVATE" }),
        createNode({
          sponsorEntity: {
            __typename: "User",
            avatarUrl: "https://avatars.githubusercontent.com/u/2?s=400",
            login: "public-user",
            name: "Public User",
            url: "https://github.com/public-user",
          },
        }),
      ]),
    ).toEqual([
      {
        amount: 100,
        emoji: "🥈",
        image: "https://avatars.githubusercontent.com/u/2?s=400",
        name: "Public User",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/public-user",
      },
    ]);
  });

  it("sorts sponsors by amount descending and oldest first within the same amount", () => {
    expect(
      normalizeSponsors([
        createNode({
          createdAt: "2024-03-01T00:00:00.000Z",
          sponsorEntity: {
            __typename: "User",
            avatarUrl: "https://avatars.githubusercontent.com/u/3?s=400",
            login: "newer-bronze",
            name: "Newer Bronze",
            url: "https://github.com/newer-bronze",
          },
          tier: {
            isCustomAmount: false,
            monthlyPriceInDollars: 50,
            name: "$50 a month",
          },
        }),
        createNode({
          createdAt: "2024-01-01T00:00:00.000Z",
          sponsorEntity: {
            __typename: "User",
            avatarUrl: "https://avatars.githubusercontent.com/u/4?s=400",
            login: "older-bronze",
            name: "Older Bronze",
            url: "https://github.com/older-bronze",
          },
          tier: {
            isCustomAmount: false,
            monthlyPriceInDollars: 50,
            name: "$50 a month",
          },
        }),
        createNode({
          createdAt: "2024-02-01T00:00:00.000Z",
          sponsorEntity: {
            __typename: "User",
            avatarUrl: "https://avatars.githubusercontent.com/u/5?s=400",
            login: "diamond",
            name: "Diamond",
            url: "https://github.com/diamond",
          },
          tier: {
            isCustomAmount: false,
            monthlyPriceInDollars: 300,
            name: "$300 a month",
          },
        }),
      ]).map((sponsor) => sponsor.name),
    ).toEqual(["Diamond", "Older Bronze", "Newer Bronze"]);
  });
});

describe("isPremiumAmount", () => {
  it("treats 20 dollars and above as premium", () => {
    expect(isPremiumAmount(20)).toBe(true);
    expect(isPremiumAmount(300)).toBe(true);
    expect(isPremiumAmount(10)).toBe(false);
    expect(isPremiumAmount(1)).toBe(false);
  });
});

describe("compareSponsors", () => {
  it("orders the same amount by oldest first", () => {
    expect(
      compareSponsors(
        {
          amount: 20,
          emoji: "🥳",
          image: "a",
          name: "Older",
          startedAt: "2024-01-01T00:00:00.000Z",
          url: "https://example.com/older",
        },
        {
          amount: 20,
          emoji: "🥳",
          image: "b",
          name: "Newer",
          startedAt: "2024-02-01T00:00:00.000Z",
          url: "https://example.com/newer",
        },
      ) < 0,
    ).toBe(true);
  });
});

describe("loadSponsors", () => {
  it("fails when the GitHub token is missing", async () => {
    await expect(loadSponsors(vi.fn(), "")).rejects.toThrow(/GITHUB_TOKEN/);
  });

  it("fails for malformed payloads", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(createResponse({ data: { user: null } }));

    await expect(loadSponsors(fetchMock, "token")).rejects.toThrow(
      /unexpected payload/,
    );
  });

  it("loads recurring public sponsors across pages", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        createResponse({
          data: {
            user: {
              sponsorshipsAsMaintainer: {
                nodes: [
                  createNode(),
                  createNode({
                    sponsorEntity: {
                      __typename: "Organization",
                      avatarUrl:
                        "https://avatars.githubusercontent.com/u/3?s=400",
                      login: "friend-org",
                      name: null,
                      url: "https://github.com/friend-org",
                    },
                    tier: {
                      isCustomAmount: false,
                      monthlyPriceInDollars: 5,
                      name: "Friend",
                    },
                  }),
                ],
                pageInfo: {
                  endCursor: "cursor-1",
                  hasNextPage: true,
                },
              },
            },
          },
        }),
      )
      .mockResolvedValueOnce(
        createResponse({
          data: {
            user: {
              sponsorshipsAsMaintainer: {
                nodes: [
                  createNode({
                    sponsorEntity: {
                      __typename: "User",
                      avatarUrl:
                        "https://avatars.githubusercontent.com/u/4?s=400",
                      login: "thanks-user",
                      name: "Thanks User",
                      url: "https://github.com/thanks-user",
                    },
                    tier: {
                      isCustomAmount: false,
                      monthlyPriceInDollars: 1,
                      name: "Thanks",
                    },
                  }),
                ],
                pageInfo: {
                  endCursor: null,
                  hasNextPage: false,
                },
              },
            },
          },
        }),
      );

    await expect(loadSponsors(fetchMock, "token")).resolves.toEqual([
      {
        amount: 100,
        emoji: "🥈",
        image: "https://avatars.githubusercontent.com/u/1?s=400",
        name: "Alice",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/alice",
      },
      {
        amount: 5,
        emoji: "❤️",
        image: "https://avatars.githubusercontent.com/u/3?s=400",
        name: "friend-org",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/friend-org",
      },
      {
        amount: 1,
        emoji: "🙏",
        image: "https://avatars.githubusercontent.com/u/4?s=400",
        name: "Thanks User",
        startedAt: "2024-01-01T00:00:00.000Z",
        url: "https://github.com/thanks-user",
      },
    ]);
  });
});
