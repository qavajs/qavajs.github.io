---
sidebar_position: 3
---

# @qavajs/steps-api
This is a core package to get basic API cucumber steps.

`npm install @qavajs/steps-api`

```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-api'
        ]
    }
}
```
## Parameter Types

## API Action Steps

### I send {string} request to {landingUrl}{headers} and save response as {string}

Send request to the endpoint

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | Object |       object with headers (optional)        |
|   key   | string | key that should be used for saving response |
example:
```gherkin
When I send "GET" request to "$BASE_API_URL" with headers "$headers" and save response as "response"
```
---
### I send {string} request to {landingUrl}{headers} with qs {string} and save response as {string}

Send request to the endpoint with query string

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | Object |       object with headers (optional)        |
| params  | string |           query string parameters           |
|   key   | string | key that should be used for saving response |
example:
```gherkin
When I send "GET" request to "https://www.some_service.com/some_endpoint" with qs "?category=HR&name=test" and save response as "response"
```
---
### I send {string} request to {landingUrl}{headers} with Body {json} and save response as {string}

Send request with body

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |
example:
```gherkin
When I send "POST" request to "$BASE_API_URL" with Body "test_data_file.json" and save response as "response"
```
---
### I send {string} request to {landingUrl}{headers} with qs {string} and Body {json} and save response as {string}

Send request with body and query string

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
|   params    | string |           query string parameters           |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |
example:
```gherkin
When I send "PUT" request to "https://www.some_service.com/some_endpoint/" with qs "?category=HR&name=test" and Body "test_data_file.json" and save response as "response"
```
---
### I send {string} request and save response as {string} to {landingUrl}{headers} with Body:

Send request with body that given as part of Cucumber step

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |
example:
```gherkin
When I send "POST" request and save response as "response" to "$BASE_API_URL" with Body:
   """
   {
      "title": "Test Post Request with Body passed as string"
   }
   """
```

## Validation Steps

---
### Response {string} Status Code {apiValidation} {string}

Verify response status code

|    param    |   type   |        description         |
|:-----------:|:--------:|:--------------------------:|
|  response   | Response |       saved response       |
| validation  | Function | function to wait condition |
| statusCode  |  string  |    expected status code    |
example:
```gherkin
Then Response "$response" Status Code equals to "200"
```

---
### Response {string} contains:

Verify that response contains needed properties

|   param   |  type  |          description           |
|:---------:|:------:|:------------------------------:|
| property  |  Any   |  property from saved response  |
| dataTable | Object | data table with all properties |
example:
```gherkin
Then Response "$response.payload.data.items" contains:
      | _id               |
      | appId             |
      | serviceCategory   |
```

---
### Response {string} {apiValidation} {string}

Verifying that response model has necessary type

|    param    |   type   |        description         |
|:-----------:|:--------:|:--------------------------:|
|  response   | Response |       saved response       |
| validation  | Function | function to wait condition |
|    type     |  string  |   expected property type   |

example:
```gherkin
   Then Response "$response.payload.data.items" equals to "array"
```
---
### Response {string} size {apiValidation} {string}

Verify that response array size is equal to|less than|greater than given number

|     param     |   type   |        description         |
|:-------------:|:--------:|:--------------------------:|
|   response    | Response |       saved response       |
|  validation   | Function | function to wait condition |
| expectedValue |  string  |   expected property size   |

example:
```gherkin
Then Response "$response.payload.data.items" size to be above "0"
```
---
### I verify response {string} {apiValidation} {string}

Execute any jsonPath query against response and verify result is equal to expected value

|     param     |   type   |        description         |
|:-------------:|:--------:|:--------------------------:|
|   response    | Response |       saved response       |
|  validation   | Function | function to wait condition |
| expectedValue |  string  |  expected property value   |

example:
```gherkin
Then I verify response "$response.payload.data.items[0].title" equals to "TEST"
```
