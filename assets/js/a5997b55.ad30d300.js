"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[9096],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7783:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a="tableOfContentsInline_gwOO",i=t(721);function o(e){var n=e.toc,t=e.minHeadingLevel,o=e.maxHeadingLevel;return r.createElement("div",{className:a},r.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},721:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),i=t(7294);function o(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?i.createElement("ul",{className:a?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var l=i.memo(o),u=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,u);t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6668);function p(e){var n=e.getBoundingClientRect();return n.top===n.bottom?p(e.parentNode):n}function d(e,n){var t,r,a=n.anchorTopOffset,i=e.find((function(e){return p(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,i.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,i.useRef)(void 0),t=f();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),u=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,p=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,y=(0,a.Z)(e,g),k=(0,m.L)(),x=null!=h?h:k.tableOfContents.minHeadingLevel,C=null!=b?b:k.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:c(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:x,maxHeadingLevel:C});return v((0,i.useMemo)((function(){if(p&&f)return{linkClassName:p,linkActiveClassName:f,minHeadingLevel:x,maxHeadingLevel:C}}),[p,f,x,C])),i.createElement(l,(0,r.Z)({toc:N,className:o,linkClassName:p},y))}},5131:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(7783),l=["components"],u={slug:"12-a-ty-et-co-u-ciebie-mieux-comprendre",title:'12. "A ty" et "Co u Ciebie" - mieux comprendre',author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","memo"]},c=void 0,s={permalink:"/12-a-ty-et-co-u-ciebie-mieux-comprendre",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/12-a-ty-et-co-u-ciebie-mieux-comprendre.mdx",source:"@site/blog/12-a-ty-et-co-u-ciebie-mieux-comprendre.mdx",title:'12. "A ty" et "Co u Ciebie" - mieux comprendre',description:"",date:"2021-06-24T19:54:05.000Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"memo",permalink:"/tags/memo"}],readingTime:.48,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"12-a-ty-et-co-u-ciebie-mieux-comprendre",title:'12. "A ty" et "Co u Ciebie" - mieux comprendre',author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","memo"]},prevItem:{title:"11. Demander de l'aide",permalink:"/11-demader-de-l-aide"},nextItem:{title:"13. La nourriture",permalink:"/13-la-nourriture"}},m={authorsImageUrls:[void 0]},p=[{value:"A ty",id:"a-ty",level:2},{value:"Co u Ciebie",id:"co-u-ciebie",level:2},{value:"Rappel",id:"rappel",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{toc:p,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"a-ty"},"A ty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Jak si\u0119 masz?" ',(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-1.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nComment tu vas ?"),(0,i.kt)("li",{parentName:"ul"},'"Dobrze, a Ty?" ',(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-2.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nBien et toi ?"),(0,i.kt)("li",{parentName:"ul"},'"Ja te\u017c" ',(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-3.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nMoi aussi")),(0,i.kt)("h2",{id:"co-u-ciebie"},"Co u Ciebie"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Co tam / co u Ciebie? ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-4.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nComment \xe7a va chez toi ?"),(0,i.kt)("li",{parentName:"ul"},"Dobrze, a u Ciebie? ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-5.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nBien et chez toi ?"),(0,i.kt)("li",{parentName:"ul"},"U mnie te\u017c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/12-6.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nChez moi aussi")),(0,i.kt)("h2",{id:"rappel"},"Rappel"),(0,i.kt)("p",null,"Ne pas oublier ces r\xe8gles de base, c'est tr\xe8s important !"))}f.isMDXComponent=!0}}]);