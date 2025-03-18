---
sidebar_position: 6
---

# @qavajs/steps-sql
Step library to work with relational databases

## Installation
```
npm install @qavajs/steps-sql@1
```

## Configuration
```javascript
const { MySQLClient, PgClient } = require('@qavajs/steps-sql/clients');
module.exports = {
    default: {
        require: [
            'node_modules/@qavajs/steps-sql/index.js'
        ],
        // provide map contains client that implemennts DBClient interface
        // if only one client exist it can be defined as default property
        dbClients: {
            default: new MySQLClient({
                host: 'http://127.0.0.1',
                port: 3306,
                database: 'qavajsdb',
                user: 'username',
                password: 'password'
            }),
            pg: new PgClient({
                host: 'http://127.0.0.1',
                port: 3307,
                database: 'qavajsdb2',
                username: 'username',
                password: 'password'
            }),
        }
    }
}
```

## Implemented Clients

| client      | description                                                                |
|-------------|----------------------------------------------------------------------------|
| MySQLClient | MySQL client. Works on top of https://www.npmjs.com/package/mysql2/v/2.3.3 |
| PgClient    | PostgreSQL client. Works on top of https://www.npmjs.com/package/pg        |

## Default DB Steps
---
### I execute SQL query: [multiline]

Execute sql query in default db provided as multiline string

| param |  type  |     description      |        example        |
|:-----:|:------:|:--------------------:|:---------------------:|
| query | string | SQL query to execute | I select * from table |

```gherkin
When I execute SQL query:
"""
select smth from some_table where smth = 42
"""
```

---
### I execute SQL query and save result as \{string}: [multiline]

Execute sql query in default db provided as multiline string and save result

|   param   |  type  |       description        |        example        |
|:---------:|:------:|:------------------------:|:---------------------:|
| memoryKey | string | memory key to save value |       sqlResult       |
|   query   | string |   SQL query to execute   | I select * from table |

```gherkin
When I execute SQL query and save result as 'sqlResult':
"""
select smth from some_table where smth = 42
"""
```

---
### I execute \{string} SQL query

Execute sql query in default db

|   param   |  type  |       description        |        example        |
|:---------:|:------:|:------------------------:|:---------------------:|
|   query   | string |   SQL query to execute   | I select * from table |

```gherkin
When I execute 'select smth from some_table where smth = 42' SQL query
```

---
### I execute \{string} SQL query and save result as \{string}

Execute sql query in default db and save result

|   param   |  type  |       description        |        example        |
|:---------:|:------:|:------------------------:|:---------------------:|
|   query   | string |   SQL query to execute   | I select * from table |
| memoryKey | string | memory key to save value |       sqlResult       |

```gherkin
When I execute 'select * from some_table' SQL query and save result as 'sqlResult'
```

## Specified DB Steps

---
### I execute SQL query in \{string} db: [multiline]

Execute sql query in specified db provided as multiline string

| param |  type  |     description      |        example        |
|:-----:|:------:|:--------------------:|:---------------------:|
|  db   | string | db to execute script |    default, aurora    |
| query | string | SQL query to execute | I select * from table |

```gherkin
When I execute SQL query in 'aurora' db:
"""
select smth from some_table where smth = 42
"""
```

---
### I execute SQL query in \{string} and save result as \{string}: [multiline]

Execute sql query in specified db provided as multiline string and save result

|   param   |  type  |       description        |        example        |
|:---------:|:------:|:------------------------:|:---------------------:|
|    db     | string |   db to execute script   |    default, aurora    |
| memoryKey | string | memory key to save value |       sqlResult       |
|   query   | string |   SQL query to execute   | I select * from table |

```gherkin
When I execute SQL query in 'aurora' db and save result as 'sqlResult':
"""
select smth from some_table where smth = 42
"""
```

---
### I execute \{string} SQL query in \{string} db

Execute sql query in specified db

| param |  type  |     description      |        example        |
|:-----:|:------:|:--------------------:|:---------------------:|
| query | string | SQL query to execute | I select * from table |
|  db   | string | db to execute script |    default, aurora    |

```gherkin
When I execute 'select smth from some_table where smth = 42' SQL query in 'aurora' db
```

---
### I execute \{string} SQL query in \{string} db and save result as \{string}

Execute sql query in specified db and save result

|   param   |  type  |       description        |        example        |
|:---------:|:------:|:------------------------:|:---------------------:|
|   query   | string |   SQL query to execute   | I select * from table |
|    db     | string |   db to execute script   |    default, aurora    |
| memoryKey | string | memory key to save value |       sqlResult       |

```gherkin
When I execute 'select * from some_table' SQL query in 'aurora' db and save result as 'sqlResult'
```

