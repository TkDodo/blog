import type { Root } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { fetchBlueskyThreadData } from "./bluesky-api";

interface MountOptions {
  postUrl: string;
  onUnavailable: () => void;
}

interface MountedEntry {
  root: Root;
  queryClient: QueryClient;
}

const mountedEntries = new WeakMap<HTMLElement, MountedEntry>();
const SKELETON_ROWS = [0, 1, 2];

function pluralize(count: number, singular: string, plural = `${singular}s`) {
  const resolvedPlural =
    plural === `${singular}s` && singular.endsWith("y")
      ? `${singular.slice(0, -1)}ies`
      : plural;
  return `${count} ${count === 1 ? singular : resolvedPlural}`;
}

function groupRepliesByThread<T extends { depth: number }>(
  replies: T[],
): T[][] {
  const groups: T[][] = [];
  let current: T[] = [];

  for (const reply of replies) {
    if (reply.depth === 0 && current.length > 0) {
      groups.push(current);
      current = [reply];
      continue;
    }

    current.push(reply);
  }

  if (current.length > 0) {
    groups.push(current);
  }

  return groups;
}

function formatRelativeTime(value?: string): string {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const diffMs = date.getTime() - Date.now();
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const ranges: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 1000 * 60 * 60 * 24 * 365],
    ["month", 1000 * 60 * 60 * 24 * 30],
    ["week", 1000 * 60 * 60 * 24 * 7],
    ["day", 1000 * 60 * 60 * 24],
    ["hour", 1000 * 60 * 60],
    ["minute", 1000 * 60],
  ];

  for (const [unit, ms] of ranges) {
    if (Math.abs(diffMs) >= ms) {
      return formatter.format(Math.round(diffMs / ms), unit);
    }
  }

  return formatter.format(Math.round(diffMs / 1000), "second");
}

function BlueskyRepliesSkeleton() {
  return (
    <ul className="space-y-5">
      {SKELETON_ROWS.map((row) => (
        <li key={row} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="bg-ic-bg inline-flex h-9 w-9 animate-pulse rounded-full" />
            <div className="flex min-w-0 items-center gap-2">
              <span className="bg-ic-bg inline-flex h-4 w-28 animate-pulse rounded" />
              <span className="bg-ic-bg inline-flex h-4 w-14 animate-pulse rounded" />
            </div>
          </div>
          <div className="ml-12 space-y-2">
            <span className="bg-ic-bg inline-flex h-5 w-[90%] animate-pulse rounded" />
            <span className="bg-ic-bg inline-flex h-5 w-[72%] animate-pulse rounded" />
            <span className="bg-ic-bg inline-flex h-4 w-12 animate-pulse rounded" />
          </div>
        </li>
      ))}
    </ul>
  );
}

function BlueskyComments({ postUrl, onUnavailable }: MountOptions) {
  const query = useQuery({
    queryKey: ["bluesky-thread", postUrl],
    queryFn: () => fetchBlueskyThreadData(postUrl),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
  });

  React.useEffect(() => {
    if (query.data?.status === "unavailable") {
      onUnavailable();
    }
  }, [onUnavailable, query.data]);

  const isInitialLoading = query.isLoading || !query.data;
  if (!isInitialLoading && query.data?.status === "unavailable") {
    return null;
  }

  const summary = query.data?.status === "ok" ? query.data.data.summary : null;
  const replies = query.data?.status === "ok" ? query.data.data.replies : [];
  const threadedReplies = groupRepliesByThread(replies);

  return (
    <div className="space-y-5 text-sm md:text-base">
      {isInitialLoading ? (
        <div className="text-subtle flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex min-w-16">
              {summary ? (
                pluralize(summary.replyCount, "reply")
              ) : (
                <span className="bg-ic-bg inline-flex h-4 w-16 animate-pulse rounded" />
              )}
            </span>
            <span className="inline-flex min-w-14">
              {summary ? (
                pluralize(summary.likeCount, "like")
              ) : (
                <span className="bg-ic-bg inline-flex h-4 w-14 animate-pulse rounded" />
              )}
            </span>
            <span className="inline-flex min-w-14">
              {summary ? (
                pluralize(summary.quoteCount, "quote")
              ) : (
                <span className="bg-ic-bg inline-flex h-4 w-14 animate-pulse rounded" />
              )}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="border-border text-subtle hover:text-text cursor-pointer rounded border px-2 py-1 text-xs"
              disabled
            >
              Refresh
            </button>
            <a
              href={summary?.replyUrl ?? postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Reply on Bluesky
            </a>
          </div>
        </div>
      ) : (
        <div className="text-subtle flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-4">
            <span>{pluralize(summary?.replyCount ?? 0, "reply")}</span>
            <span>{pluralize(summary?.likeCount ?? 0, "like")}</span>
            <span>{pluralize(summary?.quoteCount ?? 0, "quote")}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="border-border text-subtle hover:text-text cursor-pointer rounded border px-2 py-1 text-xs"
              onClick={() => query.refetch()}
              disabled={query.isFetching}
            >
              {query.isFetching ? "Refreshing..." : "Refresh"}
            </button>
            <a
              href={summary?.replyUrl ?? postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Reply on Bluesky
            </a>
          </div>
        </div>
      )}

      {isInitialLoading ? (
        <BlueskyRepliesSkeleton />
      ) : replies.length === 0 ? (
        <p className="text-subtle text-sm">No Bluesky replies yet.</p>
      ) : (
        <ul className="space-y-4">
          {threadedReplies.map((thread, threadIndex) => (
            <li
              key={thread[0]?.id ?? threadIndex}
              className="border-border bg-ic-bg/25 rounded-xl border p-4 md:p-5"
            >
              <ul className="space-y-5">
                {thread.map((reply) => (
                  <li
                    key={reply.id}
                    className="space-y-2"
                    style={{ marginInlineStart: `${reply.depth * 1.25}rem` }}
                  >
                    <div className="flex items-center gap-3">
                      {reply.author.avatar ? (
                        <img
                          src={reply.author.avatar}
                          alt=""
                          className="h-9 w-9 rounded-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="bg-ic-bg h-9 w-9 rounded-full"
                          aria-hidden="true"
                        />
                      )}
                      <div className="min-w-0 text-sm">
                        <span className="text-text font-semibold">
                          {reply.author.displayName ?? reply.author.handle}
                        </span>{" "}
                        {reply.replyUrl ? (
                          <a
                            href={reply.replyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-subtle hover:underline"
                          >
                            {formatRelativeTime(reply.createdAt)}
                          </a>
                        ) : (
                          <span className="text-subtle">
                            {formatRelativeTime(reply.createdAt)}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-text ml-12 whitespace-pre-wrap">
                      {reply.segments.map((segment, index) =>
                        segment.href ? (
                          <a
                            key={`${reply.id}-${index}`}
                            href={segment.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {segment.text}
                          </a>
                        ) : (
                          <React.Fragment key={`${reply.id}-${index}`}>
                            {segment.text}
                          </React.Fragment>
                        ),
                      )}
                    </p>

                    {reply.externalEmbed && (
                      <a
                        href={reply.externalEmbed.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border bg-ic-bg/50 hover:border-primary ml-12 block overflow-hidden rounded-lg border"
                      >
                        <div className="flex items-stretch">
                          {reply.externalEmbed.thumb ? (
                            <img
                              src={reply.externalEmbed.thumb}
                              alt=""
                              className="h-24 w-24 shrink-0 object-cover"
                              loading="lazy"
                            />
                          ) : null}
                          <div className="space-y-1 p-3 text-sm">
                            <p className="text-primary line-clamp-1">
                              {reply.externalEmbed.uri}
                            </p>
                            {reply.externalEmbed.title ? (
                              <p className="text-text line-clamp-1">
                                {reply.externalEmbed.title}
                              </p>
                            ) : null}
                            {reply.externalEmbed.description ? (
                              <p className="text-subtle line-clamp-2">
                                {reply.externalEmbed.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </a>
                    )}

                    <p className="text-subtle ml-12 text-sm">
                      {pluralize(reply.likeCount, "like")}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function mountBlueskyComments(
  container: HTMLElement,
  options: MountOptions,
): Promise<void> {
  const current = mountedEntries.get(container);

  if (current) {
    current.root.render(
      <QueryClientProvider client={current.queryClient}>
        <BlueskyComments {...options} />
      </QueryClientProvider>,
    );
    return;
  }

  const queryClient = new QueryClient();
  const root = createRoot(container);

  mountedEntries.set(container, { root, queryClient });

  root.render(
    <QueryClientProvider client={queryClient}>
      <BlueskyComments {...options} />
    </QueryClientProvider>,
  );
}
