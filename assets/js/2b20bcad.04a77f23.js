"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[8555],{7462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Formatters/xray-formatter","title":"@qavajs/xray-formatter","description":"Jira Xray formatter for cucumber framework","source":"@site/docs/Formatters/xray-formatter.md","sourceDirName":"Formatters","slug":"/Formatters/xray-formatter","permalink":"/docs/Formatters/xray-formatter","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Formatters/xray-formatter.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"junit formatter","permalink":"/docs/Formatters/junit-formatter"},"next":{"title":"Guides","permalink":"/docs/category/guides"}}');var a=r(4848),s=r(8453);const i={sidebar_position:5},o="@qavajs/xray-formatter",c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"F.A.Q",id:"faq",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"qavajsxray-formatter",children:"@qavajs/xray-formatter"})}),"\n",(0,a.jsx)(t.p,{children:"Jira Xray formatter for cucumber framework"}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install @qavajs/xray-formatter\n"})}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(t.p,{children:"Add to format section in config file"}),"\n",(0,a.jsx)(t.p,{children:"cloud configuration:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"export default {\n    format: [\n        ['@qavajs/xray-formatter', 'report/xray.out']\n    ],\n    formatOptions: {\n        xray: {\n            client_id: 'client_id', // generated client_id from xray cloud\n            client_secret: 'client_secret', // generated client_id from xray client_secret\n            testExecutionKey: 'ABC-12' // test execution jira key to send result\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"server configuration:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"export default {\n    format: ['@qavajs/xray-formatter:report/xray.out'],\n    formatOptions: {\n        xray: {\n            endpoint: 'https://your.jira.instance/jira', //jira api endpoint\n            client_secret: 'client_secret', // personal access key from jira instance\n            testExecutionKey: 'ABC-12' // test execution jira key to send result\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,a.jsx)(t.p,{children:"Plugin reads all tags in jira key format (@ABCD-123) and update corresponding scenarios in provided test execution"}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"F.A.Q"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Does it work with Jira Server?"}),"\n",(0,a.jsx)(t.p,{children:"Yes"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"What multiple test automated cases mapped to one xray test case?"}),"\n",(0,a.jsx)(t.p,{children:"Test will get status from last result with corresponding tag"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"What multiple xray cases mapped to one test automation case?"}),"\n",(0,a.jsx)(t.p,{children:"All mapped test cases will get same status"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);