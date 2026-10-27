---
sidebar_position: 1
---

# Tags & Filtering

Tags let you categorize scenarios and control which tests run. They are standard Cucumber tags prefixed with `@`.

## Defining Tags

Add tags above a `Feature`, `Scenario`, `Scenario Outline`, or `Examples` block:

```gherkin
@smoke
Feature: User authentication

  @happy-path
  Scenario: Login with valid credentials
    Given I open '$loginUrl' url
    When I type '$username' to 'Username Input'
    And I type '$password' to 'Password Input'
    And I click 'Login Button'
    Then I expect 'Dashboard' to be visible

  @wip
  Scenario: Login with expired token
    Given I open '$loginUrl' url
    When I type '$expiredToken' to 'Token Field'
    Then I expect 'Session Expired Message' to be visible
```

Tags on a `Feature` are inherited by all scenarios inside it. Tags on `Examples` apply to the specific parameterized run.

## Running by Tag

### CLI

```bash
npx qavajs run --tags "@smoke"
npx qavajs run --tags "@smoke and @happy-path"
npx qavajs run --tags "@smoke and not @wip"
npx qavajs run --tags "@smoke or @regression"
```

### Config file

```typescript
export default {
    // ...
    tags: '@smoke and not @wip'
}
```

The CLI flag takes precedence over the config file value.

## Tag Expressions

Combine tags using Boolean operators:

| Operator | Meaning | Example |
|---|---|---|
| `and` | Both tags must be present | `@smoke and @login` |
| `or` | Either tag must be present | `@smoke or @regression` |
| `not` | Tag must not be present | `not @wip` |
| `()` | Grouping | `@smoke and (not @slow)` |

Examples:

```bash
# Run all smoke tests that are not marked as work-in-progress
npx qavajs run --tags "@smoke and not @wip"

# Run login or checkout flows
npx qavajs run --tags "@login or @checkout"

# Run regression but exclude performance-heavy scenarios
npx qavajs run --tags "@regression and not @performance"
```

## Tags and Sharding

Tags combine cleanly with `--shard` for distributed CI runs:

```bash
# Machine 1: smoke tests, first half
npx qavajs run --tags "@smoke" --shard 1/2

# Machine 2: smoke tests, second half
npx qavajs run --tags "@smoke" --shard 2/2
```

## Tags and Hooks

Use tag expressions in `Before`/`After` hooks to scope setup/teardown to specific scenarios:

```typescript
import { Before, After } from '@qavajs/core';

Before({ tags: '@authenticated' }, async function() {
    await this.playwright.page.goto('/login');
    await this.playwright.page.fill('#username', 'admin');
    await this.playwright.page.fill('#password', 'secret');
    await this.playwright.page.click('#submit');
});

After({ tags: '@db-cleanup' }, async function() {
    await this.playwright.page.request.delete('/api/test-data');
});
```

## Tags and Fixtures

Fixtures are activated by tag expression provided in `tags` property:

```typescript
import { Fixture } from '@qavajs/core';

Fixture({ name: 'cart', tags: '@cart' }, async function() {
    await this.playwright.page.goto('/products');
    await this.playwright.page.click('.add-to-cart');

    return async function() {
        await this.playwright.page.request.delete('/api/cart');
    }
});
```

```gherkin
@cart
Scenario: User views cart
  Then I expect 'Cart Item' to be visible
```

## Recommended Tag Conventions

Establishing a consistent tagging strategy makes it easy to target specific subsets of tests across teams and CI pipelines.

| Tag | Purpose |
|---|---|
| `@smoke` | Critical path — fast, run on every PR |
| `@regression` | Full regression suite — run nightly |
| `@wip` | Work in progress — excluded from CI |
| `@slow` | Long-running tests excluded from quick runs |
| `@flaky` | Known flaky tests to investigate |
| `@authenticated` | Scenarios requiring login (used with hooks/fixtures) |
| `@api` | API-only tests |
| `@mobile` | Mobile-specific tests |

Example CI strategy:

```bash
# PR check — fast feedback
npx qavajs run --tags "@smoke and not @wip"

# Nightly full regression
npx qavajs run --tags "@regression and not @wip"

# Debug a specific area
npx qavajs run --tags "@checkout"
```
