"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3932],{3572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const l={sidebar_position:8},r="@qavajs/steps-gmail",a={id:"Steps/gmail",title:"@qavajs/steps-gmail",description:"Step library to test emails via gmail client",source:"@site/docs/Steps/gmail.md",sourceDirName:"Steps",slug:"/Steps/gmail",permalink:"/docs/Steps/gmail",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Steps/gmail.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"@qavajs/steps-accessibility",permalink:"/docs/Steps/accessibility"},next:{title:"@qavajs/steps-lighthouse",permalink:"/docs/Steps/lighthouse"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Email Steps",id:"email-steps",level:2},{value:"I log in to gmail as {string}",id:"i-log-in-to-gmail-as-string",level:3},{value:"I wait email matching {string}",id:"i-wait-email-matching-string",level:3},{value:"I save email matching {string} as {string}",id:"i-save-email-matching-string-as-string",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"qavajssteps-gmail",children:"@qavajs/steps-gmail"})}),"\n",(0,s.jsx)(t.p,{children:"Step library to test emails via gmail client"}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install @qavajs/steps-gmail\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"module.exports = {\n    default: {\n        require: [\n            'node_modules/@qavajs/steps-gmail/index.js'\n        ],\n        gmail: {\n            timeout: 30000, // timeout to wait email delivery\n            interval: 5000 // interval to check email delivery\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"email-steps",children:"Email Steps"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"i-log-in-to-gmail-as-string",children:"I log in to gmail as {string}"}),"\n",(0,s.jsx)(t.p,{children:"Login to gmail"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"credentialsKey"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"memory key that resolves to Gmail auth object (google.auth.fromJSON)"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"credentials key should resolve to object like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "type": "authorized_user",\n    "client_id": "client_id",\n    "client_secret": "client_secret",\n    "refresh_token": "refresh_token"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"When I log in to gmail as '$gmailUser'\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"i-wait-email-matching-string",children:"I wait email matching {string}"}),"\n",(0,s.jsx)(t.p,{children:"Wait until email matching advanced search syntax query to exist"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"searchQuery"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["advanced search syntax query ",(0,s.jsx)(t.a,{href:"https://support.google.com/mail/answer/7190",children:"https://support.google.com/mail/answer/7190"})]})]})})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"When I wait email matching 'subject:some subject'\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"i-save-email-matching-string-as-string",children:"I save email matching {string} as {string}"}),"\n",(0,s.jsxs)(t.p,{children:["Save email matching advanced search syntax query to memory as ",(0,s.jsx)(t.a,{href:"https://nodemailer.com/extras/mailparser/",children:"https://nodemailer.com/extras/mailparser/"})," object\nIf query returns multiple message only first one will be saved."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"searchQuery"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["advanced search syntax query ",(0,s.jsx)(t.a,{href:"https://support.google.com/mail/answer/7190",children:"https://support.google.com/mail/answer/7190"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"memory key to save email"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-gherkin",children:"When I save email matching 'subject:some subject' as 'email'\nThen I expect '$email.subject' to equal 'some subject'\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);