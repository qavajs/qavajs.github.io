---
sidebar_position: 1
---
# Memory
Framework provides the capability to transit variables between step and access them from gherkin definitions

You can use special type {text} to transform string parameter to memory value
                                         
```javascript
Then('{text} value should be 42', async function (value) {
    expect(await value).to.equal(42);
})
```
or read value directly from memory object
```javascript
const memory = require('@qavajs/memory');

When(/^save variable as '(.+)'$/, async function (key) {
    memory.setValue(key, 42);
});

Then(/^value '(.+)' should be equal to '(.+)'$/, async function (variable1, variable2) {
    const val = memory.getValue(variable1);
    expect(val).to.equal(variable2);
});
```

```gherkin
When save variable as 'variable'
Then value of '$variable' should be equal to '42'
```

## Using constants and computed

Lib provides capability to set constant values and computed (values that calculated in the moment of call)
```javascript
module.exports = {
    CONSTANT: 42,
    computed: function() {
        return Date.now()
    }
};

```
