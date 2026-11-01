"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2625],{2625:function(e,t,i){let a,r,n,s,o,l,d,u;i.r(t),i.d(t,{MaxResolution:function(){return tY},MediaError:function(){return tU},MinResolution:function(){return tG},RenditionOrder:function(){return tZ},default:function(){return fU}});var c=i(2265),h=Object.create,m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,b=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,f=function(e,t){return function(){return e&&(t=e(e=0)),t}},g=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},y=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=v(t),s=0,o=n.length;s<o;s++)r=n[s],E.call(e,r)||r===i||m(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=p(t,r))||a.enumerable});return e},_=function(e,t,i){return i=null!=e?h(b(e)):{},y(!t&&e&&e.__esModule?i:m(i,"default",{value:e,enumerable:!0}),e)},A=g(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function k(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=f(function(){}),w=g(function(e,t){var i;T(),i=function(){var e=function(){},t="undefined",i=("undefined"==typeof window?"undefined":k(window))!==t&&k(window.navigator)!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function o(e,i,a){return function(){("undefined"==typeof console?"undefined":k(console))!==t&&(s.call(this,i,a),this[e].apply(this,arguments))}}function l(a,s,l){var d;return"debug"===(d=a)&&(d="log"),("undefined"==typeof console?"undefined":k(console))!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||o.apply(this,arguments)}function d(e,i,r){var n,o=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{e=window.localStorage[d]}catch(e){}if((void 0===e?"undefined":k(e))===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:(void 0===e?"undefined":k(e))==="symbol"&&(d=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=r||l,o.getLevel=function(){return n},o.setLevel=function(i,r){if("string"==typeof i&&void 0!==o.levels[i.toUpperCase()]&&(i=o.levels[i.toUpperCase()]),"number"==typeof i&&i>=0&&i<=o.levels.SILENT){if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{window.localStorage[d]=i;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),s.call(o,i,e),("undefined"==typeof console?"undefined":k(console))===t&&i<o.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+i},o.setDefaultLevel=function(e){i=e,u()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(i,!1),function(){if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{window.localStorage.removeItem(d);return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var c=u();null==c&&(c=i),o.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if((void 0===e?"undefined":k(e))!=="symbol"&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=("undefined"==typeof window?"undefined":k(window))!==t?window.log:void 0;return u.noConflict=function(){return("undefined"==typeof window?"undefined":k(window))!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u},"function"==typeof define&&define.amd?define(i):"object"==typeof t&&t.exports?t.exports=i():e.log=i()});function S(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):S(e,t)}var I=f(function(){I()}),C=g(function(e){var t,i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}e.stringify=function(e,a){var n,s,o=[];for(s in"string"!=typeof(a=a||"")&&(a="?"),e)if(i.call(e,s)){if(!(n=e[s])&&(null===n||n===t||isNaN(n))&&(n=""),s=r(s),n=r(n),null===s||null===n)continue;o.push(s+"="+n)}return o.length?a+o.join("&"):""},e.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),s=a(t[2]);null===n||null===s||n in r||(r[n]=s)}return r}}),L=g(function(e,t){!function(i){var a=!1;if("function"==typeof define&&define.amd&&(define(i),a=!0),"object"==typeof e&&(t.exports=i(),a=!0),!a){var r=window.Cookies,n=window.Cookies=i();n.noConflict=function(){return window.Cookies=r,n}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})}),R=g(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),D=g(function(e,t){function i(e,t){if(!S(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}I(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),x=g(function(e,t){function i(e,t){if(!S(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}I(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),M=g(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),N=g(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),O=g(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),P=g(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=k(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),U=g(function(e,t){I();var i=R(),a=M(),r=N(),n=O(),s=P(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!S(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),B=g(function(e,t){I();var i=U();function a(e){if(!S(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),W=g(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),H=g(function(e,t){I();var i=R(),a=D(),r=x(),n=U(),s=B(),o=W(),l=M(),d=N(),u=O();function c(){if(!S(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),V=g(function(e,t){var i=H();t.exports=new i}),q=g(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=V();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=_(A()),j=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},Y=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},G=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=Y()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Z=function(e){e&&void 0!==e.nodeName?e=G(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},Q=_(w()),z=Q.default.methodFactory;Q.default.methodFactory=function(e,t,i){var a=z(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},Q.default.setLevel(Q.default.getLevel());var X=Q.default,J=_(A());function ee(){return"1"===(J.default.doNotTrack||J.default.navigator&&J.default.navigator.doNotTrack)}var et=_(A()),ei={now:function(){var e=et.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function ea(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function er(e,t){if(!S(e,t))throw TypeError("Cannot call a class as a function")}function en(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function es(e,t,i){return t&&en(e.prototype,t),i&&en(e,i),e}function eo(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function el(e,t){return(el=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ed(e){return(ed=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}I(),T();var eu=function(e){return ec(e)[0]},ec=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},eh=_(A()),em={exists:function(){var e=eh.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=eh.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=eh.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function ep(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ev(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){eo(e,t,i[t])})}return e}function eb(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eE=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ef=["x-cdn","content-type"].concat(eE);function eg(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ef.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ey(e){if(e){var t=eE.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var e_=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eA=function(e){if(!e)return{};var t=em.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ek=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eg(e.getAllResponseHeaders())},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!em.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eA(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eb(ev({},e_(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:eu(r),request_response_headers:ek(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eA(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:eu(i.url),request_response_headers:ek(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eA(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:eu(i.url),request_response_headers:ek(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eA(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ek(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?eu(r.responseURL):void 0,request_id:h?ey(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ek(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:eu(c),request_id:h?ey(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:eu(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ew=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eS=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=eu(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eg(u[u.length-1]._responseHeaders||""));var c=i?ey(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eI=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eC=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eL=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eR=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eL(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:eu(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eS(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,E=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:E,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eS(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,E=u.requestHostname,f=u.requestUrl,g=u.requestId,y=eI(d,i),_=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:E,request_id:g,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eC(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=eb(ev({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:eu(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:eu(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eD=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ex=0,eM=function(){function e(){er(this,e),eo(this,"_listeners",void 0)}return es(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ex,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ex;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eN=_(A()),eO=function(){function e(t){var i=this;er(this,e),eo(this,"_playbackHeartbeatInterval",void 0),eo(this,"_playheadShouldBeProgressing",void 0),eo(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eN.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return es(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eN.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eN.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eP=function e(t){var i=this;er(this,e),eo(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eU=function(){function e(t){er(this,e),eo(this,"_watchTimeTrackerLastCheckedTime",void 0),eo(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return es(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),ep(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eB=function(){function e(t){var i=this;er(this,e),eo(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),eo(this,"_lastTime",void 0),eo(this,"_isAdPlaying",void 0),eo(this,"_callbackUpdatePlaybackTime",void 0),eo(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=ei.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=ei.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return es(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=ei.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&ep(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eW=function(){function e(t){er(this,e),eo(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return es(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eH=function e(t){if(er(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;ep(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(ep(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eV=function(){function e(t){var i=this;er(this,e),eo(this,"_lastCheckedTime",void 0),eo(this,"_lastPlayheadTime",void 0),eo(this,"_lastPlayheadTimeUpdatedTime",void 0),eo(this,"_rebuffering",void 0),eo(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:ei.now()})}))}return es(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eq=function(){function e(t){var i=this;er(this,e),eo(this,"NAVIGATION_START",void 0),eo(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||ei.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||ei.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return es(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eF=function e(t){var i=this;er(this,e),eo(this,"_lastPlayerHeight",void 0),eo(this,"_lastPlayerWidth",void 0),eo(this,"_lastPlayheadPosition",void 0),eo(this,"_lastSourceHeight",void 0),eo(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),ep(t.data,"view_total_content_playback_time",e),ep(t.data,"view_total_upscaling",r*e),ep(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},e$=function e(t){var i=this;er(this,e),eo(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=ei.now(),r=(t.data.viewer_time||e)-(a||e);ep(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,ep(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eK=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},ej=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eY=function(){function e(t){var i=this;er(this,e),eo(this,"_adHasPlayed",void 0),eo(this,"_adRequests",void 0),eo(this,"_adResponses",void 0),eo(this,"_currentAdRequestNumber",void 0),eo(this,"_currentAdResponseNumber",void 0),eo(this,"_prerollPlayTime",void 0),eo(this,"_wouldBeNewAdPlay",void 0),eo(this,"isAdBreak",void 0),eo(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),ej.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eK(i._adRequests,a),ep(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ep(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eK(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&ep(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ep(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||ep(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||ep(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return es(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=$(ec(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=$(ec(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eG=_(A()),eZ=function e(t){er(this,e);var i,a,r=function(){t.disableRebufferTracking||(ep(t.data,"view_waiting_rebuffer_count",1),i=ei.now(),a=eG.default.setInterval(function(){if(i){var e=ei.now();ep(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(ep(t.data,"view_waiting_rebuffer_duration",ei.now()-i),i=!1,eG.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eQ=function e(t){var i=this;er(this,e),eo(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=ei.now(),t.on("before*",r)},r=function(e){var a=ei.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},ez=_(A()),eX=_(C()),eJ=_(L()),e0="muxData",e1=function(){var e;try{e=eX.default.parse(eJ.default.get(e0)||"")}catch(t){e={}}return e},e2=function(e){try{eJ.default.set(e0,eX.default.stringify(e),{expires:365})}catch(e){}},e3=function(){var e=e1();return e.mux_viewer_id=e.mux_viewer_id||j(),e.msn=e.msn||Math.random(),e2(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},e5=function(){var e=e1(),t=ei.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=j(),e.sst=t),e.sex=t+15e5,e2(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e4=_(A()),e9=function(){var e;switch(e8()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e8=function(){var e=e4.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e9.getConnectionFromAPI=e8;var e7=te({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e6=te({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function te(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function tt(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e7[s];o||(X.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e6[e]?o+=e6[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(X.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var ti=_(A()),ta={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},tr=["hb","requestcompleted","requestfailed","requestcanceled"],tn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},ta,t)};tn.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tn.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},tn.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),ti.default.clearTimeout(this._sendTimeout)},tn.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],tt({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);ts(this._beaconUrl,i,!0,function(){})},tn.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=ei.now();ts(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,X.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=ei.now()-a,e._postInFlight=!1})}},tn.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tn.prototype._startBeaconSending=function(){var e=this;ti.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=ti.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tn.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(ei.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(X.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===tr.indexOf(e.e)}),s()),o()||(X.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ts=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(ti.default.fetch){ti.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(ti.default.XMLHttpRequest){var r=new ti.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},to=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],tl=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],td=["ad_id","ad_creative_id","ad_universal_id"],tu=["viewstart","error","ended","viewend"],tc=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};er(this,e),eo(this,"mux",void 0),eo(this,"envKey",void 0),eo(this,"options",void 0),eo(this,"eventQueue",void 0),eo(this,"sampleRate",void 0),eo(this,"disableCookies",void 0),eo(this,"respectDoNotTrack",void 0),eo(this,"previousBeaconData",void 0),eo(this,"lastEventTime",void 0),eo(this,"rateLimited",void 0),eo(this,"pageLevelData",void 0),eo(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tn((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(g=this.options.sampleRate)&&void 0!==g?g:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(_=this.options.respectDoNotTrack)&&void 0!==_&&_,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(E=this.options.platform)||void 0===E||null===(b=E.os)||void 0===b?void 0:b.version,viewer_connection_type:e9(),page_url:null===ez.default||void 0===ez.default||null===(f=ez.default.location)||void 0===f?void 0:f.href},this.viewerData=this.disableCookies?{}:e3()}return es(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&ee())return X.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return X.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:e5(),a=eb(ev({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=tt(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return X.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||X.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(X.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tu.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=tt(a),this.eventQueue.queueEvent(a.event,s),X.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ev({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=$(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||to.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||td.includes(t)&&tl.includes(e))}}]),e}(),th=function e(t){er(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tm=function e(t){var i=this;er(this,e),eo(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=ei.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,eo({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tp=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tv=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&el(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ed(a);return e=t?Reflect.construct(i,arguments,ed(this).constructor):i.apply(this,arguments),e&&("object"===k(e)||"function"==typeof e)?e:ea(this)});function a(e,t,r){er(this,a),eo(ea(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),eo(ea(n),"NAVIGATION_START",void 0),eo(ea(n),"_destroyed",void 0),eo(ea(n),"_heartBeatTimeout",void 0),eo(ea(n),"adTracker",void 0),eo(ea(n),"dashjs",void 0),eo(ea(n),"data",void 0),eo(ea(n),"disablePlayheadRebufferTracking",void 0),eo(ea(n),"disableRebufferTracking",void 0),eo(ea(n),"errorTracker",void 0),eo(ea(n),"errorTranslator",void 0),eo(ea(n),"getAdData",void 0),eo(ea(n),"getPlayheadTime",void 0),eo(ea(n),"getStateData",void 0),eo(ea(n),"hlsjs",void 0),eo(ea(n),"id",void 0),eo(ea(n),"longResumeTracker",void 0),eo(ea(n),"minimumRebufferDuration",void 0),eo(ea(n),"mux",void 0),eo(ea(n),"oldEmit",void 0),eo(ea(n),"playbackEventDispatcher",void 0),eo(ea(n),"playbackHeartbeat",void 0),eo(ea(n),"playbackHeartbeatTime",void 0),eo(ea(n),"playheadTime",void 0),eo(ea(n),"seekingTracker",void 0),eo(ea(n),"sustainedRebufferThreshold",void 0),eo(ea(n),"watchTimeTracker",void 0),eo(ea(n),"currentFragmentPDT",void 0),eo(ea(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=em.domContentLoadedEventEnd(),n.NAVIGATION_START=em.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),X.setLevel(r.debug?"debug":"warn"),n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.playbackEventDispatcher=new tc(e,r.data.env_key,r),n.data={player_instance_id:j(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1,n.oldEmit=n.emit,n.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(ea(n));n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)});var o=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(ea(n));if(n.on("videochange",function(e,t){o(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),o(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var l=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var d=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",d,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",d)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tp.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tm(ea(n)),n.errorTracker=new eP(ea(n)),new eQ(ea(n)),n.seekingTracker=new e$(ea(n)),n.playheadTime=new eW(ea(n)),n.playbackHeartbeat=new eO(ea(n)),new eF(ea(n)),n.watchTimeTracker=new eU(ea(n)),new eB(ea(n)),n.adTracker=new eY(ea(n)),new eV(ea(n)),new eH(ea(n)),new eq(ea(n)),new eZ(ea(n)),new th(ea(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return es(a,[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=$(ec(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=j(),i=function(){t===e.data.view_id&&ep(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,eT(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ew(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eR(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eD(this.dashjs),this.dashjs=void 0)}}]),a}(eM);T();var tb,tE=_(q()),tf=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},ty=_(A());ty.default&&ty.default.WeakMap&&(tb=new WeakMap);var t_={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tA=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tA.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tA.prototype.processLine=function(e){var t=e.indexOf(":"),i=tL(e,t),a=i[0],r=2===i.length?tw(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case t_.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case t_.PART_INF:tk(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case t_.SERVER_CONTROL:tk(this.manifest,i),this.setHoldBack();break;case t_.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case t_.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case t_.VERSION:tk(this.manifest,i);break;case t_.SESSION_DATA:var s=e_(tR(i[1]));Object.assign(this.manifest.sessionData,s)}},tA.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tk=function(e,t){var i,a=tT(t[0].replace("#EXT-X-",""));tC(t[1])?(i={},i=Object.assign(tI(t[1]),i)):i=tw(t[1]),e[a]=i},tT=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tw=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tS=function(e){var t={},i=e.split("=");return i.length>1&&(t[tT(i[0])]=tw(i[1])),t},tI=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tS(t[a]),i);return i},tC=function(e){return e.indexOf("=")>-1},tL=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tR=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tD={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){X.info("safeCall error",e)}return r},safeIncrement:ep,getComputedStyle:function(e,t){var i;return e&&t&&ty.default&&"function"==typeof ty.default.getComputedStyle?(tb&&tb.has(e)&&(i=tb.get(e)),i||(i=ty.default.getComputedStyle(e,null),tb&&tb.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eg,cdnHeadersToRequestId:ey,extractHostnameAndDomain:ec,extractHostname:eu,manifestParser:tA,generateShortID:Y,generateUUID:j,now:ei.now},tx={},tM=function(e){var t=arguments;"string"==typeof e?tM.hasOwnProperty(e)?K.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tM[e].apply(null,t)},0):X.warn("`"+e+"` is an unknown task"):"function"==typeof e?K.default.setTimeout(function(){e(tM)},0):X.warn("`"+e+"` is invalid.")},tN={loaded:ei.now(),NAME:"mux-embed",VERSION:"5.2.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=$(Z(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return d(r.currentTime)},i.getStateData=function(){var e,t=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&k("function"===this.dashjs.getSource)&&this.dashjs.getSource(),n={player_is_paused:r.paused,player_playhead_time:d(r.currentTime),player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tE.default&&!!(tE.default.fullscreenElement||tE.default.webkitFullscreenElement||tE.default.mozFullScreenElement||tE.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:t||a||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(e=r.getVideoPlaybackQuality)||void 0===e?void 0:e.call(r).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(n.player_program_time=u+s,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);n.player_live_edge_program_time=c}}}return n},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=$(Z(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tf.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tg[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tM,e,t)},destroyMonitor:function(e){var t=$(Z(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():X.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=G(e);tx[i]?tx[i].addHLSJS(t):X.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=G(e);tx[i]?tx[i].addDashJS(t):X.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=G(e);tx[t]?tx[t].removeHLSJS():X.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=G(e);tx[t]?tx[t].removeDashJS():X.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){ee()&&t&&t.respectDoNotTrack&&X.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=G(e);tx[i]=new tv(tM,i,t)},emit:function(e,t,i){var a=G(e);tx[a]?(tx[a].emit(t,i),"destroy"===t&&delete tx[a]):X.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:ee,log:X,utils:tD,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tM,tN),void 0!==K.default&&"function"==typeof K.default.addEventListener&&K.default.addEventListener("pagehide",function(e){e.persisted||(tM.WINDOW_UNLOADING=!0)},!1);var tO=i(3915).ZP,tP=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tP.MEDIA_ERR_ABORTED=1,tP.MEDIA_ERR_NETWORK=2,tP.MEDIA_ERR_DECODE=3,tP.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tP.MEDIA_ERR_ENCRYPTED=5,tP.MEDIA_ERR_CUSTOM=100,tP.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tU=tP,tB=e=>null==e,tW=(e,t)=>!tB(t)&&e in t,tH={ANY:"any",MUTED:"muted"},tV={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tq={MSE:"mse",NATIVE:"native"},tF={HEADER:"header",QUERY:"query",NONE:"none"},t$=Object.values(tF),tK={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tj={HLS:tK.M3U8},tY=(Object.keys(tj),[...Object.values(tK)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tG={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tZ={DESCENDING:"desc"},tQ=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tz=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tX=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tW(e,tj)?tj[e]:t}let{src:i}=e;return i?t1(i):""},tJ=e=>"VOD"===e?tV.ON_DEMAND:tV.LIVE,t0=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,t1=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tW(a,tK)?tK[a]:""},t2=Object.values(tH),t3=e=>"boolean"==typeof e||"string"==typeof e&&t2.includes(e),t5=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=t3(a)?a:!!a,o=()=>{r||tQ(t,"playing",()=>{r=!0},{once:!0})};if(o(),tQ(t,"loadstart",()=>{r=!1,o(),t4(t,s)},{once:!0}),tQ(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tV.UNKNOWN?e.streamType===tV.LIVE:!Number.isFinite(t.duration)),t4(t,s)},{once:!0}),i&&i.once(tO.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tV.UNKNOWN?e.streamType===tV.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tQ(t,"play",()=>{"metadata"===t.preload?i.once(tO.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||t4(t,s=t3(e)?e:!!e)}},t4=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tH.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tH.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},t9=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tQ(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d};function t8(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}var t7="cuepoints",t6=Object.freeze({label:t7}),ie=(e,{label:t=t7}=t6)=>{var i;return null==(i=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&"metadata"===e.track.kind))?void 0:i.track};async function it(e,t,i=t6){let a=ie(e,i);if(!a){let{label:t=t7}=i;(a=t8(e,"metadata",t)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))}return"hidden"!==a.mode&&(a.mode="hidden"),[...t].sort(({time:e},{time:t})=>t-e).forEach(({time:t,value:i})=>{var r,n;let s=Array.prototype.findIndex.call(null==a?void 0:a.cues,e=>e.startTime>=t),o=null==(r=null==a?void 0:a.cues)?void 0:r[s],l=o?o.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,d=null==(n=null==a?void 0:a.cues)?void 0:n[s-1];d&&(d.endTime=t);let u=new VTTCue(t,l,JSON.stringify(null!=i?i:null));a.addCue(u)}),a}var ii=e=>({time:e.startTime,value:JSON.parse(e.text)});function ia(e,t={label:t7}){var i,a;let r=ie(e,t);if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;let{currentTime:n}=e;return ii(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n))}async function ir(e,t=t6){return new Promise(i=>{tQ(e,"loadstart",async()=>{let a=await it(e,[],t);tQ(e,"cuechange",()=>{let t=ia(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var is,io,il,id=async e=>fetch(e).then(e=>e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>e.text()).then(e=>e.split(`
`))),iu=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tJ(r),s=t0(r),o;if(n===tV.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},ic=async(e,t)=>t===tK.MP4?{streamType:tV.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===tK.M3U8?iu(await id(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),ih=async(e,t,i=tX({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await ic(e,i);(null!=(a=ib.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=ib.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=ib.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},im=e=>{var t;let i=e.type,a=tJ(i),r=t0(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tV.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ip=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=im(e);if(c===tV.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=ib.get(t))?o:{}).seekable=e}(null!=(l=ib.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=ib.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ib.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iv=-1!==(null!=(io=null==(is=null==globalThis?void 0:globalThis.navigator)?void 0:is.userAgent)?io:"").toLowerCase().indexOf("android"),ib=new WeakMap,iE="mux.com",ig=null==(il=tO.isSupported)?void 0:il.call(tO),iy=()=>tM.utils.now(),i_=tM.utils.generateUUID,iA=({playbackId:e,customDomain:t=iE,maxResolution:i,minResolution:a,renditionOrder:r,tokens:{playback:n}={},extraSourceParams:s={}}={})=>{if(!e)return;let[o,l=""]=tz(e),d=new URL(`https://stream.${t}/${o}.m3u8${l}`);return n||d.searchParams.has("token")?(d.searchParams.forEach((e,t)=>{"token"!=t&&d.searchParams.delete(t)}),n&&d.searchParams.set("token",n)):(i&&d.searchParams.set("max_resolution",i),a&&(d.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&d.searchParams.set("rendition_order",r),Object.entries(s).forEach(([e,t])=>{null!=t&&d.searchParams.set(e,t)})),d.toString()},ik=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iT=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},iw=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:iq(e)&&null!=(a=null!=(i=ik(e.playbackId))?i:iT(e.src))?a:e.src},iS=e=>{var t;return null==(t=ib.get(e))?void 0:t.error},iI=e=>{var t,i;return null!=(i=null==(t=ib.get(e))?void 0:t.streamType)?i:tV.UNKNOWN},iC=e=>{var t,i;return null!=(i=null==(t=ib.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},iL=e=>{var t,i;return null!=(i=null==(t=ib.get(e))?void 0:t.seekable)?i:e.seekable},iR=e=>{var t;let i=null==(t=ib.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=iL(e);return a.length?a.end(a.length-1)-i:Number.NaN},iD=.034,ix=(e,t,i=iD)=>Math.abs(e-t)<=i,iM=(e,t,i=iD)=>e>t||ix(e,t,i),iN=(e,t=iD)=>e.paused&&iM(e.currentTime,e.duration,t),iO=(e,t)=>{var i,a,r;if(!t)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iP=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iO(e,t))||iN(e),iU=(e,t,i)=>{iB(t,i);let{metadata:a={}}=e,{view_session_id:r=i_()}=a,n=iw(e);a.view_session_id=r,a.video_id=n,e.metadata=a,ib.set(t,{});let s=iH(e,t),o=t9(e,t,s);iF(e,t,s),i$(e,t,s),ir(t);let l=t5(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},iB=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",ij),e.removeEventListener("error",iY),e.removeEventListener("durationchange",iK),ib.delete(e),e.dispatchEvent(new Event("teardown")))};function iW(e,t){var i;let a=tX(e);if(a!==tK.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tq.MSE,o=n===tq.NATIVE;return r&&(o||!(ig&&(s||iv)))}var iH=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tX(e)===tK.M3U8,d=iW(e,t);if(l&&!d&&ig){let e=iV(a);return new tO({debug:i,startPosition:r,cmcd:s!==tF.NONE?{useHeaders:s===tF.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tF.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...e,...o})}},iV=e=>e===tV.LIVE?{backBufferLength:8}:{},iq=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iE)||!!i&&a.includes(i.toLocaleLowerCase())},iF=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=iq(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tM.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tO:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},i$=(e,t,i)=>{var a;let r=iW(e,t),{src:n}=e,s=()=>{t.ended||!iP(t,i)||(iO(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},o,l,d=()=>{var e,i;let a=null==(e=iL(t))?void 0:e.start(0),r=null==(i=iL(t))?void 0:i.end(0);(l!==r||o!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=a,l=r};if(tQ(t,"durationchange",d),t&&r){let i=tX(e);if("string"==typeof n){let r=()=>{if(iI(t)!==tV.LIVE||Number.isFinite(t.duration))return;let e=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tQ(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})};if("none"===t.preload){let e=()=>{ih(n,t,i).then(r),t.removeEventListener("loadedmetadata",a)},a=()=>{ih(n,t,i).then(r),t.removeEventListener("play",e)};tQ(t,"play",e,{once:!0}),tQ(t,"loadedmetadata",a,{once:!0})}else ih(n,t,i).then(r);t.setAttribute("src",n),e.startTime&&((null!=(a=ib.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",iK,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",ij),t.addEventListener("error",iY),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tQ(t,"pause",s),tQ(t,"seeked",s),tQ(t,"play",()=>{t.ended||iM(t.currentTime,t.duration)&&(t.currentTime=t.seekable.start(0))})}else i&&n?(i.once(tO.Events.LEVEL_LOADED,(e,a)=>{ip(a.details,t,i),d(),iI(t)!==tV.LIVE||Number.isFinite(t.duration)||(i.on(tO.Events.LEVEL_UPDATED,d),tQ(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tO.Events.LEVELS_UPDATED,d)}))}),i.on(tO.Events.ERROR,(e,i)=>{let a={[tO.ErrorTypes.NETWORK_ERROR]:tU.MEDIA_ERR_NETWORK,[tO.ErrorTypes.MEDIA_ERROR]:tU.MEDIA_ERR_DECODE},r=new tU("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",iY),tQ(t,"waiting",s),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tO.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tO.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tO.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(tO.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(tO.Events.BUFFER_FLUSHING,n),r||t.trigger(tO.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(tO.Events.DESTROYING,o)}(e,i),function(e,t){t.on(tO.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);t8(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tO.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tO.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tO.Events.MANIFEST_LOADED,a),t.once(tO.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function iK(e){var t;let i=e.target,a=null==(t=ib.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function ij(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tU(i,a);if(t.src&&(a!==tU.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function iY(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tU))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=ib.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}let iG={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},iZ={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},iQ={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},iz=Object.entries(iQ),iX=iz.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),iJ=iz.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(iJ).reduce((e,[t,i])=>{let a=iX[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let i0=Object.entries(iX).reduce((e,[t,i])=>{let a=iJ[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),i1={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},i2={DISABLED:"disabled",SHOWING:"showing"},i3={MOUSE:"mouse",TOUCH:"touch"},i5={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},i4={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},i9={FULLSCREEN:"fullscreen"},i8={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},i7={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function i6(e){return null==e?void 0:e.split(/\s+/).map(at)}function ae(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function at(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function ai(e){return null==e?void 0:e.split(/\s+/).map(ar)}function aa(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ar(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function an(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...i8,...i7});let as=e=>new Promise(t=>setTimeout(t,e)),ao=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],al=(e,t)=>{let i=1===e?ao[t].singular:ao[t].plural;return`${e} ${i}`},ad=e=>{if(!("number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)))return"";let t=Math.abs(e),i=new Date(0,0,0,0,0,t,0),a=[i.getHours(),i.getMinutes(),i.getSeconds()].map((e,t)=>e&&al(e,t)).filter(e=>e).join(", ");return`${a}${t!==e?" remaining":""}`};function au(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class ac{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ah extends ac{}class am{observe(){}unobserve(){}disconnect(){}}let ap={createElement:function(){return new av.HTMLElement},createElementNS:function(){return new av.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},av={ResizeObserver:am,document:ap,Node:ah,HTMLElement:class extends ah{},DocumentFragment:class extends ac{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},ab="undefined"==typeof window||void 0===window.customElements,aE=Object.keys(av).every(e=>e in globalThis),af=ab&&!aE?av:globalThis,ag=ab&&!aE?ap:globalThis.document,ay=new WeakMap,a_=e=>{let t=ay.get(e);return t||ay.set(e,t=new Set),t},aA=new af.ResizeObserver(e=>{for(let t of e)for(let e of a_(t.target))e(t)});function ak(e,t){a_(e).add(t),aA.observe(e)}function aT(e,t){let i=a_(e);i.delete(t),i.size||aA.unobserve(e)}function aw(e){var t;return null!=(t=aS(e))?t:aD(e,"media-controller")}function aS(e){var t;let{MEDIA_CONTROLLER:i}=iZ,a=e.getAttribute(i);if(a)return null==(t=aM(e))?void 0:t.getElementById(a)}let aI=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aC=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},aL=(e,t)=>aC(e,t)[0],aR=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||aR(e,t.getRootNode().host)),aD=(e,t)=>e?e.closest(t)||aD(e.getRootNode().host,t):null;function ax(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=ax(i.shadowRoot))?t:i:null}function aM(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aN(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function aO(e,t){return function(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||aP(e,t)}function aP(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aU(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function aB(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aU(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function aW(e,t){return e.hasAttribute(t)}function aH(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}aW(e,t)!=i&&e.toggleAttribute(t,i)}function aV(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function aq(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aV(e,t,void 0)!==a&&e.setAttribute(t,a)}var aF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a$=(e,t,i)=>(aF(e,t,"read from private field"),i?i.call(e):t.get(e)),aK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aj=(e,t,i,a)=>(aF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aY=ag.createElement("template");aY.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class aG extends af.HTMLElement{constructor(e={}){if(super(),aK(this,d8,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=aY.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=ag.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[iZ.MEDIA_CONTROLLER,iX.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=a$(this,d8))?void 0:a.unassociateElement)||r.call(a,this),aj(this,d8,null)),i&&this.isConnected&&(aj(this,d8,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=a$(this,d8))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),aj(this,d8,function(e){var t;let i=e.getAttribute(iZ.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aD(e,"media-controller")}(this)),this.getAttribute(iZ.MEDIA_CONTROLLER)&&(null==(t=null==(e=a$(this,d8))?void 0:e.associateElement)||t.call(e,this)),null==(i=a$(this,d8))||i.addEventListener("pointerdown",this),null==(a=a$(this,d8))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(iZ.MEDIA_CONTROLLER)&&(null==(t=null==(e=a$(this,d8))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=a$(this,d8))||i.removeEventListener("pointerdown",this),null==(a=a$(this,d8))||a.removeEventListener("click",this),aj(this,d8,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===i3.TOUCH){this.handleTap(e);return}if(d===i3.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return aW(this,iX.MEDIA_PAUSED)}set mediaPaused(e){aH(this,iX.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?iG.MEDIA_PLAY_REQUEST:iG.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new af.CustomEvent(t,{composed:!0,bubbles:!0}))}}d8=new WeakMap,af.customElements.get("media-gesture-receiver")||af.customElements.define("media-gesture-receiver",aG);var aZ=Object.defineProperty,aQ=(e,t,i)=>t in e?aZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,az=(e,t,i)=>(aQ(e,"symbol"!=typeof t?t+"":t,i),i),aX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aJ=(e,t,i)=>(aX(e,t,"read from private field"),i?i.call(e):t.get(e)),a0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a1=(e,t,i,a)=>(aX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a2=(e,t,i)=>(aX(e,t,"access private method"),i);let a3={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},a5=ag.createElement("template");a5.innerHTML=`
  <style>
    
    :host([${iX.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${a3.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${a3.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${a3.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${a3.AUDIO}])[${a3.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${a3.AUDIO}])[${a3.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${a3.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${a3.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${a3.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${a3.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${a3.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${a3.USER_INACTIVE}]:not([${iX.MEDIA_PAUSED}]):not([${iX.MEDIA_IS_AIRPLAYING}]):not([${iX.MEDIA_IS_CASTING}]):not([${a3.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${a3.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${a3.USER_INACTIVE}]:not([${iX.MEDIA_PAUSED}]):not([${iX.MEDIA_IS_CASTING}]):not([${a3.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${a3.AUDIO}])[${iX.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let a4=Object.values(iX);class a9 extends af.HTMLElement{constructor(){super(),a0(this,ue),a0(this,ui),a0(this,ur),a0(this,us),a0(this,ul),a0(this,d7,0),a0(this,d6,void 0),az(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(a5.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;ak(this,t=>{e||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(a3.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=a[e]),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(iJ.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(t.target,t.contentRect.width),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(iJ.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){aJ(this,d6)&&this.mediaUnsetCallback(aJ(this,d6));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[a3.AUTOHIDE,a3.GESTURES_DISABLED].concat(a4).filter(e=>![iX.MEDIA_RENDITION_LIST,iX.MEDIA_AUDIO_TRACK_LIST,iX.MEDIA_CHAPTERS_CUES].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==a3.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(a1(this,d6,e),e.localName.includes("-")&&await af.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(a3.AUDIO)?i8.AUDIO_PLAYER():i8.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(a3.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=af.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=af.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){a1(this,d6,null)}handleEvent(e){switch(e.type){case"pointerdown":a1(this,d7,e.timeStamp);break;case"pointermove":a2(this,ue,ut).call(this,e);break;case"pointerup":a2(this,ui,ua).call(this,e);break;case"mouseleave":a2(this,ur,un).call(this);break;case"mouseup":this.removeAttribute(a3.KEYBOARD_CONTROL);break;case"keyup":a2(this,ul,ud).call(this),this.setAttribute(a3.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}d7=new WeakMap,d6=new WeakMap,ue=new WeakSet,ut=function(e){!("mouse"!==e.pointerType&&e.timeStamp-aJ(this,d7)<250)&&(a2(this,us,uo).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&a2(this,ul,ud).call(this))},ui=new WeakSet,ua=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(a3.USER_INACTIVE);[this,this.media].includes(e.target)&&t?a2(this,ur,un).call(this):a2(this,ul,ud).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&a2(this,ul,ud).call(this)},ur=new WeakSet,un=function(){if(this.autohide<0||this.hasAttribute(a3.USER_INACTIVE))return;this.setAttribute(a3.USER_INACTIVE,"");let e=new af.CustomEvent(iJ.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},us=new WeakSet,uo=function(){if(!this.hasAttribute(a3.USER_INACTIVE))return;this.removeAttribute(a3.USER_INACTIVE);let e=new af.CustomEvent(iJ.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},ul=new WeakSet,ud=function(){a2(this,us,uo).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{a2(this,ur,un).call(this)},1e3*this.autohide))},af.customElements.get("media-container")||af.customElements.define("media-container",a9);var a8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a7=(e,t,i)=>(a8(e,t,"read from private field"),i?i.call(e):t.get(e)),a6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},re=(e,t,i,a)=>(a8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rt{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){a6(this,up),a6(this,uu,void 0),a6(this,uc,void 0),a6(this,uh,void 0),a6(this,um,new Set),re(this,uu,e),re(this,uc,t),re(this,uh,new Set(i))}[Symbol.iterator](){return a7(this,up,uv).values()}get length(){return a7(this,up,uv).size}get value(){var e;return null!=(e=[...a7(this,up,uv)].join(" "))?e:""}set value(e){var t;e!==this.value&&(re(this,um,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...a7(this,up,uv)][e]}values(){return a7(this,up,uv).values()}forEach(e){a7(this,up,uv).forEach(e)}add(...e){var t,i;e.forEach(e=>a7(this,um).add(e)),(""!==this.value||(null==(t=a7(this,uu))?void 0:t.hasAttribute(`${a7(this,uc)}`)))&&(null==(i=a7(this,uu))||i.setAttribute(`${a7(this,uc)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>a7(this,um).delete(e)),null==(t=a7(this,uu))||t.setAttribute(`${a7(this,uc)}`,`${this.value}`)}contains(e){return a7(this,up,uv).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}uu=new WeakMap,uc=new WeakMap,uh=new WeakMap,um=new WeakMap,up=new WeakSet,uv=function(){return a7(this,um).size?a7(this,um):a7(this,uh)};let ri=(e="")=>e.split(/\s+/),ra=(e="")=>{let[t,i,a]=e.split(":");return{kind:t="cc"===t?"captions":"subtitles",language:i,label:a?decodeURIComponent(a):void 0}},rr=(e="",t={})=>ri(e).map(e=>{let i=ra(e);return{...t,...i}}),rn=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?ra(e):e):"string"==typeof e?rr(e):[e]:[],rs=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,ro=(e=[])=>Array.prototype.map.call(e,rs).join(" "),rl=(e,t)=>i=>i[e]===t,rd=e=>{let t=Object.entries(e).map(([e,t])=>rl(e,t));return e=>t.every(t=>t(e))},ru=(e,t=[],i=[])=>{let a=rn(i).map(rd);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},rc=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rd(t);return Array.from(e.textTracks).filter(i)},rh=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(iX.MEDIA_SUBTITLES_SHOWING)},rm={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};void 0===ag.fullscreenElement&&(rm.enter="webkitRequestFullScreen",rm.exit=null!=ag.webkitExitFullscreen?"webkitExitFullscreen":"webkitCancelFullScreen",rm.rootEvents=["webkitfullscreenchange"],rm.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],rm.element="webkitFullscreenElement",rm.error="webkitfullscreenerror",rm.enabled="webkitFullscreenEnabled");let rp=()=>{var e;return a||(a=null==(e=null==ag?void 0:ag.createElement)?void 0:e.call(ag,"video"))},rv=async(e=rp())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await as(0),e.volume!==t},rb=/.*Version\/.*Safari\/.*/.test(af.navigator.userAgent),rE=(e=rp())=>(!af.matchMedia("(display-mode: standalone)").matches||!rb)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rf=(e=rp())=>{let t=ag[rm.enabled];return!t&&e&&(t="webkitSupportsFullscreen"in e),t},rg=rf(),ry=rE(),r_=!!af.WebKitPlaybackTargetAvailabilityEvent,rA=!!af.chrome,rk=e=>rc(e.media,e=>[i1.SUBTITLES,i1.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rT=e=>rc(e.media,e=>e.mode===i2.SHOWING&&[i1.SUBTITLES,i1.CAPTIONS].includes(e.kind)),rw=(e,t)=>{let i=rk(e),a=rT(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)ru(i2.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;ru(i2.DISABLED,i,a),ru(i2.SHOWING,i,[{language:n,label:s,kind:o}])}}},rS=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?rI(e,t):Object.entries(e).every(([e,i])=>e in t&&rS(i,t[e])))),rI=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>rS(e,t[i])))},rC=Object.values(i4),rL=rv().then(e=>r=e),rR=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof af.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=af.customElements.get(t);i&&e instanceof i||(await af.customElements.whenDefined(t),af.customElements.upgrade(e))}))},rD={mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?af.localStorage.removeItem("media-chrome-pref-volume"):af.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=af.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;rD.mediaVolume.set(+i,t),e(i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&0!==i.readyState&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[i4.LIVE,i4.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(rC.includes(r))return r===i4.UNKNOWN?a:r;let n=t.duration;return n===1/0?i4.LIVE:Number.isFinite(n)?i4.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=rD.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===i4.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(rD.mediaStreamType.get(e)!==i4.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rk(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rT(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![i1.CAPTIONS,i1.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||rw(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=rc(i,{kind:i1.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{let{media:i}=t;if(!i)return;let a=i.querySelector('track[kind="chapters"][default][src]');return null==a||a.addEventListener("load",e),()=>{null==a||a.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&aR(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!ag.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else ag.pictureInPictureElement&&ag.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;if(!a[rm.element])return"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===i9.FULLSCREEN;if(a[rm.element]===r)return!0;if(a[rm.element].localName.includes("-")){let e=a[rm.element].shadowRoot;if(!(rm.element in e))return aR(a[rm.element],r);for(;null==e?void 0:e[rm.element];){if(e[rm.element]===r)return!0;e=null==(t=e[rm.element])?void 0:t.shadowRoot}}return!1},set(e,t){var i,a;let{media:r,fullscreenElement:n,documentElement:s}=t;if(!e&&(null==s?void 0:s[rm.exit])){let e=null==(i=null==s?void 0:s[rm.exit])?void 0:i.call(s);e instanceof Promise&&e.catch(()=>{});return}if(null==n?void 0:n[rm.enter]){let e=null==(a=n[rm.enter])?void 0:a.call(n);e instanceof Promise&&e.catch(()=>{})}else(null==r?void 0:r.webkitEnterFullscreen)?r.webkitEnterFullscreen():(null==r?void 0:r.requestFullscreen)&&r.requestFullscreen()},rootEvents:rm.rootEvents,mediaEvents:rm.mediaEvents},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&af.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rg||!rf(t))return i5.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!ry||!rE(t))return i5.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return i5.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&rL.then(t=>e(t?void 0:i5.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return rA&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?i5.UNAVAILABLE:void 0:i5.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>r_?(null==t?void 0:t.availability)==="not-available"?i5.UNAVAILABLE:void 0:i5.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:i5.UNAVAILABLE:i5.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?i5.UNAVAILABLE:void 0:i5.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},rx={[iG.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=rc(l,{kind:i1.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[iG.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[iG.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===i4.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[iG.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[iG.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[iG.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[iG.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[iG.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[iG.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))&&e.mediaCurrentTime.set(a,t)},[iG.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=rk(t),s=rn(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&af.localStorage.setItem("media-chrome-pref-subtitles-lang",o),ru(i2.SHOWING,n,s)},[iG.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=rk(t);ru(i2.DISABLED,a,null!=i?i:[])},[iG.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){rw(t,i)},[iG.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[iG.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[iG.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[iG.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[iG.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[iG.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[iG.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[iG.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[iG.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var rM=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=rD,requestMap:r=rx,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||rS(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,E,f,g,y,_,A,k,T,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await rR(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),R=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(E=o.media)?void 0:E.remote),M=d.documentElement!==o.documentElement,N=!!d.media&&(C||I),O=!!(null==(f=d.media)?void 0:f.textTracks)&&(L||I),P=!!(null==(g=d.media)?void 0:g.videoRenditions)&&(R||I),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(D||I),B=!!(null==(_=d.media)?void 0:_.remote)&&(x||I),W=!!d.documentElement&&(M||I),H=N||O||P||U||B||W,V=0===l.length&&1===t&&s,q=!!o.media&&(C||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(L||V),$=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(R||V),K=!!(null==(T=o.media)?void 0:T.audioTracks)&&(D||V),j=!!(null==(w=o.media)?void 0:w.remote)&&(x||V),Y=!!o.documentElement&&(M||V),G=q||F||$||K||j||Y;if(!(H||G)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&H&&v(),G&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}},rN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rO=(e,t,i)=>(rN(e,t,"read from private field"),i?i.call(e):t.get(e)),rP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rU=(e,t,i,a)=>(rN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rB=(e,t,i)=>(rN(e,t,"access private method"),i);let rW=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],rH={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class rV extends a9{constructor(){super(),rP(this,uA),rP(this,uT),rP(this,uS),rP(this,ub,new rt(this,rH.HOTKEYS)),rP(this,uE,void 0),rP(this,uf,void 0),rP(this,ug,void 0),rP(this,uy,void 0),rP(this,u_,e=>{var t;null==(t=rO(this,uf))||t.dispatch(e)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={};rU(this,ug,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new af.CustomEvent(i0[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(rH.NO_HOTKEYS,rH.HOTKEYS,rH.DEFAULT_STREAM_TYPE,rH.DEFAULT_SUBTITLES,rH.DEFAULT_DURATION)}get mediaStore(){return rO(this,uf)}set mediaStore(e){var t,i;if(rO(this,uf)&&(null==(t=rO(this,uy))||t.call(this),rU(this,uy,void 0)),rU(this,uf,e),!rO(this,uf)&&!this.hasAttribute(rH.NO_DEFAULT_STORE)){rB(this,uA,uk).call(this);return}rU(this,uy,null==(i=rO(this,uf))?void 0:i.subscribe(rO(this,ug)))}get fullscreenElement(){var e;return null!=(e=rO(this,uE))?e:this}set fullscreenElement(e){var t;this.hasAttribute(rH.FULLSCREEN_ELEMENT)&&this.removeAttribute(rH.FULLSCREEN_ELEMENT),rU(this,uE,e),null==(t=rO(this,uf))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===rH.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(rH.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===rH.HOTKEYS)rO(this,ub).value=i;else if(e===rH.DEFAULT_SUBTITLES&&i!==t)null==(a=rO(this,uf))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(rH.DEFAULT_SUBTITLES)}});else if(e===rH.DEFAULT_STREAM_TYPE)null==(n=rO(this,uf))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(rH.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===rH.LIVE_EDGE_OFFSET)null==(s=rO(this,uf))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(rH.LIVE_EDGE_OFFSET)?+this.getAttribute(rH.LIVE_EDGE_OFFSET):void 0}});else if(e===rH.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;rU(this,uE,e),null==(l=rO(this,uf))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;rO(this,uf)||this.hasAttribute(rH.NO_DEFAULT_STORE)||rB(this,uA,uk).call(this),null==(e=rO(this,uf))||e.dispatch({type:"documentelementchangerequest",detail:ag}),super.connectedCallback(),rO(this,uf)&&!rO(this,uy)&&rU(this,uy,null==(t=rO(this,uf))?void 0:t.subscribe(rO(this,ug))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),rO(this,uf)&&(null==(t=rO(this,uf))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=rO(this,uf))||i.dispatch({type:iG.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),rO(this,uy)&&(null==(a=rO(this,uy))||a.call(this),rU(this,uy,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=rO(this,uf))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=rO(this,uf))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){rX(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=rJ(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(iG).forEach(t=>{e.addEventListener(t,rO(this,u_))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(iG).forEach(t=>{e.removeEventListener(t,rO(this,u_))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),rO(this,uf)&&Object.entries(rO(this,uf).getState()).forEach(([t,i])=>{rX([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",rB(this,uS,uI))}disableHotkeys(){this.removeEventListener("keydown",rB(this,uS,uI)),this.removeEventListener("keyup",rB(this,uT,uw))}get hotkeys(){return rO(this,ub)}keyboardShortcutHandler(e){var t,i,a,r,n,s;let o,l,d;if(!((null!=(r=null!=(a=null==(t=e.target.getAttribute(rH.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||rO(this,ub).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&rO(this,ub).contains("nospace")))switch(e.key){case" ":case"k":o=rO(this,uf).getState().mediaPaused?iG.MEDIA_PLAY_REQUEST:iG.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new af.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?iG.MEDIA_UNMUTE_REQUEST:iG.MEDIA_MUTE_REQUEST,this.dispatchEvent(new af.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?iG.MEDIA_EXIT_FULLSCREEN_REQUEST:iG.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new af.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new af.CustomEvent(iG.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(rH.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(rH.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)-e,0),d=new af.CustomEvent(iG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(rH.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(rH.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new af.CustomEvent(iG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}}ub=new WeakMap,uE=new WeakMap,uf=new WeakMap,ug=new WeakMap,uy=new WeakMap,u_=new WeakMap,uA=new WeakSet,uk=function(){var e;this.mediaStore=rM({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(rH.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(rH.DEFAULT_DURATION)?+this.getAttribute(rH.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(rH.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(rH.LIVE_EDGE_OFFSET)?+this.getAttribute(rH.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(rH.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(rH.NO_SUBTITLES_LANG_PREF)}})},uT=new WeakSet,uw=function(e){let{key:t}=e;if(!rW.includes(t)){this.removeEventListener("keyup",rB(this,uT,uw));return}this.keyboardShortcutHandler(e)},uS=new WeakSet,uI=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!rW.includes(a)){this.removeEventListener("keyup",rB(this,uT,uw));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(rO(this,ub).contains(`no${a.toLowerCase()}`)||" "===a&&rO(this,ub).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",rB(this,uT,uw),{once:!0})};let rq=Object.values(iX),rF=Object.values(iQ),r$=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(af.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,iZ.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>rq.includes(e)):[]},rK=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&af.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof af.customElements.get(e.nodeName.toLowerCase()))&&af.customElements.upgrade(e),rF.some(t=>t in e)},rj=e=>rK(e)||!!r$(e).length,rY=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},rG={[iX.MEDIA_SUBTITLES_LIST]:ro,[iX.MEDIA_SUBTITLES_SHOWING]:ro,[iX.MEDIA_SEEKABLE]:rY,[iX.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(rY).join(" "),[iX.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[iX.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ae).join(" ")},[iX.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(aa).join(" ")}},rZ=async(e,t,i)=>{var a,r;if(e.isConnected||await as(0),"boolean"==typeof i||null==i)return aH(e,t,i);if("number"==typeof i)return aB(e,t,i);if("string"==typeof i)return aq(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=rG[t])?void 0:a.call(rG,i))?r:i;return e.setAttribute(t,n)},rQ=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},rz=(e,t)=>{if(rQ(e))return;let i=(e,t)=>{var i,a;rj(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>rz(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!rj(e)){af.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},rX=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=r$(e),r=t.toLowerCase();a.includes(r)&&rZ(e,r,i)})},rJ=(e,t,i)=>{rz(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(iG.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(iG.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>rz(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>rz(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>rz(e,t)),Array.prototype.forEach.call(r,e=>rz(e,i))):"attributes"===n&&o===iZ.MEDIA_CHROME_ATTRIBUTES&&(rj(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{rz(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(iG.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(iG.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};af.customElements.get("media-controller")||af.customElements.define("media-controller",rV);var r0=Object.defineProperty,r1=(e,t,i)=>t in e?r0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,r2=(e,t,i)=>(r1(e,"symbol"!=typeof t?t+"":t,i),i),r3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r5=(e,t,i)=>(r3(e,t,"read from private field"),i?i.call(e):t.get(e)),r4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r9=(e,t,i,a)=>(r3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let r8=ag.createElement("template");r8.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class r7 extends af.HTMLElement{constructor(e={}){if(super(),r4(this,uC,void 0),r2(this,"preventClick",!1),r4(this,uL,e=>{this.preventClick||this.handleClick(e)}),r4(this,uR,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",r5(this,uR));return}this.preventClick||this.handleClick(e)}),r4(this,uD,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",r5(this,uR));return}this.addEventListener("keyup",r5(this,uR),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=r8.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=ag.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}}static get observedAttributes(){return["disabled",iZ.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",r5(this,uL)),this.addEventListener("keydown",r5(this,uD)),this.tabIndex=0}disable(){this.removeEventListener("click",r5(this,uL)),this.removeEventListener("keydown",r5(this,uD)),this.removeEventListener("keyup",r5(this,uR)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=r5(this,uC))?void 0:a.unassociateElement)||r.call(a,this),r9(this,uC,null)),i&&this.isConnected&&(r9(this,uC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=r5(this,uC))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(iZ.MEDIA_CONTROLLER);r&&(r9(this,uC,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=r5(this,uC))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=r5(this,uC))?void 0:e.unassociateElement)||t.call(e,this),r9(this,uC,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}uC=new WeakMap,uL=new WeakMap,uR=new WeakMap,uD=new WeakMap,af.customElements.get("media-chrome-button")||af.customElements.define("media-chrome-button",r7);let r6=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,ne=ag.createElement("template");ne.innerHTML=`
  <style>
  :host([${iX.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${iX.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${r6}</slot>
    <slot name="exit">${r6}</slot>
  </slot>
`;let nt=e=>{let t=e.mediaIsAirplaying?i7.EXIT_AIRPLAY():i7.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class ni extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_IS_AIRPLAYING,iX.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ne,...e})}connectedCallback(){super.connectedCallback(),nt(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_IS_AIRPLAYING&&nt(this)}get mediaIsAirplaying(){return aW(this,iX.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){aH(this,iX.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aV(this,iX.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){aq(this,iX.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new af.CustomEvent(iG.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}function na(e){return e.split("-")[0]}af.customElements.get("media-airplay-button")||af.customElements.define("media-airplay-button",ni);var nr=Object.defineProperty,nn=(e,t,i)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ns=(e,t,i)=>(nn(e,"symbol"!=typeof t?t+"":t,i),i);class no extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),ns(this,"action"),ns(this,"relatedTarget"),this.action=e,this.relatedTarget=t}}class nl extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),ns(this,"newState"),ns(this,"oldState"),this.newState=e,this.oldState=t}}var nd=Object.defineProperty,nu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nc=(e,t,i)=>(nu(e,t,"read from private field"),i?i.call(e):t.get(e)),nh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nm=(e,t,i,a)=>(nu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),np=(e,t,i)=>(nu(e,t,"access private method"),i);function nv({type:e,text:t,value:i,checked:a}){let r=ag.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=ag.createElement("span");return n.textContent=t,r.append(n),r}function nb(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let nE=ag.createElement("template");nE.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let nf={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ng extends af.HTMLElement{constructor(){super(),nh(this,uH),nh(this,uF),nh(this,uK),nh(this,uY),nh(this,uZ),nh(this,uJ),nh(this,u1),nh(this,u3),nh(this,u4),nh(this,u8),nh(this,u6),nh(this,ct),nh(this,ca),nh(this,cn),nh(this,co),nh(this,cd),nh(this,cc),nh(this,ux,void 0),nh(this,uM,void 0),nh(this,uN,void 0),nh(this,uO,""),nh(this,uP,null),nh(this,uU,new Set),nh(this,uB,void 0),nh(this,uW,!1),nh(this,uq,()=>{let e=nc(this,uU),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));nm(this,uU,t)}),nh(this,uz,()=>{np(this,uJ,u0).call(this,!1),np(this,u1,u2).call(this,!1)}),nh(this,uX,()=>{np(this,uJ,u0).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),nm(this,uB,new MutationObserver(nc(this,uq))),nc(this,uB).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[nf.DISABLED,nf.HIDDEN,nf.STYLE,nf.ANCHOR,iZ.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":np(this,uH,uV).call(this,e);break;case"invoke":np(this,uK,uj).call(this,e);break;case"click":np(this,u3,u5).call(this,e);break;case"toggle":np(this,u8,u7).call(this,e);break;case"focusout":np(this,ct,ci).call(this,e);break;case"keydown":np(this,ca,cr).call(this,e)}}connectedCallback(){var e,t;np(this,uF,u$).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),nm(this,ux,aS(this)),null==(t=null==(e=nc(this,ux))?void 0:e.associateElement)||t.call(e,this),this.hidden||(ak(n_(this),nc(this,uz)),ak(this,nc(this,uX)))}disconnectedCallback(){var e,t;aT(n_(this),nc(this,uz)),aT(this,nc(this,uX)),this.disable(),null==(t=null==(e=nc(this,ux))?void 0:e.unassociateElement)||t.call(e,this),nm(this,ux,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===nf.HIDDEN&&i!==t?(nc(this,uW)||nm(this,uW,!0),this.hidden?np(this,uZ,uQ).call(this):np(this,uY,uG).call(this),this.dispatchEvent(new nl({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===iZ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nc(this,ux))?void 0:a.unassociateElement)||r.call(a,this),nm(this,ux,null)),i&&this.isConnected&&(nm(this,ux,aS(this)),null==(s=null==(n=nc(this,ux))?void 0:n.associateElement)||s.call(n,this))):e===nf.DISABLED&&i!==t?null==i?this.enable():this.disable():e===nf.STYLE&&i!==t&&np(this,uF,u$).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aM(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ny)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&np(this,cc,ch).call(this,t)}focus(){if(nm(this,uM,ax()),this.items.length){np(this,cd,cu).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=np(this,cn,cs).call(this,e);i&&(np(this,cc,ch).call(this,i,"checkbox"===i.type),nc(this,uN)&&!this.hidden&&(null==(t=nc(this,uM))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=np(this,cn,cs).call(this,e))?t:np(this,co,cl).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),np(this,cd,cu).call(this,r[s]),r[s].focus()}}function ny(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function n_(e){var t;return null!=(t=e.getAttribute("bounds")?aD(e,`#${e.getAttribute("bounds")}`):aw(e)||e.parentElement)?t:e}ux=new WeakMap,uM=new WeakMap,uN=new WeakMap,uO=new WeakMap,uP=new WeakMap,uU=new WeakMap,uB=new WeakMap,uW=new WeakMap,uH=new WeakSet,uV=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||nc(this,uq).call(this)},uq=new WeakMap,uF=new WeakSet,u$=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},uK=new WeakSet,uj=function(e){nm(this,uN,e.relatedTarget),aR(this,e.relatedTarget)||(this.hidden=!this.hidden)},uY=new WeakSet,uG=function(){var e;null==(e=nc(this,uN))||e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>np(this,uJ,u0).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),ak(n_(this),nc(this,uz)),ak(this,nc(this,uX))},uZ=new WeakSet,uQ=function(){var e;null==(e=nc(this,uN))||e.setAttribute("aria-expanded","false"),aT(n_(this),nc(this,uz)),aT(this,nc(this,uX))},uz=new WeakMap,uX=new WeakMap,uJ=new WeakSet,u0=function(e,t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:i,y:a}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(na(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=na(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i;let a,r;return{anchor:(i=t.offsetParent,a=e.getBoundingClientRect(),r=i.getBoundingClientRect(),{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=t||(t=this.offsetWidth);let r=n_(this).getBoundingClientRect(),n=this.anchorElement.getBoundingClientRect(),s=r.width-i-t,o=r.height-a-this.offsetHeight,l=r.height-n.height,{style:d}=aO(this.shadowRoot,":host");e||d.setProperty("--media-menu-transition-in","none"),d.setProperty("position","absolute"),d.setProperty("right",`${Math.max(0,s)}px`),d.setProperty("bottom",`${o}px`),d.setProperty("--_menu-max-height",`${l}px`),d.removeProperty("--media-menu-transition-in")},u1=new WeakSet,u2=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=aO(this.shadowRoot,":host");if(e||a.setProperty("--media-menu-transition-in","none"),i){let a=i.offsetHeight,r=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${a}px`),np(this,uJ,u0).call(this,e,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),np(this,uJ,u0).call(this,e);a.removeProperty("--media-menu-transition-in")},u3=new WeakSet,u5=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(nc(this,u4,u9))){null==(t=nc(this,uM))||t.focus(),this.hidden=!0;return}let i=np(this,cn,cs).call(this,e);!i||i.hasAttribute("disabled")||(np(this,cd,cu).call(this,i),this.handleSelect(e))},u4=new WeakSet,u9=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.part.contains("back")&&e.part.contains("button"))},u8=new WeakSet,u7=function(e){if(e.target===this)return;np(this,u6,ce).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new no({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);np(this,u1,u2).call(this,!0)},u6=new WeakSet,ce=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ct=new WeakSet,ci=function(e){var t;aR(this,e.relatedTarget)||(nc(this,uW)&&(null==(t=nc(this,uM))||t.focus()),!nc(this,uN)||nc(this,uN)===e.relatedTarget||this.hidden||(this.hidden=!0))},ca=new WeakSet,cr=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(nc(this,uW)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=nc(this,uM))||n.focus(),nc(this,uW)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},cn=new WeakSet,cs=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},co=new WeakSet,cl=function(){return this.items.find(e=>0===e.tabIndex)},cd=new WeakSet,cu=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},cc=new WeakSet,ch=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},(n="symbol"!=typeof(d1="template")?d1+"":d1)in ng?nd(ng,n,{enumerable:!0,configurable:!0,writable:!0,value:nE}):ng[n]=nE,af.customElements.get("media-chrome-menu")||af.customElements.define("media-chrome-menu",ng);var nA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nk=(e,t,i)=>(nA(e,t,"read from private field"),i?i.call(e):t.get(e)),nT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nw=(e,t,i,a)=>(nA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nS=(e,t,i)=>(nA(e,t,"access private method"),i);class nI extends ng{constructor(){super(...arguments),nT(this,cv),nT(this,cE),nT(this,cm,[]),nT(this,cp,void 0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_AUDIO_TRACK_LIST,iX.MEDIA_AUDIO_TRACK_ENABLED,iX.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===iX.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(nw(this,cm,ai(i)),nS(this,cv,cb).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nS(this,cE,cf))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nS(this,cE,cf))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aw(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return nk(this,cm)}set mediaAudioTrackList(e){nw(this,cm,e),nS(this,cv,cb).call(this)}get mediaAudioTrackEnabled(){return aV(this,iX.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aq(this,iX.MEDIA_AUDIO_TRACK_ENABLED,e)}}cm=new WeakMap,cp=new WeakMap,cv=new WeakSet,cb=function(){if(nk(this,cp)===JSON.stringify(this.mediaAudioTrackList))return;nw(this,cp,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=nv({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(nb(this,"checked-indicator")),this.defaultSlot.append(e)}},cE=new WeakSet,cf=function(){if(null==this.value)return;let e=new af.CustomEvent(iG.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-audio-track-menu")||af.customElements.define("media-audio-track-menu",nI);class nC extends r7{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aM(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new no({relatedTarget:this}))}}af.customElements.get("media-chrome-menu-button")||af.customElements.define("media-chrome-menu-button",nC);let nL=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nR=ag.createElement("template");nR.innerHTML=`
  <slot name="icon">${nL}</slot>
`;class nD extends nC{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_AUDIO_TRACK_ENABLED,iX.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:nR})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i8.AUDIO_TRACKS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aw(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return aV(this,iX.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aq(this,iX.MEDIA_AUDIO_TRACK_ENABLED,e)}}af.customElements.get("media-audio-track-menu-button")||af.customElements.define("media-audio-track-menu-button",nD);let nx=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nM=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nN=ag.createElement("template");nN.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nx}</slot>
    <slot name="off">${nM}</slot>
  </slot>
`;let nO=e=>{e.setAttribute("aria-checked",rh(e))};class nP extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_SUBTITLES_LIST,iX.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nN,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",i8.CLOSED_CAPTIONS()),nO(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_SUBTITLES_SHOWING&&nO(this)}get mediaSubtitlesList(){return nU(this,iX.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nB(this,iX.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nU(this,iX.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nB(this,iX.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new af.CustomEvent(iG.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let nU=(e,t)=>{let i=e.getAttribute(t);return i?rr(i):[]},nB=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=ro(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};af.customElements.get("media-captions-button")||af.customElements.define("media-captions-button",nP);var nW=Object.defineProperty,nH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nV=(e,t,i)=>(nH(e,t,"read from private field"),i?i.call(e):t.get(e)),nq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nF=(e,t,i,a)=>(nH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n$=(e,t,i)=>(nH(e,t,"access private method"),i);let nK=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,nj=ag.createElement("template");nj.innerHTML=ng.template.innerHTML+`
  <slot name="captions-indicator" hidden>${nK}</slot>`;class nY extends ng{constructor(){super(...arguments),nq(this,cy),nq(this,cA),nq(this,cg,void 0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_SUBTITLES_LIST,iX.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_SUBTITLES_LIST&&t!==i?n$(this,cy,c_).call(this):e===iX.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",n$(this,cA,ck))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",n$(this,cA,ck))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aw(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return nG(this,iX.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nZ(this,iX.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nG(this,iX.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nZ(this,iX.MEDIA_SUBTITLES_SHOWING,e)}}cg=new WeakMap,cy=new WeakSet,c_=function(){var e;if(nV(this,cg)===JSON.stringify(this.mediaSubtitlesList))return;nF(this,cg,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=nv({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(nb(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=nv({type:"radio",text:this.formatMenuItemText(t.label,t),value:rs(t),checked:this.value==rs(t)});i.prepend(nb(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(nb(this,"captions-indicator")),this.defaultSlot.append(i)}},cA=new WeakSet,ck=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(iX.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new af.CustomEvent(iG.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new af.CustomEvent(iG.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},(s="symbol"!=typeof(d2="template")?d2+"":d2)in nY?nW(nY,s,{enumerable:!0,configurable:!0,writable:!0,value:nj}):nY[s]=nj;let nG=(e,t)=>{let i=e.getAttribute(t);return i?rr(i):[]},nZ=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=ro(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};af.customElements.get("media-captions-menu")||af.customElements.define("media-captions-menu",nY);let nQ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nz=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nX=ag.createElement("template");nX.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nQ}</slot>
    <slot name="off">${nz}</slot>
  </slot>
`;let nJ=e=>{e.setAttribute("aria-checked",rh(e))};class n0 extends nC{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_SUBTITLES_LIST,iX.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nX,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i8.CLOSED_CAPTIONS()),nJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_SUBTITLES_SHOWING&&nJ(this)}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aw(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return n1(this,iX.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){n2(this,iX.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return n1(this,iX.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){n2(this,iX.MEDIA_SUBTITLES_SHOWING,e)}}let n1=(e,t)=>{let i=e.getAttribute(t);return i?rr(i):[]},n2=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=ro(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};af.customElements.get("media-captions-menu-button")||af.customElements.define("media-captions-menu-button",n0);let n3=ag.createElement("template");n3.innerHTML=`
  <style>
  :host([${iX.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${iX.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let n5=e=>{let t=e.mediaIsCasting?i7.EXIT_CAST():i7.ENTER_CAST();e.setAttribute("aria-label",t)};class n4 extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_IS_CASTING,iX.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:n3,...e})}connectedCallback(){super.connectedCallback(),n5(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_IS_CASTING&&n5(this)}get mediaIsCasting(){return aW(this,iX.MEDIA_IS_CASTING)}set mediaIsCasting(e){aH(this,iX.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aV(this,iX.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){aq(this,iX.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?iG.MEDIA_EXIT_CAST_REQUEST:iG.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new af.CustomEvent(e,{composed:!0,bubbles:!0}))}}af.customElements.get("media-cast-button")||af.customElements.define("media-cast-button",n4);var n9=Object.defineProperty,n8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n7=(e,t,i)=>(n8(e,t,"read from private field"),i?i.call(e):t.get(e)),n6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},se=(e,t,i,a)=>(n8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),st=(e,t,i)=>(n8(e,t,"access private method"),i);let si=ag.createElement("template");si.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let sa="hidden";class sr extends af.HTMLElement{constructor(){super(),n6(this,cS),n6(this,cC),n6(this,cR),n6(this,cx),n6(this,cN),n6(this,cT,void 0),n6(this,cw,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[sa,"anchor"]}handleEvent(e){switch(e.type){case"invoke":st(this,cR,cD).call(this,e);break;case"focusout":st(this,cx,cM).call(this,e);break;case"keydown":st(this,cN,cO).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===sa&&i!==t&&(this.hidden?st(this,cC,cL).call(this):st(this,cS,cI).call(this))}focus(){se(this,cT,ax());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}cT=new WeakMap,cw=new WeakMap,cS=new WeakSet,cI=function(){var e;null==(e=n7(this,cw))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cC=new WeakSet,cL=function(){var e;null==(e=n7(this,cw))||e.setAttribute("aria-expanded","false")},cR=new WeakSet,cD=function(e){se(this,cw,e.relatedTarget),aR(this,e.relatedTarget)||(this.hidden=!this.hidden)},cx=new WeakSet,cM=function(e){var t;aR(this,e.relatedTarget)||(null==(t=n7(this,cT))||t.focus(),!n7(this,cw)||n7(this,cw)===e.relatedTarget||this.hidden||(this.hidden=!0))},cN=new WeakSet,cO=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=n7(this,cT))||n.focus(),this.hidden=!0))},(o="symbol"!=typeof(d3="template")?d3+"":d3)in sr?n9(sr,o,{enumerable:!0,configurable:!0,writable:!0,value:si}):sr[o]=si,af.customElements.get("media-chrome-dialog")||af.customElements.define("media-chrome-dialog",sr);var sn=Object.defineProperty,ss=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},so=(e,t,i)=>(ss(e,t,"read from private field"),i?i.call(e):t.get(e)),sl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sd=(e,t,i,a)=>(ss(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),su=(e,t,i)=>(ss(e,t,"access private method"),i);let sc=ag.createElement("template");sc.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let sh={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class sm extends af.HTMLElement{constructor(){super(),sl(this,cB),sl(this,cH),sl(this,cq),sl(this,cK),sl(this,cY),sl(this,cZ),sl(this,cP,!1),sl(this,cU,void 0),sl(this,c$,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(t=null==(e=this.submenuElement.checkedItems)?void 0:e[0])?void 0:t.text,r=ag.createElement("span");r.textContent=null!=a?a:"",i.replaceChildren(r)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[sh.TYPE,sh.DISABLED,sh.CHECKED,sh.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),sp(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":su(this,cB,cW).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":su(this,cY,cG).call(this,e);break;case"keyup":su(this,cK,cj).call(this,e)}}attributeChangedCallback(e,t,i){e===sh.CHECKED&&sp(this)&&!so(this,cP)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===sh.TYPE&&i!==t?this.role="menuitem"+i:e===sh.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(sh.DISABLED)||this.enable(),this.role="menuitem"+this.type,sd(this,cU,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),su(this,cZ,cQ).call(this)}disconnectedCallback(){this.disable(),su(this,cZ,cQ).call(this),sd(this,cU,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aM(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(sh.TYPE))?e:""}set type(e){this.setAttribute(sh.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(sh.VALUE))?e:this.text}set value(e){this.setAttribute(sh.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(sp(this))return"true"===this.getAttribute("aria-checked")}set checked(e){sp(this)&&(sd(this,cP,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!sp(this)&&this.invokeTargetElement&&aR(this,e.target)&&this.invokeTargetElement.dispatchEvent(new no({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function sp(e){return"radio"===e.type||"checkbox"===e.type}cP=new WeakMap,cU=new WeakMap,cB=new WeakSet,cW=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?su(this,cH,cV).call(this):su(this,cq,cF).call(this))},cH=new WeakSet,cV=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",so(this,c$)),this.submenuElement.addEventListener("addmenuitem",so(this,c$)),this.submenuElement.addEventListener("removemenuitem",so(this,c$)),so(this,c$).call(this)},cq=new WeakSet,cF=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",so(this,c$)),this.submenuElement.removeEventListener("addmenuitem",so(this,c$)),this.submenuElement.removeEventListener("removemenuitem",so(this,c$)),so(this,c$).call(this)},c$=new WeakMap,cK=new WeakSet,cj=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",su(this,cK,cj));return}this.handleClick(e)},cY=new WeakSet,cG=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",su(this,cK,cj));return}this.addEventListener("keyup",su(this,cK,cj),{once:!0})},cZ=new WeakSet,cQ=function(){var e;let t=null==(e=so(this,cU))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},(l="symbol"!=typeof(d5="template")?d5+"":d5)in sm?sn(sm,l,{enumerable:!0,configurable:!0,writable:!0,value:sc}):sm[l]=sc,af.customElements.get("media-chrome-menu-item")||af.customElements.define("media-chrome-menu-item",sm);var sv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sb=(e,t,i)=>(sv(e,t,"read from private field"),i?i.call(e):t.get(e)),sE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sf=(e,t,i,a)=>(sv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sg=(e,t,i)=>(sv(e,t,"access private method"),i);let sy=ag.createElement("template");sy.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class s_ extends af.HTMLElement{constructor(){super(),sE(this,c9),sE(this,c7),sE(this,he),sE(this,hi),sE(this,hr),sE(this,hs),sE(this,hl),sE(this,hu),sE(this,cz,void 0),sE(this,cX,void 0),sE(this,cJ,void 0),sE(this,c0,void 0),sE(this,c1,{}),sE(this,c2,[]),sE(this,c3,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aO(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),sE(this,c5,()=>{let{style:e}=aO(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),sE(this,c4,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sy.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),sf(this,cJ,this.shadowRoot.querySelector("#startpoint")),sf(this,c0,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",iZ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sb(this,cz))?void 0:a.unassociateElement)||r.call(a,this),sf(this,cz,null)),i&&this.isConnected&&(sf(this,cz,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sb(this,cz))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),sg(this,c7,c6).call(this)):(this.range.setAttribute(e,i),sg(this,he,ht).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sb(this,c1).pointer=aO(this.shadowRoot,"#pointer"),sb(this,c1).progress=aO(this.shadowRoot,"#progress"),sb(this,c1).thumb=aO(this.shadowRoot,"#thumb");let r=this.getAttribute(iZ.MEDIA_CONTROLLER);r&&(sf(this,cz,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sb(this,cz))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sb(this,c3)),this.shadowRoot.addEventListener("focusout",sb(this,c5)),sg(this,c7,c6).call(this),ak(this.container,sb(this,c4))}disconnectedCallback(){var e,t;sg(this,he,ht).call(this),null==(t=null==(e=sb(this,cz))?void 0:e.unassociateElement)||t.call(e,this),sf(this,cz,null),this.shadowRoot.removeEventListener("focusin",sb(this,c3)),this.shadowRoot.removeEventListener("focusout",sb(this,c5)),aT(this.container,sb(this,c4))}updatePointerBar(e){var t;null==(t=sb(this,c1).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sb(this,c1).progress)||e.style.setProperty("width",`${i}%`),null==(t=sb(this,c1).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;sb(this,c1).activeSegment=aP(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sf(this,c2,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=ag.createElementNS("http://www.w3.org/2000/svg","rect"),c=aO(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=aN(i,a),n=aN(i,{x:e,y:t}),s=aN(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,sb(this,cJ).getBoundingClientRect(),sb(this,c0).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":sg(this,hu,hc).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":sg(this,hr,hn).call(this,e);break;case"pointerdown":sg(this,hi,ha).call(this,e);break;case"pointerup":sg(this,hs,ho).call(this);break;case"pointerleave":sg(this,hl,hd).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}cz=new WeakMap,cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,c5=new WeakMap,c4=new WeakMap,c9=new WeakSet,c8=function(e){let t=sb(this,c1).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sb(this,c2).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},c7=new WeakSet,c6=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},he=new WeakSet,ht=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=af.window)||e.removeEventListener("pointerup",this),null==(t=af.window)||t.removeEventListener("pointermove",this)},hi=new WeakSet,ha=function(e){var t;sf(this,cX,e.composedPath().includes(this.range)),null==(t=af.window)||t.addEventListener("pointerup",this)},hr=new WeakSet,hn=function(e){var t;"mouse"!==e.pointerType&&sg(this,hi,ha).call(this,e),this.addEventListener("pointerleave",this),null==(t=af.window)||t.addEventListener("pointermove",this)},hs=new WeakSet,ho=function(){var e;null==(e=af.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hl=new WeakSet,hd=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=af.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sb(this,c1).activeSegment)||t.style.removeProperty("transform")},hu=new WeakSet,hc=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),sg(this,c9,c8).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sb(this,cX))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},af.customElements.get("media-chrome-range")||af.customElements.define("media-chrome-range",s_);var sA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sk=(e,t,i)=>(sA(e,t,"read from private field"),i?i.call(e):t.get(e)),sT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sw=(e,t,i,a)=>(sA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sS=ag.createElement("template");sS.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class sI extends af.HTMLElement{constructor(){super(),sT(this,hh,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sS.content.cloneNode(!0)))}static get observedAttributes(){return[iZ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sk(this,hh))?void 0:a.unassociateElement)||r.call(a,this),sw(this,hh,null)),i&&this.isConnected&&(sw(this,hh,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sk(this,hh))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(iZ.MEDIA_CONTROLLER);a&&(sw(this,hh,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sk(this,hh))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sk(this,hh))?void 0:e.unassociateElement)||t.call(e,this),sw(this,hh,null)}}hh=new WeakMap,af.customElements.get("media-control-bar")||af.customElements.define("media-control-bar",sI);var sC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sL=(e,t,i)=>(sC(e,t,"read from private field"),i?i.call(e):t.get(e)),sR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sD=(e,t,i,a)=>(sC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sx=ag.createElement("template");sx.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class sM extends af.HTMLElement{constructor(){super(),sR(this,hm,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sx.content.cloneNode(!0)))}static get observedAttributes(){return[iZ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sL(this,hm))?void 0:a.unassociateElement)||r.call(a,this),sD(this,hm,null)),i&&this.isConnected&&(sD(this,hm,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sL(this,hm))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=aO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(iZ.MEDIA_CONTROLLER);r&&(sD(this,hm,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sL(this,hm))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sL(this,hm))?void 0:e.unassociateElement)||t.call(e,this),sD(this,hm,null)}}hm=new WeakMap,af.customElements.get("media-text-display")||af.customElements.define("media-text-display",sM);var sN=sM,sO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sP=(e,t,i)=>(sO(e,t,"read from private field"),i?i.call(e):t.get(e)),sU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sB=(e,t,i,a)=>(sO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sW extends sM{constructor(){super(),sU(this,hp,void 0),sB(this,hp,this.shadowRoot.querySelector("slot")),sP(this,hp).textContent=au(0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===iX.MEDIA_DURATION&&(sP(this,hp).textContent=au(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aU(this,iX.MEDIA_DURATION)}set mediaDuration(e){aB(this,iX.MEDIA_DURATION,e)}}hp=new WeakMap,af.customElements.get("media-duration-display")||af.customElements.define("media-duration-display",sW);let sH=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,sV=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sq=ag.createElement("template");sq.innerHTML=`
  <style>
  :host([${iX.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${iX.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${sH}</slot>
    <slot name="exit">${sV}</slot>
  </slot>
`;let sF=e=>{let t=e.mediaIsFullscreen?i7.EXIT_FULLSCREEN():i7.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class s$ extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_IS_FULLSCREEN,iX.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sq,...e})}connectedCallback(){super.connectedCallback(),sF(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_IS_FULLSCREEN&&sF(this)}get mediaFullscreenUnavailable(){return aV(this,iX.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){aq(this,iX.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return aW(this,iX.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){aH(this,iX.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?iG.MEDIA_EXIT_FULLSCREEN_REQUEST:iG.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new af.CustomEvent(e,{composed:!0,bubbles:!0}))}}af.customElements.get("media-fullscreen-button")||af.customElements.define("media-fullscreen-button",s$);let{MEDIA_TIME_IS_LIVE:sK,MEDIA_PAUSED:sj}=iX,{MEDIA_SEEK_TO_LIVE_REQUEST:sY,MEDIA_PLAY_REQUEST:sG}=iG,sZ=ag.createElement("template");sZ.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${sK}]:not([${sj}])) slot[name=indicator] > *,
  :host([${sK}]:not([${sj}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${sK}]:not([${sj}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let sQ=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?i7.SEEK_LIVE():i7.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class sz extends r7{static get observedAttributes(){return[...super.observedAttributes,sj,sK]}constructor(e={}){super({slotTemplate:sZ,...e})}connectedCallback(){sQ(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),sQ(this)}get mediaPaused(){return aW(this,iX.MEDIA_PAUSED)}set mediaPaused(e){aH(this,iX.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return aW(this,iX.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){aH(this,iX.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new af.CustomEvent(sY,{composed:!0,bubbles:!0})),this.hasAttribute(sj)&&this.dispatchEvent(new af.CustomEvent(sG,{composed:!0,bubbles:!0})))}}af.customElements.get("media-live-button")||af.customElements.define("media-live-button",sz);var sX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sJ=(e,t,i)=>(sX(e,t,"read from private field"),i?i.call(e):t.get(e)),s0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s1=(e,t,i,a)=>(sX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s2="loadingdelay",s3=ag.createElement("template"),s5=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;s3.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${iX.MEDIA_LOADING}]:not([${iX.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${iX.MEDIA_LOADING}]:not([${iX.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${iX.MEDIA_LOADING}]:not([${iX.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${s5}</slot>
<div id="status" role="status" aria-live="polite">${i8.MEDIA_LOADING()}</div>
`;class s4 extends af.HTMLElement{constructor(){if(super(),s0(this,hv,void 0),s0(this,hb,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=s3.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[iZ.MEDIA_CONTROLLER,iX.MEDIA_PAUSED,iX.MEDIA_LOADING,s2]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===s2&&t!==i?this.loadingDelay=Number(i):e===iZ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sJ(this,hv))?void 0:a.unassociateElement)||r.call(a,this),s1(this,hv,null)),i&&this.isConnected&&(s1(this,hv,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sJ(this,hv))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(iZ.MEDIA_CONTROLLER);a&&(s1(this,hv,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sJ(this,hv))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sJ(this,hv))?void 0:e.unassociateElement)||t.call(e,this),s1(this,hv,null)}get loadingDelay(){return sJ(this,hb)}set loadingDelay(e){s1(this,hb,e);let{style:t}=aO(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return aW(this,iX.MEDIA_PAUSED)}set mediaPaused(e){aH(this,iX.MEDIA_PAUSED,e)}get mediaLoading(){return aW(this,iX.MEDIA_LOADING)}set mediaLoading(e){aH(this,iX.MEDIA_LOADING,e)}}hv=new WeakMap,hb=new WeakMap,af.customElements.get("media-loading-indicator")||af.customElements.define("media-loading-indicator",s4);let{MEDIA_VOLUME_LEVEL:s9}=iX,s8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,s7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,s6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,oe=ag.createElement("template");oe.innerHTML=`
  <style>
  
  :host(:not([${s9}])) slot:not([name=high]):not([name=icon]), 
  :host([${s9}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${s9}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${s9}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${s9}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${s8}</slot>
    <slot name="low">${s7}</slot>
    <slot name="medium">${s7}</slot>
    <slot name="high">${s6}</slot>
  </slot>
`;let ot=e=>{let t="off"===e.mediaVolumeLevel?i7.UNMUTE():i7.MUTE();e.setAttribute("aria-label",t)};class oi extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:oe,...e})}connectedCallback(){ot(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===iX.MEDIA_VOLUME_LEVEL&&ot(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return aV(this,iX.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){aq(this,iX.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?iG.MEDIA_UNMUTE_REQUEST:iG.MEDIA_MUTE_REQUEST;this.dispatchEvent(new af.CustomEvent(e,{composed:!0,bubbles:!0}))}}af.customElements.get("media-mute-button")||af.customElements.define("media-mute-button",oi);let oa=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,or=ag.createElement("template");or.innerHTML=`
  <style>
  :host([${iX.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${iX.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${oa}</slot>
    <slot name="exit">${oa}</slot>
  </slot>
`;let on=e=>{let t=e.mediaIsPip?i7.EXIT_PIP():i7.ENTER_PIP();e.setAttribute("aria-label",t)};class os extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_IS_PIP,iX.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:or,...e})}connectedCallback(){on(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===iX.MEDIA_IS_PIP&&on(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return aV(this,iX.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){aq(this,iX.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return aW(this,iX.MEDIA_IS_PIP)}set mediaIsPip(e){aH(this,iX.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?iG.MEDIA_EXIT_PIP_REQUEST:iG.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new af.CustomEvent(e,{composed:!0,bubbles:!0}))}}af.customElements.get("media-pip-button")||af.customElements.define("media-pip-button",os);var oo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ol=(e,t,i)=>(oo(e,t,"read from private field"),i?i.call(e):t.get(e)),od=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let ou="rates",oc=[1,1.2,1.5,1.7,2],oh=ag.createElement("template");oh.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class om extends r7{constructor(e={}){super({slotTemplate:oh,...e}),od(this,hE,new rt(this,ou,{defaultValue:oc})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PLAYBACK_RATE,ou]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ou&&(ol(this,hE).value=i),e===iX.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",i8.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return ol(this,hE)}set rates(e){e?Array.isArray(e)&&(ol(this,hE).value=e.join(" ")):ol(this,hE).value=""}get mediaPlaybackRate(){return aU(this,iX.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aB(this,iX.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new af.CustomEvent(iG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}hE=new WeakMap,af.customElements.get("media-playback-rate-button")||af.customElements.define("media-playback-rate-button",om);var op=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ov=(e,t,i)=>(op(e,t,"read from private field"),i?i.call(e):t.get(e)),ob=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oE=(e,t,i)=>(op(e,t,"access private method"),i);let of={RATES:"rates"};class og extends ng{constructor(){super(),ob(this,hg),ob(this,h_),ob(this,hf,new rt(this,of.RATES,{defaultValue:oc})),oE(this,hg,hy).call(this)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PLAYBACK_RATE,of.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===of.RATES&&t!=i&&(ov(this,hf).value=i,oE(this,hg,hy).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",oE(this,h_,hA))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",oE(this,h_,hA))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aw(this).querySelector("media-playback-rate-menu-button")}get rates(){return ov(this,hf)}set rates(e){e?Array.isArray(e)&&(ov(this,hf).value=e.join(" ")):ov(this,hf).value="",oE(this,hg,hy).call(this)}get mediaPlaybackRate(){return aU(this,iX.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aB(this,iX.MEDIA_PLAYBACK_RATE,e)}}hf=new WeakMap,hg=new WeakSet,hy=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=nv({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(nb(this,"checked-indicator")),this.defaultSlot.append(t)}},h_=new WeakSet,hA=function(){if(!this.value)return;let e=new af.CustomEvent(iG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-playback-rate-menu")||af.customElements.define("media-playback-rate-menu",og);var oy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o_=(e,t,i)=>(oy(e,t,"read from private field"),i?i.call(e):t.get(e)),oA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let ok="rates",oT=[1,1.2,1.5,1.7,2],ow=ag.createElement("template");ow.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class oS extends nC{constructor(e={}){super({slotTemplate:ow,...e}),oA(this,hk,new rt(this,ok,{defaultValue:oT})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PLAYBACK_RATE,ok]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ok&&(o_(this,hk).value=i),e===iX.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",i8.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aw(this).querySelector("media-playback-rate-menu")}get rates(){return o_(this,hk)}set rates(e){e?Array.isArray(e)&&(o_(this,hk).value=e.join(" ")):o_(this,hk).value=""}get mediaPlaybackRate(){return aU(this,iX.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aB(this,iX.MEDIA_PLAYBACK_RATE,e)}}hk=new WeakMap,af.customElements.get("media-playback-rate-menu-button")||af.customElements.define("media-playback-rate-menu-button",oS);let oI=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,oC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oL=ag.createElement("template");oL.innerHTML=`
  <style>
  :host([${iX.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${iX.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${oI}</slot>
    <slot name="pause">${oC}</slot>
  </slot>
`;let oR=e=>{let t=e.mediaPaused?i7.PLAY():i7.PAUSE();e.setAttribute("aria-label",t)};class oD extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PAUSED,iX.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:oL,...e})}connectedCallback(){oR(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===iX.MEDIA_PAUSED&&oR(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return aW(this,iX.MEDIA_PAUSED)}set mediaPaused(e){aH(this,iX.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?iG.MEDIA_PLAY_REQUEST:iG.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new af.CustomEvent(e,{composed:!0,bubbles:!0}))}}af.customElements.get("media-play-button")||af.customElements.define("media-play-button",oD);let ox={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},oM=ag.createElement("template");oM.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let oN=e=>{e.style.removeProperty("background-image")},oO=(e,t)=>{e.style["background-image"]=`url('${t}')`};class oP extends af.HTMLElement{static get observedAttributes(){return[ox.PLACEHOLDER_SRC,ox.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oM.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===ox.SRC&&(null==i?this.image.removeAttribute(ox.SRC):this.image.setAttribute(ox.SRC,i)),e===ox.PLACEHOLDER_SRC&&(null==i?oN(this.image):oO(this.image,i))}get placeholderSrc(){return aV(this,ox.PLACEHOLDER_SRC)}set placeholderSrc(e){aq(this,ox.SRC,e)}get src(){return aV(this,ox.SRC)}set src(e){aq(this,ox.SRC,e)}}af.customElements.get("media-poster-image")||af.customElements.define("media-poster-image",oP);var oU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oB=(e,t,i)=>(oU(e,t,"read from private field"),i?i.call(e):t.get(e)),oW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oH=(e,t,i,a)=>(oU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oV extends sN{constructor(){super(),oW(this,hT,void 0),oH(this,hT,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(oB(this,hT).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return aV(this,iX.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){aq(this,iX.MEDIA_PREVIEW_CHAPTER,e)}}hT=new WeakMap,af.customElements.get("media-preview-chapter-display")||af.customElements.define("media-preview-chapter-display",oV);var oq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oF=(e,t,i)=>(oq(e,t,"read from private field"),i?i.call(e):t.get(e)),o$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oK=(e,t,i,a)=>(oq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oj=ag.createElement("template");oj.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class oY extends af.HTMLElement{constructor(){super(),o$(this,hw,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oj.content.cloneNode(!0)))}static get observedAttributes(){return[iZ.MEDIA_CONTROLLER,iX.MEDIA_PREVIEW_IMAGE,iX.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(iZ.MEDIA_CONTROLLER);a&&(oK(this,hw,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oF(this,hw))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oF(this,hw))?void 0:e.unassociateElement)||t.call(e,this),oK(this,hw,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[iX.MEDIA_PREVIEW_IMAGE,iX.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===iZ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oF(this,hw))?void 0:a.unassociateElement)||r.call(a,this),oK(this,hw,null)),i&&this.isConnected&&(oK(this,hw,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oF(this,hw))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return aV(this,iX.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aq(this,iX.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(iX.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(iX.MEDIA_PREVIEW_COORDS);return}this.setAttribute(iX.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=aO(this.shadowRoot,":host"),b=aO(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),f=m?"min":"max";v.setProperty(`${f}-width`,"initial","important"),v.setProperty(`${f}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let g=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};E.src!==s&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g()},E.src=s,g()),g(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}hw=new WeakMap,af.customElements.get("media-preview-thumbnail")||af.customElements.define("media-preview-thumbnail",oY);var oG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oZ=(e,t,i)=>(oG(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oz=(e,t,i,a)=>(oG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oX extends sM{constructor(){super(),oQ(this,hS,void 0),oz(this,hS,this.shadowRoot.querySelector("slot")),oZ(this,hS).textContent=au(0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_PREVIEW_TIME&&null!=i&&(oZ(this,hS).textContent=au(i))}get mediaPreviewTime(){return aU(this,iX.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aB(this,iX.MEDIA_PREVIEW_TIME,e)}}hS=new WeakMap,af.customElements.get("media-preview-time-display")||af.customElements.define("media-preview-time-display",oX);var oJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o0=(e,t,i)=>(oJ(e,t,"read from private field"),i?i.call(e):t.get(e)),o1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o2=(e,t,i,a)=>(oJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o3=(e,t,i)=>(oJ(e,t,"access private method"),i);class o5 extends ng{constructor(){super(...arguments),o1(this,hL),o1(this,hD),o1(this,hI,[]),o1(this,hC,void 0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_RENDITION_LIST,iX.MEDIA_RENDITION_SELECTED,iX.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===iX.MEDIA_RENDITION_LIST&&t!==i&&(o2(this,hI,i6(i)),o3(this,hL,hR).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",o3(this,hD,hx))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",o3(this,hD,hx))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aw(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return o0(this,hI)}set mediaRenditionList(e){o2(this,hI,e),o3(this,hL,hR).call(this)}get mediaRenditionSelected(){return aV(this,iX.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aq(this,iX.MEDIA_RENDITION_SELECTED,e)}}hI=new WeakMap,hC=new WeakMap,hL=new WeakSet,hR=function(){if(o0(this,hC)===JSON.stringify(this.mediaRenditionList))return;o2(this,hC,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=nv({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(nb(this,"checked-indicator")),this.defaultSlot.append(e)}let i=nv({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t});i.prepend(nb(this,"checked-indicator")),this.defaultSlot.append(i)},hD=new WeakSet,hx=function(){if(null==this.value)return;let e=new af.CustomEvent(iG.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-rendition-menu")||af.customElements.define("media-rendition-menu",o5);let o4=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,o9=ag.createElement("template");o9.innerHTML=`
  <slot name="icon">${o4}</slot>
`;class o8 extends nC{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_RENDITION_SELECTED,iX.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:o9})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i8.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aw(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aV(this,iX.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aq(this,iX.MEDIA_RENDITION_SELECTED,e)}}af.customElements.get("media-rendition-menu-button")||af.customElements.define("media-rendition-menu-button",o8);let o7={SEEK_OFFSET:"seekoffset"},o6=ag.createElement("template");o6.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class le extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_CURRENT_TIME,o7.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:o6,...e})}connectedCallback(){this.seekOffset=aU(this,o7.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===o7.SEEK_OFFSET&&(this.seekOffset=aU(this,o7.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aU(this,o7.SEEK_OFFSET,30)}set seekOffset(e){aB(this,o7.SEEK_OFFSET,e),this.setAttribute("aria-label",i7.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),aI(aL(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aU(this,iX.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aB(this,iX.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new af.CustomEvent(iG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}af.customElements.get("media-seek-backward-button")||af.customElements.define("media-seek-backward-button",le);let lt={SEEK_OFFSET:"seekoffset"},li=ag.createElement("template");li.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class la extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_CURRENT_TIME,lt.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:li,...e})}connectedCallback(){this.seekOffset=aU(this,lt.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===lt.SEEK_OFFSET&&(this.seekOffset=aU(this,lt.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aU(this,lt.SEEK_OFFSET,30)}set seekOffset(e){aB(this,lt.SEEK_OFFSET,e),this.setAttribute("aria-label",i7.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),aI(aL(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aU(this,iX.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aB(this,iX.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new af.CustomEvent(iG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}af.customElements.get("media-seek-forward-button")||af.customElements.define("media-seek-forward-button",la);var lr=Object.defineProperty;let ln=ag.createElement("template");ln.innerHTML=ng.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class ls extends ng{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aw(this).querySelector("media-settings-menu-button")}}(d="symbol"!=typeof(d4="template")?d4+"":d4)in ls?lr(ls,d,{enumerable:!0,configurable:!0,writable:!0,value:ln}):ls[d]=ln,af.customElements.get("media-settings-menu")||af.customElements.define("media-settings-menu",ls);let lo=ag.createElement("template");lo.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class ll extends nC{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:lo})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",i8.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aw(this).querySelector("media-settings-menu")}}af.customElements.get("media-settings-menu-button")||af.customElements.define("media-settings-menu-button",ll);var ld=Object.defineProperty;let lu=ag.createElement("template");lu.innerHTML=sm.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(hM=lu.content)?void 0:hM.querySelector)&&(lu.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class lc extends sm{}(u="symbol"!=typeof(d9="template")?d9+"":d9)in lc?ld(lc,u,{enumerable:!0,configurable:!0,writable:!0,value:lu}):lc[u]=lu,af.customElements.get("media-settings-menu-item")||af.customElements.define("media-settings-menu-item",lc);var lh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lm=(e,t,i)=>(lh(e,t,"read from private field"),i?i.call(e):t.get(e)),lp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lv=(e,t,i,a)=>(lh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lb={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},lE=[...Object.values(lb),iX.MEDIA_CURRENT_TIME,iX.MEDIA_DURATION,iX.MEDIA_SEEKABLE],lf=["Enter"," "],lg="&nbsp;/&nbsp;",ly=(e,{timesSep:t=lg}={})=>{var i,a;let r=e.hasAttribute(lb.REMAINING),n=e.hasAttribute(lb.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?au(0-(l-s)):au(s);return n?`${d}${t}${au(l)}`:d},l_=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(lb.REMAINING),s=e.hasAttribute(lb.SHOW_DURATION),o=n?ad(0-(r-i)):ad(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=ad(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class lA extends sM{constructor(){super(),lp(this,hN,void 0),lv(this,hN,this.shadowRoot.querySelector("slot")),lm(this,hN).innerHTML=`${ly(this)}`}static get observedAttributes(){return[...super.observedAttributes,...lE,"disabled"]}connectedCallback(){let{style:e}=aO(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",i8.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!lf.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!lf.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){lE.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return aW(this,lb.REMAINING)}set remaining(e){aH(this,lb.REMAINING,e)}get showDuration(){return aW(this,lb.SHOW_DURATION)}set showDuration(e){aH(this,lb.SHOW_DURATION,e)}get noToggle(){return aW(this,lb.NO_TOGGLE)}set noToggle(e){aH(this,lb.NO_TOGGLE,e)}get mediaDuration(){return aU(this,iX.MEDIA_DURATION)}set mediaDuration(e){aB(this,iX.MEDIA_DURATION,e)}get mediaCurrentTime(){return aU(this,iX.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aB(this,iX.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(iX.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(iX.MEDIA_SEEKABLE);return}this.setAttribute(iX.MEDIA_SEEKABLE,e.join(":"))}update(){let e=ly(this);l_(this),e!==lm(this,hN).innerHTML&&(lm(this,hN).innerHTML=e)}}hN=new WeakMap,af.customElements.get("media-time-display")||af.customElements.define("media-time-display",lA);var lk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lT=(e,t,i)=>(lk(e,t,"read from private field"),i?i.call(e):t.get(e)),lw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lS=(e,t,i,a)=>(lk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lI=(e,t,i,a)=>({set _(value){lS(e,t,value,i)},get _(){return lT(e,t,a)}});class lC{constructor(e,t,i){lw(this,hO,void 0),lw(this,hP,void 0),lw(this,hU,void 0),lw(this,hB,void 0),lw(this,hW,void 0),lw(this,hH,void 0),lw(this,hV,void 0),lw(this,hq,void 0),lw(this,hF,0),lw(this,h$,(e=performance.now())=>{lS(this,hF,requestAnimationFrame(lT(this,h$))),lS(this,hB,performance.now()-lT(this,hU));let t=1e3/this.fps;if(lT(this,hB)>t){lS(this,hU,e-lT(this,hB)%t);let i=1e3/((e-lT(this,hP))/++lI(this,hW)._),a=(e-lT(this,hH))/1e3/this.duration,r=lT(this,hV)+a*this.playbackRate;r-lT(this,hO).valueAsNumber>0?lS(this,hq,this.playbackRate/this.duration/i):(lS(this,hq,.995*lT(this,hq)),r=lT(this,hO).valueAsNumber+lT(this,hq)),this.callback(r)}}),lS(this,hO,e),this.callback=t,this.fps=i}start(){0===lT(this,hF)&&(lS(this,hU,performance.now()),lS(this,hP,lT(this,hU)),lS(this,hW,0),lT(this,h$).call(this))}stop(){0!==lT(this,hF)&&(cancelAnimationFrame(lT(this,hF)),lS(this,hF,0))}update({start:e,duration:t,playbackRate:i}){let a=e-lT(this,hO).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lS(this,hV,e),lS(this,hH,performance.now()),this.duration=t,this.playbackRate=i}}hO=new WeakMap,hP=new WeakMap,hU=new WeakMap,hB=new WeakMap,hW=new WeakMap,hH=new WeakMap,hV=new WeakMap,hq=new WeakMap,hF=new WeakMap,h$=new WeakMap;var lL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lR=(e,t,i)=>(lL(e,t,"read from private field"),i?i.call(e):t.get(e)),lD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lx=(e,t,i,a)=>(lL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lM=(e,t,i)=>(lL(e,t,"access private method"),i);let lN=e=>{let t=e.range,i=ad(+lU(e)),a=ad(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},lO=ag.createElement("template");lO.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${iX.MEDIA_PREVIEW_IMAGE}], [${iX.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${iX.MEDIA_PREVIEW_IMAGE}], [${iX.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${iX.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${iX.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${iX.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${iX.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${iX.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${iX.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${iX.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${iX.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${iX.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${iX.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${iX.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
      transform: translateX(0);
    }

    :host([${iX.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let lP=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},lU=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class lB extends s_{constructor(){super(),lD(this,h0),lD(this,h2),lD(this,h4),lD(this,h8),lD(this,h6),lD(this,mt),lD(this,ma),lD(this,mn),lD(this,hK,void 0),lD(this,hj,void 0),lD(this,hY,void 0),lD(this,hG,void 0),lD(this,hZ,void 0),lD(this,hQ,void 0),lD(this,hz,void 0),lD(this,hX,void 0),lD(this,hJ,void 0),lD(this,h5,e=>{this.dragging||(this.range.valueAsNumber=e,this.updateBar())}),this.container.appendChild(lO.content.cloneNode(!0)),lx(this,hY,this.shadowRoot.querySelectorAll('[part~="box"]')),lx(this,hZ,this.shadowRoot.querySelector('[part~="preview-box"]')),lx(this,hQ,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);lx(this,hz,parseInt(e.getPropertyValue("--media-box-padding-left"))),lx(this,hX,parseInt(e.getPropertyValue("--media-box-padding-right"))),lx(this,hj,new lC(this.range,lR(this,h5),60))}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_PAUSED,iX.MEDIA_DURATION,iX.MEDIA_SEEKABLE,iX.MEDIA_CURRENT_TIME,iX.MEDIA_PREVIEW_IMAGE,iX.MEDIA_PREVIEW_TIME,iX.MEDIA_PREVIEW_CHAPTER,iX.MEDIA_BUFFERED,iX.MEDIA_PLAYBACK_RATE,iX.MEDIA_LOADING,iX.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",i8.SEEK()),lM(this,h0,h1).call(this),lx(this,hK,this.getRootNode()),null==(e=lR(this,hK))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),lM(this,h0,h1).call(this),null==(e=lR(this,hK))||e.removeEventListener("transitionstart",this),lx(this,hK,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===iX.MEDIA_CURRENT_TIME||e===iX.MEDIA_PAUSED||e===iX.MEDIA_ENDED||e===iX.MEDIA_LOADING||e===iX.MEDIA_DURATION||e===iX.MEDIA_SEEKABLE?(lR(this,hj).update({start:lP(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),lM(this,h0,h1).call(this),lN(this)):e===iX.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===iX.MEDIA_DURATION||e===iX.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lR(this,hJ),this.updateBar()))}get mediaChaptersCues(){return lR(this,hJ)}set mediaChaptersCues(e){var t;lx(this,hJ,e),this.updateSegments(null==(t=lR(this,hJ))?void 0:t.map(e=>({start:lP(this,e.startTime),end:lP(this,e.endTime)})))}get mediaPaused(){return aW(this,iX.MEDIA_PAUSED)}set mediaPaused(e){aH(this,iX.MEDIA_PAUSED,e)}get mediaLoading(){return aW(this,iX.MEDIA_LOADING)}set mediaLoading(e){aH(this,iX.MEDIA_LOADING,e)}get mediaDuration(){return aU(this,iX.MEDIA_DURATION)}set mediaDuration(e){aB(this,iX.MEDIA_DURATION,e)}get mediaCurrentTime(){return aU(this,iX.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aB(this,iX.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aU(this,iX.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aB(this,iX.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(iX.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(iX.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(iX.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(iX.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(iX.MEDIA_SEEKABLE);return}this.setAttribute(iX.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aV(this,iX.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aq(this,iX.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aU(this,iX.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aB(this,iX.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return aW(this,iX.MEDIA_ENDED)}set mediaEnded(e){aH(this,iX.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=lP(this,r)}let{style:a}=aO(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aO(this.shadowRoot,"#current-rail"),t=aO(this.shadowRoot,'[part~="current-box"]'),i=lM(this,h4,h9).call(this,lR(this,hQ)),a=lM(this,h8,h7).call(this,i,this.range.valueAsNumber),r=lM(this,h6,me).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":lM(this,mn,ms).call(this);break;case"pointermove":lM(this,mt,mi).call(this,e);break;case"pointerup":case"pointerleave":lM(this,ma,mr).call(this,null);break;case"transitionstart":aR(e.target,this)&&setTimeout(()=>lM(this,h0,h1).call(this),0)}}}hK=new WeakMap,hj=new WeakMap,hY=new WeakMap,hG=new WeakMap,hZ=new WeakMap,hQ=new WeakMap,hz=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakSet,h1=function(){lM(this,h2,h3).call(this)?lR(this,hj).start():lR(this,hj).stop()},h2=new WeakSet,h3=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},h5=new WeakMap,h4=new WeakSet,h9=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aD(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},h8=new WeakSet,h7=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},h6=new WeakSet,me=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+lR(this,hz)){let t=e.range.left-e.bounds.left-lR(this,hz);return`${n-i/2+t}px`}if(n>r-lR(this,hX)){let t=e.bounds.right-e.range.right-lR(this,hX);return`${n+i/2-t-e.range.width}px`}return 0},mt=new WeakSet,mi=function(e){let t=[...lR(this,hY)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){lM(this,ma,mr).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=aO(this.shadowRoot,"#preview-rail"),r=aO(this.shadowRoot,'[part~="preview-box"]'),n=lM(this,h4,h9).call(this,lR(this,hZ)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=lM(this,h8,h7).call(this,n,s),l=lM(this,h6,me).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(lR(this,hG))-Math.round(s*i))&&s>.01&&s<.99||(lx(this,hG,s*i),lM(this,ma,mr).call(this,lR(this,hG)))},ma=new WeakSet,mr=function(e){this.dispatchEvent(new af.CustomEvent(iG.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},mn=new WeakSet,ms=function(){lR(this,hj).stop();let e=lU(this);this.dispatchEvent(new af.CustomEvent(iG.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},af.customElements.get("media-time-range")||af.customElements.define("media-time-range",lB);let lW=e=>e.mediaMuted?0:e.mediaVolume,lH=({value:e})=>`${Math.round(100*e)}%`;class lV extends s_{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_VOLUME,iX.MEDIA_MUTED,iX.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new af.CustomEvent(iG.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",i8.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===iX.MEDIA_VOLUME||e===iX.MEDIA_MUTED)&&(this.range.valueAsNumber=lW(this),this.range.setAttribute("aria-valuetext",lH(this.range)),this.updateBar())}get mediaVolume(){return aU(this,iX.MEDIA_VOLUME,1)}set mediaVolume(e){aB(this,iX.MEDIA_VOLUME,e)}get mediaMuted(){return aW(this,iX.MEDIA_MUTED)}set mediaMuted(e){aH(this,iX.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aV(this,iX.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){aq(this,iX.MEDIA_VOLUME_UNAVAILABLE,e)}}af.customElements.get("media-volume-range")||af.customElements.define("media-volume-range",lV);var lq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lF=(e,t,i)=>(lq(e,t,"read from private field"),i?i.call(e):t.get(e)),l$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lK=(e,t,i,a)=>(lq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lj=(e,t,i)=>(lq(e,t,"access private method"),i);let lY=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function lG(e,t,i){let a=ag.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=ag.createElement("span");return r.textContent=e,a.append(r),a}function lZ(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let lQ=ag.createElement("template");lQ.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${lY}</slot>
`;class lz extends af.HTMLElement{constructor(e={}){super(),l$(this,mh),l$(this,mb),l$(this,mf),l$(this,my),l$(this,mA),l$(this,mT),l$(this,mo,void 0),l$(this,ml,""),l$(this,md,null),l$(this,mu,!1),l$(this,mc,e=>{this.handleClick(e)}),l$(this,mp,e=>{let{key:t}=e;if("Escape"===t){this.removeEventListener("keyup",lF(this,mp));return}if("Meta"===t){lK(this,mu,!1);return}lj(this,mh,mm).call(this,e)}),l$(this,mv,e=>{let{key:t,altKey:i}=e;if(i){this.removeEventListener("keyup",lF(this,mp));return}if("Meta"===t){lK(this,mu,!0);return}if(this.keysUsed.includes(t)&&e.preventDefault(),lF(this,mu)&&this.keysUsed.includes(t)){lj(this,mh,mm).call(this,e);return}this.addEventListener("keyup",lF(this,mp),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=lQ.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled","style",iZ.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&lj(this,my,m_).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",lF(this,mc)),this.addEventListener("keydown",lF(this,mv))}disable(){this.removeEventListener("click",lF(this,mc)),this.removeEventListener("keyup",lF(this,mp))}attributeChangedCallback(e,t,i){var a,r,n,s,o;"style"===e&&i!==t?lj(this,mb,mE).call(this):e===iZ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=lF(this,mo))?void 0:a.unassociateElement)||r.call(a,this),lK(this,mo,null)),i&&this.isConnected&&(lK(this,mo,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lF(this,mo))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;lj(this,mb,mE).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(iZ.MEDIA_CONTROLLER);a&&(lK(this,mo,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lF(this,mo))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=lF(this,mo))?void 0:e.unassociateElement)||t.call(e,this),lK(this,mo,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=lj(this,mf,mg).call(this,e);i&&lj(this,my,m_).call(this,i,t)}handleMovement(e){let t;let{key:i}=e,a=this.options,r=lj(this,mf,mg).call(this,e);switch(r||(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=lj(this,mA,mk).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=lj(this,mf,mg).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}mo=new WeakMap,ml=new WeakMap,md=new WeakMap,mu=new WeakMap,mc=new WeakMap,mh=new WeakSet,mm=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},mp=new WeakMap,mv=new WeakMap,mb=new WeakSet,mE=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=(null==(e=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:e.trim())==="row";t.setAttribute("media",i?"":"width:0")},mf=new WeakSet,mg=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},my=new WeakSet,m_=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},mA=new WeakSet,mk=function(e){lj(this,mT,mw).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));lK(this,ml,lF(this,ml)+e);let a=lF(this,ml).split("").every(t=>t===e),r=t.slice(i+(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(lF(this,ml))),n=t.slice(0,i-(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(lF(this,ml))),s=[],o=[];return a&&(s=t.slice(i+(a?1:0)).filter(t=>t.textContent.startsWith(e)),o=t.slice(0,i-(a?1:0)).filter(t=>t.textContent.startsWith(e))),[...r,...n,...s,...o][0]},mT=new WeakSet,mw=function(){clearTimeout(lF(this,md)),lK(this,md,null),lK(this,md,setTimeout(()=>{lK(this,ml,""),lK(this,md,null)},500))},af.customElements.get("media-chrome-listbox")||af.customElements.define("media-chrome-listbox",lz);var lX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lJ=(e,t,i)=>(lX(e,t,"read from private field"),i?i.call(e):t.get(e)),l0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l1=(e,t,i,a)=>(lX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l2=(e,t,i)=>(lX(e,t,"access private method"),i);let l3=ag.createElement("template");l3.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let l5={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class l4 extends af.HTMLElement{constructor(){super(),l0(this,mC),l0(this,mS,!1),l0(this,mI,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l3.content.cloneNode(!0)))}static get observedAttributes(){return[l5.DISABLED,l5.SELECTED,l5.VALUE]}get value(){var e;return null!=(e=this.getAttribute(l5.VALUE))?e:this.text}set value(e){this.setAttribute(l5.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){l1(this,mS,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==l5.SELECTED||lJ(this,mS)?e===l5.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(l5.DISABLED)||this.enable(),this.setAttribute("role","option"),l1(this,mI,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),l2(this,mC,mL).call(this)}disconnectedCallback(){this.disable(),l2(this,mC,mL).call(this),l1(this,mI,null)}handleClick(){}}mS=new WeakMap,mI=new WeakMap,mC=new WeakSet,mL=function(){var e;let t=null==(e=lJ(this,mI))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==lJ(this,mI).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},af.customElements.get("media-chrome-option")||af.customElements.define("media-chrome-option",l4);var l9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l8=(e,t,i)=>(l9(e,t,"read from private field"),i?i.call(e):t.get(e)),l7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l6=(e,t,i,a)=>(l9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),de=(e,t,i)=>(l9(e,t,"access private method"),i);let dt=ag.createElement("template");dt.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class di extends af.HTMLElement{constructor(){var e;super(),l7(this,mH),l7(this,mq),l7(this,m$),l7(this,mR,void 0),l7(this,mD,void 0),l7(this,mx,void 0),l7(this,mM,void 0),l7(this,mN,void 0),l7(this,mO,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",l8(this,mO));return}e.composedPath().includes(l8(this,mD))&&("Enter"===t||" "===t)?de(this,mH,mV).call(this):"Escape"===t&&de(this,m$,mK).call(this)}),l7(this,mP,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",l8(this,mO));return}e.preventDefault(),this.addEventListener("keyup",l8(this,mO),{once:!0})}),l7(this,mU,e=>{e.composedPath().includes(this)||de(this,m$,mK).call(this)}),l7(this,mB,e=>{e.composedPath().includes(l8(this,mD))&&de(this,mH,mV).call(this)}),l7(this,mW,()=>{de(this,m$,mK).call(this)}),l7(this,mj,()=>{if(0===l8(this,mM).offsetWidth)return;let e=l8(this,mM).offsetWidth,t=l8(this,mD).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||l8(this,mD).hasAttribute("mediacontroller")||l8(this,mM).hasAttribute("mediacontroller")){l8(this,mM).style.zIndex="1",l8(this,mM).style.bottom="unset",l8(this,mM).style.right=null,l8(this,mM).style.left="0",l8(this,mM).style.top=`${t.height}px`;return}let i=da(this).getBoundingClientRect(),a=t.x+e,r=Math.max(t.right-a,t.right-i.right);l8(this,mM).style.left=null,l8(this,mM).style.right=`${r}px`,l8(this,mM).style.maxHeight=`${i.height-t.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(dt.content.cloneNode(!0))),null==(e=this.init)||e.call(this),l6(this,mD,this.shadowRoot.querySelector("[part=button]")),l6(this,mM,this.shadowRoot.querySelector("[part=listbox]")),l6(this,mx,this.shadowRoot.querySelector("slot[name=button]")),l8(this,mx).addEventListener("slotchange",()=>{let e=l8(this,mx).assignedElements()[0];e&&(l6(this,mD,e),l8(this,mD).preventClick=!0,this.hasAttribute("disabled")||l8(this,mD).hasAttribute("disabled")?this.disable():(this.enable(),l8(this,mD).setAttribute("aria-haspopup","listbox")))}),l6(this,mN,this.shadowRoot.querySelector("slot[name=listbox]")),l8(this,mN).addEventListener("slotchange",()=>{l6(this,mM,l8(this,mN).assignedElements()[0]||l8(this,mM))})}static get observedAttributes(){return["disabled",iZ.MEDIA_CONTROLLER]}enable(){l8(this,mD).toggleAttribute("disabled",!1),this.addEventListener("change",l8(this,mW)),this.addEventListener("keydown",l8(this,mP)),this.addEventListener("click",l8(this,mB)),ag.addEventListener("click",l8(this,mU))}disable(){l8(this,mD).toggleAttribute("disabled",!0),this.removeEventListener("change",l8(this,mW)),this.removeEventListener("keydown",l8(this,mP)),this.removeEventListener("keyup",l8(this,mO)),this.removeEventListener("click",l8(this,mB)),ag.removeEventListener("click",l8(this,mU))}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iZ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=l8(this,mR))?void 0:a.unassociateElement)||r.call(a,this),l6(this,mR,null),l8(this,mM).removeAttribute(iZ.MEDIA_CONTROLLER)),i&&this.isConnected&&(l6(this,mR,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=l8(this,mR))?void 0:s.associateElement)||o.call(s,this),l8(this,mM).setAttribute(iZ.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aO(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(iZ.MEDIA_CONTROLLER);r&&(l6(this,mR,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=l8(this,mR))?void 0:t.associateElement)||i.call(t,this),l8(this,mM).setAttribute(iZ.MEDIA_CONTROLLER,r)),this.hasAttribute("disabled")||this.enable(),l8(this,mN).hidden||ak(da(this),l8(this,mj))}disconnectedCallback(){var e,t;aT(da(this),l8(this,mj)),this.disable(),null==(t=null==(e=l8(this,mR))?void 0:e.unassociateElement)||t.call(e,this),l6(this,mR,null),l8(this,mM).removeAttribute(iZ.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}function da(e){var t;return null!=(t=e.getAttribute("bounds")?aD(e,`#${e.getAttribute("bounds")}`):function(e){var t;let i=e.getAttribute(iZ.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aD(e,"media-controller")}(e)||e.parentElement)?t:e}mR=new WeakMap,mD=new WeakMap,mx=new WeakMap,mM=new WeakMap,mN=new WeakMap,mO=new WeakMap,mP=new WeakMap,mU=new WeakMap,mB=new WeakMap,mW=new WeakMap,mH=new WeakSet,mV=function(){l8(this,mN).hidden?de(this,mq,mF).call(this):de(this,m$,mK).call(this)},mq=new WeakSet,mF=function(){l8(this,mN).hidden&&(l8(this,mN).hidden=!1,l8(this,mD).setAttribute("aria-expanded","true"),l8(this,mj).call(this),l8(this,mM).focus(),ak(da(this),l8(this,mj)))},m$=new WeakSet,mK=function(){if(l8(this,mN).hidden)return;aT(da(this),l8(this,mj));let e=ax();l8(this,mN).hidden=!0,l8(this,mD).setAttribute("aria-expanded","false"),aR(l8(this,mM),e)&&l8(this,mD).focus()},mj=new WeakMap,af.customElements.get("media-chrome-selectmenu")||af.customElements.define("media-chrome-selectmenu",di);var dr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dn=(e,t,i)=>(dr(e,t,"read from private field"),i?i.call(e):t.get(e)),ds=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dl=(e,t,i,a)=>(dr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dd=(e,t,i)=>(dr(e,t,"access private method"),i);let du=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dc=ag.createElement("template");dc.innerHTML=`
  <slot name="captions-indicator" hidden>${du}</slot>
`;class dh extends lz{constructor(){super({slotTemplate:dc}),ds(this,mG),ds(this,mQ),ds(this,mY,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",iX.MEDIA_SUBTITLES_LIST,iX.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_SUBTITLES_LIST&&t!==i?dd(this,mG,mZ).call(this):e===iX.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dd(this,mQ,mz))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dd(this,mQ,mz))}get mediaSubtitlesList(){return dm(this,iX.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dp(this,iX.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dm(this,iX.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dp(this,iX.MEDIA_SUBTITLES_SHOWING,e)}}mY=new WeakMap,mG=new WeakSet,mZ=function(){var e;if(dn(this,mY)===JSON.stringify(this.mediaSubtitlesList))return;dl(this,mY,JSON.stringify(this.mediaSubtitlesList));let t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.value,a=lG(this.formatOptionText("Off"),"off",i);for(let i of(a.prepend(lZ(this,"select-indicator")),t.append(a),this.mediaSubtitlesList)){let a=lG(this.formatOptionText(i.label,i),rs(i),this.value==rs(i));a.prepend(lZ(this,"select-indicator")),"captions"===(null!=(e=i.kind)?e:"subs")&&a.append(lZ(this,"captions-indicator")),t.append(a)}},mQ=new WeakSet,mz=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(iX.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new af.CustomEvent(iG.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new af.CustomEvent(iG.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};let dm=(e,t)=>{let i=e.getAttribute(t);return i?rr(i):[]},dp=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=ro(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};af.customElements.get("media-captions-listbox")||af.customElements.define("media-captions-listbox",dh);class dv extends di{init(){let e=ag.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=ag.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}af.customElements.get("media-captions-selectmenu")||af.customElements.define("media-captions-selectmenu",dv);var db=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dE=(e,t,i)=>(db(e,t,"read from private field"),i?i.call(e):t.get(e)),df=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dg=(e,t,i)=>(db(e,t,"access private method"),i);let dy={RATES:"rates"};class d_ extends lz{constructor(){super(),df(this,mJ),df(this,m1),df(this,mX,new rt(this,dy.RATES,{defaultValue:oc})),dg(this,mJ,m0).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",iX.MEDIA_PLAYBACK_RATE,dy.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dy.RATES&&t!=i&&(dE(this,mX).value=i,dg(this,mJ,m0).call(this))}get rates(){return dE(this,mX)}set rates(e){e?Array.isArray(e)&&(dE(this,mX).value=e.join(" ")):dE(this,mX).value="",dg(this,mJ,m0).call(this)}get mediaPlaybackRate(){return aU(this,iX.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aB(this,iX.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dg(this,m1,m2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dg(this,m1,m2))}}mX=new WeakMap,mJ=new WeakSet,m0=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=lG(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(lZ(this,"select-indicator")),e.append(i)}},m1=new WeakSet,m2=function(){if(!this.value)return;let e=new af.CustomEvent(iG.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-playback-rate-listbox")||af.customElements.define("media-playback-rate-listbox",d_);class dA extends di{init(){let e=ag.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=ag.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}af.customElements.get("media-playback-rate-selectmenu")||af.customElements.define("media-playback-rate-selectmenu",dA);var dk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dT=(e,t,i)=>(dk(e,t,"read from private field"),i?i.call(e):t.get(e)),dw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dS=(e,t,i,a)=>(dk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dI=(e,t,i)=>(dk(e,t,"access private method"),i);class dC extends lz{constructor(){super(...arguments),dw(this,m4),dw(this,m8),dw(this,m3,[]),dw(this,m5,void 0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_RENDITION_LIST,iX.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===iX.MEDIA_RENDITION_LIST&&t!==i&&(dS(this,m3,i6(i)),dI(this,m4,m9).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dI(this,m8,m7))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dI(this,m8,m7))}get mediaRenditionList(){return dT(this,m3)}set mediaRenditionList(e){dS(this,m3,e),dI(this,m4,m9).call(this)}get mediaRenditionSelected(){return aV(this,iX.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aq(this,iX.MEDIA_RENDITION_SELECTED,e)}}m3=new WeakMap,m5=new WeakMap,m4=new WeakSet,m9=function(){if(dT(this,m5)===JSON.stringify(this.mediaRenditionList))return;dS(this,m5,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=lG(this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),`${a.id}`,a.selected&&!i);e.prepend(lZ(this,"select-indicator")),t.append(e)}let a=lG(this.formatOptionText("Auto"),"auto",i);a.prepend(lZ(this,"select-indicator")),t.append(a)},m8=new WeakSet,m7=function(){if(null==this.value)return;let e=new af.CustomEvent(iG.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-rendition-listbox")||af.customElements.define("media-rendition-listbox",dC);let dL=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,dR=ag.createElement("template");dR.innerHTML=`
  <slot name="icon">${dL}</slot>
`;class dD extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_RENDITION_SELECTED,iX.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:dR})}get mediaRenditionSelected(){return aV(this,iX.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aq(this,iX.MEDIA_RENDITION_SELECTED,e)}}af.customElements.get("media-rendition-button")||af.customElements.define("media-rendition-button",dD);class dx extends di{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_RENDITION_SELECTED,iX.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=ag.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=ag.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}af.customElements.get("media-rendition-selectmenu")||af.customElements.define("media-rendition-selectmenu",dx);var dM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dN=(e,t,i)=>(dM(e,t,"read from private field"),i?i.call(e):t.get(e)),dO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dP=(e,t,i,a)=>(dM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dU=(e,t,i)=>(dM(e,t,"access private method"),i);class dB extends lz{constructor(){super(...arguments),dO(this,pt),dO(this,pa),dO(this,m6,[]),dO(this,pe,void 0)}static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_AUDIO_TRACK_LIST,iX.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===iX.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===iX.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(dP(this,m6,ai(i)),dU(this,pt,pi).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dU(this,pa,pr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dU(this,pa,pr))}get mediaAudioTrackList(){return dN(this,m6)}set mediaAudioTrackList(e){dP(this,m6,e),dU(this,pt,pi).call(this)}get mediaAudioTrackEnabled(){return aV(this,iX.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aq(this,iX.MEDIA_AUDIO_TRACK_ENABLED,e)}}m6=new WeakMap,pe=new WeakMap,pt=new WeakSet,pi=function(){if(dN(this,pe)===JSON.stringify(this.mediaAudioTrackList))return;dP(this,pe,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=lG(this.formatOptionText(i.label,i),`${i.id}`,i.enabled);e.prepend(lZ(this,"select-indicator")),t.append(e)}},pa=new WeakSet,pr=function(){if(null==this.value)return;let e=new af.CustomEvent(iG.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},af.customElements.get("media-audio-track-listbox")||af.customElements.define("media-audio-track-listbox",dB);let dW=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dH=ag.createElement("template");dH.innerHTML=`
  <slot name="icon">${dW}</slot>
`;class dV extends r7{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_AUDIO_TRACK_ENABLED,iX.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:dH})}get mediaAudioTrackEnabled(){return aV(this,iX.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aq(this,iX.MEDIA_AUDIO_TRACK_ENABLED,e)}}af.customElements.get("media-audio-track-button")||af.customElements.define("media-audio-track-button",dV);class dq extends di{static get observedAttributes(){return[...super.observedAttributes,iX.MEDIA_AUDIO_TRACK_ENABLED,iX.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=ag.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=ag.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}af.customElements.get("media-audio-track-selectmenu")||af.customElements.define("media-audio-track-selectmenu",dq);var dF=Object.defineProperty,d$=Object.getPrototypeOf,dK=Reflect.get,dj=(e,t,i)=>t in e?dF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,dY=(e,t,i)=>(dj(e,"symbol"!=typeof t?t+"":t,i),i),dG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dZ=(e,t,i)=>(dG(e,t,"read from private field"),i?i.call(e):t.get(e)),dQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dz=(e,t,i,a)=>(dG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dX=(e,t,i)=>(dG(e,t,"access private method"),i),dJ=(e,t,i)=>dK(d$(e),i,t),d0=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends d0{}globalThis.DocumentFragment=e}var d1,d2,d3,d5,d4,d9,d8,d7,d6,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,uE,uf,ug,uy,u_,uA,uk,uT,uw,uS,uI,uC,uL,uR,uD,ux,uM,uN,uO,uP,uU,uB,uW,uH,uV,uq,uF,u$,uK,uj,uY,uG,uZ,uQ,uz,uX,uJ,u0,u1,u2,u3,u5,u4,u9,u8,u7,u6,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cE,cf,cg,cy,c_,cA,ck,cT,cw,cS,cI,cC,cL,cR,cD,cx,cM,cN,cO,cP,cU,cB,cW,cH,cV,cq,cF,c$,cK,cj,cY,cG,cZ,cQ,cz,cX,cJ,c0,c1,c2,c3,c5,c4,c9,c8,c7,c6,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hE,hf,hg,hy,h_,hA,hk,hT,hw,hS,hI,hC,hL,hR,hD,hx,hM,hN,hO,hP,hU,hB,hW,hH,hV,hq,hF,h$,hK,hj,hY,hG,hZ,hQ,hz,hX,hJ,h0,h1,h2,h3,h5,h4,h9,h8,h7,h6,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mE,mf,mg,my,m_,mA,mk,mT,mw,mS,mI,mC,mL,mR,mD,mx,mM,mN,mO,mP,mU,mB,mW,mH,mV,mq,mF,m$,mK,mj,mY,mG,mZ,mQ,mz,mX,mJ,m0,m1,m2,m3,m5,m4,m9,m8,m7,m6,pe,pt,pi,pa,pr,pn,ps=class extends d0{},po=class{constructor(e,t={}){dQ(this,pn,void 0),dz(this,pn,null==t?void 0:t.detail)}get detail(){return dZ(this,pn)}initCustomEvent(){}};pn=new WeakMap;var pl={document:{createElement:function(e,t){return new ps}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(ps)},CustomEvent:po,EventTarget:d0,HTMLElement:ps,HTMLVideoElement:class extends d0{}},pd="undefined"==typeof window||void 0===globalThis.customElements,pu=pd?pl:globalThis;pd&&pl.document;var pc,ph=(()=>{try{return"0.18.1"}catch{}return"UNKNOWN"})(),pm=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],pp=null==(pc=globalThis.document)?void 0:pc.createElement("template");pp&&(pp.innerHTML=`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var pv,pb=null==(pv=globalThis.document)?void 0:pv.createElement("template");pb&&(pb.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var pE=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f;let g=null==(a=globalThis.document)?void 0:a.createElement(t,{is:i}),y=g?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(g):[];return r=class extends e{constructor(){super(),dQ(this,c),dQ(this,m),dQ(this,v),dQ(this,E),dQ(this,l,void 0),dQ(this,d,void 0),dQ(this,u,new Map),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0)))}static get observedAttributes(){var e,t,i;return dX(e=r,s,o).call(e),[...null!=(i=null==(t=null==g?void 0:g.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return null!=(a=null!=(i=null!=(e=dZ(this,d))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){dz(this,d,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.nativeEl){let e=document.createElement(t,{is:i});e.part=t,this.shadowRoot.querySelector('slot[name="media"]').append(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),y))dX(this,v,b).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type){dX(this,m,p).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){dX(this,c,h).call(this),dX(this,E,f).call(this,e,t,i)}connectedCallback(){dX(this,c,h).call(this)}},n=new WeakMap,s=new WeakSet,o=function(){if(dZ(this,n))return;dz(this,n,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),y))if(!(t in this.prototype)){if("function"==typeof g[t])this.prototype[t]=function(...e){return dX(this,c,h).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;dX(this,c,h).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){dX(this,c,h).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},l=new WeakMap,d=new WeakMap,u=new WeakMap,c=new WeakSet,h=function(){dZ(this,l)||(dz(this,l,!0),this.init())},m=new WeakSet,p=function(){let e=new Map(dZ(this,u));this.shadowRoot.querySelector("slot:not([name])").assignedElements().filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=dZ(this,u).get(t);r||(r=t.cloneNode(),dZ(this,u).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},v=new WeakSet,b=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},E=new WeakSet,f=function(e,t,i){var a,n,s,o,l,d;["id","class"].includes(e)||!r.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(n=(a=this.nativeEl).removeAttribute)||n.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},dQ(r,s),dY(r,"Events",pm),dY(r,"template",t.endsWith("audio")?pp:pb),dQ(r,n,void 0),r},pf=globalThis.document?pE(HTMLElement,{tag:"video"}):class{};globalThis.document&&pE(HTMLElement,{tag:"audio"});var pg=new WeakMap,py=class extends Error{},p_=class extends Error{};function pA(){return"undefined"!=typeof chrome&&chrome.cast&&chrome.cast.isAvailable}function pk(){return"undefined"!=typeof cast&&cast.framework}function pT(){if(pk())return cast.framework.CastContext.getInstance()}function pw(){var e;return null==(e=pT())?void 0:e.getCurrentSession()}function pS(){var e;return null==(e=pw())?void 0:e.getSessionObj().media[0]}function pI(e){return pT().setOptions({...pC(),...e})}function pC(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var pL,pR=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),pD=new WeakSet;px=e=>{e&&!pL&&(pL=cast.framework,pT().addEventListener(pL.CastContextEventType.CAST_STATE_CHANGED,e=>{pR.forEach(t=>{var i,a;return null==(a=(i=pg.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),pT().addEventListener(pL.CastContextEventType.SESSION_STATE_CHANGED,e=>{pR.forEach(t=>{var i,a;return null==(a=(i=pg.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),pR.forEach(e=>{var t,i;return null==(i=(t=pg.get(e)).init)?void 0:i.call(t)}))},pA()?pk()?px(chrome.cast.isAvailable):customElements.whenDefined("google-cast-button").then(()=>px(chrome.cast.isAvailable)):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(()=>px(chrome.cast.isAvailable))};var px,pM,pN,pO,pP,pU,pB,pW,pH,pV,pq,pF,p$,pK,pj,pY,pG,pZ,pQ,pz,pX,pJ,p0,p1=0,p2=class extends EventTarget{constructor(e){super(),dQ(this,pV),dQ(this,pF),dQ(this,pK),dQ(this,pY),dQ(this,pZ),dQ(this,pz),dQ(this,pJ),dQ(this,pM,void 0),dQ(this,pN,void 0),dQ(this,pO,void 0),dQ(this,pP,void 0),dQ(this,pU,"disconnected"),dQ(this,pB,!1),dQ(this,pW,new Set),dQ(this,pH,new WeakMap),dz(this,pM,e),pR.add(this),pg.set(this,{init:()=>dX(this,pZ,pQ).call(this),onCastStateChanged:()=>dX(this,pK,pj).call(this),onSessionStateChanged:()=>dX(this,pY,pG).call(this),getCastPlayer:()=>dZ(this,pV,pq)}),dX(this,pZ,pQ).call(this)}get state(){return dZ(this,pU)}async watchAvailability(e){if(dZ(this,pM).disableRemotePlayback)throw new py("disableRemotePlayback attribute is present.");return dZ(this,pH).set(e,++p1),dZ(this,pW).add(e),p1}async cancelWatchAvailability(e){if(dZ(this,pM).disableRemotePlayback)throw new py("disableRemotePlayback attribute is present.");e?dZ(this,pW).delete(e):dZ(this,pW).clear()}async prompt(){var e,t;if(dZ(this,pM).disableRemotePlayback)throw new py("disableRemotePlayback attribute is present.");if(!pA())throw new p_("The RemotePlayback API is disabled on this platform.");let i=pD.has(dZ(this,pM));pD.add(dZ(this,pM)),pI(dZ(this,pM).castOptions),Object.entries(dZ(this,pP)).forEach(([e,t])=>{dZ(this,pO).controller.addEventListener(e,t)});try{await pT().requestSession()}catch(e){if("cancel"===e){i||pD.delete(dZ(this,pM));return}throw Error(e)}null==(t=null==(e=pg.get(dZ(this,pM)))?void 0:e.loadOnPrompt)||t.call(e)}};pM=new WeakMap,pN=new WeakMap,pO=new WeakMap,pP=new WeakMap,pU=new WeakMap,pB=new WeakMap,pW=new WeakMap,pH=new WeakMap,pV=new WeakSet,pq=function(){if(pD.has(dZ(this,pM)))return dZ(this,pO)},pF=new WeakSet,p$=function(){pD.has(dZ(this,pM))&&(Object.entries(dZ(this,pP)).forEach(([e,t])=>{dZ(this,pO).controller.removeEventListener(e,t)}),pD.delete(dZ(this,pM)),dZ(this,pM).muted=dZ(this,pO).isMuted,dZ(this,pM).currentTime=dZ(this,pO).savedPlayerState.currentTime,!1===dZ(this,pO).savedPlayerState.isPaused&&dZ(this,pM).play())},pK=new WeakSet,pj=function(){let e=pT().getCastState();if(pD.has(dZ(this,pM))&&"CONNECTING"===e&&(dz(this,pU,"connecting"),this.dispatchEvent(new Event("connecting"))),!dZ(this,pB)&&null!=e&&e.includes("CONNECT"))for(let e of(dz(this,pB,!0),dZ(this,pW)))e(!0);else if(dZ(this,pB)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(dz(this,pB,!1),dZ(this,pW)))e(!1)},pY=new WeakSet,pG=async function(){var e,t;let{SESSION_RESUMED:i}=pL.SessionState;if(pT().getSessionState()===i&&dZ(this,pM).castSrc===(null==(e=pS())?void 0:e.media.contentId)){pD.add(dZ(this,pM)),Object.entries(dZ(this,pP)).forEach(([e,t])=>{dZ(this,pO).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{pS().getStatus(t,e,i)}))}catch(e){console.error(e)}dZ(this,pP)[pL.RemotePlayerEventType.IS_PAUSED_CHANGED](),dZ(this,pP)[pL.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},pZ=new WeakSet,pQ=function(){!pL||dZ(this,pN)||(dz(this,pN,!0),pI(dZ(this,pM).castOptions),dZ(this,pM).textTracks.addEventListener("change",()=>dX(this,pJ,p0).call(this)),dX(this,pK,pj).call(this),dz(this,pO,new pL.RemotePlayer),new pL.RemotePlayerController(dZ(this,pO)),dz(this,pP,{[pL.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(dz(this,pU,"connected"),this.dispatchEvent(new Event("connect"))):(dX(this,pF,p$).call(this),dz(this,pU,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[pL.RemotePlayerEventType.DURATION_CHANGED]:()=>{dZ(this,pM).dispatchEvent(new Event("durationchange"))},[pL.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{dZ(this,pM).dispatchEvent(new Event("volumechange"))},[pL.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{dZ(this,pM).dispatchEvent(new Event("volumechange"))},[pL.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=dZ(this,pV,pq))&&e.isMediaLoaded&&dZ(this,pM).dispatchEvent(new Event("timeupdate"))},[pL.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{dZ(this,pM).dispatchEvent(new Event("resize"))},[pL.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{dZ(this,pM).dispatchEvent(new Event(this.paused?"pause":"play"))},[pL.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=dZ(this,pV,pq))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&dZ(this,pM).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=dZ(this,pV,pq))?void 0:t.playerState]))},[pL.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=dZ(this,pV,pq))&&e.isMediaLoaded&&(await Promise.resolve(),dX(this,pz,pX).call(this))}}))},pz=new WeakSet,pX=function(){dX(this,pJ,p0).call(this)},pJ=new WeakSet,p0=async function(){var e,t,i,a,r;let n;if(!dZ(this,pV,pq))return;let s=(null!=(t=null==(e=dZ(this,pO).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...dZ(this,pM).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=pw())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{pS().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var p3=e=>{var t,i,a,r,n,s,o,l,d;return i=class extends e{constructor(){super(...arguments),dQ(this,s),dQ(this,l),dQ(this,a,{paused:!1}),dQ(this,r,pC()),dQ(this,n,void 0)}get remote(){return dZ(this,n)?dZ(this,n):globalThis.chrome?(function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),pg.set(this,{loadOnPrompt:()=>dX(this,l,d).call(this)}),dz(this,n,new p2(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){dZ(this,r).receiverApplicationId=i;return}if(dZ(this,s,o))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!dZ(this,s,o))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],l=0;r.length&&(i.tracks=r.map(e=>{let t=++l;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!dZ(this,a).paused,d.activeTrackIds=n,await (null==(t=pw())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(dZ(this,s,o)){dZ(this,s,o).isPaused&&(null==(e=dZ(this,s,o).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(dZ(this,s,o)){dZ(this,s,o).isPaused||null==(e=dZ(this,s,o).controller)||e.playOrPause();return}super.pause()}get castOptions(){return dZ(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(dZ(this,s,o))switch(dZ(this,s,o).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return dZ(this,s,o)?dZ(this,s,o).isPaused:super.paused}get muted(){var e;return dZ(this,s,o)?null==(e=dZ(this,s,o))?void 0:e.isMuted:super.muted}set muted(e){var t;if(dZ(this,s,o)){(e&&!dZ(this,s,o).isMuted||!e&&dZ(this,s,o).isMuted)&&(null==(t=dZ(this,s,o).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return dZ(this,s,o)?null!=(t=null==(e=dZ(this,s,o))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(dZ(this,s,o)){dZ(this,s,o).volumeLevel=+e,null==(t=dZ(this,s,o).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return dZ(this,s,o)&&null!=(e=dZ(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=dZ(this,s,o))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return dZ(this,s,o)&&null!=(e=dZ(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=dZ(this,s,o))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(dZ(this,s,o)){dZ(this,s,o).currentTime=e,null==(t=dZ(this,s,o).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,o=function(){var e,t;return null==(t=null==(e=pg.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},l=new WeakSet,d=async function(){dZ(this,a).paused=dJ(i.prototype,this,"paused"),dJ(i.prototype,this,"pause").call(this),this.muted=dJ(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},dY(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},p5=class extends Event{constructor(e,t){super(e),dY(this,"track"),this.track=t.track}},p4=new WeakMap;function p9(e){var t,i;let a;return null!=(t=p4.get(e))?t:(i={},(a=p4.get(e))||p4.set(e,a={}),Object.assign(a,i))}function p8(e,t){let i=e.videoTracks;p9(t).media=e,p9(t).renditionSet||(p9(t).renditionSet=new Set);let a=p9(i).trackSet;a.add(t);let r=a.size-1;r in vr.prototype||Object.defineProperty(vr.prototype,r,{get(){return[...p9(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new p5("addtrack",{track:t}))})}function p7(e){var t;let i=null==(t=p9(e).media)?void 0:t.videoTracks;i&&(p9(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new p5("removetrack",{track:e}))}))}var p6,ve,vt,vi,va,vr=class extends EventTarget{constructor(){super(),dQ(this,vi),dQ(this,p6,void 0),dQ(this,ve,void 0),dQ(this,vt,void 0),p9(this).trackSet=new Set}[Symbol.iterator](){return dZ(this,vi,va).values()}get length(){return dZ(this,vi,va).size}getTrackById(e){var t;return null!=(t=[...dZ(this,vi,va)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...dZ(this,vi,va)].findIndex(e=>e.selected)}get onaddtrack(){return dZ(this,p6)}set onaddtrack(e){dZ(this,p6)&&(this.removeEventListener("addtrack",dZ(this,p6)),dz(this,p6,void 0)),"function"==typeof e&&(dz(this,p6,e),this.addEventListener("addtrack",e))}get onremovetrack(){return dZ(this,ve)}set onremovetrack(e){dZ(this,ve)&&(this.removeEventListener("removetrack",dZ(this,ve)),dz(this,ve,void 0)),"function"==typeof e&&(dz(this,ve,e),this.addEventListener("removetrack",e))}get onchange(){return dZ(this,vt)}set onchange(e){dZ(this,vt)&&(this.removeEventListener("change",dZ(this,vt)),dz(this,vt,void 0)),"function"==typeof e&&(dz(this,vt,e),this.addEventListener("change",e))}};p6=new WeakMap,ve=new WeakMap,vt=new WeakMap,vi=new WeakSet,va=function(){return p9(this).trackSet};var vn=class extends Event{constructor(e,t){super(e),dY(this,"rendition"),this.rendition=t.rendition}};function vs(e){return[...p9(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...p9(e).renditionSet])}var vo,vl,vd,vu=class extends EventTarget{constructor(){super(...arguments),dQ(this,vo,void 0),dQ(this,vl,void 0),dQ(this,vd,void 0)}[Symbol.iterator](){return vs(this).values()}get length(){return vs(this).length}getRenditionById(e){var t;return null!=(t=vs(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vs(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vs(this).entries())i.selected=t===e}get onaddrendition(){return dZ(this,vo)}set onaddrendition(e){dZ(this,vo)&&(this.removeEventListener("addrendition",dZ(this,vo)),dz(this,vo,void 0)),"function"==typeof e&&(dz(this,vo,e),this.addEventListener("addrendition",e))}get onremoverendition(){return dZ(this,vl)}set onremoverendition(e){dZ(this,vl)&&(this.removeEventListener("removerendition",dZ(this,vl)),dz(this,vl,void 0)),"function"==typeof e&&(dz(this,vl,e),this.addEventListener("removerendition",e))}get onchange(){return dZ(this,vd)}set onchange(e){dZ(this,vd)&&(this.removeEventListener("change",dZ(this,vd)),dz(this,vd,void 0)),"function"==typeof e&&(dz(this,vd,e),this.addEventListener("change",e))}};vo=new WeakMap,vl=new WeakMap,vd=new WeakMap;var vc,vh=class{constructor(){dY(this,"src"),dY(this,"id"),dY(this,"width"),dY(this,"height"),dY(this,"bitrate"),dY(this,"frameRate"),dY(this,"codec"),dQ(this,vc,!1)}get selected(){return dZ(this,vc)}set selected(e){var t;let i;dZ(this,vc)!==e&&(dz(this,vc,e),t=this,(i=p9(t).media.videoRenditions)&&!p9(i).changeRequested&&(p9(i).changeRequested=!0,queueMicrotask(()=>{delete p9(i).changeRequested,p9(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};vc=new WeakMap;var vm,vp=class{constructor(){dY(this,"id"),dY(this,"kind"),dY(this,"label",""),dY(this,"language",""),dY(this,"sourceBuffer"),dQ(this,vm,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new vh;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=p9(s).media.videoRenditions,p9(u).media=p9(s).media,p9(u).track=s,(l=p9(s).renditionSet).add(u),(d=l.size-1)in vu.prototype||Object.defineProperty(vu.prototype,d,{get(){return vs(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new vn("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=p9(e).media.videoRenditions,i=p9(e).track,p9(i).renditionSet.delete(e),queueMicrotask(()=>{p9(e).track.selected&&t.dispatchEvent(new vn("removerendition",{rendition:e}))})}get selected(){return dZ(this,vm)}set selected(e){dZ(this,vm)!==e&&(dz(this,vm,e),!0===e&&function(e){var t;let i=null!=(t=p9(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(p9(i).changeRequested)return;p9(i).changeRequested=!0,queueMicrotask(()=>{delete p9(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function vv(e){return[...p9(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...p9(e).renditionSet])}vm=new WeakMap;var vb,vE,vf,vg=class extends EventTarget{constructor(){super(...arguments),dQ(this,vb,void 0),dQ(this,vE,void 0),dQ(this,vf,void 0)}[Symbol.iterator](){return vv(this).values()}get length(){return vv(this).length}getRenditionById(e){var t;return null!=(t=vv(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vv(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vv(this).entries())i.selected=t===e}get onaddrendition(){return dZ(this,vb)}set onaddrendition(e){dZ(this,vb)&&(this.removeEventListener("addrendition",dZ(this,vb)),dz(this,vb,void 0)),"function"==typeof e&&(dz(this,vb,e),this.addEventListener("addrendition",e))}get onremoverendition(){return dZ(this,vE)}set onremoverendition(e){dZ(this,vE)&&(this.removeEventListener("removerendition",dZ(this,vE)),dz(this,vE,void 0)),"function"==typeof e&&(dz(this,vE,e),this.addEventListener("removerendition",e))}get onchange(){return dZ(this,vf)}set onchange(e){dZ(this,vf)&&(this.removeEventListener("change",dZ(this,vf)),dz(this,vf,void 0)),"function"==typeof e&&(dz(this,vf,e),this.addEventListener("change",e))}};vb=new WeakMap,vE=new WeakMap,vf=new WeakMap;var vy,v_=class{constructor(){dY(this,"src"),dY(this,"id"),dY(this,"bitrate"),dY(this,"codec"),dQ(this,vy,!1)}get selected(){return dZ(this,vy)}set selected(e){var t;let i;dZ(this,vy)!==e&&(dz(this,vy,e),t=this,(i=p9(t).media.audioRenditions)&&!p9(i).changeRequested&&(p9(i).changeRequested=!0,queueMicrotask(()=>{delete p9(i).changeRequested,p9(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function vA(e,t){let i=e.audioTracks;p9(t).media=e,p9(t).renditionSet||(p9(t).renditionSet=new Set);let a=p9(i).trackSet;a.add(t);let r=a.size-1;r in vL.prototype||Object.defineProperty(vL.prototype,r,{get(){return[...p9(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new p5("addtrack",{track:t}))})}function vk(e){var t;let i=null==(t=p9(e).media)?void 0:t.audioTracks;i&&(p9(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new p5("removetrack",{track:e}))}))}vy=new WeakMap;var vT,vw,vS,vI,vC,vL=class extends EventTarget{constructor(){super(),dQ(this,vI),dQ(this,vT,void 0),dQ(this,vw,void 0),dQ(this,vS,void 0),p9(this).trackSet=new Set}[Symbol.iterator](){return dZ(this,vI,vC).values()}get length(){return dZ(this,vI,vC).size}getTrackById(e){var t;return null!=(t=[...dZ(this,vI,vC)].find(t=>t.id===e))?t:null}get onaddtrack(){return dZ(this,vT)}set onaddtrack(e){dZ(this,vT)&&(this.removeEventListener("addtrack",dZ(this,vT)),dz(this,vT,void 0)),"function"==typeof e&&(dz(this,vT,e),this.addEventListener("addtrack",e))}get onremovetrack(){return dZ(this,vw)}set onremovetrack(e){dZ(this,vw)&&(this.removeEventListener("removetrack",dZ(this,vw)),dz(this,vw,void 0)),"function"==typeof e&&(dz(this,vw,e),this.addEventListener("removetrack",e))}get onchange(){return dZ(this,vS)}set onchange(e){dZ(this,vS)&&(this.removeEventListener("change",dZ(this,vS)),dz(this,vS,void 0)),"function"==typeof e&&(dz(this,vS,e),this.addEventListener("change",e))}};vT=new WeakMap,vw=new WeakMap,vS=new WeakMap,vI=new WeakSet,vC=function(){return p9(this).trackSet};var vR,vD=class{constructor(){dY(this,"id"),dY(this,"kind"),dY(this,"label",""),dY(this,"language",""),dY(this,"sourceBuffer"),dQ(this,vR,!1)}addRendition(e,t,i){var a;let r,n,s,o=new v_;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=p9(a).media.audioRenditions,p9(o).media=p9(a).media,p9(o).track=a,(n=p9(a).renditionSet).add(o),(s=n.size-1)in vg.prototype||Object.defineProperty(vg.prototype,s,{get(){return vv(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new vn("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=p9(e).media.audioRenditions,i=p9(e).track,p9(i).renditionSet.delete(e),queueMicrotask(()=>{p9(e).track.enabled&&t.dispatchEvent(new vn("removerendition",{rendition:e}))})}get enabled(){return dZ(this,vR)}set enabled(e){let t;dZ(this,vR)!==e&&(dz(this,vR,e),(t=p9(this).media.audioTracks)&&!p9(t).changeRequested&&(p9(t).changeRequested=!0,queueMicrotask(()=>{delete p9(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};vR=new WeakMap;var vx=vO(globalThis.HTMLMediaElement,"video"),vM=vO(globalThis.HTMLMediaElement,"audio");function vN(e){if(!(null!=e&&e.prototype))return e;let t=vO(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=p9(e).videoTracks;if(!i&&(i=new vr,p9(e).videoTracks=i,vx)){let a=vx.call(null!=(t=e.nativeEl)?t:e);for(let t of a)p8(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof vp)){for(let e of a)p7(e);return}p8(e,t.track)}),a.addEventListener("removetrack",e=>{p7(e.track)})}return i}(this)}});let i=vO(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=p9(e).audioTracks;if(!i&&(i=new vL,p9(e).audioTracks=i,vM)){let a=vM.call(null!=(t=e.nativeEl)?t:e);for(let t of a)vA(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof vD)){for(let e of a)vk(e);return}vA(e,t.track)}),a.addEventListener("removetrack",e=>{vk(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new vp;return a.kind=e,a.label=t,a.language=i,p8(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=p7),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new vD;return a.kind=e,a.label=t,a.language=i,vA(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=vk),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=p9(e).videoRenditions;return t||(p9(t=new vu).media=e,p9(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=p9(e).audioRenditions;return t||(p9(t=new vg).media=e,p9(e).audioRenditions=t),t};return e}function vO(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}pm.push("castchange","entercast","leavecast");var vP,vU,vB,vW,vH,vV,vq,vF,v$,vK,vj={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},vY=Object.values(vj),vG=class extends pf{constructor(){super(),dQ(this,v$),dQ(this,vP,void 0),dQ(this,vU,void 0),dQ(this,vB,void 0),dQ(this,vW,{}),dQ(this,vH,void 0),dQ(this,vV,void 0),dQ(this,vq,void 0),dQ(this,vF,void 0),dz(this,vB,iy())}static get observedAttributes(){var e;return[...vY,...null!=(e=pf.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(vj.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?t$.includes(e)?this.setAttribute(vj.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${t$.join()}`):this.removeAttribute(vj.PREFER_CMCD))}get playerInitTime(){return dZ(this,vB)}get playerSoftwareName(){var e;return null!=(e=dZ(this,vq))?e:"mux-video"}set playerSoftwareName(e){dz(this,vq,e)}get playerSoftwareVersion(){var e;return null!=(e=dZ(this,vV))?e:ph}set playerSoftwareVersion(e){dz(this,vV,e)}get _hls(){var e;return null==(e=dZ(this,vP))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iS(this.nativeEl))?e:null}get errorTranslator(){return dZ(this,vF)}set errorTranslator(e){dz(this,vF,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(vj.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(vj.TYPE,e):this.removeAttribute(vj.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(vj.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(vj.DEBUG,""):this.removeAttribute(vj.DEBUG))}get disableTracking(){return this.hasAttribute(vj.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(vj.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(vj.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(vj.DISABLE_COOKIES,""):this.removeAttribute(vj.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(vj.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(vj.START_TIME):this.setAttribute(vj.START_TIME,`${e}`))}get playbackId(){var e;return null!=(e=this.getAttribute(vj.PLAYBACK_ID))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(vj.PLAYBACK_ID,e):this.removeAttribute(vj.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(vj.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vj.MAX_RESOLUTION,e):this.removeAttribute(vj.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vj.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vj.MIN_RESOLUTION,e):this.removeAttribute(vj.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(vj.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vj.RENDITION_ORDER,e):this.removeAttribute(vj.RENDITION_ORDER))}get customDomain(){var e;return null!=(e=this.getAttribute(vj.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vj.CUSTOM_DOMAIN,e):this.removeAttribute(vj.CUSTOM_DOMAIN))}get ended(){return iP(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(vj.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(vj.ENV_KEY,e):this.removeAttribute(vj.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vj.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vj.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vj.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(vj.STREAM_TYPE))?e:iI(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(vj.STREAM_TYPE,e):this.removeAttribute(vj.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(vj.TARGET_LIVE_WINDOW)?+this.getAttribute(vj.TARGET_LIVE_WINDOW):iC(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(vj.TARGET_LIVE_WINDOW):this.setAttribute(vj.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(vj.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return iR(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(vj.LIVE_EDGE_OFFSET))return+this.getAttribute(vj.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(vj.LIVE_EDGE_OFFSET):this.setAttribute(vj.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iL(this.nativeEl)}async addCuePoints(e){return it(this.nativeEl,e)}get activeCuePoint(){return ia(this.nativeEl)}get cuePoints(){return function(e,t={label:t7}){let i=ie(e,t);return null!=i&&i.cues?Array.from(i.cues,e=>ii(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(vj.PREFER_PLAYBACK);if(e===tq.MSE||e===tq.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tq.MSE||e===tq.NATIVE?this.setAttribute(vj.PREFER_PLAYBACK,e):this.removeAttribute(vj.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![vj.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...dZ(this,vW)}}set metadata(e){dz(this,vW,null!=e?e:{}),this.mux&&this.mux.emit("hb",dZ(this,vW))}get _hlsConfig(){return dZ(this,vH)}set _hlsConfig(e){dz(this,vH,e)}load(){dz(this,vP,iU(this,this.nativeEl,dZ(this,vP)))}unload(){iB(this.nativeEl,dZ(this,vP)),dz(this,vP,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(pf.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case vj.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case vj.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?dX(this,v$,vK).call(this):e&&!a?this.unload():e&&a&&(this.unload(),dX(this,v$,vK).call(this));break}case"autoplay":if(i===t)break;null==(a=dZ(this,vP))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=dZ(this,vP))||r.setPreload(i);break;case vj.PLAYBACK_ID:this.src=iA(this);break;case vj.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case vj.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case vj.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case vj.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!dZ(this,vP)&&dX(this,v$,vK).call(this)}disconnectedCallback(){this.unload()}};vP=new WeakMap,vU=new WeakMap,vB=new WeakMap,vW=new WeakMap,vH=new WeakMap,vV=new WeakMap,vq=new WeakMap,vF=new WeakMap,v$=new WeakSet,vK=async function(){dZ(this,vU)||(await dz(this,vU,Promise.resolve()),dz(this,vU,null),this.load())};var vZ=class extends p3(vN(vG)){};pu.customElements.get("mux-video")||(pu.customElements.define("mux-video",vZ),pu.MuxVideoElement=vZ);var vQ=Object.defineProperty,vz=(e,t,i)=>t in e?vQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,vX=(e,t,i)=>(vz(e,"symbol"!=typeof t?t+"":t,i),i),vJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},v0=(e,t,i)=>(vJ(e,t,"read from private field"),i?i.call(e):t.get(e)),v1=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},v2=(e,t,i,a)=>(vJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let v3={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof bt&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof bt?a.element[a.attributeName]=t:a.value=t}}}};class v5 extends af.DocumentFragment{constructor(e,t,i=v3){var a;super(),v1(this,bN,void 0),v1(this,bO,void 0),this.append(e.content.cloneNode(!0)),v2(this,bN,v4(this)),v2(this,bO,i),null==(a=i.createCallback)||a.call(i,this,v0(this,bN),t),i.processCallback(this,v0(this,bN),t)}update(e){v0(this,bO).processCallback(this,v0(this,bN),e)}}bN=new WeakMap,bO=new WeakMap;let v4=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new be;for([i,a]of v8(r.value))if(i){let i=new bt(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of v8(r.data))if(i){let i=new bi(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new ba(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else v4(r,t);return t},v9={},v8=e=>{let t="",i=0,a=v9[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),v9[e]=a};class v7{get value(){return""}set value(e){}toString(){return this.value}}let v6=new WeakMap;class be{constructor(){v1(this,bP,[])}[Symbol.iterator](){return v0(this,bP).values()}get length(){return v0(this,bP).length}item(e){return v0(this,bP)[e]}append(...e){for(let t of e)t instanceof bt&&v6.set(t,this),v0(this,bP).push(t)}toString(){return v0(this,bP).join("")}}bP=new WeakMap;class bt extends v7{constructor(e,t,i){super(),v1(this,bV),v1(this,bU,""),v1(this,bB,void 0),v1(this,bW,void 0),v1(this,bH,void 0),v2(this,bB,e),v2(this,bW,t),v2(this,bH,i)}get attributeName(){return v0(this,bW)}get attributeNamespace(){return v0(this,bH)}get element(){return v0(this,bB)}get value(){return v0(this,bU)}set value(e){v0(this,bU)!==e&&(v2(this,bU,e),v0(this,bV,bq)&&1!==v0(this,bV,bq).length?v0(this,bB).setAttributeNS(v0(this,bH),v0(this,bW),v0(this,bV,bq)):null==e?v0(this,bB).removeAttributeNS(v0(this,bH),v0(this,bW)):v0(this,bB).setAttributeNS(v0(this,bH),v0(this,bW),e))}get booleanValue(){return v0(this,bB).hasAttributeNS(v0(this,bH),v0(this,bW))}set booleanValue(e){if(v0(this,bV,bq)&&1!==v0(this,bV,bq).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}bU=new WeakMap,bB=new WeakMap,bW=new WeakMap,bH=new WeakMap,bV=new WeakSet,bq=function(){return v6.get(this)};class bi extends v7{constructor(e,t){super(),v1(this,bF,void 0),v1(this,b$,void 0),v2(this,bF,e),v2(this,b$,t?[...t]:[new Text])}get replacementNodes(){return v0(this,b$)}get parentNode(){return v0(this,bF)}get nextSibling(){return v0(this,b$)[v0(this,b$).length-1].nextSibling}get previousSibling(){return v0(this,b$)[0].previousSibling}get value(){return v0(this,b$).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),v2(this,b$,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(v0(this,b$)[0].parentNode,v0(this,b$),t,this.nextSibling))}}bF=new WeakMap,b$=new WeakMap;class ba extends bi{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),vX(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let br={string:e=>String(e)};class bn{constructor(e){this.template=e,this.state=void 0}}let bs=new WeakMap,bo=new WeakMap,bl={partial:(e,t)=>{t[e.expression]=new bn(e.template)},if:(e,t)=>{var i;if(bh(e.expression,t)){if(bs.get(e)!==e.template){bs.set(e,e.template);let i=new v5(e.template,t,bu);e.replace(i),bo.set(e,i)}else null==(i=bo.get(e))||i.update(t)}else e.replace(""),bs.delete(e),bo.delete(e)}},bd=Object.keys(bl),bu={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof ba){if(!n.directive){let e=bd.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=bl[n.directive])||a.call(bl,n,i);continue}let t=bh(e,i);if(t instanceof bn){bs.get(n)!==t.template?(bs.set(n,t.template),t=new v5(t.template,t.state,bu),n.value=t,bo.set(n,t)):null==(r=bo.get(n))||r.update(t.state);continue}t?(n instanceof bt&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof bt?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,bs.delete(n),bo.delete(n))):n instanceof bt?n.value=void 0:(n.value=void 0,bs.delete(n),bo.delete(n))}}},bc={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=br[t])?void 0:i.call(br,e)}};function bh(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return bm(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return bm(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=bv(d,t))}return i}if(1===d.length)return bp(d[0])?bv(d[0].token,t):bm(e);if(2===d.length){let i=bc[null==(o=d[0])?void 0:o.token];return i&&bp(d[1])?i(bv(d[1].token,t)):bm(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=bc[i];return a&&bp(d[0])&&bp(d[2])?a(bv(d[0].token,t),"|"===i?d[2].token:bv(d[2].token,t)):bm(e)}}function bm(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function bp({type:e}){return["number","boolean","string","param"].includes(e)}function bv(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):an(e)?parseFloat(e):t[e]}var bb=Object.defineProperty,bE=(e,t,i)=>t in e?bb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,bf=(e,t,i)=>(bE(e,"symbol"!=typeof t?t+"":t,i),i),bg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},by=(e,t,i)=>(bg(e,t,"read from private field"),i?i.call(e):t.get(e)),b_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bA=(e,t,i,a)=>(bg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bk=(e,t,i)=>(bg(e,t,"access private method"),i);let bT={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},bw=ag.createElement("template");bw.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class bS extends af.HTMLElement{constructor(){super(),b_(this,bG),b_(this,bQ),bf(this,"renderRoot"),bf(this,"renderer"),b_(this,bK,void 0),b_(this,bj,void 0),b_(this,bY,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(bT[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(iJ.BREAKPOINTS_COMPUTED,this.render),bk(this,bG,bZ).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=by(this,bK))?e:this.constructor.template}set template(e){bA(this,bY,null),bA(this,bK,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>bT[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=bT[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(an(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&bk(this,bQ,bz).call(this)}connectedCallback(){bk(this,bQ,bz).call(this)}createRenderer(){this.template&&this.template!==by(this,bj)&&(bA(this,bj,this.template),this.renderer=new v5(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(bw.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function bI(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}bK=new WeakMap,bj=new WeakMap,bY=new WeakMap,bG=new WeakSet,bZ=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},bQ=new WeakSet,bz=function(){var e;let t=this.getAttribute("template");if(!t||t===by(this,bY))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){bA(this,bY,t),bA(this,bK,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(bA(this,bY,t),bI(t).then(e=>{let t=ag.createElement("template");t.innerHTML=e,bA(this,bK,t),this.createRenderer()}).catch(console.error))},bf(bS,"template"),bf(bS,"observedAttributes",["template"]),bf(bS,"processor",bu),af.customElements.get("media-theme")||af.customElements.define("media-theme",bS);var bC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bL=(e,t,i)=>(bC(e,t,"read from private field"),i?i.call(e):t.get(e)),bR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bD=(e,t,i,a)=>(bC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bx=(e,t,i)=>(bC(e,t,"access private method"),i),bM=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends bM{}globalThis.DocumentFragment=e}var bN,bO,bP,bU,bB,bW,bH,bV,bq,bF,b$,bK,bj,bY,bG,bZ,bQ,bz,bX,bJ=class extends bM{},b0=class{constructor(e,t={}){bR(this,bX,void 0),bD(this,bX,null==t?void 0:t.detail)}get detail(){return bL(this,bX)}initCustomEvent(){}};bX=new WeakMap;var b1={document:{createElement:function(e,t){return new bJ}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(bJ)},CustomEvent:b0,EventTarget:bM,HTMLElement:bJ,HTMLVideoElement:class extends bM{}},b2="undefined"==typeof window||void 0===globalThis.customElements,b3=b2?b1:globalThis,b5=b2?b1.document:globalThis.document,b4={code:"en"};function b9(e,t=!0){var i;return new b8(t&&null!=(i=null==b4?void 0:b4[e])?i:e,t?b4.code:"en")}var b8=class{constructor(e,t=(e=>null!=(e=b4.code)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function b7(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function b6(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function Ee(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function Et(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function Ei(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var Ea,Er,En,Es=(e,t)=>!!e&&!!t&&(!!e.contains(t)||Es(e,t.getRootNode().host)),Eo="mux.com",El=(()=>{try{return"2.6.0"}catch{}return"UNKNOWN"})(),Ed=(e,{token:t,customDomain:i=Eo,thumbnailTime:a}={})=>{let r=null==t?a:void 0,{aud:n}=Ei(t);if(!(t&&"t"!==n))return`https://image.${i}/${e}/thumbnail.webp${Et({token:t,time:r})}`},Eu=(e,{token:t,customDomain:i=Eo}={})=>{let{aud:a}=Ei(t);if(!(t&&"s"!==a))return`https://image.${i}/${e}/storyboard.vtt${Et({token:t,format:"webp"})}`},Ec=e=>{if(e){if([tV.LIVE,tV.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tV.LIVE}},Eh={crossorigin:"crossOrigin",playsinline:"playsInline"},Em=class{constructor(e,t){bR(this,Ea,void 0),bR(this,Er,void 0),bR(this,En,[]),bD(this,Ea,e),bD(this,Er,t)}[Symbol.iterator](){return bL(this,En).values()}get length(){return bL(this,En).length}get value(){var e;return null!=(e=bL(this,En).join(" "))?e:""}set value(e){var t;e!==this.value&&(bD(this,En,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return bL(this,En)[e]}values(){return bL(this,En).values()}keys(){return bL(this,En).keys()}forEach(e){bL(this,En).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||bL(this,En).push(e)}),(""!==this.value||null!=(t=bL(this,Ea))&&t.hasAttribute(`${bL(this,Er)}`))&&null!=(i=bL(this,Ea))&&i.setAttribute(`${bL(this,Er)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{bL(this,En).splice(bL(this,En).indexOf(e),1)}),null==(t=bL(this,Ea))||t.setAttribute(`${bL(this,Er)}`,`${this.value}`)}contains(e){return bL(this,En).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};Ea=new WeakMap,Er=new WeakMap,En=new WeakMap;var Ep=`[mux-player ${El}]`;function Ev(...e){console.warn(Ep,...e)}function Eb(...e){console.error(Ep,...e)}function EE(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${b9("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),Ev(i)}var Ef={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Eg={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},Ey=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),E_=pm.filter(e=>"error"!==e),EA=Object.values(Ef).filter(e=>![Ef.PLAYSINLINE].includes(e)),Ek=Object.values(Eg);function ET(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var Ew=class extends b3.HTMLElement{static get observedAttributes(){return[...EA,...Ek]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t,i;let a=null==(t=this.media)?void 0:t.querySelector(`track[src="${e.src}"]`);a&&(null==(i=this.media)||i.removeChild(a))}),t.addedNodes.forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}))}).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(e,t,i){var a,r;switch(e){case Eg.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case Eg.VOLUME:{let e=null!=(a=Ee(i))?a:1;this.media&&(this.media.volume=e);return}case Eg.PLAYBACKRATE:{let e=null!=(r=Ee(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:Ey}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:Ey}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=Ee(this.getAttribute(Eg.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(Eg.PLAYBACKRATE,`${e}`):this.removeAttribute(Eg.PLAYBACKRATE)}get crossOrigin(){return ET(this,Ef.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Ef.CROSSORIGIN,`${e}`)}get autoplay(){return null!=ET(this,Ef.AUTOPLAY)}set autoplay(e){e?this.setAttribute(Ef.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(Ef.AUTOPLAY)}get loop(){return null!=ET(this,Ef.LOOP)}set loop(e){e?this.setAttribute(Ef.LOOP,""):this.removeAttribute(Ef.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=ET(this,Ef.MUTED)}set defaultMuted(e){e?this.setAttribute(Ef.MUTED,""):this.removeAttribute(Ef.MUTED)}get playsInline(){return null!=ET(this,Ef.PLAYSINLINE)}set playsInline(e){Eb("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Ef.PRELOAD,e):this.removeAttribute(Ef.PRELOAD)}},ES=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button);
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,EI=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,EC=b5.createElement("template");EC.innerHTML=`
  <style>
    ${EI}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var EL=class extends b3.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),ER(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&ER(this)}};function ER(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=b5.activeElement,b5.activeElement instanceof HTMLElement&&b5.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}EL.styles=EI,EL.template=EC,EL.observedAttributes=["open"],b3.customElements.get("media-dialog")||(b3.customElements.define("media-dialog",EL),b3.MediaDialog=EL);var ED=EL,Ex=b5.createElement("template");Ex.innerHTML=`
  <style>
    ${ED.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var EM=class extends ED{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};EM.template=Ex,b3.customElements.get("mxp-dialog")||(b3.customElements.define("mxp-dialog",EM),b3.MxpDialog=EM);var EN=new WeakMap,EO=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=EN.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=EN.get(this.element);e&&e.delete(this.type)}}static for(t){EN.has(t.element)||EN.set(t.element,new Map);let i=t.attributeName.slice(2),a=EN.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},EP=new Map,EU=new WeakMap,EB=new WeakMap,EW=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(EP.has(this.stringsKey))return EP.get(this.stringsKey);{let e=b5.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),EP.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(EU.get(e)!==i){EU.set(e,i);let t=new v5(i,this.values,this.processor);EB.set(e,t),e instanceof bi?e.replace(...t.children):e.appendChild(t);return}let a=EB.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},EH={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof bt&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof bt){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof bt&&r.attributeName.startsWith("on")&&(EO.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof bi&&(r.replace(""),1)||n instanceof EW&&r instanceof bi&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof bi&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof bt){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function EV(e,...t){return new EW(e,t,EH)}var Eq=e=>EV`
  <style>
    ${ES}
  </style>
  ${EK(e)}
`,EF=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===Ec(e.streamType)&&(t+=" noarrowleft noarrowright"),t},E$=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),EK=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A,k,T,w,S,I,C,L,R,D,x,M,N,O,P,U;let B;return EV`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${EF(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tV.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(U={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},B="",Object.entries(U).forEach(([e,t])=>{null!=t&&(B+=`${b7(e)}: ${t}; `)}),r=B?B.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    exportparts="${E$}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(h=e.targetLiveWindow)&&h}"
      stream-type="${null!=(m=Ec(e.streamType))&&m}"
      crossorigin="${null!=(p=e.crossOrigin)?p:""}"
      playsinline
      autoplay="${null!=(v=e.autoplay)&&v}"
      muted="${null!=(b=e.muted)&&b}"
      loop="${null!=(E=e.loop)&&E}"
      preload="${null!=(f=e.preload)&&f}"
      debug="${null!=(g=e.debug)&&g}"
      prefer-cmcd="${null!=(y=e.preferCmcd)&&y}"
      disable-tracking="${null!=(_=e.disableTracking)&&_}"
      disable-cookies="${null!=(A=e.disableCookies)&&A}"
      prefer-playback="${null!=(k=e.preferPlayback)&&k}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(T=e.beaconCollectionDomain)&&T}"
      player-software-name="${null!=(w=e.playerSoftwareName)&&w}"
      player-software-version="${null!=(S=e.playerSoftwareVersion)&&S}"
      env-key="${null!=(I=e.envKey)&&I}"
      custom-domain="${null!=(C=e.customDomain)&&C}"
      src="${e.src?e.src:!!e.playbackId&&iA(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&iA(e)}"
      exportparts="video"
    >
      ${e.storyboard?EV`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:EV``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==e.poster&&null!=(L=e.poster)&&L}"
        placeholdersrc="${null!=(R=e.placeholder)&&R}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(D=e.isDialogOpen)&&D}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(x=e.dialog)&&x.title?EV`<h3>${e.dialog.title}</h3>`:EV``}
      <p>
        ${null==(M=e.dialog)?void 0:M.message}
        ${null!=(N=e.dialog)&&N.linkUrl?EV`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(O=e.dialog.linkText)?O:""} ${b9("(opens in a new window)")}"
              >${null!=(P=e.dialog.linkText)?P:e.dialog.linkUrl}</a
            >`:EV``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function Ej(e,t,i,a,r){var n,s,o;let l={},d={};switch(e.code){case tU.MEDIA_ERR_NETWORK:switch(l.title=b9("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=b9("Video is not currently available",r),l.message=b9("The live stream or video file are not yet ready.",r),d.message=b9("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=b9("Video does not exist",r),l.message="",d.message=b9("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=b9("Invalid playback URL",r),l.message=b9("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=b9("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=Ei(a),s=Date.now()>1e3*e,o=n!==i,u="v"!==t,c={timeStyle:"medium",dateStyle:"medium"};if(s){l.title=b9("Video URL has expired",r),l.message=b9("The video’s secured playback-token has expired.",r),d.message=b9("The video’s secured playback-token has expired.",r),d.context=b9("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(b4.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(b4.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(o){l.title=b9("Video URL is formatted incorrectly",r),l.message=b9("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=b9("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=b9("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=b9("Video URL is formatted incorrectly",r),l.message=b9("The playback-token is formatted with incorrect information.",r),d.message=b9("The playback-token is formatted with incorrect information.",r),d.context=b9("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=b9("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case tU.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:b9("Media Error",r),message:t},d.file="media-decode-error.md";break}case tU.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(o=null==(s=e.data)?void 0:s.response)?void 0:o.code;if(n>=400&&n<500){e.code=tU.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=Ej(e,t,i,a);break}l={title:b9("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:b9("Error",r),message:e.message}}return t&&(l={title:b9("Your device appears to be offline",r),message:b9("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var EY=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='listbox'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: calc(100% + 16px);
      padding: 2.5px 10px;
    }

    [part~='listbox']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='listbox']::part(option) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='listbox']::part(option-selected) {
      font-weight: 700;
    }

    media-captions-selectmenu,
    media-rendition-selectmenu,
    media-audio-track-selectmenu,
    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-background: var(--_primary-color);
      --media-option-selected-background: transparent;
      --media-option-hover-background: transparent;
      --media-option-hover-outline: var(--_accent-color) solid 1px;
      --media-text-color: var(--_text-color);
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-selectmenu {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-layout: row;
      --media-option-selected-background: var(--_accent-color);
      margin-right: 6px;
      padding: 0;
    }

    media-playback-rate-listbox[part~='listbox']::part(option) {
      padding: 6px 4px;
    }

    media-playback-rate-listbox[part~='listbox']::part(option-selected) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 2;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      animation: 0.3s linear forwards pre-play-hide;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button
        slot="button"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
          <path
            d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
          <path
            d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
          />
          <path
            d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
          />
          <path
            d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
          />
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" exportparts="option" part="bottom captions listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateSelect">
    <media-playback-rate-selectmenu
      part="bottom playback-rate selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-playback-rate-button slot="button" part="bottom playback-rate button"></media-playback-rate-button>
      <media-playback-rate-listbox
        slot="listbox"
        rates="{{playbackrates}}"
        exportparts="option"
        part="bottom playback-rate listbox"
      ></media-playback-rate-listbox>
    </media-playback-rate-selectmenu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu
      part="bottom audio-track selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
          <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
          <path
            d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" exportparts="option" part="bottom audio-track listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
          <path
            d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" exportparts="option" part="bottom rendition listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="streamtype == 'on-demand'">
          <template if="!breakpointsm"> {{>SeekBackwardButton section="center"}} </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm"> {{>SeekForwardButton section="center"}} </template>
        </template>

        <template if="streamtype == 'live'">
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton section="center"}} </template>
          </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekForwardButton section="center"}} </template>
          </template>
        </template>
      </div>

      <!-- Auotplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>PlaybackRateSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}} {{>CastButton}}
          {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateSelect}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          <template if="breakpointsm">
            {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}} {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,EG=b5.createElement("template");"innerHTML"in EG&&(EG.innerHTML=EY);var EZ,EQ,Ez=class extends bS{};Ez.template=null==(EQ=null==(EZ=EG.content)?void 0:EZ.children)?void 0:EQ[0],b3.customElements.get("media-theme-gerwig")||b3.customElements.define("media-theme-gerwig",Ez);var EX={SRC:"src",POSTER:"poster"},EJ={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref"},E0=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function E1(e){let t=e.hasAttribute(EJ.TITLE)?{video_title:e.getAttribute(EJ.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var E2,E3,E5,E4,E9,E8,E7,E6,fe,ft,fi,fa,fr,fn,fs,fo,fl,fd,fu,fc,fh,fm=Object.values(vj),fp=Object.values(EX),fv=Object.values(EJ),fb={dialog:void 0,isDialogOpen:!1},fE={redundant_streams:!0},ff=class extends Ew{constructor(){super(),bR(this,E8),bR(this,E6),bR(this,ft),bR(this,fa),bR(this,fn),bR(this,fo),bR(this,fd),bR(this,fc),bR(this,E2,!1),bR(this,E3,{}),bR(this,E5,!0),bR(this,E4,new Em(this,"hotkeys")),bR(this,E9,{...fb,onCloseErrorDialog:()=>bx(this,ft,fi).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{Es(this,b5.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),bx(this,E6,fe).call(this),this.isConnected&&bx(this,E8,E7).call(this)}static get observedAttributes(){var e;return[...null!=(e=Ew.observedAttributes)?e:[],...fp,...fm,...fv]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=E1(this))}attributeChangedCallback(e,t,i){var a;switch(bx(this,E8,E7).call(this),super.attributeChangedCallback(e,t,i),e){case EJ.HOTKEYS:bL(this,E4).value=i;break;case EJ.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&Ev(b9("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case EJ.THUMBNAIL_TOKEN:{let{aud:e}=Ei(i);i&&"t"!==e&&Ev(b9("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case EJ.STORYBOARD_TOKEN:{let{aud:e}=Ei(i);i&&"s"!==e&&Ev(b9("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case vj.PLAYBACK_ID:null!=i&&i.includes("?token")&&Eb(b9("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case vj.STREAM_TYPE:i&&![tV.LIVE,tV.ON_DEMAND,tV.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:EE({file:"invalid-stream-type.md",message:b9("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tV.LIVE?null==this.getAttribute(EJ.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[vj.PLAYBACK_ID,EX.SRC,EJ.PLAYBACK_TOKEN].includes(e)&&t!==i&&bD(this,E9,{...bL(this,E9),...fb}),bx(this,fa,fr).call(this,{[null!=(a=Eh[e])?a:b6(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(vj.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?t$.includes(e)?this.setAttribute(vj.PREFER_CMCD,e):Ev(`Invalid value for preferCmcd. Must be one of ${t$.join()}`):this.removeAttribute(vj.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(iX.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(iX.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(EJ.THEME))?e:"gerwig"}set theme(e){this.setAttribute(EJ.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(E0.includes(i))continue;let a=e.getAttribute(i);t[b6(i)]=""===a||a}return t}set themeProps(e){var t,i;bx(this,E8,E7).call(this);let a={...this.themeProps,...e};for(let r in a){if(E0.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(b7(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(b7(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(vj.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(vj.PLAYBACK_ID,e):this.removeAttribute(vj.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=fg(this,EX.SRC))?e:void 0:null!=(t=this.getAttribute(EX.SRC))?t:void 0}set src(e){e?this.setAttribute(EX.SRC,e):this.removeAttribute(EX.SRC)}get poster(){var e;let t=this.getAttribute(EX.POSTER);return null!=t?t:this.playbackId&&!this.audio?Ed(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(EX.POSTER,e):this.removeAttribute(EX.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(EJ.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(EJ.STORYBOARD_SRC,e):this.removeAttribute(EJ.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tV.LIVE,tV.UNKNOWN].includes(this.streamType)?void 0:Eu(this.playbackId,{customDomain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(EJ.AUDIO)}set audio(e){if(!e){this.removeAttribute(EJ.AUDIO);return}this.setAttribute(EJ.AUDIO,"")}get hotkeys(){return bL(this,E4)}get nohotkeys(){return this.hasAttribute(EJ.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(EJ.NOHOTKEYS);return}this.setAttribute(EJ.NOHOTKEYS,"")}get thumbnailTime(){return Ee(this.getAttribute(EJ.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(EJ.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(EJ.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(EJ.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=fg(this,EJ.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(EJ.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(EJ.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(EJ.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(EJ.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(EJ.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(EJ.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b3.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(EJ.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(EJ.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(EJ.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(EJ.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(EJ.PLAYBACK_RATES))return this.getAttribute(EJ.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(EJ.PLAYBACK_RATES);return}this.setAttribute(EJ.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=Ee(this.getAttribute(EJ.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(EJ.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=Ee(this.getAttribute(EJ.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(EJ.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(EJ.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(EJ.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(EJ.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ee(this.getAttribute(EJ.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(EJ.DEFAULT_DURATION):this.setAttribute(EJ.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(vj.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(vj.PLAYER_SOFTWARE_VERSION))?e:El}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vj.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vj.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vj.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(vj.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vj.MAX_RESOLUTION,e):this.removeAttribute(vj.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vj.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vj.MIN_RESOLUTION,e):this.removeAttribute(vj.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(vj.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vj.RENDITION_ORDER,e):this.removeAttribute(vj.RENDITION_ORDER))}get extraSourceParams(){return this.hasAttribute(EJ.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(EJ.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):fE}set extraSourceParams(e){null==e?this.removeAttribute(EJ.EXTRA_SOURCE_PARAMS):this.setAttribute(EJ.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(vj.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vj.CUSTOM_DOMAIN,e):this.removeAttribute(vj.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=fg(this,vj.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(vj.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(EJ.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(EJ.NO_VOLUME_PREF,""):this.removeAttribute(EJ.NO_VOLUME_PREF)}get debug(){return null!=fg(this,vj.DEBUG)}set debug(e){e?this.setAttribute(vj.DEBUG,""):this.removeAttribute(vj.DEBUG)}get disableTracking(){return null!=fg(this,vj.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(vj.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=fg(this,vj.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(vj.DISABLE_COOKIES,""):this.removeAttribute(vj.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(vj.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tV.UNKNOWN}set streamType(e){this.setAttribute(vj.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(EJ.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(EJ.DEFAULT_STREAM_TYPE))?i:tV.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(EJ.DEFAULT_STREAM_TYPE,e):this.removeAttribute(EJ.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(EJ.TARGET_LIVE_WINDOW)?+this.getAttribute(EJ.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(EJ.TARGET_LIVE_WINDOW):this.setAttribute(EJ.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return Ee(fg(this,vj.START_TIME))}set startTime(e){this.setAttribute(vj.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(vj.PREFER_PLAYBACK);if(e===tq.MSE||e===tq.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tq.MSE||e===tq.NATIVE?this.setAttribute(vj.PREFER_PLAYBACK,e):this.removeAttribute(vj.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(bx(this,E8,E7).call(this),!this.media){Eb("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...E1(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(bx(this,E8,E7).call(this),!this.media){Eb("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(bx(this,E8,E7).call(this),!this.media){Eb("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(EJ.PLAYBACK_TOKEN),t=this.getAttribute(EJ.THUMBNAIL_TOKEN),i=this.getAttribute(EJ.STORYBOARD_TOKEN);return{...bL(this,E3),...null!=e?{playback:e}:{},...null!=t?{thumbnail:t}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){bD(this,E3,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(EJ.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(EJ.PLAYBACK_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(EJ.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(EJ.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(EJ.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(EJ.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return t8(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function fg(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}E2=new WeakMap,E3=new WeakMap,E5=new WeakMap,E4=new WeakMap,E9=new WeakMap,E8=new WeakSet,E7=function(){var e,t,i,a;if(!bL(this,E2)){bD(this,E2,!0),bx(this,fa,fr).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof b3.HTMLElement))throw""}catch{Eb("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof vZ))throw""}catch{Eb("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof rV))throw""}catch{Eb("<media-controller> failed to upgrade!")}a=this,a.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=a.media)||t.append(e.cloneNode())}),E_.forEach(e=>{var t;null==(t=a.media)||t.addEventListener(e,e=>{a.dispatchEvent(new Event(e.type))})}),bx(this,fn,fs).call(this),bx(this,fo,fl).call(this),bx(this,fd,fu).call(this),bD(this,E5,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a3.USER_INACTIVE))||t),bx(this,fc,fh).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>{bx(this,fa,fr).call(this)})}},E6=new WeakSet,fe=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},ft=new WeakSet,fi=function(e){Object.assign(bL(this,E9),e),bx(this,fa,fr).call(this)},fa=new WeakSet,fr=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(Eq((t={...bL(this,E9),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(EJ.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=b3.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(EJ.NOHOTKEYS),hotKeys:this.getAttribute(EJ.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(vj.TARGET_LIVE_WINDOW),streamType:Ec(this.getAttribute(vj.STREAM_TYPE)),primaryColor:this.getAttribute(EJ.PRIMARY_COLOR),secondaryColor:this.getAttribute(EJ.SECONDARY_COLOR),accentColor:this.getAttribute(EJ.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(EJ.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(vj.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(EJ.TITLE),novolumepref:this.hasAttribute(EJ.NO_VOLUME_PREF),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},fn=new WeakSet,fs=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(E0.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},fo=new WeakSet,fl=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof tU||(t=new tU(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){Ev(t),t.data&&Ev(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=Ej(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&EE(a),Eb(t),t.data&&Eb(`${t.name} data:`,t.data),bx(this,ft,fi).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tU))return e;let{devlog:r}=Ej(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new tU(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},fd=new WeakSet,fu=function(){var e,t,i,a;let r=()=>bx(this,fa,fr).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},fc=new WeakSet,fh=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tV.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tV.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a3.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,bL(this,E5))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a3.USER_INACTIVE))||t;bL(this,E5)!==a&&(bD(this,E5,a),n(i,bL(this,E5)))})},b3.customElements.get("mux-player")||(b3.customElements.define("mux-player",ff),b3.MuxPlayerElement=ff);var fy={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},f_=e=>null==e,fA=(e,t)=>!f_(t)&&e in t,fk=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),fT=(e,t)=>{if(!("boolean"==typeof t&&!t))return fA(e,fy)?fy[e]:/[A-Z]/.test(e)?fk(e):e},fw=(e,t)=>"boolean"==typeof e?"":e,fS=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((e,t)=>{let[i,a]=t,r=fT(i,a);if(!r)return e;let n=fw(a,i);return e[r]=n,e},{})},fI=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{t.forEach(e=>{e&&("function"==typeof e?e(a.current):e.current=a.current)})},[t]),a},fC=Object.prototype.hasOwnProperty,fL=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!fC.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},fR=(e,t,i)=>!fL(t,e[i]),fD=(e,t,i)=>{e[i]=t},fx=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:fD,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:fR;return(0,c.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},fM=(()=>{try{return"2.6.0"}catch(e){}return"UNKNOWN"})(),fN=c.forwardRef((e,t)=>{let{children:i,...a}=e;return c.createElement("mux-player",fS({...a,ref:t}),i)}),fO=(e,t,i)=>(0,c.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),fP=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:E,onPause:f,onSeeking:g,onSeeked:y,onStalled:_,onSuspend:A,onEnded:k,onError:T,onCuePointChange:w,onCuePointsChange:S,metadata:I,tokens:C,paused:L,playbackId:R,playbackRates:D,currentTime:x,themeProps:M,extraSourceParams:N,_hlsConfig:O,...P}=t;return fx("playbackRates",D,e),fx("metadata",I,e),fx("extraSourceParams",N,e),fx("_hlsConfig",O,e),fx("themeProps",M,e),fx("tokens",C,e),fx("playbackId",R,e),fx("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&fR(e,t,i)),fx("currentTime",x,e,(e,t)=>{null!=t&&(e.currentTime=t)}),fO("abort",e,i),fO("canplay",e,a),fO("canplaythrough",e,r),fO("emptied",e,n),fO("loadstart",e,s),fO("loadeddata",e,o),fO("loadedmetadata",e,l),fO("progress",e,d),fO("durationchange",e,u),fO("volumechange",e,c),fO("ratechange",e,h),fO("resize",e,m),fO("waiting",e,p),fO("play",e,v),fO("playing",e,b),fO("timeupdate",e,E),fO("pause",e,f),fO("seeking",e,g),fO("seeked",e,y),fO("stalled",e,_),fO("suspend",e,A),fO("ended",e,k),fO("error",e,T),fO("cuepointchange",e,w),fO("cuepointschange",e,S),[P]},fU=c.forwardRef((e,t)=>{let i=(0,c.useRef)(null),a=fI(i,t),[r]=fP(i,e);return c.createElement(fN,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:fM,...r})})}}]);