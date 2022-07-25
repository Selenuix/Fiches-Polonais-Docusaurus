"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[5561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(3743);const o="tableOfContentsInline_prmo";function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return a.createElement("div",{className:o},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function p(e){const t=e.getBoundingClientRect();return t.top===t.bottom?p(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>p(e).top>=a));if(r){var o;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(r))?r:null!=(o=e[e.indexOf(r)-1])?o:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),p=s(i,{anchorTopOffset:n.current}),c=e.find((e=>p&&p.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function m(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const d=r.memo(m);function k(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:p="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:m,...k}=e;const f=(0,o.L)(),g=null!=c?c:f.tableOfContents.minHeadingLevel,h=null!=m?m:f.tableOfContents.maxHeadingLevel,N=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:h});return u((0,r.useMemo)((()=>{if(p&&s)return{linkClassName:p,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:h}}),[p,s,g,h])),r.createElement(d,(0,a.Z)({toc:N,className:n,linkClassName:p},k))}},9831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(3901);const l={slug:"9-top-25-des-verbes",title:"9. Top 25 des verbes",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","verbes"]},i=void 0,p={permalink:"/9-top-25-des-verbes",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/9-top-25-des-verbes.mdx",source:"@site/blog/9-top-25-des-verbes.mdx",title:"9. Top 25 des verbes",description:"1. By\u0107 (prononciation)",date:"2022-07-25T12:41:16.000Z",formattedDate:"July 25, 2022",tags:[{label:"basics",permalink:"/tags/basics"},{label:"verbes",permalink:"/tags/verbes"}],readingTime:.815,hasTruncateMarker:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"9-top-25-des-verbes",title:"9. Top 25 des verbes",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","verbes"]},prevItem:{title:"8. Combien ?",permalink:"/8-combien"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{toc:c,mdxType:"TOCInline"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-1.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\n\xcatre")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lubi\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-2.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nAimer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Robi\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-3.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nFaire")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"M\xf3wi\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-4.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nDire")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wyja\u015bni\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-5.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nExpliquer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S\u0142ysze\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-6.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nEntendre")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I\u015b\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-7.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nAller")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wiedzie\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-8.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nSavoir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Widzie\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-9.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nVoir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Przyj\u015b\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-10.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nVenir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"My\u015ble\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-11.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nPenser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Patrze\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-12.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nRegarder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Chcie\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-13.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nVouloir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Da\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-14.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nDonner")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"U\u017cywa\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-15.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nUtiliser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Znale\u017a\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-16.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nTrouver")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wychodzi\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-17.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nSortir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zapyta\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-18.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nDemander")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pracowa\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-19.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nTravailler")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wej\u015b\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-20.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nEntrer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Czu\u0107 - Czu\u0107 si\u0119 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-21.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nSentir - se sentir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pr\xf3bowa\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-22.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nEssayer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zostawi\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-23.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nLaisser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Zadzwoni\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-24.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nAppeler")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Biega\u0107 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-25.mp3"},"(prononciation)"))," ",(0,r.kt)("br",null),"\nCourir"))))}m.isMDXComponent=!0}}]);