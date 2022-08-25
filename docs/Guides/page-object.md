---
sidebar_position: 2
---

# Page Object
Framework provides capability to call getElement method from po object that resolves plain-english selector and return webdriverIO element or array of webdriverIO element.
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
An element can be defined in form of webdriverIO selector or as an instance of the component class.

Each not top-level component should have selector element in form of webdriverIO selector.
```javascript
const { $, $$ } = require('@qavajs/po');

class MultipleComponent {
    selector = '.list-components li';
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
    MultipleComponents = $$(new MultipleComponent());
}

module.exports = new App();
```
