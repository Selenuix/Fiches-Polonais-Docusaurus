"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[292],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,k=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7783:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a="tableOfContentsInline_0DDH",o=t(5002);var l=function(e){var n=e.toc,t=e.minHeadingLevel,l=e.maxHeadingLevel;return r.createElement("div",{className:a},r.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},5002:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(3366),o=t(7294),l=t(3810),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?o.createElement("ul",{className:a?void 0:t},n.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}function u(e){var n=e.toc,t=e.className,u=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,p=void 0===c?"table-of-contents__link":c,m=e.linkActiveClassName,f=void 0===m?void 0:m,k=e.minHeadingLevel,g=e.maxHeadingLevel,v=(0,a.Z)(e,i),d=(0,l.LU)(),h=null!=k?k:d.tableOfContents.minHeadingLevel,b=null!=g?g:d.tableOfContents.maxHeadingLevel,y=(0,l.DA)({toc:n,minHeadingLevel:h,maxHeadingLevel:b}),N=(0,o.useMemo)((function(){if(p&&f)return{linkClassName:p,linkActiveClassName:f,minHeadingLevel:h,maxHeadingLevel:b}}),[p,f,h,b]);return(0,l.Si)(N),o.createElement(s,(0,r.Z)({toc:y,className:u,linkClassName:p},v))}},2663:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return k}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(7783),i=["components"],s={slug:"4-parles-tu-francais",title:"4. Parles-tu fran\xe7ais ?",author:"CISZEK Anthony",author_title:"Polish Learner",author_url:"https://github.com/Selenuix",author_image_url:"https://avatars.githubusercontent.com/u/29508475?v=4",tags:["basics","questions"]},u=void 0,c={permalink:"/4-parles-tu-francais",editUrl:"https://github.com/Selenuix/Fiches-Polonais-Docusaurus/tree/develop/blog/4-parles-tu-francais.mdx",source:"@site/blog/4-parles-tu-francais.mdx",title:"4. Parles-tu fran\xe7ais ?",description:"De mani\xe8re informelle",date:"2021-06-24T19:15:38.535Z",formattedDate:"June 24, 2021",tags:[{label:"basics",permalink:"/tags/basics"},{label:"questions",permalink:"/tags/questions"}],readingTime:.635,truncated:!1,authors:[{name:"CISZEK Anthony",title:"Polish Learner",url:"https://github.com/Selenuix",imageURL:"https://avatars.githubusercontent.com/u/29508475?v=4"}],prevItem:{title:"5. S'excuser",permalink:"/5-s-excuser"},nextItem:{title:"3. Saluer",permalink:"/3-saluer"}},p={authorsImageUrls:[void 0]},m=[{value:"De mani\xe8re informelle",id:"de-mani\xe8re-informelle",children:[],level:2},{value:"De mani\xe8re formelle",id:"de-mani\xe8re-formelle",children:[],level:2},{value:"R\xe9ponses possibles",id:"r\xe9ponses-possibles",children:[],level:2},{value:"Autres langues",id:"autres-langues",children:[],level:2}],f={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{toc:m,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"de-mani\xe8re-informelle"},"De mani\xe8re informelle"),(0,o.kt)("p",null,"Czy m\xf3wisz po angielsku? ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1bza8qAfEgU5"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nEst-ce que tu parles anglais ?"),(0,o.kt)("h2",{id:"de-mani\xe8re-formelle"},"De mani\xe8re formelle"),(0,o.kt)("p",null,"\ud83d\udc68 Przepraszam, czy m\xf3wi Pan po francusku? ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1aKzY68260r6"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nExcusez moi, est-ce que vous parlez fran\xe7ais, monsieur ?"),(0,o.kt)("p",null,"\ud83d\udc69 Przepraszam, czy m\xf3wi Pani po francusku? ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/19j5w8i5VnDg"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nExcusez moi, est-ce que vous parlez fran\xe7ais, madame ?"),(0,o.kt)("h2",{id:"r\xe9ponses-possibles"},"R\xe9ponses possibles"),(0,o.kt)("p",null,"Tak ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1aEM4v3bqjOO"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nOui"),(0,o.kt)("p",null,"Troch\u0119 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1aDkjSm1h1Cc"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nUn peu"),(0,o.kt)("p",null,"Nie, nie m\xf3wi\u0119 po francusku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1dK9mBAwSjb3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nNon, je ne parle pas fran\xe7ais"),(0,o.kt)("h2",{id:"autres-langues"},"Autres langues"),(0,o.kt)("p",null,"Po niemiecku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1c60WlSPIme9"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nAllemand"),(0,o.kt)("p",null,"Po rosyjsku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/16YZJRDrirt3"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nRusse"),(0,o.kt)("p",null,"Po w\u0142osku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/19tDbKp0Hyye"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nItalien"),(0,o.kt)("p",null,"Po hiszpa\u0144sku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/1cRqQRuN1ODF"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nEspagnol"),(0,o.kt)("p",null,"Po angielsku ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://voca.ro/17sGqbSSApR8"},"(prononciation)"))," ",(0,o.kt)("br",null),"\nAnglais"))}k.isMDXComponent=!0}}]);