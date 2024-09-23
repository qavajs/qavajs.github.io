"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[5015],{9995:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=s(5893),a=s(1151);const r={sidebar_position:1},o="@qavajs/cypress",i={id:"StandaloneSolutions/cypress",title:"@qavajs/cypress",description:"qavajs implementation on top of cypress runner",source:"@site/docs/StandaloneSolutions/cypress.md",sourceDirName:"StandaloneSolutions",slug:"/StandaloneSolutions/cypress",permalink:"/docs/StandaloneSolutions/cypress",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/StandaloneSolutions/cypress.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"@qavajs/playwright",permalink:"/docs/StandaloneSolutions/playwright"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"qavajscypress",children:"@qavajs/cypress"})}),"\n",(0,t.jsx)(n.p,{children:"qavajs implementation on top of cypress runner"}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install cypress\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install @qavajs/cypress @qavajs/cypress-runner-adapter @qavajs/memory @qavajs/po-cypress\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"cypress.config.js"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { defineConfig } = require('cypress');\nconst cucumber = require('@qavajs/cypress-runner-adapter/adapter');\nmodule.exports = defineConfig({\n    e2e: {\n        specPattern: 'cypress/features/**/*.feature', //path to features\n        supportFile: 'cypress/support/e2e.js', //path to main support file\n        setupNodeEvents(on, config) {\n            on('file:preprocessor', cucumber)\n        },\n    },\n});\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"support file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import defineQavajs from '@qavajs/cypress/defineQavajs';\nimport '@qavajs/cypress';\n\nimport PageObject from '../page_object/'; // path to qavajs page objects\nimport Memory from '../memory'; // path to qavajs memory\n\ndefineQavajs({\n    pageObject: new PageObject(),\n    memory: new Memory()\n});\n\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(7294);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);