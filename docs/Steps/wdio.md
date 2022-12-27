---
sidebar_position: 1
---

# @qavajs/steps-wdio
Step library to work with webdriverio using DSL page object
## Installation
`npm install @qavajs/steps-wdio`
## Config
```javascript
const App = require('./page_object');
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-wdio'
        ],
        browser: {
            timeout: {
                present: 10000,
                visible: 20000,
                page: 10000,
                implicit: 0 //wdio implicit wait for element
            },
            capabilities: {
                browserName: 'chrome'
            }
        },
        pageObject: new App()
    }
}
```

wdio steps provide a couple of additional configuration properties

| Name         | Type     | Description                                                                    | Default |
|--------------|----------|--------------------------------------------------------------------------------|---------|
| `browser`    | `object` | object describing wdio config                                                  | `{}`    |
| `pageObject` | `object` | instance of page object definitions  [(page object)](../Guides/page-object.md) | `{}`    |
| `screenshot` | `string` | screenshot strategy (beforeStep, afterStep, onFail)                            |         |

## Parameter Types
### wdioConditionWait 
condition of element to wait (can be negated with _not_) 
- to be visible
- to be present
- to be invisible
- to be enabled
- to be disabled
- to be in viewport

### wdioValueWait
condition of value to wait (can be negated with _not_)
- to be equal
- to contain
- to be above
- to be below

### wdioValidation
validation of values (can be negated with _not_)
- to be equal
- to be strictly equal
- to be deeply equal
- to have member
- to be match
- to contain
- to be above
- to be below
- to be greater than
- to be less than
- to have type

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
---
### I click {string} text in {string} collection

Click on element with desired text in collection

|    param     |  type  |  description  |
|:------------:|:------:|:-------------:|
| expectedText | string | text to click |
|    alias     | string |  collection   |
example:
```gherkin
When I click 'google' text in 'Search Engines' collection
```

---
### I switch to parent frame

Switch to parent frame

example:
```gherkin
When I switch to parent frame
```

---
### I switch to {int} frame

Switch to frame by index

| param |  type  |      description      |
|:-----:|:------:|:---------------------:|
| index | number | frame index to switch |
example:
```gherkin
When I switch to 2 frame
```

---
### I switch to {string} frame

Switch to frame by page object alias

| param |  type  |       description        |
|:-----:|:------:|:------------------------:|
| alias | string | Iframe page object alias |
example:
```gherkin
When I switch to 'Checkout Iframe' frame
```

---
### I switch to {int} window

Switch to window by index

| param |  type  |      description       |
|:-----:|:------:|:----------------------:|
| index | number | window index to switch |
example:
```gherkin
When I switch to 2 window
```

---
### I switch to {string} window

Switch to window by matcher

|  param  |  type  |          description          |
|:-------:|:------:|:-----------------------------:|
| matcher | string | window matcher (url or title) |
example:
```gherkin
When I switch to 'google.com' window
```

---
### I refresh page

Refresh page

example:
```gherkin
When I refresh page
```

---
### I press {string} key

Press key

| param |  type  | description  |
|:-----:|:------:|:------------:|
|  key  | string | key to press |
example:
```gherkin
When I press 'Enter' key
```

---
### I hover over {string}

Hover over element

| param |  type  |      description      |
|:-----:|:------:|:---------------------:|
| alias | string | element to hover over |
example:
```gherkin
When I hover over 'Google Button'
```

---
### I select {string} option from {string} dropdown

Select option with certain text from select element

| param  |  type  |   description    |
|:------:|:------:|:----------------:|
| option | string | option to select |
| alias  | string | alias of select  |
example:
```gherkin
When I select '1900' option from 'Registration Form > Date Of Birth'
When I select '$dateOfBirth' option from 'Registration Form > Date Of Birth' dropdown
```
  
---
### I select {int}(st|nd|rd|th) option from {string} dropdown

Select option with certain index from select element

|    param    |  type  |        description        |
|:-----------:|:------:|:-------------------------:|
| optionIndex | number | index of option to select |
|    alias    | string |      alias of select      |
example:
```gherkin
When I select 1 option from 'Registration Form > Date Of Birth' dropdown
```

---
### I save screenshot as {string}

Save page screenshot into memory

| param |  type  |    description     |
|:-----:|:------:|:------------------:|
|  key  | string | key to store value |
example:
```gherkin
When I save screenshot as 'screenshot'
```

---
### I scroll to {string}

Scroll to element

| param |  type  |   description    |
|:-----:|:------:|:----------------:|
| alias | string | alias of element |
example:
```gherkin
When I scroll to 'Element'
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
Then I expect text of '#1 of Search Results' to be equal '$firstResult'
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
Then I expect 'value' property of 'Search Input' to be equal '$inputText'
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
Then I expect 'href' attribute of 'Home Link' to contain '/home'
Then I expect 'href' attribute of 'Home Link' to be equal '$url'
```

---
### I expect current url {wdioValidation} {string}

Verify that current url satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
Then I expect current url contains 'wikipedia'
Then I expect current url equals 'https://wikipedia.org'
```

---
### I expect page title {wdioValidation} {string}

Verify that page title satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
Then I expect page title equals 'Wikipedia'
```

---
### I expect text of every element in {string} collection {wdioValidation} {string}

Verify that all texts in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |

example:
```gherkin
Then I expect text of every element in 'Search Results' collection to be equal 'google'
Then I expect text of every element in 'Search Results' collection does not contain 'yandex'
```

---
### I expect {string} attribute of every element in {string} collection {wdioValidation} {string}

Verify that all particular attributes in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|   attribute   | string |  attribute to get   |             href, checked             |
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |

example:
```gherkin
Then I expect 'href' attribute of every element in 'Search Results' collection to contain 'google'
```

---
### I expect {string} property of every element in {string} collection {wdioValidation} {string}

Verify that all particular properties in collection satisfy condition

Note: step passes in case of empty collection

|     param     |  type  |     description     |                example                |
|:-------------:|:------:|:-------------------:|:-------------------------------------:|
|   attribute   | string |  attribute to get   |             href, checked             |
|     alias     | string | alias of collection |            Search Results             |
|  validation   | string |   validation type   | to be equal, to contain, not to match |
| expectedValue | string |   expected result   |                                       |

example:
```gherkin
Then I expect 'href' property of every element in 'Search Results' collection to contain 'google'
```

### I expect {string} css property of {string} {wdioValidation} {string}

Verify that css property of element satisfies condition

|     param     |  type  |        description         |                example                |
|:-------------:|:------:|:--------------------------:|:-------------------------------------:|
|   property    | string |  property check condition  |           color, font-size            |
|     alias     | string | element to check condition |  Label, #1 of Search Results > Title  |
|  validation   | string |      validation type       | to be equal, to contain, not to match |
| expectedValue | string |      expected result       |                                       |

example:
```gherkin
Then I expect 'color' css property of 'Search Input' to be equal 'rgb(42, 42, 42)'
Then I expect 'font-family' css property of 'Label' to contain 'Fira'
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
When I save number of elements in 'Search Results' collection as 'numberOfSearchResults'
```

---
### I save text of every element of {string} collection as {string}

Save array of texts of collection to memory

| param |  type  |       description       |    example     |
|:-----:|:------:|:-----------------------:|:--------------:|
| alias | string | collection to get value | Search Results |
|  key  | string |   key to store value    |                |
example:
```gherkin
When I save text of every element of 'Search Results' collection as 'searchResults'
```

---
### I save {string} attribute of every element of {string} collection as {string}

Save array of attributes of collection to memory

|   param   |  type  |       description       |    example     |
|:---------:|:------:|:-----------------------:|:--------------:|
| attribute | string | attribute to get value  | checked, href  |
|   alias   | string | collection to get value | Search Results |
|    key    | string |   key to store value    |                |
example:
```gherkin
When I save 'checked' attribute of every element of 'Search > Checkboxes' collection as 'checkboxes'
```

---
### I save {string} property of every element of {string} collection as {string}

Save array of properties of collection to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
| property | string |  property to get value  |      href      |
|  alias   | string | collection to get value | Search Results |
|   key    | string |   key to store value    |                |
example:
```gherkin
When I save 'href' property of every element of 'Search Results' collection as 'hrefs'
```

---
### I save current url as {string}

Save current url to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
|   key    | string |   key to store value    |                |
example:
```gherkin
When I save current url as 'currentUrl'
```
 
---
### I save page title as {string}

Save current page title to memory

|  param   |  type  |       description       |    example     |
|:--------:|:------:|:-----------------------:|:--------------:|
|   key    | string |   key to store value    |                |
example:
```gherkin
When I save page title as 'currentTitle'
```

### I save {string} css property of {string} as {string}

Save css property of element to memory

|  param   |  type  |     description      |               example               |
|:--------:|:------:|:--------------------:|:-----------------------------------:|
| property | string |  property to store   |     background-color, font-size     |
|  alias   | string | element to get value | Label, #1 of Search Results > Title |
|   key    | string |  key to store value  |                                     |


example:
```gherkin
When I save 'color' css property of 'Checkbox' as 'checkboxColor'
When I save '$propertyName' property of 'Checkbox' as 'checkboxColor'
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
### I wait until text of {string} {wdioValueWait} {string}

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
 
---
### I wait until current url {wdioValueWait} {string}

Wait for url condition

| param |  type  |      description       |
|:-----:|:------:|:----------------------:|
| wait  | string |    validation type     |
| value | string | expected value to wait |

example:
```gherkin
When I wait until current url to be equal 'https://qavajs.github.io/'
When I wait until current url not to contain 'cypress'
```

---
### I wait until page title {wdioValueWait} {string}

Wait for title condition

| param |  type  |      description       |
|:-----:|:------:|:----------------------:|
| wait  | string |    validation type     |
| value | string | expected value to wait |

example:
```gherkin
When I wait until page title to be equal 'qavajs'
When I wait until page title not to contain 'cypress'
```

## Cookie Steps

---
### I set {string} cookie as {string}

Set cookie

| param  |  type  | description  |
|:------:|:------:|:------------:|
| cookie | string | cookie name  |
| value  | string | value to set |

example:
```gherkin
When I set 'userID' cookie 'user1'
When I set 'userID' cookie '$userIdCookie'
```
   
---
### I save value of {string} cookie as {string}

Save cookie value to memory

| param  |  type  | description |
|:------:|:------:|:-----------:|
| cookie | string | cookie name |
|  key   | string | memory key  |

example:
```gherkin
When I save value of 'auth' cookie as 'authCookie'
```

## Local/Session Storage Steps

---
### I set {string} {word} storage value as {string}

Set value of local/session storage

|    param    |  type  |              description               |
|:-----------:|:------:|:--------------------------------------:|
| storageKey  | string | local/session storage key to set value |
| storageType |  word  |    storage type (local or session)     |
|    value    | string |              value to set              |

example:
```gherkin
When I set 'username' local storage value as 'user1'
When I set '$sessionStorageKey' session storage value as '$sessionStorageValue'
```

---
### I save value of {string} {word} storage as {string}

Set value of local/session storage

|    param    |  type  |              description               |
|:-----------:|:------:|:--------------------------------------:|
| storageKey  | string | local/session storage key to set value |
| storageType |  word  |    storage type (local or session)     |
|     key     | string |               memory key               |

example:
```gherkin
When I save value of 'username' local storage as 'localStorageValue'
When I save value of '$sessionStorageKey' session storage value as 'sessionStorageValue'
```

## Mobile Steps

---
### I tap {string}
Support: Android, iOS

Tap element

| param |  type  |  description   |
|:-----:|:------:|:--------------:|
| alias | string | element to tap |
example:
```gherkin
When I tap 'Google Button'
```

---
### I shake device
Support: Android, iOS

Shake device

example:
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

example:
```gherkin
When I perform touch action:
  | press   | 90, 80 |
  | wait    | 200    |
  | moveTo  | 10, 80 |
  | release |        |
```

---
### I perform touch action {string}
Support: Android, iOS

Perform touch action

|    param     |  type  |                                                   description                                                   |
|:------------:|:------:|:---------------------------------------------------------------------------------------------------------------:|
| actionsAlias | string | memory alias that resolves into array of action objects (see https://webdriver.io/docs/api/appium#touchperform) |
example:
```gherkin
When I perform touch action '$actions'
```

## Execute Steps

---
### I execute {string} function

Execute client function

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |

example:
```gherkin
When I execute '$fn' function # fn is function reference
When I execute 'window.scrollBy(0, 100)' function
```

---
### I execute {string} function and save result as {string}

Execute client function and save result into memory

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|  memoryKey  | string |    memory key to save value    |

example:
```gherkin
When I execute '$fn' function and save result as 'result' # fn is function reference
When I execute 'window.scrollY' function and save result as 'scroll'
```

---
### I execute {string} function on {string}

Execute client function on certain element

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|    alias    | string |      target element alias      |

example:
```gherkin
When I execute '$fn' function on 'Component > Element' # fn is function reference
When I execute 'arguments[0].scrollIntoView()' function on 'Component > Element'
```

---
### I execute {string} function on {string} and save result as {string}

Execute client function on certain element

|    param    |  type  |          description           |
|:-----------:|:------:|:------------------------------:|
| functionKey | string | function memory key to execute |
|  memoryKey  | string |    memory key to save value    |
|    alias    | string |      target element alias      |

example:
```gherkin
When I execute '$fn' function on 'Component > Element' and save result as 'innerText' # fn is function reference
When I execute 'arguments[0].innerText' function on 'Component > Element' and save result as 'innerText'
```

## Mock Steps

---
### I create mock for {string} as {string}

Create mock instance

|    param    |  type  |            description            |
|:-----------:|:------:|:---------------------------------:|
| urlTemplate | string |  minimatch url template to mock   |
|  memoryKey  | string | memory key to store mock instance |

example:
```gherkin
When I create mock for '/yourservice/**' as 'mock1'
When I create mock for '$mockUrlTemplate' as 'mock1'
```

---
### I set {string} mock to respond {string} with: [multiline]

Add mocking rule to respond with desired status code and payload

|   param    |  type  |           description           |
|:----------:|:------:|:-------------------------------:|
|  mockKey   | string | memory key to get mock instance |
| statusCode | string |           status code           |
|    body    | string |          response body          |

example:
```gherkin
When I create mock for '/yourservice/**' with filter options as 'myServiceMock'
And I set '$myServiceMock' mock to respond '200' with:
"""
{
    "status": "success"
}
"""
```

---
### I set {string} mock to respond {string} with {string}

Add mocking rule to respond with desired status code and payload

|   param    |  type  |           description           |
|:----------:|:------:|:-------------------------------:|
|  mockKey   | string | memory key to get mock instance |
| statusCode | string |           status code           |
|    body    | string |          response body          |

example:
```gherkin
When I create mock for '/yourservice/**' with filter options as 'myServiceMock'
And I set '$myServiceMock' mock to respond '200' with '$response'
```

---
### I set {string} mock to abort with {string} reason

Add mocking rule to abort request with certain reason

|  param  |  type  |                        description                         |
|:-------:|:------:|:----------------------------------------------------------:|
| mockKey | string |              memory key to get mock instance               |
| reason  | string | reason string see https://webdriver.io/docs/api/mock/abort |

example:
```gherkin
When I create mock for '/yourservice/**' with filter options as 'myServiceMock'
And I set '$myServiceMock' mock to abort with 'Failed' reason
```

---
### I restore {string} mock

Restore mock

|  param  |  type  |                        description                         |
|:-------:|:------:|:----------------------------------------------------------:|
| mockKey | string |              memory key to get mock instance               |

example:
```gherkin
When I restore '$myServiceMock'
```

---
### I restore all mocks

Restore all mocks

example:
```gherkin
When I restore all mocks
```
