!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=window.qf.blocks,n=(window.wp.element,window.qf.adminComponents),o=window.React,a={color:"#ad468d",icon:()=>React.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},React.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})),controls:e=>{const{attributes:t,setAttributes:a}=e,{buttonText:l,quotationMarks:r}=t;return React.createElement(o.Fragment,null,React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"horizontal"},React.createElement(n.ControlLabel,{label:"Quotation marks"}),React.createElement(n.ToggleControl,{checked:r,onChange:()=>a({quotationMarks:!r})}))),React.createElement(n.BaseControl,null,React.createElement(n.ControlWrapper,{orientation:"vertical"},React.createElement(n.ControlLabel,{label:"Button text"}),React.createElement(n.TextControl,{placeholder:"Button Text",value:l,onChange:e=>a({buttonText:e})}))))},title:"Statement"};const{name:l}={name:"statement",supports:{editable:!1,required:!0,attachment:!0,description:!0,logic:!0,theme:!0},attributes:{buttonText:{type:"string",default:"Continue"},quotationMarks:{type:"boolean",default:!0}}};(0,t.setBlockAdminSettings)(l,a),(window.qf=window.qf||{}).blocklibStatementBlockAdmin=e}();