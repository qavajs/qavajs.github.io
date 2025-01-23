---
sidebar_position: 1
---

# 💡 Getting Started

The **qavajs** is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, **qavajs** provides out of the box integration with ReportPortal, Mobitru, and the Xray and many more.

Next, you will be shown how to build your own low-code test automation framework with the **qavajs**.

### 📦 Installation from scratch
Once you have set up a clear Node.js project, run the command `npm init @qavajs` to launch the CLI application. This will configure qavajs and install the necessary modules for your testing purposes. After the process is completed, a config.ts (or config.js) file will be generated in the project's root directory, which will be used to configure test execution.
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
    And I wait until text of 'Wikipedia Article > Title' not to contain 'Python'
    And I wait until 'Wikipedia Article > Title' to be visible
    And I expect 'Wikipedia Article > Title' to be visible

    Examples:
      | term       |
      | JavaScript |
      | Java       |
```
It is worth mentioning the expression **'$wikipediaUrl'** in the example above starting with '**\$**' interpreted as a **qavajs** memory variable whose value is taken from the Memory class instance in runtime. [More details](https://qavajs.github.io/docs/Guides/memory).  
Another feature is a locator alias expression like **'Wikipedia > Search Input'** separated by the '**\>**' sign that describes hierarchic page structure. See how [to organize your page object](https://qavajs.github.io/docs/Guides/page-object-v2).

### 🛠️ Configuration
In addition to the default features of Cucumber [config file](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options) the **qavajs** config implements following [capabilities](https://github.com/qavajs/core/blob/main/src/IQavajsConfig.ts) to provide the advanced flexibility.

### 🔬 Test execution
If you have the basic config `npx qavajs` will launch test execution.  
To specify custom path to the config file use `npx qavajs run --config <config>`.  
In case if your config exports an object with multiple properties, you can specify which property to read `npx qavajs run --profile <profile>`.

### 📘 Extra
[Code Examples](https://github.com/qavajs/demo)
