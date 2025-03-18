---
sidebar_position: 3
---

# @qavajs/steps-api
Step library to work with web API

## Installation
```
npm install @qavajs/steps-api
```

## Configuration
```typescript
export default {
    require: [
        'node_modules/@qavajs/steps-api/index.js'
    ]
}

```
## Parameter Types
### `gqlRequestProperty`
Used to initialize one of two possible GraphQl body properties

- query
- variables

### `bodyParsingType`
Used for parsing responses body

- arrayBuffer
- formData
- blob
- json
- text

## Action Steps

### I send \{method} request to \{url} and save response as \{key}

Send request to the endpoint

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "$BASE_API_URL" and save response as "response"
```
---
### I send \{method} request to \{url} with headers \{headers} and save response as \{key}

Send request to the endpoint

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | string |           memory key with headers           |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "$BASE_API_URL" with headers "$headers" and save response as "response"
```
---
### I send \{method} request to \{url} with qs \{params} and save response as \{key}

Send request to the endpoint with query string

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| params  | string |           query string parameters           |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "$BASE_API_URL" with qs "?category=HR&name=test" and save response as "response"
```
---
### I send \{method} request to \{url} with headers \{headers} with qs \{params} and save response as \{key}

Send request to the endpoint with query string

|  param  |  type  |                 description                 |
|:-------:|:------:|:-------------------------------------------:|
| method  | string |               request method                |
|   url   | string |                endpoint url                 |
| headers | string |           memory key with headers           |
| params  | string |           query string parameters           |
|   key   | string | key that should be used for saving response |

```gherkin
When I send "GET" request to "$BASE_API_URL" with headers "$headers" with qs "?category=HR&name=test" and save response as "response"
```
---
### I send \{method} request to \{url} with Body \{requestBody} and save response as \{key}

Send request with body

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "POST" request to "$BASE_API_URL" with Body "test_data_file.json" and save response as "response"
```
---
### I send \{method} request to \{url} with headers \{headers} with Body \{requestBody} and save response as \{key}

Send request with body

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | string |           memory key with headers           |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "POST" request to "$BASE_API_URL" with headers "$json('headers.json')" with Body "test_data_file.json" and save response as "response"
```
---
### I send \{method} request to \{url} with qs \{params} and Body \{requestBody} and save response as \{key}

Send request with body and query string

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   params    | string |           query string parameters           |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "PUT" request to "https://www.some_service.com/some_endpoint/" with qs "?category=HR&name=test" and Body "test_data_file.json" and save response as "response"
```
---
### I send \{method} request to \{url} with headers \{headers} with qs \{params} and Body \{requestBody} and save response as \{key}

Send request with body and query string

|    param    |  type  |                 description                 |
|:-----------:|:------:|:-------------------------------------------:|
|   method    | string |               request method                |
|     url     | string |                endpoint url                 |
|   headers   | string |           memory key with headers           |
|   params    | string |           query string parameters           |
| requestBody |  JSON  |                request body                 |
|     key     | string | key that should be used for saving response |

```gherkin
When I send "PUT" request to "https://www.some_service.com/some_endpoint/" with headers "$headers" with qs "?category=HR&name=test" and Body "test_data_file.json" and save response as "response"
```
---
### I send \{method} request and save response as \{key} to \{url} with Body: [requestBody]

Send request with body that given as part of Cucumber step

|    param    |        type        |                 description                 |
|:-----------:|:------------------:|:-------------------------------------------:|
|   method    |       string       |               request method                |
|     key     |       string       | key that should be used for saving response |
|     url     |       string       |                endpoint url                 |
| requestBody | string (Multiline) |                request body                 |

```gherkin
When I send "POST" request and save response as "response" to "$BASE_API_URL" with Body:
   """
   {
      "title": "Test Post Request with Body passed as string"
   }
   """
```

### I parse \{response} body as \{type}
MANDATORY STEP THAT SHOULD BE USED AFTER SENDING REQUEST
Parsing body in needed way and adds payload property to response

|  param   |                type                 |      description       |
|:--------:|:-----------------------------------:|:----------------------:|
| response |               string                | response key in memory |
|   type   | [bodyParsingType](#bodyparsingtype) |    type of payload     |

```gherkin
When I parse '$response' body as 'json'
Then I expect '$response.payload.foo' to equal 'bar'
```

## Construction API Steps

---
### I create \{method} request \{requestKey}

Create request and save it to memory

|   param    |  type  |     description     |
|:----------:|:------:|:-------------------:|
|   method   | string |     API method      |
| requestKey | string | key to save request |

```gherkin
When I create 'GET' request 'request'
```

---
### I add headers to \{requestKey}: [headersDataTable]

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
### I add \{requestKey} headers to \{headersKey}

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
### I add body to \{requestKey}: [body]

Add body to request as multiline parameter

|   param    |        type        |      description      |
|:----------:|:------------------:|:---------------------:|
| requestKey |       string       | memory key of request |
|    body    | string (Multiline) |         body          |

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
### I add \{requestKey} body to \{body}

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
### I add \{requestKey} url to \{url}

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
### I send \{requestKey} request and save response as \{responseKey}

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
### I add form data body to \{requestKey}: [dataTable]

Send prepared request and save response

|   param    |   type    |      description      |
|:----------:|:---------:|:---------------------:|
| requestKey |  string   | memory key of request |
| dataTable  | DataTable |         body          |

```gherkin
When I add body to '$request':
| key      | value                    | filename | contentType      |
| formKey  | formValue                |          | application/json |
| otherKey | otherValue               |          | text/plain       |
| fileKey  | $file('./path/file.png') | file.png | image/png        |
```

---
### I create GraphQL request \{requestKey}

Create GraphQL request and save it to memory

|   param    |  type  |     description     |
|:----------:|:------:|:-------------------:|
| requestKey | string | key to save request |

```gherkin
When I create GraphQL request 'request'
```
        
---
### I add \{property} to GraphQL \{string}: [value]

Add GraphQL property

|   param    |                   type                    |      description       |
|:----------:|:-----------------------------------------:|:----------------------:|
|  property  | [gqlRequestProperty](#gqlrequestproperty) |   query or variables   |
| requestKey |                  string                   | memory key of request  |
|   value    |            string (Multiline)             | value multiline string |

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
### I send message to \{string} ws endpoint: [message]

Send message to websocket

|     param     |        type        |          description           |
|:-------------:|:------------------:|:------------------------------:|
| connectionKey |       string       | memory key of saved connection |
|    message    | string (Multiline) |        message to send         |

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
