---
sidebar_position: 7
---

# @qavajs/steps-accessibility
Steps to perform accessibility checks using axe library.
Library can work on top of playwright and webdriverio drivers

## Installation
```
npm install @qavajs/steps-accessibility@1
```

## Config
```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-wdio/index.js', //corresponding driver library should be imported first
            'node_modules/@qavajs/steps-accessibility/index.js'
        ],
        /**
         * Axe configuration to customize axe instance define axe property which is a function that accepts AxeBuilder instance
         * more info:
         * https://www.npmjs.com/package/@axe-core/webdriverio
         * https://www.npmjs.com/package/@axe-core/playwright
         * @param {AxeBuilder} instance - instance of axe builder 
         * @return {AxeBuilder}
         */
        axe: function (instance) {
            return instance.withTags('wcag2a')
        },
        format: [
            '@qavajs/html-formatter:report.html'
        ],
    }
}
```

## Steps

---
### I perform accessibility check

Perform accessibility check and attach report

```gherkin
Feature: Accessibility

  Scenario: perform accessibility check
    When I open 'https://qavajs.github.io/' url
    And I perform accessibility check
```

