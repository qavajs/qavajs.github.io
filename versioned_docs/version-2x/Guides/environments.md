---
sidebar_position: 4
---

# Environment Management

Most projects need to run tests against multiple environments — local, staging, and production — with different URLs, credentials, and browser settings. qavajs provides several complementary mechanisms to handle this.

## Config Profiles

The simplest approach is to export multiple named profiles from one config file:

```typescript
// config.ts
import App from './page_object';
import { DevMemory, StagingMemory, ProdMemory } from './memory';

export default {
    // local development
    paths: ['features/**/*.feature'],
    require: ['node_modules/@qavajs/steps-playwright/index.js', 'step_definitions/**/*.ts'],
    format: ['@qavajs/console-formatter'],
    parallel: 1,
    defaultTimeout: 30000,
    browser: { capabilities: { browserName: 'chromium' } },
    pageObject: new App(),
    memory: new DevMemory()
}

export const staging = {
    paths: ['features/**/*.feature'],
    require: ['node_modules/@qavajs/steps-playwright/index.js', 'step_definitions/**/*.ts'],
    format: ['@qavajs/console-formatter', ['@qavajs/html-formatter', 'reports/report.html']],
    parallel: 4,
    defaultTimeout: 60000,
    browser: { capabilities: { browserName: 'chromium' } },
    pageObject: new App(),
    memory: new StagingMemory()
}

export const production = {
    paths: ['features/smoke/**/*.feature'],
    require: ['node_modules/@qavajs/steps-playwright/index.js', 'step_definitions/**/*.ts'],
    format: ['@qavajs/console-formatter', ['junit', 'reports/junit.xml']],
    parallel: 2,
    defaultTimeout: 60000,
    browser: { capabilities: { browserName: 'chromium' } },
    pageObject: new App(),
    memory: new ProdMemory()
}
```

Run with:

```bash
npx qavajs run --profile staging
npx qavajs run --profile production
```

## Environment-Specific Memory

Each environment's Memory class holds its own URLs and credentials:

```typescript
// memory/index.ts
export class DevMemory {
    baseUrl = 'http://localhost:3000';
    apiUrl = 'http://localhost:4000';
    username = 'dev-user';
    password = 'dev-password';
}

export class StagingMemory {
    baseUrl = 'https://staging.myapp.com';
    apiUrl = 'https://api.staging.myapp.com';
    username = process.env.STAGING_USER!;
    password = process.env.STAGING_PASSWORD!;
}

export class ProdMemory {
    baseUrl = 'https://myapp.com';
    apiUrl = 'https://api.myapp.com';
    username = process.env.PROD_USER!;
    password = process.env.PROD_PASSWORD!;
}
```

## Using dotenv

For secrets that should not live in source code, use `dotenv` to load them from `.env` files.

Install:

```bash
npm install dotenv
```

Create environment-specific `.env` files (add all to `.gitignore`):

```
# .env.staging
STAGING_USER=testuser
STAGING_PASSWORD=secret123
BASE_URL=https://staging.myapp.com
```

Load in your config:

```typescript
import 'dotenv/config';          // loads .env
// or for a named file:
import dotenv from 'dotenv';
dotenv.config({ path: '.env.staging' });

export const staging = {
    // ...
    memory: new StagingMemory()  // reads process.env.STAGING_USER etc.
}
```

## Overriding Memory Values at Runtime

Pass a JSON object via `--memory-values` to override any memory key without editing files:

```bash
npx qavajs run --config config.ts --memory-values '{"baseUrl": "https://staging.myapp.com"}'
```

This is useful for one-off runs or overriding a single value in CI without creating a new profile.

## Environment Variables in CI

In CI pipelines, inject secrets as environment variables and read them in your memory class:

```typescript
export class Memory {
    baseUrl = process.env.BASE_URL ?? 'http://localhost:3000';
    apiKey  = process.env.API_KEY ?? '';
}
```

GitHub Actions example:

```yaml
- name: Run tests
  run: npx qavajs run --profile ci
  env:
    BASE_URL: ${{ secrets.STAGING_URL }}
    API_KEY: ${{ secrets.API_KEY }}
```

## Selecting Environment from CLI Without Profiles

If you prefer a single config that reads from a single environment variable:

```typescript
// config.ts
import App from './page_object';
import { DevMemory, StagingMemory, ProdMemory } from './memory';

const memoryMap = {
    dev:        new DevMemory(),
    staging:    new StagingMemory(),
    production: new ProdMemory()
};

const env = (process.env.TEST_ENV ?? 'dev') as keyof typeof memoryMap;

export default {
    // ...
    memory: memoryMap[env]
}
```

```bash
TEST_ENV=staging npx qavajs run
```

## Summary

| Approach | Best for |
|---|---|
| Config profiles | Distinct configs with different formatters and parallelism |
| Environment-specific Memory | Different URLs and credentials per environment |
| `dotenv` | Local secrets not committed to source control |
| `--memory-values` | One-off overrides on the command line |
| `process.env` in Memory | CI/CD secret injection |
