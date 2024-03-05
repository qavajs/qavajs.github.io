---
sidebar_position: 3
---

# @qavajs/steps-api
Step library to work with API

## Installation
`npm install @qavajs/steps-api`

## Configuration
```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-api/index.js'
        ]
    }
}
```
## Parameter Types

## Action Steps

### I send \{string} request to \{landingUrl}\{headers} and save response as \{string}

Send request to the endpoint

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | Object |       object with headers (optional)        |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "$BASE_API_URL" with headers "$headers" and save response as "response"
```
---
### I send \{string} request to \{landingUrl}\{headers} with qs \{string} and save response as \{string}

Send request to the endpoint with query string

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | Object |       object with headers (optional)        |
| params  | string |           query string parameters           |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "https://www.some_service.com/some_endpoint" with qs "?category=HR&name=test" and save response as "response"
```
---
### I send \{string} request to \{landingUrl}\{headers} with Body \{json} and save response as \{string}

Send request with body

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "POST" request to "$BASE_API_URL" with Body "test_data_file.json" and save response as "response"
```
---
### I send \{string} request to \{landingUrl}\{headers} with qs \{string} and Body \{json} and save response as \{string}

Send request with body and query string

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
|   params    | string |           query string parameters           |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "PUT" request to "https://www.some_service.com/some_endpoint/" with qs "?category=HR&name=test" and Body "test_data_file.json" and save response as "response"
```
---
### I send \{string} request and save response as \{string} to \{landingUrl}\{headers} with Body:

Send request with body that given as part of Cucumber step

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | Object |       object with headers (optional)        |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "POST" request and save response as "response" to "$BASE_API_URL" with Body:
   """
   {
      "title": "Test Post Request with Body passed as string"
   }
   """
```

### I parse \{string} body as \{bodyParsingType}
MANDATORY STEP THAT SHOULD BE USED AFTER SENDING REQUEST
Parsing body in needed way and adds payload property to response

|  param   |  type  |      description       |
|:--------:|:------:|:----------------------:|
| response | string | response key in memory |
|   type   | string |    type of payload     |

```gherkin
When I parse '$response' body as 'json'
Then I expect '$response.payload.foo' to equal 'bar'
```

## Validation Steps

---
### Response \{string} Status Code \{apiValidation} \{string}

Verify response status code

|    param    |   type   |        description         |
|:-----------:|:--------:|:--------------------------:|
|  response   | Response |       saved response       |
| validation  | Function | function to wait condition |
| statusCode  |  string  |    expected status code    |

```gherkin
Then Response "$response" Status Code equals to "200"
```

---
### Response \{string} contains:

Verify that response contains needed properties

|   param   |  type  |          description           |
|:---------:|:------:|:------------------------------:|
| property  |  Any   |  property from saved response  |
| dataTable | Object | data table with all properties |

```gherkin
Then Response "$response.payload.data.items" contains:
      | _id               |
      | appId             |
      | serviceCategory   |
```

---
### Response \{string} \{apiValidation} \{string}

Verifying that response model has necessary type

|    param    |   type   |        description         |
|:-----------:|:--------:|:--------------------------:|
|  response   | Response |       saved response       |
| validation  | Function | function to wait condition |
|    type     |  string  |   expected property type   |

```gherkin
   Then Response "$response.payload.data.items" equals to "array"
```
---
### Response \{string} size \{apiValidation} \{string}

Verify that response array size is equal to|less than|greater than given number

|     param     |   type   |        description         |
|:-------------:|:--------:|:--------------------------:|
|   response    | Response |       saved response       |
|  validation   | Function | function to wait condition |
| expectedValue |  string  |   expected property size   |

```gherkin
Then Response "$response.payload.data.items" size to be above "0"
```
---
### I verify response \{string} \{apiValidation} \{string}

Execute any jsonPath query against response and verify result is equal to expected value

|     param     |   type   |        description         |
|:-------------:|:--------:|:--------------------------:|
|   response    | Response |       saved response       |
|  validation   | Function | function to wait condition |
| expectedValue |  string  |  expected property value   |

```gherkin
Then I verify response "$response.payload.data.items[0].title" equals to "TEST"
```

## Construction API Steps

---
### I create \{string} request \{string}

Create request and save it to memory

|   param    |  type  |     description     |
|:----------:|:------:|:-------------------:|
|   method   | string |     API method      |
| requestKey | string | key to save request |

```gherkin
When I create 'GET' request 'request'
```

---
### I add headers to \{string}: [DataTable]

Add data table of headers to request

|      param       |   type    |        description         |
|:----------------:|:---------:|:--------------------------:|
|    requestKey    |  string   |   memory key of request    |
| headersDataTable | DataTable | key value array of headers |

```gherkin
When I create 'GET' request 'request'
And I add headers to '$request':
    | Content-Type | application/json |
```

---
### I add \{string} headers to \{string}

Add headers to request

|   param    |  type  |                   description                    |
|:----------:|:------:|:------------------------------------------------:|
| requestKey | string |              memory key of request               |
| headersKey | string | memory key of headers that resolves to JS object |

```gherkin
When I create 'GET' request 'request'
And I add '$headers' headers to '$request'
```

---
### I add body to \{string}: [Multiline]

Add body to request as multiline parameter

|   param    |  type  |      description      |
|:----------:|:------:|:---------------------:|
| requestKey | string | memory key of request |
|    body    | string |         body          |

```gherkin
When I create 'GET' request 'request'
And I add body to '$request':
    """
     {
         "message": "qavajs"
     }
    """
```

---
### I add \{string} body to \{string}

Add body to request

|   param    |  type  |      description      |
|:----------:|:------:|:---------------------:|
| requestKey | string | memory key of request |
|    body    | string |         body          |

```gherkin
When I create 'GET' request 'request'
And I add '$body' body to '$request'
```

---
### I add \{string} url to \{string}

Add url to request

|   param    |  type  |      description      |
|:----------:|:------:|:---------------------:|
| requestKey | string | memory key of request |
|    url     | string |          url          |

```gherkin
When I create 'GET' request 'request'
And I add 'https://qavajs.github.io/' url to '$request'
```

---
### I send \{string} request and save response as \{string}

Send prepared request and save response

|    param    |  type  |         description         |
|:-----------:|:------:|:---------------------------:|
| requestKey  | string |    memory key of request    |
| responseKey | string | memory key to save response |

```gherkin
When I create 'GET' request 'request'
And I add 'https://qavajs.github.io/' url to '$request'
And I send '$request' request and save response as 'response'
```

---
### I create GraphQL request \{string}

Create GraphQL request and save it to memory

|   param    |  type  |     description     |
|:----------:|:------:|:-------------------:|
| requestKey | string | key to save request |

```gherkin
When I create GraphQL request 'request'
```
        
---
### I add \{gqlRequestProperty} to GraphQL \{string}: [Multiline]

Add GraphQL property

|   param    |  type  |      description       |
|:----------:|:------:|:----------------------:|
|  property  | string |   query or variables   |
| requestKey | string | memory key of request  |
|   value    | string | value multiline string |

```gherkin
When I create GraphQL request 'request'
And I add query to GraphQL '$request':
"""
query {
  characters(page: 2, filter: { name: "rick" }) {
    results {
      name
    }
  }
}
"""    
And I add variables to GraphQL '$request':
"""
{
  "value": 42
}
"""
```

## Websocket Steps

---
### I connect to \{string} ws endpoint \{string}

Connect to websocket endpoint and save connection to memory

|   param    |  type  |     description     |
|:----------:|:------:|:-------------------:|
|    url     | string | websocket endpoint  |
| requestKey | string | key to save request |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
```

---
### I save message from \{string} ws endpoint as \{string}

Save message from websocket connection to memory

|     param     |  type  |          description           |
|:-------------:|:------:|:------------------------------:|
| connectionKey | string | memory key of saved connection |
|   memoryKey   | string |   memory key to save message   |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
And I save message from '$ws' ws endpoint as 'message'
```

---
### I save message matching \{string} from \{string} ws endpoint as \{string}'

Save message matching regexp from websocket connection to memory

|     param     |  type  |          description           |
|:-------------:|:------:|:------------------------------:|
|    regexp     | string |   regexp to filter messages    |
| connectionKey | string | memory key of saved connection |
|   memoryKey   | string |   memory key to save message   |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
And I save message matching 'qavajs test' from '$ws' ws endpoint as 'message'
```

---
### I send \{string} message to \{string} ws endpoint

Send message to websocket

|     param     |  type  |          description           |
|:-------------:|:------:|:------------------------------:|
|    message    | string |        message to send         |
| connectionKey | string | memory key of saved connection |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
And I send 'qavajs' message to '$ws' ws endpoint
```

---
### I send message to \{string} ws endpoint: [Multiline]

Send message to websocket

|     param     |  type  |          description           |
|:-------------:|:------:|:------------------------------:|
| connectionKey | string | memory key of saved connection |
|    message    | string |        message to send         |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
And I send message to '$ws' ws endpoint:
"""
qavajs
"""
```

---
### I close \{string} ws connection

Close websocket connection

|     param     |  type  |          description           |
|:-------------:|:------:|:------------------------------:|
| connectionKey | string | memory key of saved connection |

```gherkin
When I connect to 'ws://localhost:3000' ws endpoint 'ws'
And I close '$ws' ws connection
```
