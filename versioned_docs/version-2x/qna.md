---
sidebar_position: 70
---

# FAQ

## Can I use qavajs for free?
Yes, qavajs can be downloaded and installed using npm
```bash
npm init @qavajs
```
The framework’s source code is available on GitHub under the open-source MIT license.

## What is system requirement for qavajs?
[(Node.js)](https://nodejs.org/en) > 20

## Which browsers does qavajs support?
qavajs works on top of different test automation tools (playwright, webdriverio, cypress). 
You can check supported browsers on official pages.

## What programming language do qavajs tests use?
qavajs uses [Gherkin](https://cucumber.io/docs/gherkin/reference) to describe test cases 
and JavaScript/TypeScript to define support code (test data, project specific step definitions, etc)

## Can mobile applications be tested with qavajs?
Yes, qavajs can work on top of [webdriverio](Steps/wdio.md) and use appium to run tests on mobile devices.

## Can API be tested with qavajs?
Yes, you can use [API steps](Steps/api.md) to interact with REST, graphQL and websocket services.

## Can I integrate qavajs into my CI workflow?
Yes. qavajs is Node.js application so can be executed on any agent where Node.js installed.

## What programming languages and techniques do I need to know to use qavajs?
Basic JavaScript and Gherkin knowledge is enough to get started with qavajs and follow code examples.

To improve your end-to-end tests you can learn more about the following:

- CSS/xpath selectors
- HTML5 markup
- Browser JavaScript
- Promises and async/await syntax
- Node.js
- TypeScript

## How can I make sure that qavajs is good choice for my project? How can I convince others?
Evaluate qavajs for your project
### Assess Project Requirements:

- Identify key needs such as language compatibility (JavaScript/TypeScript), BDD-style testing, CI/CD pipeline integration, and cross-browser support.
- Check if qavajs meets your specific test automation goals (e.g., API, UI, or performance testing).

### Explore Key Features of qavajs:

- Cucumber-based BDD Framework: Promotes collaboration by allowing non-technical stakeholders to understand and contribute to test cases.
- Cross-Browser Testing: Supports modern browsers, ensuring coverage across platforms.
- JavaScript Ecosystem: Fits well with Node.js-based environments, especially for full-stack JavaScript projects.
- Extensibility: Can integrate with other tools and frameworks, allowing flexibility.
- Parallel Execution: Saves time by running tests simultaneously.
### Run a Proof of Concept (PoC):

- Set up a small qavajs test suite on your application implementing most important test cases.
- Demonstrate its ease of use, speed, and effectiveness for the types of tests your team needs.
- Highlight any issues resolved compared to your current or alternative frameworks.

### Evaluate Against Competitors:

- Compare qavajs with other frameworks providing similar capability.
- Focus on specific needs: e.g., BDD support, customization, or performance.
- Consider factors like community support, ease of learning, and integration options.

### Check Team Readiness:
- Evaluate the team's familiarity with JavaScript, Cucumber, or related technologies.

## Does qavajs collect or share my test data?
qavajs doesn't collect or share any data.

## How do I ask for technical support?
Create an issue in [qavajs core](https://github.com/qavajs/core/issues) repository, qavajs team will answer as fast as possible.