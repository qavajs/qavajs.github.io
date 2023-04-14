"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=d(a),m=r,c=k["".concat(l,".").concat(m)]||k[m]||g[m]||s;return a?n.createElement(c,i(i({ref:t},o),{},{components:a})):n.createElement(c,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:3},i="@qavajs/steps-api",p={unversionedId:"Steps/api",id:"Steps/api",title:"@qavajs/steps-api",description:"Step library to work with API",source:"@site/docs/Steps/api.md",sourceDirName:"Steps",slug:"/Steps/api",permalink:"/docs/Steps/api",draft:!1,editUrl:"https://github.com/qavajs/qavajs.github.io/tree/main/docs/Steps/api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"@qavajs/steps-playwright",permalink:"/docs/Steps/playwright"},next:{title:"@qavajs/steps-memory",permalink:"/docs/Steps/memory"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"Config",id:"config",level:2},{value:"Parameter Types",id:"parameter-types",level:2},{value:"API Action Steps",id:"api-action-steps",level:2},{value:"I send {string} request to {landingUrl}{headers} and save response as {string}",id:"i-send-string-request-to-landingurlheaders-and-save-response-as-string",level:3},{value:"I send {string} request to {landingUrl}{headers} with qs {string} and save response as {string}",id:"i-send-string-request-to-landingurlheaders-with-qs-string-and-save-response-as-string",level:3},{value:"I send {string} request to {landingUrl}{headers} with Body {json} and save response as {string}",id:"i-send-string-request-to-landingurlheaders-with-body-json-and-save-response-as-string",level:3},{value:"I send {string} request to {landingUrl}{headers} with qs {string} and Body {json} and save response as {string}",id:"i-send-string-request-to-landingurlheaders-with-qs-string-and-body-json-and-save-response-as-string",level:3},{value:"I send {string} request and save response as {string} to {landingUrl}{headers} with Body:",id:"i-send-string-request-and-save-response-as-string-to-landingurlheaders-with-body",level:3},{value:"I parse {string} body as {bodyParsingType}",id:"i-parse-string-body-as-bodyparsingtype",level:3},{value:"Validation Steps",id:"validation-steps",level:2},{value:"Response {string} Status Code {apiValidation} {string}",id:"response-string-status-code-apivalidation-string",level:3},{value:"Response {string} contains:",id:"response-string-contains",level:3},{value:"Response {string} {apiValidation} {string}",id:"response-string-apivalidation-string",level:3},{value:"Response {string} size {apiValidation} {string}",id:"response-string-size-apivalidation-string",level:3},{value:"I verify response {string} {apiValidation} {string}",id:"i-verify-response-string-apivalidation-string",level:3},{value:"Construction API Steps",id:"construction-api-steps",level:2},{value:"I create {string} request {string}",id:"i-create-string-request-string",level:3},{value:"I add headers to {string}: DataTable",id:"i-add-headers-to-string-datatable",level:3},{value:"I add {string} headers to {string}",id:"i-add-string-headers-to-string",level:3},{value:"I add body to {string}: Multiline",id:"i-add-body-to-string-multiline",level:3},{value:"I add {string} body to {string}",id:"i-add-string-body-to-string",level:3},{value:"I add {string} url to {string}",id:"i-add-string-url-to-string",level:3},{value:"I send {string} request and save response as {string}",id:"i-send-string-request-and-save-response-as-string",level:3}],o={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qavajssteps-api"},"@qavajs/steps-api"),(0,r.kt)("p",null,"Step library to work with API"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @qavajs/steps-api")),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    default: {\n        require: [\n            'node_modules/@qavajs/steps-api/index.js'\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"parameter-types"},"Parameter Types"),(0,r.kt)("h2",{id:"api-action-steps"},"API Action Steps"),(0,r.kt)("h3",{id:"i-send-string-request-to-landingurlheaders-and-save-response-as-string"},"I send {string} request to {landingUrl}{headers} and save response as {string}"),(0,r.kt)("p",null,"Send request to the endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object with headers (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key that should be used for saving response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I send "GET" request to "$BASE_API_URL" with headers "$headers" and save response as "response"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-send-string-request-to-landingurlheaders-with-qs-string-and-save-response-as-string"},"I send {string} request to {landingUrl}{headers} with qs {string} and save response as {string}"),(0,r.kt)("p",null,"Send request to the endpoint with query string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object with headers (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"params"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"query string parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key that should be used for saving response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I send "GET" request to "https://www.some_service.com/some_endpoint" with qs "?category=HR&name=test" and save response as "response"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-send-string-request-to-landingurlheaders-with-body-json-and-save-response-as-string"},"I send {string} request to {landingUrl}{headers} with Body {json} and save response as {string}"),(0,r.kt)("p",null,"Send request with body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object with headers (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key that should be used for saving response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I send "POST" request to "$BASE_API_URL" with Body "test_data_file.json" and save response as "response"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-send-string-request-to-landingurlheaders-with-qs-string-and-body-json-and-save-response-as-string"},"I send {string} request to {landingUrl}{headers} with qs {string} and Body {json} and save response as {string}"),(0,r.kt)("p",null,"Send request with body and query string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object with headers (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"params"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"query string parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key that should be used for saving response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I send "PUT" request to "https://www.some_service.com/some_endpoint/" with qs "?category=HR&name=test" and Body "test_data_file.json" and save response as "response"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-send-string-request-and-save-response-as-string-to-landingurlheaders-with-body"},"I send {string} request and save response as {string} to {landingUrl}{headers} with Body:"),(0,r.kt)("p",null,"Send request with body that given as part of Cucumber step"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object with headers (optional)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key that should be used for saving response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I send "POST" request and save response as "response" to "$BASE_API_URL" with Body:\n   """\n   {\n      "title": "Test Post Request with Body passed as string"\n   }\n   """\n')),(0,r.kt)("h3",{id:"i-parse-string-body-as-bodyparsingtype"},"I parse {string} body as {bodyParsingType}"),(0,r.kt)("p",null,"MANDATORY STEP THAT SHOULD BE USED AFTER SENDING REQUEST\nParsing body in needed way and adds payload property to response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"response key in memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"type of payload")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I parse '$response' body as 'json'\nThen I expect '$response.payload.foo' to equal 'bar'\n")),(0,r.kt)("h2",{id:"validation-steps"},"Validation Steps"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"response-string-status-code-apivalidation-string"},"Response {string} Status Code {apiValidation} {string}"),(0,r.kt)("p",null,"Verify response status code"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"saved response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"validation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function to wait condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"statusCode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"expected status code")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then Response "$response" Status Code equals to "200"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"response-string-contains"},"Response {string} contains:"),(0,r.kt)("p",null,"Verify that response contains needed properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"property"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Any"),(0,r.kt)("td",{parentName:"tr",align:"center"},"property from saved response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dataTable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"data table with all properties")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then Response "$response.payload.data.items" contains:\n      | _id               |\n      | appId             |\n      | serviceCategory   |\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"response-string-apivalidation-string"},"Response {string} {apiValidation} {string}"),(0,r.kt)("p",null,"Verifying that response model has necessary type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"saved response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"validation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function to wait condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"expected property type")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'   Then Response "$response.payload.data.items" equals to "array"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"response-string-size-apivalidation-string"},"Response {string} size {apiValidation} {string}"),(0,r.kt)("p",null,"Verify that response array size is equal to|less than|greater than given number"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"saved response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"validation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function to wait condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"expectedValue"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"expected property size")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then Response "$response.payload.data.items" size to be above "0"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-verify-response-string-apivalidation-string"},"I verify response {string} {apiValidation} {string}"),(0,r.kt)("p",null,"Execute any jsonPath query against response and verify result is equal to expected value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response"),(0,r.kt)("td",{parentName:"tr",align:"center"},"saved response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"validation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function to wait condition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"expectedValue"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"expected property value")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then I verify response "$response.payload.data.items[0].title" equals to "TEST"\n')),(0,r.kt)("h2",{id:"construction-api-steps"},"Construction API Steps"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-create-string-request-string"},"I create {string} request {string}"),(0,r.kt)("p",null,"Create request template and save it to memory"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"API method")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-add-headers-to-string-datatable"},"I add headers to {string}: ","[DataTable]"),(0,r.kt)("p",null,"Add data table of headers to request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headersDataTable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DataTable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"key value array of headers")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\nAnd I add headers to '$request':\n    | Content-Type | application/json |\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-add-string-headers-to-string"},"I add {string} headers to {string}"),(0,r.kt)("p",null,"Add headers to request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headersKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of headers that resolves to JS object")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\nAnd I add '$headers' headers to '$request'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-add-body-to-string-multiline"},"I add body to {string}: ","[Multiline]"),(0,r.kt)("p",null,"Add body to request as multiline parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"body"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"body")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I create \'GET\' request \'request\'\nAnd I add body to \'$request\':\n    """\n     {\n         "message": "qavajs"\n     }\n    """\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-add-string-body-to-string"},"I add {string} body to {string}"),(0,r.kt)("p",null,"Add body to request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"body"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"body")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\nAnd I add '$body' body to '$request'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-add-string-url-to-string"},"I add {string} url to {string}"),(0,r.kt)("p",null,"Add url to request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"url")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\nAnd I add 'https://qavajs.github.io/' body to '$request'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-send-string-request-and-save-response-as-string"},"I send {string} request and save response as {string}"),(0,r.kt)("p",null,"Send prepared request and save response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"param"),(0,r.kt)("th",{parentName:"tr",align:"center"},"type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"requestKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key of request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"responseKey"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"memory key to save response")))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I create 'GET' request 'request'\nAnd I add 'https://qavajs.github.io/' body to '$request'\nAnd I send '$request' and save response as 'response'\n")))}g.isMDXComponent=!0}}]);