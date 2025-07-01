import { BrowserCheck, Frequency } from 'checkly/constructs'
import * as path from 'path'

new BrowserCheck('web-shop-login', {
  name: 'Web Shop Login',
  frequency: Frequency.EVERY_10M,
  locations: ['us-east-1', 'eu-west-1', 'ap-southeast-1'],
  code: {
    entrypoint: path.join(__dirname, 'web-shop-login.spec.ts')
  }
})