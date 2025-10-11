---
sidebar_position: 7
---

# @qavajs/steps-accessibility-ea
Steps to perform accessibility checks using accessibility-checker library.
Library can work on top of playwright and webdriverio drivers

Demo project:
- https://github.com/qavajs/demo/tree/main/accessibility-ea

## Installation
```bash
npm install @qavajs/steps-accessibility-ea
```

## Configuration
```javascript
export default {
    require: [
        'node_modules/@qavajs/steps-wdio/index.js', //corresponding driver library should be imported first
        'node_modules/@qavajs/steps-accessibility-ea/index.js'
    ],
    format: [
        ['@qavajs/html-formatter', 'report.html']
    ],
}
```

## Usage
Lib provides `I perform accessibility check` step that creates axe instance, performs checks and attach html report in base 64 format

```gherkin
Feature: Accessibility

  Scenario: perform accessibility check
    When I open 'https://qavajs.github.io/' url
    And I perform accessibility check
    And I perform accessibility check:
    """
    {
      "outputFormat": ["json", "html"]
    }
    """
```
