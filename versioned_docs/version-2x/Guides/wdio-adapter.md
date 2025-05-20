---
sidebar_position: 29
---

# WDIO Adapter
qavajs framework comes with @qavajs/wdio-service-adapter module that allow to use wdio services e.g selenium-service, appium-service, etc.
Service defintion may be string with module path or configuration tuple [modulePath, options, capabilities, config

simple use:
```typescript
// config.ts
import wdioService from '@qavajs/wdio-service-adapter';

export default {
    service: [
        wdioService('@wdio/selenium-standalone-service')
    ],
}
```

use with params
```typescript
import wdioService from '@qavajs/wdio-service-adapter';

export default {
    service: [
        wdioService([
            '@wdio/appium-service',
            {
                args: {
                    chromedriverExecutable: resolve('node_modules/chromedriver/lib/chromedriver/chromedriver.exe')
                }
            }
        ])
    ]
}
```
