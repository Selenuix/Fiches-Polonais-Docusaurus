"use strict";(self.webpackChunkfiches_polonais=self.webpackChunkfiches_polonais||[]).push([[805],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8665:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(3366),a=n(7294),l=n(6010),o=n(9629),i=n(9960),c="sidebar_a9qW",s="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",p="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",g=n(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:m},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:d},e.title))}))))}var f=["sidebar","toc","children"];var y=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,f),s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(h,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},n))))}},6048:function(e,t,n){n.d(t,{Z:function(){return oe}});var r=n(7294),a=n(6010),l=n(3905),o=n(5999),i=n(9960),c=n(4996),s=n(5773),m=n(8780),u=n(7462),p=n(3366),d=n(2859),g={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},h={Prism:n(7410).default,theme:g};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var v=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},E=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},k=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=y({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=y({},n,{backgroundColor:null}),a};function N(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Z=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?k(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=y({},N(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?y({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),f(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),f(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=y({},N(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?y({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),f(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=r[o]++)<a[o];){var s=void 0,m=t[o],u=n[o][l];if("string"==typeof u?(m=o>0?m:["plain"],s=u):(m=E(m,u.type),u.alias&&(m=E(m,u.alias)),s=u.content),"string"==typeof s){var p=s.split(v),d=p.length;i.push({types:m,content:p[0]});for(var g=1;g<d;g++)b(i),c.push(i=[]),i.push({types:m,content:p[g]})}else o++,t.push(m),n.push(s),r.push(0),a.push(s.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return b(i),c}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),T=Z;var P="codeBlockContainer_I0IT",_="codeBlockContent_wNvx",O="codeBlockTitle_BvAR",j="codeBlock_jd64",w="codeBlockStandalone_csWH",C="copyButton_wuS7",x="codeBlockLines_mRuA";function L(e){var t,n=e.children,l=e.className,i=void 0===l?"":l,c=e.metastring,m=e.title,p=e.language,d=(0,s.LU)().prism,g=(0,r.useState)(!1),f=g[0],y=g[1],v=(0,r.useState)(!1),b=v[0],E=v[1];(0,r.useEffect)((function(){E(!0)}),[]);var k=(0,s.bc)(c)||m,N=(0,s.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(T,(0,u.Z)({},h,{key:String(b),theme:N,code:"",language:"text"}),(function(e){var t=e.className,l=e.style;return r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,w,"thin-scrollbar",P,i,s.kM.common.codeBlock),style:l},r.createElement("code",{className:x},n))}));var Z=Array.isArray(n)?n.join(""):n,L=null!=(t=null!=p?p:(0,s.Vo)(i))?t:d.defaultLanguage,D=(0,s.nZ)(Z,c,L),S=D.highlightLines,B=D.code,A=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(B),y(!0),setTimeout((function(){return y(!1)}),2e3)};return r.createElement(T,(0,u.Z)({},h,{key:String(b),theme:N,code:B,language:null!=L?L:"text"}),(function(e){var t,n=e.className,l=e.style,c=e.tokens,m=e.getLineProps,p=e.getTokenProps;return r.createElement("div",{className:(0,a.Z)(P,i,(t={},t["language-"+L]=L&&!i.includes("language-"+L),t),s.kM.common.codeBlock)},k&&r.createElement("div",{style:l,className:O},k),r.createElement("div",{className:(0,a.Z)(_,L)},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,j,"thin-scrollbar"),style:l},r.createElement("code",{className:x},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=m({line:e,key:t});return S.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,u.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,u.Z)({key:t},p({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(C,"clean-btn"),onClick:A},f?r.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var D="anchorWithStickyNavbar_mojV",S="anchorWithHideOnScrollNavbar_R0VQ",B=["as","id"],A=["as"];function R(e){var t,n=e.as,l=e.id,i=(0,p.Z)(e,B),c=(0,s.LU)().navbar.hideOnScroll;return l?r.createElement(n,(0,u.Z)({},i,{className:(0,a.Z)("anchor",(t={},t[S]=c,t[D]=!c,t)),id:l}),i.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(n,i)}function I(e){var t=e.as,n=(0,p.Z)(e,A);return"h1"===t?r.createElement("h1",(0,u.Z)({},n,{id:void 0}),n.children):r.createElement(R,(0,u.Z)({as:t},n))}var U="details_BAp3";function z(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,u.Z)({},t,{className:(0,a.Z)("alert alert--info",U,t.className)}))}var F=["mdxType","originalType"];var M={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,l=(a.mdxType,a.originalType,(0,p.Z)(a,F));return r.createElement(e.props.originalType,l)}return e}(e)}));return r.createElement(d.Z,e,t)},code:function(e){return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?r.createElement("code",e):r.createElement(L,e)},a:function(e){return r.createElement(i.Z,e)},pre:function(e){var t;return r.createElement(L,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(z,(0,u.Z)({},e,{summary:n}),a)},h1:function(e){return r.createElement(I,(0,u.Z)({as:"h1"},e))},h2:function(e){return r.createElement(I,(0,u.Z)({as:"h2"},e))},h3:function(e){return r.createElement(I,(0,u.Z)({as:"h3"},e))},h4:function(e){return r.createElement(I,(0,u.Z)({as:"h4"},e))},h5:function(e){return r.createElement(I,(0,u.Z)({as:"h5"},e))},h6:function(e){return r.createElement(I,(0,u.Z)({as:"h6"},e))}},V="iconEdit_dcUD",W=["className"];var Q=function(e){var t=e.className,n=(0,p.Z)(e,W);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(V,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function q(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},r.createElement(Q,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var H="blogPostTitle_rzP5",J="blogPostData_Zg1s",K="blogPostDetailsFull_h6_j",X=n(7774),G="tags_XVD_",Y="tag_JSN8";function $(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(G,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:Y},r.createElement(X.Z,{name:t,permalink:n}))}))))}var ee="image_o0gy";var te=function(e){var t=e.author,n=t.name,a=t.title,l=t.url,o=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:ee,src:o,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},ne="authorCol_FlmR",re="imageOnlyAuthorRow_trpF",ae="imageOnlyAuthorCol_S2np";function le(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",l?re:"row")},t.map((function(e,t){var o;return r.createElement("div",{className:(0,a.Z)(!l&&"col col--6",l?ae:ne),key:t},r.createElement(te,{author:Object.assign({},e,{imageURL:null!=(o=n.authorsImageUrls[t])?o:e.imageURL})}))})))}var oe=function(e){var t,n,u,p=(u=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return u(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,c.C)().withBaseUrl,g=e.children,h=e.frontMatter,f=e.assets,y=e.metadata,v=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,k=y.date,N=y.formattedDate,Z=y.permalink,T=y.tags,P=y.readingTime,_=y.title,O=y.editUrl,j=y.authors,w=null!=(t=f.image)?t:h.image,C=!E&&v,x=T.length>0,L=E?"h1":"h2";return r.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(L,{className:H,itemProp:"headline"},E?_:r.createElement(i.Z,{itemProp:"url",to:Z},_)),r.createElement("div",{className:(0,a.Z)(J,"margin-vert--md")},r.createElement("time",{dateTime:k,itemProp:"datePublished"},N),void 0!==P&&r.createElement(r.Fragment,null," \xb7 ",p(P))),r.createElement(le,{authors:j,assets:f})),w&&r.createElement("meta",{itemProp:"image",content:d(w,{absolute:!0})}),r.createElement("div",{id:E?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:M},g)),(x||v)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(n={},n[K]=E,n))},x&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":C})},r.createElement($,{tags:T})),E&&O&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(q,{editUrl:O})),C&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":x})},r.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+_},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7774:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(9960),o="tag_hD8n",i="tagRegular_D6E_",c="tagWithCount_i0QQ";var s=function(e){var t,n=e.permalink,s=e.name,m=e.count;return r.createElement(l.Z,{href:n,className:(0,a.Z)(o,(t={},t[i]=!m,t[c]=m,t))},s,m&&r.createElement("span",null,m))}}}]);