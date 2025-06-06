---
sidebar_position: 2
---

# @qavajs/steps-wdio
Step library to work with webdriverio using DSL page object

## Installation
```
npm install @qavajs/steps-wdio
```
## Configuration
wdio steps provide additional configuration properties

| Name         | Type     | Description                                                                  | Default |
|--------------|----------|------------------------------------------------------------------------------|---------|
| `browser`    | `object` | object describing wdio config                                                | `{}`    |
| `pageObject` | `object` | instance of page object definitions  [(page object)](Guides/page-object.mdx) | `{}`    |

```typescript
import App from './page_object';
export default {
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        timeout: {
            present: 10000,
            visible: 20000,
            clickable: 15000,
            page: 10000,
            implicit: 0, //wdio implicit wait for element,
            element: 2000 ,//timeout to element to be accesible,
            value: 5000, // expect value timeout
            valueInterval: 500 //expect value interval
        },
        capabilities: {
            browserName: 'chrome'
        }
    },
    pageObject: App
}
```

## Screenshot
@qavajs/steps-wdio has build-in capability to take screenshot on particular event.
- onFail
- beforeStep
- afterStep

```typescript
export default {
    browser: {
        screenshot: ['onFail']
    }
}

```

## Snapshot
@qavajs/steps-wdio has build-in capability to take snapshot on particular event.
- onFail
- beforeStep
- afterStep

```typescript
export default {
    browser: {
        snapshot: ['onFail']
    }
}
```

## Reuse Session
_reuseSession_ flag allows to share driver session between tests. Browser will not be closed automatically after test.

```typescript
export default {
    browser: {
        reuseSession: true
    }
}

```

## Parameter Types
### `wdioLocator`
Resolves to playwright locator

### `wdioCondition` 
condition of element to wait (can be negated with _not_) 
- to be visible
- to be present
- to be invisible
- to be enabled
- to be disabled
- to be in viewport

### `wdioTimeout`
optional timeout that can be passed to wait steps _(timeout: x)_, where x timeout in milliseconds

### `wdioMouseButton`
mouse button to interact
- left
- right
- middle

## Context variables
@qavajs/steps-wdio exposes following world variables

| variable         | type             | description                          |
|------------------|------------------|--------------------------------------|
| `this.browser`   | `Browser`        | browser instance                     |
| `this.driver`    | `Browser`        | browser instance (alias for browser) |

## Action Steps

### I open \{string} url

Opens provided url

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
|  url  | string | url to navigate |

```gherkin
When I open 'https://google.com' url
```
---
### I type \{string} to \{string}

Type text to element

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
| alias | string | element to type |
| value | string |  value to type  |

```gherkin
When I type 'wikipedia' to 'Google Input'
```
---
### I click \{string}( )\{wdioDisableActionabilityCheck}

Click element

|    param     |        type        |        description         |
|:------------:|:------------------:|:--------------------------:|
|    alias     |       string       |      element to click      |
| disable wait | (optional) boolean | disable actionability wait |
```gherkin
When I click 'Google Button'
When I click 'Google Button' (disable actionability wait)
```
---
### I double click \{string}( )\{wdioDisableActionabilityCheck}

Double click element

|    param     |        type        |        description         |
|:------------:|:------------------:|:--------------------------:|
|    alias     |       string       |      element to click      |
| disable wait | (optional) boolean | disable actionability wait |
```gherkin
When I double click 'Input Field'
When I double click 'Input Field' (disable actionability wait)
```
---
### I right click \{string}( )\{wdioDisableActionabilityCheck}

Right click element

|    param     |        type        |        description         |
|:------------:|:------------------:|:--------------------------:|
|    alias     |       string       |      element to click      |
| disable wait | (optional) boolean | disable actionability wait |

```gherkin
When I right click 'User Icon'
When I right click 'User Icon' (disable actionability wait) 
```
---
### I clear \{string}

Clear element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | element to clear |

```gherkin
When I clear 'Search Input'
```
---
### I click \{string} text in \{string} collection

Click on element with desired text in collection

|    param     |  type  |  description  |
|:------------:|:------:|:-------------:|
| expectedText | string | text to click |
|    alias     | string |  collection   |

```gherkin
When I click 'google' text in 'Search Engines' collection
```

---
### I switch to parent frame

Switch to parent frame
```gherkin
When I switch to parent frame
```

---
### I switch to \{int} frame

Switch to frame by index

| param |  type  |      description      |
|:-----:|:------:|:---------------------:|
| index | number | frame index to switch |

```gherkin
When I switch to 2 frame
```

---
### I switch to \{string} frame

Switch to frame by page object alias

| param |  type  |       description        |
|:-----:|:------:|:------------------------:|
| alias | string | Iframe page object alias |

```gherkin
When I switch to 'Checkout Iframe' frame
```

---
### I switch to \{int} window

Switch to window by index

| param |  type  |      description       |
|:-----:|:------:|:----------------------:|
| index | number | window index to switch |

```gherkin
When I switch to 2 window
```

---
### I switch to \{string} window

Switch to window by matcher

|  param  |  type  |          description          |
|:-------:|:------:|:-----------------------------:|
| matcher | string | window matcher (url or title) |

```gherkin
When I switch to 'google.com' window
```
   
---
### I open new tab

Open new browser tab
```gherkin
When I open new tab
```
 
---
### I close current tab

Close current browser tab
```gherkin
When I close current tab
```

---
### I refresh page

Refresh page
```gherkin
When I refresh page
```

---
### I press \{string} key

Press key

| param |  type  | description  |
|:-----:|:------:|:------------:|
|  key  | string | key to press |

```gherkin
When I press 'Enter' key
```

---
### I press \{string} key \{int} time(s)

Press button given number of times

| param  |  type  |   description   |
|:------:|:------:|:---------------:|
|  key   | string |  key to press   |
| number | number | number of times |
```gherkin
I press 'Enter' key 5 times // for selenium
I press '$Enter' key 4 times // for devtools $Enter is memory value String.fromCharCode(13)
```

---
### I hover over \{string}

Hover over element

| param |  type  |      description      |
|:-----:|:------:|:---------------------:|
| alias | string | element to hover over |

```gherkin
When I hover over 'Google Button'
```

---
### I select \{string} option from \{string} dropdown

Select option with certain text from select element

| param  |  type  |   description    |
|:------:|:------:|:----------------:|
| option | string | option to select |
| alias  | string | alias of select  |

```gherkin
When I select '1900' option from 'Registration Form > Date Of Birth'
When I select '$dateOfBirth' option from 'Registration Form > Date Of Birth' dropdown
```
  
---
### I select \{int}(st|nd|rd|th) option from \{string} dropdown

Select option with certain index from select element

|    param    |  type  |        description        |
|:-----------:|:------:|:-------------------------:|
| optionIndex | number | index of option to select |
|    alias    | string |      alias of select      |

```gherkin
When I select 1 option from 'Registration Form > Date Of Birth' dropdown
```

---
### I click \{wdioBrowserButton} button

Click browser button

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| button | string | browser button (back, forward) |

```gherkin
When I click back button
When I click forward button
```

---
### I upload \{string} file to \{string}

Provide file url to upload input

| param |  type  |      description       |
|:-----:|:------:|:----------------------:|
| alias | string | element to upload file |
| value | string |       file path        |

```gherkin
When I upload '/folder/file.txt' file to 'File Input'
```

---
### I scroll to \{string}

Scroll to element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | alias of element |

```gherkin
When I scroll to 'Element'
```

---
### I scroll by \{string}

Scroll by offset

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| offset | string | offset string in 'x, y' format |

```gherkin
When I scroll by '0, 100'
```

---
### I scroll by \{string} in \{string}

Scroll by offset in element

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| offset | string | offset string in 'x, y' format |
| alias  | string |        alias of element        |

```gherkin
When I scroll by '0, 100' in 'Overflow Container'
```
_________________________

---
### I will wait for alert/dialog

Start listening for dialog

```gherkin
When I will wait for dialog
```

---
### I accept alert

Accepts an alert

```gherkin
When I accept alert
```
_________________________
### I dismiss alert

Dismisses an alert

```gherkin
When I dismiss alert
```
_________________________
### I type \{string} to alert

Type a text to alert

| param |  type  |  description  |
|:-----:|:------:|:-------------:|
| value | string | value to type |

```gherkin
When I type 'Alerts are' to alert
When I type 'not a good practice' to alert
When I type 'nowadays' to alert
```
    
-------------------------
### I drag and drop \{string} in \{string}

Drag&Drop one element to another

|    param     |  type  |   description   |
|:------------:|:------:|:---------------:|
| elementAlias | string | element to drop |
| targetAlias  | string |     target      |

```gherkin
When I drag and drop 'Bishop' to 'E4'
```

_________________________
### I define \{string} as \{string} locator

Register selector as page object

|    param    |  type  |                description                |
|:-----------:|:------:|:-----------------------------------------:|
| selectorKey | string |           selector to register            |
|  aliasKey   | string |             alias of element              |

```gherkin
When I define '#someId' as 'My Button' locator
And I click 'My Button'
When I define 'li.selected' as 'Selected Items' locator
And I expect number of element in 'Selected Items' collection to equal '3'
```

-------------------------
### I press \{wdioMouseButton} mouse button

Press mouse button

| param  |  type  |              description              |
|:------:|:------:|:-------------------------------------:|
| button | string | button to press (left, right, middle) |

```gherkin
When I press left mouse button
```

-------------------------
### I release \{wdioMouseButton} mouse button

Release mouse button

| param  |  type  |               description               |
|:------:|:------:|:---------------------------------------:|
| button | string | button to release (left, right, middle) |

```gherkin
When I release left mouse button
```

-------------------------
### I move mouse to \{string}

Move mouse to coordinates

|    param    |  type  |       description        |
|:-----------:|:------:|:------------------------:|
| coordinates | string | x, y coordinates to move |

```gherkin
When I move mouse to '10, 15'
```

-------------------------
### I scroll mouse wheel by \{string}

Scroll mouse wheel by x, y offset

|    param    |  type  |      description      |
|:-----------:|:------:|:---------------------:|
| coordinates | string | x, y offset to scroll |

```gherkin
When I scroll mouse wheel by '0, 15'
```

-------------------------
### I hold down \{string} key

Press and hold keyboard key

| param |  type  | description  |
|:-----:|:------:|:------------:|
|  key  | string | key to press |

```gherkin
When I hold down 'Q' key
```

-------------------------
### I release \{string} key

Release keyboard key

| param |  type  |  description   |
|:-----:|:------:|:--------------:|
|  key  | string | key to release |

```gherkin
When I release 'Q' key
```

---
### I force click \{string}

Force click element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | element to click |

```gherkin
When I force click 'Google Button'
```
---

## Validation Steps

---
### I expect \{string} \{wdioConditionWait}

Verify that element satisfies certain condition

|     param     |  type  |        description         |             example              |
|:-------------:|:------:|:--------------------------:|:--------------------------------:|
|     alias     | string | element to check condition |           Search Input           |
| conditionWait | string | function to wait condition | to be visible, not to be present |

```gherkin
Then I expect 'Header' to be visible
Then I expect 'Loading' not to be present
Then I expect 'Search Bar > Submit Button' to be clickable
```

---
### I expect number of elements in \{string} collection \{validation} \{string}

Verify that number of element in collection satisfies condition

|     param     |  type  |          description          |                example                |
|:-------------:|:------:|:-----------------------------:|:-------------------------------------:|
|  collection   | string | collection to check condition |            Search Results             |
|  validation   | string | function to verify condition  | to be equal, to be above, to be below |
| expectedValue | string |        expected value         |                                       |

```gherkin
Then I expect number of elements in 'Search Results' collection to be equal '50'
Then I expect number of elements in 'Search Results' collection to be above '49'
Then I expect number of elements in 'Search Results' collection to be below '51'
```

---
### I expect text of \{string} \{validation} \{string}

Verify that text of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|     alias     | string | element to check condition |   Label, Search Result (1) > Title    |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect text of 'Search Result (1)' to be equal 'google'
Then I expect text of 'Search Result (1)' to be equal '$firstResult'
```
---
### I expect value of \{string} \{playwrightValidation} \{string}

Verify that value of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|     alias     | string | element to check condition |           Input, Text Area            |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

```gherkin
Then I expect value of 'Input' to be equal 'google'
Then I expect value of 'Textarea (1)' to be equal '$firstResult'
```
---
### I expect \{string} property of \{string} \{validation} \{string}

Verify that property of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   property    | string |  property check condition  |    value, href, checked, innerHTML    |
|     alias     | string | element to check condition |   Label, Search Result (1) > Title    |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect 'value' property of 'Search Input' to be equal 'text'
Then I expect 'innerHTML' property of 'Label' to contain '<b>'
Then I expect 'value' property of 'Search Input' to be equal '$inputText'
```
---
### I expect \{string} attribute of \{string} \{validation} \{string}

Verify that attribute of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   attribute   | string | attribute check condition  |             href, checked             |
|     alias     | string | element to check condition |   Label, Search Result (1) > Title    |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect 'href' attribute of 'Home Link' to contain '/home'
Then I expect 'href' attribute of 'Home Link' to be equal '$url'
```

---
### I expect current url \{validation} \{string}

Verify that current url satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect current url contains 'wikipedia'
Then I expect current url equals 'https://wikipedia.org'
```

---
### I expect page title \{validation} \{string}

Verify that page title satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect page title equals 'Wikipedia'
```

---
### I expect every element in \{string} collection \{wdioConditionWait}

Verify that all elements in collection satisfy condition

|   param   |  type  |     description     |           example            |
|:---------:|:------:|:-------------------:|:----------------------------:|
|   alias   | string | alias of collection |        Search Results        |
| condition | string |  condition to wait  | to be visible, to be present |
```gherkin
Then I expect every element in 'Header > Links' collection to be visible
Then I expect every element in 'Loading Bars' collection not to be present
```

---
### I expect text of every element in \{string} collection \{validation} \{string}

Verify that all texts in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |
```gherkin
Then I expect text of every element in 'Search Results' collection to be equal 'google'
Then I expect text of every element in 'Search Results' collection does not contain 'yandex'
```

---
### I expect \{string} attribute of every element in \{string} collection \{validation} \{string}

Verify that all particular attributes in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|   attribute   | string |  attribute to get   |             href, checked             |
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |
```gherkin
Then I expect 'href' attribute of every element in 'Search Results' collection to contain 'google'
```

---
### I expect \{string} property of every element in \{string} collection \{validation} \{string}

Verify that all particular properties in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|   attribute   | string |  attribute to get   |             href, checked             |
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |
```gherkin
Then I expect 'href' property of every element in 'Search Results' collection to contain 'google'
```

### I expect \{string} css property of \{string} \{validation} \{string}

Verify that css property of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   property    | string |  property check condition  |           color, font-size            |
|     alias     | string | element to check condition |   Label, Search Result (1) > Title    |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |
```gherkin
Then I expect 'color' css property of 'Search Input' to be equal 'rgb(42, 42, 42)'
Then I expect 'font-family' css property of 'Label' to contain 'Fira'
```

### I expect text of alert \{validation} \{string}

Verify that text of an alert meets expectation

|     param     |  type  |         description          |                example                |
|:-------------:|:------:|:----------------------------:|:-------------------------------------:|
|  validation   | string | function to verify condition | to be equal, to be above, to be below |
| expectedValue | string |       expected result        |                                       |
```gherkin
Then I expect text of alert does not contain 'coffee'
Then I expect text of alert does not contain 'hello world'
Then I expect text of alert does not contain 'Are you sure you want to leave this page?'
```

## Memory Steps
 
---
### I save text of \{string} as \{string}

Save text of element to memory

| param |  type  |     description      |             example              |
|:-----:|:------:|:--------------------:|:--------------------------------:|
| alias | string | element to get value | Label, Search Result (1) > Title |
|  key  | string |  key to store value  |                                  |
```gherkin
When I save text of 'Search Result (1)' as 'firstSearchResult'
```
---
### I save \{string} property of \{string} as \{string}

Save property of element to memory

|  param   |  type  |     description      |             example              |
|:--------:|:------:|:--------------------:|:--------------------------------:|
| property | string |  property to store   | value, href, checked, innerHTML  |
|  alias   | string | element to get value | Label, Search Result (1) > Title |
|   key    | string |  key to store value  |                                  |

```gherkin
When I save 'checked' property of 'Checkbox' as 'checked'
When I save '$prop' property of 'Checkbox' as 'checked'
```
---
### I save \{string} attribute of \{string} as \{string}

Save attribute of element to memory

|   param   |  type  |     description      |             example              |
|:---------:|:------:|:--------------------:|:--------------------------------:|
| attribute | string |  attribute to store  |          href, checked           |
|   alias   | string | element to get value | Label, Search Result (1) > Title |
|    key    | string |  key to store value  |                                  |
```gherkin
When I save 'href' attribute of 'Link' as 'linkHref'
When I save '$prop' attribute of 'Link' as 'linkHref'
```
---
### I save number of elements in \{string} collection as \{string}

Save number of elements in collection to memory

|   param    |  type  |       description       |    example     |
|:----------:|:------:|:-----------------------:|:--------------:|
| collection | string | collection to get value | Search Results |
|    key     | string |   key to store value    |                |

```gherkin
When I save number of elements in 'Search Results' collection as 'numberOfSearchResults'
```

---
### I save text of every element of \{string} collection as \{string}

Save array of texts of collection to memory

| param |  type  |       description       |    example     |
|:-----:|:------:|:-----------------------:|:--------------:|
| alias | string | collection to get value | Search Results |
|  key  | string |   key to store value    |                |

```gherkin
When I save text of every element of 'Search Results' collection as 'searchResults'
```

---
### I save \{string} attribute of every element of \{string} collection as \{string}

Save array of attributes of collection to memory

|   param   |  type  |       description       |    example     |
|:---------:|:------:|:-----------------------:|:--------------:|
| attribute | string | attribute to get value  | checked, href  |
|   alias   | string | collection to get value | Search Results |
|    key    | string |   key to store value    |                |

```gherkin
When I save 'checked' attribute of every element of 'Search > Checkboxes' collection as 'checkboxes'
```

---
### I save \{string} property of every element of \{string} collection as \{string}

Save array of properties of collection to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
| property | string |  property to get value  |      href      |
|  alias   | string | collection to get value | Search Results |
|   key    | string |   key to store value    |                |

```gherkin
When I save 'href' property of every element of 'Search Results' collection as 'hrefs'
```

---
### I save current url as \{string}

Save current url to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
|   key    | string |   key to store value    |                |

```gherkin
When I save current url as 'currentUrl'
```
 
---
### I save page title as \{string}

Save current page title to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
|   key    | string |   key to store value    |                |

```gherkin
When I save page title as 'currentTitle'
```

---
### I save screenshot as \{string}

Save page screenshot into memory

| param |  type  |    description     |
|:-----:|:------:|:------------------:|
|  key  | string | key to store value |

```gherkin
When I save screenshot as 'screenshot'
```

---
### I save screenshot of \{string} as \{string}

Save element screenshot into memory

| param |  type  |        description        |
|:-----:|:------:|:-------------------------:|
|  key  | string |    key to store value     |
| alias | string | element to get screenshot |
```gherkin
When I save screenshot of 'Element' as 'screenshot'
```

---
### I save \{string} css property of \{string} as \{string}

Save css property of element to memory

|  param   |  type  |     description      |             example              |
|:--------:|:------:|:--------------------:|:--------------------------------:|
| property | string |  property to store   |   background-color, font-size    |
|  alias   | string | element to get value | Label, Search Result (1) > Title |
|   key    | string |  key to store value  |                                  |

```gherkin
When I save 'color' css property of 'Checkbox' as 'checkboxColor'
When I save '$propertyName' property of 'Checkbox' as 'checkboxColor'
```

---
### I save bounding rect of \{string} as \{string}

Save bounding client rect to memory
https://developer.mozilla.org/en-US/docs/Web/API/DOMRect

| param |  type  |         description          |
|:-----:|:------:|:----------------------------:|
| alias | string | element to get bounding rect |
|  key  | string |      key to store value      |
```gherkin
When I save bounding rect of 'Node' as 'boundingRect'
Then I expect '$boundingRect.width' to equal '42'
```

## Wait Steps

---
### I wait \{int} ms

Wait for a specified number of milliseconds

| param |  type  | description  |
|:-----:|:------:|:------------:|
|  ms   | number | milliseconds |
```gherkin
When I wait 1000 ms
```

---
### I wait for alert
Wait for alert to pop up
```gherkin
When I wait for alert
```

-------------------------
### I refresh page until \{string} \{wdioConditionWait}( )\{wdioTimeout}

Refresh page until element matches condition

|   param   |       type        |       description       |
|:---------:|:-----------------:|:-----------------------:|
|   alias   |      string       |      element alias      |
| condition |      string       |    condition to wait    |
|  timeout  | number (optional) | timeout in milliseconds |

```gherkin
When I refresh page until 'Internal Server Error Box' to be visible
When I refresh page until 'Submit Button' to be enabled
When I refresh page until 'Place Order Button' to be clickable (timeout: 3000)
```
-------------------------
 
### I refresh page until text of \{string} \{validation} \{string}( )\{wdioTimeout}

Refresh page until element text matches condition

|   param   |       type        |       description       |
|:---------:|:-----------------:|:-----------------------:|
|   alias   |      string       |      element alias      |
| condition |      string       |    condition to wait    |
| expected  |      string       |     expected value      |
|  timeout  | number (optional) | timeout in milliseconds |

```gherkin
When I refresh page until text of 'Order Status' to be equal 'Processing'
When I refresh page until text of 'Currency' not contain '$'
When I refresh page until text of 'My Salary' to match '/5\d{3,}/' (timeout: 3000)
```
-------------------------

## Cookie Steps

---
### I set \{string} cookie as \{string}

Set cookie

| param  |  type  | description  |
|:------:|:------:|:------------:|
| cookie | string | cookie name  |
| value  | string | value to set |
```gherkin
When I set 'userID' cookie 'user1'
When I set 'userID' cookie '$userIdCookie'
```
   
---
### I save value of \{string} cookie as \{string}

Save cookie value to memory

| param  |  type  | description |
|:------:|:------:|:-----------:|
| cookie | string | cookie name |
|  key   | string | memory key  |
```gherkin
When I save value of 'auth' cookie as 'authCookie'
```

## Local/Session Storage Steps

---
### I set \{string} \{word} storage value as \{string}

Set value of local/session storage

|    param    |  type  |              description               |
|:-----------:|:------:|:--------------------------------------:|
| storageKey  | string | local/session storage key to set value |
| storageType |  word  |    storage type (local or session)     |
|    value    | string |              value to set              |
```gherkin
When I set 'username' local storage value as 'user1'
When I set '$sessionStorageKey' session storage value as '$sessionStorageValue'
```

---
### I save value of \{string} \{word} storage as \{string}

Set value of local/session storage

|    param    |  type  |              description               |
|:-----------:|:------:|:--------------------------------------:|
| storageKey  | string | local/session storage key to set value |
| storageType |  word  |    storage type (local or session)     |
|     key     | string |               memory key               |
```gherkin
When I save value of 'username' local storage as 'localStorageValue'
When I save value of '$sessionStorageKey' session storage value as 'sessionStorageValue'
```

## Mobile Steps

---
### I tap \{string}
Support: Android, iOS

Tap element

| param |  type  |  description   |
|:-----:|:------:|:--------------:|
| alias | string | element to tap |

```gherkin
When I tap 'Google Button'
```

---
### I shake device
Support: Android, iOS

Shake device
```gherkin
When I shake device
```
          
---
### I perform touch action: [DataTable]
Support: Android, iOS

Perform touch action

- press and move to accept x and y percentages of current viewport
- wait accepts milliseconds
- release doesn't accept any params

|    param     |   type    |                                       description                                        |
|:------------:|:---------:|:----------------------------------------------------------------------------------------:|
| actionsTable | DataTable | data table of actions and params (see https://webdriver.io/docs/api/appium#touchperform) |
```gherkin
When I perform touch action:
  | press   | 90, 80 |
  | wait    | 200    |
  | moveTo  | 10, 80 |
  | release |        |
```

---
### I perform touch action \{string}
Support: Android, iOS

Perform touch action

|    param     |  type  |                                                   description                                                   |
|:------------:|:------:|:---------------------------------------------------------------------------------------------------------------:|
| actionsAlias | string | memory alias that resolves into array of action objects (see https://webdriver.io/docs/api/appium#touchperform) |

```gherkin
When I perform touch action '$actions'
```

## Execute Steps

---
### I execute \{string} function

Execute client function

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
```gherkin
When I execute '$fn' function # fn is function reference
When I execute 'window.scrollBy(0, 100)' function
```

---
### I execute \{string} function and save result as \{string}

Execute client function and save result into memory

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|  memoryKey  | string |    memory key to save value    |
```gherkin
When I execute '$fn' function and save result as 'result' # fn is function reference
When I execute 'window.scrollY' function and save result as 'scroll'
```

---
### I execute \{string} function on \{string}

Execute client function on certain element

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|    alias    | string |      target element alias      |
```gherkin
When I execute '$fn' function on 'Component > Element' # fn is function reference
When I execute 'arguments[0].scrollIntoView()' function on 'Component > Element'
```

---
### I execute \{string} function on \{string} and save result as \{string}

Execute client function on certain element

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|  memoryKey  | string |    memory key to save value    |
|    alias    | string |      target element alias      |
```gherkin
When I execute '$fn' function on 'Component > Element' and save result as 'innerText' # fn is function reference
When I execute 'arguments[0].innerText' function on 'Component > Element' and save result as 'innerText'
```

## Mock Steps

---
### I create mock for \{string} as \{string}

Create mock instance

|    param    |  type  |            description            |
|:-----------:|:------:|:---------------------------------:|
| urlTemplate | string |  minimatch url template to mock   |
|  memoryKey  | string | memory key to store mock instance |
```gherkin
When I create mock for '/yourservice/**' as 'mock1'
When I create mock for '$mockUrlTemplate' as 'mock1'
```

---
### I set \{string} mock to respond \{string} with: [multiline]

Add mocking rule to respond with desired status code and payload

|   param    |  type  |           description           |
|:----------:|:------:|:-------------------------------:|
|  mockKey   | string | memory key to get mock instance |
| statusCode | string |           status code           |
|    body    | string |          response body          |
```gherkin
When I create mock for '/yourservice/**' as 'myServiceMock'
And I set '$myServiceMock' mock to respond '200' with:
"""
{
    "status": "success"
}
"""
```

---
### I set \{string} mock to respond \{string} with \{string}

Add mocking rule to respond with desired status code and payload

|   param    |  type  |           description           |
|:----------:|:------:|:-------------------------------:|
|  mockKey   | string | memory key to get mock instance |
| statusCode | string |           status code           |
|    body    | string |          response body          |
```gherkin
When I create mock for '/yourservice/**' as 'myServiceMock'
And I set '$myServiceMock' mock to respond '200' with '$response'
```

---
### I set \{string} mock to abort with \{string} reason

Add mocking rule to abort request with certain reason

|  param  |  type  |                        description                         |
|:-------:|:------:|:----------------------------------------------------------:|
| mockKey | string |              memory key to get mock instance               |
| reason  | string | reason string see https://webdriver.io/docs/api/mock/abort |
```gherkin
When I create mock for '/yourservice/**' as 'myServiceMock'
And I set '$myServiceMock' mock to abort with 'Failed' reason
```

---
### I restore \{string} mock

Restore mock

|  param  |  type  |                        description                         |
|:-------:|:------:|:----------------------------------------------------------:|
| mockKey | string |              memory key to get mock instance               |
```gherkin
When I restore '$myServiceMock'
```

---
### I restore all mocks

Restore all mocks
```gherkin
When I restore all mocks
```

## Network Intercept Steps

---
### I create interception for \{string} as \{string}

Create interception for url

|   param   |  type  |             description             |
|:---------:|:------:|:-----------------------------------:|
| predicate | string | url or predicate function to listen |
|    key    | string |      key to save interception       |
```gherkin
When I create interception for '**/api/qavajs' as 'interception'
```

---
### I wait for \{string} response

Wait for interception event

|    param     |  type  |           description            |
|:------------:|:------:|:--------------------------------:|
| interception | string | memory key of interception event |
```gherkin
When I create interception for '**/api/qavajs' as 'interception'
And I wait for '$interception' response
```

---
### I save \{string} response as \{string}

Wait for interception event and save response to memory

|    param     |  type  |            description            |
|:------------:|:------:|:---------------------------------:|
| interception | string | memory key of interception event  |
|     key      | string | key to save interception response |
```gherkin
When I create interception for '**/api/qavajs' as 'interception'
When I save '$interception' response as 'response' # response will be instance of Response object
And I expect '$response.statusCode' to equal '200'
```

## Multi-browser Steps

---
### I open new browser as \{string}

Open new browser

|    param    |  type  | description  |
|:-----------:|:------:|:------------:|
| browserName | string | browser name |
```gherkin
When I open new browser as 'browser2'
```

---
### I switch to \{string} browser

Switch to other browser by name

|    param    |  type  | description  |
|:-----------:|:------:|:------------:|
| browserName | string | browser name |
```gherkin
When I open new browser as 'browser2'
And I switch to 'browser2' browser
And I switch to 'default' browser
```

---
### I close \{string} browser

Close browser

|    param    |  type  | description  |
|:-----------:|:------:|:------------:|
| browserName | string | browser name |
```gherkin
When I close to 'browser2' browser
```

---
### I set window size \{string}

Resize browser window

|   param    |  type  |                  description                  |
|:----------:|:------:|:---------------------------------------------:|
| windowSize | string | width and height in pixels separated by comma |

```gherkin
When I set window size '1440,900'
```

---
### I click \{string} coordinates in \{string}

Click a certain coordinate of an element

|    param    |  type  |             description             |
|:-----------:|:------:|:-----------------------------------:|
| coordinates | string | comma separated x and y coordinates |
|    alias    | string |          element to click           |

```gherkin
When I click '0,20' coordinates in 'Google Button'
```
