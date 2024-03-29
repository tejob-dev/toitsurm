!function(){var e={5579:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var r=i.apply(null,n);r&&e.push(r)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)o.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);var e=window.qf.blocks,t=(window.wp.element,window.qf.rendererCore),i=window.React,a=window.wp.data,r=window.lodash,c=window.emotion,l=n(5579),s=n.n(l),m=e=>{let{attributes:t,isPreview:n}=e;return React.createElement("div",{className:s()("renderer-core-block-attachment",c.css`
					${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\tmax-width: ${null==t?void 0:t.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},t.attachment&&t.attachment.url?React.createElement("img",{alt:"",src:t.attachment.url,className:s()("renderer-core-block-attachment__image",c.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`border-radius: ${t.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
						`)}):React.createElement(React.Fragment,null,n&&React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))))};const u=e=>{let{isSticky:n,buttonText:o,next:i,theme:a}=e;const r=(0,t.useMessages)(),l="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return React.createElement("div",{className:s()("qf-welcome-screen-block__action-wrapper",{"is-sticky":n},c.css`
					& {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 20px;
					}
					// &.is-sticky {
					// 	position: absolute;
					// 	bottom: 0;
					// 	right: 0;
					// 	left: 0;
					// 	width: 100%;
					// 	background-color: rgba(0, 0, 0, 0.05);
					// 	box-shadow: rgba(0, 0, 0, 0.1) 0 -1px;
					// 	height: 70px;
					// 	display: flex;
					// 	align-items: center;
					// 	justify-content: center;

					// 	.qf-welcome-screen-block__action {
					// 		margin: 0 auto;
				`)},React.createElement("div",{className:"qf-welcome-screen-block__action"},React.createElement(t.Button,{theme:a,onClick:i},o)),React.createElement("div",{className:s()("qf-welcome-screen-block__action-helper-text",c.css`
						color: ${a.questionsColor};
						font-size: 12px;
					`)},!l&&React.createElement(t.HTMLParser,{value:r["label.hintText.enter"]})))};var d={display:e=>{var n,o;let{attributes:l}=e;const{isPreview:d}=(0,t.useFormContext)(),[p,h]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1);let w="...";null!=l&&l.label&&(w=l.label);const g=(0,t.useBlockTheme)(l.themeId),v=(0,i.useRef)(),y=(0,i.useRef)(),{goToBlock:x}=(0,a.useDispatch)("quillForms/renderer-core"),{walkPath:k}=(0,a.useSelect)((e=>({walkPath:e("quillForms/renderer-core").getWalkPath()})));(0,i.useEffect)((()=>(h(!0),()=>h(!1))),[]);let R=r.noop;return k[0]&&k[0].id&&(R=()=>x(k[0].id)),React.createElement("div",{className:c.css`
				height: 100%;
				position: relative;
				outline: none;
			`,ref:v,tabIndex:"0",onKeyDown:e=>{"Enter"===e.key&&(e.stopPropagation(),R())}},React.createElement("div",{className:s()("qf-welcome-screen-block__wrapper","blocktype-welcome-screen-block",`renderer-core-block-${null==l?void 0:l.layout}-layout`,{"with-sticky-footer":f,active:p},c.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${"stack"===l.layout&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-welcome-screen-block__content-wrapper {\n\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}"}
							justify-content: center;
							width: 100%;
							height: 100%;
							overflow-y: auto;
							opacity: 0;
							visibility: hidden;
							transition: all 0.4s ease-in-out;
							-webkit-transition: all 0.4s ease-in-out;
							-moz-transition: all 0.4s ease-in-out;
						}

						&.active {
							opacity: 1;
							visibility: visible;
						}
						// &.with-sticky-footer {
						// 	display: block;
						// 	.qf-welcome-screen-block__content-wrapper {
						// 		height: calc(100% - 70px);

						// 	}
						// }
						.qf-welcome-screen-block__content-wrapper {
							display: flex;
							flex-direction: column;
							justify-content: center;
							max-width: 700px;
							padding: 30px 30px 20px;
							word-wrap: break-word;
							text-align: center;
							margin-right: auto;
							margin-left: auto;
							min-height: 100%;
						}
					`)},React.createElement("div",{className:"qf-welcome-screen-block__content-wrapper"},React.createElement("div",{className:"qf-welcome-screen-block__content",ref:y},"stack"===l.layout&&React.createElement(m,{isPreview:d,attributes:l}),React.createElement("div",{className:c.css`
								margin-top: 25px;
							`},React.createElement("div",{className:s()("renderer-components-block-label",c.css`
										color: ${g.questionsColor};
										font-family: ${g.questionsLabelFont};
										@media ( min-width: 768px ) {
											font-size: ${g.questionsLabelFontSize.lg} !important;
											line-height: ${g.questionsLabelLineHeight.lg} !important;
										}
										@media ( max-width: 767px ) {
											font-size: ${g.questionsLabelFontSize.sm} !important;
											line-height: ${g.questionsLabelLineHeight.sm} !important;
										}
									`)},React.createElement(t.HTMLParser,{value:w})),(null==l?void 0:l.description)&&""!==l.description&&React.createElement("div",{className:s()("renderer-components-block-description",c.css`
												color: ${g.questionsColor};
												font-family: ${g.questionsDescriptionFont};
												@media ( min-width: 768px ) {
													font-size: ${g.questionsDescriptionFontSize.lg} !important;
													line-height: ${g.questionsDescriptionLineHeight.lg} !important;
												}
												@media ( max-width: 767px ) {
													font-size: ${g.questionsDescriptionFontSize.sm} !important;
													line-height: ${g.questionsDescriptionLineHeight.sm} !important;
												}
											`)},React.createElement(t.HTMLParser,{value:l.description})),l.customHTML&&React.createElement("div",{className:s()("renderer-components-block-custom-html",c.css`
											color: ${g.questionsColor};
										`),dangerouslySetInnerHTML:{__html:null==l?void 0:l.customHTML}}))),React.createElement(u,{theme:g,next:R,isSticky:f,buttonText:l.buttonText})),"stack"!==l.layout&&React.createElement("div",{className:s()("renderer-core-block-attachment-wrapper",c.css`
								img {
									object-position: ${100*(null==l||null===(n=l.attachmentFocalPoint)||void 0===n?void 0:n.x)}%
										${100*(null==l||null===(o=l.attachmentFocalPoint)||void 0===o?void 0:o.y)}%;
								}
							`)},React.createElement(m,{isPreview:d,attributes:l}))))}};const{name:p}={name:"welcome-screen",attributes:{buttonText:{type:"string",default:"Let's start!",maxLength:24}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,e.setBlockRendererSettings)(p,d)}(),(window.qf=window.qf||{}).blocklibWelcomeScreenBlockRenderer=o}();