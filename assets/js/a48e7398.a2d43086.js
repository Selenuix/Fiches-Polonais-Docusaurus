"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[2166],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7783:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a="tableOfContentsInline_gwOO",o=t(721);function i(e){var n=e.toc,t=e.minHeadingLevel,i=e.maxHeadingLevel;return r.createElement("div",{className:a},r.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},721:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),o=t(7294);function i(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?o.createElement("ul",{className:a?void 0:t},n.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var l=o.memo(i),p=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,o=(0,a.Z)(e,p);t>=0?n[t].children.push(o):r.push(o)})),r}function u(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var c=t(6668);function m(e){var n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function d(e,n){var t,r,a=n.anchorTopOffset,o=e.find((function(e){return m(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,o.useRef)(0),n=(0,c.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function k(e){var n=(0,o.useRef)(void 0),t=f();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,i=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),p=d(l,{anchorTopOffset:t.current}),s=e.find((function(e){return p&&p.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,p=e.linkClassName,m=void 0===p?"table-of-contents__link":p,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,v=e.maxHeadingLevel,N=(0,a.Z)(e,g),b=(0,c.L)(),x=null!=h?h:b.tableOfContents.minHeadingLevel,y=null!=v?v:b.tableOfContents.maxHeadingLevel,L=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return u({toc:s(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:x,maxHeadingLevel:y});return k((0,o.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:x,maxHeadingLevel:y}}),[m,f,x,y])),o.createElement(l,(0,r.Z)({toc:L,className:i,linkClassName:m},N))}},3765:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(7783),l=["components"],p={slug:"9-top-25-des-verbes",title:"9. Top 25 des verbes",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","verbes"]},s=void 0,u={permalink:"/9-top-25-des-verbes",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/9-top-25-des-verbes.mdx",source:"@site/blog/9-top-25-des-verbes.mdx",title:"9. Top 25 des verbes",description:"",date:"2021-06-24T19:54:05.000Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"verbes",permalink:"/tags/verbes"}],readingTime:.815,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"9-top-25-des-verbes",title:"9. Top 25 des verbes",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","verbes"]},prevItem:{title:"8. Combien ?",permalink:"/8-combien"}},c={authorsImageUrls:[void 0]},m=[],d={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{toc:m,mdxType:"TOCInline"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-1.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\n\xcatre")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lubi\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-2.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nAimer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Robi\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-3.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nFaire")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"M\xf3wi\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-4.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nDire")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wyja\u015bni\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-5.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nExpliquer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"S\u0142ysze\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-6.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nEntendre")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"I\u015b\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-7.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nAller")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wiedzie\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-8.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nSavoir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Widzie\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-9.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nVoir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Przyj\u015b\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-10.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nVenir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"My\u015ble\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-11.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nPenser")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Patrze\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-12.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nRegarder")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Chcie\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-13.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nVouloir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Da\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-14.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nDonner")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"U\u017cywa\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-15.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nUtiliser")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Znale\u017a\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-16.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nTrouver")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wychodzi\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-17.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nSortir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Zapyta\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-18.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nDemander")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pracowa\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-19.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nTravailler")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wej\u015b\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-20.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nEntrer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Czu\u0107 - Czu\u0107 si\u0119 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-21.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nSentir - se sentir")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pr\xf3bowa\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-22.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nEssayer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Zostawi\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-23.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nLaisser")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Zadzwoni\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-24.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nAppeler")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Biega\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/9-25.mp3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nCourir"))))}f.isMDXComponent=!0}}]);