const ETHICAL_ADS_PATTERNS = [
  "https://media.ethicalads.io/media/client/ethicalads.min.js",
  "media.ethicalads.io/media/client/ethicalads.min.js",
  "ethicalads.min.js",
];
const ABORTED_TRANSITION_ERROR =
  "InvalidStateError: Transition was aborted because of invalid state";

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
        exceptionValue.value === ABORTED_TRANSITION_ERROR,
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
    candidates.some(hasEthicalAdsPattern)
  );
}
