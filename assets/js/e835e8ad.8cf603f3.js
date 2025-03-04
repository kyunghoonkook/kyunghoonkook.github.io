"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[447],{1990:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"components/alert-dialog","title":"AlertDialog","description":"\uc911\uc694\ud55c \uc758\uc0ac \uacb0\uc815\uc744 \uc704\ud55c \ubaa8\ub2ec \ub300\ud654\uc0c1\uc790\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0 \ud655\uc778\uc774\ub098 \ucde8\uc18c \uac19\uc740 \uc120\ud0dd\uc744 \uc694\uad6c\ud569\ub2c8\ub2e4.","source":"@site/docs/components/alert-dialog.md","sourceDirName":"components","slug":"/components/alert-dialog","permalink":"/docs/components/alert-dialog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Accordion","permalink":"/docs/components/accordion"},"next":{"title":"AspectRatio","permalink":"/docs/components/aspect-ratio"}}');var t=s(4848),r=s(8453);const i={sidebar_position:2},l="AlertDialog",c={},o=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\uc704\ud5d8\ud55c \uc791\uc5c5 \uc608\uc81c",id:"\uc704\ud5d8\ud55c-\uc791\uc5c5-\uc608\uc81c",level:2},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \ub0b4\uc6a9",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\ub0b4\uc6a9",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"AlertDialog Props",id:"alertdialog-props",level:3},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"alertdialog",children:"AlertDialog"})}),"\n",(0,t.jsx)(n.p,{children:"\uc911\uc694\ud55c \uc758\uc0ac \uacb0\uc815\uc744 \uc704\ud55c \ubaa8\ub2ec \ub300\ud654\uc0c1\uc790\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uace0 \ud655\uc778\uc774\ub098 \ucde8\uc18c \uac19\uc740 \uc120\ud0dd\uc744 \uc694\uad6c\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { AlertDialog } from \'react-common-components-library\';\nimport { useState } from \'react\';\n\nfunction AlertDialogExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \uacc4\uc815 \uc0ad\uc81c\n      </button>\n      \n      <AlertDialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="\uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"\n        description="\uacc4\uc815\uc744 \uc0ad\uc81c\ud558\uba74 \ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc601\uad6c\uc801\uc73c\ub85c \uc81c\uac70\ub429\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."\n        cancelText="\ucde8\uc18c"\n        confirmText="\uc0ad\uc81c"\n        onConfirm={() => {\n          console.log(\'\uacc4\uc815 \uc0ad\uc81c \ud655\uc778\ub428\');\n          setIsOpen(false);\n        }}\n      />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\uc704\ud5d8\ud55c-\uc791\uc5c5-\uc608\uc81c",children:"\uc704\ud5d8\ud55c \uc791\uc5c5 \uc608\uc81c"}),"\n",(0,t.jsx)(n.p,{children:"\uc704\ud5d8\ud55c \uc791\uc5c5\uc744 \uc704\ud55c \uc0c9\uc0c1 \ubc0f \uc2a4\ud0c0\uc77c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { AlertDialog } from \'react-common-components-library\';\nimport { useState } from \'react\';\n\nfunction DangerAlertDialogExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucd08\uae30\ud654\n      </button>\n      \n      <AlertDialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="\ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ucd08\uae30\ud654\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"\n        description="\ubaa8\ub4e0 \ub370\uc774\ud130\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."\n        cancelText="\ucde8\uc18c"\n        confirmText="\ucd08\uae30\ud654"\n        variant="danger"\n        onConfirm={() => {\n          console.log(\'\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucd08\uae30\ud654 \ud655\uc778\ub428\');\n          setIsOpen(false);\n        }}\n      />\n    </>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\ub0b4\uc6a9",children:"\uc0ac\uc6a9\uc790 \uc815\uc758 \ub0b4\uc6a9"}),"\n",(0,t.jsx)(n.p,{children:"AlertDialog\uc5d0 \uc0ac\uc6a9\uc790 \uc815\uc758 \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { AlertDialog } from 'react-common-components-library';\nimport { useState } from 'react';\n\nfunction CustomContentAlertDialogExample() {\n  const [isOpen, setIsOpen] = useState(false);\n  const [confirmCode, setConfirmCode] = useState('');\n  \n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        \uace0\uae09 \uc791\uc5c5 \uc2e4\ud589\n      </button>\n      \n      <AlertDialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title=\"\uc791\uc5c5 \ud655\uc778\"\n        description=\"\uc544\ub798\uc5d0 'CONFIRM'\uc744 \uc785\ub825\ud558\uc5ec \uc791\uc5c5\uc744 \ud655\uc778\ud558\uc138\uc694.\"\n        cancelText=\"\ucde8\uc18c\"\n        confirmText=\"\ud655\uc778\"\n        isConfirmDisabled={confirmCode !== 'CONFIRM'}\n        onConfirm={() => {\n          console.log('\uc791\uc5c5 \ud655\uc778\ub428');\n          setIsOpen(false);\n        }}\n      >\n        <div>\n          <input\n            type=\"text\"\n            value={confirmCode}\n            onChange={(e) => setConfirmCode(e.target.value)}\n            placeholder=\"CONFIRM \uc785\ub825\"\n          />\n          {confirmCode !== 'CONFIRM' && confirmCode !== '' && (\n            <p style={{ color: 'red' }}>\n              'CONFIRM'\uc744 \uc815\ud655\ud788 \uc785\ub825\ud558\uc138\uc694\n            </p>\n          )}\n        </div>\n      </AlertDialog>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,t.jsx)(n.h3,{id:"alertdialog-props",children:"AlertDialog Props"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uc18d\uc131"}),(0,t.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,t.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isOpen"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"\ud544\uc218"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc5f4\ub9bc \uc0c1\ud0dc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onClose"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{children:"\ud544\uc218"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub2eb\uae30 \ud578\ub4e4\ub7ec"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"title"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"\ud544\uc218"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc81c\ubaa9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"description"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"\ud544\uc218"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \uc124\uba85"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"children"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ReactNode"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc6a9 (description\uacfc \ud568\uaed8 \uc0ac\uc6a9 \uac00\ub2a5)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cancelText"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"'\ucde8\uc18c'"}),(0,t.jsx)(n.td,{children:"\ucde8\uc18c \ubc84\ud2bc \ud14d\uc2a4\ud2b8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"confirmText"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"'\ud655\uc778'"}),(0,t.jsx)(n.td,{children:"\ud655\uc778 \ubc84\ud2bc \ud14d\uc2a4\ud2b8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"onConfirm"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{children:"\ud544\uc218"}),(0,t.jsx)(n.td,{children:"\ud655\uc778 \ubc84\ud2bc \ud074\ub9ad \ud578\ub4e4\ub7ec"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"variant"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'default' | 'danger'"})}),(0,t.jsx)(n.td,{children:"'default'"}),(0,t.jsx)(n.td,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8 \ubcc0\ud615 (\uc704\ud5d8\ud55c \uc791\uc5c5\uc744 \uc704\ud55c \uc2a4\ud0c0\uc77c)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isConfirmDisabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"\ud655\uc778 \ubc84\ud2bc \ube44\ud65c\uc131\ud654 \uc5ec\ubd80"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"className"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"overlayClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\uc624\ubc84\ub808\uc774\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"titleClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\uc81c\ubaa9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"contentClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\ub0b4\uc6a9\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"footerClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\ud558\ub2e8 \uc601\uc5ed\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cancelButtonClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\ucde8\uc18c \ubc84\ud2bc\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"confirmButtonClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"''"}),(0,t.jsx)(n.td,{children:"\ud655\uc778 \ubc84\ud2bc\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,t.jsx)(n.p,{children:"AlertDialog \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc811\uadfc\uc131\uc744 \uc5fc\ub450\uc5d0 \ub450\uace0 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub9b4 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"ESC \ud0a4\ub97c \ub20c\ub7ec \ub2e4\uc774\uc5bc\ub85c\uadf8\ub97c \ub2eb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\ud2b8\ub7a9 \ud3ec\ucee4\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc774\uc5bc\ub85c\uadf8\uac00 \uc5f4\ub824 \uc788\uc744 \ub54c \ud3ec\ucee4\uc2a4\uac00 \ub2e4\uc774\uc5bc\ub85c\uadf8 \ub0b4\uc5d0\uc11c\ub9cc \uc774\ub3d9\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc801\uc808\ud55c ARIA \uc18d\uc131\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud06c\ub9b0 \ub9ac\ub354 \ud638\ud658\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uc0c9\uc0c1 \ub300\ube44\uac00 WCAG \uc9c0\uce68\uc744 \uc900\uc218\ud569\ub2c8\ub2e4."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(6540);const t={},r=d.createContext(t);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);