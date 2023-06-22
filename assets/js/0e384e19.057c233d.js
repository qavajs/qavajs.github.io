"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Get Started",l={unversionedId:"intro",id:"intro",title:"Get Started",description:"@qavajs",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Steps",permalink:"/docs/category/steps"}},s={},p=[{value:"@qavajs",id:"qavajs",level:2},{value:"Installation from scratch",id:"installation-from-scratch",level:3},{value:"Test execution",id:"test-execution",level:3},{value:"Config file",id:"config-file",level:3},{value:"VSCode Extension",id:"vscode-extension",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get Started"),(0,r.kt)("h2",{id:"qavajs"},"@qavajs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://qavajs.github.io/"},"https://qavajs.github.io/")),(0,r.kt)("p",null,"@qavajs framework is a solution that allow to significantly reduces automation project setup time due to set of predefined steps, built-in page object solution and OOB integrations with other test related stuff (like EPAM ReportPortal etc.)"),(0,r.kt)("h3",{id:"installation-from-scratch"},"Installation from scratch"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm init")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/cli")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npx qavajs install")," and select modules to install. The system will generate config file based on your answers."),(0,r.kt)("h3",{id:"test-execution"},"Test execution"),(0,r.kt)("p",null,"JS ",(0,r.kt)("inlineCode",{parentName:"p"},"npx qavajs run --config <config> --profile <profile>")),(0,r.kt)("p",null,"TS ",(0,r.kt)("inlineCode",{parentName:"p"},"npx ts-node --project tsconfig.json node_modules/@qavajs/cli/bin/qavajs.js run --config config.ts")),(0,r.kt)("p",null,"default config is cucumber.js\ndefault profile is default"),(0,r.kt)("h3",{id:"config-file"},"Config file"),(0,r.kt)("p",null,"Config file extends Cucumber ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options"},"config file"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"default timeout for step definitions"),(0,r.kt)("td",{parentName:"tr",align:null},"10000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"services")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"list of services to run before/after tests (setup/teardown selenium, appium etc.)"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"instance of memory object with loaded constants and computed"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("h3",{id:"vscode-extension"},"VSCode Extension"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/qavajs/vscode/releases"},"https://github.com/qavajs/vscode/releases")))}u.isMDXComponent=!0}}]);