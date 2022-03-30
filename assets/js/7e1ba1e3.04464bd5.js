"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7128],{3905:function(e,t,i){i.d(t,{Zo:function(){return m},kt:function(){return c}});var a=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(i),c=o,u=d["".concat(s,".").concat(c)]||d[c]||h[c]||n;return i?a.createElement(u,r(r({ref:t},m),{},{components:i})):a.createElement(u,r({ref:t},m))}));function c(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<n;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8497:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=i(87462),o=i(63366),n=(i(67294),i(3905)),r=["components"],l={title:"(PRO) Minimap"},s=void 0,p={unversionedId:"guides/minimap",id:"guides/minimap",title:"(PRO) Minimap",description:"In this guide, we will learn how to implement a simple minimap functionality.",source:"@site/docs/guides/minimap.md",sourceDirName:"guides",slug:"/guides/minimap",permalink:"/Edgar-Unity/docs/next/guides/minimap",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/guides/minimap.md",tags:[],version:"current",frontMatter:{title:"(PRO) Minimap"},sidebar:"docs",previous:{title:"(PRO) Fog of war",permalink:"/Edgar-Unity/docs/next/guides/fog-of-war"},next:{title:"(PRO) Door sockets",permalink:"/Edgar-Unity/docs/next/guides/door-sockets"}},m=[{value:"Example scene",id:"example-scene",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Create a Minimap camera",id:"create-a-minimap-camera",children:[],level:3},{value:"Create Render Texture",id:"create-render-texture",children:[],level:3},{value:"Assign render texture to the camera",id:"assign-render-texture-to-the-camera",children:[],level:3},{value:"Prepare UI elements",id:"prepare-ui-elements",children:[],level:3},{value:"<em>(Optional)</em> Post-processing",id:"optional-post-processing",children:[],level:3},{value:"<em>(Optional)</em> Fog of War",id:"optional-fog-of-war",children:[],level:3}],level:2},{value:"Post-processing",id:"post-processing",children:[{value:"<code>Layer</code>",id:"layer",children:[],level:4},{value:"<code>Use Mutliple Tilemaps</code>",id:"use-mutliple-tilemaps",children:[],level:4},{value:"Layers",id:"layers",children:[{value:"<code>Tilemaps</code>",id:"tilemaps",children:[],level:4},{value:"<code>Display Mode</code>",id:"display-mode",children:[],level:4},{value:"<code>Color</code> (<em>Color</em> mode only)",id:"color-color-mode-only",children:[],level:4},{value:"<code>Size</code> (<em>Color</em> mode only)",id:"size-color-mode-only",children:[],level:4},{value:"<code>Tile</code> (<em>Custom Tile</em> mode only)",id:"tile-custom-tile-mode-only",children:[],level:4},{value:"<code>Material</code>",id:"material",children:[],level:4}],level:3},{value:"Size correction #1",id:"size-correction-1",children:[],level:3},{value:"Size correction #2 and overlapping tiles",id:"size-correction-2-and-overlapping-tiles",children:[],level:3}],level:2},{value:"Customization",id:"customization",children:[{value:"Shape of the minimap border",id:"shape-of-the-minimap-border",children:[],level:3},{value:"Background colour",id:"background-colour",children:[],level:3},{value:"Zoom level",id:"zoom-level",children:[],level:3},{value:"Add player (or other) icon(s)",id:"add-player-or-other-icons",children:[],level:3}],level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},d=h("Image"),c=h("Path"),u=h("Gallery"),g={toc:m};function f(e){var t=e.components,i=(0,o.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this guide, we will learn how to implement a simple minimap functionality."),(0,n.kt)(d,{src:"2d/guides/minimap/result.png",caption:"Minimap in the top-right corner, simplified view of the level, with fog of war",mdxType:"Image"}),(0,n.kt)("h2",{id:"example-scene"},"Example scene"),(0,n.kt)("p",null,"An example scene can be found at ",(0,n.kt)(c,{path:"2de:MinimapExample",mdxType:"Path"})," and ",(0,n.kt)(c,{path:"2de:MinimapExample2",mdxType:"Path"}),". "),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"create-a-minimap-camera"},"Create a Minimap camera"),(0,n.kt)("p",null,"The first step is to create an additional camera that will render the minimap view. For starters, configure the camera so that it renders the same things as the main camera. Later, you will be able to change the background colour or zoom it out. Do not forget to make the camera follow your player so that it is always centred on the player."),(0,n.kt)("h3",{id:"create-render-texture"},"Create Render Texture"),(0,n.kt)("p",null,"The next step is to create a Render Texture that we will use to show the minimap inside the UI. Go to ",(0,n.kt)(c,{path:"Create/Render Texture",mdxType:"Path"})," to create the render texture and set its size to e.g. 512x512. "),(0,n.kt)("h3",{id:"assign-render-texture-to-the-camera"},"Assign render texture to the camera"),(0,n.kt)("p",null,"The next step is to assign the render texture to the ",(0,n.kt)("em",{parentName:"p"},"Target Texture")," field of our minimap camera. By doing so, the camera will now render its view to the render texture instead of on the screen. If you run the game now, you should see that the render texture changes as you move in the level."),(0,n.kt)("h3",{id:"prepare-ui-elements"},"Prepare UI elements"),(0,n.kt)("p",null,"The next step is to show the render texture in our UI. To make this tutorial simple, we will create a simple square minimap with a solid white border. However, it should be very easy to customize the look of the minimap - make it circular or add a custom border."),(0,n.kt)("p",null,"First, create a canvas if you do not have one already. Next, add an ",(0,n.kt)("em",{parentName:"p"},"Image")," ",(0,n.kt)(c,{path:"UI/Image",par:!0,mdxType:"Path"})," element inside the canvas. Set its colour to white and the size to e.g. 204x204. Move the image to the top-right corner so that it looks like the left image below. Next, add a ",(0,n.kt)("em",{parentName:"p"},"Raw Image"),"  ",(0,n.kt)(c,{path:"UI/Raw Image",par:!0,mdxType:"Path"})," element inside the white image. Set its size to 200x200 and move it to the centre of the white background. And finally, assign our render texture to the ",(0,n.kt)("em",{parentName:"p"},"Texture")," field of the raw image. The screen should now look like the right image below."),(0,n.kt)(u,{cols:2,mdxType:"Gallery"},(0,n.kt)(d,{src:"2d/guides/minimap/ui_white_background.png",caption:"Minimap with background only",mdxType:"Image"}),(0,n.kt)(d,{src:"2d/guides/minimap/ui_with_texture.png",caption:"Minimap with render texture",mdxType:"Image"})),(0,n.kt)("p",null,"The minimap is now fully functional. The following steps are optional, but I recommend checking them out."),(0,n.kt)("h3",{id:"optional-post-processing"},(0,n.kt)("em",{parentName:"h3"},"(Optional)")," Post-processing"),(0,n.kt)("p",null,"Usually, a minimap is not just a zoomed-out view of the game. We often want to show a simplified view of the game. The goal is the following: we will create an additional tilemap layer in which we will create a simplified version of the level with single-coloured tiles. We will also create a special Unity layer, assign this layer to the new tilemap layer and then set up cameras in a way that only the minimap camera displays the new layer."),(0,n.kt)("p",null,"The first step is to create a new Unity Layer, called, for example, ",(0,n.kt)("em",{parentName:"p"},'"Minimap"'),"."),(0,n.kt)("p",null,"Next, we have to create an instance of the ",(0,n.kt)("em",{parentName:"p"},"MinimapPostProcess")," scriptable object. In order to do that, head to ",(0,n.kt)(c,{path:"2d:Features/Minimap post-process",mdxType:"Path"}),", which should create a new file for you. Now drag and drop this file to the ",(0,n.kt)("em",{parentName:"p"},"Custom post-process tasks")," section of the dungeon generator in order to enable it. After you do that, you should see several editor fields in the post-processing task:"),(0,n.kt)(d,{src:"2d/guides/minimap/post_processing_new.png",caption:"Minimap post-processing task",mdxType:"Image"}),(0,n.kt)("p",null,"First, change the ",(0,n.kt)("em",{parentName:"p"},"Layer")," field to match the layer that you created for the minimap."),(0,n.kt)("p",null,"Next, take a look at the ",(0,n.kt)("em",{parentName:"p"},"Layers")," array. Here you can configure which tilemap layers should be displayed in the minimap. By default, the minimap comes with two layers - the first layer is for the ",(0,n.kt)("em",{parentName:"p"},"Walls")," tilemap layer and the second one is for the ",(0,n.kt)("em",{parentName:"p"},"Floor")," tilemap layer. "),(0,n.kt)("p",null," Next, check that the ",(0,n.kt)("em",{parentName:"p"},"Walls Tilemaps")," and ",(0,n.kt)("em",{parentName:"p"},"Floor Tilemaps")," match the names of your wall tilemap layer and floor tilemap layer. After you generate a level, you should see something similar to the image below. You can see that there is an additional tilemap layer on top of the level, and it contains a simplified view of the level."),(0,n.kt)(d,{src:"2d/guides/minimap/simplified_view.png",caption:"Both cameras rendering the simplified view",mdxType:"Image"}),(0,n.kt)("p",null,"The last step is to change which camera renders which layers. In your main camera, exclude the minimap layer from the ",(0,n.kt)("em",{parentName:"p"},"Culling Mask")," field. In your minimap camera, render only the minimap layer. After doing that, you should see something similar to the image below."),(0,n.kt)(d,{src:"2d/guides/minimap/simplified_view_result.png",caption:"Only the minimap camera rendering the simplified view",mdxType:"Image"}),(0,n.kt)("h3",{id:"optional-fog-of-war"},(0,n.kt)("em",{parentName:"h3"},"(Optional)")," Fog of War"),(0,n.kt)("p",null,"The minimap works really well with the ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/guides/fog-of-war"},"Fog of War")," feature. If you have the Fog of War already working, it is very easy to use it together with the minimap. Because the ",(0,n.kt)("em",{parentName:"p"},"Fog Of War")," component is a singleton, we cannot directly add it to the minimap camera. However, there is the ",(0,n.kt)("em",{parentName:"p"},"Fog Of War Additional Camera")," components that was created for this exact purpose. If you add this component to the minimap camera, the fog effect will be applied to both cameras."),(0,n.kt)(u,{cols:2,mdxType:"Gallery"},(0,n.kt)(d,{src:"2d/guides/minimap/fog_original.png",caption:"Fog of War",mdxType:"Image"}),(0,n.kt)(d,{src:"2d/guides/minimap/fog_simplified.png",caption:"Fog of War with simplified view",mdxType:"Image"})),(0,n.kt)("h2",{id:"post-processing"},"Post-processing"),(0,n.kt)("p",null,"Usually, a minimap is not just a zoomed-out view of the game. We often want to show a simplified view of the game with simple graphics or remove some tilemap layers from the minimap. For this purpose, there is the ",(0,n.kt)("em",{parentName:"p"},"MinimapPostProcessing")," task that should help you customize the look of the minimap. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," It is expected that you know how to add the ",(0,n.kt)("em",{parentName:"p"},"MinimapPostProcessing")," task. (See the ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/guides/minimap#optional-post-processing"},"Setup")," section)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you change something in the task settings, you have to generate the level again to see the changes applied.")),(0,n.kt)("h4",{id:"layer"},(0,n.kt)("inlineCode",{parentName:"h4"},"Layer")),(0,n.kt)("p",null,"This field controls on which layer should the minimap be rendered. This was already described in the ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/guides/minimap#optional-post-processing"},"Setup")," section."),(0,n.kt)("h4",{id:"use-mutliple-tilemaps"},(0,n.kt)("inlineCode",{parentName:"h4"},"Use Mutliple Tilemaps")),(0,n.kt)("p",null,"This field controls if each minimap layer should get its own tilemap layer of if they should all share a single layer. It is usually recommended keeping this checkbox enabled."),(0,n.kt)("h3",{id:"layers"},"Layers"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Layers")," field is the main configuration section of the minimap post-processing task. The core idea is that the minimap consists of multiple layers of tiles, and each such layer corresponds to one or more tilemap layers that are present in the level. For example, if we wanted to display all wall tiles using the colour white and all floor tiles using the colour blue, we would add two minimap layers and configure them accordingly. Below are described all the fields of minimap layers."),(0,n.kt)(d,{src:"2d/guides/minimap/post_processing_new.png",caption:"Minimap post-processing task",mdxType:"Image"}),(0,n.kt)("h4",{id:"tilemaps"},(0,n.kt)("inlineCode",{parentName:"h4"},"Tilemaps")),(0,n.kt)("p",null,"This field controls which tilemap layers are displayed in the minimap layer. Usually, it will be a single tilemap layer (for example ",(0,n.kt)("em",{parentName:"p"},'"Walls"'),"). As a result, the post-processing task will copy all the wall tiles from the level to the minimap layer. If there are multiple tilemap layers with the same configuration, we can concatenate their names with a comma (for example ",(0,n.kt)("em",{parentName:"p"},'"Walls,Collideable"'),")."),(0,n.kt)("h4",{id:"display-mode"},(0,n.kt)("inlineCode",{parentName:"h4"},"Display Mode")),(0,n.kt)("p",null,"There are current 3 ways of displaying minimap layers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Color")," - tiles are rendered as a single colour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Custom Tile")," - a given custom tile is used instead of the original tiles"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Original Tiles")," - original tiles are used")),(0,n.kt)("p",null,"Below are properties that change the behaviour of individual modes."),(0,n.kt)("h4",{id:"color-color-mode-only"},(0,n.kt)("inlineCode",{parentName:"h4"},"Color")," (",(0,n.kt)("em",{parentName:"h4"},"Color")," mode only)"),(0,n.kt)("p",null,"This field controls the colour of tiles in the layer."),(0,n.kt)("h4",{id:"size-color-mode-only"},(0,n.kt)("inlineCode",{parentName:"h4"},"Size")," (",(0,n.kt)("em",{parentName:"h4"},"Color")," mode only)"),(0,n.kt)("p",null,"This field controls the size of tiles and is used to correct the sizes of minimap tiles (see ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/guides/minimap#size-correction-1"},"Size correction #1"),"). The default value is ",(0,n.kt)("em",{parentName:"p"},"1")," - tiles have their original sizes. If we set the size to ",(0,n.kt)("em",{parentName:"p"},"2"),", the size will be two times as large and the tiles will occupy part of the space of neighbouring tiles."),(0,n.kt)("h4",{id:"tile-custom-tile-mode-only"},(0,n.kt)("inlineCode",{parentName:"h4"},"Tile")," (",(0,n.kt)("em",{parentName:"h4"},"Custom Tile")," mode only)"),(0,n.kt)("p",null,"This field controls the tile that will be used instead of the original tiles."),(0,n.kt)("h4",{id:"material"},(0,n.kt)("inlineCode",{parentName:"h4"},"Material")),(0,n.kt)("p",null,"This field controls which material is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tilemap Renderer")," component. The default material is used if null. This field can also be used for size correction, see ",(0,n.kt)("a",{parentName:"p",href:"/Edgar-Unity/docs/next/guides/minimap#size-correction-2"},"Size correction #2"),"."),(0,n.kt)("h3",{id:"size-correction-1"},"Size correction #1"),(0,n.kt)("p",null,"When using the ",(0,n.kt)("em",{parentName:"p"},"Color"),' display mode, we will often encounter a problem with minimap tile sizes being different to actual tile sizes used in the game. An example of this problem can be seen in the image below. In the left image, we can see how the minimap looks with equal sizes of wall and floor tiles (i.e. Floor layer size set to 1). The problem is that the original wall tiles do not occupy the whole tile which results in the outline of the minimap view looking more "chunkier". To compensate for that, we can increase the size of the floor minimap layer. If we set the floor layer size to 2, the floor tiles will occupy some space of the wall tiles and as a result, the wall tiles will look thinner.'),(0,n.kt)(u,{cols:2,mdxType:"Gallery"},(0,n.kt)(d,{src:"2d/guides/minimap/wall_size_1.png",caption:"Floor size 1",mdxType:"Image"}),(0,n.kt)(d,{src:"2d/guides/minimap/wall_size_0_5.png",caption:"Floor size 2",mdxType:"Image"})),(0,n.kt)("p",null,"For this to work, the floor layer must be rendered on top of the wall layer (i.e. the floor layer must be under the wall layer in the ",(0,n.kt)("em",{parentName:"p"},"Layers")," array). Also, it is not possible to decrease the size of wall tiles, we always have to increase the size of a suitable layer."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",(0,n.kt)("em",{parentName:"p"},"Edgar/Examples/MinimapExample"),".")),(0,n.kt)("h3",{id:"size-correction-2-and-overlapping-tiles"},"Size correction #2 and overlapping tiles"),(0,n.kt)("p",null,"For some tilesets, the previous approach for size correction will not work. The previous approach can work only for tilesets, where there are no tiles displayed over one another. This does not hold for the tileset that can be seen in the image below because the lighter wall outlines are displayed on top of floor tiles. In the left image, we can see how the minimap looks without any size correction. Once again, the wall tiles are much thicker when compared to the original game view. And in the right image, we can see how it looks like when we apply the previous size correction approach. The problem is that with the previous approach, the floor minimap tiles must be drawn on top of the wall tiles, which causes the vertical wall tiles to completely disappear."),(0,n.kt)(u,{cols:2,mdxType:"Gallery"},(0,n.kt)(d,{src:"2d/guides/minimap/example2_no_correction.png",caption:"No size correction",mdxType:"Image"}),(0,n.kt)(d,{src:"2d/guides/minimap/example2_wrong_correction.png",caption:"Size correction #1",mdxType:"Image"})),(0,n.kt)("p",null,"To fix this issue, we will utilize the fact that when a given tile does not occupy the whole square tile space, the rest of the pixels are transparent. Instead of using the ",(0,n.kt)("em",{parentName:"p"},"Color")," mode, we will use the ",(0,n.kt)("em",{parentName:"p"},"Original Tiles")," mode together with a custom shader that keeps all transparent pixels intact and transforms all the other pixels to a uniform colour."),(0,n.kt)("p",null,"First, create a new material for each tilemap layer (",(0,n.kt)(c,{path:"Create/Material",mdxType:"Path"}),") that contains non-square tiles. For the example above, we will need two materials - one for the walls and for the lighter wall outlines. Open these materials, set their shader to ",(0,n.kt)("em",{parentName:"p"},'"Edgar/Minimap Single Color Tile"')," and configure the ",(0,n.kt)("em",{parentName:"p"},"Tile Color")," field to match the desired colour of the minimap layer. The last step is to assign the materials to the ",(0,n.kt)("em",{parentName:"p"},"Material")," field of the tilemap layer. The final setup should look like this:"),(0,n.kt)(d,{src:"2d/guides/minimap/example2_setup.png",caption:"Setup",mdxType:"Image"}),(0,n.kt)(d,{src:"2d/guides/minimap/example2_correct.png",caption:"Result",mdxType:"Image"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",(0,n.kt)("em",{parentName:"p"},"Edgar/Examples/MinimapExample2"),".")),(0,n.kt)("h2",{id:"customization"},"Customization"),(0,n.kt)("h3",{id:"shape-of-the-minimap-border"},"Shape of the minimap border"),(0,n.kt)("p",null,"See 3rd party tutorials ",(0,n.kt)("a",{parentName:"p",href:"https://blog.theknightsofunity.com/implementing-minimap-unity/"},"here")," or ",(0,n.kt)("a",{parentName:"p",href:"https://learn.unity.com/tutorial/5c5151b9edbc2a0020694df6#5c7f8528edbc2a002053b552"},"here"),"."),(0,n.kt)("h3",{id:"background-colour"},"Background colour"),(0,n.kt)("p",null,"To change the background colour of the minimap, change the background colour of the minimap camera."),(0,n.kt)("h3",{id:"zoom-level"},"Zoom level"),(0,n.kt)("p",null,"If you want to zoom out the minimap view, just change the ",(0,n.kt)("em",{parentName:"p"},"Size")," field of the minimap camera to a larger number."),(0,n.kt)("h3",{id:"add-player-or-other-icons"},"Add player (or other) icon(s)"),(0,n.kt)("p",null,"You can easily add a player icon to the minimap. Add a child game object to your player, add your player icon as a sprite to the game object and change its layer to the minimap layer. By doing so, the sprite will be only visible on the minimap. You can do the same thing with enemies, treasures, etc."))}f.isMDXComponent=!0}}]);