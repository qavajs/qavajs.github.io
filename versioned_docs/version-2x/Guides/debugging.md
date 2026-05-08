---
sidebar_position: 7
---

# Debugging

This guide covers techniques for debugging qavajs tests locally.

## Verbose Logging

To see step output in the console, use `@qavajs/console-formatter` with `showLogs` enabled:

```typescript
format: ['@qavajs/console-formatter'],
formatOptions: {
    console: {
        showLogs: true
    }
}
```

## Running a Single Scenario

Use `--tags` to run only the scenario you are investigating:

```bash
npx qavajs run --tags "@debug"
```

Or target a specific feature file and scenario by name:

```bash
npx qavajs run --config config.ts --paths features/login.feature
```

## Node.js Inspector

Launch qavajs with the Node.js debugger enabled so you can attach a debugger:

```bash
node --inspect-brk node_modules/.bin/qavajs run --config config.ts
```

`--inspect-brk` pauses execution on the first line, giving you time to attach before any tests run.

Open `chrome://inspect` in Chrome and click **inspect** under Remote Target to connect to the debugger.

## VS Code Debugging

Create a `.vscode/launch.json` in your project to enable one-click debugging from VS Code:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug qavajs",
            "program": "${workspaceFolder}/node_modules/.bin/qavajs",
            "args": ["run", "--config", "config.ts"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Debug current feature",
            "program": "${workspaceFolder}/node_modules/.bin/qavajs",
            "args": ["run", "--config", "config.ts", "${file}"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen"
        }
    ]
}
```

Set breakpoints in your step definitions by clicking the gutter in VS Code, then start the **Debug qavajs** configuration.

## Slowing Down Execution

For Playwright, add `slowMo` to the capabilities to slow down each action (useful for watching test execution):

```typescript
browser: {
    capabilities: {
        browserName: 'chromium',
        launchOptions: {
            slowMo: 500 // milliseconds between actions
        }
    }
}
```

## Pausing on Failure (Playwright)

Use `page.pause()` in a custom step or a tagged `After` hook to open the Playwright Inspector on failure:

```typescript
import { After } from '@qavajs/core';

After({ tags: '@debug' }, async function() {
    if (this.result?.status === 'FAILED') {
        await this.playwright.page.pause();
    }
});
```

Run Playwright in headed mode with the inspector:

```bash
PWDEBUG=1 npx qavajs run --tags "@debug"
```

## Running in Headed Mode

Playwright runs headless by default. To watch the browser during a test run, set `headless: false`:

```typescript
browser: {
    capabilities: {
        browserName: 'chromium',
        launchOptions: {
            headless: false
        }
    }
}
```

## Screenshots on Failure

Attach a screenshot to the report on every failed scenario:

```typescript
import { After } from '@qavajs/core';

After(async function() {
    if (this.result?.status === 'FAILED') {
        const screenshot = await this.playwright.page.screenshot({ fullPage: true });
        this.attach(screenshot, 'image/png');
    }
});
```

The screenshot will be embedded in HTML reports that support attachments (e.g., `@qavajs/html-formatter`).

## Accessing the World in Custom Steps

When debugging a failing step, inspect values using `this.getValue` and log them:

```typescript
import { When } from '@qavajs/core';

When('I debug memory key {string}', async function(key: string) {
    const value = await this.getValue(key);
    console.log(`Memory[${key}] =`, value);
});
```

## Useful Environment Variables

| Variable | Effect |
|---|---|
| `PWDEBUG=1` | Opens Playwright Inspector and runs headed |
| `DEBUG=*` | Enables verbose debug output from many Node.js libraries |
| `NODE_OPTIONS=--inspect-brk` | Enables the Node.js debugger on startup |
