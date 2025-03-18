"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[2688],{7179:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Guides/vscode","title":"Visual Studio Code","description":"https://github.com/qavajs/vscode/releases","source":"@site/versioned_docs/version-2x/Guides/vscode.md","sourceDirName":"Guides","slug":"/Guides/vscode","permalink":"/docs/Guides/vscode","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-2x/Guides/vscode.md","tags":[],"version":"2x","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"sidebar","previous":{"title":"Webstorm","permalink":"/docs/Guides/webstorm"},"next":{"title":"Standalone Solutions","permalink":"/docs/category/standalone-solutions"}}');var i=t(4848),o=t(8453);const a={sidebar_position:7},c="Visual Studio Code",r={},l=[{value:"Features",id:"features",level:2},{value:"Extension Settings",id:"extension-settings",level:2},{value:"How To Use",id:"how-to-use",level:2},{value:"Test Explorer",id:"test-explorer",level:3},{value:"Page Object Explorer",id:"page-object-explorer",level:3},{value:"Page Object Autocomplete",id:"page-object-autocomplete",level:3},{value:"Constants Autocomplete",id:"constants-autocomplete",level:3},{value:"Known Issues and Limitation",id:"known-issues-and-limitation",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"visual-studio-code",children:"Visual Studio Code"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/qavajs/vscode/releases",children:"https://github.com/qavajs/vscode/releases"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=qavajs.qavajs",children:"https://marketplace.visualstudio.com/items?itemName=qavajs.qavajs"})}),"\n",(0,i.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"VSCode Test Explorer"}),"\n",(0,i.jsx)(s.li,{children:"Template Autocomplete"}),"\n",(0,i.jsx)(s.li,{children:"Constants Autocomplete"}),"\n",(0,i.jsx)(s.li,{children:"Page Object Autocomplete"}),"\n",(0,i.jsx)(s.li,{children:"Page Object Explorer"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"extension-settings",children:"Extension Settings"}),"\n",(0,i.jsx)(s.p,{children:"This extension contributes the following settings:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cucumber.features"}),": gherkin files paths (array)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cucumber.glue"}),": step definition file paths (array)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"qavajs.templates"}),": templates files paths (array)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"qavajs.pageObject"}),": page object root file path (string)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"qavajs.memory"}),": memory root file path (string)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"qavajs.launchCommand"}),": qavajs launch command (default: ",(0,i.jsx)(s.code,{children:"npx qavajs run"}),") (string)"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{  \n    "files.associations": {\n        "*.feature": "cucumber"\n    },\n    "cucumber.features": [\n        "features/**/*.feature"\n    ],\n    "cucumber.glue": [\n        "node_modules/@qavajs/**/src/*.ts",\n        "step_definition/*.ts"\n    ],\n    "qavajs.templates": [\n        "templates/*.feature"\n    ],\n    "qavajs.pageObject": "page_object/index.ts",\n    "qavajs.memory": "memory/index.ts",\n    "qavajs.launchCommand": "npx qavajs run --config config.ts",\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"how-to-use",children:"How To Use"}),"\n",(0,i.jsx)(s.h3,{id:"test-explorer",children:"Test Explorer"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:t(3619).A+"",width:"2480",height:"1250"})}),"\n",(0,i.jsx)(s.h3,{id:"page-object-explorer",children:"Page Object Explorer"}),"\n",(0,i.jsxs)(s.p,{children:["Click the copy icon to copy qavajs path\n",(0,i.jsx)(s.img,{src:t(5202).A+"",width:"980",height:"1096"})]}),"\n",(0,i.jsx)(s.h3,{id:"page-object-autocomplete",children:"Page Object Autocomplete"}),"\n",(0,i.jsxs)(s.p,{children:["Type ?\n",(0,i.jsx)(s.img,{src:t(4747).A+"",width:"2066",height:"410"})]}),"\n",(0,i.jsx)(s.h3,{id:"constants-autocomplete",children:"Constants Autocomplete"}),"\n",(0,i.jsxs)(s.p,{children:["Type $\n",(0,i.jsx)(s.img,{src:t(9).A+"",width:"1506",height:"506"})]}),"\n",(0,i.jsx)(s.h2,{id:"known-issues-and-limitation",children:"Known Issues and Limitation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["typescript projects require installed ",(0,i.jsx)(s.code,{children:"ts-node"})]}),"\n",(0,i.jsx)(s.li,{children:"@qavajs/cli > 0.34.2"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/memory_autocomplete-b07f831f8619da1ba066c98eefcc9dd3.png"},4747:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/po_autocomplete-fc8acf0458cce759554a77890067219c.png"},5202:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/po_explorer-6194229b6e0972c3447587bf13399ede.png"},3619:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/test_explorer-af4aa7d9b2f3e7dc48e99a503706e8e4.png"},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(6540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);