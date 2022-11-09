"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[812],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},262:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="@qavajs/format-report-portal",l={unversionedId:"Formatters/report-portal",id:"Formatters/report-portal",title:"@qavajs/format-report-portal",description:"Formatter that sends result to EPAM ReportPortal",source:"@site/docs/Formatters/report-portal.md",sourceDirName:"Formatters",slug:"/Formatters/report-portal",permalink:"/docs/Formatters/report-portal",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Formatters/report-portal.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Formatters",permalink:"/docs/category/formatters"},next:{title:"@qavajs/console-formatter",permalink:"/docs/Formatters/console-formatter"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2}],c={toc:s};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qavajsformat-report-portal"},"@qavajs/format-report-portal"),(0,o.kt)("p",null,"Formatter that sends result to EPAM ReportPortal"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/format-report-portal")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"Add formatter to config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    default: {\n        format: [\n            '@qavajs/format-report-portal'\n        ],\n        formatOptions: {\n            rpConfig: {\n                token: 'your token',\n                endpoint: 'https://your-rp-instance/api/v1',\n                description: 'Description',\n                tags: ['Tag'],\n                project: 'your project',\n                launch: 'your launch name'\n            },\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);