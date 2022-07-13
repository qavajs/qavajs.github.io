---
sidebar_position: 1
---

# @qavajs/format-report-portal
Formatter that sends result to EPAM ReportPortal

`npm install @qavajs/format-report-portal`

## configuration

add formatter to config.js
```javascript
module.exports = {
    default: {
        format: [
            '@qavajs/format-report-portal'
        ],
        formatOptions: {
            rpConfig: {
                token: 'your token',
                endpoint: 'https://your-rp-instance/api/v1',
                description: 'Description',
                tags: ['Tag'],
                project: 'your project',
                launch: 'your launch name'
            },
        }
    }
}
```
