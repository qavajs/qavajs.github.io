---
sidebar_position: 7
---

# @qavajs/steps-accessibility

qavajs steps to perform accessibility checks using the [axe-core](https://github.com/dequelabs/axe-core) library.
Works on top of both **Playwright** and **WebdriverIO** drivers.

## Installation

```
npm install @qavajs/steps-accessibility
```

## Configuration

Import the library after the corresponding driver library in your qavajs config:

```javascript
export default {
    require: [
        'node_modules/@qavajs/steps-playwright/index.js', // or steps-wdio
        'node_modules/@qavajs/steps-accessibility/index.js'
    ],
    format: [
        ['@qavajs/html-formatter', 'report.html']
    ],
}
```

## Steps

### Basic accessibility check

Runs axe on the full page and fails if any violations are found. Attaches an HTML report to the test output.

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check
```

### Configured accessibility check

Passes a JSON options object to `axe.run`. Supports all [axe-core run options](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axerun), plus two extra properties:

| Property  | Type       | Description                                      |
|-----------|------------|--------------------------------------------------|
| `context` | `string[]` | CSS selectors to scope the analysis              |
| `saveAs`  | `string`   | File path to save the raw JSON results           |

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check:
"""
{
  "runOnly": ["wcag2a", "wcag2aa"],
  "context": ["main"],
  "saveAs": "results/report.json"
}
"""
```

### Save results to memory

Stores the full [axe results object](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#results-object) in a memory variable for custom assertions. Does **not** throw on violations.

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check and save results as 'axeReport'
Then I expect '$axeReport.violations.length' to equal '0'
```

With options:

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check and save results as 'axeReport':
"""
{
  "runOnly": ["wcag2a"]
}
"""
Then I expect '$axeReport.violations.length' to equal '0'
```

## Step reference

| Step | Description |
|------|-------------|
| `I perform accessibility check` | Run axe on the full page; throw if violations found |
| `I perform accessibility check:` + docstring | Run axe with options; throw if violations found |
| `I perform accessibility check and save results as {value}` | Run axe; store results in memory variable |
| `I perform accessibility check and save results as {value}:` + docstring | Run axe with options; store results in memory variable |