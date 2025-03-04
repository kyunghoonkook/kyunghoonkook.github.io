"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[143],{404:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"components/dialog","title":"Dialog","description":"\uc0ac\uc6a9\uc790\ub97c \uc911\uc694\ud55c \ub0b4\uc6a9\uc73c\ub85c \uc911\ub2e8\uc2dc\ud0a4\uace0 \uc751\ub2f5\uc744 \uae30\ub300\ud558\ub294 \ubaa8\ub2ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uc785\ub2c8\ub2e4. \uc8fc\uc758\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\uac70\ub098 \uc0ac\uc6a9\uc790\uc758 \uacb0\uc815\uc774 \ud544\uc694\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud3fc \ub808\uc774\uc544\uc6c3\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc5b4 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \uc791\uc5c5\uc5d0\ub3c4 \uc801\ud569\ud569\ub2c8\ub2e4.","source":"@site/docs/components/dialog.md","sourceDirName":"components","slug":"/components/dialog","permalink":"/docs/components/dialog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Accordion","permalink":"/docs/components/accordion"},"next":{"title":"DropdownMenu","permalink":"/docs/components/dropdown-menu"}}');var r=d(4848),t=d(8453);const l={sidebar_position:10},i="Dialog",c={},o=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\ud3fc \ub808\uc774\uc544\uc6c3 \uc0ac\uc6a9\ubc95",id:"\ud3fc-\ub808\uc774\uc544\uc6c3-\uc0ac\uc6a9\ubc95",level:2},{value:"\ub2eb\uae30 \uc635\uc158 \uc81c\uc5b4",id:"\ub2eb\uae30-\uc635\uc158-\uc81c\uc5b4",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"Dialog Props",id:"dialog-props",level:3},{value:"FormField Props",id:"formfield-props",level:3},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"dialog",children:"Dialog"})}),"\n",(0,r.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790\ub97c \uc911\uc694\ud55c \ub0b4\uc6a9\uc73c\ub85c \uc911\ub2e8\uc2dc\ud0a4\uace0 \uc751\ub2f5\uc744 \uae30\ub300\ud558\ub294 \ubaa8\ub2ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uc785\ub2c8\ub2e4. \uc8fc\uc758\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud558\uac70\ub098 \uc0ac\uc6a9\uc790\uc758 \uacb0\uc815\uc774 \ud544\uc694\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud3fc \ub808\uc774\uc544\uc6c3\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc5b4 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \uc791\uc5c5\uc5d0\ub3c4 \uc801\ud569\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Dialog } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction BasicDialogExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title=\"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9\"\n        description=\"\uc774\uac83\uc740 \uae30\ubcf8 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \ubaa8\ub2ec \ud615\ud0dc\ub85c \ud45c\uc2dc\ub418\uba70 \ubc30\uacbd\uc744 \ud074\ub9ad\ud558\uac70\ub098 ESC \ud0a4\ub97c \ub20c\ub7ec \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\"\n        footer={\n          <div>\n            <button onClick={() => setIsOpen(false)}>\n              \ucde8\uc18c\n            </button>\n            <button \n              onClick={() => {\n                alert('\ud655\uc778 \ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');\n                setIsOpen(false);\n              }}\n            >\n              \ud655\uc778\n            </button>\n          </div>\n        }\n      >\n        <p>\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9\uc744 \uc5ec\uae30\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4.</p>\n      </Dialog>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\ud3fc-\ub808\uc774\uc544\uc6c3-\uc0ac\uc6a9\ubc95",children:"\ud3fc \ub808\uc774\uc544\uc6c3 \uc0ac\uc6a9\ubc95"}),"\n",(0,r.jsx)(n.p,{children:"Dialog \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud504\ub85c\ud544 \ud3b8\uc9d1\uacfc \uac19\uc740 \ud3fc \ub808\uc774\uc544\uc6c3\uc5d0 \ucd5c\uc801\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import { Dialog, FormField } from \'react-common-components-library\';\nimport { useState } from \'react\';\n\nfunction ProfileFormDialog() {\n  const [isOpen, setIsOpen] = useState(false);\n  const [formData, setFormData] = useState({\n    name: \'John Doe\',\n    username: \'@johndoe\'\n  });\n  \n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n  };\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`\uc800\uc7a5\ub41c \ub370\uc774\ud130: ${JSON.stringify(formData)}`);\n    setIsOpen(false);\n  };\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ud504\ub85c\ud544 \ud3b8\uc9d1\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Edit profile"\n        description="Make changes to your profile here. Click save when you\'re done."\n        onSubmit={handleSubmit}\n      >\n        <FormField label="Name">\n          <input\n            type="text"\n            name="name"\n            value={formData.name}\n            onChange={handleChange}\n            placeholder="Enter your name"\n          />\n        </FormField>\n        \n        <FormField label="Username">\n          <input\n            type="text"\n            name="username"\n            value={formData.username}\n            onChange={handleChange}\n            placeholder="Enter your username"\n          />\n        </FormField>\n      </Dialog>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\ub2eb\uae30-\uc635\uc158-\uc81c\uc5b4",children:"\ub2eb\uae30 \uc635\uc158 \uc81c\uc5b4"}),"\n",(0,r.jsx)(n.p,{children:"\ubc30\uacbd \ud074\ub9ad\uc774\ub098 ESC \ud0a4\ub85c \ub2e4\uc774\uc5bc\ub85c\uadf8\ub97c \ub2eb\ub294 \uae30\ub2a5\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Dialog } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction ControlledClosingDialog() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\uae30\n      </button>\n      \n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title=\"\uc911\uc694\ud55c \uc791\uc5c5\"\n        description=\"\uc774 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub294 \ubc30\uacbd \ud074\ub9ad\uc774\ub098 ESC \ud0a4\ub85c \ub2eb\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\"\n        closeOnOverlayClick={false}\n        closeOnEsc={false}\n      >\n        <p>\uc774 \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\ub824\uba74 \uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694.</p>\n        <button onClick={() => setIsOpen(false)}>\n          \uc644\ub8cc\n        </button>\n      </Dialog>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,r.jsx)(n.h3,{id:"dialog-props",children:"Dialog Props"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\uc18d\uc131"}),(0,r.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,r.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,r.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isOpen"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"\ud544\uc218"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\ub9bc \uc0c1\ud0dc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onClose"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"() => void"})}),(0,r.jsx)(n.td,{children:"\ud544\uc218"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub2eb\uae30 \ud578\ub4e4\ub7ec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"title"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"description"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc124\uba85 \ub610\ub294 \ub0b4\uc6a9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"children"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9 (description\uacfc \ud568\uaed8 \uc0ac\uc6a9 \uac00\ub2a5)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"footer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ud558\ub2e8 \ubc84\ud2bc \ub610\ub294 \uc561\uc158 \uc601\uc5ed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"submitText"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:'"Save changes"'}),(0,r.jsx)(n.td,{children:"\uc81c\ucd9c \ubc84\ud2bc \ud14d\uc2a4\ud2b8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onSubmit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"(e: React.FormEvent) => void"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ud3fc \uc81c\ucd9c \ud578\ub4e4\ub7ec"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"closeOnOverlayClick"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"\ubc30\uacbd \ud074\ub9ad\uc2dc \ub2eb\uae30 \ud5c8\uc6a9 \uc5ec\ubd80"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"closeOnEsc"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"ESC \ud0a4\ub85c \ub2eb\uae30 \ud5c8\uc6a9 \uc5ec\ubd80"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"className"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"overlayClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\uc624\ubc84\ub808\uc774\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"titleClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\uc81c\ubaa9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"contentClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\ub0b4\uc6a9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"footerClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\ud558\ub2e8 \uc601\uc5ed\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"width"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub108\ube44 (px \ub610\ub294 %)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"maxWidth"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"'500px'"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ucd5c\ub300 \ub108\ube44 (px \ub610\ub294 %)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"style"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CSSProperties"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ucee8\ud14c\uc774\ub108\uc5d0 \uc801\uc6a9\ud560 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"formfield-props",children:"FormField Props"}),"\n",(0,r.jsx)(n.p,{children:"FormField \ucef4\ud3ec\ub10c\ud2b8\ub294 Dialog\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ub808\uc774\ube14-\uc785\ub825 \uc30d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\uc18d\uc131"}),(0,r.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,r.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,r.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"label"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"\ud544\uc218"}),(0,r.jsx)(n.td,{children:"\ud544\ub4dc \ub808\uc774\ube14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"children"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:"\ud544\uc218"}),(0,r.jsx)(n.td,{children:"\ud544\ub4dc \uc785\ub825 \uc694\uc18c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"labelClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\ub808\uc774\ube14\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"className"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"''"}),(0,r.jsx)(n.td,{children:"\ud544\ub4dc \ucee8\ud14c\uc774\ub108\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,r.jsx)(n.p,{children:"Dialog \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uadfc\uc131 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub9b4 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud2b8\ub7a9 \ud3ec\ucee4\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub824 \uc788\uc744 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc5d0\uc11c\ub9cc \uc774\ub3d9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"ESC \ud0a4\ub97c \ub20c\ub7ec \ub2e4\uc774\uc5bc\ub85c\uadf8\ub97c \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4 (closeOnEsc\uac00 true\uc77c \ub54c)."}),"\n",(0,r.jsx)(n.li,{children:"\uc801\uc808\ud55c ARIA \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub9b0 \ub9ac\ub354 \ud638\ud658\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>i});var s=d(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);