"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[1223],{1668:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Steps/accessibility","title":"@qavajs/steps-accessibility","description":"Steps to perform accessibility checks using axe library.","source":"@site/versioned_docs/version-1x/Steps/accessibility.md","sourceDirName":"Steps","slug":"/Steps/accessibility","permalink":"/docs/1x/Steps/accessibility","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-1x/Steps/accessibility.md","tags":[],"version":"1x","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"sidebar","previous":{"title":"@qavajs/steps-sql","permalink":"/docs/1x/Steps/sql"},"next":{"title":"@qavajs/steps-gmail","permalink":"/docs/1x/Steps/gmail"}}');var t=i(4848),a=i(8453);const c={sidebar_position:7},r="@qavajs/steps-accessibility",o={},l=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2},{value:"Steps",id:"steps",level:2},{value:"I perform accessibility check",id:"i-perform-accessibility-check",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"qavajssteps-accessibility",children:"@qavajs/steps-accessibility"})}),"\n",(0,t.jsx)(s.p,{children:"Steps to perform accessibility checks using axe library.\nLibrary can work on top of playwright and webdriverio drivers"}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm install @qavajs/steps-accessibility@1\n"})}),"\n",(0,t.jsx)(s.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        require: [\n            'node_modules/@qavajs/steps-wdio/index.js', //corresponding driver library should be imported first\n            'node_modules/@qavajs/steps-accessibility/index.js'\n        ],\n        /**\n         * Axe configuration to customize axe instance define axe property which is a function that accepts AxeBuilder instance\n         * more info:\n         * https://www.npmjs.com/package/@axe-core/webdriverio\n         * https://www.npmjs.com/package/@axe-core/playwright\n         * @param {AxeBuilder} instance - instance of axe builder \n         * @return {AxeBuilder}\n         */\n        axe: function (instance) {\n            return instance.withTags('wcag2a')\n        },\n        format: [\n            '@qavajs/html-formatter:report.html'\n        ],\n    }\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"i-perform-accessibility-check",children:"I perform accessibility check"}),"\n",(0,t.jsx)(s.p,{children:"Perform accessibility check and attach report"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-gherkin",children:"Feature: Accessibility\n\n  Scenario: perform accessibility check\n    When I open 'https://qavajs.github.io/' url\n    And I perform accessibility check\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>r});var n=i(6540);const t={},a=n.createContext(t);function c(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);