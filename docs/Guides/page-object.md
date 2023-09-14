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
/**
 *  import po depending to selected driver
 *  wdio - @qavajs/po
 *  playwright - @qavajs/po-playwright
 *  testcafe - @qavajs/po-testcafe
 */
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

**By regexp:** `/{regexp}/ in Collection` (access first element which text match {regexp} regexp)
```gherkin
When I click '/^some regexp$/ in Collection'
```

## Ignore hierarchy
In case if child element and parent component doesn't have hierarchy dependency
it's possible to pass extra parameter _ignoreHierarchy_ parameter to start traverse from root

```javascript
class ComponentThatDescribesNotWellDesignedDOMTree {
    selector = '.container';
    //ignoreHierarchy will ignore component selector .container and start traverse from root
    ChildItem = $('.child-item', { ignoreHierarchy: true }); 
}
```

## Optional selector property
If selector property is not provided for Component then parent element will be returned

```javascript
class ParentComponent {
    selector = '.container';
    ChildComponent = $(new ChildComponent()); 
}

class ChildComponent {
    //Element will be searched in parent .container element
    Element = $('.someElement');
}
```

## Immediate option
In order, you don't need to retry query for elements exists you can pass { immediate: true } option
```javascript
When('I wait {string} not to be present', async function (alias) {
    const element = await po.getElement(alias, { immediate: true }); // in case if element not found dummy not existing element be returned
    await element.waitForExist({ reverse: true });
});
```

## Dynamic selectors
In case you need to generate selector based on some data you can use dynamic selectors

e.g
```javascript
const { Selector } = require('@qavajs/po');

class Component {
    selector = '.container';
    Element = $(Selector((index => `div:nth-child(${index})`))); // function should return valid selector 
}
```

Then you can pass parameter to this function from Gherkin file

```gherkin
When I click 'Component > Element (2)'
```

