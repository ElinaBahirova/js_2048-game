parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".button"),u=document.querySelector(".message-start");function c(e){return Math.random()<e}function d(t){for(var r=Math.floor(16*Math.random()),n=Math.floor(16*Math.random());r===n;)r=Math.floor(16*Math.random()),n=Math.floor(16*Math.random());for(var a=0;a<e(t).length;a++)if(a===r&&(t[a].dataset.number="2"),a===n){var o=c(.1)?"4":"2";t[a].dataset.number=o}h()}function i(){var t=!1,r=document.querySelectorAll(".field-row"),n=[document.querySelectorAll(".field-row :first-child"),document.querySelectorAll(".field-row :nth-child(2)"),document.querySelectorAll(".field-row :nth-child(3)"),document.querySelectorAll(".field-row :last-child")];return e(r).forEach(function(e){for(var r=e.querySelectorAll(".field-cell"),n=0;n<r.length-1;n++)if(r[n].dataset.number===r[n+1].dataset.number)return void(t=!0)}),n.forEach(function(e){for(var r=0;r<e.length-1;r++)if(e[r].dataset.number===e[r+1].dataset.number)return void(t=!0)}),t}function f(){var e=0,t=[document.querySelectorAll(".field-row :first-child[data-number]"),document.querySelectorAll(".field-row :nth-child(2)[data-number]"),document.querySelectorAll(".field-row :nth-child(3)[data-number]"),document.querySelectorAll(".field-row :last-child[data-number]")];return[].concat(t).forEach(function(t){for(var r=t.length-1;r>0;r--){var n=t[r],a=t[r-1];n.dataset.number===a.dataset.number&&(n.dataset.number="".concat(2*+a.dataset.number),e+=2*+a.dataset.number,a.removeAttribute("data-number"))}}),e}function m(){var e=0,t=[document.querySelectorAll(".field-row :first-child[data-number]"),document.querySelectorAll(".field-row :nth-child(2)[data-number]"),document.querySelectorAll(".field-row :nth-child(3)[data-number]"),document.querySelectorAll(".field-row :last-child[data-number]")];return[].concat(t).forEach(function(t){for(var r=1;r<t.length;r++){var n=t[r],a=t[r-1];n.dataset.number===a.dataset.number&&(a.dataset.number="".concat(2*+n.dataset.number),e+=2*+n.dataset.number,n.removeAttribute("data-number"))}}),e}function s(){var t=0;return e(document.querySelectorAll(".field-row")).forEach(function(r){for(var n=e(r.querySelectorAll(".field-cell")).filter(function(e){return e.hasAttribute("data-number")}),a=n.length-1;a>0;a--){var o=n[a],l=n[a-1];o.dataset.number===l.dataset.number&&(o.dataset.number="".concat(2*+l.dataset.number),t+=2*+l.dataset.number,l.removeAttribute("data-number"))}}),t}function b(){var t=0;return e(document.querySelectorAll(".field-row")).forEach(function(r){for(var n=e(r.querySelectorAll(".field-cell")).filter(function(e){return e.hasAttribute("data-number")}),a=1;a<n.length;a++){var o=n[a],l=n[a-1];o.dataset.number===l.dataset.number&&(l.dataset.number="".concat(2*+o.dataset.number),t+=2*+o.dataset.number,o.removeAttribute("data-number"))}}),t}function h(){var t=document.querySelectorAll(".field-cell"),r=document.querySelector(".message-win"),n=document.querySelector(".message-lose"),a=e(t).filter(function(e){return!e.hasAttribute("data-number")});if((e(t).forEach(function(e){e.hasAttribute("data-number")?(e.classList.add("field-cell--".concat(e.dataset.number)),e.classList.remove("field-cell--".concat(+e.dataset.number/2)),e.innerHTML="".concat(e.dataset.number)):(e.innerHTML="",e.className="field-cell")}),e(t).some(function(e){return"2048"===e.dataset.number})&&r.classList.remove("hidden"),0===a.length)&&!i())return void n.classList.remove("hidden")}function A(){var t=e(document.querySelectorAll(".field-cell")).filter(function(e){return!e.hasAttribute("data-number")}),r=Math.floor(Math.random()*t.length);0!==t.length&&(t[r].dataset.number=c(.1)?"4":"2",t[r].classList.add("field-cell--".concat(t[r].dataset.number)),t[r].innerHTML="".concat(t[r].dataset.number))}function y(t){var r=document.querySelectorAll(".field-row"),n=[document.querySelectorAll(".field-row :first-child"),document.querySelectorAll(".field-row :nth-child(2)"),document.querySelectorAll(".field-row :nth-child(3)"),document.querySelectorAll(".field-row :last-child")];e(r).forEach(function(r){e(r.querySelectorAll(".field-cell")).filter(function(e){return!e.hasAttribute("data-number")}).forEach(function(e){"ArrowRight"===t&&r.prepend(e),"ArrowLeft"===t&&r.append(e)})}),"ArrowUp"===t&&[].concat(n).forEach(function(e){for(var t=0;t<e.length-1;t++){var r=e[t];if(!r.hasAttribute("data-number"))for(var n=t+1;n<e.length;n++)if(e[n].hasAttribute("data-number")){r.dataset.number=e[n].dataset.number,e[n].removeAttribute("data-number");break}}}),"ArrowDown"===t&&[].concat(n).forEach(function(e){for(var t=e.length-1;t>0;t--){var r=e[t];if(!r.hasAttribute("data-number"))for(var n=t-1;n>=0;n--)if(e[n].hasAttribute("data-number")){r.dataset.number=e[n].dataset.number,e[n].removeAttribute("data-number");break}}})}l.addEventListener("click",function(t){var r=document.querySelectorAll(".field-cell"),n=document.querySelector(".game-score"),a=document.querySelectorAll(".message");t.target.matches(".start")&&(t.target.innerHTML="Restart",t.target.classList.remove("start"),t.target.classList.add("restart")),t.target.matches(".restart")&&(e(r).forEach(function(e){e.removeAttribute("data-number")}),n.innerHTML="0"),e(a).forEach(function(e){e.classList.add("hidden")}),d(r)}),document.addEventListener("keydown",function(t){if(u.classList.contains("hidden")){var r,n=document.querySelectorAll(".field-cell"),a=document.querySelector(".game-score"),o=+a.innerHTML;if(e(n).forEach(function(e){e.classList.remove("field-cell--".concat(e.innerHTML))}),"ArrowRight"===t.key)r=s();else if("ArrowLeft"===t.key)r=b();else if("ArrowUp"===t.key)r=m();else{if("ArrowDown"!==t.key)return;r=f()}o+=r,a.innerHTML=""+o,y(t.key),h(),A()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.dc7974b0.js.map