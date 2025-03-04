"use strict";(self.webpackChunkreact_components_docs=self.webpackChunkreact_components_docs||[]).push([[961],{5029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"components/aspect-ratio","title":"AspectRatio","description":"\uc9c0\uc815\ub41c \uac00\ub85c\uc138\ub85c \ube44\uc728\uc744 \uc720\uc9c0\ud558\ub294 \ucee8\ud14c\uc774\ub108 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uc774\ubbf8\uc9c0, \ube44\ub514\uc624 \ub610\ub294 \uae30\ud0c0 \ucf58\ud150\uce20\uc758 \ube44\uc728\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4.","source":"@site/docs/components/aspect-ratio.md","sourceDirName":"components","slug":"/components/aspect-ratio","permalink":"/docs/components/aspect-ratio","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"AlertDialog","permalink":"/docs/components/alert-dialog"},"next":{"title":"Avatar","permalink":"/docs/components/avatar"}}');var s=t(4848),r=t(8453);const d={sidebar_position:3},c="AspectRatio",l={},o=[{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\ub2e4\uc591\ud55c \ube44\uc728 \uc608\uc81c",id:"\ub2e4\uc591\ud55c-\ube44\uc728-\uc608\uc81c",level:2},{value:"\ube44\ub514\uc624 \ud3ec\ud568\ud558\uae30",id:"\ube44\ub514\uc624-\ud3ec\ud568\ud558\uae30",level:2},{value:"API \ucc38\uc870",id:"api-\ucc38\uc870",level:2},{value:"AspectRatio Props",id:"aspectratio-props",level:3},{value:"\uc77c\ubc18\uc801\uc778 \uac00\ub85c\uc138\ub85c \ube44\uc728",id:"\uc77c\ubc18\uc801\uc778-\uac00\ub85c\uc138\ub85c-\ube44\uc728",level:2},{value:"\uc811\uadfc\uc131",id:"\uc811\uadfc\uc131",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"aspectratio",children:"AspectRatio"})}),"\n",(0,s.jsx)(n.p,{children:"\uc9c0\uc815\ub41c \uac00\ub85c\uc138\ub85c \ube44\uc728\uc744 \uc720\uc9c0\ud558\ub294 \ucee8\ud14c\uc774\ub108 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \uc774\ubbf8\uc9c0, \ube44\ub514\uc624 \ub610\ub294 \uae30\ud0c0 \ucf58\ud150\uce20\uc758 \ube44\uc728\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { AspectRatio } from 'react-common-components-library';\n\nfunction AspectRatioExample() {\n  return (\n    <AspectRatio ratio={16 / 9} style={{ maxWidth: '600px' }}>\n      <img \n        src=\"https://images.unsplash.com/photo-1531297484001-80022131f5a1\"\n        alt=\"\uc6b0\uc8fc\uc5d0\uc11c \ubcf8 \uc9c0\uad6c\"\n        style={{ objectFit: 'cover', width: '100%', height: '100%' }}\n      />\n    </AspectRatio>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ub2e4\uc591\ud55c-\ube44\uc728-\uc608\uc81c",children:"\ub2e4\uc591\ud55c \ube44\uc728 \uc608\uc81c"}),"\n",(0,s.jsx)(n.p,{children:"\uc5ec\ub7ec \uac00\uc9c0 \uc77c\ubc18\uc801\uc778 \uac00\ub85c\uc138\ub85c \ube44\uc728\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { AspectRatio } from 'react-common-components-library';\n\nfunction MultipleRatiosExample() {\n  return (\n    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>\n      <div>\n        <h3>16:9 (\uc640\uc774\ub4dc\uc2a4\ud06c\ub9b0)</h3>\n        <AspectRatio ratio={16 / 9}>\n          <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n            16:9\n          </div>\n        </AspectRatio>\n      </div>\n      \n      <div>\n        <h3>4:3 (\uae30\uc874 TV)</h3>\n        <AspectRatio ratio={4 / 3}>\n          <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n            4:3\n          </div>\n        </AspectRatio>\n      </div>\n      \n      <div>\n        <h3>1:1 (\uc815\uc0ac\uac01\ud615)</h3>\n        <AspectRatio ratio={1}>\n          <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n            1:1\n          </div>\n        </AspectRatio>\n      </div>\n      \n      <div>\n        <h3>9:16 (\ubaa8\ubc14\uc77c)</h3>\n        <AspectRatio ratio={9 / 16}>\n          <div style={{ backgroundColor: '#f0f0f0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n            9:16\n          </div>\n        </AspectRatio>\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\ube44\ub514\uc624-\ud3ec\ud568\ud558\uae30",children:"\ube44\ub514\uc624 \ud3ec\ud568\ud558\uae30"}),"\n",(0,s.jsx)(n.p,{children:"AspectRatio\ub294 \ube44\ub514\uc624\uc640 \uac19\uc740 \ubbf8\ub514\uc5b4 \uc694\uc18c\ub97c \ud3ec\ud568\ud558\ub294 \ub370 \ud2b9\ud788 \uc720\uc6a9\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { AspectRatio } from 'react-common-components-library';\n\nfunction VideoAspectRatioExample() {\n  return (\n    <AspectRatio ratio={16 / 9} style={{ maxWidth: '800px' }}>\n      <iframe\n        src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n        title=\"YouTube \ube44\ub514\uc624\"\n        allowFullScreen\n        style={{ width: '100%', height: '100%', border: 'none' }}\n      />\n    </AspectRatio>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api-\ucc38\uc870",children:"API \ucc38\uc870"}),"\n",(0,s.jsx)(n.h3,{id:"aspectratio-props",children:"AspectRatio Props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uc18d\uc131"}),(0,s.jsx)(n.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(n.th,{children:"\uae30\ubcf8\uac12"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ratio"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"\uac00\ub85c\uc138\ub85c \ube44\uc728 (\uac00\ub85c/\uc138\ub85c)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReactNode"})}),(0,s.jsx)(n.td,{children:"\ud544\uc218"}),(0,s.jsx)(n.td,{children:"\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0 \ub80c\ub354\ub9c1\ud560 \ucf58\ud150\uce20"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"className"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"''"}),(0,s.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \ucd94\uac00 CSS \ud074\ub798\uc2a4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"style"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CSSProperties"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc778\ub77c\uc778 \uc2a4\ud0c0\uc77c"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc77c\ubc18\uc801\uc778-\uac00\ub85c\uc138\ub85c-\ube44\uc728",children:"\uc77c\ubc18\uc801\uc778 \uac00\ub85c\uc138\ub85c \ube44\uc728"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uc774\ub984"}),(0,s.jsx)(n.th,{children:"\ube44\uc728"}),(0,s.jsx)(n.th,{children:"\uc6a9\ub3c4"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"16:9"}),(0,s.jsx)(n.td,{children:"1.78:1"}),(0,s.jsx)(n.td,{children:"\ud604\ub300 TV, \ubaa8\ub2c8\ud130, \uc720\ud29c\ube0c \ube44\ub514\uc624"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4:3"}),(0,s.jsx)(n.td,{children:"1.33:1"}),(0,s.jsx)(n.td,{children:"\uae30\uc874 TV\uc640 \ubaa8\ub2c8\ud130"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1:1"}),(0,s.jsx)(n.td,{children:"1:1"}),(0,s.jsx)(n.td,{children:"\uc815\uc0ac\uac01\ud615, \ud504\ub85c\ud544 \uc0ac\uc9c4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"21:9"}),(0,s.jsx)(n.td,{children:"2.33:1"}),(0,s.jsx)(n.td,{children:"\uc6b8\ud2b8\ub77c\uc640\uc774\ub4dc \ubaa8\ub2c8\ud130, \uc2dc\ub124\ub9c8\uc2a4\ucf54\ud504"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3:2"}),(0,s.jsx)(n.td,{children:"1.5:1"}),(0,s.jsx)(n.td,{children:"35mm \ud544\ub984, \ub514\uc9c0\ud138 \uce74\uba54\ub77c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"9:16"}),(0,s.jsx)(n.td,{children:"0.56:1"}),(0,s.jsx)(n.td,{children:"\ubaa8\ubc14\uc77c \uc804\uccb4 \ud654\uba74, \ud2f1\ud1a1/\uc778\uc2a4\ud0c0\uadf8\ub7a8 \ub9b4\uc2a4"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\uc811\uadfc\uc131",children:"\uc811\uadfc\uc131"}),"\n",(0,s.jsx)(n.p,{children:"AspectRatio \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub2e8\uc21c\ud55c \ub808\uc774\uc544\uc6c3 \ucef4\ud3ec\ub10c\ud2b8\uc774\uc9c0\ub9cc \uc811\uadfc\uc131\uc744 \uace0\ub824\ud560 \ub54c \ub2e4\uc74c \uc0ac\ud56d\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub0b4\ubd80\uc5d0 \uc774\ubbf8\uc9c0\ub098 \ube44\ub514\uc624\ub97c \ud3ec\ud568\ud560 \ub54c \uc801\uc808\ud55c \ub300\uccb4 \ud14d\uc2a4\ud2b8\ub098 \uc81c\ubaa9\uc744 \uc81c\uacf5\ud558\uc138\uc694."}),"\n",(0,s.jsx)(n.li,{children:"\ube44\ub514\uc624\ub97c \ud3ec\ud568\ud560 \ub54c \uac00\ub2a5\ud55c \uacbd\uc6b0 \uc790\ub9c9\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.li,{children:"AspectRatio \uc790\uccb4\ub294 \uc811\uadfc\uc131 \uc18d\uc131\uc744 \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\uc9c0\ub9cc, \ub0b4\ubd80 \ucf58\ud150\uce20\ub294 \uc811\uadfc\uc131 \uc9c0\uce68\uc744 \ub530\ub77c\uc57c \ud569\ub2c8\ub2e4."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);