---
sidebar_position: 3
---

# Parallel Execution
Framework support parallel execution out of the box. 
Number of parallel threads can be set in config file (by default it is config.js)
```typescript
export default {
    // other configs
    parallel: 6
}
```
# Distributing uniq user per thread
The simplest way to assign uniq user is to use memory capabilities and environment variable produced by Cucumber (or use util function - parallel).

Here is example of memory file (by default it is memory/index.js):

```typescript
import { parallel } from '@qavajs/memory/utils';

expoer default class Memory {
    user = parallel([
        { username: 'user1', password: 'password' },
        { username: 'user2', password: 'password' }
    ]);
}
```

Then values can be used in Gherkin scripts.

```gherkin
Feature: Parallel
  
  Scenario: Verify that user is able to login
    When I type '$user.username' to 'Username Input'
    And I type '$user.password' to 'Password Input'
```

### Test Sharding
qavajs provides ability to shard your tests between different machines. To do so pass `--shard x/y` parameter in CLI,
where x - current shard, y - total number of shards.

```
npx qavajs run --config config.js --shard 1/2
npx qavajs run --config config.js --shard 2/2
```
