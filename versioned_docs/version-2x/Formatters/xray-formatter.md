---
sidebar_position: 5
---

# @qavajs/xray-formatter
[Xray](https://docs.getxray.app/) formatter for cucumber framework

### Installation
To install formatter run

```bash
npm install @qavajs/xray-formatter
```

configure `formatterOption` property in config file:

cloud configuration:
```javascript
export default {
    format: ['@qavajs/xray-formatter:report/xray.out'],
    formatOptions: {
        xray: {
            client_id: 'client_id', // generated client_id from xray cloud
            client_secret: 'client_secret', // generated client_id from xray client_secret
            testExecutionKey: 'ABC-12', // test execution jira key to send result
            tagRegexp: 'TEST_(.+)' // optional, parse tag regexp. default /@(.+-\d+)/
        }
    }
}
```

server configuration:
```javascript
export default {
    format: ['@qavajs/xray-formatter:report/xray.out'],
    formatOptions: {
        xray: {
            endpoint: 'https://your.jira.instance/jira', //jira api endpoint
            client_secret: 'client_secret', // personal access key from jira instance
            testExecutionKey: 'ABC-12', // test execution jira key to send result
            tagRegexp: 'TEST_(.+)' // optional, parse tag regexp
        }
    }
}
```

### How it works?
Plugin reads all tags in jira key format (@ABCD-123) or ones that matches `tagRegexp` and update corresponding scenarios in provided test execution

### F.A.Q
- Does it work with Jira Server?

  Yes

- What if multiple tests are mapped to one xray test case?

  Test will get status from last result with corresponding tag

- What if multiple xray cases are mapped to one test?
  