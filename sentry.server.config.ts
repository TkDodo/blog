import * as Sentry from "@sentry/astro";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://56fe92fe1b535b2b1de0924973da3919@o4508612961370112.ingest.de.sentry.io/4510460773990480",
  sendDefaultPii: false,
  enableLogs: true,
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
});
