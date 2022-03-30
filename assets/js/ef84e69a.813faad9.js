"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8935],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return r?o.createElement(f,n(n({ref:t},m),{},{components:r})):o.createElement(f,n({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var p=2;p<l;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43489:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var o=r(87462),a=r(63366),l=(r(67294),r(3905)),n=["components"],i={title:"(PRO) Platformer 1"},s=void 0,p={unversionedId:"examples/platformer-1",id:"version-2.0.0/examples/platformer-1",title:"(PRO) Platformer 1",description:"In this tutorial, we will use this tileset by @KenneyNL to create basic platformer levels. Be sure to check out their work if you like the tileset. We will not care about room decorations very much - the goal of this tutorial is to demonstrate all the basic steps needed to create platformer levels.",source:"@site/versioned_docs/version-2.0.0/examples/platformer-1.md",sourceDirName:"examples",slug:"/examples/platformer-1",permalink:"/Edgar-Unity/docs/2.0.0/examples/platformer-1",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0/examples/platformer-1.md",tags:[],version:"2.0.0",frontMatter:{title:"(PRO) Platformer 1"},sidebar:"docs",previous:{title:"Example 2",permalink:"/Edgar-Unity/docs/2.0.0/examples/example-2"},next:{title:"(PRO) Isometric 1",permalink:"/Edgar-Unity/docs/2.0.0/examples/isometric-1"}},m=[{value:"Limitations",id:"limitations",children:[],level:2},{value:"Room templates",id:"room-templates",children:[],level:2},{value:"Doors and corridors",id:"doors-and-corridors",children:[],level:2},{value:"Level graph",id:"level-graph",children:[],level:2},{value:"Results",id:"results",children:[],level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},d=c("Gallery"),u=c("GalleryImage"),f=c("Path"),h=c("Image"),y=c("ExternalCode"),g={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,n);return(0,l.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this tutorial, we will use ",(0,l.kt)("a",{parentName:"p",href:"https://www.kenney.nl/assets/abstract-platformer"},"this tileset")," by ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/KenneyNL"},"@KenneyNL")," to create basic platformer levels. Be sure to check out their work if you like the tileset. We will not care about room decorations very much - the goal of this tutorial is to demonstrate all the basic steps needed to create platformer levels."),(0,l.kt)(d,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,l.kt)(u,{src:"2d/examples/platformer1/result1.png",caption:"Example result",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/result2.png",caption:"Example result",mdxType:"GalleryImage"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," I recommend reading ",(0,l.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/2.0.0/examples/example-1"},"Example 1")," first as this is a bit harder to set up, and I will not repeat the basics here.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",(0,l.kt)(f,{path:"2de:Platformer1",mdxType:"Path"}),".")),(0,l.kt)("h2",{id:"limitations"},"Limitations"),(0,l.kt)("p",null,"If this is your first time reading about procedural platformers, please see the ",(0,l.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/2.0.0/generators/platformer-generator#limitations"},"Limitations section")," of the Platformer generator page."),(0,l.kt)("h2",{id:"room-templates"},"Room templates"),(0,l.kt)("p",null,"Below you can see a few of the room templates that were created for this example."),(0,l.kt)(d,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,l.kt)(u,{src:"2d/examples/platformer1/start.png",caption:"Start",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/goal.png",caption:"Goal",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/room2.png",caption:"Basic room",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/room3.png",caption:"Basic room",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/room6.png",caption:"Basic room",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/room8.png",caption:"Basic room",mdxType:"GalleryImage"})),(0,l.kt)("h2",{id:"doors-and-corridors"},"Doors and corridors"),(0,l.kt)("p",null,"Even though there are no real corridors used in generated levels, we use the corridor feature to make sure that neighbouring rooms do not share walls."),(0,l.kt)(d,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,l.kt)(u,{src:"2d/examples/platformer1/corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),(0,l.kt)("p",null,"Moreover, there is a small problem with doors because there are no background tiles inside room templates. And that means that when the corridor rooms are placed over non-corridor rooms, all the walls remain there, and it is not possible to go from one room to another (as can be seen in the image below). We usually do not have this problem because when there are background tiles, they are placed over walls and everything is working."),(0,l.kt)(h,{src:"2d/examples/platformer1/no_holes_between_rooms.png",caption:"There are no holes between individual rooms because we have no background tile in room templates.",mdxType:"Image"}),(0,l.kt)("p",null,"The solution is quite simple. We have to create a simple post-processing task that goes through all door positions and deletes all the door tiles."),(0,l.kt)(y,{name:"2d_platformer1_postProcessing",mdxType:"ExternalCode"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," The term ",(0,l.kt)("em",{parentName:"p"},"doors")," is used throughout the text but in this context it simply means a connection between two rooms.")),(0,l.kt)("h2",{id:"level-graph"},"Level graph"),(0,l.kt)(h,{src:"2d/examples/platformer1/level_graph.png",caption:"Level graph",mdxType:"Image"}),(0,l.kt)("h2",{id:"results"},"Results"),(0,l.kt)(d,{cols:2,fixedHeight:!0,mdxType:"Gallery"},(0,l.kt)(u,{src:"2d/examples/platformer1/result3.png",caption:"Example result",mdxType:"GalleryImage"}),(0,l.kt)(u,{src:"2d/examples/platformer1/result4.png",caption:"Example result",mdxType:"GalleryImage"})))}k.isMDXComponent=!0}}]);