---
sidebar_position: 3
---
# Composing Steps
Framework provides capability to implement complex logic via `executeStep` world method
that allow to call gherkin definitions programmatically

JS
```javascript
const { When, DataTable } = require('@cucumber/cucumber');

When('I do smth complex', async function() {
    await this.executeStep(`I type 'username' to 'Username Input'`);
    await this.executeStep(`I type 'password' to 'Password Input'`);
    await this.executeStep(`I click 'Login Button'`);
    await this.executeStep(`I fill following fields`, new DataTable([
        [ 'Order', '123' ],
        [ 'Delivery Location', 'New York' ]
    ]))
});
```

TS
```typescript
import { IQavajsWorld } from '@qavajs/cli';
import { When, DataTable } from '@cucumber/cucumber';

When('I do smth complex', async function(this: IQavajsWorld) {
    await this.executeStep(`I type 'username' to 'Username Input'`);
    await this.executeStep(`I type 'password' to 'Password Input'`);
    await this.executeStep(`I click 'Login Button'`);
    await this.executeStep(`I fill following fields`, new DataTable([
        [ 'Order', '123' ],
        [ 'Delivery Location', 'New York' ]
    ]))
});
```
