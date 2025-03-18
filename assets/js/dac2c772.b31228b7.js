"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[5232],{9822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"Steps/sql","title":"@qavajs/steps-sql","description":"Step library to work with relational databases","source":"@site/versioned_docs/version-2x/Steps/sql.md","sourceDirName":"Steps","slug":"/Steps/sql","permalink":"/docs/Steps/sql","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-2x/Steps/sql.md","tags":[],"version":"2x","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"sidebar","previous":{"title":"@qavajs/steps-files","permalink":"/docs/Steps/files"},"next":{"title":"@qavajs/steps-accessibility-ea","permalink":"/docs/Steps/accessibility-ea"}}');var l=n(4848),r=n(8453);const i={sidebar_position:6},d="@qavajs/steps-sql",c={},x=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Implemented Clients",id:"implemented-clients",level:2},{value:"Default DB Steps",id:"default-db-steps",level:2},{value:"I execute SQL query: [multiline]",id:"i-execute-sql-query-multiline",level:3},{value:"I execute SQL query and save result as {string}: [multiline]",id:"i-execute-sql-query-and-save-result-as-string-multiline",level:3},{value:"I execute {string} SQL query",id:"i-execute-string-sql-query",level:3},{value:"I execute {string} SQL query and save result as {string}",id:"i-execute-string-sql-query-and-save-result-as-string",level:3},{value:"Specified DB Steps",id:"specified-db-steps",level:2},{value:"I execute SQL query in {string} db: [multiline]",id:"i-execute-sql-query-in-string-db-multiline",level:3},{value:"I execute SQL query in {string} and save result as {string}: [multiline]",id:"i-execute-sql-query-in-string-and-save-result-as-string-multiline",level:3},{value:"I execute {string} SQL query in {string} db",id:"i-execute-string-sql-query-in-string-db",level:3},{value:"I execute {string} SQL query in {string} db and save result as {string}",id:"i-execute-string-sql-query-in-string-db-and-save-result-as-string",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"qavajssteps-sql",children:"@qavajs/steps-sql"})}),"\n",(0,l.jsx)(t.p,{children:"Step library to work with relational databases"}),"\n",(0,l.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"npm install @qavajs/steps-sql\n"})}),"\n",(0,l.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-javascript",children:"const { MySQLClient, PgClient } = require('@qavajs/steps-sql/clients');\nmodule.exports = {\n    default: {\n        require: [\n            'node_modules/@qavajs/steps-sql/index.js'\n        ],\n        // provide map contains client that implemennts DBClient interface\n        // if only one client exist it can be defined as default property\n        dbClients: {\n            default: new MySQLClient({\n                host: 'http://127.0.0.1',\n                port: 3306,\n                database: 'qavajsdb',\n                user: 'username',\n                password: 'password'\n            }),\n            pg: new PgClient({\n                host: 'http://127.0.0.1',\n                port: 3307,\n                database: 'qavajsdb2',\n                username: 'username',\n                password: 'password'\n            }),\n        }\n    }\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"implemented-clients",children:"Implemented Clients"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"client"}),(0,l.jsx)(t.th,{children:"description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"MySQLClient"}),(0,l.jsxs)(t.td,{children:["MySQL client. Works on top of ",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/mysql2/v/2.3.3",children:"https://www.npmjs.com/package/mysql2/v/2.3.3"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"PgClient"}),(0,l.jsxs)(t.td,{children:["PostgreSQL client. Works on top of ",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/pg",children:"https://www.npmjs.com/package/pg"})]})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"default-db-steps",children:"Default DB Steps"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-sql-query-multiline",children:"I execute SQL query: [multiline]"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in default db provided as multiline string"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]})})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:'When I execute SQL query:\n"""\nselect smth from some_table where smth = 42\n"""\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-sql-query-and-save-result-as-string-multiline",children:"I execute SQL query and save result as {string}: [multiline]"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in default db provided as multiline string and save result"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key to save value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"sqlResult"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:'When I execute SQL query and save result as \'sqlResult\':\n"""\nselect smth from some_table where smth = 42\n"""\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-string-sql-query",children:"I execute {string} SQL query"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in default db"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]})})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I execute 'select smth from some_table where smth = 42' SQL query\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-string-sql-query-and-save-result-as-string",children:"I execute {string} SQL query and save result as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in default db and save result"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key to save value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"sqlResult"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I execute 'select * from some_table' SQL query and save result as 'sqlResult'\n"})}),"\n",(0,l.jsx)(t.h2,{id:"specified-db-steps",children:"Specified DB Steps"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-sql-query-in-string-db-multiline",children:"I execute SQL query in {string} db: [multiline]"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in specified db provided as multiline string"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db to execute script"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"default, aurora"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:'When I execute SQL query in \'aurora\' db:\n"""\nselect smth from some_table where smth = 42\n"""\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-sql-query-in-string-and-save-result-as-string-multiline",children:"I execute SQL query in {string} and save result as {string}: [multiline]"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in specified db provided as multiline string and save result"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db to execute script"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"default, aurora"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key to save value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"sqlResult"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:'When I execute SQL query in \'aurora\' db and save result as \'sqlResult\':\n"""\nselect smth from some_table where smth = 42\n"""\n'})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-string-sql-query-in-string-db",children:"I execute {string} SQL query in {string} db"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in specified db"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db to execute script"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"default, aurora"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I execute 'select smth from some_table where smth = 42' SQL query in 'aurora' db\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-execute-string-sql-query-in-string-db-and-save-result-as-string",children:"I execute {string} SQL query in {string} db and save result as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Execute sql query in specified db and save result"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"query"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SQL query to execute"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"I select * from table"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"db to execute script"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"default, aurora"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key to save value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"sqlResult"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I execute 'select * from some_table' SQL query in 'aurora' db and save result as 'sqlResult'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);