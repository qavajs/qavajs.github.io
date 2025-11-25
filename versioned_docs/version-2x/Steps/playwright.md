---
sidebar_position: 1
---

# @qavajs/steps-playwright

Step library to work with playwright using DSL page object

Demo projects: 
- https://github.com/qavajs/demo/tree/main/web-playwright-v2
- https://github.com/qavajs/demo/tree/main/web-playwright-esm-v2
- https://github.com/qavajs/demo/tree/main/sap-ui5

## Installation
```
npm install @qavajs/steps-playwright
```
## Configuration
Playwright steps provide a couple of additional configuration properties

| Name         | Type     | Description                                                                  | Default |
|--------------|----------|------------------------------------------------------------------------------|---------|
| `browser`    | `object` | object describing playwright config                                          | `{}`    |
| `pageObject` | `object` | instance of page object definitions  [(page object)](Guides/page-object.mdx) | `{}`    |

```typescript
import App from './page_object';

export default {
    require: [
        'node_modules/@qavajs/steps-playwright/index.js'
    ],
    browser: {
        timeout: {
            present: 10000,
            visible: 20000,
            page: 10000,
            value: 5000, // expect value timeout
            valueInterval: 500 //expect value interval  
        },
        capabilities: {
            browserName: 'chromium'
        }
    },
    pageObject: new App()
}
```

## Connect to playwright server
In order to connect to playwright server pass _wsEndpoint_ property in capabilities object
```typescript
export default {
    browser: {
        capabilities: {
            browserName: 'chromium',
            wsEndpoint: 'ws://127.0.0.1:60291/2bd48ce272de2b543e4c8c533f664b83'
        }
    },
}
```

## Connect to cdp endpoint
In order to connect to CDP endpoint pass _cdpEndpoint_ property in capabilities object
```typescript
export default {
    browser: {
        capabilities: {
            browserName: 'chromium',
            cdpEndpoint: 'http://localhost:9222/'
        }
    }
}
```

## Screenshot
@qavajs/steps-playwright can also take screenshot on particular event.

- onFail
- beforeStep
- afterStep

```typescript
export default {
    browser: {
        screenshot: {
            event: ['onFail'], //event to take screenshot
            fullPage: true // option to take full page screenshot (default false)
        }
    }
}
```

## Traces
@qavajs support capturing playwright traces. https://playwright.dev/docs/next/trace-viewer-intro

Supported events:
- onFail
- afterScenario

```typescript
export default {
    //...
    browser: {
        trace: {
            event: ['onFail'], // Events to save trace. Possible value onFail or afterScenario 
            dir: 'dirToStoreTraces', // Dir to store traces. Default - traces/
            attach: true, // Whether trace need to be attached to cucumber report. Default - false
            screenshots: true, // Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview. Default - true
            snapshots: true, // Whether to capture DOM and network activity
        }
    }
}
```

## Video
@qavajs supports video recording https://playwright.dev/docs/next/videos

Supported events:
- onFail
- afterScenario

```typescript
export default {
    //...
    browser: {
        video: {
            event: ['onFail'], // Events to save video. Possible value onFail or afterScenario 
            dir: 'video', // Dir to store video. Default is video/
            size: { width: 640, height: 480 }, // Video resolution
            attach: true // Define if trace need to be attached to cucumber report. Default false
        }
    }
}
```

## Reuse Session
`reuseSession` flag allows to share driver session between tests. Browser will not be closed automatically after test.

```typescript
export default {
    browser: {
        reuseSession: true
    }
}
```

## Restart Browser
`restartBrowser` flag allows to restart browser between tests instead of default restarting context

```javascript
export default {
    browser: {
        restartBrowser: true
    }
}
```

## Parameter Types
### `playwrightLocator`
Resolves to playwright locator

### `playwrightCondition`
condition of element to wait (can be negated with _not_) 
- to be visible
- to be present
- to be invisible
- to be disabled
- to be in viewport

### `playwrightTimeout`
optional timeout that can be passed to wait steps _(timeout: x)_, where x timeout in milliseconds

### `playwrightMouseButton`
mouse button to interact
- left
- right
- middle

## Context properties
@qavajs/steps-playwright exposes following world variables

| variable                  | type             | description                                                     |
|---------------------------|------------------|-----------------------------------------------------------------|
| `this.playwright.browser` | `Browser`        | browser instance                                                |
| `this.playwright.driver`  | `Browser`        | browser instance (alias for browser)                            |
| `this.playwright.context` | `BrowserContext` | current browser context                                         |
| `this.playwright.page`    | `Page`           | current context page                                            |

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
When I type 'wikipedia' into 'Google Input'
```
---
### I type \{string} chars to \{string}

Type text to element sending fine-grained keyboard events

| param |  type  |   description   |
|:-----:|:------:|:---------------:|
| alias | string | element to type |
| value | string |  value to type  |

```gherkin
When I type 'wikipedia' chars to 'Google Input'
When I type 'wikipedia' chars into 'Google Input'
```
---
### I click \{string}

Click element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | element to click |

```gherkin
When I click 'Google Button'
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
I press 'Enter' key 5 times
I press 'Space' key 4 times
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

---
### I dismiss alert

Dismisses an alert

```gherkin
When I dismiss alert
```

---
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
### I scroll by \{string}

Scroll by offset

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| offset | string | offset string in 'x, y' format |

```gherkin
When I scroll by '0, 100'
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
### I scroll by \{string} in \{string}

Scroll by offset in element

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| offset | string | offset string in 'x, y' format |
| alias  | string |        alias of element        |

```gherkin
When I scroll by '0, 100' in 'Overflow Container'
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
### I press \{playwrightMouseButton} mouse button

Press mouse button

| param  |  type  |              description              |
|:------:|:------:|:-------------------------------------:|
| button | string | button to press (left, right, middle) |

```gherkin
When I press left mouse button
```

-------------------------
### I release \{playwrightMouseButton} mouse button

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
### I click \{playwrightBrowserButton} button

Click browser button

| param  |  type  |          description           |
|:------:|:------:|:------------------------------:|
| button | string | browser button (back, forward) |

```gherkin
When I click back button
When I click forward button
```

---
### I upload \{string} file by clicking \{string}

Provide file url to file chooser

| param |  type  |            description            |
|:-----:|:------:|:---------------------------------:|
| file  | string |     file path or file handle      |
| alias | string | element that invokes file chooser |

```gherkin
When I upload '/folder/file.txt' file by clicking 'Upload Button'
```

---
### I upload files by clicking \{string}:

Provide multiple file urls to file chooser

| param    |  type     |            description            |
|:--------:|:---------:|:---------------------------------:|
| alias    | string    | element that invokes file chooser |
| files    | DataTable |     file paths                    |

```Gherkin
When I upload files by clicking 'File Input':
  | $uploadFile  |
  | $uploadFile2 |
```

---
### I set window size \{string}

Resize browser viewport

|    param     |  type  |                  description                  |
|:------------:|:------:|:---------------------------------------------:|
| viewportSize | string | width and height in pixels separated by comma |


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

---

### I grant \{string} permission

Provides permission for the browser context.  
Full list of permissions can be found
in [Playwright documentation](https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions).

| param |  type  |       description        |
|:-----:|:------:|:------------------------:|
| alias | string | permission name or alias |

```gherkin
When I grant 'geolocation' permission
```

---

### I revoke browser permissions

Clears all permission overrides for the browser context.

```gherkin
When I revoke browser permissions
```

---

### I set \{string} geolocation

Sets a geolocation for a current context.  
Geolocation param should conform to a JavaScript object \{ latitude: number, longitude: number}

|      param       |  type  |            description             |
|:----------------:|:------:|:----------------------------------:|
| geolocationAlias | string | memory alias of geolocation object |

```gherkin
When I set '$sweden' geolocation
When I set '$js({ latitude: 62.39, longitude: -96.81})' geolocation
```

---

### I save file to \{string} by clicking \{string}

Save file to a certain directory.

| param |  type  |           description            |
|:-----:|:------:|:--------------------------------:|
| path  | string |            file path             |
| alias | string | element that invokes downloading |

```gherkin
When I save file to '/folder/file.txt' by clicking 'Download Button'
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

---
### I grant \{string} permission

Provides permission for the browser context.  
Full list of permissions can be found in [Playwright documentation](https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions).

| param |  type  |       description        |
|:-----:|:------:|:------------------------:|
| alias | string | permission name or alias |

```gherkin
When I grant 'geolocation' permission
```

---
### I revoke browser permissions

Clears all permission overrides for the browser context.

```gherkin
When I revoke browser permissions
```

---
### I set \{string} geolocation

Sets a geolocation for a current context.  
Geolocation param should conform to a JavaScript object \{ latitude: number, longitude: number}

|      param       |  type  |            description             |
|:----------------:|:------:|:----------------------------------:|
| geolocationAlias | string | memory alias of geolocation object |

```gherkin
When I set '$sweden' geolocation
When I set '$js({ latitude: 62.39, longitude: -96.81})' geolocation
```

## Validation Steps

---
### I expect \{string} \{playwrightCondition}

Verify that element satisfies certain condition

|     param     |  type  |        description         |             example              |
|:-------------:|:------:|:--------------------------:|:--------------------------------:|
|     alias     | string | element to check condition |           Search Input           |
| conditionWait | string | function to wait condition | to be visible, not to be present |

```gherkin
Then I expect 'Header' to be visible
Then I expect 'Loading' not to be present
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
### I expect value of \{string} \{validation} \{string}

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
### I expect every element in \{string} collection \{playwrightCondition}

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
Then I expect text of every element in 'Search Results' collection equals to 'google'
Then I expect text of every element in 'Search Results' collection does not contain 'google'
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

---
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
### I save screenshot as \{string}

Save page screenshot into memory

| param |  type  |    description     |
|:-----:|:------:|:------------------:|
|  key  | string | key to store value |

```gherkin
When I save screenshot as 'screenshot'
```

---
### I save full page screenshot as \{string}

Save full page screenshot into memory

| param |  type  |    description     |
|:-----:|:------:|:------------------:|
|  key  | string | key to store value |

```gherkin
When I save full page screenshot as 'screenshot'
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

-------------------------
### I refresh page until \{string} \{playwrightCondition}( )\{playwrightTimeout}

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

### I refresh page until text of \{string} \{validation} \{string}( )\{playwrightTimeout}

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

|  param  |  type  |                                description                                |
|:-------:|:------:|:-------------------------------------------------------------------------:|
| mockKey | string |                      memory key to get mock instance                      |
| reason  | string | reason string see https://playwright.dev/docs/api/class-route#route-abort |

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

## Cookie Steps

---
### I set \{string} cookie as \{string}

Set cookie

| param  |  type  | description  |
|:------:|:------:|:------------:|
| cookie | string | cookie name  |
| value  | string | value to set |

```gherkin
When I set 'userID' cookie as 'user1'
When I set 'userID' cookie as '$userIdCookie'
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

## Network Intercept Steps

---
### I create interception for \{string} as \{string}

Create interception for url or predicate function

|   param   |  type  |             description             |
|:---------:|:------:|:-----------------------------------:|
| predicate | string | url or predicate function to listen |
|    key    | string |      key to save interception       |

```gherkin
When I create interception for '**/api/qavajs' as 'interception'
When I create interception for '$condition' as 'intercept' # where condition is function that wait for particular event https://playwright.dev/docs/network#network-events
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
And I save '$interception' response as 'response' # response will be instance of Response object https://playwright.dev/docs/api/class-response
And I expect '$response.status()' to equal '200'
```
