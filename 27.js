(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{17:function(n,e,t){"use strict";t.r(e),t.d(e,"AnjObserver",function(){return o});var r=t(77),o=function(){function n(){this.observer=new MutationObserver(this.onChange.bind(this)),this.incattrs=!0,this.debounce=0}return n.prototype.componentDidLoad=function(){this.debounce&&(this.anjContentChange=Object(r.e)(this.anjContentChange,this.debounce)),this.observer.observe(this.element,{attributes:this.incattrs,childList:!0,subtree:!0})},n.prototype.componentDidUnload=function(){this.observer.disconnect()},n.prototype.onChange=function(n){this.anjContentChange.emit(n)},Object.defineProperty(n,"is",{get:function(){return"anj-observer"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{debounce:{type:Number,attr:"debounce"},element:{elementRef:!0},incattrs:{type:Boolean,attr:"incattrs"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"anjContentChange",method:"anjContentChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),n}()},77:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return c}),t.d(e,"e",function(){return u}),t.d(e,"f",function(){return r});var r=function(n,e,t){return function(n,e){return!(!n&&!e)}(n,e)&&t(n),n},o=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=[];return n.forEach(function(n){t=n&&Array.isArray(n)?t.concat(n):t.concat([n])}),t.join(" ")},i=function(n,e){var t;return void 0===e&&(e=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(t),t=setTimeout.apply(void 0,[n,e].concat(r))}},u=function(n,e){var t=n._original||n;return{_original:n,emit:i(t.emit.bind(t),e)}},c=function(n,e){return n+"-"+e},a=function(n){return Array.isArray(n)?n.length>0:"object"==typeof n?!!n:"number"==typeof n?!isNaN(n):n&&n.length>0}}}]);