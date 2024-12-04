"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[8062],{3683:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Steps-v1/visual-testing-v1","title":"@qavajs/steps-visual-testing v1","description":"Step library to perform visual testing using pixelmatch library","source":"@site/docs/Steps-v1/visual-testing-v1.md","sourceDirName":"Steps-v1","slug":"/Steps-v1/visual-testing-v1","permalink":"/docs/Steps-v1/visual-testing-v1","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Steps-v1/visual-testing-v1.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"@qavajs/steps-lighthouse v1","permalink":"/docs/Steps-v1/lighthouse-v1"}}');var r=s(4848),i=s(8453);const l={sidebar_position:10},a="@qavajs/steps-visual-testing v1",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Steps",id:"steps",level:2},{value:"I expect {string} screenshot to equal {string}",id:"i-expect-string-screenshot-to-equal-string",level:3},{value:"I expect {string} screenshot to equal {string}: [DataTable]",id:"i-expect-string-screenshot-to-equal-string-datatable",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"qavajssteps-visual-testing-v1",children:"@qavajs/steps-visual-testing v1"})}),"\n",(0,r.jsx)(t.p,{children:"Step library to perform visual testing using pixelmatch library"}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install @qavajs/steps-visual-testing@1\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        require: [\n            '@qavajs/steps-visual-testing/index.js'\n        ],\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"i-expect-string-screenshot-to-equal-string",children:"I expect {string} screenshot to equal {string}"}),"\n",(0,r.jsx)(t.p,{children:"Compare two screenshots from memory (saved as base64)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"actual"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"alias of actual screenshot"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"expected"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"alias of expected screenshot"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"Then I expect '$actual' screenshot to equal '$expected'\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"i-expect-string-screenshot-to-equal-string-datatable",children:"I expect {string} screenshot to equal {string}: [DataTable]"}),"\n",(0,r.jsx)(t.p,{children:"Compare two screenshots from memory (saved as base64) with provided compare parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"actual"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"alias of actual screenshot"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"expected"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"alias of expected screenshot"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"params"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"DataTable"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"table of key-value params"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Supported params:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"threshold"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive"})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gherkin",children:"Then I expect '$actual' screenshot to equal '$expected':\n  | threshold | 0.5 |\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);