"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6442],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=o,f=d["".concat(u,".").concat(g)]||d[g]||l[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n,o=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],u={title:"Generator setup"},p=void 0,c={unversionedId:"basics/generator-setup",id:"version-2.0.0-beta.0/basics/generator-setup",title:"Generator setup",description:"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to set up our procedural dungeon generator.",source:"@site/versioned_docs/version-2.0.0-beta.0/basics/generator-setup.md",sourceDirName:"basics",slug:"/basics/generator-setup",permalink:"/Edgar-Unity/docs/2.0.0-beta.0/basics/generator-setup",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-beta.0/basics/generator-setup.md",tags:[],version:"2.0.0-beta.0",frontMatter:{title:"Generator setup"},sidebar:"docs",previous:{title:"Level graphs",permalink:"/Edgar-Unity/docs/2.0.0-beta.0/basics/level-graphs"},next:{title:"Level structure and rooms data",permalink:"/Edgar-Unity/docs/2.0.0-beta.0/basics/generated-level-info"}},l=[],d=(n="Image",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to set up our procedural dungeon generator."),(0,i.kt)("p",null,"The setup is very easy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an empty game object in the scene"),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("strong",{parentName:"li"},"Dungeon Generator")," component to that game object"),(0,i.kt)("li",{parentName:"ol"},"Assign your level graph to the ",(0,i.kt)("strong",{parentName:"li"},"Level Graph")," field"),(0,i.kt)("li",{parentName:"ol"},"Hit the ",(0,i.kt)("strong",{parentName:"li"},"Generate dungeon")," button or enable ",(0,i.kt)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),(0,i.kt)(d,{src:"2d/generators/dungeon_generator_inspector.png",caption:"Dungeon generator runner",width:"500px",mdxType:"Image"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The goal of this guide is not to describe individual options of the generator but rather to describe how to get an instance of the generator with a reasonable default configuration. If you are interested in individual options, head to the ",(0,i.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/2.0.0-beta.0/generators/dungeon-generator"},"Dungeon generator")," page.")))}f.isMDXComponent=!0}}]);