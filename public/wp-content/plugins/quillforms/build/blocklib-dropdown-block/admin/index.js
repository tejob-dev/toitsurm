!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=window.qf.blocks,o=(window.wp.element,window.qf.adminComponents),n=window.React,l=window.emotion,i={color:"#2eaf8b",title:"Dropdown",icon:e=>React.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})),controls:e=>{const{attributes:{choices:t},setAttributes:l}=e;return React.createElement(n.Fragment,null,React.createElement(o.BaseControl,null,React.createElement(o.ControlWrapper,{orientation:"horizontal"},React.createElement(o.ControlLabel,{label:"Choices"}),React.createElement(o.ChoicesBulkBtn,{choices:t,setChoices:e=>{l({choices:e})}})),React.createElement(o.ControlWrapper,{orientation:"vertical"},React.createElement(o.ChoicesInserter,{choices:t,setChoices:e=>{l({choices:e})}}))))},logicControl:e=>{let{attributes:t,value:i,setValue:a,removeCondition:r}=e;const{choices:c}=t;(0,n.useEffect)((()=>{i?c.some((e=>e.value===i))||r():a(c[0].value)}),[]);const s=c.map(((e,t)=>({key:e.value,name:e.label?e.label:`Choice ${t+1}`})));return React.createElement(o.SelectControl,{className:l.css`
				margin-top: 10px;
				margin-bottom: 10px;
			`,value:s.find((e=>e.key===i)),onChange:e=>{a(e.selectedItem.key)},options:s})},order:6,getChoices:e=>{var t;let{attributes:o}=e;return null!==(t=null==o?void 0:o.choices)&&void 0!==t?t:[]}};const{name:a}={name:"dropdown",attributes:{choices:{type:"array",items:{type:"object",properties:{value:{type:"string"},label:{type:"string"}}},default:[{value:"123e45z7o89b",label:"Choice 1"}]}},supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!0,choices:!0},logicalOperators:["is","is_not"]};(0,t.setBlockAdminSettings)(a,i),(window.qf=window.qf||{}).blocklibDropdownBlockAdmin=e}();