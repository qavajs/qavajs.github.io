---
sidebar_position: 8
---

# @qavajs/steps-lighthouse 
Steps to perform lighthouse audit on top of playwright and webdriverio drivers.

## Installation
```
npm install @qavajs/steps-lighthouse
```

## Configuration
```typescript
export default {
    require: [
        'node_modules/@qavajs/steps-wdio/index.js', //corresponding driver library should be imported first
        'node_modules/@qavajs/steps-lighthouse/index.js'
    ],
    format: [
        ['@qavajs/html-formatter', 'report.html']
    ],
}
```

## Usage
Module provides `I perform lighthouse audit as save results as {variable}`
step that performs audit, attaches html report and save results as \{variable} variable

```gherkin
Feature: Lighthouse

  Scenario: perform lighthouse audit
    When I open 'https://qavajs.github.io/' url
    # with default config
    And I perform lighthouse audit and save results as 'lh'
    # with provided config https://github.com/GoogleChrome/lighthouse/blob/main/docs/configuration.md
    And I perform lighthouse audit and save results as 'lh':
    """
    {
        "extends": "lighthouse:default",
        "settings": {
            "formFactor": "desktop",
            "screenEmulation": {
                "mobile": false,
                "width": 1350,
                "height": 940,
                "deviceScaleFactor": 1,
                "disabled": false
            }
        }
    }
    """
```
