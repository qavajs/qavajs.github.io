---
sidebar_position: 10
---

# Data-Driven Testing

Data-driven testing runs the same scenario logic against multiple sets of input data. qavajs supports several approaches through Cucumber's native constructs and the memory system.

## Scenario Outline

`Scenario Outline` combined with an `Examples` table is the most straightforward way to repeat a scenario with different data:

```gherkin
Feature: Wikipedia search

  Scenario Outline: Search returns correct article for <term>
    Given I open '$wikipedia' url
    When I type '<term>' to 'Search Input'
    And I click 'Search Button'
    Then I expect text of 'Article Title' to equal '<term>'

    Examples:
      | term       |
      | JavaScript |
      | TypeScript |
      | Node.js    |
```

Each row in `Examples` produces a separate scenario. Tags can be applied to individual `Examples` blocks:

```gherkin
  Scenario Outline: Login attempt
    Given I open '$loginUrl' url
    When I type '<username>' to 'Username Input'
    And I type '<password>' to 'Password Input'
    And I click 'Login Button'
    Then I expect '<result>' to be visible

    @smoke
    Examples: valid credentials
      | username | password  | result    |
      | admin    | admin123  | Dashboard |

    @regression
    Examples: invalid credentials
      | username | password | result         |
      | admin    | wrong    | Error Message  |
      | unknown  | pass     | Error Message  |
```

## Data Tables

Use a `DataTable` to pass structured data to a single step. This is useful when the number of fields varies or when the data is more readable as a table than as step parameters.

```gherkin
Scenario: Fill registration form
  When I fill following fields:
    | First Name | John     |
    | Last Name  | Doe      |
    | Email      | john@doe.com |
    | Password   | Secret1! |
```

In a custom step definition:

```typescript
import { When, DataTable } from '@qavajs/core';

When('I fill following fields:', async function(table: DataTable) {
    const rows = table.rows();
    for (const [field, value] of rows) {
        const resolvedValue = await this.getValue(value);
        await this.playwright.page.fill(`[placeholder="${field}"]`, resolvedValue);
    }
});
```

## Memory-Driven Data

Store complex data structures in memory and reference them in steps. This is useful for data that is computed, shared across scenarios, or loaded from an external source.

### Inline with `$js()`

Generate values inline using the built-in JavaScript expression evaluator:

```gherkin
Scenario: Create user with random email
  When I save '$js("user_" + Date.now() + "@example.com")' as 'email'
  And I type '$email' to 'Email Input'
  And I click 'Register Button'
  Then I expect text of 'Confirmation' to contain '$email'
```

### Computed functions in Memory

Define generator functions in your Memory class:

```typescript
// memory/index.ts
export class Memory {
    randomEmail = () => `test+${Date.now()}@example.com`;
    randomUsername = () => `user_${Math.floor(Math.random() * 9999)}`;
    futureDate = (days: number) => {
        const d = new Date();
        d.setDate(d.getDate() + days);
        return d.toISOString().split('T')[0];
    };
}
```

Reference them in feature files:

```gherkin
Scenario: Register with generated email
  When I type '$randomEmail()' to 'Email Input'
  And I type '$randomUsername()' to 'Username Input'
```

### Objects and nested access

Save a full object to memory and access its properties with dot notation:

```gherkin
Scenario: Use saved order data
  When I save json to memory as 'order':
    """
    {
        "product": "qavajs T-shirt",
        "quantity": 2,
        "size": "M"
    }
    """
  And I type '$order.product' to 'Product Search'
  And I select '$order.size' option from 'Size Dropdown' dropdown
```

## Parameterized Page Objects

Combine `Scenario Outline` with template locators to drive both data and element selection from the table:

```gherkin
Feature: Product filter

  Scenario Outline: Filter products by <category>
    Given I open '$shopUrl' url
    When I click 'Filter By Category (<category>)'
    Then I expect number of elements in 'Product Cards' collection to be above '0'

    Examples:
      | category    |
      | Electronics |
      | Clothing    |
      | Books       |
```

```typescript
// page_object/index.ts
import { locator } from '@qavajs/steps-playwright/po';

export class App {
    FilterByCategory = locator.template((cat: string) =>
        `[data-filter="${cat}"]`
    );
    ProductCards = locator('.product-card');
}
```

## Loading Data from Files

For large data sets, load them from JSON or CSV files in your Memory class:

```typescript
// memory/index.ts
import { readFileSync } from 'fs';
import { join } from 'path';

const users = JSON.parse(
    readFileSync(join(__dirname, 'data/users.json'), 'utf-8')
);

export class Memory {
    testUsers = users;
    adminUser = users.find((u: any) => u.role === 'admin');
}
```

```gherkin
Scenario: Admin can access settings
  When I type '$adminUser.username' to 'Username Input'
  And I type '$adminUser.password' to 'Password Input'
  And I click 'Login Button'
  Then I expect 'Settings Link' to be visible
```

## Choosing an Approach

| Approach | Best for |
|---|---|
| `Scenario Outline` + `Examples` | Fixed, human-readable test matrix defined upfront |
| `DataTable` | Structured multi-field input within one scenario |
| `$js()` inline | One-off computed values (timestamps, randoms) |
| Memory computed functions | Reusable generators shared across many scenarios |
| Memory loaded from files | Large data sets or data maintained by the team |
