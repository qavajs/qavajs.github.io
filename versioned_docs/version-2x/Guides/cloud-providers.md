---
sidebar_position: 20
---

# Cloud Providers

Here you can find some examples how to connect qavajs with different cloud providers

## SauceLabs (WDIO Mobile)

```typescript
import { Data } from './memory';
import { App } from './page_object';

export default {
    paths: ['features/Wikipedia.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        protocol: 'https',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        path: '/wd/hub',
        logLevel: 'debug',
        user: process.env.SAUCELABS_USER,
        key: process.env.SAUCELABS_USER,
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            platformName: 'Android',
            browserName: 'chrome',
            'appium:deviceName': DEVICE_NAME,
            'appium:automationName': 'UIAutomator2'
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/file.xml']
    ],
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 30000
}
```

## BrowserStack (WDIO Browser)

```typescript
import 'dotenv/config';
import { Data } from './memory';
import { App } from './page_object';

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js',
        'step_definitions/*.ts'
    ],
    browser: {
        logLevel: 'info',
        hostname: 'hub.browserstack.com',
        port: 4444,
        path: '/wd/hub',
        capabilities: {
            browserName: 'chrome',
            'bstack:options' : {
                "os" : "Windows",
                "osVersion" : "10",
                "browserVersion" : "120.0",
                "userName" : process.env.BSTACK_USERNAME,
                "accessKey" : process.env.BSTACK_ACCESS_KEY,
            }
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    memory: new Memory(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 20000
}
```

## Mobitru (WDIO Mobile)

```typescript
import 'dotenv/config'
import { Data } from './memory';
import { App } from './page_object';

const KEY = process.env.API_KEY;
const BILLING_UNIT = process.env.BILLING_UNIT;
const credentials = `${BILLING_UNIT}:${KEY}`;
const encodedCredentials = Buffer.from(credentials).toString('base64');

export default {
    paths: ['features/Wikipedia.feature'],
    require: [
        'node_modules/@qavajs/steps-wdio/index.js'
    ],
    browser: {
        protocol: 'https',
        hostname: 'app.mobitru.com',
        headers: {
            Authorization: `Basic ${encodedCredentials}`
        },
        path: '/wd/hub',
        logLevel: 'debug',
        port: 443,
        timeout: {
            present: 5000
        },
        capabilities: {
            browserName: 'safari',
            platformName: 'ios',
            'appium:udid': process.env.UDID, // device udid
            'appium:automationName': 'XCUITest'
        }

    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/file.xml']
    ],
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 30000
}
```

## LambdaTest (Playwright Browser)

```typescript
import 'dotenv/config'
import { Data } from './memory';
import { App } from './page_object';

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Single Build',
        'name': 'Playwright Sample Test',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
        'tunnelName': '', // Optional
        'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
        'playwrightClientVersion': '1.56.1'
    }
}

export default {
    paths: ['features/*.feature'],
    require: [
        'node_modules/@qavajs/steps-playwright/index.js'
    ],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium',
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
        }
    },
    formatOptions: {
        console: {
            showLogs: true
        }
    },
    format: [
        ['@qavajs/html-formatter', 'report/report.html'],
        '@qavajs/console-formatter',
        ['junit', 'report/report.xml']
    ],
    memory: new Data(),
    pageObject: new App(),
    parallel: 1,
    defaultTimeout: 25000
}
```

## Additional Resources

- [SauceLabs Documentation](https://docs.saucelabs.com/)
- [BrowserStack Documentation](https://www.browserstack.com/docs)
- [Mobitru Documentation](https://mobitru.com/docs)
- [LambdaTest Documentation](https://www.lambdatest.com/support/docs/)