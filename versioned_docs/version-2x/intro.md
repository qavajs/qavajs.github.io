---
sidebar_position: 1
---

# Getting Started

The **qavajs** is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, **qavajs** provides out of the box integration with ReportPortal, Mobitru, and the Xray and many more.

Next, you will be shown how to build your own low-code test automation framework with the **qavajs**.

### Installation from scratch
Once you have set up a clear Node.js (>=20) project, run the command 
```bash
npm init @qavajs
``` 
to launch the CLI application. This will configure qavajs and install the necessary modules for your testing purposes. After the process is completed, a config.ts (or config.js) file will be generated in the project's root directory, which will be used to configure test execution.

### Test development
As the **qavajs** based on the Cucumber the test scripts are written in [Gherkin](https://cucumber.io/docs/gherkin/reference/) language of both built-in steps and those you will create yourself.
With years of experience across various domains, we have implemented [numerous packages](https://github.com/orgs/qavajs/repositories?q=steps&type=all) of step definitions that you can utilize.
```gherkin
Feature: Wikipedia

  @wikipedia
  Scenario Outline: Search in wikipedia (<term>)
    Given I open '$wikipediaUrl' url
    When I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I expect text of 'Wikipedia Article > Title' equals '<term>'
    And I expect text of 'Wikipedia Article > Title' not to contain 'Python'
    And I expect 'Wikipedia Article > Title' to be visible
    And I expect 'Wikipedia Article > Title' to be visible

    Examples:
      | term       |
      | JavaScript |
      | Java       |
```
It is worth mentioning the expression **'$wikipediaUrl'** in the example above, starting with '**\$**' interpreted as a **qavajs** memory variable whose value is taken from the Memory class instance in runtime. [More details](https://qavajs.github.io/docs/Guides/memory).  
Another feature is a locator alias expression like **'Wikipedia > Search Input'** separated by the '**\>**' sign that describes hierarchical page structure. See how [to organize your page object](Guides/page-object).

### Configuration
In addition to the default features of Cucumber [config file](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options), the **qavajs** config implements the following [capabilities](https://github.com/qavajs/core/blob/main/src/IQavajsConfig.ts) to provide advanced flexibility.

### Test execution
If you have the basic config 
```bash
npx qavajs
```
will launch test execution.  
To specify a custom path to the config file, use 
```bash
npx qavajs run --config <config>
```
In case your config exports an object with multiple properties, you can specify which property to read 
```bash
npx qavajs run --profile <profile>
```

### Page object
[Page object guide](./Guides/page-object.mdx)

### Override memory values
In case tests need to be run with an updated memory value, they can be passed via CLI (e.g, run scenarios on some other URL)
It can be done by passing `--memory-values` parameter, which is JSON with params that need to be overridden. 
For instance, to override the `$url` value:

```bash
npx qavajs run --config config.ts --memory-values '{"url": "https://github.com"}'
```

### Pass CLI params to workers
All params that you passed to the qavajs CLI will be available in the `CLI_ARGV` environment variable in all child workers.

### Memory value parameter type
The `value` parameter type provides an API to access memory

```typescript
When('Read memory {value}', async function(memoryValue) {
    expect(memoryValue.value()).to.equal('ts');
});

When('Set memory {value} as {string}', async function(memoryKey, value) {
    memoryKey.set(value);
});
```

### Validation parameter type
`validation` parameter type provides an API to verify values by a certain condition

```typescript
When('I expect {string} {validation} {string}', async function(value1, validate, value2) {
    validate(value1, value2);
});
```

### Soft validation
You can use the `softly` prefix before expect to continue test execution after an error.
```gherkin
Feature: Feature

  Scenario: verify soft assert
    # first step fails, but other steps will not be skipped
    Then I expect '2' to softly equal '1'
    # pass
    And I expect '1' to softly equal '1'
    # fail
    And I expect '2' to softly equal '1'
    # skip
    And I expect '1' to softly equal '1'
```

### Test sharding
qavajs provides the ability to shard your tests between different machines. To do so pass `--shard x/y` parameter in CLI,
where x - current shard, y - total number of shards.

```bash
npx qavajs run --config config.js --shard 1/2
npx qavajs run --config config.js --shard 2/2
```

### Execute steps from other steps
It is possible to implement complex logic using built-in qavajs steps via `executeStep` world method
```typescript
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

### Execute other tests
Also, it is possible to call other test cases via `executeTest` world method
```typescript
When('I do smth complex', async function() {
    await this.executeTest('feature/Login.feature', 'Login');
});
```

### World
Module extends the CucumberJS world with additional entities

| entity      | type     | description                                      | example                                                            |
|-------------|----------|--------------------------------------------------|--------------------------------------------------------------------|
| config      | object   | loaded config                                    | `this.config.parallel`                                             |
| executeStep | function | programmatically execute certain step definition | `await this.executeStep("I type 'username' to 'Username Input'");` |
| setValue    | function | set memory value                                 | `await this.setValue('key', 'value');`                             |
| getValue    | function | get memory value or expression                   | `await this.getValue('$key');`                                     |
| validation  | function | get validation function based                    | `await this.getValue('to equal');`                                 |

### Override step definition
`Override` function provides the capability to override step implementation and avoid ambiguous exceptions

```typescript
import { Override } from '@qavajs/core';

When('I do test', async function () {});

Override('I do test', async function () {
    console.log('I am overridden');
});
```

### Fixture
`Fixture` provides a convenient way to prepare a test environment for a specific test.

This example will open the PDP page before the test and clean the cart after the test
```typescript
import { Fixture } from '@qavajs/core';

Fixture('pdp', async function() {
    await this.playwright.page.goto('https://my-site/pdp');
    // fixture may return function that will be executed after test
    return async function() {
        await this.playwright.page.request.get('/cleanCart');
    }
});
```

```gherkin
Feature: feature with fixture

  @pdp
  Scenario: scenario with fixture
    When I click 'qavajs T-shirt'
    And I click 'cart icon'
    Then I expect 'qavajs T-shirt cart item' to be visible
```

### Template
`Template` provides a way to define step definitions using Gherkin language

```typescript
import { When, Template } from '@qavajs/core';

When('I click {string} and verify {string}', Template((locator, expected) => `
    I click '${locator}'
    I expect '${locator} > Value' to equal '${expected}'
`));
```

### Test execution hooks
`BeforeExecution` and `AfterExecution` allow us to define hooks that will be executed
once before/after whole test execution

```typescript
import { BeforeExecution, AfterExecution } from '@qavajs/core';
import { Server } from './server';

const server = new Server();

BeforeExecution(async function () {
    await server.start();
});

AfterExecution(async function () {
    await server.stop();
});
```

### Service
Services are entities that can execute logic before and after the whole test run.

```typescript
import externalService from './externalService';

export default {
    service: [
        {
            options: {
                data: 42
            },
            before() {
                console.log(this.options.data);
            },
            after(result) {
                if (!result.success) process.exitCode = 1;
            }
        },
        {
            options: {
                data: 42
            },
            ...externalService
        }
    ]
}
```
There is a one-minute-long default timeout for the before and after test logic to prevent the entire process from freezing.
To set up a custom timeout in milliseconds, use `serviceTimeout` property in the config file
```typescript
export default {
    serviceTimeout: 1_200_000
}
```

### Extra
[Code Examples](https://github.com/qavajs/demo)
