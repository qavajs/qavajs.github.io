---
sidebar_position: 4
---

# WDIO Adapter
@qavajs/cli comes with wdioAdapter function that allow to use wdio services e.g selenium-service, appium-service, etc.
Service defintion may be string with module path or configuration tuple [modulePath, options, capabilities, config

simple use:
```javascript
const wdioService = require('@qavajs/wdio-service-adapter');

module.exports = {
    default: {
        service: [
            wdioService('@wdio/selenium-standalone-service')
        ],
    }
}
```

use with params
```javascript
const wdioService = require('@qavajs/wdio-service-adapter');

module.exports = {
    default: {
        service: [
            wdioService([
                '@wdio/appium-service',
                {
                    args: {
                        chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
                    }
                }
            ])
        ],
    }
}
```
