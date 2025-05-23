---
sidebar_position: 1
---

# Getting Started

The **qavajs** is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, **qavajs** provides out of the box integration with ReportPortal, Mobitru, and the Xray and many more.

Next, you will be shown how to build your own low-code test automation framework with the **qavajs**.

### 📦 Installation from scratch
Once you have set up a clear Node.js project, run the command 
```bash
npm init @qavajs@1
``` 
to launch the CLI application. This will configure qavajs and install the necessary modules for your testing purposes. After the process is completed, a config.ts (or config.js) file will be generated in the project's root directory, which will be used to configure test execution.

### 👨‍💻 Test development
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
It is worth mentioning the expression **'$wikipediaUrl'** in the example above starting with '**\$**' interpreted as a **qavajs** memory variable whose value is taken from the Memory class instance in runtime. [More details](https://qavajs.github.io/docs/Guides/memory).  
Another feature is a locator alias expression like **'Wikipedia > Search Input'** separated by the '**\>**' sign that describes hierarchic page structure. See how [to organize your page object](Guides/page-object).

### 🛠️ Configuration
In addition to the default features of Cucumber [config file](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options) the **qavajs** config implements following [capabilities](https://github.com/qavajs/core/blob/main/src/IQavajsConfig.ts) to provide the advanced flexibility.

### 🔬 Test execution
If you have the basic config `npx qavajs` will launch test execution.  
To specify custom path to the config file use `npx qavajs run --config <config>`.  
In case if your config exports an object with multiple properties, you can specify which property to read `npx qavajs run --profile <profile>`.

### 🛠️ Override memory values
In case if tests need to be run with updated memory value they can be passed via CLI (e.g run scenarios on some other url)
It can be done by passing `--memory-values` parameter which is JSON with params that need to be overridden. 
For instance, to override `$url` value:

```bash
npx qavajs run --config config.ts --memory-values '{"url": "https://github.com"}'
```

### 🛠️ Pass CLI params to workers
All params that you passed to qavajs cli will be available in `CLI_ARGV` environment variable in all child workers.

### 🛠️ Test Sharding
qavajs provides ability to shard your tests between different machines. To do so pass `--shard x/y` parameter in CLI,
where x - current shard, y - total number of shards.

```
npx qavajs run --config config.js --shard 1/2
npx qavajs run --config config.js --shard 2/2
```

### 🛠️ Execute steps from other steps
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

### 🛠️ Override step definition
`Override` function provides capability to override step implementation and avoid ambiguous exception

```typescript
import { Override } from '@qavajs/core';

When('I do test', async function () {});

Override('I do test', async function () {
    console.log('I am overridden');
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

### 🛠️ Service
Services is an entities that can execute logic before and after whole test run.

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
There is a one minute-long default timeout for a before and after test logic to prevent entire process from freezing.
To set up a custom timeout in milliseconds use serviceTimeout property in the config file
```typescript
export default {
    serviceTimeout: 1_200_000
}
```

### 📘 Extra
[Code Examples](https://github.com/qavajs/demo)
