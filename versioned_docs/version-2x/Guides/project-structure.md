---
sidebar_position: 9
---

# Project Structure

This guide describes a recommended folder layout and naming conventions for qavajs projects. It is a set of suggestions, not strict rules — adjust to your team's needs.

## Recommended Layout

```
my-project/
├── config.ts                   # default config (local dev)
├── package.json
├── tsconfig.json
│
├── features/                   # Gherkin feature files
│   ├── auth/
│   │   ├── login.feature
│   │   └── logout.feature
│   ├── checkout/
│   │   ├── cart.feature
│   │   └── payment.feature
│   └── smoke/
│       └── health-check.feature
│
├── step_definitions/           # custom step definitions
│   ├── api.steps.ts
│   ├── auth.steps.ts
│   └── common.steps.ts
│
├── support/                    # hooks, fixtures, world extensions
│   ├── hooks.ts
│   ├── fixtures.ts
│   └── world.ts
│
├── page_object/                # page object classes
│   ├── index.ts                # root App class (entry point)
│   ├── components/
│   │   ├── Header.ts
│   │   ├── Footer.ts
│   │   └── Modal.ts
│   └── pages/
│       ├── LoginPage.ts
│       ├── DashboardPage.ts
│       └── CheckoutPage.ts
│
├── memory/                     # test data and constants
│   ├── index.ts                # Memory class (entry point)
│   └── generators.ts           # dynamic data generators
│
└── reports/                    # generated reports (gitignored)
```

## Feature Files

### Naming

Use lowercase kebab-case names that match the feature being tested:

```
features/auth/login.feature
features/checkout/cart.feature
features/smoke/health-check.feature
```

### One feature per file

Keep each file focused on a single capability. Large feature files with many unrelated scenarios are harder to maintain and tag.

### Use tags consistently

Tag every scenario with at least one suite tag (`@smoke`, `@regression`) and one functional area tag (`@auth`, `@checkout`). This enables targeted test runs without maintaining separate config files per area.

```gherkin
@smoke @auth
Scenario: User logs in with valid credentials
  # ...

@regression @checkout
Scenario: User adds multiple items to cart
  # ...
```

## Page Objects

### Root entry point

The `page_object/index.ts` file exports the `App` class that is passed to the config as `pageObject: new App()`. The `App` class composes all page-level objects:

```typescript
// page_object/index.ts
import { locator } from '@qavajs/steps-playwright/po';
import { Header } from './components/Header';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

export class App {
    Header = locator('header').as(Header);
    LoginPage = locator('main').as(LoginPage);
    Dashboard = locator('main').as(DashboardPage);
}
```

### Component files

Put reusable components (navigation, modal dialogs, data tables) in `page_object/components/`. Put page-specific structures in `page_object/pages/`.

```typescript
// page_object/components/Header.ts
import { locator } from '@qavajs/steps-playwright/po';

export class Header {
    Logo = locator('.logo');
    UserMenu = locator('.user-menu');
    NavItem = locator.template((text: string) => `nav a:has-text('${text}')`);
}
```

## Memory / Test Data

### One class, clear properties

Keep the Memory class flat and well-named. Use computed functions for values that should be different on each call:

```typescript
// memory/index.ts
import { generators } from './generators';

export class Memory {
    baseUrl    = process.env.BASE_URL ?? 'http://localhost:3000';
    apiUrl     = process.env.API_URL  ?? 'http://localhost:4000';
    username   = process.env.TEST_USER ?? 'testuser';
    password   = process.env.TEST_PASS ?? 'password';

    randomEmail = () => generators.email();
    timestamp   = () => Date.now();
}
```

```typescript
// memory/generators.ts
export const generators = {
    email: () => `test+${Date.now()}@example.com`,
    username: () => `user_${Math.floor(Math.random() * 9999)}`
};
```

## Step Definitions

### Keep steps thin

Step definitions should delegate to page objects or APIs; they should not contain selector strings or business logic.

```typescript
// good
When('I complete login as {value}', async function(userKey) {
    const user = await userKey.value();
    await this.playwright.page.fill('#username', user.username);
    await this.playwright.page.fill('#password', user.password);
    await this.playwright.page.click('#submit');
});
```

### Group by domain

One file per domain area is easier to navigate than one large file:

```
step_definitions/
├── auth.steps.ts
├── cart.steps.ts
├── payment.steps.ts
└── common.steps.ts
```

## Support Code

Put hooks, fixtures, and world extensions in a `support/` directory and include it in `require`:

```typescript
// config.ts
require: [
    'node_modules/@qavajs/steps-playwright/index.js',
    'step_definitions/**/*.ts',
    'support/**/*.ts'            // hooks, fixtures
]
```

## Config Files

For small projects a single `config.ts` with named exports for each environment is sufficient. For larger projects with very different browser setups, consider one file per environment:

```
config.ts           # local dev (default)
config.staging.ts   # staging environment
config.ci.ts        # CI pipeline
```

```bash
npx qavajs run                              # uses config.ts
npx qavajs run --config config.staging.ts
npx qavajs run --config config.ci.ts
```

See [Environment Management](./environments.md) for more detail.

## Gitignore

```gitignore
node_modules/
reports/
*.env
.env*
```
