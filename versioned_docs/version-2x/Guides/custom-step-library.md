---
sidebar_position: 25
---

# Custom Step Library

When you have step definitions that are reused across multiple projects, packaging them as a dedicated npm package avoids duplication and lets teams share tested automation building blocks.

## Package Structure

```
@myorg/steps-myservice/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts          # entry point — registers all steps
│   ├── steps/
│   │   ├── action.ts
│   │   └── assertion.ts
│   └── parameterTypes.ts # custom parameter types (optional)
└── README.md
```

## Setting Up the Package

### `package.json`

```json
{
    "name": "@myorg/steps-myservice",
    "version": "1.0.0",
    "main": "src/index.js",
    "types": "src/index.d.ts",
    "peerDependencies": {
        "@qavajs/core": ">=2.0.0"
    },
    "devDependencies": {
        "@qavajs/core": "^2.0.0",
        "typescript": "^5.0.0"
    }
}
```

Declare `@qavajs/core` as a peer dependency so the host project provides it rather than the package bundling its own copy.

### `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "declaration": true,
        "outDir": "./src",
        "rootDir": "./src",
        "strict": true
    }
}
```

## Writing Steps

Import `Given`, `When`, `Then` from `@qavajs/core`. The full set of qavajs parameter types (`{value}`, `{validation}`, `{playwrightLocator}`, etc.) is available automatically to consumers who load your package after `@qavajs/steps-playwright` or `@qavajs/steps-wdio`.

```typescript
// src/steps/action.ts
import { When } from '@qavajs/core';
import type { MemoryValue } from '@qavajs/core';

When('I call myservice endpoint {value} and save response as {string}',
    async function(endpointValue: MemoryValue, key: string) {
        const url = await endpointValue.value();
        const response = await fetch(url);
        this.setValue(key, await response.json());
    }
);
```

```typescript
// src/steps/assertion.ts
import { Then } from '@qavajs/core';
import type { MemoryValue, Validation } from '@qavajs/core';

Then('I expect myservice response {value} {validation} {value}',
    async function(actual: MemoryValue, validate: Validation, expected: MemoryValue) {
        validate(await actual.value(), await expected.value());
    }
);
```

## Custom Parameter Types

Register parameter types in a dedicated file and call it from the entry point:

```typescript
// src/parameterTypes.ts
import { defineParameterType } from '@qavajs/core';

defineParameterType({
    name: 'httpMethod',
    regexp: /GET|POST|PUT|PATCH|DELETE/,
    transformer: (method: string) => method
});
```

```typescript
// src/steps/action.ts
import { When } from '@qavajs/core';

When('I send {httpMethod} request to {value}',
    async function(method: string, urlValue) {
        const url = await urlValue.value();
        await fetch(url, { method });
    }
);
```

## Entry Point

The entry point file simply imports all step and parameter type modules so that requiring it in a project registers everything:

```typescript
// src/index.ts
import './parameterTypes';
import './steps/action';
import './steps/assertion';
```

## Consuming the Library

In the host project's config, add the library to `require` before any project-specific step definitions:

```typescript
export default {
    require: [
        'node_modules/@qavajs/steps-playwright/index.js',
        'node_modules/@myorg/steps-myservice/src/index.js',
        'step_definitions/**/*.ts'
    ],
    // ...
}
```

## Overriding Steps from a Library

If a library step does not match your project's exact needs, use `Override` to replace the implementation without triggering an ambiguous step error:

```typescript
import { Override } from '@qavajs/core';

Override('I call myservice endpoint {value} and save response as {string}',
    async function(endpointValue, key: string) {
        // custom implementation for this project
        const url = await endpointValue.value();
        const response = await myCustomClient.get(url);
        this.setValue(key, response.data);
    }
);
```

## Publishing

Publish to the npm registry in the normal way:

```bash
npm publish --access public
```

For a private organization registry:

```bash
npm publish --registry https://registry.mycompany.com
```

Once published, install in any qavajs project:

```bash
npm install @myorg/steps-myservice
```
