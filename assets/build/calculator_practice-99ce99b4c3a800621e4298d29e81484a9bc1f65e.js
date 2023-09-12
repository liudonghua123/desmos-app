(()=>{var Vh=Object.create;var Yi=Object.defineProperty,Ah=Object.defineProperties,Fh=Object.getOwnPropertyDescriptor,Lh=Object.getOwnPropertyDescriptors,Oh=Object.getOwnPropertyNames,al=Object.getOwnPropertySymbols,Ih=Object.getPrototypeOf,il=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable;var ol=(t,e,r)=>e in t?Yi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,A=(t,e)=>{for(var r in e||(e={}))il.call(e,r)&&ol(t,r,e[r]);if(al)for(var r of al(e))Mh.call(e,r)&&ol(t,r,e[r]);return t},R=(t,e)=>Ah(t,Lh(e));var sl=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(e,r)=>(typeof require!="undefined"?require:e)[r]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var re=(t,e)=>()=>(t&&(e=t(t=0)),e);var Jr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Nh=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Oh(e))!il.call(t,s)&&s!==r&&Yi(t,s,{get:()=>e[s],enumerable:!(a=Fh(e,s))||a.enumerable});return t};var j=(t,e,r)=>(r=t!=null?Vh(Ih(t)):{},Nh(e||!t||!t.__esModule?Yi(r,"default",{value:t,enumerable:!0}):r,t));function to(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?eo[Hl.call(t)]||"object":typeof t}function os(t){var e=!!t&&"length"in t&&t.length,r=to(t);return kr(t)||xn(t)?!1:r==="array"||e===0||typeof e=="number"&&e>0&&e-1 in t}function bn(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}function Tm(t,e){return e.toUpperCase()}function br(t){return t.replace(Em,"ms-").replace(Sm,Tm)}function ea(){this.expando=v.expando+ea.uid++}function Am(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Gm.test(t)?JSON.parse(t):t}function Nl(t,e,r){var a;if(r===void 0&&t.nodeType===1)if(a="data-"+e.replace(Vm,"-$&").toLowerCase(),r=t.getAttribute(a),typeof r=="string"){try{r=Am(r)}catch(s){}wr.set(t,e,r)}else r=void 0;return r}function Lm(t,e,r,a){var s,d,g=20,m=a?function(){return a.cur()}:function(){return v.css(t,e,"")},p=m(),b=r&&r[3]||(v.cssNumber[e]?"":"px"),k=t.nodeType&&(v.cssNumber[e]||b!=="px"&&+p)&&ro.exec(v.css(t,e));if(k&&k[3]!==b){for(p=p/2,b=b||k[3],k=+p||1;g--;)v.style(t,e,k+b),(1-d)*(1-(d=m()/p||.5))<=0&&(g=0),k=k/d;k=k*2,v.style(t,e,k+b),r=r||[]}return r&&(k=+k||+p||0,s=r[1]?k+(r[1]+1)*r[2]:+r[2],a&&(a.unit=b,a.start=k,a.end=s)),s}function vn(){return!0}function kn(){return!1}function Om(t,e){return t===Im()==(e==="focus")}function Im(){try{return We.activeElement}catch(t){}}function cs(t,e,r,a,s,d){var g,m;if(typeof e=="object"){typeof r!="string"&&(a=a||r,r=void 0);for(m in e)cs(t,m,r,a,e[m],d);return t}if(a==null&&s==null?(s=r,a=r=void 0):s==null&&(typeof r=="string"?(s=a,a=void 0):(s=a,a=r,r=void 0)),s===!1)s=kn;else if(!s)return t;return d===1&&(g=s,s=function(p){return v().off(p),g.apply(this,arguments)},s.guid=g.guid||(g.guid=v.guid++)),t.each(function(){v.event.add(this,e,s,a,r)})}function Za(t,e,r){if(!r){Ce.get(t,e)===void 0&&v.event.add(t,e,vn);return}Ce.set(t,e,!1),v.event.add(t,e,{namespace:!1,handler:function(a){var s,d,g=Ce.get(this,e);if(a.isTrigger&1&&this[e]){if(g.length)(v.event.special[e]||{}).delegateType&&a.stopPropagation();else if(g=Ja.call(arguments),Ce.set(this,e,g),s=r(this,e),this[e](),d=Ce.get(this,e),g!==d||s?Ce.set(this,e,!1):d={},g!==d)return a.stopImmediatePropagation(),a.preventDefault(),d&&d.value}else g.length&&(Ce.set(this,e,{value:v.event.trigger(v.extend(g[0],v.Event.prototype),g.slice(1),this)}),a.stopImmediatePropagation())}})}function Xn(t,e,r){var a,s,d,g,m=t.style;return r=r||no(t),r&&(g=r.getPropertyValue(e)||r[e],g===""&&!Xl(t)&&(g=v.style(t,e)),!ze.pixelBoxStyles()&&us.test(g)&&Mm.test(e)&&(a=m.width,s=m.minWidth,d=m.maxWidth,m.minWidth=m.maxWidth=m.width=g,g=r.width,m.width=a,m.minWidth=s,m.maxWidth=d)),g!==void 0?g+"":g}function ed(t,e){return{get:function(){if(t()){delete this.get;return}return(this.get=e).apply(this,arguments)}}}function Nm(t){for(var e=t[0].toUpperCase()+t.slice(1),r=_l.length;r--;)if(t=_l[r]+e,t in td)return t}function Pl(t){var e=v.cssProps[t]||Rl[t];return e||(t in td?t:Rl[t]=Nm(t)||t)}function rd(t,e,r){var a=ro.exec(e);return a?Math.max(0,a[2]-(r||0))+(a[3]||"px"):e}function ls(t,e,r,a,s,d){var g=e==="width"?1:0,m=0,p=0;if(r===(a?"border":"content"))return 0;for(;g<4;g+=2)r==="margin"&&(p+=v.css(t,r+Lr[g],!0,s)),a?(r==="content"&&(p-=v.css(t,"padding"+Lr[g],!0,s)),r!=="margin"&&(p-=v.css(t,"border"+Lr[g]+"Width",!0,s))):(p+=v.css(t,"padding"+Lr[g],!0,s),r!=="padding"?p+=v.css(t,"border"+Lr[g]+"Width",!0,s):m+=v.css(t,"border"+Lr[g]+"Width",!0,s));return!a&&d>=0&&(p+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-d-p-m-.5))||0),p}function Ul(t,e,r){var a=no(t),s=!ze.boxSizingReliable()||r,d=s&&v.css(t,"boxSizing",!1,a)==="border-box",g=d,m=Xn(t,e,a),p="offset"+e[0].toUpperCase()+e.slice(1);if(us.test(m)){if(!r)return m;m="auto"}return(!ze.boxSizingReliable()&&d||!ze.reliableTrDimensions()&&bn(t,"tr")||m==="auto"||!parseFloat(m)&&v.css(t,"display",!1,a)==="inline")&&t.getClientRects().length&&(d=v.css(t,"boxSizing",!1,a)==="border-box",g=p in t,g&&(m=t[p])),m=parseFloat(m)||0,m+ls(t,e,r||(d?"border":"content"),g,a,m)+"px"}function ds(t,e,r,a){var s;if(Array.isArray(e))v.each(e,function(d,g){r||Rm.test(t)?a(t,g):ds(t+"["+(typeof g=="object"&&g!=null?d:"")+"]",g,r,a)});else if(!r&&to(e)==="object")for(s in e)ds(t+"["+s+"]",e[s],r,a);else a(t,e)}var vr,wm,Ja,vm,zl,km,eo,Hl,Qa,Yl,xm,ze,kr,xn,We,jl,v,Cm,Jl,Dm,ss,Zn,Em,Sm,Xa,Ce,wr,Gm,Vm,Ql,ro,Lr,wn,Xl,Fm,is,ql,us,no,Zl,Mm,_l,td,Rl,qm,Bl,_m,$l,Kl,Wl,Rm,Pm,Bm,$m,B,st=re(()=>{"use strict";vr=[],wm=Object.getPrototypeOf,Ja=vr.slice,vm=vr.flat?function(t){return vr.flat.call(t)}:function(t){return vr.concat.apply([],t)},zl=vr.push,km=vr.indexOf,eo={},Hl=eo.toString,Qa=eo.hasOwnProperty,Yl=Qa.toString,xm=Yl.call(Object),ze={},kr=function(e){return typeof e=="function"&&typeof e.nodeType!="number"&&typeof e.item!="function"},xn=function(e){return e!=null&&e===e.window},We=window.document;jl="3.6.0",v=function(t,e){return new v.fn.init(t,e)};v.fn=v.prototype={jquery:jl,constructor:v,length:0,toArray:function(){return Ja.call(this)},get:function(t){return t==null?Ja.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=v.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return v.each(this,t)},map:function(t){return this.pushStack(v.map(this,function(e,r){return t.call(e,r,e)}))},slice:function(){return this.pushStack(Ja.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(v.grep(this,function(t,e){return(e+1)%2}))},odd:function(){return this.pushStack(v.grep(this,function(t,e){return e%2}))},eq:function(t){var e=this.length,r=+t+(t<0?e:0);return this.pushStack(r>=0&&r<e?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:zl,sort:vr.sort,splice:vr.splice};v.extend=v.fn.extend=function(){var t,e,r,a,s,d,g=arguments[0]||{},m=1,p=arguments.length,b=!1;for(typeof g=="boolean"&&(b=g,g=arguments[m]||{},m++),typeof g!="object"&&!kr(g)&&(g={}),m===p&&(g=this,m--);m<p;m++)if((t=arguments[m])!=null)for(e in t)a=t[e],!(e==="__proto__"||g===a)&&(b&&a&&(v.isPlainObject(a)||(s=Array.isArray(a)))?(r=g[e],s&&!Array.isArray(r)?d=[]:!s&&!v.isPlainObject(r)?d={}:d=r,s=!1,g[e]=v.extend(b,d,a)):a!==void 0&&(g[e]=a));return g};v.extend({expando:"jQuery"+(jl+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,r;return!t||Hl.call(t)!=="[object Object]"?!1:(e=wm(t),e?(r=Qa.call(e,"constructor")&&e.constructor,typeof r=="function"&&Yl.call(r)===xm):!0)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},each:function(t,e){var r,a=0;if(os(t))for(r=t.length;a<r&&e.call(t[a],a,t[a])!==!1;a++);else for(a in t)if(e.call(t[a],a,t[a])===!1)break;return t},makeArray:function(t,e){var r=e||[];return t!=null&&(os(Object(t))?v.merge(r,typeof t=="string"?[t]:t):zl.call(r,t)),r},inArray:function(t,e,r){return e==null?-1:km.call(e,t,r)},merge:function(t,e){for(var r=+e.length,a=0,s=t.length;a<r;a++)t[s++]=e[a];return t.length=s,t},grep:function(t,e,r){for(var a,s=[],d=0,g=t.length,m=!r;d<g;d++)a=!e(t[d],d),a!==m&&s.push(t[d]);return s},map:function(t,e,r){var a,s,d=0,g=[];if(os(t))for(a=t.length;d<a;d++)s=e(t[d],d,r),s!=null&&g.push(s);else for(d in t)s=e(t[d],d,r),s!=null&&g.push(s);return vm(g)},guid:1,support:ze});typeof Symbol=="function"&&(v.fn[Symbol.iterator]=vr[Symbol.iterator]);v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){eo["[object "+e+"]"]=e.toLowerCase()});Cm=function(t){var e,r,a,s,d,g,m,p=t.document,b=[],k=b.push,F=b.push,G=b.slice,U=/HTML$/i,fe=/^[^{]+\{\s*\[native \w/,xe=function(){a()};try{F.apply(b=G.call(p.childNodes),p.childNodes),b[p.childNodes.length].nodeType}catch(Se){F={apply:b.length?function(Oe,Re){k.apply(Oe,G.call(Re))}:function(Oe,Re){for(var Bt=Oe.length,Ne=0;Oe[Bt++]=Re[Ne++];);Oe.length=Bt-1}}}function Ue(){}function Je(Se){var Oe=s.createElement("fieldset");try{return!!Se(Oe)}catch(Re){return!1}finally{Oe.parentNode&&Oe.parentNode.removeChild(Oe),Oe=null}}return e=Ue.support={},r=Ue.isXML=function(Se){var Oe=Se&&Se.namespaceURI,Re=Se&&(Se.ownerDocument||Se).documentElement;return!U.test(Oe||Re&&Re.nodeName||"HTML")},a=Ue.setDocument=function(Se){var Oe,Re,Bt=Se?Se.ownerDocument||Se:p;return Bt==s||Bt.nodeType!==9||!Bt.documentElement||(s=Bt,d=s.documentElement,g=!r(s),p!=s&&(Re=s.defaultView)&&Re.top!==Re&&(Re.addEventListener?Re.addEventListener("unload",xe,!1):Re.attachEvent&&Re.attachEvent("onunload",xe)),e.attributes=Je(function(Ne){return Ne.className="i",!Ne.getAttribute("className")}),e.getElementsByTagName=Je(function(Ne){return Ne.appendChild(s.createComment("")),!Ne.getElementsByTagName("*").length}),Oe=fe.test(d.compareDocumentPosition),m=Oe||fe.test(d.contains)?function(Ne,H){var Ur=Ne.nodeType===9?Ne.documentElement:Ne,N=H&&H.parentNode;return Ne===N||!!(N&&N.nodeType===1&&(Ur.contains?Ur.contains(N):Ne.compareDocumentPosition&&Ne.compareDocumentPosition(N)&16))}:function(Ne,H){if(H){for(;H=H.parentNode;)if(H===Ne)return!0}return!1}),s},Ue.contains=function(Se,Oe){return(Se.ownerDocument||Se)!=s&&a(Se),m(Se,Oe)},a(),e.sortDetached=Je(function(Se){return Se.compareDocumentPosition(s.createElement("fieldset"))&1}),Ue}(window);v.contains=Cm.contains;Dm=v.fn.init=function(t,e,r){if(!t)return this;if(r=r||Jl,typeof t=="string")throw new Error("$(string) implementation has been removed");if(t.nodeType)return this[0]=t,this.length=1,this;if(kr(t))throw new Error("$(function) implementation has been removed");return v.makeArray(t,this)};Dm.prototype=v.fn;Jl=v(We);ss=/[^\x20\t\r\n\f]+/g,Zn=function(t,e,r,a,s,d,g){var m=0,p=t.length,b=r==null;if(to(r)==="object"){s=!0;for(m in r)Zn(t,e,m,r[m],!0,d,g)}else if(a!==void 0&&(s=!0,kr(a)||(g=!0),b&&(g?(e.call(t,a),e=null):(b=e,e=function(k,F,G){return b.call(v(k),G)})),e))for(;m<p;m++)e(t[m],r,g?a:a.call(t[m],m,e(t[m],r)));return s?t:b?e.call(t):p?e(t[0],r):d},Em=/^-ms-/,Sm=/-([a-z])/g;Xa=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};ea.uid=1;ea.prototype={cache:function(t){var e=t[this.expando];return e||(e={},Xa(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,r){var a,s=this.cache(t);if(typeof e=="string")s[br(e)]=r;else for(a in e)s[br(a)]=e[a];return s},get:function(t,e){return e===void 0?this.cache(t):t[this.expando]&&t[this.expando][br(e)]},access:function(t,e,r){return e===void 0||e&&typeof e=="string"&&r===void 0?this.get(t,e):(this.set(t,e,r),r!==void 0?r:e)},remove:function(t,e){var r,a=t[this.expando];if(a!==void 0){if(e!==void 0)for(Array.isArray(e)?e=e.map(br):(e=br(e),e=e in a?[e]:e.match(ss)||[]),r=e.length;r--;)delete a[e[r]];(e===void 0||v.isEmptyObject(a))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return e!==void 0&&!v.isEmptyObject(e)}};Ce=new ea,wr=new ea,Gm=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Vm=/[A-Z]/g;v.extend({hasData:function(t){return wr.hasData(t)||Ce.hasData(t)},data:function(t,e,r){return wr.access(t,e,r)},removeData:function(t,e){wr.remove(t,e)},_data:function(t,e,r){return Ce.access(t,e,r)},_removeData:function(t,e){Ce.remove(t,e)}});v.fn.extend({data:function(t,e){var r,a,s,d=this[0],g=d&&d.attributes;if(t===void 0){if(this.length&&(s=wr.get(d),d.nodeType===1&&!Ce.get(d,"hasDataAttrs"))){for(r=g.length;r--;)g[r]&&(a=g[r].name,a.indexOf("data-")===0&&(a=br(a.slice(5)),Nl(d,a,s[a])));Ce.set(d,"hasDataAttrs",!0)}return s}return typeof t=="object"?this.each(function(){wr.set(this,t)}):Zn(this,function(m){var p;if(d&&m===void 0)return p=wr.get(d,t),p!==void 0||(p=Nl(d,t),p!==void 0)?p:void 0;this.each(function(){wr.set(this,t,m)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){wr.remove(this,t)})}});Ql=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ro=new RegExp("^(?:([+-])=|)("+Ql+")([a-z%]*)$","i"),Lr=["Top","Right","Bottom","Left"],wn=We.documentElement,Xl=function(t){return v.contains(t.ownerDocument,t)},Fm={composed:!0};wn.getRootNode&&(Xl=function(t){return v.contains(t.ownerDocument,t)||t.getRootNode(Fm)===t.ownerDocument});is=/^(?:checkbox|radio)$/i;(function(){var t=We.createDocumentFragment(),e=t.appendChild(We.createElement("div")),r=We.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),e.appendChild(r),ze.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",ze.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,e.innerHTML="<option></option>",ze.option=!!e.lastChild})();ql=/^([^.]*)(?:\.(.+)|)/;v.event={global:{},add:function(t,e,r,a,s){var d,g,m,p,b,k,F,G,U,fe,xe,Ue=Ce.get(t);if(Xa(t)){if(r.handler&&(d=r,r=d.handler,s=d.selector),s)throw new Error("Support for event delegation has been removed");for(r.guid||(r.guid=v.guid++),(p=Ue.events)||(p=Ue.events=Object.create(null)),(g=Ue.handle)||(g=Ue.handle=function(Je){return typeof v!="undefined"&&v.event.triggered!==Je.type?v.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(ss)||[""],b=e.length;b--;)if(m=ql.exec(e[b])||[],U=xe=m[1],fe=(m[2]||"").split(".").sort(),!!U){if(F=v.event.special[U]||{},U=(s?F.delegateType:F.bindType)||U,F=v.event.special[U]||{},k=v.extend({type:U,origType:xe,data:a,handler:r,guid:r.guid,selector:s,namespace:fe.join(".")},d),(G=p[U])||(G=p[U]=[],G.delegateCount=0,(!F.setup||F.setup.call(t,a,fe,g)===!1)&&t.addEventListener&&t.addEventListener(U,g)),F.add&&(F.add.call(t,k),k.handler.guid||(k.handler.guid=r.guid)),s)throw new Error("Support for event delegation has been removed");G.push(k),v.event.global[U]=!0}}},remove:function(t,e,r,a,s){var d,g,m,p,b,k,F,G,U,fe,xe,Ue=Ce.hasData(t)&&Ce.get(t);if(!(!Ue||!(p=Ue.events))){for(e=(e||"").match(ss)||[""],b=e.length;b--;){if(m=ql.exec(e[b])||[],U=xe=m[1],fe=(m[2]||"").split(".").sort(),!U){for(U in p)v.event.remove(t,U+e[b],r,a,!0);continue}for(F=v.event.special[U]||{},U=(a?F.delegateType:F.bindType)||U,G=p[U]||[],m=m[2]&&new RegExp("(^|\\.)"+fe.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=d=G.length;d--;)k=G[d],(s||xe===k.origType)&&(!r||r.guid===k.guid)&&(!m||m.test(k.namespace))&&(!a||a===k.selector||a==="**"&&k.selector)&&(G.splice(d,1),k.selector&&G.delegateCount--,F.remove&&F.remove.call(t,k));g&&!G.length&&((!F.teardown||F.teardown.call(t,fe,Ue.handle)===!1)&&v.removeEvent(t,U,Ue.handle),delete p[U])}v.isEmptyObject(p)&&Ce.remove(t,"handle events")}},dispatch:function(t){var e,r,a,s,d,g,m=new Array(arguments.length),p=v.event.fix(t),b=(Ce.get(this,"events")||Object.create(null))[p.type]||[],k=v.event.special[p.type]||{};for(m[0]=p,e=1;e<arguments.length;e++)m[e]=arguments[e];if(p.delegateTarget=this,!(k.preDispatch&&k.preDispatch.call(this,p)===!1)){for(g=v.event.handlers.call(this,p,b),e=0;(s=g[e++])&&!p.isPropagationStopped();)for(p.currentTarget=s.elem,r=0;(d=s.handlers[r++])&&!p.isImmediatePropagationStopped();)(!p.rnamespace||d.namespace===!1||p.rnamespace.test(d.namespace))&&(p.handleObj=d,p.data=d.data,a=((v.event.special[d.origType]||{}).handle||d.handler).apply(s.elem,m),a!==void 0&&(p.result=a)===!1&&(p.preventDefault(),p.stopPropagation()));return k.postDispatch&&k.postDispatch.call(this,p),p.result}},handlers:function(t,e){var r=[],a=e.delegateCount,s=t.target;if(a)throw new Error("Support for event delegtaion has been removed");return s=this,a<e.length&&r.push({elem:s,handlers:e.slice(a)}),r},addProp:function(t,e){Object.defineProperty(v.Event.prototype,t,{enumerable:!0,configurable:!0,get:kr(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(r){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(t){return t[v.expando]?t:new v.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return is.test(e.type)&&e.click&&bn(e,"input")&&Za(e,"click",vn),!1},trigger:function(t){var e=this||t;return is.test(e.type)&&e.click&&bn(e,"input")&&Za(e,"click"),!0},_default:function(t){var e=t.target;return is.test(e.type)&&e.click&&bn(e,"input")&&Ce.get(e,"click")||bn(e,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};v.removeEvent=function(t,e,r){t.removeEventListener&&t.removeEventListener(e,r)};v.Event=function(t,e){if(!(this instanceof v.Event))return new v.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?vn:kn,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&v.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[v.expando]=!0};v.Event.prototype={constructor:v.Event,isDefaultPrevented:kn,isPropagationStopped:kn,isImmediatePropagationStopped:kn,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=vn,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=vn,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=vn,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}};v.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},v.event.addProp);v.each({focus:"focusin",blur:"focusout"},function(t,e){v.event.special[t]={setup:function(){return Za(this,t,Om),!1},trigger:function(){return Za(this,t),!0},_default:function(){return!0},delegateType:e}});v.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){v.event.special[t]={delegateType:e,bindType:e,handle:function(r){var a,s=this,d=r.relatedTarget,g=r.handleObj;return(!d||d!==s&&!v.contains(s,d))&&(r.type=g.origType,a=g.handler.apply(this,arguments),r.type=e),a}}});v.fn.extend({on:function(t,e,r,a){return cs(this,t,e,r,a)},one:function(t,e,r,a){return cs(this,t,e,r,a,1)},off:function(t,e,r){var a,s;if(t&&t.preventDefault&&t.handleObj)return a=t.handleObj,v(t.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler),this;if(typeof t=="object"){for(s in t)this.off(s,e,t[s]);return this}return(e===!1||typeof e=="function")&&(r=e,e=void 0),r===!1&&(r=kn),this.each(function(){v.event.remove(this,t,r,e)})}});us=new RegExp("^("+Ql+")(?!px)[a-z%]+$","i"),no=function(t){var e=t.ownerDocument.defaultView;return(!e||!e.opener)&&(e=window),e.getComputedStyle(t)},Zl=function(t,e,r){var a,s,d={};for(s in e)d[s]=t.style[s],t.style[s]=e[s];a=r.call(t);for(s in e)t.style[s]=d[s];return a},Mm=new RegExp(Lr.join("|"),"i");(function(){function t(){if(b){p.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",wn.appendChild(p).appendChild(b);var k=window.getComputedStyle(b);r=k.top!=="1%",m=e(k.marginLeft)===12,b.style.right="60%",d=e(k.right)===36,a=e(k.width)===36,b.style.position="absolute",s=e(b.offsetWidth/3)===12,wn.removeChild(p),b=null}}function e(k){return Math.round(parseFloat(k))}var r,a,s,d,g,m,p=We.createElement("div"),b=We.createElement("div");b.style&&(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",ze.clearCloneStyle=b.style.backgroundClip==="content-box",v.extend(ze,{boxSizingReliable:function(){return t(),a},pixelBoxStyles:function(){return t(),d},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),m},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var k,F,G,U;return g==null&&(k=We.createElement("table"),F=We.createElement("tr"),G=We.createElement("div"),k.style.cssText="position:absolute;left:-11111px;border-collapse:separate",F.style.cssText="border:1px solid",F.style.height="1px",G.style.height="9px",G.style.display="block",wn.appendChild(k).appendChild(F).appendChild(G),U=window.getComputedStyle(F),g=parseInt(U.height,10)+parseInt(U.borderTopWidth,10)+parseInt(U.borderBottomWidth,10)===F.offsetHeight,wn.removeChild(k)),g}}))})();_l=["Webkit","Moz","ms"],td=We.createElement("div").style,Rl={};qm=/^(none|table(?!-c[ea]).+)/,Bl=/^--/,_m={position:"absolute",visibility:"hidden",display:"block"},$l={letterSpacing:"0",fontWeight:"400"};v.extend({cssHooks:{opacity:{get:function(t,e){if(e){var r=Xn(t,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,r,a){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var s,d,g,m=br(e),p=Bl.test(e),b=t.style;if(p||(e=Pl(m)),g=v.cssHooks[e]||v.cssHooks[m],r!==void 0){if(d=typeof r,d==="string"&&(s=ro.exec(r))&&s[1]&&(r=Lm(t,e,s),d="number"),r==null||r!==r)return;d==="number"&&!p&&(r+=s&&s[3]||(v.cssNumber[m]?"":"px")),!ze.clearCloneStyle&&r===""&&e.indexOf("background")===0&&(b[e]="inherit"),(!g||!("set"in g)||(r=g.set(t,r,a))!==void 0)&&(p?b.setProperty(e,r):b[e]=r)}else return g&&"get"in g&&(s=g.get(t,!1,a))!==void 0?s:b[e]}},css:function(t,e,r,a){var s,d,g,m=br(e),p=Bl.test(e);return p||(e=Pl(m)),g=v.cssHooks[e]||v.cssHooks[m],g&&"get"in g&&(s=g.get(t,!0,r)),s===void 0&&(s=Xn(t,e,a)),s==="normal"&&e in $l&&(s=$l[e]),r===""||r?(d=parseFloat(s),r===!0||isFinite(d)?d||0:s):s}});v.each(["height","width"],function(t,e){v.cssHooks[e]={get:function(r,a,s){if(a)return qm.test(v.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?Zl(r,_m,function(){return Ul(r,e,s)}):Ul(r,e,s)},set:function(r,a,s){var d,g=no(r),m=!ze.scrollboxSize()&&g.position==="absolute",p=m||s,b=p&&v.css(r,"boxSizing",!1,g)==="border-box",k=s?ls(r,e,s,b,g):0;return b&&m&&(k-=Math.ceil(r["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(g[e])-ls(r,e,"border",!1,g)-.5)),k&&(d=ro.exec(a))&&(d[3]||"px")!=="px"&&(r.style[e]=a,a=v.css(r,e)),rd(r,a,k)}}});v.cssHooks.marginLeft=ed(ze.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Xn(t,"marginLeft"))||t.getBoundingClientRect().left-Zl(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"});v.each({margin:"",padding:"",border:"Width"},function(t,e){v.cssHooks[t+e]={expand:function(r){for(var a=0,s={},d=typeof r=="string"?r.split(" "):[r];a<4;a++)s[t+Lr[a]+e]=d[a]||d[a-2]||d[0];return s}},t!=="margin"&&(v.cssHooks[t+e].set=rd)});v.fn.extend({css:function(t,e){return Zn(this,function(r,a,s){var d,g,m={},p=0;if(Array.isArray(a)){for(d=no(r),g=a.length;p<g;p++)m[a[p]]=v.css(r,a[p],!1,d);return m}return s!==void 0?v.style(r,a,s):v.css(r,a)},t,e,arguments.length>1)}});(function(){var t=We.createElement("input"),e=We.createElement("select"),r=e.appendChild(We.createElement("option"));t.type="checkbox",ze.checkOn=t.value!=="",ze.optSelected=r.selected,t=We.createElement("input"),t.value="t",t.type="radio",ze.radioValue=t.value==="t"})();ze.focusin="onfocusin"in window;Kl=/^(?:focusinfocus|focusoutblur)$/,Wl=function(t){t.stopPropagation()};v.extend(v.event,{trigger:function(t,e,r,a){var s,d,g,m,p,b,k,F,G=[r||We],U=Qa.call(t,"type")?t.type:t,fe=Qa.call(t,"namespace")?t.namespace.split("."):[];if(d=F=g=r=r||We,!(r.nodeType===3||r.nodeType===8)&&!Kl.test(U+v.event.triggered)&&(U.indexOf(".")>-1&&(fe=U.split("."),U=fe.shift(),fe.sort()),p=U.indexOf(":")<0&&"on"+U,t=t[v.expando]?t:new v.Event(U,typeof t=="object"&&t),t.isTrigger=a?2:3,t.namespace=fe.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+fe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=e==null?[t]:v.makeArray(e,[t]),k=v.event.special[U]||{},!(!a&&k.trigger&&k.trigger.apply(r,e)===!1))){if(!a&&!k.noBubble&&!xn(r)){for(m=k.delegateType||U,Kl.test(m+U)||(d=d.parentNode);d;d=d.parentNode)G.push(d),g=d;g===(r.ownerDocument||We)&&G.push(g.defaultView||g.parentWindow||window)}for(s=0;(d=G[s++])&&!t.isPropagationStopped();)F=d,t.type=s>1?m:k.bindType||U,b=(Ce.get(d,"events")||Object.create(null))[t.type]&&Ce.get(d,"handle"),b&&b.apply(d,e),b=p&&d[p],b&&b.apply&&Xa(d)&&(t.result=b.apply(d,e),t.result===!1&&t.preventDefault());return t.type=U,!a&&!t.isDefaultPrevented()&&(!k._default||k._default.apply(G.pop(),e)===!1)&&Xa(r)&&p&&kr(r[U])&&!xn(r)&&(g=r[p],g&&(r[p]=null),v.event.triggered=U,t.isPropagationStopped()&&F.addEventListener(U,Wl),r[U](),t.isPropagationStopped()&&F.removeEventListener(U,Wl),v.event.triggered=void 0,g&&(r[p]=g)),t.result}},simulate:function(t,e,r){var a=v.extend(new v.Event,r,{type:t,isSimulated:!0});v.event.trigger(a,null,e)}});v.fn.extend({trigger:function(t,e){return this.each(function(){v.event.trigger(t,e,this)})},triggerHandler:function(t,e){var r=this[0];if(r)return v.event.trigger(t,e,r,!0)}});ze.focusin||v.each({focus:"focusin",blur:"focusout"},function(t,e){var r=function(a){v.event.simulate(e,a.target,v.event.fix(a))};v.event.special[e]={setup:function(){var a=this.ownerDocument||this.document||this,s=Ce.access(a,e);s||a.addEventListener(t,r,!0),Ce.access(a,e,(s||0)+1)},teardown:function(){var a=this.ownerDocument||this.document||this,s=Ce.access(a,e)-1;s?Ce.access(a,e,s):(a.removeEventListener(t,r,!0),Ce.remove(a,e))}}});Rm=/\[\]$/;v.param=function(t,e){var r,a=[],s=function(d,g){var m=kr(g)?g():g;a[a.length]=encodeURIComponent(d)+"="+encodeURIComponent(m==null?"":m)};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!v.isPlainObject(t))v.each(t,function(){s(this.name,this.value)});else for(r in t)ds(r,t[r],e,s);return a.join("&")};v.offset={setOffset:function(t,e,r){var a,s,d,g,m,p,b,k=v.css(t,"position"),F=v(t),G={};k==="static"&&(t.style.position="relative"),m=F.offset(),d=v.css(t,"top"),p=v.css(t,"left"),b=(k==="absolute"||k==="fixed")&&(d+p).indexOf("auto")>-1,b?(a=F.position(),g=a.top,s=a.left):(g=parseFloat(d)||0,s=parseFloat(p)||0),kr(e)&&(e=e.call(t,r,v.extend({},m))),e.top!=null&&(G.top=e.top-m.top+g),e.left!=null&&(G.left=e.left-m.left+s),"using"in e?e.using.call(t,G):F.css(G)}};v.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(s){v.offset.setOffset(this,t,s)});var e,r,a=this[0];if(a)return a.getClientRects().length?(e=a.getBoundingClientRect(),r=a.ownerDocument.defaultView,{top:e.top+r.pageYOffset,left:e.left+r.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,e,r,a=this[0],s={top:0,left:0};if(v.css(a,"position")==="fixed")e=a.getBoundingClientRect();else{for(e=this.offset(),r=a.ownerDocument,t=a.offsetParent||r.documentElement;t&&(t===r.body||t===r.documentElement)&&v.css(t,"position")==="static";)t=t.parentNode;t&&t!==a&&t.nodeType===1&&(s=v(t).offset(),s.top+=v.css(t,"borderTopWidth",!0),s.left+=v.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-v.css(a,"marginTop",!0),left:e.left-s.left-v.css(a,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&v.css(t,"position")==="static";)t=t.offsetParent;return t||wn})}});v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var r=e==="pageYOffset";v.fn[t]=function(a){return Zn(this,function(s,d,g){var m;if(xn(s)?m=s:s.nodeType===9&&(m=s.defaultView),g===void 0)return m?m[e]:s[d];m?m.scrollTo(r?m.pageXOffset:g,r?g:m.pageYOffset):s[d]=g},t,a,arguments.length)}});v.each(["top","left"],function(t,e){v.cssHooks[e]=ed(ze.pixelPosition,function(r,a){if(a)return a=Xn(r,e),us.test(a)?v(r).position()[e]+"px":a})});v.each({Height:"height",Width:"width"},function(t,e){v.each({padding:"inner"+t,content:e,"":"outer"+t},function(r,a){v.fn[a]=function(s,d){var g=arguments.length&&(r||typeof s!="boolean"),m=r||(s===!0||d===!0?"margin":"border");return Zn(this,function(p,b,k){var F;return xn(p)?a.indexOf("outer")===0?p["inner"+t]:p.document.documentElement["client"+t]:p.nodeType===9?(F=p.documentElement,Math.max(p.body["scroll"+t],F["scroll"+t],p.body["offset"+t],F["offset"+t],F["client"+t])):k===void 0?v.css(p,b,m):v.style(p,b,k,m)},e,g?s:void 0,g)}})});v.fn.extend({bind:function(t,e,r){return this.on(t,null,e,r)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,r,a){return this.on(e,t,r,a)},undelegate:function(t,e,r){return arguments.length===1?this.off(t,"**"):this.off(e,t||"**",r)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}});v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){v.fn[e]=function(r,a){return arguments.length>0?this.on(e,null,r,a):this.trigger(e)}});Pm=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;v.isArray=Array.isArray;v.parseJSON=JSON.parse;v.nodeName=bn;v.isFunction=kr;v.isWindow=xn;v.camelCase=br;v.type=to;v.now=Date.now;v.isNumeric=function(t){var e=v.type(t);return(e==="number"||e==="string")&&!isNaN(t-parseFloat(t))};v.trim=function(t){return t==null?"":(t+"").replace(Pm,"")};Bm=window.jQuery,$m=window.$;v.noConflict=function(t){return window.$===v&&(window.$=$m),t&&window.jQuery===v&&(window.jQuery=Bm),v};typeof noGlobal=="undefined"&&(window.jQuery=window.$=v);B=v});var cr,An=re(()=>{cr=()=>{let t="";try{t=location.search,t[0]=="?"&&(t=t.slice(1))}catch(a){}let e=t.split("&"),r={};for(let a of e){let s=a.split("=");s.length==2?r[s[0]]=decodeURIComponent(s[1]):r[s[0]]=!0}return r}});function tf(t,e){if(e!=null){if(typeof t!="string")throw new Error("Must pass a string for an EventHandler name");if(typeof e!="function")throw new Error("Must pass a function for an EventHandler callback");return{bindings:{onMount:function(r){r[t.toLowerCase()]=function(a){a&&e.apply(this,arguments)}}}}}}var Od,Id=re(()=>{Od=tf});function rf(t){var e=function(){return t};return e.isDCGViewConst=!0,e}function nf(t){return!!(typeof t=="function"&&t.isDCGViewConst)}var qe,Xt=re(()=>{qe={isConst:nf,makeConst:rf}});function af(t,e,r){r===void 0?t.removeAttribute(e):t.setAttribute(e,r+"")}var bo,xs=re(()=>{bo={update:af}});function of(t,e){var r=e(),a;return qe.isConst(e)||(a={onUpdate:function(s){var d=e();d!==r&&(r=d,bo.update(s,t,d))}}),{value:r,bindings:a}}var Md,Nd=re(()=>{Xt();xs();Md=of});function sf(t){return t[0]==="o"&&t[1]==="n"&&t[2].toUpperCase()===t[2]}var qd,_d=re(()=>{qd=sf});function cf(t,e){Cs[t]=e}function lf(t){return Cs.hasOwnProperty(t)}function df(t,e){var r=Cs[t];return r(e)}var Cs,da,Ds=re(()=>{Cs={};da={isCustomAttribute:lf,add:cf,parse:df}});function uf(t,e,r){var a=t._bindings[e];a?a.push(r):t._bindings[e]=[r]}function pf(t,e){var r=t._bindings[e];if(r)for(var a=r.length,s=0;s<a;s++)r[s]()}var lt,ua=re(()=>{lt={add:uf,invoke:pf}});function gf(t){Ln.push(t)}function hf(t){var e=Ln;Ln=[];for(var r=0;r<e.length;r++){var a=e[r];a!==t&&Ln.push(a)}}function mf(t,e){try{if(e&&e._isDCGView){t+=" ["+e._viewName+"]";var r=e.traceViewHierarchy();r.ancestors.length>0&&(t+=`
View Hierarchy:
`+r.formatted)}throw new Error(t)}catch(s){console.warn(s);for(var a=0;a<Ln.length;a++)Ln[a](s)}}var Ln,lr,pa=re(()=>{Ln=[];lr={warn:mf,addWarningHandler:gf,removeWarningHandler:hf}});function bf(t,e,r){var a=!1;return function(){if(a){lr.warn(t+" is a one-time binding but was called multiple times",r);return}a=!0,e.apply(this,arguments)}}function wf(t,e,r){var a=r.bindings;if(a)for(var s in a){var d=a[s];s in ff&&(d=d.bind(null,e)),s in yf&&(d=bf(s,d,t)),lt.add(t,s,d)}}function vf(t,e){if(typeof e!="function")throw new Error('The "'+t+'" attr must be a function. It is: '+JSON.stringify(e));return da.isCustomAttribute(t)?da.parse(t,e):qd(t)?Od(t,e):Md(t,e)}function kf(t,e,r){if(e)for(var a in e){var s=vf(a,e[a]);if(s){var d=s.value;d!==void 0&&r.setAttribute(a,d),s.bindings&&wf(t,r,s)}}}var ff,yf,Rd,Pd=re(()=>{Id();Nd();_d();Ds();ua();pa();ff={onMount:!0,didMount:!0,willUnmount:!0,willUpdate:!0,onUpdate:!0,didUpdate:!0},yf={willMount:!0,onMount:!0,didMount:!0,willUnmount:!0,onUnmount:!0,didUnmount:!0};Rd=kf});function xf(){Bd=!0}function Cf(t,e,r){if(typeof r!="function")throw new Error("bindText expects a function");var a=r();a==null&&(a="");var s=document.createTextNode(a);if(Bd){var d=document.createElement("span");d.appendChild(s),e.appendChild(d)}else e.appendChild(s);lt.add(t,"onUpdate",function(){var g=r();g==null&&(g=""),a!==g&&(s.nodeValue=g,a=g)})}var Bd,wo,Es=re(()=>{ua();Bd=!1;wo={bindText:Cf,enableSpanWrapping:xf}});function $d(t,e){var r=document.createTextNode(e);t.appendChild(r)}function Ss(t,e,r){if(this.tagName=t,this.attrs=e,this.children=r,Array.isArray(this.children))for(var a=0;a<this.children.length;a++){var s=typeof this.children[a];s!=="object"&&s!=="function"||(this.children[a]._parentElement=this)}}var Df,Ud,Kd=re(()=>{Pd();Es();Xt();pa();Df=wo.bindText;Ss.prototype._isDCGElement=!0;Ss.prototype.renderToDocFrag=function(t,e){if(this._domNode)throw new Error("Cannot remount a DCGElement");var r=this.children,a=document.createElement(this.tagName);this._domNode=a,Rd(e,this.attrs,a),t.appendChild(a);for(var s=r.length,d=0;d<s;d++){var g=r[d];g._isDCGElement?g.renderToDocFrag(a,e):qe.isConst(g)?$d(a,g()):typeof g=="function"?Df(e,a,g):(lr.warn("Text should be a const or a getter: "+JSON.stringify(g),e),$d(a,g))}};Ud=Ss});function Wd(t,e){if(t!=null)if(Array.isArray(t))for(var r=0;r<t.length;r++)Wd(t[r],e);else e.push(t)}function Ef(t,e){for(var r=[],a=arguments.length-1,s=2;s<=a;s++)Wd(arguments[s],r);if(typeof t=="string")return new Ud(t,e,r);if(t&&t._isDCGViewClass)return new t(e,r);throw new Error("createElement expects a String or DCGViewClass")}var dr,On=re(()=>{Kd();dr=Ef});function Sf(){for(var t=this._element;t._isDCGView;)t=t._element;return t._domNode}function Tf(t,e){if(e&&e._childViews.push(this),this.__generatedHTMLBefore)throw new Error("Cannot remount a DCGView");if(this.__generatedHTMLBefore=!0,this._element.renderToDocFrag(t,this),Array.isArray(this._siblingElements))for(var r=0;r<this._siblingElements.length;r++)this._siblingElements[r].renderToDocFrag(t,this)}function Gf(t,e,r){if(!t||!t._isDCGViewClass)throw new Error("Must pass a DCGView class to be mounted");if(!e||e.nodeType!==1)throw new Error("Must pass an HTMLElement for the node");if(e._mountedDCGView)throw new Error("This node is already mounted by a view");var a=new t(r),s=document.createDocumentFragment();return a.renderToDocFrag(s),e.innerHTML="",Ts(a),e._mountedDCGView=a,e.appendChild(s),Gs(a),Vs(a),a}function Vf(t){var e=t._mountedDCGView;if(!e)throw new Error("This node is not mounted by a DCGView");As(e),t.innerHTML="",delete t._mountedDCGView,Fs(e),Ls(e)}function Ts(t){t.willMount&&t.willMount(),lt.invoke(t,"willMount"),t._childViews.forEach(Ts)}function Gs(t){t._isMounted=!0,t.onMount&&t.onMount(),lt.invoke(t,"onMount"),t._childViews.forEach(Gs)}function Vs(t){t.didMount&&t.didMount(),lt.invoke(t,"didMount"),t._childViews.forEach(Vs)}function As(t){t.willUnmount&&t.willUnmount(),lt.invoke(t,"willUnmount"),t._childViews.forEach(As)}function Fs(t){t._isMounted=!1,t._childViews.forEach(Fs),lt.invoke(t,"onUnmount"),t.onUnmount&&t.onUnmount()}function Ls(t){t._childViews.forEach(Ls),lt.invoke(t,"didUnmount"),t.didUnmount&&t.didUnmount()}function Af(t,e){var r=document.createDocumentFragment();return t.renderToDocFrag(r,e),r.firstChild}var Q,Nr=re(()=>{ua();Q={renderToDocFrag:Tf,findRootNode:Sf,createNodeForView:Af,willMount:Ts,onMount:Gs,didMount:Vs,willUnmount:As,onUnmount:Fs,didUnmount:Ls,mountToNode:Gf,unmountFromNode:Vf}});function Ff(){if(!this._isMounted)return lr.warn("Trying to update view that is not mounted. Ignoring update.",this);if(!(this.shouldUpdate&&!this.shouldUpdate())){if(this.willUpdate&&this.willUpdate(),lt.invoke(this,"willUpdate"),lt.invoke(this,"onUpdate"),this.onUpdate&&this.onUpdate(),this.overrideChildUpdates)this.overrideChildUpdates();else for(var t=this._childViews,e=t.length,r=0;r<e;r++)t[r].update();lt.invoke(this,"didUpdate"),this.didUpdate&&this.didUpdate()}}var zd,Hd=re(()=>{ua();pa();zd={update:Ff}});function Lf(t){var e=arguments.length;if(e<2)return t;for(var r=1;r<e;r++)for(var a=arguments[r],s=Object.keys(a),d=s.length,g=0;g<d;g++){var m=s[g];t[m]=a[m]}return t}var ur,In=re(()=>{ur=Lf});function Of(t){if(!t)throw new Error("must pass a spec to DCGView.createClass");if(typeof t.template!="function")throw new Error("must pass a template function to DCGView.createClass");var e=function(a,s){this._viewName=t.viewName||(this.constructor?this.constructor.name:"Anonymous DCGView"),this._setupProps(a,s),this.init&&this.init(),this._callTemplate()};e.prototype._setupProps=function(a,s){if(a){for(var d in a){var g=a[d];if(typeof g!="function"&&g!==void 0)throw new Error('The "'+d+'" prop must be a function. It is: '+JSON.stringify(g))}this.props=a}else this.props={};this.children=s,this._childViews=[],this._bindings={}},e.prototype._callTemplate=function(){if(this._element=this.template(),!this._element||!this._element._isDCGElement)throw new Error("template() must return a DCGElement");this._element._parentElement=this},e.prototype.bindFn=function(a){return a.bind(this)},e.prototype.findRootNode=Q.findRootNode,e.prototype.renderToDocFrag=Q.renderToDocFrag,e.prototype.const=qe.makeConst,e.prototype.spread=ur,e.prototype.createElement=dr,e.prototype.update=zd.update,e.prototype.traceViewHierarchy=function(){for(var a=[],s=this._parentElement;s;s=s._parentElement)a.unshift(s);var d=a.concat([this]).filter(function(g){return!(!g._isDCGView||g._isDCGSwitch&&g._parentElement&&g._parentElement._isDCGIf||g._isDCGIfDefinedWrapper||g._isDCGSwitchWrapper||g._isDCGSwitchUnionWrapper)}).map(function(g,m){for(var p="";m-- >0;)p+="  ";return p+"<"+g._viewName+">"}).join(`
`);return{ancestors:a,formatted:d}};for(var r in t)if(t.hasOwnProperty(r))if(!e.prototype.hasOwnProperty(r))e.prototype[r]=t[r];else throw new Error("Cannot override the "+r+"() method");return e._isDCGViewClass=!0,e.prototype._isDCGView=!0,e.prototype._isDCGElement=!0,e}var ye,Nt=re(()=>{On();Nr();Hd();Xt();In();ye=Of});function Yd(t){var e=t(),r=typeof e;if(r==="string")return e;if(!r||r!=="object")throw new Error("Unsupported type returned from style getter: "+r);var a="";for(var s in e){var d=e[s];e.hasOwnProperty(s)&&d!=null&&(a?a+=";"+s+":"+d:a=s+":"+d)}return a}function If(t){var e,r=Yd(t);return qe.isConst(t)||(e={onUpdate:function(a){var s=Yd(t);r!==s&&(bo.update(a,"style",s),r=s)}}),{value:r,bindings:e}}var jd,Jd=re(()=>{Xt();xs();jd=If});function Qd(t){var e=t(),r=typeof e;if(r==="string")return e;if(!r||r!=="object")throw new Error("Unsupported type returned from class getter: "+r);var a="";for(var s in e)if(e.hasOwnProperty(s)){var d=e[s];d&&(a?a+=" "+s:a=s)}return a}function Mf(t,e,r){for(var a=[],s=t.className.replace(Xd,"").split(Zd),d=e.replace(Xd,"").split(Zd),g={},m=d.length-1;m>=0;m--)g[d[m]]=!0;var p=s.length;for(m=0;m<p;m++){var b=s[m];g.hasOwnProperty(b)||a.push(b)}return r?a.length?r+" "+a.join(" "):r:a.join(" ")}function Nf(t){var e,r=Qd(t);return qe.isConst(t)||(e={onUpdate:function(a){var s=Qd(t);r!==s&&(a.className===r?(a.className=s,r=s):(a.className=Mf(a,r,s),r=s))}}),{value:r,bindings:e}}var Xd,Zd,eu,tu=re(()=>{Xt();Xd=/^\s+|\s+$/g,Zd=/\s+/;eu=Nf});function qf(t){return function(e){if(typeof e!="function")throw new Error("The "+t+" attribute expects a function for the value");if(qe.isConst(e))throw new Error("The "+t+" attribute does not expect a const for the value");var r={bindings:{}};return r.bindings[t]=e,r}}var pr,ru=re(()=>{Xt();pr=qf});function nu(t){var e=t.length,r=new Array(e),a=new Array(e+1),s=0,d,g;for(g=0;g<e;g++){if(t[a[s]]<t[g])d=s+1;else{for(var m=1,p=s-1;m<=p;){var b=Math.ceil((m+p)/2);t[a[b]]<t[g]?m=b+1:p=b-1}d=m}r[g]=a[d-1],a[d]=g,d>s&&(s=d)}var k=new Array(s),F=a[s];for(g=s-1;g>=0;g--)k[g]=t[F],F=r[F];return k}var au=re(()=>{});function _f(t,e){var r={},a,s,d=[],g=[];for(a=0;a<e.length;a++)s=e[a],r[s]=a;for(a=0;a<t.length;a++)s=t[a],r[s]===void 0&&d.push(s);var m=[];for(a=0;a<t.length;a++){s=t[a];var p=r[s];p!==void 0&&m.push(p)}var b=nu(m),k={};for(a=0;a<b.length;a++)s=e[b[a]],k[s]=!0;for(a=e.length-1;a>=0;a--)s=e[a],!k[s]&&g.push({key:s,beforeKey:e[a+1]});return{removes:d,inserts:g}}var vo,Os=re(()=>{au();vo=_f});function $f(t,e){return dr(Bf,{items:t,keyFunction:e.key,viewFunction:e.item})}var Rf,Pf,Bf,ou,iu=re(()=>{Nt();Os();On();Nr();Rf=ye({viewName:"EachPlaceholder",_isDCGEachPlaceholder:!0,template:function(){return this.createElement("div",{style:this.const("display: none")})}}),Pf=ye({viewName:"EachWrapper",_isDCGEachWrapper:!0,template:function(){return this.children[0]}}),Bf=ye({viewName:"Each",_isDCGEach:!0,getKeys:function(){this._keyToItem={};var t=this.props.items(),e=this.props.keyFunction?t.map(this.props.keyFunction):t.slice(0);if(!this._chosenKeyType&&e.length&&(this._chosenKeyType=typeof e[0],this._chosenKeyType!=="string"&&this._chosenKeyType!=="number"))throw new Error("The key: "+JSON.stringify(e[0])+" is not a string or number");for(var r=0;r<e.length;r++){var a=e[r];if(typeof a!==this._chosenKeyType)throw new Error("Keys must be the same type. "+JSON.stringify(a)+" is not a "+this._chosenKeyType);if(a in this._keyToItem)throw new Error("The key: "+JSON.stringify(a)+" is not unique");this._keyToItem[a]=t[r]}return e},createViewForKey:function(t){var e=this._keyToItem[t],r=this.props.viewFunction.call(this,e,t),a=r;return a._isDCGView||(a=this.createElement(Pf,null,r)),this._keyToView[t]=a,a},template:function(){this._keyToView={},this._keys=this.getKeys(),this._element=this.createElement(Rf,null),this._siblingElements=[];for(var t=0;t<this._keys.length;t++){var e=this._keys[t],r=this.createViewForKey(e);r._parentElement=this._element._parentElement,this._siblingElements.push(r)}return this._element},detachAllRemovedViews:function(){for(var t=this._childViews,e=0,r=t.length,a,s=0;s<r;s++)a=t[s],a._will_be_unmounted_?e++:t[s-e]=a;t.splice(r-e,e)},overrideChildUpdates:function(){var t=this._keys,e=this.getKeys();this._keys=e;var r=this._element.findRootNode().parentNode,a,s,d,g,m,p,b=vo(t,e),k=[];for(a=b.removes.length-1;a>=0;a--)p=b.removes[a],k.push(this._keyToView[p]);for(k.forEach(Q.willUnmount),a=0;a<b.removes.length;a++)p=b.removes[a],s=this._keyToView[p],delete this._keyToView[p],s._will_be_unmounted_=!0,r.removeChild(s.findRootNode());k.length>0&&this.detachAllRemovedViews(),k.forEach(Q.onUnmount),k.forEach(Q.didUnmount);var F=[];for(a=b.inserts.length-1;a>=0;a--)p=b.inserts[a].key,p in this._keyToView||(s=this.createViewForKey(p),F.push(s),Q.createNodeForView(s,this));for(F.forEach(Q.willMount),a=0;a<b.inserts.length;a++)m=b.inserts[a],d=this._keyToView[m.key].findRootNode(),m.beforeKey!==void 0?g=this._keyToView[m.beforeKey].findRootNode():g=null,r.insertBefore(d,g);F.forEach(Q.onMount),F.forEach(Q.didMount);var G=this._childViews,U=G.length-F.length;for(a=0;a<U;a++)G[a].update()}});ou=$f});var Uf,Kf,su,cu=re(()=>{Nt();Os();Xt();Nr();Uf=ye({viewName:"ForWrapper",template:function(){return this.children[0]}}),Kf=ye({viewName:"For",_isDCGFor:!0,getKeys:function(){this._keyToItem={};var t=this.props.each();if(!Array.isArray(t))throw new Error("<For each={}> must return an array");var e=this.props.key?t.map(this.props.key):t.slice(0);if(!this._chosenKeyType&&e.length&&(this._chosenKeyType=typeof e[0],this._chosenKeyType!=="string"&&this._chosenKeyType!=="number"))throw new Error("The key: "+JSON.stringify(e[0])+" is not a string or number");for(var r=0;r<e.length;r++){var a=e[r];if(typeof a!==this._chosenKeyType)throw new Error("Keys must be the same type. "+JSON.stringify(a)+" is not a "+this._chosenKeyType);if(a in this._keyToItem)throw new Error("The key: "+JSON.stringify(a)+" is not unique");this._keyToItem[a]=t[r]}return e},createViewForKey:function(t){var e=this._keyToItem[t],r=this._viewFunction.call(this,e,t),a=r;return a._isDCGView||(a=this.createElement(Uf,null,r)),this._keyToView[t]=a,a},template:function(){if(this._keyToView={},typeof this.props.each!="function")throw new Error("<For each={}> must be a function");if(this.children.length!==1)throw new Error("<For> expects a single child. You passed "+this.children.length);var t=this.children[0];if(!t||!t._isDCGElement)throw new Error("<For> expects the root node to be a DCGElement. You passed "+JSON.stringify(t));if(t._isDCGView)throw new Error("<For> expects the root node to not be a DCGView. Pass in something like <div> or <span>");if(t.children.length!==1)throw new Error("<For> expects a root node with a single child. You passed "+t.children.length);if(this._viewFunction=t.children[0],this._viewFunction&&this._viewFunction._isDCGElement)throw new Error("<For> expects a function that constructs a DCGElement. You passed a DCGElement directly");if(typeof this._viewFunction!="function"){var e=JSON.stringify(this._viewFunction);throw new Error("<For> expects a function that constructs a DCGElement. You passed "+e)}if(qe.isConst(this._viewFunction))throw new Error("<For> expects a function that constructs a DCGElement. You passed a constant");this._keys=this.getKeys();for(var r=[],a=0;a<this._keys.length;a++){var s=this._keys[a],d=this.createViewForKey(s);d._parentElement=this,r.push(d)}return t.children=r,t},detachAllRemovedViews:function(){for(var t=this._childViews,e=0,r=t.length,a,s=0;s<r;s++)a=t[s],a._will_be_unmounted_?e++:t[s-e]=a;t.splice(r-e,e)},overrideChildUpdates:function(){var t=this._keys,e=this.getKeys();this._keys=e;var r=this.findRootNode(),a,s,d,g,m,p,b=vo(t,e),k=[];for(a=b.removes.length-1;a>=0;a--)p=b.removes[a],k.push(this._keyToView[p]);for(k.forEach(Q.willUnmount),a=0;a<b.removes.length;a++)p=b.removes[a],s=this._keyToView[p],delete this._keyToView[p],s._will_be_unmounted_=!0,r.removeChild(s.findRootNode());k.length>0&&this.detachAllRemovedViews(),k.forEach(Q.onUnmount),k.forEach(Q.didUnmount);var F=[];for(a=b.inserts.length-1;a>=0;a--)p=b.inserts[a].key,p in this._keyToView||(s=this.createViewForKey(p),F.push(s),Q.createNodeForView(s,this));for(F.forEach(Q.willMount),a=0;a<b.inserts.length;a++)m=b.inserts[a],d=this._keyToView[m.key].findRootNode(),m.beforeKey!==void 0?g=this._keyToView[m.beforeKey].findRootNode():g=null,r.insertBefore(d,g);F.forEach(Q.onMount),F.forEach(Q.didMount);var G=this._childViews,U=G.length-F.length;for(a=0;a<U;a++)G[a].update()}}),su=Kf});var Wf,zf,ko,Is=re(()=>{Nt();Xt();Nr();Wf=ye({viewName:"SwitchWrapper",_isDCGSwitchWrapper:!0,template:function(){return this.children[0]}}),zf=ye({viewName:"Switch",_isDCGSwitch:!0,updateKey:function(){this._key=this.props.key()},createView:function(){var t=this._viewFunction(this._key);t==null&&(t=this.createElement("div",{style:this.const("display: none")}));var e=this.createElement(Wf,null,t);return e._parentElement=this,e},template:function(){if(this._key=void 0,typeof this.props.key!="function")throw new Error("<Switch key={}> must be a function");if(this.children.length!==1)throw new Error("<Switch> expects a single child. You passed "+this.children.length);if(this._viewFunction=this.children[0],this._viewFunction&&this._viewFunction._isDCGElement)throw new Error("<Switch> expects a function that constructs a DCGElement. You passed a DCGElement directly");if(typeof this._viewFunction!="function"){var t=JSON.stringify(this._viewFunction);throw new Error("<Switch> expects a function that constructs a DCGElement. You passed "+t)}if(qe.isConst(this._viewFunction))throw new Error("<Switch> expects a function that constructs a DCGElement. You passed a constant");return this.updateKey(),this.createView()},overrideChildUpdates:function(){var t=this._key;this.updateKey();var e=this._key;if(t===e)this._element.update();else{var r=this.findRootNode(),a=document.createTextNode("");r.parentNode.insertBefore(a,r),Q.willUnmount(this._element),this._childViews=[],r.parentNode.removeChild(r),Q.onUnmount(this._element),Q.didUnmount(this._element),this._element=this.createView();var s=Q.createNodeForView(this._element,this);Q.willMount(this._element),a.parentNode.insertBefore(s,a),a.parentNode.removeChild(a),Q.onMount(this._element),Q.didMount(this._element)}}}),ko=zf});function lu(t,e,r){return dr(Yf,{getCase:function(){var a=e();return t?a&&a[t]:a},buildChildView:function(a){var s=r[a];if(s)return s(e)}})}function jf(t,e){return typeof t=="string"?lu.bind(this,t,e):lu(void 0,t,e)}var Hf,Yf,xo,Ms=re(()=>{Nt();Nr();On();Hf=ye({viewName:"SwitchUnionWrapper",_isDCGSwitchUnionWrapper:!0,template:function(){return this.children[0]}}),Yf=ye({viewName:"SwitchUnion",_isDCGSwitchUnion:!0,updateCase:function(){this._case=this.props.getCase()},createView:function(){var t=this.props.buildChildView(this._case);t==null&&(t=this.createElement("div",{style:this.const("display: none")}));var e=this.createElement(Hf,null,t);return e._parentElement=this,e},template:function(){return this._case=void 0,this.updateCase(),this.createView()},overrideChildUpdates:function(){var t=this._case;this.updateCase();var e=this._case;if(t===e)this._element.update();else{var r=this.findRootNode(),a=document.createTextNode("");r.parentNode.insertBefore(a,r),Q.willUnmount(this._element),this._childViews=[],r.parentNode.removeChild(r),Q.onUnmount(this._element),Q.didUnmount(this._element),this._element=this.createView();var s=Q.createNodeForView(this._element,this);Q.willMount(this._element),a.parentNode.insertBefore(s,a),a.parentNode.removeChild(a),Q.onMount(this._element),Q.didMount(this._element)}}});xo=jf});var Jf,du,uu=re(()=>{Nt();Xt();Is();Jf=ye({viewName:"If",_isDCGIf:!0,template:function(){if(typeof this.props.predicate!="function")throw new Error("<If predicate={}> must be a function");if(this.children.length!==1)throw new Error("<If> expects a single child. You passed "+this.children.length);if(this._viewFunction=this.children[0],this._viewFunction&&this._viewFunction._isDCGElement)throw new Error("<If> expects a function that constructs a DCGElement. You passed a DCGElement directly");if(typeof this._viewFunction!="function"){var t=JSON.stringify(this._viewFunction);throw new Error("<If> expects a function that constructs a DCGElement. You passed "+t)}if(qe.isConst(this._viewFunction))throw new Error("<If> expects a function that constructs a DCGElement. You passed a constant");var e=(function(){return!!this.props.predicate()}).bind(this),r=(function(a){if(a)return this._viewFunction()}).bind(this);return this.createElement(ko,{key:e},r)}}),du=Jf});function Zf(t,e){return dr(Xf,{isDefined:function(){var r=t();return r!=null},buildChildView:function(){return e(t)}})}var Qf,Xf,pu,gu=re(()=>{Nt();Nr();On();Qf=ye({viewName:"IfDefinedWrapper",_isDCGIfDefinedWrapper:!0,template:function(){return this.children[0]}}),Xf=ye({viewName:"IfDefined",_isDCGIfDefined:!0,updateIsDefined:function(){this._isDefined=this.props.isDefined()},createView:function(){var t;this._isDefined&&(t=this.props.buildChildView()),t==null&&(t=this.createElement("div",{style:this.const("display: none")}));var e=this.createElement(Qf,null,t);return e._parentElement=this,e},template:function(){return this._isDefined=void 0,this.updateIsDefined(),this.createView()},overrideChildUpdates:function(){var t=this._isDefined;this.updateIsDefined();var e=this._isDefined;if(t===e)this._element.update();else{var r=this.findRootNode(),a=document.createTextNode("");r.parentNode.insertBefore(a,r),Q.willUnmount(this._element),this._childViews=[],r.parentNode.removeChild(r),Q.onUnmount(this._element),Q.didUnmount(this._element),this._element=this.createView();var s=Q.createNodeForView(this._element,this);Q.willMount(this._element),a.parentNode.insertBefore(s,a),a.parentNode.removeChild(a),Q.onMount(this._element),Q.didMount(this._element)}}});pu=Zf});function ey(t,e){var r=xo(function(){return t()?"true":"false"},e);return r._viewName="IfElse",r}var hu,mu=re(()=>{Ms();hu=ey});var fu,yu=re(()=>{Nt();In();fu=ye({viewName:"Textarea",computeValue:function(){var t=this.props.value();return t==null?"":t+""},template:function(){if(!this.props.value)throw new Error('<Textarea> expects a "value={}" prop');if(!this.props.onInput)throw new Error('<Textarea> expects an "onInput={}" prop');var t=ur({},this.props,{onInput:(function(e){this.props.onInput(e.target.value),this._isMounted&&this.update()}).bind(this)});return this.props.disabled&&(t.disabled=(function(){if(this.props.disabled())return!0}).bind(this)),delete t.value,this.createElement("textarea",t,this.const(this.computeValue()))},didUpdate:function(){this.rootDOM||(this.rootDOM=this.findRootNode());var t=this.computeValue();this.rootDOM.value!==t&&(this.rootDOM.value=t)}})});var bu,wu=re(()=>{Nt();In();bu=ye({viewName:"Input",computeValue:function(){var t=this.props.value();return t==null?"":t+""},template:function(){if(!this.props.value)throw new Error('<Input> expects a "value={}" prop');if(!this.props.onInput)throw new Error('<Input> expects an "onInput={}" prop');var t=ur({},this.props,{value:this.const(this.computeValue()),onInput:(function(e){this.props.onInput(e.target.value),this._isMounted&&this.update()}).bind(this)});return this.props.onEnterPressed&&(t.onKeypress=(function(e){e.which===13&&this.props.onEnterPressed()}).bind(this)),this.props.disabled&&(t.disabled=(function(){if(this.props.disabled())return!0}).bind(this)),t.hasOwnProperty("tabindex")||(t.tabindex=(function(){return this.props.disabled&&this.props.disabled()?"-1":"0"}).bind(this)),this.createElement("input",t)},didUpdate:function(){this.rootDOM||(this.rootDOM=this.findRootNode());var t=this.computeValue();this.rootDOM.value!==t&&(this.rootDOM.value=t)}})});var vu,ku=re(()=>{Nt();In();vu=ye({viewName:"Checkbox",computeChecked:function(){return!!this.props.checked()},template:function(){if(!this.props.checked)throw new Error('<Checkbox> expects a "checked={}" prop');if(!this.props.onChange)throw new Error('<Checkbox> expects an "onChange={}" prop');var t=ur({},this.props,{type:this.const("checkbox"),checked:this.const(this.computeChecked()?"checked":void 0),onChange:(function(e){this.props.onChange(e.target.checked),this._isMounted&&this.update()}).bind(this)});return this.createElement("input",t)},didUpdate:function(){this.rootDOM||(this.rootDOM=this.findRootNode());var t=this.computeChecked();this.rootDOM.checked!==t&&(this.rootDOM.checked=t)}})});var xu,Cu=re(()=>{iu();cu();Is();Ms();uu();gu();mu();yu();wu();ku();xu={Each:ou,For:su,Switch:ko,SwitchUnion:xo,If:du,IfDefined:pu,IfElse:hu,Textarea:fu,Input:bu,Checkbox:vu}});var Du,Eu=re(()=>{Nt();Du=ye({template:function(){}})});var ty,qt,Zt,Su=re(()=>{On();Nt();Nr();In();Xt();Ds();Jd();tu();ru();Cu();pa();Es();Eu();ty=wo.enableSpanWrapping,qt={createElement:dr,createClass:ye,mountToNode:Q.mountToNode,unmountFromNode:Q.unmountFromNode,spread:ur,const:qe.makeConst,isConst:qe.isConst,addCustomAttribute:da.add,Components:xu,addWarningHandler:lr.addWarningHandler,removeWarningHandler:lr.removeWarningHandler,_warn:lr.warn,enableSpanWrapping:ty,Class:Du};qt.addCustomAttribute("style",jd);qt.addCustomAttribute("class",eu);qt.addCustomAttribute("willMount",pr("willMount"));qt.addCustomAttribute("onMount",pr("onMount"));qt.addCustomAttribute("didMount",pr("didMount"));qt.addCustomAttribute("willUnmount",pr("willUnmount"));qt.addCustomAttribute("onUnmount",pr("onUnmount"));qt.addCustomAttribute("didUnmount",pr("didUnmount"));qt.addCustomAttribute("willUpdate",pr("willUpdate"));qt.addCustomAttribute("onUpdate",pr("onUpdate"));qt.addCustomAttribute("didUpdate",pr("didUpdate"));Zt=qt});function Tu(t,e){Co&&Co.notify(t,e)}function Do(t,e,r,a){if(e){e=A({},e);for(var s in e)try{e[s]=JSON.stringify(e[s],null,2)}catch(d){e[s]="[[could not stringify]]"}}Co&&Co.leaveBreadcrumb(t,e,r,a)}var Co,Eo=re(()=>{});function Gu(t,e){let a=new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(t);return a?decodeURIComponent(a[1].replace(/\+/g,"%20")):null}function ry(t,e){return new RegExp("[?|&]"+e+"(=|&|;|$)").test(t)}function ny(t,e,r){if(e!==encodeURIComponent(e))throw new Error("Programming error: parameter name should be URL-safe without encoding.");let a=encodeURIComponent(r);if(t.length){let s=t.split("#"),d=/\?/.test(t)?`${s[0]}&${e}=${a}`:`${s[0]}?${e}=${a}`;return s[1]!==void 0?`${d}#${s[1]}`:d}else return`?${e}=${a}`}function ay(t,e,r){let s=new RegExp("([?|&])"+e+"=([^&;]+?)(&|#|;|$)").exec(t);if(!s)return t;let d=s[1],g=s[2],m=`${d}${e}=${g}`,p=encodeURIComponent(r),b=`${d}${e}=${p}`;return t.replace(m,b)}function So(t,e,r){return ry(t,e)?ay(t,e,r):ny(t,e,r)}var To=re(()=>{});function dy(t){let e=cy.exec(t);if(e){let r=e[1];return!ly.test(r)}return!1}function Go(t,e){let r=cr(),a="";return e!==void 0?a=e:a=r.lang?""+r.lang:"",t===""||a===""||iy.test(t)||sy.test(t)||dy(t)?t:So(t,"lang",a)}var iy,sy,cy,ly,Vu=re(()=>{An();To();iy=/lang=[A-Za-z]+/,sy=/(cl|learn|help).desmos.com/,cy=/^(?:https?:)?(?:\/\/)?([^\s\/\?]+)/i,ly=/(^desmos\.com$)|(\.desmos.com$)/});var Au=re(()=>{});var X=Jr((DC,Fu)=>{Su();st();Eo();Vu();Au();Zt.addWarningHandler(t=>Tu(t));Zt.addCustomAttribute("href",function(t){let e=Go(t()),r={value:`${Go(t())}`,bindings:{onMount(a){if(!a.matches("a")&&!a.matches("use"))throw new Error("Cannot have an href on a non-link element.")}}};return r.bindings.onUpdate=function(a){let s=Go(t());e!==s&&(e=s,a.setAttribute("href",s))},r});Zt.addCustomAttribute("onTap",t=>({value:"",bindings:{onMount(e){B(e).on("dcg-tap",t)}}}));Zt.addCustomAttribute("ignoreRealClick",t=>({bindings:{onMount(e){B(e).on("click",function(r){t()&&r.preventDefault()})}}}));Zt.addCustomAttribute("onTapStart",t=>({bindings:{onMount(e){B(e).on("dcg-tapstart",t)}}}));Zt.addCustomAttribute("onTapMove",t=>({bindings:{onMount(e){B(e).on("dcg-tapmove",t)}}}));Zt.addCustomAttribute("onTapEnd",t=>({bindings:{onMount(e){B(e).on("dcg-tapend",t)}}}));Zt.addCustomAttribute("onLongHold",t=>({bindings:{onMount(e){B(e).on("dcg-longhold",t)}}}));Zt.addCustomAttribute("manageFocus",function(t){return t()===void 0?{}:{bindings:{onMount(e){t().shouldBeFocused()&&e.focus(),e.onfocus=function(r){t().shouldBeFocused()||t().onFocusedChanged(!0,r)},e.onblur=function(r){t().shouldBeFocused()&&t().onFocusedChanged(!1,r)}},onUpdate(e){let r=t().shouldBeFocused(),a=document.activeElement===e;r&&!a?e.focus():a&&!r&&e.blur()},willUnmount(e){e.onfocus=null,e.onblur=null}}}});Fu.exports=Zt});var ep=Jr((tD,Zu)=>{Zu.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}});var rp=Jr((rD,tp)=>{var Xy=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,Zy=ep();tp.exports=function(t){var e=0,r,a=!0,s={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return t.replace(Xy,function(d){if(d==="="){a=!0,e++;return}a?e===0?((Zy[d]||t.charAt(t.length-2)==="/")&&(s.voidElement=!0),s.name=d):(s.attrs[r]=d.replace(/^['"]|['"]$/g,""),r=void 0):(r&&(s.attrs[r]=r),r=d),e++,a=!1}),s}});var ap=Jr((nD,np)=>{var eb=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,tb=rp(),rb=Object.create?Object.create(null):{};function Zs(t,e,r,a,s){var d=e.indexOf("<",a),g=e.slice(a,d===-1?void 0:d);/^\s*$/.test(g)&&(g=" "),(!s&&d>-1&&r+t.length>=0||g!==" ")&&t.push({type:"text",content:g})}np.exports=function(e,r){r||(r={}),r.components||(r.components=rb);var a=[],s,d=-1,g=[],m={},p=!1;return e.replace(eb,function(b,k){if(p){if(b!=="</"+s.name+">")return;p=!1}var F=b.charAt(1)!=="/",G=b.indexOf("<!--")===0,U=k+b.length,fe=e.charAt(U),xe;F&&!G&&(d++,s=tb(b),s.type==="tag"&&r.components[s.name]&&(s.type="component",p=!0),!s.voidElement&&!p&&fe&&fe!=="<"&&Zs(s.children,e,d,U,r.ignoreWhitespace),m[s.tagName]=s,d===0&&a.push(s),xe=g[d-1],xe&&xe.children.push(s),g[d]=s),(G||!F||s.voidElement)&&(G||d--,!p&&fe!=="<"&&fe&&(xe=d===-1?a:g[d].children,Zs(xe,e,d,U,r.ignoreWhitespace)))}),!a.length&&e.length&&Zs(a,e,0,0,r.ignoreWhitespace),a}});var sp=Jr((aD,ip)=>{function nb(t){var e=[];for(var r in t)e.push(r+'="'+t[r]+'"');return e.length?" "+e.join(" "):""}function op(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?nb(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(op,"")+"</"+e.name+">"}}ip.exports=function(t){return t.reduce(function(e,r){return e+op("",r)},"")}});var lp=Jr((oD,cp)=>{cp.exports={parse:ap(),stringify:sp()}});var eg=Jr(Sa=>{var $=Sa&&Sa.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,s){a.__proto__=s}||function(a,s){for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(a[d]=s[d])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function a(){this.constructor=e}e.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)}}(),Ei=Sa&&Sa.__assign||function(){return Ei=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},Ei.apply(this,arguments)};(function(){var t=-1,e=1,r=Math.min,a=Math.max;function s(){}function d(l,i){if(!i)throw new Error("prayer failed: "+l)}function g(l){d("a direction was passed",l===t||l===e)}function m(l){var i=document.implementation.createHTMLDocument("");if(i.body.innerHTML=l,i.body.children.length===1)return i.body.children[0];for(var n=document.createDocumentFragment();i.body.firstChild;)n.appendChild(i.body.firstChild);return n}var p=function(i,n,o){var c;switch(i){case"svg":case"path":c=document.createElementNS("http://www.w3.org/2000/svg",i);break;default:c=document.createElement(i)}for(var u in n){var h=n[u];h!==void 0&&c.setAttribute(u,typeof h=="string"?h:String(h))}if(o)for(var f=0;f<o.length;f++)c.appendChild(o[f]);return c};p.text=function(l){return document.createTextNode(l)},p.block=function(l,i,n){var o=p(l,i,[n.html()]);return n.setDOM(o),rt.linkElementByBlockNode(o,n),o},p.entityText=function(l){var i=m(l);return d("entity parses to a single text node",i instanceof DocumentFragment&&i.childNodes.length===1&&i.childNodes[0]instanceof Text),i.childNodes[0]};function b(l,i){var n,o,c;if(typeof((n=l)===null||n===void 0?void 0:n.closest)=="function")return l.closest(i);if(!(l instanceof HTMLElement))return null;var u=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,h=l;do{if(u.call(h,i))return h;h=(c=(o=h==null?void 0:h.parentElement)!==null&&o!==void 0?o:h==null?void 0:h.parentNode)!==null&&c!==void 0?c:null}while(h!==null&&h.nodeType===1);return null}var k="\xA0",F="\u200B",G="\u02D9",U="\u2211",fe="\u220F",xe="\u2210",Ue="\u222B";function Je(l){return l.getClientRects().length?l.getBoundingClientRect():{top:0,left:0,height:0,width:0,x:0,y:0,bottom:0,right:0}}function Se(){return window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft}function Oe(){return window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}var Re=function(){var l,i;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=requestAnimationFrame,i=cancelAnimationFrame):(l=function(n){return setTimeout(n,13)},i=clearTimeout),function(n,o){var c=Date.now(),u,h=0;function f(){var L=(Date.now()-c)/n;L<=h?x():h=L,o(h,x,y)}function y(){u!==void 0&&i(u),u=void 0}function x(){y(),u=l(f)}o(n<=0?1:0,x,y)}}(),Bt=function(){function l(i){this.span=p("span",{class:"dcg-mq-aria-alert","aria-live":"assertive","aria-atomic":"true"}),this.msg="",this.items=[],this.controller=i}return l.prototype.attach=function(){var i=this.controller.container;this.span.parentNode!==i&&H(i).prepend(H(this.span))},l.prototype.queue=function(i,n){n===void 0&&(n=!1);var o="";if(i instanceof ar){var c=i.mathspeak({ignoreShorthand:!0});n&&(i.parent&&i.parent.ariaLabel&&i.ariaLabel==="block"?o=i.parent.ariaLabel+" "+c:i.ariaLabel&&(o=i.ariaLabel+" "+c)),o===""&&(o=c)}else o=i||"";return this.items.push(o),this},l.prototype.queueDirOf=function(i){return g(i),this.queue(i===t?"before":"after")},l.prototype.queueDirEndOf=function(i){return g(i),this.queue(i===t?"beginning of":"end of")},l.prototype.alert=function(i){return this.attach(),i&&this.queue(i),this.items.length&&(this.msg=this.items.join(" ").replace(/ +(?= )/g,"").trim(),this.controller.containerHasFocus()&&(this.controller.options.logAriaAlerts&&this.msg&&console.log(this.msg),this.span.textContent=this.msg)),this.clear()},l.prototype.clear=function(){return this.items.length=0,this},l}(),Ne=function(){function l(i,n){var o;arguments.length===1&&(n=i),!(!i||!n)&&(this.ends=(o={},o[t]=i,o[e]=n,o))}return l.create=function(i,n){arguments.length===1&&(n=i),d("No half-empty DOMFragments",!!i==!!n);var o=new l(i,n);return d("last is a forward sibling of first",o.isValid()),o},l.prototype.isEmpty=function(){return this.ends===void 0},l.prototype.isOneNode=function(){return!!(this.ends&&this.ends[t]===this.ends[e])},l.prototype.isValid=function(){if(!this.ends||this.ends[t]===this.ends[e])return!0;var i;return this.eachNode(function(n){return i=n}),i===this.ends[e]},l.prototype.firstNode=function(){return d("Fragment is not empty",this.ends),this.ends[t]},l.prototype.lastNode=function(){return d("Fragment is not empty",this.ends),this.ends[e]},l.prototype.children=function(){var i=this.oneNode(),n=i.firstChild,o=i.lastChild;return n&&o?new l(n,o):new l},l.prototype.join=function(i){if(!this.ends)return i;if(!i.ends)return this;for(var n=!1,o=this.ends[e].nextSibling;o;){if(o===i.ends[t]){n=!0;break}o=o.nextSibling}return d("sibling must be a forward DOM sibling of this fragment",n),new l(this.ends[t],i.ends[e])},l.prototype.oneNode=function(){return d("Fragment has a single node",this.ends&&this.ends[t]===this.ends[e]),this.ends[t]},l.prototype.oneElement=function(){var i=this.oneNode();return d("Node is an Element",i.nodeType===Node.ELEMENT_NODE),i},l.prototype.oneText=function(){var i=this.oneNode();return d("Node is Text",i.nodeType===Node.TEXT_NODE),i},l.prototype.eachNode=function(i){if(!this.ends)return this;for(var n=this.ends[e],o=this.ends[t],c=void 0;o&&(c=o.nextSibling,i(o),o!==n);o=c);return this},l.prototype.eachElement=function(i){return this.eachNode(function(n){n.nodeType===Node.ELEMENT_NODE&&i(n)}),this},l.prototype.text=function(){var i="";return this.eachNode(function(n){i+=n.textContent||""}),i},l.prototype.toNodeArray=function(){var i=[];return this.eachNode(function(n){return i.push(n)}),i},l.prototype.toElementArray=function(){var i=[];return this.eachElement(function(n){return i.push(n)}),i},l.prototype.toDocumentFragment=function(){var i=document.createDocumentFragment();return this.eachNode(function(n){return i.appendChild(n)}),i},l.prototype.insertBefore=function(i){return this.insDirOf(t,i)},l.prototype.insertAfter=function(i){return this.insDirOf(e,i)},l.prototype.append=function(i){return i.appendTo(this.oneElement()),this},l.prototype.prepend=function(i){return i.prependTo(this.oneElement()),this},l.prototype.appendTo=function(i){return this.insAtDirEnd(e,i)},l.prototype.prependTo=function(i){return this.insAtDirEnd(t,i)},l.prototype.parent=function(){if(!this.ends)return this;var i=this.ends[t].parentNode;return i?new l(i):new l},l.prototype.wrapAll=function(i){if(i.textContent="",!this.ends)return this;var n=this.ends[t].parentNode,o=this.ends[e].nextSibling;return this.appendTo(i),n&&n.insertBefore(i,o),this},l.prototype.replaceWith=function(i){var n,o=(n=this.ends)===null||n===void 0?void 0:n[e],c=o==null?void 0:o.parentNode,u=o==null?void 0:o.nextSibling;this.detach();var h=i.toDocumentFragment();return!o||!c?this:(c.insertBefore(h,u||null),this)},l.prototype.nthElement=function(i){if(this.ends&&!(i<0||i!==Math.floor(i)))for(var n=this.ends[t];n;){if(n.nodeType===Node.ELEMENT_NODE){if(i<=0)return n;i-=1}if(n===this.ends[e])return;n=n.nextSibling}},l.prototype.firstElement=function(){return this.nthElement(0)},l.prototype.lastElement=function(){if(this.ends)for(var i=this.ends[e];i;){if(i.nodeType===Node.ELEMENT_NODE)return i;if(i===this.ends[t])return;i=i.previousSibling}},l.prototype.first=function(){return new l(this.firstElement())},l.prototype.last=function(){return new l(this.lastElement())},l.prototype.eq=function(i){return new l(this.nthElement(i))},l.prototype.slice=function(i){if(!this.ends)return this;var n=this.nthElement(i);return n?new l(n,this.ends[e]):new l},l.prototype.next=function(){for(var i=this.oneNode();i;)if(i=i.nextSibling,i&&i.nodeType===Node.ELEMENT_NODE)return new l(i);return new l},l.prototype.prev=function(){for(var i=this.oneNode();i;)if(i=i.previousSibling,i&&i.nodeType===Node.ELEMENT_NODE)return new l(i);return new l},l.prototype.empty=function(){return this.eachElement(function(i){i.textContent=""}),this},l.prototype.remove=function(){return this.toDocumentFragment(),this},l.prototype.detach=function(){return this.remove()},l.prototype.insDirOf=function(i,n){var o;if(!this.ends)return this;var c=(o=n.ends)===null||o===void 0?void 0:o[i];return!c||!c.parentNode?this.detach():(Ur(i,c.parentNode,this.toDocumentFragment(),c),this)},l.prototype.insAtDirEnd=function(i,n){return this.ends?(N(i,this.toDocumentFragment(),n),this):this},l.prototype.hasClass=function(i){var n=!1;return this.eachElement(function(o){o.classList.contains(i)&&(n=!0)}),n},l.prototype.addClass=function(i){for(var n=function(f){if(!f)return"continue";o.eachElement(function(y){y.classList.add(f)})},o=this,c=0,u=i.split(/\s+/);c<u.length;c++){var h=u[c];n(h)}return this},l.prototype.removeClass=function(i){for(var n=function(f){if(!f)return"continue";o.eachElement(function(y){y.classList.remove(f)})},o=this,c=0,u=i.split(/\s+/);c<u.length;c++){var h=u[c];n(h)}return this},l.prototype.toggleClass=function(i,n){if(n===!0)return this.addClass(i);if(n===!1)return this.removeClass(i);for(var o=function(y){if(!y)return"continue";c.eachElement(function(x){x.classList.toggle(y)})},c=this,u=0,h=i.split(/\s+/);u<h.length;u++){var f=h[u];o(f)}return this},l}(),H=Ne.create;function Ur(l,i,n,o){i.insertBefore(n,l===t?o:o.nextSibling)}function N(l,i,n){l===t?n.insertBefore(i,n.firstChild):n.appendChild(i)}var W=function(){function l(i,n,o){this.init(i,n,o)}return l.prototype.init=function(i,n,o){this.parent=i,this[t]=n,this[e]=o},l.copy=function(i){return new l(i.parent,i[t],i[e])},l}();function we(l,i){var n=l[t];if(n){var o=l[e];if(o)for(o=o[e];n!==o;n=n[e]){var c=i(n);if(c===!1)break}}}function nr(l,i,n){var o=l[t];if(!o)return i;var c=l[e];if(!c)return i;for(c=c[e];o!==c;o=o[e])i=n(i,o);return i}var rt=function(){function l(){var o;this[i]=0,this[n]=0,this.parent=0,this.ends=(o={},o[t]=0,o[e]=0,o),this.id=l.uniqueNodeId()}l.uniqueNodeId=function(){return l.idCounter+=1},l.getNodeOfElement=function(o){if(o){if(!o.nodeType)throw new Error("must pass an Element to NodeBase.getNodeOfElement");var c=o;return c.mqBlockNode||c.mqCmdNode}},l.linkElementByBlockNode=function(o,c){o.mqBlockNode=c},l.linkElementByCmdNode=function(o,c){o.mqCmdNode=c},l.prototype.setEnds=function(o){this.ends=o,d("No half-empty node ends",!!this.ends[t]==!!this.ends[e])},l.prototype.getEnd=function(o){return this.ends[o]},l.prototype.toString=function(){return"{{ MathQuill Node #"+this.id+" }}"},l.prototype.setDOM=function(o){return o&&d("DOM is an element or a text node",o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE),this._el=o,this},l.prototype.domFrag=function(){return H(this._el)},l.prototype.createDir=function(o,c){g(o);var u=this;return u.html(),u.domFrag().insDirOf(o,c.domFrag()),c[o]=u.adopt(c.parent,c[t],c[e]),u},l.prototype.createLeftOf=function(o){this.createDir(t,o)},l.prototype.selectChildren=function(o,c){return new Gc(o,c)},l.prototype.bubble=function(o){for(var c=this.getSelfNode(),u=c;u;u=u.parent){var h=o(u);if(h===!1)break}return this},l.prototype.postOrder=function(o){var c=this.getSelfNode();return function u(h){return h?(h.eachChild(u),o(h),!0):!1}(c),c},l.prototype.isEmpty=function(){return this.ends[t]===0&&this.ends[e]===0},l.prototype.isQuietEmptyDelimiter=function(o){if(!this.isEmpty()||!o||!this.parent||this.parent.ctrlSeq===void 0)return!1;var c=this.parent.ctrlSeq.replace(/^\\(left|right)?/,"");return o.hasOwnProperty(c)},l.prototype.isStyleBlock=function(){return!1},l.prototype.isTextBlock=function(){return!1},l.prototype.children=function(){return new it(this.getEnd(t),this.getEnd(e))},l.prototype.eachChild=function(o){return we(this.ends,o),this},l.prototype.foldChildren=function(o,c){return nr(this.ends,o,c)},l.prototype.withDirAdopt=function(o,c,u,h){var f=this.getSelfNode();return new it(f,f).withDirAdopt(o,c,u,h),this},l.prototype.adopt=function(o,c,u){var h=this.getSelfNode();return new it(h,h).adopt(o,c,u),this.getSelfNode()},l.prototype.disown=function(){var o=this.getSelfNode();return new it(o,o).disown(),this},l.prototype.remove=function(){return this.domFrag().remove(),this.disown()},l.prototype.shouldIgnoreSubstitutionInSimpleSubscript=function(o){return!(!o.disableAutoSubstitutionInSubscripts||!this.parent||!(this.parent.parent instanceof Ht)||!this.parent.domFrag().hasClass("dcg-mq-sub"))},l.prototype.getSelfNode=function(){return this},l.prototype.parser=function(){d("Abstract parser() method is never called",!1)},l.prototype.html=function(){throw new Error("html() unimplemented in NodeBase")},l.prototype.text=function(){return""},l.prototype.latex=function(){var o={latex:"",startIndex:-1,endIndex:-1};return this.latexRecursive(o),o.latex},l.prototype.latexRecursive=function(o){},l.prototype.checkCursorContextOpen=function(o){o.startSelectionBefore===this&&(o.startIndex=o.latex.length),o.endSelectionBefore===this&&(o.endIndex=o.latex.length)},l.prototype.checkCursorContextClose=function(o){o.startSelectionAfter===this&&(o.startIndex=o.latex.length),o.endSelectionAfter===this&&(o.endIndex=o.latex.length)},l.prototype.finalizeTree=function(o,c){},l.prototype.contactWeld=function(o,c){},l.prototype.blur=function(o){},l.prototype.focus=function(){},l.prototype.intentionalBlur=function(){},l.prototype.reflow=function(){},l.prototype.registerInnerField=function(o,c){},l.prototype.chToCmd=function(o,c){d("Abstract chToCmd() method is never called",!1)},l.prototype.mathspeak=function(o){return""},l.prototype.seek=function(o,c){},l.prototype.siblingDeleted=function(o,c){},l.prototype.siblingCreated=function(o,c){},l.prototype.finalizeInsert=function(o,c){},l.prototype.fixDigitGrouping=function(o){},l.prototype.writeLatex=function(o,c){},l.prototype.write=function(o,c){};var i,n;return i=t,n=e,l.idCounter=0,l}();function gt(l,i,n){d("a parent is always present",l),d("leftward is properly set up",function(){return i?i[e]===n&&i.parent===l:l.getEnd(t)===n}()),d("rightward is properly set up",function(){return n?n[t]===i&&n.parent===l:l.getEnd(e)===i}())}var it=function(){function l(i,n,o){var c,u;if(this.disowned=!1,o===void 0&&(o=t),g(o),d("no half-empty fragments",!i==!n),!i||!n){this.setEnds((c={},c[t]=0,c[e]=0,c));return}d("withDir is passed to Fragment",i instanceof ar),d("oppDir is passed to Fragment",n instanceof ar),d("withDir and oppDir have the same parent",i.parent===n.parent);var h=(u={},u[o]=i,u[-o]=n,u);this.setEnds(h);var f=0;this.each(function(y){f=y}),d("following direction siblings from start reaches end",f===h[e])}return l.prototype.getDOMFragFromEnds=function(){var i=this.ends[t],n=this.ends[e];return i===0||n===0?H():i===n?i.domFrag():i.domFrag().join(n.domFrag())},l.prototype.setEnds=function(i){this.ends=i},l.prototype.getEnd=function(i){return this.ends?this.ends[i]:0},l.prototype.domFrag=function(){return this.getDOMFragFromEnds()},l.prototype.withDirAdopt=function(i,n,o,c){return i===t?this.adopt(n,o,c):this.adopt(n,c,o)},l.prototype.adopt=function(i,n,o){var c;gt(i,n,o);var u=this;this.disowned=!1;var h=u.ends[t];if(!h)return this;var f=u.ends[e];if(!f)return this;var y=(c={},c[t]=i.getEnd(t),c[e]=i.getEnd(e),c);return n||(y[t]=h),o?o[t]=f:y[e]=f,i.setEnds(y),f[e]=o,u.each(function(x){return x[t]=n,x.parent=i,n&&(n[e]=x),n=x,!0}),u},l.prototype.disown=function(){var i,n=this,o=n.ends[t];if(!o||n.disowned)return n;this.disowned=!0;var c=n.ends[e];if(!c)return n;var u=o.parent;gt(u,o[t],o),gt(u,c,c[e]);var h=(i={},i[t]=u.getEnd(t),i[e]=u.getEnd(e),i);if(o[t]){var f=o[t];f[e]=c[e]}else h[t]=c[e];if(c[e]){var y=c[e];y[t]=o[t]}else h[e]=o[t];return h[t]&&h[e]?u.setEnds(h):u.ends=h,n},l.prototype.remove=function(){return this.domFrag().remove(),this.disown()},l.prototype.each=function(i){return we(this.ends,i),this},l.prototype.fold=function(i,n){return nr(this.ends,i,n)},l}(),w={},mr={};function ih(l){return l&&l.prototype instanceof ar}var sh=function(l){$(i,l);function i(n,o,c){var u=l.call(this,n,o,c)||this;return u.ancestors={},u}return i.fromCursor=function(n){return new i(n.parent,n[t],n[e])},i}(W),ch=function(l){$(i,l);function i(n,o,c){var u=l.call(this,n,0,0)||this;return u.upDownCache={},u.cursorElement=p("span",{class:"dcg-mq-cursor"},[p.text(F)]),u._domFrag=H(),u.controller=c,u.options=o,u.setDOMFrag(H(u.cursorElement)),u.blink=function(){H(u.cursorElement).toggleClass("dcg-mq-blink")},u}return i.prototype.setDOMFrag=function(n){return this._domFrag=n,this},i.prototype.domFrag=function(){return this._domFrag},i.prototype.show=function(){if(H(this.cursorElement).removeClass("dcg-mq-blink"),this.setDOMFrag(H(this.cursorElement)),this.intervalId)clearInterval(this.intervalId);else{var n=this[e];if(n){var o=this.selection;o&&o.getEnd(t)[t]===this[t]?this.domFrag().insertBefore(o.domFrag()):this.domFrag().insertBefore(n.domFrag())}else this.domFrag().appendTo(this.parent.domFrag().oneElement());this.parent.focus()}return this.intervalId=setInterval(this.blink,500),this},i.prototype.hide=function(){return this.intervalId&&clearInterval(this.intervalId),this.intervalId=0,this.domFrag().detach(),this.setDOMFrag(H()),this},i.prototype.withDirInsertAt=function(n,o,c,u){var h=this.parent;this.parent=o,this[n]=c,this[-n]=u,h!==o&&h.blur&&h.blur(this)},i.prototype.insDirOf=function(n,o){return g(n),this.domFrag().insDirOf(n,o.domFrag()),this.withDirInsertAt(n,o.parent,o[n],o),this.parent.domFrag().addClass("dcg-mq-hasCursor"),this},i.prototype.insLeftOf=function(n){return this.insDirOf(t,n)},i.prototype.insRightOf=function(n){return this.insDirOf(e,n)},i.prototype.insAtDirEnd=function(n,o){return g(n),this.domFrag().insAtDirEnd(n,o.domFrag().oneElement()),this.withDirInsertAt(n,o,0,o.getEnd(n)),o.focus(),this},i.prototype.insAtLeftEnd=function(n){return this.insAtDirEnd(t,n)},i.prototype.insAtRightEnd=function(n){return this.insAtDirEnd(e,n)},i.prototype.jumpUpDown=function(n,o){var c=this;c.upDownCache[n.id]=W.copy(c);var u=c.upDownCache[o.id];if(u){var h=u[e];h?c.insLeftOf(h):c.insAtRightEnd(u.parent)}else{var f=c.getBoundingClientRectWithoutMargin().left;o.seek(f,c)}c.controller.aria.queue(o,!0)},i.prototype.getBoundingClientRectWithoutMargin=function(){var n=this.domFrag();n.removeClass("dcg-mq-cursor");var o=Je(n.oneElement()),c=o.left,u=o.right;return n.addClass("dcg-mq-cursor"),{left:c,right:u}},i.prototype.unwrapGramp=function(){var n=this.parent.parent,o=n.parent,c=n[e],u=this,h=n[t];if(n.disown().eachChild(function(T){return T.isEmpty()||(T.children().adopt(o,h,c).each(function(q){return q.domFrag().insertBefore(n.domFrag()),!0}),h=T.getEnd(e)),!0}),!this[e]){var f=this[t];if(f)this[e]=f[e];else for(;!this[e];){var y=this.parent[e];if(y)this.parent=y,this[e]=y.getEnd(t);else{this[e]=n[e],this.parent=o;break}}}var x=this[e];x?this.insLeftOf(x):this.insAtRightEnd(o),n.domFrag().remove();var L=n[t],V=n[e];L&&L.siblingDeleted(u.options,e),V&&V.siblingDeleted(u.options,t)},i.prototype.startSelection=function(){for(var n=this.anticursor=sh.fromCursor(this),o=n.ancestors,c=n;c.parent;c=c.parent)o[c.parent.id]=c},i.prototype.endSelection=function(){delete this.anticursor},i.prototype.select=function(){var n,o=this.anticursor;if(this[t]===o[t]&&this.parent===o.parent)return!1;for(var c=this;c.parent;c=c.parent)if(c.parent.id in o.ancestors){n=c.parent;break}d("cursor and anticursor in the same tree",n);var u=n,h=o.ancestors[u.id],f,y,x=e;if(c[t]!==h){for(var L=c;L;L=L[e])if(L[e]===h[e]){x=t,f=c,y=h;break}}x===e&&(f=h,y=c),f instanceof W&&(f=f[e]),y instanceof W&&(y=y[t]),this.hide().selection=u.selectChildren(f,y);var V=this.selection.getEnd(x);return this.insDirOf(x,V),this.selectionChanged(),!0},i.prototype.resetToEnd=function(n){this.clearSelection();var o=n.root;this[e]=0,this[t]=o.getEnd(e),this.parent=o},i.prototype.clearSelection=function(){return this.selection&&(this.selection.clear(),delete this.selection,this.selectionChanged()),this},i.prototype.deleteSelection=function(){var n=this.selection;n&&(this[t]=n.getEnd(t)[t],this[e]=n.getEnd(e)[e],n.remove(),this.selectionChanged(),delete this.selection)},i.prototype.replaceSelection=function(){var n=this.selection;return n&&(this[t]=n.getEnd(t)[t],this[e]=n.getEnd(e)[e],delete this.selection),n},i.prototype.depth=function(){for(var n=this,o=0;n=n.parent;)o+=n instanceof kt?1:0;return o},i.prototype.isTooDeep=function(n){return this.options.maxDepth!==void 0?this.depth()+(n||0)>this.options.maxDepth:!1},i.prototype.selectionChanged=function(){},i}(W),Gc=function(l){$(i,l);function i(n,o,c){var u=l.call(this,n,o,c)||this;return u._el=p("span",{class:"dcg-mq-selection"}),u.getDOMFragFromEnds().wrapAll(u._el),u}return i.prototype.isCleared=function(){return this._el===void 0},i.prototype.domFrag=function(){return this.isCleared()?this.getDOMFragFromEnds():H(this._el)},i.prototype.setEnds=function(n){d("Selection ends are never empty",n[t]&&n[e]),this.ends=n},i.prototype.getEnd=function(n){return this.ends[n]},i.prototype.adopt=function(n,o,c){return this.clear(),l.prototype.adopt.call(this,n,o,c)},i.prototype.clear=function(){var n=this.getDOMFragFromEnds();return this.domFrag().replaceWith(n),this._el=void 0,this},i.prototype.join=function(n,o){return o===void 0&&(o=""),this.fold("",function(c,u){return c+o+u[n]()})},i}(it),Kr=function(){function l(i,n,o){this.textareaEventListeners={},this.id=i.id,this.data={},this.root=i,this.container=n,this.options=o,this.aria=new Bt(this.getControllerSelf()),this.ariaLabel="Math Input",this.ariaPostLabel="",i.controller=this.getControllerSelf(),this.cursor=i.cursor=new ch(i,o,this.getControllerSelf())}return l.prototype.getControllerSelf=function(){return this},l.prototype.handle=function(i,n){var o,c=this.options.handlers,u=(o=this.options.handlers)===null||o===void 0?void 0:o.fns[i];if(u){var h=c==null?void 0:c.APIClasses[this.KIND_OF_MQ];d("APIClass is defined",h);var f=new h(this);n===t||n===e?u(n,f):u(f)}},l.onNotify=function(i){l.notifyees.push(i)},l.prototype.notify=function(i){for(var n=0;n<l.notifyees.length;n+=1)l.notifyees[n](this.cursor,i);return this},l.prototype.setAriaLabel=function(i){var n=this.getAriaLabel();return i&&typeof i=="string"&&i!==""?this.ariaLabel=i:this.editable?this.ariaLabel="Math Input":this.ariaLabel="",this.ariaLabel!==n&&!this.containerHasFocus()&&this.updateMathspeak(),this},l.prototype.getAriaLabel=function(){return this.ariaLabel!=="Math Input"?this.ariaLabel:this.editable?"Math Input":""},l.prototype.setAriaPostLabel=function(i,n){var o=this;return i&&typeof i=="string"&&i!==""?(i!==this.ariaPostLabel&&typeof n=="number"&&(this._ariaAlertTimeout&&clearTimeout(this._ariaAlertTimeout),this._ariaAlertTimeout=setTimeout(function(){o.containerHasFocus()?o.aria.alert(o.root.mathspeak().trim()+" "+i.trim()):o.updateMathspeak()},n)),this.ariaPostLabel=i):(this._ariaAlertTimeout&&clearTimeout(this._ariaAlertTimeout),this.ariaPostLabel=""),this},l.prototype.getAriaPostLabel=function(){return this.ariaPostLabel||""},l.prototype.containerHasFocus=function(){return document.activeElement&&this.container.contains(document.activeElement)},l.prototype.getTextareaOrThrow=function(){var i=this.textarea;if(!i)throw new Error("expected a textarea");return i},l.prototype.getTextareaSpanOrThrow=function(){var i=this.textareaSpan;if(!i)throw new Error("expected a textareaSpan");return i},l.prototype.addTextareaEventListeners=function(i){if(this.textarea)for(var n in i){var o=n;this.removeTextareaEventListener(o),this.textarea.addEventListener(o,i[o])}},l.prototype.removeTextareaEventListener=function(i){if(this.textarea){var n=this.textareaEventListeners[i];n&&this.textarea.removeEventListener(i,n)}},l.prototype.exportMathSpeak=function(){return this.root.mathspeak()},l.prototype.updateMathspeak=function(){},l.prototype.scrollHoriz=function(){},l.prototype.selectionChanged=function(){},l.prototype.setOverflowClasses=function(){},l.notifyees=[],l}(),$t={},Vc={},pw={handlers:!0,autoCommands:!0,quietEmptyDelimiters:!0,autoParenthesizedFunctions:!0,autoOperatorNames:!0,leftRightIntoCmdGoes:!0,maxDepth:!0,interpretTildeAsSim:!0},Tr={},ht=function(){function l(i){this.version=i}return l.prototype.assertJquery=function(){return d("Interface versions > 2 do not depend on JQuery",this.version<=2),d("JQuery is set for interface v < 3",this.jQuery),this.jQuery},l}(),Ac=function(){function l(){}return l}(),Oa=function(){window.console&&console.warn(`You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. Easiest fix is to do the following before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`)},un;function Ut(l){return Oa(),un||(un=$n(1)),un(l)}Ut.prototype=Ac.prototype,Ut.VERSION="v0.10.1",Ut.interfaceVersion=function(l){if(l!==1)throw"Only interface version 1 supported. You specified: "+l;return Oa=function(){window.console&&console.warn(`You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`)},Oa(),Ut},Ut.getInterface=$n;var lh=$n.MIN=1,dh=$n.MAX=3;function $n(l){if(l!==1&&l!==2&&l!==3)throw"Only interface versions between "+lh+" and "+dh+" supported. You specified: "+l;var i=l;if(i<3){var n=window.jQuery;if(!n)throw"MathQuill interface version ".concat(i," requires jQuery 1.5.2+ to be loaded first");ht.prototype.jQuery=n}var o=Ei(Ei({},Tr),{handlers:function(V){return{fns:V||{},APIClasses:y}}});function c(V,T){for(var q in T)if(T.hasOwnProperty(q)){if(q==="substituteKeyboardEvents"&&i>=3)throw new Error(["As of interface version 3, the 'substituteKeyboardEvents'","option is no longer supported. Use 'overrideTypedText' and","'overrideKeystroke' instead."].join(" "));var _=T[q],P=o[q];V[q]=P?P(_):_}}var u=i<3?ht:function(V){$(T,V);function T(){return V!==null&&V.apply(this,arguments)||this}return T}(ht),h=function(V){$(T,V);function T(q){var _=V.call(this)||this;return _.__controller=q,_.__options=q.options,_.id=q.id,_.data=q.data,_}return T.prototype.mathquillify=function(q){var _=this.__controller,P=_.root,K=_.container;_.createTextarea();var z=H(K).addClass(q).children().detach();P.setDOM(H(p("span",{class:"dcg-mq-root-block","aria-hidden":!0})).appendTo(K).oneElement()),rt.linkElementByBlockNode(P.domFrag().oneElement(),P),this.latex(z.text()),this.revert=function(){return _.removeMouseEventListener(),H(K).removeClass("dcg-mq-editable-field dcg-mq-math-mode dcg-mq-text-mode").empty().append(z),i<3?this.__options.assertJquery()(K):K}},T.prototype.setAriaLabel=function(q){return this.__controller.setAriaLabel(q),this},T.prototype.getAriaLabel=function(){return this.__controller.getAriaLabel()},T.prototype.config=function(q){return c(this.__options,q),this},T.prototype.el=function(){return this.__controller.container},T.prototype.text=function(){return this.__controller.exportText()},T.prototype.mathspeak=function(){return this.__controller.exportMathSpeak()},T.prototype.latex=function(q){if(arguments.length>0){this.__controller.renderLatexMath(q);var _=this.__controller.cursor;return this.__controller.blurred&&_.hide().parent.blur(_),this}return this.__controller.exportLatex()},T.prototype.selection=function(){return this.__controller.exportLatexSelection()},T.prototype.html=function(){return this.__controller.root.domFrag().oneElement().innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/ mathquill-(?:command|block)-id="?\d+"?/g,"").replace(/<span class="?dcg-mq-cursor( dcg-mq-blink)?"?>.?<\/span>/i,"").replace(/ dcg-mq-hasCursor|dcg-mq-hasCursor ?/,"").replace(/ class=(""|(?= |>))/g,"")},T.prototype.reflow=function(){return this.__controller.root.postOrder(function(q){q.reflow()}),this},T}(Ac),f=function(V){$(T,V);function T(){return V!==null&&V.apply(this,arguments)||this}return T.prototype.mathquillify=function(q){return V.prototype.mathquillify.call(this,q),this.__controller.editable=!0,this.__controller.addMouseEventListener(),this.__controller.editablesTextareaEvents(),this},T.prototype.focus=function(){return this.__controller.getTextareaOrThrow().focus(),this.__controller.scrollHoriz(),this},T.prototype.blur=function(){return this.__controller.getTextareaOrThrow().blur(),this},T.prototype.write=function(q){this.__controller.writeLatex(q),this.__controller.scrollHoriz();var _=this.__controller.cursor;return this.__controller.blurred&&_.hide().parent.blur(_),this},T.prototype.empty=function(){var q,_=this.__controller.root,P=this.__controller.cursor;return _.setEnds((q={},q[t]=0,q[e]=0,q)),_.domFrag().empty(),delete P.selection,P.insAtRightEnd(_),this},T.prototype.cmd=function(q){var _=this.__controller.notify(void 0),P=_.cursor;if(/^\\[a-z]+$/i.test(q)&&!P.isTooDeep()){q=q.slice(1);var K=w[q],z;K&&(K.constructor?z=new K(q):z=K(q),P.selection&&z.replaces(P.replaceSelection()),z.createLeftOf(P.show()))}else P.parent.write(P,q);return _.scrollHoriz(),_.blurred&&P.hide().parent.blur(P),this},T.prototype.select=function(){return this.__controller.selectAll(),this},T.prototype.clearSelection=function(){return this.__controller.cursor.clearSelection(),this},T.prototype.moveToDirEnd=function(q){return this.__controller.notify("move").cursor.insAtDirEnd(q,this.__controller.root),this},T.prototype.moveToLeftEnd=function(){return this.moveToDirEnd(t)},T.prototype.moveToRightEnd=function(){return this.moveToDirEnd(e)},T.prototype.keystroke=function(q,_){for(var P=q.replace(/^\s+|\s+$/g,"").split(/\s+/),K=0;K<P.length;K+=1)this.__controller.keystroke(P[K],_);return this},T.prototype.typedText=function(q){for(var _=0;_<q.length;_+=1)this.__controller.typedText(q.charAt(_));return this},T.prototype.dropEmbedded=function(q,_,P){var K=q-Se(),z=_-Oe(),se=document.elementFromPoint(K,z);this.__controller.seek(se,K,z);var Te=new el().setOptions(P);Te.createLeftOf(this.__controller.cursor)},T.prototype.setAriaPostLabel=function(q,_){return this.__controller.setAriaPostLabel(q,_),this},T.prototype.getAriaPostLabel=function(){return this.__controller.getAriaPostLabel()},T.prototype.clickAt=function(q,_,P){P=P||document.elementFromPoint(q,_);var K=this.__controller,z=K.root,se=z.domFrag().oneElement();return se.contains(P)||(P=se),K.seek(P,q,_),K.blurred&&this.focus(),this},T.prototype.ignoreNextMousedown=function(q){return this.__controller.cursor.options.ignoreNextMousedown=q,this},T}(h),y={AbstractMathQuill:h,EditableField:f};d("API.StaticMath defined",$t.StaticMath),y.StaticMath=$t.StaticMath(y),d("API.MathField defined",$t.MathField),y.MathField=$t.MathField(y),d("API.InnerMathField defined",$t.InnerMathField),y.InnerMathField=$t.InnerMathField(y),$t.TextField&&(y.TextField=$t.TextField(y));var x=function(V){if(!V||!V.nodeType)return null;for(var T,q=H(V).children().toElementArray(),_=0,P=q;_<P.length;_++){var K=P[_];if(K.classList.contains("dcg-mq-root-block")){T=K;break}}var z=rt.getNodeOfElement(T),se=z&&z.controller,Te=se&&y[se.KIND_OF_MQ];return se&&Te?new Te(se):null};x.L=t,x.R=e,x.config=function(V){return c(u.prototype,V),this},x.registerEmbed=function(V,T){if(!/^[a-z][a-z0-9]*$/i.test(V))throw"Embed name must start with letter and be only letters and digits";Vc[V]=T},x.StaticMath=L("StaticMath",y.StaticMath),x.MathField=L("MathField",y.MathField),x.InnerMathField=L("InnerMathField",y.InnerMathField),y.TextField&&(x.TextField=L("TextField",y.TextField)),x.prototype=h.prototype,x.EditableField=function(){throw"wtf don't call me, I'm 'abstract'"},x.EditableField.prototype=f.prototype,i<3&&(x.saneKeyboardEvents=Ic);function L(V,T){d(V+" is defined",T);function q(_,P){if(!_||!_.nodeType)return null;var K=x(_);if(K instanceof T)return K;var z=new Mc(new T.RootBlock,_,new u(i));return z.KIND_OF_MQ=V,new T(z).__mathquillify(P||{},i)}return q.prototype=T.prototype,q}return x}Ut.noConflict=function(){return window.MathQuill=uh,Ut};var uh=window.MathQuill;window.MathQuill=Ut;function Fc(l){l.moveOutOf=function(i){d("controller is defined",this.controller),this.controller.handle("moveOutOf",i)},l.deleteOutOf=function(i){d("controller is defined",this.controller),this.controller.handle("deleteOutOf",i)},l.selectOutOf=function(i){d("controller is defined",this.controller),this.controller.handle("selectOutOf",i)},l.upOutOf=function(){d("controller is defined",this.controller),this.controller.handle("upOutOf")},l.downOutOf=function(){d("controller is defined",this.controller),this.controller.handle("downOutOf")},l.reflow=function(){d("controller is defined",this.controller),this.controller.handle("reflow"),this.controller.handle("edited"),this.controller.handle("edit")}}function ph(l,i){throw l?l="'"+l+"'":l="EOF","Parse Error: "+i+" at "+l}var te=function(){function l(i){this._=i}return l.prototype.parse=function(i){return this.skip(l.eof)._(""+i,n,ph);function n(o,c){return c}},l.prototype.or=function(i){d("or is passed a parser",i instanceof l);var n=this;return new l(function(o,c,u){return n._(o,c,h);function h(f){return i._(o,c,u)}})},l.prototype.then=function(i){var n=this;return new l(function(o,c,u){return n._(o,h,u);function h(f,y){var x=i instanceof l?i:i(y);return d("a parser is returned",x instanceof l),x._(f,c,u)}})},l.prototype.many=function(){var i=this;return new l(function(n,o,c){for(var u=[];i._(n,h,f););return o(n,u);function h(y,x){return n=y,u.push(x),!0}function f(){return!1}})},l.prototype.times=function(i,n){arguments.length<2&&(n=i);var o=this;return new l(function(c,u,h){for(var f=[],y=!0,x,L=0;L<i;L+=1)if(y=!!o._(c,V,T),!y)return h(c,x);for(;L<n&&y;L+=1)o._(c,V,q);return u(c,f);function V(_,P){return f.push(P),c=_,!0}function T(_,P){return x=P,c=_,!1}function q(_,P){return!1}})},l.prototype.result=function(i){return this.then(l.succeed(i))},l.prototype.atMost=function(i){return this.times(0,i)},l.prototype.atLeast=function(i){var n=this;return n.times(i).then(function(o){return n.many().map(function(c){return o.concat(c)})})},l.prototype.map=function(i){return this.then(function(n){return l.succeed(i(n))})},l.prototype.skip=function(i){return this.then(function(n){return i.result(n)})},l.string=function(i){var n=i.length,o="expected '"+i+"'";return new l(function(c,u,h){var f=c.slice(0,n);return f===i?u(c.slice(n),f):h(c,o)})},l.regex=function(i){d("regexp parser is anchored",i.toString().charAt(1)==="^");var n="expected "+i;return new l(function(o,c,u){var h=i.exec(o);if(h){var f=h[0];return c(o.slice(f.length),f)}else return u(o,n)})},l.succeed=function(i){return new l(function(n,o){return o(n,i)})},l.fail=function(i){return new l(function(n,o,c){return c(n,i)})},l.letter=l.regex(/^[a-z]/i),l.letters=l.regex(/^[a-z]*/i),l.digit=l.regex(/^[0-9]/),l.digits=l.regex(/^[0-9]*/),l.whitespace=l.regex(/^\s+/),l.optWhitespace=l.regex(/^\s*/),l.any=new l(function(i,n,o){return i?n(i.slice(1),i.charAt(0)):o(i,"expected any character")}),l.all=new l(function(i,n,o){return n("",i)}),l.eof=new l(function(i,n,o){return i?o(i,"expected EOF"):n(i,i)}),l}(),gh=function(){function l(){this.fn=s}return l.prototype.listen=function(i){this.fn=i,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(this.fn)},l.prototype.listenOnce=function(i){var n=this;this.listen(function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];n.clearListener(),i.apply(void 0,o)})},l.prototype.clearListener=function(){this.fn=s,clearTimeout(this.timeoutId)},l.prototype.trigger=function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];this.fn.apply(this,i)},l}(),Lc=function(){var l={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"},i={ArrowRight:"Right",ArrowLeft:"Left",ArrowDown:"Down",ArrowUp:"Up",Delete:"Del",Escape:"Esc"," ":"Spacebar"};function n(h){switch(c(h)){case"Right":case"Left":case"Down":case"Up":return!0}return!1}function o(h){return h.length===1&&h>="a"&&h<="z"}function c(h){var f;if(h.key===void 0){var y=h.which||h.keyCode;return l[y]||String.fromCharCode(y)}return o(h.key)?h.key.toUpperCase():(f=i[h.key])!==null&&f!==void 0?f:h.key}function u(h){var f=c(h),y=[];return h.ctrlKey&&y.push("Ctrl"),h.metaKey&&y.push("Meta"),h.altKey&&y.push("Alt"),h.shiftKey&&y.push("Shift"),y.length?(f!=="Alt"&&f!=="Control"&&f!=="Meta"&&f!=="Shift"&&y.push(f),y.join("-")):f}return function(f,y){var x=null,L=null,V=new gh;function T(){try{f instanceof HTMLTextAreaElement&&f.select()}catch(le){}}function q(le){V.trigger(),V.clearListener(),f instanceof HTMLTextAreaElement&&(f.value=le),le&&T(),_=!!le}var _=!1;function P(){return!("selectionStart"in f)||!(f instanceof HTMLTextAreaElement)?!1:f.selectionStart!==f.selectionEnd}function K(){y.options&&y.options.overrideKeystroke?y.options.overrideKeystroke(u(x),x):y.keystroke(u(x),x)}function z(le){V.trigger(le),le.target===f&&(x=le,L=null,_&&V.listenOnce(function(Gr){Gr&&Gr.type==="focusout"||T()}),K())}function se(le){V.trigger(le),le.target===f&&(x&&L&&K(),L=le,n(le)?V.listenOnce(Ie):V.listen(ce))}function Te(le){V.trigger(le),le.target===f&&x&&!L&&(n(le)?V.listenOnce(Ie):V.listen(ce))}function ce(){if(!P()&&f instanceof HTMLTextAreaElement){var le=f.value;x&&!x.altKey&&x.ctrlKey&&!x.metaKey&&x.shiftKey&&(x.key==="U"||x.key==="Unidentified"||x.key==="Process")||(le.length===1?(f.value="",y.options&&y.options.overrideTypedText?y.options.overrideTypedText(le):y.typedText(le)):Ie())}}function Ie(){f instanceof HTMLTextAreaElement&&f.value.length>1&&T()}function xt(){x=null,L=null,V.clearListener(),f instanceof HTMLTextAreaElement&&(f.value="")}function Ft(le){V.trigger(),le.target===f&&(document.activeElement!==f&&f.focus(),V.listen(function(){if(f instanceof HTMLTextAreaElement){var or=f.value;f.value="",or&&y.paste(or)}}))}function jr(le){V.trigger(le)}return y.options&&y.options.disableCopyPaste?y.addTextareaEventListeners({keydown:z,keypress:se,keyup:Te,focusout:xt,copy:function(le){le.preventDefault()},cut:function(le){le.preventDefault()},paste:function(le){V.trigger(),le.preventDefault()},input:jr}):y.addTextareaEventListeners({keydown:z,keypress:se,keyup:Te,focusout:xt,cut:function(){V.listenOnce(function(){y.cut()})},copy:function(){V.listenOnce(function(){y.copy()})},paste:Ft,input:jr}),{select:q}}}(),hh=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.exportText=function(){return this.root.foldChildren("",function(n,o){return n+o.text()})},i}(Kr);Kr.onNotify(function(l,i){if(i==="edit"||i==="replace"||i===void 0){var n=l.controller;if(!n||!n.options.enableDigitGrouping||n.blurred!==!1)return;n.disableGroupingForSeconds(1)}});var mh=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.handleTextareaFocusEditable=function(){var o=n.cursor;n.updateMathspeak(),n.blurred=!1,clearTimeout(n.blurTimeout),H(n.container).addClass("dcg-mq-focused"),o.parent||o.insAtRightEnd(n.root),o.selection?(o.selection.domFrag().removeClass("dcg-mq-blur"),n.selectionChanged()):o.show(),n.setOverflowClasses()},n.handleTextareaBlurEditable=function(){n.textareaSelectionTimeout&&(clearTimeout(n.textareaSelectionTimeout),n.textareaSelectionTimeout=0),n.disableGroupingForSeconds(0),n.blurred=!0,n.blurTimeout=setTimeout(function(){n.root.postOrder(function(o){o.intentionalBlur()}),n.cursor.clearSelection().endSelection(),n.blur(),n.updateMathspeak(),n.scrollHoriz()}),window.addEventListener("blur",n.handleWindowBlur)},n.handleTextareaFocusStatic=function(){n.blurred=!1},n.handleTextareaBlurStatic=function(){n.cursor.selection&&n.cursor.selection.clear(),setTimeout(function(){H(n.getTextareaSpanOrThrow()).detach(),n.blurred=!0})},n.handleWindowBlur=function(){clearTimeout(n.blurTimeout),n.cursor.selection&&n.cursor.selection.domFrag().addClass("dcg-mq-blur"),n.blur(),n.updateMathspeak()},n}return i.prototype.disableGroupingForSeconds=function(n){var o=this;clearTimeout(this.__disableGroupingTimeout),n===0?this.root.domFrag().removeClass("dcg-mq-suppress-grouping"):(this.root.domFrag().addClass("dcg-mq-suppress-grouping"),this.__disableGroupingTimeout=setTimeout(function(){o.root.domFrag().removeClass("dcg-mq-suppress-grouping")},n*1e3))},i.prototype.blur=function(){this.cursor.hide().parent.blur(this.cursor),H(this.container).removeClass("dcg-mq-focused"),window.removeEventListener("blur",this.handleWindowBlur),this.options&&this.options.resetCursorOnBlur&&this.cursor.resetToEnd(this)},i.prototype.addEditableFocusBlurListeners=function(){var n=this,o=n.cursor;this.addTextareaEventListeners({focus:this.handleTextareaFocusEditable,blur:this.handleTextareaBlurEditable}),n.blurred=!0,o.hide().parent.blur(o)},i.prototype.addStaticFocusBlurListeners=function(){this.addTextareaEventListeners({focus:this.handleTextareaFocusStatic,blur:this.handleTextareaBlurStatic})},i}(hh),Wr=!1,ar=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.keystroke=function(n,o,c){var u=c.cursor;switch(n){case"Ctrl-Shift-Backspace":case"Ctrl-Backspace":c.ctrlDeleteDir(t);break;case"Shift-Backspace":case"Backspace":c.backspace();break;case"Esc":case"Tab":c.escapeDir(e,n,o);return;case"Shift-Tab":case"Shift-Esc":c.escapeDir(t,n,o);return;case"End":c.notify("move").cursor.insAtRightEnd(u.parent),c.aria.queue("end of").queue(u.parent,!0);break;case"Ctrl-End":c.notify("move").cursor.insAtRightEnd(c.root),c.aria.queue("end of").queue(c.ariaLabel).queue(c.root).queue(c.ariaPostLabel);break;case"Shift-End":c.selectToBlockEndInDir(e);break;case"Ctrl-Shift-End":c.selectToRootEndInDir(e);break;case"Home":c.notify("move").cursor.insAtLeftEnd(u.parent),c.aria.queue("beginning of").queue(u.parent,!0);break;case"Ctrl-Home":c.notify("move").cursor.insAtLeftEnd(c.root),c.aria.queue("beginning of").queue(c.ariaLabel).queue(c.root).queue(c.ariaPostLabel);break;case"Shift-Home":c.selectToBlockEndInDir(t);break;case"Ctrl-Shift-Home":c.selectToRootEndInDir(t);break;case"Left":c.moveLeft();break;case"Shift-Left":c.selectLeft();break;case"Ctrl-Left":break;case"Right":c.moveRight();break;case"Shift-Right":c.selectRight();break;case"Ctrl-Right":break;case"Up":c.moveUp();break;case"Down":c.moveDown();break;case"Shift-Up":c.withIncrementalSelection(function(h){if(u[t])for(;u[t];)h(t);else h(t)});break;case"Shift-Down":c.withIncrementalSelection(function(h){if(u[e])for(;u[e];)h(e);else h(e)});break;case"Ctrl-Up":break;case"Ctrl-Down":break;case"Ctrl-Shift-Del":case"Ctrl-Del":c.ctrlDeleteDir(e);break;case"Shift-Del":case"Del":c.deleteForward();break;case"Meta-A":case"Ctrl-A":c.selectAll();break;case"Ctrl-Alt-Up":u.parent.parent&&u.parent.parent instanceof i?c.aria.queue(u.parent.parent):c.aria.queue("nothing above");break;case"Ctrl-Alt-Down":u.parent&&u.parent instanceof i?c.aria.queue(u.parent):c.aria.queue("block is empty");break;case"Ctrl-Alt-Left":u.parent.parent&&u.parent.parent.getEnd(t)?c.aria.queue(u.parent.parent.getEnd(t)):c.aria.queue("nothing to the left");break;case"Ctrl-Alt-Right":u.parent.parent&&u.parent.parent.getEnd(e)?c.aria.queue(u.parent.parent.getEnd(e)):c.aria.queue("nothing to the right");break;case"Ctrl-Alt-Shift-Down":u.selection?c.aria.queue(u.selection.join("mathspeak"," ").trim()+" selected"):c.aria.queue("nothing selected");break;case"Ctrl-Alt-=":case"Ctrl-Alt-Shift-Right":c.ariaPostLabel.length?c.aria.queue(c.ariaPostLabel):c.aria.queue("no answer");break;default:return}c.aria.alert(),o==null||o.preventDefault(),c.scrollHoriz()},i.prototype.moveOutOf=function(n,o,c){d("overridden or never called on this node",!1)},i.prototype.moveTowards=function(n,o,c){d("overridden or never called on this node",!1)},i.prototype.deleteOutOf=function(n,o){d("overridden or never called on this node",!1)},i.prototype.deleteTowards=function(n,o){d("overridden or never called on this node",!1)},i.prototype.unselectInto=function(n,o){d("overridden or never called on this node",!1)},i.prototype.selectOutOf=function(n,o){d("overridden or never called on this node",!1)},i.prototype.selectTowards=function(n,o){d("overridden or never called on this node",!1)},i}(rt);Kr.onNotify(function(l,i){(i==="move"||i==="upDown")&&l.show().clearSelection()}),Tr.leftRightIntoCmdGoes=function(l){if(l&&l!=="up"&&l!=="down")throw'"up" or "down" required for leftRightIntoCmdGoes option, got "'+l+'"';return l},Kr.onNotify(function(l,i){i!=="upDown"&&(l.upDownCache={})}),Kr.onNotify(function(l,i){i==="edit"&&l.show().deleteSelection()}),Kr.onNotify(function(l,i){i!=="select"&&l.endSelection()});var fh=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.keystroke=function(n,o){this.cursor.parent.keystroke(n,o,this.getControllerSelf())},i.prototype.escapeDir=function(n,o,c){g(n);var u=this.cursor;if(u.parent!==this.root&&(c==null||c.preventDefault()),u.parent!==this.root)return u.clearSelection(),u.parent.moveOutOf(n,u),u.controller.aria.alert(),this.notify("move")},i.prototype.moveDir=function(n){g(n);var o=this.cursor,c=o.options.leftRightIntoCmdGoes,u=o[n];return o.selection?o.insDirOf(n,o.selection.getEnd(n)):u?u.moveTowards(n,o,c):o.parent.moveOutOf(n,o,c),this.notify("move")},i.prototype.moveLeft=function(){return this.moveDir(t)},i.prototype.moveRight=function(){return this.moveDir(e)},i.prototype.moveUp=function(){return this.moveUpDown("up")},i.prototype.moveDown=function(){return this.moveUpDown("down")},i.prototype.moveUpDown=function(n){var o=this,c=o.notify("upDown").cursor,u,h;n==="up"?(u="upInto",h="upOutOf"):(u="downInto",h="downOutOf");var f=c[t],y=c[e],x=y&&y[u],L=f&&f[u];return x?c.insAtLeftEnd(x):L?c.insAtRightEnd(L):c.parent.bubble(function(V){var T=V[h];if(T&&(typeof T=="function"&&(T=T.call(V,c)),T instanceof ar&&c.jumpUpDown(V,T),T!==!0))return!1}),o},i.prototype.deleteDir=function(n){g(n);var o=this.cursor,c=o[n],u=o.parent.parent,h=o.controller;if(c&&c instanceof ar)c.sides?h.aria.queue(c.parent.chToCmd(c.sides[-n].ch).mathspeak({createdLeftOf:o})):!c.blocks&&c.parent.ctrlSeq!=="\\text"&&h.aria.queue(c);else if(u&&u instanceof ar)if(u.sides)h.aria.queue(u.parent.chToCmd(u.sides[n].ch).mathspeak({createdLeftOf:o}));else if(u.blocks&&u.mathspeakTemplate)if(u.upInto&&u.downInto)h.aria.queue(u.mathspeakTemplate[1]);else{var f=u.mathspeakTemplate,y=n===t?f[0]:f[f.length-1];h.aria.queue(y)}else h.aria.queue(u);var x=o.selection;if(this.notify("edit"),!x){var L=o[n];L?L.deleteTowards(n,o):o.parent.deleteOutOf(n,o)}var V=o[t],T=o[e];return V.siblingDeleted&&V.siblingDeleted(o.options,e),T.siblingDeleted&&T.siblingDeleted(o.options,t),o.parent.bubble(function(q){q.reflow()}),this},i.prototype.ctrlDeleteDir=function(n){g(n);var o=this.cursor;if(!o[n]||o.selection)return this.deleteDir(n);this.notify("edit");var c;n===t?c=new it(o.parent.getEnd(t),o[t]):c=new it(o[e],o.parent.getEnd(e)),o.controller.aria.queue(c),c.remove(),o.insAtDirEnd(n,o.parent);var u=o[t],h=o[e];return u&&u.siblingDeleted(o.options,e),h&&h.siblingDeleted(o.options,t),o.parent.bubble(function(f){f.reflow()}),this},i.prototype.backspace=function(){return this.deleteDir(t)},i.prototype.deleteForward=function(){return this.deleteDir(e)},i.prototype.startIncrementalSelection=function(){d("Multiple selections can't be simultaneously open",!Wr),Wr=!0,this.notify("select");var n=this.cursor;n.anticursor||n.startSelection()},i.prototype.selectDirIncremental=function(n){d("A selection is open",Wr),Wr=!0;var o=this.cursor,c=o.selection;g(n);var u=o[n];u?c&&c.getEnd(n)===u&&o.anticursor[-n]!==u?u.unselectInto(n,o):u.selectTowards(n,o):o.parent.selectOutOf(n,o)},i.prototype.finishIncrementalSelection=function(){d("A selection is open",Wr);var n=this.cursor;n.clearSelection(),n.select()||n.show();var o=n.selection;o&&n.controller.aria.clear().queue(o.join("mathspeak"," ").trim()+" selected"),Wr=!1},i.prototype.withIncrementalSelection=function(n){var o=this;try{this.startIncrementalSelection();try{n(function(c){return o.selectDirIncremental(c)})}finally{this.finishIncrementalSelection()}}finally{Wr=!1}},i.prototype.selectDir=function(n){this.withIncrementalSelection(function(o){return o(n)})},i.prototype.selectLeft=function(){return this.selectDir(t)},i.prototype.selectRight=function(){return this.selectDir(e)},i.prototype.selectAll=function(){this.notify("move");var n=this.cursor;n.insAtRightEnd(this.root),this.withIncrementalSelection(function(o){for(;n[t];)o(t)})},i.prototype.selectToBlockEndInDir=function(n){var o=this.cursor;this.withIncrementalSelection(function(c){for(;o[n];)c(n)})},i.prototype.selectToRootEndInDir=function(n){var o=this,c=this.cursor;this.withIncrementalSelection(function(u){for(;c[n]||c.parent!==o.root;)u(n)})},i}(mh),gw=function(l){$(i,l);function i(n){return l.call(this)||this}return i}(ar),wt=function(){function l(ce){var Ie=new kt;return ce.adopt(Ie,0,0),Ie}function i(ce){for(var Ie=ce[0]||new kt,xt=1;xt<ce.length;xt+=1)ce[xt].children().adopt(Ie,Ie.getEnd(e),0);return Ie}var n=te.string,o=te.regex,c=te.letter,u=te.digit,h=te.any,f=te.optWhitespace,y=te.succeed,x=te.fail,L=c.map(function(ce){return new Hr(ce)}),V=u.map(function(ce){return new Ma(ce)}),T=o(/^[^${}\\_^]/).map(function(ce){return new Kn(ce)}),q=o(/^[^\\a-eg-zA-Z]/).or(n("\\").then(o(/^[a-z]+/i).or(o(/^\s+/).result(" ")).or(h))).then(function(ce){var Ie=w[ce];if(Ie)if(Ie.constructor){var xt=Ie;return new xt(ce).parser()}else{var Ft=Ie;return Ft(ce).parser()}else return x("unknown command: \\"+ce)}),_=q.or(L).or(V).or(T),P=n("{").then(function(){return z}).skip(n("}")),K=f.then(P.or(_.map(l))),z=K.many().map(i).skip(f),se=n("[").then(K.then(function(ce){return ce.join("latex")!=="]"?y(ce):x("")}).many().map(i).skip(f)).skip(n("]")),Te=z;return Te.block=K,Te.optBlock=se,Te}();Tr.maxDepth=function(l){return typeof l=="number"?l:void 0};var yh=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.cleanLatex=function(n){return n.replace(/(\\[a-z]+) (?![a-z])/gi,"$1")},i.prototype.exportLatex=function(){return this.cleanLatex(this.root.latex())},i.prototype.writeLatex=function(n){var o=this.notify("edit").cursor;return o.parent.writeLatex(o,n),this},i.prototype.exportLatexSelection=function(){var n={latex:"",startIndex:-1,endIndex:-1},o=this.cursor.selection;if(o)n.startSelectionBefore=o.getEnd(t),n.endSelectionAfter=o.getEnd(e);else{var c=this.cursor[t];c?n.startSelectionAfter=c:n.startSelectionBefore=this.cursor.parent;var u=this.cursor[e];u?n.endSelectionBefore=u:n.endSelectionAfter=this.cursor.parent}this.root.latexRecursive(n);for(var h=n.latex,f=this.cleanLatex(h),y=n.startIndex,x=n.endIndex,L=0,V=0;V<n.endIndex;V++)h[V]!==f[L]?(V<n.startIndex&&(y-=1),x-=1):L+=1;return{latex:f,startIndex:y,endIndex:x}},i.prototype.classifyLatexForEfficientUpdate=function(n){if(typeof n=="string"){var o=n.match(/-?[0-9.]+$/g);if(o&&o.length===1)return{latex:n,prefix:n.substr(0,n.length-o[0].length),digits:o[0]}}},i.prototype.updateLatexMathEfficiently=function(n,o){var c,u,h,f,y=this.root,x,L=this.classifyLatexForEfficientUpdate(n);if(L){if(x=this.classifyLatexForEfficientUpdate(o),!x||x.prefix!==L.prefix)return!1}else return!1;var V=x.digits,T=L.digits,q=!1,_=!1;V[0]==="-"&&(q=!0,V=V.substr(1)),T[0]==="-"&&(_=!0,T=T.substr(1));for(var P=this.root.getEnd(e),K=[],z=V.length-1;z>=0;z--){if(!P||P.ctrlSeq!==V[z]||P.parent!==y)return!1;K.unshift(P),P=P[t]}if(q&&!_){var se=P;if(!se||se.ctrlSeq!=="-"||se[e]!==K[0]||se.parent!==y)return!1;var Te=se[t];if(Te&&Te.parent!==y)return!1;K[0][t]=se[t],y.getEnd(t)===se&&y.setEnds((c={},c[t]=K[0],c[e]=y.getEnd(e),c)),Te&&(Te[e]=K[0]),se.domFrag().remove()}if(!q&&_){var ce=new zn("-"),Ie=document.createElement("span");Ie.textContent="-",ce.setDOM(Ie);var xt=K[0][t];xt&&(xt[e]=ce),y.getEnd(t)===K[0]&&y.setEnds((u={},u[t]=ce,u[e]=y.getEnd(e),u)),ce.parent=y,ce[t]=K[0][t],ce[e]=K[0],K[0][t]=ce,ce.contactWeld(this.cursor),ce.domFrag().insertBefore(K[0].domFrag())}var Ft=Math.min(V.length,T.length);for(z=0;z<Ft;z++){var jr=T[z];P=K[z],P.ctrlSeq!==jr&&(P.ctrlSeq=jr,P.domFrag().oneElement().textContent=jr,P.mathspeakName=jr)}if(V.length>T.length)for(P=K[T.length-1],y.setEnds((h={},h[t]=y.getEnd(t),h[e]=P,h)),P[e]=0,z=V.length-1;z>=Ft;z--)K[z].domFrag().remove();if(T.length>V.length){var le=document.createDocumentFragment();for(z=Ft;z<T.length;z++){var Gr=document.createElement("span");Gr.className="dcg-mq-digit",Gr.textContent=T[z];var or=new Ma(T[z]);or.parent=y,or.setDOM(Gr),le.appendChild(Gr),or[t]=y.getEnd(e),or[e]=0;var Gh=or[t];Gh[e]=or,y.setEnds((f={},f[t]=y.getEnd(t),f[e]=or,f))}y.domFrag().oneElement().appendChild(le)}var rl=this.exportLatex();if(rl!==n)return console.warn("tried updating latex efficiently but did not work. Attempted: "+n+" but wrote: "+rl),!1;var nl=y.getEnd(e);return nl&&nl.fixDigitGrouping(this.cursor.options),!0},i.prototype.renderLatexMathFromScratch=function(n){var o,c=this.root,u=this.cursor,h=te.all,f=te.eof,y=wt.skip(f).or(h.result(!1)).parse(n);if(c.setEnds((o={},o[t]=0,o[e]=0,o)),y&&y.children().adopt(c,0,0),y){var x=c.domFrag();x.children().remove(),x.oneElement().appendChild(y.html()),c.finalizeInsert(u.options,u)}else c.domFrag().empty()},i.prototype.renderLatexMath=function(n){var o=this.cursor,c=this.root;this.notify("replace"),o.clearSelection();var u=this.exportLatex();(!c.getEnd(t)||!c.getEnd(e)||u!==n)&&(this.updateLatexMathEfficiently(n,u)||this.renderLatexMathFromScratch(n),this.updateMathspeak()),o.insAtRightEnd(c)},i.prototype.renderLatexText=function(n){var o,c=this.root,u=this.cursor;c.domFrag().children().slice(1).remove(),c.setEnds((o={},o[t]=0,o[e]=0,o)),delete u.selection,u.show().insAtRightEnd(c);var h=te.regex,f=te.string,y=te.eof,x=te.all,L=f("$").then(wt).skip(f("$").or(y)).map(function(K){var z=new RootMathCommand(u);z.createBlocks();var se=z.getEnd(t);return K.children().adopt(se,0,0),z}),V=f("\\$").result("$"),T=V.or(h(/^[^$]/)).map(function(K){return new Kn(K)}),q=L.or(T).many(),_=q.skip(y).or(x.result(!1)).parse(n);if(_){for(var P=0;P<_.length;P+=1)_[P].adopt(c,c.getEnd(e),0);H(c.html()).appendTo(c.domFrag().oneElement()),c.finalizeInsert(u.options,u)}},i}(fh),Oc=function(l){return!1};ht.prototype.ignoreNextMousedown=Oc;var Un;(function(){Kr.onNotify(function(l,i){(i==="edit"||i==="replace")&&Un&&Un.cursor===l&&Un.cb()})})();var bh=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.handleMouseDown=function(o){var c=b(o.target,".dcg-mq-root-block"),u=c&&rt.getNodeOfElement(c)||rt.getNodeOfElement(n.root.domFrag().oneElement()),h=u.domFrag().firstNode().ownerDocument,f=u.controller,y=f.cursor,x=y.blink,L=f.getTextareaSpanOrThrow(),V=f.getTextareaOrThrow();if(o.preventDefault(),o.target.unselectable=!0,y.options.ignoreNextMousedown(o)||(y.options.ignoreNextMousedown=Oc,b(o.target,".dcg-mq-ignore-mousedown")))return;var T=null;function q(Te){T=Te.target}function _(Te){y.anticursor||y.startSelection(),f.seek(T,Te.clientX,Te.clientY).cursor.select(),y.selection&&y.controller.aria.clear().queue(y.selection.join("mathspeak")+" selected").alert(),T=null}function P(){c==null||c.removeEventListener("mousemove",q),h==null||h.removeEventListener("mousemove",_),h==null||h.removeEventListener("mouseup",z),Un=void 0}function K(){f.editable?(y.show(),y.controller.aria.queue(y.parent).alert()):H(L).detach()}function z(){y.blink=x,y.selection||K(),P()}var se;Un={cursor:y,cb:function(){se=!0,y.blink=x,y.clearSelection(),K(),P()}},!(f.blurred&&(c&&!f.editable&&H(c).prepend(H(L)),V.focus(),se))&&(y.blink=s,f.seek(o.target,o.clientX,o.clientY).cursor.startSelection(),c==null||c.addEventListener("mousemove",q),h==null||h.addEventListener("mousemove",_),h==null||h.addEventListener("mouseup",z))},n}return i.prototype.addMouseEventListener=function(){this.container.addEventListener("mousedown",this.handleMouseDown)},i.prototype.removeMouseEventListener=function(){this.container.removeEventListener("mousedown",this.handleMouseDown)},i.prototype.seek=function(n,o,c){for(var u=this.notify("select").cursor,h;n&&(h=rt.getNodeOfElement(n),!h);)n=n.parentElement;return h||(h=this.root),u.clearSelection().show(),h.seek(o,u),this.scrollHoriz(),this},i}(yh),wh=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.setOverflowClasses=function(){var n=this.root.domFrag().oneElement(),o=!1,c=!1;if(!this.blurred){var u=Je(n).width,h=n.scrollWidth,f=n.scrollLeft;o=h>u+f,c=f>0}n.classList.contains("dcg-mq-editing-overflow-right")!==o&&n.classList.toggle("dcg-mq-editing-overflow-right"),n.classList.contains("dcg-mq-editing-overflow-left")!==c&&n.classList.toggle("dcg-mq-editing-overflow-left")},i.prototype.scrollHoriz=function(){var n=this,o=this.cursor,c=o.selection,u=Je(this.root.domFrag().oneElement());if(o.domFrag().isEmpty()&&!c){this.cancelScrollHoriz&&(this.cancelScrollHoriz(),this.cancelScrollHoriz=void 0);var h=this.root.domFrag().oneElement(),f=h.scrollLeft;Re(this.getScrollAnimationDuration(),function(K,z,se){K>=1?(n.cancelScrollHoriz=void 0,h.scrollLeft=0,n.setOverflowClasses()):(n.cancelScrollHoriz=se,z(),h.scrollLeft=Math.round((1-K)*f))});return}else if(c){var L=Je(c.domFrag().oneElement()),V=L.left-(u.left+20),T=L.right-(u.right-20);if(c.getEnd(t)===o[e])if(V<0)var x=V;else if(T>0)if(L.left-T<u.left+20)var x=V;else var x=T;else return;else if(T>0)var x=T;else if(V<0)if(L.right-V>u.right-20)var x=T;else var x=V;else return}else{var y=Je(o.domFrag().oneElement()).left;if(y>u.right-20)var x=y-(u.right-20);else if(y<u.left+20)var x=y-(u.left+20);else return}var q=this.root.domFrag().oneElement();if(!(x<0&&q.scrollLeft===0)&&!(x>0&&q.scrollWidth<=q.scrollLeft+u.width)){this.cancelScrollHoriz&&(this.cancelScrollHoriz(),this.cancelScrollHoriz=void 0);var _=this.root.domFrag().oneElement(),P=_.scrollLeft;Re(this.getScrollAnimationDuration(),function(K,z,se){K>=1?(n.cancelScrollHoriz=void 0,_.scrollLeft=Math.round(P+x),n.setOverflowClasses()):(n.cancelScrollHoriz=se,z(),_.scrollLeft=Math.round(P+K*x))})}},i.prototype.getScrollAnimationDuration=function(){var n;return(n=this.options.scrollAnimationDuration)!==null&&n!==void 0?n:100},i}(bh);ht.prototype.substituteTextarea=function(){return p("textarea",{autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:!1,"x-palm-disable-ste-all":!0})};function Ic(l,i){return Lc(l[0],i)}ht.prototype.substituteKeyboardEvents=Ic;var Mc=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.selectFn=s,n}return i.prototype.createTextarea=function(){this.textareaSpan=p("span",{class:"dcg-mq-textarea"});var n=this.options.substituteTextarea();if(!n.nodeType)throw"substituteTextarea() must return a DOM element, got "+n;this.textarea=H(n).appendTo(this.textareaSpan).oneElement();var o=this;o.cursor.selectionChanged=function(){o.selectionChanged()}},i.prototype.selectionChanged=function(){var n=this;n.textareaSelectionTimeout||(n.textareaSelectionTimeout=setTimeout(function(){n.setTextareaSelection()}))},i.prototype.setTextareaSelection=function(){this.textareaSelectionTimeout=0;var n="";this.cursor.selection&&(n=this.cleanLatex(this.cursor.selection.join("latex")),this.options.statelessClipboard&&(n="$"+n+"$")),this.selectFn(n)},i.prototype.staticMathTextareaEvents=function(){var n=this;this.removeTextareaEventListener("cut"),this.removeTextareaEventListener("paste"),n.options.disableCopyPaste?this.removeTextareaEventListener("copy"):this.addTextareaEventListeners({copy:function(){n.setTextareaSelection()}}),this.addStaticFocusBlurListeners(),n.selectFn=function(o){var c=n.getTextareaOrThrow();c instanceof HTMLTextAreaElement&&(c.value=o,o&&c.select())}},i.prototype.editablesTextareaEvents=function(){var n=this,o=n.getTextareaOrThrow(),c=n.getTextareaSpanOrThrow();if(this.options.version<3){var u=this.options.assertJquery(),h=this.options.substituteKeyboardEvents(u(o),this);this.selectFn=function(y){h.select(y)}}else{var f=Lc(o,this).select;this.selectFn=f}H(this.container).prepend(H(c)),this.addEditableFocusBlurListeners(),this.updateMathspeak()},i.prototype.unbindEditablesEvents=function(){var n=this,o=n.getTextareaOrThrow(),c=n.getTextareaSpanOrThrow();this.selectFn=function(u){o instanceof HTMLTextAreaElement&&(o.value=u,u&&o.select())},H(c).remove(),this.removeTextareaEventListener("focus"),this.removeTextareaEventListener("blur"),n.blurred=!0,this.removeTextareaEventListener("cut"),this.removeTextareaEventListener("paste")},i.prototype.typedText=function(n){if(n===`
`)return this.handle("enter");var o=this.notify(void 0).cursor;o.parent.write(o,n),this.scrollHoriz()},i.prototype.cut=function(){var n=this,o=n.cursor;o.selection&&setTimeout(function(){n.notify("edit"),o.parent.bubble(function(c){c.reflow()}),n.options&&n.options.onCut&&n.options.onCut()})},i.prototype.copy=function(){this.setTextareaSelection()},i.prototype.paste=function(n){this.options.statelessClipboard&&(n.slice(0,1)==="$"&&n.slice(-1)==="$"?n=n.slice(1,-1):n="\\text{"+n+"}"),this.writeLatex(n).cursor.show(),this.scrollHoriz(),this.options&&this.options.onPaste&&this.options.onPaste()},i.prototype.setupStaticField=function(){this.mathspeakSpan=p("span",{class:"dcg-mq-mathspeak"}),H(this.container).prepend(H(this.mathspeakSpan)),this.updateMathspeak(),this.blurred=!0,this.cursor.hide().parent.blur(this.cursor)},i.prototype.updateMathspeak=function(){var n=this,o=n.getAriaLabel(),c=/[A-Za-z0-9]$/.test(o)?o+":":o,u=n.root.mathspeak().trim();this.aria.clear();var h=n.getTextareaOrThrow();n.mathspeakSpan?(h.setAttribute("aria-label",""),n.mathspeakSpan.textContent=(c+" "+u).trim()):h.setAttribute("aria-label",(c+" "+u+" "+n.ariaPostLabel).trim())},i}(wh),Nc=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.finalizeInsert=function(n,o){var c=this;c.postOrder(function(f){f.finalizeTree(n)}),c.postOrder(function(f){f.contactWeld(o)}),c.postOrder(function(f){f.blur(o)}),c.postOrder(function(f){f.reflow()});var u=c[e],h=c[t];u&&u.siblingCreated(n,t),h&&h.siblingCreated(n,e),c.bubble(function(f){f.reflow()})},i.prototype.prepareInsertionAt=function(n){var o=n.options.maxDepth;if(o!==void 0){var c=n.depth();if(c>o)return!1;this.removeNodesDeeperThan(o-c)}return!0},i.prototype.removeNodesDeeperThan=function(n){for(var o=0,c=[[this,o]],u;u=c.shift();){var h=u;h[0].children().each(function(f){var y=f instanceof kt?1:0;o=h[1]+y,o<=n?c.push([f,o]):(y?f.children():f).remove()})}},i}(ar),Ke=function(){function l(i,n){this.childCount=i,this.render=n}return l}(),Qe=function(l){$(i,l);function i(n,o,c){var u=l.call(this)||this;return u.textTemplate=[""],u.mathspeakTemplate=[""],u.setCtrlSeqHtmlAndText(n,o,c),u}return i.prototype.setEnds=function(n){d("MathCommand ends are never empty",n[t]&&n[e]),this.ends=n},i.prototype.getEnd=function(n){return this.ends[n]},i.prototype.setCtrlSeqHtmlAndText=function(n,o,c){this.ctrlSeq||(this.ctrlSeq=n),o&&(this.domView=o),c&&(this.textTemplate=c)},i.prototype.replaces=function(n){n.disown(),this.replacedFragment=n},i.prototype.isEmpty=function(){return this.foldChildren(!0,function(n,o){return n&&o.isEmpty()})},i.prototype.parser=function(){var n=this,o=wt.block;return o.times(this.numBlocks()).map(function(c){n.blocks=c;for(var u=0;u<c.length;u+=1)c[u].adopt(n,n.getEnd(e),0);return n})},i.prototype.createLeftOf=function(n){var o=this,c=o.replacedFragment;if(o.createBlocks(),l.prototype.createLeftOf.call(this,n),c){var u=o.getEnd(t);c.adopt(u,0,0),c.domFrag().appendTo(u.domFrag().oneElement()),o.placeCursor(n),o.prepareInsertionAt(n)}o.finalizeInsert(n.options,n),o.placeCursor(n)},i.prototype.createBlocks=function(){for(var n=this,o=n.numBlocks(),c=n.blocks=Array(o),u=0;u<o;u+=1){var h=c[u]=new kt;h.adopt(n,n.getEnd(e),0)}},i.prototype.placeCursor=function(n){n.insAtRightEnd(this.foldChildren(this.getEnd(t),function(o,c){return o.isEmpty()?o:c}))},i.prototype.moveTowards=function(n,o,c){var u;c==="up"?u=this.upInto:c==="down"&&(u=this.downInto);var h=u||this.getEnd(-n);o.insAtDirEnd(-n,h),o.controller.aria.queueDirEndOf(-n).queue(o.parent,!0)},i.prototype.deleteTowards=function(n,o){this.isEmpty()?o[n]=this.remove()[n]:this.moveTowards(n,o)},i.prototype.selectTowards=function(n,o){o[-n]=this,o[n]=this[n]},i.prototype.selectChildren=function(){return new Gc(this,this)},i.prototype.unselectInto=function(n,o){var c=o.anticursor,u=c.ancestors[this.id];o.insAtDirEnd(-n,u)},i.prototype.seek=function(n,o){function c(y){var x,L=y.domFrag().oneElement(),V=Je(L).left,T=V+L.offsetWidth;return x={},x[t]=V,x[e]=T,x}var u=this,h=c(u);if(n<h[t])return o.insLeftOf(u);if(n>h[e])return o.insRightOf(u);var f=h[t];u.eachChild(function(y){var x=c(y);if(n<x[t])return n-f<x[t]-n?y[t]?o.insAtRightEnd(y[t]):o.insLeftOf(u):o.insAtLeftEnd(y),!1;if(n>x[e]){y[e]?f=x[e]:h[e]-n<n-x[e]?o.insRightOf(u):o.insAtRightEnd(y);return}else return y.seek(n,o),!1})},i.prototype.numBlocks=function(){return this.domView.childCount},i.prototype.html=function(){var n=this.blocks;d("domView is defined",this.domView);var o=this.domView,c=o.render(n||[]);return this.setDOM(c),rt.linkElementByCmdNode(c,this),c},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+=this.ctrlSeq||"",this.eachChild(function(o){n.latex+="{";var c=n.latex.length;o.latexRecursive(n);var u=n.latex.length;c===u&&(n.latex+=" "),n.latex+="}"}),this.checkCursorContextClose(n)},i.prototype.text=function(){var n=this,o=0;return n.foldChildren(n.textTemplate[o],function(c,u){o+=1;var h=u.text();return c&&n.textTemplate[o]==="("&&h[0]==="("&&h.slice(-1)===")"?c+h.slice(1,-1)+n.textTemplate[o]:c+h+(n.textTemplate[o]||"")})},i.prototype.mathspeak=function(){var n=this,o=0;return n.foldChildren(n.mathspeakTemplate[o]||"Start"+n.ctrlSeq+" ",function(c,u){return o+=1,c+" "+u.mathspeak()+" "+(n.mathspeakTemplate[o]+" "||"End"+n.ctrlSeq+" ")})},i}(Nc),mt=function(l){$(i,l);function i(n,o,c,u){var h=l.call(this)||this;return h.setCtrlSeqHtmlTextAndMathspeak(n,o?new Ke(0,function(){return o.cloneNode(!0)}):void 0,c,u),h}return i.prototype.setCtrlSeqHtmlTextAndMathspeak=function(n,o,c,u){!c&&n&&(c=n.replace(/^\\/,"")),this.mathspeakName=u||c,l.prototype.setCtrlSeqHtmlAndText.call(this,n,o,[c||""])},i.prototype.parser=function(){return te.succeed(this)},i.prototype.numBlocks=function(){return 0},i.prototype.replaces=function(n){n.remove()},i.prototype.createBlocks=function(){},i.prototype.moveTowards=function(n,o){o.domFrag().insDirOf(n,this.domFrag()),o[-n]=this,o[n]=this[n],o.controller.aria.queue(this)},i.prototype.deleteTowards=function(n,o){o[n]=this.remove()[n]},i.prototype.seek=function(n,o){var c=this.domFrag().oneElement(),u=Je(c).left;return n-u<c.offsetWidth/2?o.insLeftOf(this):o.insRightOf(this),o},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+=this.ctrlSeq||"",this.checkCursorContextClose(n)},i.prototype.text=function(){return this.textTemplate.join("")},i.prototype.mathspeak=function(n){return this.mathspeakName||""},i.prototype.placeCursor=function(){},i.prototype.isEmpty=function(){return!0},i}(Qe),Kn=function(l){$(i,l);function i(n,o,c){return l.call(this,n,p("span",{},[o||p.text(n)]),void 0,c)||this}return i}(mt);function Kt(l,i,n){return function(){return new Kn(l,i?p.entityText(i):void 0,n)}}var vt=function(l){$(i,l);function i(n,o,c,u,h){var f=this;return h?f=l.call(this,n,p("span",{},[o||p.text(n||"")]),void 0,u)||this:f=l.call(this,n,p("span",{class:"dcg-mq-binary-operator"},o?[o]:[]),c,u)||this,f}return i}(mt);function Ia(l,i,n,o){return function(){return new vt(l,i?p.entityText(i):void 0,n,o)}}var kt=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ariaLabel="block",n}return i.prototype.join=function(n){return this.foldChildren("",function(o,c){return o+c[n]()})},i.prototype.html=function(){var n=document.createDocumentFragment();return this.eachChild(function(o){var c=o.html();n.appendChild(c)}),n},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),this.eachChild(function(o){return o.latexRecursive(n)}),this.checkCursorContextClose(n)},i.prototype.text=function(){var n=this.getEnd(t),o=this.getEnd(e);return n===o&&n!==0?n.text():this.join("text")},i.prototype.mathspeak=function(){var n="",o={};return this.controller&&(o=this.controller.options.autoOperatorNames),this.foldChildren([],function(c,u){if(u.isPartOfOperator)n+=u.mathspeak();else{if(n!==""){if(o._maxLength>0){var h=o[n.toLowerCase()];typeof h=="string"&&(n=h)}c.push(n+" "),n=""}var f=u.mathspeak(),y=u.ctrlSeq;isNaN(y)&&y!=="."&&(!u.parent||!u.parent.parent||!u.parent.parent.isTextBlock())&&(f=" "+f+" "),c.push(f)}return c}).join("").replace(/ +(?= )/g,"").replace(/(\.)([0-9]+)/g,function(c,u,h){return u+h.split("").join(" ").trim()})},i.prototype.keystroke=function(n,o,c){if(c.options.spaceBehavesLikeTab&&(n==="Spacebar"||n==="Shift-Spacebar")){o==null||o.preventDefault(),c.escapeDir(n==="Shift-Spacebar"?t:e,n,o);return}return l.prototype.keystroke.call(this,n,o,c)},i.prototype.moveOutOf=function(n,o,c){var u;if(c==="up"?u=this.parent.upInto:c==="down"&&(u=this.parent.downInto),!u&&this[n]){var h=-n;o.insAtDirEnd(h,this[n]),o.controller.aria.queueDirEndOf(h).queue(o.parent,!0)}else o.insDirOf(n,this.parent),o.controller.aria.queueDirOf(n).queue(this.parent)},i.prototype.selectOutOf=function(n,o){o.insDirOf(n,this.parent)},i.prototype.deleteOutOf=function(n,o){o.unwrapGramp()},i.prototype.seek=function(n,o){var c=this.getEnd(e);if(!c)return o.insAtRightEnd(this);var u=c.domFrag().oneElement(),h=Je(u).left;if(h+u.offsetWidth<n)return o.insAtRightEnd(this);var f=this.getEnd(t);if(n<Je(f.domFrag().oneElement()).left)return o.insAtLeftEnd(this);for(;n<Je(c.domFrag().oneElement()).left;)c=c[t];return c.seek(n,o)},i.prototype.chToCmd=function(n,o){var c;return n.match(/^[a-eg-zA-Z]$/)?new Hr(n):/^\d$/.test(n)?new Ma(n):o&&o.typingSlashWritesDivisionSymbol&&n==="/"?w["\xF7"](n):o&&o.typingAsteriskWritesTimesSymbol&&n==="*"?w["\xD7"](n):o&&o.typingPercentWritesPercentOf&&n==="%"?w.percentof(n):(c=mr[n]||w[n])?c.constructor?new c(n):c(n):new Kn(n)},i.prototype.write=function(n,o){var c=this.chToCmd(o,n.options);n.selection&&c.replaces(n.replaceSelection()),n.isTooDeep()||(c.createLeftOf(n.show()),o==="/"?n.controller.aria.alert("over"):n.controller.aria.alert(c.mathspeak({createdLeftOf:n})))},i.prototype.writeLatex=function(n,o){var c=te.all,u=te.eof,h=wt.skip(u).or(c.result(!1)).parse(o);if(h&&!h.isEmpty()&&h.prepareInsertionAt(n)){h.children().adopt(n.parent,n[t],n[e]),H(h.html()).insertBefore(n.domFrag()),n[t]=h.getEnd(e),h.finalizeInsert(n.options,n);var f=h.getEnd(e),y=h.getEnd(t),x=f[e],L=y[t];x&&x.siblingCreated(n.options,t),L&&L.siblingCreated(n.options,e),n.parent.bubble(function(V){V.reflow()})}},i.prototype.focus=function(){return this.domFrag().addClass("dcg-mq-hasCursor"),this.domFrag().removeClass("dcg-mq-empty"),this},i.prototype.blur=function(n){return this.domFrag().removeClass("dcg-mq-hasCursor"),this.isEmpty()&&(this.domFrag().addClass("dcg-mq-empty"),n&&this.isQuietEmptyDelimiter(n.options.quietEmptyDelimiters)&&this.domFrag().addClass("dcg-mq-quiet-delimiter")),this},i}(Nc);ht.prototype.mouseEvents=!0,$t.StaticMath=function(l){var i;return i=function(n){$(o,n);function o(c){var u=n.call(this,c)||this,h=u.innerFields=[];return u.__controller.root.postOrder(function(f){f.registerInnerField(h,l.InnerMathField)}),u}return o.prototype.__mathquillify=function(c,u){return this.config(c),n.prototype.mathquillify.call(this,"dcg-mq-math-mode"),this.__controller.setupStaticField(),this.__options.mouseEvents&&(this.__controller.addMouseEventListener(),this.__controller.staticMathTextareaEvents()),this},o.prototype.latex=function(c){var u=n.prototype.latex.apply(this,arguments);if(arguments.length>0){var h=this.innerFields=[];this.__controller.root.postOrder(function(f){f.registerInnerField(h,l.InnerMathField)}),this.__controller.updateMathspeak()}return u},o.prototype.setAriaLabel=function(c){return this.__controller.setAriaLabel(c),this},o.prototype.getAriaLabel=function(){return this.__controller.getAriaLabel()},o}(l.AbstractMathQuill),i.RootBlock=kt,i};var qc=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i}(kt);Fc(qc.prototype),$t.MathField=function(l){var i;return i=function(n){$(o,n);function o(){return n!==null&&n.apply(this,arguments)||this}return o.prototype.__mathquillify=function(c,u){return this.config(c),u>1&&(this.__controller.root.reflow=s),n.prototype.mathquillify.call(this,"dcg-mq-editable-field dcg-mq-math-mode"),delete this.__controller.root.reflow,this},o}(l.EditableField),i.RootBlock=qc,i},$t.InnerMathField=function(l){return d("MathField class is defined",l.MathField),function(i){$(n,i);function n(){return i!==null&&i.apply(this,arguments)||this}return n.prototype.makeStatic=function(){this.__controller.editable=!1,this.__controller.root.blur(),this.__controller.unbindEditablesEvents(),H(this.__controller.container).removeClass("dcg-mq-editable-field")},n.prototype.makeEditable=function(){this.__controller.editable=!0,this.__controller.editablesTextareaEvents(),this.__controller.cursor.insAtRightEnd(this.__controller.root),H(this.__controller.container).addClass("dcg-mq-editable-field")},n}(l.MathField)};var Pi=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.finalizeTree=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.siblingDeleted=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.siblingCreated=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.sharedSiblingMethod=function(n,o){o!==t&&this[e]instanceof i||this.fixDigitGrouping(n)},i.prototype.fixDigitGrouping=function(n){if(n.enableDigitGrouping){var o=this,c=this,u=0,h=[],f="\\ ",y=".",x=o;do if(/^[0-9]$/.test(x.ctrlSeq))o=x;else if(x.ctrlSeq===f)o=x,u+=1;else if(x.ctrlSeq===y)o=x,h.push(x);else break;while(x=o[t]);for(;x=c[e];)if(/^[0-9]$/.test(x.ctrlSeq))c=x;else if(x.ctrlSeq===f)c=x,u+=1;else if(x.ctrlSeq===y)c=x,h.push(x);else break;for(;c!==o&&o&&o.ctrlSeq===f;)o=o[e],u-=1;for(;c!==o&&c&&c.ctrlSeq===f;)c=c[t],u-=1;if(!(o===c&&o&&o.ctrlSeq===f)){var L=u>0||h.length>1;L?this.removeGroupingBetween(o,c):h[0]?(h[0]!==o&&this.addGroupingBetween(h[0][t],o),h[0]!==c&&this.removeGroupingBetween(h[0][e],c)):this.addGroupingBetween(c,o)}}},i.prototype.removeGroupingBetween=function(n,o){var c=n;do if(c instanceof i&&c.setGroupingClass(void 0),!c||c===o)break;while(c=c[e])},i.prototype.addGroupingBetween=function(n,o){for(var f=n,c=0,u=0,f=n;f&&(u+=1,f!==o);)f=f[t];var h=u%3;h===0&&(h=3);for(var f=n;f;){c+=1;var y=void 0;if(u>=4&&(c===u?y="dcg-mq-group-leading-"+h:c%3===0&&c!==u&&(y="dcg-mq-group-start"),y||(y="dcg-mq-group-other")),f instanceof i&&f.setGroupingClass(y),f===o)break;f=f[t]}},i.prototype.setGroupingClass=function(n){this._groupingClass!==n&&(this._groupingClass&&this.domFrag().removeClass(this._groupingClass),n&&this.domFrag().addClass(n),this._groupingClass=n)},i}(mt),Ma=function(l){$(i,l);function i(n,o){return l.call(this,n,p("span",{class:"dcg-mq-digit"},[p.text(n)]),void 0,o)||this}return i.prototype.createLeftOf=function(n){var o=n[t],c=o&&o[t],u=n.parent.parent instanceof Ht?n.parent.parent.sub:void 0;n.options.autoSubscriptNumerals&&n.parent!==u&&(o instanceof zr&&o.isItalic!==!1||o instanceof Ht&&c instanceof zr&&c.isItalic!==!1)?(new Hc().createLeftOf(n),l.prototype.createLeftOf.call(this,n),n.insRightOf(n.parent.parent)):l.prototype.createLeftOf.call(this,n)},i.prototype.mathspeak=function(n){if(n&&n.createdLeftOf){var o=n.createdLeftOf,c=o[t],u=c&&c[t],h=o.parent.parent instanceof Ht?o.parent.parent.sub:void 0;if(o.options.autoSubscriptNumerals&&o.parent!==h&&(c instanceof zr&&c.isItalic!==!1||o[t]instanceof Ht&&u instanceof zr&&u.isItalic!==!1))return"Subscript "+l.prototype.mathspeak.call(this)+" Baseline"}return l.prototype.mathspeak.call(this)},i}(Pi),zr=function(l){$(i,l);function i(n,o){return l.call(this,n,p("var",{},[o||p.text(n)]))||this}return i.prototype.text=function(){var n=this.ctrlSeq||"";return this.isPartOfOperator?n[0]=="\\"?n=n.slice(1,n.length):n[n.length-1]==" "&&(n=n.slice(0,-1)):(this[t]&&!(this[t]instanceof i)&&!(this[t]instanceof vt)&&this[t].ctrlSeq!=="\\ "&&(n="*"+n),this[e]&&!(this[e]instanceof vt)&&!(this[e]instanceof Ht)&&(n+="*")),n},i.prototype.mathspeak=function(){var n=this.ctrlSeq||"";return this.isPartOfOperator||n.length>1||this.parent&&this.parent.parent&&this.parent.parent.isTextBlock()?l.prototype.mathspeak.call(this):'"'+n+'"'},i}(mt);function Wt(l,i,n){return function(){return new zr(l,p.entityText(i))}}ht.prototype.autoCommands={_maxLength:0},Tr.autoCommands=function(l){if(typeof l!="string"||!/^[a-z]+(?: [a-z]+)*$/i.test(l))throw'"'+l+'" not a space-delimited list of only letters';for(var i=l.split(" "),n={},o=0,c=0;c<i.length;c+=1){var u=i[c];if(u.length<2)throw'autocommand "'+u+'" not minimum length of 2';if(w[u]===_c)throw'"'+u+'" is a built-in operator name';n[u]=1,o=a(o,u.length)}return n._maxLength=o,n},ht.prototype.quietEmptyDelimiters={},Tr.quietEmptyDelimiters=function(l){l===void 0&&(l="");for(var i=l.split(" "),n={},o=0;o<i.length;o+=1){var c=i[o];n[c]=1}return n},ht.prototype.autoParenthesizedFunctions={_maxLength:0},Tr.autoParenthesizedFunctions=function(l){if(typeof l!="string"||!/^[a-z]+(?: [a-z]+)*$/i.test(l))throw'"'+l+'" not a space-delimited list of only letters';for(var i=l.split(" "),n={},o=0,c=0;c<i.length;c+=1){var u=i[c];if(u.length<2)throw'autocommand "'+u+'" not minimum length of 2';n[u]=1,o=a(o,u.length)}return n._maxLength=o,n};var Hr=function(l){$(i,l);function i(n){var o=l.call(this,n)||this;return o.letter=n,o}return i.prototype.checkAutoCmds=function(n){if(!this.shouldIgnoreSubstitutionInSimpleSubscript(n.options)){var o=n.options.autoCommands,c=o._maxLength||0;if(c>0){for(var u="",h=this,f=0;h instanceof i&&h.ctrlSeq===h.letter&&f<c;)u=h.letter+u,h=h[t],f+=1;for(;u.length;){if(o.hasOwnProperty(u)){for(h=this,f=1;h&&f<u.length;f+=1,h=h[t]);new it(h,this).remove(),n[t]=h[t];var y=w[u],x;return ih(y)?x=new y(u):x=y(u),x.createLeftOf(n)}u=u.slice(1)}}}},i.prototype.autoParenthesize=function(n){var o=n.parent.getEnd(e);if(!(o&&o instanceof Yt&&o.ctrlSeq==="\\left(")&&!this.shouldIgnoreSubstitutionInSimpleSubscript(n.options)){for(var c="",u=this,h=0,f=n.options.autoParenthesizedFunctions,y=f._maxLength||0,x=n.options.autoOperatorNames;u instanceof i&&h<y;)c=u.letter+c,u=u[t],h+=1;for(;c.length;){if(f.hasOwnProperty(c)&&x.hasOwnProperty(c))return n.parent.write(n,"(");c=c.slice(1)}}},i.prototype.createLeftOf=function(n){l.prototype.createLeftOf.call(this,n),this.checkAutoCmds(n),this.autoParenthesize(n)},i.prototype.italicize=function(n){return this.isItalic=n,this.isPartOfOperator=!n,this.domFrag().toggleClass("dcg-mq-operator-name",!n),this},i.prototype.finalizeTree=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.siblingDeleted=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.siblingCreated=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.sharedSiblingMethod=function(n,o){o!==t&&this[e]instanceof i||this.autoUnItalicize(n)},i.prototype.autoUnItalicize=function(n){var o=n.autoOperatorNames;if(o._maxLength!==0&&!this.shouldIgnoreSubstitutionInSimpleSubscript(n)){for(var c=this.letter,u=this[t];u instanceof i;u=u[t])c=u.letter+c;for(var h=this[e];h instanceof i;h=h[e])c+=h.letter;var f=u&&u[e],y=h&&h[t];new it(f||this.parent.getEnd(t),y||this.parent.getEnd(e)).each(function(Ft){Ft instanceof i&&(Ft.italicize(!0).domFrag().removeClass("dcg-mq-first dcg-mq-last dcg-mq-followed-by-supsub"),Ft.ctrlSeq=Ft.letter)});var x=o._maxLength||0;e:for(var L=0,V=u[e]||this.parent.getEnd(t);V&&L<c.length;L+=1,V=V[e])for(var T=r(x,c.length-L);T>0;T-=1){var q=c.slice(L,L+T),_=void 0;if(o.hasOwnProperty(q)){for(var P=0,K=V;P<T;P+=1,K=K[e])K instanceof i&&(K.italicize(!1),_=K);var z=Bi.hasOwnProperty(q);if(V.ctrlSeq=(z?"\\":"\\operatorname{")+V.ctrlSeq,_.ctrlSeq+=z?" ":"}",vh.hasOwnProperty(q)){var se=_[t],Te=se&&se[t],ce=Te&&Te[t];ce.domFrag().addClass("dcg-mq-last")}if(this.shouldOmitPadding(V[t])||V.domFrag().addClass("dcg-mq-first"),!this.shouldOmitPadding(_[e]))if(_[e]instanceof Ht){var Ie=_[e],xt=Ie.siblingCreated=Ie.siblingDeleted=function(){Ie.domFrag().toggleClass("dcg-mq-after-operator-name",!(Ie[e]instanceof Yt))};xt()}else _.domFrag().toggleClass("dcg-mq-last",!(_[e]instanceof Yt));L+=T-1,V=_;continue e}}}},i.prototype.shouldOmitPadding=function(n){return!n||n.ctrlSeq==="."||n instanceof vt||n instanceof Yr},i}(zr),Bi={};ht.prototype.autoOperatorNames=kh();var vh={limsup:1,liminf:1,projlim:1,injlim:1};function kh(){for(var l={_maxLength:9},i="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "),n=0;n<i.length;n+=1)Bi[i[n]]=l[i[n]]=1;for(var o="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" "),n=0;n<o.length;n+=1)Bi[o[n]]=1;for(var c="sin cos tan sec cosec csc cotan cot ctg".split(" "),n=0;n<c.length;n+=1)l[c[n]]=l["arc"+c[n]]=l[c[n]+"h"]=l["ar"+c[n]+"h"]=l["arc"+c[n]+"h"]=1;for(var u="gcf hcf lcm proj span".split(" "),n=0;n<u.length;n+=1)l[u[n]]=1;return l}Tr.autoOperatorNames=function(l){if(typeof l!="string")throw'"'+l+'" not a space-delimited list';if(!/^[a-z\|\-]+(?: [a-z\|\-]+)*$/i.test(l))throw'"'+l+'" not a space-delimited list of letters or "|"';for(var i=l.split(" "),n={},o=0,c=0;c<i.length;c+=1){var u=i[c];if(u.length<2)throw'"'+u+'" not minimum length of 2';if(u.indexOf("|")<0)n[u]=u,o=a(o,u.length);else{var h=u.split("|");if(h.length>2)throw'"'+u+'" has more than 1 mathspeak delimiter';if(h[0].length<2)throw'"'+u[0]+'" not minimum length of 2';n[h[0]]=h[1].replace(/-/g," "),o=a(o,h[0].length)}}return n._maxLength=o,n};var _c=function(l){$(i,l);function i(n){return l.call(this,n||"")||this}return i.prototype.createLeftOf=function(n){for(var o=this.ctrlSeq,c=0;c<o.length;c+=1)new Hr(o.charAt(c)).createLeftOf(n)},i.prototype.parser=function(){for(var n=this.ctrlSeq,o=new kt,c=0;c<n.length;c+=1)new Hr(n.charAt(c)).adopt(o,o.getEnd(e),0);return te.succeed(o.children())},i}(mt);for(var Rc in ht.prototype.autoOperatorNames)ht.prototype.autoOperatorNames.hasOwnProperty(Rc)&&(w[Rc]=_c);w.operatorname=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.createLeftOf=function(){},i.prototype.numBlocks=function(){return 1},i.prototype.parser=function(){return wt.block.map(function(n){var o=!0,c="",u=n.children();return u.each(function(h){h instanceof Hr?c+=h.letter:o=!1}),o&&c==="ans"?Yc():u})},i}(Qe),w.f=function(l){$(i,l);function i(){var n=this,o="f";return n=l.call(this,o)||this,n.letter=o,n.domView=new Ke(0,function(){return p("var",{class:"dcg-mq-f"},[p.text("f")])}),n}return i.prototype.italicize=function(n){return this.domFrag().eachElement(function(o){return o.textContent="f"}),this.domFrag().toggleClass("dcg-mq-f",n),l.prototype.italicize.call(this,n)},i}(Hr),w[" "]=w.space=function(){return new Pi("\\ ",p("span",{},[p.text(k)])," ")},w["."]=function(){return new Pi(".",p("span",{class:"dcg-mq-digit"},[p.text(".")]),".")},w["'"]=w.prime=Kt("'","&prime;","prime"),w["\u2033"]=w.dprime=Kt("\u2033","&Prime;","double prime"),w.backslash=Kt("\\backslash ","\\","backslash"),mr["\\"]||(mr["\\"]=w.backslash),w.$=Kt("\\$","$","dollar"),w.square=Kt("\\square ","\u25A1","square"),w.mid=Kt("\\mid ","\u2223","mid");var Wn=function(l){$(i,l);function i(n,o,c){return l.call(this,n,p("span",{class:"dcg-mq-nonSymbola"},[o||p.text(n)]))||this}return i}(mt);w["@"]=function(){return new Wn("@")},w["&"]=function(){return new Wn("\\&",p.entityText("&amp;"),"and")},w["%"]=function(l){$(i,l);function i(){return l.call(this,"\\%",p.text("%"),"percent")||this}return i.prototype.parser=function(){var n=te.optWhitespace,o=te.string;return n.then(o("\\operatorname{of}").map(function(){return jc()})).or(l.prototype.parser.call(this))},i}(Wn),w["\u2225"]=w.parallel=Kt("\\parallel ","&#x2225;","parallel"),w["\u2226"]=w.nparallel=Kt("\\nparallel ","&#x2226;","not parallel"),w["\u27C2"]=w.perp=Kt("\\perp ","&#x27C2;","perpendicular"),w.alpha=w.beta=w.gamma=w.delta=w.zeta=w.eta=w.theta=w.iota=w.kappa=w.mu=w.nu=w.xi=w.rho=w.sigma=w.tau=w.chi=w.psi=w.omega=function(l){return new zr("\\"+l+" ",p.entityText("&"+l+";"))},w.phi=Wt("\\phi ","&#981;","phi"),w.phiv=w.varphi=Wt("\\varphi ","&phi;","phi"),w.epsilon=Wt("\\epsilon ","&#1013;","epsilon"),w.epsiv=w.varepsilon=Wt("\\varepsilon ","&epsilon;","epsilon"),w.piv=w.varpi=Wt("\\varpi ","&piv;","piv"),w.sigmaf=w.sigmav=w.varsigma=Wt("\\varsigma ","&sigmaf;","sigma"),w.thetav=w.vartheta=w.thetasym=Wt("\\vartheta ","&thetasym;","theta"),w.upsilon=w.upsi=Wt("\\upsilon ","&upsilon;","upsilon"),w.gammad=w.Gammad=w.digamma=Wt("\\digamma ","&#989;","gamma"),w.kappav=w.varkappa=Wt("\\varkappa ","&#1008;","kappa"),w.rhov=w.varrho=Wt("\\varrho ","&#1009;","rho"),w.pi=w.\u03C0=function(){return new Wn("\\pi ",p.entityText("&pi;"),"pi")},w.lambda=function(){return new Wn("\\lambda ",p.entityText("&lambda;"),"lambda")},w.Upsilon=w.Upsi=w.upsih=w.Upsih=function(){return new mt("\\Upsilon ",p("var",{style:"font-family: serif"},[p.entityText("&upsih;")]),"capital upsilon")},w.Gamma=w.Delta=w.Theta=w.Lambda=w.Xi=w.Pi=w.Sigma=w.Phi=w.Psi=w.Omega=w.forall=function(l){return new Kn("\\"+l+" ",p.entityText("&"+l+";"))};var ft=function(l){$(i,l);function i(n){var o=l.call(this)||this;return o.latexStr=n,o}return i.prototype.createLeftOf=function(n){var o=wt.parse(this.latexStr);o.children().adopt(n.parent,n[t],n[e]),n[t]=o.getEnd(e),H(o.html()).insertBefore(n.domFrag()),o.finalizeInsert(n.options,n);var c=o.getEnd(e),u=c&&c[e];u&&u.siblingCreated(n.options,t);var h=o.getEnd(t),f=h&&h[t];f&&f.siblingCreated(n.options,e),n.parent.bubble(function(y){y.reflow()})},i.prototype.mathspeak=function(){return wt.parse(this.latexStr).mathspeak()},i.prototype.parser=function(){var n=wt.parse(this.latexStr).children();return te.succeed(n)},i}(Qe);w["\u2070"]=function(){return new ft("^0")},w["\xB9"]=function(){return new ft("^1")},w["\xB2"]=function(){return new ft("^2")},w["\xB3"]=function(){return new ft("^3")},w["\u2074"]=function(){return new ft("^4")},w["\u2075"]=function(){return new ft("^5")},w["\u2076"]=function(){return new ft("^6")},w["\u2077"]=function(){return new ft("^7")},w["\u2078"]=function(){return new ft("^8")},w["\u2079"]=function(){return new ft("^9")},w["\xBC"]=function(){return new ft("\\frac14")},w["\xBD"]=function(){return new ft("\\frac12")},w["\xBE"]=function(){return new ft("\\frac34")},w["\u221A"]=function(){return new ft("\\sqrt{}")};function Na(l){if(!l)return!1;var i=l[t];if(i){if(i instanceof vt||/^(\\ )|[,;:\(\[]$/.test(i.ctrlSeq))return!1}else return l.parent&&l.parent.parent&&l.parent.parent.isStyleBlock()?Na(l.parent.parent):!1;return!0}var zn=function(l){$(i,l);function i(n,o,c){return l.call(this,n,o,void 0,c,!0)||this}return i.prototype.contactWeld=function(n,o){this.sharedSiblingMethod(n.options,o)},i.prototype.siblingCreated=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.siblingDeleted=function(n,o){this.sharedSiblingMethod(n,o)},i.prototype.sharedSiblingMethod=function(n,o){if(o!==e)return this.domFrag().oneElement().className=Na(this)?"dcg-mq-binary-operator":"",this},i}(vt);w["+"]=function(l){$(i,l);function i(){return l.call(this,"+",p.text("+"))||this}return i.prototype.mathspeak=function(){return Na(this)?"plus":"positive"},i}(zn);var Pc=function(l){$(i,l);function i(){return l.call(this,"-",p.entityText("&minus;"))||this}return i.prototype.mathspeak=function(){return Na(this)?"minus":"negative"},i}(zn);w["\u2212"]=w["\u2014"]=w["\u2013"]=w["-"]=Pc,w["\xB1"]=w.pm=w.plusmn=w.plusminus=function(){return new zn("\\pm ",p.entityText("&plusmn;"),"plus-or-minus")},w.mp=w.mnplus=w.minusplus=function(){return new zn("\\mp ",p.entityText("&#8723;"),"minus-or-plus")},mr["*"]=w.sdot=w.cdot=Ia("\\cdot ","&middot;","*","times");var Bc=function(l){$(i,l);function i(){return l.call(this,"\\to ",p.entityText("&rarr;"),"to")||this}return i.prototype.deleteTowards=function(n,o){if(n===t){var c=o[t];new it(c,this).remove(),o[t]=c[t],new Pc().createLeftOf(o),o[t].bubble(function(u){u.reflow()});return}l.prototype.deleteTowards.call(this,n,o)},i}(vt);w["\u2192"]=w.to=Bc;var Hn=function(l){$(i,l);function i(n,o){var c=this,u=o?"Strict":"";return c=l.call(this,n["ctrlSeq".concat(u)],p.entityText(n["htmlEntity".concat(u)]),n["text".concat(u)],n["mathspeak".concat(u)])||this,c.data=n,c.strict=o,c}return i.prototype.swap=function(n){this.strict=n;var o=n?"Strict":"";this.ctrlSeq=this.data["ctrlSeq".concat(o)],this.domFrag().children().replaceWith(H(p.entityText(this.data["htmlEntity".concat(o)]))),this.textTemplate=[this.data["text".concat(o)]],this.mathspeakName=this.data["mathspeak".concat(o)]},i.prototype.deleteTowards=function(n,o){if(n===t&&!this.strict){this.swap(!0),this.bubble(function(c){c.reflow()});return}l.prototype.deleteTowards.call(this,n,o)},i}(vt),$c={ctrlSeq:"\\le ",htmlEntity:"&le;",text:"\u2264",mathspeak:"less than or equal to",ctrlSeqStrict:"<",htmlEntityStrict:"&lt;",textStrict:"<",mathspeakStrict:"less than"},Uc={ctrlSeq:"\\ge ",htmlEntity:"&ge;",text:"\u2265",mathspeak:"greater than or equal to",ctrlSeqStrict:">",htmlEntityStrict:"&gt;",textStrict:">",mathspeakStrict:"greater than"},xh=function(l){$(i,l);function i(){return l.call(this,Uc,!0)||this}return i.prototype.createLeftOf=function(n){var o=n[t];if(o instanceof vt&&o.ctrlSeq==="-"){var c=o;n[t]=c[t],c.remove(),new Bc().createLeftOf(n),n[t].bubble(function(u){u.reflow()});return}l.prototype.createLeftOf.call(this,n)},i}(Hn);w["<"]=w.lt=function(){return new Hn($c,!0)},w[">"]=w.gt=xh,w["\u2264"]=w.le=w.leq=function(){return new Hn($c,!1)},w["\u2265"]=w.ge=w.geq=function(){return new Hn(Uc,!1)},w.infty=w.infin=w.infinity=Kt("\\infty ","&infin;","infinity"),w["\u2260"]=w.ne=w.neq=Ia("\\ne ","&ne;","not equal");var Kc=function(l){$(i,l);function i(){return l.call(this,"=",p.text("="),"=","equals")||this}return i.prototype.createLeftOf=function(n){var o=n[t];if(o instanceof Hn&&o.strict){o.swap(!1),o.bubble(function(c){c.reflow()});return}l.prototype.createLeftOf.call(this,n)},i}(vt);w["="]=Kc,w["\xD7"]=w.times=w.cross=Ia("\\times ","&times;","[x]","times"),w["\xF7"]=w.div=w.divide=w.divides=Ia("\\div ","&divide;","[/]","over");var Wc=function(l){$(i,l);function i(){return l.call(this,"\\sim ",p.text("~"),"~","tilde")||this}return i.prototype.createLeftOf=function(n){if(n[t]instanceof i){var o=n[t];n[t]=o[t],o.remove(),new zc().createLeftOf(n),n[t].bubble(function(c){c.reflow()});return}l.prototype.createLeftOf.call(this,n)},i}(vt),zc=function(l){$(i,l);function i(){return l.call(this,"\\approx ",p.entityText("&approx;"),"\u2248","approximately equal")||this}return i.prototype.deleteTowards=function(n,o){if(n===t){var c=o[t];new it(c,this).remove(),o[t]=c[t],new Wc().createLeftOf(o),o[t].bubble(function(u){u.reflow()});return}l.prototype.deleteTowards.call(this,n,o)},i}(vt);w.tildeNbsp=Kt("~",k," "),w.sim=Wc,w["\u2248"]=w.approx=zc,mr["~"]=w.sim,w["~"]=w.tildeNbsp,Tr.interpretTildeAsSim=function(l){var i=!!l;return i?w["~"]=w.sim:w["~"]=w.tildeNbsp,i};var Yn={sqrt:{width:"",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 32 54"},[p("path",{d:"M0 33 L7 27 L12.5 47 L13 47 L30 0 L32 0 L13 54 L11 54 L4.5 31 L0 33"})])}},"|":{width:".4em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 10 54"},[p("path",{d:"M4.4 0 L4.4 54 L5.6 54 L5.6 0"})])}},"[":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 11 24"},[p("path",{d:"M8 0 L3 0 L3 24 L8 24 L8 23 L4 23 L4 1 L8 1"})])}},"]":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 11 24"},[p("path",{d:"M3 0 L8 0 L8 24 L3 24 L3 23 L7 23 L7 1 L3 1"})])}},"(":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"3 0 106 186"},[p("path",{d:"M85 0 A61 101 0 0 0 85 186 L75 186 A75 101 0 0 1 75 0"})])}},")":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"3 0 106 186"},[p("path",{d:"M24 0 A61 101 0 0 1 24 186 L34 186 A75 101 0 0 0 34 0"})])}},"{":{width:".7em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"10 0 210 350"},[p("path",{d:"M170 0 L170 6 A47 52 0 0 0 123 60 L123 127 A35 48 0 0 1 88 175 A35 48 0 0 1 123 223 L123 290 A47 52 0 0 0 170 344 L170 350 L160 350 A58 49 0 0 1 102 301 L103 220 A45 40 0 0 0 58 180 L58 170 A45 40 0 0 0 103 130 L103 49 A58 49 0 0 1 161 0"})])}},"}":{width:".7em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"10 0 210 350"},[p("path",{d:"M60 0 L60 6 A47 52 0 0 1 107 60 L107 127 A35 48 0 0 0 142 175 A35 48 0 0 0 107 223 L107 290 A47 52 0 0 1 60 344 L60 350 L70 350 A58 49 0 0 0 128 301 L127 220 A45 40 0 0 1 172 180 L172 170 A45 40 0 0 1 127 130 L127 49 A58 49 0 0 0 70 0"})])}},"&#8741;":{width:".7em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 10 54"},[p("path",{d:"M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0"})])}},"&lang;":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 10 54"},[p("path",{d:"M6.8 0 L3.2 27 L6.8 54 L7.8 54 L4.2 27 L7.8 0"})])}},"&rang;":{width:".55em",html:function(){return p("svg",{preserveAspectRatio:"none",viewBox:"0 0 10 54"},[p("path",{d:"M3.2 0 L6.8 27 L3.2 54 L2.2 54 L5.8 27 L2.2 0"})])}}},zt=function(l){$(i,l);function i(n,o,c,u,h){var f=l.call(this,n,new Ke(1,function(y){return p.block(o,c,y[0])}))||this;return f.ariaLabel=u||n.replace(/^\\/,""),f.mathspeakTemplate=["Start"+f.ariaLabel+",","End"+f.ariaLabel],f.shouldNotSpeakDelimiters=h&&h.shouldNotSpeakDelimiters,f}return i.prototype.mathspeak=function(n){return!this.shouldNotSpeakDelimiters||n&&n.ignoreShorthand?l.prototype.mathspeak.call(this):this.foldChildren("",function(o,c){return o+" "+c.mathspeak(n)}).trim()},i}(Qe);w.mathrm=function(l){$(i,l);function i(){return l.call(this,"\\mathrm","span",{class:"dcg-mq-roman dcg-mq-font"},"Roman Font",{shouldNotSpeakDelimiters:!0})||this}return i.prototype.isTextBlock=function(){return!0},i}(zt),w.mathit=function(){return new zt("\\mathit","i",{class:"dcg-mq-font"},"Italic Font")},w.mathbf=function(){return new zt("\\mathbf","b",{class:"dcg-mq-font"},"Bold Font")},w.mathsf=function(){return new zt("\\mathsf","span",{class:"dcg-mq-sans-serif dcg-mq-font"},"Serif Font")},w.mathtt=function(){return new zt("\\mathtt","span",{class:"dcg-mq-monospace dcg-mq-font"},"Math Text")},w.underline=function(){return new zt("\\underline","span",{class:"dcg-mq-non-leaf dcg-mq-underline"},"Underline")},w.overline=w.bar=function(){return new zt("\\overline","span",{class:"dcg-mq-non-leaf dcg-mq-overline"},"Overline")},w.overrightarrow=function(){return new zt("\\overrightarrow","span",{class:"dcg-mq-non-leaf dcg-mq-overarrow dcg-mq-arrow-right"},"Over Right Arrow")},w.overleftarrow=function(){return new zt("\\overleftarrow","span",{class:"dcg-mq-non-leaf dcg-mq-overarrow dcg-mq-arrow-left"},"Over Left Arrow")},w.overleftrightarrow=function(){return new zt("\\overleftrightarrow ","span",{class:"dcg-mq-non-leaf dcg-mq-overarrow dcg-mq-arrow-leftright"},"Over Left and Right Arrow")},w.overarc=function(){return new zt("\\overarc","span",{class:"dcg-mq-non-leaf dcg-mq-overarc"},"Over Arc")},w.dot=function(){return new Qe("\\dot",new Ke(1,function(l){return p("span",{class:"dcg-mq-non-leaf"},[p("span",{class:"dcg-mq-dot-recurring-inner"},[p("span",{class:"dcg-mq-dot-recurring"},[p.text(G)]),p.block("span",{class:"dcg-mq-empty-box"},l[0])])])}))},w.textcolor=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.setColor=function(n){this.color=n,this.domView=new Ke(1,function(o){return p.block("span",{class:"dcg-mq-textcolor",style:"color:"+n},o[0])}),this.ariaLabel=n.replace(/^\\/,""),this.mathspeakTemplate=["Start "+this.ariaLabel+",","End "+this.ariaLabel]},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n);var o=this.blocks[0];n.latex+="\\textcolor{"+this.color+"}{",o.latexRecursive(n),n.latex+="}",this.checkCursorContextClose(n)},i.prototype.parser=function(){var n=this,o=te.optWhitespace,c=te.string,u=te.regex;return o.then(c("{")).then(u(/^[#\w\s.,()%-]*/)).skip(c("}")).then(function(h){return n.setColor(h),l.prototype.parser.call(n)})},i.prototype.isStyleBlock=function(){return!0},i}(Qe);var hw=w.class=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.parser=function(){var n=this,o=te.string,c=te.regex;return te.optWhitespace.then(o("{")).then(c(/^[-\w\s\\\xA0-\xFF]*/)).skip(o("}")).then(function(u){return n.cls=u||"",n.domView=new Ke(1,function(h){return p.block("span",{class:"dcg-mq-class ".concat(u)},h[0])}),n.ariaLabel=u+" class",n.mathspeakTemplate=["Start "+n.ariaLabel+",","End "+n.ariaLabel],l.prototype.parser.call(n)})},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n);var o=this.blocks[0];n.latex+="\\class{"+this.cls+"}{",o.latexRecursive(n),n.latex+="}",this.checkCursorContextClose(n)},i.prototype.isStyleBlock=function(){return!0},i}(Qe),qa=/^[\+\-]?[\d]+$/;function $i(l){if(!l)return"";var i="";return l.eachChild(function(n){n.ctrlSeq!==void 0&&(i+=n.ctrlSeq)}),i}ht.prototype.charsThatBreakOutOfSupSub="";var Ht=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="_{...}^{...}",n}return i.prototype.setEnds=function(n){d("SupSub ends must be MathBlocks",n[t]instanceof kt&&n[e]instanceof kt),this.ends=n},i.prototype.getEnd=function(n){return this.ends[n]},i.prototype.createLeftOf=function(n){if(!(!this.replacedFragment&&!n[t]&&n.options.supSubsRequireOperand))return l.prototype.createLeftOf.call(this,n)},i.prototype.contactWeld=function(n){for(var o=t;o;o=o===t?e:!1){var c=this[o],u=void 0;if(c instanceof i){for(var h="sub";h;h=h==="sub"?"sup":!1){var f=this[h],y=c[h];if(f){if(!y)c.addBlock(f.disown());else if(f.isEmpty())u=new W(y,0,y.getEnd(t));else{f.domFrag().children().insAtDirEnd(-o,y.domFrag().oneElement());var x=f.children().disown();u=new W(y,x.getEnd(e),y.getEnd(t)),o===t?x.adopt(y,y.getEnd(e),0):x.adopt(y,0,y.getEnd(t))}this.placeCursor=function(L,V){return function(T){T.insAtDirEnd(-o,L||V)}}(y,f)}}this.remove(),n&&n[t]===this&&(o===e&&u?u[t]?n.insRightOf(u[t]):n.insAtLeftEnd(u.parent):n.insRightOf(c));break}}},i.prototype.finalizeTree=function(){var n=this.getEnd(t);n.write=function(o,c){if(o.options.autoSubscriptNumerals&&this===this.parent.sub&&"0123456789".indexOf(c)>=0){var u=this.chToCmd(c,o.options);u instanceof mt?o.deleteSelection():o.clearSelection().insRightOf(this.parent),u.createLeftOf(o.show()),o.controller.aria.queue("Baseline").alert(u.mathspeak({createdLeftOf:o}));return}o[t]&&!o[e]&&!o.selection&&o.options.charsThatBreakOutOfSupSub.indexOf(c)>-1&&(o.insRightOf(this.parent),o.controller.aria.queue("Baseline")),kt.prototype.write.call(this,o,c)}},i.prototype.moveTowards=function(n,o,c){o.options.autoSubscriptNumerals&&!this.sup?o.insDirOf(n,this):l.prototype.moveTowards.call(this,n,o,c)},i.prototype.deleteTowards=function(n,o){if(o.options.autoSubscriptNumerals&&this.sub){var c=this.sub.getEnd(-n);c instanceof mt?c.remove():c&&c.deleteTowards(n,o.insAtDirEnd(-n,this.sub)),this.sub.isEmpty()&&(this.sub.deleteOutOf(t,o.insAtLeftEnd(this.sub)),this.sup&&o.insDirOf(-n,this))}else l.prototype.deleteTowards.call(this,n,o)},i.prototype.latexRecursive=function(n){if(this.checkCursorContextOpen(n),this.sub){n.latex+="_{";var o=n.latex.length;this.sub.latexRecursive(n);var c=n.latex.length;o===c&&(n.latex+=" "),n.latex+="}"}if(this.sup){n.latex+="^{";var o=n.latex.length;this.sup.latexRecursive(n);var c=n.latex.length;o===c&&(n.latex+=" "),n.latex+="}"}this.checkCursorContextClose(n)},i.prototype.text=function(){function n(o,c){var u=c&&c.text()||"";return c?o+(u.length===1?u:"("+(u||" ")+")"):""}return n("_",this.sub)+n("^",this.sup)},i.prototype.addBlock=function(n){this.supsub==="sub"?(this.sup=this.upInto=this.sub.upOutOf=n,n.adopt(this,this.sub,0).downOutOf=this.sub,n.setDOM(H(p("span",{class:"dcg-mq-sup"})).append(n.domFrag().children()).prependTo(this.domFrag().oneElement()).oneElement()),rt.linkElementByBlockNode(n.domFrag().oneElement(),n)):(this.sub=this.downInto=this.sup.downOutOf=n,n.adopt(this,0,this.sup).upOutOf=this.sup,this.domFrag().removeClass("dcg-mq-sup-only"),n.setDOM(H(p("span",{class:"dcg-mq-sub"})).append(n.domFrag().children()).appendTo(this.domFrag().oneElement()).oneElement()),rt.linkElementByBlockNode(n.domFrag().oneElement(),n),this.domFrag().append(H(p("span",{style:"display:inline-block;width:0"},[p.text(F)]))));for(var o=0;o<2;o+=1)(function(c,u,h,f){var y=c[u];y.deleteOutOf=function(x,L){if(L.insDirOf(this[x]?-x:x,this.parent),!this.isEmpty()){var V=this.getEnd(x);this.children().disown().withDirAdopt(x,L.parent,L[x],L[-x]).domFrag().insDirOf(-x,L.domFrag()),L[-x]=V}c.supsub=h,delete c[u],delete c["".concat(f,"Into")];var T=c[h];T["".concat(f,"OutOf")]=Ui,delete T.deleteOutOf,u==="sub"&&c.domFrag().addClass("dcg-mq-sup-only").children().last().remove(),this.remove()}})(this,"sub sup".split(" ")[o],"sup sub".split(" ")[o],"down up".split(" ")[o])},i}(Qe);function Ui(l){var i=this.parent,n=l;do{if(n[e])return l.insLeftOf(i);n=n.parent.parent}while(n!==i);l.insRightOf(i)}var Hc=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.supsub="sub",n.domView=new Ke(1,function(o){return p("span",{class:"dcg-mq-supsub dcg-mq-non-leaf"},[p.block("span",{class:"dcg-mq-sub"},o[0]),p("span",{style:"display:inline-block;width:0"},[p.text(F)])])}),n.textTemplate=["_"],n.mathspeakTemplate=["Subscript,",", Baseline"],n.ariaLabel="subscript",n}return i.prototype.finalizeTree=function(){this.downInto=this.sub=this.getEnd(t),this.sub.upOutOf=Ui,l.prototype.finalizeTree.call(this)},i}(Ht);w.subscript=w._=Hc,w.superscript=w.supscript=w["^"]=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.supsub="sup",n.domView=new Ke(1,function(o){return p("span",{class:"dcg-mq-supsub dcg-mq-non-leaf dcg-mq-sup-only"},[p.block("span",{class:"dcg-mq-sup"},o[0])])}),n.textTemplate=["^(",")"],n.ariaLabel="superscript",n.mathspeakTemplate=["Superscript,",", Baseline"],n}return i.prototype.mathspeak=function(n){var o=this.upInto;if(o!==void 0){var c=$i(o);if((!n||!n.ignoreShorthand)&&qa.test(c)){if(c==="0")return"to the 0 power";if(c==="2")return"squared";if(c==="3")return"cubed";var u="";/^[+-]?\d{1,3}$/.test(c)&&(/(11|12|13|4|5|6|7|8|9|0)$/.test(c)?u="th":/1$/.test(c)?u="st":/2$/.test(c)?u="nd":/3$/.test(c)&&(u="rd"));var h=typeof o=="object"?o.mathspeak():c;return"to the "+h+u+" power"}}return l.prototype.mathspeak.call(this)},i.prototype.finalizeTree=function(){this.upInto=this.sup=this.getEnd(e),this.sup.downOutOf=Ui,l.prototype.finalizeTree.call(this)},i}(Ht);var Yr=function(l){$(i,l);function i(n,o,c){var u=l.call(this)||this;u.ariaLabel=c||n.replace(/^\\/,"");var h=new Ke(2,function(f){return p("span",{class:"dcg-mq-large-operator dcg-mq-non-leaf"},[p("span",{class:"dcg-mq-to"},[p.block("span",{},f[1])]),p("big",{},[p.text(o)]),p("span",{class:"dcg-mq-from"},[p.block("span",{},f[0])])])});return mt.prototype.setCtrlSeqHtmlTextAndMathspeak.call(u,n,h),u}return i.prototype.createLeftOf=function(n){l.prototype.createLeftOf.call(this,n),n.options.sumStartsWithNEquals&&(new Hr("n").createLeftOf(n),new Kc().createLeftOf(n))},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+=this.ctrlSeq+"_{";var o=n.latex.length;this.getEnd(t).latexRecursive(n);var c=n.latex.length;c===o&&(n.latex+=" "),n.latex+="}^{",o=n.latex.length,this.getEnd(e).latexRecursive(n),c=n.latex.length,o===c&&(n.latex+=" "),n.latex+="}",this.checkCursorContextClose(n)},i.prototype.mathspeak=function(){return"Start "+this.ariaLabel+" from "+this.getEnd(t).mathspeak()+" to "+this.getEnd(e).mathspeak()+", end "+this.ariaLabel+", "},i.prototype.parser=function(){for(var n=te.string,o=te.optWhitespace,c=te.succeed,u=wt.block,h=this,f=h.blocks=[new kt,new kt],y=0;y<f.length;y+=1)f[y].adopt(h,h.getEnd(e),0);return o.then(n("_").or(n("^"))).then(function(x){var L=f[x==="_"?0:1];return u.then(function(V){return V.children().adopt(L,L.getEnd(e),0),c(h)})}).many().result(h)},i.prototype.finalizeTree=function(){var n=this.getEnd(t),o=this.getEnd(e);n.ariaLabel="lower bound",o.ariaLabel="upper bound",this.downInto=n,this.upInto=o,n.upOutOf=o,o.downOutOf=n},i}(Qe);w["\u2211"]=w.sum=w.summation=function(){return new Yr("\\sum ",U,"sum")},w["\u220F"]=w.prod=w.product=function(){return new Yr("\\prod ",fe,"product")},w.coprod=w.coproduct=function(){return new Yr("\\coprod ",xe,"co product")},w["\u222B"]=w.int=w.integral=function(l){$(i,l);function i(){var n=l.call(this,"\\int ","","integral")||this;return n.ariaLabel="integral",n.domView=new Ke(2,function(o){return p("span",{class:"dcg-mq-int dcg-mq-non-leaf"},[p("big",{},[p.text(Ue)]),p("span",{class:"dcg-mq-supsub dcg-mq-non-leaf"},[p("span",{class:"dcg-mq-sup"},[p.block("span",{class:"dcg-mq-sup-inner"},o[1])]),p.block("span",{class:"dcg-mq-sub"},o[0]),p("span",{style:"display:inline-block;width:0"},[p.text(F)])])])}),n}return i.prototype.createLeftOf=function(n){Qe.prototype.createLeftOf.call(this,n)},i}(Yr);var Ch=w.frac=w.dfrac=w.cfrac=w.fraction=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="\\frac",n.domView=new Ke(2,function(o){return p("span",{class:"dcg-mq-fraction dcg-mq-non-leaf"},[p.block("span",{class:"dcg-mq-numerator"},o[0]),p.block("span",{class:"dcg-mq-denominator"},o[1]),p("span",{style:"display:inline-block;width:0"},[p.text(F)])])}),n.textTemplate=["(",")/(",")"],n}return i.prototype.finalizeTree=function(){var n=this.getEnd(t),o=this.getEnd(e);this.upInto=o.upOutOf=n,this.downInto=n.downOutOf=o,n.ariaLabel="numerator",o.ariaLabel="denominator",this.getFracDepth()>1?this.mathspeakTemplate=["StartNestedFraction,","NestedOver",", EndNestedFraction"]:this.mathspeakTemplate=["StartFraction,","Over",", EndFraction"]},i.prototype.mathspeak=function(n){if(n&&n.createdLeftOf){var o=n.createdLeftOf;return o.parent.mathspeak()}var c=$i(this.getEnd(t)),u=$i(this.getEnd(e));if((!n||!n.ignoreShorthand)&&qa.test(c)&&qa.test(u)){var h=c==="1"||c==="-1",f="";if(u==="2"?f=h?"half":"halves":u==="3"?f=h?"third":"thirds":u==="4"?f=h?"quarter":"quarters":u==="5"?f=h?"fifth":"fifths":u==="6"?f=h?"sixth":"sixths":u==="7"?f=h?"seventh":"sevenths":u==="8"?f=h?"eighth":"eighths":u==="9"&&(f=h?"ninth":"ninths"),f!==""){for(var y="",x=!1,L=this[t];L&&L[t]!==void 0;L=L[t])if(L.ctrlSeq!=="\\ ")if(qa.test(L.ctrlSeq||""))x=!0;else{x=!1;break}return x&&(y+="and "),y+=this.getEnd(t).mathspeak()+" "+f,y}}return l.prototype.mathspeak.call(this)},i.prototype.getFracDepth=function(){var n=0,o=function(c,u){return c instanceof ar&&c.ctrlSeq&&c.ctrlSeq.toLowerCase().search("frac")>=0&&(u+=1),c&&c.parent?o(c.parent,u):u};return o(this,n)},i}(Qe),Dh=w.over=mr["/"]=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.createLeftOf=function(n){if(!this.replacedFragment){var o=n[t];if(!n.options.typingSlashCreatesNewFraction)for(;o&&!(o instanceof vt||o instanceof(w.text||s)||o instanceof Yr||o.ctrlSeq==="\\ "||/^[,;:]$/.test(o.ctrlSeq));)o=o[t];if(o instanceof Yr&&o[e]instanceof Ht){o=o[e];var c=o[e];c instanceof Ht&&c.ctrlSeq!=o.ctrlSeq&&(o=o[e])}if(o!==n[t]&&!n.isTooDeep(1)){var c=o[e],u=n[t];this.replaces(new it(c||n.parent.getEnd(t),u)),n[t]=o}}l.prototype.createLeftOf.call(this,n)},i}(Ch),Yc=function(){return new mt("\\operatorname{ans}",p("span",{class:"dcg-mq-ans"},[p.text("ans")]),"ans")};w.ans=Yc;var jc=function(){return new mt("\\%\\operatorname{of}",p("span",{class:"dcg-mq-nonSymbola dcg-mq-operator-name"},[p.text("% of ")]),"percent of")};w.percent=w.percentof=jc;var Eh=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.tokenId="",n.ctrlSeq="\\token",n.textTemplate=["token(",")"],n.mathspeakTemplate=["StartToken,",", EndToken"],n.ariaLabel="token",n}return i.prototype.html=function(){var n=p("span",{class:"dcg-mq-token dcg-mq-ignore-mousedown","data-dcg-mq-token":this.tokenId});return this.setDOM(n),rt.linkElementByCmdNode(n,this),n},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+="\\token{"+this.tokenId+"}",this.checkCursorContextClose(n)},i.prototype.mathspeak=function(){var n=[];return this.domFrag().children().eachElement(function(o){var c=o.getAttribute("aria-label");typeof c=="string"&&c!==""&&n.push(c)}),n.length>0?n.join(" ").trim():"token "+this.tokenId},i.prototype.parser=function(){var n=this;return wt.block.map(function(o){var c=o.getEnd(t);if(c)for(n.tokenId+=c.ctrlSeq;c=c[e];)n.tokenId+=c.ctrlSeq;return n})},i}(mt);w.token=Eh;var Jc=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="\\sqrt",n.domView=new Ke(1,function(o){return p("span",{class:"dcg-mq-non-leaf dcg-mq-sqrt-container"},[p("span",{class:"dcg-mq-scaled dcg-mq-sqrt-prefix"},[Yn.sqrt.html()]),p.block("span",{class:"dcg-mq-non-leaf dcg-mq-sqrt-stem"},o[0])])}),n.textTemplate=["sqrt(",")"],n.mathspeakTemplate=["StartRoot,",", EndRoot"],n.ariaLabel="root",n}return i.prototype.parser=function(){return wt.optBlock.then(function(n){return wt.block.map(function(o){var c=new Ki;return c.blocks=[n,o],n.adopt(c,0,0),o.adopt(c,n,0),c})}).or(l.prototype.parser.call(this))},i}(Qe);w.sqrt=Jc,w.hat=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="\\hat",n.domView=new Ke(1,function(o){return p("span",{class:"dcg-mq-non-leaf"},[p("span",{class:"dcg-mq-hat-prefix"},[p.text("^")]),p.block("span",{class:"dcg-mq-hat-stem"},o[0])])}),n.textTemplate=["hat(",")"],n}return i}(Qe);var Ki=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.domView=new Ke(2,function(o){return p("span",{class:"dcg-mq-nthroot-container dcg-mq-non-leaf"},[p.block("sup",{class:"dcg-mq-nthroot dcg-mq-non-leaf"},o[0]),p("span",{class:"dcg-mq-scaled dcg-mq-sqrt-container"},[p("span",{class:"dcg-mq-sqrt-prefix dcg-mq-scaled"},[Yn.sqrt.html()]),p.block("span",{class:"dcg-mq-sqrt-stem dcg-mq-non-leaf"},o[1])])])}),n.textTemplate=["sqrt[","](",")"],n}return i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+="\\sqrt[",this.getEnd(t).latexRecursive(n),n.latex+="]{",this.getEnd(e).latexRecursive(n),n.latex+="}",this.checkCursorContextClose(n)},i.prototype.mathspeak=function(){var n=this.getEnd(t).mathspeak(),o=this.getEnd(e).mathspeak();return this.getEnd(t).ariaLabel="Index",this.getEnd(e).ariaLabel="Radicand",n==="3"?"Start Cube Root, "+o+", End Cube Root":"Root Index "+n+", Start Root, "+o+", End Root"},i}(Jc);w.nthroot=Ki,w.cbrt=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.createLeftOf=function(n){l.prototype.createLeftOf.call(this,n),new Ma("3").createLeftOf(n),n.controller.moveRight()},i}(Ki);var Qc=function(l){$(i,l);function i(n,o,c){var u=this,h=new Ke(1,function(f){return p("span",{class:"dcg-mq-non-leaf"},[p("span",{class:"dcg-mq-diacritic-above"},[o]),p.block("span",{class:"dcg-mq-diacritic-stem"},f[0])])});return u=l.call(this,n,h,c)||this,u}return i}(Qe);w.vec=function(){return new Qc("\\vec",p.entityText("&rarr;"),["vec(",")"])},w.tilde=function(){return new Qc("\\tilde",p.text("~"),["tilde(",")"])};var Xc=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.setDOM=function(n){var o;l.prototype.setDOM.call(this,n);var c=this.domFrag().children();return c.isEmpty()||(this.delimFrags=(o={},o[t]=c.first(),o[e]=c.last(),o)),this},i}(Qe),Yt=function(l){$(i,l);function i(n,o,c,u,h){var f,y=l.call(this,"\\left"+u,void 0,[o,c])||this;return y.side=n,y.sides=(f={},f[t]={ch:o,ctrlSeq:u},f[e]={ch:c,ctrlSeq:h},f),y}return i.prototype.numBlocks=function(){return 1},i.prototype.html=function(){var n=this,o=this.getSymbol(t),c=this.getSymbol(e);return this.domView=new Ke(1,function(u){return p("span",{class:"dcg-mq-non-leaf dcg-mq-bracket-container"},[p("span",{style:"width:"+o.width,class:"dcg-mq-scaled dcg-mq-bracket-l dcg-mq-paren"+(n.side===e?" dcg-mq-ghost":"")},[o.html()]),p.block("span",{style:"margin-left:"+o.width+";margin-right:"+c.width,class:"dcg-mq-bracket-middle dcg-mq-non-leaf"},u[0]),p("span",{style:"width:"+c.width,class:"dcg-mq-scaled dcg-mq-bracket-r dcg-mq-paren"+(n.side===t?" dcg-mq-ghost":"")},[c.html()])])}),l.prototype.html.call(this)},i.prototype.getSymbol=function(n){var o=this.sides[n||e].ch;return Yn[o]||{width:"0",html:""}},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+="\\left"+this.sides[t].ctrlSeq,this.getEnd(t).latexRecursive(n),n.latex+="\\right"+this.sides[e].ctrlSeq,this.checkCursorContextClose(n)},i.prototype.mathspeak=function(n){var o=this.sides[t].ch,c=this.sides[e].ch;if(o==="|"&&c==="|")this.mathspeakTemplate=["StartAbsoluteValue,",", EndAbsoluteValue"],this.ariaLabel="absolute value";else if(n&&n.createdLeftOf&&this.side){var u="";return this.side===t?u=this.textTemplate[0]:this.side===e&&(u=this.textTemplate[1]),(this.side===t?"left ":"right ")+pn[u]}else this.mathspeakTemplate=["left "+pn[o]+",",", right "+pn[c]],this.ariaLabel=pn[o]+" block";return l.prototype.mathspeak.call(this)},i.prototype.matchBrack=function(n,o,c){return c instanceof i&&c.side&&c.side!==-o&&(!n.restrictMismatchedBrackets||jn[this.sides[this.side].ch]===c.sides[c.side].ch||{"(":"]","[":")"}[this.sides[t].ch]===c.sides[e].ch)&&c},i.prototype.closeOpposing=function(n){n.side=0,n.sides[this.side]=this.sides[this.side];var o=n.delimFrags[this.side===t?t:e].removeClass("dcg-mq-ghost");this.replaceBracket(o,this.side)},i.prototype.createLeftOf=function(n){var o;if(!this.replacedFragment){var c=n.options;this.sides[t].ch==="|"?o=this.matchBrack(c,e,n[e])||this.matchBrack(c,t,n[t])||this.matchBrack(c,0,n.parent.parent):o=this.matchBrack(c,-this.side,n[-this.side])||this.matchBrack(c,-this.side,n.parent.parent)}if(o){var u=this.side=-o.side;this.closeOpposing(o),o===n.parent.parent&&n[u]&&new it(n[u],n.parent.getEnd(u),-u).disown().withDirAdopt(-u,o.parent,o,o[u]).domFrag().insDirOf(u,o.domFrag()),o.bubble(function(h){h.reflow()})}else o=this,u=o.side,o.replacedFragment?o.side=0:n[-u]&&(o.replaces(new it(n[-u],n.parent.getEnd(-u),u)),n[-u]=0),l.prototype.createLeftOf.call(this,n);u===t?n.insAtLeftEnd(o.getEnd(t)):n.insRightOf(o)},i.prototype.placeCursor=function(){},i.prototype.unwrap=function(){this.getEnd(t).children().disown().adopt(this.parent,this,this[e]).domFrag().insertAfter(this.domFrag()),this.remove()},i.prototype.deleteSide=function(n,o,c){var u=this.parent,h=this[n],f=u.getEnd(n);if(n===this.side){this.unwrap(),h?c.insDirOf(-n,h):c.insAtDirEnd(n,u);return}var y=c.options,x=!this.side;if(this.side=-n,this.matchBrack(y,n,this.getEnd(t).getEnd(this.side))){this.closeOpposing(this.getEnd(t).getEnd(this.side));var L=this.getEnd(t).getEnd(n);this.unwrap(),L&&L.siblingCreated(c.options,n),h?c.insDirOf(-n,h):c.insAtDirEnd(n,u)}else{if(this.matchBrack(y,n,this.parent.parent))this.parent.parent.closeOpposing(this),this.parent.parent.unwrap();else if(o&&x){this.unwrap(),h?c.insDirOf(-n,h):c.insAtDirEnd(n,u);return}else{this.sides[n]=Sh(this),this.delimFrags[t].removeClass("dcg-mq-ghost"),this.delimFrags[e].removeClass("dcg-mq-ghost");var V=this.delimFrags[n].addClass("dcg-mq-ghost");this.replaceBracket(V,n)}if(h){var T=this.getEnd(t),L=T.getEnd(n);T.domFrag().removeClass("dcg-mq-empty"),new it(h,f,-n).disown().withDirAdopt(-n,T,L,0).domFrag().insAtDirEnd(n,T.domFrag().oneElement()),L&&L.siblingCreated(c.options,n),c.insDirOf(-n,h)}else o?c.insDirOf(n,this):c.insAtDirEnd(n,this.getEnd(t))}},i.prototype.replaceBracket=function(n,o){var c=this.getSymbol(o);if(n.children().replaceWith(H(c.html())),n.oneElement().style.width=c.width,o===t){var u=n.next();u.isEmpty()||(u.oneElement().style.marginLeft=c.width)}else{var h=n.prev();h.isEmpty()||(h.oneElement().style.marginRight=c.width)}},i.prototype.deleteTowards=function(n,o){this.deleteSide(-n,!1,o)},i.prototype.finalizeTree=function(){this.getEnd(t).deleteOutOf=function(n,o){this.parent.deleteSide(n,!0,o)},this.finalizeTree=this.intentionalBlur=function(){this.delimFrags[this.side===t?e:t].removeClass("dcg-mq-ghost"),this.side=0}},i.prototype.siblingCreated=function(n,o){o===-this.side&&this.finalizeTree()},i}(Xc);function Sh(l){var i=l.side,n=l.sides[i];return{ch:jn[n.ch],ctrlSeq:jn[n.ctrlSeq]}}var jn={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{","&lang;":"&rang;","&rang;":"&lang;","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|","\\lVert ":"\\rVert ","\\rVert ":"\\lVert "},pn={"&lang;":"angle-bracket","&rang;":"angle-bracket","|":"pipe"};function Wi(l,o,n){var o=o||l,c=jn[l],u=jn[o];mr[l]=function(){return new Yt(t,l,c,o,u)},mr[c]=function(){return new Yt(e,l,c,o,u)},pn[l]=pn[c]=n}Wi("(","","parenthesis"),Wi("[","","bracket"),Wi("{","\\{","brace"),w.langle=function(){return new Yt(t,"&lang;","&rang;","\\langle ","\\rangle ")},w.rangle=function(){return new Yt(e,"&lang;","&rang;","\\langle ","\\rangle ")},mr["|"]=function(){return new Yt(t,"|","|","|","|")},w.lVert=function(){return new Yt(t,"&#8741;","&#8741;","\\lVert ","\\rVert ")},w.rVert=function(){return new Yt(e,"&#8741;","&#8741;","\\lVert ","\\rVert ")},w.left=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.parser=function(){var n=te.regex,o=te.string,c=te.optWhitespace;return c.then(n(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function(u){var h=u.replace(/^\\/,"");return u=="\\langle"&&(h="&lang;",u=u+" "),u=="\\lVert"&&(h="&#8741;",u=u+" "),wt.then(function(f){return o("\\right").skip(c).then(n(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map(function(y){var x=y.replace(/^\\/,"");y=="\\rangle"&&(x="&rang;",y=y+" "),y=="\\rVert"&&(x="&#8741;",y=y+" ");var L=new Yt(0,h,x,u,y);return L.blocks=[f],f.adopt(L,0,0),L})})})},i}(Qe),w.right=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.parser=function(){return te.fail("unmatched \\right")},i}(Qe);var zi=Yn["("],Hi=Yn[")"],Zc=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="\\binom",n.domView=new Ke(2,function(o){return p("span",{class:"dcg-mq-non-leaf dcg-mq-bracket-container"},[p("span",{style:"width:"+zi.width,class:"dcg-mq-paren dcg-mq-bracket-l dcg-mq-scaled"},[zi.html()]),p("span",{style:"margin-left:"+zi.width+"; margin-right:"+Hi.width,class:"dcg-mq-non-leaf dcg-mq-bracket-middle"},[p("span",{class:"dcg-mq-array dcg-mq-non-leaf"},[p.block("span",{},o[0]),p.block("span",{},o[1])])]),p("span",{style:"width:"+Hi.width,class:"dcg-mq-paren dcg-mq-bracket-r dcg-mq-scaled"},[Hi.html()])])}),n.textTemplate=["choose(",",",")"],n.mathspeakTemplate=["StartBinomial,","Choose",", EndBinomial"],n.ariaLabel="binomial",n}return i}(Xc);w.binom=w.binomial=Zc,w.choose=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.createLeftOf=function(n){Dh.prototype.createLeftOf(n)},i}(Zc);var Th=function(l){$(i,l);function i(){var n=l!==null&&l.apply(this,arguments)||this;return n.ctrlSeq="\\MathQuillMathField",n.domView=new Ke(1,function(o){return p("span",{class:"dcg-mq-editable-field"},[p.block("span",{class:"dcg-mq-root-block","aria-hidden":"true"},o[0])])}),n}return i.prototype.parser=function(){var n=this,o=te.string,c=te.regex,u=te.succeed;return o("[").then(c(/^[a-z][a-z0-9]*/i)).skip(o("]")).map(function(h){n.name=h}).or(u(void 0)).then(l.prototype.parser.call(this))},i.prototype.finalizeTree=function(n){var o=new Mc(this.getEnd(t),this.domFrag().oneElement(),n);o.KIND_OF_MQ="MathField",o.editable=!0,o.createTextarea(),o.editablesTextareaEvents(),o.cursor.insAtRightEnd(o.root),Fc(o.root);function c(u){if(u.parentNode&&!H(u).hasClass("dcg-mq-root-block")&&c(u.parentNode),u.nodeType===Node.ELEMENT_NODE){var h=u;h.getAttribute("aria-hidden")==="true"&&(h.removeAttribute("aria-hidden"),H(u).children().eachElement(function(f){f.setAttribute("aria-hidden","true")}))}}c(this.domFrag().parent().oneElement()),this.domFrag().oneElement().removeAttribute("aria-hidden")},i.prototype.registerInnerField=function(n,o){var c=this.getEnd(t).controller,u=new o(c);n[this.name]=u,n.push(u)},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),this.getEnd(t).latexRecursive(n),this.checkCursorContextClose(n)},i.prototype.text=function(){return this.getEnd(t).text()},i}(Qe);w.editable=w.MathQuillMathField=Th;var el=function(l){$(i,l);function i(){return l!==null&&l.apply(this,arguments)||this}return i.prototype.setOptions=function(n){function o(){return""}return this.text=n.text||o,this.domView=new Ke(0,function(){return p("span",{},[m(n.htmlString||"")])}),this.latex=n.latex||o,this},i.prototype.latexRecursive=function(n){this.checkCursorContextOpen(n),n.latex+=this.latex(),this.checkCursorContextClose(n)},i.prototype.parser=function(){var n=this,o=te.string,c=te.regex,u=te.succeed;return o("{").then(c(/^[a-z][a-z0-9]*/i)).skip(o("}")).then(function(h){return o("[").then(c(/^[-\w\s]*/)).skip(o("]")).or(u(void 0)).map(function(f){return n.setOptions(Vc[h](f))})})},i}(mt);if(w.embed=el,window.jQuery){un=$n(1);for(var tl in un)(function(l,i){typeof i=="function"?(Ut[l]=function(){return Oa(),i.apply(this,arguments)},Ut[l].prototype=i.prototype):Ut[l]=i})(tl,un[tl])}})()});var cl;function qh(t){cl=t(sl)}qh(function(t){function e(){window.consoleOverride=!0;var a=window.console.log;window.console.log=function(){for(var s=[],d=0;d<arguments.length;d++)s.push(arguments[d]);a.apply(window.console,[].concat([s.join(" ")],s))}}var r={ready:function(){try{window.TestBridge=r,parent.USING_SELENIUM&&e()}catch(a){}}};return r});var{ready:ji}=cl;var _a=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Pa=Array.prototype,Zi=Object.prototype,ll=typeof Symbol!="undefined"?Symbol.prototype:null,yw=Pa.push,Rh=Pa.slice,Ra=Zi.toString,Ph=Zi.hasOwnProperty,Bh=Array.isArray,dl=Object.keys,ul=Object.create,$h=_a.isNaN,bw=_a.isFinite,Ji=function(){};function Pe(t){if(t instanceof Pe)return t;if(!(this instanceof Pe))return new Pe(t);this._wrapped=t}var ww=Pe.VERSION="1.10.2";function Ba(t,e,r){if(e===void 0)return t;switch(r==null?3:r){case 1:return function(a){return t.call(e,a)};case 3:return function(a,s,d){return t.call(e,a,s,d)};case 4:return function(a,s,d,g){return t.call(e,a,s,d,g)}}return function(){return t.apply(e,arguments)}}function hl(t,e,r){return t==null?pm:fr(t)?Ba(t,e,r):Qn(t)&&!za(t)?gm(t):Sl(t)}Pe.iteratee=ml;function ml(t,e){return hl(t,e,1/0)}function Ar(t,e,r){return Pe.iteratee!==ml?Pe.iteratee(t,e):hl(t,e,r)}function Lt(t,e){return e=e==null?t.length-1:+e,function(){for(var r=Math.max(arguments.length-e,0),a=Array(r),s=0;s<r;s++)a[s]=arguments[s+e];switch(e){case 0:return t.call(this,a);case 1:return t.call(this,arguments[0],a);case 2:return t.call(this,arguments[0],arguments[1],a)}var d=Array(e+1);for(s=0;s<e;s++)d[s]=arguments[s];return d[e]=a,t.apply(this,d)}}function Uh(t){if(!Qn(t))return{};if(ul)return ul(t);Ji.prototype=t;var e=new Ji;return Ji.prototype=null,e}function fl(t){return function(e){return e==null?void 0:e[t]}}function gn(t,e){return t!=null&&Ph.call(t,e)}function yl(t,e){for(var r=e.length,a=0;a<r;a++){if(t==null)return;t=t[e[a]]}return r?t:void 0}var Kh=Math.pow(2,53)-1,Qr=fl("length");function hn(t){var e=Qr(t);return typeof e=="number"&&e>=0&&e<=Kh}function Jn(t,e,r){e=Ba(e,r);var a,s;if(hn(t))for(a=0,s=t.length;a<s;a++)e(t[a],a,t);else{var d=Ot(t);for(a=0,s=d.length;a<s;a++)e(t[d[a]],d[a],t)}return t}function $a(t,e,r){e=Ar(e,r);for(var a=!hn(t)&&Ot(t),s=(a||t).length,d=Array(s),g=0;g<s;g++){var m=a?a[g]:g;d[g]=e(t[m],m,t)}return d}function bl(t){var e=function(r,a,s,d){var g=!hn(r)&&Ot(r),m=(g||r).length,p=t>0?0:m-1;for(d||(s=r[g?g[p]:p],p+=t);p>=0&&p<m;p+=t){var b=g?g[p]:p;s=a(s,r[b],b,r)}return s};return function(r,a,s,d){var g=arguments.length>=3;return e(r,Ba(a,d,4),s,g)}}var vw=bl(1),kw=bl(-1);function es(t,e,r){var a=[];return e=Ar(e,r),Jn(t,function(s,d,g){e(s,d,g)&&a.push(s)}),a}function Vr(t,e,r,a){return hn(t)||(t=Wa(t)),(typeof r!="number"||a)&&(r=0),Qh(t,e,r)>=0}var xw=Lt(function(t,e,r){var a,s;return fr(e)?s=e:za(e)&&(a=e.slice(0,-1),e=e[e.length-1]),$a(t,function(d){var g=s;if(!g){if(a&&a.length&&(d=yl(d,a)),d==null)return;g=d[e]}return g==null?g:g.apply(d,r)})});function wl(t,e){return $a(t,Sl(e))}function Wh(t,e,r){var a=-1/0,s=-1/0,d,g;if(e==null||typeof e=="number"&&typeof t[0]!="object"&&t!=null){t=hn(t)?t:Wa(t);for(var m=0,p=t.length;m<p;m++)d=t[m],d!=null&&d>a&&(a=d)}else e=Ar(e,r),Jn(t,function(b,k,F){g=e(b,k,F),(g>s||g===-1/0&&a===-1/0)&&(a=b,s=g)});return a}function vl(t,e,r){var a=0;return e=Ar(e,r),wl($a(t,function(s,d,g){return{value:s,index:a++,criteria:e(s,d,g)}}).sort(function(s,d){var g=s.criteria,m=d.criteria;if(g!==m){if(g>m||g===void 0)return 1;if(g<m||m===void 0)return-1}return s.index-d.index}),"value")}function Ua(t,e){return function(r,a,s){var d=e?[[],[]]:{};return a=Ar(a,s),Jn(r,function(g,m){var p=a(g,m,r);t(d,g,p)}),d}}var Cw=Ua(function(t,e,r){gn(t,r)?t[r].push(e):t[r]=[e]}),Dw=Ua(function(t,e,r){t[r]=e}),Ew=Ua(function(t,e,r){gn(t,r)?t[r]++:t[r]=1});var Sw=Ua(function(t,e,r){t[r?0:1].push(e)},!0);function mn(t,e,r,a){a=a||[];for(var s=a.length,d=0,g=Qr(t);d<g;d++){var m=t[d];if(hn(m)&&(za(m)||Xi(m)))if(e)for(var p=0,b=m.length;p<b;)a[s++]=m[p++];else mn(m,e,r,a),s=a.length;else r||(a[s++]=m)}return a}var Tw=Lt(function(t,e){return zh(t,e)});function ts(t,e,r,a){um(e)||(a=r,r=e,e=!1),r!=null&&(r=Ar(r,a));for(var s=[],d=[],g=0,m=Qr(t);g<m;g++){var p=t[g],b=r?r(p,g,t):p;e&&!r?((!g||d!==b)&&s.push(p),d=b):r?Vr(d,b)||(d.push(b),s.push(p)):Vr(s,p)||s.push(p)}return s}var Gw=Lt(function(t){return ts(mn(t,!0,!0))});var zh=Lt(function(t,e){return e=mn(e,!0,!0),es(t,function(r){return!Vr(e,r)})});function Hh(t){for(var e=t&&Wh(t,Qr).length||0,r=Array(e),a=0;a<e;a++)r[a]=wl(t,a);return r}var Vw=Lt(Hh);function kl(t){return function(e,r,a){r=Ar(r,a);for(var s=Qr(e),d=t>0?0:s-1;d>=0&&d<s;d+=t)if(r(e[d],d,e))return d;return-1}}var Yh=kl(1),jh=kl(-1);function Jh(t,e,r,a){r=Ar(r,a,1);for(var s=r(e),d=0,g=Qr(t);d<g;){var m=Math.floor((d+g)/2);r(t[m])<s?d=m+1:g=m}return d}function xl(t,e,r){return function(a,s,d){var g=0,m=Qr(a);if(typeof d=="number")t>0?g=d>=0?d:Math.max(d+m,g):m=d>=0?Math.min(d+1,m):d+m+1;else if(r&&d&&m)return d=r(a,s),a[d]===s?d:-1;if(s!==s)return d=e(Rh.call(a,g,m),dm),d>=0?d+g:-1;for(d=t>0?g:m-1;d>=0&&d<m;d+=t)if(a[d]===s)return d;return-1}}var Qh=xl(1,Yh,Jh),Aw=xl(-1,jh);function Cl(t,e,r,a,s){if(!(a instanceof e))return t.apply(r,s);var d=Uh(t.prototype),g=t.apply(d,s);return Qn(g)?g:d}var Xh=Lt(function(t,e,r){if(!fr(t))throw new TypeError("Bind must be called on a function");var a=Lt(function(s){return Cl(t,a,e,this,r.concat(s))});return a}),Ka=Lt(function(t,e){var r=Ka.placeholder,a=function(){for(var s=0,d=e.length,g=Array(d),m=0;m<d;m++)g[m]=e[m]===r?arguments[s++]:e[m];for(;s<arguments.length;)g.push(arguments[s++]);return Cl(t,a,this,this,g)};return a});Ka.placeholder=Pe;var Fw=Lt(function(t,e){e=mn(e,!1,!1);var r=e.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var a=e[r];t[a]=Xh(t[a],t)}});var Zh=Lt(function(t,e,r){return setTimeout(function(){return t.apply(null,r)},e)}),Lw=Ka(Zh,Pe,1);function fn(t,e,r){var a,s,d,g,m=0;r||(r={});var p=function(){m=r.leading===!1?0:gl(),a=null,g=t.apply(s,d),a||(s=d=null)},b=function(){var k=gl();!m&&r.leading===!1&&(m=k);var F=e-(k-m);return s=this,d=arguments,F<=0||F>e?(a&&(clearTimeout(a),a=null),m=k,g=t.apply(s,d),a||(s=d=null)):!a&&r.trailing!==!1&&(a=setTimeout(p,F)),g};return b.cancel=function(){clearTimeout(a),m=0,a=s=d=null},b}function em(t){return function(){return!t.apply(this,arguments)}}function tm(t,e){var r;return function(){return--t>0&&(r=e.apply(this,arguments)),t<=1&&(e=null),r}}var Ow=Ka(tm,2),Dl=!{toString:null}.propertyIsEnumerable("toString"),pl=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function El(t,e){var r=pl.length,a=t.constructor,s=fr(a)&&a.prototype||Zi,d="constructor";for(gn(t,d)&&!Vr(e,d)&&e.push(d);r--;)d=pl[r],d in t&&t[d]!==s[d]&&!Vr(e,d)&&e.push(d)}function Ot(t){if(!Qn(t))return[];if(dl)return dl(t);var e=[];for(var r in t)gn(t,r)&&e.push(r);return Dl&&El(t,e),e}function rs(t){if(!Qn(t))return[];var e=[];for(var r in t)e.push(r);return Dl&&El(t,e),e}function Wa(t){for(var e=Ot(t),r=e.length,a=Array(r),s=0;s<r;s++)a[s]=t[e[s]];return a}function rm(t){for(var e={},r=Ot(t),a=0,s=r.length;a<s;a++)e[t[r[a]]]=r[a];return e}function ns(t,e){return function(r){var a=arguments.length;if(e&&(r=Object(r)),a<2||r==null)return r;for(var s=1;s<a;s++)for(var d=arguments[s],g=t(d),m=g.length,p=0;p<m;p++){var b=g[p];(!e||r[b]===void 0)&&(r[b]=d[b])}return r}}var Iw=ns(rs),nm=ns(Ot);function am(t,e,r){return e in r}var om=Lt(function(t,e){var r={},a=e[0];if(t==null)return r;fr(a)?(e.length>1&&(a=Ba(a,e[1])),e=rs(t)):(a=am,e=mn(e,!1,!1),t=Object(t));for(var s=0,d=e.length;s<d;s++){var g=e[s],m=t[g];a(m,g,t)&&(r[g]=m)}return r}),Mw=Lt(function(t,e){var r=e[0],a;return fr(r)?(r=em(r),e.length>1&&(a=e[1])):(e=$a(mn(e,!1,!1),String),r=function(s,d){return!Vr(e,d)}),om(t,r,a)}),Nw=ns(rs,!0);function im(t,e){var r=Ot(e),a=r.length;if(t==null)return!a;for(var s=Object(t),d=0;d<a;d++){var g=r[d];if(e[g]!==s[g]||!(g in s))return!1}return!0}function Qi(t,e,r,a){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var s=typeof t;return s!=="function"&&s!=="object"&&typeof e!="object"?!1:sm(t,e,r,a)}function sm(t,e,r,a){t instanceof Pe&&(t=t._wrapped),e instanceof Pe&&(e=e._wrapped);var s=Ra.call(t);if(s!==Ra.call(e))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return ll.valueOf.call(t)===ll.valueOf.call(e)}var d=s==="[object Array]";if(!d){if(typeof t!="object"||typeof e!="object")return!1;var g=t.constructor,m=e.constructor;if(g!==m&&!(fr(g)&&g instanceof g&&fr(m)&&m instanceof m)&&"constructor"in t&&"constructor"in e)return!1}r=r||[],a=a||[];for(var p=r.length;p--;)if(r[p]===t)return a[p]===e;if(r.push(t),a.push(e),d){if(p=t.length,p!==e.length)return!1;for(;p--;)if(!Qi(t[p],e[p],r,a))return!1}else{var b=Ot(t),k;if(p=b.length,Ot(e).length!==p)return!1;for(;p--;)if(k=b[p],!(gn(e,k)&&Qi(t[k],e[k],r,a)))return!1}return r.pop(),a.pop(),!0}function Fr(t,e){return Qi(t,e)}function Ct(t){return function(e){return Ra.call(e)==="[object "+t+"]"}}var za=Bh||Ct("Array");function Qn(t){var e=typeof t;return e==="function"||e==="object"&&!!t}var Xi=Ct("Arguments"),fr=Ct("Function"),qw=Ct("String"),cm=Ct("Number"),_w=Ct("Date"),Rw=Ct("RegExp"),Pw=Ct("Error"),Bw=Ct("Symbol"),$w=Ct("Map"),Uw=Ct("WeakMap"),Kw=Ct("Set"),Ww=Ct("WeakSet");(function(){Xi(arguments)||(Xi=function(t){return gn(t,"callee")})})();var lm=_a.document&&_a.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof lm!="function"&&(fr=function(t){return typeof t=="function"||!1});function dm(t){return cm(t)&&$h(t)}function um(t){return t===!0||t===!1||Ra.call(t)==="[object Boolean]"}function pm(t){return t}function Sl(t){return za(t)?function(e){return yl(e,t)}:fl(t)}function gm(t){return t=nm({},t),function(e){return im(e,t)}}var gl=Date.now||function(){return new Date().getTime()},Tl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},hm=rm(Tl);function Gl(t){var e=function(d){return t[d]},r="(?:"+Ot(t).join("|")+")",a=RegExp(r),s=RegExp(r,"g");return function(d){return d=d==null?"":""+d,a.test(d)?d.replace(s,e):d}}var mm=Gl(Tl),zw=Gl(hm);var fm=0;function Vl(t){var e=++fm+"";return t?t+e:e}var Hw=Pe.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};function Al(t,e){return t._chain?Pe(e).chain():e}Jn(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=Pa[t];Pe.prototype[t]=function(){var r=this._wrapped;return e.apply(r,arguments),(t==="shift"||t==="splice")&&r.length===0&&delete r[0],Al(this,r)}});Jn(["concat","join","slice"],function(t){var e=Pa[t];Pe.prototype[t]=function(){return Al(this,e.apply(this._wrapped,arguments))}});Pe.prototype.value=function(){return this._wrapped};Pe.prototype.valueOf=Pe.prototype.toJSON=Pe.prototype.value;Pe.prototype.toString=function(){return String(this._wrapped)};var ym=0,bm="guid_"+Math.round(Math.random()*1e6)+"_"+new Date().getTime()+"_",as=class{constructor(){this.__observers={},this.__eventObservers={},this.__oldProperties={},this.__propertyComparators={},this.guid=bm+ ++ym}unobserveAll(){this.__observers={},this.__eventObservers={}}getProperty(e){return this[e]}getOldProperty(e){return this.__oldProperties[e]}setProperty(e,r){var a=this[e];this[e]=r;var s=this.__propertyComparators[e];if(s){if(s(a,r))return}else if(Fr(a,r))return;this.__oldProperties[e]=a,this.notifyPropertyChange(e)}setProperties(e){for(var r in e)e.hasOwnProperty(r)&&this.setProperty(r,e[r])}setPropertyComparator(e,r){this.__propertyComparators[e]=r}notifyPropertyChange(e){this.__callObservers(this.__observers,e,this)}observe(e,r){this.__addObservers(this.__observers,e,r)}unobserve(e){this.__removeObservers(this.__observers,e)}observeAndSync(e,r){this.observe(e,r);for(var a=e.split(" "),s=0;s<a.length;s++){var d=a[s].split("."),g=d[0];this.hasOwnProperty(g)&&r(g,this)}}triggerEvent(e,r){this.__callObservers(this.__eventObservers,e,r)}observeEvent(e,r){this.__addObservers(this.__eventObservers,e,r)}unobserveEvent(e){this.__removeObservers(this.__eventObservers,e)}__callObservers(e,r,a){var s=e[r];if(s)for(var d=0;d<s.length;d++)s[d].callback(r,a)}__removeObservers(e,r){for(var a=r.split(" "),s=0;s<a.length;s++){var d=a[s].split("."),g=d[0],m=d[1];if(g&&m){var p=e[g],b=[];if(!p)continue;for(var k=0;k<p.length;k++){var F=p[k];F.namespace!==m&&b.push(F)}e[g]=b}else if(g)delete e[g];else if(m)for(g in e)e.hasOwnProperty(g)&&this.__removeObservers(e,g+"."+m)}}__addObservers(e,r,a){for(var s=r.split(" "),d=0;d<s.length;d++){var g=s[d].split("."),m=g[0];if(!m)throw"Must supply a property to observe";var p=g[1],b={namespace:p,callback:a},k=e[m];k?k.push(b):e[m]=[b]}}},yn=as;var Fl=function(){{var t={IS_IE8:navigator.userAgent.match(/MSIE 8.0/i)!==null,IS_IE9:navigator.userAgent.match(/MSIE 9.0/i)!==null,IS_IE:navigator.userAgent.match(/MSIE/i)!==null||navigator.userAgent.match(/Trident/i)!==null&&navigator.userAgent.match(/rv:11/i)!==null,IS_EDGE:navigator.userAgent.match(/Edge/i)!==null,IS_IPAD:navigator.userAgent.match(/iPad/i)!==null,IS_MOBILE:navigator.userAgent.match(/Mobile|Android/i)!==null,IS_ANDROID:navigator.userAgent.match(/Android/i)!==null,IS_IOS:navigator.userAgent.match(/(iPad|iPhone|iPod)/i)!==null||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,IS_CHROME:navigator.userAgent.match(/Chrome/i)!==null,IS_FIREFOX:navigator.userAgent.match(/Firefox/i)!==null,IS_SAFARI:navigator.userAgent.match(/^((?!chrome|android).)*safari/i)!==null,IS_APPLE:navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)!==null,IS_WINDOWS:navigator.platform.match(/(Win32)/i)!==null,IS_TOUCH:navigator.userAgent.match(/Touch/i)!==null,IS_KINDLE:navigator.userAgent.match(/Kindle/i)!==null||navigator.userAgent.match(/Silk/i)!==null,IS_BRAILLENOTE:navigator.userAgent.match(/KeyWeb/i)!==null,IS_IN_IFRAME:window.parent!==window};return t.IS_TABLET=t.IS_IPAD||t.IS_ANDROID||t.IS_KINDLE,t.IS_TOUCH_DEVICE=t.SHOULD_NOT_AUTOFOCUS=t.IS_IOS||t.IS_ANDROID||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i),t.IOS_VERSION=function(){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]:null}(),t.MAC_VERSION=function(){var e=navigator.appVersion.match(/OS X (\d+)_(\d+)_?(\d+)?/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]:null}(),t.CHROME_VERSION=function(){var e=navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)\.([0-9]+)\.?([0-9]+)?/);return e?[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4]||0,10)]:null}(),t.SUPPORTS_INPUTMODE=function(){var e="inputMode"in document.createElement("textarea");return!(!e||t.IS_IOS&&t.IOS_VERSION&&t.IOS_VERSION[0]<15)}(),t.SUPPORTS_CANVAS=function(){var e=document.createElement("canvas"),r=!!(e.getContext&&e.getContext("2d"));return r}(),t}}(),Ll=Fl,{SHOULD_NOT_AUTOFOCUS:jt,IS_TOUCH_DEVICE:jw,IS_SAFARI:Jw,IS_APPLE:Ha,IS_IOS:Ya,IS_ANDROID:ja,IS_IPAD:Qw,IS_IN_IFRAME:Xw,IOS_VERSION:Zw,MAC_VERSION:ev,CHROME_VERSION:tv,IS_IE:rv,IS_EDGE:nv,IS_CHROME:av,IS_FIREFOX:ov,IS_MOBILE:iv,IS_WINDOWS:Ol,IS_TOUCH:Il,SUPPORTS_INPUTMODE:Ml,SUPPORTS_CANVAS:sv,translateRule:cv}=Fl;st();var Um=function(){{var t=function(){for(var e={8:this.BACKSPACE="Backspace",9:this.TAB="Tab",13:this.ENTER="Enter",16:this.SHIFT="Shift",17:this.CONTROL="Control",18:this.ALT="Alt",20:this.CAPSLOCK="CapsLock",27:this.ESCAPE="Esc",32:this.SPACEBAR="Space",33:this.PAGEUP="PageUp",34:this.PAGEDOWN="PageDown",35:this.END="End",36:this.HOME="Home",37:this.LEFT="Left",38:this.UP="Up",39:this.RIGHT="Right",40:this.DOWN="Down",46:this.DELETE="Del"},r={Backspace:this.BACKSPACE,Tab:this.TAB,Enter:this.ENTER,Shift:this.SHIFT,Control:this.CONTROL,Alt:this.ALT,CapsLock:this.CAPSLOCK,Escape:this.ESCAPE," ":this.SPACEBAR,PageUp:this.PAGEUP,PageDown:this.PAGEDOWN,End:this.END,Home:this.HOME,ArrowLeft:this.LEFT,ArrowUp:this.UP,ArrowRight:this.RIGHT,ArrowDown:this.DOWN,Delete:this.DELETE},a={UIKeyInputUpArrow:this.UP,UIKeyInputDownArrow:this.DOWN,UIKeyInputLeftArrow:this.LEFT,UIKeyInputRightArrow:this.RIGHT,UIKeyInputEscape:this.ESCAPE,UIKeyInputPageUp:this.PAGEUP,UIKeyInputPageDown:this.PAGEDOWN},s=["0123456789abcdefghijklmnopqrstuvwxyz","\xBA\xA1\u2122\xA3\xA2\u221E\xA7\xB6\u2022\xAA\xE5\u222B\xE7\u2202 \u0192\xA9\u02D9 \u2206\u02DA\xAC\xB5 \xF8\u03C0\u0153\xAE\xDF\u2020 \u221A\u2211\u2248\xA5\u03A9","\u201A\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB0\xB7\xC5\u0131\xC7\xCE\xB4\xCF\u02DD\xD3\u02C6\xD4\uF8FF\xD2\xC2\u02DC\xD8\u220F\u0152\u2030\xCD\u02C7\xA8\u25CA\u201E\u02DB\xC1\xB8"].map(function(G){return G.split("")}),d=s[0],g=s[1],m=s[2],p={},b={},k=0;k<d.length;k++){var F=d[k];g[k]!==" "&&(p[g[k]]=F.toUpperCase()),m[k]!==" "&&(b[m[k]]=F.toUpperCase())}this.isUndo=function(G){return!G.altKey&&!G.shiftKey&&(G.ctrlKey||G.metaKey)&&(G.key=="z"||G.which==90)},this.isRedo=function(G){return!G.altKey&&(G.ctrlKey||G.metaKey)&&(G.key==="y"||G.which==89||G.shiftKey&&(G.key==="Z"||G.key==="z"||G.which===90))},this.isSelectAll=function(G){return!G.altKey&&(G.ctrlKey||G.metaKey)&&(G.key==="a"||G.key==="A"||G.which==65)},this.isBacktick=function(G){return!G.altKey&&!G.ctrlKey&&!G.metaKey&&!G.shiftKey&&(G.key==="`"||G.which==192)},this.isHelp=function(G){return!G.altKey&&(G.ctrlKey||G.metaKey)&&(G.key==="/"||G.which==191)},this.lookup=function(G){return r[G.key]||e[G.which]||a[G.key]},this.lookupChar=function(G){if(!G.key)return String.fromCharCode(G.which);if(Ll.IS_APPLE&&G.altKey){var U=G.shiftKey?b:p;if(U[G.key])return U[G.key]}if(G.key.length===1)return G.key.toUpperCase();if(G.key==="Enter")return String.fromCharCode(13);if(G.key==="Tab")return String.fromCharCode(9)}};return new t}}();var{isUndo:uv,isRedo:pv,isSelectAll:gv,isBacktick:hv,isHelp:mv,BACKSPACE:fv,TAB:ao,ENTER:Xr,SHIFT:yv,CONTROL:bv,ALT:wv,CAPSLOCK:vv,ESCAPE:Or,SPACEBAR:ps,PAGEUP:kv,PAGEDOWN:xv,END:nd,HOME:ad,LEFT:od,UP:oo,RIGHT:id,DOWN:io,DELETE:Cv,lookup:He,lookupChar:Dv}=Um;var Cn=function(t,e){Object.assign(t.style,e)};function sd(t){return!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function so(t){if(document.readyState!=="loading")t();else{var e=function(){document.removeEventListener("DOMContentLoaded",e),t()};document.addEventListener("DOMContentLoaded",e)}}var Km=document.location.href.indexOf("dcgDebugTouchTracking=dcgYES")!==-1,Ir,Dn;window._touchtracking_id_counter==null&&(window._touchtracking_id_counter=0);window._touchtracking_id_counter+=1;var ra="touchtracking_id_"+window._touchtracking_id_counter,Ge=function(t){Dn&&(Dn.value="("+Date.now()+") "+t+`
`+Dn.value)};function gd(t){if(t.classList.add("dcg-tap-container",ra),Km){Ir&&Ir.remove(),Ir=document.createElement("div"),Cn(Ir,{position:"absolute",bottom:"10px",right:"10px"});let e=document.createElement("textarea");e.setAttribute("rows","30"),e.setAttribute("cols","40"),Ir.append(e);let r=document.createElement("div");r.id="dcg-touchtracking-debug-copy",r.classList.add("dcg-btn-blue"),r.innerText="COPY LOGS",Ir.append(r),Dn=Ir.querySelector("textarea"),t.append(Ir),r.addEventListener("mousedown",function(){Dn&&(Dn.select(),document.execCommand("copy"))},!0),Ge("monitor touches")}}var na=0,It=1,aa=2,En=3,Cr=4,ae=na,gs={},Jt={},xr=[],hs=0,ta=null,lo=null,en=!1,co=null,cd=en,Mr=function(t){t.type.startsWith("key")?en=!0:t.type.startsWith("pointer")&&(en=!1);let e=document.activeElement;e&&!e.closest(".dcg-tap-container."+ra)&&(e=null),e!==co?(co&&co.classList.remove("dcg-focus-visible"),e&&en&&e.classList.add("dcg-focus-visible")):cd!==en&&e&&(en?e.classList.add("dcg-focus-visible"):e.classList.remove("dcg-focus-visible")),cd=en,co=e};document.addEventListener("keydown",Mr,{capture:!0});document.addEventListener("keydown",Mr);document.addEventListener("pointerdown",Mr);document.addEventListener("pointerdown",Mr,{capture:!0});document.addEventListener("focusin",Mr,{capture:!0});document.addEventListener("focusin",Mr);document.addEventListener("focusout",Mr,{capture:!0});document.addEventListener("focusout",Mr);var ld,yt=[],ms=function(t){if(!(t instanceof Element))return[];let e=t.closest(".dcg-tap-container."+ra);if(!e)return[];let r=t,a=[];for(;r;){if(a.push(r),r===e)return a;r=r.parentNode}return[]},uo=function(t,e){lo=null,ae=t,Ge("beginMode:"+ae),ae===It?xr=ms(e.originalEvent.touches[0].target):xr=ms(e.target),xr.forEach(r=>{r.classList.add("dcg-depressed"),hd(r)&&r.classList.add("dcg-focus-by-tap")}),xr.forEach(function(r){let a=B(r);a.data({originalScrollTop:a.scrollTop(),originalScrollLeft:a.scrollLeft()})}),Jt={}};function fs(t){return t.matches('input, textarea, select, [role="textbox"]')||t.classList.contains("dcg-mathquill-input-span")||t.matches("[contenteditable=true]")}var Tn=function(t){if(!(t instanceof Element))return!1;let e=t.closest(".dcg-tap-container");return e?e.matches(".dcg-tap-container."+ra):!1},hd=function(t){return ae!==En&&!fs(t)&&Tn(t)},Gn=function(t,e){lo=null;let r=!1;Ge("endMode:"+ae),document.querySelectorAll(".dcg-depressed").forEach(s=>{s.classList.remove("dcg-depressed")});let a=document.activeElement;if(!yd(t.target)&&a&&hd(a))try{a.blur()}catch(s){}if(document.querySelectorAll(".dcg-focus-by-tap").forEach(s=>s.classList.remove("dcg-focus-by-tap")),xr.forEach(function(s){let d=B(s),g=d.data("originalScrollTop")-d.scrollTop(),m=d.data("originalScrollLeft")-d.scrollLeft();(g||m)&&(Jt.scroll=!0)}),Jt["dcg-tapstart"]===1&&Jt["dcg-tapend"]===1&&!Jt["dcg-tapcancel"]&&!Jt.scroll){Ge("potential dcg-tap");let s=e.changedTouches[0].clientX,d=e.changedTouches[0].clientY;if(t&&!t.device&&s===0&&d===0){Ge("event appears to be simulated"),r=!0,ae=En;let p=t.target.getBoundingClientRect();s=(p.left+p.right)/2,d=(p.top+p.bottom)/2}Ge("potential dcg-tap coords:"+s+":"+d);let g=!1,m=!1;for(let p of xr){if(g)break;let b;if(typeof p.getBoundingClientRect=="function"&&(b=p.getBoundingClientRect()),typeof p.getAttribute=="function"&&p.getAttribute("tapboundary")==="true"&&(g=!0),!(b&&(s<b.left||d<b.top||s>b.right||d>b.bottom))){lo=p,m=!0,ct("dcg-tap",t,{target:lo,touches:e.touches,changedTouches:e.changedTouches});break}}Ge("result of dcg-tap:  did_dispatch="+m+"  did_escape="+g)}ae===It||ae===Cr?ta=setTimeout(function(){ta=null,hs=new Date().getTime()},1e3):r&&(ta=setTimeout(function(){ta=null,hs=new Date().getTime()},100)),xr=[],ae=na},Sn=function(){return ta||new Date().getTime()-hs<500},md=function(t){return t.identifier!==void 0?t.identifier:t.pointerId},dd=function(t){let e=[];for(let r of t)e.push({identifier:md(r),x:r.pageX,y:r.pageY,screenX:r.screenX,screenY:r.screenY,pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY});return e},ct=function(t,e,r){let a=md(e),s=dd(r.touches),d=dd(r.changedTouches);if(Ge("dispatchEvent:"+t),t==="dcg-tapstart")gs[a]={type:t,pageX:d[0].pageX,pageY:d[0].pageY};else if(t==="dcg-tapmove"){let b=d[0],k=gs[a];if(k&&b.pageX===k.pageX&&b.pageY===k.pageY||(ae===It||ae===Cr)&&k&&k.type==="dcg-tapstart"&&Math.abs(k.pageX-b.pageX)+Math.abs(k.pageY-b.pageY)<2)return;gs[a]={type:t,pageX:d[0].pageX,pageY:d[0].pageY}}let g=t.toLowerCase();Jt[g]===void 0?Jt[g]=1:Jt[g]++;let m=B.event.fix(e.originalEvent);m.type=t,m.device=ae===It||ae===Cr?"touch":ae===En?"keyboard":"mouse",m.touches=s,m.changedTouches=d,m.target=r.target?r.target:e.target;let p=m.device!=="keyboard"&&Jt["dcg-longhold"]>0;m.wasLongheld=function(){return p},m.preventTap=function(){Jt["dcg-tapcancel"]=1},clearTimeout(ld),m.type==="dcg-tapstart"&&m.device!=="keyboard"&&m.touches.length===1&&(ld=setTimeout(function(){ct("dcg-longhold",e,r)},500)),m.target&&m.target.nodeName&&m.target.nodeName.toLowerCase()==="a"&&m.type==="dcg-tap"&&m.device==="keyboard"&&m.target.click&&m.target.click(),Ge("trigger event:"+m.type),B(m.target).trigger(m)},po=function(t){let e=xr,r=!!xr.length,a=document.querySelectorAll(".dcg-tap-container."+ra+" .dcg-hovered"),s=Array.from(a).filter(Tn),d=[],g=[],m=[];t&&ms(t).forEach(function(p){(!r||e.indexOf(p)!==-1)&&(s.indexOf(p)===-1&&m.push(p),d.push(p))});for(let p of s)d.indexOf(p)===-1&&g.push(p);g.forEach(p=>{p&&p.classList.remove("dcg-hovered"),B(p).trigger("tipsyhide")}),m.forEach(p=>{p&&p.classList.add("dcg-hovered"),B(p).trigger("tipsyshow")})},go=function(t){for(let e of yt)if(e.pointerId===t)return!0;return!1},ys=function(t){for(let e=0;e<yt.length;e++)if(yt[e].pointerId===t){yt.splice(e,1)[0];return}},fd=function(t){ae===na&&uo(Cr,t),po(null),yt.push(t.originalEvent),ct("dcg-tapstart",t,{touches:yt,changedTouches:[t.originalEvent]})},ud=function(t){ys(t.originalEvent.pointerId);let e={touches:yt,changedTouches:[t.originalEvent]};ct("dcg-tapcancel",t,e),yt.length===0&&Gn(t,e)},pd=function(t){ys(t.originalEvent.pointerId);let e={touches:yt,changedTouches:[t.originalEvent]};ct("dcg-tapend",t,e),yt.length===0&&Gn(t,e)},ho=function(t){return t.originalEvent.pointerType==="touch"},Vn=function(t,e){t.trim().split(/\s+/).forEach(function(r){let a=Wm?{passive:!1}:void 0;document.addEventListener(r,function(s){Ge("document.on:"+s.type),e(B.event.fix(s))},a)})};Vn("pointerdown MSPointerDown",function(t){if(!(ae===aa||ae===It||!ho(t))){if(go(t.originalEvent.pointerId)){Ge("exit. pointer id already exists: "+t.originalEvent.pointerId);return}fd(t)}});Vn("pointermove MSPointerMove",function(t){ae===aa||ae===It||!ho(t)||(go(t.originalEvent.pointerId)||(Ge("pointer id already exists: "+t.originalEvent.pointerId),fd(t)),ys(t.originalEvent.pointerId),yt.push(t.originalEvent),ct("dcg-tapmove",t,{touches:yt,changedTouches:[t.originalEvent]}))});B(document).on("pointercancel MSPointerCancel",function(t){if(Ge("document.on:"+t.type),ae!==Cr||!ho(t)||!go(t.originalEvent.pointerId))return;ud(t);let e;for(;e=yt.pop();){let r=B.Event(e,{originalEvent:e});ud(r)}});B(document).on("pointerup MSPointerUp",function(t){if(Ge("document.on:"+t.type),ae!==Cr||!ho(t)||!go(t.originalEvent.pointerId))return;pd(t);let e;for(;e=yt.pop();){let r=B.Event(e,{originalEvent:e});pd(r)}});var Wm=function(){let t=!1;try{let e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",function(){},e),window.removeEventListener("test",function(){},e)}catch(e){}return t}();Vn("touchstart",function(t){ae===aa||ae===Cr||(ae===na&&uo(It,t),po(null),ct("dcg-tapstart",t,{touches:t.originalEvent.touches,changedTouches:t.originalEvent.changedTouches}))});Vn("touchmove",function(t){ae===It&&ct("dcg-tapmove",t,{touches:t.originalEvent.touches,changedTouches:t.originalEvent.changedTouches})});Vn("touchcancel",function(t){if(ae!==It)return;let e={touches:t.originalEvent.touches,changedTouches:t.originalEvent.changedTouches};ct("dcg-tapcancel",t,e),t.originalEvent.touches.length===0&&Gn(t,e)});Vn("touchend",function(t){if(ae!==It)return;let e={touches:t.originalEvent.touches,changedTouches:t.originalEvent.changedTouches};ct("dcg-tapend",t,e),t.originalEvent.touches.length===0&&Gn(t,e)});B(document).on("mousedown",function(t){if(Ge("document.on:"+t.type),!(t.button===1||t.button===2)){if(ae===It||ae===Cr||Sn()){!t.target.matches("input, textarea, select")&&Tn(t.target)&&t.preventDefault(),Ge("abort mousedown: "+ae+":"+Sn());return}uo(aa,t),ct("dcg-tapstart",t,{touches:[t],changedTouches:[t]})}});var yd=function(t){if(!(t instanceof Element))return!1;let e=!!t.closest(".dcg-do-not-blur"),r=!!t.closest(".dcg-do-blur");return!!(e&&!r&&Tn(t))};B(document).on("mousedown",function(t){if(Ge("document.on:"+t.type),!!yd(t.target)){t.preventDefault();try{let e=window.getSelection();if(e.rangeCount===1){let r=e.getRangeAt(0);r.startContainer===r.endContainer&&r.startContainer.closest(".dcg-text-selectable")&&e.removeAllRanges()}}catch(e){}}});B(document).on("mouseleave",function(t){if(Ge("document.on:"+t.type),ae===na){if(Sn()){Ge("abort mouseleave: "+ae+":"+Sn());return}po(null)}});B(document).on("mousemove",function(t){if(Ge("document.on:"+t.type),!(t.button===1||t.button===2)&&!(ae===It||ae===Cr)){if(Sn()){Ge("abort mousemove: "+ae+":"+Sn());return}po(t.target),ct("dcg-tapmove",t,{touches:[t],changedTouches:[t]})}});B(document).on("mouseup",function(t){if(Ge("document.on:"+t.type),t.button===1||t.button===2||ae!==aa)return;let e={touches:[],changedTouches:[t]};ct("dcg-tapend",t,e),Gn(t,e)});B(document).on("keydown",function(t){if(Ge("document.on:"+t.type),!(He(t)!==Xr&&He(t)!==ps||!Tn(t.target))&&ae!==En){if(t.target.matches('a:not([ontap]), button:not([ontap]), input, textarea, select, [role="textbox"], [contenteditable="true"]'))return;t.preventDefault(),uo(En,t),ct("dcg-tapstart",t,{touches:[t],changedTouches:[t]})}});B(document).on("keyup",function(t){if(Ge("document.on:"+t.type),He(t)!==Xr&&He(t)!==ps||!Tn(t.target)||ae!==En)return;let e={touches:[],changedTouches:[t]};ct("dcg-tapend",t,e),Gn(t,e)});st();function wd(){document.activeElement&&fs(document.activeElement)&&B(document.activeElement).trigger("blur")}var vd=function(){{var t=function(){},e=["log","info","warn","error","assert","dir","clear","profile","profileEnd","time","timeEnd","group","groupCollapsed","groupEnd","trace"],r={},a=function(s){typeof window!="undefined"&&window.console&&window.console[s]?r[s]=function(){Function.prototype.apply.call(window.console[s],window.console,arguments)}:r[s]=t};return e.forEach(a),r}}(),ir=vd,{log:Ov,warn:Iv,error:Mv,assert:Nv,dir:qv,clear:_v,profile:Rv,profileEnd:Pv,time:Bv,timeEnd:$v,group:Uv,groupCollapsed:Kv,groupEnd:Wv,trace:zv}=vd;var mo={cb20221031:"1"};st();function kd(t){let e={};return B.extend(!0,e,t),B.param(e)}var fo="";function oa(){return fo}var xd=[];function Cd(t){xd.push(t)}function zm(t){if(t.status===401)for(let e of xd)e()}async function Hm(t){if(t&&t.routeDeprecated)throw t.js&&new Function(t.js)(),t}function Ym(){throw{status:0,responseJSON:{errors:[{message:"Connection failed. Check your internet connection?"}]}}}async function bs(t){let e=await t.catch(Ym);if(zm(e),!e.ok){let a;try{a=await e.json()}catch(s){}throw{status:e.status,responseJSON:a}}let r=await e.json();return await Hm(r),r}async function sr(t,e){let r={method:"POST",credentials:"include",headers:{Accept:"application/json, text/javascript, */*; q=0.01"}};return e!==void 0&&(r.body=kd(e),r.headers["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),await bs(fetch(fo+t,r))}async function Dd(t,e){let r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json, text/javascript, */*; q=0.01"},body:JSON.stringify(e||null)};return await bs(fetch(fo+t,r))}async function ia(t,e){e===void 0&&(e={}),e=A(A({},e),mo);let r={method:"GET",credentials:"include",headers:{Accept:"application/json, text/javascript, */*; q=0.01"}},a=/\?/.test(t)?"&":"?";return await bs(fetch(`${fo}${t}${a}${new URLSearchParams(e)}`,r))}var Mt=null,ca=null,vs=!1,la={},Sd=0;function jm(){window.fetch=function(t,e){let r=new Request(t,e);var a=Sd+"";Sd+=1;let s=new Promise((d,g)=>{la[a]={resolve:d,reject:g}});return r.text().then(d=>{Mt.methods.proxyXHR(JSON.stringify({id:a,url:r.url,method:r.method,headers:r.headers,body:d}))},()=>{la[a].reject(new TypeError("Could not decode request body")),delete la[a]}),s}}function Jm(t){var a;var e=(a=t.target)==null?void 0:a.closest("a[href]");if(e&&e.protocol==="file:"){var r=e.getAttribute("href");r[0]!=="/"&&(r="/"+r),e.setAttribute("href",oa()+r)}}Ya?(sa=[],yo=[],Td=function(t){var e=yo.length?yo.pop():sa.length;return sa[e]=t,e},Gd=function(t){var e=sa[t];return sa[t]=null,yo.push(t),e},Mt={loaded:!1,methods:{},queuedMethodCalls:[]},so(function(){var t=[];window.ObjC_callback=function(r){Mt.loaded=!0,r.split(" ").forEach(function(a){Mt.methods[a]=function(s,d){var g=d?Td(d):-1;t.push("desmos:"+a+"/"+g+"/"+encodeURIComponent(s)),t.length===1&&e.setAttribute("src",t[0])}}),this.ObjC_callback=function(a,s){try{a!==-1&&Gd(a)(s)}finally{t.shift(),t.length>0&&e.setAttribute("src",t[0])}},Mt.methods.proxyXHR&&jm(),Mt.queuedMethodCalls.forEach(function(a){Qt[a.methodName].apply(Qt,a.args)})};var e=document.createElement("iframe");Cn(e,{position:"absolute",left:"-1000px",zIndex:"-1"}),e.setAttribute("id","objc-bridge"),e.setAttribute("src","desmos:loaded"),document.body.append(e)})):ja?ca=window.Android:vs=!0;var sa,yo,Td,Gd,Qm=["hideLoadingScreen","gaEvent","openGoogleLogin","openAppleLogin","logout","saveCookies","deleteCookies","startSingleAppMode","endSingleAppMode","setWWWSubdomain","sendSerializedAnalyticsEvent","sendStoredLogsToDesmos"],ws=class extends yn{constructor(){super();this.heartbeatTimeout=void 0,this.observeEvent("started resumed",r=>{this.gaEvent(r+":"+this.versionNumber),this.incrementHeartbeat(0)}),document.location.search.indexOf("simulateVersionNumber")!==-1&&(this.versionNumber="?.?.?");for(let r of Qm)this[r]=function(){vs||(ca?ca[r]?ca[r].apply(ca,arguments):ir.log("call to missing Android method",r,arguments):Mt&&(Mt.loaded?Mt.methods[r]?Mt.methods[r].apply(Mt,arguments):ir.log("call to missing ObjC method",r,arguments):Mt.queuedMethodCalls.push({methodName:r,args:arguments})))}}heartbeat(r){clearTimeout(this.heartbeatTimeout),this.gaEvent("heartbeat-"+10*r),this.incrementHeartbeat(r)}incrementHeartbeat(r){clearTimeout(this.heartbeatTimeout),this.heartbeatTimeout=setTimeout(()=>{this.heartbeat(r+1)},600*1e3)}_started(r,a){this.appId=r,this.versionNumber=a,this.triggerEvent("started",void 0)}_resumed(){this.triggerEvent("resumed",void 0)}handleAndroidBackButtonAndReturnIfShouldMoveToBackground(){var r=window.Calc&&window.Calc.controller;return r&&r.isKeypadOpen()?(wd(),"false"):(r=window.MainController,r&&r.handleAndroidBackButton()?"false":"true")}isInApp(){return window.platform&&window.platform!=="www"}onGoogleAuthResult(r){this.triggerEvent("onGoogleAuthResult",r)}onAppleAuthResult(r){this.triggerEvent("onAppleAuthResult",r)}onObjCXHRProxyResult(r){var a=r.id;let{resolve:s,reject:d}=la[a];delete la[a],r.status===0?d(new TypeError("Network error")):s(new Response(r.body,{status:r.status,headers:r.headers}))}sendAnalyticsEvent(r,a){this.sendSerializedAnalyticsEvent(JSON.stringify({type:r,payload:a}))}},Qt=new ws;vs||(window.AppBridge=Qt,document.addEventListener("click",Jm,!0));window.__dcgAppBridgeDefined=!0;An();function Xm(t){function e(r){requestAnimationFrame(e),t(r)}requestAnimationFrame(e)}function Zm(t){function e(){setTimeout(e,Fn),t(Date.now())}setTimeout(e,Fn)}var Vd=cr().timeoutLoop,Fn=0;typeof Vd=="string"&&(Fn=parseFloat(Vd),isNaN(Fn)&&(Fn=1e3/60));var Ad=Fn>0?Zm:Xm;var Fd=new yn;Ad(function(t){Fd.triggerEvent("tick",t)});var ks=0;function Ld(t){return ks+=1,Fd.observeEvent("tick."+ks,function(e,r){t(r)}),ks}var nh=j(X());function Vo(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){let e=Math.random()*16|0;return(t=="x"?e:e&3|8).toString(16)})}var uy=50,Ao=class{constructor(e,r){this.throttledFlushBatchedLogs=fn(async()=>{if(this.requestInFlight||this.batchedLogs.length==0)return;let e=this.batchedLogs.splice(0,uy);this.requestInFlight=!0;try{await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({events:e})})}catch(r){}this.requestInFlight=!1,this.throttledFlushBatchedLogs()},1e3,{leading:!1});this.batchedLogs=[],this.requestInFlight=!1,this.getSessionData=r,this.apiUrl=e}log(e){this.batchedLogs.push(A(A({},this.getSessionData()),e)),this.throttledFlushBatchedLogs()}};var Lu,py={eventType:"eventType",pageLoadId:window.pageLoadId||Vo(),source:"browser",app:"knox",userAgent:navigator.userAgent};var gy=new Ao("/data-events",()=>py);function hy(t){gy.log(A({url:document.location.href},t))}function _s(t,e){hy({eventType:t,payloadJSON:JSON.stringify(R(A({},e),{userId:Lu}))})}var qs;function Fo(t){let e=document.location.href,r=navigator.userLanguage||navigator.language,a=document.referrer,s=R(A({browserLang:r,referrer:a},t),{isFirstPageLoad:qs===void 0});Lu=t.userId,qs!==e&&(qs=e,_s("page-load",s))}var Ee=j(X());var Ou=j(X()),me=class extends Ou.Class{init(){this.controller=this.props.controller()}};var oe=j(X());var Ve=j(X());st();function Lo(t){return Array.from(t.querySelectorAll('input:enabled, button:enabled, select:enabled, textarea:enabled, [tabindex="0"], a[href]')).filter(e=>!e.getAttribute("aria-hidden")&&!e.getAttribute("aria-disabled")&&sd(e))}function Iu(t){return function(r){if(He(r)==ao&&t){let a=Lo(t);if(a.length===0)return;let s=a[0],d=a[a.length-1];r.shiftKey&&document.activeElement===s?(r.preventDefault(),B(d).trigger("focus")):!r.shiftKey&&document.activeElement===d?(r.preventDefault(),B(s).trigger("focus")):document.activeElement&&!t.contains(document.activeElement)&&(r.preventDefault(),B(s).trigger("focus"))}}}st();var{IfElse:my,Switch:fy}=Ve.Components,yy=500,Xe=5,Rs=class extends Ve.Class{init(){this.latexKey=0,this.uuid=this.props.uuid()}template(){return Ve.createElement("div",{class:()=>({[this.getCustomClassName()]:!0,"dcg-tooltip-positioning-container":!0,"dcg-latex-tooltip-positioning-container":!!this.props.renderAsLatex,"dcg-tooltip-gravity-ne-se":this.props.gravity()==="ne"||this.props.gravity()==="se","dcg-tooltip-gravity-nw-sw":this.props.gravity()==="nw"||this.props.gravity()==="sw","dcg-tooltip-gravity-n-s":this.props.gravity()==="n"||this.props.gravity()==="s","dcg-tooltip-gravity-e-w":this.props.gravity()==="e"||this.props.gravity()==="w"}),style:()=>({top:`${this.props.hitAreaRect().top+(this.props.offset().top||0)}px`,left:`${this.props.hitAreaRect().left+(this.props.offset().left||0)}px`,width:`${this.props.hitAreaRect().width}px`,height:`${this.props.hitAreaRect().height}px`})},Ve.createElement("div",{class:Ve.const("dcg-tooltip-message-container"),style:this.bindFn(this.getMessageStyle)},my(()=>!!this.props.renderAsLatex,{true:()=>Ve.createElement("div",{role:Ve.const("tooltip"),id:this.const(this.uuid),class:()=>({"dcg-tooltip-message":!0,"dcg-latex":!0,"dcg-sticky-not-stuck":this.props.isStickyAndNotStuck(),"dcg-tooltip-overflow":this.messageOverflows()}),style:()=>({"max-width":`${this.getMaxWidth()}px`}),didMount:e=>{this.tooltipMessage=e}},Ve.createElement(fy,{key:()=>this.latexKey},()=>this.props.renderAsLatex().view(this.props.tooltip()))),false:()=>Ve.createElement("div",{role:Ve.const("tooltip"),id:this.const(this.uuid),class:Ve.const("dcg-tooltip-message"),style:()=>({background:this.getBackgroundColor(),cursor:this.props.isStickyAndNotStuck()?"pointer":"default"})},this.props.tooltip)})),Ve.createElement("div",{class:()=>({"dcg-tooltip-arrow":!0,[this.getTooltipGravityClass()]:!0}),style:()=>this.props.renderAsLatex?this.getArrowWithBorderStyle():this.getSolidArrowStyle()}))}getTooltipGravityClass(){switch(this.props.gravity()){case"n":case"ne":case"nw":return"dcg-tooltip-gravity-n";case"s":case"se":case"sw":return"dcg-tooltip-gravity-s";case"e":return"dcg-tooltip-gravity-e";case"w":return"dcg-tooltip-gravity-w"}}willUpdate(){this.latexKey++}getCustomClassName(){return this.props.class?this.props.class():""}messageOverflows(){return this.tooltipMessage&&this.tooltipMessage.getBoundingClientRect().width>=this.getMaxWidth()}getArrowWithBorderStyle(){let e=this.props.gravity(),r="10px",a=this.getBackgroundColor(),s="#bbb",d=this.props.isStickyAndNotStuck()?".95":"1",g="8px",m={width:g,height:g,border:`1px solid ${s}`,background:a,opacity:d};switch(e){case"s":return R(A({},m),{top:"100%",left:"50%","margin-top":"1px","border-right":"0","border-bottom":"0"});case"sw":return R(A({},m),{top:"100%",right:r,"margin-top":"1px","border-right":"0","border-bottom":"0"});case"se":return R(A({},m),{top:"100%",left:r,"margin-top":"1px","border-right":"0","border-bottom":"0"});case"n":return R(A({},m),{bottom:"100%",left:"50%","margin-bottom":"1px","border-left":"0","border-top":"0"});case"nw":return R(A({},m),{bottom:"100%",right:r,"margin-bottom":"1px","border-left":"0","border-top":"0"});case"ne":return R(A({},m),{bottom:"100%",left:r,"margin-bottom":"1px","border-left":"0","border-top":"0"});case"e":return R(A({},m),{top:"50%",left:"100%","margin-left":"1px","border-right":"0","border-top":"0"});case"w":return R(A({},m),{top:"50%",right:"100%","margin-right":"1px","border-left":"0","border-bottom":"0"});default:return e}}getSolidArrowStyle(){let e=this.props.gravity(),r=`${this.props.hitAreaRect().width/2}px`,a=this.getBackgroundColor(),s=`transparent transparent ${a} transparent`,d=`${a} transparent transparent transparent`,g=`transparent ${a} transparent transparent`,m=`transparent transparent transparent ${a}`,p=`-${Xe}px`;switch(e){case"s":return{top:"100%",left:"50%",border:`${Xe}px solid transparent`,"border-color":s,"margin-top":p,"margin-left":p};case"sw":return{top:"100%",right:r,border:`${Xe}px solid transparent`,"border-color":s,"margin-top":p,"margin-right":p};case"se":return{top:"100%",left:r,border:`${Xe}px solid transparent`,"border-color":s,"margin-top":p,"margin-left":p};case"n":return{bottom:"100%",left:"50%",border:`${Xe}px solid transparent`,"border-color":d,"margin-bottom":p,"margin-left":p};case"nw":return{bottom:"100%",right:r,border:`${Xe}px solid transparent`,"border-color":d,"margin-bottom":p,"margin-right":p};case"ne":return{bottom:"100%",left:r,border:`${Xe}px solid transparent`,"border-color":d,"margin-bottom":p,"margin-left":p};case"e":return{top:"50%",left:"100%",border:`${Xe}px solid transparent`,"border-color":g,"margin-left":`-${Xe}px`,"margin-top":p};case"w":return{top:"50%",right:"100%",border:`${Xe}px solid transparent`,"border-color":m,"margin-right":p,"margin-top":p};default:return e}}getBackgroundColor(){return this.props.renderAsLatex?"#fff":this.props.isStickyAndNotStuck()?"#666":"#000"}getMaxWidth(){let r=this.props.gravity(),a=this.props.hitAreaRect().left+(this.props.offset().left||0),s=a+this.props.hitAreaRect().width,d=.5*this.props.hitAreaRect().width+a,g=5,m=window.innerWidth-5;switch(r){case"se":case"ne":case"e":return m-a;case"sw":case"nw":case"w":return s-g;case"s":case"n":return Math.min(m-d,d-g)*2;default:return r}}getMessageStyle(){let e=this.props.hitAreaRect(),r=this.props.gravity(),a=this.props.maxWidth();switch(r){case"s":return{top:"100%",width:`${a}px`,transform:"translate(-50%, 0)",left:`${.5*e.width}px`,"margin-top":`${Xe}px`,"text-align":"center"};case"sw":return{top:"100%",width:`${a}px`,right:"0","margin-top":`${Xe}px`,"text-align":"right"};case"se":return{top:"100%",width:`${a}px`,"margin-top":`${Xe}px`,"text-align":"left"};case"n":return{bottom:"100%",width:`${a}px`,transform:"translate(-50%, 0)",left:`${.5*e.width}px`,"margin-bottom":`${Xe}px`,"text-align":"center"};case"nw":return{bottom:"100%",right:"0",width:`${a}px`,"margin-bottom":`${Xe}px`,"text-align":"right"};case"ne":return{bottom:"100%",width:`${a}px`,"margin-bottom":`${Xe}px`,"text-align":"left"};case"e":return{transform:"translate(0, -50%)",left:"100%",width:`${a}px`,top:`${.5*e.height}px`,"margin-left":`${Xe}px`,"text-align":"left"};case"w":return{transform:"translate(0, -50%)",right:"100%",width:`${a}px`,top:`${.5*e.height}px`,"margin-right":`${Xe}px`,"text-align":"right"};default:return r}}};function by(){return document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}var qr=class extends Ve.Class{init(){this.uuid=`dcg-tooltip-${Vo()}`}template(){return Ve.createElement("div",{class:Ve.const("dcg-tooltip-hit-area-container"),handleevent:Ve.const("true"),didMount:e=>{this.isMounted=!0,this.hitAreaNode=e,this.setupEventListeners(this.hitAreaNode)},onTap:()=>{if(this.shouldStickOnTargetClick())if(this.isStuck)this.clearTimeouts(),this.hideTooltip();else{if(this.props.disabled&&this.props.disabled())return;this.showTooltip(),this.stickTooltip()}else if(this.shouldShowOnTapstart()){if(this.props.disabled&&this.props.disabled())return;this.showTooltip(),this.setUpHideOnExternalMousedown()}}},this.children)}shouldShowOnTapstart(){return this.props.showOnTapstart&&this.props.showOnTapstart()}didUpdate(){this.updateTooltip()}updateTooltip(){if(!this.wrapperRef)return;if(!this.props.tooltip()){this.hideTooltip();return}let e=this.hitAreaNode.getBoundingClientRect(),r=this.wrapperRef.elt.getBoundingClientRect(),{originalTop:a,originalLeft:s}=this.wrapperRef,d=e.top-r.top,g=e.left-r.left;Math.abs(d-a)>3||Math.abs(g-s)>3?this.hideTooltip():this.wrapperRef.view.update()}handleShowEvent(e){if(this.props.disabled&&this.props.disabled())return;let r=this.props.delay?this.props.delay():yy;this.clearTimeouts(),this.showTooltipTimeout=setTimeout(e,r)}handleHideEvent(){this.clearTimeouts(),this.hideTooltipTimeout=setTimeout(this.bindFn(this.hideTooltip),150)}setupEventListeners(e){B(e).on("tipsyshow",r=>{r.target===e&&this.handleShowEvent(()=>{this.showTooltip()})}).on("tipsyhide",r=>{r.target!==e||this.isStuck||this.handleHideEvent()})}willUnmount(){this.clearTimeouts(),this.isMounted=!1,this.hideTooltip()}setUpHideOnExternalMousedown(){B(document).on(`mousedown.dcg-tooltip-${this.uuid} touchstart.dcg-tooltip-${this.uuid} pointerdown.dcg-tooltip-${this.uuid}`,e=>{this.wrapperRef&&(this.hitAreaNode.contains(e.target)||this.wrapperRef.elt.contains(e.target)||this.hideTooltip())})}stickTooltip(){this.isMounted&&this.wrapperRef&&(this.isStuck||(this.setUpHideOnExternalMousedown(),this.isStuck=!0,this.updateTooltip()))}clearTimeouts(){clearTimeout(this.showTooltipTimeout),clearTimeout(this.hideTooltipTimeout)}showTooltip(){if(!this.isMounted||this.wrapperRef||!this.props.tooltip())return;let e=this.hitAreaNode.getBoundingClientRect(),r=document.createElement("div");r.className="dcg-tooltip-mount-pt";let a=this.hitAreaNode.closest(".dcg-tap-container"),s=by();(!!s&&s.contains(this.hitAreaNode)&&s.closest(".dcg-tap-container")?s:a).appendChild(r);let g=r.getBoundingClientRect(),m=e.left-g.left,p=e.top-g.top,b=Math.min(200,this.props.maxParentWidthOverflow?e.width+2*this.props.maxParentWidthOverflow():1/0),k={tooltip:this.props.tooltip,class:this.props.class,isStickyAndNotStuck:()=>this.shouldStickOnTargetClick()&&!this.isStuck,offset:()=>this.props.offset?this.props.offset():{},gravity:()=>this.props.gravity?this.props.gravity():"s",renderAsLatex:this.props.renderAsLatex,maxWidth:()=>b,hitAreaRect:()=>({top:p||0,left:m||0,width:e.width||0,height:e.height||0}),uuid:()=>this.uuid};this.setupEventListeners(r),B(r).on("dcg-tap",()=>{this.shouldStickOnTargetClick()&&this.stickTooltip()});let F=Ve.mountToNode(Rs,r,k);B(document).on(`keydown.dcg-tooltip-${this.uuid}`,U=>{He(U)===Or&&this.hideTooltip()});let G=()=>this.updateTooltip();window.addEventListener("scroll",G,!0),this.wrapperRef={elt:r,view:F,originalLeft:m,originalTop:p,onScroll:G},this.assignAriaDescribedBy()}hideTooltip(){this.clearTimeouts(),this.wrapperRef&&(this.isStuck=!1,B(document).off(`.dcg-tooltip-${this.uuid}`),window.removeEventListener("scroll",this.wrapperRef.onScroll,!0),this.restoreAriaDescribedBy(),Ve.unmountFromNode(this.wrapperRef.elt),this.wrapperRef.elt.parentNode&&this.wrapperRef.elt.parentNode.removeChild(this.wrapperRef.elt),this.wrapperRef=void 0)}assignAriaDescribedBy(){let e=Lo(this.hitAreaNode)[0]||this.hitAreaNode;this.originalDescribedBy=e.getAttribute("aria-describedby"),e.setAttribute("aria-describedby",this.uuid)}restoreAriaDescribedBy(){let e=Lo(this.hitAreaNode)[0]||this.hitAreaNode;this.originalDescribedBy?e.setAttribute("aria-describedby",this.originalDescribedBy):e.removeAttribute("aria-describedby")}shouldStickOnTargetClick(){return!!this.props.sticky&&this.props.sticky()}};var Bo=j(X());An();var Ye={},Et=cr();if(typeof Desmos!="undefined"&&Desmos.config)for(Oo in Desmos.config)Desmos.config.hasOwnProperty(Oo)&&(Et[Oo]=Desmos.config[Oo]);var Oo,er=function(t){return Et.hasOwnProperty(t)},ne=function(t){Ye[t]=er(t)},ve=function(t){Ye[t]=!er("no"+t)};ne("testing");ne("maintenance");ne("disableScrollFix");ne("nativeOnscreenKeypad");ne("hidden");ne("disableMouseInteractions");ne("advancedStyling");ne("outofdom");ne("beta3d");Et.lang&&(Ye.language=Et.lang);Et.fontSize&&(Ye.fontSize=Et.fontSize);Et.backgroundColor&&(Ye.backgroundColor="#"+Et.backgroundColor);Et.textColor&&(Ye.textColor="#"+Et.textColor);Ye.no_navigation_warning=er("noconcat")||er("testing");Ye.previewMessage="You're previewing some new accessibility features.";Ye.previewFeedbackUrl="mailto:feedback@desmos.com";var wy=location&&location.hostname==="preview.desmos.com";Ye.previewMode=er("previewMode")||wy;ne("lockViewport");ne("authorFeatures");ne("degreeMode");ne("clearIntoDegreeMode");ne("plaidMode");ne("wireframe");ne("editOnWeb");ne("crossOriginSaveTest");ne("showResetButtonOnGraphpaper");ne("transparentBackground");ne("forceLogModeRegressions");ve("links");ve("trace");ve("zoomFit");ne("expressionsCollapsed");ne("invertedColors");ne("projectorMode");ve("images");ve("folders");ve("settingsMenu");ve("expressionsTopbar");ve("zoomButtons");ve("keypad");ve("graphpaper");ve("expressions");ve("branding");ve("pointsOfInterest");ve("plotSingleVariableImplicitEquations");ve("plotImplicits");ve("plotInequalities");ve("notes");ve("sliders");ne("pauseWhenOffscreen");ne("worksheetSVG");ve("brailleControls");ne("audioTraceKeypad");ve("audio");ne("sciKeypad");ne("4fnKeypad");ne("ans");er("braille")&&(Ye.braille=!0);ve("qwertyKeyboard");ne("restrictedFunctions");ne("forceEnableGeometryFunctions");ve("functionDefinition");ne("singleExpression");ne("restrictedEditing");ne("replaceCommaWith10Exp");ne("replaceRoundWithReciprocal");er("typingAsteriskWritesTimesSymbol")&&(Ye.typingAsteriskWritesTimesSymbol=!0);ve("substitutions");ve("logScales");ve("labels");ve("distributions");Ye["4fnKeypad"]?ne("decimalToFraction"):ve("decimalToFraction");ne("3d");ne("disableWorkerOnZoom");ne("disableLighting");er("exponentButtonForSquareRoot")?Ye.additionalFunctions=["exponent"]:Et.additionalFunctions&&typeof Et.additionalFunctions=="string"&&(Ye.additionalFunctions=Et.additionalFunctions.split(","));er("actions")?Ye.actions=!0:er("noactions")?Ye.actions=!1:er("clickableObjects")&&(Ye.actions=!0);function Mu(t){return Ye[t]}function Io(t){var e=[];for(let a of t)if(!(!a||typeof a!="string")){var r=a.split("-")[0];e.push(a),e.push(r);for(let s in Dr){let d=Dr[s];s.split("-")[0]===r&&d.useAsRoot&&e.push(s)}}return e}var Dr={en:{displayName:"English (US)",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},es:{displayName:"Espa\xF1ol (LATAM)",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_ES-ES.pdf",useAsRoot:!0},et:{displayName:"Eesti",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},ru:{displayName:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_RU.pdf",useAsRoot:!1},da:{displayName:"Dansk",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},de:{displayName:"Deutsch",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_DE.pdf",useAsRoot:!1},"pt-BR":{displayName:"Portugu\xEAs (Brasil)",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!0},"pt-PT":{displayName:"Portugu\xEAs (Portugal)",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},ca:{displayName:"Catal\xE0",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},fr:{displayName:"Fran\xE7ais",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_FR.pdf",useAsRoot:!1},it:{displayName:"Italiano",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_IT.pdf",useAsRoot:!1},is:{displayName:"\xCDslenska",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},nl:{displayName:"Nederlands",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},no:{displayName:"Norsk",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},"sv-SE":{displayName:"Svenska",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!0},hu:{displayName:"Magyar",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},cs:{displayName:"\u010Ce\u0161tina",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},pl:{displayName:"Polski",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_PL.pdf",useAsRoot:!1},id:{displayName:"Bahasa Indonesia",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},vi:{displayName:"Ti\u1EBFng Vi\u1EC7t",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_VI.pdf",useAsRoot:!1},el:{displayName:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_EL.pdf",useAsRoot:!1},uk:{displayName:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},ka:{displayName:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},th:{displayName:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},tr:{displayName:"T\xFCrk\xE7e",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_TR.pdf",useAsRoot:!1},"zh-CN":{displayName:"\u7B80\u4F53\u4E2D\u6587",useAsRoot:!0,userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_ZH-CN.pdf"},"zh-TW":{displayName:"\u7E41\u9AD4\u4E2D\u6587",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_ZH-TW.pdf",useAsRoot:!1},ko:{displayName:"\uD55C\uAD6D\uC5B4",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide.pdf",useAsRoot:!1},ja:{displayName:"\u65E5\u672C\u8A9E",userGuideURL:"https://desmos.s3.amazonaws.com/Desmos_User_Guide_JA.pdf",useAsRoot:!1}};var Nu=`account-shell-text-login-window-blocked-apple = Login window blocked. Please allow popups from desmos.com to sign in with Apple
account-shell-text-login-window-blocked-google = Login window blocked. Please allow popups from desmos.com to sign in with Google.
shared-button-accept = Accept
shared-button-cancel = Cancel
shared-button-change-email-address = Change email address
shared-button-change-email-and-password = Change email and password
shared-button-close-dialog = Close Dialog
shared-button-confirm-name = Confirm Name
shared-button-continue-to-desmos = Continue to Desmos
shared-button-create-account = Create Account
shared-button-delete-account-question = Delete your Desmos account?
shared-button-email-address-narrow = Email
shared-button-email-address-wide = Email Address
shared-button-external-account-narrow = External
shared-button-external-account-wide = External Account
shared-button-go-to-account-settings = Go to Account Settings
shared-button-google-account-narrow = Google
shared-button-google-account-wide = Google Account
shared-button-login = Log in
shared-button-login-capitalized = Log In
shared-button-recover-password = Recover Password
shared-button-save = Save
shared-button-send-delete-account-email = Send Delete Account Email
shared-button-send-email = Send Email
shared-button-sign-in-with-apple = Sign in with Apple
shared-button-sign-in-with-google = Sign in with Google
shared-button-try-again = Didn't work? Try again!
shared-calculator-button-clear = clear
shared-calculator-button-language = Language
shared-calculator-button-print = Print
shared-calculator-heading-function-table-column-header = Function
shared-calculator-heading-keyboard-shortcuts-audio-tracing = Audio Tracing
shared-calculator-heading-keyboard-shortcuts-braille = Braille
shared-calculator-heading-keyboard-shortcuts-common-actions = Common Actions
shared-calculator-heading-keyboard-shortcuts-common-symbols = Common Symbols
shared-calculator-heading-keyboard-shortcuts-desmos-com-only = Desmos.com Only
shared-calculator-heading-keyboard-shortcuts-expression-entry-and-navigation = Expression Entry and Navigation
shared-calculator-heading-keyboard-shortcuts-interactive-points = Interactive Points
shared-calculator-heading-keyboard-shortcuts-slider-trace = Slider Trace
shared-calculator-heading-keyboard-shortcuts-sliders = Sliders
shared-calculator-heading-keyboard-shortcuts-symbols = Symbols
shared-calculator-heading-keyboard-shortcuts-tables = Tables
shared-calculator-heading-mac-table-column-header = Mac Shortcut
shared-calculator-heading-windows-chrome-table-column-header = Windows / ChromeOS Shortcut
shared-calculator-label-accessibility = Accessibility
shared-calculator-label-search-results = Search Results
shared-calculator-text-keyboard-shortcut-add-expression = Add an Expression
shared-calculator-text-keyboard-shortcut-add-folder = Add a Folder
shared-calculator-text-keyboard-shortcut-add-image = Add an Image
shared-calculator-text-keyboard-shortcut-add-note = Add a Note
shared-calculator-text-keyboard-shortcut-add-table = Add a Table
shared-calculator-text-keyboard-shortcut-adjust-playback-speed = Adjust Playback Speed (1 = slowest, 5 = fastest)
shared-calculator-text-keyboard-shortcut-announce-slider-animations = Announce Active Slider Animations
shared-calculator-text-keyboard-shortcut-beginning-of-block = Beginning of Current Block
shared-calculator-text-keyboard-shortcut-beginning-of-expression = Beginning of Current Expression
shared-calculator-text-keyboard-shortcut-close-a-dialog = Close a Dialog
shared-calculator-text-keyboard-shortcut-collapse-all-folders = Collapse All Folders
shared-calculator-text-keyboard-shortcut-collapse-folder = Collapse Selected Folder
shared-calculator-text-keyboard-shortcut-decrease-volume = Decrease Volume
shared-calculator-text-keyboard-shortcut-decrease-x = Decrease X
shared-calculator-text-keyboard-shortcut-decrease-x-larger = Decrease X by Larger Amount
shared-calculator-text-keyboard-shortcut-decrease-y = Decrease Y
shared-calculator-text-keyboard-shortcut-decrease-y-larger = Decrease Y by Larger Amount
shared-calculator-text-keyboard-shortcut-degrees-toggle = Toggle Between Degrees and Radians
shared-calculator-text-keyboard-shortcut-delete-expression = Delete the Focused Expression
shared-calculator-text-keyboard-shortcut-delete-selection = Delete Selection
shared-calculator-text-keyboard-shortcut-describe-axes = Describe the graph axes
shared-calculator-text-keyboard-shortcut-end-of-block = End of Current Block
shared-calculator-text-keyboard-shortcut-end-of-expression = End of Current Expression
shared-calculator-text-keyboard-shortcut-exit-block = Exit Current Block
shared-calculator-text-keyboard-shortcut-expand-all-folders = Expand All Folders
shared-calculator-text-keyboard-shortcut-expand-folder = Expand Selected Folder
shared-calculator-text-keyboard-shortcut-first-point = First Point
shared-calculator-text-keyboard-shortcut-focus-expression-list = Focus the Expression List
shared-calculator-text-keyboard-shortcut-focus-first-interactive-point = Focus First Interactive Point On Screen
shared-calculator-text-keyboard-shortcut-hear-graph = Hear Graph
shared-calculator-text-keyboard-shortcut-hear-specific-branch = Hear Only Branch 1 Through 10
shared-calculator-text-keyboard-shortcut-increase-selection-left = Increase Selection Left
shared-calculator-text-keyboard-shortcut-increase-selection-right = Increase Selection Right
shared-calculator-text-keyboard-shortcut-increase-volume = Increase Volume
shared-calculator-text-keyboard-shortcut-increase-x = Increase X
shared-calculator-text-keyboard-shortcut-increase-x-larger = Increase X by Larger Amount
shared-calculator-text-keyboard-shortcut-increase-y = Increase Y
shared-calculator-text-keyboard-shortcut-increase-y-larger = Increase Y by Larger Amount
shared-calculator-text-keyboard-shortcut-keypad-toggle = Show or Hide the Keypad
shared-calculator-text-keyboard-shortcut-last-point = Last Point
shared-calculator-text-keyboard-shortcut-move-to-denominator = Move to Denominator Within Fraction
shared-calculator-text-keyboard-shortcut-move-to-numerator = Move to Numerator Within Fraction
shared-calculator-text-keyboard-shortcut-move-to-origin = Move to Origin
shared-calculator-text-keyboard-shortcut-nemeth-mode = Switch to Nemeth
shared-calculator-text-keyboard-shortcut-next-character = Next Character
shared-calculator-text-keyboard-shortcut-next-curve = Move to Next Curve
shared-calculator-text-keyboard-shortcut-next-expression = Move to Next Expression
shared-calculator-text-keyboard-shortcut-next-interactive-point = Go to Next Interactive Point
shared-calculator-text-keyboard-shortcut-next-poi = Next Point of Interest
shared-calculator-text-keyboard-shortcut-next-point = Next Point
shared-calculator-text-keyboard-shortcut-open-a-graph = Open a Graph
shared-calculator-text-keyboard-shortcut-open-expression-options = Open Options for the Focused Expression
shared-calculator-text-keyboard-shortcut-open-shortcuts-dialog = Open Keyboard Shortcuts Dialog
shared-calculator-text-keyboard-shortcut-previous-character = Previous Character
shared-calculator-text-keyboard-shortcut-previous-curve = Move to Previous Curve
shared-calculator-text-keyboard-shortcut-previous-expression = Move to Previous Expression
shared-calculator-text-keyboard-shortcut-previous-interactive-point = Go to Previous Interactive Point
shared-calculator-text-keyboard-shortcut-previous-poi = Previous Point of Interest
shared-calculator-text-keyboard-shortcut-previous-point = Previous Point
shared-calculator-text-keyboard-shortcut-print-a-graph = Print a Graph
shared-calculator-text-keyboard-shortcut-print-mode = Switch to Print
shared-calculator-text-keyboard-shortcut-redo = Redo
shared-calculator-text-keyboard-shortcut-remove-empty-expression = Remove Selected Empty Expression
shared-calculator-text-keyboard-shortcut-save-a-graph = Save a Graph
shared-calculator-text-keyboard-shortcut-select-all = Select All
shared-calculator-text-keyboard-shortcut-show-answer-as-decimal-or-fraction = Show Answer as Decimal or Fraction
shared-calculator-text-keyboard-shortcut-show-or-hide-expression-list = Show or Hide the Expression List
shared-calculator-text-keyboard-shortcut-slider-decrease = Decrease Value
shared-calculator-text-keyboard-shortcut-slider-decrease-larger = Decrease Value by Larger Increment
shared-calculator-text-keyboard-shortcut-slider-increase = Increase Value
shared-calculator-text-keyboard-shortcut-slider-increase-larger = Increase Value by Larger Increment
shared-calculator-text-keyboard-shortcut-slider-maximum = Highest Value
shared-calculator-text-keyboard-shortcut-slider-minimum = Lowest Value
shared-calculator-text-keyboard-shortcut-slider-trace-decrease = Decrease Value of Selected Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-decrease-larger = Decrease Value of Selected Slider by Larger Increment When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-increase = Increase Value of Selected Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-increase-larger = Increase Value of Selected Slider by Larger Increment When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-maximum = Move to Highest Value of Selected Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-minimum = Move to Lowest Value of Selected Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-next-slider = Select Next Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-slider-trace-previous-slider = Select Previous Slider When in Slider Trace
shared-calculator-text-keyboard-shortcut-speak-answer = Speak Answer
shared-calculator-text-keyboard-shortcut-speak-branch = Speak Branch
shared-calculator-text-keyboard-shortcut-speak-color = Speak Color
shared-calculator-text-keyboard-shortcut-speak-focused-block = Speak Focused Block
shared-calculator-text-keyboard-shortcut-speak-label = Speak Label
shared-calculator-text-keyboard-shortcut-speak-left-adjacent-block = Speak Left-Adjacent Block
shared-calculator-text-keyboard-shortcut-speak-parent-block = Speak Parent Block
shared-calculator-text-keyboard-shortcut-speak-poi-count = Speak Point of Interest Count
shared-calculator-text-keyboard-shortcut-speak-point-type = Speak Type of Selected Point
shared-calculator-text-keyboard-shortcut-speak-right-adjacent-block = Speak Right-Adjacent Block
shared-calculator-text-keyboard-shortcut-speak-selection = Speak Selection
shared-calculator-text-keyboard-shortcut-speak-x = Speak X Coordinate
shared-calculator-text-keyboard-shortcut-speak-y = Speak Y Coordinate
shared-calculator-text-keyboard-shortcut-summarize-graph = Summarize Selected Curve
shared-calculator-text-keyboard-shortcut-table-first-column = First Column in Row
shared-calculator-text-keyboard-shortcut-table-first-row = First Row in Column
shared-calculator-text-keyboard-shortcut-table-last-column = Last Column in Row
shared-calculator-text-keyboard-shortcut-table-last-row = Last Row in Column
shared-calculator-text-keyboard-shortcut-table-next-cell = Next Cell
shared-calculator-text-keyboard-shortcut-table-next-column = Next Column
shared-calculator-text-keyboard-shortcut-table-next-row = Next Row
shared-calculator-text-keyboard-shortcut-table-previous-cell = Previous Cell
shared-calculator-text-keyboard-shortcut-table-previous-column = Previous Column
shared-calculator-text-keyboard-shortcut-table-previous-row = Previous Row
shared-calculator-text-keyboard-shortcut-table-speak-column-header = Speak Column Header
shared-calculator-text-keyboard-shortcut-toggle-account-menu = Open or Close the Account Menu
shared-calculator-text-keyboard-shortcut-toggle-audio-trace = Enable or Disable Audio Trace Mode
shared-calculator-text-keyboard-shortcut-toggle-braille-typing = Turn Braille Typing On or Off
shared-calculator-text-keyboard-shortcut-toggle-edit-list-mode = Turn Edit List Mode On or Off
shared-calculator-text-keyboard-shortcut-toggle-graph-settings-menu = Open or Close the Graph Settings Menu
shared-calculator-text-keyboard-shortcut-toggle-help-menu = Open or Close the Help Menu
shared-calculator-text-keyboard-shortcut-toggle-language-menu = Open or Close the Language Menu
shared-calculator-text-keyboard-shortcut-toggle-share-menu = Open or Close the Share Menu
shared-calculator-text-keyboard-shortcut-toggle-slider-trace = Toggle Slider Trace Mode
shared-calculator-text-keyboard-shortcut-ueb-mode = Switch to UEB
shared-calculator-text-keyboard-shortcut-undo = Undo
shared-calculator-text-keyboard-shortcut-zoom-fit = Zoom to Fit
shared-calculator-text-keyboard-shortcut-zoom-in = Zoom In
shared-calculator-text-keyboard-shortcut-zoom-out = Zoom Out
shared-calculator-text-keyboard-shortcut-zoom-restore-default = Restore Default Viewport
shared-calculator-text-search-results =
    { $count ->
        [0] No results.
        [one] 1 reslt.
       *[other] { $count } results.
    }
shared-label-email = Email
shared-label-family-name = Last Name (optional)
shared-label-given-name-or-nickname = First Name or Nickname
shared-label-name = Name
shared-label-new-email-address = New Email Address
shared-label-password = Password
shared-message-account-reactivated = You previously requested to delete your account, but because you logged back in within 30 days, we will not delete your account. Welcome back!
shared-message-change-password-email-sent = We will send a link to your email address ({ $emailAddress }) so you can change your password.
shared-message-check-email-for-delete-link = Please check your email ({ $emailAddress }) for the link to delete your account.
shared-message-check-email-for-link = Please check { $emailAddress } for the Change Email link.
shared-message-check-email-for-password-link = Please check your email ({ $emailAddress }) for the link to change your password.
shared-message-check-email-for-password-recovery-link = Message sent. Please check your email for a password recovery link.
shared-message-consent-delete-information = If you don't want Desmos to hold onto this information, you may delete your account from the Account Settings menu at any time.
shared-message-consent-information = When you created your Desmos account, you gave us your name, email address, and password (unless you signed in with Google, in which case you gave us access to the name and email address associated with that account). You also gave us access to your saved work. To continue using your Desmos account, please consent below to the collection of this information.
shared-message-consent-text = I agree to let Desmos store and maintain the information I provide (e.g. login credentials, saved work) in order to provide and improve its service. To withdraw consent, you may delete your account at any time.
shared-message-cookie-notice = <1>Note:</1> Desmos uses cookies to enable persistence when you are signed in. If you do not wish to use cookies, please use Desmos without logging in. <2>Learn More.</2>
shared-message-delete-account-notice = When you delete your account, <1>we will retain your data for 30 days.</1> You can reactivate your account at any time during those 30 days by logging back in. If there's something about Desmos we can improve, please <2>let us know.</2>
shared-message-delete-account-will-send-email = We will send you a link to your email address ({ $email }) so you can delete your account.
shared-message-email-sent = Email sent
shared-message-email-settings-will-send-email = We will send a Change Email link to { $emailAddress }.
shared-message-google-login-not-available = Google Login is not available on this device.
shared-message-information-saved = Saved!
shared-message-or-login-with-desmos = Or log in with Desmos
shared-message-please-review-name = We tried to split your name into first and last name. Please review your name below and edit any mistakes.
shared-message-privacy-notice = I have read, understand, and accept the <1>Terms of Service</1> and <2>Privacy Policy</2>.
shared-message-set-new-email-address = Set a new email address and password.
shared-prompt-already-have-account = Already have a Desmos account?
shared-prompt-enter-email-for-password-recovery-link = Enter your email address to get a password recovery link.
shared-prompt-forgot-your-password = Forgot your password?
shared-prompt-new-to-desmos-sign-up-here = New to Desmos? <1>Sign up</1>.
shared-prompt-new-to-desmos-teacher-or-student = New to Desmos? <1>Sign up!</1>
shared-prompt-please-consent-to-sign-up-with-apple = Please consent above to sign up with Apple
shared-prompt-please-consent-to-sign-up-with-google = Please consent above to sign up with Google
shared-prompt-sign-up-with-apple = Sign up with Apple
shared-prompt-sign-up-with-google = Sign up with Google
shared-title-account-reactivated = Your account has been reactivated.
shared-title-account-settings = Account Settings
shared-title-change-email-address = Change your Desmos email address
shared-title-change-password-narrow = Password
shared-title-change-password-wide = Change Password
shared-title-consent = We value your privacy
shared-title-delete-account = Are you sure you want to delete your account?
shared-title-email-settings = Email
shared-title-language-menu = Language
shared-title-login = Log In
shared-title-profile-information-narrow = Profile
shared-title-profile-information-wide = Profile Information
shared-title-recover-password = Recover Password
shared-title-signup = Sign-Up
graphing-calculator-narration-geometry-construction-role-description = construction
graphing-calculator-narration-geometry-hidden-construction-description = Hidden { $description }
frontpage-button-account-menu = Account Menu
frontpage-error-something-went-wrong-try-again-later = Sorry! Something went wrong. Please try again later.
frontpage-heading-header-maintenance-mode = Desmos is currently undergoing scheduled maintenance, and accounts are temporarily unavailable.
frontpage-heading-main-using-desmos-classroom-link = Desmos Classroom is a free teaching and learning platform, <1>now part of Amplify.</1>
frontpage-link-header-classroom = Classroom
frontpage-link-header-math-tools = Math Tools
frontpage-link-header-resources = Resources
frontpage-link-main-for-students = For Students
frontpage-link-main-for-teachers = For Teachers
frontpage-link-shared-about-us = About Us
frontpage-link-shared-account-settings = Account Settings
frontpage-link-shared-assessments = Assessments
frontpage-link-shared-blog = Des-Blog
frontpage-link-shared-careers = Careers
frontpage-link-shared-curriculum = Desmos Math 6\u2013A1
frontpage-link-shared-equity-principles = Equity Principles
frontpage-link-shared-four-function-calculator = Four-Function Calculator
frontpage-link-shared-geometry-tool = Geometry Tool
frontpage-link-shared-graphing-calculator = Graphing Calculator
frontpage-link-shared-guiding-principles = Guiding Principles
frontpage-link-shared-help-center = Help Center
frontpage-link-shared-log-in = Log In
frontpage-link-shared-log-out = Log Out
frontpage-link-shared-matrix-calculator = Matrix Calculator
frontpage-link-shared-scientific-calculator = Scientific Calculator
frontpage-link-shared-store = Desmos Store
frontpage-link-shared-test-practice = Test Practice
frontpage-narration-shared-desmos-logo = Desmos Logo
frontpage-text-header-app-links = Download our apps in the <1>Google Play Store</1> and <2>iOS App Store</2>.
frontpage-text-header-terms-update = We've updated our Terms of Service.
frontpage-text-header-terms-update-link = Read about the changes.
practice-label-states-ak-four-function-grades = Grades 5, 8 (Science)
practice-label-states-ak-graphing-grades = Grade 9 (Math)
practice-label-states-ak-scientific-grades = Grades 6-9 (Math), Grade 10 (Science)
practice-label-states-al-four-function-grades = Grades 6-8 (Math), Grade 8 (Science)
practice-label-states-al-scientific-grades = Grades 6-8 (Math), Grade 8 (Science)
practice-label-states-az-four-function-grades = Grade 5 (Science)
practice-label-states-az-graphing-grades = High School Math
practice-label-states-az-scientific-grades = Grade 7-8 (Math), 8 & High School (Sci)
practice-label-states-ca-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-ca-graphing-grades = Grade 11 (Math)
practice-label-states-ca-scientific-grades = Grades 7-8 (Math), Grade 8, High School (Science)
practice-label-states-ct-four-function-grades = Grade 6 (Math) Grade 5 (Sci)
practice-label-states-ct-graphing-grades = High School
practice-label-states-ct-scientific-grades = Grades 7-8 (Math), Grade 8 (Sci)
practice-label-states-de-four-function-grades = Grade 6
practice-label-states-de-graphing-grades = High School
practice-label-states-de-scientific-grades = Grades 7-8
practice-label-states-fl-scientific-grades = Grades 7-8
practice-label-states-ga-four-function-grades = Grades 6-7
practice-label-states-ga-graphing-grades = Grade 8 & High School
practice-label-states-ga-scientific-grades = Grades 6-8 & High School
practice-label-states-hi-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-hi-graphing-grades = Grade 11 (Math, Biology)
practice-label-states-hi-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-ia-four-function-grades = Grades 3-6 (Mathematics), Grade 5 (Science)
practice-label-states-ia-scientific-grades = Grades 7-11 (Mathematics), Grades 8 & 10 (Science)
practice-label-states-id-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-id-graphing-grades = Grade 11 (Math), High School (Science)
practice-label-states-id-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-in-four-function-grades = Grade 6 (Math) Grades 4, 6 (Sci), I AM
practice-label-states-in-graphing-grades = High School (SAT Math)
practice-label-states-in-scientific-grades = Grades 7-8 (Math), Biology
practice-label-states-ky-four-function-grades = Grades 3-5 (Math), Grade 4 (Science)
practice-label-states-ky-graphing-grades = Grade 10 (Math)
practice-label-states-ky-scientific-grades = Grades 6-8 (Math); Grades 7, 11 (Science)
practice-label-states-la-graphing-grades = High School
practice-label-states-ma-graphing-grades = Grades 8 & 10 (Mathematics)
practice-label-states-ma-scientific-grades = High School (Introductory Physics)
practice-label-states-md-four-function-grades = Grade 5 (Science), Grades 3-7 (Mathematics)
practice-label-states-md-graphing-grades = High School (Mathematics)
practice-label-states-md-scientific-grades = Grade 8 (Mathematics), Grade 8 (Science)
practice-label-states-mi-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-mi-scientific-grades = Grade 7 (Math), Grades 8, 11 (Science)
practice-label-states-mo-four-function-grades = Grades 6-8 (Mathematics), Grade 5 & 8 (Science)
practice-label-states-mo-graphing-grades = Grades 6-8 (Mathematics), Algebra I, Algebra II, Geometry, Grade 8 (Science), Physical Science, and Biology
practice-label-states-mo-scientific-grades = Grades 6-8 (Mathematics), Grade 8 (Science)
practice-label-states-ms-graphing-grades = Algebra 1
practice-label-states-mt-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-mt-graphing-grades = Grade 11 (Math)
practice-label-states-mt-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-nc-four-function-grades = Grades 3-5
practice-label-states-nc-graphing-grades = Grade 8, Math 1, and above
practice-label-states-nc-scientific-grades = Grades 6-8
practice-label-states-nd-four-function-grades = Grade 6 (Math), Grade 4 (Science)
practice-label-states-nd-graphing-grades = Grade 10 (Math, Science)
practice-label-states-nd-scientific-grades = Grades 7-8 (Math) Grades8 (Science)
practice-label-states-ne-four-function-grades = Grade 6
practice-label-states-ne-scientific-grades = Grades 7-8 (Math), Biology
practice-label-states-nh-graphing-grades = High School (Math)
practice-label-states-nh-scientific-grades = Grades 6-8 (Math) Grades 5, 8, High School (Science)
practice-label-states-nv-four-function-grades = Grade 5 (Science), Grade 6 (Mathematics)
practice-label-states-nv-scientific-grades = Grades 7-8 (Mathematics), Grade 8, High School (Science)
practice-label-states-ny-graphing-grades = High School (Mathematics)
practice-label-states-oh-graphing-grades = High School
practice-label-states-oh-scientific-grades = Grades 3-8
practice-label-states-or-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-or-graphing-grades = Grade 11 (Math, Science)
practice-label-states-or-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-pa-four-function-grades = Mathematics (Grades 4-8, Algebra 1), Science (Grades 4 and 8, Biology, CDT)
practice-label-states-pa-graphing-grades = Mathematics (Algebra I, CDT)
practice-label-states-pa-scientific-grades = Mathematics (Grades 6-8), Science (Grade 8, Biology, CDT)
practice-label-states-quebec-uniform-examinations = Uniform Examinations
practice-label-states-ri-graphing-grades = Grade 8 (Mathematics), Grade 11 (Science)
practice-label-states-sc-alt-four-function-grades = Grade 6, Alternate Assessments
practice-label-states-sc-alt-scientific-grades = Grades 7, 8, 11, Alternate Assessments
practice-label-states-sc-std-four-function-grades = Grades 6 (Math, Science)
practice-label-states-sc-std-graphing-grades = Grades 7-8 (Math), Algebra 1, Biology
practice-label-states-sc-std-scientific-grades = Grades 6 (Math, Science), 7-8 (Math), Algebra 1, Biology
practice-label-states-sd-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-sd-graphing-grades = Grade 11 (Math), High School (Science)
practice-label-states-sd-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-tn-graphing-grades = Algebra I\u2013II, Geometry, Integrated Math I\u2013III, and Biology
practice-label-states-tn-scientific-grades = Grades 6-8 (Math and Science)
practice-label-states-tx-four-function-grades = Grade 8 Science, Biology
practice-label-states-tx-graphing-grades = Grade 8 Science, Biology, Grade 8 Math, Algebra 1, Algebra 2
practice-label-states-tx-scientific-grades = Grade 8 Science, Biology
practice-label-states-ut-graphing-grades = Grades 9-10 (Mathematics)
practice-label-states-ut-scientific-grades = Grades 9-10 (Science)
practice-label-states-va-four-function-grades = Grades 4-5
practice-label-states-va-graphing-grades = High School
practice-label-states-va-scientific-grades = Grades 6-8
practice-label-states-vi-four-function-grades = Grade 6
practice-label-states-vi-graphing-grades = Grades 10-11
practice-label-states-vi-scientific-grades = Grades 7-8
practice-label-states-vt-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-vt-graphing-grades = High School (Math, Science)
practice-label-states-vt-scientific-grades = Grades 7-8 (Math), Grade 8 (Science)
practice-label-states-wa-four-function-grades = Grade 6 (Math), Grade 5 (Science)
practice-label-states-wa-graphing-grades = Grade 11 (Math), Grade 8, High School (Science)
practice-label-states-wa-scientific-grades = Grades 7-8 (Math)
practice-label-states-wv-four-function-grades = Grade 6
practice-label-states-wv-graphing-grades = High School
practice-label-states-wv-scientific-grades = Grades 7-8
practice-label-states-wy-four-function-grades = Grade 6
practice-label-states-wy-graphing-grades = High School
practice-label-states-wy-scientific-grades = Grades 7-8

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































`;var xy={ar:!0,de:!0,en:!0,es:!0,et:!0,fr:!0,id:!0,it:!0,ja:!0,ko:!0,nl:!0,pl:!0,"pt-BR":!0,ru:!0,"sv-SE":!0,th:!0,tr:!0,vi:!0,"zh-CN":!0,"zh-TW":!0};function qu(t){return!!xy[t]}var _r=class{constructor(e){this.value=e}valueOf(){return this.value}},De=class extends _r{constructor(e="???"){super(e)}toString(e){return`{${this.value}}`}},St=class extends _r{constructor(e,r={}){super(e),this.opts=r}toString(e){try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(r){return e.reportError(r),this.value.toString(10)}}},Er=class extends _r{constructor(e,r={}){super(e),this.opts=r}toString(e){try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(r){return e.reportError(r),new Date(this.value).toISOString()}}};var _u=100,Cy="\u2068",Dy="\u2069";function Ey(t,e,r){if(r===e||r instanceof St&&e instanceof St&&r.value===e.value)return!0;if(e instanceof St&&typeof r=="string"){let a=t.memoizeIntlObject(Intl.PluralRules,e.opts).select(e.value);if(r===a)return!0}return!1}function Ru(t,e,r){return e[r]?Mn(t,e[r].value):(t.reportError(new RangeError("No default")),new De)}function Ps(t,e){let r=[],a=Object.create(null);for(let s of e)s.type==="narg"?a[s.name]=ga(t,s.value):r.push(ga(t,s));return{positional:r,named:a}}function ga(t,e){switch(e.type){case"str":return e.value;case"num":return new St(e.value,{minimumFractionDigits:e.precision});case"var":return Sy(t,e);case"mesg":return Ty(t,e);case"term":return Gy(t,e);case"func":return Vy(t,e);case"select":return Ay(t,e);default:return new De}}function Sy(t,{name:e}){let r;if(t.params)if(Object.prototype.hasOwnProperty.call(t.params,e))r=t.params[e];else return new De(`$${e}`);else if(t.args&&Object.prototype.hasOwnProperty.call(t.args,e))r=t.args[e];else return t.reportError(new ReferenceError(`Unknown variable: $${e}`)),new De(`$${e}`);if(r instanceof _r)return r;switch(typeof r){case"string":return r;case"number":return new St(r);case"object":if(r instanceof Date)return new Er(r.getTime());default:return t.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof r}`)),new De(`$${e}`)}}function Ty(t,{name:e,attr:r}){let a=t.bundle._messages.get(e);if(!a)return t.reportError(new ReferenceError(`Unknown message: ${e}`)),new De(e);if(r){let s=a.attributes[r];return s?Mn(t,s):(t.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new De(`${e}.${r}`))}return a.value?Mn(t,a.value):(t.reportError(new ReferenceError(`No value: ${e}`)),new De(e))}function Gy(t,{name:e,attr:r,args:a}){let s=`-${e}`,d=t.bundle._terms.get(s);if(!d)return t.reportError(new ReferenceError(`Unknown term: ${s}`)),new De(s);if(r){let m=d.attributes[r];if(m){t.params=Ps(t,a).named;let p=Mn(t,m);return t.params=null,p}return t.reportError(new ReferenceError(`Unknown attribute: ${r}`)),new De(`${s}.${r}`)}t.params=Ps(t,a).named;let g=Mn(t,d.value);return t.params=null,g}function Vy(t,{name:e,args:r}){let a=t.bundle._functions[e];if(!a)return t.reportError(new ReferenceError(`Unknown function: ${e}()`)),new De(`${e}()`);if(typeof a!="function")return t.reportError(new TypeError(`Function ${e}() is not callable`)),new De(`${e}()`);try{let s=Ps(t,r);return a(s.positional,s.named)}catch(s){return t.reportError(s),new De(`${e}()`)}}function Ay(t,{selector:e,variants:r,star:a}){let s=ga(t,e);if(s instanceof De)return Ru(t,r,a);for(let d of r){let g=ga(t,d.key);if(Ey(t,s,g))return Mn(t,d.value)}return Ru(t,r,a)}function Bs(t,e){if(t.dirty.has(e))return t.reportError(new RangeError("Cyclic reference")),new De;t.dirty.add(e);let r=[],a=t.bundle._useIsolating&&e.length>1;for(let s of e){if(typeof s=="string"){r.push(t.bundle._transform(s));continue}if(t.placeables++,t.placeables>_u)throw t.dirty.delete(e),new RangeError(`Too many placeables expanded: ${t.placeables}, max allowed is ${_u}`);a&&r.push(Cy),r.push(ga(t,s).toString(t)),a&&r.push(Dy)}return t.dirty.delete(e),r.join("")}function Mn(t,e){return typeof e=="string"?t.bundle._transform(e):Bs(t,e)}var Mo=class{constructor(e,r,a){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=r,this.args=a}reportError(e){if(!this.errors)throw e;this.errors.push(e)}memoizeIntlObject(e,r){let a=this.bundle._intls.get(e);a||(a={},this.bundle._intls.set(e,a));let s=JSON.stringify(r);return a[s]||(a[s]=new e(this.bundle.locales,r)),a[s]}};function Pu(t,e){let r=Object.create(null);for(let[a,s]of Object.entries(t))e.includes(a)&&(r[a]=s.valueOf());return r}var Fy=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Bu(t,e){let r=t[0];if(r instanceof De)return new De(`NUMBER(${r.valueOf()})`);if(r instanceof St||r instanceof Er)return new St(r.valueOf(),A(A({},r.opts),Pu(e,Fy)));throw new TypeError("Invalid argument to NUMBER")}var Ly=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function $u(t,e){let r=t[0];if(r instanceof De)return new De(`DATETIME(${r.valueOf()})`);if(r instanceof St||r instanceof Er)return new Er(r.valueOf(),A(A({},r.opts),Pu(e,Ly)));throw new TypeError("Invalid argument to DATETIME")}var ha=class{constructor(e,{functions:r,useIsolating:a=!0,transform:s=d=>d}={}){this._terms=new Map,this._messages=new Map,this._intls=new WeakMap,this.locales=Array.isArray(e)?e:[e],this._functions=A({NUMBER:Bu,DATETIME:$u},r),this._useIsolating=a,this._transform=s}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:r=!1}={}){let a=[];for(let s=0;s<e.body.length;s++){let d=e.body[s];if(d.id.startsWith("-")){if(r===!1&&this._terms.has(d.id)){a.push(new Error(`Attempt to override an existing term: "${d.id}"`));continue}this._terms.set(d.id,d)}else{if(r===!1&&this._messages.has(d.id)){a.push(new Error(`Attempt to override an existing message: "${d.id}"`));continue}this._messages.set(d.id,d)}}return a}formatPattern(e,r=null,a=null){if(typeof e=="string")return this._transform(e);let s=new Mo(this,a,r);try{return Bs(s,e).toString(s)}catch(d){if(s.errors)return s.errors.push(d),new De().toString(s);throw d}}};var $s=/^(-?[a-zA-Z][\w-]*) *= */gm,Uu=/\.([a-zA-Z][\w-]*) *= */y,Oy=/\*?\[/y,Us=/(-?[0-9]+(?:\.([0-9]+))?)/y,Iy=/([a-zA-Z][\w-]*)/y,Ku=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,My=/^[A-Z][A-Z0-9_-]*$/,No=/([^{}\n\r]+)/y,Ny=/([^\\"\n\r]*)/y,Wu=/\\([\\"])/y,zu=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,qy=/^\n+/,Hu=/ +$/,_y=/ *\r?\n/g,Ry=/( *)$/,Py=/{\s*/y,Yu=/\s*}/y,By=/\[\s*/y,$y=/\s*] */y,Uy=/\s*\(\s*/y,Ky=/\s*->\s*/y,Wy=/\s*:\s*/y,zy=/\s*,?\s*/y,Hy=/\s+/y,Nn=class{constructor(e){this.body=[],$s.lastIndex=0;let r=0;for(;;){let N=$s.exec(e);if(N===null)break;r=$s.lastIndex;try{this.body.push(p(N[1]))}catch(W){if(W instanceof SyntaxError)continue;throw W}}function a(N){return N.lastIndex=r,N.test(e)}function s(N,W){if(e[r]===N)return r++,!0;if(W)throw new W(`Expected ${N}`);return!1}function d(N,W){if(a(N))return r=N.lastIndex,!0;if(W)throw new W(`Expected ${N.toString()}`);return!1}function g(N){N.lastIndex=r;let W=N.exec(e);if(W===null)throw new SyntaxError(`Expected ${N.toString()}`);return r=N.lastIndex,W}function m(N){return g(N)[1]}function p(N){let W=k(),we=b();if(W===null&&Object.keys(we).length===0)throw new SyntaxError("Expected message value or attributes");return{id:N,value:W,attributes:we}}function b(){let N=Object.create(null);for(;a(Uu);){let W=m(Uu),we=k();if(we===null)throw new SyntaxError("Expected attribute value");N[W]=we}return N}function k(){let N;if(a(No)&&(N=m(No)),e[r]==="{"||e[r]==="}")return F(N?[N]:[],1/0);let W=Ne();return W?N?F([N,W],W.length):(W.value=H(W.value,qy),F([W],W.length)):N?H(N,Hu):null}function F(N=[],W){for(;;){if(a(No)){N.push(m(No));continue}if(e[r]==="{"){N.push(G());continue}if(e[r]==="}")throw new SyntaxError("Unbalanced closing brace");let gt=Ne();if(gt){N.push(gt),W=Math.min(W,gt.length);continue}break}let we=N.length-1,nr=N[we];typeof nr=="string"&&(N[we]=H(nr,Hu));let rt=[];for(let gt of N)gt instanceof qo&&(gt=gt.value.slice(0,gt.value.length-W)),gt&&rt.push(gt);return rt}function G(){d(Py,SyntaxError);let N=U();if(d(Yu))return N;if(d(Ky)){let W=Ue();return d(Yu,SyntaxError),A({type:"select",selector:N},W)}throw new SyntaxError("Unclosed placeable")}function U(){if(e[r]==="{")return G();if(a(Ku)){let[,N,W,we=null]=g(Ku);if(N==="$")return{type:"var",name:W};if(d(Uy)){let nr=fe();if(N==="-")return{type:"term",name:W,attr:we,args:nr};if(My.test(W))return{type:"func",name:W,args:nr};throw new SyntaxError("Function names must be all upper-case")}return N==="-"?{type:"term",name:W,attr:we,args:[]}:{type:"mesg",name:W,attr:we}}return Se()}function fe(){let N=[];for(;;){switch(e[r]){case")":return r++,N;case void 0:throw new SyntaxError("Unclosed argument list")}N.push(xe()),d(zy)}}function xe(){let N=U();return N.type!=="mesg"?N:d(Wy)?{type:"narg",name:N.name,value:Se()}:N}function Ue(){let N=[],W=0,we;for(;a(Oy);){s("*")&&(we=W);let nr=Je(),rt=k();if(rt===null)throw new SyntaxError("Expected variant value");N[W++]={key:nr,value:rt}}if(W===0)return null;if(we===void 0)throw new SyntaxError("Expected default variant");return{variants:N,star:we}}function Je(){d(By,SyntaxError);let N;return a(Us)?N=Oe():N={type:"str",value:m(Iy)},d($y,SyntaxError),N}function Se(){if(a(Us))return Oe();if(e[r]==='"')return Re();throw new SyntaxError("Invalid expression")}function Oe(){let[,N,W=""]=g(Us),we=W.length;return{type:"num",value:parseFloat(N),precision:we}}function Re(){s('"',SyntaxError);let N="";for(;;){if(N+=m(Ny),e[r]==="\\"){N+=Bt();continue}if(s('"'))return{type:"str",value:N};throw new SyntaxError("Unclosed string literal")}}function Bt(){if(a(Wu))return m(Wu);if(a(zu)){let[,N,W]=g(zu),we=parseInt(N||W,16);return we<=55295||57344<=we?String.fromCodePoint(we):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function Ne(){let N=r;switch(d(Hy),e[r]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return Ur(e.slice(N,r))}return e[r-1]===" "?Ur(e.slice(N,r)):!1}function H(N,W){return N.replace(W,"")}function Ur(N){let W=N.replace(_y,`
`),we=Ry.exec(N)[1].length;return new qo(W,we)}}},qo=class{constructor(e,r){this.value=e,this.length=r}};var jy=["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"],qn=class{constructor(e){this.value=e}},_o=class t{constructor(e,r){this.bundles=e;this.onError=r}static fromSources(e,r,a){let s=[];for(let{lang:d,source:g}of e){let m=d.split("-")[0],p=new ha(d,R(A({},a),{useIsolating:jy.indexOf(m)>=0}));p.addResource(new Nn(g),{allowOverrides:!1}),p.addResource(new Nn(`
l10n-internal-date-day-month-year = {DATETIME($d, month: "short", day: "numeric", year: "numeric")}
l10n-internal-date-day-month = {DATETIME($d, month: "short", day: "numeric")}
l10n-internal-time = {DATETIME($d, minute: "numeric", hour: "numeric")}
      `),{allowOverrides:!1}),s.push(p)}return new t(s,r)}format(e,r){for(let a of this.bundles){if(!a.hasMessage(e))continue;let s=a.getMessage(e);if(!(s!=null&&s.value))return;let d=[],g=a.formatPattern(s.value,this.coerceNumericVariables(r),d);for(let m of d)this.onError(`Error formatting ${e} for locale ${a.locales.join(",")}: ${m}`);return g}this.onError(`Couldn't find message for key ${e} for locales ${this.getLocales().join(",")}`)}formatDate(e,r){return r.showYear?this.format("l10n-internal-date-day-month-year",{d:e}):this.format("l10n-internal-date-day-month",{d:e})}formatTime(e){let r=this.format("l10n-internal-time",{d:e});return this.getLocales()[0]==="en"?r==null?void 0:r.toLowerCase():r}hasTranslation(e,r){for(let a of this.bundles)if(a.locales.indexOf(r)>=0)return a.hasMessage(e);return!1}coerceNumericVariables(e){let r={};for(let a in e){let s=e[a];s instanceof qn?r[a]=s.value:typeof s=="number"?r[a]=`${s}`:r[a]=s}return r}getLocales(){return this.bundles.reduce((e,r)=>e.concat(r.locales),[])}};var zs="",Ks={},ju={},Ws={},Jy=["ar","hy-AM","hi","tr","xx-XX"];function Ro(t){zs=t||""}function Hs(t){for(let e in t)delete Ws[e],ju[e]=t[e]}function Ys(){for(let t in Dr)qu(t)||delete Dr[t]}function js(t,e){let r=e!=null?e:zs;return Qu(r).hasTranslation(t,r)}function ma(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&(t=t.split("__"+r+"__").join(e[r]));return t}function ge(t,e,r){return Ju(t,e!=null?e:{},r!=null?r:zs)}function fa(t){return function(r,a){return Ju(r,a!=null?a:{},t())}}function Qy(t){let e={};for(let r in t){let a=t[r];a!==void 0&&(e[r]=a)}return e}function Ju(t,e,r){let s=Qu(r).format(t,Qy(e));return s==null?(ir.warn(`Could not format string ${t}`),""):s}function Qu(t){let e=Ws[t];if(!e){Ks[t]||(Ks[t]=Io([t]));let r=[];for(let s of Ks[t]){let d=ju[s];d&&r.push({lang:s,source:d})}let a={};t==="xx-XX"&&(a.transform=s=>s.replace(/[a-z]/gi,"\u2666")),e=Ws[t]=_o.fromSources([...r,{lang:"en",source:Nu}],s=>{ir.warn(s)},a)}return e}function Js(t){return Dr.hasOwnProperty(t)||Vr(Jy,t)}var Po=typeof desmosLocaleData=="object"?desmosLocaleData:{};function Qs(){for(var t=Io([Mu("language"),navigator.userLanguage,navigator.language]),e=0;e<t.length;e++){var r=t[e];if(Js(r))return r}return"en"}async function Xu(t){if(Po[t]||t==="en"||t==="xx-XX")return Ro(t),!0;if(!Js(t)){let a=t.indexOf("-")!==-1?t.split("-")[0]:t;for(let s in Dr)if(a===s.split("-")[0]&&Dr[s].useAsRoot){t=s;break}}let e=await fetch(`/api/v1/calculator/language/${t}.ftl?${new URLSearchParams(mo)}`,{headers:{Accept:"application/json"}});if(!e.ok)throw e.status===404&&ir.warn(t+" is not an available language."),void 0;let r=await e.json();return Po[t]=r[t],Hs(Po),Ro(t),!0}Hs(Po);Ro(Qs());var Rr=class extends Bo.Class{template(){return Bo.createElement("span",{onMount:this.bindFn(this.addSVGLogo)})}addSVGLogo(e){e.innerHTML=`
    <svg version="1.1" class="dcg-desmos-svg-logo" id="svg-desmos" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 909.3 188.4" xml:space="preserve">
    <title>${ge("frontpage-narration-shared-desmos-logo")}</title>
    <g>
      <path d="M129.6,0c-6.8,0-12.4,5.5-12.4,12.4v48c-27.7-25.4-70.6-24-96.7,3.1c-27.4,28.4-27.4,73.4,0,101.8
        c26.1,27.1,69.1,28.4,96.8,3v8.8c2,6.5,9,10.2,15.5,8.2c3.9-1.2,7-4.3,8.2-8.2V12.4C141.1,5.9,136.1,0.5,129.6,0z M103.9,148.7
        c-17.3,18.2-46.1,18.9-64.3,1.6c-0.6-0.5-1.1-1.1-1.6-1.6c-18.4-19.2-18.4-49.5,0-68.7c17.3-18.2,46.1-18.9,64.3-1.6
        c0.6,0.5,1.1,1.1,1.6,1.6C122.3,99.3,122.3,129.6,103.9,148.7z"/>
      <path d="M298.3,124c2.2-2.3,3.4-5.3,3.5-8.4c-0.1-19-7.6-37.2-20.9-50.7c-26.6-27.6-70.6-28.4-98.2-1.8c-0.6,0.6-1.2,1.2-1.8,1.8
        c-27.4,28.4-27.4,73.4,0,101.8c21.8,22.6,56.2,27.7,83.7,12.4c10-5.6,18.5-13.5,24.8-23.1c3.4-5.5,1.9-12.7-3.3-16.5
        c-5.5-3.3-12.6-1.7-16.4,3.5c-4.2,6.4-9.9,11.6-16.6,15.4c-6.8,3.8-14.4,5.8-22.2,5.8c-12.5,0-24.4-5.1-33.1-14.1
        c-6-6.3-10.3-14-12.4-22.4h104C292.7,127.6,296,126.3,298.3,124z M231.3,67.2c12.4,0.1,24.3,5.2,33,14.1
        c6.1,6.3,10.4,14.1,12.4,22.6h-90.7c2.1-8.5,6.3-16.3,12.4-22.6C207,72.4,218.8,67.3,231.3,67.2z"/>
      <path d="M763.5,63c-26.7-28.1-71.1-29.2-99.2-2.5c-0.8,0.8-1.7,1.6-2.5,2.5c-13.7,13.9-21.3,32.7-20.9,52.2
        c-0.2,19.3,7.2,37.8,20.7,51.6c27.7,28.2,73.1,28.7,101.3,0.9c0.3-0.3,0.6-0.6,0.9-0.9c13.4-13.8,20.9-32.4,20.7-51.7
        c0.2-19.4-7.3-38.2-21.1-51.9 M712.8,66.7c12.4,0,24.2,5.2,32.5,14.4c8.9,9.2,13.8,21.5,13.6,34.3c0.2,12.7-4.6,25-13.5,34.1
        c-8.5,9.2-20.5,14.2-33,13.9c-12.3,0.3-24.2-4.7-32.5-13.8c-8.8-9.1-13.6-21.4-13.3-34.1c-0.3-12.9,4.7-25.4,13.8-34.6
        c8.2-9.3,20-14.6,32.4-14.4"/>
      <path d="M623.8,92.6v81.9c0.3,6.8-4.9,12.7-11.8,13c-6.8,0.3-12.7-4.9-13-11.8V93.1c0-7.5-3-14.6-8.3-19.8
        c-4.3-4.7-10.2-7.6-16.5-8.1h-1.9c-7-0.1-13.6,2.9-18.2,8.2c-4.8,4.9-7.5,11.5-7.7,18.3v2l0,0v81.1c0,6.8-5.5,12.4-12.4,12.4
        c-6.5,0-11.9-4.9-12.4-11.4V91.5c-0.6-4.3-1.8-8.4-3.5-12.4c-1.2-2.3-2.6-4.5-4.3-6.4c-4.7-5.2-11.3-8.3-18.3-8.3
        c-7,0-13.6,3-18.1,8.3c-5.1,5.2-8,12.3-7.9,19.6V176c-0.8,6.3-6.1,11-12.4,10.9c-6.8,0-12.4-5.5-12.4-12.4V52.9
        c-0.7-6.8,4.2-12.9,11-13.6c5.9-0.6,11.4,3,13.1,8.7l2.9-1.9c7.4-3.9,15.6-6,23.9-5.9c12.3-0.1,24.1,4.3,33.3,12.4
        c1.1,0.9,2.1,2,3,3.1c0.9,0.7,1.7,1.5,2.5,2.4l2.2-2.4c0.9-1.1,1.9-2.2,3-3.1c9.2-8.1,21-12.5,33.2-12.4h4.3
        c10.8,0.8,21,5.1,29,12.4c0.9,1,2,1.9,3,2.9C618.9,65.3,624,78.7,623.8,92.6"/>
      <path d="M427.2,145.4c0.1,23.4-18.6,42.5-42,43h-50.8c-6.8,0-12.4-5.5-12.4-12.4s5.5-12.4,12.4-12.4H384c10-0.2,17.9-8.4,17.8-18.3
        c0.1-9.9-7.9-18-17.8-18.1c0,0-0.1,0-0.1,0h-24.8c-23.8-1.3-42-21.6-40.8-45.4c1.2-22,18.8-39.6,40.8-40.8h50.2
        c6.8,0,12.4,5.5,12.4,12.4s-5.5,12.4-12.4,12.4h-49.1c-10,0.8-17.5,9.6-16.7,19.7c0.7,8.9,7.8,15.9,16.7,16.7H385
        c5.9,0,11.8,1.2,17.2,3.7C417.7,112.8,427.2,128.4,427.2,145.4"/>
      <path d="M908.9,145.2c0,23.4-18.3,42.7-41.6,43.3h-50.8c-6.8,0-12.4-5.5-12.4-12.4s5.5-12.4,12.4-12.4h50.2
        c10-0.2,17.9-8.4,17.8-18.3c0.1-9.9-7.9-18-17.8-18.1c0,0-0.1,0-0.1,0h-24.8c-23.8-1.3-42-21.6-40.8-45.4
        c1.2-22,18.8-39.6,40.8-40.8h49.6c6.8,0,12.4,5.5,12.4,12.4s-5.5,12.4-12.4,12.4h-49.6c-10.1,0-18.2,8.2-18.2,18.2c0,0,0,0,0,0
        c0,9.9,8,18,17.8,18.1h24.8c5.9,0,11.8,1.3,17.2,3.7C898.9,112.8,908.9,128.2,908.9,145.2"/>
    </g>
    </svg>
    `}};var{If:Xs}=oe.Components,$o=class extends me{template(){return oe.createElement("div",{class:()=>({"dcg-header":!0,"dcg-secure-header":!0,"dcg-header-desktop":!0}),style:()=>({"background-color":this.controller.getHeaderColor()}),role:oe.const("navigation")},oe.createElement("div",{class:oe.const("align-left-container")},oe.createElement("div",{class:oe.const("title-div")},oe.createElement("span",{role:oe.const("heading"),"aria-level":oe.const("1"),class:oe.const("dcg-config-name")},()=>this.controller.getCurrentTitle()))),oe.createElement("div",{class:oe.const("align-center-container")},oe.createElement(Xs,{predicate:()=>!!this.controller.getSecuredByMessage()},()=>oe.createElement("i",{class:oe.const("dcg-icon-desmos-badge"),"aria-label":oe.const("Desmos Secure Badge")})),oe.createElement("div",{class:oe.const("dcg-practice-logo")},oe.createElement(Rr,null))),oe.createElement("div",{class:oe.const("align-right-container")},oe.createElement(Xs,{predicate:()=>this.controller.isInSession()},()=>oe.createElement(qr,{tooltip:this.const("Help"),gravity:this.const("s")},oe.createElement("i",{class:oe.const("dcg-icon-question-sign dcg-help-btn"),role:oe.const("button"),tabindex:oe.const("0"),"aria-label":oe.const("Help"),onTap:()=>this.controller.dispatch({type:"toggle-help-menu"})}))),oe.createElement(Xs,{predicate:()=>this.controller.shouldShowDoneButton()},()=>oe.createElement("div",{class:oe.const("dcg-end-test-button"),role:oe.const("button"),tabindex:oe.const("0"),onTap:()=>this.controller.dispatch({type:"header-done"})},oe.const("Done")))))}getError(){return"Turn something off / on"}};var C=j(X());var S=j(X());st();var _t=j(X()),Uo=j(lp());var ec=/\{\$([a-zA-Z0-9\-]+([a-zA-Z0-9\-]+_)*[a-zA-Z0-9\-]+)\}/;function dp(t,e){let r=0,a=0,s={},d={},g=m(t);if(!/^<0>/.test(g)||!/<\/0>$/.test(g))throw new Error("Expected template string to start and end with <0> and </0>, but found "+JSON.stringify(g));return g.slice(3,-4).trim();function m(b){if(e.isConst(b))return ob(e.getConstValue(b));if(e.isNamedBinding(b)){let k=p(s,e.getBindingName(b)),F=`{$${k}}`;if(!ec.test(F))throw new Error(`Invalid <Localize> variable: ${F}.`);return e.addBinding&&e.addBinding(k,b),s[k]=!0,F}else if(b!==t&&e.isView(b)){let k=p(d,e.getViewName(b));if(!/[a-zA-Z0-9\-_]/.test(k))throw new Error(`Invalid <Localize> subview identifier: ${k}.`);return e.addView&&e.addView(k,b),d[k]=!0,`<${k}/>`}else if(e.isBinding(b)){let k=p(s,`v${r++}`),F=`{$${k}}`;return e.addBinding&&e.addBinding(k,b),s[k]=!0,F}else{let k=`${a++}`;e.addElement&&e.addElement(k,b);let F=[];return e.forEachChild(b,G=>{F.push(m(G))}),d[k]=!0,F.length>0?`<${k}>${F.join("")}</${k}>`:`<${k}/>`}}function p(b,k){let F=0,G=k;for(;b[G];)G=`${k}-${++F}`;return G}}var ab=!0;function ob(t){return ab?t:t.replace(/\{|\}/g,e=>`{"${e}"}`).replace(/(^|[\s\n]+)(\[|\]|\.)/g,(e,r,a)=>`${r}{"${a}"}`)}function ib(t){return t.__DCGViewLocalizeBindingName}function sb(t){return typeof t=="function"&&t.__DCGViewLocalizeViewName}var dt=class extends _t.Class{init(){this.viewMap={},this.elementMap={},this.bindingMap={},this.i18n=this.props.i18n(),this.templateString=this.serializeToTemplateString(_t.createElement("div",null,this.children))}template(){return _t.createElement(_t.Components.If,{predicate:()=>this.shouldShow()},()=>_t.createElement(_t.Components.Switch,{key:()=>tc(this.translatedString())},e=>this.renderDeserializedTemplateNode(this.parseAndValidate(e))))}shouldShow(){let e=this.props.options&&this.props.options();return e&&e.hideUntranslatedView&&this.i18n.hasTranslation?this.i18n.hasTranslation(this.props.key()):!0}translatedString(){let e={};for(let r in this.bindingMap)e[r]=ma(`{$${r}}`);return this.i18n.s(this.props.key(),e)}static variable(e,r){let a=()=>r();return a.__DCGViewLocalizeBindingName=e,a}static subview(e,r){let a=()=>r();return a.__DCGViewLocalizeViewName=e,a}parseAndValidate(e){let r=(0,Uo.parse)(e),a={},s={};d(r);for(let g in this.elementMap)if(!s[g])return(0,Uo.parse)(tc(this.templateString));for(let g in this.bindingMap)if(!a[g])return(0,Uo.parse)(tc(this.templateString));return r;function d(g){if(Array.isArray(g)){for(let m of g)d(m);return}g.name==="token"?a[g.attrs.id]=!0:g.type!=="text"&&(s[g.name]=!0,d(g.children))}}renderDeserializedTemplateNode(e){if(Array.isArray(e))return e.map(r=>this.renderDeserializedTemplateNode(r));if(e.type==="text")return _t.const(e.content||"");if(e.name==="token"){let r=this.bindingMap[e.attrs.id];return r||(()=>"")}else if(this.elementMap[e.name]){let r=this.elementMap[e.name],a=e.children.map(s=>this.renderDeserializedTemplateNode(s));return pp(r.type,r.attrs,a)}else return this.viewMap[e.name]?this.viewMap[e.name]():pp("span",{},[])}serializeToTemplateString(e){return dp(e,{isView:sb,isConst:up,isBinding:r=>typeof r=="function",isNamedBinding:ib,getConstValue:r=>r(),getBindingName:r=>r.__DCGViewLocalizeBindingName,getViewName:r=>r.__DCGViewLocalizeViewName,addBinding:(r,a)=>{this.bindingMap[r]=a},addElement:(r,a)=>{this.elementMap[r]={type:a.tagName,attrs:a.attrs}},addView:(r,a)=>{if(this.viewMap[r])throw new Error(`Unexpected duplicate view ${r}.`);this.viewMap[r]=a},forEachChild:(r,a)=>{for(let s of r.children){if(!up(s)&&typeof s!="function"&&s._isDCGView)throw new Error("Bare DCGViews are not allowed inside <Localize>. Use Localize.subview().");a(s)}}})}};function up(t){return typeof t=="function"&&t.isDCGViewConst}function pp(t,e,r){return _t.createElement(t,e,r)}function tc(t){return`<0>${t}</0>`.replace(new RegExp(ec.source,"g"),(r,a)=>`<token id="${a}"/>`)}var gp={"homepage-cta":"hc","promo-header":"ph","promo-bottom":"pb","demo-link":"dl","header-dropdown":"hd"},rc=Wa(gp),cb=ts(rc);if(rc.length!==cb.length)throw new Error(`Expected referrer locations to have a unique set of short codes, but found duplicates: ${rc.sort()}`);function hp(t,e){return`${t}?r=w.${gp[e]}`}var lb=[{href:"/calculator",icon:"dcg-icon-graphing",text:()=>ge("frontpage-link-shared-graphing-calculator")},{href:"/scientific",icon:"dcg-icon-scientific",text:()=>ge("frontpage-link-shared-scientific-calculator")},{href:"/fourfunction",icon:"dcg-icon-four-function",text:()=>ge("frontpage-link-shared-four-function-calculator")},{href:"/practice",icon:"dcg-icon-test-mode",text:()=>ge("frontpage-link-shared-test-practice")},{href:"/matrix",icon:"dcg-icon-matrix",text:()=>ge("frontpage-link-shared-matrix-calculator")},{href:"/geometry",icon:"dcg-icon-geometry",text:()=>ge("frontpage-link-shared-geometry-tool")}],db=[{href:"https://teacher.desmos.com",text:()=>ge("frontpage-link-main-for-teachers")},{href:"https://student.desmos.com",text:()=>ge("frontpage-link-main-for-students")},{href:"/curriculum",text:()=>ge("frontpage-link-shared-curriculum")}],ub=[{href:"/about",text:()=>ge("frontpage-link-shared-about-us")},{href:"/careers",text:()=>ge("frontpage-link-shared-careers")},{href:"https://help.desmos.com",text:()=>ge("frontpage-link-shared-help-center")},{href:"/accessibility",text:()=>ge("shared-calculator-label-accessibility")},{href:"/testing",text:()=>ge("frontpage-link-shared-assessments")},{href:"/equity",text:()=>ge("frontpage-link-shared-equity-principles")},{href:"/guiding-principles",text:()=>ge("frontpage-link-shared-guiding-principles")},{href:"//store.desmos.com",text:()=>ge("frontpage-link-shared-store")},{href:"https://blog.desmos.com",text:()=>ge("frontpage-link-shared-blog")}],rn={MATH_TOOLS:{links:lb,title:()=>ge("frontpage-link-header-math-tools")},CLASSROOM:{links:db,title:()=>ge("frontpage-link-header-classroom")},RESOURCES:{links:ub,title:()=>ge("frontpage-link-header-resources")}};var Vt=j(X());var Rt=j(X());var ue=j(X());st();var nc=class{constructor(){this.handlers=[],B(document).on("keydown.delegator",e=>this.handleEvent(e))}push(e){let r=Vl("delegator_");return this.handlers.push({token:r,handler:e}),()=>this.handlers=es(this.handlers,a=>a.token!=r)}handleEvent(e){if(!e.isDefaultPrevented()&&this.handlers.length){let r=!1,a=()=>r=!0;for(let{handler:s}of this.handlers.slice().reverse())if(s(e,a),r)return}}},mp=new nc;var{If:fp}=ue.Components,nt=class extends ue.Class{init(){this.i18n=this.props.i18n(),this.isMounted=!1}template(){return ue.createElement("div",{class:()=>({"dcg-shared-modal-container":!0,[this.props.class?this.props.class():""]:!!this.props.class}),didMount:this.bindFn(this.didMount),didUnmount:this.bindFn(this.didUnmount)},ue.createElement("div",{class:()=>({"dcg-shared-modal-cover":!0,"dcg-shared-has-close-button":this.showX(),"dcg-shared-modal-fullscreen":this.props.size()==="fullscreen","dcg-shared-modal-wide":this.props.size()==="wide","dcg-shared-modal-medium":this.props.size()==="medium","dcg-shared-modal-narrow":this.props.size()==="narrow"})},ue.createElement("div",{class:ue.const("dcg-shared-modal-background"),onTap:this.props.onClose}),ue.createElement("div",{class:ue.const("dcg-shared-modal-transition-container")},ue.createElement("div",{class:ue.const("dcg-shared-modal"),role:ue.const("dialog"),"aria-modal":ue.const("true"),"aria-label":()=>{let e="";return this.props.ariaLabel?e=this.props.ariaLabel():this.props.title&&(e=this.props.title()),e}},ue.createElement(fp,{predicate:()=>this.showX()},()=>ue.createElement("div",{class:ue.const("dcg-shared-close-cross-container")},ue.createElement(qr,{tooltip:()=>this.i18n.s("shared-button-close-dialog")},ue.createElement("div",{role:ue.const("link"),tabindex:ue.const("0"),"aria-label":()=>this.i18n.s("shared-button-close-dialog"),class:ue.const("dcg-shared-close-cross"),onTap:this.props.onClose},ue.createElement("i",{class:ue.const("dcg-icon-remove"),"aria-hidden":ue.const("true")}))))),ue.createElement("div",{class:ue.const("dcg-shared-modal-contents-wrapper")},ue.createElement(fp,{predicate:()=>!!this.props.title&&!!this.props.title()},()=>ue.createElement("h1",{class:()=>({"dcg-shared-modal-title":!0,"dcg-shared-left-align-title":this.leftAlignTitle()})},()=>this.props.title())),ue.createElement("div",{class:ue.const("dcg-shared-modal-scrollable-content")},this.children))))))}showX(){return!!this.props.showX&&this.props.showX()}leftAlignTitle(){return!!this.props.leftAlignTitle&&this.props.leftAlignTitle()}didMount(){var m,p;if(this.isMounted)return;this.isMounted=!0;let e=this.findRootNode();function r(){let b=e.querySelector(".dcg-shared-close-cross");b&&b.focus()}function a(){let b=e.querySelector(".dcg-shared-modal-scrollable-content");b&&(b.tabIndex>=0||(b.tabIndex=0),b.focus())}let s=e.querySelector(".dcg-shared-modal-scrollable-content"),d=(p=(m=this.props).setFocus)==null?void 0:p.call(m);d==="close"?this.showX()?r():s&&a():d==="content"&&a();let g=Iu(e);this.unsub=mp.push((b,k)=>{He(b)==Or&&(this.onClose(),k());let F=b.altKey||b.shiftKey||b.metaKey||b.ctrlKey;this.props.onArrowKey&&He(b)===od&&!F&&this.props.onArrowKey("Left"),this.props.onArrowKey&&He(b)===id&&!F&&this.props.onArrowKey("Right"),g(b)})}onClose(){this.props.onClose&&this.props.onClose()}didUnmount(){this.isMounted&&(this.isMounted=!1,this.unsub())}};var Ko=class extends Rt.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller}template(){return Rt.createElement(nt,{title:()=>this.i18n.s("shared-title-account-reactivated"),size:this.const("narrow"),showX:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},Rt.createElement("div",{class:Rt.const("dcg-shared-recover-password-dialog dcg-shared-account-dialog")},Rt.createElement("div",{class:Rt.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-message-account-reactivated")),Rt.createElement("div",{class:Rt.const("dcg-shared-modal-actions-container")},Rt.createElement("button",{class:()=>({"dcg-btn-blue":!0}),onTap:()=>this.controller.dispatch({type:"close-modal"})},()=>this.i18n.s("shared-button-continue-to-desmos")))))}};var Ae=j(X());var M=j(X());var ie=j(X());var Tt=j(X());var{If:pb,For:gb}=Tt.Components,Ze=class extends Tt.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller}template(){return Tt.createElement(pb,{predicate:()=>!!this.props.errors().length},()=>Tt.createElement(gb,{each:this.props.errors},Tt.createElement("span",null,e=>Tt.createElement("div",{class:Tt.const("dcg-shared-account-modal-errors"),role:Tt.const("alert")},Tt.createElement("span",null,()=>this.i18n.raw(e))))))}};var Wo=class extends ie.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.formErrors=[]}template(){return ie.createElement("div",{class:ie.const("dcg-shared-delete-account dcg-shared-account-settings-section")},ie.createElement("h1",{class:ie.const("dcg-shared-left-align-title")},()=>this.i18n.s("shared-title-delete-account")),ie.createElement("div",{class:ie.const("dcg-shared-account-paragraph")},ie.createElement(dt,{key:this.const("shared-message-delete-account-notice"),i18n:this.props.controller},ie.const("When you delete your account,"),ie.const(" "),ie.createElement("b",null,ie.const("we will retain your data for 30 days.")),ie.const(" "),ie.const("You can reactivate your account at any time during those 30 days by logging back in."),ie.const(" "),ie.const("If there's something about Desmos we can improve, please"),ie.const(" "),ie.createElement("a",{href:ie.const("mailto:support@desmos.com"),class:ie.const("dcg-blue-link")},ie.const("let us know.")))),ie.createElement("div",{class:ie.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-message-delete-account-will-send-email",{email:this.i18n.raw(this.controller.userController.getEmail())})),ie.createElement("form",{onSubmit:this.bindFn(this.onSubmit)},ie.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),ie.createElement("div",{class:ie.const("dcg-shared-modal-actions-container")},ie.createElement("div",{role:ie.const("link"),tabindex:ie.const(0),class:ie.const("dcg-gray-link"),onTap:()=>(this.controller.logJSON("shared-delete-account",{action:"cancel-delete-account"}),this.props.hideForm())},()=>this.i18n.s("shared-button-cancel")),ie.createElement("button",{class:()=>({"dcg-btn-red":!0,"dcg-disabled":this.disabled}),"aria-disabled":()=>this.disabled,tabindex:()=>this.disabled?"-1":"0",type:ie.const("submit")},()=>this.i18n.s("shared-button-send-delete-account-email")))))}onAccountDeleted(){return this.props.submitForm()}onAccountDeletionFailed(){if(this.formErrors=[this.controller.getSomethingWentWrongText()],!this.unmounted)return this.update()}doDeleteAccount(){this.disabled||(this.controller.logJSON("shared-delete-account",{action:"send-delete-account-email"}),this.controller.userController.initiateAccountDeletion({lang:this.controller.getLanguage()}).then(this.bindFn(this.onAccountDeleted),this.bindFn(this.onAccountDeletionFailed)))}didUnmount(){return this.unmounted=!0}onSubmit(e){e.preventDefault(),this.doDeleteAccount()}};var Y=j(X());var{If:ac}=Y.Components,_n=0,yp=1,hb=2,bp=3,zo=class extends Y.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.formStatus=_n,this.emailDisabled=null}template(){return Y.createElement("div",{class:Y.const("dcg-shared-email-field-container")},Y.createElement(ac,{predicate:()=>this.formStatus===_n},()=>Y.createElement("div",{class:Y.const("dcg-shared-email-field")},Y.createElement("div",{class:Y.const("dcg-shared-profile-info-container")},Y.createElement("span",{class:Y.const("dcg-shared-profile-info-title"),role:Y.const("heading"),"aria-level":Y.const("1")},()=>this.i18n.s("shared-title-email-settings")),Y.createElement("div",{class:Y.const("dcg-shared-profile-info-content")},()=>this.i18n.raw(this.controller.userController.getEmail()),Y.createElement("div",{class:Y.const("dcg-shared-message-container")},Y.createElement("div",{role:Y.const("link"),tabindex:Y.const(0),class:Y.const("dcg-blue-link"),onTap:()=>this.setFormStatus(yp)},()=>this.i18n.s("shared-button-change-email-address"))))))),Y.createElement(ac,{predicate:()=>this.formStatus===yp},()=>Y.createElement("div",{class:Y.const("dcg-shared-change-email-container")},Y.createElement("div",{class:Y.const("dcg-shared-change-email-description")},()=>this.i18n.s("shared-message-email-settings-will-send-email",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})),Y.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),Y.createElement("div",{class:Y.const("dcg-shared-modal-actions-container")},Y.createElement("span",{role:Y.const("link"),tabindex:Y.const(0),class:Y.const("dcg-gray-link"),onTap:()=>this.setFormStatus(_n)},()=>this.i18n.s("shared-button-cancel")),Y.createElement("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.emailDisabled}),"aria-disabled":()=>this.disabled,tabindex:()=>this.disabled?"-1":"0",type:Y.const("submit"),onTap:()=>this.emailDisabled||this.sendChangeEmail()},()=>this.i18n.s("shared-button-send-email"))))),Y.createElement(ac,{predicate:()=>this.formStatus===bp},()=>Y.createElement("div",{"aria-live":Y.const("assertive"),"aria-atomic":Y.const("true"),class:Y.const("dcg-shared-confirmation-message-container")},Y.createElement("div",{class:Y.const("dcg-shared-confirmation-message")},Y.createElement("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":Y.const("true")}),()=>this.i18n.s("shared-message-email-sent")),Y.createElement("div",null,()=>this.i18n.s("shared-message-check-email-for-link",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})))))}didUnmount(){this.unmounted=!0}setToast(e){this.toastMessage||(this.toastMessage=e,this.unmounted||this.update(),setTimeout(()=>{this.toastMessage=null,this.unmounted||this.update()},5e3),this.formStatus===hb&&setTimeout(()=>{this.setFormStatus(_n),this.unmounted||this.update()},5200))}setFormStatus(e){this.formStatus=e,this.toastMessage=null,this.formErrors=[],this.update()}onEmailSent(){this.formStatus=bp,this.emailDisabled=null,this.unmounted||this.update(),setTimeout(()=>{this.formStatus=_n,this.unmounted||this.update()},5e3),setTimeout(()=>{this.formStatus=_n,this.unmounted||this.update()},5200)}onEmailSendingFailed(){this.formErrors=[this.controller.getSomethingWentWrongText()],this.emailDisabled=null,this.unmounted||this.update()}sendChangeEmail(){this.emailDisabled=!0,this.unmounted||this.update(),this.controller.userController.initiateEmailChange({lang:this.controller.getLanguage()}).then(this.bindFn(this.onEmailSent),this.bindFn(this.onEmailSendingFailed))}};var{If:vp,Input:sc,Switch:mb,SwitchUnion:fb}=M.Components,oc=0,wp=1,ic=2,Ho=class extends M.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.deleteAccount=oc}template(){return M.createElement("div",{class:M.const("dcg-shared-profile-info dcg-shared-account-settings-section")},M.createElement(mb,{key:()=>this.deleteAccount},e=>{switch(e){case oc:return M.createElement("div",null,M.createElement("div",{class:M.const("dcg-shared-email-form-container")},M.createElement(cc,{controller:this.props.controller})),M.createElement(zo,{controller:this.props.controller}),M.createElement("div",{role:M.const("link"),tabindex:M.const(0),class:M.const("dcg-gray-link dcg-shared-delete-link"),onTap:()=>this.confirmDeletion()},()=>this.i18n.s("shared-button-delete-account-question")));case wp:return M.createElement(Wo,{hideForm:()=>this.setDeleteAccount(oc),submitForm:()=>this.setDeleteAccount(ic),controller:this.props.controller});case ic:return M.createElement("div",{"aria-live":M.const("assertive"),"aria-atomic":M.const("true"),class:M.const("dcg-shared-confirmation-message-container")},M.createElement("div",{class:M.const("dcg-shared-confirmation-message")},M.createElement("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":M.const("true")}),()=>this.i18n.s("shared-message-email-sent")),M.createElement("div",null,()=>this.i18n.s("shared-message-check-email-for-delete-link",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})))}}))}didUnmount(){this.unmounted=!0}setDeleteAccount(e){this.deleteAccount=e,e===ic&&setTimeout(()=>{this.controller.userController.logout().then(()=>this.controller.dispatch({type:"close-modal"}))},5e3),this.unmounted||this.update()}confirmDeletion(){this.controller.logJSON("shared-profile-info",{action:"delete-account"}),this.setDeleteAccount(wp),this.unmounted||this.update()}},cc=class extends M.Class{init(){this.controller=this.props.controller();let e=this.controller.userController.getNameDetail();e.source=="legacy"?this.state={state:"legacy",name:e.given,previousName:e.given}:e.source=="parsed"?this.state={state:"name-detail",confirm:!0,given:e.given,family:e.family||"",previousGiven:"",previousFamily:""}:this.state={state:"name-detail",confirm:!1,given:e.given,family:e.family||"",previousGiven:e.given,previousFamily:e.family||""}}template(){return fb("state",()=>this.state)({legacy:e=>M.createElement(lc,{state:e,controller:this.props.controller,onSaveName:this.bindFn(this.onSaveName),showSavedNotice:()=>this.showSavedNotice,updateState:r=>{this.state.state=="legacy"&&(this.state=A(A({},this.state),r),this.unmounted||this.update())}}),"name-detail":e=>M.createElement(dc,{state:e,controller:this.props.controller,showSavedNotice:()=>this.showSavedNotice,onSaveName:this.bindFn(this.onSaveName),updateState:r=>{this.state.state=="name-detail"&&(this.state=A(A({},this.state),r),this.unmounted||this.update())}})})}onSaveName(){switch(this.state.state){case"legacy":this.controller.userController.setNameLegacy({name:this.state.name,lang:this.controller.getLanguage()}).then(this.bindFn(this.onSaved));break;case"name-detail":this.controller.userController.setNameDetail({given:this.state.given,family:this.state.family,lang:this.controller.getLanguage()}).then(this.bindFn(this.onSaved));break}}maybeUpdate(){this.unmounted||this.update()}onSaved(){switch(this.state.state){case"legacy":this.state.previousName=this.state.name;break;case"name-detail":this.state.previousGiven=this.state.given,this.state.previousFamily=this.state.family,this.state.confirm=!1;break}this.showSavedNotice=!0,this.maybeUpdate(),setTimeout(()=>{this.showSavedNotice=!1,this.maybeUpdate()},3e3)}willUnmount(){this.unmounted=!0}didMount(){this.unmounted=!1}},lc=class extends M.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller}template(){return M.createElement("div",{class:M.const("dcg-shared-name-field")},M.createElement("div",{class:M.const("dcg-shared-profile-info-container")},M.createElement("span",{class:M.const("dcg-shared-profile-info-title"),role:M.const("heading"),"aria-level":M.const("1")},()=>this.i18n.s("shared-label-name")),M.createElement(sc,{type:M.const("text"),name:M.const("name"),class:M.const("dcg-shared-input-blue-outline dcg-shared-profile-info-content"),didMount:this.bindFn(this.didMountName),onInput:this.bindFn(this.onNameInput),"aria-label":()=>this.i18n.s("shared-label-name"),value:()=>this.props.state().name,autocomplete:M.const("off")})),M.createElement("div",{class:M.const("dcg-shared-modal-actions-container")},M.createElement(Yo,{showSavedNotice:this.props.showSavedNotice,i18n:this.props.controller}),M.createElement("div",{role:M.const("button"),"aria-disabled":this.bindFn(this.nameFieldDisabled),tabindex:()=>this.nameFieldDisabled()?"-1":"0",class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.nameFieldDisabled()}),onTap:this.bindFn(this.onSaveName)},()=>this.i18n.s("shared-button-save"))))}onNameInput(e){this.props.updateState({name:e})}didMountName(e){jt||e.focus()}onSaveName(){this.nameFieldDisabled()||this.props.onSaveName()}nameFieldDisabled(){let e=this.props.state();return!e.name||e.name===e.previousName}},dc=class extends M.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller}template(){return M.createElement("div",{class:M.const("dcg-shared-name-field")},M.createElement("div",{class:()=>({"dcg-shared-confirm-name":this.props.state().confirm})},M.createElement(vp,{predicate:()=>this.props.state().confirm},()=>M.createElement("span",null,()=>this.i18n.s("shared-message-please-review-name"))),M.createElement("div",{class:M.const("dcg-shared-profile-info-container")},M.createElement("div",{class:M.const("dcg-shared-name-input")},M.createElement("span",{class:M.const("dcg-shared-profile-info-title"),role:M.const("heading"),"aria-level":M.const("1")},()=>this.i18n.s("shared-label-given-name-or-nickname")),M.createElement(sc,{type:M.const("text"),name:M.const("given-name"),class:M.const("dcg-shared-input-blue-outline dcg-shared-profile-info-content"),didMount:this.bindFn(this.didMountName),onInput:e=>this.props.updateState({given:e}),"aria-label":()=>this.i18n.s("shared-label-given-name-or-nickname"),value:()=>this.props.state().given,autocomplete:M.const("off")})),M.createElement("div",{class:M.const("dcg-shared-name-input")},M.createElement("span",{class:M.const("dcg-shared-profile-info-title"),role:M.const("heading"),"aria-level":M.const("1")},()=>this.i18n.s("shared-label-family-name")),M.createElement(sc,{type:M.const("text"),name:M.const("family-name"),class:M.const("dcg-shared-input-blue-outline dcg-shared-profile-info-content"),onInput:e=>this.props.updateState({family:e}),"aria-label":()=>this.i18n.s("shared-label-family-name"),value:()=>this.props.state().family,autocomplete:M.const("off")}))),M.createElement("div",{class:M.const("dcg-shared-modal-actions-container")},M.createElement(Yo,{i18n:this.props.controller,showSavedNotice:this.props.showSavedNotice}),M.createElement("div",{role:M.const("button"),"aria-disabled":()=>!this.canSubmit(),tabindex:()=>this.canSubmit()?"0":"-1",class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.canSubmit()}),onTap:this.bindFn(this.onSaveName)},()=>this.props.state().confirm?this.i18n.s("shared-button-confirm-name"):this.i18n.s("shared-button-save")))))}didMountName(e){jt||e.focus()}onSaveName(){this.canSubmit()&&this.props.onSaveName()}canSubmit(){let e=this.props.state();return e.given?e.confirm?!0:!(e.given===e.previousGiven&&e.family===e.previousFamily):!1}},Yo=class extends M.Class{template(){return M.createElement(vp,{predicate:()=>this.props.showSavedNotice()},()=>M.createElement("span",{"aria-live":M.const("assertive"),"aria-atomic":M.const("true"),class:M.const("dcg-shared-confirmation-message")},M.createElement("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":M.const("true")}),()=>this.props.i18n().s("shared-message-information-saved")))}};var be=j(X());var{If:kp}=be.Components,yb=0,uc=1,xp=2,jo=class extends be.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.mode=uc,this.formErrors=[]}template(){return be.createElement("div",{class:be.const("dcg-shared-change-password dcg-shared-account-settings-section")},be.createElement(kp,{predicate:()=>this.mode===uc},()=>be.createElement("div",{class:be.const("dcg-shared-reset-by-email")},be.createElement("div",{class:be.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-message-change-password-email-sent",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})),be.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),be.createElement("div",{class:be.const("dcg-shared-modal-actions-container")},be.createElement("div",{role:be.const("button"),"aria-disabled":()=>this.emailDisabled,tabindex:()=>this.emailDisabled?"-1":"0",class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.emailDisabled}),onTap:()=>this.sendResetPasswordEmail()},()=>this.i18n.s("shared-button-send-email"))))),be.createElement(kp,{predicate:()=>this.mode===xp},()=>be.createElement("div",{"aria-live":be.const("assertive"),"aria-atomic":be.const("true"),class:be.const("dcg-shared-confirmation-message-container")},be.createElement("div",{class:be.const("dcg-shared-confirmation-message")},be.createElement("i",{class:()=>({"dcg-icon-check":!0,"dcg-success-marker":!0}),"aria-hidden":be.const("true")}),()=>this.i18n.s("shared-message-email-sent")),be.createElement("div",null,()=>this.i18n.s("shared-message-check-email-for-password-link",{emailAddress:this.i18n.raw(this.controller.userController.getEmail())})))))}didUnmount(){this.unmounted=!0}onEmailSent(){this.mode=xp,this.unmounted||this.update(),setTimeout(()=>{this.mode=yb,this.unmounted||this.update()},5e3),setTimeout(()=>{this.mode=uc,this.unmounted||this.update()},5200)}onEmailSendingFailed(){this.formErrors=[this.controller.getSomethingWentWrongText()],this.unmounted||this.update()}sendResetPasswordEmail(){this.controller.userController.recoverPassword({email:this.controller.userController.getEmail(),lang:this.controller.getLanguage()}).then(this.bindFn(this.onEmailSent),this.bindFn(this.onEmailSendingFailed))}};st();var{For:bb,Switch:wb}=Ae.Components,Jo="profile-info",pc="change-password",Qo=class extends Ae.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.settingsView=this.props.initialTab&&this.props.initialTab()||Jo,this.breakPoint=660,this.measureWindow()}template(){return Ae.createElement(nt,{title:()=>this.i18n.s("shared-title-account-settings"),size:this.const("wide"),showX:this.const(!0),leftAlignTitle:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},Ae.createElement("div",{class:Ae.const("dcg-shared-account-settings-dialog dcg-shared-account-dialog")},Ae.createElement(bb,{each:()=>this.getTabs(),key:e=>""+e.key},Ae.createElement("div",{class:Ae.const("dcg-shared-navigation-tabs"),role:Ae.const("tablist")},e=>Ae.createElement("div",{role:Ae.const("tab"),tabindex:Ae.const("0"),"aria-selected":()=>this.settingsView===e.key,class:()=>({"dcg-shared-tab-gray-underline":!0,[e.class]:!0,"dcg-selected":this.settingsView===e.key}),onTap:()=>this.updateSettingsView(e.key)},e.label))),Ae.createElement("div",{class:Ae.const("dcg-shared-content-container")},Ae.createElement(wb,{key:()=>this.settingsView},e=>e===Jo?Ae.createElement(Ho,{controller:this.props.controller}):e===pc?Ae.createElement(jo,{controller:this.props.controller}):this.props.extraTabs?Ae.createElement("div",{class:Ae.const("dcg-shared-profile-info dcg-shared-account-settings-section")},this.props.extraTabs().createView(e)):Ae.createElement("span",null)))))}getTabs(){let e=[{key:Jo,label:this.bindFn(this.profileTitle),class:"profile-view-button"},{key:pc,label:this.bindFn(this.passwordTitle),class:"change-password-view-button"}];return this.props.extraTabs?[...e,...this.props.extraTabs().tabs.map(({key:r,narrowLabel:a,wideLabel:s,class:d})=>({key:r,label:()=>this.windowWidth>this.breakPoint?a():s(),class:`${d}-button`}))]:e}updateSettingsView(e){this.settingsView=e,this.unmounted||this.update()}profileTitle(){return this.windowWidth>this.breakPoint?this.i18n.s("shared-title-profile-information-wide"):this.i18n.s("shared-title-profile-information-narrow")}passwordTitle(){return this.windowWidth>this.breakPoint?this.i18n.s("shared-title-change-password-wide"):this.i18n.s("shared-title-change-password-narrow")}measureWindow(){return this.windowWidth=B(window).width()}didMount(){B(window).on("resize.account-dialog",fn(()=>{this.measureWindow(),this.unmounted||this.update()},200))}didUnmount(){B(window).off("resize.account-dialog"),this.unmounted=!0}isProfileSelected(){return this.settingsView===Jo}isChangePasswordSelected(){return this.settingsView===pc}};var de=j(X());var{Input:Cp}=de.Components,Xo=class extends de.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.formErrors=[]}template(){return de.createElement(nt,{title:()=>this.i18n.s("shared-title-change-email-address"),size:this.const("narrow"),showX:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},de.createElement("div",{class:de.const("dcg-shared-change-email dcg-shared-account-dialog")},de.createElement("div",{class:de.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-message-set-new-email-address")),de.createElement("form",{onSubmit:this.bindFn(this.onSubmit),method:de.const("post"),class:de.const("dcg-shared-email-form-container")},de.createElement("label",null,de.createElement("span",{class:de.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-new-email-address")),de.createElement(Cp,{type:de.const("email"),name:de.const("newEmail"),class:de.const("dcg-shared-input-blue-outline"),"aria-label":()=>this.i18n.s("shared-label-new-email-address"),required:de.const("true"),didMount:e=>{jt||e.focus()},value:()=>this.newEmail,onInput:e=>{this.newEmail=e,this.unmounted||this.update()}})),de.createElement("label",{for:de.const("password")},de.createElement("span",null,()=>this.i18n.s("shared-label-password")),de.createElement(Cp,{type:de.const("password"),class:de.const("dcg-shared-input-blue-outline"),"aria-label":()=>this.i18n.s("shared-label-password"),required:de.const("true"),value:()=>this.password,name:this.const("password"),onInput:e=>{if(this.password=e,!this.unmounted)return this.update()}})),de.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),de.createElement("div",{class:de.const("dcg-shared-sign-in-options")},de.createElement("button",{class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.submitEnabled()}),"aria-disabled":()=>!this.submitEnabled(),tabindex:()=>this.submitEnabled()?"0":"-1",type:de.const("submit")},()=>this.i18n.s("shared-button-change-email-and-password"))))))}submitEnabled(){return!!(this.password&&this.newEmail)}didUnmount(){this.unmounted=!0}async onSubmit(e){if(e.preventDefault(),this.submitEnabled())try{await this.controller.userController.setEmail({changeToken:this.getChangeToken(),password:this.password,newEmail:this.newEmail,lang:this.controller.getLanguage()}),this.controller.dispatch({type:"close-modal"}),history.replaceState(null,null,document.location.pathname)}catch(r){r.status===409?this.formErrors=["Sorry, someone has already registered with this email address."]:this.formErrors=[this.controller.getSomethingWentWrongText()],this.unmounted||this.update()}}getChangeToken(){return this.controller.userController.getEmailChangeToken()||""}};var Be=j(X());var Zo=class extends Be.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.openTime=Date.now(),this.formErrors=[],this.controller.logJSON("shared-consent-modal",{action:"show-consent-modal"})}template(){return Be.createElement(nt,{title:()=>this.i18n.s("shared-title-consent"),size:this.const("narrow"),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},Be.createElement("div",{class:Be.const("dcg-shared-consent-modal-container dcg-shared-account-dialog")},Be.createElement("div",{class:Be.const("dcg-shared-consent-contents")},()=>this.i18n.s("shared-message-consent-information")),Be.createElement("div",{class:Be.const("dcg-shared-consent-contents")},()=>this.i18n.s("shared-message-consent-delete-information")),Be.createElement("div",{class:Be.const("dcg-shared-modal-actions-container")},Be.createElement("span",{role:Be.const("button"),tabindex:Be.const("0"),class:Be.const("dcg-gray-link"),onTap:e=>this.openAccountSettings(e.device)},()=>this.i18n.s("shared-button-go-to-account-settings")),Be.createElement("div",{role:Be.const("button"),tabindex:()=>this.isConsentingToCollection()?-1:0,"aria-disabled":()=>this.isConsentingToCollection(),class:()=>({"dcg-btn-blue":!0,"dcg-disabled":this.isConsentingToCollection()}),onTap:this.bindFn(this.consentToCollection)},()=>this.i18n.s("shared-button-accept")),Be.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}))))}willUpdate(){this.formErrors=[],this.controller.userController.didPrivacyConsentFail()&&(this.formErrors=[this.controller.getSomethingWentWrongText()])}isConsentingToCollection(){return this.controller.userController.isConsentingToPrivacy()}didPrivacyConsentFail(){return this.controller.userController.didPrivacyConsentFail()}openAccountSettings(e){this.controller.logJSON("shared-consent-modal",{action:"edit-account",ts:Date.now()-this.openTime}),this.controller.dispatch({type:"show-modal",modal:"account-settings",device:e})}consentToCollection(){this.controller.logJSON("shared-consent-modal",{action:"consent",ts:Date.now()-this.openTime}),this.controller.userController.setPrivacyConsent({lang:this.controller.getLanguage()}),this.controller.dispatch({type:"close-modal"})}};var O=j(X());var _e=j(X());var nn=class extends _e.Class{template(){return _e.createElement("div",{class:_e.const("dcg-shared-cookie-notice")},_e.createElement(dt,{key:this.const("shared-message-cookie-notice"),i18n:this.props.i18n},_e.createElement("b",null,_e.const("Note:")),_e.const(" "),_e.const("Desmos uses cookies to enable persistence when you are signed"),_e.const(" "),_e.const("in. If you do not wish to use cookies, please use Desmos without"),_e.const(" "),_e.const("logging in."),_e.const(" "),_e.createElement("a",{class:_e.const("dcg-shared-cookie-notice-learn-more dcg-gray-link"),href:_e.const("/privacy"),target:_e.const("_blank")},_e.const("Learn More."))))}};var{If:ya,Input:Dp,IfElse:vb}=O.Components,ei=class extends O.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.email="",this.password="",this.isSubmittingForm=!1,this.formErrors=[],this.controller.getModalStartingError()&&this.formErrors.push(this.controller.getModalStartingError())}template(){return O.createElement(nt,{title:()=>this.i18n.s("shared-title-login"),size:this.const("narrow"),showX:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},O.createElement("div",{class:O.const("dcg-shared-login-dialog dcg-shared-account-dialog")},vb(()=>this.canChooseRole(),{true:()=>O.createElement("div",{class:O.const("dcg-shared-switch-account-message")},O.createElement(dt,{key:this.const("shared-prompt-new-to-desmos-teacher-or-student"),i18n:this.props.controller},O.const("New to Desmos?"),O.const(" "),O.createElement("a",{role:O.const("link"),tabindex:O.const("0"),class:O.const("dcg-gray-link"),onTap:e=>this.controller.dispatch({type:"show-modal",modal:"signup",device:e.device})},O.const("Sign up!")))),false:()=>O.createElement("div",{class:O.const("dcg-shared-switch-account-message")},O.createElement(dt,{key:this.const("shared-prompt-new-to-desmos-sign-up-here"),i18n:this.props.controller},O.const("New to Desmos?"),O.const(" "),O.createElement("a",{role:O.const("link"),tabindex:O.const("0"),class:O.const("dcg-gray-link"),onTap:e=>this.controller.dispatch({type:"show-modal",modal:"signup",device:e.device})},O.const("Sign up")),O.const(".")))}),O.createElement("div",{class:O.const("dcg-shared-account-content-container")},O.createElement(ya,{predicate:()=>window.googleAuthConnectionFailed},()=>O.createElement("div",{class:O.const("dcg-shared-google-auth-unavailable")},()=>this.i18n.s("shared-message-google-login-not-available"))),O.createElement(ya,{predicate:()=>!window.googleAuthConnectionFailed},()=>O.createElement("div",{class:O.const("dcg-btn-gray-outline dcg-shared-google-login"),role:O.const("button"),tabindex:O.const("0"),onTap:()=>this.googleLogin()},O.createElement("div",{class:O.const("dcg-shared-google-icon dcg-shared-external-login-logo")}),O.createElement("span",null,()=>this.i18n.s("shared-button-sign-in-with-google")))),O.createElement(ya,{predicate:()=>this.controller.allowSignInWithApple()},()=>O.createElement("div",{class:O.const("dcg-btn-gray-outline dcg-shared-apple-login"),role:O.const("button"),tabindex:O.const("0"),onTap:()=>this.appleLogin()},O.createElement("div",{class:O.const("dcg-shared-apple-icon dcg-shared-external-login-logo")}),O.createElement("span",null,()=>this.i18n.s("shared-button-sign-in-with-apple"))))),O.createElement("div",{class:O.const("dcg-shared-bg-line")},O.createElement("span",null,()=>this.i18n.s("shared-message-or-login-with-desmos"))),O.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),O.createElement("form",{class:O.const("dcg-shared-action-submit"),onSubmit:this.bindFn(this.onSubmit)},O.createElement("div",{class:O.const("dcg-shared-email-form-container")},O.createElement("label",null,O.createElement("span",{class:O.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-email")),O.createElement(Dp,{type:O.const("email"),name:O.const("email"),class:O.const("dcg-shared-input-blue-outline"),"aria-label":()=>this.i18n.s("shared-label-email"),required:O.const("required"),didMount:e=>{jt||e.focus()},value:()=>this.email,onInput:e=>{this.email=e,this.unmounted||this.update()}})),O.createElement("div",{class:O.const("dcg-shared-password-container")},O.createElement("label",{for:O.const("password")},O.createElement("span",null,()=>this.i18n.s("shared-label-password")),O.createElement(Dp,{type:O.const("password"),class:O.const("dcg-shared-input-blue-outline"),"aria-label":()=>this.i18n.s("shared-label-password"),required:O.const("true"),value:()=>this.password,name:this.const("password"),onInput:e=>{if(this.password=e,!this.unmounted)return this.update()}}),O.createElement("span",{class:O.const("dcg-shared-password-recovery-link")},O.createElement("a",{role:O.const("link"),tabindex:O.const(0),class:O.const("dcg-shared-action-password"),onTap:e=>this.controller.dispatch({type:"show-modal",modal:"recover-password",device:e.device})},()=>this.i18n.s("shared-prompt-forgot-your-password"))))),O.createElement("div",{class:O.const("dcg-shared-sign-in-options")},O.createElement(ya,{predicate:()=>this.isSubmittingForm},()=>O.createElement("div",{class:O.const("dcg-shared-progress-indicator dcg-shared-create-account-progress")},O.createElement("div",{class:O.const("dcg-shared-spinner")}))),O.createElement(ya,{predicate:()=>!this.isSubmittingForm},()=>O.createElement("div",{class:O.const("dcg-shared-submit-container")},O.createElement("button",{type:O.const("submit"),class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.submitEnabled()}),"aria-disabled":()=>!this.submitEnabled(),tabindex:()=>this.submitEnabled()?"0":"-1"},()=>this.i18n.s("shared-button-login-capitalized"))))),O.createElement(nn,{i18n:this.const(this.i18n)})))))}canChooseRole(){return!this.controller.getLimitedSignupRole()}didUnmount(){this.unmounted=!0}onSubmit(e){e.preventDefault(),this.submitForm()}googleLogin(){this.controller.dispatch({type:"close-modal"}),this.controller.userController.googleLogin({fromUI:"login"})}appleLogin(){this.controller.dispatch({type:"close-modal"}),this.controller.userController.appleLogin({fromUI:"login"})}submitEnabled(){return!!(this.email&&this.password)}async submitForm(){if(this.submitEnabled()){this.isSubmittingForm=!0,this.formErrors=[];try{let e=await this.controller.userController.checkPendingDeletion({email:this.email,lang:this.controller.getLanguage()});this._pendingDeletion=e.pendingDeletion}catch(e){this._pendingDeletion=!1}if(!this.unmounted){this.unmounted||this.update();try{if(await this.controller.userController.desmosLogin({email:this.email,password:this.password,lang:this.controller.getLanguage()}),this.unmounted)return;this._pendingDeletion?this.controller.dispatch({type:"show-modal",modal:"account-reenabled",device:"mouse"}):this.controller.dispatch({type:"close-modal"})}catch(e){this.formErrors=this.controller.parseJSONErrors(e)}this.unmounted||(this.isSubmittingForm=!1,this.controller.dispatch({type:"render"}))}}}};var ee=j(X());var{If:ti,Input:kb}=ee.Components,ri=class extends ee.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.email=this.controller.userController.getEmail(),this.formErrors=[],this.isSubmittingForm=!1,this.didSendRecoveryEmail=!1}template(){return ee.createElement(nt,{title:()=>this.i18n.s("shared-title-recover-password"),size:this.const("narrow"),showX:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},ee.createElement("div",{class:ee.const("dcg-shared-recover-password-dialog dcg-shared-account-dialog")},ee.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),ee.createElement(ti,{predicate:()=>this.didSendRecoveryEmail},()=>ee.createElement("div",{role:ee.const("alert"),class:ee.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-message-check-email-for-password-recovery-link"),ee.const(" "),ee.createElement("a",{href:ee.const("#"),class:ee.const("dcg-blue-link"),onTap:e=>(this.didSendRecoveryEmail=!1,this.controller.dispatch({type:"show-modal",modal:"recover-password",device:e.device}))},()=>this.i18n.s("shared-button-try-again")))),ee.createElement(ti,{predicate:()=>!this.didSendRecoveryEmail},()=>ee.createElement("form",{class:ee.const("dcg-shared-email-form-container"),onSubmit:this.bindFn(this.onSubmit)},ee.createElement("div",{class:ee.const("dcg-shared-account-paragraph")},()=>this.i18n.s("shared-prompt-enter-email-for-password-recovery-link")),ee.createElement("label",null,ee.createElement("span",{class:ee.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-email")),ee.createElement(kb,{type:ee.const("email"),name:ee.const("email"),class:ee.const("dcg-shared-input-blue-outline"),"aria-label":()=>this.i18n.s("shared-label-email"),required:ee.const("true"),didMount:e=>{jt&&e.focus()},value:()=>this.email,onInput:e=>{this.email=e,this.unmounted||this.update()}})),ee.createElement("div",{class:ee.const("dcg-shared-sign-in-options")},ee.createElement(ti,{predicate:()=>this.isSubmittingForm},()=>ee.createElement("div",{class:ee.const("dcg-shared-progress-indicator dcg-shared-create-account-progress")},ee.createElement("div",{class:ee.const("dcg-shared-spinner")}))),ee.createElement(ti,{predicate:()=>!this.isSubmittingForm},()=>ee.createElement("button",{class:()=>({"dcg-shared-btn-blue":!0}),type:ee.const("submit")},()=>this.i18n.s("shared-button-recover-password"))))))))}didUnmount(){this.unmounted=!0}onSubmit(e){e.preventDefault(),this.submitForm()}async submitForm(){this.formErrors=[],this.isSubmittingForm=!0;try{await this.controller.userController.recoverPassword({email:this.email,lang:this.controller.getLanguage()}),this.didSendRecoveryEmail=!0}catch(e){this.formErrors=this.controller.parseJSONErrors(e)}finally{this.isSubmittingForm=!1,this.unmounted||this.update()}}};var E=j(X());st();var Gt=j(X());var an=class extends Gt.Class{template(){return Gt.createElement("div",{role:Gt.const("checkbox"),tabindex:()=>this.props.disabled&&this.props.disabled()?-1:0,"aria-label":()=>{var e,r;return(r=(e=this.props).ariaLabel)==null?void 0:r.call(e)},"aria-labelledby":()=>{var e,r;return(r=(e=this.props).labelledBy)==null?void 0:r.call(e)},"aria-describedby":()=>{var e,r;return(r=(e=this.props).describedBy)==null?void 0:r.call(e)},"aria-disabled":()=>this.props.disabled&&this.props.disabled(),"aria-checked":this.props.checked,manageFocus:()=>{var e,r;return(r=(e=this.props).manageFocus)==null?void 0:r.call(e)},class:()=>({"dcg-component-checkbox":!0,"dcg-checked":this.props.checked(),"dcg-disabled":this.props.disabled&&this.props.disabled(),"dcg-small":this.props.small&&this.props.small(),[this.props.class===void 0?"":this.props.class()]:this.props.class!==void 0}),style:()=>this.props.style?this.props.style():{},onTap:this.bindFn(this.onChange)},Gt.createElement("span",{class:Gt.const("dcg-checkbox")},Gt.createElement("i",{class:Gt.const("dcg-icon-check"),"aria-hidden":Gt.const("true")})),Gt.createElement("span",{class:Gt.const("dcg-checkbox-children")},this.children))}onChange(e){let r=e.target;r&&r.getAttribute("href")||this.props.disabled&&this.props.disabled()||this.props.onChange(!this.props.checked())}};var{If:ba,Input:ni,Switch:xb}=E.Components,ai=0,gc=1,oi=class extends E.Class{template(){return E.createElement("span",{class:E.const("dcg-shared-terms-notice")},E.createElement(dt,{key:this.const("shared-message-privacy-notice"),i18n:this.props.i18n},E.const("I have read, understand, and accept the"),E.const(" "),E.createElement("a",{href:E.const("/terms"),target:E.const("_blank"),class:E.const("dcg-blue-link")},E.const("Terms of Service")),E.const(" "),E.const("and"),E.const(" "),E.createElement("a",{href:E.const("/privacy"),target:E.const("_blank"),class:E.const("dcg-blue-link")},E.const("Privacy Policy")),E.const(".")))}},ii=class extends E.Class{init(){this.controller=this.props.controller(),this.i18n=this.controller,this.selectedView=ai,this.givenName="",this.familyName="",this.email="",this.password="",this.consentChecked=!1,this.isSubmittingForm=!1,this.formErrors=[],this.breakPoint=660,this.measureWindow(),this.controller.getModalStartingError()&&this.formErrors.push(this.controller.getModalStartingError())}template(){return E.createElement(nt,{title:()=>this.i18n.s("shared-title-signup"),size:this.const("narrow"),showX:this.const(!0),onClose:()=>this.controller.dispatch({type:"close-modal"}),i18n:this.props.controller},E.createElement("div",{class:()=>({"dcg-shared-signup-dialog":!0,"dcg-shared-account-dialog":!0})},E.createElement("div",{class:E.const("dcg-shared-switch-account-message")},()=>this.i18n.s("shared-prompt-already-have-account"),this.const(this.i18n.raw(" ")),E.createElement("a",{role:E.const("link"),tabindex:E.const("0"),class:E.const("dcg-gray-link"),onTap:e=>this.controller.dispatch({type:"show-modal",modal:"login",device:e.device})},()=>this.i18n.s("shared-button-login")),E.const(".")),E.createElement("div",{class:E.const("dcg-shared-navigation-tabs"),role:E.const("tablist")},E.createElement("div",{role:E.const("tab"),tabindex:E.const("0"),"aria-selected":this.bindFn(this.isGoogleSelected),class:()=>({"dcg-shared-tab-gray-underline":!0,"dcg-shared-tab-always-underline":!0,"dcg-shared-profile-view-button":!0,"dcg-selected":this.isGoogleSelected()}),onTap:()=>this.updateView(ai)},this.bindFn(this.externalTitle)),E.createElement("div",{role:E.const("tab"),tabindex:E.const("0"),"aria-selected":this.bindFn(this.isDesmosSelected),class:()=>({"dcg-shared-tab-gray-underline":!0,"dcg-shared-tab-always-underline":!0,"dcg-shared-password-view-button":!0,"dcg-selected":this.isDesmosSelected()}),onTap:()=>this.updateView(gc)},this.bindFn(this.desmosTitle))),E.createElement("div",{class:E.const("dcg-shared-account-content-container")},E.createElement(xb,{key:()=>this.selectedView},e=>e===ai?E.createElement("div",{class:E.const("dcg-shared-notice-checkbox-google")},E.createElement(an,{checked:()=>this.consentChecked,disabled:this.const(!1),onChange:()=>{if(this.consentChecked=!this.consentChecked,!this.unmounted)return this.update()}},this.bindFn(this.consentText)),E.createElement(an,{checked:()=>this.privacyChecked,disabled:this.const(!1),onChange:()=>{if(this.privacyChecked=!this.privacyChecked,!this.unmounted)return this.update()}},E.createElement(oi,{i18n:this.const(this.i18n)})),E.createElement(ba,{predicate:()=>window.googleAuthConnectionFailed},()=>E.createElement("div",{class:E.const("dcg-shared-google-auth-unavailable")},()=>this.i18n.s("shared-message-google-login-not-available"))),E.createElement(ba,{predicate:()=>!window.googleAuthConnectionFailed},()=>E.createElement("div",{class:()=>({"dcg-btn-gray-outline":!0,"dcg-shared-google-login":!0,"dcg-disabled":this.hasNotConsented()}),role:E.const("button"),tabindex:()=>this.hasNotConsented()?"-1":"0","aria-disabled":this.bindFn(this.hasNotConsented),onTap:()=>this.googleLogin()},E.createElement("div",{class:E.const("dcg-shared-google-icon dcg-shared-external-login-logo")}),E.createElement("span",null,this.bindFn(this.getGoogleLoginText)))),E.createElement(ba,{predicate:()=>this.controller.allowSignInWithApple()},()=>E.createElement("div",{class:()=>({"dcg-btn-gray-outline":!0,"dcg-shared-apple-login":!0,"dcg-disabled":this.hasNotConsented()}),role:E.const("button"),tabindex:()=>this.hasNotConsented()?"-1":"0","aria-disabled":this.bindFn(this.hasNotConsented),onTap:()=>this.appleLogin()},E.createElement("div",{class:E.const("dcg-shared-apple-icon dcg-shared-external-login-logo")}),E.createElement("span",null,this.bindFn(this.getAppleLoginText))))):e===gc?E.createElement("div",null,E.createElement(Ze,{controller:this.props.controller,errors:()=>this.formErrors}),E.createElement("form",{class:E.const("dcg-shared-action-submit"),onSubmit:this.bindFn(this.onSubmit),didMount:this.bindFn(this.didMountForm)},E.createElement("div",{class:E.const("dcg-shared-email-form-container")},E.createElement("label",null,E.createElement("span",{class:E.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-email")),E.createElement(ni,{type:E.const("email"),name:E.const("email"),class:E.const("dcg-shared-input-blue-outline"),required:E.const("true"),"aria-describedby":E.const("email-description"),didMount:r=>{jt||r.focus()},value:()=>this.email,onInput:r=>{if(this.email=r,!this.unmounted)return this.update()}})),E.createElement("div",{class:E.const("dcg-shared-name-container")},E.createElement("div",{class:E.const("dcg-shared-name-input")},E.createElement("label",null,E.createElement("span",{class:E.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-given-name-or-nickname")),E.createElement(ni,{type:E.const("text"),name:E.const("given-name"),class:E.const("dcg-shared-input-blue-outline"),required:E.const("true"),"aria-describedby":E.const("given-name-description"),value:()=>this.givenName,onInput:r=>{if(this.givenName=r,!this.unmounted)return this.update()}}))),E.createElement("div",{class:E.const("dcg-shared-name-input")},E.createElement("label",null,E.createElement("span",{class:E.const("dcg-shared-input-title")},()=>this.i18n.s("shared-label-family-name")),E.createElement(ni,{type:E.const("text"),name:E.const("family-name"),class:E.const("dcg-shared-input-blue-outline"),"aria-describedby":E.const("family-name-description"),value:()=>this.familyName,onInput:r=>{if(this.familyName=r,!this.unmounted)return this.update()}})))),E.createElement("label",null,E.createElement("span",null,()=>this.i18n.s("shared-label-password")),E.createElement(ni,{type:E.const("password"),class:E.const("dcg-shared-input-blue-outline"),name:E.const("password"),required:E.const("true"),value:()=>this.password,onInput:r=>{if(this.password=r,!this.unmounted)return this.update()}})),E.createElement("div",{class:E.const("dcg-shared-notice-checkbox-email")},E.createElement(an,{checked:()=>this.consentChecked,disabled:this.const(!1),onChange:()=>{if(this.consentChecked=!this.consentChecked,!this.unmounted)return this.update()}},this.bindFn(this.consentText))),E.createElement(an,{checked:()=>this.privacyChecked,disabled:this.const(!1),onChange:()=>{if(this.privacyChecked=!this.privacyChecked,!this.unmounted)return this.update()}},E.createElement(oi,{i18n:this.const(this.i18n)})),E.createElement("div",{class:E.const("dcg-shared-sign-in-options")},E.createElement(ba,{predicate:()=>this.isSubmittingForm},()=>E.createElement("div",{class:E.const("dcg-shared-progress-indicator dcg-shared-create-account-progress")},E.createElement("div",{class:E.const("dcg-shared-spinner")}))),E.createElement(ba,{predicate:()=>!this.isSubmittingForm},()=>E.createElement("div",{class:E.const("dcg-shared-submit-container")},E.createElement("button",{type:E.const("submit"),class:()=>({"dcg-btn-blue":!0,"dcg-disabled":!this.submitEnabled()}),"aria-disabled":()=>!this.submitEnabled(),tabindex:()=>this.submitEnabled()?"0":"-1"},()=>this.i18n.s("shared-button-create-account")))))))):E.createElement("span",null)),E.createElement(nn,{i18n:this.const(this.i18n)}))))}canSwitchRoles(){return!this.controller.getLimitedSignupRole()}didMountForm(e){this.form=e}submitEnabled(){var s,d,g;if(!this.consentChecked||!this.privacyChecked||!this.form)return!1;let e=(s=this.form.querySelector('[name="password"]'))==null?void 0:s.value,r=(d=this.form.querySelector('[name="email"]'))==null?void 0:d.value,a=(g=this.form.querySelector('[name="given-name"]'))==null?void 0:g.value;return!!(e&&r&&a)}onSubmit(e){e.preventDefault(),this.submitEnabled()&&this.submitForm()}googleLogin(){this.controller.dispatch({type:"close-modal"}),this.controller.userController.googleLogin({fromUI:"create"})}appleLogin(){this.controller.dispatch({type:"close-modal"}),this.controller.userController.appleLogin({fromUI:"create"})}getGoogleLoginText(){return this.consentChecked&&this.privacyChecked?this.i18n.s("shared-prompt-sign-up-with-google"):this.i18n.s("shared-prompt-please-consent-to-sign-up-with-google")}getAppleLoginText(){return this.consentChecked&&this.privacyChecked?this.i18n.s("shared-prompt-sign-up-with-apple"):this.i18n.s("shared-prompt-please-consent-to-sign-up-with-apple")}async submitForm(){this.formErrors=[],this.isSubmittingForm=!0,this.unmounted||this.update();try{if(await this.controller.userController.createAccount({userProvidedName:{given:this.givenName,family:this.familyName.length?this.familyName:void 0},email:this.email,password:this.password,teacher:!1,lang:this.controller.getLanguage()}),!this.unmounted)return this.controller.dispatch({type:"close-modal"})}catch(e){this.formErrors=this.controller.parseJSONErrors(e)}finally{this.isSubmittingForm=!1,this.unmounted||this.update()}}updateView(e){this.selectedView=e,this.unmounted||this.update()}externalTitle(){return this.controller.allowSignInWithApple()?this.windowWidth>this.breakPoint?this.i18n.s("shared-button-external-account-wide"):this.i18n.s("shared-button-external-account-narrow"):this.windowWidth>this.breakPoint?this.i18n.s("shared-button-google-account-wide"):this.i18n.s("shared-button-google-account-narrow")}desmosTitle(){return this.windowWidth>this.breakPoint?this.i18n.s("shared-button-email-address-wide"):this.i18n.s("shared-button-email-address-narrow")}measureWindow(){return this.windowWidth=B(window).width()}didMount(){B(window).on("resize.create-account",fn(()=>{this.measureWindow(),this.update()},200))}didUnmount(){B(window).off("resize.create-account"),this.unmounted=!0}consentText(){return this.i18n.s("shared-message-consent-text")}isGoogleSelected(){return this.selectedView===ai}isDesmosSelected(){return this.selectedView===gc}hasNotConsented(){return!this.consentChecked||!this.privacyChecked}};var{SwitchUnion:Cb}=Vt.Components,si=class extends Vt.Class{template(){return Cb(()=>this.props.controller().getModal(),{login:()=>Vt.createElement(ei,{controller:this.props.controller}),signup:()=>Vt.createElement(ii,{controller:this.props.controller}),"account-reenabled":()=>Vt.createElement(Ko,{controller:this.props.controller}),"recover-password":()=>Vt.createElement(ri,{controller:this.props.controller}),"account-settings":()=>Vt.createElement(Qo,{controller:this.props.controller}),"change-email":()=>Vt.createElement(Xo,{controller:this.props.controller}),consent:()=>Vt.createElement(Zo,{controller:this.props.controller}),none:()=>Vt.createElement("span",null)})}};st();var ut=j(X());var $e=j(X());var{For:Db,If:Eb}=$e.Components,ci=class extends $e.Class{init(){this.i18n=this.props.i18n()}template(){return $e.createElement("div",{class:()=>({"dcg-language-picker":!0,"dcg-two-columns":this.getLanguages().length>7})},$e.createElement("div",{class:$e.const("dcg-language-header"),role:$e.const("heading"),"aria-level":$e.const("2")},()=>this.i18n.s("shared-title-language-menu")),$e.createElement(Db,{each:()=>this.getLanguages()},$e.createElement("ul",{class:$e.const("dcg-unstyled-list dcg-languages-list")},e=>$e.createElement("li",{class:()=>({"dcg-listitem":!0,"dcg-language-option":!0,"dcg-selected":this.isLanguageSelected(e)}),lang:this.const(this.getLangCode(e)),role:$e.const("menuitem"),tabindex:$e.const("0"),"aria-current":()=>this.isLanguageSelected(e),onTap:()=>this.updateLang(e)},()=>this.i18n.raw(this.getLanguageDisplayName(e))))),$e.createElement(Eb,{predicate:()=>this.shouldShowFooterLink()},()=>$e.createElement("a",{class:$e.const("dcg-language-footer-link dcg-blue-link"),href:()=>this.getFooterLinkURL()},()=>this.getFooterLinkText())))}shouldShowFooterLink(){return!!(this.props.footerLink&&this.props.footerLink())}getFooterLinkURL(){let e=this.props.footerLink&&this.props.footerLink();if(e)return e.url}getFooterLinkText(){let e=this.props.footerLink&&this.props.footerLink();return e?e.text:this.i18n.raw("")}getCurrentLang(){return this.props.currentLang()}getLanguages(){return Object.keys(this.props.getAllLangs())}getLanguageDisplayName(e){return this.props.getAllLangs()[e].display_name}updateLang(e){let r=this.props.getAllLangs()[e].code;return this.props.onLangChosen(r)}getLangCode(e){return this.props.getAllLangs()[e].code}isLanguageSelected(e){return this.getLangCode(e)===this.getCurrentLang()}};var gr=j(X());var Rn=class extends gr.Class{template(){return gr.createElement("div",{class:gr.const("dcg-icon-button-container")},gr.createElement(qr,{tooltip:this.props.label,gravity:this.props.tooltipGravity},gr.createElement("i",{role:gr.const("button"),tabindex:gr.const("0"),"aria-label":this.props.label,class:this.props.iconClass,onTap:this.props.onTap,"aria-expanded":()=>{var e,r;return(r=(e=this.props).isExpanded)==null?void 0:r.call(e)}})))}};var{If:Ep}=ut.Components,Sb={en:{code:"en",display_name:"English"},de:{code:"de",display_name:"Deutsch"},es:{code:"es",display_name:"Espa\xF1ol (LATAM)"},et:{code:"et",display_name:"Eesti"},fr:{code:"fr",display_name:"Fran\xE7ais"},id:{code:"id",display_name:"Bahasa Indonesia"},it:{code:"it",display_name:"Italiano"},ja:{code:"ja",display_name:"\u65E5\u672C\u8A9E"},ko:{code:"ko",display_name:"\uD55C\uAD6D\uC5B4"},nl:{code:"nl",display_name:"Nederlands"},pl:{code:"pl",display_name:"Polski"},"pt-BR":{code:"pt-BR",display_name:"Portugu\xEAs (Brasil)"},ru:{code:"ru",display_name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},"sv-SE":{code:"sv-SE",display_name:"Svenska"},th:{code:"th",display_name:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22"},tr:{code:"tr",display_name:"T\xFCrk\xE7e"},vi:{code:"vi",display_name:"Ti\u1EBFng Vi\u1EC7t"},"zh-CN":{code:"zh-CN",display_name:"\u7B80\u4F53\u4E2D\u6587"},"zh-TW":{code:"zh-TW",display_name:"\u7E41\u9AD4\u4E2D\u6587"}},li=class extends ut.Class{init(){this.controller=this.props.controller(),this.namespace="language-picker-container",this.isOpen=!1}template(){return ut.createElement(Ep,{predicate:this.bindFn(this.isDisplayed)},()=>ut.createElement("div",{role:ut.const("menu"),class:ut.const("dcg-language-picker-container"),didMount:this.bindFn(this.didMountContainer),willUnmount:this.bindFn(this.willUnmountContainer),"aria-label":()=>ge("shared-calculator-button-language")},ut.createElement(Rn,{label:()=>ge("shared-calculator-button-language"),iconClass:this.const("dcg-icon-world"),tooltipGravity:this.const("sw"),onTap:this.bindFn(this.toggleOpen),isExpanded:()=>this.isOpen}),ut.createElement(Ep,{predicate:()=>this.isOpen},()=>ut.createElement("div",{class:ut.const("dcg-language-picker-dropdown")},ut.createElement(ci,{i18n:this.props.controller,getAllLangs:this.const(Sb),onLangChosen:this.bindFn(this.onLangChosen),currentLang:()=>this.controller.getLanguage()})))))}isDisplayed(){return this.controller.getShowLanguagePicker()}didMountContainer(e){B(document.body).on(`dcg-tapstart.${this.namespace} dcg-tap.${this.namespace}`,({target:r})=>{this.isOpen&&!B.contains(e,r)&&this.toggleOpen()})}willUnmountContainer(){B(document.body).off(this.namespace)}toggleOpen(){this.isOpen=!this.isOpen,this.update()}onLangChosen(e){Xu(e).then(()=>{this.isOpen=!1,this.controller.dispatch({type:"set-language",language:e})})}};var on=j(X());var{If:Tb}=on.Components,di=class extends on.Class{template(){return on.createElement(Tb,{predicate:this.props.isDisplayed},()=>on.createElement(Rn,{label:()=>ge("shared-calculator-button-print"),iconClass:this.const("dcg-icon-print"),tooltipGravity:this.const("sw"),onTap:()=>window.print()}))}};var tr=j(X());var ui=class extends tr.Class{template(){return tr.createElement(dt,{i18n:this.props.controller,key:this.const("frontpage-heading-main-using-desmos-classroom-link")},tr.const("Desmos Classroom is a free teaching and learning platform,"),tr.const(" "),tr.createElement("a",{href:tr.const("https://blog.desmos.com/articles/desmos-amplify-join-forces/"),class:tr.const("dcg-shared-blue-link")},tr.const("now part of Amplify.")))}};var{If:wa,Each:hc}=S.Components,Gb=0,Pn=class extends S.Class{init(){this.open=!1,this.id=Gb++}getAriaLabel(){var e,r;return(r=(e=this.props).ariaLabel)==null?void 0:r.call(e)}template(){return S.createElement("div",{class:()=>({"dcg-header-link":!0,"dcg-math-tools":this.props.mathToolsMenu}),didMount:this.bindFn(this.didMountRoot),willUnmount:this.bindFn(this.willUnmountRoot),"aria-label":this.bindFn(this.getAriaLabel),"aria-labelledby":this.props.ariaLabel?this.const(void 0):this.const(this.getUniqueName())},S.createElement("span",{class:S.const("dcg-header-link-title-container"),role:S.const("button"),tabindex:S.const("0"),id:this.const(this.getUniqueName()),"aria-expanded":()=>this.open,onTap:()=>this.toggleOpen()},this.props.title,S.createElement("i",{class:S.const("dcg-icon-caret-down"),"aria-hidden":S.const("true")})),S.createElement("div",{class:S.const("dcg-header-link-dropdown"),style:()=>({display:this.open?void 0:"none"})},this.children))}getUniqueName(){return`header-link-${this.id}`}didMountRoot(e){B(document.body).on(`dcg-tapstart.${this.getUniqueName()} dcg-tap.${this.getUniqueName()}`,r=>{if(this.open){let a=r.target;B.contains(e,a)||this.toggleOpen()}})}willUnmountRoot(){B(document.body).off(`.${this.getUniqueName()}`)}toggleOpen(){this.open=!this.open,this.update()}},pi=class extends S.Class{init(){this.controller=this.props.controller()}template(){return S.createElement("header",{class:()=>({"dcg-header-container":!0,"dcg-scrolled":this.isScrolled}),didMount:this.bindFn(this.didMountRoot),didUnmount:this.bindFn(this.didUnmountRoot)},S.createElement(wa,{predicate:()=>this.controller.isMaintenanceMode()},()=>S.createElement("div",{class:S.const("dcg-notice-wrapper"),role:S.const("heading"),"aria-level":S.const("1")},S.createElement("div",{class:S.const("dcg-maintenance-notice")},S.createElement("i",{class:S.const("dcg-icon-error"),"aria-hidden":S.const("true")}),()=>this.controller.s("frontpage-heading-header-maintenance-mode")))),S.createElement(wa,{predicate:()=>this.controller.shouldShowTopBanner()},()=>S.createElement("div",{role:S.const("banner"),class:S.const("dcg-top-banner")},()=>this.controller.s("frontpage-text-header-terms-update"),S.createElement("a",{class:S.const("dcg-primary-link"),target:S.const("_blank"),href:S.const("https://blog.desmos.com/articles/desmos-studio-terms-update/")},()=>this.controller.s("frontpage-text-header-terms-update-link")))),S.createElement("div",{class:S.const("dcg-main-header-container")},S.createElement("div",{class:S.const("dcg-header-left-content")},S.createElement("a",{class:S.const("dcg-home-link"),href:S.const("/")},S.createElement(Rr,null))),S.createElement("nav",{class:S.const("dcg-header-center-content")},S.createElement(Pn,{title:rn.MATH_TOOLS.title,mathToolsMenu:()=>!0},S.createElement("ul",{class:S.const("dcg-unstyled-list")},hc(()=>rn.MATH_TOOLS.links,{item:({href:e,icon:r,text:a})=>S.createElement("li",null,S.createElement("a",{href:this.const(e),class:S.const("dcg-dropdown-link")},S.createElement("div",{class:S.const("dcg-math-tool-icon-container")},S.createElement("i",{class:this.const(r),"aria-hidden":S.const("true")})),S.createElement("span",{class:S.const("dcg-dropdown-text")},a))),key:({href:e})=>e}),S.createElement("li",{class:S.const("dcg-app-links")},S.createElement(dt,{i18n:this.const(this.controller),key:this.const("frontpage-text-header-app-links")},S.const("Download our apps in the"),S.const(" "),S.createElement("a",{class:S.const("dcg-primary-link"),href:S.const("https://play.google.com/store/apps/developer?id=Desmos+Inc")},S.const("Google Play Store")),S.const(" "),S.const("and"),S.const(" "),S.createElement("a",{class:S.const("dcg-primary-link"),href:S.const("https://apps.apple.com/us/developer/desmos/id653517543")},S.const("iOS App Store")),S.const("."))))),S.createElement(Pn,{title:rn.CLASSROOM.title},S.createElement("ul",{class:S.const("dcg-unstyled-list")},hc(()=>rn.CLASSROOM.links,{item:({href:e,text:r})=>S.createElement("li",null,S.createElement("a",{href:this.const(hp(e,"header-dropdown")),class:S.const("dcg-dropdown-link")},r)),key:({href:e})=>e})),S.createElement("div",{class:S.const("dcg-classroom-about-link-dropdown-container")},S.createElement(ui,{controller:this.props.controller}))),S.createElement(Pn,{title:rn.RESOURCES.title},S.createElement("ul",{class:S.const("dcg-unstyled-list")},hc(()=>rn.RESOURCES.links,{item:({href:e,text:r})=>S.createElement("li",null,S.createElement("a",{href:this.const(e),class:S.const("dcg-dropdown-link")},r)),key:({href:e})=>e})))),S.createElement("div",{class:S.const("dcg-header-right-content")},S.createElement(wa,{predicate:()=>!this.hideAccounts()},()=>S.createElement("div",null,S.createElement(wa,{predicate:()=>!this.controller.userController.isLoggedIn()},()=>S.createElement("div",{class:S.const("dcg-account-container")},S.createElement("div",{role:S.const("link"),tabindex:S.const("0"),class:S.const("dcg-log-in"),onTap:e=>{this.controller.dispatch({type:"show-modal",modal:"login",device:e.device})}},()=>this.controller.s("frontpage-link-shared-log-in")))),S.createElement(wa,{predicate:()=>this.controller.userController.isLoggedIn()},()=>S.createElement("div",{class:S.const("dcg-account-dropdown-container")},S.createElement(Pn,{title:()=>this.controller.userController.getFirstName(),ariaLabel:()=>this.controller.s("frontpage-button-account-menu")},S.createElement("ul",{class:S.const("dcg-unstyled-list")},S.createElement("li",{class:S.const("dcg-user-name")},()=>this.controller.userController.getFullName()),S.createElement("li",{class:S.const("dcg-email")},()=>this.controller.userController.getEmail()),S.createElement("li",null,S.createElement("div",{onTap:e=>{this.controller.dispatch({type:"show-modal",modal:"account-settings",device:e.device})},role:S.const("link"),tabindex:S.const(0),class:S.const("dcg-dropdown-link")},()=>this.controller.s("frontpage-link-shared-account-settings"))),S.createElement("div",{class:S.const("dcg-line-divider")}),S.createElement("li",null,S.createElement("div",{onTap:()=>this.controller.userController.logout(),role:S.const("link"),tabindex:S.const(0),class:S.const("dcg-dropdown-link")},()=>this.controller.s("frontpage-link-shared-log-out"))))))))),S.createElement(li,{controller:this.props.controller}),S.createElement(di,{isDisplayed:this.bindFn(this.shouldShowPrintIcon)}))),S.createElement(si,{controller:this.props.controller}))}didMountRoot(){B(document).on("scroll.header-container",()=>{let e=B(document).scrollTop()||0,a=this.controller.shouldShowTopBanner()?e>=30:e>0;a!==this.isScrolled&&(this.isScrolled=a,this.update())})}hideAccounts(){return this.controller.isMaintenanceMode()?!0:this.props.hideAccounts&&this.props.hideAccounts()}didUnmountRoot(){B(document).off(".header-container")}shouldShowPrintIcon(){var e,r;return!!((r=(e=this.props).showPrintIcon)!=null&&r.call(e))}};var he=j(X());An();var gi=class{constructor(e,r){this.cb=e;this.document=r;this.observedAriaLiveElements=new WeakMap;this.destroyed=!1;this.onAriaLabelFocus=e=>{let r=e.target;if(this.isElement(r)){let a=r.getAttribute("aria-label");a&&this.cb(a,"label")}};this.document.documentElement.addEventListener("focus",this.onAriaLabelFocus,!0),this.ariaLiveContentObserver=new MutationObserver(a=>this.handleAriaLiveContentMutations(a)),r.documentElement.querySelectorAll('[aria-live="assertive"]').forEach(a=>this.startObservingAriaLiveElement(a)),this.treeObserver=new MutationObserver(a=>this.handleDocumentTreeMutations(a)),this.treeObserver.observe(r.documentElement,{childList:!0,subtree:!0,attributeFilter:["aria-live"]})}destroy(){this.destroyed=!0,this.document.documentElement.removeEventListener("focus",this.onAriaLabelFocus,!0),this.ariaLiveContentObserver.disconnect()}isObservingElement(e){return!!this.observedAriaLiveElements.get(e)}handleAriaLiveContentMutations(e){var a;let r=new Map;for(let s of e){if(!this.observedAriaLiveElements.get(s.target))continue;let d=r.get(s.target);d||(d=[],r.set(s.target,d)),d.push(s)}for(let[s,d]of r){let g=s.cloneNode(!0),m=[g.textContent||""];for(let p=d.length-1;p>=0;p--){let b=d[p];switch(b.type){case"attributes":{b.attributeName!==null&&g.setAttribute(b.attributeName,b.oldValue||""),m.push(g.textContent||"");break}case"characterData":{b.oldValue!==null&&(g.textContent=b.oldValue),g.textContent&&g.textContent!==m[m.length-1]&&m.push(g.textContent);break}case"childList":{if(b.addedNodes.length>1||b.removedNodes.length>1)throw new Error(`Expected at most one removed node and one added node, but got ${b.removedNodes.length} removed nodes and ${b.addedNodes.length} added nodes`);b.addedNodes.length===1&&((a=g.firstChild)==null||a.remove()),b.removedNodes.length===1&&b.removedNodes.forEach(k=>g.appendChild(k.cloneNode(!0))),g.textContent&&g.textContent!==m[m.length-1]&&m.push(g.textContent);break}}}for(let p of m.reverse())this.cb(p,"alert")}}startObservingAriaLiveElement(e){this.destroyed||e.getAttribute("aria-live")==="assertive"&&(this.observedAriaLiveElements.get(e)||(this.observedAriaLiveElements.set(e,!0),e.textContent&&this.cb(e.textContent,"alert"),this.ariaLiveContentObserver.observe(e,{attributes:!0,characterData:!0,childList:!0,attributeOldValue:!0,characterDataOldValue:!0})))}stopObservingAriaLiveElement(e){this.observedAriaLiveElements.set(e,!1)}handleDocumentTreeMutations(e){for(let r of e)r.addedNodes.forEach(a=>{this.isElement(a)&&a.getAttribute("aria-live")==="assertive"&&this.startObservingAriaLiveElement(a)}),this.isElement(r.target)&&r.attributeName==="aria-live"&&(r.target.getAttribute("aria-live")==="assertive"?this.startObservingAriaLiveElement(r.target):this.stopObservingAriaLiveElement(r.target)),r.removedNodes.forEach(a=>{this.isElement(a)&&(this.stopObservingAriaLiveElement(a),a.querySelectorAll('[aria-live="assertive"]').forEach(s=>this.stopObservingAriaLiveElement(s)))})}isElement(e){var a;let r=(a=this.document.defaultView)==null?void 0:a.Element;return r?e instanceof r:!1}};var Pr,hi=[],Sp="",Vb;function Ab(t){hi.push(t)}function Tp(t){if(t!==void 0&&Ab(t),Pr&&hi.length>0){let e=hi.join(" ").replace(/ +(?= )/g,"");Pr.setAttribute("aria-relevant",Sp===e&&Ha?"all":"additions text"),Pr.textContent=e,Sp=e}hi.length=0}function Fb(){Pr=document.createElement("p"),Pr.setAttribute("aria-live","assertive"),Pr.setAttribute("aria-atomic","true"),Pr.classList.add("dcg-aria-alert"),document.body.appendChild(Pr),cr().logAria&&(Vb=new gi((e,r)=>ir.log(`[aria ${r}] ${e}`),document))}so(Fb);var{If:mi,For:Ob,Input:Ib}=he.Components,fi=class extends he.Class{constructor(){super(...arguments),this.filter=void 0,this.focusLocation=void 0,this.lastResultCount=0}init(){this.controller=this.props.controller()}template(){return he.createElement("div",{class:he.const("dcg-search-container"),onKeydown:this.bindFn(this.onKeydown)},he.createElement(mi,{predicate:this.props.renderWithInput},()=>he.createElement("div",{role:he.const("search"),class:he.const("dcg-searchable-dropdown")},he.createElement(Ib,{class:()=>({"dcg-results-hidden":!this.showResults()}),didMount:this.bindFn(this.didMountInput),onInput:this.bindFn(this.onInputChange),value:this.bindFn(this.getFilterString),placeholder:()=>this.props.placeholder(),manageFocus:this.const({shouldBeFocused:this.bindFn(this.shouldFilterBeFocused),onFocusedChanged:this.bindFn(this.onFilterFocusChange)})}),he.createElement(mi,{predicate:()=>this.shouldShowDeleteX()},()=>he.createElement("i",{class:he.const("dcg-icon-remove dcg-remove-x dcg-do-not-blur"),role:he.const("button"),tabindex:he.const("0"),"aria-label":()=>this.controller.s("shared-calculator-button-clear"),onTap:this.bindFn(this.onDeleteXTapped)})))),he.createElement(mi,{predicate:()=>this.getFilteredOptions().length>0&&this.showResults()},()=>he.createElement("div",{class:()=>{var e,r;return{"dcg-searchable-dropdown-list-container":!0,"dcg-render-as-popover":(r=(e=this.props).popoverOptionsOnFocus)==null?void 0:r.call(e)}}},he.createElement(Ob,{each:()=>this.getFilteredOptions(),key:e=>e.id+"-"+e.label},he.createElement("div",{class:()=>({"dcg-searchable-dropdown-list":!0,"dcg-do-not-blur":!0,"dcg-no-input":!this.props.renderWithInput()}),role:he.const("listbox"),"aria-label":()=>this.controller.s("shared-calculator-label-search-results")},e=>he.createElement("div",{class:he.const("dcg-searchable-dropdown-option"),role:he.const("option"),onTap:r=>this.selectOption(e,r.device==="keyboard"),manageFocus:this.const({shouldBeFocused:()=>this.shouldOptionBeFocused(e),onFocusedChanged:r=>this.onOptionFocusChange(e,r)}),tabindex:he.const(0)},this.const(e.label)))))),he.createElement(mi,{predicate:()=>this.getFilteredOptions().length===0&&this.showResults()},()=>he.createElement("div",{class:()=>{var e,r;return{"dcg-searchable-dropdown-list-container":!0,"dcg-render-as-popover":(r=(e=this.props).popoverOptionsOnFocus)==null?void 0:r.call(e)}}},he.createElement("div",{class:()=>({"dcg-searchable-dropdown-list":!0,"dcg-no-search-results":!0})},()=>this.controller.s("shared-calculator-text-search-results",{count:new qn(0)})))))}showResults(){var e,r;return(r=(e=this.props).popoverOptionsOnFocus)!=null&&r.call(e)?!!this.focusLocation:!0}didMountInput(){var e,r;(r=(e=this.props).popoverOptionsOnFocus)!=null&&r.call(e)||this.focusFilter()}shouldShowDeleteX(){return!!this.getFilterString()}onDeleteXTapped(e){this.onInputChange(""),this.props.externalControl?(this.props.externalControl().onClear(),e.device==="keyboard"&&this.focusFilter()):(this.focusFilter(),this.update())}shouldFilterBeFocused(){return this.focusLocation&&this.focusLocation.type==="filter"}onFilterFocusChange(e){e?this.focusFilter():(this.focusLocation=void 0,this.update())}shouldOptionBeFocused(e){return this.focusLocation&&this.focusLocation.type==="option"&&this.focusLocation.id===e.id}focusFilter(){this.focusLocation={type:"filter"},this.update()}focusOption(e){this.focusLocation={type:"option",id:e.id},this.update()}getFocusedOptionIndex(){if(!this.focusLocation||this.focusLocation.type!=="option")return-1;for(var e=this.focusLocation.id,r=this.getFilteredOptions(),a=0;a<r.length;a++){var s=r[a];if(s.id===e)return a}return-1}onOptionFocusChange(e,r){r?this.focusOption(e):(this.focusLocation=void 0,this.update())}onKeydown(e){switch(He(e)){case Xr:if(this.shouldFilterBeFocused()){var r=this.getFilteredOptions();r.length===1&&this.selectOption(r[0],!0)}break;case oo:this.moveFocusInDirection(-1)&&e.preventDefault();break;case io:this.moveFocusInDirection(1)&&e.preventDefault();break;case ad:e.preventDefault(),this.focusFirstOption();break;case nd:e.preventDefault(),this.focusLastOption();break;case Or:this.props.onCancel();break;case ao:e.shiftKey?this.moveFocusInDirection(-1)&&e.preventDefault():this.moveFocusInDirection(1)&&e.preventDefault();break}}moveFocusInDirection(e){var r=this.getFilteredOptions(),a=this.getFocusedOptionIndex(),s=a+e;if(s==-1&&this.props.renderWithInput())return this.focusFilter(),!0;var d=r[s];return d?(this.focusOption(d),!0):!1}focusFirstOption(){var e=this.getFilteredOptions();e.length!==0&&this.focusOption(e[0])}focusLastOption(){var e=this.getFilteredOptions();e.length!==0&&this.focusOption(e[e.length-1])}onInputChange(e){this.props.externalControl?this.props.externalControl().onValueChange(e):this.filter=e,this.update()}getFilterString(){return this.props.externalControl?this.props.externalControl().getValue():this.filter||""}selectOption(e,r){var a,s;(s=(a=this.props).popoverOptionsOnFocus)!=null&&s.call(a)?this.onInputChange(e.label):this.onInputChange(""),this.focusLocation=void 0,this.update(),this.props.onChange({value:e.id,fromKeyboard:r})}getFilteredOptions(){var e=this.props.options(),r=this.getFilterString().toLowerCase().trim();return r&&(e=e.filter(function(a){return a.label.toLowerCase().indexOf(r)!==-1})),e}onUpdate(){let e=this.getFilteredOptions().length;this.focusLocation&&this.focusLocation.type==="filter"&&e!==this.lastResultCount&&Tp(this.controller.s("shared-calculator-text-search-results",{count:new qn(e)})),this.lastResultCount=e}};function Mb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Nb="ID_",ka=function(){function t(){Mb(this,t),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return t.prototype.register=function(r){var a=Nb+this._lastID++;return this._callbacks[a]=r,a},t.prototype.unregister=function(r){this._callbacks[r]||va(!1,"Dispatcher.unregister(...): `%s` does not map to a registered callback.",r),delete this._callbacks[r]},t.prototype.waitFor=function(r){this._isDispatching||va(!1,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var a=0;a<r.length;a++){var s=r[a];if(this._isPending[s]){this._isHandled[s]||va(!1,"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",s);continue}this._callbacks[s]||va(!1,"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",s),this._invokeCallback(s)}},t.prototype.dispatch=function(r){this._isDispatching&&va(!1,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this._startDispatching(r);try{for(var a in this._callbacks)this._isPending[a]||this._invokeCallback(a)}finally{this._stopDispatching()}},t.prototype.isDispatching=function(){return this._isDispatching},t.prototype._invokeCallback=function(r){this._isPending[r]=!0,this._callbacks[r](this._pendingPayload),this._isHandled[r]=!0},t.prototype._startDispatching=function(r){for(var a in this._callbacks)this._isPending[a]=!1,this._isHandled[a]=!1;this._pendingPayload=r,this._isDispatching=!0},t.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},t}();function va(t,e,r,a,s,d,g,m){if(e===void 0)throw new Error("invariant requires an error message argument");if(!t){var p;if(e===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var b=[r,a,s,d,g,m],k=0;p=new Error(e.replace(/%s/g,function(){return b[k++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}}Eo();function mc(){return sr("/account/logout_xhr")}function Gp(t){let e=function(){return sr("/account/login_xhr",t)};return mc().then(e,e).then(()=>sn({lang:t.lang}))}function sn(t){return ia("/account/user_info",t)}async function Vp(){let t=await ia("/account/user_info?no401");if(t.loggedIn===!1)throw t;return t}function Ap(t){return sr("/account/check_account_status",t)}function Fp(t){return sr("/account/register_xhr",t).then(()=>sn({lang:t.lang}))}function Lp(t){t===void 0&&(t={});let e="?source="+(t.fromUI||"");return t.teacher&&(e+="&teacher=true"),oa()+"/drive_api/calculator/login"+e}function Op(t){t===void 0&&(t={});let e="?source="+(t.fromUI||"");return t.teacher&&(e+="&teacher=true"),oa()+"/apple_api/calculator/login"+e}function Ip(t){return sr("/account/change_name",t).then(()=>sn({lang:t.lang}))}function Mp(t){return sr("/account/change_name_detail",{lang:t.lang,userProvidedName:{given:t.given,family:t.family}}).then(()=>sn({lang:t.lang}))}function Np(t){return sr("/account/recover_xhr",t)}function qp(t){return ia("/account/initiate_delete_account",t)}function _p(t){return ia("/account/initiate_email_change",t)}function Rp(t){return sr("/account/set_email",t).then(()=>sn({lang:t.lang}))}function Pp(t){return Dd("/account/update_feature_flags",t).then(()=>sn({lang:t.lang}))}function Bp(t){return sr("/account/set_privacy_consent",t).then(()=>sn({lang:t.lang}))}function Kp(t,e){t.closed?e.askServerIfLoggedIn():setTimeout(()=>{Kp(t,e)},1e3)}function Up(t){var e=window.open(t.url,"login_window","width=650,height=530,resizable,scrollbars");e?Kp(e,t.userController):alert(t.blockedMessage)}function Wp(t,e){window.userController=t,t.observeEvent("googleLogin",function(r,a){Up({url:Lp(a),userController:t,blockedMessage:e("account-shell-text-login-window-blocked-google")})}),t.observeEvent("appleLogin",function(r,a){Up({url:Op(a),userController:t,blockedMessage:e("account-shell-text-login-window-blocked-apple")})})}To();var yi=class extends yn{constructor(){super();this.loggedIn=!1;this.logoutFailed=!1;this.loggingOut=!1;this.consentingToPrivacy=!1;this.privacyConsentFailed=!1;this.userId="";this.name="";this.email="";this.teacher=!1;this.featureFlags=[];this.verificationStatus="";this.subscriptions=[];this.privacyConsent=null;Cd(()=>this.logout())}desmosLogin(r){return Gp(r).then(this.completeLogin.bind(this))}googleLogin(r){this.triggerEvent("googleLogin",r)}appleLogin(r){this.triggerEvent("appleLogin",r)}askServerIfLoggedIn(){return Vp().then(this.completeLogin.bind(this),this.logout.bind(this))}driveCallback(){return this.askServerIfLoggedIn()}createAccount(r){let a=R(A({},r),{name:r.userProvidedName.given});return a.teacher===!1&&delete a.teacher,Fp(a).then(this.completeLogin.bind(this))}checkPendingDeletion(r){return Ap(r)}isTeacher(){return!!this.teacher}setNameLegacy(r){return Ip(r).then(a=>{this.name=a.name||"",this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)})}setNameDetail(r){return Mp(r).then(a=>{this.name=a.name||"",this.nameDetail=a.nameDetail,this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)})}recoverPassword(r){return Np(r)}completeLogin(r){this.loggedIn=!0,this.userId=r.userId||"",this.name=r.name||"",this.nameDetail=r.nameDetail,this.email=r.email||"",this.featureFlags=r.featureFlags||[],this.subscriptions=r.subscriptions||[],this.verificationStatus=r.verificationStatus||"",this.privacyConsent=r.privacyConsent,this.teacher=!!r.isTeacher,this.triggerEvent("loginChanged",void 0),this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)}async logout(){this.loggingOut=!0,this.triggerEvent("logout",void 0),this.triggerEvent("triggerRender",void 0);try{await mc(),this.completeLogout()}catch(r){this._onLogoutFailure()}finally{this.loggingOut=!1,this.triggerEvent("triggerRender",void 0)}}completeLogout(){this.loggedIn=!1,this.logoutFailed=!1,this.userId="",this.email="",this.name="",this.subscriptions=[],this.featureFlags=[],this.verificationStatus="",this.privacyConsent=null,this.teacher=!1,this.triggerEvent("loginChanged",void 0),this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)}_onLogoutFailure(){this.logoutFailed=!0,this.triggerEvent("triggerRender",void 0),setTimeout(()=>{this.logoutFailed=!1,this.triggerEvent("triggerRender",void 0)},2e3)}initiateAccountDeletion(r){return qp(r)}getEmailChangeToken(){return Gu(location.search,"changeToken")}initiateEmailChange(r){return _p(r)}setEmail(r){return Rp(r).then(()=>{this.email=r.newEmail||"",this.verificationStatus="VERIFYING",this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)})}async setPrivacyConsent(r){this.consentingToPrivacy=!0,this.triggerEvent("triggerRender",void 0);try{let a=await Bp(r);this.completePrivacyConsent(a)}catch(a){this.onPrivacyConsentFailure()}finally{this.consentingToPrivacy=!1,this.triggerEvent("triggerRender",void 0)}}completePrivacyConsent(r){this.privacyConsent=r.privacyConsent,this.triggerEvent("userUpdated",void 0),this.triggerEvent("triggerRender",void 0)}onPrivacyConsentFailure(){this.privacyConsentFailed=!0,this.triggerEvent("triggerRender",void 0),setTimeout(()=>{this.privacyConsentFailed=!1,this.triggerEvent("triggerRender",void 0)},2e3)}updateFeatureFlags(r){return Pp(r).then(a=>{this.featureFlags=a.featureFlags,this.triggerEvent("userUpdated",void 0)})}getFeatureFlags(){return this.featureFlags}hasFeatureFlag(r){return this.featureFlags.some(a=>a===r)}didPrivacyConsentFail(){return!!this.privacyConsentFailed}isConsentingToPrivacy(){return!!this.consentingToPrivacy}isLoggedIn(){return!!this.loggedIn}isLoggingOut(){return!!this.loggingOut}didLogoutFail(){return!!this.logoutFailed}getEmail(){return this.email}getFirstName(){return _b(this.name)}getFullName(){return this.name}getNameDetail(){return this.nameDetail||{given:this.name,source:"legacy"}}getUserId(){return this.userId}getSubscriptions(){return this.subscriptions}getVerificationStatus(){return this.verificationStatus}hasConsentedToCollection(){return!!this.privacyConsent}getUserAsJSON(){if(this.isLoggedIn())return{email:this.email,name:this.name,verificationStatus:this.verificationStatus,subscriptions:this.subscriptions,privacyConsent:this.privacyConsent}}};function _b(t){if(!t)return"";if(t.match(/[\d@_&\.\']/))return t;var e=t.split(" ");return e[0].length>=3?e[0]:t}To();function Rb(t){var r;let e=(r=t==null?void 0:t.responseJSON)==null?void 0:r.errors;return Array.isArray(e)?e:[{message:"Unexpected server error. Try again, or e-mail calculator@desmos.com."}]}function zp(t){return Rb(t).map(e=>e.message)}var xa=class{constructor(e){this._queuedCallbacks=[];this.s=fa(()=>this.language);this.dispatch=e=>{Do("dispatch::frontpage-controller",{type:e.type}),this.dispatcher.dispatch(e);let r;for(;r=this._queuedCallbacks.shift();)r()};this.modal="none",this.dispatcher=new ka,this.language=Qs(),this.maintenance=!1,this.setupUserController(),this.showLanguagePicker=e.showLanguagePicker,this.limitSignupRole=e.limitSignupRole,this.showNotice=e.showNotice,e.allowAllLanguages||Ys(),this.dispatcher.register(r=>{if(this.enqueueEvent("render"),r.type!=="render")switch(r.type){case"close-modal":this.modal="none",this.modalDevice=void 0;break;case"show-modal":this.modal=r.modal,this.modalDevice=r.device,this.modalLocation=r.location;break;case"set-language":this.language=r.language,this.updateUrlForLang(this.language),this.enqueueEvent("changeLang");break;default:return r}})}raw(e,r){return ma(e,r)}hasTranslation(e){return js(e,this.language)}runAfterDispatch(e){this._queuedCallbacks.push(e)}logJSON(e,r){_s(e,r)}enqueueEvent(e){this.runAfterDispatch(()=>{this.onEventEmitted&&this.onEventEmitted(e)})}getShowLanguagePicker(){return this.showLanguagePicker}getShowNotice(){return!this.maintenance&&this.showNotice}getLimitedSignupRole(){return this.limitSignupRole}setupUserController(){this.userController=new yi;let e;try{let r=document.body.getAttribute("data-user-info");r&&(e=JSON.parse(r))}catch(r){}e&&e.user&&this.userController.completeLogin(e.user),e&&(this.maintenance=!!e.maintenance),Fo({userId:this.userController.getUserId(),desmosLang:this.getLanguage()}),this.userController.observeEvent("triggerRender",()=>{this.dispatch({type:"render"})}),Wp(this.userController,this.s.bind(this))}updateUrlForLang(e){if(!(window.history&&history.replaceState))return;let{origin:r,pathname:a,search:s,hash:d}=location,g=So(s,"lang",e),m=`${r}${a}${g}${d}`;history.replaceState(null,"",m)}getLanguage(){return this.language}getModal(){return this.modal}getModalLocation(){return this.modalLocation}wasModalOpenedWithKeyboard(){return this.modalDevice==="keyboard"}getModalStartingError(){return""}getSomethingWentWrongText(){return this.s("frontpage-error-something-went-wrong-try-again-later")}allowSignInWithApple(){return!0}parseJSONErrors(e){return zp(e)}isMaintenanceMode(){return this.maintenance}getDispatcher(){return this.dispatcher}shouldShowTopBanner(){return!1}};var Fe={images:!1,folders:!1,notes:!1,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,branding:!1,border:!1,plotSingleVariableImplicitEquations:!1,decimalToFraction:!1,links:!1,distributions:!1},rr=R(A({},Fe),{decimalToFraction:!0,distributions:!0}),At={qwertyKeyboard:!1,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1,links:!1,brailleExpressionDownload:!1},Sr=R(A({},At),{decimalToFraction:!0}),Me={brailleExpressionDownload:!1,links:!1},Da=A({},Me),Pb=R(A({},rr),{plotImplicits:!1,plotInequalities:!1,geometryComputationFunctions:!1,sliders:!1,zoomFit:!1,qwertyKeyboard:!0}),Bb=R(A({},Sr),{qwertyKeyboard:!0}),$b=Da,vi=[{svgid:1,uid:"acap-summative",name:"Alabama",code:"AL",usesDesmos:!0,stateTestName:"ACAP Summative",stateTestWebsite:"https://www.alabamaachieves.org/assessment/acap/",scientificGradesKey:"practice-label-states-al-scientific-grades",scientificConfig:R(A({},Sr),{qwertyKeyboard:!0}),fourFunctionGradesKey:"practice-label-states-al-four-function-grades",fourFunctionConfig:R(A({},Da),{decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]})},{svgid:2,uid:"ak-star",name:"Alaska",code:"AK",usesDesmos:!0,stateTestName:"AK STAR",stateTestWebsite:"https://education.alaska.gov/assessments/akstar",graphingGradesKey:"practice-label-states-ak-graphing-grades",graphingConfig:R(A({},Fe),{plotSingleVariableImplicitEquations:!0,decimalToFraction:!0}),scientificGradesKey:"practice-label-states-ak-scientific-grades",fourFunctionGradesKey:"practice-label-states-ak-four-function-grades"},{svgid:4,name:"Arizona",code:"AZ",usesDesmos:!0,uid:"aasa",stateTestName:"AASA, AzSCI",stateTestWebsite:"https://www.azed.gov/assessment/",fourFunctionGradesKey:"practice-label-states-az-four-function-grades",scientificGradesKey:"practice-label-states-az-scientific-grades",graphingGradesKey:"practice-label-states-az-graphing-grades",graphingConfig:R(A({},Fe),{restrictedFunctions:!1,decimalToFraction:!0,qwertyKeyboard:!0})},{svgid:5,name:"Arkansas",code:"AK"},{svgid:6,name:"California",code:"CA",usesDesmos:!0,uid:"caaspp",stateTestName:"CAASPP",stateTestWebsite:"https://www.caaspp.org/",fourFunctionGradesKey:"practice-label-states-ca-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-ca-scientific-grades",graphingGradesKey:"practice-label-states-ca-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{name:"College Board",code:"CB-Digital-AP",urlCode:"cb-digital-ap",uid:"cb-digital-ap",stateTestName:"Digital Pre-AP",usesDesmos:!0,graphingConfig:{folders:!1,images:!1,notes:!1,qwertyKeyboard:!1,degreeMode:!0,plotImplicits:!1,forceLogModeRegressions:!0}},{name:"College Board",code:"CB-Digital-SAT",urlCode:"cb-digital-sat",uid:"cb-digital-sat",stateTestName:"Digital PSAT, NMSQT, and SAT",usesDesmos:!0,graphingConfig:{folders:!1,images:!1,notes:!1}},{svgid:8,name:"Colorado",code:"CO"},{svgid:9,name:"Connecticut",code:"CT",usesDesmos:!0,uid:"csde",stateTestName:"Connecticut Assessments",stateTestWebsite:"https://portal.ct.gov/SDE/Student-Assessment/Main-Assessment/Student-Assessment#:~:text=The%20Connecticut%20Summative%20Assessment%20system,for%20students%20in%20Grade%2011",fourFunctionGradesKey:"practice-label-states-ct-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-ct-scientific-grades",graphingGradesKey:"practice-label-states-ct-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,decimalToFraction:!0})},{svgid:10,name:"Delaware",code:"DE",usesDesmos:!0,uid:"dessa",stateTestName:"DeSSA",stateTestWebsite:"https://www.doe.k12.de.us/domain/111",fourFunctionGradesKey:"practice-label-states-de-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-de-scientific-grades",graphingGradesKey:"practice-label-states-de-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:12,name:"Florida",code:"FL",usesDesmos:!0,uid:"fsa",stateTestName:"FSA",stateTestWebsite:"https://fsassessments.org/",scientificGradesKey:"practice-label-states-fl-scientific-grades",scientificConfig:{links:!1,brailleExpressionDownload:!1,singleExpression:!0,restrictedEditing:!0,degreeMode:!0,decimalToFraction:!1}},{svgid:13,name:"Georgia",code:"GA",usesDesmos:!0,uid:"georgia-milestones",stateTestName:"Georgia Milestones Assessment System",stateTestWebsite:"https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Assessment/Pages/Georgia-Milestones-Assessment-System.aspx",fourFunctionGradesKey:"practice-label-states-ga-four-function-grades",scientificGradesKey:"practice-label-states-ga-scientific-grades",scientificConfig:Sr,graphingGradesKey:"practice-label-states-ga-graphing-grades",graphingConfig:R(A({},rr),{distributions:!1,plotSingleVariableImplicitEquations:!0,sliders:!1})},{svgid:15,name:"Hawaii",code:"HI",usesDesmos:!0,uid:"hsap",stateTestName:"HSAP",stateTestWebsite:"https://alohahsap.org/",fourFunctionGradesKey:"practice-label-states-hi-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-hi-scientific-grades",graphingGradesKey:"practice-label-states-hi-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:16,name:"Idaho",code:"ID",usesDesmos:!0,uid:"isat",stateTestName:"ISAT",stateTestWebsite:"https://www.sde.idaho.gov/assessment/",fourFunctionGradesKey:"practice-label-states-id-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-id-scientific-grades",graphingGradesKey:"practice-label-states-id-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:17,name:"Illinois",code:"IL"},{svgid:18,name:"Indiana",code:"IN",usesDesmos:!0,uid:"indiana-assessments",stateTestName:"Indiana Assessments",stateTestWebsite:"https://www.in.gov/doe/students/assessment/",fourFunctionGradesKey:"practice-label-states-in-four-function-grades",scientificGradesKey:"practice-label-states-in-scientific-grades",graphingGradesKey:"practice-label-states-in-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1,decimalToFraction:!0})},{name:"International Baccalaureate",code:"IBMYP",urlCode:"ibmyp",uid:"ib-myp",assessmentHash:"ib",stateTestName:"IB MYP",usesDesmos:!0,scientificConfig:{functionDefinition:!1,qwertyKeyboard:!1,decimalToFraction:!1,degreeMode:!0,brailleExpressionDownload:!1,typingAsteriskWritesTimesSymbol:!0,replaceCommaWith10Exp:!0,replaceRoundWithReciprocal:!0}},{svgid:19,name:"Iowa",code:"IA",usesDesmos:!0,uid:"isasp",stateTestName:"ISASP",stateTestWebsite:"https://iowa.pearsonaccessnext.com/test-prep/",fourFunctionGradesKey:"practice-label-states-ia-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","percent"]}),scientificGradesKey:"practice-label-states-ia-scientific-grades",scientificConfig:{links:!1,brailleExpressionDownload:!1,qwertyKeyboard:!0,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:20,name:"Kansas",code:"KA"},{svgid:21,name:"Kentucky",code:"KY",usesDesmos:!0,uid:"kentucky-assessments",stateTestName:"Kentucky Assessments",stateTestWebsite:"https://education.ky.gov/AA/Assessments/Pages/default.aspx",fourFunctionGradesKey:"practice-label-states-ky-four-function-grades",scientificGradesKey:"practice-label-states-ky-scientific-grades",graphingGradesKey:"practice-label-states-ky-graphing-grades",graphingConfig:{images:!1,folders:!1,notes:!1,qwertyKeyboard:!1,restrictedFunctions:!0,degreeMode:!0,branding:!1,border:!1,plotSingleVariableImplicitEquations:!0,distributions:!0,decimalToFraction:!0,forceEnableGeometryFunctions:!0}},{svgid:22,name:"Louisiana",code:"LA",usesDesmos:!0,uid:"leap",stateTestName:"LEAP 2025",stateTestWebsite:"https://www.louisianabelieves.com/measuringresults/assessments-for-high-schools",graphingGradesKey:"practice-label-states-la-graphing-grades",graphingConfig:R(A({},Fe),{decimalToFraction:!0,sliders:!1,actions:!1})},{svgid:23,name:"Maine",code:"ME"},{svgid:24,name:"Maryland",code:"MD",usesDesmos:!0,uid:"mcap",stateTestName:"MCAP",stateTestWebsite:"https://marylandpublicschools.org/about/Pages/DAAIT/Assessment/index.aspx",fourFunctionGradesKey:"practice-label-states-md-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","percent"]}),scientificGradesKey:"practice-label-states-md-scientific-grades",scientificConfig:R(A({},At),{qwertyKeyboard:!0,degreeMode:!1}),graphingGradesKey:"practice-label-states-md-graphing-grades",graphingConfig:R(A({},rr),{qwertyKeyboard:!0,forceEnableGeometryFunctions:!0})},{svgid:25,name:"Massachusetts",code:"MA",usesDesmos:!0,uid:"mcas",stateTestName:"MCAS",stateTestWebsite:"https://www.doe.mass.edu/mcas/",scientificGradesKey:"practice-label-states-ma-scientific-grades",scientificConfig:R(A({},At),{qwertyKeyboard:!0,degreeMode:!1}),graphingGradesKey:"practice-label-states-ma-graphing-grades",graphingConfig:R(A({},rr),{qwertyKeyboard:!0,forceEnableGeometryFunctions:!0})},{svgid:26,name:"Michigan",code:"MI",usesDesmos:!0,uid:"m-step",stateTestName:"M-STEP",stateTestWebsite:"https://www.michigan.gov/mde/0,4615,7-140-22709_70117---,00.html",fourFunctionGradesKey:"practice-label-states-mi-four-function-grades",fourFunctionConfig:R(A({},Me),{brailleControls:!1,additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-mi-scientific-grades",scientificConfig:R(A({},At),{qwertyKeyboard:!0,brailleControls:!1})},{svgid:27,name:"Minnesotta",code:"MN"},{svgid:28,name:"Mississippi",code:"MS",usesDesmos:!0,uid:"maap",stateTestName:"MAAP",stateTestWebsite:"https://www.mdek12.org/OSA/MAAP",graphingGradesKey:"practice-label-states-ms-graphing-grades",graphingConfig:R(A({},Fe),{plotSingleVariableImplicitEquations:!0,decimalToFraction:!0,substitutions:!1})},{svgid:29,name:"Missouri",code:"MO",usesDesmos:!0,uid:"missouri-map",stateTestName:"MAP and EOC",stateTestWebsite:"https://dese.mo.gov/college-career-readiness/assessment",graphingGradesKey:"practice-label-states-mo-graphing-grades",graphingConfig:R(A({},rr),{plotSingleVariableImplicitEquations:!0}),scientificGradesKey:"practice-label-states-mo-scientific-grades",scientificConfig:R(A({},Sr),{qwertyKeyboard:!0}),fourFunctionGradesKey:"practice-label-states-mo-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]})},{svgid:30,name:"Montana",code:"MT",usesDesmos:!0,uid:"montcas",stateTestName:"MontCAS",stateTestWebsite:"https://opi.mt.gov/Leadership/Assessment-Accountability/MontCAS/Required-Assessments#8288811671-mathematics-and-readinglanguage-arts-required-testing-programs",fourFunctionGradesKey:"practice-label-states-mt-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-mt-scientific-grades",graphingGradesKey:"practice-label-states-mt-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:31,name:"Nebraska",code:"NE",usesDesmos:!0,uid:"nscas",stateTestName:"NSCAS",stateTestWebsite:"https://community.nwea.org/community/nebraska",fourFunctionGradesKey:"practice-label-states-ne-four-function-grades",fourFunctionConfig:{},scientificGradesKey:"practice-label-states-ne-scientific-grades",scientificConfig:{}},{svgid:32,name:"Nevada",code:"NV",usesDesmos:!0,uid:"nevada-assessments",stateTestName:"Nevada State Assessments",stateTestWebsite:"https://www.doe.nv.gov/Assessments/",fourFunctionGradesKey:"practice-label-states-nv-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-nv-scientific-grades"},{svgid:33,name:"New Hampshire",code:"NH",usesDesmos:!0,uid:"new-hampshire-assessment",stateTestName:"New Hampshire Statewide Assessment System",stateTestWebsite:"https://www.education.nh.gov/who-we-are/division-of-learner-support/bureau-of-instructional-support/office-of-assessment/statewide-assessement-system",scientificGradesKey:"practice-label-states-nh-scientific-grades",scientificConfig:R(A({},At),{decimalToFraction:!0}),graphingGradesKey:"practice-label-states-nh-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1,decimalToFraction:!0})},{svgid:34,name:"New Jersey",code:"NJ"},{svgid:35,name:"New Mexico",code:"NM"},{svgid:36,name:"New York",code:"NY",usesDesmos:!0,uid:"ny-regents",stateTestName:"New York Regents",stateTestWebsite:"https://www.nysedregents.org/",graphingGradesKey:"practice-label-states-ny-graphing-grades",graphingConfig:rr},{svgid:37,name:"North Carolina",code:"NC",usesDesmos:!0,uid:"nc-test",stateTestName:"NCTest",stateTestWebsite:"https://www.dpi.nc.gov/districts-schools/testing-and-school-accountability/state-tests",fourFunctionGradesKey:"practice-label-states-nc-four-function-grades",scientificGradesKey:"practice-label-states-nc-scientific-grades",scientificConfig:Sr,graphingGradesKey:"practice-label-states-nc-graphing-grades",graphingConfig:R(A({},rr),{forceLogModeRegressions:!0,actions:!1}),fourFunctionConfig:R(A({},Me),{decimalToFraction:!0,additionalFunctions:["sqrt","fraction"]})},{svgid:38,name:"North Dakota",code:"ND",usesDesmos:!0,uid:"ndsa",stateTestName:"NDSA",stateTestWebsite:"https://ndsa.portal.cambiumast.com/index.html",fourFunctionGradesKey:"practice-label-states-nd-four-function-grades",scientificGradesKey:"practice-label-states-nd-scientific-grades",scientificConfig:R(A({},At),{decimalToFraction:!0}),graphingGradesKey:"practice-label-states-nd-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1,decimalToFraction:!0})},{name:"NWEA",code:"MAP",uid:"map-growth",assessmentHash:"nwea",stateTestName:"MAP Growth",urlCode:"map",usesDesmos:!0,scientificConfig:R(A({},At),{functionDefinition:!0}),fourFunctionConfig:Me},{svgid:39,name:"Ohio",code:"OH",usesDesmos:!0,uid:"ost",stateTestName:"OST",stateTestWebsite:"https://oh.portal.cambiumast.com/",scientificGradesKey:"practice-label-states-oh-scientific-grades",scientificConfig:R(A({},At),{decimalToFraction:!0}),graphingGradesKey:"practice-label-states-oh-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1,decimalToFraction:!0})},{svgid:40,name:"Oklahoma",code:"OK"},{svgid:41,name:"Oregon",code:"OR",usesDesmos:!0,stateTestName:"OSAS",uid:"osas",stateTestWebsite:"https://osasportal.org",fourFunctionGradesKey:"practice-label-states-or-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-or-scientific-grades",graphingGradesKey:"practice-label-states-or-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:42,name:"Pennsylvania",code:"PA",usesDesmos:!0,stateTestName:"PSSA, CDT, and Keystone",uid:"pssa",stateTestWebsite:"https://www.education.pa.gov/K-12/Assessment%20and%20Accountability/Pages/default.aspx",fourFunctionGradesKey:"practice-label-states-pa-four-function-grades",scientificGradesKey:"practice-label-states-pa-scientific-grades",scientificConfig:R(A({},Sr),{functionDefinition:!1,qwertyKeyboard:!0}),graphingGradesKey:"practice-label-states-pa-graphing-grades",graphingConfig:R(A({},rr),{plotImplicits:!1,qwertyKeyboard:!0,sliders:!1,actions:!1})},{svgid:44,name:"Rhode Island",code:"RI",usesDesmos:!0,uid:"ricas",stateTestName:"RICAS and NGSA",stateTestWebsite:"https://www.ride.ri.gov/InstructionAssessment/Assessment.aspx",graphingGradesKey:"practice-label-states-ri-graphing-grades",graphingConfig:R(A({},Fe),{forceEnableGeometryFunctions:!0})},{svgid:45,name:"South Carolina",code:"SC",usesDesmos:!0,uid:"sc",assessmentInfo:[["SC Ready",""],["EOCEP",""],["Alternate Assessment",""]]},{svgid:46,name:"South Dakota",code:"SD",usesDesmos:!0,uid:"south-dakota-assessment",stateTestName:"South Dakota Assessments",stateTestWebsite:"https://doe.sd.gov/assessment/",fourFunctionGradesKey:"practice-label-states-sd-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-sd-scientific-grades",graphingGradesKey:"practice-label-states-sd-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:47,name:"Tennessee",code:"TN",usesDesmos:!0,uid:"tcap",stateTestName:"TCAP",stateTestWebsite:"https://www.livebinders.com/b/2426642",scientificGradesKey:"practice-label-states-tn-scientific-grades",scientificConfig:R(A({},Sr),{qwertyKeyboard:!0}),graphingGradesKey:"practice-label-states-tn-graphing-grades",graphingConfig:R(A({},rr),{qwertyKeyboard:!0,forceEnableGeometryFunctions:!0})},{svgid:48,name:"Texas",code:"TX",usesDesmos:!0,uid:"staar",stateTestName:"STAAR",fourFunctionGradesKey:"practice-label-states-tx-four-function-grades",scientificGradesKey:"practice-label-states-tx-scientific-grades",graphingGradesKey:"practice-label-states-tx-graphing-grades",graphingConfig:Pb,scientificConfig:Bb,fourFunctionConfig:$b,stateTestWebsite:"https://tea.texas.gov/Student_Testing_and_Accountability/Testing/State_of_Texas_Assessments_of_Academic_Readiness"},{svgid:49,name:"Utah",code:"UT",usesDesmos:!0,uid:"utah",assessmentInfo:[["Aspire Plus","http://utah.pearsonaccessnext.com/"],["Core Standards Benchmarks","https://www.uen.org/core/math/"]],graphingGradesKey:"practice-label-states-ut-graphing-grades",graphingConfig:{images:!1,folders:!1,notes:!1,qwertyKeyboard:!0,restrictedFunctions:!0,degreeMode:!0,branding:!1,links:!1,border:!1,decimalToFraction:!0,distributions:!0,forceEnableGeometryFunctions:!0},scientificGradesKey:"practice-label-states-ut-scientific-grades",scientificConfig:{links:!1,brailleExpressionDownload:!1,qwertyKeyboard:!0,functionDefinition:!1,degreeMode:!0,decimalToFraction:!1}},{svgid:50,name:"Vermont",code:"VT",usesDesmos:!0,uid:"vermont-cas",stateTestName:"CAS",stateTestWebsite:"https://vt.portal.cambiumast.com/",fourFunctionGradesKey:"practice-label-states-vt-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-vt-scientific-grades",graphingGradesKey:"practice-label-states-vt-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1,actions:!1})},{svgid:51,name:"Virginia",code:"VA",usesDesmos:!0,uid:"va-sol",stateTestName:"Standards of Learning",stateTestWebsite:"https://www.doe.virginia.gov/testing/index.shtml",fourFunctionGradesKey:"practice-label-states-va-four-function-grades",scientificGradesKey:"practice-label-states-va-scientific-grades",graphingGradesKey:"practice-label-states-va-graphing-grades",graphingConfig:{images:!1,folders:!1,links:!1,notes:!1,restrictedFunctions:!0,degreeMode:!0,clearIntoDegreeMode:!0,branding:!1,border:!1,decimalToFraction:!0,distributions:!0,forceEnableGeometryFunctions:!0,capExpressionSize:!0},scientificConfig:{functionDefinition:!1,decimalToFraction:!1,links:!1,brailleExpressionDownload:!1,capExpressionSize:!0},fourFunctionConfig:R(A({},Da),{capExpressionSize:!0})},{svgid:53,name:"Washington",code:"WA",usesDesmos:!0,uid:"wcap",stateTestName:"WCAP Test",stateTestWebsite:"https://wa.portal.cambiumast.com/",fourFunctionGradesKey:"practice-label-states-wa-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-wa-scientific-grades",graphingGradesKey:"practice-label-states-wa-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{svgid:54,name:"West Virginia",code:"WV",uid:"west-virginia-assessment",usesDesmos:!0,stateTestName:"West Virginia General Summative Assessments",stateTestWebsite:"https://wvde.us/assessment/west-virginia-general-summative-assessment-3-8/ ",fourFunctionGradesKey:"practice-label-states-wv-four-function-grades",scientificGradesKey:"practice-label-states-wv-scientific-grades",scientificConfig:R(A({},At),{decimalToFraction:!0}),graphingGradesKey:"practice-label-states-wv-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!1})},{svgid:55,name:"Wisconsin",code:"WI"},{svgid:56,name:"Wyoming",code:"WY",usesDesmos:!0,uid:"wy-topp",stateTestName:"WY-TOPP",stateTestWebsite:"https://wyoassessment.org/",fourFunctionGradesKey:"practice-label-states-wy-four-function-grades",scientificGradesKey:"practice-label-states-wy-scientific-grades",scientificConfig:R(A({},At),{decimalToFraction:!0}),graphingGradesKey:"practice-label-states-wy-graphing-grades",graphingConfig:R(A({},Me),{zoomFit:!1,decimalToFraction:!0})},{svgid:78,name:"U.S. Virgin Islands",code:"VI",usesDesmos:!0,uid:"usvi",stateTestName:"Smarter Balanced Summative",stateTestWebsite:"https://vide.portal.cambiumast.com/",fourFunctionGradesKey:"practice-label-states-vi-four-function-grades",fourFunctionConfig:R(A({},Me),{additionalFunctions:["sqrt","fraction"]}),scientificGradesKey:"practice-label-states-vi-scientific-grades",graphingGradesKey:"practice-label-states-vi-graphing-grades",graphingConfig:R(A({},Fe),{zoomFit:!0,actions:!1})},{name:"Quebec",code:"QUEBEC",urlCode:"quebec",usesDesmos:!0,uid:"quebec",assessmentHash:"quebec",stateTestName:"Uniform Examinations",graphingGradesKey:"practice-label-states-quebec-uniform-examinations",graphingConfig:{actions:!1,images:!1,folders:!1,notes:!1,plotImplicits:!1,restrictedFunctions:!0,sliders:!1}}];var Ca={fourFunction:{gradesKey:"practice-label-states-sc-std-four-function-grades",config:{brailleExpressionDownload:!1,links:!1,decimalToFraction:!0}},scientific:{gradesKey:"practice-label-states-sc-std-scientific-grades",config:{links:!1,brailleExpressionDownload:!1}},graphing:{gradesKey:"practice-label-states-sc-std-graphing-grades",config:{branding:!1,border:!1,links:!1,sliders:!1,actions:!1,substitutions:!1,forceLogModeRegressions:!0}}},bi={fourFunction:{gradesKey:"practice-label-states-sc-alt-four-function-grades",config:Me},scientific:{gradesKey:"practice-label-states-sc-alt-scientific-grades",config:At}};var wi={default:{graphing:Fe,scientific:At,fourFunction:Me,testName:""}};for(let t of vi){t.graphingGradesKey&&!t.graphingConfig&&(t.graphingConfig=Fe),t.scientificGradesKey&&!t.scientificConfig&&(t.scientificConfig=At),t.fourFunctionGradesKey&&!t.fourFunctionConfig&&(t.fourFunctionConfig=Me);let e=t.uid;if(e){if(wi[e])throw new Error("duplicate state uid: "+e);wi[e]={graphing:t.graphingConfig,scientific:t.scientificConfig,fourFunction:t.fourFunctionConfig,testName:t.stateTestName?`${t.name} (${t.stateTestName})`:t.name}}}wi["sc-alternate"]={fourFunction:bi.fourFunction.config,scientific:bi.scientific.config,testName:"South Carolina (Alternate Assessments)"};wi["sc-standard"]={fourFunction:Ca.fourFunction.config,scientific:Ca.scientific.config,graphing:Ca.graphing.config,testName:"South Carolina (Standard Assessments)"};function Hp(t){let e=vi.filter(r=>r.code===t);if(e.length>0)return e[0]}var ki=[],Ea={};ki.push("default");Ea.default={id:"default",name:"Desmos Default Calculator",options:{graphing:rr,scientific:Sr,fourFunction:Da}};for(bt of vi)if(bt.code!=="SC"&&bt.usesDesmos){ki.push(bt.code);let t;bt.assessmentInfo&&bt.assessmentInfo.length?t=bt.assessmentInfo.map(([e,r])=>e).join(" / "):t=bt.stateTestName,Ea[bt.code]={id:bt.code,name:bt.name+" ("+t+")",options:{graphing:bt.graphingConfig,fourFunction:bt.fourFunctionConfig,scientific:bt.scientificConfig}}}var bt,yc="SCS",bc="SCA";ki.push(yc,bc);var fc=Ca,Yp=bi;Ea[yc]={id:yc,name:"South Carolina (Standard Assessments)",options:{fourFunction:fc.fourFunction.config,scientific:fc.scientific.config,graphing:fc.graphing.config}};Ea[bc]={id:bc,name:"South Carolina (Alternate Assessments)",options:{graphing:void 0,fourFunction:Yp.fourFunction.config,scientific:Yp.scientific.config}};function jp(){return ki}function cn(t){return Ea[t]}function wc(t,e){let r,a="",s=Hp(t);switch(e){case"graphing":r=s?s.graphingGradesKey:"",a="Graphing Calculator";break;case"scientific":r=s?s.scientificGradesKey:"",a="Scientific Calculator";break;case"fourFunction":r=s?s.fourFunctionGradesKey:"",a="Four Function Calculator";break;default:return e}return{calcName:a,gradeInfo:r}}function Jp(t,e){if(!t)return!1;let r=cn(t);return r?!!r.options[e]:!1}st();var{If:et,Switch:Xp}=C.Components,vc=new xa({showLanguagePicker:!1,allowAllLanguages:!0,limitSignupRole:"student",showNotice:!1}),xi=class extends me{template(){return C.createElement("div",{class:C.const("dcg-start-practice-screen"),didMount:t=>this.rootElt=t},C.createElement("div",{class:C.const("dcg-header-container")},C.createElement(Xp,{key:this.bindFn(this.showHeader)},t=>t?C.createElement(pi,{controller:()=>vc,showPrintIcon:this.const(!1),hideAccounts:this.const(!0)}):C.createElement("div",{class:C.const("dcg-screen-title")},C.createElement(Rr,null))),C.createElement(et,{predicate:()=>this.controller.shouldShowStartingHelpIcon()},()=>C.createElement("div",{class:C.const("dcg-help-icon-container")},C.createElement("i",{class:C.const("dcg-icon-question-sign dcg-help-btn"),role:C.const("button"),tabindex:C.const("0"),"aria-label":C.const("Help"),onTap:()=>this.controller.dispatch({type:"toggle-help-menu"})})))),C.createElement("div",{class:()=>({"dcg-centered-margined-content":!0,"dcg-has-banner":vc.shouldShowTopBanner()})},C.createElement(Xp,{key:this.bindFn(this.getHeaderState)},t=>{switch(t){case"assessments-disabled":return;case"no-assessment-chosen":return C.createElement("div",{role:C.const("link"),tabindex:C.const("0"),class:C.const("dcg-centered-top-link dcg-custom-config-link"),onTap:this.bindFn(this.switchToChooseAssessment)},C.const("Choose Assessment"));case"picking-assessment":return C.createElement("div",{role:C.const("link"),tabindex:C.const("0"),class:C.const("dcg-back-link dcg-centered-top-link"),onTap:this.bindFn(this.clearAssessment)},C.const("Cancel"));case"picked-assessment":return C.createElement("div",{class:C.const("dcg-config-container")},C.createElement("div",{class:C.const("dcg-config-header")},C.createElement("span",{class:C.const("dcg-section-title dcg-choose-test"),role:C.const("heading"),"aria-level":C.const("2")},C.const("Assessment")),C.createElement("span",{role:C.const("link"),tabindex:C.const("0"),class:C.const("dcg-blue-link dcg-clear-config"),onTap:()=>this.clearAssessment()},C.const("Clear"))),C.createElement("div",{class:C.const("dcg-config-name")},()=>this.getSelectedTestName()))}}),C.createElement(et,{predicate:this.bindFn(this.showPickerUI)},()=>C.createElement("div",{class:C.const("dcg-dropdown-container dcg-testid-dropdown")},C.createElement(fi,{controller:()=>vc,renderWithInput:this.bindFn(this.renderPickerWithInput),onCancel:this.bindFn(this.clearAssessment),onChange:this.bindFn(this.onAssessmentChosen),options:()=>this.getTestIdOptions(),placeholder:()=>"Find your test"}))),C.createElement(et,{predicate:()=>!this.showPickerUI()},()=>C.createElement("div",{class:C.const("dcg-pick-calculator-container")},C.createElement("div",{class:C.const("dcg-section-title dcg-choose-calc"),role:C.const("heading"),"aria-level":C.const("3")},C.const("Choose a Calculator")),C.createElement("div",{class:C.const("dcg-calc-buttons-container"),role:C.const("radiogroup"),"aria-label":C.const("Calculator"),onKeydown:this.bindFn(this.handleRadioKeydown)},C.createElement(et,{predicate:()=>this.controller.isCalculatorAllowedOption("fourFunction")},()=>C.createElement("div",{class:()=>({"dcg-calc-option":!0,"dcg-calc-option-fourfunction":!0,"dcg-is-selected":this.isCalculatorSelected("fourFunction")}),role:C.const("radio"),tabindex:()=>this.isCalculatorSelected("fourFunction")?0:-1,"aria-checked":()=>this.isCalculatorSelected("fourFunction"),onTap:this.bindFn(this.onSelectFourFunction)},C.createElement("i",{class:C.const("dcg-icon-four-function"),"aria-hidden":C.const("true")}),C.createElement("span",{class:C.const("dcg-calculator-name")},()=>this.controller.getLabelForCalculatorType("fourFunction")))),C.createElement(et,{predicate:()=>this.controller.isCalculatorAllowedOption("scientific")},()=>C.createElement("div",{class:()=>({"dcg-calc-option":!0,"dcg-calc-option-scientific":!0,"dcg-is-selected":this.isCalculatorSelected("scientific")}),role:C.const("radio"),tabindex:()=>this.isCalculatorSelected("scientific")?0:-1,"aria-checked":()=>this.isCalculatorSelected("scientific"),onTap:this.bindFn(this.onSelectScientific)},C.createElement("i",{class:C.const("dcg-icon-scientific"),"aria-hidden":C.const("true")}),C.createElement("span",{class:C.const("dcg-calculator-name")},()=>this.controller.getLabelForCalculatorType("scientific")))),C.createElement(et,{predicate:()=>this.controller.isCalculatorAllowedOption("graphing")},()=>C.createElement("div",{class:()=>({"dcg-calc-option":!0,"dcg-calc-option-graphing":!0,"dcg-is-selected":this.isCalculatorSelected("graphing")}),role:C.const("radio"),tabindex:()=>this.isCalculatorSelected("graphing")?0:-1,"aria-checked":()=>this.isCalculatorSelected("graphing"),onTap:this.bindFn(this.onSelectGraphing)},C.createElement("i",{class:C.const("dcg-icon-graphing"),"aria-hidden":C.const("true")}),C.createElement("span",{class:C.const("dcg-calculator-name")},()=>this.controller.getLabelForCalculatorType("graphing"))))))),C.createElement(et,{predicate:()=>!!this.controller.getCustomBranding()},()=>C.createElement("div",{class:C.const("dcg-custom-branding")},()=>this.controller.getCustomBranding())),C.createElement(et,{predicate:()=>!this.showPickerUI()},()=>C.createElement("div",{class:C.const("dcg-continue-container")},C.createElement(et,{predicate:()=>!!this.controller.getSecuredByMessage()},()=>C.createElement("span",{class:C.const("dcg-secure-message")},C.createElement("i",{class:C.const("dcg-icon-desmos-badge"),"aria-hidden":C.const("true")}),()=>this.controller.getSecuredByMessage())),C.createElement(et,{predicate:()=>this.controller.shouldShowInternetWarning()},()=>C.createElement("span",{class:C.const("dcg-internet-warning")},C.const("Disable internet to use securely.\xA0"),C.createElement("a",{href:C.const("https://www.desmos.com/test-mode"),target:C.const("_blank"),class:C.const("dcg-security-link")},C.const("Learn More.")))),C.createElement(et,{predicate:()=>this.controller.shouldShowSecurityLink()},()=>C.createElement("a",{href:C.const("https://www.desmos.com/test-mode"),target:C.const("_blank"),class:C.const("dcg-gray-link dcg-security-link")},C.const("Learn how to use securely."))),C.createElement("div",{class:C.const("dcg-button-container")},C.createElement(et,{predicate:()=>this.controller.shouldShowStartPracticeButton()},()=>C.createElement("div",{class:()=>({"dcg-btn-secondary":this.controller.shouldShowStartTestButton(),"dcg-btn-primary":!this.controller.shouldShowStartTestButton()}),role:C.const("button"),tabindex:C.const("0"),onTap:()=>this.dispatchStartPractice()},C.const("Start Practice"))),C.createElement(et,{predicate:()=>this.controller.shouldShowStartTestButton()},()=>C.createElement("div",{class:C.const("dcg-btn-primary"),role:C.const("button"),tabindex:C.const("0"),onTap:()=>this.dispatchStartTest()},C.const("Start Test")))))),C.createElement(et,{predicate:()=>!this.showPickerUI()},()=>C.createElement("div",{class:C.const("dcg-flex-spacer")})),C.createElement(et,{predicate:this.bindFn(this.showFooterLinks)||this.bindFn(this.showVersionNumber)},()=>C.createElement("div",{class:C.const("dcg-footer-links"),role:C.const("footer")},C.createElement(et,{predicate:this.bindFn(this.showFooterLinks)},()=>C.createElement("a",{href:C.const("https://www.desmos.com/terms"),target:C.const("_blank"),class:C.const("dcg-gray-link")},C.const("Terms of Service"))),C.createElement(et,{predicate:this.bindFn(this.showFooterLinks)},()=>C.createElement("a",{href:C.const("https://www.desmos.com/privacy"),target:C.const("_blank"),class:C.const("dcg-gray-link")},C.const("Privacy Policy"))),C.createElement(et,{predicate:this.bindFn(this.showVersionNumber)},()=>C.createElement("span",{class:()=>({"dcg-version-number":!0,"dcg-show-left-divider":this.showFooterLinks()})},()=>this.showFooterLinks()?"":"version ",()=>this.controller.getAppVersion()))))))}showFooterLinks(){return!(this.showPickerUI()||this.controller.shouldHideExternalLinks())}showHeader(){return window.platform==="web_app"}showVersionNumber(){return this.controller.shouldShowStartingHelpIcon()||this.showPickerUI()?!1:!!this.controller.getAppVersion()}renderPickerWithInput(){return!this.controller.isMobileApp()}showPickerUI(){return this.isChoosingAssessment()&&!this.getSelectedTestId()}getHeaderState(){return this.controller.canChooseAssessment()?this.showPickerUI()?"picking-assessment":this.isChoosingAssessment()?"picked-assessment":"no-assessment-chosen":"assessments-disabled"}getSelectedTestId(){return this.controller.getTentativeConfigTestId()}getSelectedCalculator(){return this.controller.getTentativeConfigCalculator()}getSelectedTestName(){var t=this.getSelectedTestId();if(!t)return"";var e=cn(t);return e?e.name:""}isChoosingAssessment(){return this.getSelectedTestId()!=="default"}switchToChooseAssessment(t){this.controller.dispatch({type:"open-assessment-picker"}),!this.renderPickerWithInput()&&t.device==="keyboard"&&B(this.rootElt.querySelector(".dcg-searchable-dropdown-option")).trigger("focus")}clearAssessment(){this.controller.dispatch({type:"clear-assessment"})}dispatchStartPractice(){this.controller.dispatch({type:"start-practice"})}dispatchStartTest(){this.controller.dispatch({type:"start-test"})}isCalculatorSelected(t){return this.getSelectedCalculator()===t}handleRadioKeydown(t){var d,g,m,p;let e=He(t);if(e===Xr){if(this.controller.shouldShowStartTestButton()){this.dispatchStartTest();return}else if(this.controller.shouldShowStartPracticeButton()){this.dispatchStartPractice();return}}let r=0;if(e===oo?r=-1:e===io&&(r=1),r===0)return;t.preventDefault(),t.stopPropagation();let a=".dcg-calc-option:not(.dcg-is-disabled)",s=r===1?(g=(d=document.activeElement)==null?void 0:d.closest(a))==null?void 0:g.nextSibling:(p=(m=document.activeElement)==null?void 0:m.closest(a))==null?void 0:p.previousSibling;s&&(s.focus(),B(s).trigger("dcg-tap"))}onSelectFourFunction(t){this.onCalculatorChosen({value:"fourFunction",fromKeyboard:t.device==="keyboard"})}onSelectScientific(t){this.onCalculatorChosen({value:"scientific",fromKeyboard:t.device==="keyboard"})}onSelectGraphing(t){this.onCalculatorChosen({value:"graphing",fromKeyboard:t.device==="keyboard"})}onCalculatorChosen(t){var e=t.value;this.controller.dispatch({type:"choose-calculator",calculator:e}),t.fromKeyboard&&B(this.rootElt.querySelector(".dcg-submit-btn .dcg-btn-primary")).trigger("focus")}getTestIdOptions(){let t=jp().filter(function(e){return e!=="default"}).map(e=>({id:e,label:cn(e).name}));return vl(t,"label")}onAssessmentChosen(t){var e=t.value;this.controller.dispatch({type:"choose-assessment",assessment:e}),t.fromKeyboard&&B(this.rootElt.querySelector(".dcg-calc-option.dcg-is-selected")).trigger("focus")}};var J=j(X());var je=j(X());var{If:Kb}=je.Components,hr=class extends me{template(){return je.createElement("div",{class:je.const("dcg-practice-modal-container")},je.createElement("div",{class:je.const("dcg-practice-modal-background"),onTap:this.bindFn(this.dismissModal)}),je.createElement("div",{class:()=>({"dcg-practice-modal":!0,"dcg-practice-modal-small":this.props.size()==="small"})},je.createElement("i",{role:je.const("button"),tabindex:je.const("0"),"aria-label":je.const("Close"),class:je.const("dcg-icon-remove"),onTap:this.bindFn(this.dismissModal)}),je.createElement(Kb,{predicate:()=>!!this.props.title()},()=>je.createElement("h1",{class:je.const("dcg-practice-modal-title")},()=>this.props.title())),je.createElement("div",{class:je.const("dcg-practice-modal-scrollable-content")},this.children)))}dismissModal(){this.controller.dispatch({type:"close-modal"})}};var{If:Zp}=J.Components,Ci=class extends me{template(){return J.createElement(hr,{controller:this.props.controller,title:this.const(""),size:this.const("small")},J.createElement("div",{class:J.const("dcg-end-test-modal-content")},J.createElement("div",{class:J.const("dcg-test-time-container")},J.createElement("div",{class:J.const("dcg-modal-title"),role:J.const("heading"),"aria-level":J.const("2")},J.createElement("span",null,J.const("You've been using the calculator for")),J.createElement("div",{class:J.const("dcg-test-time")},()=>this.controller.getPracticeElapsedTime())),J.createElement("div",{class:J.const("dcg-test-clock")},J.const("Start time: "),()=>this.controller.getPracticeStartTime()),J.createElement(Zp,{predicate:()=>!!this.controller.getSecuredByMessage()},()=>J.createElement("div",{class:J.const("dcg-secure-badge-container")},J.createElement("span",{class:J.const("dcg-secure-badge")},J.createElement("i",{class:J.const("dcg-icon-desmos-badge"),"aria-hidden":J.const("true")}),()=>this.controller.getSecuredByMessage())))),J.createElement("div",{class:J.const("dcg-exit-instructions")},()=>this.controller.getExitInstructions()),J.createElement("div",{class:J.const("dcg-session-summary")},J.createElement("div",{class:J.const("dcg-button-container")},J.createElement("div",{class:J.const("dcg-submit-btn")},J.createElement(Zp,{predicate:()=>this.controller.shouldShowImDoneButton()},()=>J.createElement("div",{onTap:()=>this.controller.dispatch({type:"end-practice"}),class:J.const("dcg-btn-blue-outline"),role:J.const("button"),tabindex:J.const("0")},J.const("I'm Done"))),J.createElement("div",{class:J.const("dcg-btn-blue"),role:J.const("button"),tabindex:J.const("0"),onTap:()=>this.controller.dispatch({type:"close-modal"})},J.const("Continue Session")))))))}};var I=j(X());st();var{If:Br}=I.Components,Di=class extends me{template(){return I.createElement("div",{class:I.const("dcg-singleappmode-help-container dcg-popover dcg-bottom"),didMount:this.bindFn(this.didMountRoot),didUnmount:this.bindFn(this.didUnmountRoot)},I.createElement("div",{class:I.const("dcg-help-links dcg-popover-interior")},I.createElement("div",{class:I.const("dcg-mobile-app-container")},I.createElement(Br,{predicate:()=>this.shouldShowTimeElapsed()},()=>I.createElement("div",{class:I.const("dcg-secure-app-container")},I.createElement("div",{class:I.const("dcg-test-time-container")},I.createElement("div",{class:I.const("dcg-modal-title"),role:I.const("heading"),"aria-level":I.const("2")},I.const("You've been using the calculator for"),I.const(" "),I.createElement("div",{class:I.const("dcg-test-time")},()=>this.controller.getPracticeElapsedTime())),I.createElement("div",{class:I.const("dcg-test-clock")},I.const("Start time: "),()=>this.controller.getPracticeStartTime())),I.createElement(Br,{predicate:()=>!!this.controller.getSecuredByMessage()},()=>I.createElement("div",{class:I.const("dcg-secure-badge")},I.createElement("i",{class:I.const("dcg-icon-desmos-badge"),"aria-hidden":I.const("true")}),()=>this.controller.getSecuredByMessage())))),I.createElement(Br,{predicate:()=>this.controller.shouldShowStartPracticeScreen()},()=>I.createElement("div",{class:I.const("dcg-not-secure-message")},I.const("Welcome to Desmos! For tests, we recommend using this app securely."),I.const(" "),I.createElement("a",{href:I.const("https://www.desmos.com/test-mode"),target:I.const("_blank"),class:I.const("dcg-blue-link")},I.const("Learn more.")))),I.createElement(Br,{predicate:()=>this.shouldShowPracticeMessage()},()=>I.createElement("div",{class:I.const("dcg-not-secure-message")},I.const("You\u2019re using Desmos in Practice Mode. For tests, we recommend using it securely."),I.const(" "),I.createElement("a",{href:I.const("https://www.desmos.com/test-mode"),target:I.const("_blank"),class:I.const("dcg-blue-link")},I.const("Learn more.")))),I.createElement(Br,{predicate:()=>this.shouldShowNonChromeOSMessage()},()=>I.createElement("div",{class:I.const("dcg-non-chromeos-message")},I.const("You are running this Chrome app on a non-ChromeOS device. As a result, some features may be missing. To learn more, visit www.desmos.com/test-mode."))),I.createElement(Br,{predicate:()=>!!this.controller.getAppVersion()},()=>I.createElement("div",{class:I.const("dcg-version-number")},I.const("Version: "),()=>this.controller.getAppVersion()))),I.createElement("a",{role:I.const("link"),tabindex:I.const("0"),class:I.const("dcg-link"),onTap:()=>this.controller.dispatch({type:"open-modal",modal:"keyboard-shortcuts"})},I.createElement("i",{class:I.const("dcg-icon-keyboard"),"aria-hidden":I.const("true")}),I.createElement("span",{class:I.const("dcg-link-text")},I.const("Keyboard Shortcuts"))),I.createElement(Br,{predicate:()=>this.controller.shouldEnableForceRestartInstructions()},()=>I.createElement("a",{role:I.const("link"),tabindex:I.const("0"),class:I.const("dcg-link"),onTap:()=>this.controller.dispatch({type:"open-modal",modal:"force-restart-instructions"})},I.createElement("i",{class:I.const("dcg-icon-export"),"aria-hidden":I.const("true")}),I.createElement("span",{class:I.const("dcg-link-text")},I.const("Help Exiting the App")))),I.createElement(Br,{predicate:()=>this.controller.shouldEnableSendLogsModal()},()=>I.createElement("a",{role:I.const("link"),tabindex:I.const("0"),class:I.const("dcg-link"),onTap:()=>this.controller.dispatch({type:"open-modal",modal:"send-logs"})},I.createElement("i",{class:I.const("dcg-icon-export"),"aria-hidden":I.const("true")}),I.createElement("span",{class:I.const("dcg-link-text")},I.const("Report Issue"))))),I.createElement("span",{class:I.const("dcg-arrow"),didMount:this.bindFn(this.didMountArrow)}))}didUpdate(){this.positionMenu()}didMount(){this.positionMenu()}positionMenu(){if(!this.root||!this.arrowNode)return;var t=document.querySelector(".dcg-help-btn");if(!t)return;let e=document.querySelector(".dcg-header");if(e){var r=e.getBoundingClientRect(),a=window.innerWidth-r.right+5;this.root.style.right=a+"px";var s=this.arrowNode.getBoundingClientRect(),d=t.getBoundingClientRect(),g=(d.left+d.right)/2,m=this.root.getBoundingClientRect(),p=g-m.left-s.width/2;this.arrowNode.style.left=p+"px"}}didMountArrow(t){this.arrowNode=t}didMountRoot(t){this.root=t,B(document.documentElement).on("dcg-tapstart.help-menu",e=>{if(!this.root)return;let r=e.target;this.root.contains(e.target)||r.closest(".dcg-help-btn")||this.controller.dispatch({type:"close-help-menu"})})}didUnmountRoot(){this.root=void 0,B(document.documentElement).off(".help-menu")}shouldShowTimeElapsed(){return this.controller.isInTestSession()}shouldShowNonChromeOSMessage(){return this.controller.isLegacyApp()}shouldShowPracticeMessage(){return this.controller.shouldShowStartPracticeScreen()?!1:!this.shouldShowNonChromeOSMessage()&&!this.shouldShowTimeElapsed()}};var Pt=j(X());var pe=j(X());var tt=j(X());var Li=j(X());var $S=j(eg());st();var tg={segment:!0,line:!0,ray:!0,circle:!0,arc:!0,vector:!0,glider:!0,parallel:!0,perpendicular:!0,center:!0,radius:!0,area:!0,perimeter:!0,start:!0,end:!0,angles:!0,angle:!0,directedangles:!0,directedangle:!0,coterminal:!0,supplement:!0,vertices:!0,segments:!0,intersection:!0,translate:!0,dilate:!0,rotate:!0,reflect:!0,construction:!0,points:!0,lines:!0,circles:!0,arcs:!0,polygons:!0,rays:!0};var rg={segment:!0,triangle:!0,vector:!0,start:!0,end:!0,sphere:!0};var ng=["exp|exponent ln|natural-log log","total length count mean median quantile quartile nCr nPr stats","stdev|standard-deviation stddev|standard-deviation","stdDev|standard-deviation stdevp|standard-deviation-population","stddevp|standard-deviation-population stdDevP|standard-deviation-population mad var|variance","varp|variance-population variance cov|co-variance covp|co-variance-population corr|correlation spearman","lcm mcm gcd mcd gcf mod ceil|ceiling floor round abs|absolute-value min max sign|signum signum sgn","sin|sine cos|cosine tan|tangent csc|co-secant sec|secant cot|co-tangent","sinh|hyperbolic-sine cosh|hyperbolic-cosine tanh|hyperbolic-tangent csch|hyperbolic-co-secant","sech|hyperbolic-secant coth|hyperbolic-co-tangent","arcsin|arc-sine arccos|arc-cosine arctan|arc-tangent arccsc|arc-co-secant arcsec|arc-secant","arccot|arc-co-tangent","arcsinh|hyperbolic-arc-sine arccosh|hyperbolic-arc-cosine arctanh|hyperbolic-arc-co-tangent","arccsch|hyperbolic-arc-co-secant arcsech|hyperbolic-arc-secant","arccoth|hyperbolic-arc-co-tangent","arsinh|hyperbolic-ar-sine arcosh|hyperbolic-ar-cosine artanh|hyperbolic-ar-co-tangent","arcsch|hyperbolic-ar-co-secant arsech|hyperbolic-ar-secant","arcoth|hyperbolic-ar-co-tangent","polygon","distance midpoint","sort shuffle join unique","erf|error-function","TTest|t-test ttest|t-test TScore|t-score tscore|t-score","iTTest|independent-t-test ittest|independent-t-test IndependentTTest","TScore|t-score Tscore|t-score tscore|t-score","normaldist|normal-distribution tdist|t-distribution poissondist|poisson-distribution","binomialdist|binomial-distribution","uniformdist|uniform-distribution","pdf cdf random inverseCdf inversecdf","histogram dotplot boxplot","pdf cdf","rgb hsv","for","width height","with"].join(" "),Wb=["det|determinant","inv|inverse","transpose","rref|reduced-row-echelon-form","trace"].join(" ");ng+=" "+Wb;var zb="alpha beta sqrt theta phi pi tau nthroot cbrt sum prod integral percent infinity infty cross";function ag(t){t||(t={});let e=[zb];return t.disallowAns||e.push("ans"),t.disallowFrac||e.push("frac"),t.additionalCommands&&(e=e.concat(t.additionalCommands)),e.join(" ")}function og(t){t||(t={});let e=ng;return t.additionalOperators&&t.additionalOperators.length&&(e=`${e} ${t.additionalOperators.join(" ")}`),t.includeGeometryFunctions&&(e+=" "+Object.keys(tg).join(" ")),t.include3DFunctions&&(e+=" "+Object.keys(rg).join(" ")),e}var ig=window.MathQuill.noConflict().getInterface(3);ig.config({leftRightIntoCmdGoes:"up",sumStartsWithNEquals:!0,supSubsRequireOperand:!0,charsThatBreakOutOfSupSub:"+-=<>*",autoCommands:ag(),autoSubscriptNumerals:!0,restrictMismatchedBrackets:!0,typingPercentWritesPercentOf:!0,substituteTextarea:function(){if(!Ml&&(Ya||ja)){let e=document.createElement("span");return e.classList.add("dcg-mathquill-input-span"),e.setAttribute("tabindex","0"),e.setAttribute("role","textbox"),Cn(e,{display:"inline-block",height:"1px",width:"1px"}),e}if(Ol&&Il){let e=document.createElement("textarea");return e.setAttribute("readonly",""),e.setAttribute("inputmode","none"),e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","none"),e.setAttribute("spellcheck","false"),e.setAttribute("autocomplete","off"),B(e).on("keydown",function(){this.readOnly=!1,this.select()}).on("blur",function(){this.readOnly=!0}),e}let t=document.createElement("textarea");return t.setAttribute("inputmode","none"),t.setAttribute("autocorrect","off"),t.setAttribute("autocapitalize","none"),t.setAttribute("spellcheck","false"),t.setAttribute("autocomplete","off"),t},autoOperatorNames:og(),quietEmptyDelimiters:"( [",resetCursorOnBlur:!0,enableDigitGrouping:!0,disableAutoSubstitutionInSubscripts:!0,interpretTildeAsSim:!0});var sg=ig;var Yg=j(X());var at=j(X());function cg(t){return{shouldBeFocused:()=>Yb(t),onFocusedChanged:e=>{jb(t,e)}}}function Yb(t){let e=t.predicate;if(e&&!e())return!1;let r=t.controller.getFocusLocation();return r&&Fr(r,t.location)}function jb(t,e){let r=t.predicate;r&&!r()||(e?t.controller.dispatch({type:"set-focus-location",location:t.location}):t.controller.dispatch({type:"blur-focus-location",location:t.location}))}function Ta(t,e){if(!(isNaN(t)||isNaN(e)))return t>=0?Math.atan(e/t):Math.atan(e/t)+Math.PI}function lg(t){let e=t.match(/^\$(\d+)$/);if(e)return`\\token{${e[1]}}`;let r=t.split("_"),a="";return r[0].length>1&&(a+="\\"),a+=r[0],r[1]&&(a+="_{"+r[1]+"}"),a}var dg=0,kc=1,ug=2,pg=3,gg=4,Qb=5,hg=6,mg=7,fg=8,yg=9,bg=10,wg=11,Xb=12,Zb=13,vg=14,kg=15,xg=16,Cg=17,Si=18,Dg=19,Eg=20,Sg=21,Tg=22,Gg=23,Ti=24,Vg=25,Gi=26,Ag=27,Fg=28,Lg=29,Og=30,Ig=31,Mg=32,Ng=33,Vi=34,qg=35,_g=100,Rg=101,Pg=102,Bg=103,$g=104,Ug=105,Kg=106,Wg=107,zg=108,Hg=109,ew={Any:dg,Number:kc,Bool:ug,Point:pg,Point3D:_g,Distribution:gg,Action:Qb,ListOfAny:hg,ListOfNumber:mg,ListOfBool:fg,ListOfPoint:yg,ListOfPoint3D:Rg,ListOfDistribution:bg,EmptyList:wg,ErrorType:Xb,SeedType:Zb,RGBColor:vg,ListOfColor:kg,Polygon:xg,ListOfPolygon:Cg,Segment:Si,ListOfSegment:Dg,Circle:Eg,ListOfCircle:Sg,Arc:Tg,ListOfArc:Gg,Line:Ti,ListOfLine:Vg,Ray:Gi,ListOfRay:Ag,Vector:Vi,ListOfVector:qg,AngleMarker:Fg,ListOfAngleMarker:Lg,DirectedAngleMarker:Og,ListOfDirectedAngleMarker:Ig,Transformation:Mg,ListOfTransformation:Ng,Segment3D:Pg,ListOfSegment3D:Bg,Triangle3D:$g,ListOfTriangle3D:Ug,Sphere3D:Kg,ListOfSphere3D:Wg,Vector3D:zg,ListOfVector3D:Hg},cT=Object.values(ew);var lT={[hg]:dg,[wg]:kc,[mg]:kc,[fg]:ug,[yg]:pg,[Rg]:_g,[bg]:gg,[kg]:vg,[Cg]:xg,[Dg]:Si,[Sg]:Eg,[Gg]:Tg,[Vg]:Ti,[Ag]:Gi,[qg]:Vi,[Lg]:Fg,[Ig]:Og,[Ng]:Mg,[Bg]:Pg,[Hg]:zg,[Ug]:$g,[Wg]:Kg};var{If:xc}=at.Components,Ai=class extends at.Class{init(){this.controller=this.props.controller()}template(){return at.createElement("span",{class:()=>{var r,a;let e=this.parentOrChildHovered();return{"dcg-geo-token-view":!0,"dcg-static-token":(a=(r=this.props).isStatic)==null?void 0:a.call(r),"dcg-selected-token":this.isTokenSelected(),"dcg-hidden-token":this.isHidden(),"dcg-token-has-label":this.hasLabel(),"dcg-child-of-hovered-token":e==="child","dcg-parent-of-hovered-token":e==="parent","dcg-assignment-token":!!this.getAssignment()}},style:()=>({color:this.getColor()}),role:this.bindFn(this.getAriaRole),"dcg-token-type":()=>this.getTokenInfo().iconType,"aria-roledescription":()=>this.props.insideGroup()?void 0:this.controller.s("graphing-calculator-narration-geometry-construction-role-description"),"aria-label":this.bindFn(this.getAriaLabel),"aria-selected":this.bindFn(this.isTokenSelected),tabindex:()=>this.props.putInTabOrder()?0:-1,manageFocus:()=>this.props.focusLocation?cg({controller:this.controller,location:this.props.focusLocation()}):void 0,onTapStart:this.bindFn(this.onTapStart),onTap:this.bindFn(this.onTap),onPointerOver:this.bindFn(this.onPointerOver),onPointerOut:this.bindFn(this.onPointerOut)},at.createElement("span",{class:at.const("dcg-token-background")}),at.createElement("span",{class:()=>({"dcg-token-icon":!0,[this.getAdditionalTokenClass()]:this.getAdditionalTokenClass(),"dcg-token-is-list":this.getIsList()&&!this.getAssignment()}),style:()=>({"--dcg-icon-angle":this.getIconAngle()})},at.createElement(xc,{predicate:()=>!!this.getIcon()},()=>at.createElement("i",{class:this.bindFn(this.getIcon)}))),at.createElement(xc,{predicate:()=>!!this.getAssignment()},()=>at.createElement(ln,{latex:this.bindFn(this.getAssignment),config:this.const({})})),at.createElement(xc,{predicate:()=>this.hasLabel()},()=>at.createElement("span",{class:()=>({"dcg-token-label":!0})},()=>this.getLabel())))}getIconAngle(){let e=this.controller.getItemsByIdentifier(this.props.identifier());if(!e||e.length!==1)return;let r=e[0];if(!r||!r.formula||!r.formula.typed_constant_value)return;let a;switch(this.getIconType()){case"vector":case"translate":if(r.formula.typed_constant_value.valueType!==Vi)return;let[s,d]=r.formula.typed_constant_value.value[0];a=Ta(s,d);break;case"segment":{if(r.formula.typed_constant_value.valueType!==Si)return;let[[g,m],[p,b]]=r.formula.typed_constant_value.value;a=Ta(p-g,b-m);break}case"line":{if(r.formula.typed_constant_value.valueType!==Ti)return;let[[g,m],[p,b]]=r.formula.typed_constant_value.value;a=Ta(p-g,b-m);break}case"ray":{if(r.formula.typed_constant_value.valueType!==Gi)return;let[[g,m],[p,b]]=r.formula.typed_constant_value.value;a=Ta(p-g,b-m);break}}return a!==void 0?`${-Number(a).toFixed(2)}rad`:void 0}getAdditionalTokenClass(){if(this.getAssignment()||this.hasError())return"";switch(this.getIconType()){case"glider":return"dcg-token-glider";case"line":return"dcg-token-line";case"segment":return"dcg-token-segment";case"ray":return"dcg-token-ray";case"intersection":return"dcg-token-intersection";case"midpoint":return"dcg-token-midpoint";case"parallel":return"dcg-token-parallel";case"perpendicular":return"dcg-token-perpendicular";case"rotate":return"dcg-token-rotate";case"circle":return"dcg-token-circle";case"arc":return"dcg-token-arc";case"vector":return"dcg-token-vector";case"dilate":return"dcg-token-dilate";case"reflect":return"dcg-token-reflect";case"translate":return"dcg-token-translate";case"transformation":return"dcg-token-transformation";case"point":case"start":case"end":return"dcg-token-point";case"polygon":return"dcg-token-polygon";case"angle":return"dcg-token-angle";case"angles":return"dcg-token-angles";case"directedangle":case"directedangles":return"dcg-token-directedangle"}return""}getIdFromParentRef(e){if(e)return this.controller.getExpressionIdForIdentifier(e[0])}parentOrChildHovered(){var b,k,F,G,U,fe;if(!this.props.showParentChildrenHover||!this.props.showParentChildrenHover())return!1;let e=this.controller.getHoveredOrFocusedTokenIdentifier(),r=this.controller.getExpressionIdForIdentifier(e),a=this.props.identifier(),s=this.props.controller().getExpressionIdForIdentifier(a)||"";if(!r)return!1;let d=this.controller.getItemModel(r),g=this.controller.getItemModel(s);if(!d||d.type!=="expression"||!g||g.type!=="expression")return!1;let m=((F=(k=(b=d.formula)==null?void 0:b.geometry)==null?void 0:k.call)==null?void 0:F.parents)||[],p=((fe=(U=(G=g.formula)==null?void 0:G.geometry)==null?void 0:U.call)==null?void 0:fe.parents)||[];for(let xe=0;xe<m.length;xe++)if(this.getIdFromParentRef(m[xe])===s)return"parent";for(let xe=0;xe<p.length;xe++)if(this.getIdFromParentRef(p[xe])===r)return"child";return!1}willUnmount(){this.implicitMouseOut()}didUpdate(){let e=this.props.identifier();this.currentlyActiveIdentifier&&e!==this.currentlyActiveIdentifier&&this.implicitMouseOut()}implicitMouseOut(){this.currentlyActiveIdentifier&&this.controller.runAfterDispatch(()=>{let e=this.currentlyActiveIdentifier;e&&(this.currentlyActiveIdentifier=void 0,this.controller.dispatch({type:"unset-active-token",identifier:e,style:"hovered"}))})}isHidden(){return this.getTokenInfo().isHidden}hasError(){let e=this.getTokenInfo();return!e||e.hasError}getIcon(){if(this.getAssignment())return;let e=this.getTokenInfo();if(this.hasError())return"dcg-icon-error";switch(e.iconType){case"point":case"glider":case"intersection":case"strictintersection":case"midpoint":case"start":case"end":return"dcg-icon-point";case"translate":case"vector":return"dcg-icon-vector";case"dilate":return"dcg-icon-dilation";case"rotate":return"dcg-icon-rotation";case"reflect":return"dcg-icon-reflection";case"transformation":return"dcg-icon-title";case"angle":case"angles":case"directedangle":case"directedangles":return"dcg-icon-angle";case"polygon":return"dcg-icon-polygon-solid";case"apply":case"arc":case"circle":case"clockwise":case"counterclockwise":case"error":case"line":case"parallel":case"perpendicular":case"ray":case"reflex":case"segment":case"segments":case"unknown":case"vertices":return;default:return e.iconType}}hasLabel(){return!!this.getLabel()}getLabel(){if(this.getAssignment())return"";let e=this.getTokenInfo().label.trim();return e.length<=2?e:""}getAssignment(){let e=this.props.identifier();return e[0]!=="$"?lg(e):""}getAriaLabel(){let{description:e}=this.getTokenInfo();return this.isHidden()?this.controller.s("graphing-calculator-narration-geometry-hidden-construction-description",{description:e}):e}isTransformation(){var e;return((e=this.getTokenInfo())==null?void 0:e.groupType)==="transformation"}getColor(){if(this.getAssignment())return;let e=this.getTokenInfo();return this.hasError()?"#fa824c":this.isTransformation()||this.isHidden()?"#aaa":e.color}getIconType(){return this.getTokenInfo().iconType}getIsList(){return this.getTokenInfo().isList}getTokenInfo(){let e=this.props.identifier();return this.controller.getTokenRenderInfoByIdentifier(e)}onPointerOver(e){var r,a;(a=(r=this.props).isStatic)!=null&&a.call(r)||e.pointerType==="mouse"&&(this.currentlyActiveIdentifier=this.props.identifier(),this.controller.dispatch({type:"set-active-token",identifier:this.currentlyActiveIdentifier,style:"hovered"}))}onPointerOut(e){var r,a;(a=(r=this.props).isStatic)!=null&&a.call(r)||e.pointerType==="mouse"&&this.currentlyActiveIdentifier&&(this.controller.dispatch({type:"unset-active-token",identifier:this.currentlyActiveIdentifier,style:"hovered"}),this.currentlyActiveIdentifier=void 0)}onTapStart(e){var r,a;(a=(r=this.props).isStatic)!=null&&a.call(r)||e.handle()}onTap(e){var r,a;(a=(r=this.props).isStatic)!=null&&a.call(r)||(e.handle(),this.props.focusLocation&&this.controller.dispatch({type:"set-focus-location",location:this.props.focusLocation()}),this.controller.dispatch({type:"select-expression-that-defines-token",identifier:this.props.identifier(),toggle:this.isTokenSelected(),multiSelectMode:this.controller.isMultiSelectEnabled()&&!!e.shiftKey}))}isTokenSelected(){let e=this.getTokenInfo();return!!(e&&e.isSelected)}getAriaRole(){var e,r;if(!((r=(e=this.props).isStatic)!=null&&r.call(e)))return this.props.insideGroup()?"option":"button"}};var Bn=t=>{let e=function(){return t};return e.isDcgViewConst=!0,e},Fi=class{constructor(e,r,a){this.tokenController=e,this.mathNode=r,this.isStatic=a}updateTokens(e){if(!this.mathNode)return;if(!this.lastTokenInfo||this.lastTokenInfo.latex!==e)if(!this.tokenController.doesLatexContainToken(e))this.lastTokenInfo={latex:e,tokens:[]};else{let a=[];this.mathNode.querySelectorAll(".dcg-mq-token").forEach(s=>{a.push(s)}),this.lastTokenInfo={latex:e,tokens:a}}let r=this.lastTokenInfo.tokens;for(let a of r){let s=a.dcgTokenView;if(s)s.update();else{let d=a.getAttribute("data-dcg-mq-token")||"",g=Yg.mountToNode(Ai,a,{controller:Bn(this.tokenController),identifier:Bn("$"+d),insideMQ:Bn(!0),insideGroup:Bn(!1),putInTabOrder:Bn(!1),isStatic:Bn(this.isStatic)});a.dcgTokenView=g}}}};var ln=class extends Li.Class{template(){return this.children.length===1?this.children[0]:Li.createElement("div",{didMount:e=>this.didMountMathquill(e)})}didMount(){this.children.length===1&&this.didMountMathquill(this.findRootNode())}didMountMathquill(e){this.props.tokenController&&(this.mathquillTokenHelper=new Fi(this.props.tokenController(),e,!0)),this.staticMath=sg.StaticMath(e,A({},this.props.config())),e.classList.add("dcg-static-mathquill-view"),this.updateMathquill()}didUpdate(){this.updateMathquill()}updateMathquill(){var e;this.updateMathquillAria(),this.updateMathquillLatex(),(e=this.mathquillTokenHelper)==null||e.updateTokens(this.props.latex())}updateMathquillLatex(){if(!this.staticMath)return;let e=this.props.latex();this.lastLatex!==e&&(this.staticMath.latex(e),this.lastLatex=e,this.props.onReflow&&this.props.onReflow())}updateMathquillAria(){if(!this.staticMath||!this.props.getAriaLabel)return;let e=this.props.getAriaLabel();e!==this.staticMath.getAriaLabel()&&this.staticMath.setAriaLabel(e)}};var{For:Cc,If:rw}=tt.Components,ot=class extends tt.Class{template(){return tt.createElement("table",{class:tt.const("dcg-shortcuts-table")},tt.createElement(Cc,{each:this.bindFn(this.getCols)},tt.createElement("tr",null,e=>tt.createElement("th",null,()=>this.getHeader(e)))),tt.createElement(Cc,{each:()=>Ot(this.props.section().shortcuts)},tt.createElement("tbody",null,e=>tt.createElement(Cc,{each:this.bindFn(this.getCols)},tt.createElement("tr",null,r=>tt.createElement("td",{didMount:a=>this.populateContent(a,e,r)},tt.createElement(rw,{predicate:()=>!!this.getLatex(e)},()=>tt.createElement(ln,{latex:()=>this.getLatex(e),config:this.const({})}))))))))}getLatex(e){return this.props.section().shortcuts[e].latex||""}populateContent(e,r,a){let s=this.props.section().shortcuts[r];switch(a){case"heading":if(s.latex)return;s.i18nKey&&(e.innerHTML=this.props.controller().s(s.i18nKey));return;case"windows":e.innerHTML=this.replaceKey(s.standard);return;case"mac":e.innerHTML=this.replaceKey(s.apple||s.standard);return}}getHeader(e){let r=this.props.controller().s;switch(e){case"heading":return r("shared-calculator-heading-function-table-column-header");case"windows":return r("shared-calculator-heading-windows-chrome-table-column-header");case"mac":return r("shared-calculator-heading-mac-table-column-header")}}getCols(){return this.props.os?this.props.os()==="windows"?["heading","windows"]:["heading","mac"]:["heading","windows","mac"]}replaceKey(e){return e.replace(/\<key\>/g,"<span class='dcg-key-command'>").replace(/\<\/key\>/g,"</span>")}};var Oi={i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-braille",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-nemeth-mode",standard:"<key>ALT</key> + <key>N</key>",apple:"<key>CTRL</key> + <key>N</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-ueb-mode",standard:"<key>ALT</key> + <key>U</key>",apple:"<key>CTRL</key> + <key>U</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-print-mode",standard:"<key>ALT</key> + <key>Q</key>",apple:"<key>CTRL</key> + <key>Q</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-braille-typing",standard:"<key>ALT</key> + <key>6</key>",apple:"<key>CTRL</key> + <key>6</key>"}]};var $r=function(t){let e={i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-expression-entry-and-navigation",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-expression",standard:"<key>UP ARROW</key>, <key>SHIFT</key> + <key>Tab</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-expression",standard:"<key>DOWN ARROW</key>, <key>Tab</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-remove-empty-expression",standard:"<key>Backspace</key>",apple:"<key>Delete</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-character",standard:"<key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-character",standard:"<key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-move-to-numerator",standard:"<key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-move-to-denominator",standard:"<key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-exit-block",standard:"<key>Tab</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-beginning-of-block",standard:"<key>Home</key>",apple:"<key>Fn</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-end-of-block",standard:"<key>End</key>",apple:"<key>Fn</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-beginning-of-expression",standard:"<key>CTRL</key> + <key>Home</key>",apple:"<key>CTRL</key> + <key>Fn</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-end-of-expression",standard:"<key>CTRL</key> + <key>End</key>",apple:"<key>CTRL</key> + <key>Fn</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-selection-left",standard:"<key>SHIFT</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-selection-right",standard:"<key>SHIFT</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-delete-selection",standard:"<key>Backspace</key>",apple:"<key>Delete</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-select-all",standard:"<key>CTRL</key> + <key>A</key>",apple:"<key>COMMAND</key> + <key>A</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-parent-block",standard:"<key>CTRL</key> + <key>ALT</key> + <key>UP ARROW</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-focused-block",standard:"<key>CTRL</key> + <key>ALT</key> + <key>DOWN ARROW</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-left-adjacent-block",standard:"<key>CTRL</key> + <key>ALT</key> + <key>LEFT ARROW</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-right-adjacent-block",standard:"<key>CTRL</key> + <key>ALT</key> + <key>RIGHT ARROW</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-selection",standard:"<key>CTRL</key> + <key>ALT</key> + <key>SHIFT</key> + <key>DOWN ARROW</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>SHIFT</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-answer",standard:"<key>CTRL</key> + <key>ALT</key> + <key>=</key>",apple:"<key>CTRL</key> + <key>Option</key> + <key>SHIFT</key> + <key>RIGHT ARROW</key>"}]};return t.decimalToFraction&&e.shortcuts.push({i18nKey:"shared-calculator-text-keyboard-shortcut-show-answer-as-decimal-or-fraction",standard:"<key>ALT</key> + <key>SHIFT</key> + <key>A</key>",apple:"<key>COMMAND</key> + <key>SHIFT</key> + <key>A</key>"}),e};var dn={common:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-common-symbols",shortcuts:[{latex:"a^b",standard:"<key>^</key> (<key>SHIFT</key> + <key>6</key>)"},{latex:"a_b",standard:"<key>_</key> (<key>SHIFT</key> + <key>-</key>)"},{latex:"\\le",standard:"<key><</key><key>=</key>"},{latex:"\\ge",standard:"<key>></key><key>=</key>"},{latex:"a'",standard:"<key>'</key>"},{latex:"\\frac{a}{b}",standard:"<key>f</key><key>r</key><key>a</key><key>c</key>"},{latex:"\\sqrt{a}",standard:"<key>s</key><key>q</key><key>r</key><key>t</key>"},{latex:"\\sqrt[3]{a}",standard:"<key>c</key><key>b</key><key>r</key><key>t</key>"},{latex:"\\sqrt[n]{a}",standard:"<key>n</key><key>t</key><key>h</key><key>r</key><key>o</key><key>o</key><key>t</key>"},{latex:"\\sum_{n=a}^b",standard:"<key>s</key><key>u</key><key>m</key>"},{latex:"\\int_a^b",standard:"<key>i</key><key>n</key><key>t</key>"},{latex:"\\prod_{n=a}^b",standard:"<key>p</key><key>r</key><key>o</key><key>d</key>"},{latex:"\\pi",standard:"<key>p</key><key>i</key>"},{latex:"\\theta",standard:"<key>t</key><key>h</key><key>e</key><key>t</key><key>a</key>"},{latex:"\\to",standard:"<key>-</key><key>></key>"}]},tables:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-tables",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-table-previous-cell",standard:"<key>SHIFT</key> + <key>TAB</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-next-cell",standard:"<key>TAB</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-previous-row",standard:"<key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-next-row",standard:"<key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-previous-column",standard:"<key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-next-column",standard:"<key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-first-row",standard:"<key>CTRL</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-last-row",standard:"<key>CTRL</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-first-column",standard:"<key>CTRL</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-last-column",standard:"<key>CTRL</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-table-speak-column-header",standard:"<key>CTRL</key> + <key>H</key>"}]},sliders:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-sliders",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-decrease",standard:"<key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-decrease-larger",standard:"<key>PAGE DOWN</key>",apple:"<key>FN</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-increase",standard:"<key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-increase-larger",standard:"<key>PAGE UP</key>",apple:"<key>FN</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-minimum",standard:"<key>HOME</key>",apple:"<key>FN</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-maximum",standard:"<key>END</key>",apple:"<key>FN</key> + <key>RIGHT ARROW</key>"}]},audiotrace:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-audio-tracing",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-audio-trace",standard:"<key>ALT</key> + <key>T</key>",apple:"<key>OPTION</key> + <key>T</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-summarize-graph",standard:"<key>ALT</key> + <key>S</key>",apple:"<key>OPTION</key> + <key>S</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-describe-axes",standard:"<key>ALT</key> + <key>G</key>",apple:"<key>OPTION</key> + <key>G</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-point",standard:"<key>LEFT ARROW</key>, <key>UP ARROW</key>, <key>J</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-point",standard:"<key>RIGHT ARROW</key>, <key>DOWN ARROW</key>, <key>L</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-poi",standard:"<key>PAGE UP</key>, <key>SHIFT</key> + <key>TAB</key>, <key>K</key>",apple:"<key>FN</key> + <key>UP ARROW</key>, <key>SHIFT</key> + <key>TAB</key>, <key>K</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-poi",standard:"<key>PAGE DOWN</key>, <key>TAB</key>, <key>I</key>",apple:"<key>FN</key> + <key>DOWN ARROW</key>, <key>TAB</key>, <key>I</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-first-point",standard:"<key>HOME</key>, <key>U</key>",apple:"<key>FN</key> + <key>LEFT ARROW</key>, <key>U</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-last-point",standard:"<key>END</key> <key>N</key>",apple:"<key>FN</key> + <key>RIGHT ARROW</key> <key>N</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-poi-count",standard:"<key>P</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-x",standard:"<key>X</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-y",standard:"<key>Y</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-color",standard:"<key>C</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-branch",standard:"<key>B</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-point-type",standard:"<key>T</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-move-to-origin",standard:"<key>O</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-curve",standard:"<key>ALT</key> + <key>UP ARROW</key>",apple:"<key>OPTION</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-curve",standard:"<key>ALT</key> + <key>DOWN ARROW</key>",apple:"<key>OPTION</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-hear-graph",standard:"<key>H</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-hear-specific-branch",standard:"<key>1</key> - <key>0</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-adjust-playback-speed",standard:"<key>ALT</key> + <key>1</key> - <key>5</key>",apple:"<key>OPTION</key> + <key>1</key> - <key>5</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-volume",standard:"<key>V</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-decrease-volume",standard:"<key>SHIFT</key> + <key>V</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-announce-slider-animations",standard:"<key>A</key>"}]},slidertrace:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-slider-trace",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-slider-trace",standard:"<key>S</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-decrease",standard:"<key>LEFT ARROW</key> <key>J</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-decrease-larger",standard:"<key>PAGE DOWN</key>",apple:"<key>FN</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-increase",standard:"<key>RIGHT ARROW</key> <key>L</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-increase-larger",standard:"<key>PAGE UP</key>",apple:"<key>FN</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-minimum",standard:"<key>HOME</key> <key>U</key>",apple:"<key>FN</key> + <key>LEFT ARROW</key> <key>U</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-maximum",standard:"<key>END</key> <key>N</key>",apple:"<key>FN</key> + <key>RIGHT ARROW</key> <key>N</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-next-slider",standard:"<key>DOWN ARROW</key>, <key>TAB</key>, <key>K</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-slider-trace-previous-slider",standard:"<key>UP ARROW</key>, <key>SHIFT</key> + <key>TAB</key>, <key>I</key>"}]},interactivepoints:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-interactive-points",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-focus-first-interactive-point",standard:"<key>CTRL</key> + <key>ALT</key> + <key>P</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>P</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-next-interactive-point",standard:"<key>TAB</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-previous-interactive-point",standard:"<key>SHIFT</key> + <key>TAB</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-x",standard:"<key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-decrease-x",standard:"<key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-y",standard:"<key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-decrease-y",standard:"<key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-x-larger",standard:"<key>SHIFT</key> + <key>RIGHT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-decrease-x-larger",standard:"<key>SHIFT</key> + <key>LEFT ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-increase-y-larger",standard:"<key>SHIFT</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-decrease-y-larger",standard:"<key>SHIFT</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-x",standard:"<key>X</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-y",standard:"<key>Y</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-label",standard:"<key>L</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-speak-color",standard:"<key>C</key>"}]},commonactions:Dc({folders:!0,notes:!0,images:!0}),desmoscomonly:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-desmos-com-only",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-open-shortcuts-dialog",standard:"<key>CTRL</key> + <key>/</key>",apple:"<key>COMMAND</key> + <key>/</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-open-a-graph",standard:"<key>CTRL</key> + <key>O</key>",apple:"<key>COMMAND</key> + <key>O</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-save-a-graph",standard:"<key>CTRL</key> + <key>S</key>",apple:"<key>COMMAND</key> + <key>S</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-print-a-graph",standard:"<key>CTRL</key> + <key>P</key>",apple:"<key>COMMAND</key> + <key>P</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-account-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>A</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>A</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-help-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>H</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>H</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-language-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>L</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>L</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-share-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>S</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>S</key>"}]},braille:Oi,mathquill:$r({decimalToFraction:!0})};function Dc(t){let e={i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-common-actions",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-close-a-dialog",standard:"<key>ESC</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-show-or-hide-expression-list",standard:"<key>SHIFT</key> + <key>ALT</key> + <key>E</key>",apple:"<key>SHIFT</key> + <key>COMMAND</key> + <key>E</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-focus-expression-list",standard:"<key>CTRL</key> + <key>ALT</key> + <key>E</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>E</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-open-expression-options",standard:"<key>CTRL</key> + <key>SHIFT</key> + <key>O</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-delete-expression",standard:"<key>CTRL</key> + <key>SHIFT</key> + <key>D</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-degrees-toggle",standard:"<key>ALT</key> + <key>D</key>",apple:"<key>CTRL</key> + <key>D</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-keypad-toggle",standard:"<key>ALT</key> + <key>K</key>",apple:"<key>CTRL</key> + <key>K</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-add-expression",standard:"<key>CTRL</key> + <key>ALT</key> + <key>X</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>X</key>"}]};return t.notes&&e.shortcuts.push({i18nKey:"shared-calculator-text-keyboard-shortcut-add-note",standard:"<key>CTRL</key> + <key>ALT</key> + <key>O</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>O</key>"}),t.folders&&(e.shortcuts=e.shortcuts.concat([{i18nKey:"shared-calculator-text-keyboard-shortcut-add-folder",standard:"<key>CTRL</key> + <key>ALT</key> + <key>F</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>F</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-collapse-folder",standard:"<key>ALT</key> + <key>UP ARROW</key>",apple:"<key>COMMAND</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-expand-folder",standard:"<key>ALT</key> + <key>DOWN ARROW</key>",apple:"<key>COMMAND</key> + <key>DOWN ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-collapse-all-folders",standard:"<key>ALT</key> + <key>SHIFT</key> + <key>UP ARROW</key>",apple:"<key>COMMAND</key> + <key>SHIFT</key> + <key>UP ARROW</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-expand-all-folders",standard:"<key>ALT</key> + <key>SHIFT</key> + <key>DOWN ARROW</key>",apple:"<key>COMMAND</key> + <key>SHIFT</key> + <key>DOWN ARROW</key>"}])),t.images&&e.shortcuts.push({i18nKey:"shared-calculator-text-keyboard-shortcut-add-image",standard:"<key>CTRL</key> + <key>ALT</key> + <key>I</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>I</key>"}),e.shortcuts=e.shortcuts.concat([{i18nKey:"shared-calculator-text-keyboard-shortcut-add-table",standard:"<key>CTRL</key> + <key>ALT</key> + <key>T</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>T</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-undo",standard:"<key>CTRL</key> + <key>Z</key>",apple:"<key>COMMAND</key> + <key>Z</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-redo",standard:"<key>CTRL</key> + <key>SHIFT</key> + <key>Z</key>",apple:"<key>COMMAND</key> + <key>SHIFT</key> + <key>Z</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-zoom-in",standard:"<key>ALT</key> + <key>+</key>",apple:"<key>CTRL</key> + <key>+</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-zoom-out",standard:"<key>ALT</key> + <key>-</key>",apple:"<key>CTRL</key> + <key>-</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-zoom-restore-default",standard:"<key>ALT</key> + <key>0</key>",apple:"<key>CTRL</key> + <key>0</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-zoom-fit",standard:"<key>SHIFT</key> + <key>ALT</key> + <key>Z</key>",apple:"<key>SHIFT</key> + <key>OPTION</key> + <key>Z</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-edit-list-mode",standard:"<key>CTRL</key> + <key>ALT</key> + <key>D</key>",apple:"<key>CTRL</key> + <key>OPTION</key> + <key>D</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-graph-settings-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>G</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>G</key>"}]),e}var Ii=class extends me{template(){return pe.createElement("div",{class:pe.const("dcg-hotkey-container")},pe.createElement("div",{class:pe.const("dcg-hotkey-section")},pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-common-actions")),pe.createElement(ot,{controller:()=>this.controller,section:()=>Dc({notes:!1,images:!1,folders:!1}),os:this.bindFn(this.getShortcutOS)}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-expression-entry-and-navigation")),pe.createElement(ot,{controller:()=>this.controller,os:this.bindFn(this.getShortcutOS),section:()=>$r({decimalToFraction:this.isDecimalToFractionEnabled()})}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-interactive-points")),pe.createElement(ot,{controller:this.props.controller,section:this.const(dn.interactivepoints),os:this.bindFn(this.getShortcutOS)})),pe.createElement("div",{class:pe.const("dcg-hotkey-section")},pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-symbols")),pe.createElement(ot,{controller:()=>this.controller,section:this.const(dn.common),os:this.bindFn(this.getShortcutOS)}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-audio-tracing")),pe.createElement(ot,{controller:()=>this.controller,section:this.const(dn.audiotrace),os:this.bindFn(this.getShortcutOS)}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-slider-trace")),pe.createElement(ot,{controller:()=>this.controller,section:this.const(dn.slidertrace),os:this.bindFn(this.getShortcutOS)}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-sliders")),pe.createElement(ot,{controller:()=>this.controller,section:this.const(dn.sliders),os:this.bindFn(this.getShortcutOS)}),pe.createElement("h2",{class:pe.const("dcg-hotkey-section-header tables-section")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-tables")),pe.createElement(ot,{controller:()=>this.controller,section:this.const(dn.tables),os:this.bindFn(this.getShortcutOS)})))}getShortcutOS(){return this.controller.getKeyboardOS()}isDecimalToFractionEnabled(){var t;return!!((t=this.controller.getCurrentAPIOptions())!=null&&t.decimalToFraction)}};var Le=j(X());function Mi(t){let e={i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-common-actions",shortcuts:[{i18nKey:"shared-calculator-text-keyboard-shortcut-close-a-dialog",standard:"<key>ESC</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-undo",standard:"<key>CTRL</key> + <key>Z</key>",apple:"<key>COMMAND</key> + <key>Z</key>"},{i18nKey:"shared-calculator-text-keyboard-shortcut-redo",standard:"<key>CTRL</key> + <key>SHIFT</key> + <key>Z</key>",apple:"<key>COMMAND</key> + <key>SHIFT</key> + <key>Z</key>"}]};return t.degreesRadians&&e.shortcuts.push({i18nKey:"shared-calculator-text-keyboard-shortcut-degrees-toggle",standard:"<key>ALT</key> + <key>D</key>",apple:"<key>CTRL</key> + <key>D</key>"}),t.helpMenu&&e.shortcuts.push({i18nKey:"shared-calculator-text-keyboard-shortcut-toggle-help-menu",standard:"<key>CTRL</key> + <key>ALT</key> + <key>H</key>",apple:"<key>CTRL</key> + <key>COMMAND</key> + <key>H</key>"}),e}var Ec={common:{i18nSectionKey:"shared-calculator-heading-keyboard-shortcuts-common-symbols",shortcuts:[{latex:"a^b",standard:"<key>^</key> (<key>SHIFT</key> + <key>6</key>)"},{latex:"a_b",standard:"<key>_</key> (<key>SHIFT</key> + <key>-</key>)"},{latex:"\\frac{a}{b}",standard:"<key>f</key><key>r</key><key>a</key><key>c</key>"},{latex:"\\sqrt{a}",standard:"<key>s</key><key>q</key><key>r</key><key>t</key>"},{latex:"\\sqrt[3]{a}",standard:"<key>c</key><key>b</key><key>r</key><key>t</key>"},{latex:"\\sqrt[n]{a}",standard:"<key>n</key><key>t</key><key>h</key><key>r</key><key>o</key><key>o</key><key>t</key>"},{latex:"\\pi",standard:"<key>p</key><key>i</key>"},{latex:"\\theta",standard:"<key>t</key><key>h</key><key>e</key><key>t</key><key>a</key>"}]},scientificactions:Mi({degreesRadians:!0,helpMenu:!1}),braille:Oi,mathquill:$r({decimalToFraction:!0})};var{If:jg}=Le.Components,Ga=class extends me{template(){return Le.createElement("div",{class:Le.const("dcg-hotkey-container")},Le.createElement("div",{class:Le.const("dcg-hotkey-section")},Le.createElement("h2",{class:Le.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-common-actions")),Le.createElement(ot,{controller:()=>this.controller,os:this.bindFn(this.getShortcutOS),section:()=>Mi({degreesRadians:!this.props.fourFunction(),helpMenu:!0})}),Le.createElement("h2",{class:Le.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-expression-entry-and-navigation")),Le.createElement(ot,{controller:()=>this.controller,os:this.bindFn(this.getShortcutOS),section:()=>$r({decimalToFraction:this.isDecimalToFractionEnabled()})})),Le.createElement("div",{class:Le.const("dcg-hotkey-section")},Le.createElement(jg,{predicate:this.bindFn(this.showSymbols)},()=>Le.createElement("h2",{class:Le.const("dcg-hotkey-section-header")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-symbols"))),Le.createElement(jg,{predicate:this.bindFn(this.showSymbols)},()=>Le.createElement(ot,{controller:()=>this.controller,os:this.bindFn(this.getShortcutOS),section:this.const(Ec.common)})),Le.createElement("h2",{class:Le.const("dcg-hotkey-section-header braille-section")},()=>this.controller.s("shared-calculator-heading-keyboard-shortcuts-braille")),Le.createElement(ot,{controller:()=>this.controller,os:this.bindFn(this.getShortcutOS),section:this.const(Ec.braille)})))}showSymbols(){return!this.props.fourFunction()}getShortcutOS(){return this.controller.getKeyboardOS()}isDecimalToFractionEnabled(){var t;return!!((t=this.controller.getCurrentAPIOptions())!=null&&t.decimalToFraction)}};var{SwitchUnion:nw}=Pt.Components,Ni=class extends me{template(){return Pt.createElement(hr,{controller:this.props.controller,title:()=>"Keyboard Shortcuts",size:()=>"large"},Pt.createElement("div",{class:Pt.const("dcg-keyboard-shortcuts-modal")},Pt.createElement("div",{class:Pt.const("dcg-hotkeys-dialog")},nw(()=>this.getCalcType(),{graphing:()=>Pt.createElement(Ii,{controller:this.props.controller}),scientific:()=>Pt.createElement(Ga,{controller:this.props.controller,fourFunction:this.const(!1)}),fourFunction:()=>Pt.createElement(Ga,{controller:this.props.controller,fourFunction:this.const(!0)})}))))}getShortcutOS(){return this.controller.getKeyboardOS()}getCalcType(){return this.controller.getCurrentCalculator()||"graphing"}};var pt=j(X());var qi=class extends me{template(){return pt.createElement("div",{class:pt.const("dcg-waiting-for-singleappmode-container")},pt.createElement("div",{class:pt.const("dcg-loading-title")},pt.const("Attempting to enter Single-App Mode"),pt.createElement("span",{class:()=>this.numDots()===0?"dcg-hidden-dot":""},pt.const(".")),pt.createElement("span",{class:()=>this.numDots()<=1?"dcg-hidden-dot":""},pt.const(".")),pt.createElement("span",{class:()=>this.numDots()<=2?"dcg-hidden-dot":""},pt.const("."))),pt.createElement("div",{class:pt.const("dcg-footer-loading-bar")}))}numDots(){this.startTime===void 0&&(this.startTime=Date.now());let t=400;return Math.floor((Date.now()-this.startTime)/t)%4}};var D=j(X());var{If:Jg}=D.Components,Va=class extends me{template(){return D.createElement(hr,{controller:this.props.controller,size:this.const("large"),title:()=>this.props.detectedError()?"App Self-Lock Error":"Help Exiting the App"},D.createElement("div",{class:D.const("dcg-force-restart-modal-content")},D.createElement(Jg,{predicate:()=>!this.props.detectedError()},()=>D.createElement("div",null,D.createElement("div",{class:D.const("dcg-paragraph")},D.const("Are you having trouble leaving the app?")),D.createElement("div",{class:D.const("dcg-paragraph")},D.const("Before anything else, check with your teacher. If you're using Guided Access or your school uses Classroom Management software, you may need them to help you leave the app.")),D.createElement("div",{class:D.const("dcg-paragraph")},D.const(`You may also be stuck because of a bug with Single-App Mode (AAC). If so, we're so sorry for the frustration! But, we have good news: you can always restart your phone using "Force Restart."`)))),D.createElement(Jg,{predicate:()=>this.props.detectedError()},()=>D.createElement("div",null,D.createElement("div",{class:D.const("dcg-paragraph")},D.const("We detected an issue entering App Self-Lock.")),D.createElement("div",{class:D.const("dcg-paragraph")},D.const(`Try closing this app. If that doesn't work, you may need to "Force Restart" your phone. This is a rare and intermittent bug, and we have reported it to Apple. Good news: a "Force Restart" should fix it, and it's unlikely it will happen to you again. You can follow the instructions below.`)))),D.createElement("div",null,D.createElement("b",null,D.const(`Please note: "Force Restart" is different from the restart you're accustomed to. You may have to hold down for longer than you expect!`))),D.createElement("h2",null,D.const("iPhone X and later, iPhone 8, or iPhone 8 Plus")),D.createElement("div",{class:D.const("dcg-paragraph")},D.createElement("ol",null,D.createElement("li",null,D.const("Press and release the "),D.createElement("b",null,D.const("volume up")),D.const(" button on the left side of the device.")),D.createElement("li",null,D.const("Then press and release the "),D.createElement("b",null,D.const("volume down")),D.const(" button on the left side of the device.")),D.createElement("li",null,D.const("Then press and "),D.createElement("b",null,D.const("hold")),D.const(" the "),D.createElement("b",null,D.const("side")),D.const(" button on the right side of the device.")),D.createElement("li",null,D.const("When the Apple logo appears, release the side button.")))),D.createElement("h2",null,D.const("iPhone 7 or iPhone 7 Plus")),D.createElement("div",{class:D.const("dcg-paragraph")},D.createElement("ol",null,D.createElement("li",null,D.const("Press and "),D.createElement("b",null,D.const("hold")),D.const(" both the "),D.createElement("b",null,D.const("volume down")),D.const(" button on the left side of the device, and the "),D.createElement("b",null,D.const("Sleep/Wake")),D.const(" button on the right side of the device.")),D.createElement("li",null,D.const("When the Apple logo appears, release both buttons.")))),D.createElement("h2",null,D.const("iPhone 6s, iPhone 6s Plus, or iPhone SE")),D.createElement("div",{class:D.const("dcg-paragraph")},D.createElement("ol",null,D.createElement("li",null,D.const("Press and "),D.createElement("b",null,D.const("hold")),D.const(" both the "),D.createElement("b",null,D.const("Sleep/Wake")),D.const(" button on the right side of the device, and the the "),D.createElement("b",null,D.const("Home")),D.const(" button.")),D.createElement("li",null,D.const("When the Apple logo appears, release both buttons.")))),D.createElement("h2",null,D.const("iPad (model with the Home button)")),D.createElement("div",{class:D.const("dcg-paragraph")},D.createElement("ol",null,D.createElement("li",null,D.const("Press and hold both the "),D.createElement("b",null,D.const("top")),D.const(" button and the "),D.createElement("b",null,D.const("Home")),D.const(" "),D.const("button at the same time.")),D.createElement("li",null,D.const("When the Apple logo appears, release both buttons.")))),D.createElement("h2",null,D.const("iPad (model without the Home button)")),D.createElement("div",{class:D.const("dcg-paragraph")},D.createElement("ol",null,D.createElement("li",null,D.const("Press and release the "),D.createElement("b",null,D.const("volume up")),D.const(" button on the right side of the iPad.")),D.createElement("li",null,D.const("Then press and release the "),D.createElement("b",null,D.const("volume down")),D.const(" button on the right side of the iPad.")),D.createElement("li",null,D.const("Then press and "),D.createElement("b",null,D.const("hold")),D.const(" the "),D.createElement("b",null,D.const("top")),D.const(" button.")),D.createElement("li",null,D.const("When the Apple logo appears, release the top button.")))),D.createElement("h2",null,D.const("Additional Help")),D.createElement("div",{class:D.const("dcg-paragraph")},D.const("If that didn't work, please try one more time! You may need to hold down the button for longer than you'd expect. If all else fails, please email us at "),D.createElement("b",null,D.const("support@desmos.com")),D.const(" and we'll help you out however we can!"))))}};var Z=j(X());var{IfElse:aw,SwitchUnion:ow,Textarea:iw,If:sw,Input:cw}=Z.Components,_i=class extends me{constructor(){super(...arguments),this.textareaValue="",this.emailValue=""}template(){return Z.createElement(hr,{controller:this.props.controller,title:()=>"Report Issue",size:this.const("small")},Z.createElement("div",{class:Z.const("dcg-send-logs-modal-content")},Z.createElement("div",{class:Z.const("dcg-log-description")},Z.const("Thank you for using the beta version of the Android Test Mode App! If something has gone wrong, please help us out by reporting the issue. This will also send us a log of the actions you took inside of this app.")),Z.createElement("div",{class:Z.const("dcg-log-description")},Z.createElement("b",null,Z.const("Unable to close the app? Try force restarting your device."))),Z.createElement(sw,{predicate:this.bindFn(this.showTextarea)},()=>Z.createElement("div",{class:Z.const("dcg-feedback-form")},Z.createElement(iw,{class:this.const("blue-outline"),onInput:t=>this.textareaValue=t,value:()=>this.textareaValue,placeholder:()=>"Description of issue (optional)",disabled:this.bindFn(this.textareaDisabled)}),Z.createElement(cw,{class:this.const("blue-outline"),onInput:t=>this.emailValue=t,value:()=>this.emailValue,placeholder:()=>"Your email (if you\u2019d like us to write back!)",disabled:this.bindFn(this.textareaDisabled)}))),ow(()=>this.controller.getSendLogsStatus(),{none:()=>aw(()=>this.controller.isInternetConnected(),{true:()=>Z.createElement("div",{class:Z.const("dcg-btn-blue"),onTap:()=>this.sendLogs()},Z.const("Send Report")),false:()=>Z.createElement("span",{class:Z.const("dcg-enable-internet")},Z.const("Please enable internet to send a report."))}),sending:()=>Z.createElement("span",null,Z.createElement("span",{class:Z.const("dcg-spinner")}),Z.const("Sending...")),success:()=>Z.createElement("span",{class:Z.const("dcg-success-sending")},Z.createElement("i",{class:Z.const("dcg-icon-check"),"aria-hidden":Z.const("true")}),Z.createElement("b",null,Z.const("Success!")),Z.const(" Thank you for sending us your report.")),error:()=>Z.createElement("span",{class:Z.const("dcg-error-sending")},Z.createElement("b",null,Z.const("Error sending report.")),Z.createElement("span",{class:Z.const("dcg-blue-link"),tabindex:Z.const(0),role:Z.const("link"),onTap:this.bindFn(this.tryAgain)},Z.const("Try again?")))})))}textareaDisabled(){return this.controller.getSendLogsStatus()==="sending"||this.controller.getSendLogsStatus()==="error"||!this.controller.isInternetConnected()}showTextarea(){return this.controller.getSendLogsStatus()!=="success"}sendLogs(){this.controller.dispatch({type:"report-issue",description:this.textareaValue,email:this.emailValue})}tryAgain(){this.sendLogs()}dismissModal(){this.controller.dispatch({type:"close-modal"})}};var ke=j(X());var Ri=class extends me{template(){return ke.createElement("div",{class:ke.const("dcg-windows-secure-cover")},ke.createElement("div",{class:ke.const("dcg-screen-title"),role:ke.const("heading"),"aria-level":ke.const("1"),"aria-label":ke.const("Desmos Logo")},ke.createElement("i",{class:ke.const("dcg-icon-desmos"),"aria-hidden":ke.const("true")})),ke.createElement("div",{class:ke.const("dcg-title")},()=>this.controller.getInsecureCoverMessage()),ke.createElement("div",{class:ke.const("dcg-footer-links"),role:ke.const("footer")},ke.createElement("a",{href:ke.const("https://www.desmos.com/terms"),target:ke.const("_blank"),class:ke.const("dcg-gray-link")},ke.const("Terms of Service")),ke.createElement("a",{href:ke.const("https://www.desmos.com/privacy"),target:ke.const("_blank"),class:ke.const("dcg-gray-link")},ke.const("Privacy Policy"))))}};var{If:Sc,SwitchUnion:lw}=Ee.Components,Tc=window.Desmos,Aa=class extends me{template(){return Ee.createElement("div",{class:()=>({"dcg-basic-calc-practice":this.controller.getCurrentCalculator()=="fourFunction"||this.controller.getCurrentCalculator()=="scientific","dcg-narrow-screen":window.innerWidth<640}),onKeydown:e=>{He(e)===Or&&this.getOpenScreen()!=="none"&&(e.preventDefault(),e.stopPropagation(),this.controller.dispatch({type:"close-modal"}))}},Ee.createElement("div",{id:Ee.const("dcg-header-container")},Ee.createElement($o,{controller:this.props.controller})),Ee.createElement("div",{class:Ee.const("dcg-practice-calculator"),id:Ee.const("graph-container"),didMount:this.bindFn(this.didMountGraphContainer)}),Ee.createElement("div",{id:Ee.const("dcg-modal-container")},lw(()=>this.getOpenScreen(),{none:()=>{},"end-practice":()=>Ee.createElement(Ci,{controller:this.props.controller}),"force-restart-instructions":()=>Ee.createElement(Va,{controller:this.props.controller,detectedError:this.const(!1)}),"send-logs":()=>Ee.createElement(_i,{controller:this.props.controller}),"aac-error-detected":()=>Ee.createElement(Va,{controller:this.props.controller,detectedError:this.const(!0)}),"keyboard-shortcuts":()=>Ee.createElement(Ni,{controller:this.props.controller}),help:()=>Ee.createElement(Di,{controller:this.props.controller})})),Ee.createElement(Sc,{predicate:()=>this.controller.shouldShowWaitingForSingleAppMode()},()=>Ee.createElement(qi,{controller:this.props.controller})),Ee.createElement(Sc,{predicate:()=>this.controller.shouldShowStartPracticeScreen()},()=>Ee.createElement(xi,{controller:this.props.controller})),Ee.createElement(Sc,{predicate:()=>this.controller.shouldShowInsecureCover()},()=>Ee.createElement(Ri,{controller:this.props.controller})))}didUpdate(){this.syncAPIConfig()}didMountGraphContainer(e){this.graphNode=e,this.syncAPIConfig()}getOpenScreen(){return this.controller.getCurrentModal()}syncAPIConfig(){let e=this.controller.getCurrentCalculator(),r=this.controller.getCurrentAPIOptions(),a={type:e,options:r};if(!Fr(a,this.lastConfig)){if(this.lastConfig=a,this.api&&(this.api.destroy(),this.api=void 0),a)switch(e){case"graphing":this.api=Tc.GraphingCalculator(this.graphNode,r);break;case"scientific":this.api=Tc.ScientificCalculator(this.graphNode,r);break;case"fourFunction":this.api=Tc.FourFunctionCalculator(this.graphNode,r);break;case void 0:break;default:return e}this.api&&this.api.focusFirstExpression()}}};Eo();An();var Qg="Graphing\u2014Testing Calculator",Xg="Scientific\u2014Testing Calculator",Zg="Four Function\u2014Testing Calculator",eh="#008154",th="#844CC3",rh="#206CB8";var Fa=class{constructor(){this.language="en";this.currentModal="none";this.tentativeConfig={testId:"default",calculator:"graphing"};this.singleAppMode="none";this.sendLogsStatus="none";this.internetConnected=!0;this.dispatcher=new ka;this.s=fa(()=>this.language);this.dispatch=e=>{Do("dispatch",{type:e.type}),this.dispatcher.dispatch(e);let r;for(;r=this._queuedCallbacks.shift();)r()};this._queuedCallbacks=[];this.platform=this.readPlatformFromWindow(),this.dispatcher=new ka,this.hookUpDispatcher(),this.keyboardOS=Ha?"mac":"windows"}runAfterDispatch(e){this._queuedCallbacks.push(e)}enqueueEvent(e){this.runAfterDispatch(()=>{this.onEventEmitted&&this.onEventEmitted(e)})}hookUpDispatcher(){this.dispatcher.register(e=>{switch(this.enqueueEvent("render"),this.readVariablesDefinedOnWindow(),this.validateTestStatus(),this.checkIfNativeCodeRequestedForceRestartInstructions(),e.type!=="tick"&&this.sendAnalyticsEvent("dispatch",e),e.type){case"tick":break;case"open-modal":this.currentModal=e.modal;break;case"close-modal":this.currentModal="none";break;case"start-practice":this.startPractice();break;case"start-test":this.isInSingleAppMode()?this.startTest():this.requestVoluntarySingleAppModeOn();break;case"header-done":this.isInPracticeSession()?this.finalizeCurrentSession():this.currentModal="end-practice";break;case"end-practice":this.finalizeCurrentSession();break;case"toggle-help-menu":this.currentModal==="help"?this.currentModal="none":this.currentModal="help";break;case"close-help-menu":this.currentModal==="help"&&(this.currentModal="none");break;case"request-voluntary-singleapp-mode":this.requestVoluntarySingleAppModeOn();break;case"choose-assessment":this.tentativeConfig={testId:e.assessment,calculator:this.tentativeConfig.calculator},this.validateCalculatorSelection();break;case"choose-calculator":this.tentativeConfig={testId:this.tentativeConfig.testId,calculator:e.calculator};break;case"clear-assessment":this.tentativeConfig={testId:"default",calculator:"graphing"};break;case"open-assessment-picker":this.tentativeConfig={testId:void 0,calculator:void 0};break;case"report-issue":this.reportIssue(e.description,e.email);break;default:return e}this.currentModal==="end-practice"&&!this.isInSession()&&(this.currentModal="none"),this.logAnyStateChangesAfterDispatch()})}validateTestStatus(){this.validateCalculatorSelection(),this.checkIfShouldAutoEnterSession();let e;if(this.currentSession&&this.currentSession.settings.source==="appConfig"?e=this.currentSession.settings.config:e=void 0,this.isInSession()&&!Fr(e,this.externalAppConfig)){this.sendAnalyticsEvent("appConfigChanged",{before:e,after:this.externalAppConfig}),this.finalizeCurrentSession();return}if(this.currentSession&&this.currentSession.startedInSingleAppMode&&!this.isInSingleAppMode()){this.sendAnalyticsEvent("singleAppModeAborted"),this.finalizeCurrentSession();return}!this.isInSession()&&this.isInSingleAppMode()&&this.didRequestAppSelfLock()&&(this.sendAnalyticsEvent("singleAppModeGranted"),this.startTest())}checkIfNativeCodeRequestedForceRestartInstructions(){var e=window;e.dcg_open_force_restart_instructions&&(delete e.dcg_open_force_restart_instructions,this.currentModal="aac-error-detected")}checkIfNativeCodeFinishedSendingLogs(){var e=window;e.dcg_sendlogs_status&&(e.dcg_sendlogs_status==="success"?this.sendLogsStatus="success":this.sendLogsStatus="error",delete e.dcg_sendlogs_status),this.currentModal!=="send-logs"&&(this.sendLogsStatus==="success"||this.sendLogsStatus==="error")&&(this.sendLogsStatus="none")}generateSettingsForNewSession(){return this.externalAppConfig?{source:"appConfig",calculator:this.getTentativeConfigCalculator(),config:this.externalAppConfig}:{source:"dropdown",testId:this.getTentativeConfigTestId(),calculator:this.getTentativeConfigCalculator()}}startPractice(){var e=this.generateSettingsForNewSession();this.sendAnalyticsEvent(".startPractice()",e),this.currentSession={startTime:Date.now(),onlyPractice:!0,startedInSingleAppMode:this.isInSingleAppMode(),settings:e}}startTest(){var e=this.generateSettingsForNewSession();this.sendAnalyticsEvent(".startTest()",e),this.currentSession={startTime:Date.now(),onlyPractice:!1,startedInSingleAppMode:this.isInSingleAppMode(),settings:e}}getLabelForCalculatorType(e){let r=this.externalAppConfig;if(r){let d=r.options[e];if(d&&d.title)return d.title;{let g=wc("default",e);return g.gradeInfo?this.s(g.gradeInfo)+": "+g.calcName:g.calcName}}let a=this.getTentativeConfigTestId();if(!a)return"";let s=wc(a,e);return s.gradeInfo?this.s(s.gradeInfo)+": "+s.calcName:s.calcName}finalizeCurrentSession(){this.sendAnalyticsEvent(".finalizeCurrentSession()"),this.currentSession=void 0,this.currentModal==="help"&&(this.currentModal="none"),this.requestVoluntarySingleAppModeOff(),this.checkIfShouldAutoEnterSession()}checkIfShouldAutoEnterSession(){if(this.currentSession)this.currentSession.onlyPractice&&!this.currentSession.startedInSingleAppMode&&this.singleAppMode==="guided-access"&&this.startTest();else{var e=this.externalAppConfig;if(e){if(this.isLegacyApp())return this.startPractice();var r=Object.keys(e.options);if(r.length===1&&this.isInSingleAppMode())return this.startTest()}}}isInSession(){return!!this.currentSession}isInPracticeSession(){return!!(this.currentSession&&this.currentSession.onlyPractice)}isInTestSession(){return!!(this.currentSession&&!this.currentSession.onlyPractice)}readPlatformFromWindow(){var e=window.platform;if(e==="chrome_app"){var r=!1;if((document.location.search.indexOf("pretendChromeOS")!==-1||navigator.userAgent.indexOf("CrOS")!==-1)&&(r=!0),r===!1)return"legacy_app"}return e}isLegacyApp(){return this.platform==="legacy_app"}isAndroidApp(){return this.platform==="android"}isChromeApp(){return this.platform==="chrome_app"}isWebApp(){return this.platform==="web_app"}isIosApp(){return this.platform==="ios"}isWin10App(){return this.platform==="win10_app"}isConfiguredByAppConfig(){return!!this.externalAppConfig}getInsecureCoverMessage(){let e=this.externalAppConfig;return e&&e.secureCoverMessage?e.secureCoverMessage:this.platform==="win10_app"?`This secure version of the Desmos calculators must be run in "Take a Test" mode.

      Please close this window and re-launch the application to continue.`:this.platform==="chrome_app"?`This secure version of the Desmos calculators must be run in "Kiosk Mode".

      Please close this window and re-launch within "Kiosk Mode" to continue.`:`This secure version of the Desmos calculators must be run in a secure environment.

      Please contact your administrator for help.`}getSecuredByMessage(){if(this.singleAppMode==="none")return"";switch(this.singleAppMode){case"guided-access":return"Guided Access";case"aac-mode":return"App Self-Lock";case"chrome-kiosk-mode":return"Kiosk Mode";case"take-a-test":return"Take a Test";case"screen-pinning":return"Screen Pinning";case"mdm":var e=this.externalAppConfig;if(e){var r=e.securedBy;if(r)return r}return"Managed Device";default:return this.singleAppMode}}getExitInstructions(){var e=this.currentSession&&this.currentSession.settings;if(e&&e.source==="appConfig"&&e.config.exitInstructions)return e.config.exitInstructions;var r=`If you're done, show this screen to your teacher. Press "Continue Session" to return to the calculator.`;switch(this.singleAppMode){case"guided-access":r+=`

To exit Guided Access, triple-click the Side or Home button.`;break;case"aac-mode":r+=`

App Self-Lock will end when you are done.`;break;case"chrome-kiosk-mode":r+=`

To exit Kiosk mode, restart the Chromebook.`;break;case"mdm":break;case"take-a-test":break;case"screen-pinning":break;case"none":break;default:return this.singleAppMode}return r}canChooseAssessment(){return!this.isConfiguredByAppConfig()}validateCalculatorSelection(){if(!this.tentativeConfig.calculator||!this.isCalculatorAllowedOption(this.tentativeConfig.calculator)){var e=void 0;this.isCalculatorAllowedOption("graphing")?e="graphing":this.isCalculatorAllowedOption("scientific")?e="scientific":this.isCalculatorAllowedOption("fourFunction")&&(e="fourFunction"),this.tentativeConfig=R(A({},this.tentativeConfig),{calculator:e})}}isCalculatorAllowedOption(e){var r=this.externalAppConfig;if(r)return!!r.options[e];var a=this.getTentativeConfigTestId();return Jp(a,e)}shouldHideExternalLinks(){return this.isInSingleAppMode()}shouldShowStartPracticeButton(){return!(this.externalAppConfig&&this.externalAppConfig.onlySecure||this.isInSingleAppMode())}shouldShowStartTestButton(){return this.isChromeApp()?this.isInSingleAppMode():this.isAndroidApp()?!this.isInternetConnected():this.isWebApp()?this.isInSingleAppMode():!0}shouldShowStartingHelpIcon(){return this.shouldEnableForceRestartInstructions()||this.shouldEnableSendLogsModal()}shouldShowSecurityLink(){return this.shouldShowInternetWarning()?!1:!this.shouldShowStartTestButton()}shouldShowDoneButton(){return!this.isLegacyApp()}shouldShowImDoneButton(){switch(this.singleAppMode){case"none":return!0;case"aac-mode":return!0;case"guided-access":return!1;case"chrome-kiosk-mode":return!1;case"mdm":return!1;case"screen-pinning":return!0;case"take-a-test":return!1;default:return this.singleAppMode}}getKeyboardOS(){return this.keyboardOS}readVariablesDefinedOnWindow(){this.externalAppConfig=this.readAppConfigFromWindow(),this.singleAppMode=this.readSingleAppModeFromWindow(),this.internetConnected=!!navigator.onLine,this.checkIfNativeCodeFinishedSendingLogs()}readAppConfigFromWindow(){if(this.isLegacyApp())return{options:{graphing:{}}};var e=window.dcg_appconfig;if(e)try{var r=JSON.parse(decodeURIComponent(e));return r.options?r:void 0}catch(a){return}}isInternetConnected(){return this.internetConnected}shouldShowInternetWarning(){return this.isAndroidApp()?this.isInternetConnected():!1}shouldShowStartPracticeScreen(){return!this.isInSession()}shouldShowInsecureCover(){return this.isWin10App()?!this.isInSingleAppMode():!!(this.isChromeApp()&&!this.isInSingleAppMode()&&this.externalAppConfig&&this.externalAppConfig.onlySecure)}shouldEnableForceRestartInstructions(){return!(this.isInTestSession()||!this.isIosApp()||this.singleAppMode==="guided-access"||this.singleAppMode==="mdm")}shouldEnableSendLogsModal(){return!(this.isInTestSession()||!this.isAndroidApp())}reportIssue(e,r){this.sendLogsStatus="sending",Qt.sendStoredLogsToDesmos(e,r)}getSendLogsStatus(){return this.sendLogsStatus}shouldShowWaitingForSingleAppMode(){return this.isAndroidApp()?!1:!!(this.didRequestAppSelfLock()&&!this.isInSingleAppMode())}isInSingleAppMode(){return this.singleAppMode!=="none"}readSingleAppModeFromWindow(){var e=this.externalAppConfig&&this.externalAppConfig.securedBy;switch(this.platform){case"chrome_app":return document.location.search.indexOf("chromeosKioskMode")>=0?e?"mdm":"chrome-kiosk-mode":"none";case"ios":return window.dcg_aac_active?this.didRequestAppSelfLock()?"aac-mode":e?"mdm":"guided-access":"none";case"android":return this.isInternetConnected()?"none":window.dcg_screenpinning_active?"screen-pinning":"none";case"win10_app":return window.dcg_takeatest_active?e?"mdm":"take-a-test":"none";case"web_app":return e?"mdm":"none"}return"none"}didRequestAppSelfLock(){return!!window.dcg_requested_appselflock}isMobileApp(){return this.isIosApp()||this.isAndroidApp()}requestVoluntarySingleAppModeOn(){this.sendAnalyticsEvent(".requestAACOn()"),window.dcg_requested_appselflock=!0,this.isMobileApp()&&setTimeout(function(){Qt.startSingleAppMode()},0)}requestVoluntarySingleAppModeOff(){this.sendAnalyticsEvent(".requestAACOff()"),window.dcg_requested_appselflock=!1,this.isMobileApp()&&setTimeout(function(){Qt.endSingleAppMode()},0)}getCurrentModal(){return this.shouldShowInsecureCover()?"none":this.currentModal}getPracticeElapsedTime(){var e=this.currentSession;if(!e)return"";let a=(Date.now()-e.startTime)/1e3,s=Math.floor(a/60),d=Math.floor(s/60);s-=d*60;let g="";if(d>0)g+=d+" hr "+s+" min";else return s+" minute"+(s!==1?"s":"");return g}getPracticeStartTime(){var e=this.currentSession;return e?new Date(e.startTime).toLocaleTimeString():""}getDefaultTitleForCalculator(e){switch(e){case"fourFunction":return Zg;case"scientific":return Xg;case"graphing":return Qg}return""}getSelectedAppConfigOption(){var e=this.getCurrentCalculator();if(e){var r=this.currentSession&&this.currentSession.settings;if(!(!r||r.source!=="appConfig"))return r.config.options[e]}}getCustomBranding(){var e=this.externalAppConfig;return e&&e.customBranding?e.customBranding:""}getCurrentTitle(){var e=this.getCurrentCalculator();if(!e)return"";var r=this.getSelectedAppConfigOption();if(r&&r.title)return r.title;var a=this.currentSession&&this.currentSession.settings;return a&&a.source==="dropdown"&&a.testId!=="default"?cn(a.testId).name:this.getDefaultTitleForCalculator(e)}getCurrentCalculator(){if(this.currentSession)return this.currentSession.settings.calculator}getCurrentAPIOptions(){var e=this.getSelectedAppConfigOption();if(e&&e.apiOptions)return e.apiOptions;var r=this.getCurrentCalculator();if(r&&this.currentSession){let s=this.currentSession.settings;var a;return s.source==="appConfig"?a="default":a=s.testId,cn(a).options[r]}}getTentativeConfigTestId(){return this.tentativeConfig.testId}getTentativeConfigCalculator(){return this.tentativeConfig.calculator}getHeaderColor(){if(this.isLegacyApp())return"#397dc7";var e=this.getCurrentCalculator();if(!e||!this.isInTestSession()||!this.isInSingleAppMode())return"#333";var r=this.getSelectedAppConfigOption();if(r&&r.headerColor)return r.headerColor;switch(e){case"fourFunction":return rh;case"scientific":return th;case"graphing":return eh;default:return e}}logAnyStateChangesAfterDispatch(){var e={};this.currentModal!==this._lastModal&&(e.modalBefore=this._lastModal,e.modalAfter=this.currentModal,this._lastModal=this.currentModal);var r=this.singleAppMode;r!==this._lastSingleAppMode&&(e.singleAppModeBefore=this._lastSingleAppMode,e.singleAppModeAfter=r,this._lastSingleAppMode=r);var a=this.shouldShowWaitingForSingleAppMode();a!==this._lastShouldShowWaiting&&(e.showWaitingBefore=this._lastShouldShowWaiting,e.showWaitingAfter=a,this._lastShouldShowWaiting=a);var s=this.isInternetConnected();s!==this._lastInternetConnected&&(e.internetConnectedBefore=this._lastInternetConnected,e.internetConnectedAfter=s,this._lastInternetConnected=s),Object.keys(e).length!==0&&this.sendAnalyticsEvent("stateChangesAfterDispatch",e)}sendAnalyticsEvent(e,r){Qt.sendAnalyticsEvent(e,r)}handleAndroidBackButton(){return this.isInSession()?(this.dispatch({type:"header-done"}),!0):!1}getAppVersion(){return cr().chromeSetVersionNumber||Qt.versionNumber}};var La=new Fa,dw=nh.mountToNode(Aa,document.getElementById("root"),{controller:()=>La});La.onEventEmitted=function(t){t==="render"&&dw.update()};Ld(function(){La.dispatch({type:"tick"})});La.dispatch({type:"tick"});window.MainController=La;Qt.hideLoadingScreen();Fo({userId:"",desmosLang:""});function ah(t,e){let r;function a(){r!==void 0&&cancelAnimationFrame(r),r=void 0}function s(){a(),r=requestAnimationFrame(g)}let d;function g(m){d===void 0&&(d=m);let p=m-d,b=t>0?p/t:1/0;e(b,s)}return s(),{cancel:a}}function oh(t,e){return new Promise(r=>{ah(e,(a,s)=>{a<1?(s(),t.style.opacity=String(1-a)):(t.style.opacity="",t.style.display="none",r())})})}gd(document.body);async function uw(){let t=document.querySelector(".dcg-loading-div-container");t?(await oh(t,400),ji()):ji()}uw();})();
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
