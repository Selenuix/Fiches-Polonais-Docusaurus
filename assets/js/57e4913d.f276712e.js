"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[3235],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=a,d=f["".concat(u,".").concat(p)]||f[p]||m[p]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3901:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(3743),o="tableOfContentsInline_prmo";function i(e){var n=e.toc,t=e.minHeadingLevel,i=e.maxHeadingLevel;return r.createElement("div",{className:o},r.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7462),a=t(3366),o=t(7294),i=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,o=(0,a.Z)(e,i);t>=0?n[t].children.push(o):r.push(o)})),r}function u(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var c=t(6668);function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,r,a=n.anchorTopOffset,o=e.find((function(e){return s(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,o.useRef)(0),n=(0,c.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){var n=(0,o.useRef)(void 0),t=f();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,i=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),u=m(l,{anchorTopOffset:t.current}),c=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function d(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?o.createElement("ul",{className:a?void 0:t},n.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var v=o.memo(d),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,f=e.linkActiveClassName,d=void 0===f?void 0:f,g=e.minHeadingLevel,b=e.maxHeadingLevel,y=(0,a.Z)(e,h),L=(0,c.L)(),k=null!=g?g:L.tableOfContents.minHeadingLevel,x=null!=b?b:L.tableOfContents.maxHeadingLevel,O=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return u({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:k,maxHeadingLevel:x});return p((0,o.useMemo)((function(){if(m&&d)return{linkClassName:m,linkActiveClassName:d,minHeadingLevel:k,maxHeadingLevel:x}}),[m,d,k,x])),o.createElement(v,(0,r.Z)({toc:O,className:i,linkClassName:m},y))}},9189:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(3901),l=["components"],u={slug:"1-se-presenter",title:"1. Se pr\xe9senter en Polonais",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","introduction"]},c=void 0,s={permalink:"/1-se-presenter",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/1-se-presenter.mdx",source:"@site/blog/1-se-presenter.mdx",title:"1. Se pr\xe9senter en Polonais",description:"",date:"2021-06-24T19:54:05.000Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"introduction",permalink:"/tags/introduction"}],readingTime:.34,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"1-se-presenter",title:"1. Se pr\xe9senter en Polonais",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","introduction"]},nextItem:{title:"10. Les \xe9motions",permalink:"/10-les-emotions"}},m={authorsImageUrls:[void 0]},f=[{value:"De mani\xe8re informelle",id:"de-mani\xe8re-informelle",level:2},{value:"De mani\xe8re formelle",id:"de-mani\xe8re-formelle",level:2}],p={toc:f};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{toc:f,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"de-mani\xe8re-informelle"},"De mani\xe8re informelle"),(0,o.kt)("p",null,"Cze\u015b\u0107! Jestem Anthony. Mi\u0142o mi ","[Ci\u0119 pozna\u0107]",". ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/1-1.mp3"},"(prononciation)"))),(0,o.kt)("p",null,"Salut ! Je suis Anthony. Ravi de te rencontrer"),(0,o.kt)("h2",{id:"de-mani\xe8re-formelle"},"De mani\xe8re formelle"),(0,o.kt)("p",null,"\ud83d\udc68 Dzie\u0144 dobry! Nazywam si\u0119 Anthony Ciszek. Mi\u0142o mi Pana pozna\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/1-2.mp3"},"(prononciation)"))),(0,o.kt)("p",null,"\ud83d\udc69 Dzie\u0144 dobry! Nazywam si\u0119 Anthony Ciszek. Mi\u0142o mi Pani\u0105 pozna\u0107 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/1-3.mp3"},"(prononciation)"))),(0,o.kt)("p",null,"Bonjour ! Je m'appelle Anthony Ciszek. Je suis r\xe2vi de vous rencontrer"))}d.isMDXComponent=!0}}]);