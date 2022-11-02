---
sidebar_position: 2
---

# Page Object
Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements.
```javascript
const { po } = require('@qavajs/po');

When(/^click '(.+)'$/, async function (alias) {
    const element = await po.getElement(alias);
    await element.waitForClickable();
    await element.click();
});
```

```gherkin
When click '#1 of Multiple Component > Child Item'
```

Framework provides capability to get single element from collection by index (#index of Collection) or inner text (#text in Collection).

## Create page object

There are two methods $ and $$ that allow registering elements and collections.
An element can be defined as supported selector or as an instance of the component class.

Each not top-level component should have selector property or be inherited from Component class and accepted selector in constructor.
```javascript
const { $, $$, Component } = require('@qavajs/po');

class MultipleComponent extends Component {
    ChildItem = $('div');
}

class SingleComponent {
    selector = '.container';
    ChildItem = $('.child-item');
}

class App {
    SingleElement = $('.single-element');
    List = $$('.list li');
    SingleComponent = $(new SingleComponent());
    MultipleComponents = $$(new MultipleComponent('.list-components li'));
}

module.exports = new App();
```

## Working with collection
Collection elements can be accessed using prefixes

**By index:** `#{index} of Collection` (access 1st element in collection)
```gherkin
When I click '#1 of Collection'
```
**By partial text:** `#{text} in Collection` (access first element which text contains {text})
```gherkin
When I click '#some partial text in Collection'
```
**By exact text:** `@{text} in Collection` (access first element which text exactly match {text})
```gherkin
When I click '@some exact text in Collection'
```
