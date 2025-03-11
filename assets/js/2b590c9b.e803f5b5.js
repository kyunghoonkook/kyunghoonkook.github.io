"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[495],{9959:(e,n,r)=>{r.r(n),r.d(n,{BasicDialogExample:()=>a,ControlledClosingDialog:()=>p,FormField:()=>x,ProfileFormDialog:()=>j,assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>m});const d=JSON.parse('{"id":"components/dialog","title":"Dialog","description":"\uc0ac\uc6a9\uc790\ub97c \uc911\uc694\ud55c \ub0b4\uc6a9\uc73c\ub85c \uc911\ub2e8\uc2dc\ud0a4\uace0 \uc751\ub2f5\uc744 \uae30\ub300\ud558\ub294 \ubaa8\ub2ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uc785\ub2c8\ub2e4. \uc8fc\uc758\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\uac70\ub098 \uc0ac\uc6a9\uc790\uc758 \uacb0\uc815\uc774 \ud544\uc694\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud3fc \ub808\uc774\uc544\uc6c3\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc5b4 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \uc791\uc5c5\uc5d0\ub3c4 \uc801\ud569\ud569\ub2c8\ub2e4.","source":"@site/docs/components/dialog.mdx","sourceDirName":"components","slug":"/components/dialog","permalink":"/docs/components/dialog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"ContextMenu","permalink":"/docs/components/context-menu"},"next":{"title":"DropdownMenu","permalink":"/docs/components/dropdown-menu"}}');var s=r(4848),l=r(8453),i=r(2169),t=r(6540);const o={sidebar_position:10},c="Dialog",h={},a=()=>{const[e,n]=(0,t.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>n(!0),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30"}),(0,s.jsx)(i.lG,{isOpen:e,onClose:()=>n(!1),title:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9",description:"\uc774\uac83\uc740 \uae30\ubcf8 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \ubaa8\ub2ec \ud615\ud0dc\ub85c \ud45c\uc2dc\ub418\uba70 \ubc30\uacbd\uc744 \ud074\ub9ad\ud558\uac70\ub098 ESC \ud0a4\ub97c \ub20c\ub7ec \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",footer:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem"},children:[(0,s.jsx)("button",{onClick:()=>n(!1),style:{padding:"0.5rem 1rem",backgroundColor:"#f1f5f9",border:"1px solid #e2e8f0",borderRadius:"0.25rem",cursor:"pointer"},children:"\ucde8\uc18c"}),(0,s.jsx)("button",{onClick:()=>{alert("\ud655\uc778 \ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),n(!1)},style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\ud655\uc778"})]}),children:(0,s.jsx)("p",{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc744 \uc5ec\uae30\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4."})})]})},x=({label:e,children:n})=>(0,s.jsxs)("div",{style:{marginBottom:"1rem"},children:[(0,s.jsx)("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:e}),n]}),j=()=>{const[e,n]=(0,t.useState)(!1),[r,d]=(0,t.useState)({name:"John Doe",username:"@johndoe"}),l=e=>{const{name:n,value:r}=e.target;d((e=>({...e,[n]:r})))},o=e=>{e.preventDefault(),alert(`\uc800\uc7a5\ub41c \ub370\uc774\ud130: ${JSON.stringify(r)}`),n(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>n(!0),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\ud504\ub85c\ud544 \ud3b8\uc9d1"}),(0,s.jsx)(i.lG,{isOpen:e,onClose:()=>n(!1),title:"\ud504\ub85c\ud544 \ud3b8\uc9d1",description:"\uc5ec\uae30\uc5d0\uc11c \ud504\ub85c\ud544\uc744 \ubcc0\uacbd\ud558\uc138\uc694. \uc644\ub8cc\ub418\uba74 \uc800\uc7a5\uc744 \ud074\ub9ad\ud558\uc138\uc694.",footer:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.5rem"},children:[(0,s.jsx)("button",{onClick:()=>n(!1),style:{padding:"0.5rem 1rem",backgroundColor:"#f1f5f9",border:"1px solid #e2e8f0",borderRadius:"0.25rem",cursor:"pointer"},children:"\ucde8\uc18c"}),(0,s.jsx)("button",{onClick:o,style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\uc800\uc7a5\ud558\uae30"})]}),children:(0,s.jsxs)("form",{onSubmit:o,children:[(0,s.jsx)(x,{label:"\uc774\ub984",children:(0,s.jsx)("input",{type:"text",name:"name",value:r.name,onChange:l,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",style:{width:"100%",padding:"0.5rem",border:"1px solid #e2e8f0",borderRadius:"0.25rem"}})}),(0,s.jsx)(x,{label:"\uc0ac\uc6a9\uc790 \uc774\ub984",children:(0,s.jsx)("input",{type:"text",name:"username",value:r.username,onChange:l,placeholder:"\uc0ac\uc6a9\uc790 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",style:{width:"100%",padding:"0.5rem",border:"1px solid #e2e8f0",borderRadius:"0.25rem"}})})]})})]})},p=()=>{const[e,n]=(0,t.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>n(!0),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30"}),(0,s.jsxs)(i.lG,{isOpen:e,onClose:()=>n(!1),title:"\uc911\uc694\ud55c \uc791\uc5c5",description:"\uc774 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub294 \ubc30\uacbd \ud074\ub9ad\uc774\ub098 ESC \ud0a4\ub85c \ub2eb\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",closeOnOverlayClick:!1,closeOnEsc:!1,children:[(0,s.jsx)("p",{children:"\uc774 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\ub824\uba74 \uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694."}),(0,s.jsx)("button",{onClick:()=>n(!1),style:{marginTop:"1rem",padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"0.25rem",cursor:"pointer"},children:"\uc644\ub8cc"})]})]})},m=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\ud3fc \ub808\uc774\uc544\uc6c3 \uc0ac\uc6a9\ubc95",id:"\ud3fc-\ub808\uc774\uc544\uc6c3-\uc0ac\uc6a9\ubc95",level:2},{value:"\ub2eb\uae30 \uc635\uc158 \uc81c\uc5b4",id:"\ub2eb\uae30-\uc635\uc158-\uc81c\uc5b4",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"Dialog Props",id:"dialog-props",level:3},{value:"FormField Props",id:"formfield-props",level:3},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dialog",children:"Dialog"})}),"\n",(0,s.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790\ub97c \uc911\uc694\ud55c \ub0b4\uc6a9\uc73c\ub85c \uc911\ub2e8\uc2dc\ud0a4\uace0 \uc751\ub2f5\uc744 \uae30\ub300\ud558\ub294 \ubaa8\ub2ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uc785\ub2c8\ub2e4. \uc8fc\uc758\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\uac70\ub098 \uc0ac\uc6a9\uc790\uc758 \uacb0\uc815\uc774 \ud544\uc694\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud3fc \ub808\uc774\uc544\uc6c3\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc5b4 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \uc791\uc5c5\uc5d0\ub3c4 \uc801\ud569\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Dialog } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction BasicDialogExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title=\"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9\"\n        description=\"\uc774\uac83\uc740 \uae30\ubcf8 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \ubaa8\ub2ec \ud615\ud0dc\ub85c \ud45c\uc2dc\ub418\uba70 \ubc30\uacbd\uc744 \ud074\ub9ad\ud558\uac70\ub098 ESC \ud0a4\ub97c \ub20c\ub7ec \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\"\n        footer={\n          <div>\n            <button onClick={() => setIsOpen(false)}>\n              \ucde8\uc18c\n            </button>\n            <button \n              onClick={() => {\n                alert('\ud655\uc778 \ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n                setIsOpen(false);\n              }}\n            >\n              \ud655\uc778\n            </button>\n          </div>\n        }\n      >\n        <p>\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc744 \uc5ec\uae30\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4.</p>\n      </Dialog>\n    </>\n  );\n}\n"})}),"\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"\ud3fc-\ub808\uc774\uc544\uc6c3-\uc0ac\uc6a9\ubc95",children:"\ud3fc \ub808\uc774\uc544\uc6c3 \uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsx)(n.p,{children:"Dialog \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \ud3fc \ub808\uc774\uc544\uc6c3\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { Dialog, FormField } from \'react-common-components-library\';\nimport { useState } from \'react\';\n\nfunction ProfileFormDialog() {\n  const [isOpen, setIsOpen] = useState(false);\n  const [formData, setFormData] = useState({\n    name: \'John Doe\',\n    username: \'@johndoe\'\n  });\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`\uc800\uc7a5\ub41c \ub370\uc774\ud130: ${JSON.stringify(formData)}`);\n    setIsOpen(false);\n  };\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ud504\ub85c\ud544 \ud3b8\uc9d1\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Edit profile"\n        description="Make changes to your profile here. Click save when you\'re done."\n        onSubmit={handleSubmit}\n      >\n        <FormField label="Name">\n          <input\n            type="text"\n            name="name"\n            value={formData.name}\n            onChange={handleChange}\n            placeholder="Enter your name"\n          />\n        </FormField>\n        \n        <FormField label="Username">\n          <input\n            type="text"\n            name="username"\n            value={formData.username}\n            onChange={handleChange}\n            placeholder="Enter your username"\n          />\n        </FormField>\n      </Dialog>\n    </>\n  );\n}\n'})}),"\n","\n","\n",(0,s.jsx)(j,{}),"\n",(0,s.jsx)(n.h2,{id:"\ub2eb\uae30-\uc635\uc158-\uc81c\uc5b4",children:"\ub2eb\uae30 \uc635\uc158 \uc81c\uc5b4"}),"\n",(0,s.jsx)(n.p,{children:"\ubc30\uacbd \ud074\ub9ad\uc774\ub098 ESC \ud0a4\ub85c \ub2e4\uc774\uc5bc\ub85c\uadf8\ub97c \ub2eb\ub294 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Dialog } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction ControlledClosingDialog() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title=\"\uc911\uc694\ud55c \uc791\uc5c5\"\n        description=\"\uc774 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub294 \ubc30\uacbd \ud074\ub9ad\uc774\ub098 ESC \ud0a4\ub85c \ub2eb\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\"\n        closeOnOverlayClick={false}\n        closeOnEsc={false}\n      >\n        <p>\uc774 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\ub824\uba74 \uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694.</p>\n        <button onClick={() => setIsOpen(false)}>\n          \uc644\ub8cc\n        </button>\n      </Dialog>\n    </>\n  );\n}\n"})}),"\n","\n",(0,s.jsx)(p,{}),"\n",(0,s.jsx)(n.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,s.jsx)(n.h3,{id:"dialog-props",children:"Dialog Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uc18d\uc131"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"isOpen"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"\ud544\uc218"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\ub9bc \uc0c1\ud0dc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onClose"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"() => void"})}),(0,s.jsx)(n.td,{children:"\ud544\uc218"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub2eb\uae30 \ud578\ub4e4\ub7ec"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc124\uba85 \ub610\ub294 \ub0b4\uc6a9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9 (description\uacfc \ud568\uaed8 \uc0ac\uc6a9 \uac00\ub2a5)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"footer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ud558\ub2e8 \ubc84\ud2bc \ub610\ub294 \uc561\uc158 \uc601\uc5ed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"submitText"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:'"Save changes"'}),(0,s.jsx)(n.td,{children:"\uc81c\ucd9c \ubc84\ud2bc \ud14d\uc2a4\ud2b8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onSubmit"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(e: React.FormEvent) => void"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ud3fc \uc81c\ucd9c \ud578\ub4e4\ub7ec"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"closeOnOverlayClick"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"\ubc30\uacbd \ud074\ub9ad\uc2dc \ub2eb\uae30 \ud5c8\uc6a9 \uc5ec\ubd80"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"closeOnEsc"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"ESC \ud0a4\ub85c \ub2eb\uae30 \ud5c8\uc6a9 \uc5ec\ubd80"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"className"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"overlayClassName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\uc624\ubc84\ub808\uc774\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"titleClassName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\uc81c\ubaa9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"contentClassName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ub0b4\uc6a9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"footerClassName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ud558\ub2e8 \uc601\uc5ed\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"width"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub108\ube44 (px \ub610\ub294 %)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"maxWidth"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"'500px'"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ucd5c\ub300 \ub108\ube44 (px \ub610\ub294 %)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"style"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CSSProperties"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ucee8\ud14c\uc774\ub108\uc5d0 \uc801\uc6a9\ud560 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"formfield-props",children:"FormField Props"}),"\n",(0,s.jsx)(n.p,{children:"FormField \ucef4\ud3ec\ub10c\ud2b8\ub294 Dialog\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ub808\uc774\ube14-\uc785\ub825 \uc30d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uc18d\uc131"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"\ud544\uc218"}),(0,s.jsx)(n.td,{children:"\ud544\ub4dc \ub808\uc774\ube14"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"\ud544\uc218"}),(0,s.jsx)(n.td,{children:"\ud544\ub4dc \uc785\ub825 \uc694\uc18c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"labelClassName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ub808\uc774\ube14\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"className"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ud544\ub4dc \ucee8\ud14c\uc774\ub108\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,s.jsx)(n.p,{children:"Dialog \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uadfc\uc131 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub9b4 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"\ud2b8\ub7a9 \ud3ec\ucee4\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub824 \uc788\uc744 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc5d0\uc11c\ub9cc \uc774\ub3d9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"ESC \ud0a4\ub97c \ub20c\ub7ec \ub2e4\uc774\uc5bc\ub85c\uadf8\ub97c \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4 (closeOnEsc\uac00 true\uc77c \ub54c)."}),"\n",(0,s.jsx)(n.li,{children:"\uc801\uc808\ud55c ARIA \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub9b0 \ub9ac\ub354 \ud638\ud658\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);