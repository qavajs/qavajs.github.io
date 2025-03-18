"use strict";(self.webpackChunkqava_docs=self.webpackChunkqava_docs||[]).push([[7825],{7413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"Steps/files","title":"@qavajs/steps-files","description":"Step library to work with file system","source":"@site/versioned_docs/version-2x/Steps/files.md","sourceDirName":"Steps","slug":"/Steps/files","permalink":"/docs/Steps/files","draft":false,"unlisted":false,"editUrl":"https://github.com/qavajs/qavajs.github.io/tree/main/versioned_docs/version-2x/Steps/files.md","tags":[],"version":"2x","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"sidebar","previous":{"title":"@qavajs/steps-memory","permalink":"/docs/Steps/memory"},"next":{"title":"@qavajs/steps-sql","permalink":"/docs/Steps/sql"}}');var l=n(4848),s=n(8453);const r={sidebar_position:5},c="@qavajs/steps-files",d={},x=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Wait Steps",id:"wait-steps",level:2},{value:"I expect file matching {string} regexp appears in {string}",id:"i-expect-file-matching-string-regexp-appears-in-string",level:3},{value:"I expect {string} file appears",id:"i-expect-string-file-appears",level:3},{value:"Validation Steps",id:"validation-steps",level:2},{value:"I expect {string} text file content {validation} {string}",id:"i-expect-string-text-file-content-validation-string",level:3},{value:"Memory Steps",id:"memory-steps",level:2},{value:"I save {string} file content as {string}",id:"i-save-string-file-content-as-string",level:3},{value:"I save {string} text file content as {string}",id:"i-save-string-text-file-content-as-string",level:3},{value:"I save {string} Excel file content as {string}",id:"i-save-string-excel-file-content-as-string",level:3},{value:"I save {string} pdf file content as {string}",id:"i-save-string-pdf-file-content-as-string",level:3},{value:"I save {string} Word file content as {string}",id:"i-save-string-word-file-content-as-string",level:3},{value:"I save {string} csv file content as {string}",id:"i-save-string-csv-file-content-as-string",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"qavajssteps-files",children:"@qavajs/steps-files"})}),"\n",(0,l.jsx)(t.p,{children:"Step library to work with file system"}),"\n",(0,l.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"npm install @qavajs/steps-files\n"})}),"\n",(0,l.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-typescript",children:"export default {\n    require: [\n        'node_modules/@qavajs/steps-files/index.js'\n    ],\n    // add fileTimeout property in case you need to customize built-in interval and timeout\n    fileTimeout: {\n        interval: 1000,\n        timeout: 1000\n    }\n}\n\n\n"})}),"\n",(0,l.jsx)(t.h2,{id:"wait-steps",children:"Wait Steps"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-expect-file-matching-string-regexp-appears-in-string",children:"I expect file matching {string} regexp appears in {string}"}),"\n",(0,l.jsx)(t.p,{children:"Verify that file matching regexp appears in directory"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file name regex to wait"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"f.+.txt"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"dir"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"directory path to wait"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I expect file matching 'f.+\\.txt' regexp appears in './test-e2e/folder'\nWhen I expect file matching '$fileRegexp' regexp appears in '$folder'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-expect-string-file-appears",children:"I expect {string} file appears"}),"\n",(0,l.jsx)(t.p,{children:"Verify that file appears in provided location"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path to wait"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.txt"})]})})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I expect './test-e2e/folder/file.txt' file appears\nWhen I expect '$filePath' file appears\n"})}),"\n",(0,l.jsx)(t.h2,{id:"validation-steps",children:"Validation Steps"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-expect-string-text-file-content-validation-string",children:"I expect {string} text file content {validation} {string}"}),"\n",(0,l.jsx)(t.p,{children:"Verify that text file content satisfy validation"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.txt"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validationType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"to be equal, to contain"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"expectedValue"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"expected value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"text, $value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I expect './folder/file.txt' text file content to be equal 'file content'\nWhen I expect '$filePath' text file content to contain '$content'\n"})}),"\n",(0,l.jsx)(t.h2,{id:"memory-steps",children:"Memory Steps"}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-file-content-as-string",children:"I save {string} file content as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Save file content to memory as buffer"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.jpeg"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"fileContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.txt' file content as 'fileContent'\nWhen I save '$filePath' file content as 'fileContent'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-text-file-content-as-string",children:"I save {string} text file content as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Save file content to memory as text (utf-8)"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.txt"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.txt' text file content as 'fileContent'\nWhen I save '$filePath' text file as 'fileContent'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-excel-file-content-as-string",children:"I save {string} Excel file content as {string}"}),"\n",(0,l.jsxs)(t.p,{children:["Save file content to memory as Excel object (",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/xlsx",children:"https://www.npmjs.com/package/xlsx"}),")"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.xlsx"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"excelContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.txt' Excel file content as 'fileContent'\nWhen I save '$filePath' Excel file as 'fileContent'\n# if you use @qavajs/steps-memory package\nThen I expect '$excelFile.Sheets.SheetName.A1.v' to be equal 'expectedValueOfCell'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-pdf-file-content-as-string",children:"I save {string} pdf file content as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Save file content to memory as pdf object with following properties:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textMultiLine"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"text of pdf in multiline format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textSingleLine"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"text of pdf in single-line format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"metadata"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Object"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"pdf metadata"})]})]})]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.txt"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.pdf' pdf file content as 'pdfContent'\nWhen I save '$filePath' pdf file content as 'pdfContent'\n# if you use @qavajs/steps-memory package\nThen I expect '$pdfContent.textMultiLine' to be equal 'expectedPdfContent'\nThen I expect '$pdfContent.textSingleLine' to be equal 'expectedPdfContent'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-word-file-content-as-string",children:"I save {string} Word file content as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Save file content to memory as word object with following properties:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textMultiLine"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"text of word document in multiline format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"textSingleLine"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"text of word document in single-line format"})]})]})]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path or buffer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.docx"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"wordContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.docx' Word file content as 'wordContent'\nWhen I save '$filePath' Word file content as 'wordContent'\nWhen I save '$fileBuffer' Word file content as 'wordContent'\n# if you use @qavajs/steps-memory package\nThen I expect '$wordContent.textMultiLine' to be equal 'expectedPdfContent'\nThen I expect '$wordContent.textSingleLine' to be equal 'expectedPdfContent'\n"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"i-save-string-csv-file-content-as-string",children:"I save {string} csv file content as {string}"}),"\n",(0,l.jsx)(t.p,{children:"Save file content to memory as csv object. First row will is considered as header."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"param"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"example"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"file path or buffer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"./yourFolder/file.csv"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memoryKey"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"memory key"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"csvContent, value"})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-gherkin",children:"When I save './folder/file.csv' csv file content as 'csvContent'\nWhen I save '$filePath' csv file as 'csvContent'\n# if you use @qavajs/steps-memory package\nThen I expect '$csvContent[0].columnName' to be equal 'expectedValue'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);