"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[571],{4294:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"components/collapsible","title":"Collapsible","description":"\uc811\uc744 \uc218 \uc788\ub294 \ucf58\ud150\uce20 \uc601\uc5ed\uc744 \uc81c\uacf5\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uacf5\uac04\uc744 \uc808\uc57d\ud558\uace0 \uc0ac\uc6a9\uc790\uac00 \ud544\uc694\uc5d0 \ub530\ub77c \ucf58\ud150\uce20\ub97c \ud3bc\uce58\uac70\ub098 \uc811\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","source":"@site/docs/components/collapsible.md","sourceDirName":"components","slug":"/components/collapsible","permalink":"/docs/components/collapsible","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Checkbox","permalink":"/docs/components/checkbox"},"next":{"title":"Command","permalink":"/docs/components/command"}}');var d=l(4848),i=l(8453);const t={sidebar_position:7},r="Collapsible",c={},o=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc544\ucf54\ub514\uc5b8 \uc2a4\ud0c0\uc77c",id:"\uc544\ucf54\ub514\uc5b8-\uc2a4\ud0c0\uc77c",level:2},{value:"\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc",id:"\uc560\ub2c8\uba54\uc774\uc158-\ud6a8\uacfc",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"Collapsible Props",id:"collapsible-props",level:3},{value:"CollapsibleTrigger Props",id:"collapsibletrigger-props",level:3},{value:"CollapsibleContent Props",id:"collapsiblecontent-props",level:3},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"collapsible",children:"Collapsible"})}),"\n",(0,d.jsx)(n.p,{children:"\uc811\uc744 \uc218 \uc788\ub294 \ucf58\ud150\uce20 \uc601\uc5ed\uc744 \uc81c\uacf5\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uacf5\uac04\uc744 \uc808\uc57d\ud558\uace0 \uc0ac\uc6a9\uc790\uac00 \ud544\uc694\uc5d0 \ub530\ub77c \ucf58\ud150\uce20\ub97c \ud3bc\uce58\uac70\ub098 \uc811\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,d.jsx)(n.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'import { Collapsible, CollapsibleTrigger, CollapsibleContent } from \'react-common-components-library\';\nimport { useState } from \'react\';\n\nfunction CollapsibleExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <Collapsible \n      open={isOpen} \n      onOpenChange={setIsOpen}\n      className="w-full max-w-md"\n    >\n      <div className="flex items-center justify-between">\n        <h3 className="text-lg font-medium">\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38</h3>\n        <CollapsibleTrigger asChild>\n          <button className="rounded-full p-2 hover:bg-gray-100">\n            {isOpen ? \'\uc811\uae30\' : \'\ud3bc\uce58\uae30\'}\n          </button>\n        </CollapsibleTrigger>\n      </div>\n      \n      <CollapsibleContent className="mt-2">\n        <div className="rounded-md bg-gray-50 p-4">\n          <p>\uc774 \ucef4\ud3ec\ub10c\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc704\ud55c \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c UI \ucef4\ud3ec\ub10c\ud2b8 \ubaa8\uc74c\uc785\ub2c8\ub2e4.</p>\n          <p className="mt-2">\ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc811\uadfc\uc131\uacfc \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uace0\ub824\ud558\uc5ec \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.</p>\n        </div>\n      </CollapsibleContent>\n    </Collapsible>\n  );\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\uc544\ucf54\ub514\uc5b8-\uc2a4\ud0c0\uc77c",children:"\uc544\ucf54\ub514\uc5b8 \uc2a4\ud0c0\uc77c"}),"\n",(0,d.jsx)(n.p,{children:"\uc5ec\ub7ec Collapsible \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc544\ucf54\ub514\uc5b8 \uc2a4\ud0c0\uc77c\uc758 UI\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction AccordionStyleExample() {\n  const [openItem, setOpenItem] = useState(null);\n  \n  const items = [\n    { id: 1, title: '\uc139\uc158 1', content: '\uccab \ubc88\uc9f8 \uc139\uc158\uc758 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.' },\n    { id: 2, title: '\uc139\uc158 2', content: '\ub450 \ubc88\uc9f8 \uc139\uc158\uc758 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.' },\n    { id: 3, title: '\uc139\uc158 3', content: '\uc138 \ubc88\uc9f8 \uc139\uc158\uc758 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.' },\n  ];\n  \n  return (\n    <div className=\"space-y-2\">\n      {items.map((item) => (\n        <Collapsible \n          key={item.id}\n          open={openItem === item.id} \n          onOpenChange={(open) => setOpenItem(open ? item.id : null)}\n          className=\"border rounded-md p-2\"\n        >\n          <div className=\"flex items-center justify-between\">\n            <h3 className=\"text-md font-medium\">{item.title}</h3>\n            <CollapsibleTrigger asChild>\n              <button className=\"rounded-full p-1 hover:bg-gray-100\">\n                {openItem === item.id ? '\u25b2' : '\u25bc'}\n              </button>\n            </CollapsibleTrigger>\n          </div>\n          \n          <CollapsibleContent className=\"mt-2 pt-2 border-t\">\n            <p>{item.content}</p>\n          </CollapsibleContent>\n        </Collapsible>\n      ))}\n    </div>\n  );\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\uc560\ub2c8\uba54\uc774\uc158-\ud6a8\uacfc",children:"\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc"}),"\n",(0,d.jsx)(n.p,{children:"Collapsible \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"import { Collapsible, CollapsibleTrigger, CollapsibleContent } from 'react-common-components-library';\nimport { useState } from 'react';\nimport { motion, AnimatePresence } from 'framer-motion';\n\nfunction AnimatedCollapsibleExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <Collapsible \n      open={isOpen} \n      onOpenChange={setIsOpen}\n      className=\"w-full max-w-md\"\n    >\n      <div className=\"flex items-center justify-between\">\n        <h3 className=\"text-lg font-medium\">\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc</h3>\n        <CollapsibleTrigger asChild>\n          <button className=\"rounded-full p-2 hover:bg-gray-100\">\n            {isOpen ? '\uc811\uae30' : '\ud3bc\uce58\uae30'}\n          </button>\n        </CollapsibleTrigger>\n      </div>\n      \n      <AnimatePresence>\n        {isOpen && (\n          <CollapsibleContent asChild forceMount>\n            <motion.div\n              initial={{ height: 0, opacity: 0 }}\n              animate={{ height: 'auto', opacity: 1 }}\n              exit={{ height: 0, opacity: 0 }}\n              transition={{ duration: 0.3 }}\n              className=\"overflow-hidden\"\n            >\n              <div className=\"mt-2 rounded-md bg-gray-50 p-4\">\n                <p>\uc774 \ucf58\ud150\uce20\ub294 \ubd80\ub4dc\ub7fd\uac8c \ub098\ud0c0\ub098\uace0 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4.</p>\n              </div>\n            </motion.div>\n          </CollapsibleContent>\n        )}\n      </AnimatePresence>\n    </Collapsible>\n  );\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,d.jsx)(n.h3,{id:"collapsible-props",children:"Collapsible Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\uc18d\uc131"}),(0,d.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,d.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,d.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"children"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ReactNode"})}),(0,d.jsx)(n.td,{children:"\ud544\uc218"}),(0,d.jsx)(n.td,{children:"Collapsible \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc790\uc2dd \uc694\uc18c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"open"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\ucf58\ud150\uce20\uc758 \ud3bc\uce68/\uc811\ud798 \uc0c1\ud0dc (\uc81c\uc5b4 \ucef4\ud3ec\ub10c\ud2b8)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"defaultOpen"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\ucd08\uae30 \ud3bc\uce68/\uc811\ud798 \uc0c1\ud0dc (\ube44\uc81c\uc5b4 \ucef4\ud3ec\ub10c\ud2b8)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"onOpenChange"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"(open: boolean) => void"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\ud3bc\uce68/\uc811\ud798 \uc0c1\ud0dc \ubcc0\uacbd \uc2dc \ud638\ucd9c\ub418\ub294 \ud568\uc218"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"disabled"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ube44\ud65c\uc131\ud654 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"collapsible"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"true"}),(0,d.jsx)(n.td,{children:"\uc811\uc744 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"asChild"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\uccab \ubc88\uc9f8 \uc790\uc2dd \uc694\uc18c\ub85c \ub80c\ub354\ub9c1\ud560\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"className"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"style"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CSSProperties"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"collapsibletrigger-props",children:"CollapsibleTrigger Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\uc18d\uc131"}),(0,d.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,d.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,d.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"children"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ReactNode"})}),(0,d.jsx)(n.td,{children:"\ud544\uc218"}),(0,d.jsx)(n.td,{children:"\ud2b8\ub9ac\uac70 \uc694\uc18c\uc758 \uc790\uc2dd \uc694\uc18c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"asChild"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\uccab \ubc88\uc9f8 \uc790\uc2dd \uc694\uc18c\ub85c \ub80c\ub354\ub9c1\ud560\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"className"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"style"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CSSProperties"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"collapsiblecontent-props",children:"CollapsibleContent Props"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\uc18d\uc131"}),(0,d.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,d.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,d.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"children"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ReactNode"})}),(0,d.jsx)(n.td,{children:"\ud544\uc218"}),(0,d.jsx)(n.td,{children:"\ucf58\ud150\uce20 \uc694\uc18c\uc758 \uc790\uc2dd \uc694\uc18c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"forceMount"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\uc811\ud600 \uc788\uc744 \ub54c\ub3c4 DOM\uc5d0 \ub9c8\uc6b4\ud2b8\ud560\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"asChild"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\uccab \ubc88\uc9f8 \uc790\uc2dd \uc694\uc18c\ub85c \ub80c\ub354\ub9c1\ud560\uc9c0 \uc5ec\ubd80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"className"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"''"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"style"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CSSProperties"})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,d.jsx)(n.p,{children:"Collapsible \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc811\uadfc\uc131 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"WAI-ARIA \ub514\uc790\uc778 \ud328\ud134\uc744 \uc900\uc218\ud558\uc5ec \uc2a4\ud06c\ub9b0 \ub9ac\ub354 \ud638\ud658\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.li,{children:["\ud2b8\ub9ac\uac70 \uc694\uc18c\uc5d0\ub294 ",(0,d.jsx)(n.code,{children:"aria-expanded"})," \uc18d\uc131\uc774 \uc790\ub3d9\uc73c\ub85c \uc801\uc6a9\ub418\uc5b4 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc2a4\ud06c\ub9b0 \ub9ac\ub354\uc5d0 \uc54c\ub9bd\ub2c8\ub2e4."]}),"\n",(0,d.jsxs)(n.li,{children:["\ud2b8\ub9ac\uac70 \uc694\uc18c\uc640 \ucf58\ud150\uce20 \uc694\uc18c\ub294 ",(0,d.jsx)(n.code,{children:"aria-controls"}),"\uc640 ",(0,d.jsx)(n.code,{children:"id"}),"\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,d.jsx)(n.li,{children:"\ud0a4\ubcf4\ub4dc \uc0ac\uc6a9\uc790\ub294 Enter \ub610\ub294 Space \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucf58\ud150\uce20\ub97c \ud3bc\uce58\uac70\ub098 \uc811\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,d.jsxs)(n.li,{children:["\ube44\ud65c\uc131\ud654\ub41c \uacbd\uc6b0 ",(0,d.jsx)(n.code,{children:'aria-disabled="true"'}),"\uac00 \uc801\uc6a9\ub429\ub2c8\ub2e4."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var s=l(6540);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);