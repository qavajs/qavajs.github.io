---
sidebar_position: 1
---

# Get Started

## @qavajs

@qavajs framework is a solution that allow to significantly reduces automation project setup time due to set of predefined steps, built-in page object solution and OOB integrations with other test related stuff (like EPAM ReportPortal etc.)

### Installation
`npm install @qavajs/cli`

Then run

`npx qavajs install`

and select modules to install. The system will generate config file based on your answers.

### Test execution
`npx qavajs run --config <config> --profile <profile>`

default config is cucumber.js

default profile is default

### Config file
Config file extends Cucumber [config file](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options):

| Name             | Type     | Description                                                                       | Default |
|------------------|----------|-----------------------------------------------------------------------------------|---------|
| `defaultTimeout` | `number` | default timeout for step definitions                                              | 10000   |
| `services`       | `[]`     | list of services to run before/after tests (setup/teardown selenium, appium etc.) | []      |
| `memory`         | `object` | instance of memory object with loaded constants and computed                      | {}      |
