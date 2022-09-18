!function(){var e,t={836:function(e,t,a){"use strict";var l=window.wp.i18n,n=window.wp.blocks,r=window.wp.element,s=window.wp.blockEditor,o=a(184),c=a.n(o);const i=e=>{let{name:t}=e;return(0,r.createElement)("button",{className:"tag"},t)};var m=window.wp.components;window.wp.data;var p={images:{type:"array",default:[]},newImage:{type:"string"},filter:{type:"boolean",default:!0},categories:{type:"array",default:[]},catText:{type:"string",default:""}};(0,l.__)("Left","essential-blocks"),(0,l.__)("Right","essential-blocks"),(0,l.__)("Center","essential-blocks"),(0,l.__)("Justify","essential-blocks");var u=function(e){const{attributes:t,setAttributes:a}=e,{blockId:n,filter:o,images:c,categories:i}=t,[p,u]=(0,r.useState)("");return(0,r.createElement)(s.InspectorControls,{key:"controls"},(0,r.createElement)("div",{className:"plugin-panel-control"},(0,r.createElement)(m.PanelBody,{title:(0,l.__)("General","gutenberg-plugin-prototype"),initialOpen:!0},(0,r.createElement)(m.ToggleControl,{label:(0,l.__)("Image Filter","gutenberg-plugin-prototype"),checked:o,onChange:()=>a({filter:!o})})),(0,r.createElement)(m.PanelBody,{title:(0,l.__)("Categories","image-filter")},(0,r.createElement)(r.Fragment,null,(0,r.createElement)("form",{onSubmit:e=>{e.preventDefault(),u("");const t=[...i,p];a({categories:t})}},(0,r.createElement)(m.TextControl,{label:(0,l.__)("Category","essential-blocks"),value:p,onChange:e=>u(e)}),(0,r.createElement)("input",{type:"submit",name:"catBtn",value:"Add"})),i.filter(((e,t,a)=>a.indexOf(e)===t)).length>0&&(0,r.createElement)("span",{className:"cats"},i.map((e=>(0,r.createElement)("span",null,e)))))),(0,r.createElement)(m.PanelBody,{title:(0,l.__)("Images","essential-blocks")},c.map(((e,t)=>(0,r.createElement)(m.PanelBody,{title:"Image "+(t+1),initialOpen:!1,onToggle:()=>a({initialSlide:t}),className:"eb-slider-item-single-panel",key:t},(0,r.createElement)(r.Fragment,null,(0,r.createElement)(m.SelectControl,{label:(0,l.__)("Category","essential-blocks"),value:e.catText,options:i.filter(((e,t,a)=>a.indexOf(e)===t)).map((e=>({label:e,value:e}))),onChange:t=>((e,t)=>{const l=e.length>0;let n=c.map((a=>a.id==t?{...a,catText:e,isValidUrl:l}:a));a({images:n})})(t,e.id)}))))))))};const g=e=>{let{name:t,handleSetTag:a}=e;return(0,r.createElement)("button",{className:"tag",onClick:()=>a(t)},t)};var f=[{attributes:{...p},save:e=>{let{attributes:t}=e;const{blockId:a}=t;return(0,r.createElement)("div",s.useBlockProps.save(),(0,r.createElement)("div",{className:`block-wrapper ${a}`,"data-id":a}))}}],d=JSON.parse('{"name":"plugin-slug/plugin-name","title":"Block Prototype","category":"widgets","description":"Block Description","textdomain":"plugin-name","keywords":["block","prototype"],"supports":{"align":true},"editorScript":"file:./build/index.js"}');(0,n.registerBlockType)({name:"plugin-slug/plugin-name",...d},{icon:()=>(0,r.createElement)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 66 70"},(0,r.createElement)("linearGradient",{id:"SVGID_1_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"35.1",x2:"79.881",y2:"35.1"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st0g",d:"M66.1,2.1H-0.1c-0.9,0-1.6,0.7-1.6,1.6v31.4v31.4c0,0.9,0.7,1.6,1.6,1.6h66.2c0.9,0.2,1.6-0.5,1.6-1.4V35.3 V3.7C67.7,2.8,67,2.1,66.1,2.1z M64.6,36.9v5.8v22.5H1.5V33.8V23.5v-18h63.1V36.9z"}),(0,r.createElement)("linearGradient",{id:"SVGID_2_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"25.217",x2:"79.881",y2:"25.217"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st1g",d:"M12.4,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,31.9,10.8,33.2,12.4,33.2z M12,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V20.2z"}),(0,r.createElement)("linearGradient",{id:"SVGID_3_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"43.836",x2:"79.881",y2:"43.836"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st2g",d:"M12.4,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,50.5,10.8,51.8,12.4,51.8z M12,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V38.9z"}),(0,r.createElement)("linearGradient",{id:"SVGID_4_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"43.836",x2:"79.881",y2:"43.836"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st3g",d:"M37.5,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,50.5,35.9,51.8,37.5,51.8 z M37.1,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H37.5c-0.2,0-0.4-0.2-0.4-0.4V38.9z"}),(0,r.createElement)("linearGradient",{id:"SVGID_5_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"25.217",x2:"79.881",y2:"25.217"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st4g",d:"M37.5,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,31.9,35.9,33.2,37.5,33.2 z M37.1,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4h0l-4.7-4.9h-0.1l-2.5,2.2l-3.2-4 c0,0,0,0-0.1,0c0,0,0,0-0.1,0l-5,6.7c-0.2-0.1-0.3-0.2-0.3-0.4V20.2z"}),(0,r.createElement)("linearGradient",{id:"SVGID_6_GALLERY",gradientUnits:"userSpaceOnUse",x1:"-11.021",y1:"22.534",x2:"79.881",y2:"22.534"},(0,r.createElement)("stop",{offset:"0",stopColor:"#1a6dff"}),(0,r.createElement)("stop",{offset:"1",stopColor:"#c822ff"})),(0,r.createElement)("path",{className:"st5g",d:"M48.1,23.8c0.7,0,1.2-0.6,1.2-1.2s-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2C46.8,23.1,47.3,23.8,48.1,23.8z"})),attributes:p,keywords:[(0,l.__)("images","essential-blocks"),(0,l.__)("photos","essential-blocks"),(0,l.__)("eb image gallery","essential-blocks")],edit:function(e){var t,a;const{attributes:n,setAttributes:o,className:i,clientId:p,isSelected:f}=e,{images:d,newImage:v,filter:E}=n,[y,b]=(0,r.useState)("All"),[h,_]=(0,r.useState)(d);(0,r.useEffect)((()=>{_("All"===y?d:d.filter((e=>e.catText===y)))}),[y,d]);const k=(0,s.useBlockProps)({className:c()(i,"custom-class")});let w=["All"];return d.map((e=>w.push(e.catText))),w=w.filter(((e,t,a)=>a.indexOf(e)===t)),(0,r.createElement)(r.Fragment,null,f&&(0,r.createElement)(u,{attributes:n,setAttributes:o}),(0,r.createElement)(r.Fragment,null,0===(null==d||null===(t=d.url)||void 0===t?void 0:t.length)&&(0,r.createElement)(s.MediaPlaceholder,{onSelect:e=>function(e){o({images:e})}(e),accept:"image/*",allowedTypes:["image"],multiple:!0,labels:{title:"Images",instructions:"Drag media files, upload or select files from your library."}})),(0,r.createElement)("div",k,(0,r.createElement)("div",{className:"block-wrapper"},(null==d||null===(a=d.url)||void 0===a?void 0:a.length)>0&&(0,r.createElement)(r.Fragment,null,w.length>0&&E&&(0,r.createElement)("div",{className:"categories"},w.map((e=>(0,r.createElement)(g,{name:e,handleSetTag:b})))),(0,r.createElement)("div",{className:"img-block-wrapper"},h.map(((e,t)=>(0,r.createElement)("a",{key:t,className:"gallery-img"},(0,r.createElement)("span",{className:"gallery-wrapper"},(0,r.createElement)("img",{className:"gallery-img",src:e.url,"image-index":t})))))),(0,r.createElement)(s.MediaUpload,{onSelect:e=>{let t=[...d,...e],a=[];t.map((e=>{let t={};t.url=e.url,a.push(t)})),o({images:t,sources:a})},accept:"image/*",allowedTypes:["image"],multiple:!0,value:v,render:e=>{let{open:t}=e;return!v&&(0,r.createElement)(m.Button,{className:"eb-gallery-upload-button",label:(0,l.__)("Add Image","essential-blocks"),icon:"plus-alt",onClick:t},"Add More Images")}})))))},save:e=>{var t;const{attributes:a}=e,{images:l,filter:n}=a;let o=[];l.map((e=>o.push(e.url)));let c=["All"];return l.map((e=>c.push(e.catText))),console.log(o.length,"from frontend"),c=c.filter(((e,t,a)=>a.indexOf(e)===t)),(0,r.createElement)("div",s.useBlockProps.save(),(0,r.createElement)("div",{className:"block-wrapper"},(null==l||null===(t=l.url)||void 0===t?void 0:t.length)>0&&(0,r.createElement)(r.Fragment,null,c.length>0&&n&&(0,r.createElement)("div",{className:"categories"},c.map((e=>(0,r.createElement)(i,{name:e})))),(0,r.createElement)("div",{className:"img-block-wrapper"},l.map(((e,t)=>(0,r.createElement)("a",{key:t,className:"gallery-img"},(0,r.createElement)("span",{className:"gallery-wrapper"},(0,r.createElement)("img",{className:"gallery-img",src:e,"image-index":t})))))))))},example:{attributes:{}},deprecated:f})},184:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var s=n.apply(null,a);s&&e.push(s)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var o in a)l.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var s=1/0;for(m=0;m<e.length;m++){a=e[m][0],n=e[m][1],r=e[m][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[c])}))?a.splice(c--,1):(o=!1,r<s&&(s=r));if(o){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,n,r]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={117:0,848:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,s=a[0],o=a[1],c=a[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(c)var m=c(l)}for(t&&t(a);i<s.length;i++)r=s[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},a=self.webpackChunkgutenberg_plugin_prototype=self.webpackChunkgutenberg_plugin_prototype||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=l.O(void 0,[848],(function(){return l(836)}));n=l.O(n)}();