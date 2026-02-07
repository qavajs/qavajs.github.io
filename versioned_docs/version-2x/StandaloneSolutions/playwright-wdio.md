---
sidebar_position: 0
---
# @qavajs/playwright-wdio
qavajs implementation on top of playwright runner with special wdio fixtures

Demo projects:
- https://github.com/qavajs/demo/tree/main/playwright-wdio-runner

## Installation

```shell
npm init playwright
```              

```shell
npm install @qavajs/playwright-wdio
```

## Configuration
qavajs.config.ts
```typescript
import { defineConfig } from '@qavajs/playwright';
import Memory from './memory';
import App from './page_object';

export default defineConfig({
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/playwright-wdio/steps.js', // package steps
        'step_definitions/*.ts' // custom step definitions
    ],
    memory: new Memory(),
    pageObject: new App()
});
```

playwright.config.ts
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testMatch: 'qavajs.config.ts',
    projects: [
        {
            name: 'chrome',
            use: {
                wdioLaunchOptions: {
                    logLevel: 'error',
                    capabilities: {
                        browserName: 'chrome',
                        "goog:chromeOptions": {
                            args: ['headless=new']
                        }
                    },
                }
            }
        }
    ]
});
```
