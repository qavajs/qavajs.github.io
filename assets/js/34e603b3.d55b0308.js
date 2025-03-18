"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[517],{7525:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"Guides/typescript","title":"Typescript","description":"Typescript is supported out of the box via ts-node library","source":"@site/versioned_docs/version-1x/Guides/typescript.md","sourceDirName":"Guides","slug":"/Guides/typescript","permalink":"/docs/1x/Guides/typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-1x/Guides/typescript.md","tags":[],"version":"1x","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"sidebar","previous":{"title":"WDIO Adapter","permalink":"/docs/1x/Guides/wdio-adapter"},"next":{"title":"Webstorm","permalink":"/docs/1x/Guides/webstorm"}}');var r=s(4848),o=s(8453);const i={sidebar_position:5},a="Typescript",d={},p=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"typescript",children:"Typescript"})}),"\n",(0,r.jsx)(t.p,{children:"Typescript is supported out of the box via ts-node library"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export default {\n    parallel: 1,\n    defaultTimeout: 30000,\n    require: [\n        'node_modules/@qavajs/steps-wdio/index.js',\n        'node_modules/@qavajs/steps-memory/index.js',\n        'step_definition/*.ts'\n    ],\n    paths: [\n        'features/**/*.feature'\n    ],\n    format: [\n        '@qavajs/console-formatter'\n    ]\n}\n\nexport const ci = {\n    parallel: 6,\n    defaultTimeout: 30000,\n    require: [\n        'node_modules/@qavajs/steps-wdio',\n        'node_modules/@qavajs/steps-memory',\n        'step_definition/*.ts'\n    ],\n    paths: [\n        'features/**/*.feature'\n    ],\n    format: [\n        '@qavajs/xunit-formatter:report/report.xml'\n    ]\n}\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);