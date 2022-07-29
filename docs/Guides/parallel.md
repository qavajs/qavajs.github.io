---
sidebar_position: 3
---

# Parallel Execution
Framework support parallel execution out of the box. 
Number of parallel threads can be set in config file (by default it is config.js)
```javascript

module.exports = {
    default: {
        parallel: 6
    }
}

```
# Distributing uniq user per thread
The simplest way to assign uniq user is to use memory capabilities and environment variable produced by Cucumber.

Here is example of memory file (by default it is memory/index.js):

```javascript
const users = [
    {
        username: 'user1',
        password: 'password1'
    },
    {
        username: 'user2',
        password: 'password2'
    },
    {
        username: 'user3',
        password: 'password3'
    }
]

const user = users[process.env.CUCUMBER_WORKER_ID ?? 0];

module.exports = {
    username: user.username,
    password: user.password
};
```

Then values can be used in Gherkin scripts.

```gherkin
Feature: Parallel
  
  Scenario: Verify that user is able to login
    When I type '$username' to 'Username Input'
    And I type '$password' to 'Password Input'
```
