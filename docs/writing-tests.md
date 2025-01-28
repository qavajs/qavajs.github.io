---
sidebar_position: 2
---

# Writing tests

**qavajs** test cases are user-friendly and leverage the Gherkin language, providing a variety of predefined steps for performing actions and assertions.

## First test
Let's walk through an example to demonstrate how to write a test.

features/wikipedia.feature
```gherkin
Feature: Wikipedia
  
  Scenario: Search in wikipedia
    Given I open '$wikipedia' url
    When I type 'JavaScript' to 'Search Input'
    And I click 'Search Button'
    And I expect text of 'Title' equals 'JavaScript'
```

In this scenario:

- `Search Input`, `Search Button`, and `Title` are aliases for corresponding [page objects](./Guides/page-object-v2.mdx).
- `$wikipedia` is an alias for a [constant](./Guides/memory.md) URL.

## Page Objects
Define the page objects in the page_object folder:

page_object/index.ts
```typescript
import { locator } from '@qavajs/steps-playwright/po';

export class App {
    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
    Title = locator('#firstHeading');
}
```

## Constants
Declare the constant for the Wikipedia URL in the memory folder.
memory/index.ts
```typescript
export class Constant {
    wikipedia = 'https://www.wikipedia.org/';
}
```

## Summary
- The feature file (`wikipedia.feature`) outlines the test scenario using Gherkin syntax.
- The page objects (`index.ts` in the `page_object` folder) define the locators for the elements used in the test.
- The constants (`index.ts` in the `memory` folder) store the URLs or other constants used in the tests