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
# previously saved variable can be accessed via $identifier
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

## Escape $
_$_ can be escaped with double backslash

```Gherkin
When I expect text of 'Currency Label' to equal '\\$42'
```

## Parallel
In case you need to assign uniq value for each Cucumber thread you can use parallel function.
It will assign value based on CUCUMBER_WORKER_ID env variable.

```javascript
const { parallel } = require('@qavajs/memory/utils');

class Memory {
    user = parallel([
        { username: 'user1', password: 'password' },
        { username: 'user2', password: 'password' }
    ]);
}

module.exports = Memory;
```

