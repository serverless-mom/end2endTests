import { AlertEscalationBuilder, BrowserCheck, RetryStrategyBuilder } from 'checkly/constructs'
import { prodShopGroup } from '../../check-group/prod-eshop/prod-eshop.check'

new BrowserCheck('book-details-v3', {
  name: 'Book details',
  code: {
    entrypoint: './book-details.spec.ts',
  },
  activated: true,
  muted: false,
  shouldFail: false,
  frequency: 120,
  group: prodShopGroup,
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
