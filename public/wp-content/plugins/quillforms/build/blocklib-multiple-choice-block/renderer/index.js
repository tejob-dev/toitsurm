!function(){var e={1421:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};!function(){"use strict";r.r(a);var e=window.qf.blocks,t=(window.wp.element,window.qf.rendererCore),n=window.React,i=window.qf.utils,o=r(1421),s=r.n(o),l=window.lodash,h=window.emotion;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var u=/^\s+/,f=/\s+$/;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var r=function(e){var t,r,a,n={r:0,g:0,b:0},i=1,o=null,s=null,l=null,h=!1,d=!1;return"string"==typeof e&&(e=function(e){e=e.replace(u,"").replace(f,"").toLowerCase();var t,r=!1;if(E[e])e=E[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=V.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=V.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=V.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=V.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=V.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=V.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=V.hex8.exec(e))?{r:N(t[1]),g:N(t[2]),b:N(t[3]),a:L(t[4]),format:r?"name":"hex8"}:(t=V.hex6.exec(e))?{r:N(t[1]),g:N(t[2]),b:N(t[3]),format:r?"name":"hex"}:(t=V.hex4.exec(e))?{r:N(t[1]+""+t[1]),g:N(t[2]+""+t[2]),b:N(t[3]+""+t[3]),a:L(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=V.hex3.exec(e))&&{r:N(t[1]+""+t[1]),g:N(t[2]+""+t[2]),b:N(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==c(e)&&(K(e.r)&&K(e.g)&&K(e.b)?(t=e.r,r=e.g,a=e.b,n={r:255*T(t,255),g:255*T(r,255),b:255*T(a,255)},h=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):K(e.h)&&K(e.s)&&K(e.v)?(o=O(e.s),s=O(e.v),n=function(e,t,r){e=6*T(e,360),t=T(t,100),r=T(r,100);var a=Math.floor(e),n=e-a,i=r*(1-t),o=r*(1-n*t),s=r*(1-(1-n)*t),l=a%6;return{r:255*[r,o,i,i,s,r][l],g:255*[s,r,r,o,i,i][l],b:255*[i,i,s,r,r,o][l]}}(e.h,o,s),h=!0,d="hsv"):K(e.h)&&K(e.s)&&K(e.l)&&(o=O(e.s),l=O(e.l),n=function(e,t,r){var a,n,i;function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=T(e,360),t=T(t,100),r=T(r,100),0===t)a=n=i=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;a=o(l,s,e+1/3),n=o(l,s,e),i=o(l,s,e-1/3)}return{r:255*a,g:255*n,b:255*i}}(e.h,o,l),h=!0,d="hsl"),e.hasOwnProperty("a")&&(i=e.a)),i=$(i),{ok:h,format:e.format||d,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:i}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function g(e,t,r){e=T(e,255),t=T(t,255),r=T(r,255);var a,n,i=Math.max(e,t,r),o=Math.min(e,t,r),s=(i+o)/2;if(i==o)a=n=0;else{var l=i-o;switch(n=s>.5?l/(2-i-o):l/(i+o),i){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,l:s}}function p(e,t,r){e=T(e,255),t=T(t,255),r=T(r,255);var a,n,i=Math.max(e,t,r),o=Math.min(e,t,r),s=i,l=i-o;if(n=0===i?0:l/i,i==o)a=0;else{switch(i){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,v:s}}function b(e,t,r,a){var n=[j(Math.round(e).toString(16)),j(Math.round(t).toString(16)),j(Math.round(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function m(e,t,r,a){return[j(I(a)),j(Math.round(e).toString(16)),j(Math.round(t).toString(16)),j(Math.round(r).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s-=t/100,r.s=q(r.s),d(r)}function _(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s+=t/100,r.s=q(r.s),d(r)}function y(e){return d(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l+=t/100,r.l=q(r.l),d(r)}function w(e,t){t=0===t?0:t||10;var r=d(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),d(r)}function M(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l-=t/100,r.l=q(r.l),d(r)}function k(e,t){var r=d(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,d(r)}function A(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function S(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=d(e).toHsl(),a=[d(e)],n=360/t,i=1;i<t;i++)a.push(d({h:(r.h+i*n)%360,s:r.s,l:r.l}));return a}function C(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+72)%360,s:t.s,l:t.l}),d({h:(r+216)%360,s:t.s,l:t.l})]}function R(e,t,r){t=t||6,r=r||30;var a=d(e).toHsl(),n=360/r,i=[d(e)];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,i.push(d(a));return i}function H(e,t){t=t||6;for(var r=d(e).toHsv(),a=r.h,n=r.s,i=r.v,o=[],s=1/t;t--;)o.push(d({h:a,s:n,v:i})),i=(i+s)%1;return o}d.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,a=this.toRgb();return e=a.r/255,t=a.g/255,r=a.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=$(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=p(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=p(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=g(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,a,n){var i=[j(Math.round(e).toString(16)),j(Math.round(t).toString(16)),j(Math.round(r).toString(16)),j(I(a))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*T(this._r,255))+"%",g:Math.round(100*T(this._g,255))+"%",b:Math.round(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%)":"rgba("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(F[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+m(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";if(e){var n=d(e);r="#"+m(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&this._a>=0;return t||!a||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return d(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(M,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(_,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(k,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(R,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(H,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(S,[3])},tetrad:function(){return this._applyCombination(S,[4])}},d.fromRatio=function(e,t){if("object"==c(e)){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]="a"===a?e[a]:O(e[a]));e=r}return d(e,t)},d.equals=function(e,t){return!(!e||!t)&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},d.mix=function(e,t,r){r=0===r?0:r||50;var a=d(e).toRgb(),n=d(t).toRgb(),i=r/100;return d({r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a})},d.readability=function(e,t){var r=d(e),a=d(t);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},d.isReadable=function(e,t,r){var a,n,i,o,s,l=d.readability(e,t);switch(n=!1,(i=r,"AA"!==(o=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(s=(i.size||"small").toLowerCase())&&"large"!==s&&(s="small"),a={level:o,size:s}).level+a.size){case"AAsmall":case"AAAlarge":n=l>=4.5;break;case"AAlarge":n=l>=3;break;case"AAAsmall":n=l>=7}return n},d.mostReadable=function(e,t,r){var a,n,i,o,s=null,l=0;n=(r=r||{}).includeFallbackColors,i=r.level,o=r.size;for(var h=0;h<t.length;h++)(a=d.readability(e,t[h]))>l&&(l=a,s=d(t[h]));return d.isReadable(e,s,{level:i,size:o})||!n?s:(r.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],r))};var E=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F=d.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(E);function $(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function T(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function q(e){return Math.min(1,Math.max(0,e))}function N(e){return parseInt(e,16)}function j(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function I(e){return Math.round(255*parseFloat(e)).toString(16)}function L(e){return N(e)/255}var P,z,D,V=(z="[\\s|\\(]+("+(P="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",D="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",{CSS_UNIT:new RegExp(P),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function K(e){return!!V.CSS_UNIT.exec(e)}var B=e=>{let{order:r,selected:a,choiceLabel:i,clickHandler:o,theme:l}=e;const{answersColor:c}=l,u=(0,t.useMessages)(),[f,g]=(0,n.useState)(!1);return React.createElement("div",{role:"presentation",className:s()("multipleChoice__optionWrapper",{selected:a,clicked:f},h.css`
					background: ${d(c).setAlpha(.1).toString()};

					border-color: ${c};
					color: ${c};

					&:hover {
						background: ${d(c).setAlpha(.2).toString()};
					}

					&.selected {
						background: ${d(c).setAlpha(.75).toString()};
						color: ${d(c).isDark()?"#fff":"#333"};

						.multipleChoice__optionKey {
							color: ${d(c).isDark()?"#fff":"#333"};

							border-color: ${d(c).isDark()?"#fff":"#333"};
						}
					}
				`),onClick:()=>{o(),a||(g(!1),setTimeout((()=>{g(!0)}),0))}},React.createElement("span",{className:"multipleChoice__optionLabel"},i),React.createElement("span",{className:s()("multipleChoice__optionKey",h.css`
						background: ${d(c).setAlpha(.1).toString()};
						color: ${c};
						border-color: ${d(c).setAlpha(.4).toString()};
					`)},React.createElement("span",{className:s()("multipleChoice__optionKeyTip",h.css`
							background: ${c};
							color: ${d(c).isDark()?"#fff":"#333"};
						`)},u["label.hintText.key"]),r))},U=window.wp.i18n;const W=(0,i.keyframes)({"0%":{transform:"scale(1)"},"25%":{transform:"scale(0.94)"},"50%":{transform:"scale(0.98)"},"75%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}}),J=i.css`
	& {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}
	&.valigned {
		display: inline-flex;
		flex-direction: column;
		max-width: 100%;
		align-items: stretch;
		width: auto;
	}
	&:not(.valigned) {

		.multipleChoice__optionWrapper {
			max-width: 215px;
			@media(max-width: $break-small) {
				max-width: 480px;
			}
		}
	}

	.multipleChoice__optionWrapper {
		& {
			display: flex;
			flex-direction: row;
			align-items: center;
			min-width: 215px;
			flex: 1 1 0%;
			border-radius: 5px;
			cursor: pointer;
			padding: 10px;
			margin: 0 16px 16px 0;
			box-shadow: none;
			outline: none;
			position: relative;
			border-style: solid;
			border-width: 1px;
			appearance: none;
			text-align: ${(0,U.isRTL)()?"right":"left"};
			user-select: none;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;

			@media(max-width: $break-small) {
				margin: 0 16px 10px 0;
				padding: 8px 10px;
				border-radius: 4px;
			}
		}


		&:hover .multipleChoice__optionKey .multipleChoice__optionKeyTip {
			visibility: visible !important;
			opacity: 1 !important;
			transform: none !important;
		}

		&.clicked {
			animation: ${W} 0.4s linear forwards;
		}

		.multipleChoice__optionLabel {
			flex-grow: 1;
			padding-right: 12px;
			overflow-wrap: break-word;
			max-width: calc(100% - 27px);
		}

		.multipleChoice__optionKey {
			& {
				position: relative;
				width: 27px;
				height: 27px;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				border-width: 1px;
				border-style: solid;
				font-size: 14px;
			}

			.multipleChoice__optionKeyTip {
				position: absolute;
				top: -25px;
				font-size: 10px;
				font-weight: bold;
				text-transform: uppercase;
				padding: 2px 3px;
				border-radius: 2px;
				transition: 0.2s all ease-in-out;
				transform: translateY(5px);
				visibility: hidden;
				opacity: 0;
			}
		}
	}
}`;var G=(0,n.memo)((e=>{let{id:r,attributes:a,val:n,setVal:o,setChoiceClicked:s,checkfieldValidation:h}=e;const{verticalAlign:c,multiple:u,choices:f,themeId:d}=a,g=(0,i.useCx)(),p=(0,t.useBlockTheme)(d),b="a".charCodeAt(0),m=e=>{const t=[e];let r,a,n,i;for(r=0;r<t.length;)t[r]>25&&(i=Math.floor(t[r]/26),t[r+1]=i-1,t[r]%=26),r+=1;for(a="",n=0;n<t.length;n+=1)a=String.fromCharCode(b+t[n])+a;return a},v=c,_=(0,l.cloneDeep)(f).map(((e,t)=>(e.label||(e.label="Choice "+(t+1)),e.selected=!!(n&&n.length>0&&n.includes(e.value)),e)));return React.createElement("div",{className:"qf-multiple-choice-block"},React.createElement("div",{className:g("multiplechoice__options",{valigned:v},J)},_&&_.length>0&&_.map(((e,t)=>React.createElement(B,{theme:p,key:`block-multiple-choice-${r}-choice-${e.value}`,choiceLabel:e.label,choiceValue:e.value,order:m(t).toUpperCase(),selected:e.selected,multiple:u,clickHandler:()=>((e,t)=>{let r;r=(null==n?void 0:n.length)>0?(0,l.cloneDeep)(n):[],t?(r.splice(r.findIndex((t=>t===e)),1),o(r)):(u?r.push(e):r=[e],o(r),s(!1),setTimeout((()=>{s(!0)}),0)),h(r)})(e.value,e.selected)})))))}),((e,t)=>JSON.stringify(e.attributes)===JSON.stringify(t.attributes)&&e.val===t.val));let X;var Y={display:e=>{const{id:r,attributes:a,setIsValid:i,setIsAnswered:o,showNextBtn:s,setValidationErr:l,val:h,setVal:c,next:u,isActive:f,isAnimating:d,showErrMsg:g,isPreview:p,isReviewing:b}=e,{multiple:m,required:v}=a,_=(0,t.useMessages)(),[y,x]=(0,n.useState)(null),w=e=>{!0!==v||e&&0!==e.length?(i(!0),l(null)):(i(!1),l(_["label.errorAlert.required"]))};return(0,n.useEffect)((()=>()=>clearTimeout(X)),[]),(0,n.useEffect)((()=>{f||clearTimeout(X),f||d||x(null)}),[f,d]),(0,n.useEffect)((()=>{clearTimeout(X),y&&(null==h?void 0:h.length)>0&&!m&&(X=setTimeout((()=>{u()}),600))}),[y]),(0,n.useEffect)((()=>{!p&&b||w(h)}),[a]),(0,n.useEffect)((()=>{(null==h?void 0:h.length)>0?o(!0):o(!1),m&&(null==h?void 0:h.length)>0&&s(!0)}),[h,a]),React.createElement("div",{className:"qf-multiple-choice-block-renderer"},React.createElement(G,{attributes:a,id:r,val:h,checkfieldValidation:w,setVal:c,setChoiceClicked:e=>{g(!1),x(e)}}))},mergeTag:e=>{let{val:t,attributes:r}=e;const{choices:a}=r,n=t.map((e=>{const t=a.findIndex((t=>t.value===e));let r="Choice "+(t+1);return a[t].label&&(r=a[t].label),r}));return React.createElement(React.Fragment,null,(0,l.join)(n,","))}};const{name:Q}={name:"multiple-choice",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!0,choices:!0},attributes:{choices:{type:"array",items:{type:"object",properties:{value:{type:"string"},label:{type:"string"}}},default:[{value:"124e4567e89b",label:"Choice 1"}]},verticalAlign:{type:"boolean",default:!1},multiple:{type:"boolean"}},logicalOperators:["is","is_not"]};(0,e.setBlockRendererSettings)(Q,Y)}(),(window.qf=window.qf||{}).blocklibMultipleChoiceBlockRenderer=a}();