"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[9249],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,p=f["".concat(u,".").concat(d)]||f[d]||m[d]||i;return t?r.createElement(p,l(l({ref:n},s),{},{components:t})):r.createElement(p,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7783:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a="tableOfContentsInline_gwOO",i=t(721);function l(e){var n=e.toc,t=e.minHeadingLevel,l=e.maxHeadingLevel;return r.createElement("div",{className:a},r.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},721:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),i=t(7294);function l(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?i.createElement("ul",{className:a?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(l,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var o=i.memo(l),u=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,u);t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6668);function f(e){var n=e.getBoundingClientRect();return n.top===n.bottom?f(e.parentNode):n}function d(e,n){var t,r,a=n.anchorTopOffset,i=e.find((function(e){return f(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(f(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(t=e[e.length-1])?t:null}function p(){var e=(0,i.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,i.useRef)(void 0),t=p();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,l=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),u=d(o,{anchorTopOffset:t.current}),c=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(a)),e.classList.add(a),n.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,l=void 0===t?"table-of-contents table-of-contents__left-border":t,u=e.linkClassName,f=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,p=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,k=(0,a.Z)(e,g),y=(0,m.L)(),x=null!=h?h:y.tableOfContents.minHeadingLevel,L=null!=b?b:y.tableOfContents.maxHeadingLevel,O=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:c(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:x,maxHeadingLevel:L});return v((0,i.useMemo)((function(){if(f&&p)return{linkClassName:f,linkActiveClassName:p,minHeadingLevel:x,maxHeadingLevel:L}}),[f,p,x,L])),i.createElement(o,(0,r.Z)({toc:O,className:l,linkClassName:f},k))}},337:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=t(7783),o=["components"],u={slug:"3-saluer",title:"3. Saluer",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","introduction"]},c=void 0,s={permalink:"/3-saluer",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/3-saluer.mdx",source:"@site/blog/3-saluer.mdx",title:"3. Saluer",description:"",date:"2021-06-24T19:54:05.000Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"introduction",permalink:"/tags/introduction"}],readingTime:.285,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"3-saluer",title:"3. Saluer",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","introduction"]},prevItem:{title:"2. Merci & de rien",permalink:"/2-merci-et-de-rien"},nextItem:{title:"4. Parles-tu fran\xe7ais ?",permalink:"/4-parles-tu-francais"}},m={authorsImageUrls:[void 0]},f=[{value:"De mani\xe8re informelle",id:"de-mani\xe8re-informelle",level:2},{value:"Arriver",id:"arriver",level:3},{value:"Partir",id:"partir",level:3},{value:"De mani\xe8re formelle",id:"de-mani\xe8re-formelle",level:2},{value:"Arriver",id:"arriver-1",level:3},{value:"Partir",id:"partir-1",level:3}],d={toc:f};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{toc:f,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"de-mani\xe8re-informelle"},"De mani\xe8re informelle"),(0,i.kt)("h3",{id:"arriver"},"Arriver"),(0,i.kt)("p",null,"Cze\u015b\u0107 / Siema / Hej. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/3-1.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nSalut."),(0,i.kt)("h3",{id:"partir"},"Partir"),(0,i.kt)("p",null,"Pa (pa). ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/3-2.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nSalut."),(0,i.kt)("h2",{id:"de-mani\xe8re-formelle"},"De mani\xe8re formelle"),(0,i.kt)("h3",{id:"arriver-1"},"Arriver"),(0,i.kt)("p",null,"Dzie\u0144 dobry ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/3-3.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nBonjour"),(0,i.kt)("p",null,"Dobry wiecz\xf3r ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/3-4.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nBonsoir"),(0,i.kt)("h3",{id:"partir-1"},"Partir"),(0,i.kt)("p",null,"Do widzenia ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/3-5.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nAu revoir"))}p.isMDXComponent=!0}}]);