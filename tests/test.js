const test = require('tape')
const isDuckDuck = require('../')

test('should fail on wrong IPs', (t) => {
  t.plan(2)
  isDuckDuck('1.1.1.1').then(outcome => t.notOk(outcome))
  isDuckDuck('123.123.123.123').catch(err => t.equal(err.code, 'ENOTFOUND'))
})

test('should fail with wrong inputs', (t) => {
  t.plan(3)
  isDuckDuck('helloworld').catch(err => t.ok(err))
  isDuckDuck('0.0.0.0.0.0').catch(err => t.ok(err))
  isDuckDuck().catch(err => t.ok(err))
})

test('should pass on valid duckduckgo.com crawler ips', (t) => {
  t.plan(3)
  isDuckDuck('72.94.249.34').then(outcome => t.ok(outcome))
  isDuckDuck('72.94.249.35').then(outcome => t.ok(outcome))
  isDuckDuck('72.94.249.36').then(outcome => t.ok(outcome))
})
