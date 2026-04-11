import * as Sentry from "@sentry/astro";
import { shouldDropSentryEvent } from "./src/lib/sentry-filter";

const isLocalhost =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);

if (import.meta.env.PROD && !isLocalhost) {
  Sentry.init({
    dsn: "https://56fe92fe1b535b2b1de0924973da3919@o4508612961370112.ingest.de.sentry.io/4510460773990480",
    sendDefaultPii: false,
    enableLogs: true,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 1.0,
    beforeSend(event) {
      if (shouldDropSentryEvent(event)) {
        return null;
      }

      return event;
    },
  });
}
