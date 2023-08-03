"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(d,s(s({ref:t},p),{},{components:r})):o.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2},s="@qavajs/console-formatter",l={unversionedId:"Formatters/console-formatter",id:"Formatters/console-formatter",title:"@qavajs/console-formatter",description:"Console formatter for cucumber framework",source:"@site/docs/Formatters/console-formatter.md",sourceDirName:"Formatters",slug:"/Formatters/console-formatter",permalink:"/docs/Formatters/console-formatter",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Formatters/console-formatter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"@qavajs/format-report-portal",permalink:"/docs/Formatters/report-portal"},next:{title:"@qavajs/xunit-formatter",permalink:"/docs/Formatters/xunit-formatter"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"qavajsconsole-formatter"},"@qavajs/console-formatter"),(0,n.kt)("p",null,"Console formatter for cucumber framework"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/console-formatter")),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("p",null,"To use formatter just add formatter section in config file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    default: {\n        format: ['@qavajs/console-formatter'],\n        formatOptions: {\n            console: {\n                showLogs: true //show cucumber logs\n            }\n        },\n    }\n}\n")),(0,n.kt)("p",null,"or pass ",(0,n.kt)("inlineCode",{parentName:"p"},"--format @qavajs/console-formatter in cli")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/qavajs/console-formatter/master/assets/report_example.png",alt:null})))}m.isMDXComponent=!0}}]);