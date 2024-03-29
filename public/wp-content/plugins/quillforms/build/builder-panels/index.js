!function(){"use strict";var e={d:function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{registerBuilderPanel:function(){return R},registerBuilderSubPanel:function(){return _}});var r={};e.r(r),e.d(r,{registerBuilderPanel:function(){return f},registerBuilderSubPanel:function(){return m},setCurrentPanel:function(){return d},setCurrentSubPanel:function(){return c}});var t={};e.r(t),e.d(t,{getAreaToShow:function(){return F},getCurrentPanel:function(){return B},getCurrentPanelName:function(){return T},getCurrentSubPanel:function(){return N},getCurrentSubPanelName:function(){return E},getPanelByName:function(){return S},getPanels:function(){return v},getParentPanels:function(){return y},getVisiblePanels:function(){return w}});var o=window.wp.data,a=window.lodash;const i="REGISTER_BUILDER_PANEL",l="REGISTER_BUILDER_SUBPANEL",s="SET_CURRENT_PANEL",u="SET_CURRENT_SUBPANEL",p={panels:[],currentPanel:"",currentSubPanel:void 0,areaToShow:void 0};const d=e=>({type:s,panelName:e}),c=e=>({type:u,subPanelName:e}),f=(e,n)=>({type:i,settings:n,name:e}),m=(e,n,r)=>({type:l,settings:n,parent:r,name:e});var b={};function g(e){return[e]}function h(e,n,r){var t;if(e.length!==n.length)return!1;for(t=r;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function P(e,n){var r,t=n||g;function o(e){var n,t,o,a,i,l=r,s=!0;for(n=0;n<e.length;n++){if(!(i=t=e[n])||"object"!=typeof i){s=!1;break}l.has(t)?l=l.get(t):(o=new WeakMap,l.set(t,o),l=o)}return l.has(b)||((a=function(){var e={clear:function(){e.head=null}};return e}()).isUniqueByDependants=s,l.set(b,a)),l.get(b)}function a(){r=new WeakMap}function i(){var n,r,a,i,l,s=arguments.length;for(i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];for((n=o(l=t.apply(null,i))).isUniqueByDependants||(n.lastDependants&&!h(l,n.lastDependants,0)&&n.clear(),n.lastDependants=l),r=n.head;r;){if(h(r.args,i,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:e.apply(null,i)},i[0]=null,r.args=i,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return i.getDependants=t,i.clear=a,a(),i}const v=P((e=>e.panels),(e=>[e.panels.length])),y=P((e=>(0,a.filter)(e.panels,(e=>"parent"===e.mode))),(e=>[e.panels.length])),S=(e,n)=>v(e).find((e=>e.name===n)),w=P((e=>e.panels.filter((e=>!0!==e.isHidden))),(e=>[e.panels.length]));function T(e){return e.currentPanel}const B=P((e=>{const n=T(e);if(n)return(0,a.find)(null==e?void 0:e.panels,(e=>e.name===n))}),(e=>[null==e?void 0:e.panels.length,null==e?void 0:e.currentPanel])),N=P((e=>{const n=B(e);var r;if(e.currentSubPanel&&n)return null==n||null===(r=n.subPanels)||void 0===r?void 0:r.find((n=>n.name===e.currentSubPanel))}),(e=>[null==e?void 0:e.panels.length,null==e?void 0:e.currentSubPanel,null==e?void 0:e.currentPanel]));function E(e){return e.currentSubPanel}function F(e){var n;return null===(n=B(e))||void 0===n?void 0:n.areaToShow}(0,o.registerStore)("quillForms/builder-panels",{actions:r,reducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case i:{const r=n.name;if((0,a.some)(e.panels,(e=>e.name===r)))return e;const t=n.settings;return{...e,panels:[...e.panels,{...t,name:r}]}}case l:{const{parent:r}=n,t=(0,a.findIndex)(e.panels,(e=>e.name===r));if(-1===t||"parent"!==e.panels[t].mode)return e;let o=e.panels[t].subPanels;o||(o=[]),o.push({...n.settings,name:n.name});const i=e.panels;return i[t].subPanels=o,{...e,panels:i}}case s:return n.panelName&&!(0,a.some)(e.panels,(e=>e.name===n.panelName))?e:{...e,currentPanel:n.panelName};case u:{if(!e.currentPanel)return e;const r=e.panels.find((n=>n.name===e.currentPanel));return r&&(0,a.some)(r.subPanels,(e=>e.name===n.subPanelName))?{...e,currentSubPanel:n.subPanelName}:e}}return e},selectors:t});var q=window.qf.utils,x=window.wp.hooks;const R=(e,n)=>{if(n=(0,x.applyFilters)("QuillForms.BuilderPanels.PanelSettings",n,e),"string"!=typeof e)return void console.error('Builder panel "name" must be string.');const r=(0,o.select)("quillForms/builder-panels").getPanels();if((0,a.some)(r,(n=>n.name===e)))console.error(`The panel ${e} is already registered`);else if(n.title)if("string"==typeof n.title)if(n.isHidden&&"boolean"!=typeof n.isHidden)console.error('The "isHidden" property must be boolean');else if(!n.position||"number"==typeof n.position||n.isHidden)if(0===n.position||n.position||(n.position=10),n.areaToShow&&"drop-area"!==n.areaToShow&&"preview-area"!==n.areaToShow&&"no-area"!==n.areaToShow)console.error('The "areaToShow" property must be either of "drop-area" or "preview-area" or undefined.');else if(n.icon=(0,q.normalizeIconObject)(n.icon),(0,q.isValidIcon)(n.icon.src))if("parent"!==n.mode&&(n.mode="single"),"single"!==n.mode||n.render){if(!n.render||(0,a.isFunction)(n.render))return n=(0,a.pick)(n,["icon","title","render","isHidden","mode","areaToShow","position"]),(0,o.dispatch)("quillForms/builder-panels").registerBuilderPanel(e,n),n;console.error("The 'render' property must be a valid function")}else console.error('The "render" property should be defined in case of single panels');else console.error('The "icon" property must be a valid function!');else console.error('The "position" property must be a number');else console.error('Builder panel "title" must be string.');else console.error("The 'title' property must be passed")},_=(e,n)=>{if(n=(0,x.applyFilters)("QuillForms.BuilderPanels.SubPanelSettings",n,e),"string"!=typeof e)return void console.error("Builder subpanel names must be strings.");const r=e.match(/^([a-z][a-z0-9-]*)\/[a-z][a-z0-9-]*$/);if(!r||!r[1])return void console.error("Builder subpanel name must contain the parent namespace prefix. Example: parent-panel/subpanel-panel");const t=r[1],i=(0,o.select)("quillForms/builder-panels").getParentPanels();if((0,a.some)(i,(e=>e.name===t)))if(n.title)if("string"==typeof n.title)if(n.render)if((0,a.isFunction)(n.render)){if(!n.position||"number"==typeof n.position)return 0===n.position||n.position||(n.position=10),n=(0,a.pick)(n,["title","render","position"]),(0,o.dispatch)("quillForms/builder-panels").registerBuilderSubPanel(e,n,t),n;console.error('The "position" property must be a number')}else console.error("The 'render' property must be a valid function");else console.error("The 'render' property is mandatory");else console.error("The 'title' property must be a string");else console.error("The 'title' property must be passed");else console.error(`Builder sub panel parent ${t} isn't registered. Please register it first!`)};(window.qf=window.qf||{}).builderPanels=n}();