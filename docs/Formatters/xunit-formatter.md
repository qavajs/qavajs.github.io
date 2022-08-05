---
sidebar_position: 3
---

# @qavajs/xunit-formatter

xunit compatible formatter for cucumber framework

### Installation
To install formatter run

`npm install @qavajs/xunit-formatter`

and add to formatter section in config file

```javascript
module.exports = {
    default: {
        format: ['@qavajs/xunit-formatter:report/report.xml']
    }
}
```

or pass `--format @qavajs/xunit-formatter:report/report.xml in cli`


