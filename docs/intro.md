---
sidebar_position: 1
---

# Get Started

The **qavajs** is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, **qavajs** provides seamless integration with ReportPortal, Mobitru, and the Xray test management system right out of the box.

Next, you will be shown how to build your own **qavajs** based test automation framework.

### Installation from scratch
Once you have a clear Node.js project run
`npm init @qavajs`
to invoke CLI application to configure the qavajs and install modules related to your testing purposes.
After the process is done you will have a _config.ts(js)_ file in project root directory that is going to be used to configure test execution.

### Test development
As the **qavajs** based on the Cucumber the test scripts are written in [Gherkin](https://github.com/cucumber/gherkin/blob/main/MARKDOWN_WITH_GHERKIN.md) language of both built-in steps and those you will create yourself.
```gherkin
Feature: Wikipedia

  @wikipedia
  Scenario Outline: Search in wikipedia (<term>)
    Given I open '$wikipediaUrl' url
    When I type '<term>' to 'Wikipedia > Search Input'
    And I click 'Wikipedia > Search Button'
    And I expect text of 'Wikipedia Article > Title' equals '<term>'
    And I wait until text of 'Wikipedia Article > Title' not to contain 'Python'
    And I wait until 'Wikipedia Article > Title' to be visible
    And I expect 'Wikipedia Article > Title' to be visible

    Examples:
      | term       |
      | JavaScript |
      | Java       |
```
It is worth mentioning the expression_'$wikipediaUrl'_ in the example above starting with "**\$**" sign interpreted as a **qavajs** memory variable whose values are taken from the Memory class instance in runtime. More detailed documentation available on [github](https://github.com/qavajs/memory).

Another feature is a locator alias expression **'Wikipedia > Search Input'** separated by the "**\>**" sign that describes hierarchic page structure. See how [to take advantage of it](https://qavajs.github.io/docs/v2).

### Config file
In addition to the default capabilities of Cucumber [config file](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options) the **qavajs** config implements following [ones](https://github.com/qavajs/core/blob/main/src/IQavajsConfig.ts) to provide the advanced flexibility.

### Test execution
If you have the basic config `npx qavajs` will run test execution.  
To specify custom path to the config file use `npx qavajs run --config <config>`.  
In case if your config exports an object with multiple properties, you can specify which property to read `npx qavajs run --profile <profile>`.

### Extra
[Code Examples](https://github.com/qavajs/demo)
