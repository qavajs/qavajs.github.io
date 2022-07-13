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
            '@qavajs/steps-config-loader',
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
## Parameter types

-------
### {element}
Type that resolves string selector to wdio element

usage:
```gherkin
When I click 'Login Form > Login Button'
```
In step definition it will be resolved into
corresponding element from page object
```javascript
When('I click {element}', async function (element: Element<'async'>) {
    await (await element).click();
});
```

-------
### {locator}
Type that resolves into function that returns wdio element

usage:
```gherkin
When I click 'Login Form > Login Button'
```
In step definition it will be resolved function that
returns wdio element. It helps to handle element
that dynamically created and removed in DOM.
```javascript
When('I click {locator}', async function (locator: Locator) {
    const element = await locator();
    await element.click();
});
```

-------
### {conditionWait}
Type that resolves into function
that perform wait for element certain condition like visibility, existing, etc

possible values:
* to be visible
* to be present
* to be clickable
* to be invisible

values can re reversed by adding _not_ before: e.g. not to be visible

usage:
```gherkin
When I wait until 'Header' to be visible
```
In step definition it will be resolved into function that
takes element and timeout and perform necessary wait
```javascript
When('I wait until {element} {conditionWait}', async function (element, wait) {
    await wait(await element, config.browser.timeout.page);
});
```

-------
### {valueWait}
Type that resolves into function
that perform wait of changing value provided in for of
get function

possible values:
* to be equal
* to contain
* to be above
* to be below
* to be greater than
* to be less than
* to have type

values can re reversed by adding _not_ before: not to be equal

usage:
```gherkin
When I wait until text of 'Header' to be equal 'Javascript'
```
In step definition it will be resolved into function that
takes function that returns changing value, expected value and timeout
```javascript
When(
    'I wait until text of {element} {valueWait} {text}',
    async function (element: Element<'async'>, wait: Function, expectedValue: any) {
        const getValue = async () => (await element).getText();
        await wait(getValue, expectedValue, config.browser.timeout.page);
    }
);
```

## Action Steps

### I open {text} url

Opens provided url

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
|  url  | string | url to navigate |
example:
```gherkin
   When I open 'https://google.com' url
```
---
### I type {text} to {element}

Type text to element

|  param  |  type   |   description   |
|:-------:|:-------:|:---------------:|
| element | Element | element to type |
|  value  | string  |  value to type  |
example:
```gherkin
   When I type 'wikipedia' to 'Google Input'
```
---
### I click {element}

Click element

|  param  |  type   |   description    |
|:-------:|:-------:|:----------------:|
| element | Element | element to click |
example:
```gherkin
   When I click 'Google Button'
```
---
### I clear {element}

Clear element

|  param  |  type   |   description    |
|:-------:|:-------:|:----------------:|
| element | Element | element to clear |
example:
```gherkin
   When I clear 'Search Input'
```

## Validation Steps

---
### I expect {element} {conditionWait}

Verify that element satisfies certain condition

|     param     |   type   |        description         |             example              |
|:-------------:|:--------:|:--------------------------:|:--------------------------------:|
|    element    | Element  | element to check condition |           Search Input           |
| conditionWait | Function | function to wait condition | to be visible, not to be present |
example:
```gherkin
    Then I expect 'Header' to be visible
    Then I expect 'Loading' not to be present
    Then I expect 'Search Bar > Submit Button' to be clickable
```

---
### I expect number of elements in {element} collection {validation} {text}

Verify that number of element in collection satisfies condition

|     param     |     type     |          description          |                example                |
|:-------------:|:------------:|:-----------------------------:|:-------------------------------------:|
|  collection   | ElementArray | collection to check condition |            Search Results             |
|  validation   |   Function   | function to verify condition  | to be equal, to be above, to be below |
| expectedValue |    number    |        expected value         |                                       |
example:
```gherkin
    Then I expect number of elements in 'Search Results' collection to be equal '50'
    Then I expect number of elements in 'Search Results' collection to be above '49'
    Then I expect number of elements in 'Search Results' collection to be below '51'
```

---
### I expect text of {element} {validation} {text}

Verify that text of element satisfies condition

|     param     |   type   |        description         |                example                |
|:-------------:|:--------:|:--------------------------:|:-------------------------------------:|
|    element    | Element  | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | Function |      validation type       | to be equal, to contain, not to match |
| expectedValue |  string  |      expected result       |                                       |

example:
```gherkin
   Then I expect text of '#1 of Search Results' to be equal 'google'
```
---
### I expect {text} property of {element} {validation} {text}

Verify that property of element satisfies condition

|     param     |   type   |        description         |                example                |
|:-------------:|:--------:|:--------------------------:|:-------------------------------------:|
|   property    |  string  |  property check condition  |    value, href, checked, innerHTML    |
|    element    | Element  | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | Function |      validation type       | to be equal, to contain, not to match |
| expectedValue |  string  |      expected result       |                                       |

example:
```gherkin
    Then I expect 'value' property of 'Search Input' to be equal 'text'
    Then I expect 'innerHTML' property of 'Label' to contain '<b>'
```
---
### I expect {text} attribute of {element} {validation} {text}

Verify that attribute of element satisfies condition

|     param     |   type   |        description         |                example                |
|:-------------:|:--------:|:--------------------------:|:-------------------------------------:|
|   attribute   |  string  | attribute check condition  |             href, checked             |
|    element    | Element  | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | Function |      validation type       | to be equal, to contain, not to match |
| expectedValue |  string  |      expected result       |                                       |

example:
```gherkin
    Then I expect 'href' attribute of 'Home Link' to contain '/home''
```

## Memory Steps
 
---
### I save text of {element} as {string}

Save text of element to memory

|  param  |  type   |     description      |               example               |
|:-------:|:-------:|:--------------------:|:-----------------------------------:|
| element | Element | element to get value | Label, #1 of Search Results > Title |
|   key   | string  |  key to store value  |                                     |

example:
```gherkin
   When I save text of '#1 of Search Results' as 'firstSearchResult'
```
---
### I save {text} property of {element} as {string}

Save property of element to memory

|  param   |  type   |     description      |               example               |
|:--------:|:-------:|:--------------------:|:-----------------------------------:|
| property | string  |  property to store   |   value, href, checked, innerHTML   |
| element  | Element | element to get value | Label, #1 of Search Results > Title |
|   key    | string  |  key to store value  |                                     |


example:
```gherkin
    When I save 'checked' property of 'Checkbox' as 'checked'
    When I save '$prop' property of 'Checkbox' as 'checked'
```
---
### I save {text} attribute of {element} as {string}

Save attribute of element to memory

|   param   |  type   |     description      |               example               |
|:---------:|:-------:|:--------------------:|:-----------------------------------:|
| attribute | string  |  attribute to store  |            href, checked            |
|  element  | Element | element to get value | Label, #1 of Search Results > Title |
|    key    | string  |  key to store value  |                                     |

example:
```gherkin
    When I save 'href' attribute of 'Link' as 'linkHref'
    When I save '$prop' attribute of 'Link' as 'linkHref'
```
---
### I save number of elements in {element} collection as {string}

Save number of elements in collection to memory

|   param    |     type     |       description       |                example                |
|:----------:|:------------:|:-----------------------:|:-------------------------------------:|
| collection | ElementArray | collection to get value |            Search Results             |
|    key     |    string    |   key to store value    |                                       |
example:
```gherkin
    When I save number of elements in 'Search Results' as 'numberOfSearchResults'
```

## Wait Steps

---
### I wait until {element} {conditionWait} {text}

Verify that text of element satisfies condition

|   param    |  type   |    description     |
|:----------:|:-------:|:------------------:|
|  element   | Element |  element to clear  |
| validation | string  |  validation type   |
|   value    | string  |  expected result   |

example:
```gherkin
   Then I expect text of '#1 of Search Results' to be equal 'google'
```
---
### I expect text of {element} element {validation} {text}

Verify that text of element satisfies condition

|   param    |  type   |    description     |
|:----------:|:-------:|:------------------:|
|  element   | Element |  element to clear  |
| validation | string  |  validation type   |
|   value    | string  |  expected result   |

example:
```gherkin
   Then I expect text of '#1 of Search Results' to be equal 'google'
```
