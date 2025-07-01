//canEditDocs.check.ts
import { AlertChannel, AlertEscalationBuilder, BrowserCheck, RetryStrategyBuilder } from 'checkly/constructs'

new BrowserCheck('can-edit-documentation-v3', {
  name: 'Can Edit Documentation v3',
  code: {
    entrypoint: './canEditDocs.spec.ts',
  },
  activated: true,
  muted: false,
  shouldFail: false,
  locations: [
    'us-east-1',
    'us-west-1',
  ],
  frequency: 5,
  alertEscalationPolicy: AlertEscalationBuilder.runBasedEscalation(1, {
    amount: 0,
    interval: 5,
  }, {
    enabled: false,
    percentage: 10,
  }),
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
  runParallel: true,
})