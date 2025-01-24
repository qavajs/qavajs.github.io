"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3976],{7879:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"intro","title":"Getting Started","description":"The qavajs is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, qavajs provides out of the box integration with ReportPortal, Mobitru, and the Xray and many more.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Writing tests","permalink":"/docs/writing-tests"}}');var o=i(4848),s=i(8453);const a={sidebar_position:1},r="Getting Started",c={},l=[{value:"\ud83d\udce6 Installation from scratch",id:"-installation-from-scratch",level:3},{value:"\ud83d\udc68\u200d\ud83d\udcbb Test development",id:"-test-development",level:3},{value:"\ud83d\udee0\ufe0f Configuration",id:"\ufe0f-configuration",level:3},{value:"\ud83d\udd2c Test execution",id:"-test-execution",level:3},{value:"\ud83d\udcd8 Extra",id:"-extra",level:3}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"qavajs"})," is a modular test automation framework designed to minimize setup time and streamline the development of test scripts. It incorporates the best test automation tools and practices into a single whole. The framework achieves efficiency through its built-in page object engine and ready-to-use sets of domain-agnostic step definitions suitable for both API and UI testing of the web and native mobile applications. Additionally, ",(0,o.jsx)(t.strong,{children:"qavajs"})," provides out of the box integration with ReportPortal, Mobitru, and the Xray and many more."]}),"\n",(0,o.jsxs)(t.p,{children:["Next, you will be shown how to build your own low-code test automation framework with the ",(0,o.jsx)(t.strong,{children:"qavajs"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"-installation-from-scratch",children:"\ud83d\udce6 Installation from scratch"}),"\n",(0,o.jsx)(t.p,{children:"Once you have set up a clear Node.js project, run the command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm init @qavajs\n"})}),"\n",(0,o.jsx)(t.p,{children:"to launch the CLI application. This will configure qavajs and install the necessary modules for your testing purposes. After the process is completed, a config.ts (or config.js) file will be generated in the project's root directory, which will be used to configure test execution."}),"\n",(0,o.jsx)(t.h3,{id:"-test-development",children:"\ud83d\udc68\u200d\ud83d\udcbb Test development"}),"\n",(0,o.jsxs)(t.p,{children:["As the ",(0,o.jsx)(t.strong,{children:"qavajs"})," based on the Cucumber the test scripts are written in ",(0,o.jsx)(t.a,{href:"https://cucumber.io/docs/gherkin/reference/",children:"Gherkin"})," language of both built-in steps and those you will create yourself.\nWith years of experience across various domains, we have implemented ",(0,o.jsx)(t.a,{href:"https://github.com/orgs/qavajs/repositories?q=steps&type=all",children:"numerous packages"})," of step definitions that you can utilize."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gherkin",children:"Feature: Wikipedia\n\n  @wikipedia\n  Scenario Outline: Search in wikipedia (<term>)\n    Given I open '$wikipediaUrl' url\n    When I type '<term>' to 'Wikipedia > Search Input'\n    And I click 'Wikipedia > Search Button'\n    And I expect text of 'Wikipedia Article > Title' equals '<term>'\n    And I expect text of 'Wikipedia Article > Title' not to contain 'Python'\n    And I expect 'Wikipedia Article > Title' to be visible\n    And I expect 'Wikipedia Article > Title' to be visible\n\n    Examples:\n      | term       |\n      | JavaScript |\n      | Java       |\n"})}),"\n",(0,o.jsxs)(t.p,{children:["It is worth mentioning the expression ",(0,o.jsx)(t.strong,{children:"'$wikipediaUrl'"})," in the example above starting with '",(0,o.jsx)(t.strong,{children:"$"}),"' interpreted as a ",(0,o.jsx)(t.strong,{children:"qavajs"})," memory variable whose value is taken from the Memory class instance in runtime. ",(0,o.jsx)(t.a,{href:"https://qavajs.github.io/docs/Guides/memory",children:"More details"}),".",(0,o.jsx)(t.br,{}),"\n","Another feature is a locator alias expression like ",(0,o.jsx)(t.strong,{children:"'Wikipedia > Search Input'"})," separated by the '",(0,o.jsx)(t.strong,{children:">"}),"' sign that describes hierarchic page structure. See how ",(0,o.jsx)(t.a,{href:"https://qavajs.github.io/docs/Guides/page-object-v2",children:"to organize your page object"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"\ufe0f-configuration",children:"\ud83d\udee0\ufe0f Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["In addition to the default features of Cucumber ",(0,o.jsx)(t.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options",children:"config file"})," the ",(0,o.jsx)(t.strong,{children:"qavajs"})," config implements following ",(0,o.jsx)(t.a,{href:"https://github.com/qavajs/core/blob/main/src/IQavajsConfig.ts",children:"capabilities"})," to provide the advanced flexibility."]}),"\n",(0,o.jsx)(t.h3,{id:"-test-execution",children:"\ud83d\udd2c Test execution"}),"\n",(0,o.jsxs)(t.p,{children:["If you have the basic config ",(0,o.jsx)(t.code,{children:"npx qavajs"})," will launch test execution.",(0,o.jsx)(t.br,{}),"\n","To specify custom path to the config file use ",(0,o.jsx)(t.code,{children:"npx qavajs run --config <config>"}),".",(0,o.jsx)(t.br,{}),"\n","In case if your config exports an object with multiple properties, you can specify which property to read ",(0,o.jsx)(t.code,{children:"npx qavajs run --profile <profile>"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"-extra",children:"\ud83d\udcd8 Extra"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/qavajs/demo",children:"Code Examples"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);