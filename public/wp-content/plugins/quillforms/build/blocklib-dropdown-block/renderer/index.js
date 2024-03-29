!function(){var e={9051:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";r.r(o);var e=window.qf.blocks,t=(window.wp.element,window.qf.rendererCore),a=window.qf.utils,n=window.React;function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}window.wp.data;var s=/^\s+/,l=/\s+$/;function c(e,t){if(t=t||{},(e=e||"")instanceof c)return e;if(!(this instanceof c))return new c(e,t);var r=function(e){var t,r,o,a={r:0,g:0,b:0},n=1,c=null,u=null,h=null,d=!1,f=!1;return"string"==typeof e&&(e=function(e){e=e.replace(s,"").replace(l,"").toLowerCase();var t,r=!1;if(S[e])e=S[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=j.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=j.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=j.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=j.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=j.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=j.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=j.hex8.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),a:N(t[4]),format:r?"name":"hex8"}:(t=j.hex6.exec(e))?{r:H(t[1]),g:H(t[2]),b:H(t[3]),format:r?"name":"hex"}:(t=j.hex4.exec(e))?{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),a:N(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=j.hex3.exec(e))&&{r:H(t[1]+""+t[1]),g:H(t[2]+""+t[2]),b:H(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==i(e)&&(z(e.r)&&z(e.g)&&z(e.b)?(t=e.r,r=e.g,o=e.b,a={r:255*E(t,255),g:255*E(r,255),b:255*E(o,255)},d=!0,f="%"===String(e.r).substr(-1)?"prgb":"rgb"):z(e.h)&&z(e.s)&&z(e.v)?(c=F(e.s),u=F(e.v),a=function(e,t,r){e=6*E(e,360),t=E(t,100),r=E(r,100);var o=Math.floor(e),a=e-o,n=r*(1-t),i=r*(1-a*t),s=r*(1-(1-a)*t),l=o%6;return{r:255*[r,i,n,n,s,r][l],g:255*[s,r,r,i,n,n][l],b:255*[n,n,s,r,r,i][l]}}(e.h,c,u),d=!0,f="hsv"):z(e.h)&&z(e.s)&&z(e.l)&&(c=F(e.s),h=F(e.l),a=function(e,t,r){var o,a,n;function i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=E(e,360),t=E(t,100),r=E(r,100),0===t)o=a=n=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;o=i(l,s,e+1/3),a=i(l,s,e),n=i(l,s,e-1/3)}return{r:255*o,g:255*a,b:255*n}}(e.h,c,h),d=!0,f="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=R(n),{ok:d,format:e.format||f,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:n}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function u(e,t,r){e=E(e,255),t=E(t,255),r=E(r,255);var o,a,n=Math.max(e,t,r),i=Math.min(e,t,r),s=(n+i)/2;if(n==i)o=a=0;else{var l=n-i;switch(a=s>.5?l/(2-n-i):l/(n+i),n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4}o/=6}return{h:o,s:a,l:s}}function h(e,t,r){e=E(e,255),t=E(t,255),r=E(r,255);var o,a,n=Math.max(e,t,r),i=Math.min(e,t,r),s=n,l=n-i;if(a=0===n?0:l/n,n==i)o=0;else{switch(n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4}o/=6}return{h:o,s:a,v:s}}function d(e,t,r,o){var a=[T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,t,r,o){return[T(q(o)),T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16))].join("")}function p(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.s-=t/100,r.s=$(r.s),c(r)}function g(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.s+=t/100,r.s=$(r.s),c(r)}function b(e){return c(e).desaturate(100)}function m(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.l+=t/100,r.l=$(r.l),c(r)}function v(e,t){t=0===t?0:t||10;var r=c(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),c(r)}function x(e,t){t=0===t?0:t||10;var r=c(e).toHsl();return r.l-=t/100,r.l=$(r.l),c(r)}function y(e,t){var r=c(e).toHsl(),o=(r.h+t)%360;return r.h=o<0?360+o:o,c(r)}function w(e){var t=c(e).toHsl();return t.h=(t.h+180)%360,c(t)}function _(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=c(e).toHsl(),o=[c(e)],a=360/t,n=1;n<t;n++)o.push(c({h:(r.h+n*a)%360,s:r.s,l:r.l}));return o}function k(e){var t=c(e).toHsl(),r=t.h;return[c(e),c({h:(r+72)%360,s:t.s,l:t.l}),c({h:(r+216)%360,s:t.s,l:t.l})]}function M(e,t,r){t=t||6,r=r||30;var o=c(e).toHsl(),a=360/r,n=[c(e)];for(o.h=(o.h-(a*t>>1)+720)%360;--t;)o.h=(o.h+a)%360,n.push(c(o));return n}function A(e,t){t=t||6;for(var r=c(e).toHsv(),o=r.h,a=r.s,n=r.v,i=[],s=1/t;t--;)i.push(c({h:o,s:a,v:n})),n=(n+s)%1;return i}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,o=this.toRgb();return e=o.r/255,t=o.g/255,r=o.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=R(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=h(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+o+"%)":"hsva("+t+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=u(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+o+"%)":"hsla("+t+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(e){return d(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,o,a){var n=[T(Math.round(e).toString(16)),T(Math.round(t).toString(16)),T(Math.round(r).toString(16)),T(q(o))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)&&n[3].charAt(0)==n[3].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*E(this._r,255))+"%",g:Math.round(100*E(this._g,255))+"%",b:Math.round(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%)":"rgba("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(C[d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+f(this._r,this._g,this._b,this._a),r=t,o=this._gradientType?"GradientType = 1, ":"";if(e){var a=c(e);r="#"+f(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,o=this._a<1&&this._a>=0;return t||!o||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return c(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(v,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(M,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(_,[3])},tetrad:function(){return this._applyCombination(_,[4])}},c.fromRatio=function(e,t){if("object"==i(e)){var r={};for(var o in e)e.hasOwnProperty(o)&&(r[o]="a"===o?e[o]:F(e[o]));e=r}return c(e,t)},c.equals=function(e,t){return!(!e||!t)&&c(e).toRgbString()==c(t).toRgbString()},c.random=function(){return c.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},c.mix=function(e,t,r){r=0===r?0:r||50;var o=c(e).toRgb(),a=c(t).toRgb(),n=r/100;return c({r:(a.r-o.r)*n+o.r,g:(a.g-o.g)*n+o.g,b:(a.b-o.b)*n+o.b,a:(a.a-o.a)*n+o.a})},c.readability=function(e,t){var r=c(e),o=c(t);return(Math.max(r.getLuminance(),o.getLuminance())+.05)/(Math.min(r.getLuminance(),o.getLuminance())+.05)},c.isReadable=function(e,t,r){var o,a,n,i,s,l=c.readability(e,t);switch(a=!1,(n=r,"AA"!==(i=((n=n||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(n.size||"small").toLowerCase())&&"large"!==s&&(s="small"),o={level:i,size:s}).level+o.size){case"AAsmall":case"AAAlarge":a=l>=4.5;break;case"AAlarge":a=l>=3;break;case"AAAsmall":a=l>=7}return a},c.mostReadable=function(e,t,r){var o,a,n,i,s=null,l=0;a=(r=r||{}).includeFallbackColors,n=r.level,i=r.size;for(var u=0;u<t.length;u++)(o=c.readability(e,t[u]))>l&&(l=o,s=c(t[u]));return c.isReadable(e,s,{level:n,size:i})||!a?s:(r.includeFallbackColors=!1,c.mostReadable(e,["#fff","#000"],r))};var S=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},C=c.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(S);function R(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function $(e){return Math.min(1,Math.max(0,e))}function H(e){return parseInt(e,16)}function T(e){return 1==e.length?"0"+e:""+e}function F(e){return e<=1&&(e=100*e+"%"),e}function q(e){return Math.round(255*parseFloat(e)).toString(16)}function N(e){return H(e)/255}var I,L,O,j=(L="[\\s|\\(]+("+(I="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",O="[\\s|\\(]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")[,|\\s]+("+I+")\\s*\\)?",{CSS_UNIT:new RegExp(I),rgb:new RegExp("rgb"+L),rgba:new RegExp("rgba"+O),hsl:new RegExp("hsl"+L),hsla:new RegExp("hsla"+O),hsv:new RegExp("hsv"+L),hsva:new RegExp("hsva"+O),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function z(e){return!!j.CSS_UNIT.exec(e)}r(9051);var B=window.lodash;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},P.apply(this,arguments)}var D=window.wp.i18n;const Y=(0,a.keyframes)({"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}),V=(0,a.keyframes)({"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}),W=a.css`
	position: fixed;
	inset: 0;
	background-color: #fff;
	height: 100% !important;
	display: flex;
	flex-direction: column;
	padding: 20px 10px;
	z-index: 11;

	&.show {
		transform: translateY(100%);
		animation: ${Y} 0.5s ease-in-out 1 forwards;
	}

	&.hide {
		transform: translateY(0%);
		animation: ${V} 0.5s ease-in-out 1 forwards;
	}

	.back-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
}`,K=(0,a.keyframes)({"0%":{transform:"scale( 1 )"},"25%":{transform:"scale( 0.97 )"},"50%":{transform:"scale( 0.99 )"},"75%":{transform:"scale( 0.97 )"},"100%":{transform:"scale( 1 )"}}),U=a.css`
	& {
		position: absolute;
		top: 112%;
		right: 0;
		left: 0;
		padding-top: 15px;
		border-radius: 5px;
		width: 100%;
		overflow-y: auto;
		transition: transform, opacity 0.3s linear;
		z-index: 11111;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
	}

	&.visible {
		max-height: 300px;
		visibility: visible;
		opacity: 1;
		transform: none;
	}

	&.fixed-choices {
		position: static;
		height: auto !important;
		padding: 10px 20px;
	}


}`,G=a.css`
	& {
		padding: 10px;
		margin-bottom: 8px;
		border-width: 1px;
		border-style: solid;
		border-radius: 5px;
		cursor: pointer;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}
	&:last-child {
		margin-bottom: 0;
	}

	&.isBeingSelected {
		animation: ${K} 0.4s linear forwards;
	}
}`,X=a.css`
	position: absolute;
	${(0,D.isRTL)()?"left: 0":"right: 0"};
	bottom: 4px;
	cursor: pointer;

	svg {
		width: 26px;
		height: 26px;
	}
`;var J=e=>{const r=(0,t.useTheme)(),o=(0,a.useCx)();return React.createElement("div",P({tabIndex:"0"},e,{className:o("block-dropdown-renderer-expand-icon",X)}),React.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",className:o(a.css`
					fill: ${r.answersColor};
				`)},React.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})))},Q=e=>{const r=(0,t.useTheme)(),o=(0,a.useCx)();return React.createElement("div",P({},e,{className:o("block-dropdown-renderer-close-icon",X)}),React.createElement("svg",{height:"32",width:"32",viewBox:"0 0 512 512",className:o(a.css`
					fill: ${r.answersColor};
				`)},React.createElement("g",null,React.createElement("g",null,React.createElement("g",null,React.createElement("polygon",{points:"405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256 \t\t"},React.createElement("polygon",{points:"405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 375.202,405 405,375.202 285.798,256 \t\t"})))))))};let Z;var ee=e=>{let{choice:r,blockId:o,choiceIndex:i,val:s,clickHandler:l,showDropdown:u,clicked:h,hovered:d}=e;const[f,p]=(0,n.useState)(!1),g=(0,n.useRef)(),b=(0,a.useCx)();(0,n.useEffect)((()=>{u||p(!1)}),[u]);const m=(0,t.useTheme)(),v=c(m.answersColor),x=s&&s===r.value;return(0,n.useEffect)((()=>(h&&g.current.click(),()=>{h=!1})),[h]),React.createElement("div",{ref:g,id:`block-${o}-option-${i}`,className:b("dropdown__choiceWrapper",{selected:x,isBeingSelected:f},a.css`
						background: ${d?v.setAlpha(.2).toString():v.setAlpha(.1).toString()};

						border-color: ${m.answersColor};
						color: ${m.answersColor};

						&:hover {
							background: ${v.setAlpha(.2).toString()};
						}

						&.selected {
							background: ${c(m.answersColor).setAlpha(.75).toString()};
							color: ${c(m.answersColor).isDark()?"#fff":"#333"}
					`,G),role:"presentation",onClick:()=>{x&&clearTimeout(Z),x||p(!0),l(),Z=setTimeout((()=>{f&&p(!1)}),400)}},r.label)};let te,re,oe;var ae={display:e=>{const{id:r,attributes:o,setIsValid:i,setIsAnswered:s,setValidationErr:l,val:u,setVal:h,next:d,showErrMsg:f,isActive:p,isTouchScreen:g,setFooterDisplay:b,inputRef:m,isPreview:v,isReviewing:x}=e,{choices:y,required:w}=o,_=(0,a.useCx)(),k=(0,t.useBlockTheme)(o.themeId),[M,A]=(0,n.useState)(!1),[S,C]=(0,n.useState)(""),[R,E]=(0,n.useState)(-1),[$,H]=(0,n.useState)(!1),[T,F]=(0,n.useState)(!1),[q,N]=(0,n.useState)(""),[I,L]=(0,n.useState)(!1),[O,j]=(0,n.useState)(!1),z=(0,n.useRef)(),P=(0,n.useRef)(),D=(0,t.useMessages)(),Y=c(k.answersColor),V=(0,n.useMemo)((()=>(0,B.cloneDeep)(y).map(((e,t)=>(e.label||(e.label="Choice "+(t+1)),e))).filter((e=>e.label.toLowerCase().includes(u&&g?"":S.toLowerCase())))),[y,S]),K=e=>{z.current&&!z.current.contains(e.target)&&(A(!1),E(-1))};(0,n.useEffect)((()=>(M?(document.addEventListener("mousedown",K),document.querySelector(`#block-${r} .renderer-core-field-footer`)&&document.querySelector(`#block-${r} .renderer-core-field-footer`).classList.add("is-hidden")):document.querySelector(`#block-${r} .renderer-core-field-footer`)&&document.querySelector(`#block-${r} .renderer-core-field-footer`).classList.remove("is-hidden"),()=>{document.removeEventListener("mousedown",K)})),[M]),(0,n.useEffect)((()=>{!v&&x||(!0!==w||u&&""!==u?(i(!0),l(null)):(i(!1),l(D["label.errorAlert.selectionRequired"])))}),[u,o]),(0,n.useEffect)((()=>(O?L(O):oe=setTimeout((()=>{L(O)}),500),()=>clearTimeout(oe))),[O]);const G=e=>{if(F(""!==e.target.value),N(e.target.value),g||A(!0),u)return h(null),void C("");C(e.target.value)};(0,n.useEffect)((()=>{p||re&&clearTimeout(re)}),[p]),(0,n.useEffect)((()=>{if(u){const e=V.find((e=>e.value===u));C(e?e.label:"")}return()=>{re&&clearTimeout(re)}}),[]);const X=e=>{if(!g){if(27===e.keyCode)return A(!1),F(""!==q),void E(-1);if(38!==e.keyCode&&40!==e.keyCode){if(13===e.keyCode){if(e.stopPropagation(),-1===R)return A(!1),void E(-1);H(!0)}}else{const t=document.querySelector(`#block-${r}  .qf-block-dropdown-display__choices`);if(!t||R<=0&&38===e.keyCode||R===V.length-1&&40===e.keyCode)return;A(!0);const o=38===e.keyCode?R-1:R+1;E(o);const a=document.getElementById(`block-${r}-option-${o}`);(function(e,t){const r=e.scrollTop,o=r+e.clientHeight,a=t.offsetTop,n=a+t.clientHeight;return a>=r+10&&n<=o-50})(t,a)||(t.scrollTop=a.offsetTop-30)}}},Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V[R];const t=V.findIndex((t=>t.value===e.value));if(t!==R&&E(t),H(!1),F(!1),f(!1),clearTimeout(te),re&&clearTimeout(re),u&&u===e.value)return h(null),s(!1),void C("");s(!0),h(e.value),te=setTimeout((()=>{C(e.label),A(!1),E(-1),g?(j(!1),re=setTimeout((()=>{d()}),750)):d()}),g?500:700)};return React.createElement("div",{ref:z,style:{position:"relative"}},React.createElement("input",{ref:m,className:_(a.css`
						& {
							width: 100%;
							border: none;
							outline: none;
							font-size: 30px;
							padding-bottom: 8px;
							background: transparent;
							transition: box-shadow 0.1s ease-out 0s;
							box-shadow: ${Y.setAlpha(.3).toString()}
								0px 1px;
							@media ( max-width: 600px ) {
								font-size: 24px;
							}

							@media ( max-width: 480px ) {
								font-size: 20px;
							}
						}

						&::placeholder {
							opacity: 0.3;
							/* Chrome, Firefox, Opera, Safari 10.1+ */
							color: ${k.answersColor};
						}

						&:-ms-input-placeholder {
							opacity: 0.3;
							/* Internet Explorer 10-11 */
							color: ${k.answersColor};
						}

						&::-ms-input-placeholder {
							opacity: 0.3;
							/* Microsoft Edge */
							color: ${k.answersColor};
						}

						&:focus {
							box-shadow: ${Y.setAlpha(1).toString()}
								0px 2px;
						}

						color: ${k.answersColor};
					`),id:"dropdown-"+r,placeholder:D["block.dropdown.placeholder"],onChange:G,value:u&&g?S:g?"":S,onClick:()=>{g?(j(!0),m.current.blur()):A(!0)},onFocus:()=>{g&&b(!1)},onBlur:()=>{g&&b(!0)},onKeyDown:X,autoComplete:"off"}),u&&u.length>0||T&&!g?React.createElement(Q,{onClick:()=>{clearTimeout(te),re&&clearTimeout(re),C(""),s(!1),h(void 0),F(!1),g||m.current.focus()}}):React.createElement(J,{style:{transform:M?"rotate(180deg)":"rotate(0deg)"},onClick:()=>{M&&E(-1),g&&j(!O),!g&&A(!M),m.current.focus()},onKeyDown:e=>{13===e.keyCode&&(e.stopPropagation(),M&&E(-1),g&&j(!O),!g&&A(!M),!M&&m.current.focus())}}),M&&React.createElement("div",{className:_("qf-block-dropdown-display__choices",{visible:M},U,a.css`
							background: ${k.backgroundColor};
							padding: 15px;
							border: 1px dashed ${k.answersColor};
						`),ref:P,onWheel:e=>{M&&e.stopPropagation()}},(null==V?void 0:V.length)>0?V.map(((e,t)=>React.createElement(ee,{blockId:r,choiceIndex:t,hovered:t===R,clicked:t===R&&$,role:"presentation",key:`block-dropdown-${r}-choice-${e.value}`,clickHandler:()=>Z(e),choice:e,val:u,showDropdown:M}))):React.createElement("div",{className:_(a.css`
								background: ${k.errorsBgColor};
								color: ${k.errorsFontColor};
								display: inline-block;
								padding: 5px 10px;
								border-radius: 5px;
							`)},D["block.dropdown.noSuggestions"])),I&&React.createElement("div",{className:_("fixed-dropdown",{show:O,hide:!O},W)},React.createElement("div",{className:_(a.css`
								display: flex;
								align-items: center;
							`)},React.createElement("svg",{onClick:()=>{j(!1)},className:"back-icon",focusable:"false",viewBox:"0 0 16 16","aria-hidden":"true",role:"presentation"},React.createElement("path",{d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})),React.createElement("input",{className:_(a.css`
									& {
										width: 100%;
										border: none;
										outline: none;
										padding-bottom: 8px;
										background: transparent;
										margin-bottom: 10px;
										transition: box-shadow 0.1s ease-out 0s;
										box-shadow: ${Y.setAlpha(.3).toString()}
											0px 1px;
									}

									&::placeholder {
										opacity: 0.3;
										/* Chrome, Firefox, Opera, Safari 10.1+ */
										color: ${k.answersColor};
									}

									&:-ms-input-placeholder {
										opacity: 0.3;
										/* Internet Explorer 10-11 */
										color: ${k.answersColor};
									}

									&::-ms-input-placeholder {
										opacity: 0.3;
										/* Microsoft Edge */
										color: ${k.answersColor};
									}

									&:focus {
										box-shadow: ${Y.setAlpha(1).toString()}
											0px 2px;
									}

									color: ${k.answersColor};
								`),placeholder:D["block.dropdown.placeholder"],onChange:G,value:S,onFocus:()=>{b(!1)},onBlur:()=>{b(!0)},onKeyDown:X,autoComplete:"off"})),React.createElement("div",{className:"qf-block-dropdown-display__choices visible fixed-choices",ref:P,onWheel:e=>{I&&e.stopPropagation()}},(null==V?void 0:V.length)>0?V.map(((e,t)=>React.createElement(ee,{hovered:t===R,choiceIndex:t,blockId:r,clicked:t===R&&$,role:"presentation",key:`block-dropdown-${r}-choice-${e.value}`,clickHandler:()=>Z(e),choice:e,val:u,showDropdown:M}))):React.createElement("div",{className:_(a.css`
									background: ${k.errorsBgColor};
									color: ${k.errorsFontColor};
									display: inline-block;
									padding: 5px 10px;
									border-radius: 5px;
								`)},D["block.dropdown.noSuggestions"]))))},mergeTag:e=>{let{val:t,attributes:r}=e;const{choices:o}=r,a=o.findIndex((e=>e.value===t));let n="_ _ _ _";return o[a]&&(n=o[a].label,n||(n="Choice "+(index+1))),React.createElement(React.Fragment,null,n)}};const{name:ne}={name:"dropdown",attributes:{choices:{type:"array",items:{type:"object",properties:{value:{type:"string"},label:{type:"string"}}},default:[{value:"123e45z7o89b",label:"Choice 1"}]}},supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!0,choices:!0},logicalOperators:["is","is_not"]};(0,e.setBlockRendererSettings)(ne,ae)}(),(window.qf=window.qf||{}).blocklibDropdownBlockRenderer=o}();