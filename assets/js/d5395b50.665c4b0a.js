"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[84],{5303:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"components/dropdown-menu","title":"DropdownMenu","description":"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\ub97c \uc81c\uacf5\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uacc4\uce35\uc801\uc778 \uba54\ub274 \uad6c\uc870, \uc544\uc774\ucf58, \ub2e8\ucd95\ud0a4, \ud558\uc704 \uba54\ub274 \ub4f1\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.","source":"@site/docs/components/dropdown-menu.md","sourceDirName":"components","slug":"/components/dropdown-menu","permalink":"/react-components-library/docs/components/dropdown-menu","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Dialog","permalink":"/react-components-library/docs/components/dialog"}}');var t=d(4848),r=d(8453);const i={sidebar_position:11},c="DropdownMenu",l={},o=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc11c\ube0c\uba54\ub274 \uc0ac\uc6a9\ubc95",id:"\uc11c\ube0c\uba54\ub274-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc704\uce58 \uc124\uc815",id:"\uc704\uce58-\uc124\uc815",level:2},{value:"\uc139\uc158 \uc81c\ubaa9 \uc0ac\uc6a9\ubc95",id:"\uc139\uc158-\uc81c\ubaa9-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc11c\ube0c\uba54\ub274 \ub3d9\uc791 \ubc29\uc2dd",id:"\uc11c\ube0c\uba54\ub274-\ub3d9\uc791-\ubc29\uc2dd",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"DropdownMenuProps",id:"dropdownmenuprops",level:3},{value:"DropdownMenuSection",id:"dropdownmenusection",level:3},{value:"DropdownMenuItem",id:"dropdownmenuitem",level:3},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"dropdownmenu",children:"DropdownMenu"})}),"\n",(0,t.jsx)(e.p,{children:"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\ub97c \uc81c\uacf5\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uacc4\uce35\uc801\uc778 \uba54\ub274 \uad6c\uc870, \uc544\uc774\ucf58, \ub2e8\ucd95\ud0a4, \ud558\uc704 \uba54\ub274 \ub4f1\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { DropdownMenu } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction DropdownMenuExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <DropdownMenu\n      title=\"\ub0b4 \uacc4\uc815\"\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      sections={[\n        {\n          items: [\n            { \n              id: 'profile', \n              label: '\ud504\ub85c\ud544', \n              icon: <ProfileIcon />, \n              onClick: () => console.log('\ud504\ub85c\ud544 \ud074\ub9ad\ub428') \n            },\n            { \n              id: 'settings', \n              label: '\uc124\uc815', \n              icon: <SettingsIcon />,\n              shortcut: '\u2318S', \n              onClick: () => console.log('\uc124\uc815 \ud074\ub9ad\ub428') \n            },\n          ]\n        },\n        {\n          items: [\n            { \n              id: 'logout', \n              label: '\ub85c\uadf8\uc544\uc6c3', \n              icon: <LogoutIcon />, \n              onClick: () => console.log('\ub85c\uadf8\uc544\uc6c3 \ud074\ub9ad\ub428') \n            },\n          ]\n        }\n      ]}\n      trigger={\n        <button onClick={() => setIsOpen(!isOpen)}>\n          \uacc4\uc815 \uba54\ub274\n        </button>\n      }\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\uc11c\ube0c\uba54\ub274-\uc0ac\uc6a9\ubc95",children:"\uc11c\ube0c\uba54\ub274 \uc0ac\uc6a9\ubc95"}),"\n",(0,t.jsx)(e.p,{children:"\ub9c8\uc6b0\uc2a4\ub97c \uba54\ub274 \ud56d\ubaa9 \uc704\uc5d0 \uc62c\ub9ac\uba74 \uc11c\ube0c\uba54\ub274\uac00 \uc790\ub3d9\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { DropdownMenu } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction DropdownWithSubmenuExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <DropdownMenu\n      title=\"\uc9c0\uc6d0 \uba54\ub274\"\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      sections={[\n        {\n          items: [\n            { \n              id: 'support', \n              label: '\uace0\uac1d \uc9c0\uc6d0', \n              icon: <SupportIcon />,\n              // subItems \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc11c\ube0c\uba54\ub274 \uc815\uc758\n              subItems: [\n                {\n                  id: 'help',\n                  label: '\ub3c4\uc6c0\ub9d0 \uc13c\ud130',\n                  icon: <HelpIcon />,\n                  onClick: () => console.log('\ub3c4\uc6c0\ub9d0 \uc13c\ud130 \ud074\ub9ad\ub428')\n                },\n                {\n                  id: 'chat',\n                  label: '\uc2e4\uc2dc\uac04 \ucc44\ud305',\n                  icon: <ChatIcon />,\n                  onClick: () => console.log('\uc2e4\uc2dc\uac04 \ucc44\ud305 \ud074\ub9ad\ub428')\n                },\n                {\n                  id: 'email',\n                  label: '\uc774\uba54\uc77c \uc9c0\uc6d0',\n                  icon: <EmailIcon />,\n                  onClick: () => console.log('\uc774\uba54\uc77c \uc9c0\uc6d0 \ud074\ub9ad\ub428')\n                }\n              ]\n            }\n          ]\n        }\n      ]}\n      trigger={\n        <button onClick={() => setIsOpen(!isOpen)}>\n          \uc9c0\uc6d0 \uba54\ub274\n        </button>\n      }\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\uc704\uce58-\uc124\uc815",children:"\uc704\uce58 \uc124\uc815"}),"\n",(0,t.jsx)(e.p,{children:"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274\uc758 \uc704\uce58\ub97c \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { DropdownMenu } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction PositionedDropdownExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <DropdownMenu\n      title=\"\uba54\ub274 \uc704\uce58 \uc608\uc81c\"\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      position=\"bottom-end\" // 'bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start' \uc911 \uc120\ud0dd\n      sections={[\n        {\n          items: [\n            { id: 'item1', label: '\ud56d\ubaa9 1', onClick: () => {} },\n            { id: 'item2', label: '\ud56d\ubaa9 2', onClick: () => {} },\n          ]\n        }\n      ]}\n      trigger={<button onClick={() => setIsOpen(!isOpen)}>\uba54\ub274 \uc5f4\uae30</button>}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\uc139\uc158-\uc81c\ubaa9-\uc0ac\uc6a9\ubc95",children:"\uc139\uc158 \uc81c\ubaa9 \uc0ac\uc6a9\ubc95"}),"\n",(0,t.jsx)(e.p,{children:"\uba54\ub274 \ud56d\ubaa9\uc744 \uc139\uc158\uc73c\ub85c \uadf8\ub8f9\ud654\ud558\uace0 \uc81c\ubaa9\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { DropdownMenu } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction SectionedDropdownExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <DropdownMenu\n      isOpen={isOpen}\n      onClose={() => setIsOpen(false)}\n      sections={[\n        {\n          title: \"\uacc4\uc815 \uc124\uc815\",\n          items: [\n            { id: 'profile', label: '\ud504\ub85c\ud544', onClick: () => {} },\n            { id: 'settings', label: '\uc124\uc815', onClick: () => {} },\n          ]\n        },\n        {\n          title: \"\uc9c0\uc6d0\",\n          items: [\n            { id: 'help', label: '\ub3c4\uc6c0\ub9d0', onClick: () => {} },\n            { id: 'feedback', label: '\ud53c\ub4dc\ubc31 \ubcf4\ub0b4\uae30', onClick: () => {} },\n          ]\n        }\n      ]}\n      trigger={<button onClick={() => setIsOpen(!isOpen)}>\uba54\ub274 \uc5f4\uae30</button>}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\uc11c\ube0c\uba54\ub274-\ub3d9\uc791-\ubc29\uc2dd",children:"\uc11c\ube0c\uba54\ub274 \ub3d9\uc791 \ubc29\uc2dd"}),"\n",(0,t.jsx)(e.p,{children:"\uc11c\ube0c\uba54\ub274\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ud2b9\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ub9c8\uc6b0\uc2a4 \ud638\ubc84\ub85c \ud45c\uc2dc"}),": \uba54\ub274 \ud56d\ubaa9\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \uc11c\ube0c\uba54\ub274\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\uc9c0\uc5f0 \ud0c0\uc774\uba38"}),": \ub9c8\uc6b0\uc2a4\uac00 \uc11c\ube0c\uba54\ub274\uc640 \uba54\uc778 \uba54\ub274 \ud56d\ubaa9 \uc0ac\uc774\ub97c \uc774\ub3d9\ud560 \ub54c \uc57d\uac04\uc758 \uc9c0\uc5f0 \uc2dc\uac04\uc774 \uc788\uc5b4 \uc2e4\uc218\ub85c \uc11c\ube0c\uba54\ub274\uac00 \ub2eb\ud788\ub294 \uac83\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ubaa8\ubc14\uc77c \ub300\uc751"}),": \uc791\uc740 \ud654\uba74\uc5d0\uc11c\ub294 \uc11c\ube0c\uba54\ub274\uac00 \ud558\ub2e8\uc5d0\uc11c \uc2ac\ub77c\uc774\ub4dc \uc5c5\ub418\ub294 \ubc29\uc2dd\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\ud654\uc0b4\ud45c \ud45c\uc2dc"}),": \uc11c\ube0c\uba54\ub274\uac00 \uc788\ub294 \ud56d\ubaa9\uc740 \uc624\ub978\ucabd\uc5d0 \ud654\uc0b4\ud45c \uc544\uc774\ucf58\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,t.jsx)(e.h3,{id:"dropdownmenuprops",children:"DropdownMenuProps"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\uc18d\uc131"}),(0,t.jsx)(e.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(e.th,{children:"\uae30\ubcf8\uac12"}),(0,t.jsx)(e.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"title"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ReactNode"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274 \uc81c\ubaa9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"sections"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"DropdownMenuSection[]"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\ub4dc\ub86d\ub2e4\uc6b4 \uba54\ub274 \uc139\uc158\ub4e4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"isOpen"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\uba54\ub274 \uc5f4\ub9bc \uc0c1\ud0dc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"onClose"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"() => void"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\uba54\ub274 \ub2eb\uae30 \ud578\ub4e4\ub7ec"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"trigger"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ReactNode"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ud2b8\ub9ac\uac70 \uc694\uc18c (\ub4dc\ub86d\ub2e4\uc6b4\uc744 \uc5f4\uae30 \uc704\ud55c \ubc84\ud2bc/\uc694\uc18c)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"className"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"menuClassName"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"\uba54\ub274 \ucee8\ud14c\uc774\ub108\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"width"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"'300px'"}),(0,t.jsx)(e.td,{children:"\uba54\ub274\uc758 \ub108\ube44"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"position"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'right-start' | 'left-start'"})}),(0,t.jsx)(e.td,{children:"'bottom-start'"}),(0,t.jsx)(e.td,{children:"\uba54\ub274\uac00 \ud2b8\ub9ac\uac70 \uc694\uc18c \uae30\uc900\uc73c\ub85c \ud45c\uc2dc\ub420 \uc704\uce58"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"dropdownmenusection",children:"DropdownMenuSection"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\uc18d\uc131"}),(0,t.jsx)(e.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(e.th,{children:"\uae30\ubcf8\uac12"}),(0,t.jsx)(e.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"title"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\uc139\uc158 \uc81c\ubaa9 (\uc120\ud0dd\uc801)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"items"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"DropdownMenuItem[]"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\uc139\uc158\uc5d0 \ud3ec\ud568\ub41c \uba54\ub274 \ud56d\ubaa9\ub4e4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"className"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"\uc139\uc158\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"dropdownmenuitem",children:"DropdownMenuItem"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\uc18d\uc131"}),(0,t.jsx)(e.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(e.th,{children:"\uae30\ubcf8\uac12"}),(0,t.jsx)(e.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"id"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\uba54\ub274 \ud56d\ubaa9\uc758 \uace0\uc720 ID"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"label"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"\ud544\uc218"}),(0,t.jsx)(e.td,{children:"\uba54\ub274 \ud56d\ubaa9\uc5d0 \ud45c\uc2dc\ub420 \ub808\uc774\ube14"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"icon"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ReactNode"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ud56d\ubaa9\uc758 \uc544\uc774\ucf58"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"shortcut"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ub2e8\ucd95\ud0a4 \ud45c\uc2dc"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"onClick"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"() => void"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ud56d\ubaa9 \ud074\ub9ad \uc2dc \uc2e4\ud589\ud560 \ud568\uc218"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"hasSubmenu"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})}),(0,t.jsx)(e.td,{children:"false"}),(0,t.jsx)(e.td,{children:"\ud558\uc704 \uba54\ub274\uac00 \uc788\ub294\uc9c0 \uc5ec\ubd80"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"subItems"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"DropdownMenuItem[]"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"\ud558\uc704 \uba54\ub274 \ud56d\ubaa9\ub4e4. \uba54\ub274 \ud56d\ubaa9\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \ud45c\uc2dc\ub428"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"disabled"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})}),(0,t.jsx)(e.td,{children:"false"}),(0,t.jsx)(e.td,{children:"\ube44\ud65c\uc131\ud654 \uc5ec\ubd80"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"className"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"string"})}),(0,t.jsx)(e.td,{children:"''"}),(0,t.jsx)(e.td,{children:"\ud56d\ubaa9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,t.jsx)(e.p,{children:"DropdownMenu \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Escape \ud0a4\ub97c \ub20c\ub7ec \uba54\ub274\ub97c \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\uc11c\ube0c\uba54\ub274\ub97c \ud3ec\ud568\ud55c \uba54\ub274 \ud56d\ubaa9\uc740 \uc801\uc808\ud55c ARIA \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub9b0 \ub9ac\ub354 \ud638\ud658\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"\ud0a4\ubcf4\ub4dc \uc0ac\uc6a9\uc790\ub97c \uc704\ud55c \ud0d0\uc0c9 \uae30\ub2a5\uc774 \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,d)=>{d.d(e,{R:()=>i,x:()=>c});var s=d(6540);const t={},r=s.createContext(t);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);