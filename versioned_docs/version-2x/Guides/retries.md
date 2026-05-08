---
sidebar_position: 8
---

# Retries

qavajs can automatically retry failing scenarios a configurable number of times before marking them as failed. This is useful for dealing with intermittent failures caused by network instability or timing issues in the test environment.

## Configuration

Set the `retry` option in your config file:

```typescript
export default {
    // ...
    retry: 2  // retry each failing scenario up to 2 times
}
```

Or pass it on the CLI:

```bash
npx qavajs run --retry 2
```

A scenario is retried immediately after it fails. If it passes on any retry attempt it is reported as passing. If it fails on all attempts it is reported as failing.

## Retry in CI

It is common to enable retries only in CI where infrastructure-related flakiness is more likely:

```typescript
// config.ts
export default {
    retry: 0,   // no retries locally
    // ...
}

export const ci = {
    retry: 1,   // one retry in CI
    // ...
}
```

```bash
npx qavajs run --profile ci
```

## Combining Retries with Tags

Mark known flaky tests with a tag and run them with extra retries while keeping the rest of the suite strict:

```gherkin
@flaky
Scenario: Payment confirmation arrives within SLA
  When I complete a payment
  Then I expect 'Confirmation Email' to be received
```

Run with a higher retry count for flaky tests only:

```bash
npx qavajs run --tags "@flaky" --retry 3
npx qavajs run --tags "not @flaky" --retry 0
```

## What to Avoid

Retries mask real failures. Use them as a safety net, not a substitute for fixing unstable tests. If a scenario fails consistently it needs to be investigated, not retried indefinitely.

Good candidates for retries:
- Tests that depend on external services with occasional latency spikes
- Tests that interact with email or async notification delivery
- Tests in shared CI environments with variable resource availability

Poor candidates for retries:
- Tests that fail due to application bugs
- Tests that fail due to incorrect assertions
- Tests that leave dirty state on failure (they may pass on retry because state from the previous run persists)

## Cleaning Up After a Failed Attempt

When retries are enabled, ensure your `After` hooks or [fixtures](../Commons/fixtures.mdx) clean up properly so that each retry starts from a known state:

```typescript
import { After } from '@qavajs/core';

After(async function() {
    // always clear cookies so a retry starts unauthenticated
    await this.playwright.context.clearCookies();
    // always reset cart via API regardless of pass/fail
    await this.playwright.page.request.delete('/api/cart').catch(() => {});
});
```
