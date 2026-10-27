---
sidebar_position: 5
---
# Typescript
Typescript is supported out of the box via [tsx](https://tsx.is/) library: `.ts` config, memory, page object and step definition files are loaded without precompilation.

Config can be typed using `IQavajsConfig` interface

```typescript
import type { IQavajsConfig } from '@qavajs/core';

const config: IQavajsConfig = {
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

export default config;

export const ci: IQavajsConfig = {
    parallel: 6,
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
        ['junit', 'report/report.xml']
    ]
}

```

:::note
Prior to `@qavajs/core` 2.17.0 typescript was loaded via `ts-node`. If you have `ts-node` specific settings (e.g. `swc`) in `tsconfig.json` they are not applied anymore.
:::
