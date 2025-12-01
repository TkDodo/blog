import * as Sentry from '@sentry/gatsby'

Sentry.init({
  dsn: 'https://56fe92fe1b535b2b1de0924973da3919@o4508612961370112.ingest.de.sentry.io/4510460773990480',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  // Enable sending logs to Sentry
  enableLogs: true,
})
