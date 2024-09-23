"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[40],{4396:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(5893),a=s(1151);const t={sidebar_position:3},i="Parallel Execution",o={id:"Guides/parallel",title:"Parallel Execution",description:"Framework support parallel execution out of the box.",source:"@site/docs/Guides/parallel.md",sourceDirName:"Guides",slug:"/Guides/parallel",permalink:"/docs/Guides/parallel",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/parallel.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composing Steps",permalink:"/docs/Guides/composing-steps"},next:{title:"Validation",permalink:"/docs/Guides/validation"}},l={},d=[{value:"Test Sharding",id:"test-sharding",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"parallel-execution",children:"Parallel Execution"})}),"\n",(0,r.jsx)(n.p,{children:"Framework support parallel execution out of the box.\nNumber of parallel threads can be set in config file (by default it is config.js)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        parallel: 6\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"distributing-uniq-user-per-thread",children:"Distributing uniq user per thread"}),"\n",(0,r.jsx)(n.p,{children:"The simplest way to assign uniq user is to use memory capabilities and environment variable produced by Cucumber (or use util function - parallel)."}),"\n",(0,r.jsx)(n.p,{children:"Here is example of memory file (by default it is memory/index.js):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { parallel } = require('@qavajs/memory/utils');\n\nclass Memory {\n    user = parallel([\n        { username: 'user1', password: 'password' },\n        { username: 'user2', password: 'password' }\n    ]);\n}\n\nmodule.exports = Memory;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then values can be used in Gherkin scripts."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"Feature: Parallel\n  \n  Scenario: Verify that user is able to login\n    When I type '$user.username' to 'Username Input'\n    And I type '$user.password' to 'Password Input'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test-sharding",children:"Test Sharding"}),"\n",(0,r.jsxs)(n.p,{children:["qavajs provides ability to shard your tests between different machines. To do so pass ",(0,r.jsx)(n.code,{children:"--shard x/y"})," parameter in CLI,\nwhere x - current shard, y - total number of shards."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx qavajs run --config config.js --shard 1/2\nnpx qavajs run --config config.js --shard 2/2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var r=s(7294);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);