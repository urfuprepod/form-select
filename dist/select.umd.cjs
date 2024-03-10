(function(f,m){typeof exports=="object"&&typeof module<"u"?module.exports=m():typeof define=="function"&&define.amd?define(m):(f=typeof globalThis<"u"?globalThis:f||self,f.select=m())})(this,function(){"use strict";var es=Object.defineProperty;var ns=(f,m,T)=>m in f?es(f,m,{enumerable:!0,configurable:!0,writable:!0,value:T}):f[m]=T;var c=(f,m,T)=>(ns(f,typeof m!="symbol"?m+"":m,T),T);function f(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var m=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,j=m||T||Function("return this")(),Z=function(){return j.Date.now()},Oe=/\s/;function ye(t){for(var e=t.length;e--&&Oe.test(t.charAt(e)););return e}var ve=/^\s+/;function be(t){return t&&t.slice(0,ye(t)+1).replace(ve,"")}var $=j.Symbol,mt=Object.prototype,_e=mt.hasOwnProperty,Se=mt.toString,R=$?$.toStringTag:void 0;function xe(t){var e=_e.call(t,R),n=t[R];try{t[R]=void 0;var r=!0}catch{}var i=Se.call(t);return r&&(e?t[R]=n:delete t[R]),i}var Ee=Object.prototype,Ae=Ee.toString;function Te(t){return Ae.call(t)}var je="[object Null]",we="[object Undefined]",Ot=$?$.toStringTag:void 0;function U(t){return t==null?t===void 0?we:je:Ot&&Ot in Object(t)?xe(t):Te(t)}function F(t){return t!=null&&typeof t=="object"}var Ce="[object Symbol]";function z(t){return typeof t=="symbol"||F(t)&&U(t)==Ce}var yt=NaN,Ie=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,Ne=parseInt;function vt(t){if(typeof t=="number")return t;if(z(t))return yt;if(f(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=f(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=be(t);var n=$e.test(t);return n||Fe.test(t)?Ne(t.slice(2),n?2:8):Ie.test(t)?yt:+t}var Le="Expected a function",Pe=Math.max,Me=Math.min;function Re(t,e,n){var r,i,s,o,a,l,p=0,g=!1,v=!1,C=!0;if(typeof t!="function")throw new TypeError(Le);e=vt(e)||0,f(n)&&(g=!!n.leading,v="maxWait"in n,s=v?Pe(vt(n.maxWait)||0,e):s,C="trailing"in n?!!n.trailing:C);function I(d){var A=r,q=i;return r=i=void 0,p=d,o=t.apply(q,A),o}function k(d){return p=d,a=setTimeout(Y,e),g?I(d):o}function Zi(d){var A=d-l,q=d-p,me=e-A;return v?Me(me,s-q):me}function pe(d){var A=d-l,q=d-p;return l===void 0||A>=e||A<0||v&&q>=s}function Y(){var d=Z();if(pe(d))return ge(d);a=setTimeout(Y,Zi(d))}function ge(d){return a=void 0,C&&r?I(d):(r=i=void 0,o)}function Qi(){a!==void 0&&clearTimeout(a),p=0,r=l=i=a=void 0}function ts(){return a===void 0?o:ge(Z())}function gt(){var d=Z(),A=pe(d);if(r=arguments,i=this,l=d,A){if(a===void 0)return k(l);if(v)return clearTimeout(a),a=setTimeout(Y,e),I(l)}return a===void 0&&(a=setTimeout(Y,e)),o}return gt.cancel=Qi,gt.flush=ts,gt}var N=Array.isArray,Ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,De=/^\w*$/;function He(t,e){if(N(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||z(t)?!0:De.test(t)||!Ue.test(t)||e!=null&&t in Object(e)}var Be="[object AsyncFunction]",qe="[object Function]",ze="[object GeneratorFunction]",Ve="[object Proxy]";function Q(t){if(!f(t))return!1;var e=U(t);return e==qe||e==ze||e==Be||e==Ve}var tt=j["__core-js_shared__"],bt=function(){var t=/[^.]+$/.exec(tt&&tt.keys&&tt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ke(t){return!!bt&&bt in t}var Ge=Function.prototype,We=Ge.toString;function Je(t){if(t!=null){try{return We.call(t)}catch{}try{return t+""}catch{}}return""}var Xe=/[\\^$.*+?()[\]{}|]/g,ke=/^\[object .+?Constructor\]$/,Ye=Function.prototype,Ze=Object.prototype,Qe=Ye.toString,tn=Ze.hasOwnProperty,en=RegExp("^"+Qe.call(tn).replace(Xe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nn(t){if(!f(t)||Ke(t))return!1;var e=Q(t)?en:ke;return e.test(Je(t))}function rn(t,e){return t==null?void 0:t[e]}function et(t,e){var n=rn(t,e);return nn(n)?n:void 0}var D=et(Object,"create");function sn(){this.__data__=D?D(null):{},this.size=0}function on(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var an="__lodash_hash_undefined__",cn=Object.prototype,ln=cn.hasOwnProperty;function un(t){var e=this.__data__;if(D){var n=e[t];return n===an?void 0:n}return ln.call(e,t)?e[t]:void 0}var fn=Object.prototype,hn=fn.hasOwnProperty;function dn(t){var e=this.__data__;return D?e[t]!==void 0:hn.call(e,t)}var pn="__lodash_hash_undefined__";function gn(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=D&&e===void 0?pn:e,this}function w(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}w.prototype.clear=sn,w.prototype.delete=on,w.prototype.get=un,w.prototype.has=dn,w.prototype.set=gn;function mn(){this.__data__=[],this.size=0}function V(t,e){return t===e||t!==t&&e!==e}function K(t,e){for(var n=t.length;n--;)if(V(t[n][0],e))return n;return-1}var On=Array.prototype,yn=On.splice;function vn(t){var e=this.__data__,n=K(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():yn.call(e,n,1),--this.size,!0}function bn(t){var e=this.__data__,n=K(e,t);return n<0?void 0:e[n][1]}function _n(t){return K(this.__data__,t)>-1}function Sn(t,e){var n=this.__data__,r=K(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function _(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_.prototype.clear=mn,_.prototype.delete=vn,_.prototype.get=bn,_.prototype.has=_n,_.prototype.set=Sn;var _t=et(j,"Map");function xn(){this.size=0,this.__data__={hash:new w,map:new(_t||_),string:new w}}function En(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function G(t,e){var n=t.__data__;return En(e)?n[typeof e=="string"?"string":"hash"]:n.map}function An(t){var e=G(this,t).delete(t);return this.size-=e?1:0,e}function Tn(t){return G(this,t).get(t)}function jn(t){return G(this,t).has(t)}function wn(t,e){var n=G(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function x(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}x.prototype.clear=xn,x.prototype.delete=An,x.prototype.get=Tn,x.prototype.has=jn,x.prototype.set=wn;var Cn="Expected a function";function nt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Cn);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(nt.Cache||x),n}nt.Cache=x;var In=500;function $n(t){var e=nt(t,function(r){return n.size===In&&n.clear(),r}),n=e.cache;return e}var Fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nn=/\\(\\)?/g,Ln=$n(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Fn,function(n,r,i,s){e.push(i?s.replace(Nn,"$1"):r||n)}),e});function Pn(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var Mn=1/0,St=$?$.prototype:void 0,xt=St?St.toString:void 0;function Et(t){if(typeof t=="string")return t;if(N(t))return Pn(t,Et)+"";if(z(t))return xt?xt.call(t):"";var e=t+"";return e=="0"&&1/t==-Mn?"-0":e}function Rn(t){return t==null?"":Et(t)}function Un(t,e){return N(t)?t:He(t,e)?[t]:Ln(Rn(t))}var Dn=1/0;function Hn(t){if(typeof t=="string"||z(t))return t;var e=t+"";return e=="0"&&1/t==-Dn?"-0":e}function Bn(t,e){e=Un(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Hn(e[n++])];return n&&n==r?t:void 0}function rt(t,e,n){var r=t==null?void 0:Bn(t,e);return r===void 0?n:r}const At="%[a-f0-9]{2}",Tt=new RegExp("("+At+")|([^%]+?)","gi"),jt=new RegExp("("+At+")+","gi");function it(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;const n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],it(n),it(r))}function qn(t){try{return decodeURIComponent(t)}catch{let e=t.match(Tt)||[];for(let n=1;n<e.length;n++)t=it(e,n).join(""),e=t.match(Tt)||[];return t}}function zn(t){const e={"%FE%FF":"��","%FF%FE":"��"};let n=jt.exec(t);for(;n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{const i=qn(n[0]);i!==n[0]&&(e[n[0]]=i)}n=jt.exec(t)}e["%C2"]="�";const r=Object.keys(e);for(const i of r)t=t.replace(new RegExp(i,"g"),e[i]);return t}function Vn(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return decodeURIComponent(t)}catch{return zn(t)}}function wt(t,e){if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t===""||e==="")return[];const n=t.indexOf(e);return n===-1?[]:[t.slice(0,n),t.slice(n+e.length)]}function Kn(t,e){const n={};if(Array.isArray(e))for(const r of e){const i=Object.getOwnPropertyDescriptor(t,r);i!=null&&i.enumerable&&Object.defineProperty(n,r,i)}else for(const r of Reflect.ownKeys(t)){const i=Object.getOwnPropertyDescriptor(t,r);if(i.enumerable){const s=t[r];e(r,s,t)&&Object.defineProperty(n,r,i)}}return n}const Gn=t=>t==null,Wn=t=>encodeURIComponent(t).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),st=Symbol("encodeFragmentIdentifier");function Jn(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const i=n.length;return r===void 0||t.skipNull&&r===null||t.skipEmptyString&&r===""?n:r===null?[...n,[h(e,t),"[",i,"]"].join("")]:[...n,[h(e,t),"[",h(i,t),"]=",h(r,t)].join("")]};case"bracket":return e=>(n,r)=>r===void 0||t.skipNull&&r===null||t.skipEmptyString&&r===""?n:r===null?[...n,[h(e,t),"[]"].join("")]:[...n,[h(e,t),"[]=",h(r,t)].join("")];case"colon-list-separator":return e=>(n,r)=>r===void 0||t.skipNull&&r===null||t.skipEmptyString&&r===""?n:r===null?[...n,[h(e,t),":list="].join("")]:[...n,[h(e,t),":list=",h(r,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e=t.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(r,i)=>i===void 0||t.skipNull&&i===null||t.skipEmptyString&&i===""?r:(i=i===null?"":i,r.length===0?[[h(n,t),e,h(i,t)].join("")]:[[r,h(i,t)].join(t.arrayFormatSeparator)])}default:return e=>(n,r)=>r===void 0||t.skipNull&&r===null||t.skipEmptyString&&r===""?n:r===null?[...n,h(e,t)]:[...n,[h(e,t),"=",h(r,t)].join("")]}}function Xn(t){let e;switch(t.arrayFormat){case"index":return(n,r,i)=>{if(e=/\[(\d*)]$/.exec(n),n=n.replace(/\[\d*]$/,""),!e){i[n]=r;return}i[n]===void 0&&(i[n]={}),i[n][e[1]]=r};case"bracket":return(n,r,i)=>{if(e=/(\[])$/.exec(n),n=n.replace(/\[]$/,""),!e){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"colon-list-separator":return(n,r,i)=>{if(e=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!e){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"comma":case"separator":return(n,r,i)=>{const s=typeof r=="string"&&r.includes(t.arrayFormatSeparator),o=typeof r=="string"&&!s&&S(r,t).includes(t.arrayFormatSeparator);r=o?S(r,t):r;const a=s||o?r.split(t.arrayFormatSeparator).map(l=>S(l,t)):r===null?r:S(r,t);i[n]=a};case"bracket-separator":return(n,r,i)=>{const s=/(\[])$/.test(n);if(n=n.replace(/\[]$/,""),!s){i[n]=r&&S(r,t);return}const o=r===null?[]:r.split(t.arrayFormatSeparator).map(a=>S(a,t));if(i[n]===void 0){i[n]=o;return}i[n]=[...i[n],...o]};default:return(n,r,i)=>{if(i[n]===void 0){i[n]=r;return}i[n]=[...[i[n]].flat(),r]}}}function Ct(t){if(typeof t!="string"||t.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function h(t,e){return e.encode?e.strict?Wn(t):encodeURIComponent(t):t}function S(t,e){return e.decode?Vn(t):t}function It(t){return Array.isArray(t)?t.sort():typeof t=="object"?It(Object.keys(t)).sort((e,n)=>Number(e)-Number(n)).map(e=>t[e]):t}function $t(t){const e=t.indexOf("#");return e!==-1&&(t=t.slice(0,e)),t}function kn(t){let e="";const n=t.indexOf("#");return n!==-1&&(e=t.slice(n)),e}function Ft(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&typeof t=="string"&&t.trim()!==""?t=Number(t):e.parseBooleans&&t!==null&&(t.toLowerCase()==="true"||t.toLowerCase()==="false")&&(t=t.toLowerCase()==="true"),t}function ot(t){t=$t(t);const e=t.indexOf("?");return e===-1?"":t.slice(e+1)}function at(t,e){e={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...e},Ct(e.arrayFormatSeparator);const n=Xn(e),r=Object.create(null);if(typeof t!="string"||(t=t.trim().replace(/^[?#&]/,""),!t))return r;for(const i of t.split("&")){if(i==="")continue;const s=e.decode?i.replaceAll("+"," "):i;let[o,a]=wt(s,"=");o===void 0&&(o=s),a=a===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?a:S(a,e),n(S(o,e),a,r)}for(const[i,s]of Object.entries(r))if(typeof s=="object"&&s!==null)for(const[o,a]of Object.entries(s))s[o]=Ft(a,e);else r[i]=Ft(s,e);return e.sort===!1?r:(e.sort===!0?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce((i,s)=>{const o=r[s];return i[s]=o&&typeof o=="object"&&!Array.isArray(o)?It(o):o,i},Object.create(null))}function Nt(t,e){if(!t)return"";e={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...e},Ct(e.arrayFormatSeparator);const n=o=>e.skipNull&&Gn(t[o])||e.skipEmptyString&&t[o]==="",r=Jn(e),i={};for(const[o,a]of Object.entries(t))n(o)||(i[o]=a);const s=Object.keys(i);return e.sort!==!1&&s.sort(e.sort),s.map(o=>{const a=t[o];return a===void 0?"":a===null?h(o,e):Array.isArray(a)?a.length===0&&e.arrayFormat==="bracket-separator"?h(o,e)+"[]":a.reduce(r(o),[]).join("&"):h(o,e)+"="+h(a,e)}).filter(o=>o.length>0).join("&")}function Lt(t,e){var i;e={decode:!0,...e};let[n,r]=wt(t,"#");return n===void 0&&(n=t),{url:((i=n==null?void 0:n.split("?"))==null?void 0:i[0])??"",query:at(ot(t),e),...e&&e.parseFragmentIdentifier&&r?{fragmentIdentifier:S(r,e)}:{}}}function Pt(t,e){e={encode:!0,strict:!0,[st]:!0,...e};const n=$t(t.url).split("?")[0]||"",r=ot(t.url),i={...at(r,{sort:!1}),...t.query};let s=Nt(i,e);s&&(s=`?${s}`);let o=kn(t.url);if(typeof t.fragmentIdentifier=="string"){const a=new URL(n);a.hash=t.fragmentIdentifier,o=e[st]?a.hash:`#${t.fragmentIdentifier}`}return`${n}${s}${o}`}function Mt(t,e,n){n={parseFragmentIdentifier:!0,[st]:!1,...n};const{url:r,query:i,fragmentIdentifier:s}=Lt(t,n);return Pt({url:r,query:Kn(i,e),fragmentIdentifier:s},n)}function Yn(t,e,n){const r=Array.isArray(e)?i=>!e.includes(i):(i,s)=>!e(i,s);return Mt(t,r,n)}const Zn=Object.freeze(Object.defineProperty({__proto__:null,exclude:Yn,extract:ot,parse:at,parseUrl:Lt,pick:Mt,stringify:Nt,stringifyUrl:Pt},Symbol.toStringTag,{value:"Module"}));function Qn(){this.__data__=new _,this.size=0}function tr(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function er(t){return this.__data__.get(t)}function nr(t){return this.__data__.has(t)}var rr=200;function ir(t,e){var n=this.__data__;if(n instanceof _){var r=n.__data__;if(!_t||r.length<rr-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new x(r)}return n.set(t,e),this.size=n.size,this}function L(t){var e=this.__data__=new _(t);this.size=e.size}L.prototype.clear=Qn,L.prototype.delete=tr,L.prototype.get=er,L.prototype.has=nr,L.prototype.set=ir;var W=function(){try{var t=et(Object,"defineProperty");return t({},"",{}),t}catch{}}();function ct(t,e,n){e=="__proto__"&&W?W(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function lt(t,e,n){(n!==void 0&&!V(t[e],n)||n===void 0&&!(e in t))&&ct(t,e,n)}function sr(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++i];if(n(s[l],l,s)===!1)break}return e}}var or=sr(),Rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ut=Rt&&typeof module=="object"&&module&&!module.nodeType&&module,ar=Ut&&Ut.exports===Rt,Dt=ar?j.Buffer:void 0,Ht=Dt?Dt.allocUnsafe:void 0;function cr(t,e){if(e)return t.slice();var n=t.length,r=Ht?Ht(n):new t.constructor(n);return t.copy(r),r}var Bt=j.Uint8Array;function lr(t){var e=new t.constructor(t.byteLength);return new Bt(e).set(new Bt(t)),e}function ur(t,e){var n=e?lr(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function fr(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var qt=Object.create,hr=function(){function t(){}return function(e){if(!f(e))return{};if(qt)return qt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function dr(t,e){return function(n){return t(e(n))}}var pr=dr(Object.getPrototypeOf,Object);const zt=pr;var gr=Object.prototype;function Vt(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||gr;return t===n}function mr(t){return typeof t.constructor=="function"&&!Vt(t)?hr(zt(t)):{}}var Or="[object Arguments]";function Kt(t){return F(t)&&U(t)==Or}var Gt=Object.prototype,yr=Gt.hasOwnProperty,vr=Gt.propertyIsEnumerable,br=Kt(function(){return arguments}())?Kt:function(t){return F(t)&&yr.call(t,"callee")&&!vr.call(t,"callee")};const ut=br;var _r=9007199254740991;function Wt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_r}function ft(t){return t!=null&&Wt(t.length)&&!Q(t)}function Sr(t){return F(t)&&ft(t)}function xr(){return!1}var Jt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xt=Jt&&typeof module=="object"&&module&&!module.nodeType&&module,Er=Xt&&Xt.exports===Jt,kt=Er?j.Buffer:void 0,Ar=kt?kt.isBuffer:void 0,Yt=Ar||xr,Tr="[object Object]",jr=Function.prototype,wr=Object.prototype,Zt=jr.toString,Cr=wr.hasOwnProperty,Ir=Zt.call(Object);function $r(t){if(!F(t)||U(t)!=Tr)return!1;var e=zt(t);if(e===null)return!0;var n=Cr.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Zt.call(n)==Ir}var Fr="[object Arguments]",Nr="[object Array]",Lr="[object Boolean]",Pr="[object Date]",Mr="[object Error]",Rr="[object Function]",Ur="[object Map]",Dr="[object Number]",Hr="[object Object]",Br="[object RegExp]",qr="[object Set]",zr="[object String]",Vr="[object WeakMap]",Kr="[object ArrayBuffer]",Gr="[object DataView]",Wr="[object Float32Array]",Jr="[object Float64Array]",Xr="[object Int8Array]",kr="[object Int16Array]",Yr="[object Int32Array]",Zr="[object Uint8Array]",Qr="[object Uint8ClampedArray]",ti="[object Uint16Array]",ei="[object Uint32Array]",u={};u[Wr]=u[Jr]=u[Xr]=u[kr]=u[Yr]=u[Zr]=u[Qr]=u[ti]=u[ei]=!0,u[Fr]=u[Nr]=u[Kr]=u[Lr]=u[Gr]=u[Pr]=u[Mr]=u[Rr]=u[Ur]=u[Dr]=u[Hr]=u[Br]=u[qr]=u[zr]=u[Vr]=!1;function ni(t){return F(t)&&Wt(t.length)&&!!u[U(t)]}function ri(t){return function(e){return t(e)}}var Qt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,H=Qt&&typeof module=="object"&&module&&!module.nodeType&&module,ii=H&&H.exports===Qt,ht=ii&&m.process,te=function(){try{var t=H&&H.require&&H.require("util").types;return t||ht&&ht.binding&&ht.binding("util")}catch{}}(),ee=te&&te.isTypedArray,ne=ee?ri(ee):ni;function dt(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var si=Object.prototype,oi=si.hasOwnProperty;function ai(t,e,n){var r=t[e];(!(oi.call(t,e)&&V(r,n))||n===void 0&&!(e in t))&&ct(t,e,n)}function ci(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?ct(n,a,l):ai(n,a,l)}return n}function li(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var ui=9007199254740991,fi=/^(?:0|[1-9]\d*)$/;function re(t,e){var n=typeof t;return e=e??ui,!!e&&(n=="number"||n!="symbol"&&fi.test(t))&&t>-1&&t%1==0&&t<e}var hi=Object.prototype,di=hi.hasOwnProperty;function pi(t,e){var n=N(t),r=!n&&ut(t),i=!n&&!r&&Yt(t),s=!n&&!r&&!i&&ne(t),o=n||r||i||s,a=o?li(t.length,String):[],l=a.length;for(var p in t)(e||di.call(t,p))&&!(o&&(p=="length"||i&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||re(p,l)))&&a.push(p);return a}function gi(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var mi=Object.prototype,Oi=mi.hasOwnProperty;function yi(t){if(!f(t))return gi(t);var e=Vt(t),n=[];for(var r in t)r=="constructor"&&(e||!Oi.call(t,r))||n.push(r);return n}function ie(t){return ft(t)?pi(t,!0):yi(t)}function vi(t){return ci(t,ie(t))}function bi(t,e,n,r,i,s,o){var a=dt(t,n),l=dt(e,n),p=o.get(l);if(p){lt(t,n,p);return}var g=s?s(a,l,n+"",t,e,o):void 0,v=g===void 0;if(v){var C=N(l),I=!C&&Yt(l),k=!C&&!I&&ne(l);g=l,C||I||k?N(a)?g=a:Sr(a)?g=fr(a):I?(v=!1,g=cr(l,!0)):k?(v=!1,g=ur(l,!0)):g=[]:$r(l)||ut(l)?(g=a,ut(a)?g=vi(a):(!f(a)||Q(a))&&(g=mr(l))):v=!1}v&&(o.set(l,g),i(g,l,r,s,o),o.delete(l)),lt(t,n,g)}function se(t,e,n,r,i){t!==e&&or(e,function(s,o){if(i||(i=new L),f(s))bi(t,e,o,n,se,r,i);else{var a=r?r(dt(t,o),s,o+"",t,e,i):void 0;a===void 0&&(a=s),lt(t,o,a)}},ie)}function oe(t){return t}function _i(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var ae=Math.max;function Si(t,e,n){return e=ae(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=ae(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),_i(t,this,a)}}function xi(t){return function(){return t}}var Ei=W?function(t,e){return W(t,"toString",{configurable:!0,enumerable:!1,value:xi(e),writable:!0})}:oe;const Ai=Ei;var Ti=800,ji=16,wi=Date.now;function Ci(t){var e=0,n=0;return function(){var r=wi(),i=ji-(r-n);if(n=r,i>0){if(++e>=Ti)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var Ii=Ci(Ai);function $i(t,e){return Ii(Si(t,e,oe),t+"")}function Fi(t,e,n){if(!f(n))return!1;var r=typeof e;return(r=="number"?ft(n)&&re(e,n.length):r=="string"&&e in n)?V(n[e],t):!1}function Ni(t){return $i(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&Fi(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var ce=Ni(function(t,e,n){se(t,e,n)});const X=class X{constructor(e,{config:n,params:r}={}){c(this,"hasAbortControllerApi",!0);c(this,"abortController");c(this,"abortSignal");c(this,"baseUrl");c(this,"config");c(this,"params");this.baseUrl=e,this.config=n,this.params=r}async requestAjaxJson(e){this.renewAbortController();const n=this.formRequestUrl(e);let r;try{r=await(await fetch(n,this.requestConfig)).json()}catch(i){console.error(i)}return r}renewAbortController(){var e;if(this.hasAbortControllerApi){(e=this.abortController)==null||e.abort("Has newer request");try{const n=new AbortController;this.abortController=n,this.abortSignal=n.signal}catch{this.hasAbortControllerApi=!1}}}formRequestUrl(e){const n=this.params||e?{...this.params,...e}:null,r=n?`?${Zn.stringify(n,{skipNull:!0,skipEmptyString:!0})}`:"";return this.baseUrl+r}get requestConfig(){return ce({},this.config||{},X.defaultRequestConfig,{signal:this.abortSignal})}};c(X,"defaultRequestConfig",{method:"get",headers:{"Content-Type":"application/json; charset=UTF-8"}});let pt=X;const Li={ru:{clearButtonText:"Очистить",toggleButtonText:"Открыть/Закрыть",notFoundHintText:"Ничего не найдено",searchHintText:"Начните печатать для поиска вариантов",placeholderText:"Выберите..."},en:{clearButtonText:"Clear",toggleButtonText:"Toggle Open/Close",notFoundHintText:"Not found",searchHintText:"Start typing for get options",placeholderText:"Choose..."}};function Pi(t="en",e){const n=Li[t];return e?ce({},n,e):n}function J(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function Mi(t){return typeof t=="string"?t.trim():t}function le(t){if(typeof t!="string")return t;const e=Number(t);return Number.isNaN(e)?t:e}function Ri(t){return Object.entries(t).reduce((e,[n,r])=>({...e,[n]:`.${r}`}),{})}function Ui(t,e){const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return r.top>=n.top&&r.bottom<=n.bottom}function ue(t,e){!t||!e||Ui(t,e)||e.scrollIntoView({block:"nearest",behavior:"instant"})}function fe(t,e){return t.length===0||e>=t.length||e<0}function Di(t,e){if(t.length===0)return null;let n=e+1;return fe(t,n)?t[0]:t[n]}function Hi(t,e){if(t.length===0)return null;let n=e-1;return fe(t,n)?t[t.length-1]:t[n]}const M=class M{constructor(e,n){c(this,"options",[]);c(this,"nativeOptions");c(this,"ajax");c(this,"ajaxSearchId",0);c(this,"ajaxSettings");c(this,"translation");c(this,"placeholder");c(this,"onAjaxSearch",e=>{if(e){this.ajaxSearchDebounced(e).catch(console.error);return}this.ajaxSearchId+=1,this.ui.isLoading=!1,this.options=[],this.ui.options=[]});c(this,"ajaxSearch",async e=>{this.ajaxSearchId+=1;const n=this.ajaxSearchId;this.ui.isLoading=!0;const r=await this.requestOptions({[this.ajaxSearchKey()]:e});if(n!==this.ajaxSearchId){this.ui.updateHint();return}this.ui.isLoading=!1,this.ui.options=r,this.options=r});c(this,"ajaxSearchDebounced",Re(this.ajaxSearch,350,{leading:!0,trailing:!0}));c(this,"onFilterSearch",e=>{this.ui.options=this.filterOptions(e)});var r;this.translation=Pi(n==null?void 0:n.lang,n==null?void 0:n.translation),this.placeholder=((r=n==null?void 0:n.translation)==null?void 0:r.placeholderText)||e.getAttribute("placeholder")||this.translation.placeholderText,this.nativeOptions=M.parseOptions(e),this.ajaxSettings=n==null?void 0:n.ajax,n!=null&&n.ajax&&(this.ajax=new pt(n.ajax.url,{config:n.ajax.config,params:n.ajax.params}))}isAjaxSearch(){var e;return((e=this.ajaxSettings)==null?void 0:e.mode)==="search"}ajaxSearchKey(){return this.isAjaxSearch()?this.ajaxSettings.searchKey:""}resolveInitOptions(e){var n;switch((n=this.ajaxSettings)==null?void 0:n.mode){case"fetch":this.options=[],this.requestFetchModeOptions().catch(console.error);break;case void 0:this.options=this.nativeOptions,this.ui.options=this.options;break}}async requestFetchModeOptions(){this.ui.isLoading=!0;const e=await this.requestOptions();this.ui.isLoading=!1,this.options=e,this.ui.options=e}initUi(){this.ui.options=this.options,this.ui.activeOption=this.activeOption,this.ui.emitter.multiOn({clear:this.clear,search:this.onFilterSearch,ajaxSearch:this.onAjaxSearch,"option:click":this.onOptionClick})}filterOptions(e){const n=e.trim(),{options:r}=this;if(!n)return r;const i=new RegExp(n,"i");return r.filter(s=>i.test(s.label))}async requestOptions(e){if(!this.ajax)return[];const n=await this.ajax.requestAjaxJson(e);return this.optionsFromJson(n)}optionsFromJson(e){if(!this.ajaxSettings)return[];const{dataKey:n="",labelKey:r="label",valueKey:i="value"}=this.ajaxSettings,s=n?rt(e,n):e;return Array.isArray(s)?s.map(o=>({label:Mi(rt(o,r)),value:le(rt(o,i))})):[]}static fromConvertableOptions(e){return e===null?[]:(Array.isArray(e)?e.map(this.fromConvertableOption):[this.fromConvertableOption(e)]).filter(this.isNotEmptyOption)}static stringOrOptionToOption(e){switch(typeof e){case"string":case"number":return{label:e.toString(),value:e};default:return e}}static isNotEmptyOption(e){return e!==null&&!!(e.value.toString()&&e.label)}static parseOptions(e){return Array.from(e.options).map(n=>({selected:n.selected,label:n.innerText.trim(),value:le(n.value)})).filter(n=>n.value)}};c(M,"fromConvertableOption",e=>{const n=e!==null?M.stringOrOptionToOption(e):null;return M.isNotEmptyOption(n)?n:null});let P=M;class Bi{constructor(){c(this,"listeners",{})}getOrCreateListenerList(e){let n=this.listeners[e];if(n)return n;const r=new Set;return this.listeners[e]=r,r}multiOn(e){for(const n in e)this.on(n,e[n])}on(e,n){this.getOrCreateListenerList(e).add(n)}off(e,n){this.getOrCreateListenerList(e).delete(n)}emit(e,n){this.getOrCreateListenerList(e).forEach(i=>{i(n)})}}const b="f-select",O=Object.freeze({ROOT:`${b}`,INNER:`${b}__inner`,SEARCH:`${b}__search`,DROPDOWN:`${b}__dropdown`,CLEAR:`${b}__clear`,TOGGLE:`${b}__toggle`,LIST:`${b}__list`,OPTIONS:`${b}__option`,HINT:`${b}__hint`,AREA:`${b}__input-area`}),E=Object.freeze(Ri(O)),qi=t=>J(`
    <div class="${O.ROOT}">
        <div class="${O.INNER}">
            <div class="${O.AREA}"> 
                <input type="text" class="${O.SEARCH}" />      
            </div>
            <div class="f-select__actions">
                <button type="button" class="${O.CLEAR}" title="${t.clearButtonText}">
                    ${t.clearButtonText}
                </button>
                <button type="button" class="${O.TOGGLE}" title="${t.toggleButtonText}">
                    ${t.toggleButtonText}
                </button>      
            </div>
        </div>
        <div class="${O.DROPDOWN}">
            <div class="${O.LIST}"></div>
            <div class="${O.HINT}"></div>
        </div>
    </div>
`),zi=t=>J(`
    <div class="${O.OPTIONS}">${t.label}</div>
`),Vi=t=>J(`
    <option value="${t.value}">${t.label}</option>  
`);class y{static createSelectStructure(e){const n=qi(e),r=i=>n.querySelector(i);return{root:n,inner:r(E.INNER),dropdown:r(E.DROPDOWN),search:r(E.SEARCH),clear:r(E.CLEAR),toggle:r(E.TOGGLE),list:r(E.LIST),options:[],hint:r(E.HINT),area:r(E.AREA)}}static createNativeOptionEl(e){return Vi(e)}static createOptionEl(e){const n=zi(e);return n.dataset.option=JSON.stringify(e),n}static getOptionData(e){return JSON.parse(e.dataset.option)}static isOptionEl(e){return e instanceof HTMLDivElement&&!!e.dataset.option}static removeElement(e){e.remove()}static removeHTMLCollection(e){Array.from(e).forEach(this.removeElement)}}function he(t){return t===null||Array.isArray(t)&&t.length===0}class B{constructor(e){c(this,"elements");c(this,"emitter",new Bi);c(this,"_options",[]);c(this,"_renderOutdated",!0);c(this,"nativeSelect");c(this,"translation");c(this,"placeholder");c(this,"isAjaxSearch");c(this,"_isOpen",!1);c(this,"_isLoading",!1);c(this,"_selectedOption",null);c(this,"onKeydown",e=>{switch(e.key){case"Escape":this.close();break;case"Enter":case"NumpadEnter":this.makeSelectedOptionActive();break;case"ArrowUp":this.makePrevOptionSelected();break;case"ArrowDown":this.makeNextOptionSelected()}});c(this,"addNativeSelectOption",e=>{e.selected=!0,this.nativeSelect.append(e)});c(this,"createOptionEl",e=>{const n=y.createOptionEl(e);return n.addEventListener("mouseover",this.onOptionHover),n.addEventListener("click",this.onOptionClick),n});c(this,"onOptionHover",e=>{y.isOptionEl(e.target)&&(this.selectedOption=e.target)});c(this,"toggleOptionElActiveModIfNeeded",e=>{this.toggleOptionElActiveMod(e,this.isOptionElNeedToBeActive(e))});c(this,"open",()=>this.isOpen=!0);c(this,"close",()=>this.isOpen=!1);c(this,"onClearClick",e=>{e.stopPropagation(),this.emitter.emit("clear",void 0),this.close()});c(this,"onSearchInput",()=>{this.emitSearch()});c(this,"onOptionClick",e=>{if(this.selectedOption,y.isOptionEl(e.target)){const n=y.getOptionData(e.target);this.emitter.emit("option:click",n)}});var n;this.elements=y.createSelectStructure(e.translation),this.nativeSelect=e.nativeSelect,this.translation=e.translation,this.isAjaxSearch=e.isAjaxSearch,this.placeholder=e.placeholder,this.listen(),(n=this.nativeSelect.parentNode)==null||n.insertBefore(this.elements.root,this.nativeSelect),this.elements.root.append(this.nativeSelect),this.toggleMod("_styled",!0)}set hint(e){this.elements.hint.innerText=e,this.toggleMod("_hint",!!e)}get selectedOption(){return this._selectedOption}set selectedOption(e){var n;(n=this._selectedOption)==null||n.classList.remove("_selected"),e==null||e.classList.add("_selected"),this._selectedOption=e}get selectedIdx(){const{selectedOption:e}=this;return this.elements.options.findIndex(n=>n===e)}listen(){const{inner:e,search:n,dropdown:r,clear:i}=this.elements;e.addEventListener("mousedown",s=>{s.preventDefault()}),e.addEventListener("click",this.open),n.addEventListener("focus",this.open),n.addEventListener("blur",this.close),n.addEventListener("input",this.onSearchInput),i.addEventListener("click",this.onClearClick),r.addEventListener("mousedown",s=>{s.preventDefault()})}toggleWindowListeners(e){e?window.addEventListener("keydown",this.onKeydown):window.removeEventListener("keydown",this.onKeydown)}makeSelectedOptionActive(){const{selectedOption:e}=this;if(!e)return;if(!this.elements.options.some(r=>e===r)){this.selectedOption=null;return}this.emitter.emit("option:click",y.getOptionData(e))}makeNextOptionSelected(){this.selectedOption=Di(this.elements.options,this.selectedIdx),ue(this.elements.list,this.selectedOption)}makePrevOptionSelected(){this.selectedOption=Hi(this.elements.options,this.selectedIdx),ue(this.elements.list,this.selectedOption)}get isLoading(){return this._isLoading}updatePlaceholder(e){this.elements.search.placeholder=e}onActiveChange(){const{_activeOption:e}=this,n=he(e);this.toggleMod("_filled",!n)}set isLoading(e){this._isLoading=e,this.toggleMod("_loading",e)}get searchValue(){return this.elements.search.value}set searchValue(e){this.elements.search.value=e,this.emitSearch()}get needRender(){return this.isOpen&&this._renderOutdated}emitSearch(){this.isAjaxSearch?this.emitter.emit("ajaxSearch",this.searchValue):this.emitter.emit("search",this.searchValue)}get isOpen(){return this._isOpen}set isOpen(e){e!==this._isOpen&&(this._isOpen=e,this.toggleMod("_opened",e),this.toggleWindowListeners(e),e?this.onOpened():this.onClosed())}set options(e){this._options=e,this._renderOutdated=!0,this.renderOptionEls()}updateNativeSelectValue(e){if(!this.nativeSelect)return;const n=e.map(y.createNativeOptionEl);y.removeHTMLCollection(this.nativeSelect.options),n.forEach(this.addNativeSelectOption)}updateHint(){this._options.length===0?this.hint=!this.searchValue&&this.isAjaxSearch?this.translation.searchHintText:this.translation.notFoundHintText:this.hint=""}renderOptionEls(e){if(!e&&!this.needRender)return;if(this.destroyOptionEls(),this.elements.options=[],this._renderOutdated=!1,this._options.length===0){this.updateHint();return}this.hint="";const n=this.createOptionEls(this._options);this.elements.list.append(...n),this.elements.options=n,this.updateOptionElsActiveMod()}createOptionEls(e){return e.map(this.createOptionEl)}updateOptionElsActiveMod(){const e=he(this._activeOption)?this.removeOptionElActiveMod:this.toggleOptionElActiveModIfNeeded;this.elements.options.forEach(e)}removeOptionElActiveMod(e){e.classList.remove("_active")}toggleOptionElActiveMod(e,n){e.classList.toggle("_active",n)}destroyOptionEls(){this.elements.options.forEach(y.removeElement),this.elements.options=[]}onOpened(){this.elements.search.focus(),this.renderOptionEls()}onClosed(){this.elements.search.blur(),this.searchValue=""}toggleMod(e,n){this.elements.root.classList.toggle(e,n)}static isSameOption(e,n){return e.label===n.label&&e.value===n.value}}class Ki extends B{constructor(n){super(n);c(this,"_activeOption",null)}set activeOption(n){var r;this._activeOption=n,this.onActiveChange(),this.updateOptionElsActiveMod(),this.updateNativeSelectValue(n?[n]:[]),this.updatePlaceholder(((r=this._activeOption)==null?void 0:r.label)||this.placeholder)}isOptionElNeedToBeActive(n){const r=y.getOptionData(n);return B.isSameOption(r,this._activeOption)}}class Gi extends P{constructor(n,r){super(n,r);c(this,"activeOption",null);c(this,"ui");c(this,"onOptionClick",n=>{this.value=n,this.ui.close()});c(this,"clear",()=>{this.value=null});this.ui=new Ki({nativeSelect:n,translation:this.translation,placeholder:this.placeholder,isAjaxSearch:this.isAjaxSearch()}),this.initUi(),this.initValue(),this.resolveInitOptions(n)}initValue(){this.value=this.nativeOptions.find(n=>n.selected)||null}get value(){var n;return((n=this.activeOption)==null?void 0:n.value)||""}set value(n){this.activeOption=P.fromConvertableOption(n),this.ui.activeOption=this.activeOption}}const Wi="_multiple",Ji=t=>J(`
    <div class="f-select__active-option">
        <div class="f-select__active-option-text">                
            ${t.label}
        </div>
        <button type="button" class="f-select__active-option-close"></button>
    </div>
`);class Xi extends B{constructor(n){super(n);c(this,"_activeOption",[]);c(this,"activeOptionsEls",[]);this.toggleMod(Wi,!0),this.updatePlaceholder(this.placeholder)}updateActiveOptionsEl(){this.activeOptionsEls.forEach(r=>r.remove());const n=this._activeOption.map(Ji);n.forEach((r,i)=>{r.querySelector("button").addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.emitter.emit("option:remove",i)})}),this.elements.area.prepend(...n),this.activeOptionsEls=n}set activeOption(n){this._activeOption=n,this.onActiveChange(),this.updateOptionElsActiveMod(),this.updateNativeSelectValue(n),this.updateActiveOptionsEl()}isOptionElNeedToBeActive(n){const r=y.getOptionData(n);return this._activeOption.some(i=>B.isSameOption(i,r))}}class ki extends P{constructor(n,r){super(n,r);c(this,"activeOption",[]);c(this,"ui");c(this,"onOptionClick",n=>{this.toggleActiveOption(n)});c(this,"removeActiveOption",n=>{const r=[...this.activeOption];r.splice(n,1),this.value=r});c(this,"clear",()=>{this.value=[]});this.ui=new Xi({nativeSelect:n,translation:this.translation,placeholder:this.placeholder,isAjaxSearch:this.isAjaxSearch()}),this.initUi(),this.initValue(),this.resolveInitOptions(n)}initUi(){super.initUi(),this.ui.emitter.on("option:remove",this.removeActiveOption)}initValue(){this.value=this.nativeOptions.filter(n=>n.selected)}get value(){return this.activeOption.map(n=>n.value)}set value(n){this.activeOption=P.fromConvertableOptions(n),this.ui.activeOption=this.activeOption}findActiveOptionIdx(n){return this.activeOption.findIndex(r=>B.isSameOption(r,n))}toggleActiveOption(n){const r=this.findActiveOptionIdx(n);r===-1?this.addActiveOption(n):this.removeActiveOption(r)}addActiveOption(n){this.value=[...this.activeOption,n]}}const de=Symbol("select");class Yi{constructor(){}static init(e,n){let r=e[de];if(!r){const i=e.multiple?ki:Gi;r=new i(e,n),e[de]=r}return r}static initAll(e=document.body,n){const r=e.querySelectorAll("select");return Array.from(r).map(i=>this.init(i,n))}}return Yi});