interface Sponsor {
  name: string;
  url: string;
  image: string;
  amount: number;
  emoji: string;
  startedAt: string;
  imageAlt?: string;
}

interface SponsorEntity {
  __typename: "User" | "Organization";
  avatarUrl: string;
  login: string;
  name: string | null;
  url: string;
}

interface GithubSponsorsTier {
  isCustomAmount: boolean;
  monthlyPriceInDollars: number;
  name: string;
}

export interface GithubSponsorshipNode {
  createdAt: string;
  isOneTimePayment: boolean;
  privacyLevel: "PUBLIC" | "PRIVATE";
  sponsorEntity: SponsorEntity | null;
  tier: GithubSponsorsTier | null;
}

interface GithubSponsorsResponse {
  data?: {
    user?: {
      sponsorshipsAsMaintainer?: {
        nodes?: GithubSponsorshipNode[];
        pageInfo?: {
          endCursor: string | null;
          hasNextPage: boolean;
        };
      };
    } | null;
  };
  errors?: Array<{
    message: string;
  }>;
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const SPONSORABLE_LOGIN = "TkDodo";
const TIER_AMOUNT_MAP = new Map<number, string>([
  [1, "🙏"],
  [5, "❤️"],
  [10, "🎗️"],
  [20, "🥳"],
  [50, "🥉"],
  [100, "🥈"],
  [200, "🥇"],
  [300, "💎"],
  [500, "💍"],
]);

const SPONSORS_QUERY = `
  query SponsorsForMaintainer($login: String!, $after: String) {
    user(login: $login) {
      sponsorshipsAsMaintainer(
        first: 100
        after: $after
        activeOnly: true
        includePrivate: false
      ) {
        nodes {
          createdAt
          isOneTimePayment
          privacyLevel
          sponsorEntity {
            __typename
            ... on User {
              avatarUrl(size: 400)
              login
              name
              url
            }
            ... on Organization {
              avatarUrl(size: 400)
              login
              name
              url
            }
          }
          tier {
            isCustomAmount
            monthlyPriceInDollars
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

let sponsorsPromise: Promise<Sponsor[]> | undefined;

export const isPremiumAmount = (amount: number) => amount >= 20;

export const getTierEmoji = (tier: GithubSponsorsTier): string => {
  const mappedAmountTier = TIER_AMOUNT_MAP.get(tier.monthlyPriceInDollars);

  if (mappedAmountTier) return mappedAmountTier;

  throw new Error(
    `Unknown GitHub Sponsors tier: ${tier.name} ($${tier.monthlyPriceInDollars}/month)`,
  );
};

export const compareSponsors = (left: Sponsor, right: Sponsor): number => {
  if (left.amount !== right.amount) return right.amount - left.amount;

  const leftStartedAt = Date.parse(left.startedAt);
  const rightStartedAt = Date.parse(right.startedAt);

  if (Number.isNaN(leftStartedAt) || Number.isNaN(rightStartedAt)) {
    throw new TypeError(
      `Invalid sponsor timestamp: ${left.startedAt} / ${right.startedAt}`,
    );
  }

  if (leftStartedAt !== rightStartedAt) return leftStartedAt - rightStartedAt;

  return left.name.localeCompare(right.name);
};

const normalizeSponsorNode = (node: GithubSponsorshipNode): Sponsor => {
  if (node.isOneTimePayment)
    throw new Error(
      "One-time sponsorships should be filtered before normalization",
    );

  if (!node.sponsorEntity)
    throw new Error("GitHub Sponsors response is missing sponsorEntity");

  if (!node.tier)
    throw new Error(
      `GitHub Sponsors response is missing tier for ${node.sponsorEntity.login}`,
    );

  return {
    name: node.sponsorEntity.name?.trim() || node.sponsorEntity.login,
    url: node.sponsorEntity.url,
    image: node.sponsorEntity.avatarUrl,
    amount: node.tier.monthlyPriceInDollars,
    emoji: getTierEmoji(node.tier),
    startedAt: node.createdAt,
  };
};

export const normalizeSponsors = (
  nodes: GithubSponsorshipNode[],
): Sponsor[] => {
  const recurringSponsors = nodes.filter(
    (node) => !node.isOneTimePayment && node.privacyLevel === "PUBLIC",
  );
  return recurringSponsors.map(normalizeSponsorNode).sort(compareSponsors);
};

const getRequiredGithubToken = (token = process.env.GITHUB_TOKEN): string => {
  if (!token)
    throw new Error(
      "Missing required GITHUB_TOKEN for GitHub Sponsors build-time fetch",
    );

  return token;
};

const fetchSponsorsPage = async (
  after: string | null,
  fetchImpl: typeof fetch,
  token: string,
): Promise<GithubSponsorsResponse> => {
  const response = await fetchImpl(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: SPONSORS_QUERY,
      variables: {
        login: SPONSORABLE_LOGIN,
        after,
      },
    }),
  });

  if (!response.ok)
    throw new Error(`GitHub Sponsors request failed with ${response.status}`);

  return response.json() as Promise<GithubSponsorsResponse>;
};

const extractSponsorships = (
  payload: GithubSponsorsResponse,
): {
  nodes: GithubSponsorshipNode[];
  pageInfo: {
    endCursor: string | null;
    hasNextPage: boolean;
  };
} => {
  if (payload.errors?.length) {
    throw new Error(
      `GitHub Sponsors query failed: ${payload.errors.map((error) => error.message).join("; ")}`,
    );
  }

  const connection = payload.data?.user?.sponsorshipsAsMaintainer;

  if (!connection?.nodes || !connection.pageInfo)
    throw new Error("GitHub Sponsors query returned an unexpected payload");

  return {
    nodes: connection.nodes,
    pageInfo: connection.pageInfo,
  };
};

export const loadSponsors = async (
  fetchImpl: typeof fetch = fetch,
  token = process.env.GITHUB_TOKEN,
): Promise<Sponsor[]> => {
  const githubToken = getRequiredGithubToken(token);
  const nodes: GithubSponsorshipNode[] = [];
  let after: string | null = null;

  while (true) {
    const payload = await fetchSponsorsPage(after, fetchImpl, githubToken);
    const connection = extractSponsorships(payload);

    nodes.push(...connection.nodes);

    if (!connection.pageInfo.hasNextPage) break;

    after = connection.pageInfo.endCursor;

    if (!after)
      throw new Error(
        "GitHub Sponsors pagination returned hasNextPage without an endCursor",
      );
  }

  return normalizeSponsors(nodes);
};

export const getSponsors = async (): Promise<Sponsor[]> => {
  sponsorsPromise ??= loadSponsors();
  return sponsorsPromise;
};

export const getPremiumSponsors = async (): Promise<Sponsor[]> => {
  const sponsors = await getSponsors();
  return sponsors.filter((sponsor) => isPremiumAmount(sponsor.amount));
};
