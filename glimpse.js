// jquery-1.8.0.min.js
/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p})(window);jQueryGlimpse = jQuery.noConflict(true);
// uritemplate.min.js
if (!window.UriTemplate) {
!function(e){"use strict";function t(e){var n;if(null===e||void 0===e)return!1;if(r.isArray(e))return e.length>0;if("string"==typeof e||"number"==typeof e||"boolean"==typeof e)return!0;for(n in e)if(e.hasOwnProperty(n)&&t(e[n]))return!0;return!1}var n=function(){function e(e){this.options=e}return e.prototype.toString=function(){return JSON&&JSON.stringify?JSON.stringify(this.options):this.options},e}(),r=function(){function e(e){return"[object Array]"===Object.prototype.toString.apply(e)}function t(e){return"[object String]"===Object.prototype.toString.apply(e)}function n(e){return"[object Number]"===Object.prototype.toString.apply(e)}function r(e){return"[object Boolean]"===Object.prototype.toString.apply(e)}function i(e,t){var n,r="",i=!0;for(n=0;n<e.length;n+=1)i?i=!1:r+=t,r+=e[n];return r}function o(e,t){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n}function s(e,t){for(var n=[],r=0;r<e.length;r+=1)t(e[r])&&n.push(e[r]);return n}function a(e){if("object"!=typeof e||null===e)return e;Object.freeze(e);var t,n;for(n in e)e.hasOwnProperty(n)&&(t=e[n],"object"==typeof t&&u(t));return e}function u(e){return"function"==typeof Object.freeze?a(e):e}return{isArray:e,isString:t,isNumber:n,isBoolean:r,join:i,map:o,filter:s,deepFreeze:u}}(),i=function(){function e(e){return e>="a"&&"z">=e||e>="A"&&"Z">=e}function t(e){return e>="0"&&"9">=e}function n(e){return t(e)||e>="a"&&"f">=e||e>="A"&&"F">=e}return{isAlpha:e,isDigit:t,isHexDigit:n}}(),o=function(){function e(e){var t,n,r="",i=s.encode(e);for(n=0;n<i.length;n+=1)t=i.charCodeAt(n),r+="%"+t.toString(16).toUpperCase();return r}function t(e,t){return"%"===e.charAt(t)&&i.isHexDigit(e.charAt(t+1))&&i.isHexDigit(e.charAt(t+2))}function n(e,t){return parseInt(e.substr(t,2),16)}function r(e){if(!t(e,0))return!1;var r=n(e,1),i=s.numBytes(r);if(0===i)return!1;for(var o=1;i>o;o+=1)if(!t(e,3*o)||!s.isValidFollowingCharCode(n(e,3*o+1)))return!1;return!0}function o(e,r){var i=e.charAt(r);if(!t(e,r))return i;var o=n(e,r+1),a=s.numBytes(o);if(0===a)return i;for(var u=1;a>u;u+=1)if(!t(e,r+3*u)||!s.isValidFollowingCharCode(n(e,r+3*u+1)))return i;return e.substr(r,3*a)}var s={encode:function(e){return unescape(encodeURIComponent(e))},numBytes:function(e){return 127>=e?1:e>=194&&223>=e?2:e>=224&&239>=e?3:e>=240&&244>=e?4:0},isValidFollowingCharCode:function(e){return e>=128&&191>=e}};return{encodeCharacter:e,isPctEncoded:r,pctCharAt:o}}(),s=function(){function e(e){return i.isAlpha(e)||i.isDigit(e)||"_"===e||o.isPctEncoded(e)}function t(e){return i.isAlpha(e)||i.isDigit(e)||"-"===e||"."===e||"_"===e||"~"===e}function n(e){return":"===e||"/"===e||"?"===e||"#"===e||"["===e||"]"===e||"@"===e||"!"===e||"$"===e||"&"===e||"("===e||")"===e||"*"===e||"+"===e||","===e||";"===e||"="===e||"'"===e}return{isVarchar:e,isUnreserved:t,isReserved:n}}(),a=function(){function e(e,t){var n,r="",i="";for(("number"==typeof e||"boolean"==typeof e)&&(e=e.toString()),n=0;n<e.length;n+=i.length)i=e.charAt(n),r+=s.isUnreserved(i)||t&&s.isReserved(i)?i:o.encodeCharacter(i);return r}function t(t){return e(t,!0)}function n(e,t){var n=o.pctCharAt(e,t);return n.length>1?n:s.isReserved(n)||s.isUnreserved(n)?n:o.encodeCharacter(n)}function r(e){var t,n="",r="";for(t=0;t<e.length;t+=r.length)r=o.pctCharAt(e,t),n+=r.length>1?r:s.isReserved(r)||s.isUnreserved(r)?r:o.encodeCharacter(r);return n}return{encode:e,encodePassReserved:t,encodeLiteral:r,encodeLiteralCharacter:n}}(),u=function(){function e(e){t[e]={symbol:e,separator:"?"===e?"&":""===e||"+"===e||"#"===e?",":e,named:";"===e||"&"===e||"?"===e,ifEmpty:"&"===e||"?"===e?"=":"",first:"+"===e?"":e,encode:"+"===e||"#"===e?a.encodePassReserved:a.encode,toString:function(){return this.symbol}}}var t={};return e(""),e("+"),e("#"),e("."),e("/"),e(";"),e("?"),e("&"),{valueOf:function(e){return t[e]?t[e]:"=,!@|".indexOf(e)>=0?null:t[""]}}}(),f=function(){function e(e){this.literal=a.encodeLiteral(e)}return e.prototype.expand=function(){return this.literal},e.prototype.toString=e.prototype.expand,e}(),p=function(){function e(e){function t(){var t=e.substring(h,f);if(0===t.length)throw new n({expressionText:e,message:"a varname must be specified",position:f});c={varname:t,exploded:!1,maxLength:null},h=null}function r(){if(d===f)throw new n({expressionText:e,message:"after a ':' you have to specify the length",position:f});c.maxLength=parseInt(e.substring(d,f),10),d=null}var a,f,p=[],c=null,h=null,d=null,g="";for(a=function(t){var r=u.valueOf(t);if(null===r)throw new n({expressionText:e,message:"illegal use of reserved operator",position:f,operator:t});return r}(e.charAt(0)),f=a.symbol.length,h=f;f<e.length;f+=g.length){if(g=o.pctCharAt(e,f),null!==h){if("."===g){if(h===f)throw new n({expressionText:e,message:"a varname MUST NOT start with a dot",position:f});continue}if(s.isVarchar(g))continue;t()}if(null!==d){if(f===d&&"0"===g)throw new n({expressionText:e,message:"A :prefix must not start with digit 0",position:f});if(i.isDigit(g)){if(f-d>=4)throw new n({expressionText:e,message:"A :prefix must have max 4 digits",position:f});continue}r()}if(":"!==g)if("*"!==g){if(","!==g)throw new n({expressionText:e,message:"illegal character",character:g,position:f});p.push(c),c=null,h=f+1}else{if(null===c)throw new n({expressionText:e,message:"exploded without varspec",position:f});if(c.exploded)throw new n({expressionText:e,message:"exploded twice",position:f});if(c.maxLength)throw new n({expressionText:e,message:"an explode (*) MUST NOT follow to a prefix",position:f});c.exploded=!0}else{if(null!==c.maxLength)throw new n({expressionText:e,message:"only one :maxLength is allowed per varspec",position:f});if(c.exploded)throw new n({expressionText:e,message:"an exploeded varspec MUST NOT be varspeced",position:f});d=f+1}}return null!==h&&t(),null!==d&&r(),p.push(c),new l(e,a,p)}function t(t){var r,i,o=[],s=null,a=0;for(r=0;r<t.length;r+=1)if(i=t.charAt(r),null===a){if(null===s)throw new Error("reached unreachable code");if("{"===i)throw new n({templateText:t,message:"brace already opened",position:r});if("}"===i){if(s+1===r)throw new n({templateText:t,message:"empty braces",position:s});try{o.push(e(t.substring(s+1,r)))}catch(u){if(u.prototype===n.prototype)throw new n({templateText:t,message:u.options.message,position:s+u.options.position,details:u.options});throw u}s=null,a=r+1}}else{if("}"===i)throw new n({templateText:t,message:"unopened brace closed",position:r});"{"===i&&(r>a&&o.push(new f(t.substring(a,r))),a=null,s=r)}if(null!==s)throw new n({templateText:t,message:"unclosed brace",position:s});return a<t.length&&o.push(new f(t.substr(a))),new c(t,o)}return t}(),l=function(){function e(e){return JSON&&JSON.stringify?JSON.stringify(e):e}function n(e){if(!t(e))return!0;if(r.isString(e))return""===e;if(r.isNumber(e)||r.isBoolean(e))return!1;if(r.isArray(e))return 0===e.length;for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}function i(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push({name:t,value:e[t]});return n}function o(e,t,n){this.templateText=e,this.operator=t,this.varspecs=n}function s(e,t,n){var r="";if(n=n.toString(),t.named){if(r+=a.encodeLiteral(e.varname),""===n)return r+=t.ifEmpty;r+="="}return null!==e.maxLength&&(n=n.substr(0,e.maxLength)),r+=t.encode(n)}function u(e){return t(e.value)}function f(e,o,s){var f=[],p="";if(o.named){if(p+=a.encodeLiteral(e.varname),n(s))return p+=o.ifEmpty;p+="="}return r.isArray(s)?(f=s,f=r.filter(f,t),f=r.map(f,o.encode),p+=r.join(f,",")):(f=i(s),f=r.filter(f,u),f=r.map(f,function(e){return o.encode(e.name)+","+o.encode(e.value)}),p+=r.join(f,",")),p}function p(e,o,s){var f=r.isArray(s),p=[];return f?(p=s,p=r.filter(p,t),p=r.map(p,function(t){var r=a.encodeLiteral(e.varname);return r+=n(t)?o.ifEmpty:"="+o.encode(t)})):(p=i(s),p=r.filter(p,u),p=r.map(p,function(e){var t=a.encodeLiteral(e.name);return t+=n(e.value)?o.ifEmpty:"="+o.encode(e.value)})),r.join(p,o.separator)}function l(e,n){var o=[],s="";return r.isArray(n)?(o=n,o=r.filter(o,t),o=r.map(o,e.encode),s+=r.join(o,e.separator)):(o=i(n),o=r.filter(o,function(e){return t(e.value)}),o=r.map(o,function(t){return e.encode(t.name)+"="+e.encode(t.value)}),s+=r.join(o,e.separator)),s}return o.prototype.toString=function(){return this.templateText},o.prototype.expand=function(i){var o,a,u,c,h=[],d=!1,g=this.operator;for(o=0;o<this.varspecs.length;o+=1)if(a=this.varspecs[o],u=i[a.varname],null!==u&&void 0!==u)if(a.exploded&&(d=!0),c=r.isArray(u),"string"==typeof u||"number"==typeof u||"boolean"==typeof u)h.push(s(a,g,u));else{if(a.maxLength&&t(u))throw new Error("Prefix modifiers are not applicable to variables that have composite values. You tried to expand "+this+" with "+e(u));a.exploded?t(u)&&(g.named?h.push(p(a,g,u)):h.push(l(g,u))):(g.named||!n(u))&&h.push(f(a,g,u))}return 0===h.length?"":g.first+r.join(h,g.separator)},o}(),c=function(){function e(e,t){this.templateText=e,this.expressions=t,r.deepFreeze(this)}return e.prototype.toString=function(){return this.templateText},e.prototype.expand=function(e){var t,n="";for(t=0;t<this.expressions.length;t+=1)n+=this.expressions[t].expand(e);return n},e.parse=p,e.UriTemplateError=n,e}();e(c)}(function(e){"use strict";"undefined"!=typeof window?window.UriTemplate=e:global.UriTemplate=e});
}

// glimpse.jquery.draggable.js
(function ($) {
    var defaults = { 
            min: 50, 
            isUpDown: true,
            valueStyle: 'height', 
            offset: -1, 
            getDimension: function() { return parseInt(this.resizeScope.css(this.valueStyle)); },
            setDimension: function(value) { return this.resizeScope.css(this.valueStyle, value + 'px'); }
        },
        mousePosition = function(e) { 
            return e.data.settings.isUpDown ? e.clientY : e.clientX;
        },
        startDrag = function(e) {
            var settings = e.data.settings;
             
            if ($.isFunction(settings.dragging))
                settings.dragging(settings);
        
            settings._min = $.isFunction(settings.min) ? settings.min(settings) : settings.min;
            settings._max = $.isFunction(settings.max) ? settings.max(settings) : settings.max;
            settings._startMousePosition = mousePosition(e);
            settings._startDimension = settings.getDimension.call(settings);
            settings.opacityScope.css('opacity', 0.50);  
             
            $(document).bind('mousemove', { settings: settings }, performDrag).bind('mouseup', { settings: settings }, endDrag); 
            
            return false;
        },
        endDrag = function(e) {
            var settings = e.data.settings;
            
            settings.opacityScope.css('opacity', 1);
             
            $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);

            if ($.isFunction(settings.dragged))
                settings.dragged(settings, settings.getDimension.call(settings)); 
            
            return false;
        },
        performDrag = function (e) {
            var settings = e.data.settings, 
                newDimension = settings._startDimension + ((mousePosition(e) - settings._startMousePosition) * settings.offset);
            
            if (settings._min != null) 
                newDimension = Math.max(settings._min, newDimension); 
            if (settings._max != null) 
                newDimension = Math.min(settings._max, newDimension); 

            settings.setDimension.call(settings, newDimension); 
            
            return false;
        };

    $.draggable = function(settings) {
        settings = $.extend(true, {}, defaults, settings);
         
        settings.handelScope.bind("mousedown", { settings: settings }, startDrag);
        
        return this;
    };
})(jQueryGlimpse);
// glimpse.jquery.draggable.js
(function ($) { 
    $.fn.dropdown = function() {
        var scope = $(this);
        
        scope.find('.glimpse-drop').live('mouseenter', function() { 
            $(this).next().css('left', $(this).position().left).show(); 
        }); 
        scope.find('.glimpse-drop-over').live('mouseleave', function() {
            $(this).fadeOut(100);  
        }); 
        
        return scope;
    };
})(jQueryGlimpse);

// glimpse.core.js
glimpse = (function($) { 
    return {};
})(jQueryGlimpse);

// glimpse.pubsub.js
glimpse.pubsub = (function() {
    var messages = {},
        lastUid = -1,
        throwException = function(ex) {
            return function() {
                throw ex;
            };
        },
        callSubscriber = function(subscriber, message, data) {
            try { 
                subscriber(data, message);
            } catch(ex) {
                setTimeout(throwException(ex), 0);
            }
        },
        deliverMessage = function(originalMessage, matchedMessage, data) {
            var subscribers = messages[matchedMessage],
                i, j;

            if (!messages.hasOwnProperty(matchedMessage)) {
                return;
            }

            for (i = 0, j = subscribers.length; i < j; i++) {
                callSubscriber(subscribers[i].func, originalMessage, data);
            }
        },
        createDeliveryFunction = function(message, data) {
            return function() {
                var topic = String(message),
                    position = topic.lastIndexOf('.');

                // deliver the message as it is now
                deliverMessage(message, message, data);

                // trim the hierarchy and deliver message to each level
                while (position !== -1) {
                    topic = topic.substr(0, position);
                    position = topic.lastIndexOf('.');
                    deliverMessage(message, topic, data);
                }
            };
        },
        messageHasSubscribers = function(message) {
            var topic = String(message),
                found = messages.hasOwnProperty(topic),
                position = topic.lastIndexOf('.');

            while (!found && position !== -1) {
                topic = topic.substr(0, position);
                position = topic.lastIndexOf('.');
                found = messages.hasOwnProperty(topic);
            }

            return found;
        },
        publish = function(message, data, sync) {
            var deliver = createDeliveryFunction(message, data),
                hasSubscribers = messageHasSubscribers(message);

            if (!hasSubscribers) {
                return false;
            }

            if (sync === true) {
                deliver();
            } else {
                setTimeout(deliver, 0);
            }
            return true;
        };

    return {
        publishAsync: function(message, data) {
            return publish(message, data, false);
        },
        publish: function(message, data) {
            return publish(message, data, true);
        },
        subscribe: function(message, func) {
            // message is not registered yet
            if (!messages.hasOwnProperty(message)) {
                messages[message] = [];
            }

            // forcing token as String, to allow for future expansions without breaking usage
            // and allow for easy use as key names for the 'messages' object
            var token = String(++lastUid);
            messages[message].push({ token: token, func: func });

            // return token for unsubscribing
            return token;
        },
        unsubscribe: function(tokenOrFunction) {
            var isToken = typeof tokenOrFunction === 'string',
                key = isToken ? 'token' : 'func',
                succesfulReturnValue = isToken ? tokenOrFunction : true,
                result = false,
                m, i;

            for (m in messages) {
                if (messages.hasOwnProperty(m)) {
                    for (i = messages[m].length - 1; i >= 0; i--) {
                        if (messages[m][i][key] === tokenOrFunction) {
                            messages[m].splice(i, 1);
                            result = succesfulReturnValue;

                            // tokens are unique, so we can just return here
                            if (isToken) {
                                return result;
                            }
                        }
                    }
                }
            }

            return result;
        }
    };
})();
// glimpse.util.js
glimpse.util = (function($) { 
    var connectionNotice = function(scope) {
            var that = (this === window) ? {} : this;
            that.scope = scope;
            that.text = scope.find('span');
            return that;
        }; 

    connectionNotice.prototype = {
        connected : false, 
        prePoll : function () {
            var that = this;
            if (!that.connected) { 
                that.text.text('Connecting...'); 
                that.scope.removeClass('glimpse-connect').addClass('glimpse-disconnect');
            }
        },
        complete : function (textStatus) {
            var that = this;
            if (textStatus != "success") {
                that.connected = false;
                that.text.text('Disconnected...');
                that.scope.removeClass('glimpse-connect').addClass('glimpse-disconnect');
            }
            else {
                that.connected = true;
                that.text.text('Connected...');
                that.scope.removeClass('glimpse-disconnect').addClass('glimpse-connect');
            }
        }
    };
     
    return {
        cookie : function (key, value, days) {
            if (arguments.length > 1) { 
                value = $.isPlainObject(value) ? JSON.stringify(value) : String(value);
        
		        var date = new Date();
                date.setDate(date.getDate() + days || 1000);
        
	            document.cookie = key + "=" + encodeURIComponent(value) + "; expires=" + date.toGMTString() + "; path=/";
                return;
            }
     
	        key += "=";
	        var ca = document.cookie.split(';');
	        for (var i = 0; i < ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') 
		            c = c.substring(1, c.length);
		        if (c.indexOf(key) == 0) 
		            return JSON.parse(decodeURIComponent(c.substring(key.length, c.length)));
	        }
        },
        localStorage: function (key, value) {
            if (arguments.length == 1)
                return JSON.parse(localStorage.getItem(key));
            localStorage.setItem(key, JSON.stringify(value)); 
        },
        htmlEncode: function (value) {
            return !(value == null) ? value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
        },
        preserveWhitespace: function (value) {
            if (value != null && typeof value !== "string")
                value = value.toString();
            if (!value)
                return '';
            return value.replace(/\r\n/g, '<br />').replace(/\n/g, '<br />').replace(/\t/g, '&nbsp; &nbsp; ').replace(/  /g, '&nbsp; ');
        },
        lengthJson: function (data) {
            var count = 0;
            if (data === Object(data))
                for (var key in data) { count++; };
            return count;
        }, 
        uriTemplate: function (uri, data) {
            if (uri == null)
                return '';
            return UriTemplate.parse(uri).expand(data || {});
        },
        getDomain: function (uri) {
            if (uri.indexOf('://') > -1)
                uri = uri.split('://')[1];
            return uri.split('/')[0];
        },
        sortTabs: function (data) {
            var sorted = {},
                i, temp = [];
            
            for (i in data)
                temp.push({ id: i, name: data[i].name });
            temp.sort(function(a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });
            for (i = 0; i < temp.length; i++)
                sorted[temp[i].id] = data[temp[i].id];
            return sorted;
        },
        containsTokens: function(formatString) {
            return formatString != null && !$.isNumeric(formatString) && formatString.indexOf('{{') > -1;
        },
        getTokens: function(formatString) { 
            var count = 0, working = '', result = [];
            for (var i = 0; i < formatString.length; i++) {
                var x = formatString[i];
                
                if (count <= 2) { 
                    if (x == '{')
                        count++;
                    else if (x == '}' && count > 0)
                        count--;
                    else if (count == 2) 
                        working += '' + x; 
                    else {
                        count = 0;
                        working = '';
                    }

                    if (count == 0 && working != '') {
                        result.push(working);
                        working = '';
                    }
                } 
            }
            return result;
        },
        connectionNotice: function(scope) {
            return new connectionNotice(scope); 
        },
        timeConvert : function(value) {
            if (value < 1000)
                return value.toFixed(1) + ' ms';
            return Math.round(value / 10) / 100 + ' s';
        }
    };
})(jQueryGlimpse);
// glimpse.settings.js
glimpse.settings = (function($, pubsub, util) {
    var globalSettings = {},
        localStorage = {},  
        init = function () {
            globalSettings = $.extend({}, util.cookie('glimpseOptions'));
            localStorage = $.extend({}, util.localStorage('glimpseOptions'));

            $(window).bind('storage', function(e) {
                if (e.originalEvent.key == 'glimpseOptions') 
                    localStorage = JSON.parse(e.originalEvent.newValue); 
            });
        };

    pubsub.subscribe('trigger.system.init', init);

    return {
        global: function (key, value) { 
            if (arguments.length == 1) 
                return globalSettings[key];
            
            globalSettings[key] = value;
            util.cookie('glimpseOptions', globalSettings); 
        },
        local: function (key, value) {
            if (arguments.length == 1) 
                return localStorage[key];
            
            localStorage[key] = value;
            util.localStorage('glimpseOptions', localStorage);  
        }
    };
})(jQueryGlimpse, glimpse.pubsub, glimpse.util);
// glimpse.data.js
glimpse.data = (function($, pubsub, util) {
    var innerBaseMetadata = { plugins : {}, resources : {} },
        innerBaseData = { data : {}, metadata : innerBaseMetadata, uri : window.location.href },
        innerCurrentData = innerBaseData,
        generateRequestAddress = function (requestId) {
            var current = currentMetadata();
            return util.uriTemplate(current.resources.glimpse_request, { 'requestId': requestId, 'hash': current.hash });
        },
        validateMetadata = function () { 
            // Make sure that out data has metadata
            if (!innerCurrentData.metadata)
                innerCurrentData.metadata = { plugins : {} };  
            
            // Merge metadata from the base metadata, with the request metadata
            var newMetadata = {};
            $.extend(true, newMetadata, innerBaseMetadata, innerCurrentData.metadata);
            innerCurrentData.metadata = newMetadata;
            
            // Make sure that every plugin has metadata object
            for (var key in innerCurrentData.data) {
                if (!innerCurrentData.metadata.plugins[key])
                    innerCurrentData.metadata.plugins[key] = {};
            }
        },
        copyPermanentData = function (newData) {
            for (var key in innerBaseData.data) {
                var current = innerBaseData.data[key];
                if (current.isPermanent) {
                    newData.data[key] = current;
                    newData.metadata.plugins[key] = innerBaseData.metadata.plugins[key];
                }
            }
        },
        baseData = function () {
            return innerBaseData;
        },
        currentData = function () {
            return innerCurrentData;
        }, 
        currentMetadata = function () {
            return innerCurrentData.metadata;
        },
        update = function (data, topic) {
            var oldData = innerCurrentData;
            
            pubsub.publish('action.data.refresh.changing', { oldData: oldData, newData: data, type: topic });
            pubsub.publish('action.data.changing', { newData: data });
             
            innerCurrentData = data;
             
            validateMetadata(); 
            copyPermanentData(data);
            
            pubsub.publish('action.data.changed', { newData: data });
            pubsub.publish('action.data.refresh.changed', { oldData: oldData, newData: data, type: topic });

            pubsub.publish('trigger.system.update');
            pubsub.publish('trigger.data.update');
        },
        reset = function () {
            update(innerBaseData);
        },
        retrieve = function (requestId, topic) { 
            var parsedTopic = topic ? '.' + topic : '';

            pubsub.publish('action.data.retrieve.starting' + parsedTopic, { requestId: requestId });

            // Only need to do to the server if we dont have the data
            if (requestId != innerBaseData.requestId) {
                pubsub.publish('action.data.fetching' + parsedTopic, requestId);
                
                $.ajax({
                    type: 'GET',
                    url: generateRequestAddress(requestId), 
                    contentType: 'application/json',
                    success: function (result) {    
                        pubsub.publish('action.data.fetched' + parsedTopic, { requestId: requestId, oldData: innerCurrentData, newData: result });
                        
                        pubsub.publish('action.data.retrieve.succeeded' + parsedTopic, { requestId: requestId, oldData: innerCurrentData, newData: result });
                        
                        update(result, topic);  
                    }, 
                    complete: function (jqXhr, textStatus) { 
                        pubsub.publish('action.data.retrieve.completed' + parsedTopic, { requestId: requestId, textStatus: textStatus });
                    }
                });
            }
            else { 
                pubsub.publish('action.data.retrieve.succeeded' + parsedTopic, { requestId: requestId, oldData: innerCurrentData, newData: innerBaseData });
                
                update(innerBaseData);  
                
                pubsub.publish('action.data.retrieve.completed' + parsedTopic, { requestId: requestId, textStatus: 'success' });
            }
        },
        initMetadata = function (input) {
            pubsub.publish('action.data.metadata.changing', { metadata: input });
            
            innerBaseMetadata = input;
            
            pubsub.publish('action.data.metadata.changed', { metadata: input });
        },
        initData = function (input) { 
            pubsub.publish('action.data.initial.changing', { newData: input });
            pubsub.publish('action.data.changing', { newData: input });
            
            innerCurrentData = input; 
            innerBaseData = input; 
            
            validateMetadata(); 
            
            pubsub.publish('action.data.changed', { newData: input, metadata: input.metadata });
            pubsub.publish('action.data.initial.changed', { newData: input, metadata: input.metadata });

            pubsub.publish('trigger.data.init', { isInitial: true });
        };

    return {
        baseData: baseData,
        currentData: currentData,
        currentMetadata: currentMetadata,
        update: update,
        reset: reset,
        retrieve: retrieve,
        initMetadata: initMetadata,
        initData: initData
    };
})(jQueryGlimpse, glimpse.pubsub, glimpse.util);
// glimpse.element.js
glimpse.elements = (function($) {
    var scope = $(document),
        holder, opener, pageSpacer, barHolder, panelHolder, tabHolder, tabInstanceHolder, tabPermanentHolder, titleHolder, notificationHolder, lightbox, optionsHolder;
    
    return {
        scope: function () {
            return scope;
        },
        holder: function () {
            return holder || (holder = scope.find('.glimpse-holder'));
        },
        opener: function () {
            return opener || (opener = scope.find('.glimpse-open'));
        },
        pageSpacer: function () {
            return pageSpacer || (pageSpacer = scope.find('.glimpse-spacer'));
        },
        barHolder: function () {
            return barHolder || (barHolder = scope.find('.glimpse-bar'));
        },
        titleHolder: function () {
            return titleHolder || (titleHolder = scope.find('.glimpse-title'));
        },
        tabHolder: function() {
             return tabHolder || (tabHolder = scope.find('.glimpse-tabs ul'));
        },
        tabInstanceHolder: function() {
             return tabInstanceHolder || (tabInstanceHolder = scope.find('.glimpse-tabs-instance ul'));
        },
        tabPermanentHolder: function() {
             return tabPermanentHolder || (tabPermanentHolder = scope.find('.glimpse-tabs-permanent ul'));
        },
        panelHolder: function() {
             return panelHolder || (panelHolder = scope.find('.glimpse-panel-holder'));
        },
        notificationHolder: function() {
            return notificationHolder || (notificationHolder = scope.find('.glimpse-notification-holder'));
        },
        lightbox: function() {
            return lightbox || (lightbox = scope.find('.glimpse-lightbox'));
        },
        panel: function(key) {
             return this.panelHolder().find('.glimpse-panel[data-glimpseKey="' + key + '"]');
        },
        tab: function(key) {
             return this.tabHolder().find('.glimpse-tab[data-glimpseKey="' + key + '"]');
        },
        panels: function() {
             return this.panelHolder().find('.glimpse-panel');
        },
        optionsHolder: function() {
            return optionsHolder || (optionsHolder = scope.find('.glimpse-options'));
        }
    };
})(jQueryGlimpse);

// glimpse.system.js
(function(pubsub) {
    var start = function() { 
            pubsub.publish('trigger.system.init');
            
            pubsub.publish('action.system.starting'); 
            pubsub.publish('trigger.shell.init');
            pubsub.publish('action.system.started');
            
            pubsub.publish('trigger.system.ready');
        },
        dataStart = function() {
            pubsub.publish('trigger.tab.render', { isInitial: true });
            pubsub.publish('trigger.title.render');
        },
        update = function() {
            pubsub.publish('trigger.system.refresh');
            
            pubsub.publish('trigger.shell.refresh'); 
        },
        dataUpdate = function() {
            pubsub.publish('trigger.tab.render', { isInitial: false });
            pubsub.publish('trigger.title.render');
        };

    pubsub.subscribe('trigger.system.start', start);
    pubsub.subscribe('trigger.data.init', dataStart); 
    pubsub.subscribe('trigger.system.update', update);
    pubsub.subscribe('trigger.data.update', dataUpdate); 
})(glimpse.pubsub);

// glimpse.render.js
glimpse.render = (function($, pubsub, util, data, settings) {
    var templates = {
            css: '.glimpse, .glimpse *, .glimpse a, .glimpse td, .glimpse th, .glimpse table {font-family: "Segoe UI Light", "Segoe UI Web Regular", "Segoe UI", "Helvetica Neue", Helvetica, Arial;background-color: transparent;border: 0px;text-align: left;padding: 0;margin: 0;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}.glimpse table {min-width: 0;border-collapse: collapse;border-spacing: 0;}.glimpse a, .glimpse a:hover, .glimpse a:visited, .glimpse-link {color: #2200C1;text-decoration: underline;font-weight: normal;cursor: pointer;-webkit-transition: color 0.3s ease;-moz-transition: color 0.3s ease;-o-transition: color 0.3s ease;transition: color 0.3s ease;}.glimpse a:active, .glimpse-link:active {color: #c11;text-decoration: underline;font-weight: normal;}.glimpse th {font-weight: bold;} .glimpse-open {z-index: 100010;position: fixed;right: 0;bottom: 0;height: 34px;min-width: 54px;background: #3c454f;color: #fff;white-space: nowrap;}.glimpse-open td, .glimpse-open span, .glimpse-open div {color: #fff;font-size: 13px;line-height: 13px;}.glimpse-icon {cursor: pointer;background: url() no-repeat -127px -38px;height: 30px;width: 39px;margin: 0 8px;}.glimpse-open .glimpse-icon {height: 34px;}.glimpse-holder {display: none;z-index: 100010 !important;height: 0;position: fixed;bottom: 0;left: 0;width: 100%;background-color: #fff;-moz-box-shadow: 0 0 5px #888;-webkit-box-shadow: 0 0 5px#888;box-shadow: 0 0 5px #888;}.glimpse-content {position: relative;font-size: 11px;line-height: 13px;}.glimpse-bar {background: #3c454f;color: #fff;height: 30px;position: relative;font-size: 13px;line-height: 15px;}.glimpse-bar .glimpse-icon {margin-left: 10px;float: left;}.glimpse-bar .glimpse-link, .glimpse-bar a, .glimpse-bar a:visited, .glimpse-bar a:hover {color: #fff;}.glimpse-bar .glimpse-link:active, .glimpse-bar a:active {color: #c11; } .glimpse-buttons {text-align: right;position: absolute;right: 0;top: 0;height: 17px;width: 250px;padding: 8px 12px 6px 6px;}.glimpse-hidden {display: none;}.glimpse-title {margin: 1px 0 0 15px;padding-top: 5px;font-weight: bold;display: inline-block;width: 75%;overflow: hidden;font-size: 13px;line-height: 15px;}.glimpse-title .glimpse-snapshot-name {display: inline-block;height: 20px;}.glimpse-title .glimpse-snapshot-path {font-weight:normal;} .glimpse-title .glimpse-enviro {padding-left: 10px;white-space: nowrap;height: 20px;}.glimpse-title .glimpse-correlation .glimpse-drop {padding-left: 10px;}.glimpse-title .glimpse-correlation .loading {margin: 5px 0 0;font-weight: normal;display: none;}.glimpse-title .glimpse-correlation .glimpse-drop-over {padding-left: 20px;padding-right: 20px;text-align: center;}.glimpse-title .glimpse-context-stack .glimpse-selectable {cursor:pointer;font-weight:bold;}.glimpse-drop {padding: 0 1px 0 8px;height: 16px;font-size: 12px;}.glimpse-drop, .glimpse-drop-over {font-weight: normal;background: #8bc441;margin: 0 5px 0 0;display: inline-block;}.glimpse-drop-over {position: absolute;display: none;top: 6px;padding: 1px 20px 10px 20px;z-index: 100; }.glimpse-drop-over div {text-align: center;font-weight: bold;margin: 5px 0;}.glimpse-drop-arrow-holder {margin: 3px 3px 3px 5px;padding-left: 3px;border-left: 1px solid #5f9a26;font-size: 9px;line-height: 11px;height: 9px;width: 10px;}.glimpse-drop-arrow {background: url() no-repeat -22px -18px;width: 7px;height: 4px;display: inline-block;}.glimpse .glimpse-button, .glimpse .glimpse-button:hover {cursor: pointer;background-image: url();background-repeat: no-repeat;height: 14px;width: 14px;margin-left: 10px;display: inline-block;}.glimpse .glimpse-meta-warning {background-position: -168px -1px;display: none;}.glimpse .glimpse-meta-warning:hover {background-position: -183px -1px;}.glimpse .glimpse-meta-help {background-position: -138px -1px;margin-right: 15px;}.glimpse .glimpse-meta-help:hover {background-position: -153px -1px;margin-right: 15px;}.glimpse .glimpse-meta-update {position: absolute;text-decoration: underline;top: 6px;left: 0;cursor: pointer;display: none;} .glimpse .glimpse-minimize {background-position: -1px -1px;}.glimpse .glimpse-minimize:hover {background-position: -17px -1px;}.glimpse .glimpse-close {background-position: -65px -1px;}.glimpse .glimpse-close:hover {background-position: -81px -1px;}.glimpse .glimpse-popout {background-position: -96px -1px;}.glimpse .glimpse-popout:hover {background-position: -111px -1px;}.glimpse-tabs-permanent {position: absolute;top: 0;right: 0;}.glimpse-tabs-permanent li {font-style: italic;}.glimpse-tabs {background: #71b1d1;height: 26px;color: #fff;}.glimpse-tabs ul {padding: 0px;}.glimpse-tabs li {display: inline-block;height: 21px;padding: 5px 15px 0;cursor: pointer;font-size: 13px;line-height: 13px;-webkit-transition: background-color 0.3s ease;-moz-transition: background-color 0.3s ease;-o-transition: background-color 0.3s ease;transition: background-color 0.3s ease;-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;}.glimpse-tabs li.glimpse-hover {background: #519bbd; }.glimpse-tabs li.glimpse-active {background: #7c4b75;}.glimpse-tabs li.glimpse-disabled {color: #111;cursor: default;}.glimpse-panel-holder {}.glimpse-panel {display: none;overflow: auto;position: relative;color: #323232;font-size: 11px;line-height: 13px;}.glimpse-panel div, .glimpse-panel span, .glimpse-panel td, .glimpse-panel th {font-family: "Segoe UI Web Regular", "Segoe UI", "Helvetica Neue", Helvetica, Arial;}.glimpse-panel-message {text-align: center;padding-top: 40px;font-size: 1.1em;color: #AAA;}.glimpse-panel table {border-spacing: 0;width: 98%;margin: 1%;}.glimpse-panel tr {line-height: 14px;}.glimpse-panel th {font-size: 12px;line-height: 14px;font-weight: bold; }.glimpse-panel thead th {text-align: center;vertical-align: top;padding: 3px 3px 6px;}.glimpse-panel table td {text-align: left;vertical-align: top; }.glimpse-panel table td .glimpse-cell {vertical-align: top;}.glimpse-panel tbody .mono {font-family: Consolas, monospace, serif;font-size: 1.1em;}.glimpse-panel .glimpse-header {font-weight: bold;padding: 20px 0 0 1%;font-size: 140%;font-family: "Segoe UI Light", "Segoe UI Web Regular", "Segoe UI", "Helvetica Neue", Helvetica, Arial;}.glimpse-panel .glimpse-header-content {padding: 1% 1% 0;}.glimpse-panel .glimpse-row-header-0 th {border-bottom: 3px solid #CCC;border-left: 1px solid #CCC;font-size: 14px;line-height: 12px;}.glimpse-panel .glimpse-row-header-0 th:first-child {border-left-width: 0;}.glimpse-panel .glimpse-soft {color: #999;}.glimpse-panel .glimpse-cell-key, .glimpse-panel .glimpse-key {font-weight: bold;}.glimpse-panel th.glimpse-key {width: 130px;}.glimpse-panel .glimpse-row-header-0 th.glimpse-key {width: 250px;}.glimpse-panel table table {margin: 0;width: 100%;}.glimpse-panel table table thead th {border-bottom: 2px solid #CCC;}.glimpse-panel table table thead tr th {border-left: 1px solid #CCC;line-height: 10px;}.glimpse-panel table table thead tr th:first-child {border-left-width: 0;}.glimpse-panel table table thead tr th:last-child {border-right: 0px;} .glimpse-row-holder > .glimpse-row:nth-of-type(odd), .glimpse-row-color:nth-of-type(odd), .glimpse-row-odd, .glimpse-row-odd > td { background-color: #FEFFFF; }.glimpse-row-holder > .glimpse-row:nth-of-type(even), .glimpse-row-color:nth-of-type(even), .glimpse-row-even, .glimpse-row-even > td { background-color: #F2F5F9; }.glimpse-row-holder.glimpse-row-holder-suppress > .glimpse-row { background-color: transparent; } .glimpse-panel table table tbody th {font-style: italic;font-weight: normal;}.glimpse-panel table table thead th {font-weight: bold;} .glimpse-panel .glimpse-col-side {border-right: 1px solid #404040;background-color: #F2F5F7;position: absolute;width: 200px;height: 100%;left: 0px;}.glimpse-panel .glimpse-col-main {position: absolute;left: 200px;right: 0px;top: 0px;}.glimpse-panel td, .glimpse-panel th {padding: 5px 7px;}table.glimpse-ellipsis {table-layout: fixed;}div.glimpse-ellipsis {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 100%;}.glimpse-col-side .glimpse-row-holder > .glimpse-row:nth-of-type(odd), .glimpse-row-alt-color:nth-of-type(odd), .glimpse-row-alt-odd, .glimpse-row-alt-odd > td { background-color: #E1E7F0; }.glimpse-col-side .glimpse-row-holder > .glimpse-row:nth-of-type(even), .glimpse-row-alt-color:nth-of-type(even), .glimpse-row-alt-even, .glimpse-row-alt-even > td { background-color: #F2F5F7; } .glimpse-panel-holder .glimpse-active {display: block;}.glimpse-resizer {height: 6px;cursor: n-resize;width: 100%;position: absolute;top: -5px;}.glimpse-preview-object, .glimpse-preview-object * {color: #006400;}.glimpse-preview-string, .glimpse-preview-object .glimpse-preview-string {color: #006400;font-weight: normal !important;}.glimpse-preview-string span {padding-left: 1px;}.glimpse-preview-object span {font-weight: bold;color: #444;}.glimpse-preview-object span.start {margin-right: 5px;}.glimpse-preview-object span.end {margin-left: 5px;}.glimpse-preview-object span.rspace {margin-right: 4px;}.glimpse-preview-object span.mspace {margin: 0 4px;}.glimpse-preview-object span.small {font-size: 0.95em;}.glimpse-panel .glimpse-preview-table {border: 0;}.glimpse-panel .glimpse-preview-table .glimpse-preview-cell {padding-left: 0;padding-right: 2px;width: 11px;}.glimpse-panel .glimpse-preview-table .glimpse-preview-cell, .glimpse-panel .glimpse-preview-table .glimpse-preview-cell + td {padding-top: 0;padding-bottom: 0;}.glimpse-expand {height: 11px;width: 11px;display: inline-block;float: left;margin: 1px 0 0 0;cursor: pointer;background-image: url();background-repeat: no-repeat;background-position: -126px 0;}.glimpse-collapse {background-position: -126px -11px;}.glimpse-preview-show {display: none;font-weight: normal !important;}.glimpse-panel .quiet *, .glimpse-panel .ms * {color: #AAA;}.glimpse-panel .suppress {text-decoration: line-through;}.glimpse-panel .suppress * {color: #AAA;}.glimpse-panel .selected, .glimpse-panel .selected > td, .glimpse-panel .selected > th, .glimpse-panel .selected > tr > td, .glimpse-panel .selected > tr > th, .selected > td > .glimpse-preview-table > tbody > tr > td, .selected > tr > td > .glimpse-preview-table > tbody > tr > td {background-color: #E6F5E6;}.glimpse-panel .selected * {color: #409B3B;}.glimpse .info .icon, .glimpse .warn .icon, .glimpse .loading .icon, .glimpse .error .icon, .glimpse .fail .icon, .glimpse .ms .icon, .glimpse .glimpse-connect .icon, .glimpse .glimpse-disconnect .icon, .glimpse .alert .icon {width: 14px;height: 14px;background-image: url();background-repeat: no-repeat;display: inline-block;margin-right: 5px;}.glimpse .glimpse-connect .icon, .glimpse .glimpse-disconnect .icon {width: 17px;height: 17px;}.glimpse .info .icon {background-position: -22px -22px;}.glimpse .warn .icon {background-position: -36px -22px;}.glimpse .loading .icon {background-position: -78px -22px;}.glimpse .error .icon {background-position: -50px -22px;}.glimpse .ms .icon {background-position: -181px -22px;}.glimpse .fail .icon {background-position: -64px -22px;}.glimpse .alert .icon {background-position: -135px -22px;}.glimpse .glimpse-connect .icon {background-position: -213px -20px; }.glimpse .glimpse-disconnect .icon {background-position: -195px -20px; }.glimpse .info * {color: #067CE5;}.glimpse .warn * {color: #FE850C;}.glimpse .error * {color: #B40000;}.glimpse .fail * {color: #B40000;font-weight: bold;}.glimpse-notice {position:absolute;right: 20px;bottom: 5px;color: #777;}.glimpse-clear {bottom: 30px;position: absolute;right: 20px;background-color: white;padding: 0.2em 1em 0.3em 1em;border: #CCC solid 1px;bottom: 25px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;}.glimpse-panel table .glimpse-head-message td {text-align: center;background-color: #DDD;}.glimpse-panelitem-info div {text-align: center;}.glimpse-panelitem-info .glimpse-panel-message {padding-top: 5px;}.glimpse-panelitem-info strong {font-weight: bold;}.glimpse-panelitem-info .glimpse-info-more {font-size: 1.5em;margin: 1em 0;}.glimpse-panelitem-info .glimpse-info-quote {font-style: italic;margin: 0.75em 0 3em;}.glimpse-pager {background: #C6C6C6;padding: 3px 4px;font-weight: bold;text-align: center;vertical-align: top;}.glimpse-pager .glimpse-pager-message {margin-left: 5px;margin-right: 5px;}.glimpse-pager .glimpse-button {margin-top: 0px;}.glimpse-pager .glimpse-pager-link, .glimpse-pager .glimpse-pager-link:hover {font-weight: bold;text-decoration: underline;cursor: pointer;color: #2200C1;}.glimpse-pager .glimpse-pager-link-firstPage {background-position: -2px -38px;}.glimpse-pager .glimpse-pager-link-firstPage-disabled {background-position: -17px -38px;}.glimpse-pager .glimpse-pager-link-previousPage {background-position: -33px -38px;}.glimpse-pager .glimpse-pager-link-previousPage-disabled {background-position: -49px -38px;}.glimpse-pager .glimpse-pager-link-nextPage {background-position: -65px -38px;}.glimpse-pager .glimpse-pager-link-nextPage-disabled {background-position: -81px -38px;}.glimpse-pager .glimpse-pager-link-lastPage {background-position: -96px -38px;}.glimpse-pager .glimpse-pager-link-lastPage-disabled {background-position: -111px -38px;}.glimpse-panel table tr.glimpse-pager-separator td {border-bottom: 3px solid #C6C6C6;} .glimpse-panel .glimpse-sub-text {color: #AAA;font-size: 0.9em;margin-left: 5px;top:-1px;position:relative;}.glimpse-popup {color:#000;background:#FFF;margin:0;padding:0;} .glimpse-popup .glimpse-holder {position:relative !important;display: block !important; } .glimpse-popup .glimpse-popout, .glimpse-popup .glimpse-minimize, .glimpse-popup .glimpse-close, .glimpse-popup .glimpse-terminate, .glimpse-popup .glimpse-open {display:none !important; } .glimpse-popup .glimpse-panel {overflow:visible !important; }.glimpse-notification-holder {position: absolute;z-index: 200;width: 100%;top: 85px;}.glimpse-notification {padding: 5px 20px;border-radius: 5px;margin: 0 auto 10px auto;text-align: center;max-width: 500px;-moz-box-shadow: 0 0 5px #888;-webkit-box-shadow: 0 0 5px#888;box-shadow: 0 0 5px #888;width: 50%;}.glimpse-notification-error {background-color: #F97474;border: 1px solid red;}.glimpse-notification-info {background-color: #B7C5ED;border: 1px solid #3156C1;}.glimpse-lightbox {display: none;position:fixed;top:0;left:0;width:100%;height:100%;margin: auto;text-align: center;background-color: rgba(255,255,255,0.7);z-index: 100011 !important;}.glimpse-lightbox-inner {position: absolute;width:100%;height:100%;display: block;}.glimpse-lightbox-element {position: absolute;width: 80%;height: 80%;top: 10%;left: 10%;background-color: #fff;-webkit-box-shadow: 0px 0px 30px rgba(50, 50, 50, 1);-moz-box-shadow: 0px 0px 30px rgba(50, 50, 50, 1);box-shadow: 0px 0px 30px rgba(50, 50, 50, 1); }.glimpse-lightbox .close {position: absolute;right: 25px;top: 10px;cursor: pointer; }.glimpse-lightbox iframe {width: 100%;border: 0px;height: 100%;}.glimpse-open .glimpse-icon {float: left;}.glimpse ::-webkit-scrollbar-corner {vbackground: transparent;}.glimpse ::-webkit-scrollbar-corner {background-clip: padding-box;background-color: whiteSmoke;border: solid white;box-shadow: inset 1px 1px 0 rgba(0,0,0,.14);border-width: 3px 0 0 3px;}.glimpse ::-webkit-scrollbar-track-piece {background-clip: padding-box;background-color: whiteSmoke;border: solid white;box-shadow: inset 1px 0 0 rgba(0,0,0,.14),inset -1px 0 0 rgba(0,0,0,.07);border-width: 0 0 0 3px;}.glimpse ::-webkit-scrollbar-track {background-clip: padding-box;border: solid transparent;border-width: 0 0 0 7px;}.glimpse ::-webkit-scrollbar-button {height: 0;width: 0;}.glimpse ::-webkit-scrollbar-thumb {background-color: rgba(0, 0, 0, .2);background-clip: padding-box;border: solid transparent;min-height: 28px;padding: 100px 0 0;box-shadow: inset 1px 1px 0 rgba(0,0,0,.1),inset 0 -1px 0 rgba(0,0,0,.07);border-width: 0 0 0 7px; border-width: 1px 1px 1px 5px;}.glimpse ::-webkit-scrollbar {height: 16px;overflow: visible;width: 16px;}',
            html: '<div class=" glimpse"><div class="glimpse-spacer"></div><div class="glimpse-open glimpse"><div class="glimpse-icon"></div></div><div class="glimpse-holder glimpse"><div class="glimpse-notification-holder"></div><div class="glimpse-resizer"></div><div class="glimpse-bar"><div class="glimpse-icon" title="About Glimpse?"></div><div class="glimpse-title"><span class="glimpse-snapshot-name"></span><span class="glimpse-snapshot-path"></span><span><span class="glimpse-enviro"></span><span class="glimpse-context-stack"></span><span class="glimpse-uri"></span><span class="glimpse-correlation"></span></span></div><div class="glimpse-buttons"><span class="glimpse-meta-update" href="#" title="New Updates are available, take a look at what you are missing.">New update available!</span><a class="glimpse-meta-warning glimpse-button" href="#" title="Glimpse has some warnings!"></a><a class="glimpse-meta-help glimpse-button" href="#" title="Need some help?" target="_blank"></a><a class="glimpse-minimize glimpse-button" href="#" title="Close/Minimize"></a><a class="glimpse-popout glimpse-button glimpse-hidden" href="#" title="Pop Out"></a><a class="glimpse-close glimpse-button" href="#" title="Shutdown/Terminate"></a></div></div><div class="glimpse-content"><div class="glimpse-tabs glimpse-tabs-instance"><ul></ul></div><div class="glimpse-tabs glimpse-tabs-permanent"><ul></ul></div><div class="glimpse-panel-holder"><div class="glimpse-panel glimpse-active"><div class="glimpse-panel-message">No data has been found. This could be caused because:<br /><br />- the data is still loading by the client, or<br />- no data has been received from the server (check to see if the data &amp; metadata payloads are present), or<br />- no plugin has been loaded, or<br />- an error has been thrown in the client (please check your JavaScript console and let us know if anything is up).</div></div></div><div class="glimpse-options"></div></div></div><div class="glimpse-lightbox"><div class="glimpse-lightbox-inner"><div class="glimpse-lightbox-element"></div></div></div>'
        },
        generateSpriteAddress = function () {
            var uri = settings.local('sprite') || 'http://getglimpse.com/content/_v1/app-sprite-new.png?version={version}',
                version = settings.local('version') || '0.0',
                hash = settings.local('hash') || '0.0';
            
            return util.uriTemplate(uri, { 'version': version, 'hash': hash });
        },
        updateSpriteAddress = function (args) {
            var uri = args.metadata.resources.glimpse_sprite,
                version = args.metadata.version,
                hash = args.metadata.hash;
            if (uri)
                settings.local('sprite', uri);
            if (version)
                settings.local('version', version);
            if (hash)
                settings.local('hash', hash);
        },
        getCss = function() {
            var content = templates.css.replace(/url\(\)/gi, 'url(' + generateSpriteAddress() + ')');
            
            return '<style type="text/css"> ' + content + ' </style>'; 
        },
        getHtml = function() {
            return templates.html;
        },
        process = function(isInitial, topic) {
            pubsub.publish(topic + '.rendering', { isInitial: isInitial });
            pubsub.publish('action.shell.rendering', { isInitial: isInitial }); 
         
            pubsub.publish('action.shell.rendered', { isInitial: isInitial });
            pubsub.publish(topic + '.rendered', { isInitial: isInitial });
        },
        refresh = function() {
            pubsub.publish('trigger.shell.clear');

            process(false, 'action.shell.refresh');
        },
        init = function() {  
            pubsub.publish('action.template.processing', { templates: templates });
            pubsub.publish('action.shell.loading');
            
            $(getCss()).appendTo('head'); 
            $(getHtml()).appendTo('body');
            
            pubsub.publish('action.shell.loaded');
            pubsub.publish('action.template.processed', { templates: templates });

            pubsub.publish('trigger.shell.subscriptions'); 

            process(true, 'action.shell.initial'); 
            
            pubsub.publish('trigger.shell.ready'); 
        };

    pubsub.subscribe('action.data.metadata.changed', updateSpriteAddress);
    pubsub.subscribe('trigger.shell.refresh', refresh); 
    pubsub.subscribe('trigger.shell.init', init);

    return {};
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.data, glimpse.settings); 
// glimpse.render.engine.js
glimpse.render.engine = (function($, pubsub) {
    var providers = {},
        addition = function (scope, data, metadata, insertType, targetType) {
            var html = $('<div>' + build(data, metadata) + '</div>').find('.glimpse-row-holder:first > .glimpse-row'),
                rowHolder = scope.find('.glimpse-row-holder:first'),
                scopeTarget = rowHolder.find('> .glimpse-row:' + targetType);
            
            // Catch the case when we don't have anything to action the insertType against
            if (scopeTarget.length == 0) {
                scopeTarget = rowHolder;
                insertType = 'appendTo';
            }
            
            var elements = $(html)[insertType](scopeTarget);
            
            pubsub.publish('trigger.panel.render.style', { scope: elements });
        },
        retrieve = function(name) {
            return providers[name];
        },
        register = function(name, engine) {
            providers[name] = engine;
        },
        build = function(data, metadata) {
            return providers.master.build(data, 0, true, metadata, 1);
        },
        insert = function(scope, data, metadata) {
            scope.html(build(data, metadata)); 
            pubsub.publish('trigger.panel.render.style', { scope: scope });
        },
        append = function(scope, data, metadata) {
            addition(scope, data, metadata, 'insertAfter', 'last');
        },
        prepend = function(scope, data, metadata) {
            addition(scope, data, metadata, 'insertBefore', 'first');
        };
   
    return {
        _providers: providers,
        retrieve: retrieve,
        register: register,
        build: build,
        insert: insert,
        append: append,
        prepend: prepend
    };
})(jQueryGlimpse, glimpse.pubsub);
// glimpse.render.engine.util.js
glimpse.render.engine.util = (function($) {
    return {
        keyMetadata: function (key, metadata) {
            return metadata && metadata.layout === Object(metadata.layout) ? metadata.layout[key] : null;
        },
        includeHeading: function(metadata) {
            return !(metadata && metadata.suppressHeader);
        },
        shouldUsePreview: function(length, level, forceFull, limit, forceLimit, tolerance) {
            if ($.isNumeric(forceLimit))
                limit = forceLimit;
            return !forceFull && ((level == 1 && length > (limit + tolerance)) || (level > 1 && (!forceLimit || length > (limit + tolerance))));
        },
        newItemSpacer: function(startingIndex, currentRow, rowLimit, dataLength) {
            var html = '';
            if (currentRow > startingIndex && (currentRow <= rowLimit || dataLength > rowLimit))
                html += '<span class="rspace">,</span>';
            if (currentRow > rowLimit && dataLength > rowLimit)
                html += '<span class="small">length=' + dataLength + '</span>';
            return html;
        }          
    };
})(jQueryGlimpse); 
// glimpse.render.engine.util.raw.js
glimpse.render.engine.util.raw = (function($, util) {
    var scrub = function(d) {
            return d.substr(1, d.length - 2);
        };
     
    return { 
            types: {
                italics : {
                    match: function (d) { return d.match(/^\_[\w\D]+\_$/) != null; },
                    replace: function (d) { return '<u>' + util.htmlEncode(scrub(d)) + '</u>'; },
                    trimmable: true
                },
                underline : {
                    match: function (d) { return d.match(/^\\[\w\D]+\\$/) != null; },
                    replace: function (d) { return '<em>' + util.htmlEncode(scrub(d)) + '</em>'; },
                    trimmable: true
                },
                strong : {
                    match: function (d) { return d. match(/^\*[\w\D]+\*$/) != null; },
                    replace: function (d) { return '<strong>' + util.htmlEncode(scrub(d)) + '</strong>'; },
                    trimmable: true
                },
                sub: {
                    match: function (d) { return d.indexOf('|(') >= 0 && d.indexOf(')|') >= 0; },
                    replace: function (d) { return util.htmlEncode(d).replace('|()|', '').replace('|(', '<span class="glimpse-sub-text">(').replace(')|', ')</span>'); },
                    trimmable: true
                },
                raw : {
                    match: function (d) { return d.match(/^\![\w\D]+\!$/) != null; },
                    replace: function (d) { return scrub(d); },
                    trimmable: false
                }
            },  
            process: function (data, charMax, charOuterMax, wrapEllipsis, skipEncoding) {
                var trimmable = true, 
                    replace = function (d) { return util.htmlEncode(d); };

                if (data == null)
                    return '--';
                if (typeof data != 'string')
                    data = data + '';  
                if (!skipEncoding) {
                    for (var typeKey in this.types) {
                        var type = this.types[typeKey];
                        if (type.match(data)) {
                            replace = type.replace;
                            trimmable = type.trimmable;
                            break;
                        }
                    }
                } 
                if (trimmable && charOuterMax && data.length > charOuterMax)
                    return replace(data.substr(0, charMax)) + (wrapEllipsis ? '<span>...</span>' : '...');

                return replace(data);
            }
        };
})(jQueryGlimpse, glimpse.util);
// glimpse.render.engine.util.table.js
glimpse.render.engine.util.table = (function($) {
    var factories = {
            array: {
                isHandled: function(data) {
                    return $.isArray(data[0]);
                },
                getHeader: function(data) {
                    return data[0];
                },
                getRowClass: function(data, rowIndex) {
                    return data[rowIndex].length > data[0].length ? ' ' + data[rowIndex][data[rowIndex].length - 1] : '';
                },
                getRowValue: function(dataRow, fieldIndex, header) {
                    return dataRow[fieldIndex];
                },
                startingIndex: function() {
                    return 1;
                }
            },
            object: {
                isHandled: function(data) {
                    return data[0] === Object(data[0]);
                },
                getHeader: function(data) {
                    var result = [];
                    for (var key in data[0]) {
                        if (key != "_metadata")
                            result.push(key);
                    }
                    return result;
                },
                getRowClass: function(data, rowIndex) {
                    return data[rowIndex]._metadata && data[rowIndex]._metadata.style ? ' ' + data[rowIndex]._metadata.style : '';
                },
                getRowValue: function(dataRow, fieldIndex, header) {
                    return dataRow[header[fieldIndex]];
                },
                startingIndex: function() {
                    return 0;
                }
            },
            other: {
                isHandled: function(data) {
                    return true;
                },
                getHeader: function(data) {
                    return ["Values"];
                },
                getRowClass: function(data, rowIndex) {
                    return '';
                },
                getRowValue: function(dataRow, fieldIndex, header) {
                    return dataRow;
                },
                startingIndex: function() {
                    return 0;
                }
            }
        };

    return {
        findFactory: function(data) {
                var match = null;
                for (var key in factories) {
                    if (factories[key].isHandled(data)) {
                        match = factories[key];
                        break;
                    }
                }
                return match;
            }
        };
})(jQueryGlimpse);
// glimpse.render.engine.style.js
(function($, pubsub) {
    var codeProcess = function(items) {
            $.each(items, function() {
                var item = $(this).addClass('prettyprint'),
                    codeType = item.hasClass('glimpse-code') ? item.attr('data-codeType') : item.closest('.glimpse-code').attr('data-codeType');

                item.html(prettyPrintOne(item.html(), codeType));
            });
        },
        apply = function(options) { 
            // Expand collapse  
            options.scope.find('.glimpse-expand').click(function() {
                var toggle = $(this).toggleClass('glimpse-collapse'),
                    hasClass = toggle.hasClass('glimpse-collapse');
                toggle.parent().next().children().first().toggle(!hasClass).next().toggle(hasClass);
            });
            
            // Alert state
            options.scope.find('.info, .warn, .error, .fail, .loading, .ms') 
                .find('> td:first-child, > tr:first-child .glimpse-cell:first-child')
                .not(':has(.icon)').prepend('<div class="icon"></div>');
;
            // Code formatting
            codeProcess(options.scope.find('.glimpse-code:not(:has(table)), .glimpse-code > table:not(:has(thead)) .glimpse-preview-show'));

            // Open state
            options.scope.find('.glimpse-start-open > td > .glimpse-expand:first-child').click(); 
        };
     
    pubsub.subscribe('trigger.panel.render.style', apply);
})(jQueryGlimpse, glimpse.pubsub);
// glimpse.render.engine.keyvalue.js
(function($, util, engine, engineUtil) {
    var providers = engine._providers,
        build = function (data, level, forceFull, metadata, forceLimit) {  
            var limit = !$.isNumeric(forceLimit) ? 3 : forceLimit;

            if (engineUtil.shouldUsePreview(util.lengthJson(data), level, forceFull, limit, forceLimit, 1))
                return buildPreview(data, level);
            return buildOnly(data, level, metadata);
        }, 
        buildOnly = function(data, level, metadata) {
            var html = '<table>';
            if (engineUtil.includeHeading(metadata))
                html += '<thead><tr class="glimpse-row-header glimpse-row-header-' + level + '"><th class="glimpse-key">Key</th><th class="glimpse-cell-value">Value</th></tr></thead>';
            html += '<tbody class="glimpse-row-holder">';
            for (var key in data)
                html += '<tr class="glimpse-row"><th class="glimpse-key">' + engineUtil.raw.process(key) + '</th><td> ' + providers.master.build(data[key], level + 1, null, engineUtil.keyMetadata(key, metadata)) + '</td></tr>';
            html += '</tbody></table>';

            return html;
        },
        buildPreview = function (data, level) { 
            return '<table class="glimpse-preview-table"><tr><td class="glimpse-preview-cell"><div class="glimpse-expand"></div></td><td><div class="glimpse-preview-object">' + buildPreviewOnly(data, level) + '</div><div class="glimpse-preview-show">' + build(data, level, true) + '</div></td></tr></table>';
        },
        buildPreviewOnly = function (data, level) {
            var rowMax = 2, 
                rowLength = util.lengthJson(data), 
                rowLimit = (rowMax < rowLength ? rowMax : rowLength), 
                i = 0, 
                html = '<span class="start">{</span>';

            for (var key in data) {
                html += engineUtil.newItemSpacer(0, i, rowLimit, rowLength);
                if (i > rowLength || i++ > rowLimit)
                    break;
                html += '<span>\'</span>' + providers.string.build(key, level + 1, false, 12) + '<span>\'</span><span class="mspace">:</span><span>\'</span>' + providers.string.build(data[key], level + 1, false, 12) + '<span>\'</span>';
            }
            html += '<span class="end">}</span>';

            return html;
        },
        provider = {
            build : build,
            buildOnly : buildOnly,
            buildPreview : buildPreview,
            buildPreviewOnly : buildPreviewOnly
        }; 

    engine.register('keyValue', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util);

// glimpse.render.engine.empty.js
(function($, engine) {
    var provider = {
            build: function(data) { 
                if (data == null || data === '')
                    data = 'No data found for this plugin.';
                return '<div class="glimpse-panel-message">' + data + '</div>';
            }
        };

    engine.register('empty', provider);
})(jQueryGlimpse, glimpse.render.engine);
// glimpse.render.engine.master.js
(function($, engine) {
    var providers = engine._providers,
        stack = [],
        provider = {
            build: function(data, level, forceFull, metadata, forceLimit) {
                var result = '',
                    isArray = $.isArray(data),
                    isObject = data === Object(data);

                if (isObject || isArray) {
                    if (stack.indexOf(data) > -1)
                        return '<em>--Circular Reference Detected--</em>';
                    stack.push(data);
                }

                if (metadata) {
                    if (metadata.engine && providers[metadata.engine])
                        result = providers[metadata.engine].build(data, level, forceFull, metadata, forceLimit);
                    else if (metadata.layout && isArray) 
                        result = providers.layout.build(data, level, forceFull, metadata, forceLimit);
                    else if (metadata.keysHeadings && isObject)
                        result = providers.heading.build(data, level, forceFull, metadata, forceLimit);
                }
                
                if (result === '') {
                    if (typeof data === 'function')
                        result = providers.func.build(data, level, forceFull, metadata, forceLimit);
                    else if (isArray)
                        result = providers.table.build(data, level, forceFull, metadata, forceLimit);
                    else if (isObject)
                        result = providers.keyValue.build(data, level, forceFull, metadata, forceLimit);  
                    else if (level == 0) 
                        result = providers.empty.build(data);
                    else 
                        result = providers.string.build(data, level, forceFull, forceLimit);
                }
                
                if (isObject || isArray)
                    stack.pop();
                
                return result;
            }
        };

    engine.register('master', provider);
})(jQueryGlimpse, glimpse.render.engine);
// glimpse.render.engine.string.js
(function($, util, engine, engineUtil) {
    var provider = {
            build: function (data, level, forceFull, forceLimit) { 
                if (data == null)
                    return '--';
                if ($.isArray(data))
                    return '[ ... ]';
                if ($.isPlainObject(data))
                    return '{ ... }';
                if (forceFull)
                    return util.preserveWhitespace(engineUtil.raw.process(data));  

                var charMax = $.isNumeric(forceLimit) ? forceLimit : (level > 1 ? 80 : 150),
                    charOuterMax = (charMax * 1.2),
                    content = engineUtil.raw.process(data, charMax, charOuterMax, true);

                if (data.length > charOuterMax) {
                    content = '<span class="glimpse-preview-string" title="' + engineUtil.raw.process(data, charMax * 2, charMax * 2.1, false, true) + '">' + content + '</span>';
                    if (charMax >= 15)
                        content = '<table class="glimpse-preview-table"><tr><td class="glimpse-preview-cell"><div class="glimpse-expand"></div></td><td>' + content + '<span class="glimpse-preview-show">' + util.preserveWhitespace(engineUtil.raw.process(data)) + '</span></td></tr></table>';
                }
                else 
                    content = util.preserveWhitespace(content);  
              
                return content;
            }
        };

    engine.register('string', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util);

// glimpse.render.engine.layout.js
(function($, util, engine, engineUtil, engineUtilTable) {
    var providers = engine._providers, 
        buildFormatString = function(content, data, indexs, isHeadingRow) {  
            for (var i = 0; i < indexs.length; i++) {
                var pattern = "\\\{\\\{" + indexs[i] + "\\\}\\\}", regex = new RegExp(pattern, "g"),
                    value = isHeadingRow && !$.isNumeric(indexs[i]) ? indexs[i] : data[indexs[i]]; 
                content = content.replace(regex, value);
            }
            return content;
        }, 
        buildCell = function(data, metadataItem, level, cellType, rowIndex, isHeadingRow) {
            var html = '', 
                cellContent = '', 
                cellClass = '', 
                cellStyle = '', 
                cellAttr = '',
                containsNestedData = $.isArray(metadataItem.data);
                
            //Cell Content
            if (containsNestedData) {
                for (var i = 0; i < metadataItem.data.length; i++) 
                    cellContent += buildCell(data, metadataItem.data[i], level, 'div', rowIndex, isHeadingRow);
            }
            else { 
                if (!metadataItem.indexs && util.containsTokens(metadataItem.data)) 
                    metadataItem.indexs = util.getTokens(metadataItem.data, data); 
                  
                cellContent = metadataItem.indexs ? buildFormatString(metadataItem.data, data, metadataItem.indexs, isHeadingRow) : (isHeadingRow && !$.isNumeric(metadataItem.data) ? metadataItem.data : data[metadataItem.data]);
                
                if (metadataItem.engine && !isHeadingRow) {
                    cellContent = providers.master.build(cellContent, level + 1, metadataItem.forceFull, metadataItem, isHeadingRow ? undefined : metadataItem.limit);
                }
                else {
                    //Get metadata for the new data 
                    var newMetadataItem = metadataItem.layout;
                    if ($.isPlainObject(newMetadataItem)) 
                        newMetadataItem = newMetadataItem[rowIndex];
                    if (newMetadataItem || metadataItem.suppressHeader)
                        newMetadataItem = { layout: newMetadataItem, suppressHeader: metadataItem.suppressHeader };

                    //If minDisplay and we are in header or there is no data, we don't want to render anything 
                    if (metadataItem.minDisplay && (isHeadingRow || cellContent == null))
                        return ""; 
                    
                    //Work out what title we want
                    if (isHeadingRow && metadataItem.title) 
                        cellContent = metadataItem.title;

                    cellContent = providers.master.build(cellContent, level + 1, metadataItem.forceFull, newMetadataItem, isHeadingRow ? undefined : metadataItem.limit);

                    //Content pre/post
                    if (!isHeadingRow) {
                        if (metadataItem.pre) { cellContent = '<span class="glimpse-soft">' + metadataItem.pre + '</span>' + cellContent; }
                        if (metadataItem.post) { cellContent = cellContent + '<span class="glimpse-soft">' + metadataItem.post + '</span>'; }
                    }
                }
            }
            
            if (!isHeadingRow) {
                if (!containsNestedData) { cellClass = 'glimpse-cell'; }
                
                //Cell Class
                if (metadataItem.key === true) { cellClass += ' glimpse-cell-key'; }
                if (metadataItem.isCode === true) { cellClass += ' glimpse-code'; }
                if (metadataItem.className) { cellClass += ' ' + metadataItem.className; }
                
                //Cell Code 
                if (metadataItem.codeType) { cellAttr += ' data-codeType="' + metadataItem.codeType + '"'; };
            }
            if (cellClass) { cellAttr += ' class="' + cellClass + '"'; }; 
            //Cell Style  
            if (metadataItem.width) { cellStyle += 'width:' + metadataItem.width + ';'; };
            if (metadataItem.align) { cellStyle += 'text-align:' + metadataItem.align + ';'; };
            if (cellStyle) { cellAttr += ' style="' + cellStyle + '"'; };
            //Cell Span
            if (metadataItem.span) { cellAttr += ' colspan="' + metadataItem.span + '"'; };
             
            html += '<' + cellType + cellAttr + '>' + cellContent + '</' + cellType + '>';
            
            return html;
        }, 
        buildCellRow = function (data, layout, level, cellType, rowIndex, isHeadingRow) {
            var html = '';
            
            for (var x = 0; x < layout.length; x++) { 
                var rowHtml = ''; 
                for (var y = 0; y < layout[x].length; y++) {
                    var metadataItem = layout[x][y];  
                    rowHtml += buildCell(data, metadataItem, level, cellType, rowIndex, isHeadingRow);
                }
                     
                if (rowHtml != '') { html += '<tr>' + rowHtml + '</tr>'; };
            }
            return html;
        },
         
        build = function (data, level, forceFull, metadata, forceLimit) { 
            var limit = !$.isNumeric(forceLimit) ? 3 : forceLimit;

            if (engineUtil.shouldUsePreview(data.length, level, forceFull, limit, forceLimit, 1))
                return buildPreview(data, level, metadata);
            return buildOnly(data, level, metadata);
        },
        buildOnly = function (data, level, metadata) {
            var html = '<table class="glimpse-row-holder">', 
                layout = metadata.layout,
                factory = engineUtilTable.findFactory(data),
                headers = factory.getHeader(data); 
            
            if (engineUtil.includeHeading(metadata)) {
                html += '<thead class="glimpse-row-header glimpse-row-header-' + level + '">';
                html += buildCellRow(headers, layout, level, 'th', 0, true);
                html += '</thead>';
            } 
            for (var i = factory.startingIndex(); i < data.length; i++) {
                html += '<tbody class="glimpse-row' + factory.getRowClass(data, i) + '">';
                html += buildCellRow(data[i], layout, level, 'td', i, false);
                html += '</tbody>';
            }
            html += '</table>';
            return html;
        }, 
        buildPreview = function(data, level, metadata) { 
            return '<table class="glimpse-preview-table"><tr><td class="glimpse-preview-cell"><div class="glimpse-expand"></div></td><td><div class="glimpse-preview-object">' + buildPreviewOnly(data, level) + '</div><div class="glimpse-preview-show">' + buildOnly(data, level, metadata) + '</div></td></tr></table>';
        },
        buildPreviewOnly = function (data, level) { 
            return providers.table.buildPreviewOnly(data, level);
        },
        provider = {
            build : build,
            buildOnly : buildOnly,
            buildPreview : buildPreview,
            buildPreviewOnly : buildPreviewOnly
        }; 

    engine.register('layout', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util, glimpse.render.engine.util.table);

// glimpse.render.engine.table.js
(function($, util, engine, engineUtil, engineUtilTable) {
    var providers = engine._providers,
        build = function (data, level, forceFull, metadata, forceLimit) { 
            var limit = !$.isNumeric(forceLimit) ? 3 : forceLimit;

            if (engineUtil.shouldUsePreview(data.length, level, forceFull, limit, forceLimit, 1))
                return buildPreview(data, level);
            return buildOnly(data, level, metadata);
        },
        buildOnly = function (data, level, metadata) {
            var html = '<table>', 
                factory = engineUtilTable.findFactory(data),
                headers = factory.getHeader(data); 
            
            if (engineUtil.includeHeading(metadata)) {
                html += '<thead><tr class="glimpse-row-header glimpse-row-header-' + level + '">';
                for (var x = 0; x < headers.length; x++)
                    html += '<th>' + engineUtil.raw.process(headers[x]) + '</th>';
                html += '</tr></thead>';
            }
            html += '<tbody class="glimpse-row-holder">';
            for (var i = factory.startingIndex(); i < data.length; i++) {
                html += '<tr class="glimpse-row' + factory.getRowClass(data, i) + '">';
                for (var x = 0; x < headers.length; x++)
                    html += '<td>' + providers.master.build(factory.getRowValue(data[i], x, headers), level + 1) + '</td>';
                html += '</tr>';
            }
            html += '</tbody></table>';
            return html;
        },
        buildPreview = function (data, level) {
            var isComplex = ($.isArray(data[0]) || $.isPlainObject(data[0]));
            
            if (isComplex && data.length == 1) //This exists to simplify visual layout if we only have one item 
                return providers.master.build(data[0], level);
            if (isComplex || data.length > 1) 
                return '<table class="glimpse-preview-table"><tr><td class="glimpse-preview-cell"><div class="glimpse-expand"></div></td><td><div class="glimpse-preview-object">' + buildPreviewOnly(data, level) + '</div><div class="glimpse-preview-show">' + buildOnly(data, level) + '</div></td></tr></table>';
            return providers.string.build(data[0], level + 1); 
        },
        buildPreviewOnly = function (data, level) { 
            var html = '<span class="start">[</span>', 
                factory = engineUtilTable.findFactory(data),
                headers = factory.getHeader(data),
                startingIndex = factory.startingIndex(),
                columnMax = 3, 
                columnLength = headers.length,
                columnLimit = columnMax < columnLength ? columnMax : columnLength, 
                rowMax = 2 + startingIndex, 
                rowLength = data.length - startingIndex,
                rowLimit = rowMax < rowLength ? rowMax : rowLength + startingIndex; 
            
            for (var i = startingIndex; i < rowLimit; i++) { 
                html += engineUtil.newItemSpacer(startingIndex, i, rowLimit, rowLength);
                if (headers.length > 1)
                    html += '<span class="start">[</span>';
                var spacer = '';
                for (var x = 0; x < columnLimit; x++) {
                    html += spacer + '<span>\'</span>' + providers.string.build(factory.getRowValue(data[i], x, headers), level + 1, false, 12) + '<span>\'</span>';
                    spacer = '<span class="rspace">,</span>';
                }
                if (headers.length > 1) {
                    if (x < headers.length)
                        html += spacer + '<span>...</span>';
                    html += '<span class="end">]</span>';
                }
            }
            html += engineUtil.newItemSpacer(startingIndex, ++i, rowLimit, rowLength);

            html += '<span class="end">]</span>';

            return html;
        },
        provider = {
            build : build,
            buildOnly : buildOnly,
            buildPreview : buildPreview,
            buildPreviewOnly : buildPreviewOnly
        }; 

    engine.register('table', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util, glimpse.render.engine.util.table);
// glimpse.render.engine.func.js
(function($, util, engine, engineUtil) {
    var build = function (data, level, forceFull, metadata, forceLimit) { 
            if (!forceFull)
                return buildPreview(data, level); 
            return buildOnly(data, level);
        }, 
        buildOnly = function (data, level) {
            return util.htmlEncode(data.toString());
        },
        buildPreview = function (data, level) { 
            return '<table class="glimpse-preview-table"><tr><td class="glimpse-preview-cell"><div class="glimpse-expand"></div></td><td><div class="glimpse-preview-object">' + buildPreviewOnly(data, level) + '</div><div class="glimpse-preview-show glimpse-code" data-codeType="js">' + buildOnly(data, level) + '</div></td></tr></table>';
        },
        buildPreviewOnly = function (data, level) {
            data = data.toString();
            
            var name = data.substring(data.indexOf(' ') + 1, data.indexOf('(')),
                args = data.substring(data.indexOf('(') + 1, data.indexOf(')')).split(', ').join('<span class="rspace">,</span>');
             
            return  '<span class="start">function</span>' + name + '<span>(</span>' + args + '<span>) { ... }</span>'; 
        },
        provider = {
            build : build,
            buildOnly : buildOnly,
            buildPreview : buildPreview,
            buildPreviewOnly : buildPreviewOnly
        }; 

    engine.register('func', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util);

// glimpse.render.engine.heading.js
(function($, util, engine, engineUtil) {
    var providers = engine._providers, 
        build = function (data, level, forceFull, metadata, forceLimit) {   
            var html = '<div class="glimpse-row-holder glimpse-row-holder-suppress"><div class="glimpse-row">';
            for (var key in data) {
                var value = data[key];
                html += '<div class="glimpse-header-item"><div class="glimpse-header">' + key + '</div>';
                if ($.isArray(value) || value === Object(value))
                    html += providers.master.build(value, 0, null, engineUtil.keyMetadata(key, metadata));
                else 
                    html += '<div class="glimpse-header-content">' + (value != null ? util.preserveWhitespace(value) : '<em>null</em>') + '</div>'; 
                html += '</div>';
            }
            html += '</div></div>';
            return html;
        }, 
        provider = {
            build : build
        }; 

    engine.register('heading', provider);
})(jQueryGlimpse, glimpse.util, glimpse.render.engine, glimpse.render.engine.util);

// glimpse.render.tab.js
(function($, data, elements, util, pubsub, settings) {
    var wireListeners = function () {
            var tabHolder = elements.tabHolder();
            
            tabHolder.find('li:not(.glimpse-active, .glimpse-disabled)').live('click', function () {
                var key = $(this).attr('data-glimpseKey');
                pubsub.publish('trigger.tab.select.' + key, { key: key });
            }); 
            tabHolder.find('li:not(.glimpse-active, .glimpse-disabled)').live('mouseover mouseout', function (e) {
                e.type == 'mouseover' ? $(this).addClass('glimpse-hover') : $(this).removeClass('glimpse-hover');
            }); 
        },
        generateHtmlItem = function(key, pluginData) {
            if (!pluginData.suppressTab) {
                var disabled = pluginData.data == null ? ' glimpse-disabled' : '',
                    permanent = pluginData.isPermanent ? ' glimpse-permanent' : '';
            
                return '<li class="glimpse-tab glimpse-tabitem-' + key + disabled + permanent + '" data-glimpseKey="' + key + '">' + pluginData.name + '</li>';
            }
            return '';
        },
        generateHtml = function(pluginDataSet) {
            var html = { instance: '', permanent: '' };
            for (var key in pluginDataSet) {
                var pluginData = pluginDataSet[key], 
                    itemHtml = generateHtmlItem(key, pluginData);
                 
                if (pluginData.isPermanent)
                    html.permanent += itemHtml; 
                else
                    html.instance += itemHtml;
            }
            return html;
        },
        render = function(args) { 
            pubsub.publish('action.tab.inserting.bulk');

            var currentData = data.currentData(),
                tabInstanceHolder = elements.tabInstanceHolder(),
                tabPermanentHolder = elements.tabPermanentHolder();
            
            // Make sure that the tabs are sorted
            currentData.data = util.sortTabs(currentData.data);

            // Add tabs to the dom
            var tabHtml = generateHtml(currentData.data);
            tabInstanceHolder.html(tabHtml.instance);
            if (args.isInitial) {
                tabPermanentHolder.append(tabHtml.permanent);
            }
            
            pubsub.publish('action.tab.inserted.bulk'); 
        },
        selected = function(options) {
            var tabHolder = elements.tabHolder(),
                tab = elements.tab(options.key);

            tabHolder.find('.glimpse-active, .glimpse-hover').removeClass('glimpse-active').removeClass('glimpse-hover');
            tab.addClass('glimpse-active');
        },
        clear = function() {
            elements.tabInstanceHolder().empty();
        },
        insert = function(args) {
            var key = args.key,
                payload = args.payload,
                itemHtml = generateHtmlItem(key, payload);
             
            pubsub.publish('action.tab.inserting.single', { key: key });
            
            if (payload.isPermanent)
                elements.tabPermanentHolder().append(itemHtml);
            else
                elements.tabInstanceHolder().append(itemHtml);
            
            pubsub.publish('action.tab.inserted.single', { key: key }); 
        };
    
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('trigger.tab.render', render);
    pubsub.subscribe('trigger.tab.select', selected);
    pubsub.subscribe('trigger.shell.clear', clear);
    pubsub.subscribe('trigger.tab.insert', insert);
})(jQueryGlimpse, glimpse.data, glimpse.elements, glimpse.util, glimpse.pubsub, glimpse.settings);
// glimpse.render.panel.js
(function($, data, elements, pubsub, renderEngine) {
    var render = function (key, pluginData, pluginMetadata) {
            pubsub.publish('action.panel.rendering.' + key, { key: key, pluginData: pluginData, pluginMetadata: pluginMetadata });
            
            var panelHolder = elements.panelHolder(),  
                permanent = pluginData.isPermanent ? ' glimpse-permanent' : '',
                html = '<div class="glimpse-panel glimpse-panelitem-' + key + permanent  + '" data-glimpseKey="' + key + '"><div class="glimpse-panel-message">Loading data, please wait...</div></div>',
                panel = $(html).appendTo(panelHolder);

            if (!pluginData.dontRender)
                renderEngine.insert(panel, pluginData.data, pluginMetadata); 
            
            pubsub.publish('action.panel.rendered.' + key, { key: key, panel: panel, pluginData: pluginData, pluginMetadata: pluginMetadata, panelHolder: panelHolder });

            return panel;
        },
        selected = function(options) {
            var pluginData = data.currentData().data[options.key],
                pluginMetadata = data.currentMetadata().plugins[options.key],
                panel = elements.panel(options.key),
                currentSelection = elements.panelHolder().find('.glimpse-active');
            
            // Raise an event that lets us know when we dont care about a panel any more
            if (currentSelection.length > 0) {
                currentSelection.removeClass('glimpse-active');

                var oldKey = currentSelection.attr('data-glimpseKey');
                pubsub.publish('action.panel.hiding.' + oldKey, { key: oldKey, newKey: options.key });
            }

            // Only run if we have data 
            if (pluginData != null) {
                pubsub.publish('action.panel.showing.' + options.key, { key: options.key, panel: panel, pluginData: pluginData, pluginMetadata: pluginMetadata, oldKey: oldKey });

                // Only render the content when we need to
                if (panel.length == 0) 
                    panel = render(options.key, pluginData, pluginMetadata);   
             
                panel.addClass('glimpse-active'); 
            
                pubsub.publish('action.panel.showed.' + options.key, { key: options.key, panel: panel, pluginData: pluginData, pluginMetadata: pluginMetadata, oldKey: oldKey });
            }
        },
        clear = function() {
            elements.panelHolder().find('.glimpse-panel:not(.glimpse-permanent)').remove();
        };

    pubsub.subscribe('trigger.tab.select', selected);
    pubsub.subscribe('trigger.shell.clear', clear);
})(jQueryGlimpse, glimpse.data, glimpse.elements, glimpse.pubsub, glimpse.render.engine);
// glimpse.render.lazy.js
(function($, data, util, elements, pubsub, renderEngine) {
    var generateLazyAddress = function (key) {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.glimpse_tab, { 'requestId': data.currentData().requestId, 'pluginKey': key, 'hash': currentMetadata.hash });
        },
        retrieveData = function(options) {
            var resources = data.currentMetadata().resources; 
            
            if (resources.glimpse_tab) {
                pubsub.publish('action.tab.lazy.fetching', { key: options.key });
                
                $.ajax({
                    url: generateLazyAddress(options.key),
                    type: 'GET',
                    contentType: 'application/json',
                    success: function(result) {
                        processData(options.key, options.pluginData, options.pluginMetadata, result);
                    },
                    complete: function(xhr, status) {
                        pubsub.publish('action.tab.lazy.fetched', { key: options.key, status: status });
                    }
                });
            }
            else
                pubsub.publishAsync('trigger.notification.toast', { type: 'error', message: 'Lazy loading isn\'t currently supported by your server implementation. Sorry :(' });
        },
        processData = function (key, pluginData, pluginMetadata, result) {
            pluginData.data = result;

            renderEngine.insert(elements.panel(key), pluginData.data, pluginMetadata.structure);  
        },
        rendering = function (options) {
            if (options.pluginData.isLazy)
                options.pluginData.dontRender = true;
        },
        rendered = function (options) {
            if (options.pluginData.isLazy)
                retrieveData(options);
        };
     
    pubsub.subscribe('action.panel.rendering', rendering);
    pubsub.subscribe('action.panel.rendered', rendered);
})(jQueryGlimpse, glimpse.data, glimpse.util, glimpse.elements, glimpse.pubsub, glimpse.render.engine);
// glimpse.render.default.js
(function(settings, pubsub, elements) { 
    var readyOpen = function () {
            var isOpen = settings.local('isOpen'); 
            if (isOpen) 
                pubsub.publish('trigger.shell.open', { isInitial: true }); 
        },
        readySelect = function () {
            var current = settings.local('view'),
                tabElement = elements.tab(current),
                forced = current != null;
            
            if (!current || tabElement.length == 0) {
                tabElement = elements.tabHolder().find('li:not(.glimpse-active, .glimpse-disabled):first'); 
                current = tabElement.attr('data-glimpseKey');
            }
             
            if (tabElement.length > 0 && !tabElement.hasClass('glimpse-active'))
                pubsub.publish('trigger.tab.select.' + current, { key: current, forced: forced });
        },
        selected = function (args) {
            if (!args.forced)
                settings.local('view', args.key);
        };

    pubsub.subscribe('trigger.shell.ready', readyOpen);
    pubsub.subscribe('action.tab.inserted', readySelect);
    pubsub.subscribe('trigger.tab.select', selected);
})(glimpse.settings, glimpse.pubsub, glimpse.elements);

// glimpse.shell.controls.js
(function($, pubsub, elements, settings) {
    var wireListeners = function () { 
            elements.opener().find('.glimpse-icon').click(function () { pubsub.publish('trigger.shell.open', { isInitial: false }); });
            elements.barHolder().find('.glimpse-minimize').click(function () { pubsub.publish('trigger.shell.minimize'); });
            elements.barHolder().find('.glimpse-close').click(function () { pubsub.publish('trigger.shell.close'); });
        },  
        open = function(args) {
            if (!args.isInitial)
                settings.local('hidden', false);
            
            if (!settings.local('hidden') || args.force) {
                settings.local('isOpen', true);

                pubsub.publish('action.shell.opening', { isInitial: args.isInitial });

                var height = settings.local('height') || 300,
                    body = $.fn.add.call(elements.holder(), elements.pageSpacer()).show();
                
                settings.local('height', height);
                settings.local('panelHeight', height - 52);

                elements.opener().hide();
                if (args.isInitial)
                    body.height(height);
                else 
                    body.animate({ height: settings.local('height') }, 'fast');
                
                if (args.fullScreen) {
                    elements.pageSpacer().remove();
                    
                    var holder = elements.holder();
                    holder.height('');
                    $(window).resize(function() {
                        var panelHeight = $(window).height() - 54; 
                        elements.panels().height(panelHeight); 
                        pubsub.publish('trigger.shell.fullScreen.resize', { panelHeight: panelHeight });
                    });
                }
                
                pubsub.publish('action.shell.opened', { isInitial: args.isInitial });
            }
            else
                pubsub.publish('trigger.shell.suppressed.open');
        },
        minimize = function() {
            settings.local('isOpen', false);
            
            pubsub.publish('action.shell.minimizing');

            var count = 0;
            $.fn.add.call(elements.holder(), elements.pageSpacer())
                .animate({ height : '0' }, 'fast', function() {
                    $(this).hide();
                
                    if (count++ == 1) {
                        elements.opener().show(); 
                        pubsub.publish('action.shell.minimized'); 
                    }
                });
            
        },
        hide = function () {
            settings.local('hidden', true);

            elements.holder().hide();
            elements.pageSpacer().hide();
            elements.opener().show(); 
        },
        close = function() {
            settings.local('isOpen', false);
            settings.local('hidden', false);
            settings.global('glimpsePolicy', null, -1);
            
            pubsub.publish('action.shell.closeing');

            elements.holder().remove();
            elements.pageSpacer().remove();
            elements.opener().remove(); 

            pubsub.publish('action.shell.closed'); 
        };
    
    pubsub.subscribe('trigger.shell.open', open);
    pubsub.subscribe('trigger.shell.minimize', minimize);
    pubsub.subscribe('trigger.shell.close', close);
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners); 
    pubsub.subscribe('trigger.shell.hide', hide);
})(jQueryGlimpse, glimpse.pubsub, glimpse.elements, glimpse.settings);
// glimpse.shell.info.js
(function($, pubsub, elements, data, util) {
    var wireListeners = function () { 
            elements.barHolder().find('.glimpse-icon').click(function () { pubsub.publish('trigger.tab.select.info', { key: 'info' }); }); 
        },  
        buildHelp = function(options) { 
            var info = data.currentMetadata().plugins[options.key],
                url = info && info.documentationUri; 
            
            elements.barHolder().find('.glimpse-meta-help').toggle(url != null).attr('href', url); 
        }, 
        buildInfo = function(args) { 
            var metadata = data.currentMetadata(); 
            args.panel.html('<div class="glimpse-info-title"><a href="http://getGlimpse.com/" target="_blank"><img border="0" src="' + util.uriTemplate(data.currentMetadata().resources.glimpse_logo) + '" /></a></div><div>v' + metadata.version + '</div><div class="glimpse-info-quote">"What Firebug is for the client, Glimpse is for the server"</div><div class="glimpse-info-more">Go to your Glimpse Config page <a href="' + util.uriTemplate(data.currentMetadata().resources.glimpse_config) + '" target="_blank">Glimpse.axd</a></div><div class="glimpse-info-more">For more info see <a href="http://getGlimpse.com" target="_blank">http://getGlimpse.com</a></div><div style="margin:1.5em 0 0.5em;">Created by <strong>Anthony van der Hoorn</strong> (<a href="http://twitter.com/anthony_vdh" target="_blank">@anthony_vdh</a>) and <strong>Nik Molnar</strong> (<a href="http://twitter.com/nikmd23" target="_blank">@nikmd23</a>) &nbsp; - &copy; getglimpse.com 2011</div><div>Have a <em>feature</em> request? <a href="http://getglimpse.uservoice.com" target="_blank">Submit the idea</a>. &nbsp; &nbsp;Found an <em>error</em>? <a href="https://github.com/glimpse/glimpse/issues" target="_blank">Help us improve</a>. &nbsp; &nbsp;Have a <em>question</em>? <a href="http://twitter.com/#search?q=%23glimpse" target="_blank">Tweet us using #glimpse</a>. &nbsp; &nbsp;Want to <em>help</em>? <a href="groups.google.com/group/getglimpse-dev" target="_blank">Join our developer mailing list</a>.</div>');
        },
        setupInfo = function(args) { 
            args.newData.data.info = { data: 'Loading...', suppressTab: true, isPermanent: true };
            args.newData.metadata.plugins.info = {};
        };
    
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners); 
    pubsub.subscribe('action.panel.rendered.info', buildInfo);  
    pubsub.subscribe('action.data.initial.changed', setupInfo); 
    pubsub.subscribe('action.panel.showing', buildHelp); 
})(jQueryGlimpse, glimpse.pubsub, glimpse.elements, glimpse.data, glimpse.util);
// glimpse.shell.resize.js
(function($, pubsub, elements, settings, util) {
    var wireListeners = function() {
            $.draggable({
                handelScope: elements.holder().find('.glimpse-resizer'),
                opacityScope: elements.holder(),
                resizeScope: elements.holder(),
                dragged: shellResized
            }); 
        },
        shellResized = function (args, height) {
            var panelHeight = height - 52;
            
            settings.local('height', height);
            settings.local('panelHeight', panelHeight);

            elements.pageSpacer().height(height);
            elements.panels().height(panelHeight);
            
            pubsub.publish('trigger.shell.resize', { height: height, panelHeight: panelHeight });
        },
        panelRendered = function (args) {
            var height = settings.local('height');
            
            elements.panel(args.key).height(height - 52);
        };
    
    pubsub.subscribe('action.panel.rendered', panelRendered);
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
})(jQueryGlimpse, glimpse.pubsub, glimpse.elements, glimpse.settings, glimpse.util);
// glimpse.shell.popup.js
(function($, pubsub, settings, data, elements, util) {
    var wireListeners = function() {
            elements.holder().find('.glimpse-popout').click(function() { pubsub.publish('trigger.shell.popup'); });
        },
        dataLoaded = function(args) {
            var uri = args.metadata.resources.glimpse_popup;
            if (uri) {
                elements.barHolder().find('.glimpse-popout').removeClass('glimpse-hidden');
                tryOpenPopup();
            } 

            if (settings.local('popupOn')) { 
                $(window).unload(windowUnloading);
            }
        },
        registerSuppressedOpen = function() {
            registerSuppressedOpen = true;
        },
        generatePopupAddress = function() {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.glimpse_popup, { 'requestId': data.currentData().requestId, 'hash': currentMetadata.hash });
        },
        isPopup = function() {
            return data.currentMetadata().resources.glimpse_popup ? window.location.href.indexOf('n=glimpse_popup') > -1 : false;
        },
        openPopup = function() { //WHEN USE CLICKS OPEN BUTTON 
            settings.local('popupOn', true);   //Indicates popup should be used
            settings.local('popupKeep', true); //This second item is used to detect difference between user closing the page and a redirect 
             
            window.open(generatePopupAddress(), 'GlimpsePopup', 'width=1100,height=600,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');

            pubsub.publish('trigger.shell.hide');
        },
        tryOpenPopup = function() { //WHEN PARENT WINDOW IS LOADING AND DETECTS THAT IT HAS BEEN SUPPRESSED, IF POPUP ON, REDIRECT THE POPUP OR FORCE THE WINDOW OPEN  
            if (settings.local('popupOn')) {
                if (!isPopup()) {
                    pubsub.publish('trigger.shell.popup');
                }
                else {
                    pubsub.publish('trigger.shell.open', { isInitial: true, force: true, fullScreen: true });
                     
                    settings.local('popupKeep', false);
                }
            }
        },
        windowUnloading = function() { //WHEN USER CLOSES POPUP WE WANT TO TURN EVERYTHING OFF 
            if (isPopup() && !settings.local('popupKeep'))
                settings.local('popupOn', false);
        },
        terminate = function() { //WHEN USER CLOSES OR OPENS SHELL IN THE MAIN WINDOW LETS KILL POPUP
            if (!isPopup()) {
                settings.local('popupOn', false);
                settings.local('popupKeep', false);
            }
        };

    pubsub.subscribe('trigger.shell.popup', openPopup);
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('action.shell.closed', terminate);
    pubsub.subscribe('action.shell.opening', terminate); 
    pubsub.subscribe('action.data.initial.changed', dataLoaded);
    pubsub.subscribe('trigger.shell.suppressed.open', registerSuppressedOpen);
})(jQueryGlimpse, glimpse.pubsub, glimpse.settings, glimpse.data, glimpse.elements, glimpse.util);
// glimpse.shell.title.js
(function($, pubsub, data, elements) {
    var renderLayout = function() {
            var requestData = data.currentData(),
                name = requestData.clientId ? '"' + requestData.clientId + '"' : '&nbsp;';

            elements.titleHolder().find('.glimpse-snapshot-name').html(name);
            elements.titleHolder().find('.glimpse-uri').text(requestData.uri);
        };
    
    pubsub.subscribe('action.shell.rendering', renderLayout);
    pubsub.subscribe('trigger.title.render', renderLayout);
})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements);
// glimpse.shell.correlation.js
(function($, pubsub, data, elements) {
    var wireListeners = function() {
            elements.titleHolder().find('.glimpse-correlation .glimpse-link').live('click', function() { data.retrieve($(this).attr('data-requestId'), 'correlation'); });
            elements.titleHolder().find('.glimpse-correlation').dropdown();
        },
        buildHtml = function(request, requestMetadata) {
            var correlation = requestMetadata.correlation,
                html = '';

            if (correlation) {
                var currentUri = request.uri,
                    currentLeg = '';

                html = '<div>' + correlation.title + '</div>';
                for (var i = 0; i < correlation.legs.length; i++) {
                    var leg = correlation.legs[i];
                    if (leg.uri == currentUri) {
                        currentLeg = leg.uri;
                        html += currentLeg + ' - <strong>' + leg.method + '</strong> (Current)<br />';
                    } else
                        html += '<span class="glimpse-link" title="Go to ' + leg.uri + '" href="#" data-requestId="' + leg.requestId + '" data-url="' + leg.uri + '">' + leg.uri + '</span> - <strong>' + leg.method + '</strong><br />';
                }
                html = '<span class="glimpse-drop">' + currentLeg + '<span class="glimpse-drop-arrow-holder"><span class="glimpse-drop-arrow"></span></span></span><div class="glimpse-drop-over">' + html + '<div class="loading"><span class="icon"></span><span>Loaded...</span></div></div>';
            }
            return html;
        },
        renderLayout = function() {
            var html = buildHtml(data.currentData(), data.currentMetadata());
            if (html) {
                elements.titleHolder().find('.glimpse-uri').hide();
                elements.titleHolder().find('.glimpse-correlation').html(html);
            }
        },
        startingRetrieve = function() {
            elements.titleHolder().find('.glimpse-correlation .loading').fadeIn();
        },
        completedRetrieve = function() {
            elements.titleHolder().find('.glimpse-correlation .loading').fadeOut();
        },
        succeededRetrieve = function(options) {
            options.newData.metadata.correlation = options.oldData.metadata.correlation;
        };

    pubsub.subscribe('trigger.title.render', renderLayout);
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('action.data.retrieve.starting.correlation', startingRetrieve);
    pubsub.subscribe('action.data.retrieve.completed.correlation', completedRetrieve);
    pubsub.subscribe('action.data.retrieve.succeeded.correlation', succeededRetrieve);
})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements);
// glimpse.shell.environment.js
(function($, pubsub, data, elements, util) {
    var wireListeners = function() {
            elements.titleHolder().find('.glimpse-enviro').dropdown();
        },
        buildHtml = function(requestMetadata) {
            var uris = requestMetadata.environmentUrls, 
                html = ''; 

            if (uris) {
                var currentName = 'Enviro', 
                    currentDomain = util.getDomain(unescape(window.location.href));

                for (var targetName in uris) {
                    if (util.getDomain(uris[targetName]) === currentDomain) {
                        currentName = targetName;
                        html += ' - ' + targetName + ' (Current)<br />';
                    }
                    else
                        html += ' - <a title="Go to - ' + uris[targetName] + '" href="' + uris[targetName] + '">' + targetName + '</a><br />';
                }
                html = '<span class="glimpse-drop">' + currentName + '<span class="glimpse-drop-arrow-holder"><span class="glimpse-drop-arrow"></span></span></span><div class="glimpse-drop-over"><div>Switch Servers</div>' + html + '</div>';
            }
            return html;
        },
        renderLayout = function() {
            var html = buildHtml(data.currentMetadata());

            elements.titleHolder().find('.glimpse-enviro').html(html);
        };

    pubsub.subscribe('trigger.title.render', renderLayout);
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements, glimpse.util);
// glimpse.shell.path.js
(function($, pubsub, data, elements) {
    var wireListeners = function() {
            elements.titleHolder().find('.glimpse-snapshot-path .glimpse-link').live('click', function() { pubsub.publish('trigger.data.context.switch', { requestId: $(this).attr('data-requestId'), type: 'path' }); });
        }, 
        buildHtml = function(currentData) {
            var baseData = data.baseData(), 
                html = '';
            
            if (currentData.isAjax)
                html = ' &gt; Ajax';
            if ((currentData.isAjax && baseData.requestId != currentData.parentRequestId) || (!currentData.isAjax && baseData.requestId != currentData.requestId)) {
                if (html) 
                    html = ' &gt; <span class="glimpse-link" data-requestId="' + (currentData.isAjax ? currentData.parentRequestId : currentData.requestId) + '">History</span>' + html;
                else
                    html = ' &gt; History';    
            }
            if (html)
                html = ' (<span class="glimpse-link" data-requestId="' + baseData.requestId + '">Original</span>' + html + ')';

             return html; 
        }, 
        contextSwitch = function(args) { 
            var html =  buildHtml(args.newData);
            
            elements.titleHolder().find('.glimpse-snapshot-path').html(html);
        },
        selected = function(args) {
            if (args.type == 'path') 
                data.retrieve(args.requestId, 'path');
        };
     
    pubsub.subscribe('action.data.refresh.changed', contextSwitch); 
    pubsub.subscribe('trigger.data.context.switch', selected); 
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements);

// glimpse.shell.notification.js
(function($, pubsub, elements) {
    var toast = function(options) {
            var toast  = $('<div class="glimpse-notification glimpse-notification-' + options.type + '">' + options.message + '</div>').appendTo(elements.notificationHolder());
            setTimeout(function() {
                 toast.fadeOut(250, function() {
                      toast.remove();
                 });
            }, 5000);
        };

    pubsub.subscribe('trigger.notification.toast', toast);
})(jQueryGlimpse, glimpse.pubsub, glimpse.elements)

// glimpse.version.check.js
glimpse.versionCheck = (function($, pubsub, settings, elements, data, util) {
    var retrieveStamp = function() {
            if (!settings.local('stamp'))
                settings.local('stamp', (new Date()).getTime());
            return settings.local('stamp');
        },
        generateVersionCheckAddress = function() {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.glimpse_version_check, { stamp: retrieveStamp(), 'hash': currentMetadata.hash });
        },
        tryShow = function () {
            var hasNewerVersion = settings.local('hasNewerVersion'),
                versionCheckUri = settings.local('versionCheckUri') || '',
                currentHash = settings.local('hash');
            if (hasNewerVersion && versionCheckUri.indexOf('hash=' + currentHash) > -1)
                elements.holder().find('.glimpse-meta-update').show();
        },
        ready = function() {
            var nextChecked = settings.local('nextCheckedVersionTime'),
                now = new Date();

            tryShow();

            // Only check if we need to
            if (nextChecked) {
                var nextCheckedTicks = parseInt(nextChecked),
                    currentTimeTicks = now.getTime();
                if (nextCheckedTicks > currentTimeTicks)
                    return;
            }

            // Get the check uri and store checkUri for verification purposes
            var versionCheckUri = generateVersionCheckAddress();
            settings.local('versionCheckUri', versionCheckUri); 
            
            $.ajax({
                url: versionCheckUri,
                type: 'GET',
                dataType: 'jsonp',
                crossDomain: true,
                jsonpCallback: 'glimpse.versionCheck.result' 
            });

            settings.local('nextCheckedVersionTime', now.setDate(now.getDate() + 1));
        },
        result = function(data) {
            settings.local('hasNewerVersion', data.hasNewer);
            settings.local('versionViewUri', data.viewLink); 
            
            tryShow();
        };

    pubsub.subscribe('trigger.data.init', ready);

    return {
        result: result
    };
})(jQueryGlimpse, glimpse.pubsub, glimpse.settings, glimpse.elements, glimpse.data, glimpse.util);
// glimpse.version.shell.js
(function($, pubsub, elements, util, settings) {
    var wireListeners = function() {
            elements.holder().find('.glimpse-meta-update').click(function() { pubsub.publish('trigger.shell.version.info.show'); });
        elements.lightbox().find('.close').live('click', function() { pubsub.publish('trigger.shell.version.info.close'); });
        },  
        retrieveStamp = function () {
            if (!settings.local('stamp'))
                settings.local('stamp', (new Date()).getTime()); 
            return settings.local('stamp');
        },
        generateVersionDetailAddress = function () {
            return settings.local('versionViewUri') + '&stamp=' + retrieveStamp();
        },
        show = function() {
            var detailsUri = settings.local('versionViewUri');;
            if (detailsUri) { 
                elements.lightbox().find('.glimpse-lightbox-element').html('<div class="close">[close]</div><iframe src="' + generateVersionDetailAddress() + '"></iframe>');
                elements.lightbox().show();
            }
            else
                pubsub.publishAsync('trigger.notification.toast', { type: 'error', message: 'Version check isn\'t currently supported by your server implementation. Sorry :(' });
        },
        close = function() {
            elements.lightbox().find('.glimpse-lightbox-element').empty();
            elements.lightbox().hide();
        };
    
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('trigger.shell.version.info.show', show);
    pubsub.subscribe('trigger.shell.version.info.close', close);
})(jQueryGlimpse, glimpse.pubsub, glimpse.elements, glimpse.util, glimpse.settings);

// glimpse.paging.js
glimpse.paging = (function($, pubsub, util, data, elements) {
    var process = function(args) {
            var key = args.key,
                metadata = data.currentMetadata().plugins[key];
        
            if (metadata && (metadata = metadata.pagingInfo)) {
                var panelItem = elements.panel(key); 
                
                panelItem.find('.glimpse-pager').remove();

                var pageIndex = metadata.pageIndex,
                    pageIndexLast = Math.floor((metadata.totalNumberOfRecords - 1) / metadata.pageSize),
                    pagerContainer = $('<div class="glimpse-pager"></div>').appendTo(panelItem); 

                pubsub.publish('trigger.paging.controls.render', { key: key, pagerContainer: pagerContainer, pagerKey: metadata.pagerKey, pagerType: metadata.pagerType, pageIndex: pageIndex, pageIndexLast: pageIndexLast });
            }
        };
    
    pubsub.subscribe('trigger.tab.select', process);  
    pubsub.subscribe('trigger.tab.paging.refresh', process); 

    return {};
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.data, glimpse.elements); 
// glimpse.paging.engine.js
glimpse.paging.engine = (function(pubsub) {
    var providers = {},
        retrieve = function(name) {
            return providers[name];
        },
        register = function(name, engine) {
            providers[name] = engine;
        },
        render = function(args) {
            var pagerEngine = providers[args.pagerType]; 
            pagerEngine.renderControls(args.key, args.pagerContainer, args.pagerKey, args.pagerType, args.pageIndex, args.pageIndexLast);
        };
   
    pubsub.subscribe('trigger.paging.controls.render', render);  
    
    return {
        retrieve: retrieve,
        register: register
    };
})(glimpse.pubsub);
// glimpse.paging.engine.util.js
glimpse.paging.engine.util = (function($, pubsub, data, elements, util, renderEngine) {
    var generatePagingAddress = function(pagerKey, pageIndex) {
            return util.uriTemplate(data.currentMetadata().resources.glimpse_paging, { 'key': pagerKey, 'pageIndex': pageIndex });
        },
        requestStart = function(key) {
            var pager = elements.panel(key).find('.glimpse-pager');

            pager.html('<span class="glimpse-pager-message">Loading...</span>');
        },
        requestSuccess = function(key, pagerKey, pageIndex, method, result) {  
            var pagingInfo = data.currentMetadata().plugins[key].pagingInfo,
                content = renderEngine.build(result, data.currentMetadata().plugins[key].structure),
                scope = renderMethod[method](elements.panel(key), content);
            
            pagingInfo.pageIndex = pageIndex; 
            
            pubsub.publish('trigger.panel.render.style', { scope: scope });
            pubsub.publish('trigger.tab.paging.refresh', { key: key });
        }, 
        renderMethod = {
            insert: function(panelItem, content) {
                panelItem.find('> table').remove();
                
                return $(content).appendTo(panelItem); 
            },
            append: function (panelItem, content) {
                var table = panelItem.find('> table'),
                    nodes = $(content.substring(content.indexOf('>') + 1, content.lastIndexOf('<')))[1];

                table.find('> tbody:last-child > tr:last-child').addClass('glimpse-pager-separator');
                
                return $(nodes).appendTo(table); 
            }
        };

    return {   
        load: (function() {
            var isLoading = false;

            return function(key, pagerKey, pageIndex, method) {
                    if (!isLoading) {
                        isLoading = true; 
                
                        requestStart(key);
                
                        $.ajax({
                            url: generatePagingAddress(pagerKey, pageIndex),
                            type: 'GET', 
                            contentType: 'application/json', 
                            success: function(result) { 
                                requestSuccess(key, pagerKey, pageIndex, method, result);
                            },
                            complete: function () {
                                isLoading = false;
                            }
                        });
                    }
                };
        })()
    };
})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements, glimpse.util, glimpse.render.engine); 
// glimpse.paging.engine.continuous.js
(function($, util, engine, engineUtil) {
    var provider = {
            removeExistingResults: false,
            renderControls: function (key, pagerContainer, pagerKey, pagerType, pageIndex, pageIndexLast) {
                var pagerMessage = $('<span class="glimpse-pager-message">Showing ' + (pageIndex + 1) + ' page(s) of ' + (pageIndexLast + 1) + ' pages(s).</span>');
                pagerContainer.append(pagerMessage);

                if (pageIndex < pageIndexLast) {
                    var pagerNextPageLink = $('<span href="#" class="glimpse-pager-link">More</span>');
                    pagerNextPageLink.one('click', function() { engineUtil.load(key, pagerKey, pageIndex + 1, 'append'); });
                    pagerContainer.append(pagerNextPageLink);
                }
            }
        };
    
    engine.register('continuous', provider);
})(jQueryGlimpse, glimpse.util, glimpse.paging.engine, glimpse.paging.engine.util);
// glimpse.paging.engine.scrolling.js
(function($, pubsub, util, engine, engineUtil, elements, data) {
    var provider = {
            renderControls: function (key, pagerContainer, pagerKey, pagerType, pageIndex, pageIndexLast, suppressRecheck) {
                var panelItem = elements.panel(key),
                    clientHeight = panelItem[0].clientHeight;
                 
                if (clientHeight == 0 && !suppressRecheck) {
                    var that = this;
                    //TODO: BAD CODE - Problem is that the height isn't avaiable until the panel is visable, this code runs before that time
                    setTimeout(function() {
                        that.renderControls(key, pagerContainer, pagerKey, pagerType, pageIndex, pageIndexLast, true);
                    }, 300);
                    return;
                }

                var pagerMessage = $('<span class="glimpse-pager-message">Showing ' + (pageIndex + 1) + ' page(s) of ' + (pageIndexLast + 1) + ' pages(s).</span>');
                pagerContainer.append(pagerMessage);
                    
                if (pageIndex < pageIndexLast) { 
                    if (clientHeight >= panelItem.find(':last').position().top) 
                        engineUtil.load(key, pagerKey, pageIndex + 1, 'append');
                    else {
                        var scrollingCallback = function() {
                            if (panelItem[0].clientHeight >= panelItem.find(':last').position().top) {
                                engineUtil.load(key, pagerKey, pageIndex + 1, 'append');
                                panelItem.unbind('scroll');
                            }
                        };
                        panelItem.bind('scroll', scrollingCallback);
                    } 
                }
            }
        };
    
    engine.register('scrolling', provider);
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.paging.engine, glimpse.paging.engine.util, glimpse.elements, glimpse.data);
// glimpse.paging.engine.traditional.js
(function($, util, engine, engineUtil) {
    var provider = {
            renderControls: function (key, pagerContainer, pagerKey, pagerType, pageIndex, pageIndexLast) {
                var pagerFirstPageLink = $('<span href="#" class="glimpse-button glimpse-pager-link glimpse-pager-link-firstPage"></span>'),
                    pagerPreviousPageLink = $('<span href="#" class="glimpse-button glimpse-pager-link glimpse-pager-link-previousPage"></span>'),
                    pagerMessage = $('<span class="glimpse-pager-message">' + (pageIndex + 1) + ' / ' + (pageIndexLast + 1) + '</span>'),
                    pagerNextPageLink = $('<span href="#" class="glimpse-button glimpse-pager-link glimpse-pager-link-nextPage"></span>'),
                    pagerLastPageLink = $('<span href="#" class="glimpse-button glimpse-pager-link glimpse-pager-link-lastPage"></span>');

                pagerContainer.append(pagerFirstPageLink);
                pagerContainer.append(pagerPreviousPageLink); 
                pagerContainer.append(pagerMessage); 
                pagerContainer.append(pagerNextPageLink);
                pagerContainer.append(pagerLastPageLink);

                if (pageIndex > 0) {
                    pagerFirstPageLink.one('click', function() { engineUtil.load(key, pagerKey, 0, 'insert'); });
                    pagerPreviousPageLink.one('click', function() { engineUtil.load(key, pagerKey, pageIndex - 1, 'insert'); });
                } else {
                    pagerFirstPageLink.addClass('glimpse-pager-link-firstPage-disabled');
                    pagerPreviousPageLink.addClass('glimpse-pager-link-previousPage-disabled');
                }

                if (pageIndex < pageIndexLast) {
                    pagerNextPageLink.one('click', function() { engineUtil.load(key, pagerKey, pageIndex + 1, 'insert'); });
                    pagerLastPageLink.one('click', function() { engineUtil.load(key, pagerKey, pageIndexLast, 'insert'); });
                } else {
                    pagerNextPageLink.addClass('glimpse-pager-link-nextPage-disabled');
                    pagerLastPageLink.addClass('glimpse-pager-link-lastPage-disabled');
                }
            }
        };
    
    engine.register('traditional', provider);
})(jQueryGlimpse, glimpse.util, glimpse.paging.engine, glimpse.paging.engine.util);

// glimpse.tab.js
glimpse.tab = (function($, pubsub, data) {
    var register = function(args) {
            pubsub.publish('trigger.tab.register', args); 
        },
        registerCore = function(args) {
            //TODO: need to refactor this out as static plugins should not be stored in with the instance plugins    
            var currentData = data.currentData(),
                currentMetadata = data.currentMetadata();
            currentData.data[args.key] = args.payload;
            currentMetadata.plugins[args.key] = args.metadata;
            
            pubsub.publish('trigger.tab.insert', args); 
        };
    
    pubsub.subscribe('trigger.tab.register', registerCore); 

    return {
            register: register
        };
})(jQueryGlimpse, glimpse.pubsub, glimpse.data);

// glimpse.ajax.js
(function($, pubsub, util, elements, data, renderEngine) {
    var context = { resultCount : 0, notice: null, isActive: false, contextRequestId: null, isSelected: false },
        generateAjaxAddress = function() {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.glimpse_ajax, { 'parentRequestId': retrieveScopeId(), 'hash': currentMetadata.hash });
        },
        retrieveScopeId = function() { 
            var payload = data.currentData();
                
            return payload.isAjax ? payload.parentRequestId : payload.requestId;
        }, 
        wireListeners = function() {
            var panel = elements.panel('ajax');
            
            elements.optionsHolder().find('.glimpse-clear-ajax').live('click', function() { pubsub.publish('trigger.shell.panel.clear.ajax'); });
            panel.find('tbody a').live('click', function() { pubsub.publish('trigger.data.context.switch', { requestId: $(this).attr('data-requestId'), type: 'ajax' }); }); 
            panel.find('.glimpse-head-message a').live('click', function() { pubsub.publish('trigger.data.context.reset', { type: 'ajax' }); }); 
        }, 
        setup = function(args) {  
            args.newData.data.ajax = { name: 'Ajax', data: 'No requests currently detected...', isPermanent: true };
            args.newData.metadata.plugins.ajax = { documentationUri: 'http://getglimpse.com/Help/Ajax-Tab' };
        },
        activate = function() {
            var options = elements.optionsHolder().html('<div class="glimpse-clear"><a href="#" class="glimpse-clear-ajax">Clear</a></div><div class="glimpse-notice glimpse-disconnect"><div class="icon"></div><span>Disconnected...</span></div>');
            context.notice = util.connectionNotice(options.find('.glimpse-notice')); 
             
            context.isSelected = true;
            
            listenStart();
        }, 
        deactivate = function() {
            elements.optionsHolder().html('');  
            context.notice = null;

            listenStop();
             
            context.isSelected = false;
        }, 
        listenStart = function() {
            if (context.isSelected) { 
                context.isActive = true;
                fetch();
            }
        },
        listenStop = function() {
            if (context.isSelected) {
                context.isActive = false;
            }
        }, 
        contextSwitch = function(args) {
            var newPayload = args.newData,
                oldPayload = args.oldData,
                newId = newPayload.isAjax ? newPayload.parentRequestId : newPayload.requestId,
                oldId = oldPayload.isAjax ? oldPayload.parentRequestId : oldPayload.requestId;

            if (oldId != newId) {
                elements.panel('ajax').find('tbody').empty();
                context.resultCount = 0;
            }
        }, 
        fetch = function() { 
            if (!context.isActive) 
                return;

            //Poll for updated summary data
            context.notice.prePoll(); 
            $.ajax({
                url: generateAjaxAddress(),
                type: 'GET', 
                contentType: 'application/json',
                complete : function(jqXHR, textStatus) {
                    if (!context.isActive) 
                        return; 
                    
                    context.notice.complete(textStatus); 
                    setTimeout(fetch, 1000);
                },
                success: function(result) {
                    if (!context.isActive)
                        return; 
                    
                    layoutRender(result);
                }
            });
        }, 
        layoutRender = function(result) {
            if (context.resultCount == result.length)
                return;
            
            layoutBuildShell();
            layoutBuildContent(result);
        }, 
        layoutBuildShell = function() {
            var panel = elements.panel('ajax'),
                detailPanel = panel.find('table'); 
            
            if (detailPanel.length == 0) {
                var detailData = [['Request URL', 'Method', 'Duration', 'Date/Time', 'View']],
                    detailMetadata = { layout: [ [ { data : 0, key : true, width : '40%' }, { data : 1 }, { data : 2, width : '10%', className : 'mono', align : 'right' },  { data : 3, width : '20%' },  { data : 4, width : '100px' } ] ] };
                
                panel.html(renderEngine.build(detailData, detailMetadata)).find('table').append('<tbody class="glimpse-row-holder"></tbody>');
                panel.find('table').addClass('glimpse-ellipsis').find('thead').append('<tr class="glimpse-head-message" style="display:none"><td colspan="5"><a href="#">Reset context back to starting page</a></td></tr>');
            }
        },
        layoutBuildContent = function(result) {
            var panel = elements.panel('ajax'),
                detailBody = panel.find('tbody'),
                html = '';
            
            for (var x = context.resultCount; x < result.length; x++) {
                var item = result[x];
                html = '<tr data-requestId="' + item.requestId + '" class="glimpse-row"><td><div class="glimpse-ellipsis" title="' + item.uri + '">' + item.uri + '</div></td><td>' + item.method + '</td><td class="mono" style="text-align:right">' + item.duration + '<span class="glimpse-soft"> ms</span></td><td>' + item.dateTime + '</td><td><a href="#" class="glimpse-ajax-link" data-requestId="' + item.requestId + '">Inspect</a></td></tr>' + html;
            }
            detailBody.prepend(html);
            
            context.resultCount = result.length; 
            
            if (context.contextRequestId)
                selectStart({ requestId: context.contextRequestId });
        }, 
        layoutClear = function() {
            pubsub.publish('trigger.data.context.reset', { type: 'ajax' });
            elements.panel('ajax').html('<div class="glimpse-panel-message">No requests currently detected...</div>');
        }, 
        selectClear = function(args) {
            var panel = elements.panel('ajax'),
                row = panel.find('.selected'); 
            
            if (row.length > 0) {
                panel.find('.glimpse-head-message').hide();
                row.removeClass('selected');
            
                if (args.type == 'ajax')
                    data.retrieve(data.currentData().parentRequestId);
            }
        },
        selectStart = function(args) {
            var link = elements.panel('ajax').find('.glimpse-ajax-link[data-requestId="' + args.requestId + '"]');
            
            context.contextRequestId = args.requestId;
            
            if (link.length > 0) { 
                if (args.type == 'ajax') {
                    link.hide().parent().append('<div class="loading glimpse-ajax-loading" data-requestId="' + args.requestId + '"><div class="icon"></div>Loading...</div>');
            
                    data.retrieve(args.requestId, 'ajax');
                }
                else 
                    selectCore(args.requestId);
            }
            else 
                selectClear(args);
        },
        selectFinish = function(args) {
            var panel = elements.panel('ajax');
            
            panel.find('.glimpse-ajax-loading[data-requestId="' + args.requestId + '"]').fadeOut(100).delay(100).remove(); 
            panel.find('.glimpse-ajax-link[data-requestId="' + args.requestId + '"]').delay(100).fadeIn(); 
            
            selectCore(args.requestId);
        },
        selectCore = function(requestId) {
            var panel = elements.panel('ajax'),
                row = panel.find('tr[data-requestId="' + requestId + '"]');
            
            panel.find('.glimpse-head-message').show();
            panel.find('.selected').removeClass('selected');
            row.addClass('selected');
            
            context.contextRequestId = null;
        };
    
    var send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() { 
        this.setRequestHeader("Glimpse-Parent-RequestID", data.baseData().requestId);
        
        pubsub.publish('trigger.ajax.request.send');
        
        send.apply(this, arguments);
    };
    
    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('action.panel.hiding.ajax', deactivate); 
    pubsub.subscribe('action.panel.showing.ajax', activate); 
    pubsub.subscribe('action.data.fetched.ajax', selectFinish); 
    pubsub.subscribe('action.data.refresh.changed', contextSwitch); 
    pubsub.subscribe('action.data.initial.changed', setup);
    pubsub.subscribe('trigger.data.context.reset', selectClear);
    pubsub.subscribe('trigger.shell.panel.clear.ajax', layoutClear);
    pubsub.subscribe('trigger.data.context.switch', selectStart);
    pubsub.subscribe('action.shell.opening', listenStart);
    pubsub.subscribe('action.shell.closeing', listenStop); 
    pubsub.subscribe('action.shell.minimizing', listenStop); 
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.elements, glimpse.data, glimpse.render.engine);
// glimpse.history.js
(function($, pubsub, util, settings, elements, data, renderEngine) {
    var context = { resultCount : 0, clientName : '', requestId : '', currentData: null, notice: null, isActive: false, isSelected: false, contextRequestId: undefined }, 
        generateHistoryAddress = function() {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.glimpse_history, { 'hash': currentMetadata.hash });
        },
        wireListeners = function() {
            var panel = elements.panel('history');
            
            elements.holder().find('.glimpse-clear-history').live('click', function() { pubsub.publish('trigger.shell.panel.clear.history'); });            
            panel.find('.glimpse-col-main tbody a').live('click', function() { pubsub.publish('trigger.data.context.switch', { requestId: $(this).attr('data-requestId'), type: 'history' }); }); 
            panel.find('.glimpse-col-side tbody a').live('click', function() { selectSession($(this).attr('data-clientName')); }); 
            panel.find('.glimpse-col-main .glimpse-head-message a').live('click', function() { pubsub.publish('trigger.data.context.reset', { type: 'history' }); });
        },
        setup = function(args) { 
            args.newData.data.history = { name: 'History', data: 'No requests currently detected...', isPermanent: true };
            args.newData.metadata.plugins.history = { documentationUri: 'http://getglimpse.com/Help/History-Tab' };
        }, 
        activate = function() { 
            var options = elements.optionsHolder().html('<div class="glimpse-clear"><a href="#" class="glimpse-clear-history">Clear</a></div><div class="glimpse-notice glimpse-disconnect"><div class="icon"></div><span>Disconnected...</span></div>');
            context.notice = util.connectionNotice(options.find('.glimpse-notice')); 
            
            context.isSelected = true;
            
            listenStart();
        },
        deactivate = function() { 
            elements.optionsHolder().html(''); 
            context.notice = null;

            listenStop();
             
            context.isSelected = false;
        }, 
        listenStart = function() {
            if (context.isSelected) { 
                context.isActive = true;
                fetch();
            }
        },
        listenStop = function() {
            if (context.isSelected) {
                context.isActive = false;
            }
        }, 
        fetch = function() { 
            if (!context.isActive) 
                return; 

            //Poll for updated summary data
            context.notice.prePoll(); 
            $.ajax({
                url: generateHistoryAddress(), 
                type: 'GET',
                contentType: 'application/json',
                complete : function(jqXHR, textStatus) {
                    if (!context.isActive) 
                        return; 
                    
                    context.notice.complete(textStatus); 
                    setTimeout(fetch, 1000);
                },
                success: function(result) {
                    if (!context.isActive)
                        return; 
                    
                    layoutRender(result);
                }
            });
        },
        layoutRender = function(result) { 
            if ($.isEmptyObject(result))
                return;

            context.currentData = result;
            
            layoutBuildShell(); 
            layoutBuildContentMaster(result); 
            layoutBuildContentDetail(context.clientName, result[context.clientName]);
        },
        layoutBuildShell = function() {
            var panel = elements.panel('history'),
                masterPanel = panel.find('.glimpse-col-side');
            
            if (masterPanel.length == 0) {
                panel.html('<div class="glimpse-col-main"></div><div class="glimpse-col-side"></div>');
            
                masterPanel = panel.find('.glimpse-col-side');
                
                var detailPanel = panel.find('.glimpse-col-main'),
                    masterData = [ [ 'Client', 'Count', 'View' ] ],
                    detailData = [ [ 'Request URL', 'Method', 'Duration', 'Date/Time', 'Is Ajax', 'View' ] ],
                    detailMetadata = { layout: [ [ { data : 0, key : true, width : '30%' }, { data : 1 }, { data : 2, width : '10%', className : 'mono', align : 'right' }, { data : 3, width : '20%' }, { data : 4, width : '10%' }, { data : 5, width : '100px' } ] ] };
                
                detailPanel.html(renderEngine.build(detailData, detailMetadata)).find('table').append('<tbody class="glimpse-row-holder"></tbody>');
                detailPanel.find('table').addClass('glimpse-ellipsis').find('thead').append('<tr class="glimpse-head-message" style="display:none"><td colspan="6"><a href="#">Reset context back to starting page</a></td></tr>');
                
                masterPanel.html(renderEngine.build(masterData)); 
            }
        }, 
        layoutBuildContentDetail = function(clientName, clientData) {
            var panel = elements.panel('history'),
                detailBody = panel.find('.glimpse-col-main tbody'), 
                html = '';
            
            if (context.clientName != clientName) {
                context.resultCount = 0;
                detailBody.empty();
            }
            
            for (var x = context.resultCount; x < clientData.length; x++) {
                var item = clientData[x];
                html = '<tr class="glimpse-row" data-requestId="' + item.requestId + '"><td><div class="glimpse-ellipsis" title="' + item.uri + '">' + item.uri + '</div></td><td>' + item.method + '</td><td class="mono" style="text-align:right">' + item.duration + '<span class="glimpse-soft"> ms</span></td><td>' + item.dateTime + '</td><td>' + item.isAjax + '</td><td><a href="#" class="glimpse-history-link" data-requestId="' + item.requestId + '">Inspect</a></td></tr>' + html;
            }
            detailBody.prepend(html);
            
            context.resultCount = clientData.length;
            context.clientName = clientName;
            
            if (context.contextRequestId)
                selectStart({ requestId: context.contextRequestId, suppressClear: true });
        }, 
        layoutBuildContentMaster = function(result) {
            var selected = settings.local('historyClient'),
                firstFound = '',
                panel = elements.panel('history'),
                masterBody = panel.find('.glimpse-col-side tbody');
            
            for (var recordName in result) {
                var masterRow = masterBody.find('a[data-clientName="' + recordName + '"]').parents('tr:first'),
                    rowCount = masterBody.find('tr').length;

                if (masterRow.length == 0)
                    masterRow = $('<tr class="glimpse-row"><td>' + recordName + '</td><td class="glimpse-history-count">1</td><td><a href="#" class="glimpse-Client-link" data-clientName="' + recordName + '">Inspect</a></td></tr>').prependTo(masterBody);
                
                masterRow.find('.glimpse-history-count').text(result[recordName].length);
                
                if (rowCount == 0) 
                    firstFound = recordName; 
            }
            
            context.clientName = result[selected] ? selected : firstFound;
            selectSession(context.clientName);
        },
        layoutClear = function() {
            pubsub.publish('trigger.data.context.reset', { type: 'history' });
            elements.panel('history').html('<div class="glimpse-panel-message">No requests currently detected...</div>');
        },  
        selectClear = function(args) { 
            var panel = elements.panel('history'),
                detailPanel = panel.find('.glimpse-col-main'), 
                row = detailPanel.find('.selected'); 
            
            if (row.length > 0) {
                if (row.attr('data-requestId') == context.contextRequestId)
                    context.contextRequestId = undefined; 
                
                panel.find('.glimpse-head-message').hide();
                row.removeClass('selected');
            
                if (args.type == 'history')
                    data.reset();
            }
        },
        selectStart = function(args) { 
            var link = elements.panel('history').find('.glimpse-history-link[data-requestId="' + args.requestId + '"]');
            
            context.contextRequestId = args.requestId;
            
            if (link.length > 0) { 
                if (args.type == 'history') {     
                    link.hide().parent().append('<div class="loading glimpse-history-loading" data-requestId="' + args.requestId + '"><div class="icon"></div>Loading...</div>');
            
                    data.retrieve(args.requestId, 'history');
                }
                else 
                    selectCore(args.requestId);
            }
            else 
                selectClear(args);
        },
        selectFinish = function(args) {
            var panel = elements.panel('history');
            
            panel.find('.glimpse-history-loading[data-requestId="' + args.requestId + '"]').fadeOut(100).delay(100).remove(); 
            panel.find('.glimpse-history-link[data-requestId="' + args.requestId + '"]').delay(100).fadeIn(); 
            
            selectCore(args.requestId);
        },
        selectCore = function(requestId) {
            var panel = elements.panel('history'),
                detailPanel = panel.find('.glimpse-col-main'), 
                row = detailPanel.find('tr[data-requestId="' + requestId + '"]');
            
            detailPanel.find('.glimpse-head-message').show();
            detailPanel.find('.selected').removeClass('selected');
            row.addClass('selected');
        }, 
        selectSession = function(clientName) {
            var panel = elements.panel('history'),
                masterPanel = panel.find('.glimpse-col-side'),
                item = masterPanel.find('a[data-clientName="' + clientName + '"]'), 
                clientData = context.currentData[clientName];
            
            settings.local('historyClient', clientName),

            masterPanel.find('.selected').removeClass('selected'); 
            item.parents('tr:first').addClass('selected');
            
            layoutBuildContentDetail(clientName, clientData);
        };

    pubsub.subscribe('trigger.shell.subscriptions', wireListeners);
    pubsub.subscribe('action.panel.hiding.history', deactivate); 
    pubsub.subscribe('action.panel.showing.history', activate); 
    pubsub.subscribe('action.data.retrieve.succeeded.history', selectFinish); 
    pubsub.subscribe('action.data.initial.changed', setup); 
    pubsub.subscribe('trigger.data.context.reset', selectClear);
    pubsub.subscribe('trigger.shell.panel.clear.history', layoutClear);
    pubsub.subscribe('trigger.data.context.switch', selectStart);
    pubsub.subscribe('action.shell.opening', listenStart);
    pubsub.subscribe('action.shell.closeing', listenStop); 
    pubsub.subscribe('action.shell.minimizing', listenStop); 
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.settings, glimpse.elements, glimpse.data, glimpse.render.engine);
// glimpse.timeline.js
(function($, pubsub, settings, util, renderEngine) { 
    var timeline = {};
    
    // Elements
    timeline.elements = (function() { 
        var elements = {},
            find = function() {
                //Main elements
                elements.scope = timeline.scope;
                elements.contentRow = elements.scope.find('.glimpse-tl-row-content');
                elements.summaryRow = elements.scope.find('.glimpse-tl-row-summary');
                elements.resizer = elements.contentRow.find('.glimpse-tl-resizer');

                //Event elements
                elements.contentBandScroller = elements.contentRow.find('.glimpse-tl-content-scroll');
                elements.contentBandHolder = elements.contentRow.find('.glimpse-tl-band-group');
                elements.contentEventHolder = elements.contentRow.find('.glimpse-tl-event-group');
                elements.contentDescHolder = elements.contentRow.find('.glimpse-tl-event-desc-group');
                elements.contentTableHolder = elements.contentRow.find('.glimpse-tl-table-holder');

                elements.summaryBandHolder = elements.summaryRow.find('.glimpse-tl-band-group');
                elements.summaryEventHolder = elements.summaryRow.find('.glimpse-tl-event-group'); 
                elements.summaryDescHolder = elements.summaryRow.find('.glimpse-tl-event-desc-group');

                //Event info element 
                elements.eventInfo = elements.scope.find('.glimpse-tl-event-info');
             
                //Zoom elements
                elements.zoomHolder = elements.summaryRow.find('.glimpse-tl-resizer-holder');
                elements.zoomLeftHandle = elements.summaryRow.find('.glimpse-tl-resizer:first-child');
                elements.zoomRightHandle = elements.summaryRow.find('.glimpse-tl-resizer:last-child');
                elements.zoomLeftPadding = elements.summaryRow.find('.glimpse-tl-padding:first-child');
                elements.zoomRightPadding = elements.summaryRow.find('.glimpse-tl-padding:last-child');

                //Divider elements
                elements.contentDividerHolder = elements.contentRow.find('.glimpse-tl-divider-line-holder');
                elements.summaryDividerHolder = elements.summaryRow.find('.glimpse-tl-divider-line-holder');
            };
            
        pubsub.subscribe('action.timeline.shell.loaded', find);
        
        return elements;
    })();
    
    // Render Shell
    (function() {
        var templates = {
                html: '<div class="glimpse-timeline"><div class="glimpse-tl-row-summary"><div class="glimpse-tl-content-scroll"><div class="glimpse-tl-event-desc-holder glimpse-tl-col-side"><div class="glimpse-tl-band glimpse-tl-band-title">Categories<span>[Switch view]</span></div><div class="glimpse-tl-event-desc-group"></div></div><div class="glimpse-tl-band-holder glimpse-tl-col-main"><div class="glimpse-tl-band glimpse-tl-band-title"></div><div class="glimpse-tl-band-group"></div></div><div class="glimpse-tl-event-holder glimpse-tl-col-main"><div class="glimpse-tl-band glimpse-tl-band-title"></div><div class="glimpse-tl-event-group"></div></div></div><div class="glimpse-tl-padding-holder glimpse-tl-col-main"><div class="glimpse-tl-padding glimpse-tl-padding-l glimpse-tl-summary-height"></div><div class="glimpse-tl-padding glimpse-tl-padding-r glimpse-tl-summary-height"></div></div><div class="glimpse-tl-divider-holder glimpse-tl-col-main"><div class="glimpse-tl-divider-title-bar"></div><div class="glimpse-tl-divider-line-holder"></div></div><div class="glimpse-tl-resizer-holder glimpse-tl-col-main"><div class="glimpse-tl-resizer glimpse-tl-resizer-l glimpse-tl-summary-height"><div class="glimpse-tl-resizer-bar"></div><div class="glimpse-tl-resizer-handle"></div></div><div class="glimpse-tl-resizer glimpse-tl-resizer-r glimpse-tl-summary-height"><div class="glimpse-tl-resizer-bar"></div><div class="glimpse-tl-resizer-handle"></div></div></div></div><div class="glimpse-tl-row-spacer"></div><div class="glimpse-tl-row-content"><div class="glimpse-tl-content-scroll"><div class="glimpse-tl-band-holder glimpse-tl-col-main"><div class="glimpse-tl-band glimpse-tl-band-title"></div><div class="glimpse-tl-band-group"></div></div><div class="glimpse-tl-divider-holder glimpse-tl-col-main"><div class="glimpse-tl-divider-zero-holder"><div class="glimpse-tl-divider"></div></div><div class="glimpse-tl-divider-line-holder"></div></div><div class="glimpse-tl-event-holder glimpse-tl-col-main"><div class="glimpse-tl-event-holder-inner"><div class="glimpse-tl-band glimpse-tl-band-title"></div><div class="glimpse-tl-event-group"></div></div></div><div class="glimpse-tl-event-desc-holder glimpse-tl-col-side"><div class="glimpse-tl-band glimpse-tl-band-title">Events</div><div class="glimpse-tl-event-desc-group"></div></div></div><div class="glimpse-tl-content-overlay"><div class="glimpse-tl-divider-holder glimpse-tl-col-main"><div class="glimpse-tl-divider-title-bar"></div><div class="glimpse-tl-divider-zero-holder"><div class="glimpse-tl-divider"><div>0</div></div></div><div class="glimpse-tl-divider-line-holder"></div></div></div><div class="glimpse-tl-resizer"><div></div></div><div class="glimpse-tl-content-scroll" style="display:none"><div class="glimpse-tl-table-holder"></div></div></div><div class="glimpse-tl-event-info"></div></div>'
            },
            setup = function() {
                pubsub.publish('action.timeline.template.processing', { templates: templates });
                pubsub.publish('action.timeline.shell.loading');
                        
                timeline.scope.html(templates.html); 
            
                pubsub.publish('action.timeline.shell.loaded');
                pubsub.publish('action.timeline.template.processed', { templates: templates });
            };

        pubsub.subscribe('trigger.timeline.shell.init', setup);
    })();
        
    // Render Dividers
    (function(elements) {
        var wireListeners = function() {  
                //Window resize event 
                $(window).resize(function() { render({}); }); 
            },
            render = function(args) {   
                //Setup the dividers
                renderDiverders(elements.summaryDividerHolder, { startTime : 0, endTime : timeline.data.duration}, args.force);
                renderDiverders(elements.contentDividerHolder, { startTime : timeline.data.startTime, endTime : timeline.data.endTime }, args.force);

                //Fix height
                adjustHeight();
            },
            renderDiverders = function(scope, range, force) { 
                var x;
                for (x = 0; x < scope.length; x += 1) {
                    var holder = $(scope[x]),
                        dividerCount = Math.round(holder.width() / 64),
                        currentDividerCount = holder.find('.glimpse-tl-divider').length;

                    if (!force && currentDividerCount === dividerCount) { return; }

                    var leftOffset = 100 / dividerCount,
                        timeSlice = (range.endTime - range.startTime) / dividerCount,
                        divider = holder.find('.glimpse-tl-divider:first-child');

                    for (var i = 0; i < dividerCount; i += 1) {
                        //Create divider if needed 
                        if (divider.length == 0) {
                            divider = $('<div class="glimpse-tl-divider"><div></div></div>');
                            holder.append(divider);
                        }
                        //Position divider
                        divider.css('left', (leftOffset * (i + 1)) + '%');
                        //Set label of divider
                        var time = i == (dividerCount - 1) ? range.endTime : (timeSlice * (i + 1)) + range.startTime; 
                        divider.find('div').text(util.timeConvert(parseFloat(time)));
                        //Move onto next
                        divider = divider.next();
                    }

                    while (divider.length == 1) {
                        var nextDivider = divider.next();
                        divider.remove();
                        divider = nextDivider;
                    }
                }
            },
            adjustHeight = function() { 
                //Content row divider height
                var innerHeight = Math.max(elements.contentBandScroller.height(), elements.contentBandScroller.find('.glimpse-tl-band-holder').height());   
                elements.contentBandScroller.find('.glimpse-tl-divider-holder').height(innerHeight); 

                //Summary row divider height
                elements.summaryRow.find('.glimpse-tl-summary-height').height(elements.summaryRow.height());
            };
            
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners); 
        pubsub.subscribe('trigger.timeline.divider.render', render);
        pubsub.subscribe('trigger.timeline.filtered', adjustHeight);  
    })(timeline.elements);

    // Render Events
    (function(elements) { 
        var wireListeners = function() {
                elements.summaryDescHolder
                    .delegate('.glimpse-tl-band', 'mouseenter', function() {
                         if ($(this).has('input:checked').length > 0) { $(this).find('input').stop(true, true).clearQueue().fadeIn(); }
                    })
                    .delegate('.glimpse-tl-band', 'mouseleave', function() {
                         if ($(this).has('input:checked').length > 0) { $(this).find('input').stop(true, true).clearQueue().fadeOut(); }
                    })
                    .delegate('input', 'click', function() {  categoryEvents($(this)); });
                //elements.summaryDescHolder.find('input').click(function() { /*filter.category();*/ pubsub.publish('trigger.timeline.search.category'); });
            },
            render = function() {
                pubsub.publish('action.timeline.event.rendering');

                processCategories();
                processEvents();
                processEventSummary();
                processTableData(); 
                
                //view.start();
                pubsub.publish('action.timeline.event.rendered');
            },
            processTableData = function() {
                var dataResult = [ [ 'Title', 'Description', 'Category', 'Timing', 'Start Point', 'Duration', 'w/out Children' ] ],
                    metadata = { layout: [ [ { data : '{{0}} |({{1}})|' }, { data : 2, width : '18%' }, { data : 3, width : '9%' }, { data : 4, align : 'right', pre : 'T+ ', post : ' ms', className : 'mono', width : '100px' }, { data : 5, align : 'right', post : ' ms', className : 'mono', width : '100px' }, { data : 6, align : 'right', post : ' ms', className : 'mono', width : '100px' } ] ] };
                    
                //Massage the data 
                for (var i = 0; i < timeline.data.events.length; i++) {
                    var event = timeline.data.events[i],
                        data = [ event.title, event.subText, event.category, '', event.startPoint, event.duration, event.childlessDuration ];
                    dataResult.push(data);
                } 

                //Insert it into the document
                var result = renderEngine.build(dataResult, metadata); 
                elements.contentTableHolder.append(result);

                //Update the output 
                elements.contentTableHolder.find('tbody tr').each(function(i) {
                    var row = $(this),
                        event = timeline.data.events[i],  
                        category = timeline.data.category[event.category];
                             
                    row.find('td:first-child').prepend($('<div class="glimpse-tl-event"></div>').css({ 'backgroundColor' : category.eventColor, marginLeft : (15 * event.nesting) + 'px' }));
                    row.find('td:nth-child(3)').css('position', 'relative').prepend($('<div class="glimpse-tl-event"></div>').css({ 'backgroundColor' : category.eventColor, 'margin-left' : event.startPersent + '%', width : event.widthPersent + '%' })); 
                }); 
            },
            processCategories = function() {
                for (var categoryName in timeline.data.category) {
                    var category = timeline.data.category[categoryName];

                    elements.summaryDescHolder.append('<div class="glimpse-tl-band glimpse-tl-category-selected"><input type="checkbox" value="' + categoryName +'" checked="checked" /><div class="glimpse-tl-event" style="background-color:' + category.eventColor + ';"></div>' + categoryName +'</div>'); 
                    elements.summaryBandHolder.append('<div class="glimpse-tl-band"></div>');
                    category.holder = $('<div class="glimpse-tl-band"></div>').appendTo(elements.summaryEventHolder); 
                    category.events = {};
                }
            },
            processEvents = function() { 
                var eventStack = [], lastEvent = { startPoint : 0, duration : 0, childlessDuration : 0, endPoint : 0 };
                for (var i = 0; i < timeline.data.events.length; i += 1) {
                    var event = timeline.data.events[i],
                        topEvent = eventStack.length > 0 ? eventStack[eventStack.length - 1] : null,
                        category = timeline.data.category[event.category],
                        left = (event.startPoint / timeline.data.duration) * 100,
                        rLeft = Math.round(left),
                        actualWidth = (event.duration / timeline.data.duration) * 100,
                        width = actualWidth == 0 ? 0 : actualWidth,
                        rWidth = Math.round(width),
                        widthStyle = (width > 0 ? 'width:' + width + '%' : ''),
                        maxStyle = (width <= 0 ? 'max-width:6px;' : ''),
                        subTextPre = (event.subText ? '(' + event.subText + ')' : ''),
                        subText = (subTextPre ? '<span class="glimpse-tl-event-desc-sub">' + subTextPre + '</span>' : ''),
                        stackParsed = false;

                    event.endPoint = parseFloat((event.startPoint + event.duration).toFixed(2));

                    //Derive event nesting  
                    while (!stackParsed) {
                        if (event.startPoint > lastEvent.startPoint && event.endPoint <= lastEvent.endPoint) { 
                            eventStack.push(lastEvent); 
                            stackParsed = true;
                        }
                        else if (topEvent != null && topEvent.endPoint < event.endPoint) {
                            eventStack.pop(); 
                            topEvent = eventStack.length > 0 ? eventStack[eventStack.length - 1] : null; 
                            stackParsed = false;
                        }
                        else
                            stackParsed = true;
                    }
                        
                    //Work out childless timings 
                    var temp = eventStack.length > 0 ? eventStack[eventStack.length - 1] : undefined; 
                    if (temp) {
                        temp.childlessDuration = parseFloat((temp.childlessDuration - event.duration).toFixed(2));
                    } 

                    //Save calc data
                    event.childlessDuration = event.duration;
                    event.startPersent = left;
                    event.endPersent = left + width;
                    event.widthPersent = width;
                    event.nesting = eventStack.length;

                    //Build up the event decoration
                    var eventDecoration = '';
                    if (width >= 0)
                        eventDecoration = '<div class="glimpse-tl-event-overlay-lh"><div class="glimpse-tl-event-overlay-li"></div><div class="glimpse-tl-event-overlay-lt">' + event.startPoint + ' ms</div></div>';
                    if (width > 0)
                        eventDecoration += '<div class="glimpse-tl-event-overlay-rh"><div class="glimpse-tl-event-overlay-ri"></div><div class="glimpse-tl-event-overlay-rt">' + event.endPoint + ' ms</div></div><div class="glimpse-tl-event-overlay-c">' + (width < 3.5 ? '...' : (event.duration + ' ms')) + '</div>';
                    eventDecoration = '<div class="glimpse-tl-event-overlay" style="left:' + left + '%;' + widthStyle + maxStyle + '" data-timelineItemIndex="' + i + '">' + eventDecoration + '</div>';

                    //Add main event HTML to DOM
                    elements.contentBandHolder.append('<div class="glimpse-tl-band"></div>');
                    elements.contentEventHolder.append('<div class="glimpse-tl-band"><div class="glimpse-tl-event" style="background-color:' + category.eventColor + ';left:' + left + '%;' + widthStyle + maxStyle + '"></div>'+ eventDecoration +'</div>');
                    elements.contentDescHolder.append('<div class="glimpse-tl-band" title="' + event.title + ' ' + subTextPre + '"><div class="glimpse-tl-event" style="background-color:' + category.eventColor + ';"></div>' + event.title + subText +'</div>');
                     
                    //Register events for summary  
                    deriveEventSummary(category, left, rLeft, width, rWidth);
                        
                    lastEvent = event;
                }
            },
            deriveEventSummary = function(category, left, rLeft, width, rWidth) {
                for (var j = rLeft; j <= (rLeft + rWidth); ++j) { 
                    var data = category.events[j], right = left + width;
                    if (data) {
                        data.left = Math.min(left, data.left);
                        data.right = Math.max(right, data.right);
                    }
                    else 
                        category.events[j] = { left : left, right : right } 
                } 
            },
            processEventSummary = function() { 
                var addCategoryEvent = function(category, start, finish) {
                    var width = (finish - start), 
                        widthStyle = (width > 0 ? 'width:' + width + '%' : ''),
                        maxStyle = (width <= 0 ? 'max-width:6px;' : ''); 
                    category.holder.append('<div class="glimpse-tl-event" style="background-color:' + category.eventColor + ';left:' + start + '%;' + widthStyle + maxStyle + '"></div>');
                };

                for (var categoryName in timeline.data.category) {
                    var category = timeline.data.category[categoryName], 
                        events = category.events, 
                        startData = null, 
                        next = 0; 

                    for (var currentPoint in events) { 
                        var current = parseInt(currentPoint);

                        if (!startData) {  //TODO: this needs to be cleanned up, duplicate logic here
                            startData = events[currentPoint]; 
                            next = current + 1; 
                        }
                        else if (current != next) {  
                            addCategoryEvent(category, startData.left, events[next - 1].right); 
                            startData = events[currentPoint]; 
                            next = current + 1; 
                        }
                        else 
                            next++; 
                    }
                    if (startData) { addCategoryEvent(category, startData.left, events[next - 1].right); } 
                }
            },
            colorRows = function(args) { 
                var filter = args.applyAll ? '' : ':visible';
                colorElement(elements.contentBandHolder.find('> div'), filter, 'glimpse-row-');
                colorElement(elements.contentDescHolder.find('> div'), filter, 'glimpse-row-alt-');
                colorElement(elements.summaryBandHolder.find('> div'), filter, 'glimpse-row-');
                colorElement(elements.summaryDescHolder.find('> div'), filter, 'glimpse-row-alt-');
                colorElement(elements.contentTableHolder.find('tbody'), filter, 'glimpse-row-'); 
            },
            colorElement = function(scope, filter, baseClass) {
                var odd = baseClass + 'odd',
                    even = baseClass + 'even';
                scope.removeClass(odd).removeClass(even);
                scope.filter(filter + ':even').addClass(odd);
                scope.filter(filter + ':odd').addClass(even);
            },
            categoryEvents = function(item) {
                //Handel how the UI will look
                var isChecked = item[0].checked, parent = item.parent();
                parent.animate({ 'opacity' : (isChecked ? 0.95 : 0.6) }, 200);
                elements.summaryEventHolder.find('.glimpse-tl-band').eq(parent.index()).animate({ 'opacity' : (isChecked ? 1 : 0.7) }, 200);

                //Trigger search
                //filter.category();
                pubsub.publish('trigger.timeline.search.category'); 
            };
                 
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners); 
        pubsub.subscribe('trigger.timeline.event.render', render);
        pubsub.subscribe('trigger.timeline.filtered', colorRows); 
        pubsub.subscribe('action.timeline.shell.switched', colorRows); 
    })(timeline.elements),  

    // Zoom
    (function(elements) {
        var positionLeft = function() {
                var persentLeft = (elements.zoomLeftHandle.position().left / elements.zoomHolder.width()) * 100, 
                    persentRight = (elements.zoomRightPadding.width() / elements.zoomHolder.width()) * 100; 
                 
                //Set left slider
                elements.zoomLeftHandle.css('left', persentLeft + '%'); 
                elements.zoomLeftPadding.css('width', persentLeft + '%');
                
                timeline.data.startTime = timeline.data.duration * (persentLeft / 100);

                //Force render
                //dividerBuilder.render(true);
                pubsub.publish('trigger.timeline.divider.render', { force: true });

                //Zoom in on main line items 
                zoomEvents(persentLeft, persentRight);
                 
                //Manage zero display
                toggleZeroLine(persentLeft == 0); 
                 
                //Hide events that aren't needed
                //filter.zoom(persentLeft, persentRight); 
                pubsub.publish('trigger.timeline.search.zoom', { persentLeft: persentLeft, persentRight: persentRight });
            },
            positionRight = function() {
                var persentRight = ((elements.zoomHolder.width() - 4 - elements.zoomRightHandle.position().left) / elements.zoomHolder.width()) * 100, 
                    persentLeft = (elements.zoomLeftPadding.width() / elements.zoomHolder.width()) * 100; 
                 
                //Set right slider
                elements.zoomRightHandle.css('right', persentRight + '%'); 
                elements.zoomRightPadding.css('width', persentRight + '%');

                timeline.data.endTime = timeline.data.duration - (timeline.data.duration * (persentRight / 100));
                
                //Force render
                //dividerBuilder.render(true);
                pubsub.publish('trigger.timeline.divider.render', { force: true });
                
                //Zoom in on main line items 
                zoomEvents(persentLeft, persentRight);
                    
                //Hide events that aren't needed
                //filter.zoom(persentLeft, persentRight);  
                pubsub.publish('trigger.timeline.search.zoom', { persentLeft: persentLeft, persentRight: persentRight });
            },
            zoomEvents = function(persentLeft, persentRight) {
                var offset = (100 / (100 - persentLeft - persentRight)) * -1, 
                    lOffset = offset * persentLeft, 
                    rOffset = offset * persentRight;

                elements.contentRow.find('.glimpse-tl-event-holder-inner').css({ left : lOffset + '%', right : rOffset + '%' });
            },
            toggleZeroLine = function(show) {
                elements.contentRow.find('.glimpse-tl-divider-zero-holder').toggle(show);  
                elements.contentRow.find('.glimpse-tl-divider-line-holder').css('left', (show ? '15' : '0') + 'px');
                elements.contentRow.find('.glimpse-tl-event-holder').css('marginLeft', (show ? '15' : '0') + 'px');
            }, 
            wireListeners = function() {
                jQueryGlimpse.draggable({
                    handelScope: elements.zoomLeftHandle,
                    opacityScope: elements.zoomLeftHandle,
                    resizeScope: elements.zoomLeftHandle,
                    valueStyle: 'left',
                    isUpDown: false,
                    offset: 1, 
                    min: 0,
                    max: function() { return (elements.zoomRightHandle.position().left - 20); },
                    dragging: function() { elements.zoomLeftHandle.css('left', (elements.zoomLeftHandle.position().left) + 'px'); },
                    dragged: function() { positionLeft(); }
                }); 
                jQueryGlimpse.draggable({
                    handelScope: elements.zoomRightHandle,
                    opacityScope: elements.zoomRightHandle,
                    resizeScope: elements.zoomRightHandle,
                    valueStyle: 'right',
                    isUpDown: false,
                    min: 0,
                    max: function () { return (elements.zoomHolder.width() - elements.zoomLeftHandle.position().left) - 20; },
                    dragging: function() { elements.zoomRightHandle.css('right', (elements.zoomHolder.width() - elements.zoomRightHandle.position().left) + 'px'); },
                    dragged: function() { positionRight(); }
                }); 
            };
                 
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners);  
    })(timeline.elements);
        
    // Filter
    (function(elements) {
        var criteria = { 
                persentLeft : 0, 
                persentRightFromLeft : 100, 
                hiddenCategories : null
            },
            search = function(c) {
                pubsub.publish('trigger.timeline.filtering', { criteria: c });

                //Go through each event doing executing search
                for (var i = 0; i < timeline.data.events.length; i += 1) {
                    var event = timeline.data.events[i],
                        show = !(c.persentLeft > event.endPersent 
                                || c.persentRightFromLeft < event.startPersent)
                                && (c.hiddenCategories == null || c.hiddenCategories[event.category] == true);

                    //Timeline elements
                    elements.contentBandHolder.find('.glimpse-tl-band').eq(i).toggle(show);
                    elements.contentEventHolder.find('.glimpse-tl-band').eq(i).toggle(show);
                    elements.contentDescHolder.find('.glimpse-tl-band').eq(i).toggle(show); 
                    //Table elements
                    elements.contentTableHolder.find('tbody').eq(i).toggle(show); 
                }
                
                pubsub.publish('trigger.timeline.filtered', { criteria: c });  
            },
            zoom = function(args) {
                //Pull out current search
                criteria.persentLeft = args.persentLeft;
                criteria.persentRightFromLeft = 100 - args.persentRight; 
                    
                //Execute search
                search(criteria);
            },
            category = function() {
                //Pull out current search
                var hiddenCategoriesObj = {}, hiddenCategories = elements.summaryDescHolder.find('input:checked').map(function() { return $(this).val(); }).get(); //TODO: This shouldn't do this
                for (var i = 0; i < hiddenCategories.length; i++)
                    hiddenCategoriesObj[hiddenCategories[i]] = true;
                criteria.hiddenCategories = hiddenCategoriesObj;
                    
                //Execute search
                search(criteria);
            };
        
        pubsub.subscribe('trigger.timeline.search.zoom', zoom);
        pubsub.subscribe('trigger.timeline.search.category', category); 
    })(timeline.elements);

    // Info
    (function(elements) {
        var wireListeners = function() {
                elements.scope
                    .delegate('.glimpse-tl-event-info', 'mouseenter', function() { elements.eventInfo.stop(true, true).clearQueue(); })
                    .delegate('.glimpse-tl-event-info', 'mouseleave', function() { hideBubble(); });
            
                elements.contentRow
                    .delegate('.glimpse-tl-event-overlay', 'mouseenter', function() { showBubble($(this)); })
                    .delegate('.glimpse-tl-event-overlay', 'mouseleave', function() { hideBubble($(this)); });
            
                elements.contentEventHolder
                    .delegate('.glimpse-tl-band', 'mouseenter', function() { showTip($(this)); })
                    .delegate('.glimpse-tl-band', 'mouseleave', function() { hideTip($(this)); });
            },
            showTip = function(item) {
                item.find('.glimpse-tl-event-overlay').stop(true, true).fadeIn(); 
            },
            hideTip = function(item) {
                item.find('.glimpse-tl-event-overlay').stop(true, true).fadeOut(); 
            },
            buildBubbleDetails = function(event, category) {
                var details = '', detailKey;
                for (detailKey in event.details) {
                    details += '<tr><th>' + detailKey + '</th><td>' + event.details[detailKey] + '</td></tr>';
                }
                return '<table><tr><th colspan="2"><div class="glimpse-tl-event-info-title"><div class="glimpse-tl-event" style="background-color:' + category.eventColor + ';"></div>' + event.title + ' - Details</div></th></tr><tr><th>Duration</th><td>' + event.duration + ' ms (at ' + event.startPoint + ' ms' + ( + event.duration > 1 ? (' to ' + event.endPoint + ' ms') : '' ) +')</td></tr>' + (event.duration != event.childlessDuration ? '<tr><th>w/out Children</th><td>' + event.childlessDuration + ' ms</td></tr>' : '') + (event.subText ? '<tr><th>Details</th><td>' + event.subText + '</td></tr>' : '' ) + details + '</table>';
            },
            updateBubble = function(item) {
                var eventOffset = item.offset(), 
                    containerOffset = elements.eventInfo.parent().offset(),
                    eventSize = { height : item.height(), width : item.width() },
                    event = timeline.data.events[item.attr('data-timelineItemIndex')],
                    category = timeline.data.category[event.category],
                    content = buildBubbleDetails(event, category);
                     
                eventOffset.top -= containerOffset.top;
                eventOffset.left -= containerOffset.left;

                elements.eventInfo.html(content);
                     
                var detailSize = { height : elements.eventInfo.height(), width : elements.eventInfo.width() }, 
                    newDetailLeft = Math.min(Math.max((eventOffset.left + ((eventSize.width - detailSize.width) / 2)) - 15, 5), $(document).width() - detailSize.width - 30),
                    newDetailTop = eventOffset.top - detailSize.height - 20; 
                         
                elements.eventInfo.css('left', newDetailLeft + 'px');
                elements.eventInfo.css('top', newDetailTop + 'px');   
            },
            showBubble = function(item) {  
                elements.eventInfo.stop(true, true).clearQueue().delay(500).queue(function() { updateBubble(item); elements.eventInfo.show(); }); 
            },
            hideBubble = function() { 
                elements.eventInfo.stop(true, true).clearQueue().delay(500).fadeOut(); 
            };
                 
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners); 
    })(timeline.elements);

    // Resize
    (function(elements) {
        var wireListeners = function() { 
                jQueryGlimpse.draggable({
                    handelScope: elements.resizer,
                    opacityScope: elements.resizer,
                    resizeScope: elements.resizer,
                    valueStyle: 'left',
                    isUpDown: false,
                    offset: 1, 
                    min: 50,
                    max: 300,
                    dragged: function(options, position) { columnResize(position); }
                });
            },
            columnResize = function(position) {
                elements.scope.find('.glimpse-tl-col-side').width(position + 'px');
                elements.scope.find('.glimpse-tl-col-main').css('left', position + 'px');
                    
                //dividerBuilder.render(false);
                pubsub.publish('trigger.timeline.divider.render', {});
            },
            panelResize = function(args) { 
                if (elements.scope) {
                    //Work out what height we can work with
                    var panelHeight = (args && args.panelHeight) || settings.local('panelHeight'),
                        contentHeight = panelHeight - (elements.summaryRow.height() + elements.scope.find('.glimpse-tl-row-spacer').height() + 2);  
                    elements.contentRow.height(contentHeight + 'px');
                    
                    //Render Divers 
                    pubsub.publish('trigger.timeline.divider.render', {});
                }
            };
        
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners); 
        pubsub.subscribe('trigger.shell.resize', panelResize); 
        pubsub.subscribe('trigger.shell.fullScreen.resize', panelResize); 
        pubsub.subscribe('action.panel.showed.glimpse_timeline', function() { setTimeout(panelResize, 1); }); 
    })(timeline.elements);

    // View
    (function(elements) {
        var wireListeners = function() { 
                elements.summaryRow.find('.glimpse-tl-band-title span').click(function() {
                    toggle(); 
                });
            },
            apply = function(showTimeline, isFirst) {
                if (showTimeline == null)
                    showTimeline = false;
                
                pubsub.publish('action.timeline.shell.switching', { applyAll: isFirst, showTimeline: showTimeline });

                elements.contentTableHolder.parent().toggle(showTimeline); 
                elements.contentRow.find('.glimpse-tl-content-scroll:first-child').toggle(!showTimeline);
                elements.contentRow.find('.glimpse-tl-resizer').toggle(!showTimeline); 
                elements.contentRow.find('.glimpse-tl-content-overlay').toggle(!showTimeline); 
                
                if (!showTimeline) {
                    //dividerBuilder.render();
                    pubsub.publish('trigger.timeline.divider.render', {});
                }
                
                //eventBuilder.colorRows(isFirst); 
                pubsub.publish('action.timeline.shell.switched', { applyAll: isFirst, showTimeline: showTimeline });
            },
            toggle = function() {
                var showTimeline = !(settings.local('timelineView'));

                apply(showTimeline);
                 
                //glimpse.timeline.data.timeView = showTimeline;
                //glimpse.pubsub.publish('state.persist');
                settings.local('timelineView', showTimeline);
            },
            start = function() {
                //apply(glimpse.timeline.data.timeView, true);
                apply(settings.local('timelineView'), true);
            };
             
        pubsub.subscribe('trigger.timeline.shell.subscriptions', wireListeners); 
        pubsub.subscribe('trigger.timeline.shell.toggle', toggle);
        pubsub.subscribe('action.timeline.event.rendered', start);
    })(timeline.elements);

    // Timeline
    (function() { 
        var init = function() { 
                //Set defaults
                timeline.data.startTime = 0;
                timeline.data.endTime = timeline.data.duration;
                
                pubsub.publish('trigger.timeline.shell.init');
                pubsub.publish('trigger.timeline.shell.subscriptions');
                pubsub.publish('trigger.timeline.event.render');
            },
            modify = function(options) {
                options.templates.css += '.glimpse-panel .glimpse-tl-resizer {position: absolute;width: 4px;height: 100%;cursor: col-resize;}.glimpse-panel .glimpse-tl-row-summary {position: relative;height: 100px;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-resizer-bar {background-color: #404040;width: 1px;height: 100%;margin-left: 2px;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-resizer-handle {background-color: #404040;width: 5px;height: 20px;top: 0;position: absolute;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;}.glimpse-panel .glimpse-tl-row-spacer {background: #cfcfcf;background: -moz-linear-gradient(top, #cfcfcf 0%, #dddddd 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cfcfcf), color-stop(100%,#dddddd));background: -webkit-linear-gradient(top, #cfcfcf 0%,#dddddd 100%);background: -o-linear-gradient(top, #cfcfcf 0%,#dddddd 100%);background: -ms-linear-gradient(top, #cfcfcf 0%,#dddddd 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#cfcfcf\', endColorstr=\'#dddddd\',GradientType=0 );background: linear-gradient(top, #cfcfcf 0%,#dddddd 100%);-webkit-box-shadow: inset 0px 1px 0px 0px #E2E2E2;-moz-box-shadow: inset 0px 1px 0px 0px #E2E2E2;box-shadow: inset 0px 1px 0px 0px #E2E2E2;border-top: 1px solid #7A7A7A;border-bottom: 1px solid #7A7A7A;height: 5px;}.glimpse-panel .glimpse-tl-col-side {position: absolute;width: 200px;height: 100%;left: 0px;}.glimpse-panel .glimpse-tl-col-main {position: absolute;left: 200px;right: 0px;top: 0px;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-col-side {border-right: 1px solid #404040;}.glimpse-panel .glimpse-tl-row-content {position: relative;height: 400px;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-resizer {left: 200px;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-resizer div {background-color: #404040;width: 1px;height: 100%;}.glimpse-panel .glimpse-tl-band {padding-top: 2px;padding-bottom: 2px;}.glimpse-panel .glimpse-tl-col-side .glimpse-tl-band {padding-top: 2px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-left: 5px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}.glimpse-panel .glimpse-tl-band {position: relative;height: 18px;padding: 0px;}.glimpse-panel .glimpse-tl-col-main .glimpse-tl-event {position: absolute;top: 4px;margin-left: -2px;}.glimpse-panel .glimpse-tl-band-title {height: 20px !important;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;font-weight: bold;padding-top: 4px;}.glimpse-panel .glimpse-tl-event {border-radius: 2px;width: 9px;height: 9px;display: inline-block;margin: 0 5px 0 2px;/*background: -moz-linear-gradient(top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 70%, rgba(0,0,0,0.5) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.7)), color-stop(40%,rgba(255,255,255,0)), color-stop(70%,rgba(255,255,255,0)), color-stop(100%,rgba(0,0,0,0.5)));background: -webkit-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 70%,rgba(0,0,0,0.5) 100%);background: -o-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 70%,rgba(0,0,0,0.5) 100%);background: -ms-linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 70%,rgba(0,0,0,0.5) 100%);background: linear-gradient(top, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 70%,rgba(0,0,0,0.5) 100%);*/}.glimpse-panel .glimpse-tl-col-main .glimpse-tl-event {width: 1%;min-width: 3px;}.glimpse-panel .glimpse-tl-event-info {position: absolute;top: 1px;padding: 0.75em;border: 1px solid rgba(0, 0, 0, 0.3);background-color: #FCF7BD;display: none;-webkit-border-radius: 15px;-moz-border-radius: 15px;border-radius: 15px;-webkit-box-shadow: 0px 0px 8px 0px #696969;-moz-box-shadow: 0px 0px 8px 0px #696969;box-shadow: 0px 0px 8px 0px #696969;}.glimpse-panel .glimpse-tl-event-info th, .glimpse-panel .glimpse-tl-event-info td {padding: 3px 7px;}.glimpse-panel .glimpse-tl-event-info th {font-weight: bold;text-align: right;}.glimpse-panel .glimpse-tl-event-info .glimpse-tl-event-info-title {text-align: left;border-bottom: 1px solid rgba(0, 0, 0, 0.3);padding-bottom: 6px;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-event-holder {margin-left: 3px;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-event-holder {margin-left: 15px;}.glimpse-panel .glimpse-tl-event-holder-inner {position: absolute;left: 0px;right: 0px;margin-left: 4px;}.glimpse-panel .glimpse-tl-event-desc-sub {color: #AAA;font-size: 0.9em;margin-left: 5px;}.glimpse-panel .glimpse-tl-event-overlay {display: none;position: absolute;height: 18px;width: 7px;}.glimpse-panel .glimpse-tl-event-overlay-lh {position: absolute;left: 0;width: 1px;}.glimpse-panel .glimpse-tl-event-overlay-li {position: absolute;right: -2px;font-size: 0.8em;top: 7px;background: url() no-repeat -31px -17px;width: 11px;height: 3px;}.glimpse-panel .glimpse-tl-event-overlay-lt {position: absolute;right: 15px;font-size: 0.8em;top: 2px;color: rgba(0, 0, 0, 0.75);white-space: nowrap;}.glimpse-panel .glimpse-tl-event-overlay-rh {position: absolute;right: 0;width: 1px;}.glimpse-panel .glimpse-tl-event-overlay-ri {position: absolute;left: -4px;font-size: 0.8em;top: 7px;background: url() no-repeat -44px -17px;width: 11px;height: 3px;}.glimpse-panel .glimpse-tl-event-overlay-rt {font-size: 0.8em;position: absolute;top: 2px;left: 11px;color: rgba(0, 0, 0, 0.75);white-space: nowrap;}.glimpse-panel .glimpse-tl-event-overlay-c {font-size: 0.9em;text-align: center;padding-top: 2px;color: white;font-weight: bold;}.glimpse-panel .glimpse-tl-content-scroll {overflow-y: scroll;overflow-x: hidden;width: 100%;position: absolute;height: 100%;}.glimpse-panel .glimpse-tl-padding-holder {right: 18px;}.glimpse-panel .glimpse-tl-padding {position: absolute;width: 0;top: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.3);}.glimpse-panel .glimpse-tl-padding-l {left: 0;border-left: 1px solid #555;}.glimpse-panel .glimpse-tl-padding-r {right: 0;border-right: 1px solid #555;}.glimpse-panel .glimpse-tl-divider-line-holder {position: absolute;height: 100%;top: 0;right: 0;}.glimpse-panel .glimpse-tl-divider {position: absolute;width: 1px;top: 0;bottom: 0;background-color: rgba(0, 0, 0, 0.1);}.glimpse-panel .glimpse-tl-divider div {position: absolute;top: 4px;right: 5px;font-size: 9px;color: #323232;white-space: nowrap;}.glimpse-panel .glimpse-tl-divider-title-bar {width: 100%;background-color: rgba(255, 255, 255, 0.8);border-bottom: 1px solid rgba(0, 0, 0, 0.3);height: 20px;}.glimpse-panel .glimpse-tl-divider-zero-holder {position: absolute;height: 100%;top: 0;right: 0;left: 0;}.glimpse-panel .glimpse-tl-divider-zero-holder .glimpse-tl-divider {left: 15px;}.glimpse-panel .glimpse-tl-content-scroll .glimpse-tl-divider div {display: none;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-divider-holder {right: 19px;height: 20px;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-content-scroll .glimpse-tl-divider-holder {right: -1px;margin-left: 1px;height: 100%;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-content-overlay .glimpse-tl-divider-holder {right: 16px;height: 20px;border-left: 1px solid #404040;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-divider-line-holder {left: 0;}.glimpse-panel .glimpse-tl-row-content .glimpse-tl-divider-line-holder {left: 15px;}.glimpse-panel .glimpse-tl-resizer-holder {right: 17px;}.glimpse-panel .glimpse-tl-resizer-l {left: 0px;margin-left: -2px;}.glimpse-panel .glimpse-tl-resizer-r {right: 0px;}.glimpse-panel .glimpse-tl-col-side {background-color: #F2F5F7;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-band-title {opacity: 0.9;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-event-desc-group .glimpse-tl-band {opacity: 0.95;}.glimpse-panel .glimpse-tl-row-summary .glimpse-tl-event-desc-group input {margin-right: 5px;float: right;display: none;}.glimpse-panel .glimpse-tl-band-title span {font-weight: normal;font-size: 0.8em;margin-left: 1em;cursor: pointer;}';
            },
            prerender = function(args) {
                args.pluginData._data = args.pluginData.data;
                args.pluginData.data = 'Loading data, please wait...';
            },
            postrender = function(args) { 
                args.pluginData.data = args.pluginData._data;
                args.pluginData._data = null;
                
                timeline.data = args.pluginData.data;
                timeline.scope = args.panel;
                
                pubsub.publishAsync('trigger.timeline.init');
            };
         
        pubsub.subscribe('action.template.processing', modify); 
        pubsub.subscribe('trigger.timeline.init', init); 
        pubsub.subscribe('action.panel.rendering.glimpse_timeline', prerender);
        pubsub.subscribe('action.panel.rendered.glimpse_timeline', postrender);
    })();
})(jQueryGlimpse, glimpse.pubsub, glimpse.settings, glimpse.util, glimpse.render.engine);
// glimpse.hud.js
(function($, pubsub, data, elements, util) {
    var modify = function(options) {
            options.templates.css += '.glimpse-open .glimpse-hud {padding: 0 5px 0 0;float: left; }.glimpse-open .glimpse-hud-section {float: left;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;border-left: 11px solid #71b1d1;height: 34px;position: relative;cursor: default;}.glimpse-open .glimpse-hud-title {position: absolute;line-height: 100%;font-size: 9px;top: 2px;font-family: "Segoe UI Semibold", "Segoe UI", "Helvetica Neue", Helvetica, Arial;color: white;text-transform: uppercase;-webkit-transform-origin: 10px 20px;-moz-transform-origin: 10px 20px;-ms-transform-origin: 10px 20px;-o-transform-origin: 10px 20px;-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);-ms-transform: rotate(270deg);-o-transform: rotate(270deg);cursor: pointer;font-weight: bold;}.glimpse-open .glimpse-hud-section-inner {-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;max-width: 999px;margin-top: -1px;}.glimpse-open .glimpse-hud-section-input {display: none;font-size: 12px;}.glimpse-open .glimpse-hud-section-input:checked ~ .glimpse-hud-section-inner {max-width: 0px;overflow: hidden;} .glimpse-open .glimpse-hud-detail {display: inline-block;padding: 0 10px;}.glimpse-open .glimpse-hud-section-inner .glimpse-hud-detail:first-child {padding-left: 15px;}.glimpse-open .glimpse-hud-section-inner .glimpse-hud-detail:last-child {padding-right: 20px;}.glimpse-open .glimpse-hud-data {-webkit-transition: color 0.3s ease;-moz-transition: color 0.3s ease;-o-transition: color 0.3s ease;transition: color 0.3s ease;}.glimpse-open .glimpse-hud-value-update {color: #71b1d1;}.glimpse-open .glimpse-hud-detail-right .glimpse-hud-header {text-align: right;} .glimpse-open .glimpse-hud-detail-extra-large, .glimpse-hud-detail-extra-large span {font-size: 2em;line-height: 100%;}.glimpse-open .glimpse-hud-detail-large, .glimpse-hud-detail-large span {font-size: 1.45em;line-height: 100%;}.glimpse-open .glimpse-hud-detail-normal, .glimpse-hud-detail-normal span, .glimpse-hud-detail-normal div {font-size: 1.2em;line-height: 100%;}.glimpse-open .glimpse-hud-detail-small, .glimpse-hud-detail-small span, .glimpse-hud-detail-small div {font-size: 1.1em;} .glimpse-open .glimpse-hud-value {font-size: 1em;line-height: 100%;margin-top: -3px;}@media screen\0 {.glimpse-open .glimpse-hud-value { margin-top: -4px; }.glimpse-open .glimpse-hud-detail-normal .glimpse-hud-header { margin-bottom: 2px; }} .glimpse-open .glimpse-hud-header {opacity: 0.6;font-size: 0.7em;line-height: 100%;}.glimpse-open .glimpse-hud-detail-extra-large .glimpse-hud-header {font-size: 0.5em;}.glimpse-open .glimpse-hud-detail-large .glimpse-hud-header {font-size: 0.6em;}.glimpse-open .glimpse-hud-prefix, .glimpse-open .glimpse-hud-postfix, .glimpse-open .glimpse-hud-spacer, .glimpse-open .glimpse-hud-plain {opacity: 0.4;font-size: 0.9em;}.glimpse-open .glimpse-hud-postfix {padding-left: 2px;}.glimpse-open .glimpse-hud-prefix {padding-right: 2px;}.glimpse-open .glimpse-hud-spacer {padding: 0 10px;}.glimpse-open .glimpse-hud-quite, .glimpse-open .glimpse-hud-quite * {opacity: 0.6;}.glimpse-open .glimpse-hud-error, .glimpse-open .glimpse-hud-error * {color: #FF8C80;}.glimpse-open .glimpse-data-trivial {display: none;}.glimpse-open .glimpse-hud-section-inner:hover ~ .glimpse-hud-popup, .glimpse-open .glimpse-hud-popup:hover {max-height: 999px;}.glimpse-open .glimpse-hud-popup {background-color: #3c454f;border-left: 11px solid #71b1d1;position: absolute;left: -11px;right: 0;z-index: 1;bottom: 0px;max-height: 0px;-webkit-transition: max-height 0.3s ease 0.2s;-moz-transition: max-height 0.3s ease 0.2s;-o-transition: max-height 0.3s ease 0.2s;transition: max-height 0.3s ease 0.2s;}.glimpse-open .glimpse-hud-popup-clear {clear: both;}.glimpse-open .glimpse-hud-popup-header {margin-bottom: 5px;}.glimpse-open .glimpse-hud-popup .glimpse-hud-detail-extra-large {margin-left: -2px;}.glimpse-open .glimpse-hud-popup-inner {padding: 10px 15px;} .glimpse-open .glimpse-hud-popup .glimpse-hud-detail {padding: 0;}.glimpse-open .glimpse-hud-bar {height: 12px;width:100%;margin: 5px 0 10px;}.glimpse-open .glimpse-hud-bar > div {position: relative;} .glimpse-open .glimpse-hud-bar-item {position: absolute;height: 12px;min-width: 1px;} .glimpse-open .glimpse-hud-summary {width: auto;} .glimpse-open .glimpse-hud-summary-left {float: left;} .glimpse-open .glimpse-hud-summary-right {float: right;} .glimpse-open .glimpse-hud-summary tr {vertical-align: bottom;}.glimpse-open .glimpse-hud-summary-space tr:first-child {height: 65px;}.glimpse-open .glimpse-hud-summary tr:last-child {height: 35px;}.glimpse-open .glimpse-hud-summary-space tr:last-child {height: 46px;}.glimpse-open .glimpse-hud-summary th {font-weight: normal;}.glimpse-open .glimpse-hud-summary td .glimpse-hud-detail {float: right;} .glimpse-open table.glimpse-hud-listing {max-width: 100%;width: 100%;} .glimpse-open .glimpse-hud-popup .glimpse-hud-listing {margin-top: 10px;} .glimpse-open .glimpse-hud-listing td {font-size: 1.025em;line-height: 100%;padding-top: 3px;} .glimpse-open .glimpse-hud-listing-row {padding: 2px 0;} .glimpse-open .glimpse-hud-listing-row > div {display: inline-block;} .glimpse-open .glimpse-hud-listing tr:first-child td {padding-top: 1px;}.glimpse-open .glimpse-hud-listing thead th {white-space: nowrap;opacity: 0.6;font-weight: normal;color: white;line-height: 100%;padding-bottom: 5px;} .glimpse-open .glimpse-hud-listing-overflow {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;} .glimpse-open td.glimpse-hud-listing-value, .glimpse-open th.glimpse-hud-listing-value {text-align: right; } .glimpse-open td.glimpse-hud-listing-value, .glimpse-open span.glimpse-hud-listing-value {font-family: Consolas, monospace, serif;opacity: 0.85;}.glimpse-open .glimpse-hud .glimpse-data-childless-duration, .glimpse-open .glimpse-hud .glimpse-data-duration, .glimpse-open .glimpse-hud .glimpse-data-content-type {width:90px;}.glimpse-open .glimpse-hud .glimpse-data-size {width:60px;}.glimpse-open .glimpse-hud .glimpse-data-content-method {width:40px;}.glimpse-open .glimpse-hud .glimpse-data-content-type, .glimpse-open .glimpse-hud .glimpse-data-content-time {text-align: right;}.glimpse-open .glimpse-hud .glimpse-data-childless-start-point {width:100px;}.glimpse-open .glimpse-hud .glimpse-data-request-parts {margin-top:15px;}.glimpse-open .glimpse-hud .glimpse-data-wire-part {width:35%;}.glimpse-open .glimpse-hud .glimpse-data-server-part {width:30%}.glimpse-open .glimpse-hud .glimpse-data-client-part {text-align:right;width:33%}.glimpse-open .glimpse-hud .glimpse-data-ajax-method {width: 30px;text-align: right;}.glimpse-open .glimpse-hud .glimpse-data-ajax-uri {max-width: 230px;padding: 0 20px;} .glimpse-open .glimpse-hud .glimpse-data-query-summary .glimpse-hud-listing-value {color: #e2875e;}.glimpse-open .glimpse-hud .glimpse-hud-section-ajax .glimpse-hud-listing-row {position: relative;top: -20px;opacity: 0;-webkit-transition: all 0.6s ease;-moz-transition: all 0.6s ease;-o-transition: all 0.6s ease;transition: all 0.6s ease;}.glimpse-open .glimpse-hud .glimpse-hud-section-ajax .glimpse-hud-listing-row.added {top: 0px;opacity: 1;}.glimpse-open .glimpse-hud .glimpse-data-ajax-detail tbody tr:first-child td {padding-top: 10px; }.glimpse-open .glimpse-hud-controls {text-align: right;font-size: 1.2em;margin-top: 7px;}.glimpse-open .glimpse-hud-controls span {font-weight: bold;color: #71b1d1;cursor: pointer;}';
        },
        loaded = function(args) {
            var html = '',
                details = args.newData.hud,
                opened = state.current();

            html += display.http.render(details, opened[0]);
            if (details.mvc)
                html += display.host.render(details, opened[1]);
            html += display.ajax.render(details, opened[2]);

            elements.opener().prepend('<div class="glimpse-hud">' + html + '</div>');
            state.setup();

            display.host.postRender();
            display.ajax.postRender();
        }, 
        state = (function() {
            return { 
                setup: function () {
                   var inputs = elements.opener().find('.glimpse-hud-section-input').change(function() {
                       var state = [];
                       inputs.each(function() { state.push(this.checked); });
                       util.localStorage('glimpseHudDisplay', state);
                   });
                },
                current: function () {
                    return util.localStorage('glimpseHudDisplay') || [];
                }
            };
        })(),
        display = function() {
            var rendering = (function() {
                    var sizes = [ 'extra-large', 'large', 'normal', 'small' ],
                        position = [ 'top', 'bottom', 'left', 'right' ],
                        align = [ 'left', 'right' ],
                        shouldUse = function(isVisible, details) {
                            if (isVisible !== undefined && isVisible) {
                                var isFunction = $.isFunction(isVisible);
                                return (isFunction && isVisible(details)) || (!isFunction && isVisible);
                            }
                            return true;
                        }, 
                        popup = function(structure, details) {
                            return '<div class="glimpse-hud-popup" style="border-color:' + structure.color + ';"><div class="glimpse-hud-title">' + structure.title + '</div><div class="glimpse-hud-popup-inner">' + structure.popup.render(details) + '</div></div>';
                        },
                        section = function(structure, details, opened) {
                            var html = '<div class="glimpse-hud-section glimpse-hud-section-' + structure.id + '" style="border-color:' + structure.color + '">';
                            
                            html += '<label class="glimpse-hud-title" for="glimpse-hud-section-input-' + structure.id + '">' + structure.title + '</label><input type="checkbox" class="glimpse-hud-section-input" id="glimpse-hud-section-input-' + structure.id + '"' + (opened ? ' checked="checked"' : '') + ' />';
                            html += '<div class="glimpse-hud-section-inner">';  
                            for (var key in structure.layout.mini) {
                                html += item(structure.layout.mini[key], details);
                            }
                            html += '</div>';
                            
                            if (!structure.popup.suppress) { html += popup(structure, details); }
                            
                            return html + '</div>';
                        },
                        item = function(item, details) {
                            var html = '';
                            if (shouldUse(item.visible, details)) {
                                var title = '<div class="glimpse-hud-header">' + item.title + '</div>',
                                    postfix = item.postfix ? '<span class="glimpse-hud-postfix">' + item.postfix + '</span>' : '',
                                    value = item.getLayoutData ? item.getLayoutData(details) : '<span class="glimpse-hud-data">' + item.getData(details) + '</span>' + postfix,
                                    id = item.id ? ' ' + item.id : '';
                                
                                html += item.getLayout ? item.getLayout(details) : '<div class="glimpse-hud-detail glimpse-hud-detail-' + sizes[item.size] + ' glimpse-hud-detail-' + position[item.position] + ' glimpse-hud-detail-' + align[item.align] + id + '" title="' + item.description + '">' + (!item.position ? title : '') + '<div class="glimpse-hud-value">' + value + '</div>' + (item.position ? title : '') + '</div>';
                            }

                            return html;
                        };
                
                    return {
                        section: section,
                        item: item,
                        popup: popup
                    };
                })(),
                process = (function() {
                    var item = function(layout, defaults) {
                        for (var key in layout) {
                            layout[key] = $.extend(true, {}, defaults[key], layout[key]);
                        }
                    };
                
                    return {
                        init: function(payload) {
                            item(payload.layout.mini, payload.defaults);
                            item(payload.layout.popup, payload.defaults);
                        }
                    };
                })();

            return {
                http: function() {
                    var timingsRaw = (window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}).timing,
                        structure = {
                            title: 'HTTP',
                            id: 'http', 
                            color: '#e2875e',
                            popup: {
                                render: function(details) {
                                    var requestDetails = details.request.data,
                                        html = '<div class="glimpse-hud-popup-header">Browser Request</div>';
                                    html += '<div><div class="glimpse-hud-summary-left">' + rendering.item(structure.layout.popup.request, details) + '</div>';
                                    html += '<table class="glimpse-hud-summary glimpse-hud-summary-right"><tr><td width="1" class="glimpse-hud-listing-overflow">' + rendering.item(structure.layout.popup.host, details) + '</td></tr><tr><td class="glimpse-hud-listing-overflow">' + rendering.item(structure.layout.popup.principle, details)  + '</td></tr></table></div>';
                                    html += '<div class="glimpse-hud-popup-clear"></div>';
                                    html += '<div class="glimpse-data-request-parts"><table><tr><td colspan="3"><div class="glimpse-hud-bar glimpse-hud-tooltips-non"><div><div class="glimpse-hud-bar-item" style="width: 100%;background-color: ' + requestDetails.browser.categoryColor + '"></div><div class="glimpse-hud-bar-item" style="width: ' + requestDetails.server.percentage + '%;background-color: ' + requestDetails.server.categoryColor + ';"></div><div class="glimpse-hud-bar-item" style="width: ' + requestDetails.network.percentage + '%;background-color: ' + requestDetails.network.categoryColor + ';"></div></div></div></td></tr><tr><td class="glimpse-data-wire-part">' + rendering.item(structure.layout.popup.wire, details) + '</td><td class="glimpse-data-server-part">' + rendering.item(structure.layout.popup.server, details) + '</td><td class="glimpse-data-client-part">' + rendering.item(structure.layout.popup.client, details) + '</td></tr></table></div>'; 

                                    return html;
                                }
                            },
                            defaults: {
                                request: { title: 'Request', description: 'Total request time from click to dom ready', visible: true, size: 1, position: 0, align: 0, postfix: 'ms', getData: function(details) { return details.request.data.total.duration; } },
                                wire: { title: 'Wire', description: 'Total time on the network', visible: true, size: 2, position: 0, align: 0, postfix: 'ms', getData: function(details) { return details.request.data.network.duration; } },
                                server: { title: 'Server', description: 'Total time on the server', visible: true, size: 2, position: 0, align: 0, postfix: 'ms', getData: function(details) { return details.request.data.server.duration; } },
                                client: { title: 'Client', description: 'Total time once client kicks in to dom ready', visible: true, size: 2, position: 0, align: 0, postfix: 'ms', getData: function(details) { return details.request.data.browser.duration; } }, 
                                host: { title: 'Host', description: 'Server that responded to the request', visible: true, size: 2, position: 1, align: 1, postfix: '', getLayoutData: function(details) { return '<div class="glimpse-hud-listing-overflow" style="max-width:120px;">' + details.environment.data.serverName + '</div>'; } }, 
                                principle: { title: 'Principle', description: 'Principle that is currently logged in for this session', visible: function(details) { return details.environment.data.user; }, size: 2, position: 1, align: 1, postfix: '', getLayoutData: function(details) { return '<div class="glimpse-hud-listing-overflow" style="max-width:120px;">' + details.environment.data.user + '</div>'; } }
                            },
                            layout: {
                                mini: {
                                    request: {},
                                    wire: {},
                                    server: {},
                                    client: {},
                                },
                                popup: {
                                    request: { title: 'Total Request Time', size: 0, position: 1, align: 1 },
                                    wire: { position: 1, align: 1 },
                                    server: { position: 1, align: 1 },
                                    client: { position: 1, align: 1 },
                                    host: { },
                                    principle: { },
                                }
                            }
                        }, 
                        processTimings = function(details) {
                            var result = { },
                                networkPre = calculateTimings('navigationStart', 'requestStart'),
                                networkPost = calculateTimings('responseStart', 'responseEnd'),
                                network = networkPre + networkPost,
                                server = calculateTimings('requestStart', 'responseStart'),
                                browser = calculateTimings('responseEnd', 'loadEventEnd'),
                                total = network + server + browser;
                      
                            result.networkSending = { categoryColor: '#FDBF45', duration: networkPre, percentage: (networkPre / total) * 100 };
                            result.networkReceiving = { categoryColor: '#FDBF45', duration: networkPost, percentage: (networkPost / total) * 100 };
                            result.network = { categoryColor: '#FDBF45', duration: network, percentage: (network / total) * 100 };
                            result.server = { categoryColor: '#AF78DD', duration: server, percentage: (server / total) * 100 };
                            result.browser = { categoryColor: '#72A3E4', duration: browser, percentage: (browser / total) * 100 };
                            result.total = { categoryColor: '#10E309', duration: network + server + browser, percentage: 100 };
                         
                            details.request = { data: result, name: 'Request' };
                        },
                        calculateTimings = function(startIndex, finishIndex) { 
                            return timingsRaw[finishIndex] - timingsRaw[startIndex];
                        }, 
                        render = function(details, opened) {
                            var html = '';
                            if (timingsRaw) {
                                process.init(structure);
                                processTimings(details); 
                                html = rendering.section(structure, details, opened); 
                            }

                            return html;
                        };
                
                    return {
                            render: render
                        };
                }(),
                host: function() {
                    var structure = {
                            title: 'Host',
                            id: 'host', 
                            color: '#6161e0',
                            popup: {
                                render: function(details) {
                                    var hasTrivial = false,
                                        html = '<div class="glimpse-hud-popup-header">Server Side</div>';
                                    html += '<div><table class="glimpse-hud-summary glimpse-hud-summary-space glimpse-hud-summary-left"><tr><th>' + rendering.item(structure.layout.popup.server, details) + '</th></tr><tr><td>' + rendering.item(structure.layout.popup.controller, details) + '</td></tr></table>';
                                    html += '<table class="glimpse-hud-summary glimpse-hud-summary-space glimpse-hud-summary-right"><tr><td width="1">' + rendering.item(structure.layout.popup.action, details) + '</td>' + (details.sql ? '<td width="40"></td><td>' + rendering.item(structure.layout.popup.connections, details) + '</td>' : '') + '</tr><tr><td>' + rendering.item(structure.layout.popup.view, details) + '</td>' + (details.sql ? '<td></td><td>' + rendering.item(structure.layout.popup.queries, details) + '</td>' : '') + '</tr></table></div>';
                                    html += '<div class="glimpse-hud-popup-clear"></div>'; 
                                    html += '<table class="glimpse-hud-listing" style="table-layout:fixed;"><thead><tr><th></th><th class="glimpse-hud-listing-value glimpse-data-childless-duration">duration (ms)</th><th class="glimpse-hud-listing-value glimpse-data-childless-start-point">from start (ms)</th></tr></thead>';  
                                    for (var i = 0; i < details.timings.data.length; i++) {
                                        var item = details.timings.data[i],
                                            isTrivial = item.childlessDuration < 2;
                                        
                                        if (!item.suppress) {
                                            var maxLength = (16 + (details.sql ? 10 : 0)) - item.nesting * 2;
                                            
                                            html += '<tbody' + (isTrivial ? ' class="glimpse-data-trivial"' : '') + '>';
                                            html += '<tr' + (isTrivial ? ' class="glimpse-hud-quite"' : '') + '><td class="glimpse-hud-listing-overflow" style="padding-left:' + (item.nesting * 15) + 'px;" ' + (item.description.length > maxLength ? 'title="' + item.description + '"' : '') +'>' + item.description + '</td><td class="glimpse-hud-listing-value glimpse-data-childless-duration">' + item.childlessDuration + '</td><td class="glimpse-hud-listing-value glimpse-data-childless-start-point"><span class="glimpse-hud-prefix">+</span>' + item.startPoint + '</td></tr>';
                                            if (item.queries && item.queries.listing.length > 0) {
                                                html += '<tr><td class="glimpse-data-query-summary" style="padding-left:' + ((item.nesting * 15) + 20) + 'px;"><span class="glimpse-hud-prefix">➥</span><span class="glimpse-hud-listing-value">' + item.queries.listing.length + '</span><span class="glimpse-hud-postfix">' + (item.queries.listing.length == 1 ? 'query' : 'queries') + '</span> <span class="glimpse-hud-listing-value">' + item.queries.durationSum.toFixed(2) + '</span><span class="glimpse-hud-postfix">ms</span></td><td></td><td></td></tr>';
                                            }
                                            html += '</tbody>';
                                            if (isTrivial) { hasTrivial = true; }
                                        }
                                    }    
                                    html += '</table>';
                                    if (hasTrivial) {
                                        html += '<div class="glimpse-hud-controls"><span class="glimpse-control-trivial">Show Trivial</span><span class="glimpse-control-trivial" style="display:none">Hide Trivial</span></div>';
                                    }

                                    return html;
                                }
                            },
                            defaults: {
                                server: { title: 'Total Server Time', description: 'Total time on the server', visible: function (details) { return details.request; }, size: 0, position: 1, align: 1, postfix: 'ms', getData: function (details) { return details.request.data.server.duration; } },
                                action: { title: 'Action', description: 'How long root Action took to execute', visible: function(details) { return details.mvc && details.mvc.data.actionExecutionTime != null; }, size: 1, position: 0, align: 0, postfix: 'ms', getData: function(details) { return parseInt(details.mvc.data.actionExecutionTime); } },
                                view: { title: 'View', description: 'How long root View took to render', visible: function(details) { return details.mvc && details.mvc.data.viewRenderTime != null; }, size: 1, position: 0, align: 0, postfix: 'ms', getData: function(details) { return parseInt(details.mvc.data.viewRenderTime); } },
                                controller: { title: 'Controller/Action', description: 'Name of the root Controller and Action', visible: function(details) { return details.mvc; }, size: 2, position: 0, align: 0, postfix: 'ms', getLayoutData: function(details) { return '<span class="glimpse-hud-data">' + details.mvc.data.controllerName + '</span><span class="glimpse-hud-plain">.</span><span class="glimpse-hud-data">' + details.mvc.data.actionName + '</span><span class="glimpse-hud-plain">(...)</span>'; } },
                                queries: { title: 'DB Queries', description: 'Total query duration and number of all SQL queries', visible: function(details) { return details.sql; }, size: 1, position: 0, align: 0, getLayoutData: function(details) { return '<span class="glimpse-hud-data">' + parseInt(details.sql.data.queryExecutionTime) + '</span><span class="glimpse-hud-postfix">ms</span><span class="glimpse-hud-spacer">/</span><span class="glimpse-hud-data">'  + details.sql.data.queryCount + '</span>'; } },
                                connections: { title: 'DB Connections', description: 'Total query duration and number of all SQL queries', visible: function(details) { return details.sql; }, size: 1, position: 1, align: 1, getLayoutData: function(details) { return '<span class="glimpse-hud-data">' + parseInt(details.sql.data.connectionOpenTime) + '</span><span class="glimpse-hud-postfix">ms</span><span class="glimpse-hud-spacer">/</span><span class="glimpse-hud-data">'  + details.sql.data.connectionCount + '</span>'; } }
                            },
                            layout: {
                                mini: {
                                    action: {},
                                    view: {},
                                    controller: {},
                                    queries: {},
                                },
                                popup: {
                                    server: {},
                                    action: { position: 1, align: 1 },
                                    view: { position: 1, align: 1 },
                                    controller: { position: 1, align: 1 },
                                    queries: { position: 1, align: 1 },
                                    connections: {},
                                }
                            }
                        },
                        processEvents = function(details) { 
                            var eventStack = [], 
                                lastEvent = { startPoint : 0, duration : 0, childlessDuration : 0, endPoint : 0 },
                                lastControllerEvent = { },
                                rootDuration = details.request ? details.request.data.server.duration : 1,
                                rootChildlessDuration = rootDuration;
                            
                            for (var i = 0; i < details.timings.data.length; i += 1) {
                                var event = details.timings.data[i],
                                    topEvent = eventStack.length > 0 ? eventStack[eventStack.length - 1] : null, 
                                    left = (event.startPoint / rootDuration) * 100,  
                                    width = (event.duration / rootDuration) * 100, 
                                    stackParsed = false;

                                event.endPoint = parseFloat((event.startPoint + event.duration).toFixed(2));

                                //Work out how queries are to be parsed
                                if (event.category == "Controller" || event.category == "Request") {
                                    lastControllerEvent = event;
                                    lastControllerEvent.queries = { durationSum: 0, listing: [] };
                                }
                                else if (event.category == "Command" && lastControllerEvent.queries) { 
                                    lastControllerEvent.queries.listing.push(event);
                                    lastControllerEvent.queries.durationSum += event.duration;
                                    event.suppress = true;
                                }

                                //Derive event nesting  
                                while (!stackParsed) {
                                    if (event.startPoint > lastEvent.startPoint && event.endPoint <= lastEvent.endPoint) { 
                                        eventStack.push(lastEvent); 
                                        stackParsed = true;
                                    }
                                    else if (topEvent != null && topEvent.endPoint < event.endPoint) {
                                        eventStack.pop(); 
                                        topEvent = eventStack.length > 0 ? eventStack[eventStack.length - 1] : null; 
                                        stackParsed = false;
                                    }
                                    else 
                                        stackParsed = true; 
                                }
                        
                                //Work out childless timings 
                                var temp = eventStack.length > 0 ? eventStack[eventStack.length - 1] : undefined; 
                                if (temp) {
                                    temp.childlessDuration = parseFloat((temp.childlessDuration - event.duration).toFixed(2));
                                } 

                                //Work out root childless timings 
                                if (eventStack.length == 0)
                                    rootChildlessDuration -= event.duration;

                                //Save calculate data
                                event.childlessDuration = event.duration;
                                event.startPercent = left;
                                event.endPercent = left + width;
                                event.widthPercent = width;
                                event.nesting = eventStack.length + 1; 
                                event.description = event.title; 
                        
                                lastEvent = event;
                            }
                             
                            details.timings.data.unshift({
                                    description: 'Request: ' + (window.location.pathname + window.location.search),
                                    title: (window.location.pathname + window.location.search),
                                    startTime: 'NOT SURE',
                                    duration: rootDuration,
                                    startPoint: '0.0',
                                    category: 'Request',
                                    childlessDuration: Math.round(rootChildlessDuration * 10) / 10,
                                    startPercent: 0,
                                    endPercent: 100,
                                    widthPercent: 100,
                                    nesting: 0
                                }); 
                        }, 
                        render = function(details, opened) {
                            var html = '';
                            if (details.mvc || details.sql) {
                                process.init(structure); 
                                processEvents(details);
                                html = rendering.section(structure, details, opened); 
                            }

                            return html;
                        },
                        postRender = function() {
                            $('.glimpse-hud .glimpse-control-trivial').click(function() { $('.glimpse-hud .glimpse-control-trivial, .glimpse-hud .glimpse-data-trivial').toggle(); });
                        };
                    
                    return {
                            render: render,
                            postRender: postRender
                        };
                }(),
                ajax: function() {
                    var count = 0,
                        summaryStack = [],
                        detailStack = [],
                        structure = {
                            title: 'Ajax',
                            id: 'ajax',
                            color: '#559fdf',
                            popup: {
                                suppress: true,
                                render: function(details) {
                                    var html = '<div class="glimpse-hud-popup-header">Ajax Requests</div>';
                                    html += '<div>' + rendering.item(structure.layout.popup.requests, details) + '</div>';
                                    html += '<div class="glimpse-hud-popup-clear"></div>';
                                    html += '<table style="table-layout:fixed;" class="glimpse-hud-listing glimpse-data-ajax-detail"><thead><tr><th class="glimpse-data-content-method"></th><th></th><th class="glimpse-hud-listing-value glimpse-data-duration">duration (ms)</th><th class="glimpse-hud-listing-value glimpse-data-size">size (kb)</th></tr></thead>';
                                    html += '</table>';

                                    return html;
                                }
                            },
                            defaults: {
                                requests: { title: 'Count', id: 'glimpse-data-ajax-count', description: 'Total Ajax requests detected on this page', visible: true, size: 1, position: 0, align: 0, getData: function(details) { return 0; } }
                            },
                            layout: {
                                mini: {
                                    requests: { }
                                },
                                popup: {
                                    requests: { title: 'Total Ajax Requests', size: 0, position: 1, align: 1 },
                                }
                            }
                        },
                        processContentType = function(type) {
                            return type ? type.substring(0, type.indexOf(';')) : '';
                        },
                        render = function(details, opened) {
                            process.init(structure);

                            return rendering.section(structure, details, opened);
                        },
                        update = function(method, uri, duration, size, status, statusText, time, contentType) {
                            //Add it when needed
                            if (count == 0) {
                                var section = $('.glimpse-hud-section-ajax');
                                section.find('.glimpse-hud-section-inner').append('<div class="glimpse-hud-detail glimpse-hud-detail-small glimpse-hud-listing glimpse-data-ajax-summary"></div>');
                                section.append(rendering.popup(structure, { }));
                            }

                            //Set the counter
                            var counter = $('.glimpse-data-ajax-count .glimpse-hud-data').text(++count).addClass('glimpse-hud-value-update');
                            setTimeout(function() {
                                counter.removeClass('glimpse-hud-value-update');
                            }, 2000);
                             
                            //Update data records
                            var rowClass = (status == 304 ? ' glimpse-hud-quite' : !(status >= 200 && status < 300) ? ' glimpse-hud-error' : '');
                            recordItem('<div class="glimpse-hud-listing-row glimpse-hud-value' + rowClass + '"><div class="glimpse-hud-data glimpse-hud-quite glimpse-data-ajax-method">' + method + '</div><div class="glimpse-hud-data glimpse-hud-listing-overflow glimpse-data-ajax-uri" title="' + uri + '">' + uri + '</div><div class="glimpse-data-ajax-duration"><span class="glimpse-hud-data">' + duration + '</span><span class="glimpse-hud-postfix">ms</span></div></div>', '.glimpse-hud-section-ajax .glimpse-data-ajax-summary', summaryStack, 2);
                            recordItem('<tbody class="' + rowClass + '"><tr><td class="glimpse-hud-listing-overflow" title="' + uri + '" colspan="2">' + uri + '</td><td class="glimpse-hud-listing-value glimpse-data-duration">' + duration + '</td><td class="glimpse-hud-listing-value glimpse-data-size">' + (Math.round((size / 1024) * 10) / 10) + '</td></tr><tr><td class="glimpse-hud-quite glimpse-data-content-method">' + method + '</td><td class="glimpse-hud-quite glimpse-hud-listing-overflow">' + status + ' - ' + statusText + '</td><td class="glimpse-hud-quite glimpse-data-content-type glimpse-hud-listing-overflow" title="' + contentType + '">' + processContentType(contentType) + '</td><td class="glimpse-hud-quite glimpse-data-content-time">' + time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + '</td></tr></tbody>', '.glimpse-hud-section-ajax .glimpse-data-ajax-detail', detailStack, 6);
                        },
                        recordItem = function(html, selector, stack, length) {
                            //Set row
                            var row = $(html).prependTo(selector);
                            setTimeout(function() {
                                row.addClass('added');
                            }, 1);

                            //Track state of the details
                            if (stack.length >= length)
                                stack.shift().remove();
                            stack.push(row);
                        },
                        postRender = function() {
                            var open = XMLHttpRequest.prototype.open;
                        
                            XMLHttpRequest.prototype.open = function(method, uri, async, user, pass) {
                                if (uri.indexOf('Glimpse.axd') === -1) {
                                    var startTime = new Date().getTime(); 
                                    this.addEventListener("readystatechange", function() {
                                            if (this.readyState == 4)  { 
                                                update(method, uri, new Date().getTime() - startTime, this.getResponseHeader("Content-Length"), this.status, this.statusText, new Date(), this.getResponseHeader("Content-Type"));
                                            }
                                        }, false); 
                                }
                
                                open.apply(this, arguments);
                            };                             
                        };
                      
                    return {
                            render: render,
                            postRender: postRender
                        };
                }()
            };
            
        }();

    pubsub.subscribe('action.template.processing', modify); 
    pubsub.subscribe('action.data.initial.changed', function(args) { $(window).load(function() { setTimeout(function() { loaded(args); }, 0); }); }); 

})(jQueryGlimpse, glimpse.pubsub, glimpse.data, glimpse.elements, glimpse.util);


// google-code-prettify.js
if (!window.PR_SHOULD_USE_CONTINUATION) {
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MERGE|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,
null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);
}
(function ($, pubsub) {
    var modify = function (options) {
        options.templates.css += '.glimpse .pln{color:#000}.glimpse .str{color:#080}.glimpse .kwd{color:#008}.glimpse .com{color:#2F4F2F}.glimpse .typ{color:#606}.glimpse .lit{color:#800}.glimpse .pun,.glimpse .opn, .glimpse .clo{color:#660}.glimpse .tag{color:#008}.glimpse .atn{color:#606}.glimpse .atv{color:#080}.glimpse .dec, .glimpse .var{color:#606}.glimpse .fun{color:red}.glimpse .prettyprint span{font-family:Consolas, monospace, serif; font-size:1.1em;}.glimpse ol.linenums{margin-top:0;margin-bottom:0}.glimpse li.L0,.glimpse li.L1,.glimpse li.L2,.glimpse li.L3,.glimpse li.L5,.glimpse li.L6,.glimpse li.L7,.glimpse li.L8{list-style-type:none}.glimpse li.L1,.glimpse li.L3,.glimpse li.L5,.glimpse li.L7,.glimpse li.L9{background:#eee}';
    };
    
    pubsub.subscribe('action.template.processing', modify); 
}(jQueryGlimpse, glimpse.pubsub));

glimpse.pubsub.publish('trigger.system.start');
