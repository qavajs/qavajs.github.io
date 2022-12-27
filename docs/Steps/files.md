---
sidebar_position: 5
---

# @qavajs/steps-files
Step library to work with file system

## Installation
`npm install @qavajs/steps-files`

## Config
```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-files'
        ],
        // add fileTimeout property in case you need to customize built-in interval and timeout
        fileTimeout: {
            interval: 1000,
            timeout: 1000
        }
    }
}

```

## Parameter types
### fileValidation
validation of values (can be negated with _not_)
- to be equal
- to be strictly equal
- to be deeply equal
- to have member
- to be match
- to contain
- to be above
- to be below
- to be greater than
- to be less than
- to have type

## Wait Steps
---
### I wait until file matching {string} regexp appears in {string}

Wait until file matching regexp appear in directory

| param |  type  |       description       |   example    |
|:-----:|:------:|:-----------------------:|:------------:|
| file  | string | file name regex to wait |   f.+\.txt   |
|  dir  | string | directory path to wait  | ./yourFolder |
example:
```gherkin
When I wait until file matching 'f.+\.txt' regexp appears in './test-e2e/folder'
When I wait until file matching '$fileRegexp' regexp appears in '$folder'
```

---
### I wait until {string} file appears

Wait until file appear

| param |  type  |    description    |        example        |
|:-----:|:------:|:-----------------:|:---------------------:|
| file  | string | file path to wait | ./yourFolder/file.txt |
example:
```gherkin
When I wait until './test-e2e/folder/file.txt' file appears
When I wait until '$filePath' file appears
```

## Validation Steps
---
### I expect {string} text file content {fileValidation} {string}

Verify that text file content satisfy validation

|     param      |  type  |  description   |         example         |
|:--------------:|:------:|:--------------:|:-----------------------:|
|      file      | string |   file path    |  ./yourFolder/file.txt  |
| validationType | string |   file path    | to be equal, to contain |
| expectedValue  | string | expected value |      text, $value       |
example:
```gherkin
When I expect './folder/file.txt' text file content to be equal 'file content'
When I expect '$filePath' text file content to contain '$content'
```

## Memory Steps
---
### I save {string} file content as {string}

Save file content to memory as buffer

|   param   |  type  | description |        example         |
|:---------:|:------:|:-----------:|:----------------------:|
|   file    | string |  file path  | ./yourFolder/file.jpeg |
| memoryKey | string | memory key  |   fileContent, value   |
example:
```gherkin
When I save './folder/file.txt' file content as 'fileContent'
When I save '$filePath' file content as 'fileContent'
```

---
### I save {string} text file content as {string}

Save file content to memory as text (utf-8)

|   param   |  type  | description |        example        |
|:---------:|:------:|:-----------:|:---------------------:|
|   file    | string |  file path  | ./yourFolder/file.txt |
| memoryKey | string | memory key  |  textContent, value   |
example:
```gherkin
When I save './folder/file.txt' text file content as 'fileContent'
When I save '$filePath' text file as 'fileContent'
```

---
### I save {string} Excel file content as {string}

Save file content to memory as Excel object (https://www.npmjs.com/package/xlsx)

|   param   |  type  | description |        example         |
|:---------:|:------:|:-----------:|:----------------------:|
|   file    | string |  file path  | ./yourFolder/file.xlsx |
| memoryKey | string | memory key  |  excelContent, value   |
example:
```gherkin
When I save './folder/file.txt' text file content as 'fileContent'
When I save '$filePath' text file as 'fileContent'
# if you use @qavajs/memory package
Then I expect '$excelFile.Sheets.SheetName.A1.v' to be equal 'expectedValueOfCell'
```

---
### I save {string} pdf file content as {string}

Save file content to memory as pdf object with following properties:

|    property    |  type  |            description            |
|:--------------:|:------:|:---------------------------------:|
| textMultiline  | string |  text of pdf in multiline format  |
| textSingleLine | string | text of pdf in single-line format |
|    metadata    | Object |           pdf metadata            |


|   param   |  type  | description |        example        |
|:---------:|:------:|:-----------:|:---------------------:|
|   file    | string |  file path  | ./yourFolder/file.txt |
| memoryKey | string | memory key  |  textContent, value   |
example:
```gherkin
When I save './folder/file.pdf' pdf file content as 'pdfContent'
When I save '$filePath' pdf file content as 'pdfContent'
# if you use @qavajs/memory package
Then I expect '$pdfContent.textMultiline' to be equal 'expectedPdfContent'
```
