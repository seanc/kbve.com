import{r as c}from"./index.0d03162d.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var C=w,l=k,m=decodeURIComponent,y=encodeURIComponent,d=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function w(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var r={},i=e||{},o=t.split(";"),s=i.decode||m,n=0;n<o.length;n++){var a=o[n],f=a.indexOf("=");if(!(f<0)){var h=a.substring(0,f).trim();if(r[h]==null){var u=a.substring(f+1,a.length).trim();u[0]==='"'&&(u=u.slice(1,-1)),r[h]=S(u,s)}}}return r}function k(t,e,r){var i=r||{},o=i.encode||y;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!d.test(t))throw new TypeError("argument name is invalid");var s=o(e);if(s&&!d.test(s))throw new TypeError("argument val is invalid");var n=t+"="+s;if(i.maxAge!=null){var a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");n+="; Max-Age="+Math.floor(a)}if(i.domain){if(!d.test(i.domain))throw new TypeError("option domain is invalid");n+="; Domain="+i.domain}if(i.path){if(!d.test(i.path))throw new TypeError("option path is invalid");n+="; Path="+i.path}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite){var f=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(f){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return n}function S(t,e){try{return e(t)}catch{return t}}function x(){return typeof document=="object"&&typeof document.cookie=="string"}function O(t,e){return typeof t=="string"?C(t,e):typeof t=="object"&&t!==null?t:{}}function E(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function v(t,e){e===void 0&&(e={});var r=_(t);if(E(r,e.doNotParse))try{return JSON.parse(r)}catch{}return t}function _(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},p.apply(this,arguments)},b=function(){function t(e,r){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=O(e,r),new Promise(function(){i.HAS_DOCUMENT_COOKIE=x()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){!this.HAS_DOCUMENT_COOKIE||(this.cookies=C(document.cookie,e))},t.prototype._emitChange=function(e){for(var r=0;r<this.changeListeners.length;++r)this.changeListeners[r](e)},t.prototype.get=function(e,r,i){return r===void 0&&(r={}),this._updateBrowserValues(i),v(this.cookies[e],r)},t.prototype.getAll=function(e,r){e===void 0&&(e={}),this._updateBrowserValues(r);var i={};for(var o in this.cookies)i[o]=v(this.cookies[o],e);return i},t.prototype.set=function(e,r,i){var o;typeof r=="object"&&(r=JSON.stringify(r)),this.cookies=p(p({},this.cookies),(o={},o[e]=r,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=l(e,r,i)),this._emitChange({name:e,value:r,options:i})},t.prototype.remove=function(e,r){var i=r=p(p({},r),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=p({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=l(e,"",i)),this._emitChange({name:e,value:void 0,options:r})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var r=this.changeListeners.indexOf(e);r>=0&&this.changeListeners.splice(r,1)},t}();const T=b;var g=c.exports.createContext(new T);g.Provider;g.Consumer;const L=g;function A(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function D(t){var e=c.exports.useContext(L);if(!e)throw new Error("Missing <CookiesProvider>");var r=e.getAll(),i=c.exports.useState(r),o=i[0],s=i[1],n=c.exports.useRef(o);A()&&c.exports.useLayoutEffect(function(){function h(){var u=e.getAll();M(t||null,u,n.current)&&s(u),n.current=u}return e.addChangeListener(h),function(){e.removeChangeListener(h)}},[e]);var a=c.exports.useMemo(function(){return e.set.bind(e)},[e]),f=c.exports.useMemo(function(){return e.remove.bind(e)},[e]);return[o,a,f]}function M(t,e,r){if(!t)return!0;for(var i=0,o=t;i<o.length;i++){var s=o[i];if(e[s]!==r[s])return!0}return!1}export{D as u};