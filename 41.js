(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{49:function(n,t,e){"use strict";e.r(t),e.d(t,"AnjContextMenu",function(){return a}),e.d(t,"AnjContextMenuItem",function(){return i});var o=e(78),r=e(0),a=function(){function n(){var n=this;this.menuListener=function(t){return n.open(t)},this.attach="parent",this.loader=function(){return n.getSlottedOptions()}}return n.prototype.componentDidLoad=function(){this.bodyEl=this.element.ownerDocument.body,this.parentEl=this.element.parentElement,"string"!=typeof this.attach?this.attach.addEventListener("contextmenu",this.menuListener):this.parentEl.addEventListener("contextmenu",this.menuListener)},n.prototype.componentDidUnload=function(){this.overlay.remove()},n.prototype.open=function(n){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(e){switch(e.label){case 0:return t=this,[4,this.loader(n)];case 1:return t.options=e.sent(),this.options?(n.preventDefault(),this.insertOptions(),[4,this.overlay.popper()]):[2];case 2:return e.sent()?[3,4]:(this.bodyEl.appendChild(this.overlay),[4,this.overlay.open("parent"===this.attach?this.parentEl:n.target)]);case 3:e.sent(),e.label=4;case 4:return[2]}})})},n.prototype.close=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(n){switch(n.label){case 0:return[4,this.overlay.close()];case 1:return n.sent(),[2]}})})},n.prototype.onClick=function(n){n.preventDefault(),n.stopPropagation(),this.anjContextSelection.emit(n.target.action),this.close()},n.prototype.bindOverlay=function(n){var t=this;n&&!this.overlay&&(this.overlay=n,this.overlay.onclick=function(n){return t.onClick(n)},this.element.removeChild(this.overlay))},n.prototype.insertOptions=function(){var n=this;this.overlay.innerHTML="",this.options.forEach(function(t){return n.overlay.appendChild(t)})},n.prototype.getSlottedOptions=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(n){return[2,Array.from(this.overlay.querySelectorAll("anj-context-menu-item")).map(function(n){return n.cloneNode(!0)})]})})},n.prototype.render=function(){var n=this;return Object(r.b)("anj-overlay",{class:"anj-dropdown-menu anj-context-menu",dismiss:"auto",placement:"bottom-start",ref:function(t){return n.bindOverlay(t)}},Object(r.b)("slot",null))},Object.defineProperty(n,"is",{get:function(){return"anj-context-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{attach:{type:String,attr:"attach"},close:{method:!0},element:{elementRef:!0},loader:{type:"Any",attr:"loader"},open:{method:!0},options:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"anjContextSelection",method:"anjContextSelection",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"anj-context-menu,anj-dropdown{position:relative}.anj-dropdown-menu{position:absolute;top:100%;left:0;z-index:1060;display:none;float:left;min-width:10rem;padding:0 0;margin:.125rem 0 0;font-size:.875rem;color:var(--anj-dark);text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid var(--anj-border-dark);border-radius:.25rem}.anj-dropdown-menu[x-placement^=bottom],.anj-dropdown-menu[x-placement^=left],.anj-dropdown-menu[x-placement^=right],.anj-dropdown-menu[x-placement^=top]{right:auto;bottom:auto}anj-context-menu,anj-dropdown{display:inline-block}anj-context-menu .anj-dropdown-toggle>anj-button,anj-dropdown .anj-dropdown-toggle>anj-button{margin:0;white-space:nowrap}anj-context-menu .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button,anj-dropdown .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0;padding-left:.5625rem;padding-right:.5625rem}anj-context-menu .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button anj-icon-opener,anj-dropdown .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button anj-icon-opener{margin-left:0}anj-context-menu .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button.anj-button-small,anj-dropdown .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button.anj-button-small{padding-left:.375rem;padding-right:.375rem}anj-context-menu .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button.anj-button-large,anj-dropdown .anj-dropdown-toggle anj-button:last-child:not(:first-child) .anj-button.anj-button-large{padding-left:.75rem;padding-right:.75rem}anj-context-menu .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button,anj-dropdown .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button{border-top-right-radius:0;border-bottom-right-radius:0;padding-right:.5625rem}anj-context-menu .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button.anj-button-small,anj-dropdown .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button.anj-button-small{padding-right:.375rem}anj-context-menu .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button.anj-button-large,anj-dropdown .anj-dropdown-toggle anj-button:first-child:not(:last-child) .anj-button.anj-button-large{padding-right:.75rem}anj-context-menu .anj-dropdown-menu,anj-dropdown .anj-dropdown-menu{border-radius:0;-webkit-box-shadow:0 1px 8px -1px var(--anj-shadow);box-shadow:0 1px 8px -1px var(--anj-shadow)}anj-context-menu anj-icon-opener,anj-dropdown anj-icon-opener{font-size:.7rem;margin-left:.5rem}.anj-context-menu{-webkit-box-shadow:0 1px 8px -1px var(--anj-shadow);box-shadow:0 1px 8px -1px var(--anj-shadow)}"},enumerable:!0,configurable:!0}),n}(),i=function(){function n(){this.disabled=!1}return n.prototype.onClick=function(n){this.disabled&&(n.preventDefault(),n.stopPropagation())},n.prototype.hostData=function(){return{class:{"anj-dropdown-item":!0}}},Object.defineProperty(n,"is",{get:function(){return"anj-context-menu-item"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{action:{type:String,attr:"action",reflectToAttr:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"mousedown",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".anj-dropdown-item{display:block;width:100%;padding:.25rem .75rem;clear:both;font-weight:400;color:var(--anj-primary);text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.anj-dropdown-item:focus,.anj-dropdown-item:hover{color:var(--anj-primary);text-decoration:none;background-color:var(--anj-background)}.anj-dropdown-item.active,.anj-dropdown-item:active{color:var(--anj-secondary);text-decoration:none;background-color:var(--anj-background)}.anj-dropdown-item.disabled,.anj-dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}anj-context-menu-item,anj-dropdown-item{cursor:pointer;display:block}anj-context-menu-item .anj-dropdown-item:focus,anj-dropdown-item .anj-dropdown-item:focus{outline:none}anj-context-menu-item[active].anj-dropdown-item,anj-context-menu-item[active] .anj-dropdown-item,anj-context-menu-item[active] .anj-dropdown-item:active,anj-context-menu-item[active] .anj-dropdown-item:hover,anj-context-menu-item[active]:active,anj-context-menu-item[active]:hover,anj-dropdown-item[active].anj-dropdown-item,anj-dropdown-item[active] .anj-dropdown-item,anj-dropdown-item[active] .anj-dropdown-item:active,anj-dropdown-item[active] .anj-dropdown-item:hover,anj-dropdown-item[active]:active,anj-dropdown-item[active]:hover{background-color:var(--anj-secondary);color:var(--anj-light)}anj-context-menu-item[disabled].anj-dropdown-item,anj-context-menu-item[disabled] .anj-dropdown-item,anj-context-menu-item[disabled] .anj-dropdown-item:active,anj-context-menu-item[disabled] .anj-dropdown-item:hover,anj-context-menu-item[disabled]:active,anj-context-menu-item[disabled]:hover,anj-dropdown-item[disabled].anj-dropdown-item,anj-dropdown-item[disabled] .anj-dropdown-item,anj-dropdown-item[disabled] .anj-dropdown-item:active,anj-dropdown-item[disabled] .anj-dropdown-item:hover,anj-dropdown-item[disabled]:active,anj-dropdown-item[disabled]:hover{background-color:var(--anj-light);color:var(--anj-neutral)}"},enumerable:!0,configurable:!0}),n}()},78:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return a}),e.d(t,"c",function(){return i});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function r(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function a(n,t,e,o){return new(e||(e=Promise))(function(r,a){function i(n){try{c(o.next(n))}catch(n){a(n)}}function d(n){try{c(o.throw(n))}catch(n){a(n)}}function c(n){n.done?r(n.value):new e(function(t){t(n.value)}).then(i,d)}c((o=o.apply(n,t||[])).next())})}function i(n,t){var e,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function d(a){return function(d){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(n,i)}catch(n){a=[6,n],o=0}finally{e=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,d])}}}}}]);