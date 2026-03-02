const ETHICAL_ADS_PATTERNS = [
  "https://media.ethicalads.io/media/client/ethicalads.min.js",
  "media.ethicalads.io/media/client/ethicalads.min.js",
  "ethicalads.min.js",
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
  exception?: {
    values?: Array<{
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

  return candidates.some(hasEthicalAdsPattern);
}
