---
sidebar_position: 2
---

# @qavajs/console-formatter

Console formatter for cucumber framework

## Installation
`npm install @qavajs/console-formatter`

## Config
To use formatter just add formatter section in config file

```javascript
module.exports = {
    default: {
        format: ['@qavajs/console-formatter'],
        formatOptions: {
            console: {
                showLogs: true //show cucumber logs
            }
        },
    }
}
```

or pass `--format @qavajs/console-formatter in cli`

![](https://raw.githubusercontent.com/qavajs/console-formatter/master/assets/report_example.png)
