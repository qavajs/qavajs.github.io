---
sidebar_position: 8
---

# @qavajs/steps-gmail v1
Step library to test emails via gmail client

## Installation
```
npm install @qavajs/steps-gmail@1
```

## Configuration
```javascript
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-gmail/index.js'
        ],
        gmail: {
            timeout: 30000, // timeout to wait email delivery
            interval: 5000 // interval to check email delivery
        }
    }
}
```

## Email Steps
--------------
### I log in to gmail as \{string}

Login to gmail

|     param      |  type  |                             description                              | 
|:--------------:|:------:|:--------------------------------------------------------------------:|
| credentialsKey | string | memory key that resolves to Gmail auth object (google.auth.fromJSON) |

credentials key should resolve to object like:
```json
{
    "type": "authorized_user",
    "client_id": "client_id",
    "client_secret": "client_secret",
    "refresh_token": "refresh_token"
}
```
example:
```gherkin
When I log in to gmail as '$gmailUser'
```
                     
--------------
### I wait email matching \{string}

Wait until email matching advanced search syntax query to exist

|    param    |  type  |                               description                                | 
|:-----------:|:------:|:------------------------------------------------------------------------:|
| searchQuery | string | advanced search syntax query https://support.google.com/mail/answer/7190 |

```gherkin
When I wait email matching 'subject:some subject'
```

--------------
### I save email matching \{string} as \{string}

Save email matching advanced search syntax query to memory as https://nodemailer.com/extras/mailparser/ object
If query returns multiple message only first one will be saved.

|    param    |  type  |                               description                                | 
|:-----------:|:------:|:------------------------------------------------------------------------:|
| searchQuery | string | advanced search syntax query https://support.google.com/mail/answer/7190 |
|  memoryKey  | string |                         memory key to save email                         |

```gherkin
When I save email matching 'subject:some subject' as 'email'
Then I expect '$email.subject' to equal 'some subject'
```
