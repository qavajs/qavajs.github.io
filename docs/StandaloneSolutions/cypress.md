---
sidebar_position: 1
---
# @qavajs/cypress
qavajs implementation on top of cypress runner

## Installation
  
`npm install cypress`

`npm install @qavajs/cypress-runner-adapter`

`npm install @qavajs/cypress`

## Configuration
cypress.config.js
```javascript
const { defineConfig } = require('cypress');
const cucumber = require('@qavajs/cypress-runner-adapter/adapter');
module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/features/**/*.feature', //path to features
        supportFile: 'cypress/support/e2e.js', //path to main support file
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber)
        },
    },
});

```
support file
```typescript
import defineQavajs from '@qavajs/cypress/defineQavajs';
import '@qavajs/cypress';

import PageObject from '../page_object/'; // path to qavajs page objects
import Memory from '../memory'; // path to qavajs memory

defineQavajs({
    pageObject: new PageObject(),
    memory: new Memory()
});


```
