---
sidebar_position: 10
---

# @qavajs/steps-visual-testing

Cucumber step library to perform visual (screenshot) testing using [pixelmatch](https://github.com/mapbox/pixelmatch).

## Installation

```
npm install @qavajs/steps-visual-testing
```

## Configuration

Register the steps in your qavajs config:

```typescript
import Memory from './memory';

export default {
    require: [
        '@qavajs/steps-visual-testing/index.js'
    ],
    memory: new Memory()
}
```

## Usage

Screenshots passed to the steps can be either a **Buffer** or a **base64-encoded PNG string**. They must be stored in memory under an alias before being referenced in a step.

### Compare two screenshots

```gherkin
Then I expect '$actual' screenshot to equal '$expected'
```

Compares `$actual` against `$expected` using the default threshold of `0.1`.

### Compare two screenshots with custom parameters

```gherkin
Then I expect '$actual' screenshot to equal '$expected':
  | threshold | 0.4 |
```

| Parameter   | Type   | Default | Description                                                                      |
|-------------|--------|---------|----------------------------------------------------------------------------------|
| `threshold` | number | `0.1`   | Matching threshold (0–1). Lower values require a closer match; higher values allow more difference. |

## Failure attachments

When images do not match (or cannot be compared, e.g. size mismatch), the step automatically attaches three images to the Cucumber report:

- **actual** — the actual screenshot
- **expected** — the expected screenshot
- **delta** — a diff image highlighting pixel differences

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

