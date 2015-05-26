/*! jQuery UI - v1.11.3 - 2015-02-12
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){/*!
   * jQuery UI Widget 1.11.3
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var t=0,n=Array.prototype.slice;e.cleanData=function(t){return function(n){var i,o,r;for(r=0;null!=(o=n[r]);r++)try{i=e._data(o,"events"),i&&i.remove&&e(o).triggerHandler("remove")}catch(s){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var o,r,s,a,l={},u=t.split(".")[0];return t=t.split(".")[1],o=u+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[u]=e[u]||{},r=e[u][t],s=e[u][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,r,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),a=new n,a.options=e.widget.extend({},a.options),e.each(i,function(t,i){return e.isFunction(i)?void(l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},o=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,r=this._superApply;return this._super=e,this._superApply=o,t=i.apply(this,arguments),this._super=n,this._superApply=r,t}}()):void(l[t]=i)}),s.prototype=e.widget.extend(a,{widgetEventPrefix:r?a.widgetEventPrefix||t:t},l,{constructor:s,namespace:u,widgetName:t,widgetFullName:o}),r?(e.each(r._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete r._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var i,o,r=n.call(arguments,1),s=0,a=r.length;a>s;s++)for(i in r[s])o=r[s][i],r[s].hasOwnProperty(i)&&void 0!==o&&(t[i]=e.isPlainObject(o)?e.isPlainObject(t[i])?e.widget.extend({},t[i],o):e.widget.extend({},o):o);return t},e.widget.bridge=function(t,i){var o=i.prototype.widgetFullName||t;e.fn[t]=function(r){var s="string"==typeof r,a=n.call(arguments,1),l=this;return s?this.each(function(){var n,i=e.data(this,o);return"instance"===r?(l=i,!1):i?e.isFunction(i[r])&&"_"!==r.charAt(0)?(n=i[r].apply(i,a),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+r+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+r+"'")}):(a.length&&(r=e.widget.extend.apply(null,[r].concat(a))),this.each(function(){var t=e.data(this,o);t?(t.option(r||{}),t._init&&t._init()):e.data(this,o,new i(r,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,o,r,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},i=t.split("."),t=i.shift(),i.length){for(o=s[t]=e.widget.extend({},this.options[t]),r=0;r<i.length-1;r++)o[i[r]]=o[i[r]]||{},o=o[i[r]];if(t=i.pop(),1===arguments.length)return void 0===o[t]?null:o[t];o[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=n}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var o,r=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=o=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,o=this.widget()),e.each(i,function(i,s){function a(){return t||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?r[s]:s).apply(r,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?o.delegate(c,u,a):n.bind(u,a)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var o,r,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],r=n.originalEvent)for(o in r)o in n||(n[o]=r[o]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?n:o.effect||n:t;o=o||{},"number"==typeof o&&(o={duration:o}),s=!e.isEmptyObject(o),o.complete=r,o.delay&&i.delay(o.delay),s&&e.effects&&e.effects.effect[a]?i[t](o):a!==t&&i[a]?i[a](o.duration,o.easing,r):i.queue(function(n){e(this)[t](),r&&r.call(i[0]),n()})}});e.widget});