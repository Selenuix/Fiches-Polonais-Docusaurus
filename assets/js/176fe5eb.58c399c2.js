"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[7838],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,p=f["".concat(u,".").concat(d)]||f[d]||m[d]||i;return t?r.createElement(p,o(o({ref:n},s),{},{components:t})):r.createElement(p,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3901:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(3743),i="tableOfContentsInline_prmo";function o(e){var n=e.toc,t=e.minHeadingLevel,o=e.maxHeadingLevel;return r.createElement("div",{className:i},r.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),i=t(7294),o=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,o);t>=0?n[t].children.push(i):r.push(i)})),r}function u(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var c=t(6668);function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,r,a=n.anchorTopOffset,i=e.find((function(e){return s(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,i.useRef)(0),n=(0,c.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){var n=(0,i.useRef)(void 0),t=f();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),u=m(l,{anchorTopOffset:t.current}),c=e.find((function(e){return u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function p(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?i.createElement("ul",{className:a?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(p,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var v=i.memo(p),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,f=e.linkActiveClassName,p=void 0===f?void 0:f,h=e.minHeadingLevel,b=e.maxHeadingLevel,x=(0,a.Z)(e,g),y=(0,c.L)(),L=null!=h?h:y.tableOfContents.minHeadingLevel,k=null!=b?b:y.tableOfContents.maxHeadingLevel,O=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return u({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:L,maxHeadingLevel:k});return d((0,i.useMemo)((function(){if(m&&p)return{linkClassName:m,linkActiveClassName:p,minHeadingLevel:L,maxHeadingLevel:k}}),[m,p,L,k])),i.createElement(v,(0,r.Z)({toc:O,className:o,linkClassName:m},x))}},482:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(3901),l=["components"],u={slug:"5-s-excuser",title:"5. S'excuser",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","excuses"]},c=void 0,s={permalink:"/5-s-excuser",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/5-s-excuser.mdx",source:"@site/blog/5-s-excuser.mdx",title:"5. S'excuser",description:"",date:"2021-06-24T19:54:05.000Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"excuses",permalink:"/tags/excuses"}],readingTime:.15,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],frontMatter:{slug:"5-s-excuser",title:"5. S'excuser",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","excuses"]},prevItem:{title:"4. Parles-tu fran\xe7ais ?",permalink:"/4-parles-tu-francais"},nextItem:{title:"6. Les nombres de 0 \xe0 10",permalink:"/6-les-nombres-de-0-a-10"}},m={authorsImageUrls:[void 0]},f=[{value:"De mani\xe8re informelle",id:"de-mani\xe8re-informelle",level:2},{value:"De mani\xe8re formelle",id:"de-mani\xe8re-formelle",level:2}],d={toc:f};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{toc:f,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"de-mani\xe8re-informelle"},"De mani\xe8re informelle"),(0,i.kt)("p",null,"Sory ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/5-1.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nD\xe9sol\xe9"),(0,i.kt)("h2",{id:"de-mani\xe8re-formelle"},"De mani\xe8re formelle"),(0,i.kt)("p",null,"Przepraszam ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://cdn.selenuix.tools/polonais/public/audio/5-2.mp3"},"(prononciation)"))," ",(0,i.kt)("br",null),"\nExcuse moi, d\xe9sol\xe9 (",(0,i.kt)("em",{parentName:"p"},"formel et informel"),")"))}p.isMDXComponent=!0}}]);