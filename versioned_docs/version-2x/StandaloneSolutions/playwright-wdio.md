---
sidebar_position: 0
---
# @qavajs/playwright
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
cucumber.ts
```typescript
import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/playwright-wdio/steps.js', // package steps
        'step_definitions/*.ts' // custom step definitions
    ],
    memory: new Memory(),
    pageObject: new App()
}
```

playwright.config.ts
```typescript
import { defineCucumber, WdioOptions } from '@qavajs/playwright-wdio';

export default defineConfig<WdioOptions>({
    testDir: defineCucumber({
        config: 'config.ts',
        profile: 'smoke'
    }),
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