---
sidebar_position: 7
---
# @qavajs/steps-accessibility-ea

qavajs steps to perform accessibility checks using the [accessibility-checker](https://github.com/IBMa/equal-access/blob/master/accessibility-checker/src/README.md) (IBM Equal Access) library.
Works on top of both **Playwright** and **WebdriverIO** drivers.

## Installation

```
npm install @qavajs/steps-accessibility-ea
```

## Configuration

Import the library after the corresponding driver library in your qavajs config:

```javascript
export default {
    require: [
        'node_modules/@qavajs/steps-playwright/index.js', // or steps-wdio
        'node_modules/@qavajs/steps-accessibility-ea/index.js'
    ],
    format: [
        ['@qavajs/html-formatter', 'report.html']
    ],
}
```

## Steps

### Basic accessibility check

Runs an accessibility audit on the full page and fails if any issues at or above the configured `failLevels` are found. Attaches the report to the test output.

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check
```

### Configured accessibility check

Accepts a JSON options object to override [accessibility-checker configuration](https://github.com/IBMa/equal-access/blob/master/accessibility-checker/src/README.md#configuration) for this step only.

| Property | Type | Description |
|----------|------|-------------|
| `context` | `string` | CSS selector to scope the audit to a specific element |
| `outputFormat` | `string[]` | Report formats to generate (`html`, `json`, `csv`, `xlsx`, `disable`) |
| `failLevels` | `string[]` | Issue levels that cause the step to fail |
| `reportLevels` | `string[]` | Issue levels included in the report |

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check:
"""
{
  "context": "[aria-label='main navigation']",
  "outputFormat": ["html", "json"],
  "failLevels": ["violation"],
  "reportLevels": ["violation", "potentialviolation", "recommendation"]
}
"""
```

### Save results to memory

Stores the full report object in a memory variable for custom assertions. Does **not** throw on failures.

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check and save results as 'report'
Then I expect '$report.summary.counts.violation' to equal '0'
```

With options:

```gherkin
When I open 'https://example.com/' url
And I perform accessibility check and save results as 'report':
"""
{
  "outputFormat": ["html", "json"],
  "failLevels": []
}
"""
Then I expect '$report.summary.counts.violation' to equal '0'
```

## Step reference

| Step | Description |
|------|-------------|
| `I perform accessibility check` | Run audit on the full page; throw if fail levels exceeded |
| `I perform accessibility check:` + docstring | Run audit with options; throw if fail levels exceeded |
| `I perform accessibility check and save results as {value}` | Run audit; store results in memory variable |
| `I perform accessibility check and save results as {value}:` + docstring | Run audit with options; store results in memory variable |