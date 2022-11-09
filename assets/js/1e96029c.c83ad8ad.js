"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[51],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="@qavajs/template",i={unversionedId:"Modules/template",id:"Modules/template",title:"@qavajs/template",description:"Module that allow to define step definitions on Gherkin language.",source:"@site/docs/Modules/template.md",sourceDirName:"Modules",slug:"/Modules/template",permalink:"/docs/Modules/template",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Modules/template.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/docs/category/modules"},next:{title:"@qavajs/soft-assertion",permalink:"/docs/Modules/soft-assertion"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qavajstemplate"},"@qavajs/template"),(0,r.kt)("p",null,"Module that allow to define step definitions on Gherkin language."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/template")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"To use templates their location need to be passed to templates property of config file and library need to be listed\nin require"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    default: {\n        require: [],\n        requireModule: [\n            '@qavajs/template'\n        ],\n        templates: ['templates/*.feature'] // glob patter to features with templates\n    }\n}\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Templates\n\n  Scenario: I login\n    When I open 'https://your-app.com'\n    And I type 'username' to 'Login Form > Username Input'\n    And I type 'password' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n")),(0,r.kt)("p",null,"Then following template can be called from scenario as simple step"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login\n    Then I expect 'Header' to be visible\n")),(0,r.kt)("p",null,"Templates also can accept parameters as < param> e.g"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Templates\n\n  Scenario: I login as '<username>' with '<password>' password\n    When I open 'https://your-app.com'\n    And I type '<username>' to 'Login Form > Username Input'\n    And I type '<password>' to 'Login Form > Password Input'\n    And I click 'Login Form > Login Button'\n")),(0,r.kt)("p",null,"Then following template can be called with actual params"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"Feature: Auth\n\n  Scenario: Verify that user is able to login\n    When I login as 'admin' with 'admin' password\n    Then I expect 'Header' to be visible\n")))}c.isMDXComponent=!0}}]);