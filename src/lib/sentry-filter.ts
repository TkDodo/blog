const ETHICAL_ADS_PATTERNS = [
  "https://media.ethicalads.io/media/client/ethicalads.min.js",
  "media.ethicalads.io/media/client/ethicalads.min.js",
  "ethicalads.min.js",
];
const TRANSITION_ERROR_MESSAGES = [
  "InvalidStateError: Transition was aborted because of invalid state",
  "AbortError: Transition was skipped",
];

// Errors injected by the Twitter for iOS in-app browser (WKWebView) that we cannot fix
const TWITTER_IN_APP_BROWSER_ERROR_MESSAGES = [
  "window.webkit.messageHandlers.scrollEventHandler.postMessage",
];

interface EventLike {
  message?: unknown;
  culprit?: unknown;
  request?: {
    url?: unknown;
  };
  logentry?: {
    message?: unknown;
    formatted?: unknown;
  };
  tags?: {
    mechanism?: unknown;
  };
  exception?: {
    values?: Array<{
      type?: unknown;
      value?: unknown;
      stacktrace?: {
        frames?: Array<{
          filename?: unknown;
          abs_path?: unknown;
          module?: unknown;
        }>;
      };
    }>;
  };
}

function hasEthicalAdsPattern(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return ETHICAL_ADS_PATTERNS.some((pattern) => value.includes(pattern));
}

function isAbortedTransitionError(event: EventLike): boolean {
  const isUnhandledRejection =
    event.tags?.mechanism ===
    "auto.browser.global_handlers.onunhandledrejection";

  return (
    isUnhandledRejection &&
    event.exception?.values?.some(
      (exceptionValue) =>
        exceptionValue.type === "Error" &&
        typeof exceptionValue.value === "string" &&
        TRANSITION_ERROR_MESSAGES.includes(exceptionValue.value),
    ) === true
  );
}

function isTwitterInAppBrowserError(event: EventLike): boolean {
  return (
    event.exception?.values?.some(
      (exceptionValue) =>
        typeof exceptionValue.value === "string" &&
        TWITTER_IN_APP_BROWSER_ERROR_MESSAGES.some((msg) =>
          exceptionValue.value!.includes(msg),
        ),
    ) === true
  );
}

export function shouldDropSentryEvent(event: unknown): boolean {
  const candidateEvent = event as EventLike;
  const candidates: unknown[] = [
    candidateEvent.message,
    candidateEvent.culprit,
    candidateEvent.request?.url,
    candidateEvent.logentry?.message,
    candidateEvent.logentry?.formatted,
  ];

  for (const exceptionValue of candidateEvent.exception?.values ?? []) {
    candidates.push(exceptionValue.value);

    for (const frame of exceptionValue.stacktrace?.frames ?? []) {
      candidates.push(frame.filename, frame.abs_path, frame.module);
    }
  }

  return (
    isAbortedTransitionError(candidateEvent) ||
    isTwitterInAppBrowserError(candidateEvent) ||
    candidates.some(hasEthicalAdsPattern)
  );
}
