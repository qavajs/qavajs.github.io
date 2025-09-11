---
sidebar_position: 2
---

# @qavajs/soft-assertion

:::warning

`@qavajs/soft-assertion` is discouraged. 
Soft assertion functionality is now included into `@qavajs/core` module.
Please use built-in [softly](../intro.md#soft-validation) prefix

:::

Module that allow to use soft asserts in qavajs tests

## Installation
`npm install @qavajs/soft-assertion`

## Usage

Add module to requireModule.
```javascript
module.exports = {
    default: {
        requireModule: [
            '@qavajs/soft-assertion/index.js'
        ]
    }
}
```

Now you can use `softly` prefix before any expect.
```gherkin
Feature: Feature

  Scenario: verify soft assert
    # first step fails but other steps will not be skipped
    Then I softly expect '2' to equal '1'
    # pass
    And I expect '1' to equal '1'
    # fail
    And I expect '2' to equal '1'
    # skip
    And I expect '1' to equal '1'
```
