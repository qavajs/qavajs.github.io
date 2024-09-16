"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[7570],{894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(5893),a=t(1151),l=t(4866),o=t(5162);const s={sidebar_position:2},i="Page Object",c={id:"Guides/page-object",title:"Page Object",description:"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements.",source:"@site/docs/Guides/page-object.mdx",sourceDirName:"Guides",slug:"/Guides/page-object",permalink:"/docs/Guides/page-object",draft:!1,unlisted:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Guides/page-object.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/docs/Guides/memory"},next:{title:"Composing Steps",permalink:"/docs/Guides/composing-steps"}},d={},p=[{value:"Create page object",id:"create-page-object",level:2},{value:"Working with collection",id:"working-with-collection",level:2},{value:"Ignore hierarchy",id:"ignore-hierarchy",level:2},{value:"Optional selector property",id:"optional-selector-property",level:2},{value:"Immediate option",id:"immediate-option",level:2},{value:"Dynamic selectors",id:"dynamic-selectors",level:2},{value:"Native framework selectors",id:"native-framework-selectors",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"page-object",children:"Page Object"})}),"\n",(0,r.jsx)(n.p,{children:"Framework provides capability to call getElement method from po object that resolves plain-english selector and return element or array of elements."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { When } = require('@cucumber/cucumber');\nconst { po } = require('@qavajs/po');\n\nWhen(/^click '(.+)'$/, async function (alias) {\n    const element = await po.getElement(alias);\n    await element.waitForClickable();\n    await element.click();\n});\n"})})}),(0,r.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { When } from '@cucumber/cucumber';\nimport { po } from '@qavajs/po';\n\nWhen(/^click '(.+)'$/, async function (alias: string) {\n    const element = await po.getElement(alias);\n    await element.waitForClickable();\n    await element.click();\n});\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When click '#1 of Multiple Component > Child Item'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Framework provides capability to get single element from collection by index (#index of Collection) or inner text (#text in Collection)."}),"\n",(0,r.jsx)(n.h2,{id:"create-page-object",children:"Create page object"}),"\n",(0,r.jsx)(n.p,{children:"There are two methods $ and $$ that allow registering elements and collections.\nAn element can be defined as supported selector or as an instance of the component class."}),"\n",(0,r.jsx)(n.p,{children:"Each not top-level component should have selector property or be inherited from Component class and accepted selector in constructor."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"/**\n *  import po depending to selected driver\n *  wdio - @qavajs/po\n *  playwright - @qavajs/po-playwright\n *  testcafe - @qavajs/po-testcafe\n */\nconst { $, $$, Component } = require('@qavajs/po');\n\nclass MultipleComponent extends Component {\n    ChildItem = $('div');\n}\n\nclass SingleComponent {\n    selector = '.container';\n    ChildItem = $('.child-item');\n}\n\nclass App {\n    SingleElement = $('.single-element');\n    List = $$('.list li');\n    SingleComponent = $(new SingleComponent());\n    MultipleComponents = $$(new MultipleComponent('.list-components li'));\n}\n\nmodule.exports = new App();\n"})})}),(0,r.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"/**\n *  import po depending to selected driver\n *  wdio - @qavajs/po\n *  playwright - @qavajs/po-playwright\n *  testcafe - @qavajs/po-testcafe\n */\nimport { $, $$, Component } from '@qavajs/po';\n\nclass MultipleComponent extends Component {\n    ChildItem = $('div');\n}\n\nclass SingleComponent {\n    selector = '.container';\n    ChildItem = $('.child-item');\n}\n\nclass App {\n    SingleElement = $('.single-element');\n    List = $$('.list li');\n    SingleComponent = $(new SingleComponent());\n    MultipleComponents = $$(new MultipleComponent('.list-components li'));\n}\n\nexport default new App();\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"working-with-collection",children:"Working with collection"}),"\n",(0,r.jsx)(n.p,{children:"Collection elements can be accessed using prefixes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"By index:"})," ",(0,r.jsx)(n.code,{children:"#{index} of Collection"})," (access 1st element in collection)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I click '#1 of Collection'\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"By partial text:"})," ",(0,r.jsx)(n.code,{children:"#{text} in Collection"})," (access first element which text contains {text})"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I click '#some partial text in Collection'\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"By exact text:"})," ",(0,r.jsx)(n.code,{children:"@{text} in Collection"})," (access first element which text exactly match {text})"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I click '@some exact text in Collection'\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"By regexp:"})," ",(0,r.jsx)(n.code,{children:"/{regexp}/ in Collection"})," (access first element which text match {regexp} regexp)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I click '/^some regexp$/ in Collection'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ignore-hierarchy",children:"Ignore hierarchy"}),"\n",(0,r.jsxs)(n.p,{children:["In case if child element and parent component doesn't have hierarchy dependency\nit's possible to pass extra parameter ",(0,r.jsx)(n.em,{children:"ignoreHierarchy"})," parameter to start traverse from root"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class ComponentThatDescribesNotWellDesignedDOMTree {\n    selector = '.container';\n    //ignoreHierarchy will ignore component selector .container and start traverse from root\n    ChildItem = $('.child-item', { ignoreHierarchy: true });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"optional-selector-property",children:"Optional selector property"}),"\n",(0,r.jsx)(n.p,{children:"If selector property is not provided for Component then parent element will be returned"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class ParentComponent {\n    selector = '.container';\n    ChildComponent = $(new ChildComponent());\n}\n\nclass ChildComponent {\n    //Element will be searched in parent .container element\n    Element = $('.someElement');\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"immediate-option",children:"Immediate option"}),"\n",(0,r.jsxs)(n.p,{children:["In order, you don't need to retry query for elements exists you can pass ",(0,r.jsx)(n.code,{children:"{ immediate: true }"})," option"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"When('I wait {string} not to be present', async function (alias) {\n    const element = await po.getElement(alias, { immediate: true }); // in case if element not found dummy not existing element be returned\n    await element.waitForExist({ reverse: true });\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dynamic-selectors",children:"Dynamic selectors"}),"\n",(0,r.jsx)(n.p,{children:"In case you need to generate selector based on some data you can use dynamic selectors"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { Selector } = require('@qavajs/po');\n\nclass Component {\n    selector = '.container';\n    Element = $(Selector(index => `div:nth-child(${index})`)); // function should return valid selector\n}\n"})})}),(0,r.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { Selector } from '@qavajs/po';\n\nclass Component {\n    selector = '.container';\n    Element = $(Selector((index: string) => `div:nth-child(${index})`)); // function should return valid selector\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Then you can pass parameter to this function from Gherkin file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gherkin",children:"When I click 'Component > Element (2)'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"native-framework-selectors",children:"Native framework selectors"}),"\n",(0,r.jsxs)(n.p,{children:["It is also possible to use driver-built capabilities to return element. You can pass handler that has access to\ncurrent ",(0,r.jsx)(n.code,{children:"page"})," (or ",(0,r.jsx)(n.code,{children:"browser"})," in wdio) object."]}),"\n",(0,r.jsx)(n.p,{children:"Playwright example:"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { NativeSelector } = require('@qavajs/po-playwright');\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(page => page.getByText(`some text`)));\n}\n"})})}),(0,r.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { NativeSelector } from '@qavajs/po-playwright';\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(page => page.getByText(`some text`)));\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"WDIO example:"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"js",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { NativeSelector } = require('@qavajs/po');\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(browser => browser.$('.single-element')));\n}\n"})})}),(0,r.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { NativeSelector } from '@qavajs/po-playwright';\n\nclass Component {\n    selector = '.container';\n    Element = $(NativeSelector(browser => browser.$('.single-element')));\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var l=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),a=t(512),l=t(2466),o=t(6550),s=t(469),i=t(1980),c=t(7392),d=t(812);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,p]=m({queryString:t,groupId:a}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??g;return h({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),x(e)}),[p,x,l]),tabValues:l}}var x=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:p,onClick:d,...l,className:(0,a.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function w(e){const n=(0,x.Z)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(7294);const a={},l=r.createContext(a);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);