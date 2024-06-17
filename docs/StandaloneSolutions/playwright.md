---
sidebar_position: 0
---
# @qavajs/playwright
qavajs implementation on top of playwright runner

## Installation

`npm init playwright`              

`npm install @qavajs/playwright-runner-adapter`

`npm install @qavajs/playwright`

## Configuration
cucumber.ts
```typescript
import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/playwright/index.js', // package steps
        'step_definitions/*.ts' // custom step definitions
    ],
    memory: new Memory(),
    pageObject: new App()
}
```

playwright.config.ts
```typescript
proces.env.CONFIG = 'cucumber.ts';
proces.env.PROFILE = 'default';

export default defineConfig({
    testDir: resolve('node_modules/@qavajs/playwright-runner-adapter/adapter'),
    ...
});
```

