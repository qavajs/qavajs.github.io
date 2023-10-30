---
sidebar_position: 5
---
# Typescript
Typescript is supported out of the box via ts-node library

```typescript
export default {
    parallel: 1,
    defaultTimeout: 30000,
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'node_modules/@qavajs/steps-memory/index.js',
        'step_definition/*.ts'
    ],
    paths: [
        'features/**/*.feature'
    ],
    format: [
        '@qavajs/console-formatter'
    ]
}

export const ci = {
    parallel: 6,
    defaultTimeout: 30000,
    require: [
        'node_modules/@qavajs/steps-wdio',
        'node_modules/@qavajs/steps-memory',
        'step_definition/*.ts'
    ],
    paths: [
        'features/**/*.feature'
    ],
    format: [
        '@qavajs/xunit-formatter:report/report.xml'
    ]
}

```
