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

  it("drops aborted transition unhandled rejections", () => {
    const event = {
      tags: {
        mechanism: "auto.browser.global_handlers.onunhandledrejection",
      },
      exception: {
        values: [
          {
            type: "Error",
            value:
              "InvalidStateError: Transition was aborted because of invalid state",
          },
        ],
      },
    };

    expect(shouldDropSentryEvent(event)).toBe(true);
  });

  it("keeps aborted transition errors from other mechanisms", () => {
    const event = {
      tags: {
        mechanism: "generic",
      },
      exception: {
        values: [
          {
            type: "Error",
            value:
              "InvalidStateError: Transition was aborted because of invalid state",
          },
        ],
      },
    };

    expect(shouldDropSentryEvent(event)).toBe(false);
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
