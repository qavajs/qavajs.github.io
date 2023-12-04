---
sidebar_position: 4
---

# @qavajs/html-formatter

Single file HTML formatter for cucumber framework

## Installation
`npm install @qavajs/html-formatter`
   
## Config
Add to formatter section in config file

```javascript
module.exports = {
    default: {
        format: [
            ['@qavajs/html-formatter', 'report.html']
        ],
        formatOptions: {
            htmlConfig: {
                metadata: {
                    'OS': 'macos',
                    'OS Version': '13.1'
                }
            }
        }
    }
}
```

or pass `--format @qavajs/html-formatter:report.html` in cli

Kudos to https://github.com/epam/UUI for providing components

![](https://raw.githubusercontent.com/qavajs/html-formatter/main/assets/qavajs_html_reporter.png)
