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
