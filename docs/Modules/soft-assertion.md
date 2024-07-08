---
sidebar_position: 2
---

# @qavajs/soft-assertion
Module that allow to use soft asserts in qavajs tests

## Installation
```shell
npm install @qavajs/soft-assertion
```

## Usage

Add module to requireModule and set activation tag (default is @softAssert).
Soft assertion change behavior of Cucumber and Then steps will not cause test case failure.
```javascript
module.exports = {
    default: {
        requireModule: [
            '@qavajs/soft-assertion'
        ],
        softAssertTag: '@yourTag' 
    }
}
```
