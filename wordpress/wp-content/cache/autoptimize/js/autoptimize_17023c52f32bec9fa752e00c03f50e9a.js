!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=window._ckyConfig,o=window._ckyStyles;n._backupNodes=[],n._resetConsentID=!1,n._bannerState=!1,n._preferenceOriginTag=!1,window.cookieyes=window.cookieyes||{};const c=window.cookieyes;c._ckyConsentStore=new Map,c._ckyGetCookieMap=function(){const e={};try{document.cookie.split(";").map(t=>{const[n,o]=t.split("=");n&&(e[n.trim()]=o)})}catch(e){}return e};const r=c._ckyGetCookieMap();c._ckyGetFromStore=function(e){return c._ckyConsentStore.get(e)||""},c._ckySetInStore=function(e,t){c._ckyConsentStore.set(e,t);let o=[];for(const[e,t]of c._ckyConsentStore)o.push(`${e}:${t}`);const r=n&&n._expiry?n._expiry:365;c._ckySetCookie("cookieyes-consent",o.join(","),r)};const s=(r["cookieyes-consent"]||"").split(",").reduce((e,t)=>{if(!t)return e;const[n,o]=t.split(":");return e[n]=o,e},{});function i(e){const t=document.querySelector("[data-cky-tag="+e+"]");return t||!1}function a(e,t){const n=l(e);n&&n.addEventListener("click",t)}function u(e,t,n,o=!0){const c=l(t,o);return c&&c.classList[e](n)}function l(e,t){let n=e;switch(!0){case e.startsWith("="):n=`[data-cky-tag="${e.substring(1)}"]`}const o=document.querySelector(n);return!o||t&&!o.parentElement?null:t?o.parentElement:o}function d(){b(),"gdpr"===n._bannerConfig.settings.applicableLaw&&!0===n._bannerConfig.config.revisitConsent.status&&E()}function y(){!function(){if(document.getElementById("cky-style")||!o)return;document.head.insertAdjacentHTML("beforeend",` <style id="cky-style">${o.css}</style>`)}(),function(){const e=n._tags;Array.prototype.forEach.call(e,(function(e){document.querySelectorAll("[data-cky-tag="+e.tag+"]").forEach((function(t){let n="";for(const t in e.styles)n+=`${t}: ${e.styles[t]};`;t.style.cssText=n}))}))}(),function(){const e=document.getElementById("ckyBannerTemplate").innerHTML,t=(new DOMParser).parseFromString(e,"text/html");(function(e){const t=e.querySelector('[data-cky-tag="detail"] .cky-footer-shadow'),n=e.querySelector('[data-cky-tag="detail"]');if(!t)return;const o=n&&n.style.backgroundColor||"#ffffff";t.style.background=`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${o} 100%)`})(t),document.body.insertAdjacentHTML("afterbegin",t.body.innerHTML),T(),function(){for(const{slug:e}of n._categories)a("detail-category-title",()=>document.getElementById("ckyCategory"+e).classList.toggle("cky-tab-active"));a("=settings-button",()=>$("settings-button")),a("=detail-close",()=>v()),a("=optout-cancel-button",()=>v()),a("=close-button",()=>(c._ckySetInStore("action","yes"),void d())),a("=donotsell-button",()=>$("donotsell-button")),a("=reject-button",N("reject")),a("=accept-button",N("all")),a("=detail-accept-button",N("all")),a("=detail-save-button",N()),a("=detail-category-preview-save-button",N()),a("=optout-confirm-button",N()),a("=detail-reject-button",N("reject")),a("=revisit-consent",()=>_revisitCkyConsent()),function(){if(!n._bannerConfig.config.auditTable.status)return;const e=n._categories.map(({slug:e})=>e);e.map(t=>{const n="#ckyDetailCategory"+t;a(n,({target:{id:o}})=>{o!=="ckySwitch"+t&&function(){return u("toggle",...arguments)}(n,"cky-accordion-active",!1)&&e.filter(e=>e!==t).map(e=>function(){return u("remove",...arguments)}("#ckyDetailCategory"+e,"cky-accordion-active",!1))})})}()}(),function(){const e=n._bannerConfig.config.videoPlaceholder.status,t=n._bannerConfig.config.videoPlaceholder.styles;if(!e)return;if(!e)return;const o=document.querySelectorAll('[data-cky-tag="placeholder-title"]');if(o.length<1)return;Array.from(o).forEach(e=>{e.style.display="block",e.addEventListener("click",()=>{c._ckyGetFromStore("action")&&_revisitCkyConsent()});for(const n in t)t[n]&&(e.style[n]=t[n])})}(),function(){const e=n._shortCodes.find(e=>"cky_readmore"===e.key);if(!e.status)return;const t=e.content,o=n._bannerConfig.config.readMore.styles,c=document.querySelector('[data-cky-tag="description"]');if(!c)return;if(c.childNodes.length>1){const e=document.querySelector('[data-cky-tag="description"] p:last-child');e&&e.insertAdjacentHTML("beforeend","&nbsp;"+t)}else c.insertAdjacentHTML("beforeend","&nbsp;"+t);const r=document.querySelectorAll('[data-cky-tag="readmore-button"]');if(r.length<1)return;Array.from(r).forEach(e=>{for(const t in o)o[t]&&(e.style[t]=o[t])})}(),function(){const e=document.getElementById("cky-style-inline");e&&e.remove()}(),function(){const e=i("notice");if(!e)return!1;const t=e.closest(".cky-consent-container");if(!t)return!1;const o=n._bannerConfig.settings.type;let c=n._bannerConfig.settings.position;"popup"===o&&(c="center");const r="cky-"+o+"-"+c;t.classList.add(r);const s=i("revisit-consent");if(!s)return!1;const a="cky-revisit-"+n._bannerConfig.config.revisitConsent.position;s.classList.add(a)}(),function(){if(!n._rtl)return;["notice","detail","optout-popup","revisit-consent","video-placeholder"].forEach((function(e){i(e)&&i(e).classList.add("cky-rtl")}))}(),function(){let e="flex-end";["detail-powered-by","optout-powered-by"].map(t=>{const n=document.querySelector(`[data-cky-tag="${t}"]`);n&&("optout-powered-by"===t&&(e="center"),n.style.display="flex",n.style.justifyContent=e,n.style.alignItems="center")})}()}(),function(){if("gdpr"!==p())return;const e=n._shortCodes.find(e=>"cky_show_desc"===e.key),t=n._shortCodes.find(e=>"cky_hide_desc"===e.key);if(!e||!t)return;const o=t.content,c=e.content,r=window.innerWidth<376?150:300,s=document.querySelector('[data-cky-tag="detail-description"]');if(s.textContent.length<r)return;const i=s.innerHTML,u=(new DOMParser).parseFromString(i,"text/html").querySelectorAll("body > p");if(u.length<=1)return;let l="";for(let e=0;e<u.length;e++){if(e===u.length-1)return;const t=u[e];if(`${l}${t.outerHTML}`.length>r&&t.insertAdjacentHTML("beforeend","...&nbsp;"+c),l=`${l}${t.outerHTML}`,l.length>r)break}function d(){s.innerHTML=`${i}${o}`,a("=hide-desc-button",y)}function y(){s.innerHTML=l,a("=show-desc-button",d)}y()}(),!c._ckyGetFromStore("action")||function(){let e=new URL(document.location).searchParams;return e.get("cky_preview")&&"true"===e.get("cky_preview")}()?(_(),function(){const e=p();c._ckySetInStore("consent","no");const t={accepted:[],rejected:[]};let o="yes";for(const r of n._categories)"gdpr"!==e||r.isNecessary||r.defaultConsent[e]||(o="no"),"no"===o?t.rejected.push(r.slug):t.accepted.push(r.slug),c._ckySetInStore(""+r.slug,o);q()}(),function(){if(c._ckyGetFromStore("consentid"))return;const e=c._ckyRandomString(32);c._ckySetInStore("consentid",e),n._resetConsentID=!0}()):d()}async function f(){try{y(),function(){for(const e of n._categories)"yes"!==c._ckyGetFromStore(e.slug)&&j(e)}(),document.querySelector("body").addEventListener("click",e=>{const t=".cky-banner-element, .cky-banner-element *";(e.target.matches?e.target.matches(t):e.target.msMatchesSelector(t))&&_revisitCkyConsent()})}catch(e){console.error(e)}}var g;function p(){return n._bannerConfig.settings.applicableLaw}function k(){return n._bannerConfig.settings.type}function m(){const e=i("notice"),t=e&&e.closest(".cky-consent-container")||!1;return t&&t||!1}function b(){const e=m();e&&e.classList.add("cky-hide")}function _(){const e=m();e&&e.classList.remove("cky-hide")}function h(){if("classic"===k())return m();let e="ccpa"===p()?i("optout-popup"):i("detail");return e&&e.closest(".cky-modal")||!1}function v(){const e=h();e&&e.classList.remove(w()),"classic"!==k()&&(!function(){const e=document.querySelector(".cky-overlay");e&&e.classList.add("cky-hide")}(),c._ckyGetFromStore("action")||_()),c._ckyGetFromStore("action")&&E();const t=n._preferenceOriginTag;t&&function(e){const t=i(e);if(!t)return;t.focus()}(t)}function S(){const e=h();e&&e.classList.add(w()),"classic"!==k()&&(!function(){const e=document.querySelector(".cky-overlay");e&&e.classList.remove("cky-hide")}(),b())}function C(){const e=h();e&&e.classList.toggle(w()),"classic"!==k()&&function(){const e=document.querySelector(".cky-overlay");e&&e.classList.toggle("cky-hide")}()}function w(){return"classic"===k()?"cky-consent-bar-expand":"cky-modal-open"}function L(){if("ccpa"===p())return!1;const e=i("revisit-consent");return e&&e||!1}function E(){const e=L();e&&e.classList.remove("cky-revisit-hide")}function $(e=!1){n._preferenceOriginTag=e,"classic"===k()?C():S()}function j({cookies:e}){const t=c._ckyGetCookieMap();for(const{cookieID:n,domain:o}of e)t[n]&&[o,""].map(e=>c._ckySetCookie(n,"",0,e))}function T(e=!1){for(const t of n._categories){const o=c._ckyGetFromStore(t.slug);A(t,"yes"===o||!o&&t.defaultConsent[p()]||t.isNecessary,t.isNecessary,n._shortCodes.find(e=>"cky_category_toggle_label"===e.key).content.replace("[cky_preference_{{category_slug}}_title]",t.name),e),M(t)}}function A(e,t,o,c,r=!1){const s=n._bannerConfig.config.preferenceCenter.toggle,i=s.states.active.styles["background-color"],a=s.states.inactive.styles["background-color"];["ckyCategoryDirect","ckySwitch"].map(s=>{const u=document.getElementById(`${s}${e.slug}`);u&&(!function(e,t={},o=!1){if(o)return;"detail-category-toggle"===e.parentElement.getAttribute("data-cky-tag")?function(e,t){let o=e.closest(".cky-accordion-item");if(!o)return;const c=o.querySelector(".cky-switch"),r=o.querySelector(".cky-always-active");t.isNecessary?c&&c.remove():(r&&r.remove(),("classic"===k()&&n._bannerConfig.config.categoryPreview.status||t.cookies&&0===t.cookies.length)&&c&&c.remove())}(e,t):"detail-category-preview-toggle"===e.parentElement.getAttribute("data-cky-tag")&&function(e,t){t.cookies&&0===t.cookies.length&&!t.isNecessary&&e.parentElement.parentElement.remove()}(e,t)}(u,e,r),u.checked=t,u.disabled=o,u.style.backgroundColor=t?i:a,I(u,t,c),r||u.addEventListener("change",({currentTarget:e})=>{const t=e.checked;e.style.backgroundColor=t?i:a,I(u,t,c)}))})}function M(e){if(!1===n._bannerConfig.config.auditTable.status){const t=document.querySelector(`#ckyDetailCategory${e.slug} [data-cky-tag="audit-table"]`);t&&t.remove();const n=document.querySelector(`#ckyDetailCategory${e.slug} .cky-accordion-chevron`);n&&n.classList.add("cky-accordion-chevron-hide")}}function I(e,t,o){if(!e)return;const c=`cky_${t?"disable":"enable"}_category_label`,r=n._shortCodes.find(e=>e.key===c);if(!r)return;const s=o.replace(/{{status}}/g,t?"disable":"enable").replace(`[${c}]`,r.content);e.setAttribute("aria-label",s)}function N(e="custom"){return()=>{!function(e="all"){const t=p();c._ckySetInStore("action","yes"),"gdpr"===t?c._ckySetInStore("consent","reject"===e?"no":"yes"):c._ckySetInStore("consent","yes");const o={accepted:[],rejected:[]};for(const r of n._categories){let n="no";n="gdpr"===t?r.isNecessary||"reject"!==e&&("custom"!==e||G(r.slug))?"yes":"no":r.defaultConsent.ccpa?"yes":"no",c._ckySetInStore(""+r.slug,n),"no"===n?(o.rejected.push(r.slug),j(r)):o.accepted.push(r.slug)}q()}(e),d(),v(),function(){"gdpr"===p()&&T(!0);!0===n._bannerConfig.behaviours.reloadBannerOnAccept&&window.location.reload()}()}}["consentid","consent","action"].concat(n._categories.map(({slug:e})=>e)).map(e=>c._ckyConsentStore.set(e,s[e]||"")),c._ckyGetCookie=function(e){const t=new RegExp(e+"=([^;]+)").exec(document.cookie);return t&&Array.isArray(t)&&t[1]?unescape(t[1]):null},c._ckySetCookie=function(e,t,o=0,c=n._rootDomain){const r=new Date;c&&(c="domain="+c);const s=0===o?0:r.setTime(r.getTime()+24*o*60*60*1e3);document.cookie=`${e}=${t}; expires=${new Date(s).toUTCString()}; path=/;${c}; SameSite=Strict;`},_revisitCkyConsent=function(){"classic"===k()&&_(),$(),function(e=!1){const t=L();t&&(!0===e?_ckyRevisitHide():t.classList.toggle("cky-revisit-hide"))}()},c._ckyRandomString=function(e,t=!0){const n=(t?"0123456789":"")+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz",o=[];for(let t=0;t<e;t++)o.push(n[Math.floor(Math.random()*n.length)]);return t?btoa(o.join("")).replace(/\=+$/,""):o.join("")},g=async function(){try{await f()}catch(e){console.error(e)}},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",g):g());const x=document.createElement;function q(){if(1===navigator.doNotTrack)return;const e=c._ckyGetFromStore("consent");("gdpr"!==p()||e&&"yes"===e)&&(n._backupNodes=n._backupNodes.filter(({position:e,node:t,uniqueID:n})=>{try{if(B(t.src))return!0;if("script"===t.nodeName.toLowerCase()){const n=document.createElement("script");n.src=t.src,n.type="text/javascript",document[e].appendChild(n)}else{const e=document.getElementById(n);if(!e)return!1;const o=document.createElement("iframe");o.src=t.src,o.width=e.offsetWidth,o.height=e.offsetHeight,e.parentNode.insertBefore(o,e),e.parentNode.removeChild(e)}return!1}catch(e){return console.error(e),!1}}))}function D(e,t){const o=e.hasAttribute("data-cookieyes")&&e.getAttribute("data-cookieyes");if(!o)return;const c=o.replace("cookieyes-","");for(const e of n._categories)if(e.isNecessary&&e.slug===c)return;const r=n._providersToBlock.find(({re:e})=>e===t);r?r.isOverriden?r.categories.includes(c)||r.categories.push(c):(r.categories=[c],r.isOverriden=!0):n._providersToBlock.push({re:t,categories:[c],fullPath:!1})}document.createElement=(...e)=>{const t=x.call(document,...e);if("script"!==t.nodeName.toLowerCase())return t;const n=t.setAttribute.bind(t);return Object.defineProperties(t,{src:{get:function(){return t.getAttribute("src")},set:function(e){return P(t,e)&&n("type","javascript/blocked"),n("src",e),!0}},type:{get:function(){return t.getAttribute("type")},set:function(e){return e=P(t)?"javascript/blocked":e,n("type",e),!0}}}),t.setAttribute=(e,o)=>{if("type"===e||"src"===e)return t[e]=o;n(e,o),"data-cookieyes"!==e||P(t)||n("type","text/javascript")},t};const O=new MutationObserver((function(e){for(const{addedNodes:t}of e)for(const e of t)if(e.src&&e.nodeName&&["script","iframe"].includes(e.nodeName.toLowerCase()))try{const t=e.src.startsWith("//")?`${window.location.protocol}${e.src}`:e.src,{hostname:o,pathname:r}=new URL(t),s=`${o}${r}`.replace(/^www./,"");if(D(e,s),!B(s))continue;const i=c._ckyRandomString(8,!1);if("iframe"===e.nodeName.toLowerCase())F(e,i);else{e.type="javascript/blocked";const t=function(n){n.preventDefault(),e.removeEventListener("beforescriptexecute",t)};e.addEventListener("beforescriptexecute",t)}const a=document.head.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY?"head":"body";e.remove(),n._backupNodes.push({position:a,node:e.cloneNode(),uniqueID:i})}catch(e){}}));function H(e){const t=c._ckyGetFromStore(e);return"no"===t||!t&&n._categories.some(t=>t.slug===e&&!t.isNecessary)}function B(e){const t=n._providersToBlock.find(({re:t})=>{return new RegExp((n=t,n.replace(/[.*+?^${}()[\]\\]/g,"\\$&"))).test(e);var n});return t&&t.categories.some(e=>H(e))}function P(e,t){return e.hasAttribute("data-cookieyes")&&H(e.getAttribute("data-cookieyes").replace("cookieyes-",""))||B(t||e.src)}function G(e){return["ckySwitch","ckyCategoryDirect"].some(t=>{const n=document.getElementById(`${t}${e}`);return n&&n.checked})}function F(e,t){const o=n._shortCodes.find(e=>"cky_video_placeholder"===e.key).content,{offsetWidth:c,offsetHeight:r}=e;if(0===c||0===r)return;e.insertAdjacentHTML("beforebegin",(""+o).replace("[UNIQUEID]",t));const s=document.getElementById(t);s.style.width=c+"px",s.style.height=r+"px";const i=document.querySelector(`#${t} .video-placeholder-text-normal`);i.style.display="none";const a=function(e){const t=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return!!(t&&Array.isArray(t)&&t[2]&&11===t[2].length)&&t[2]}(e.src);a&&(s.classList.replace("video-placeholder-normal","video-placeholder-youtube"),s.style.backgroundImage=`linear-gradient(rgba(76,72,72,.7),rgba(76,72,72,.7)),url('https://img.youtube.com/vi/${a}/maxresdefault.jpg')`,i.classList.replace("video-placeholder-text-normal","video-placeholder-text-youtube"))}O.observe(document.documentElement,{childList:!0,subtree:!0}),window.revisitCkyConsent=()=>_revisitCkyConsent()}]);
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});