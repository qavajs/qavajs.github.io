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

    Examples:
      | term       |
      | JavaScript |
      | Java       |
```
It is worth mentioning the expression **'$wikipediaUrl'** in the example above, starting with '**\$**' interpreted as a **qavajs** memory variable whose value is taken from the Memory class instance in runtime. [More details](./Commons/memory.mdx).
Another feature is a locator alias expression like **'Wikipedia > Search Input'** separated by the '**\>**' sign that describes hierarchical page structure. See how [to organize your page object](./Commons/page-object.mdx).

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
If `--config` is omitted, `config.ts`, `config.js`, `config.mjs` or `config.cjs` from the current directory is used.

Feature files can be passed as positional arguments (with optional line numbers); they are added to `--paths`:
```bash
npx qavajs run features/login.feature:12 features/cart.feature
```

Run `npx qavajs --help` to see all options and `npx qavajs --version` to print the installed version.

Before the run qavajs prints a table with the resolved configuration (use `--quiet` to hide it).
The table is printed without colors when output is not a terminal or `NO_COLOR` is set (`FORCE_COLOR` overrides this).

#### CLI options

| Flag                   | Type     | Description                                      |
|------------------------|----------|--------------------------------------------------|
| `--config`             | string   | Config file path                                 |
| `--profile`            | string   | Profile name to run                              |
| `--paths`              | string[] | Paths to feature files                           |
| `--tags`, `-t`         | string[] | Tag expression filter (multiple flags are ANDed) |
| `--format`, `-f`       | string[] | Formatter name/path and optional output file     |
| `--format-options`     | string[] | JSON options for formatters (merged)             |
| `--import`, `-i`       | string[] | Support code paths (ESM)                         |
| `--require`, `-r`      | string[] | Support code paths (CJS)                         |
| `--require-module`     | string[] | Transpilation modules to load via `require()`    |
| `--name`               | string[] | Scenario name regex filters                      |
| `--order`              | string   | Run order (`defined` or `random`)                |
| `--parallel`           | number   | Number of worker processes                       |
| `--retry`              | number   | Retry failing tests N times                      |
| `--retry-tag-filter`   | string[] | Tag expression for retryable scenarios           |
| `--dry-run`, `-d`      | boolean  | Prepare run without executing                    |
| `--backtrace`, `-b`    | boolean  | Show full error backtraces                       |
| `--fail-fast`          | boolean  | Stop on first failure                            |
| `--force-exit`         | boolean  | Call `process.exit()` after run                  |
| `--strict`             | boolean  | Fail on pending steps                            |
| `--shard`              | string   | Shard tests (`x/y`)                              |
| `--world-parameters`   | string[] | JSON parameters passed to World (merged)         |
| `--memory-values`      | string   | JSON values to override in memory                |
| `--no-error-exit`      | boolean  | Suppress non-zero exit code on test failure      |
| `--quiet`, `-q`        | boolean  | Do not print the config table                    |
| `--help`, `-h`         | boolean  | Show help                                        |
| `--version`, `-v`      | boolean  | Show version                                     |

`--format-options` and `--world-parameters` can be passed multiple times; the JSON objects are merged.
Unknown options are not rejected (they can be read by your code via `CLI_ARGV`), but options that look like a typo of a known one (e.g. `--tag`) produce a warning.
Invalid values (malformed JSON in `--world-parameters`/`--format-options`/`--memory-values`, non-integer `--parallel`/`--retry`, unknown profile or missing config file) fail fast with a readable error.

### UI mode
UI mode opens an interactive test runner in the browser:

```bash
npx qavajs ui --config <config> --profile <profile>
```

- browse features, rules, scenario outlines and examples as a tree with live status
- run all tests, a feature, a rule, an outline or a single scenario; stop a run at any time
- filter by name, file or `@tag`, and by status (failed, passed, skipped, not run)
- inspect steps with durations, errors, data tables, doc strings and attachments (logs, images, video, json)
- view the feature source with step results, and the full console output of the run
- reload the test tree after changing features or step definitions

Every run is executed in a separate process with the same config, profile and CLI options (`--tags`, `--world-parameters`, `--memory-values`, etc.),
so `BeforeExecution`/`AfterExecution` hooks are called once per run. Formatters from the config are not used in UI mode.

| Flag        | Default     | Description                           |
|-------------|-------------|---------------------------------------|
| `--port`    | random      | Port of the UI server                 |
| `--host`    | `localhost` | Host to bind the UI server to         |
| `--no-open` |             | Do not open the browser automatically |

Keyboard shortcuts: `F5` / `Ctrl+Enter` run visible tests, `Esc` stops the run, `/` focuses the filter, arrow keys navigate the tree, `Enter` runs the focused item.

### Page object
[Page object guide](./Commons/page-object.mdx)

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
    expect(await memoryValue.value()).to.equal('ts');
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
qavajs supports cucumber-js built-in sharding to split your tests between different machines. To do so pass `--shard x/y` parameter in CLI,
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

Fixture({ name: 'pdp', tags: '@pdp' }, async function() {
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

### Extra
[Code Examples](https://github.com/qavajs/demo)
