---
sidebar_position: 4
---

# @qavajs/steps-memory
Steps to work with memory module
## Installation
`npm install @qavajs/steps-memory`

## Configuration
```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-memory/index.js'
        ]
    }
}
```
## Steps

---
### I expect \{string} \{memoryValidation} \{string}

Verify that value from memory satisfies validation against other value

|   param    |   type   |         description          |                example                |
|:----------:|:--------:|:----------------------------:|:-------------------------------------:|
|   value1   |   any    |            value1            |      42, $value, $currentDate()       |
| validation | Function | function to verify condition | to be equal, to be above, to be below |
|   value2   |   any    |            value2            |      42, $value, $currentDate()       |

```gherkin
Then I expect '$value' to equal '$anotherValue'
Then I expect '$value' not to contain '56'
```

---
### I expect every element in \{string} array \{memoryValidation} \{string}

Verify that every element in array satisfies validation against other value

|     param      |   type   |         description          |                example                |
|:--------------:|:--------:|:----------------------------:|:-------------------------------------:|
|      arr       |   any    |      array to validate       |        $value, $currentDate()         |
|   validation   | Function | function to verify condition | to be equal, to be above, to be below |
| expectedValue  |   any    |        expected value        |      42, $value, $currentDate()       |

```gherkin
Then I expect every element in '$arr' array to be above '$expectedValue'
Then I expect every element in '$arr' array to be above '50'
```
---
### I expect at least \{int} elements in \{string} array \{memoryValidation} \{string}

Verify that at least x elements in array pass validation

|     param      |   type   |                     description                     |                example                |
|:--------------:|:--------:|:---------------------------------------------------:|:-------------------------------------:|
| expectedNumber |  number  | expected number of elements that satisfy validation |                 1,2,3                 |
|      arr       |   any    |                  array to validate                  |        $value, $currentDate()         |
|   validation   | Function |            function to verify condition             | to be equal, to be above, to be below |
| expectedValue  |   any    |                   expected value                    |      42, $value, $currentDate()       |

```gherkin
Then I expect at least 1 element(s) in '$arr' array to be above '$expectedValue'
Then I expect at least 2 element(s) in '$arr' array to be above '50'
```

---
### I save \{string} to memory as \{string}

Set memory value

| param |  type  | description | example |
|:-----:|:------:|:-----------:|:-------:|
| value | string |    value    |         |
|  key  | string |     key     |         |

```gherkin
When I save 'value' to memory as 'key'
```

---
### I set \{string} = \{string}

Save value to memory

| param |  type  | description | example |
|:-----:|:------:|:-----------:|:-------:|
|  key  | string |     key     |         |
| value | string |    value    |         |

```gherkin
When I set 'key' = 'value'
```
              
---
### I save result of math expression \{string} as \{string}

Save result of math expression and save result to memory

|   param    |  type  |      description       |   example    |
|:----------:|:------:|:----------------------:|:------------:|
| expression | string | expression to evaluate | `{$var} + 1` |
|    key     | string |          key           |              |

```gherkin
When I save result of math expression '{$variable} + 42' as 'result'
When I save result of math expression '{$random()} * 100' as 'result'
```

---
### I save json to memory as \{string}: [Multiline]

Save json value to memory (as JS object)

| param |  type  |      description       |       example       |
|:-----:|:------:|:----------------------:|:-------------------:|
|  key  | string |          key           |                     |
| json  | string | multi string with json | `{"key" : "value"}` |

```gherkin
When I save json to memory as 'object':
    """
    {
        "someKey": "someValue",
        "otherKey": 42
    }
    """
Then I expect '$object.someKey' to equal 'someValue'
```

---
### I save key-value pairs to memory as \{string}: [DataTable]

Save key-value pairs provided as Data Table to memory (as JS object)

| param |  type  |   description   | example |
|:-----:|:------:|:---------------:|:-------:|
|  key  | string |       key       |         |
|  kv   | string | key-value pairs |         |

```gherkin
When I save key-value pairs to memory as 'key':
    | someKey      | 42               |
    | someOtherKey | $valueFromMemory |
Then I expect '$object.someKey' to equal '42'
```

---
### I expect \{string} array to be sorted by \{string}

Verify that array is sorted by provided comparator provided as reference to function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

|   param    |  type  |              description               |
|:----------:|:------:|:--------------------------------------:|
|    arr     | string |          memory key of array           |
| comparator | string | memory key of sort comparator function |

```gherkin
When I expect '$arr' array to be sorted by '$ascending'
```
```javascript
// memory/index.js
class Memory {
    ascending = (a, b) => a - b; //implementation of comparator function
}
```

---
### I expect \{string} \{memoryValidation} at least one of \{string}

Verify that the value satisfies validation with at least one value from the array

|   param    |  type  |              description               |         example          |
|:----------:|:------:|:--------------------------------------:|:------------------------:|
|   actual   | string |       actual value or memory key       |      string, $value      |
| validation | string |               validation               | to equal, to match, etc. |
|  expected  | string | array of expected values or memory key | $js([1,2,3]), $expected  |

```gherkin
When I expect '$text' to equal at least one of '$js(["free", "11.99"])'
```

---
### I expect \{string} \{memoryValidation} at least one of: [DataTable]

Verify that the value satisfies validation with at least one value from the array

|   param    |   type    |                 description                 |         example          |
|:----------:|:---------:|:-------------------------------------------:|:------------------------:|
|   actual   |  string   |         actual value or memory key          |      string, $value      |
| validation |  string   |                 validation                  | to equal, to match, etc. |
|  expected  | DataTable | data table of expected values or memory key |                          |

```gherkin
When I expect '$text' to equal at least one of:
    | free  |
    | 11.99 |
```

---
### I expect \{string} \{memoryValidation} all of \{string}

Verify that the value satisfies validation with all values from the array

|   param    |  type  |              description               |         example          |
|:----------:|:------:|:--------------------------------------:|:------------------------:|
|   actual   | string |       actual value or memory key       |      string, $value      |
| validation | string |               validation               | to equal, to match, etc. |
|  expected  | string | array of expected values or memory key | $js([1,2,3]), $expected  |

```gherkin
When I expect '$text' not to equal all of '$js(["free", "10.00"])'
```

---
### I expect \{string} \{memoryValidation} all of \{string}

Verify that the value satisfies validation with all values from the array

|   param    |  type  |                 description                 |         example          |
|:----------:|:------:|:-------------------------------------------:|:------------------------:|
|   actual   | string |         actual value or memory key          |      string, $value      |
| validation | string |                 validation                  | to equal, to match, etc. |
|  expected  | string | data table of expected values or memory key | $js([1,2,3]), $expected  |

```gherkin
When I expect '$text' not to equal all of:
    | free  |
    | 10.00 |
```
