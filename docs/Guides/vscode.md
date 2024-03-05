---
sidebar_position: 7
---
# Visual Studio Code

https://github.com/qavajs/vscode/releases

https://marketplace.visualstudio.com/items?itemName=qavajs.qavajs

## Features

- VSCode Test Explorer
- Template Autocomplete
- Constants Autocomplete
- Page Object Autocomplete
- Page Object Explorer

## Extension Settings

This extension contributes the following settings:

* `cucumber.features`: gherkin files paths (array)
* `cucumber.glue`: step definition file paths (array)
* `qavajs.templates`: templates files paths (array)
* `qavajs.pageObject`: page object root file path (string)
* `qavajs.memory`: memory root file path (string)
* `qavajs.launchCommand`: qavajs launch command (default: `npx qavajs run`) (string)

```json
{  
    "files.associations": {
        "*.feature": "cucumber"
    },
    "cucumber.features": [
        "features/**/*.feature"
    ],
    "cucumber.glue": [
        "node_modules/@qavajs/**/src/*.ts",
        "step_definition/*.ts"
    ],
    "qavajs.templates": [
        "templates/*.feature"
    ],
    "qavajs.pageObject": "page_object/index.ts",
    "qavajs.memory": "memory/index.ts",
    "qavajs.launchCommand": "npx qavajs run --config config.ts",
}
```

## How To Use

### Test Explorer
![](../../static/img/test_explorer.png)

### Page Object Explorer
Click the copy icon to copy qavajs path
![](../../static/img/po_explorer.png)

### Page Object Autocomplete
Type ?
![](../../static/img/po_autocomplete.png)

### Constants Autocomplete
Type $
![](../../static/img/memory_autocomplete.png)

## Known Issues and Limitation

* typescript projects require installed `ts-node`
* @qavajs/cli > 0.34.2
