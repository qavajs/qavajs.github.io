---
sidebar_position: 2
---

# Writing Tests

## Introduction

**qavajs** is a powerful testing framework that uses the Gherkin language to create human-readable test scenarios. This approach bridges the gap between technical implementation and business requirements, making tests accessible to both developers and non-technical stakeholders.

## Test Structure

qavajs tests follow the Behavior-Driven Development (BDD) approach with:

- **Features**: Collections of related test scenarios
- **Scenarios**: Individual test cases written in Gherkin syntax
- **Steps**: Actions and assertions using predefined patterns

## Your First Test

Let's build a complete test that searches Wikipedia and validates the results:

### Create a Feature File

Start by creating a feature file in the `features` directory:

`features/wikipedia.feature`
```gherkin
Feature: Wikipedia Search Functionality
  As a user
  I want to search for content on Wikipedia
  So that I can find information quickly

  Scenario: Search for JavaScript documentation
    Given I open '$wikipedia' url
    When I type 'JavaScript' to 'Search Input'
    And I click 'Search Button'
    Then I expect text of 'Title' equals 'JavaScript'
    And I expect text of 'Content' contains 'JavaScript is a programming language'
    
  Scenario: Search with non-existent term
    Given I open '$wikipedia' url
    When I type 'NonExistentTerm123XYZ' to 'Search Input'
    And I click 'Search Button'
    Then I expect 'No Results Message' to be visible
```

### Understanding Gherkin Steps

In the scenarios above:

- `Given` steps set up the initial state (opening a URL)
- `When` steps perform actions (typing, clicking)
- `Then` steps validate expected outcomes (checking text, visibility)
- `And` extends the previous step type

### Elements Used in Tests

- `Search Input`, `Search Button`, etc. are **page object** aliases
- `$wikipedia` is a **constant** reference to the Wikipedia URL

## Common qavajs Steps

qavajs provides many predefined steps for different actions 
(check corresponding [step modules](category/steps) to learn more):

### Navigation Steps
```gherkin
Given I open '$wikipedia' url
When I go back
And I refresh page
```

### Interaction Steps
```gherkin
When I click 'Search Button'
And I type 'JavaScript' to 'Search Input'
And I clear 'Search Input'
And I hover over 'Menu Icon'
```

### Assertion Steps
All qavajs modules use same set of [validations](./Guides/validation.mdx)
```gherkin
Then I expect 'Search Button' to be visible
And I expect text of 'Title' equals 'JavaScript'
And I expect text of 'Content' contains 'programming language'
And I expect 'Main Image' to be present
```

### Data Steps
```gherkin
When I save text of 'Title' as 'title'
When I save current url as 'url'
```

## Page Objects

[Page Objects](./Guides/page-object.mdx) represent UI elements in a structured way, making tests more maintainable.

Create your page objects in the `page_object` directory:

`page_object/index.ts`
```typescript
import { locator } from '@qavajs/steps-playwright/po';

export class App {
    // Search functionality
    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
    
    // Result page elements
    Title = locator('#firstHeading');
    Content = locator('#mw-content-text .mw-parser-output p');
    NoResultsMessage = locator('.mw-search-nonefound');
}
```

You can also organize page objects by component or page:

`page_object/wikipedia/searchPage.ts`
```typescript
import { locator } from '@qavajs/steps-playwright/po';

export class SearchPage {
    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
}
```

`page_object/wikipedia/resultPage.ts`
```typescript
import { locator } from '@qavajs/steps-playwright/po';

export class ResultPage {
    Title = locator('#firstHeading');
    Content = locator('#mw-content-text .mw-parser-output p');
    NoResultsMessage = locator('.mw-search-nonefound');
}
```

## Constants and Memory Management

qavajs provides a [Memory](./Guides/memory.mdx) system to store and reuse values across tests.

### Defining Constants

Create a constants file in the `memory` directory:

`memory/index.ts`
```typescript
export class Constant {
    // URLs
    wikipedia = 'https://www.wikipedia.org/';
    googleSearch = 'https://www.google.com/';
    
    // Test data
    validUsername = 'testuser';
    validPassword = 'Test@1234';
}
```

## Running Tests

Execute tests using the qavajs CLI:

```bash
# Run all tests
npx qavajs run

# Run specific feature
npx qavajs run --feature features/wikipedia.feature

# Run with specific tags
npx qavajs run --tags @smoke
```

## Summary
- The feature file (`wikipedia.feature`) outlines the test scenario using Gherkin syntax.
- The page objects (`index.ts` in the `page_object` folder) define the locators for the elements used in the test.
- The constants (`index.ts` in the `memory` folder) store the URLs or other constants used in the tests