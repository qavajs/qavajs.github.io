"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3835],{7157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Formatters/xray-formatter","title":"@qavajs/xray-formatter","description":"Xray formatter for cucumber framework","source":"@site/versioned_docs/version-1x/Formatters/xray-formatter.md","sourceDirName":"Formatters","slug":"/Formatters/xray-formatter","permalink":"/docs/1x/Formatters/xray-formatter","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-1x/Formatters/xray-formatter.md","tags":[],"version":"1x","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"sidebar","previous":{"title":"junit formatter","permalink":"/docs/1x/Formatters/junit-formatter"},"next":{"title":"Guides","permalink":"/docs/1x/category/guides"}}');var a=r(4848),s=r(8453);const o={sidebar_position:5},i="@qavajs/xray-formatter",c={},l=[{value:"Installation",id:"installation",level:3},{value:"How it works?",id:"how-it-works",level:3},{value:"F.A.Q",id:"faq",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"qavajsxray-formatter",children:"@qavajs/xray-formatter"})}),"\n",(0,a.jsx)(t.p,{children:"Xray formatter for cucumber framework"}),"\n",(0,a.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"To install formatter run"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"npm install @qavajs/xray-formatter"})}),"\n",(0,a.jsx)(t.p,{children:"add to formatter section in config file"}),"\n",(0,a.jsx)(t.p,{children:"cloud configuration:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"export default {\n    format: ['@qavajs/xray-formatter:report/xray.out'],\n    formatOptions: {\n        xray: {\n            client_id: 'client_id', // generated client_id from xray cloud\n            client_secret: 'client_secret', // generated client_id from xray client_secret\n            testExecutionKey: 'ABC-12', // test execution jira key to send result\n            tagRegexp: 'TEST_(.+)' // optional, parse tag regexp. default /@(.+-\\d+)/\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"server configuration:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"export default {\n    format: ['@qavajs/xray-formatter:report/xray.out'],\n    formatOptions: {\n        xray: {\n            endpoint: 'https://your.jira.instance/jira', //jira api endpoint\n            client_secret: 'client_secret', // personal access key from jira instance\n            testExecutionKey: 'ABC-12', // test execution jira key to send result\n            tagRegexp: 'TEST_(.+)' // optional, parse tag regexp\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"how-it-works",children:"How it works?"}),"\n",(0,a.jsxs)(t.p,{children:["Plugin reads all tags in jira key format (@ABCD-123) or ones that matches ",(0,a.jsx)(t.code,{children:"tagRegexp"})," and update corresponding scenarios in provided test execution"]}),"\n",(0,a.jsx)(t.h3,{id:"faq",children:"F.A.Q"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Does it work with Jira Server?"}),"\n",(0,a.jsx)(t.p,{children:"Yes"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"What if multiple tests are mapped to one xray test case?"}),"\n",(0,a.jsx)(t.p,{children:"Test will get status from last result with corresponding tag"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"What if multiple xray cases are mapped to one test?"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);