---
sidebar_position: 10
---

# @qavajs/steps-visual-testing v2
Step library to perform visual testing using pixelmatch library

It is docs for qavajs v2. If you are looking docs for v1 go to [(v1 docs)](../Steps-v1/visual-testing-v1.md)

## Installation

```
npm install @qavajs/steps-visual-testing
```

## Configuration
```typescript
export default {
    require: [
        '@qavajs/steps-visual-testing/index.js'
    ],
}

```

## Steps

---
### I expect \{string} screenshot to equal \{string}

Compare two screenshots from memory (saved as base64)

|  param   |  type  |         description          |
|:--------:|:------:|:----------------------------:|
|  actual  | string |  alias of actual screenshot  |
| expected | string | alias of expected screenshot |

```gherkin
Then I expect '$actual' screenshot to equal '$expected'
```
---

### I expect \{string} screenshot to equal \{string}: [DataTable]

Compare two screenshots from memory (saved as base64) with provided compare parameters

|  param   |   type    |         description          |
|:--------:|:---------:|:----------------------------:|
|  actual  |  string   |  alias of actual screenshot  |
| expected |  string   | alias of expected screenshot |
|  params  | DataTable |  table of key-value params   |

Supported params:

|    param    |  type  |                                         description                                         |
|:-----------:|:------:|:-------------------------------------------------------------------------------------------:|
|  threshold  | number |  Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive  |

```gherkin
Then I expect '$actual' screenshot to equal '$expected':
  | threshold | 0.5 |
```
---

