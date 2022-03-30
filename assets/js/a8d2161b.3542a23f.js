"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6991],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62807:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n,a=r(87462),o=r(63366),l=(r(67294),r(3905)),i=["components"],s={title:"(PRO) Platformer generator"},c=void 0,u={unversionedId:"generators/platformer-generator",id:"generators/platformer-generator",title:"(PRO) Platformer generator",description:"Minimal setup",source:"@site/docs/generators/platformer-generator.md",sourceDirName:"generators",slug:"/generators/platformer-generator",permalink:"/Edgar-Unity/docs/next/generators/platformer-generator",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/generators/platformer-generator.md",tags:[],version:"current",frontMatter:{title:"(PRO) Platformer generator"},sidebar:"docs",previous:{title:"Post-processing",permalink:"/Edgar-Unity/docs/next/generators/post-process"},next:{title:"(PRO) Custom input",permalink:"/Edgar-Unity/docs/next/generators/custom-input"}},p=[{value:"Minimal setup",id:"minimal-setup",children:[],level:2},{value:"Configuration and usage",id:"configuration-and-usage",children:[],level:2},{value:"Default tilemaps structure",id:"default-tilemaps-structure",children:[],level:2},{value:"Limitations",id:"limitations",children:[{value:"Acyclic level graphs",id:"acyclic-level-graphs",children:[],level:3},{value:"Solvability of generated levels",id:"solvability-of-generated-levels",children:[],level:3}],level:2}],m=(n="Path",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"minimal-setup"},"Minimal setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add the ",(0,l.kt)("strong",{parentName:"li"},"Platformer Generator Component")," to any Game Object in the Scene."),(0,l.kt)("li",{parentName:"ul"},"Assign your level graph to the ",(0,l.kt)("strong",{parentName:"li"},"Level Graph")," field."),(0,l.kt)("li",{parentName:"ul"},"Hit the ",(0,l.kt)("strong",{parentName:"li"},"Generate platformer")," button or enable ",(0,l.kt)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),(0,l.kt)("h2",{id:"configuration-and-usage"},"Configuration and usage"),(0,l.kt)("p",null,"The configuration is currently the same as for the Dungeon Generator. See ",(0,l.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/generators/dungeon-generator#configuration"},"this")," page. The only difference is that if we want to use the generator from code, we use the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlatformerGenerator")," class."),(0,l.kt)("h2",{id:"default-tilemaps-structure"},"Default tilemaps structure"),(0,l.kt)("p",null,"Platformer room templates can be created via ",(0,l.kt)(m,{path:"2d:Platformer room template",mdxType:"Path"})," and their default tilemaps structure is the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Background")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Walls")," - collider"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Platforms")," - collider and platform effector"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Collideable")," - collider"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Other 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Other 2"))),(0,l.kt)("h2",{id:"limitations"},"Limitations"),(0,l.kt)("p",null,"There are some limitation regarding the platformer generator."),(0,l.kt)("h3",{id:"acyclic-level-graphs"},"Acyclic level graphs"),(0,l.kt)("p",null,"We should use only ",(0,l.kt)("strong",{parentName:"p"},"acyclic")," graphs, i.e. graphs without cycles. The room templates for platformers are often too restrictive to allow cycles. The generator currently allows graphs with cycles, but it often happens that it is not able to generate any level."),(0,l.kt)("h3",{id:"solvability-of-generated-levels"},"Solvability of generated levels"),(0,l.kt)("p",null,"The generator cannot guarantee that all the levels are solvable, i.e. it is possible to successfully traverse generated levels without being stuck at dead-ends caused by impossible jumps, etc. Probably the easiest way to handle that is to design room templates and level graphs in such a way that the generator cannot connect two rooms in a way that it is not possible go one from the first one to the other one."))}f.isMDXComponent=!0}}]);