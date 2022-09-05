---
sidebar_position: 1
---
# Memory
Framework provides the capability to transit variables between step and access them from gherkin definitions

Memory value can be set and read from memory object
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
## String interpolation
Module also provides capability to use string interpolation in your Gherkin scenarios
```gherkin
When I save '42' to memory as 'variable'
Then I expect text of 'Answer' to equal 'answer is {$variable}' #expected value will be 'answer is 42'
```
