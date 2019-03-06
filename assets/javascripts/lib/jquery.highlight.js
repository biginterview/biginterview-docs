/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(e,t,s,i){if(3===e.nodeType){var o=e.data.match(t);if(o){var n=document.createElement(s||"span");n.className=i||"highlight";var a=e.splitText(o.index);a.splitText(o[0].length);var l=a.cloneNode(!0);return n.appendChild(l),a.parentNode.replaceChild(n,a),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==s.toUpperCase()||e.className!==i))for(var r=0;r<e.childNodes.length;r++)r+=jQuery.highlight(e.childNodes[r],t,s,i);return 0}}),jQuery.fn.unhighlight=function(e){var t={className:"highlight",element:"span"};return jQuery.extend(t,e),this.find(t.element+"."+t.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,t){var s={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(s,t),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e){return""!=e}),e=jQuery.map(e,function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==e.length)return this;var i=s.caseSensitive?"":"i",o="("+e.join("|")+")";s.wordsOnly&&(o="\\b"+o+"\\b");var n=new RegExp(o,i);return this.each(function(){jQuery.highlight(this,n,s.element,s.className)})};