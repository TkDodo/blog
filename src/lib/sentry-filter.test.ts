import { describe, expect, it } from "vitest";
import { shouldDropSentryEvent } from "./sentry-filter";

describe("shouldDropSentryEvent", () => {
  it("drops events for EthicalAds script errors", () => {
    const event = {
      exception: {
        values: [
          {
            stacktrace: {
              frames: [
                {
                  filename:
                    "https://media.ethicalads.io/media/client/ethicalads.min.js",
                },
              ],
            },
          },
        ],
      },
    };

    expect(shouldDropSentryEvent(event)).toBe(true);
  });

  it("keeps unrelated events", () => {
    const event = {
      exception: {
        values: [
          {
            stacktrace: {
              frames: [
                {
                  filename: "https://example.com/app/main.js",
                },
              ],
            },
          },
        ],
      },
    };

    expect(shouldDropSentryEvent(event)).toBe(false);
  });
});
