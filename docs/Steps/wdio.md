---
sidebar_position: 1
---

# @qavajs/steps-wdio
Step library to work with webdriverio using DSL page object

`npm install @qavajs/steps-wdio`

```javascript
const App = require('./page_object');
module.exports = {
    default: {
        require: [
            '@qavajs/steps-wdio'
        ],
        browser: {
            timeout: {
                present: 10000,
                visible: 20000    
            },
            capabilities: {
                browserName: 'chrome'
            }
        },
        pageObject: new App()
    }
}
```

## Action Steps

### I open {string} url

Opens provided url

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
|  url  | string | url to navigate |
example:
```gherkin
   When I open 'https://google.com' url
```
---
### I type {string} to {string}

Type text to element

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
| alias | string | element to type |
| value | string |  value to type  |
example:
```gherkin
   When I type 'wikipedia' to 'Google Input'
```
---
### I click {string}

Click element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | element to click |
example:
```gherkin
   When I click 'Google Button'
```
---
### I clear {string}

Clear element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | element to clear |
example:
```gherkin
   When I clear 'Search Input'
```

## Validation Steps

---
### I expect {string} {wdioConditionWait}

Verify that element satisfies certain condition

|     param     |  type  |        description         |             example              |
|:-------------:|:------:|:--------------------------:|:--------------------------------:|
|     alias     | string | element to check condition |           Search Input           |
| conditionWait | string | function to wait condition | to be visible, not to be present |
example:
```gherkin
    Then I expect 'Header' to be visible
    Then I expect 'Loading' not to be present
    Then I expect 'Search Bar > Submit Button' to be clickable
```

---
### I expect number of elements in {string} collection {wdioValidation} {string}

Verify that number of element in collection satisfies condition

|     param     |  type  |          description          |                example                |
|:-------------:|:------:|:-----------------------------:|:-------------------------------------:|
|  collection   | string | collection to check condition |            Search Results             |
|  validation   | string | function to verify condition  | to be equal, to be above, to be below |
| expectedValue | string |        expected value         |                                       |
example:
```gherkin
    Then I expect number of elements in 'Search Results' collection to be equal '50'
    Then I expect number of elements in 'Search Results' collection to be above '49'
    Then I expect number of elements in 'Search Results' collection to be below '51'
```

---
### I expect text of {string} {wdioValidation} {string}

Verify that text of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|     alias     | string | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
   Then I expect text of '#1 of Search Results' to be equal 'google'
```
---
### I expect {string} property of {string} {wdioValidation} {string}

Verify that property of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   property    | string |  property check condition  |    value, href, checked, innerHTML    |
|     alias     | string | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
    Then I expect 'value' property of 'Search Input' to be equal 'text'
    Then I expect 'innerHTML' property of 'Label' to contain '<b>'
```
---
### I expect {string} attribute of {string} {wdioValidation} {string}

Verify that attribute of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   attribute   | string | attribute check condition  |             href, checked             |
|     alias     | string | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
    Then I expect 'href' attribute of 'Home Link' to contain '/home''
```

## Memory Steps
 
---
### I save text of {string} as {string}

Save text of element to memory

| param |  type  |     description      |               example               |
|:-----:|:------:|:--------------------:|:-----------------------------------:|
| alias | string | element to get value | Label, #1 of Search Results > Title |
|  key  | string |  key to store value  |                                     |

example:
```gherkin
   When I save text of '#1 of Search Results' as 'firstSearchResult'
```
---
### I save {string} property of {string} as {string}

Save property of element to memory

|  param   |  type  |     description      |               example               |
|:--------:|:------:|:--------------------:|:-----------------------------------:|
| property | string |  property to store   |   value, href, checked, innerHTML   |
|  alias   | string | element to get value | Label, #1 of Search Results > Title |
|   key    | string |  key to store value  |                                     |


example:
```gherkin
    When I save 'checked' property of 'Checkbox' as 'checked'
    When I save '$prop' property of 'Checkbox' as 'checked'
```
---
### I save {string} attribute of {string} as {string}

Save attribute of element to memory

|   param   |  type  |     description      |               example               |
|:---------:|:------:|:--------------------:|:-----------------------------------:|
| attribute | string |  attribute to store  |            href, checked            |
|   alias   | string | element to get value | Label, #1 of Search Results > Title |
|    key    | string |  key to store value  |                                     |

example:
```gherkin
    When I save 'href' attribute of 'Link' as 'linkHref'
    When I save '$prop' attribute of 'Link' as 'linkHref'
```
---
### I save number of elements in {string} collection as {string}

Save number of elements in collection to memory

|   param    |  type  |       description       |    example     |
|:----------:|:------:|:-----------------------:|:--------------:|
| collection | string | collection to get value | Search Results |
|    key     | string |   key to store value    |                |
example:
```gherkin
    When I save number of elements in 'Search Results' as 'numberOfSearchResults'
```

## Wait Steps

---
### I wait until {string} {wdioConditionWait} {string}

Wait for element condition

|   param    |  type  |   description   |
|:----------:|:------:|:---------------:|
|   alias    | string |     element     |
| validation | string | validation type |

example:
```gherkin
    When I wait until 'Header' to be visible
    When I wait until 'Loading' not to be present
    When I wait until 'Search Bar > Submit Button' to be clickable
```
---
### I wait until text of {string} element {wdioValueWait} {string}

Wait for element text condition

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
| alias | string |     element     |
| wait  | string | validation type |
| value | string | expected result |

example:
```gherkin
    When I wait until text of 'Header' to be equal 'Javascript'
    When I wait until text of 'Header' not to be equal 'Python'
```
---
### I wait until number of elements in {string} collection {wdioValueWait} {string}

Wait for collection length condition

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
| alias | string |   collection    |
| wait  | string | validation type |
| value | string | expected result |

example:
```gherkin
    When I wait until number of elements in 'Search Results' collection to be equal '50'
    When I wait until number of elements in 'Search Results' collection to be above '49'
    When I wait until number of elements in 'Search Results' collection to be below '51'
```
---
### I wait until {string} property of {string} {wdioValueWait} {string}

Wait for element property condition

|  param   |  type  |   description   |
|:--------:|:------:|:---------------:|
| property | string |    property     |
|  alias   | string |     element     |
|   wait   | string | validation type |
|  value   | string | expected result |

example:
```gherkin
    When I wait until 'value' property of 'Search Input' to be equal 'Javascript'
```
---
### I wait until {string} attribute of {string} {wdioValueWait} {string}

Wait for element property condition

|   param   |  type  |   description   |
|:---------:|:------:|:---------------:|
| attribute | string |    attribute    |
|   alias   | string |     element     |
|   wait    | string | validation type |
|   value   | string | expected result |

example:
```gherkin
    When I wait until 'href' attribute of 'Home Link' to be equal '/javascript'
```
