var bu=Object.defineProperty,vu=Object.defineProperties;var yu=Object.getOwnPropertyDescriptors;var es=Object.getOwnPropertySymbols;var Qr=Object.prototype.hasOwnProperty,Xr=Object.prototype.propertyIsEnumerable;var Zr=(e,n,t)=>n in e?bu(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,K=(e,n)=>{for(var t in n||(n={}))Qr.call(n,t)&&Zr(e,t,n[t]);if(es)for(var t of es(n))Xr.call(n,t)&&Zr(e,t,n[t]);return e},xe=(e,n)=>vu(e,yu(n));var zs=(e,n)=>{var t={};for(var s in e)Qr.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&es)for(var s of es(e))n.indexOf(s)<0&&Xr.call(e,s)&&(t[s]=e[s]);return t};const $u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};$u();function _r(e,n){const t=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)t[s[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wu=_r(ku);function aa(e){return!!e||e===""}function Ln(e){if(ae(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],r=Me(s)?Cu(s):Ln(s);if(r)for(const a in r)n[a]=r[a]}return n}else{if(Me(e))return e;if(Ne(e))return e}}const Su=/;(?![^(]*\))/g,xu=/:(.+)/;function Cu(e){const n={};return e.split(Su).forEach(t=>{if(t){const s=t.split(xu);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function we(e){let n="";if(Me(e))n=e;else if(ae(e))for(let t=0;t<e.length;t++){const s=we(e[t]);s&&(n+=s+" ")}else if(Ne(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Es(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Me(n)&&(e.class=we(n)),t&&(e.style=Ln(t)),e}function Eu(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=Jn(e[s],n[s]);return t}function Jn(e,n){if(e===n)return!0;let t=Jr(e),s=Jr(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=ae(e),s=ae(n),t||s)return t&&s?Eu(e,n):!1;if(t=Ne(e),s=Ne(n),t||s){if(!t||!s)return!1;const r=Object.keys(e).length,a=Object.keys(n).length;if(r!==a)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(i&&!l||!i&&l||!Jn(e[o],n[o]))return!1}}return String(e)===String(n)}function gr(e,n){return e.findIndex(t=>Jn(t,n))}const I=e=>Me(e)?e:e==null?"":ae(e)||Ne(e)&&(e.toString===ua||!de(e.toString))?JSON.stringify(e,ia,2):String(e),ia=(e,n)=>n&&n.__v_isRef?ia(e,n.value):pt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,r])=>(t[`${s} =>`]=r,t),{})}:yt(n)?{[`Set(${n.size})`]:[...n.values()]}:Ne(n)&&!ae(n)&&!ca(n)?String(n):n,ke={},ht=[],ln=()=>{},Ru=()=>!1,Tu=/^on[^a-z]/,Rs=e=>Tu.test(e),br=e=>e.startsWith("onUpdate:"),We=Object.assign,vr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Iu=Object.prototype.hasOwnProperty,_e=(e,n)=>Iu.call(e,n),ae=Array.isArray,pt=e=>Ts(e)==="[object Map]",yt=e=>Ts(e)==="[object Set]",Jr=e=>e instanceof Date,de=e=>typeof e=="function",Me=e=>typeof e=="string",yr=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",la=e=>Ne(e)&&de(e.then)&&de(e.catch),ua=Object.prototype.toString,Ts=e=>ua.call(e),Nu=e=>Ts(e).slice(8,-1),ca=e=>Ts(e)==="[object Object]",$r=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ls=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Is=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Au=/-(\w)/g,_n=Is(e=>e.replace(Au,(n,t)=>t?t.toUpperCase():"")),Mu=/\B([A-Z])/g,et=Is(e=>e.replace(Mu,"-$1").toLowerCase()),Ns=Is(e=>e.charAt(0).toUpperCase()+e.slice(1)),js=Is(e=>e?`on${Ns(e)}`:""),qt=(e,n)=>!Object.is(e,n),us=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ps=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ms=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let eo;const Ou=()=>eo||(eo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let mn;class Hu{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&mn&&(this.parent=mn,this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}run(n){if(this.active){const t=mn;try{return mn=this,n()}finally{mn=t}}}on(){mn=this}off(){mn=this.parent}stop(n){if(this.active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Pu(e,n=mn){n&&n.active&&n.effects.push(e)}const kr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},da=e=>(e.w&Bn)>0,ha=e=>(e.n&Bn)>0,Lu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Bn},Bu=e=>{const{deps:n}=e;if(n.length){let t=0;for(let s=0;s<n.length;s++){const r=n[s];da(r)&&!ha(r)?r.delete(e):n[t++]=r,r.w&=~Bn,r.n&=~Bn}n.length=t}},Js=new WeakMap;let Nt=0,Bn=1;const er=30;let an;const Yn=Symbol(""),nr=Symbol("");class wr{constructor(n,t=null,s){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Pu(this,s)}run(){if(!this.active)return this.fn();let n=an,t=Hn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=an,an=this,Hn=!0,Bn=1<<++Nt,Nt<=er?Lu(this):no(this),this.fn()}finally{Nt<=er&&Bu(this),Bn=1<<--Nt,an=this.parent,Hn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(no(this),this.onStop&&this.onStop(),this.active=!1)}}function no(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Hn=!0;const pa=[];function $t(){pa.push(Hn),Hn=!1}function kt(){const e=pa.pop();Hn=e===void 0?!0:e}function sn(e,n,t){if(Hn&&an){let s=Js.get(e);s||Js.set(e,s=new Map);let r=s.get(t);r||s.set(t,r=kr()),ma(r)}}function ma(e,n){let t=!1;Nt<=er?ha(e)||(e.n|=Bn,t=!da(e)):t=!e.has(an),t&&(e.add(an),an.deps.push(e))}function yn(e,n,t,s,r,a){const o=Js.get(e);if(!o)return;let i=[];if(n==="clear")i=[...o.values()];else if(t==="length"&&ae(e))o.forEach((l,p)=>{(p==="length"||p>=s)&&i.push(l)});else switch(t!==void 0&&i.push(o.get(t)),n){case"add":ae(e)?$r(t)&&i.push(o.get("length")):(i.push(o.get(Yn)),pt(e)&&i.push(o.get(nr)));break;case"delete":ae(e)||(i.push(o.get(Yn)),pt(e)&&i.push(o.get(nr)));break;case"set":pt(e)&&i.push(o.get(Yn));break}if(i.length===1)i[0]&&tr(i[0]);else{const l=[];for(const p of i)p&&l.push(...p);tr(kr(l))}}function tr(e,n){for(const t of ae(e)?e:[...e])(t!==an||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Du=_r("__proto__,__v_isRef,__isVue"),fa=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(yr)),qu=Sr(),Vu=Sr(!1,!0),Uu=Sr(!0),to=Fu();function Fu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=be(this);for(let a=0,o=this.length;a<o;a++)sn(s,"get",a+"");const r=s[n](...t);return r===-1||r===!1?s[n](...t.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){$t();const s=be(this)[n].apply(this,t);return kt(),s}}),e}function Sr(e=!1,n=!1){return function(s,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&a===(e?n?oc:ya:n?va:ba).get(s))return s;const o=ae(s);if(!e&&o&&_e(to,r))return Reflect.get(to,r,a);const i=Reflect.get(s,r,a);return(yr(r)?fa.has(r):Du(r))||(e||sn(s,"get",r),n)?i:He(i)?!o||!$r(r)?i.value:i:Ne(i)?e?$a(i):Y(i):i}}const zu=_a(),ju=_a(!0);function _a(e=!1){return function(t,s,r,a){let o=t[s];if(Vt(o)&&He(o)&&!He(r))return!1;if(!e&&!Vt(r)&&(ka(r)||(r=be(r),o=be(o)),!ae(t)&&He(o)&&!He(r)))return o.value=r,!0;const i=ae(t)&&$r(s)?Number(s)<t.length:_e(t,s),l=Reflect.set(t,s,r,a);return t===be(a)&&(i?qt(r,o)&&yn(t,"set",s,r):yn(t,"add",s,r)),l}}function Wu(e,n){const t=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&t&&yn(e,"delete",n,void 0),s}function Ku(e,n){const t=Reflect.has(e,n);return(!yr(n)||!fa.has(n))&&sn(e,"has",n),t}function Gu(e){return sn(e,"iterate",ae(e)?"length":Yn),Reflect.ownKeys(e)}const ga={get:qu,set:zu,deleteProperty:Wu,has:Ku,ownKeys:Gu},Yu={get:Uu,set(e,n){return!0},deleteProperty(e,n){return!0}},Zu=We({},ga,{get:Vu,set:ju}),xr=e=>e,As=e=>Reflect.getPrototypeOf(e);function ns(e,n,t=!1,s=!1){e=e.__v_raw;const r=be(e),a=be(n);n!==a&&!t&&sn(r,"get",n),!t&&sn(r,"get",a);const{has:o}=As(r),i=s?xr:t?Rr:Ut;if(o.call(r,n))return i(e.get(n));if(o.call(r,a))return i(e.get(a));e!==r&&e.get(n)}function ts(e,n=!1){const t=this.__v_raw,s=be(t),r=be(e);return e!==r&&!n&&sn(s,"has",e),!n&&sn(s,"has",r),e===r?t.has(e):t.has(e)||t.has(r)}function ss(e,n=!1){return e=e.__v_raw,!n&&sn(be(e),"iterate",Yn),Reflect.get(e,"size",e)}function so(e){e=be(e);const n=be(this);return As(n).has.call(n,e)||(n.add(e),yn(n,"add",e,e)),this}function ro(e,n){n=be(n);const t=be(this),{has:s,get:r}=As(t);let a=s.call(t,e);a||(e=be(e),a=s.call(t,e));const o=r.call(t,e);return t.set(e,n),a?qt(n,o)&&yn(t,"set",e,n):yn(t,"add",e,n),this}function oo(e){const n=be(this),{has:t,get:s}=As(n);let r=t.call(n,e);r||(e=be(e),r=t.call(n,e)),s&&s.call(n,e);const a=n.delete(e);return r&&yn(n,"delete",e,void 0),a}function ao(){const e=be(this),n=e.size!==0,t=e.clear();return n&&yn(e,"clear",void 0,void 0),t}function rs(e,n){return function(s,r){const a=this,o=a.__v_raw,i=be(o),l=n?xr:e?Rr:Ut;return!e&&sn(i,"iterate",Yn),o.forEach((p,f)=>s.call(r,l(p),l(f),a))}}function os(e,n,t){return function(...s){const r=this.__v_raw,a=be(r),o=pt(a),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,p=r[e](...s),f=t?xr:n?Rr:Ut;return!n&&sn(a,"iterate",l?nr:Yn),{next(){const{value:m,done:v}=p.next();return v?{value:m,done:v}:{value:i?[f(m[0]),f(m[1])]:f(m),done:v}},[Symbol.iterator](){return this}}}}function Cn(e){return function(...n){return e==="delete"?!1:this}}function Qu(){const e={get(a){return ns(this,a)},get size(){return ss(this)},has:ts,add:so,set:ro,delete:oo,clear:ao,forEach:rs(!1,!1)},n={get(a){return ns(this,a,!1,!0)},get size(){return ss(this)},has:ts,add:so,set:ro,delete:oo,clear:ao,forEach:rs(!1,!0)},t={get(a){return ns(this,a,!0)},get size(){return ss(this,!0)},has(a){return ts.call(this,a,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:rs(!0,!1)},s={get(a){return ns(this,a,!0,!0)},get size(){return ss(this,!0)},has(a){return ts.call(this,a,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=os(a,!1,!1),t[a]=os(a,!0,!1),n[a]=os(a,!1,!0),s[a]=os(a,!0,!0)}),[e,t,n,s]}const[Xu,Ju,ec,nc]=Qu();function Cr(e,n){const t=n?e?nc:ec:e?Ju:Xu;return(s,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(_e(t,r)&&r in s?t:s,r,a)}const tc={get:Cr(!1,!1)},sc={get:Cr(!1,!0)},rc={get:Cr(!0,!1)},ba=new WeakMap,va=new WeakMap,ya=new WeakMap,oc=new WeakMap;function ac(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ic(e){return e.__v_skip||!Object.isExtensible(e)?0:ac(Nu(e))}function Y(e){return Vt(e)?e:Er(e,!1,ga,tc,ba)}function lc(e){return Er(e,!1,Zu,sc,va)}function $a(e){return Er(e,!0,Yu,rc,ya)}function Er(e,n,t,s,r){if(!Ne(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const o=ic(e);if(o===0)return e;const i=new Proxy(e,o===2?s:t);return r.set(e,i),i}function mt(e){return Vt(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function ka(e){return!!(e&&e.__v_isShallow)}function wa(e){return mt(e)||Vt(e)}function be(e){const n=e&&e.__v_raw;return n?be(n):e}function Sa(e){return ps(e,"__v_skip",!0),e}const Ut=e=>Ne(e)?Y(e):e,Rr=e=>Ne(e)?$a(e):e;function xa(e){Hn&&an&&(e=be(e),ma(e.dep||(e.dep=kr())))}function Ca(e,n){e=be(e),e.dep&&tr(e.dep)}function He(e){return!!(e&&e.__v_isRef===!0)}function $n(e){return Ea(e,!1)}function uc(e){return Ea(e,!0)}function Ea(e,n){return He(e)?e:new cc(e,n)}class cc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:be(n),this._value=t?n:Ut(n)}get value(){return xa(this),this._value}set value(n){n=this.__v_isShallow?n:be(n),qt(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Ut(n),Ca(this))}}function Mt(e){return He(e)?e.value:e}const dc={get:(e,n,t)=>Mt(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const r=e[n];return He(r)&&!He(t)?(r.value=t,!0):Reflect.set(e,n,t,s)}};function Ra(e){return mt(e)?e:new Proxy(e,dc)}function J(e){const n=ae(e)?new Array(e.length):{};for(const t in e)n[t]=pc(e,t);return n}class hc{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function pc(e,n,t){const s=e[n];return He(s)?s:new hc(e,n,t)}class mc{constructor(n,t,s,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new wr(n,()=>{this._dirty||(this._dirty=!0,Ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const n=be(this);return xa(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function fc(e,n,t=!1){let s,r;const a=de(e);return a?(s=e,r=ln):(s=e.get,r=e.set),new mc(s,r,a||!r,t)}function Pn(e,n,t,s){let r;try{r=s?e(...s):e()}catch(a){Ms(a,n,t)}return r}function un(e,n,t,s){if(de(e)){const a=Pn(e,n,t,s);return a&&la(a)&&a.catch(o=>{Ms(o,n,t)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(un(e[a],n,t,s));return r}function Ms(e,n,t,s=!0){const r=n?n.vnode:null;if(n){let a=n.parent;const o=n.proxy,i=t;for(;a;){const p=a.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,o,i)===!1)return}a=a.parent}const l=n.appContext.config.errorHandler;if(l){Pn(l,null,10,[e,o,i]);return}}_c(e,t,r,s)}function _c(e,n,t,s=!0){console.error(e)}let fs=!1,sr=!1;const nn=[];let bn=0;const Ot=[];let At=null,ut=0;const Ht=[];let In=null,ct=0;const Ta=Promise.resolve();let Tr=null,rr=null;function Ir(e){const n=Tr||Ta;return e?n.then(this?e.bind(this):e):n}function gc(e){let n=bn+1,t=nn.length;for(;n<t;){const s=n+t>>>1;Ft(nn[s])<e?n=s+1:t=s}return n}function Ia(e){(!nn.length||!nn.includes(e,fs&&e.allowRecurse?bn+1:bn))&&e!==rr&&(e.id==null?nn.push(e):nn.splice(gc(e.id),0,e),Na())}function Na(){!fs&&!sr&&(sr=!0,Tr=Ta.then(Oa))}function bc(e){const n=nn.indexOf(e);n>bn&&nn.splice(n,1)}function Aa(e,n,t,s){ae(e)?t.push(...e):(!n||!n.includes(e,e.allowRecurse?s+1:s))&&t.push(e),Na()}function vc(e){Aa(e,At,Ot,ut)}function yc(e){Aa(e,In,Ht,ct)}function Nr(e,n=null){if(Ot.length){for(rr=n,At=[...new Set(Ot)],Ot.length=0,ut=0;ut<At.length;ut++)At[ut]();At=null,ut=0,rr=null,Nr(e,n)}}function Ma(e){if(Ht.length){const n=[...new Set(Ht)];if(Ht.length=0,In){In.push(...n);return}for(In=n,In.sort((t,s)=>Ft(t)-Ft(s)),ct=0;ct<In.length;ct++)In[ct]();In=null,ct=0}}const Ft=e=>e.id==null?1/0:e.id;function Oa(e){sr=!1,fs=!0,Nr(e),nn.sort((t,s)=>Ft(t)-Ft(s));const n=ln;try{for(bn=0;bn<nn.length;bn++){const t=nn[bn];t&&t.active!==!1&&Pn(t,null,14)}}finally{bn=0,nn.length=0,Ma(),fs=!1,Tr=null,(nn.length||Ot.length||Ht.length)&&Oa(e)}}function $c(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||ke;let r=t;const a=n.startsWith("update:"),o=a&&n.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=s[f]||ke;v?r=t.map(R=>R.trim()):m&&(r=t.map(ms))}let i,l=s[i=js(n)]||s[i=js(_n(n))];!l&&a&&(l=s[i=js(et(n))]),l&&un(l,e,6,r);const p=s[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,un(p,e,6,r)}}function Ha(e,n,t=!1){const s=n.emitsCache,r=s.get(e);if(r!==void 0)return r;const a=e.emits;let o={},i=!1;if(!de(e)){const l=p=>{const f=Ha(p,n,!0);f&&(i=!0,We(o,f))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!i?(s.set(e,null),null):(ae(a)?a.forEach(l=>o[l]=null):We(o,a),s.set(e,o),o)}function Os(e,n){return!e||!Rs(n)?!1:(n=n.slice(2).replace(/Once$/,""),_e(e,n[0].toLowerCase()+n.slice(1))||_e(e,et(n))||_e(e,n))}let je=null,Hs=null;function _s(e){const n=je;return je=e,Hs=e&&e.type.__scopeId||null,n}function Pa(e){Hs=e}function La(){Hs=null}function h(e,n=je,t){if(!n||e._n)return e;const s=(...r)=>{s._d&&go(-1);const a=_s(n),o=e(...r);return _s(a),s._d&&go(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ws(e){const{type:n,vnode:t,proxy:s,withProxy:r,props:a,propsOptions:[o],slots:i,attrs:l,emit:p,render:f,renderCache:m,data:v,setupState:R,ctx:j,inheritAttrs:L}=e;let Q,te;const ue=_s(e);try{if(t.shapeFlag&4){const pe=r||s;Q=fn(f.call(pe,pe,m,a,R,v,j)),te=l}else{const pe=n;Q=fn(pe.length>1?pe(a,{attrs:l,slots:i,emit:p}):pe(a,null)),te=n.props?l:kc(l)}}catch(pe){Pt.length=0,Ms(pe,e,1),Q=u(Dn)}let fe=Q;if(te&&L!==!1){const pe=Object.keys(te),{shapeFlag:Re}=fe;pe.length&&Re&7&&(o&&pe.some(br)&&(te=wc(te,o)),fe=zt(fe,te))}return t.dirs&&(fe.dirs=fe.dirs?fe.dirs.concat(t.dirs):t.dirs),t.transition&&(fe.transition=t.transition),Q=fe,_s(ue),Q}const kc=e=>{let n;for(const t in e)(t==="class"||t==="style"||Rs(t))&&((n||(n={}))[t]=e[t]);return n},wc=(e,n)=>{const t={};for(const s in e)(!br(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Sc(e,n,t){const{props:s,children:r,component:a}=e,{props:o,children:i,patchFlag:l}=n,p=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?io(s,o,p):!!o;if(l&8){const f=n.dynamicProps;for(let m=0;m<f.length;m++){const v=f[m];if(o[v]!==s[v]&&!Os(p,v))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?io(s,o,p):!0:!!o;return!1}function io(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(n[a]!==e[a]&&!Os(t,a))return!0}return!1}function xc({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Cc=e=>e.__isSuspense;function Ec(e,n){n&&n.pendingBranch?ae(e)?n.effects.push(...e):n.effects.push(e):yc(e)}function Ee(e,n){if(qe){let t=qe.provides;const s=qe.parent&&qe.parent.provides;s===t&&(t=qe.provides=Object.create(s)),t[e]=n}}function Se(e,n,t=!1){const s=qe||je;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&de(n)?n.call(s.proxy):n}}const lo={};function Ve(e,n,t){return Ba(e,n,t)}function Ba(e,n,{immediate:t,deep:s,flush:r,onTrack:a,onTrigger:o}=ke){const i=qe;let l,p=!1,f=!1;if(He(e)?(l=()=>e.value,p=ka(e)):mt(e)?(l=()=>e,s=!0):ae(e)?(f=!0,p=e.some(mt),l=()=>e.map(te=>{if(He(te))return te.value;if(mt(te))return Gn(te);if(de(te))return Pn(te,i,2)})):de(e)?n?l=()=>Pn(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),un(e,i,3,[v])}:l=ln,n&&s){const te=l;l=()=>Gn(te())}let m,v=te=>{m=Q.onStop=()=>{Pn(te,i,4)}};if(jt)return v=ln,n?t&&un(n,i,3,[l(),f?[]:void 0,v]):l(),ln;let R=f?[]:lo;const j=()=>{if(!!Q.active)if(n){const te=Q.run();(s||p||(f?te.some((ue,fe)=>qt(ue,R[fe])):qt(te,R)))&&(m&&m(),un(n,i,3,[te,R===lo?void 0:R,v]),R=te)}else Q.run()};j.allowRecurse=!!n;let L;r==="sync"?L=j:r==="post"?L=()=>Ye(j,i&&i.suspense):L=()=>{!i||i.isMounted?vc(j):j()};const Q=new wr(l,L);return n?t?j():R=Q.run():r==="post"?Ye(Q.run.bind(Q),i&&i.suspense):Q.run(),()=>{Q.stop(),i&&i.scope&&vr(i.scope.effects,Q)}}function Rc(e,n,t){const s=this.proxy,r=Me(e)?e.includes(".")?Da(s,e):()=>s[e]:e.bind(s,s);let a;de(n)?a=n:(a=n.handler,t=n);const o=qe;ft(this);const i=Ba(r,a.bind(s),t);return o?ft(o):Qn(),i}function Da(e,n){const t=n.split(".");return()=>{let s=e;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}function Gn(e,n){if(!Ne(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),He(e))Gn(e.value,n);else if(ae(e))for(let t=0;t<e.length;t++)Gn(e[t],n);else if(yt(e)||pt(e))e.forEach(t=>{Gn(t,n)});else if(ca(e))for(const t in e)Gn(e[t],n);return e}function y(e){return de(e)?{setup:e,name:e.name}:e}const gs=e=>!!e.type.__asyncLoader,qa=e=>e.type.__isKeepAlive;function Tc(e,n){Va(e,"a",n)}function Ic(e,n){Va(e,"da",n)}function Va(e,n,t=qe){const s=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ps(n,s,t),t){let r=t.parent;for(;r&&r.parent;)qa(r.parent.vnode)&&Nc(s,n,t,r),r=r.parent}}function Nc(e,n,t,s){const r=Ps(n,e,s,!0);wt(()=>{vr(s[n],r)},t)}function Ps(e,n,t=qe,s=!1){if(t){const r=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;$t(),ft(t);const i=un(n,t,e,o);return Qn(),kt(),i});return s?r.unshift(a):r.push(a),a}}const kn=e=>(n,t=qe)=>(!jt||e==="sp")&&Ps(e,n,t),Ac=kn("bm"),Pe=kn("m"),Mc=kn("bu"),Oc=kn("u"),Hc=kn("bum"),wt=kn("um"),Pc=kn("sp"),Lc=kn("rtg"),Bc=kn("rtc");function Dc(e,n=qe){Ps("ec",e,n)}let or=!0;function qc(e){const n=Fa(e),t=e.proxy,s=e.ctx;or=!1,n.beforeCreate&&uo(n.beforeCreate,e,"bc");const{data:r,computed:a,methods:o,watch:i,provide:l,inject:p,created:f,beforeMount:m,mounted:v,beforeUpdate:R,updated:j,activated:L,deactivated:Q,beforeDestroy:te,beforeUnmount:ue,destroyed:fe,unmounted:pe,render:Re,renderTracked:Le,renderTriggered:Ke,errorCaptured:cn,serverPrefetch:Ie,expose:Ze,inheritAttrs:Ge,components:Qe,directives:dn,filters:Xe}=n;if(p&&Vc(p,s,null,e.appContext.config.unwrapInjectedRef),o)for(const q in o){const X=o[q];de(X)&&(s[q]=X.bind(t))}if(r){const q=r.call(t,t);Ne(q)&&(e.data=Y(q))}if(or=!0,a)for(const q in a){const X=a[q],ie=de(X)?X.bind(t,t):de(X.get)?X.get.bind(t,t):ln,ge=!de(X)&&de(X.set)?X.set.bind(t):ln,Ce=F({get:ie,set:ge});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Ae=>Ce.value=Ae})}if(i)for(const q in i)Ua(i[q],s,t,q);if(l){const q=de(l)?l.call(t):l;Reflect.ownKeys(q).forEach(X=>{Ee(X,q[X])})}f&&uo(f,e,"c");function M(q,X){ae(X)?X.forEach(ie=>q(ie.bind(t))):X&&q(X.bind(t))}if(M(Ac,m),M(Pe,v),M(Mc,R),M(Oc,j),M(Tc,L),M(Ic,Q),M(Dc,cn),M(Bc,Le),M(Lc,Ke),M(Hc,ue),M(wt,pe),M(Pc,Ie),ae(Ze))if(Ze.length){const q=e.exposed||(e.exposed={});Ze.forEach(X=>{Object.defineProperty(q,X,{get:()=>t[X],set:ie=>t[X]=ie})})}else e.exposed||(e.exposed={});Re&&e.render===ln&&(e.render=Re),Ge!=null&&(e.inheritAttrs=Ge),Qe&&(e.components=Qe),dn&&(e.directives=dn)}function Vc(e,n,t=ln,s=!1){ae(e)&&(e=ar(e));for(const r in e){const a=e[r];let o;Ne(a)?"default"in a?o=Se(a.from||r,a.default,!0):o=Se(a.from||r):o=Se(a),He(o)&&s?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[r]=o}}function uo(e,n,t){un(ae(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ua(e,n,t,s){const r=s.includes(".")?Da(t,s):()=>t[s];if(Me(e)){const a=n[e];de(a)&&Ve(r,a)}else if(de(e))Ve(r,e.bind(t));else if(Ne(e))if(ae(e))e.forEach(a=>Ua(a,n,t,s));else{const a=de(e.handler)?e.handler.bind(t):n[e.handler];de(a)&&Ve(r,a,e)}}function Fa(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,i=a.get(n);let l;return i?l=i:!r.length&&!t&&!s?l=n:(l={},r.length&&r.forEach(p=>bs(l,p,o,!0)),bs(l,n,o)),a.set(n,l),l}function bs(e,n,t,s=!1){const{mixins:r,extends:a}=n;a&&bs(e,a,t,!0),r&&r.forEach(o=>bs(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const i=Uc[o]||t&&t[o];e[o]=i?i(e[o],n[o]):n[o]}return e}const Uc={data:co,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Wn,directives:Wn,watch:zc,provide:co,inject:Fc};function co(e,n){return n?e?function(){return We(de(e)?e.call(this,this):e,de(n)?n.call(this,this):n)}:n:e}function Fc(e,n){return Wn(ar(e),ar(n))}function ar(e){if(ae(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function ze(e,n){return e?[...new Set([].concat(e,n))]:n}function Wn(e,n){return e?We(We(Object.create(null),e),n):n}function zc(e,n){if(!e)return n;if(!n)return e;const t=We(Object.create(null),e);for(const s in n)t[s]=ze(e[s],n[s]);return t}function jc(e,n,t,s=!1){const r={},a={};ps(a,Ls,1),e.propsDefaults=Object.create(null),za(e,n,r,a);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);t?e.props=s?r:lc(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function Wc(e,n,t,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=e,i=be(r),[l]=e.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let v=f[m];if(Os(e.emitsOptions,v))continue;const R=n[v];if(l)if(_e(a,v))R!==a[v]&&(a[v]=R,p=!0);else{const j=_n(v);r[j]=ir(l,i,j,R,e,!1)}else R!==a[v]&&(a[v]=R,p=!0)}}}else{za(e,n,r,a)&&(p=!0);let f;for(const m in i)(!n||!_e(n,m)&&((f=et(m))===m||!_e(n,f)))&&(l?t&&(t[m]!==void 0||t[f]!==void 0)&&(r[m]=ir(l,i,m,void 0,e,!0)):delete r[m]);if(a!==i)for(const m in a)(!n||!_e(n,m)&&!0)&&(delete a[m],p=!0)}p&&yn(e,"set","$attrs")}function za(e,n,t,s){const[r,a]=e.propsOptions;let o=!1,i;if(n)for(let l in n){if(ls(l))continue;const p=n[l];let f;r&&_e(r,f=_n(l))?!a||!a.includes(f)?t[f]=p:(i||(i={}))[f]=p:Os(e.emitsOptions,l)||(!(l in s)||p!==s[l])&&(s[l]=p,o=!0)}if(a){const l=be(t),p=i||ke;for(let f=0;f<a.length;f++){const m=a[f];t[m]=ir(r,l,m,p[m],e,!_e(p,m))}}return o}function ir(e,n,t,s,r,a){const o=e[t];if(o!=null){const i=_e(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&de(l)){const{propsDefaults:p}=r;t in p?s=p[t]:(ft(r),s=p[t]=l.call(null,n),Qn())}else s=l}o[0]&&(a&&!i?s=!1:o[1]&&(s===""||s===et(t))&&(s=!0))}return s}function ja(e,n,t=!1){const s=n.propsCache,r=s.get(e);if(r)return r;const a=e.props,o={},i=[];let l=!1;if(!de(e)){const f=m=>{l=!0;const[v,R]=ja(m,n,!0);We(o,v),R&&i.push(...R)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!l)return s.set(e,ht),ht;if(ae(a))for(let f=0;f<a.length;f++){const m=_n(a[f]);ho(m)&&(o[m]=ke)}else if(a)for(const f in a){const m=_n(f);if(ho(m)){const v=a[f],R=o[m]=ae(v)||de(v)?{type:v}:v;if(R){const j=fo(Boolean,R.type),L=fo(String,R.type);R[0]=j>-1,R[1]=L<0||j<L,(j>-1||_e(R,"default"))&&i.push(m)}}}const p=[o,i];return s.set(e,p),p}function ho(e){return e[0]!=="$"}function po(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function mo(e,n){return po(e)===po(n)}function fo(e,n){return ae(n)?n.findIndex(t=>mo(t,e)):de(n)&&mo(n,e)?0:-1}const Wa=e=>e[0]==="_"||e==="$stable",Ar=e=>ae(e)?e.map(fn):[fn(e)],Kc=(e,n,t)=>{const s=h((...r)=>Ar(n(...r)),t);return s._c=!1,s},Ka=(e,n,t)=>{const s=e._ctx;for(const r in e){if(Wa(r))continue;const a=e[r];if(de(a))n[r]=Kc(r,a,s);else if(a!=null){const o=Ar(a);n[r]=()=>o}}},Ga=(e,n)=>{const t=Ar(n);e.slots.default=()=>t},Gc=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=be(n),ps(n,"_",t)):Ka(n,e.slots={})}else e.slots={},n&&Ga(e,n);ps(e.slots,Ls,1)},Yc=(e,n,t)=>{const{vnode:s,slots:r}=e;let a=!0,o=ke;if(s.shapeFlag&32){const i=n._;i?t&&i===1?a=!1:(We(r,n),!t&&i===1&&delete r._):(a=!n.$stable,Ka(n,r)),o=n}else n&&(Ga(e,n),o={default:1});if(a)for(const i in r)!Wa(i)&&!(i in o)&&delete r[i]};function gn(e,n){const t=je;if(t===null)return e;const s=Ds(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[o,i,l,p=ke]=n[a];de(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(i),r.push({dir:o,instance:s,value:i,oldValue:void 0,arg:l,modifiers:p})}return e}function zn(e,n,t,s){const r=e.dirs,a=n&&n.dirs;for(let o=0;o<r.length;o++){const i=r[o];a&&(i.oldValue=a[o].value);let l=i.dir[s];l&&($t(),un(l,t,8,[e.el,i,e,n]),kt())}}function Ya(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function Qc(e,n){return function(s,r=null){de(s)||(s=Object.assign({},s)),r!=null&&!Ne(r)&&(r=null);const a=Ya(),o=new Set;let i=!1;const l=a.app={_uid:Zc++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:md,get config(){return a.config},set config(p){},use(p,...f){return o.has(p)||(p&&de(p.install)?(o.add(p),p.install(l,...f)):de(p)&&(o.add(p),p(l,...f))),l},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),l},component(p,f){return f?(a.components[p]=f,l):a.components[p]},directive(p,f){return f?(a.directives[p]=f,l):a.directives[p]},mount(p,f,m){if(!i){const v=u(s,r);return v.appContext=a,f&&n?n(v,p):e(v,p,m),i=!0,l._container=p,p.__vue_app__=l,Ds(v.component)||v.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(p,f){return a.provides[p]=f,l}};return l}}function lr(e,n,t,s,r=!1){if(ae(e)){e.forEach((v,R)=>lr(v,n&&(ae(n)?n[R]:n),t,s,r));return}if(gs(s)&&!r)return;const a=s.shapeFlag&4?Ds(s.component)||s.component.proxy:s.el,o=r?null:a,{i,r:l}=e,p=n&&n.r,f=i.refs===ke?i.refs={}:i.refs,m=i.setupState;if(p!=null&&p!==l&&(Me(p)?(f[p]=null,_e(m,p)&&(m[p]=null)):He(p)&&(p.value=null)),de(l))Pn(l,i,12,[o,f]);else{const v=Me(l),R=He(l);if(v||R){const j=()=>{if(e.f){const L=v?f[l]:l.value;r?ae(L)&&vr(L,a):ae(L)?L.includes(a)||L.push(a):v?(f[l]=[a],_e(m,l)&&(m[l]=f[l])):(l.value=[a],e.k&&(f[e.k]=l.value))}else v?(f[l]=o,_e(m,l)&&(m[l]=o)):He(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(j.id=-1,Ye(j,t)):j()}}}const Ye=Ec;function Xc(e){return Jc(e)}function Jc(e,n){const t=Ou();t.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:i,createComment:l,setText:p,setElementText:f,parentNode:m,nextSibling:v,setScopeId:R=ln,cloneNode:j,insertStaticContent:L}=e,Q=(b,$,C,A=null,x=null,V=null,B=!1,N=null,U=!!$.dynamicChildren)=>{if(b===$)return;b&&!Rt(b,$)&&(A=se(b),Be(b,x,V,!0),b=null),$.patchFlag===-2&&(U=!1,$.dynamicChildren=null);const{type:O,ref:re,shapeFlag:ee}=$;switch(O){case Or:te(b,$,C,A);break;case Dn:ue(b,$,C,A);break;case cs:b==null&&fe($,C,A,B);break;case D:dn(b,$,C,A,x,V,B,N,U);break;default:ee&1?Le(b,$,C,A,x,V,B,N,U):ee&6?Xe(b,$,C,A,x,V,B,N,U):(ee&64||ee&128)&&O.process(b,$,C,A,x,V,B,N,U,ye)}re!=null&&x&&lr(re,b&&b.ref,V,$||b,!$)},te=(b,$,C,A)=>{if(b==null)s($.el=i($.children),C,A);else{const x=$.el=b.el;$.children!==b.children&&p(x,$.children)}},ue=(b,$,C,A)=>{b==null?s($.el=l($.children||""),C,A):$.el=b.el},fe=(b,$,C,A)=>{[b.el,b.anchor]=L(b.children,$,C,A,b.el,b.anchor)},pe=({el:b,anchor:$},C,A)=>{let x;for(;b&&b!==$;)x=v(b),s(b,C,A),b=x;s($,C,A)},Re=({el:b,anchor:$})=>{let C;for(;b&&b!==$;)C=v(b),r(b),b=C;r($)},Le=(b,$,C,A,x,V,B,N,U)=>{B=B||$.type==="svg",b==null?Ke($,C,A,x,V,B,N,U):Ze(b,$,x,V,B,N,U)},Ke=(b,$,C,A,x,V,B,N)=>{let U,O;const{type:re,props:ee,shapeFlag:E,transition:H,patchFlag:Z,dirs:oe}=b;if(b.el&&j!==void 0&&Z===-1)U=b.el=j(b.el);else{if(U=b.el=o(b.type,V,ee&&ee.is,ee),E&8?f(U,b.children):E&16&&Ie(b.children,U,null,A,x,V&&re!=="foreignObject",B,N),oe&&zn(b,null,A,"created"),ee){for(const me in ee)me!=="value"&&!ls(me)&&a(U,me,null,ee[me],V,b.children,A,x,z);"value"in ee&&a(U,"value",null,ee.value),(O=ee.onVnodeBeforeMount)&&pn(O,A,b)}cn(U,b,b.scopeId,B,A)}oe&&zn(b,null,A,"beforeMount");const ce=(!x||x&&!x.pendingBranch)&&H&&!H.persisted;ce&&H.beforeEnter(U),s(U,$,C),((O=ee&&ee.onVnodeMounted)||ce||oe)&&Ye(()=>{O&&pn(O,A,b),ce&&H.enter(U),oe&&zn(b,null,A,"mounted")},x)},cn=(b,$,C,A,x)=>{if(C&&R(b,C),A)for(let V=0;V<A.length;V++)R(b,A[V]);if(x){let V=x.subTree;if($===V){const B=x.vnode;cn(b,B,B.scopeId,B.slotScopeIds,x.parent)}}},Ie=(b,$,C,A,x,V,B,N,U=0)=>{for(let O=U;O<b.length;O++){const re=b[O]=N?Nn(b[O]):fn(b[O]);Q(null,re,$,C,A,x,V,B,N)}},Ze=(b,$,C,A,x,V,B)=>{const N=$.el=b.el;let{patchFlag:U,dynamicChildren:O,dirs:re}=$;U|=b.patchFlag&16;const ee=b.props||ke,E=$.props||ke;let H;C&&jn(C,!1),(H=E.onVnodeBeforeUpdate)&&pn(H,C,$,b),re&&zn($,b,C,"beforeUpdate"),C&&jn(C,!0);const Z=x&&$.type!=="foreignObject";if(O?Ge(b.dynamicChildren,O,N,C,A,Z,V):B||ie(b,$,N,null,C,A,Z,V,!1),U>0){if(U&16)Qe(N,$,ee,E,C,A,x);else if(U&2&&ee.class!==E.class&&a(N,"class",null,E.class,x),U&4&&a(N,"style",ee.style,E.style,x),U&8){const oe=$.dynamicProps;for(let ce=0;ce<oe.length;ce++){const me=oe[ce],Je=ee[me],xn=E[me];(xn!==Je||me==="value")&&a(N,me,Je,xn,x,b.children,C,A,z)}}U&1&&b.children!==$.children&&f(N,$.children)}else!B&&O==null&&Qe(N,$,ee,E,C,A,x);((H=E.onVnodeUpdated)||re)&&Ye(()=>{H&&pn(H,C,$,b),re&&zn($,b,C,"updated")},A)},Ge=(b,$,C,A,x,V,B)=>{for(let N=0;N<$.length;N++){const U=b[N],O=$[N],re=U.el&&(U.type===D||!Rt(U,O)||U.shapeFlag&70)?m(U.el):C;Q(U,O,re,null,A,x,V,B,!0)}},Qe=(b,$,C,A,x,V,B)=>{if(C!==A){for(const N in A){if(ls(N))continue;const U=A[N],O=C[N];U!==O&&N!=="value"&&a(b,N,O,U,B,$.children,x,V,z)}if(C!==ke)for(const N in C)!ls(N)&&!(N in A)&&a(b,N,C[N],null,B,$.children,x,V,z);"value"in A&&a(b,"value",C.value,A.value)}},dn=(b,$,C,A,x,V,B,N,U)=>{const O=$.el=b?b.el:i(""),re=$.anchor=b?b.anchor:i("");let{patchFlag:ee,dynamicChildren:E,slotScopeIds:H}=$;H&&(N=N?N.concat(H):H),b==null?(s(O,C,A),s(re,C,A),Ie($.children,C,re,x,V,B,N,U)):ee>0&&ee&64&&E&&b.dynamicChildren?(Ge(b.dynamicChildren,E,C,x,V,B,N),($.key!=null||x&&$===x.subTree)&&Za(b,$,!0)):ie(b,$,C,re,x,V,B,N,U)},Xe=(b,$,C,A,x,V,B,N,U)=>{$.slotScopeIds=N,b==null?$.shapeFlag&512?x.ctx.activate($,C,A,B,U):on($,C,A,x,V,B,U):M(b,$,U)},on=(b,$,C,A,x,V,B)=>{const N=b.component=id(b,A,x);if(qa(b)&&(N.ctx.renderer=ye),ld(N),N.asyncDep){if(x&&x.registerDep(N,q),!b.el){const U=N.subTree=u(Dn);ue(null,U,$,C)}return}q(N,b,$,C,x,V,B)},M=(b,$,C)=>{const A=$.component=b.component;if(Sc(b,$,C))if(A.asyncDep&&!A.asyncResolved){X(A,$,C);return}else A.next=$,bc(A.update),A.update();else $.component=b.component,$.el=b.el,A.vnode=$},q=(b,$,C,A,x,V,B)=>{const N=()=>{if(b.isMounted){let{next:re,bu:ee,u:E,parent:H,vnode:Z}=b,oe=re,ce;jn(b,!1),re?(re.el=Z.el,X(b,re,B)):re=Z,ee&&us(ee),(ce=re.props&&re.props.onVnodeBeforeUpdate)&&pn(ce,H,re,Z),jn(b,!0);const me=Ws(b),Je=b.subTree;b.subTree=me,Q(Je,me,m(Je.el),se(Je),b,x,V),re.el=me.el,oe===null&&xc(b,me.el),E&&Ye(E,x),(ce=re.props&&re.props.onVnodeUpdated)&&Ye(()=>pn(ce,H,re,Z),x)}else{let re;const{el:ee,props:E}=$,{bm:H,m:Z,parent:oe}=b,ce=gs($);if(jn(b,!1),H&&us(H),!ce&&(re=E&&E.onVnodeBeforeMount)&&pn(re,oe,$),jn(b,!0),ee&&le){const me=()=>{b.subTree=Ws(b),le(ee,b.subTree,b,x,null)};ce?$.type.__asyncLoader().then(()=>!b.isUnmounted&&me()):me()}else{const me=b.subTree=Ws(b);Q(null,me,C,A,b,x,V),$.el=me.el}if(Z&&Ye(Z,x),!ce&&(re=E&&E.onVnodeMounted)){const me=$;Ye(()=>pn(re,oe,me),x)}$.shapeFlag&256&&b.a&&Ye(b.a,x),b.isMounted=!0,$=C=A=null}},U=b.effect=new wr(N,()=>Ia(b.update),b.scope),O=b.update=U.run.bind(U);O.id=b.uid,jn(b,!0),O()},X=(b,$,C)=>{$.component=b;const A=b.vnode.props;b.vnode=$,b.next=null,Wc(b,$.props,A,C),Yc(b,$.children,C),$t(),Nr(void 0,b.update),kt()},ie=(b,$,C,A,x,V,B,N,U=!1)=>{const O=b&&b.children,re=b?b.shapeFlag:0,ee=$.children,{patchFlag:E,shapeFlag:H}=$;if(E>0){if(E&128){Ce(O,ee,C,A,x,V,B,N,U);return}else if(E&256){ge(O,ee,C,A,x,V,B,N,U);return}}H&8?(re&16&&z(O,x,V),ee!==O&&f(C,ee)):re&16?H&16?Ce(O,ee,C,A,x,V,B,N,U):z(O,x,V,!0):(re&8&&f(C,""),H&16&&Ie(ee,C,A,x,V,B,N,U))},ge=(b,$,C,A,x,V,B,N,U)=>{b=b||ht,$=$||ht;const O=b.length,re=$.length,ee=Math.min(O,re);let E;for(E=0;E<ee;E++){const H=$[E]=U?Nn($[E]):fn($[E]);Q(b[E],H,C,null,x,V,B,N,U)}O>re?z(b,x,V,!0,!1,ee):Ie($,C,A,x,V,B,N,U,ee)},Ce=(b,$,C,A,x,V,B,N,U)=>{let O=0;const re=$.length;let ee=b.length-1,E=re-1;for(;O<=ee&&O<=E;){const H=b[O],Z=$[O]=U?Nn($[O]):fn($[O]);if(Rt(H,Z))Q(H,Z,C,null,x,V,B,N,U);else break;O++}for(;O<=ee&&O<=E;){const H=b[ee],Z=$[E]=U?Nn($[E]):fn($[E]);if(Rt(H,Z))Q(H,Z,C,null,x,V,B,N,U);else break;ee--,E--}if(O>ee){if(O<=E){const H=E+1,Z=H<re?$[H].el:A;for(;O<=E;)Q(null,$[O]=U?Nn($[O]):fn($[O]),C,Z,x,V,B,N,U),O++}}else if(O>E)for(;O<=ee;)Be(b[O],x,V,!0),O++;else{const H=O,Z=O,oe=new Map;for(O=Z;O<=E;O++){const en=$[O]=U?Nn($[O]):fn($[O]);en.key!=null&&oe.set(en.key,O)}let ce,me=0;const Je=E-Z+1;let xn=!1,Kr=0;const Et=new Array(Je);for(O=0;O<Je;O++)Et[O]=0;for(O=H;O<=ee;O++){const en=b[O];if(me>=Je){Be(en,x,V,!0);continue}let hn;if(en.key!=null)hn=oe.get(en.key);else for(ce=Z;ce<=E;ce++)if(Et[ce-Z]===0&&Rt(en,$[ce])){hn=ce;break}hn===void 0?Be(en,x,V,!0):(Et[hn-Z]=O+1,hn>=Kr?Kr=hn:xn=!0,Q(en,$[hn],C,null,x,V,B,N,U),me++)}const Gr=xn?ed(Et):ht;for(ce=Gr.length-1,O=Je-1;O>=0;O--){const en=Z+O,hn=$[en],Yr=en+1<re?$[en+1].el:A;Et[O]===0?Q(null,hn,C,Yr,x,V,B,N,U):xn&&(ce<0||O!==Gr[ce]?Ae(hn,C,Yr,2):ce--)}}},Ae=(b,$,C,A,x=null)=>{const{el:V,type:B,transition:N,children:U,shapeFlag:O}=b;if(O&6){Ae(b.component.subTree,$,C,A);return}if(O&128){b.suspense.move($,C,A);return}if(O&64){B.move(b,$,C,ye);return}if(B===D){s(V,$,C);for(let ee=0;ee<U.length;ee++)Ae(U[ee],$,C,A);s(b.anchor,$,C);return}if(B===cs){pe(b,$,C);return}if(A!==2&&O&1&&N)if(A===0)N.beforeEnter(V),s(V,$,C),Ye(()=>N.enter(V),x);else{const{leave:ee,delayLeave:E,afterLeave:H}=N,Z=()=>s(V,$,C),oe=()=>{ee(V,()=>{Z(),H&&H()})};E?E(V,Z,oe):oe()}else s(V,$,C)},Be=(b,$,C,A=!1,x=!1)=>{const{type:V,props:B,ref:N,children:U,dynamicChildren:O,shapeFlag:re,patchFlag:ee,dirs:E}=b;if(N!=null&&lr(N,null,C,b,!0),re&256){$.ctx.deactivate(b);return}const H=re&1&&E,Z=!gs(b);let oe;if(Z&&(oe=B&&B.onVnodeBeforeUnmount)&&pn(oe,$,b),re&6)ne(b.component,C,A);else{if(re&128){b.suspense.unmount(C,A);return}H&&zn(b,null,$,"beforeUnmount"),re&64?b.type.remove(b,$,C,x,ye,A):O&&(V!==D||ee>0&&ee&64)?z(O,$,C,!1,!0):(V===D&&ee&384||!x&&re&16)&&z(U,$,C),A&&De(b)}(Z&&(oe=B&&B.onVnodeUnmounted)||H)&&Ye(()=>{oe&&pn(oe,$,b),H&&zn(b,null,$,"unmounted")},C)},De=b=>{const{type:$,el:C,anchor:A,transition:x}=b;if($===D){T(C,A);return}if($===cs){Re(b);return}const V=()=>{r(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(b.shapeFlag&1&&x&&!x.persisted){const{leave:B,delayLeave:N}=x,U=()=>B(C,V);N?N(b.el,V,U):U()}else V()},T=(b,$)=>{let C;for(;b!==$;)C=v(b),r(b),b=C;r($)},ne=(b,$,C)=>{const{bum:A,scope:x,update:V,subTree:B,um:N}=b;A&&us(A),x.stop(),V&&(V.active=!1,Be(B,b,$,C)),N&&Ye(N,$),Ye(()=>{b.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},z=(b,$,C,A=!1,x=!1,V=0)=>{for(let B=V;B<b.length;B++)Be(b[B],$,C,A,x)},se=b=>b.shapeFlag&6?se(b.component.subTree):b.shapeFlag&128?b.suspense.next():v(b.anchor||b.el),ve=(b,$,C)=>{b==null?$._vnode&&Be($._vnode,null,null,!0):Q($._vnode||null,b,$,null,null,null,C),Ma(),$._vnode=b},ye={p:Q,um:Be,m:Ae,r:De,mt:on,mc:Ie,pc:ie,pbc:Ge,n:se,o:e};let he,le;return n&&([he,le]=n(ye)),{render:ve,hydrate:he,createApp:Qc(ve,he)}}function jn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Za(e,n,t=!1){const s=e.children,r=n.children;if(ae(s)&&ae(r))for(let a=0;a<s.length;a++){const o=s[a];let i=r[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[a]=Nn(r[a]),i.el=o.el),t||Za(o,i))}}function ed(e){const n=e.slice(),t=[0];let s,r,a,o,i;const l=e.length;for(s=0;s<l;s++){const p=e[s];if(p!==0){if(r=t[t.length-1],e[r]<p){n[s]=r,t.push(s);continue}for(a=0,o=t.length-1;a<o;)i=a+o>>1,e[t[i]]<p?a=i+1:o=i;p<e[t[a]]&&(a>0&&(n[s]=t[a-1]),t[a]=s)}}for(a=t.length,o=t[a-1];a-- >0;)t[a]=o,o=n[o];return t}const nd=e=>e.__isTeleport,Mr="components";function d(e,n){return Xa(Mr,e,!0,n)||e}const Qa=Symbol();function rn(e){return Me(e)?Xa(Mr,e,!1)||e:e||Qa}function Xa(e,n,t=!0,s=!1){const r=je||qe;if(r){const a=r.type;if(e===Mr){const i=hd(a);if(i&&(i===n||i===_n(n)||i===Ns(_n(n))))return a}const o=_o(r[e]||a[e],n)||_o(r.appContext[e],n);return!o&&s?a:o}}function _o(e,n){return e&&(e[n]||e[_n(n)]||e[Ns(_n(n))])}const D=Symbol(void 0),Or=Symbol(void 0),Dn=Symbol(void 0),cs=Symbol(void 0),Pt=[];let Zn=null;function c(e=!1){Pt.push(Zn=e?null:[])}function td(){Pt.pop(),Zn=Pt[Pt.length-1]||null}let vs=1;function go(e){vs+=e}function Ja(e){return e.dynamicChildren=vs>0?Zn||ht:null,td(),vs>0&&Zn&&Zn.push(e),e}function k(e,n,t,s,r,a){return Ja(_(e,n,t,s,r,a,!0))}function S(e,n,t,s,r){return Ja(u(e,n,t,s,r,!0))}function ys(e){return e?e.__v_isVNode===!0:!1}function Rt(e,n){return e.type===n.type&&e.key===n.key}const Ls="__vInternal",ei=({key:e})=>e!=null?e:null,ds=({ref:e,ref_key:n,ref_for:t})=>e!=null?Me(e)||He(e)||de(e)?{i:je,r:e,k:n,f:!!t}:e:null;function _(e,n=null,t=null,s=0,r=null,a=e===D?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ei(n),ref:n&&ds(n),scopeId:Hs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Hr(l,t),a&128&&e.normalize(l)):t&&(l.shapeFlag|=Me(t)?8:16),vs>0&&!o&&Zn&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Zn.push(l),l}const u=sd;function sd(e,n=null,t=null,s=0,r=null,a=!1){if((!e||e===Qa)&&(e=Dn),ys(e)){const i=zt(e,n,!0);return t&&Hr(i,t),i}if(pd(e)&&(e=e.__vccOpts),n){n=Qt(n);let{class:i,style:l}=n;i&&!Me(i)&&(n.class=we(i)),Ne(l)&&(wa(l)&&!ae(l)&&(l=We({},l)),n.style=Ln(l))}const o=Me(e)?1:Cc(e)?128:nd(e)?64:Ne(e)?4:de(e)?2:0;return _(e,n,t,s,r,o,a,!0)}function Qt(e){return e?wa(e)||Ls in e?We({},e):e:null}function zt(e,n,t=!1){const{props:s,ref:r,patchFlag:a,children:o}=e,i=n?G(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ei(i),ref:n&&n.ref?t&&r?ae(r)?r.concat(ds(n)):[r,ds(n)]:ds(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==D?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),el:e.el,anchor:e.anchor}}function w(e=" ",n=0){return u(Or,null,e,n)}function Bs(e,n){const t=u(cs,null,e);return t.staticCount=n,t}function W(e="",n=!1){return n?(c(),S(Dn,null,e)):u(Dn,null,e)}function fn(e){return e==null||typeof e=="boolean"?u(Dn):ae(e)?u(D,null,e.slice()):typeof e=="object"?Nn(e):u(Or,null,String(e))}function Nn(e){return e.el===null||e.memo?e:zt(e)}function Hr(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(ae(n))t=16;else if(typeof n=="object")if(s&65){const r=n.default;r&&(r._c&&(r._d=!1),Hr(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(Ls in n)?n._ctx=je:r===3&&je&&(je.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:je},t=32):(n=String(n),s&64?(t=16,n=[w(n)]):t=8);e.children=n,e.shapeFlag|=t}function G(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const r in s)if(r==="class")n.class!==s.class&&(n.class=we([n.class,s.class]));else if(r==="style")n.style=Ln([n.style,s.style]);else if(Rs(r)){const a=n[r],o=s[r];o&&a!==o&&!(ae(a)&&a.includes(o))&&(n[r]=a?[].concat(a,o):o)}else r!==""&&(n[r]=s[r])}return n}function pn(e,n,t,s=null){un(e,n,7,[t,s])}function Oe(e,n,t,s){let r;const a=t&&t[s];if(ae(e)||Me(e)){r=new Array(e.length);for(let o=0,i=e.length;o<i;o++)r[o]=n(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=n(o+1,o,void 0,a&&a[o])}else if(Ne(e))if(e[Symbol.iterator])r=Array.from(e,(o,i)=>n(o,i,void 0,a&&a[i]));else{const o=Object.keys(e);r=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const p=o[i];r[i]=n(e[p],p,i,a&&a[i])}}else r=[];return t&&(t[s]=r),r}function P(e,n,t={},s,r){if(je.isCE||je.parent&&gs(je.parent)&&je.parent.isCE)return u("slot",n==="default"?null:{name:n},s&&s());let a=e[n];a&&a._c&&(a._d=!1),c();const o=a&&ni(a(t)),i=S(D,{key:t.key||`_${n}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function ni(e){return e.some(n=>ys(n)?!(n.type===Dn||n.type===D&&!ni(n.children)):!0)?e:null}const ur=e=>e?ti(e)?Ds(e)||e.proxy:ur(e.parent):null,$s=We(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ur(e.parent),$root:e=>ur(e.root),$emit:e=>e.emit,$options:e=>Fa(e),$forceUpdate:e=>()=>Ia(e.update),$nextTick:e=>Ir.bind(e.proxy),$watch:e=>Rc.bind(e)}),rd={get({_:e},n){const{ctx:t,setupState:s,data:r,props:a,accessCache:o,type:i,appContext:l}=e;let p;if(n[0]!=="$"){const R=o[n];if(R!==void 0)switch(R){case 1:return s[n];case 2:return r[n];case 4:return t[n];case 3:return a[n]}else{if(s!==ke&&_e(s,n))return o[n]=1,s[n];if(r!==ke&&_e(r,n))return o[n]=2,r[n];if((p=e.propsOptions[0])&&_e(p,n))return o[n]=3,a[n];if(t!==ke&&_e(t,n))return o[n]=4,t[n];or&&(o[n]=0)}}const f=$s[n];let m,v;if(f)return n==="$attrs"&&sn(e,"get",n),f(e);if((m=i.__cssModules)&&(m=m[n]))return m;if(t!==ke&&_e(t,n))return o[n]=4,t[n];if(v=l.config.globalProperties,_e(v,n))return v[n]},set({_:e},n,t){const{data:s,setupState:r,ctx:a}=e;return r!==ke&&_e(r,n)?(r[n]=t,!0):s!==ke&&_e(s,n)?(s[n]=t,!0):_e(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:r,propsOptions:a}},o){let i;return!!t[o]||e!==ke&&_e(e,o)||n!==ke&&_e(n,o)||(i=a[0])&&_e(i,o)||_e(s,o)||_e($s,o)||_e(r.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:_e(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}},od=Ya();let ad=0;function id(e,n,t){const s=e.type,r=(n?n.appContext:e.appContext)||od,a={uid:ad++,vnode:e,type:s,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(s,r),emitsOptions:Ha(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=$c.bind(null,a),e.ce&&e.ce(a),a}let qe=null;const ft=e=>{qe=e,e.scope.on()},Qn=()=>{qe&&qe.scope.off(),qe=null};function ti(e){return e.vnode.shapeFlag&4}let jt=!1;function ld(e,n=!1){jt=n;const{props:t,children:s}=e.vnode,r=ti(e);jc(e,t,r,n),Gc(e,s);const a=r?ud(e,n):void 0;return jt=!1,a}function ud(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Sa(new Proxy(e.ctx,rd));const{setup:s}=t;if(s){const r=e.setupContext=s.length>1?dd(e):null;ft(e),$t();const a=Pn(s,e,0,[e.props,r]);if(kt(),Qn(),la(a)){if(a.then(Qn,Qn),n)return a.then(o=>{bo(e,o,n)}).catch(o=>{Ms(o,e,0)});e.asyncDep=a}else bo(e,a,n)}else si(e,n)}function bo(e,n,t){de(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ne(n)&&(e.setupState=Ra(n)),si(e,t)}let vo;function si(e,n,t){const s=e.type;if(!e.render){if(!n&&vo&&!s.render){const r=s.template;if(r){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=s,p=We(We({isCustomElement:a,delimiters:i},o),l);s.render=vo(r,p)}}e.render=s.render||ln}ft(e),$t(),qc(e),kt(),Qn()}function cd(e){return new Proxy(e.attrs,{get(n,t){return sn(e,"get","$attrs"),n[t]}})}function dd(e){const n=s=>{e.exposed=s||{}};let t;return{get attrs(){return t||(t=cd(e))},slots:e.slots,emit:e.emit,expose:n}}function Ds(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ra(Sa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in $s)return $s[t](e)}}))}function hd(e){return de(e)&&e.displayName||e.name}function pd(e){return de(e)&&"__vccOpts"in e}const F=(e,n)=>fc(e,n,jt);function _t(e,n,t){const s=arguments.length;return s===2?Ne(n)&&!ae(n)?ys(n)?u(e,null,[n]):u(e,n):u(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ys(t)&&(t=[t]),u(e,n,t))}const md="3.2.33",fd="http://www.w3.org/2000/svg",Kn=typeof document!="undefined"?document:null,yo=Kn&&Kn.createElement("template"),_d={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const r=n?Kn.createElementNS(fd,e):Kn.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Kn.createTextNode(e),createComment:e=>Kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,t,s,r,a){const o=t?t.previousSibling:n.lastChild;if(r&&(r===a||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===a||!(r=r.nextSibling)););else{yo.innerHTML=s?`<svg>${e}</svg>`:e;const i=yo.content;if(s){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function gd(e,n,t){const s=e._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function bd(e,n,t){const s=e.style,r=Me(t);if(t&&!r){for(const a in t)cr(s,a,t[a]);if(n&&!Me(n))for(const a in n)t[a]==null&&cr(s,a,"")}else{const a=s.display;r?n!==t&&(s.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const $o=/\s*!important$/;function cr(e,n,t){if(ae(t))t.forEach(s=>cr(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=vd(e,n);$o.test(t)?e.setProperty(et(s),t.replace($o,""),"important"):e[s]=t}}const ko=["Webkit","Moz","ms"],Ks={};function vd(e,n){const t=Ks[n];if(t)return t;let s=_n(n);if(s!=="filter"&&s in e)return Ks[n]=s;s=Ns(s);for(let r=0;r<ko.length;r++){const a=ko[r]+s;if(a in e)return Ks[n]=a}return n}const wo="http://www.w3.org/1999/xlink";function yd(e,n,t,s,r){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(wo,n.slice(6,n.length)):e.setAttributeNS(wo,n,t);else{const a=wu(n);t==null||a&&!aa(t)?e.removeAttribute(n):e.setAttribute(n,a?"":t)}}function $d(e,n,t,s,r,a,o){if(n==="innerHTML"||n==="textContent"){s&&o(s,r,a),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t==null?"":t;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=aa(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}const[ri,kd]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[e,n]})();let dr=0;const wd=Promise.resolve(),Sd=()=>{dr=0},xd=()=>dr||(wd.then(Sd),dr=ri());function vn(e,n,t,s){e.addEventListener(n,t,s)}function Cd(e,n,t,s){e.removeEventListener(n,t,s)}function Ed(e,n,t,s,r=null){const a=e._vei||(e._vei={}),o=a[n];if(s&&o)o.value=s;else{const[i,l]=Rd(n);if(s){const p=a[n]=Td(s,r);vn(e,i,p,l)}else o&&(Cd(e,i,o,l),a[n]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Rd(e){let n;if(So.test(e)){n={};let t;for(;t=e.match(So);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[et(e.slice(2)),n]}function Td(e,n){const t=s=>{const r=s.timeStamp||ri();(kd||r>=t.attached-1)&&un(Id(s,t.value),n,5,[s])};return t.value=e,t.attached=xd(),t}function Id(e,n){if(ae(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>r=>!r._stopped&&s&&s(r))}else return n}const xo=/^on[a-z]/,Nd=(e,n,t,s,r=!1,a,o,i,l)=>{n==="class"?gd(e,s,r):n==="style"?bd(e,t,s):Rs(n)?br(n)||Ed(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ad(e,n,s,r))?$d(e,n,s,a,o,i,l):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),yd(e,n,s,r))};function Ad(e,n,t,s){return s?!!(n==="innerHTML"||n==="textContent"||n in e&&xo.test(n)&&de(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||xo.test(n)&&Me(t)?!1:n in e}const qn=e=>{const n=e.props["onUpdate:modelValue"];return ae(n)?t=>us(n,t):n};function Md(e){e.target.composing=!0}function Co(e){const n=e.target;n.composing&&(n.composing=!1,Od(n,"input"))}function Od(e,n){const t=document.createEvent("HTMLEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t)}const ks={created(e,{modifiers:{lazy:n,trim:t,number:s}},r){e._assign=qn(r);const a=s||r.props&&r.props.type==="number";vn(e,n?"change":"input",o=>{if(o.target.composing)return;let i=e.value;t?i=i.trim():a&&(i=ms(i)),e._assign(i)}),t&&vn(e,"change",()=>{e.value=e.value.trim()}),n||(vn(e,"compositionstart",Md),vn(e,"compositionend",Co),vn(e,"change",Co))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:s,number:r}},a){if(e._assign=qn(a),e.composing||document.activeElement===e&&(t||s&&e.value.trim()===n||(r||e.type==="number")&&ms(e.value)===n))return;const o=n==null?"":n;e.value!==o&&(e.value=o)}},Pr={deep:!0,created(e,n,t){e._assign=qn(t),vn(e,"change",()=>{const s=e._modelValue,r=gt(e),a=e.checked,o=e._assign;if(ae(s)){const i=gr(s,r),l=i!==-1;if(a&&!l)o(s.concat(r));else if(!a&&l){const p=[...s];p.splice(i,1),o(p)}}else if(yt(s)){const i=new Set(s);a?i.add(r):i.delete(r),o(i)}else o(ai(e,a))})},mounted:Eo,beforeUpdate(e,n,t){e._assign=qn(t),Eo(e,n,t)}};function Eo(e,{value:n,oldValue:t},s){e._modelValue=n,ae(n)?e.checked=gr(n,s.props.value)>-1:yt(n)?e.checked=n.has(s.props.value):n!==t&&(e.checked=Jn(n,ai(e,!0)))}const Lr={created(e,{value:n},t){e.checked=Jn(n,t.props.value),e._assign=qn(t),vn(e,"change",()=>{e._assign(gt(e))})},beforeUpdate(e,{value:n,oldValue:t},s){e._assign=qn(s),n!==t&&(e.checked=Jn(n,s.props.value))}},oi={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const r=yt(n);vn(e,"change",()=>{const a=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?ms(gt(o)):gt(o));e._assign(e.multiple?r?new Set(a):a:a[0])}),e._assign=qn(s)},mounted(e,{value:n}){Ro(e,n)},beforeUpdate(e,n,t){e._assign=qn(t)},updated(e,{value:n}){Ro(e,n)}};function Ro(e,n){const t=e.multiple;if(!(t&&!ae(n)&&!yt(n))){for(let s=0,r=e.options.length;s<r;s++){const a=e.options[s],o=gt(a);if(t)ae(n)?a.selected=gr(n,o)>-1:a.selected=n.has(o);else if(Jn(gt(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function gt(e){return"_value"in e?e._value:e.value}function ai(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const ii={created(e,n,t){as(e,n,t,null,"created")},mounted(e,n,t){as(e,n,t,null,"mounted")},beforeUpdate(e,n,t,s){as(e,n,t,s,"beforeUpdate")},updated(e,n,t,s){as(e,n,t,s,"updated")}};function as(e,n,t,s,r){let a;switch(e.tagName){case"SELECT":a=oi;break;case"TEXTAREA":a=ks;break;default:switch(t.props&&t.props.type){case"checkbox":a=Pr;break;case"radio":a=Lr;break;default:a=ks}}const o=a[r];o&&o(e,n,t,s)}const Hd=["ctrl","shift","alt","meta"],Pd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Hd.some(t=>e[`${t}Key`]&&!n.includes(t))},Mn=(e,n)=>(t,...s)=>{for(let r=0;r<n.length;r++){const a=Pd[n[r]];if(a&&a(t,n))return}return e(t,...s)},Ld={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gs=(e,n)=>t=>{if(!("key"in t))return;const s=et(t.key);if(n.some(r=>r===s||Ld[r]===s))return e(t)},Bd={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Tt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:s}){!n!=!t&&(s?n?(s.beforeEnter(e),Tt(e,!0),s.enter(e)):s.leave(e,()=>{Tt(e,!1)}):Tt(e,n))},beforeUnmount(e,{value:n}){Tt(e,n)}};function Tt(e,n){e.style.display=n?e._vod:"none"}const Dd=We({patchProp:Nd},_d);let To;function qd(){return To||(To=Xc(Dd))}const Vd=(...e)=>{const n=qd().createApp(...e),{mount:t}=n;return n.mount=s=>{const r=Ud(s);if(!r)return;const a=n._component;!de(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},n};function Ud(e){return Me(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const li=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",St=e=>li?Symbol(e):"_vr_"+e,Fd=St("rvlm"),Io=St("rvd"),Br=St("r"),ui=St("rl"),hr=St("rvl"),dt=typeof window!="undefined";function zd(e){return e.__esModule||li&&e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Ys(e,n){const t={};for(const s in n){const r=n[s];t[s]=Array.isArray(r)?r.map(e):e(r)}return t}const Lt=()=>{},jd=/\/$/,Wd=e=>e.replace(jd,"");function Zs(e,n,t="/"){let s,r={},a="",o="";const i=n.indexOf("?"),l=n.indexOf("#",i>-1?i:0);return i>-1&&(s=n.slice(0,i),a=n.slice(i+1,l>-1?l:n.length),r=e(a)),l>-1&&(s=s||n.slice(0,l),o=n.slice(l,n.length)),s=Zd(s!=null?s:n,t),{fullPath:s+(a&&"?")+a+o,path:s,query:r,hash:o}}function Kd(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function No(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Gd(e,n,t){const s=n.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&bt(n.matched[s],t.matched[r])&&ci(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function bt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ci(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Yd(e[t],n[t]))return!1;return!0}function Yd(e,n){return Array.isArray(e)?Ao(e,n):Array.isArray(n)?Ao(n,e):e===n}function Ao(e,n){return Array.isArray(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function Zd(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/");let r=t.length-1,a,o;for(a=0;a<s.length;a++)if(o=s[a],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var Wt;(function(e){e.pop="pop",e.push="push"})(Wt||(Wt={}));var Bt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Bt||(Bt={}));function Qd(e){if(!e)if(dt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wd(e)}const Xd=/^[^#]+#/;function Jd(e,n){return e.replace(Xd,"#")+n}function eh(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function nh(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;n=eh(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Mo(e,n){return(history.state?history.state.position-n:-1)+e}const pr=new Map;function th(e,n){pr.set(e,n)}function sh(e){const n=pr.get(e);return pr.delete(e),n}let rh=()=>location.protocol+"//"+location.host;function di(e,n){const{pathname:t,search:s,hash:r}=n,a=e.indexOf("#");if(a>-1){let i=r.includes(e.slice(a))?e.slice(a).length:1,l=r.slice(i);return l[0]!=="/"&&(l="/"+l),No(l,"")}return No(t,e)+s+r}function oh(e,n,t,s){let r=[],a=[],o=null;const i=({state:v})=>{const R=di(e,location),j=t.value,L=n.value;let Q=0;if(v){if(t.value=R,n.value=v,o&&o===j){o=null;return}Q=L?v.position-L.position:0}else s(R);r.forEach(te=>{te(t.value,j,{delta:Q,type:Wt.pop,direction:Q?Q>0?Bt.forward:Bt.back:Bt.unknown})})};function l(){o=t.value}function p(v){r.push(v);const R=()=>{const j=r.indexOf(v);j>-1&&r.splice(j,1)};return a.push(R),R}function f(){const{history:v}=window;!v.state||v.replaceState($e({},v.state,{scroll:qs()}),"")}function m(){for(const v of a)v();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:p,destroy:m}}function Oo(e,n,t,s=!1,r=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:r?qs():null}}function ah(e){const{history:n,location:t}=window,s={value:di(e,t)},r={value:n.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(l,p,f){const m=e.indexOf("#"),v=m>-1?(t.host&&document.querySelector("base")?e:e.slice(m))+l:rh()+e+l;try{n[f?"replaceState":"pushState"](p,"",v),r.value=p}catch(R){console.error(R),t[f?"replace":"assign"](v)}}function o(l,p){const f=$e({},n.state,Oo(r.value.back,l,r.value.forward,!0),p,{position:r.value.position});a(l,f,!0),s.value=l}function i(l,p){const f=$e({},r.value,n.state,{forward:l,scroll:qs()});a(f.current,f,!0);const m=$e({},Oo(s.value,l,null),{position:f.position+1},p);a(l,m,!1),s.value=l}return{location:s,state:r,push:i,replace:o}}function ih(e){e=Qd(e);const n=ah(e),t=oh(e,n.state,n.location,n.replace);function s(a,o=!0){o||t.pauseListeners(),history.go(a)}const r=$e({location:"",base:e,go:s,createHref:Jd.bind(null,e)},n,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function lh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ih(e)}function uh(e){return typeof e=="string"||e&&typeof e=="object"}function hi(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pi=St("nf");var Ho;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ho||(Ho={}));function vt(e,n){return $e(new Error,{type:e,[pi]:!0},n)}function Rn(e,n){return e instanceof Error&&pi in e&&(n==null||!!(e.type&n))}const Po="[^/]+?",ch={sensitive:!1,strict:!1,start:!0,end:!0},dh=/[.+*?^${}()[\]/\\]/g;function hh(e,n){const t=$e({},ch,n),s=[];let r=t.start?"^":"";const a=[];for(const p of e){const f=p.length?[]:[90];t.strict&&!p.length&&(r+="/");for(let m=0;m<p.length;m++){const v=p[m];let R=40+(t.sensitive?.25:0);if(v.type===0)m||(r+="/"),r+=v.value.replace(dh,"\\$&"),R+=40;else if(v.type===1){const{value:j,repeatable:L,optional:Q,regexp:te}=v;a.push({name:j,repeatable:L,optional:Q});const ue=te||Po;if(ue!==Po){R+=10;try{new RegExp(`(${ue})`)}catch(pe){throw new Error(`Invalid custom RegExp for param "${j}" (${ue}): `+pe.message)}}let fe=L?`((?:${ue})(?:/(?:${ue}))*)`:`(${ue})`;m||(fe=Q&&p.length<2?`(?:/${fe})`:"/"+fe),Q&&(fe+="?"),r+=fe,R+=20,Q&&(R+=-8),L&&(R+=-20),ue===".*"&&(R+=-50)}f.push(R)}s.push(f)}if(t.strict&&t.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function i(p){const f=p.match(o),m={};if(!f)return null;for(let v=1;v<f.length;v++){const R=f[v]||"",j=a[v-1];m[j.name]=R&&j.repeatable?R.split("/"):R}return m}function l(p){let f="",m=!1;for(const v of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const R of v)if(R.type===0)f+=R.value;else if(R.type===1){const{value:j,repeatable:L,optional:Q}=R,te=j in p?p[j]:"";if(Array.isArray(te)&&!L)throw new Error(`Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`);const ue=Array.isArray(te)?te.join("/"):te;if(!ue)if(Q)v.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${j}"`);f+=ue}}return f}return{re:o,score:s,keys:a,parse:i,stringify:l}}function ph(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function mh(e,n){let t=0;const s=e.score,r=n.score;for(;t<s.length&&t<r.length;){const a=ph(s[t],r[t]);if(a)return a;t++}return r.length-s.length}const fh={type:0,value:""},_h=/[a-zA-Z0-9_]/;function gh(e){if(!e)return[[]];if(e==="/")return[[fh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(R){throw new Error(`ERR (${t})/"${p}": ${R}`)}let t=0,s=t;const r=[];let a;function o(){a&&r.push(a),a=[]}let i=0,l,p="",f="";function m(){!p||(t===0?a.push({type:0,value:p}):t===1||t===2||t===3?(a.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:p,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),p="")}function v(){p+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:l==="/"?(p&&m(),o()):l===":"?(m(),t=1):v();break;case 4:v(),t=s;break;case 1:l==="("?t=2:_h.test(l)?v():(m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:t=3:f+=l;break;case 3:m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,f="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${p}"`),m(),o(),r}function bh(e,n,t){const s=hh(gh(e.path),t),r=$e(s,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function vh(e,n){const t=[],s=new Map;n=Bo({strict:!1,end:!0,sensitive:!1},n);function r(f){return s.get(f)}function a(f,m,v){const R=!v,j=$h(f);j.aliasOf=v&&v.record;const L=Bo(n,f),Q=[j];if("alias"in f){const fe=typeof f.alias=="string"?[f.alias]:f.alias;for(const pe of fe)Q.push($e({},j,{components:v?v.record.components:j.components,path:pe,aliasOf:v?v.record:j}))}let te,ue;for(const fe of Q){const{path:pe}=fe;if(m&&pe[0]!=="/"){const Re=m.record.path,Le=Re[Re.length-1]==="/"?"":"/";fe.path=m.record.path+(pe&&Le+pe)}if(te=bh(fe,m,L),v?v.alias.push(te):(ue=ue||te,ue!==te&&ue.alias.push(te),R&&f.name&&!Lo(te)&&o(f.name)),"children"in j){const Re=j.children;for(let Le=0;Le<Re.length;Le++)a(Re[Le],te,v&&v.children[Le])}v=v||te,l(te)}return ue?()=>{o(ue)}:Lt}function o(f){if(hi(f)){const m=s.get(f);m&&(s.delete(f),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(f);m>-1&&(t.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function i(){return t}function l(f){let m=0;for(;m<t.length&&mh(f,t[m])>=0&&(f.record.path!==t[m].record.path||!mi(f,t[m]));)m++;t.splice(m,0,f),f.record.name&&!Lo(f)&&s.set(f.record.name,f)}function p(f,m){let v,R={},j,L;if("name"in f&&f.name){if(v=s.get(f.name),!v)throw vt(1,{location:f});L=v.record.name,R=$e(yh(m.params,v.keys.filter(ue=>!ue.optional).map(ue=>ue.name)),f.params),j=v.stringify(R)}else if("path"in f)j=f.path,v=t.find(ue=>ue.re.test(j)),v&&(R=v.parse(j),L=v.record.name);else{if(v=m.name?s.get(m.name):t.find(ue=>ue.re.test(m.path)),!v)throw vt(1,{location:f,currentLocation:m});L=v.record.name,R=$e({},m.params,f.params),j=v.stringify(R)}const Q=[];let te=v;for(;te;)Q.unshift(te.record),te=te.parent;return{name:L,path:j,params:R,matched:Q,meta:wh(Q)}}return e.forEach(f=>a(f)),{addRoute:a,resolve:p,removeRoute:o,getRoutes:i,getRecordMatcher:r}}function yh(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function $h(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:kh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function kh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="boolean"?t:t[s];return n}function Lo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function wh(e){return e.reduce((n,t)=>$e(n,t.meta),{})}function Bo(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function mi(e,n){return n.children.some(t=>t===e||mi(e,t))}const fi=/#/g,Sh=/&/g,xh=/\//g,Ch=/=/g,Eh=/\?/g,_i=/\+/g,Rh=/%5B/g,Th=/%5D/g,gi=/%5E/g,Ih=/%60/g,bi=/%7B/g,Nh=/%7C/g,vi=/%7D/g,Ah=/%20/g;function Dr(e){return encodeURI(""+e).replace(Nh,"|").replace(Rh,"[").replace(Th,"]")}function Mh(e){return Dr(e).replace(bi,"{").replace(vi,"}").replace(gi,"^")}function mr(e){return Dr(e).replace(_i,"%2B").replace(Ah,"+").replace(fi,"%23").replace(Sh,"%26").replace(Ih,"`").replace(bi,"{").replace(vi,"}").replace(gi,"^")}function Oh(e){return mr(e).replace(Ch,"%3D")}function Hh(e){return Dr(e).replace(fi,"%23").replace(Eh,"%3F")}function Ph(e){return e==null?"":Hh(e).replace(xh,"%2F")}function ws(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Lh(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace(_i," "),o=a.indexOf("="),i=ws(o<0?a:a.slice(0,o)),l=o<0?null:ws(a.slice(o+1));if(i in n){let p=n[i];Array.isArray(p)||(p=n[i]=[p]),p.push(l)}else n[i]=l}return n}function Do(e){let n="";for(let t in e){const s=e[t];if(t=Oh(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(Array.isArray(s)?s.map(a=>a&&mr(a)):[s&&mr(s)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function Bh(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return n}function It(){let e=[];function n(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function An(e,n,t,s,r){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,i)=>{const l=m=>{m===!1?i(vt(4,{from:t,to:n})):m instanceof Error?i(m):uh(m)?i(vt(2,{from:n,to:m})):(a&&s.enterCallbacks[r]===a&&typeof m=="function"&&a.push(m),o())},p=e.call(s&&s.instances[r],n,t,l);let f=Promise.resolve(p);e.length<3&&(f=f.then(l)),f.catch(m=>i(m))})}function Qs(e,n,t,s){const r=[];for(const a of e)for(const o in a.components){let i=a.components[o];if(!(n!=="beforeRouteEnter"&&!a.instances[o]))if(Dh(i)){const p=(i.__vccOpts||i)[n];p&&r.push(An(p,t,s,a,o))}else{let l=i();r.push(()=>l.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const f=zd(p)?p.default:p;a.components[o]=f;const v=(f.__vccOpts||f)[n];return v&&An(v,t,s,a,o)()}))}}return r}function Dh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qo(e){const n=Se(Br),t=Se(ui),s=F(()=>n.resolve(Mt(e.to))),r=F(()=>{const{matched:l}=s.value,{length:p}=l,f=l[p-1],m=t.matched;if(!f||!m.length)return-1;const v=m.findIndex(bt.bind(null,f));if(v>-1)return v;const R=Vo(l[p-2]);return p>1&&Vo(f)===R&&m[m.length-1].path!==R?m.findIndex(bt.bind(null,l[p-2])):v}),a=F(()=>r.value>-1&&Fh(t.params,s.value.params)),o=F(()=>r.value>-1&&r.value===t.matched.length-1&&ci(t.params,s.value.params));function i(l={}){return Uh(l)?n[Mt(e.replace)?"replace":"push"](Mt(e.to)).catch(Lt):Promise.resolve()}return{route:s,href:F(()=>s.value.href),isActive:a,isExactActive:o,navigate:i}}const qh=y({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qo,setup(e,{slots:n}){const t=Y(qo(e)),{options:s}=Se(Br),r=F(()=>({[Uo(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Uo(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:_t("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},a)}}}),Vh=qh;function Uh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Fh(e,n){for(const t in n){const s=n[t],r=e[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((a,o)=>a!==r[o]))return!1}return!0}function Vo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Uo=(e,n,t)=>e!=null?e:n!=null?n:t,zh=y({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:t}){const s=Se(hr),r=F(()=>e.route||s.value),a=Se(Io,0),o=F(()=>r.value.matched[a]);Ee(Io,a+1),Ee(Fd,o),Ee(hr,r);const i=$n();return Ve(()=>[i.value,o.value,e.name],([l,p,f],[m,v,R])=>{p&&(p.instances[f]=l,v&&v!==p&&l&&l===m&&(p.leaveGuards.size||(p.leaveGuards=v.leaveGuards),p.updateGuards.size||(p.updateGuards=v.updateGuards))),l&&p&&(!v||!bt(p,v)||!m)&&(p.enterCallbacks[f]||[]).forEach(j=>j(l))},{flush:"post"}),()=>{const l=r.value,p=o.value,f=p&&p.components[e.name],m=e.name;if(!f)return Fo(t.default,{Component:f,route:l});const v=p.props[e.name],R=v?v===!0?l.params:typeof v=="function"?v(l):v:null,L=_t(f,$e({},R,n,{onVnodeUnmounted:Q=>{Q.component.isUnmounted&&(p.instances[m]=null)},ref:i}));return Fo(t.default,{Component:L,route:l})||L}}});function Fo(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const jh=zh;function Wh(e){const n=vh(e.routes,e),t=e.parseQuery||Lh,s=e.stringifyQuery||Do,r=e.history,a=It(),o=It(),i=It(),l=uc(En);let p=En;dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ys.bind(null,T=>""+T),m=Ys.bind(null,Ph),v=Ys.bind(null,ws);function R(T,ne){let z,se;return hi(T)?(z=n.getRecordMatcher(T),se=ne):se=T,n.addRoute(se,z)}function j(T){const ne=n.getRecordMatcher(T);ne&&n.removeRoute(ne)}function L(){return n.getRoutes().map(T=>T.record)}function Q(T){return!!n.getRecordMatcher(T)}function te(T,ne){if(ne=$e({},ne||l.value),typeof T=="string"){const le=Zs(t,T,ne.path),b=n.resolve({path:le.path},ne),$=r.createHref(le.fullPath);return $e(le,b,{params:v(b.params),hash:ws(le.hash),redirectedFrom:void 0,href:$})}let z;if("path"in T)z=$e({},T,{path:Zs(t,T.path,ne.path).path});else{const le=$e({},T.params);for(const b in le)le[b]==null&&delete le[b];z=$e({},T,{params:m(T.params)}),ne.params=m(ne.params)}const se=n.resolve(z,ne),ve=T.hash||"";se.params=f(v(se.params));const ye=Kd(s,$e({},T,{hash:Mh(ve),path:se.path})),he=r.createHref(ye);return $e({fullPath:ye,hash:ve,query:s===Do?Bh(T.query):T.query||{}},se,{redirectedFrom:void 0,href:he})}function ue(T){return typeof T=="string"?Zs(t,T,l.value.path):$e({},T)}function fe(T,ne){if(p!==T)return vt(8,{from:ne,to:T})}function pe(T){return Ke(T)}function Re(T){return pe($e(ue(T),{replace:!0}))}function Le(T){const ne=T.matched[T.matched.length-1];if(ne&&ne.redirect){const{redirect:z}=ne;let se=typeof z=="function"?z(T):z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=ue(se):{path:se},se.params={}),$e({query:T.query,hash:T.hash,params:T.params},se)}}function Ke(T,ne){const z=p=te(T),se=l.value,ve=T.state,ye=T.force,he=T.replace===!0,le=Le(z);if(le)return Ke($e(ue(le),{state:ve,force:ye,replace:he}),ne||z);const b=z;b.redirectedFrom=ne;let $;return!ye&&Gd(s,se,z)&&($=vt(16,{to:b,from:se}),ge(se,se,!0,!1)),($?Promise.resolve($):Ie(b,se)).catch(C=>Rn(C)?Rn(C,2)?C:ie(C):q(C,b,se)).then(C=>{if(C){if(Rn(C,2))return Ke($e(ue(C.to),{state:ve,force:ye,replace:he}),ne||b)}else C=Ge(b,se,!0,he,ve);return Ze(b,se,C),C})}function cn(T,ne){const z=fe(T,ne);return z?Promise.reject(z):Promise.resolve()}function Ie(T,ne){let z;const[se,ve,ye]=Kh(T,ne);z=Qs(se.reverse(),"beforeRouteLeave",T,ne);for(const le of se)le.leaveGuards.forEach(b=>{z.push(An(b,T,ne))});const he=cn.bind(null,T,ne);return z.push(he),it(z).then(()=>{z=[];for(const le of a.list())z.push(An(le,T,ne));return z.push(he),it(z)}).then(()=>{z=Qs(ve,"beforeRouteUpdate",T,ne);for(const le of ve)le.updateGuards.forEach(b=>{z.push(An(b,T,ne))});return z.push(he),it(z)}).then(()=>{z=[];for(const le of T.matched)if(le.beforeEnter&&!ne.matched.includes(le))if(Array.isArray(le.beforeEnter))for(const b of le.beforeEnter)z.push(An(b,T,ne));else z.push(An(le.beforeEnter,T,ne));return z.push(he),it(z)}).then(()=>(T.matched.forEach(le=>le.enterCallbacks={}),z=Qs(ye,"beforeRouteEnter",T,ne),z.push(he),it(z))).then(()=>{z=[];for(const le of o.list())z.push(An(le,T,ne));return z.push(he),it(z)}).catch(le=>Rn(le,8)?le:Promise.reject(le))}function Ze(T,ne,z){for(const se of i.list())se(T,ne,z)}function Ge(T,ne,z,se,ve){const ye=fe(T,ne);if(ye)return ye;const he=ne===En,le=dt?history.state:{};z&&(se||he?r.replace(T.fullPath,$e({scroll:he&&le&&le.scroll},ve)):r.push(T.fullPath,ve)),l.value=T,ge(T,ne,z,he),ie()}let Qe;function dn(){Qe=r.listen((T,ne,z)=>{const se=te(T),ve=Le(se);if(ve){Ke($e(ve,{replace:!0}),se).catch(Lt);return}p=se;const ye=l.value;dt&&th(Mo(ye.fullPath,z.delta),qs()),Ie(se,ye).catch(he=>Rn(he,12)?he:Rn(he,2)?(Ke(he.to,se).then(le=>{Rn(le,20)&&!z.delta&&z.type===Wt.pop&&r.go(-1,!1)}).catch(Lt),Promise.reject()):(z.delta&&r.go(-z.delta,!1),q(he,se,ye))).then(he=>{he=he||Ge(se,ye,!1),he&&(z.delta?r.go(-z.delta,!1):z.type===Wt.pop&&Rn(he,20)&&r.go(-1,!1)),Ze(se,ye,he)}).catch(Lt)})}let Xe=It(),on=It(),M;function q(T,ne,z){ie(T);const se=on.list();return se.length?se.forEach(ve=>ve(T,ne,z)):console.error(T),Promise.reject(T)}function X(){return M&&l.value!==En?Promise.resolve():new Promise((T,ne)=>{Xe.add([T,ne])})}function ie(T){return M||(M=!T,dn(),Xe.list().forEach(([ne,z])=>T?z(T):ne()),Xe.reset()),T}function ge(T,ne,z,se){const{scrollBehavior:ve}=e;if(!dt||!ve)return Promise.resolve();const ye=!z&&sh(Mo(T.fullPath,0))||(se||!z)&&history.state&&history.state.scroll||null;return Ir().then(()=>ve(T,ne,ye)).then(he=>he&&nh(he)).catch(he=>q(he,T,ne))}const Ce=T=>r.go(T);let Ae;const Be=new Set;return{currentRoute:l,addRoute:R,removeRoute:j,hasRoute:Q,getRoutes:L,resolve:te,options:e,push:pe,replace:Re,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:a.add,beforeResolve:o.add,afterEach:i.add,onError:on.add,isReady:X,install(T){const ne=this;T.component("RouterLink",Vh),T.component("RouterView",jh),T.config.globalProperties.$router=ne,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(l)}),dt&&!Ae&&l.value===En&&(Ae=!0,pe(r.location).catch(ve=>{}));const z={};for(const ve in En)z[ve]=F(()=>l.value[ve]);T.provide(Br,ne),T.provide(ui,Y(z)),T.provide(hr,l);const se=T.unmount;Be.add(T),T.unmount=function(){Be.delete(T),Be.size<1&&(p=En,Qe&&Qe(),l.value=En,Ae=!1,M=!1),se()}}}}function it(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function Kh(e,n){const t=[],s=[],r=[],a=Math.max(n.matched.length,e.matched.length);for(let o=0;o<a;o++){const i=n.matched[o];i&&(e.matched.find(p=>bt(p,i))?s.push(i):t.push(i));const l=e.matched[o];l&&(n.matched.find(p=>bt(p,l))||r.push(l))}return[t,s,r]}var g=(e,n)=>{const t=e.__vccOpts||e;for(const[s,r]of n)t[s]=r;return t};const Gh=y({});function Yh(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ButtonDocs"}),u(o,{name:"ButtonDocsDisabled"}),u(i,{heading:"nhs-button"})],64)}var Zh=g(Gh,[["render",Yh]]);const zo=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],Qh=y({setup(){const e=F(()=>{const r=new Set(fr.map(a=>a.name[0].toUpperCase()));return zo.map(a=>{let o=!0;return r.has(a)&&(o=!1),{text:a,disabled:o}})}),n=F(()=>zo.map(r=>{const a=fr.filter(o=>o.name[0].toUpperCase()===r);return a.length===0?null:{name:r,items:a}}).filter(r=>r));function t(r){document.getElementById("panel-"+r).scrollIntoView()}function s(){window.scrollTo(0,0)}return{navItems:e,panels:n,scrollTo:t,toTop:s}}});function Xh(e,n,t,s,r,a){const o=d("nhs-nav-az-item"),i=d("nhs-nav-az"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-list-panel-item"),m=d("nhs-list-panel");return c(),k(D,null,[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,null,{default:h(()=>[(c(!0),k(D,null,Oe(e.navItems,(v,R)=>(c(),S(o,{key:R,disabled:v.disabled,onClick:j=>e.scrollTo(v.text)},{default:h(()=>[w(I(v.text),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),_:1})]),_:1}),u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[(c(!0),k(D,null,Oe(e.panels,v=>(c(),S(m,{key:v.name,label:v.name,id:`panel-${v.name}`},{default:h(()=>[(c(!0),k(D,null,Oe(v.items,(R,j)=>(c(),S(f,{onClick:n[0]||(n[0]=L=>e.toTop()),key:j,href:R.path},{default:h(()=>[w(I(R.name),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["label","id"]))),128))]),_:1})]),_:1})],64)}var Jh=g(Qh,[["render",Xh]]);function yi(e,n){return e.filter(t=>!n.includes(t.name)).sort((t,s)=>t.name<s.name?-1:t.name>s.name?1:0)}function Ss(e=""){const n=document.querySelector("html");n&&(e?n.setAttribute("style",`background-color: ${e};`):n.setAttribute("style",""))}const ep=y({data(){return{props:[{name:"title",type:"string",required:"yes",description:"Title to be displayed on the do and don't list component."},{name:"type",type:"string",description:"Type of do and don't list component, 'cross', 'tick'. Default: tick"},{name:"items",type:"array",required:"yes",description:"Items to be displayed within the do and don't list component"},{name:"heading-level",type:"number",description:"Optional heading level for the title heading. Default: 3"}],slots:[{name:"item",props:"each item in items prop",description:"slot for each list item"}]}}});function np(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"DoDont"}),u(o,{name:"DoDontSlots"}),u(i,{heading:"nhs-dodont"})],64)}var tp=g(ep,[["render",np]]);const sp=y({});function rp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ActionLink"}),u(i,{heading:"nhs-action-link"})],64)}var op=g(sp,[["render",rp]]);const ap=y({});function ip(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"BackLink"}),u(i,{heading:"nhs-back-link"})],64)}var lp=g(ap,[["render",ip]]);const up=y({});function cp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Breadcrumb"}),u(i,{heading:"nhs-breadcrumb"}),u(i,{heading:"nhs-breadcrumb-item"}),u(i,{heading:"nhs-breadcrumb-backlink"})],64)}var dp=g(up,[["render",cp]]);const hp=y({});function pp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"CardBasic"}),u(o,{name:"CardClickable"}),u(o,{name:"CardImage"}),u(o,{name:"CardFeature"}),u(o,{name:"CardGroup"}),u(i,{heading:"nhs-card"}),u(i,{heading:"nhs-card-group"})],64)}var mp=g(hp,[["render",pp]]);const fp=y({});function _p(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"CareCardNonUrgent"}),u(o,{name:"CareCardUrgent"}),u(o,{name:"CareCardEmergency"}),u(i,{heading:"nhs-care-card"})],64)}var gp=g(fp,[["render",_p]]);const bp=y({});function vp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ContentsList"}),u(i,{heading:"nhs-contents"}),u(i,{heading:"nhs-contents-item"})],64)}var yp=g(bp,[["render",vp]]);const $p=y({});function kp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Details"}),u(i,{heading:"nhs-details"})],64)}var wp=g($p,[["render",kp]]);const Sp=y({});function xp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ErrorSummary"}),u(i,{heading:"nhs-error-summary"})],64)}var Cp=g(Sp,[["render",xp]]);const Ep=y({});function Rp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Body"}),u(i,{heading:"nhs-body"})],64)}var Tp=g(Ep,[["render",Rp]]);const Ip=y({});function Np(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"List"}),u(i,{heading:"nhs-list"})],64)}var Ap=g(Ip,[["render",Np]]);const Mp=y({});function Op(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ErrorText"}),u(i,{heading:"nhs-error-text"})],64)}var Hp=g(Mp,[["render",Op]]);const Pp=y({});function Lp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"HintText"}),u(i,{heading:"nhs-hint-text"})],64)}var Bp=g(Pp,[["render",Lp]]);const Dp=y({});function qp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"InsetText"}),u(i,{heading:"nhs-inset-text"})],64)}var Vp=g(Dp,[["render",qp]]);const Up=y({});function Fp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Heading"}),u(i,{heading:"nhs-heading"})],64)}var zp=g(Up,[["render",Fp]]);const jp=y({});function Wp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Label"}),u(o,{name:"LabelBold"}),u(o,{name:"LabelHeading"}),u(i,{heading:"nhs-label"})],64)}var Kp=g(jp,[["render",Wp]]);const Gp=y({});function Yp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Expander"}),u(o,{name:"ExpanderGroup"}),u(i,{heading:"nhs-expander"}),u(i,{heading:"nhs-expander-group"})],64)}var Zp=g(Gp,[["render",Yp]]);const Qp=y({});function Xp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Fieldset"}),u(o,{name:"FieldsetHeading"}),u(o,{name:"FieldsetSlots"}),u(i,{heading:"nhs-fieldset"})],64)}var Jp=g(Qp,[["render",Xp]]);const em=y({});function nm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Footer"}),u(i,{heading:"nhs-footer"}),u(i,{heading:"nhs-footer-item"})],64)}var tm=g(em,[["render",nm]]);const sm=y({});function rm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Grid"}),u(i,{heading:"nhs-main"}),u(i,{heading:"nhs-row"}),u(i,{heading:"nhs-col"})],64)}var om=g(sm,[["render",rm]]);const am=y({});function im(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Header"}),u(o,{name:"HeaderTransactionalName"}),u(o,{name:"HeaderOrg"}),u(o,{name:"HeaderOrgWhiteNav"}),u(i,{heading:"nhs-header"}),u(i,{heading:"nhs-header-item"})],64)}var lm=g(am,[["render",im]]);const um=y({});function cm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Hero"}),u(o,{name:"HeroImageText"}),u(i,{heading:"nhs-hero","data-props":e.props},null,8,["data-props"])],64)}var dm=g(um,[["render",cm]]);const hm=y({});function pm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Image"}),u(i,{heading:"nhs-image"})],64)}var mm=g(hm,[["render",pm]]);const fm=y({});function _m(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ListPanel"}),u(i,{heading:"nhs-list-panel"}),u(i,{heading:"nhs-list-panel-item"})],64)}var gm=g(fm,[["render",_m]]);const bm=y({});function vm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"NavAZ"}),u(i,{heading:"nhs-nav-az"}),u(i,{heading:"nhs-nav-az-item"})],64)}var ym=g(bm,[["render",vm]]);const $m=y({});function km(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Pagination"}),u(i,{heading:"nhs-pagination"})],64)}var wm=g($m,[["render",km]]);const Sm=y({});function xm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"ReviewDate"}),u(i,{heading:"nhs-review-date"})],64)}var Cm=g(Sm,[["render",xm]]);const Em=y({});function Rm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"SkipLink"}),u(i,{heading:"nhs-skip-link"})],64)}var Tm=g(Em,[["render",Rm]]);const Im=y({});function Nm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"SummaryList"}),u(o,{name:"SummaryListNoBorder"}),u(i,{heading:"nhs-summary-list"}),u(i,{heading:"nhs-summary-list-item"})],64)}var Am=g(Im,[["render",Nm]]);const Mm=y({});function Om(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Tag"}),u(i,{heading:"nhs-tag"})],64)}var Hm=g(Mm,[["render",Om]]);const Pm=y({});function Lm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"WarningCallout"}),u(i,{heading:"nhs-warning-callout"})],64)}var Bm=g(Pm,[["render",Lm]]);const Dm=y({});function qm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Table"}),u(o,{name:"TablePanel"}),u(o,{name:"TableResponsive"}),u(i,{heading:"nhs-table"})],64)}var Vm=g(Dm,[["render",qm]]);const Um=y({});function Fm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Input"}),u(o,{name:"InputError"}),u(o,{name:"InputWidth"}),u(o,{name:"InputSlots"}),u(i,{heading:"nhs-input"})],64)}var zm=g(Um,[["render",Fm]]);const jm=y({});function Wm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Form"}),u(i,{heading:"nhs-form"})],64)}var Km=g(jm,[["render",Wm]]);const Gm=y({});function Ym(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Select"}),u(o,{name:"SelectError"}),u(o,{name:"SelectSlots"}),u(i,{heading:"nhs-select"})],64)}var Zm=g(Gm,[["render",Ym]]);const Qm=y({});function Xm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Textarea"}),u(o,{name:"TextareaError"}),u(o,{name:"TextareaSlots"}),u(i,{heading:"nhs-textarea"})],64)}var Jm=g(Qm,[["render",Xm]]);const ef=y({});function nf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"DateInputError"}),u(o,{name:"DateInputSlots"}),u(i,{heading:"nhs-input-group"})],64)}var tf=g(ef,[["render",nf]]);const sf=y({});function rf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"Checkbox"}),u(o,{name:"CheckboxDisabled"}),u(o,{name:"CheckboxError"}),u(o,{name:"CheckboxSlots"}),u(o,{name:"CheckboxConditional"}),u(i,{heading:"nhs-checkboxes"})],64)}var of=g(sf,[["render",rf]]);const af=y({});function lf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),k(D,null,[u(o,{name:"RadioError"}),u(o,{name:"RadioDisabled"}),u(o,{name:"RadioDivider"}),u(o,{name:"RadioSlots"}),u(o,{name:"RadioConditional"}),u(i,{heading:"nhs-radios"})],64)}var uf=g(af,[["render",lf]]);const $i=[{path:"",component:Jh,name:"Components"},{path:"/components/action-link",component:op,name:"Action Link"},{path:"/components/back-link",component:lp,name:"Back Link"},{path:"/components/breadcrumb",component:dp,name:"Breadcrumb"},{path:"/components/button",component:Zh,name:"Button"},{path:"/components/card",component:mp,name:"Card"},{path:"/components/care-card",component:gp,name:"Care Card"},{path:"/components/contents",component:yp,name:"Contents"},{path:"/components/details",component:wp,name:"Details"},{path:"/components/dodont",component:tp,name:"Do Don't"},{path:"/components/error-summary",component:Cp,name:"Error Summary"},{path:"/components/body",component:Tp,name:"Body"},{path:"/components/list",component:Ap,name:"List"},{path:"/components/error-text",component:Hp,name:"Error Text"},{path:"/components/hint-text",component:Bp,name:"Hint Text"},{path:"/components/inset-text",component:Vp,name:"Inset Text"},{path:"/components/heading",component:zp,name:"Heading"},{path:"/components/label",component:Kp,name:"Label"},{path:"/components/expander",component:Zp,name:"Expander"},{path:"/components/fieldset",component:Jp,name:"Fieldset"},{path:"/components/footer",component:tm,name:"Footer"},{path:"/components/grid",component:om,name:"Grid"},{path:"/components/header",component:lm,name:"Header"},{path:"/components/hero",component:dm,name:"Hero"},{path:"/components/image",component:mm,name:"Image"},{path:"/components/list-panel",component:gm,name:"List Panel"},{path:"/components/nav-az",component:ym,name:"Nav AZ"},{path:"/components/pagination",component:wm,name:"Pagination"},{path:"/components/review-date",component:Cm,name:"Review Date"},{path:"/components/skip-link",component:Tm,name:"Skip Link"},{path:"/components/summary-list",component:Am,name:"Summary List"},{path:"/components/tag",component:Hm,name:"Tag"},{path:"/components/warning-callout",component:Bm,name:"Warning Callout"},{path:"/components/table",component:Vm,name:"Table"},{path:"/components/input",component:zm,name:"Input"},{path:"/components/form",component:Km,name:"Form"},{path:"/components/select",component:Zm,name:"Select"},{path:"/components/textarea",component:Jm,name:"Textarea"},{path:"/components/input-group",component:tf,name:"Input Group"},{path:"/components/checkbox",component:of,name:"Checkbox"},{path:"/components/radio",component:uf,name:"Radio"}],fr=yi($i,["Components"]),cf=y({setup(){const e=Y({title:"NHS.UK frontend Vue",description:"Port of nhsuk-frontend library to vue.js"});return Pe(()=>{Ss()}),K({},J(e))}});function df(e,n,t,s,r,a){const o=d("nhs-hero"),i=d("nhs-card"),l=d("nhs-card-group"),p=d("nhs-col"),f=d("nhs-row"),m=d("nhs-main");return c(),k(D,null,[u(o,{heading:e.title,text:e.description},null,8,["heading","text"]),u(m,null,{default:h(()=>[u(f,null,{default:h(()=>[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,{heading:"Components",href:"/components",description:"Component documentation and playground",clickable:""}),u(i,{heading:"Examples",href:"/examples",description:"Example pages",clickable:""})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var hf=g(cf,[["render",df]]);const pf=y({setup(e){function n(){return tn.currentRoute.value.fullPath.split("/").length===2?{text:"Home",href:"/"}:{text:"Components",href:"/components"}}function t(){const s=[{href:"/",text:"Home"}],r=tn.currentRoute.value.fullPath.split("/");return r.length===2&&s.push({text:"Components"}),r.length===3&&(s.push({text:"Components",href:"/components"}),s.push({text:tn.currentRoute.value.name||""})),s}return Pe(()=>{Ss()}),{breadcrumbItems:t,breadcrumbBackItem:n}}});function mf(e,n,t,s,r,a){const o=d("nhs-breadcrumb-item"),i=d("nhs-breadcrumb-backlink"),l=d("nhs-breadcrumb"),p=d("router-view"),f=d("nhs-main");return c(),k(D,null,[u(l,null,{backlink:h(()=>[u(i,{href:e.breadcrumbBackItem().href},{default:h(()=>[w(I(e.breadcrumbBackItem().text),1)]),_:1},8,["href"])]),default:h(()=>[(c(!0),k(D,null,Oe(e.breadcrumbItems(),(m,v)=>(c(),S(o,{href:m.href,key:`components-breadcrumb-${v}`},{default:h(()=>[w(I(m.text),1)]),_:2},1032,["href"]))),128))]),_:1}),u(f,null,{default:h(()=>[u(p)]),_:1})],64)}var ff=g(pf,[["render",mf]]);const Tn={"/examples/breadcrumb":{container:!1},"/examples/button-reversed":{containerBg:"#005eb8"},"/examples/footer":{container:!1},"/examples/header":{container:!1},"/examples/header-org":{container:!1},"/examples/header-org-white":{container:!1},"/examples/header-org-white-nav":{container:!1},"/examples/header-transactional":{container:!1},"/examples/header-transactional-name":{container:!1},"/examples/header-logo":{container:!1},"/examples/header-nav":{container:!1},"/examples/header-search":{container:!1},"/examples/hero":{container:!1},"/examples/hero-image":{container:!1},"/examples/hero-image-text":{container:!1},"/examples/header-service":{container:!1},"/examples/header-service-nav":{container:!1},"/examples/card-group":{containerSize:100}},_f=y({setup(){function e(){return n(),""}function n(){const a=tn.currentRoute.value.path;if(!(a in Tn)){Ss("#f0f4f5");return}Ss(Tn[a].bodyBg||"#f0f4f5")}function t(){const a=tn.currentRoute.value.path;return a in Tn?{"background-color":Tn[a].containerBg||"none"}:{"background-color":"none"}}const s=F(()=>{const a=tn.currentRoute.value.path;return a in Tn&&Tn[a].containerSize||66}),r=F(()=>{const a=tn.currentRoute.value.path;return a in Tn?Tn[a].container!==!1:!0});return{containerSize:s,hasContainer:r,containerStyle:t,id:e}}}),gf=["id"];function bf(e,n,t,s,r,a){const o=d("router-view"),i=d("nhs-col"),l=d("nhs-row"),p=d("nhs-main");return e.hasContainer?(c(),k("div",{key:0,id:e.id(),style:Ln(e.containerStyle())},[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,{span:e.containerSize},{default:h(()=>[u(o)]),_:1},8,["span"])]),_:1})]),_:1})],12,gf)):(c(),S(o,{key:1,id:e.id()},null,8,["id"]))}var vf=g(_f,[["render",bf]]);const yf=y({setup(){function e(){return tn.currentRoute.value.path==="/examples"?"router-view":vf}return{component:e}}});function $f(e,n,t,s,r,a){return c(),S(rn(e.component()))}var kf=g(yf,[["render",$f]]);const wf=y({setup(){return{examples:F(()=>x$.map(n=>{const r=n,{name:t}=r,s=zs(r,["name"]);return xe(K({},s),{name:t.replace("examples-","")})}))}}}),Sf=w("Home"),xf=w("Examples"),Cf=w("Home");function Ef(e,n,t,s,r,a){const o=d("nhs-breadcrumb-item"),i=d("nhs-breadcrumb-backlink"),l=d("nhs-breadcrumb"),p=d("router-link"),f=d("nhs-main");return c(),k(D,null,[u(l,null,{backlink:h(()=>[u(i,{href:"/"},{default:h(()=>[Cf]),_:1})]),default:h(()=>[u(o,{href:"/"},{default:h(()=>[Sf]),_:1}),u(o,null,{default:h(()=>[xf]),_:1})]),_:1}),u(f,null,{default:h(()=>[_("ul",null,[(c(!0),k(D,null,Oe(e.examples,(m,v)=>(c(),k("li",{key:`example-${v}`},[u(p,{to:m.path},{default:h(()=>[w(I(m.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})],64)}var Rf=g(wf,[["render",Ef]]);const Tf={},If=w(" Go Back ");function Nf(e,n){const t=d("nhs-back-link");return c(),S(t,{href:"#"},{default:h(()=>[If]),_:1})}var ki=g(Tf,[["render",Nf]]);const Af={},Mf=w("Level one"),Of=w("Level two"),Hf=w("Level three"),Pf=w("Back to Level three");function Lf(e,n){const t=d("nhs-breadcrumb-item"),s=d("nhs-breadcrumb-backlink"),r=d("nhs-breadcrumb");return c(),S(r,null,{backlink:h(()=>[u(s,{href:"/level-one/level-two/level-three"},{default:h(()=>[Pf]),_:1})]),default:h(()=>[u(t,{href:"/level-one"},{default:h(()=>[Mf]),_:1}),u(t,{href:"/level-one/level-two"},{default:h(()=>[Of]),_:1}),u(t,{href:"/level-one/level-two/level-three"},{default:h(()=>[Hf]),_:1})]),_:1})}var wi=g(Af,[["render",Lf]]);const Bf={},Df=w(" Save and continue ");function qf(e,n){const t=d("nhs-button");return c(),S(t,null,{default:h(()=>[Df]),_:1})}var Vf=g(Bf,[["render",qf]]);const Uf={},Ff=w(" Link button ");function zf(e,n){const t=d("nhs-button");return c(),S(t,{href:"/"},{default:h(()=>[Ff]),_:1})}var jf=g(Uf,[["render",zf]]);const Wf={},Kf=w(" Disabled button ");function Gf(e,n){const t=d("nhs-button");return c(),S(t,{disabled:""},{default:h(()=>[Kf]),_:1})}var Yf=g(Wf,[["render",Gf]]);const Zf={},Qf=w(" Find my location ");function Xf(e,n){const t=d("nhs-button");return c(),S(t,{color:"secondary"},{default:h(()=>[Qf]),_:1})}var Jf=g(Zf,[["render",Xf]]);const e_={},n_=w(" Save and continue ");function t_(e,n){const t=d("nhs-button");return c(),S(t,{color:"reverse"},{default:h(()=>[n_]),_:1})}var s_=g(e_,[["render",t_]]);const r_={},o_=w("What is AMD?"),a_=w(" Symptoms "),i_=w(" Getting diagnosed "),l_=w(" Treatments "),u_=w(" Living with AMD ");function c_(e,n){const t=d("nhs-contents-item"),s=d("nhs-contents");return c(),S(s,null,{default:h(()=>[u(t,null,{default:h(()=>[o_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/"},{default:h(()=>[a_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/"},{default:h(()=>[i_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/"},{default:h(()=>[l_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/"},{default:h(()=>[u_]),_:1})]),_:1})}var Si=g(r_,[["render",c_]]);const d_={},h_=_("p",null,"An NHS number is a 10 digit number, like 485 777 3456.",-1),p_=_("p",null,"You can find your NHS number on any document sent to you by the NHS. This may include:",-1),m_=_("ul",null,[_("li",null,"prescriptions"),_("li",null,"test results"),_("li",null,"hospital referral letters"),_("li",null,"appointment letters"),_("li",null,"your NHS medical card")],-1),f_=_("p",null,"Ask your GP practice for help if you can't find your NHS number.",-1);function __(e,n){const t=d("nhs-details");return c(),S(t,{text:"Where can I find my NHS number?"},{default:h(()=>[h_,p_,m_,f_]),_:1})}var xi=g(d_,[["render",__]]);const g_=y({setup(){const e=Y({doItems:["cover blisters that are likely to burst with a soft plaster or dressing","wash your hands before touching a burst blister","allow the fluid in a burst blister to drain before covering it with a plaster or dressing"],dontItems:["do not burst a blister yourself","do not peel the skin off a burst blister","do not pick at the edges of the remaining skin","do not wear the shoes or use the equipment that caused your blister until it heals"]});return K({},J(e))}});function b_(e,n,t,s,r,a){const o=d("nhs-dodont");return c(),k(D,null,[u(o,{title:"Do",type:"tick",items:e.doItems},null,8,["items"]),u(o,{title:"Don't",type:"cross",items:e.dontItems},null,8,["items"])],64)}var Ci=g(g_,[["render",b_]]);const v_={},y_=w(" Error message about full name goes here ");function $_(e,n){const t=d("nhs-error-text");return c(),S(t,null,{default:h(()=>[y_]),_:1})}var Ei=g(v_,[["render",$_]]);const k_={},w_=w(" It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019. ");function S_(e,n){const t=d("nhs-hint-text");return c(),S(t,null,{default:h(()=>[w_]),_:1})}var Ri=g(k_,[["render",S_]]);const x_={},C_=_("p",null,[w(" You can report any suspected side effect to the "),_("a",{href:"https://yellowcard.mhra.gov.uk/",title:"External website"}," UK safety scheme "),w(". ")],-1);function E_(e,n){const t=d("nhs-inset-text");return c(),S(t,null,{default:h(()=>[C_]),_:1})}var Ti=g(x_,[["render",E_]]);const R_={},T_=w(" National Insurance number ");function I_(e,n){const t=d("nhs-label");return c(),S(t,null,{default:h(()=>[T_]),_:1})}var Ii=g(R_,[["render",I_]]);const N_={},A_=w(" National Insurance number ");function M_(e,n){const t=d("nhs-label");return c(),S(t,{size:"s"},{default:h(()=>[A_]),_:1})}var Ni=g(N_,[["render",M_]]);const O_={},H_=w(" National Insurance number ");function P_(e,n){const t=d("nhs-label");return c(),S(t,{"page-heading":"",size:"xl"},{default:h(()=>[H_]),_:1})}var Ai=g(O_,[["render",P_]]);const L_={},B_=_("table",null,[_("tbody",null,[_("tr",null,[_("th",null,[_("strong",null,"Day of the week")]),_("th",null,[_("strong",null,"Opening hours")])]),_("tr",null,[_("th",null,"Monday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Tuesday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Wednesday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Thursday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Friday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Saturday"),_("td",null,"9am to 1pm")]),_("tr",null,[_("th",null,"Sunday"),_("td",null,"Closed")])])],-1);function D_(e,n){const t=d("nhs-expander");return c(),S(t,{text:"Opening times"},{default:h(()=>[B_]),_:1})}var Mi=g(L_,[["render",D_]]);const q_={},V_=_("p",null,"Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better.",-1),U_=_("p",null,"You would have been given:",-1),F_=_("ul",null,[_("li",null,"a blood glucose metre"),_("li",null,"small needles called lancets"),_("li",null,"a plastic pen to hold the lancest"),_("li",null,"small test strips")],-1),z_=_("p",null,"Try to check your blood:",-1),j_=_("ul",null,[_("li",null,"before meals"),_("li",null,"2 to 3 hours after meals"),_("li",null,"before, during (take a break) and after exercise")],-1),W_=_("p",null,"This helps you understand your blood glucose levels and how they\u2019re affected by meals and exercise. It should help you have more stable blood glucose levels.",-1);function K_(e,n){const t=d("nhs-expander"),s=d("nhs-expander-group");return c(),S(s,null,{default:h(()=>[u(t,{text:"How to measure your blood glucose levels"},{default:h(()=>[V_,U_,F_]),_:1}),u(t,{text:"When to check your blood glucose level"},{default:h(()=>[z_,j_,W_]),_:1})]),_:1})}var Oi=g(q_,[["render",K_]]);const G_={};function Y_(e,n){const t=d("nhs-fieldset");return c(),S(t,{legend:"What is your address?"})}var Hi=g(G_,[["render",Y_]]);const Z_={};function Q_(e,n){const t=d("nhs-fieldset");return c(),S(t,{legend:"What is your address?","page-heading":"",size:"xl"})}var Pi=g(Z_,[["render",Q_]]);const X_=y({setup(){const e=Y({addressOne:"",addressTwo:"",city:"",country:""});return K({},J(e))}});function J_(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-fieldset");return c(),S(i,{legend:"What is your address?","page-heading":"",size:"xl"},{default:h(()=>[u(o,{label:"Address line 1",modelValue:e.addressOne,"onUpdate:modelValue":n[0]||(n[0]=l=>e.addressOne=l)},null,8,["modelValue"]),u(o,{label:"Address line 2",modelValue:e.addressTwo,"onUpdate:modelValue":n[1]||(n[1]=l=>e.addressTwo=l)},null,8,["modelValue"]),u(o,{label:"Town or city",modelValue:e.city,"onUpdate:modelValue":n[2]||(n[2]=l=>e.city=l)},null,8,["modelValue"]),u(o,{label:"County",modelValue:e.country,"onUpdate:modelValue":n[3]||(n[3]=l=>e.country=l)},null,8,["modelValue"])]),_:1})}var Li=g(X_,[["render",J_]]);const eg={},ng=w(" Accessibility statement "),tg=w(" Contact us "),sg=w(" Cookies "),rg=w(" Privacy policy "),og=w(" Terms and conditions ");function ag(e,n){const t=d("nhs-footer-item"),s=d("nhs-footer");return c(),S(s,null,{default:h(()=>[u(t,{href:"https://www.nhs.uk/Pages/nhs-sites.aspx"},{default:h(()=>[ng]),_:1}),u(t,{href:"https://www.nhs.uk/about-us"},{default:h(()=>[tg]),_:1}),u(t,{href:"https://www.nhs.uk/contact-us/"},{default:h(()=>[sg]),_:1}),u(t,{href:"https://www.nhs.uk/about-us/sitemap/"},{default:h(()=>[rg]),_:1}),u(t,{href:"https://www.nhs.uk/our-policies/"},{default:h(()=>[og]),_:1})]),_:1})}var Bi=g(eg,[["render",ag]]);const ig={};function lg(e,n){const t=d("nhs-hero");return c(),S(t,{heading:"We\u2019re here for you",text:"Helping you take control of your health and wellbeing."})}var Di=g(ig,[["render",lg]]);const ug={};function cg(e,n){const t=d("nhs-hero");return c(),S(t,{"image-url":"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"})}var qi=g(ug,[["render",cg]]);const dg={};function hg(e,n){const t=d("nhs-hero");return c(),S(t,{heading:"We\u2019re here for you",text:"Helping you take control of your health and wellbeing.","image-url":"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"})}var Vi=g(dg,[["render",hg]]);const pg={},mg=w(" Itchy, red, watering eyes ");function fg(e,n){const t=d("nhs-image");return c(),k(D,null,[u(t,{src:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",alt:"Picture of allergic conjunctivitis",srcset:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w",sizes:"(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw"},{default:h(()=>[mg]),_:1}),u(t,{src:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",alt:"Picture of allergic conjunctivitis"})],64)}var Ui=g(pg,[["render",fg]]);const _g=y({setup(){const e=Y({listPanels:[{label:"A",items:[{text:"AAA",href:"http://localhost:3000/conditions/abdominal-aortic-aneurysm/"},{text:"Abdominal aortic aneurysm",href:"http://localhost:3000/conditions/abdominal-aortic-aneurysm/"},{text:"Abscess",href:"http://localhost:3000/conditions/abscess/"}]},{label:"B",disabled:!0,message:"There are currently no conditions listed"},{label:"C",items:[{text:"Chest pain",href:"http://localhost:3000/conditions/chest-pain/"},{text:"Cold sore",href:"http://localhost:3000/conditions/cold-sores/"}]},{label:"D",items:[{text:"Dandruff",href:"http://localhost:3000/conditions/dandruff/"},{text:"Dementia",href:"http://localhost:3000/conditions/dementia/"},{text:"Dental pain",href:"http://localhost:3000/conditions/toothache/"}]}]});return K({},J(e))}}),gg={class:"nhsuk-list"};function bg(e,n,t,s,r,a){const o=d("nhs-list-panel-item"),i=d("nhs-list-panel");return c(),k("ol",gg,[(c(!0),k(D,null,Oe(e.listPanels,(l,p)=>(c(),k("li",{key:`panel-${p}`},[u(i,{label:l.label,message:l.message,"back-to-top":"",disabled:l.disabled},{default:h(()=>[(c(!0),k(D,null,Oe(l.items,(f,m)=>(c(),S(o,{key:`panel-${l.label}-${m}`,href:f.href},{default:h(()=>[w(I(f.text),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["label","message","disabled"])]))),128))])}var Fi=g(_g,[["render",bg]]);const vg=y({setup(){const e=Y({items:[{label:"A"},{label:"B",disabled:!0},{label:"C"},{label:"D"},{label:"E"},{label:"F"},{label:"G"},{label:"H"},{label:"I"},{label:"J"},{label:"K"},{label:"L"},{label:"M"},{label:"N"},{label:"O"},{label:"P"},{label:"Q"},{label:"R"},{label:"S"},{label:"T"},{label:"U"},{label:"V"},{label:"W"},{label:"X"},{label:"Y"},{label:"Z"}]});return K({},J(e))}});function yg(e,n,t,s,r,a){const o=d("nhs-nav-az-item"),i=d("nhs-nav-az");return c(),S(i,null,{default:h(()=>[(c(!0),k(D,null,Oe(e.items,l=>(c(),S(o,{key:`nav-${l.label}`,disabled:l.disabled},{default:h(()=>[w(I(l.label),1)]),_:2},1032,["disabled"]))),128))]),_:1})}var zi=g(vg,[["render",yg]]);const $g={};function kg(e,n){const t=d("nhs-pagination");return c(),S(t,{"previous-href":"http://localhost:3000/section/treatments","previous-page":"Treatments","next-href":"http://localhost:3000/section/symptoms","next-page":"Symptoms"})}var ji=g($g,[["render",kg]]);const wg={};function Sg(e,n){const t=d("nhs-review-date");return c(),S(t,{"last-review":"12 February 2016","next-review":"1 February 2019"})}var Wi=g(wg,[["render",Sg]]);const xg={},Cg=_("p",null,"To view the skip link component, press tab or navigate to the next element.",-1),Eg=w("Skip to main content");function Rg(e,n){const t=d("nhs-skip-link"),s=d("nhs-col"),r=d("nhs-row"),a=d("nhs-main");return c(),S(a,null,{default:h(()=>[u(r,null,{default:h(()=>[u(s,{span:66},{default:h(()=>[Cg,u(t,null,{default:h(()=>[Eg]),_:1})]),_:1})]),_:1})]),_:1})}var Ki=g(xg,[["render",Rg]]);const Tg=y({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return K({},J(e))}}),Ig=w("Change");function Ng(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("router-link"),l=d("nhs-summary-list");return c(),S(l,{data:e.data},{item:h(({item:p})=>[u(o,{type:"key"},{default:h(()=>[w(I(p.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:p.value},null,8,["innerHTML"]),u(o,{type:"actions"},{default:h(()=>[u(i,{to:p.action},{default:h(()=>[Ig]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["data"])}var Gi=g(Tg,[["render",Ng]]);const Ag=y({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return K({},J(e))}});function Mg(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("nhs-summary-list");return c(),S(i,{data:e.data},{item:h(({item:l})=>[u(o,{type:"key"},{default:h(()=>[w(I(l.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:l.value},null,8,["innerHTML"])]),_:1},8,["data"])}var Yi=g(Ag,[["render",Mg]]);const Og=y({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return K({},J(e))}});function Hg(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("nhs-summary-list");return c(),S(i,{data:e.data,border:!1},{item:h(({item:l})=>[u(o,{type:"key"},{default:h(()=>[w(I(l.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:l.value},null,8,["innerHTML"])]),_:1},8,["data"])}var Zi=g(Og,[["render",Hg]]);const Pg=y({setup(){const e=Y({headers:[{text:"Class name",value:"classname"},{text:"Tag",value:"tag",style:"width: 120px"}],items:[{classname:"nhsuk-tag",tag:"",tagText:"Active"},{classname:"nhsuk-tag--white",tag:"white",tagText:"Started"},{classname:"nhsuk-tag--grey",tag:"grey",tagText:"Not started"},{classname:"nhsuk-tag--green",tag:"green",tagText:"New"},{classname:"nhsuk-tag--aqua-green",tag:"aqua-green",tagText:"Active"},{classname:"nhsuk-tag--blue",tag:"blue",tagText:"Pending"},{classname:"nhsuk-tag--purple",tag:"purple",tagText:"Received"},{classname:"nhsuk-tag--pink",tag:"pink",tagText:"Sent"},{classname:"nhsuk-tag--red",tag:"red",tagText:"Rejected"},{classname:"nhsuk-tag--orange",tag:"orange",tagText:"Declined"},{classname:"nhsuk-tag--yellow",tag:"yellow",tagText:"Delayed"}]});return K({},J(e))}});function Lg(e,n,t,s,r,a){const o=d("nhs-tag"),i=d("nhs-table");return c(),S(i,{headers:e.headers,data:e.items,responsive:!1},{"item.classname":h(({item:l})=>[_("code",null,I(l.classname),1)]),"item.tag":h(({item:l})=>[u(o,{color:l.tag},{default:h(()=>[w(I(l.tagText),1)]),_:2},1032,["color"])]),_:1},8,["headers","data"])}var Qi=g(Pg,[["render",Lg]]);const Bg={},Dg=_("p",null," If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help. ",-1);function qg(e,n){const t=d("nhs-warning-callout");return c(),S(t,{heading:"Important"},{default:h(()=>[Dg]),_:1})}var Xi=g(Bg,[["render",qg]]);const Vg={},Ug=_("p",null," Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared. ",-1);function Fg(e,n){const t=d("nhs-warning-callout");return c(),S(t,{heading:"School, nursery or work"},{default:h(()=>[Ug]),_:1})}var Ji=g(Vg,[["render",Fg]]);const zg=y({setup(){const e=Y({data:[{symptoms:"Blisters on lips or around the mouth",cause:"cold sores"},{symptoms:"Itchy, dry, cracked, sore",cause:"eczema"},{symptoms:"Itchy blisters",cause:"shingles, chickenpox"}],headers:[{text:"Skin symptoms",value:"symptoms"},{text:"Possible cause",value:"cause"}]});return K({},J(e))}});function jg(e,n,t,s,r,a){const o=d("nhs-table");return c(),S(o,{headers:e.headers,data:e.data,caption:"Skin symptoms and possible causes",responsive:!1},null,8,["headers","data"])}var el=g(zg,[["render",jg]]);const Wg=y({setup(){const e=Y({data:[{symptoms:"Blisters on lips or around the mouth",cause:"cold sores"},{symptoms:"Itchy, dry, cracked, sore",cause:"eczema"},{symptoms:"Itchy blisters",cause:"shingles, chickenpox"}],headers:[{text:"Symptoms",value:"symptoms"},{text:"Possible cause",value:"cause"}]});return K({},J(e))}});function Kg(e,n,t,s,r,a){const o=d("nhs-table");return c(),S(o,{headers:e.headers,data:e.data,heading:"Conditions similar to impetigo",responsive:!1},null,8,["headers","data"])}var nl=g(Wg,[["render",Kg]]);const Gg=y({setup(){const e=Y({data:[{age:"3 to 5 months (weighing more than 5kg)",howMuch:"2.5ml",howOften:"Max 3 times in 24 hours"},{age:"6 to 11 months",howMuch:"2.5l",howOften:"Max 3 to 4 times in 24 hours"},{age:"1 to 3 years",howMuch:"5ml",howOften:"Max 3 times in 24 hours"},{age:"4 to 6 years",howMuch:"7.5ml",howOften:"Max 3 times in 24 hours"},{age:"7 to 9 years",howMuch:"10ml",howOften:"Max 3 times in 24 hours"},{age:"10 to 11 years",howMuch:"15ml",howOften:"Max 3 times in 24 hours"},{age:"12 to 17 years",howMuch:"15ml to 20ml",howOften:"Max 3 to 4 times in 24 hours"}],headers:[{text:"Age",value:"age"},{text:"How much?",value:"howMuch"},{text:"How often?",value:"howOften"}]});return K({},J(e))}});function Yg(e,n,t,s,r,a){const o=d("nhs-table");return c(),S(o,{headers:e.headers,data:e.data,caption:"Ibuprofen syrup dosages for children"},null,8,["headers","data"])}var tl=g(Gg,[["render",Yg]]);const Zg=y({setup(){const e=Y({model:""});return K({},J(e))}});function Qg(e,n,t,s,r,a){const o=d("nhs-input");return c(),S(o,{label:"National Insurance number",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var sl=g(Zg,[["render",Qg]]);const Xg=y({setup(){const e=Y({model:""});return K({},J(e))}});function Jg(e,n,t,s,r,a){const o=d("nhs-input");return c(),S(o,{label:"Postcode",autocomplete:"postal-code",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var rl=g(Xg,[["render",Jg]]);const eb=y({setup(){const e=Y({model:""});return K({},J(e))}});function nb(e,n,t,s,r,a){const o=d("nhs-input");return c(),S(o,{label:"National insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var ol=g(eb,[["render",nb]]);const tb=y({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:""});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function sb(e,n,t,s,r,a){const o=d("nhs-input");return c(),S(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["rules","modelValue"])}var al=g(tb,[["render",sb]]);const rb=y({setup(){const e=Y({model:""});return K({},J(e))}});function ob(e,n,t,s,r,a){const o=d("nhs-input");return c(),S(o,{label:"National insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",width:"10",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var il=g(rb,[["render",ob]]);const ab=y({setup(){const e=Y({model:"NHS.UK frontend option 2"});return K({},J(e))}}),ib=_("option",null,"NHS.UK frontend option 1",-1),lb=_("option",null,"NHS.UK frontend option 2",-1),ub=_("option",{disabled:""},"NHS.UK frontend option 3",-1);function cb(e,n,t,s,r,a){const o=d("nhs-select");return c(),S(o,{label:"Label text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},{default:h(()=>[ib,lb,ub]),_:1},8,["modelValue"])}var ll=g(ab,[["render",cb]]);const db=y({setup(){const e=Y({model:"NHS.UK frontend option 1",rules:[s=>s!=="NHS.UK frontend option 1"||"Error message goes here"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}}),hb=_("option",null,"NHS.UK frontend option 1",-1),pb=_("option",null,"NHS.UK frontend option 2",-1),mb=_("option",null,"NHS.UK frontend option 3",-1);function fb(e,n,t,s,r,a){const o=d("nhs-select");return c(),S(o,{label:"Label text goes here",hint:"Hint text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),rules:e.rules},{default:h(()=>[hb,pb,mb]),_:1},8,["modelValue","rules"])}var ul=g(db,[["render",fb]]);const _b=y({setup(){const e=Y({model:""});return K({},J(e))}});function gb(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),S(o,{label:"Can you provide more detail?",hint:"Don't include personal or financial information, eg your National Insurance number or credit card details.",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var cl=g(_b,[["render",gb]]);const bb=y({setup(){const e=Y({model:""});return K({},J(e))}});function vb(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),S(o,{label:"Full address",autocomplete:"street-address",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var dl=g(bb,[["render",vb]]);const yb=y({setup(){const e=Y({model:"",rules:[s=>!!s||"You must provide an explanation"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function $b(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),S(o,{label:"Why can't you provide a National Insurance number?",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["rules","modelValue"])}var hl=g(yb,[["render",$b]]);const kb=y({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number"},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{}});return K({},J(e))}});function wb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),S(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var pl=g(kb,[["render",wb]]);const Sb=y({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",autocomplete:"bday-day"},{label:"Month",width:"2",type:"number",autocomplete:"bday-month"},{label:"Year",width:"4",type:"number",autocomplete:"bday-year"}],model:{}});return K({},J(e))}});function xb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),S(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var ml=g(Sb,[["render",xb]]);const Cb=y({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{}});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function Eb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),S(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var fl=g(Cb,[["render",Eb]]);const Rb=y({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Year",width:"4",type:"number",rules:[s=>!!s||"Error message goes here"]}],model:{}});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function Tb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),S(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),ref:"input"},null,8,["items","modelValue"])}var _l=g(Rb,[["render",Tb]]);const Ib=y({setup(){const e=Y({model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});return K({},J(e))}});function Nb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var gl=g(Ib,[["render",Nb]]);const Ab={data(){return{model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}}};function Mb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i),inline:"",label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var bl=g(Ab,[["render",Mb]]);const Ob=y({setup(){const e=Y({model:"",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});return K({},J(e))}});function Hb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),disabled:"",label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var vl=g(Ob,[["render",Hb]]);const Pb=y({setup(){const e=Y({model:"",items:[{label:"Use Government Gateway",value:"gov"},{label:"Use NHS.UK login",value:"login"},{divider:"or"},{label:"Create an account",value:"create"}]});return K({},J(e))}});function Lb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{label:"How do you want to sign in?","heading-size":"l",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var yl=g(Pb,[["render",Lb]]);const Bb={data(){return{model:"",items:[{label:"Sign in with Government Gateway",value:"gov",hint:"You'll have a user ID if you've registered for self assessment or filed a tax return online before."},{label:"Sign in with NHS.UK login",value:"login",hint:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."}]}}};function Db(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{label:"How do you want to sign in?","page-heading":"",items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i),"heading-size":"l"},null,8,["items","modelValue"])}var $l=g(Bb,[["render",Db]]);const qb={data(){return{model:"",items:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"}]}}};function Vb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i)},null,8,["items","modelValue"])}var kl=g(qb,[["render",Vb]]);const Ub=y({setup(){const e=Y({model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],rules:[s=>s!="no"||"Please select an option"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function Fb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently.",rules:e.rules,ref:"radios"},null,8,["items","modelValue","rules"])}var wl=g(Ub,[["render",Fb]]);const zb=y({data(){return{model:"email",items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0}],inputModels:{email:"",phone:"",text:""}}}});function jb(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-radios");return c(),S(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?","heading-size":"l",hint:"Select one option.",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModels[l.value],"onUpdate:modelValue":p=>e.inputModels[l.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var Sl=g(zb,[["render",jb]]);const Wb={},Kb=_("p",{class:"nhsuk-card__description"},[w("Go to "),_("a",{href:"#"},"111.nhs.uk"),w(" or "),_("a",{href:"#"},"call 111")],-1);function Gb(e,n){const t=d("nhs-card");return c(),S(t,{heading:"If you need help now, but it\u2019s not an emergency","heading-level":3},{description:h(()=>[Kb]),_:1})}var xl=g(Wb,[["render",Gb]]);const Yb={};function Zb(e,n){const t=d("nhs-card");return c(),S(t,{href:"#",clickable:"","heading-classes":"nhsuk-heading-m",heading:"Introduction to care and support",description:"A quick guide for people who have care and support needs and their carers"})}var Cl=g(Yb,[["render",Zb]]);const Qb={};function Xb(e,n){const t=d("nhs-card");return c(),S(t,{"img-url":"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",href:"#",clickable:"",heading:"Exercise","heading-classes":"nhsuk-heading-m",description:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})}var El=g(Qb,[["render",Xb]]);const Jb={},ev=_("h2",null,"Halves",-1),nv=_("h2",null,"Thirds",-1),tv=_("h2",null,"Quarters",-1),sv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[w(" 91 "),_("span",{class:"nhsuk-u-visually-hidden"},"Applicants")],-1),rv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Applicants ",-1),ov=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[w(" 23 "),_("span",{class:"nhsuk-u-visually-hidden"},"Jobs")],-1),av=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Jobs ",-1),iv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[w(" 8 "),_("span",{class:"nhsuk-u-visually-hidden"},"Services")],-1),lv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Services ",-1),uv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[w(" 33 "),_("span",{class:"nhsuk-u-visually-hidden"},"Messages")],-1),cv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Messages ",-1);function dv(e,n){const t=d("nhs-card"),s=d("nhs-card-group");return c(),k(D,null,[ev,u(s,{type:"half"},{default:h(()=>[u(t,{href:"#",clickable:"",heading:"Introduction to care and support","heading-classes":"nhsuk-heading-m",description:"A quick guide for people who have care and support needs and their carers"}),u(t,{href:"#",clickable:"",heading:"Help from social services and charities","heading-classes":"nhsuk-heading-m",description:"Includes helplines, needs assessments, advocacy and reporting abuse"}),u(t,{href:"#",clickable:"",heading:"Money, work and benefits","heading-classes":"nhsuk-heading-m",description:"How to pay for care and support, and where you can get help with costs"}),u(t,{href:"#",clickable:"",heading:"Care after a hospital stay","heading-classes":"nhsuk-heading-m",description:"Includes hospital discharge and care and support afterwards"})]),_:1}),nv,u(s,{type:"third"},{default:h(()=>[u(t,{href:"#",clickable:"",heading:"5 steps to mental wellbeing","heading-classes":"nhsuk-heading-m",description:"Practical advice to help you feel mentally and emotionally better"}),u(t,{href:"#",clickable:"",heading:"Healthy weight","heading-classes":"nhsuk-heading-m",description:"Check your BMI using our healthy weight calculator and find out if you're a healthy weight"}),u(t,{href:"#",clickable:"",heading:"Exercise","heading-classes":"nhsuk-heading-m",description:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})]),_:1}),tv,u(s,{type:"quarter"},{default:h(()=>[u(t,{clickable:""},{heading:h(()=>[sv,rv]),_:1}),u(t,{clickable:""},{heading:h(()=>[ov,av]),_:1}),u(t,{clickable:""},{heading:h(()=>[iv,lv]),_:1}),u(t,{clickable:""},{heading:h(()=>[uv,cv]),_:1})]),_:1})],64)}var Rl=g(Jb,[["render",dv]]);const hv={};function pv(e,n){const t=d("nhs-card");return c(),S(t,{feature:"",heading:"Feature card heading","heading-classes":"nhsuk-heading-m",description:"Feature card description"})}var Tl=g(hv,[["render",pv]]);const mv=[{path:"/examples/card-basic",component:xl,name:"Card - Basic card"},{path:"/examples/card-clickable",component:Cl,name:"Card - Clickable card"},{path:"/examples/card-image",component:El,name:"Card - card with an image"},{path:"/examples/card-group",component:Rl,name:"Card - Card group"},{path:"/examples/card-feature",component:Tl,name:"Card - Feature card"}],fv={},_v=_("ul",null,[_("li",null,"you're not sure it's chickenpox"),_("li",null,"the skin around the blisters is red, hot or painful (signs of infection)"),_("li",null,[w("your child is "),_("a",{href:"https://www.nhs.uk/conditions/dehydration"},"dehydrated")]),_("li",null,"you're concerned about your child or they get worse")],-1),gv=_("p",null,"Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.",-1);function bv(e,n){const t=d("nhs-care-card");return c(),S(t,{heading:"Speak to a GP if:"},{default:h(()=>[_v,gv]),_:1})}var Il=g(fv,[["render",bv]]);const vv={},yv=_("ul",null,[_("li",null,"you're an adult and have chickenpox"),_("li",null,"you're pregnant and haven't had chickenpox before and you've been near someone with it "),_("li",null,"you have a weakened immune system and you've been near someone with chickenpox"),_("li",null,"you think your newborn baby has chickenpox")],-1),$v=_("p",null,"In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.",-1);function kv(e,n){const t=d("nhs-care-card");return c(),S(t,{heading:"Ask for an urgent GP appointment if:",type:"urgent"},{default:h(()=>[yv,$v]),_:1})}var Nl=g(vv,[["render",kv]]);const wv={},Sv=_("ul",null,[_("li",null,"spreads to your arms, back, neck or jaw"),_("li",null,"makes your chest feel tight or heavy"),_("li",null,"also started with shortness of breath, sweating and feeling or being sick")],-1),xv=_("p",null,"You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.",-1);function Cv(e,n){const t=d("nhs-care-card");return c(),S(t,{heading:"Call 999 if you have sudden chest pain that:",type:"emergency"},{default:h(()=>[Sv,xv]),_:1})}var Al=g(wv,[["render",Cv]]);const Ev=[{path:"/examples/care-card-non-urgent",component:Il,name:"Card - Care card non-urgent (blue)"},{path:"/examples/care-card-urgent",component:Nl,name:"Card - Care card urgent (red)"},{path:"/examples/care-card-emergency",component:Al,name:"Card - Care card emergency (red and black)"}],Rv={},Tv=w(" Find a minor injuries unit ");function Iv(e,n){const t=d("nhs-action-link");return c(),S(t,{href:"https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551"},{default:h(()=>[Tv]),_:1})}var Ml=g(Rv,[["render",Iv]]);const Nv=[{path:"/examples/action-link",component:Ml,name:"Action link"}],Av=y({setup(){const e=Y({items:[{label:"British",value:"british"},{label:"Irish",value:"irish"},{label:"citizen of another country",value:"other"}],model:[]});return K({},J(e))}});function Mv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"heading-size":"m",label:"What is your nationality?",hint:"If you have more than 1 nationality, select all options that are relevant to you."},null,8,["items","modelValue"])}var Ol=g(Av,[["render",Mv]]);const Ov=y({setup(){const e=Y({model:[],items:[{label:"Sign in with Government Gateway",hint:"You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before.",value:"gov"},{label:"Sign in with NHS.UK login",hint:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",value:"login"}]});return K({},J(e))}});function Hv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"page-heading":"",label:"How do you want to sign in?","heading-size":"m"},null,8,["items","modelValue"])}var Hl=g(Ov,[["render",Hv]]);const Pv=y({setup(){const e=Y({model:[],items:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue",disabled:!0}]});return K({},J(e))}});function Lv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var Pl=g(Pv,[["render",Lv]]);const Bv=y({setup(){const e=Y({model:[],items:[{label:"Waste from animal carcasses",value:"animal"},{label:"Waste from mines or quarries",value:"mines"},{label:"Farm or agricultural waste",value:"farm"}]});return K({},J(e))}});function Dv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"page-heading":"",label:"Which types of waste do you transport regularly?",hint:"Select all that apply.","heading-size":"m"},null,8,["items","modelValue"])}var Ll=g(Bv,[["render",Dv]]);const qv=y({setup(){const e=Y({model:[],items:[{label:"Waste from animal carcasses",value:"animal"},{label:"Waste from mines or quarries",value:"mines"},{label:"Farm or agricultural waste",value:"farm"}],rules:[s=>s.length>0||"Please select an option"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}});function Vv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),S(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),rules:e.rules,"heading-size":"m",label:"Which types of waste do you transport regularly?"},null,8,["items","modelValue","rules"])}var Bl=g(qv,[["render",Vv]]);const Uv=y({setup(){const e=Y({items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0}],model:[],inputModel:{email:"",phone:"",text:""}});return K({},J(e))}});function Fv(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-checkboxes");return c(),S(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?",hint:"Select all options that are relevant to you.","heading-size":"l",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModel[l.conditional.value],"onUpdate:modelValue":p=>e.inputModel[l.conditional.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var Dl=g(Uv,[["render",Fv]]);const zv=y({setup(){const e=Y({items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0},{divider:"or"},{label:"None of the above",value:"none"}],model:[],inputModel:{email:"",phone:"",text:""}});return K({},J(e))}});function jv(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-checkboxes");return c(),S(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?",hint:"Select all options that are relevant to you.","heading-size":"l",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModel[l.conditional.value],"onUpdate:modelValue":p=>e.inputModel[l.conditional.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var ql=g(zv,[["render",jv]]);const Wv=[{path:"/examples/checkbox",component:Ol,name:"Checkboxes"},{path:"/examples/checkbox-hint",component:Hl,name:"Checkboxes with hint text"},{path:"/examples/checkbox-disabled",component:Pl,name:"Checkboxes with disabled item"},{path:"/examples/checkbox-heading",component:Ll,name:"Checkboxes with legend as page heading"},{path:"/examples/checkbox-error",component:Bl,name:"Checkboxes with error message"},{path:"/examples/checkbox-conditional",component:Dl,name:"Checkboxes with conditional content"},{path:"/examples/checkbox-non-of-above",component:ql,name:'Checkboxes with "none of the above" option'}],Kv={},Gv=w(" Health A-Z "),Yv=w(" Live Well "),Zv=w(" Mental health "),Qv=w(" Care and support "),Xv=w(" Pregnancy "),Jv=w(" NHS services ");function ey(e,n){const t=d("nhs-header-item"),s=d("nhs-header");return c(),S(s,{"show-nav":"","show-search":""},{default:h(()=>[u(t,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[Gv]),_:1}),u(t,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[Yv]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[Zv]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[Qv]),_:1}),u(t,{href:"https://www.nhs.uk/news/"},{default:h(()=>[Xv]),_:1}),u(t,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[Jv]),_:1})]),_:1})}var Vl=g(Kv,[["render",ey]]);const ny={};function ty(e,n){const t=d("nhs-header");return c(),S(t)}var sy=g(ny,[["render",ty]]);const ry={};function oy(e,n){const t=d("nhs-header");return c(),S(t,{transactional:""})}var ay=g(ry,[["render",oy]]);const iy=y({setup(){const e=Y({service:{name:"Register with a GP",href:"/"}});return K({},J(e))}});function ly(e,n,t,s,r,a){const o=d("nhs-header");return c(),S(o,{service:e.service,transactional:""},null,8,["service"])}var Ul=g(iy,[["render",ly]]);const uy={},cy=w(" Health A-Z "),dy=w(" Live Well "),hy=w(" Mental health "),py=w(" Care and support "),my=w(" Pregnancy "),fy=w(" NHS services ");function _y(e,n){const t=d("nhs-header-item"),s=d("nhs-header");return c(),S(s,{"show-nav":""},{default:h(()=>[u(t,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[cy]),_:1}),u(t,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[dy]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[hy]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[py]),_:1}),u(t,{href:"https://www.nhs.uk/news/"},{default:h(()=>[my]),_:1}),u(t,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[fy]),_:1})]),_:1})}var gy=g(uy,[["render",_y]]);const by=y({setup(){const e=Y({searchItems:[{text:"Item one",value:"item_one"},{text:"Item two",value:"item_two"},{text:"Car one",value:"car_one"}],searchText:""});function n(){return e.searchItems.filter(s=>s.text.toLowerCase().includes(e.searchText.toLowerCase())&&e.searchText)}function t(s){alert(s)}return xe(K({},J(e)),{searchResults:n,onSubmitSearch:t})}}),vy=w(" Health A-Z "),yy=w(" Live Well "),$y=w(" Care and support "),ky=w(" Health news "),wy=w(" Services near you ");function Sy(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),S(i,{"show-search":"","search-results":e.searchResults(),"search-text":e.searchText,"onUpdate:search-text":n[0]||(n[0]=l=>e.searchText=l),onSubmitSearch:e.onSubmitSearch},{default:h(()=>[u(o,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[vy]),_:1}),u(o,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[yy]),_:1}),u(o,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[$y]),_:1}),u(o,{href:"https://www.nhs.uk/news/"},{default:h(()=>[ky]),_:1}),u(o,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[wy]),_:1})]),_:1},8,["search-results","search-text","onSubmitSearch"])}var xy=g(by,[["render",Sy]]);const Cy=y({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return K({},J(e))}}),Ey=w("Your hospital visit"),Ry=w("Wards and departments"),Ty=w("Conditions and treatments"),Iy=w("Our people"),Ny=w("Our research");function Ay(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),S(i,{"show-nav":"","show-search":"",organisation:e.organisation},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[Ey]),_:1}),u(o,{href:"#"},{default:h(()=>[Ry]),_:1}),u(o,{href:"#"},{default:h(()=>[Ty]),_:1}),u(o,{href:"#"},{default:h(()=>[Iy]),_:1}),u(o,{href:"#"},{default:h(()=>[Ny]),_:1})]),_:1},8,["organisation"])}var Fl=g(Cy,[["render",Ay]]);const My=y({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return K({},J(e))}}),Oy=w("Your hospital visit"),Hy=w("Wards and departments"),Py=w("Conditions and treatments"),Ly=w("Our people"),By=w("Our research");function Dy(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),S(i,{"show-nav":"","show-search":"",organisation:e.organisation,"white-header":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[Oy]),_:1}),u(o,{href:"#"},{default:h(()=>[Hy]),_:1}),u(o,{href:"#"},{default:h(()=>[Py]),_:1}),u(o,{href:"#"},{default:h(()=>[Ly]),_:1}),u(o,{href:"#"},{default:h(()=>[By]),_:1})]),_:1},8,["organisation"])}var qy=g(My,[["render",Dy]]);const Vy=y({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return K({},J(e))}}),Uy=w("Your hospital visit"),Fy=w("Wards and departments"),zy=w("Conditions and treatments"),jy=w("Our people"),Wy=w("Our research");function Ky(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),S(i,{"show-nav":"","show-search":"",organisation:e.organisation,"white-header":"","white-nav":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[Uy]),_:1}),u(o,{href:"#"},{default:h(()=>[Fy]),_:1}),u(o,{href:"#"},{default:h(()=>[zy]),_:1}),u(o,{href:"#"},{default:h(()=>[jy]),_:1}),u(o,{href:"#"},{default:h(()=>[Wy]),_:1})]),_:1},8,["organisation"])}var zl=g(Vy,[["render",Ky]]);const Gy=y({setup(){const e=Y({service:{name:"Prototype kit"}});return K({},J(e))}});function Yy(e,n,t,s,r,a){const o=d("nhs-header");return c(),S(o,{service:e.service},null,8,["service"])}var Zy=g(Gy,[["render",Yy]]);const Qy=y({setup(){const e=Y({service:{name:"Digital service manual"}});return K({},J(e))}}),Xy=w("NHS service standard"),Jy=w("Design system"),e$=w("Content style guide"),n$=w("Accessibility"),t$=w("Community and contribution");function s$(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),S(i,{service:e.service,"show-nav":"","show-search":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[Xy]),_:1}),u(o,{href:"#"},{default:h(()=>[Jy]),_:1}),u(o,{href:"#"},{default:h(()=>[e$]),_:1}),u(o,{href:"#"},{default:h(()=>[n$]),_:1}),u(o,{href:"#"},{default:h(()=>[t$]),_:1})]),_:1},8,["service"])}var r$=g(Qy,[["render",s$]]);const o$=[{path:"/examples/header",component:Vl,name:"Header"},{path:"/examples/header-nav",component:gy,name:"Header with navigation"},{path:"/examples/header-search",component:xy,name:"Header with search"},{path:"/examples/header-logo",component:sy,name:"Header with logo only"},{path:"/examples/header-service",component:Zy,name:"Header with a service name"},{path:"/examples/header-service-nav",component:r$,name:"Header with a service name, search and navigation"},{path:"/examples/header-transactional",component:ay,name:"Header transactional"},{path:"/examples/header-transactional-name",component:Ul,name:"Header transactional with service name"},{path:"/examples/header-org",component:Fl,name:"Header organisational"},{path:"/examples/header-org-white",component:qy,name:"Header organisational with white header"},{path:"/examples/header-org-white-nav",component:zl,name:"Header organisational with white header and navigation"}],a$={},i$=_("p",null," Describe the errors and how to correct them ",-1),l$=_("li",null,[_("a",{href:"#example-error-1"},"Date of birth must be in the past")],-1);function u$(e,n){const t=d("nhs-list"),s=d("nhs-error-summary");return c(),S(s,{title:"There is a problem"},{default:h(()=>[i$,u(t,{type:"error"},{default:h(()=>[l$]),_:1})]),_:1})}var jl=g(a$,[["render",u$]]);const c$=y({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:""});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}}),d$=_("p",null,[w(" Optional description of the errors and how to correct them. "),_("br"),w(" Note that the error summary should receive focus on page load using the JavaScript that comes with this component. ")],-1),h$=_("li",null,[_("a",{href:"#input-with-error-message"},"Link to input error with explanation")],-1),p$=Bs("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",37),m$=Bs("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",97);function f$(e,n,t,s,r,a){const o=d("nhs-list"),i=d("nhs-error-summary"),l=d("nhs-input");return c(),k(D,null,[u(i,{title:"There is a problem"},{default:h(()=>[d$,u(o,{type:"error"},{default:h(()=>[h$]),_:1})]),_:1}),p$,u(l,{label:"National Insurance number",hint:"Clicking an error summary link should scroll the top of this input's label into view.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=p=>e.model=p)},null,8,["rules","modelValue"]),m$],64)}var _$=g(c$,[["render",f$]]);const g$=y({setup(){const e=Y({rules:[s=>!!s||"Please select an option"],model:"",radioItems:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});let n;function t(s,r){n=r}return Ee("register-validator",t),Pe(()=>{n()}),K({},J(e))}}),b$=_("p",null,[w(" Optional description of the errors and how to correct them. "),_("br"),w(" Note that the error summary should receive focus on page load using the JavaScript that comes with this component. ")],-1),v$=_("li",null,[_("a",{href:"#"},"Link to radio error with explanation (Note how it links to the first radio)")],-1),y$=Bs("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",37),$$=Bs("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",97);function k$(e,n,t,s,r,a){const o=d("nhs-list"),i=d("nhs-error-summary"),l=d("nhs-radios");return c(),k(D,null,[u(i,{title:"There is a problem"},{default:h(()=>[b$,u(o,{type:"error"},{default:h(()=>[v$]),_:1})]),_:1}),y$,u(l,{label:"Have you changed your name?",hint:"Clicking an error summary link should scroll the top of this radio fieldset into view.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=p=>e.model=p),items:e.radioItems,"heading-size":"m"},null,8,["rules","modelValue","items"]),$$],64)}var w$=g(g$,[["render",k$]]);const S$=[{path:"/examples/error-summary",component:jl,name:"Error summary"},{path:"/examples/error-summary-link-to-input",component:_$,name:"Error summary with link to an input field"},{path:"/examples/error-summary-link-to-radio",component:w$,name:"Error summary with link to a radio field"}],Wl=[{path:"",component:Rf,name:"Examples"},...Nv,{path:"/examples/back-link",component:ki,name:"Back link"},{path:"/examples/breadcrumb",component:wi,name:"Breadcrumb"},{path:"/examples/button",component:Vf,name:"Button"},{path:"/examples/button-link",component:jf,name:"Button as a link"},{path:"/examples/button-disabled",component:Yf,name:"Button disabled"},{path:"/examples/button-secondary",component:Jf,name:"Button secondary"},{path:"/examples/button-reversed",component:s_,name:"Button reverse"},...mv,...Ev,{path:"/examples/contents-list",component:Si,name:"Contents list"},{path:"/examples/details",component:xi,name:"Details"},{path:"/examples/do-dont",component:Ci,name:"Do and Don't list"},...S$,{path:"/examples/error-text",component:Ei,name:"Error message"},{path:"/examples/hint-text",component:Ri,name:"Hint"},{path:"/examples/inset-text",component:Ti,name:"Inset text"},{path:"/examples/label",component:Ii,name:"Label"},{path:"/examples/label-bold",component:Ni,name:"Label with bold text"},{path:"/examples/label-heading",component:Ai,name:"Label as page heading"},{path:"/examples/expander",component:Mi,name:"Expander"},{path:"/examples/expander-group",component:Oi,name:"Expander group"},{path:"/examples/fieldset",component:Hi,name:"Fieldset"},{path:"/examples/fieldset-heading",component:Pi,name:"Fieldset as page heading"},{path:"/examples/fieldset-input",component:Li,name:"Fieldset with inputs"},{path:"/examples/footer",component:Bi,name:"Footer"},...o$,{path:"/examples/hero",component:Di,name:"Hero"},{path:"/examples/hero-image",component:qi,name:"Hero with image"},{path:"/examples/hero-image-text",component:Vi,name:"Hero with image with content"},{path:"/examples/image",component:Ui,name:"Images"},{path:"/examples/list-panel",component:Fi,name:"List Panel"},{path:"/examples/nav-az",component:zi,name:"Nav AZ"},{path:"/examples/pagination",component:ji,name:"Pagination"},{path:"/examples/review-date",component:Wi,name:"Review date"},{path:"/examples/skip-link",component:Ki,name:"Skip link"},{path:"/examples/summary-list",component:Gi,name:"Summary list"},{path:"/examples/summary-list-no-action",component:Yi,name:"Summary list without actions"},{path:"/examples/summary-list-no-border",component:Zi,name:"Summary list without border"},{path:"/examples/tag",component:Qi,name:"Tag"},{path:"/examples/warning-callout",component:Xi,name:"Warning callout"},{path:"/examples/warning-callout-non-important",component:Ji,name:"Warning callout with custom heading"},{path:"/examples/table",component:el,name:"Table"},{path:"/examples/table-panel",component:nl,name:"Table as a panel"},{path:"/examples/table-responsive",component:tl,name:"Responsive table"},{path:"/examples/input",component:sl,name:"Input"},{path:"/examples/input-autocomplete",component:rl,name:"Input with autocomplete attribute"},{path:"/examples/input-hint",component:ol,name:"Input with hint text"},{path:"/examples/input-error",component:al,name:"Input with error message"},{path:"/examples/input-width",component:il,name:"Input with width modifier"},{path:"/examples/select",component:ll,name:"Select"},{path:"/examples/select-error",component:ul,name:"Select with hint text and error message"},{path:"/examples/textarea",component:cl,name:"Textarea"},{path:"/examples/textarea-autocomplete",component:dl,name:"Textarea with autocomplete attribute"},{path:"/examples/textarea-error",component:hl,name:"Textarea with error message"},{path:"/examples/date-input",component:pl,name:"Date input"},{path:"/examples/date-input-autocomplete",component:ml,name:"Date input with autocomplete attribute"},{path:"/examples/date-input-error",component:fl,name:"Date input with error"},{path:"/examples/date-input-error-multi",component:_l,name:"Date input with multiple errors"},...Wv,{path:"/examples/radio",component:gl,name:"Radios"},{path:"/examples/radio-inline",component:bl,name:"Radios inline"},{path:"/examples/radio-disabled",component:vl,name:"Radios disabled"},{path:"/examples/radio-divider",component:yl,name:"Radios with a divider"},{path:"/examples/radio-hint",component:$l,name:"Radios with hint text"},{path:"/examples/radio-no-heading",component:kl,name:"Radios without fieldset"},{path:"/examples/radio-error",component:wl,name:"Radios with hint text and error message"},{path:"/examples/radio-conditional",component:Sl,name:"Radios with conditional content"}].map(e=>{const s=e,{name:n}=s,t=zs(s,["name"]);return xe(K({},t),{name:`examples-${n}`})}),x$=yi(Wl,["examples-Examples"]),C$=[{path:"/",component:hf},{path:"/components",component:ff,children:$i},{path:"/examples",component:kf,children:Wl},{path:"/:catchAll(.*)",redirect:"/"}];var tn=Wh({history:lh(),routes:C$});const E$=y({setup(){const e=Y({footerLinks:[{text:"Github",href:"https://github.com/xLasercut/nhsuk-frontend-vue"}]}),n=F(()=>!tn.currentRoute.value.fullPath.includes("/examples/"));return xe(K({},J(e)),{showFooter:n})}});function R$(e,n,t,s,r,a){const o=d("nhs-footer-item"),i=d("nhs-footer");return e.showFooter?(c(),S(i,{key:0},{default:h(()=>[(c(!0),k(D,null,Oe(e.footerLinks,(l,p)=>(c(),S(o,{key:p,href:l.href},{default:h(()=>[w(I(l.text),1)]),_:2},1032,["href"]))),128))]),_:1})):W("",!0)}var T$=g(E$,[["render",R$]]);const I$=y({setup(){const e=Y({searchText:""});function n(){return fr.filter(r=>r.name.toLowerCase().includes(e.searchText.toLowerCase())&&e.searchText).map(r=>({text:r.name,value:r.path})).slice(0,10)}function t(r){tn.push(r.value)}const s=F(()=>!tn.currentRoute.value.fullPath.includes("/examples/"));return xe(K({},J(e)),{filteredSearchResults:n,submitSearch:t,showHeader:s})}});function N$(e,n,t,s,r,a){const o=d("nhs-header");return e.showHeader?(c(),S(o,{key:0,"search-results":e.filteredSearchResults(),"search-text":e.searchText,"onUpdate:search-text":n[0]||(n[0]=i=>e.searchText=i),onSubmitSearch:e.submitSearch,"show-search":""},null,8,["search-results","search-text","onSubmitSearch"])):W("",!0)}var A$=g(I$,[["render",N$]]);const M$=y({components:{SiteFooter:T$,SiteHeader:A$}});function O$(e,n,t,s,r,a){const o=d("site-header"),i=d("router-view"),l=d("site-footer");return c(),k(D,null,[u(o),u(i),u(l)],64)}var H$=g(M$,[["render",O$]]);var qr={exports:{}};function Vr(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&Vr(t)}),e}qr.exports=Vr;qr.exports.default=Vr;var P$=qr.exports;class jo{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Kl(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function On(e,...n){const t=Object.create(null);for(const s in e)t[s]=e[s];return n.forEach(function(s){for(const r in s)t[r]=s[r]}),t}const L$="</span>",Wo=e=>!!e.kind,B$=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((s,r)=>`${s}${"_".repeat(r+1)}`)].join(" ")}return`${n}${e}`};class D${constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Kl(n)}openNode(n){if(!Wo(n))return;let t=n.kind;n.sublanguage?t=`language-${t}`:t=B$(t,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!Wo(n)||(this.buffer+=L$)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}class Ur{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t={kind:n,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(s=>this._walk(n,s)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Ur._collapse(t)})))}}class q$ extends Ur{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const s=n.root;s.kind=t,s.sublanguage=!0,this.add(s)}toHTML(){return new D$(this,this.options).value()}finalize(){return!0}}function Kt(e){return e?typeof e=="string"?e:e.source:null}function Gl(e){return nt("(?=",e,")")}function V$(e){return nt("(?:",e,")*")}function U$(e){return nt("(?:",e,")?")}function nt(...e){return e.map(t=>Kt(t)).join("")}function F$(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Fr(...e){const n=F$(e);return"("+(n.capture?"":"?:")+e.map(s=>Kt(s)).join("|")+")"}function Yl(e){return new RegExp(e.toString()+"|").exec("").length-1}function z$(e,n){const t=e&&e.exec(n);return t&&t.index===0}const j$=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function zr(e,{joinWith:n}){let t=0;return e.map(s=>{t+=1;const r=t;let a=Kt(s),o="";for(;a.length>0;){const i=j$.exec(a);if(!i){o+=a;break}o+=a.substring(0,i.index),a=a.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?o+="\\"+String(Number(i[1])+r):(o+=i[0],i[0]==="("&&t++)}return o}).map(s=>`(${s})`).join(n)}const W$=/\b\B/,Zl="[a-zA-Z]\\w*",jr="[a-zA-Z_]\\w*",Ql="\\b\\d+(\\.\\d+)?",Xl="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Jl="\\b(0b[01]+)",K$="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",G$=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=nt(n,/.*\b/,e.binary,/\b.*/)),On({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,s)=>{t.index!==0&&s.ignoreMatch()}},e)},Gt={begin:"\\\\[\\s\\S]",relevance:0},Y$={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Gt]},Z$={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Gt]},Q$={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Vs=function(e,n,t={}){const s=On({scope:"comment",begin:e,end:n,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=Fr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:nt(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},X$=Vs("//","$"),J$=Vs("/\\*","\\*/"),e1=Vs("#","$"),n1={scope:"number",begin:Ql,relevance:0},t1={scope:"number",begin:Xl,relevance:0},s1={scope:"number",begin:Jl,relevance:0},r1={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Gt,{begin:/\[/,end:/\]/,relevance:0,contains:[Gt]}]}]},o1={scope:"title",begin:Zl,relevance:0},a1={scope:"title",begin:jr,relevance:0},i1={begin:"\\.\\s*"+jr,relevance:0},l1=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var is=Object.freeze({__proto__:null,MATCH_NOTHING_RE:W$,IDENT_RE:Zl,UNDERSCORE_IDENT_RE:jr,NUMBER_RE:Ql,C_NUMBER_RE:Xl,BINARY_NUMBER_RE:Jl,RE_STARTERS_RE:K$,SHEBANG:G$,BACKSLASH_ESCAPE:Gt,APOS_STRING_MODE:Y$,QUOTE_STRING_MODE:Z$,PHRASAL_WORDS_MODE:Q$,COMMENT:Vs,C_LINE_COMMENT_MODE:X$,C_BLOCK_COMMENT_MODE:J$,HASH_COMMENT_MODE:e1,NUMBER_MODE:n1,C_NUMBER_MODE:t1,BINARY_NUMBER_MODE:s1,REGEXP_MODE:r1,TITLE_MODE:o1,UNDERSCORE_TITLE_MODE:a1,METHOD_GUARD:i1,END_SAME_AS_BEGIN:l1});function u1(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function c1(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function d1(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=u1,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function h1(e,n){!Array.isArray(e.illegal)||(e.illegal=Fr(...e.illegal))}function p1(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function m1(e,n){e.relevance===void 0&&(e.relevance=1)}const f1=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=t.keywords,e.begin=nt(t.beforeMatch,Gl(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},_1=["of","and","for","in","not","or","if","then","parent","list","value"],g1="keyword";function eu(e,n,t=g1){const s=Object.create(null);return typeof e=="string"?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach(function(a){Object.assign(s,eu(e[a],n,a))}),s;function r(a,o){n&&(o=o.map(i=>i.toLowerCase())),o.forEach(function(i){const l=i.split("|");s[l[0]]=[a,b1(l[0],l[1])]})}}function b1(e,n){return n?Number(n):v1(e)?0:1}function v1(e){return _1.includes(e.toLowerCase())}const Ko={},Xn=e=>{console.error(e)},Go=(e,...n)=>{console.log(`WARN: ${e}`,...n)},lt=(e,n)=>{Ko[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Ko[`${e}/${n}`]=!0)},xs=new Error;function nu(e,n,{key:t}){let s=0;const r=e[t],a={},o={};for(let i=1;i<=n.length;i++)o[i+s]=r[i],a[i+s]=!0,s+=Yl(n[i-1]);e[t]=o,e[t]._emit=a,e[t]._multi=!0}function y1(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Xn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),xs;if(typeof e.beginScope!="object"||e.beginScope===null)throw Xn("beginScope must be object"),xs;nu(e,e.begin,{key:"beginScope"}),e.begin=zr(e.begin,{joinWith:""})}}function $1(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Xn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),xs;if(typeof e.endScope!="object"||e.endScope===null)throw Xn("endScope must be object"),xs;nu(e,e.end,{key:"endScope"}),e.end=zr(e.end,{joinWith:""})}}function k1(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function w1(e){k1(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),y1(e),$1(e)}function S1(e){function n(o,i){return new RegExp(Kt(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,i]),this.matchAt+=Yl(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(l=>l[1]);this.matcherRe=n(zr(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(i);if(!l)return null;const p=l.findIndex((m,v)=>v>0&&m!==void 0),f=this.matchIndexes[p];return l.splice(0,p),Object.assign(l,f)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const l=new t;return this.rules.slice(i).forEach(([p,f])=>l.addRule(p,f)),l.compile(),this.multiRegexes[i]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,l){this.rules.push([i,l]),l.type==="begin"&&this.count++}exec(i){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let p=l.exec(i);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,p=f.exec(i)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}function r(o){const i=new s;return o.contains.forEach(l=>i.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&i.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&i.addRule(o.illegal,{type:"illegal"}),i}function a(o,i){const l=o;if(o.isCompiled)return l;[c1,p1,w1,f1].forEach(f=>f(o,i)),e.compilerExtensions.forEach(f=>f(o,i)),o.__beforeBegin=null,[d1,h1,m1].forEach(f=>f(o,i)),o.isCompiled=!0;let p=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),p=o.keywords.$pattern,delete o.keywords.$pattern),p=p||/\w+/,o.keywords&&(o.keywords=eu(o.keywords,e.case_insensitive)),l.keywordPatternRe=n(p,!0),i&&(o.begin||(o.begin=/\B|\b/),l.beginRe=n(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=n(l.end)),l.terminatorEnd=Kt(l.end)||"",o.endsWithParent&&i.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+i.terminatorEnd)),o.illegal&&(l.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(f){return x1(f==="self"?o:f)})),o.contains.forEach(function(f){a(f,l)}),o.starts&&a(o.starts,i),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=On(e.classNameAliases||{}),a(e)}function tu(e){return e?e.endsWithParent||tu(e.starts):!1}function x1(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return On(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:tu(e)?On(e,{starts:e.starts?On(e.starts):null}):Object.isFrozen(e)?On(e):e}var C1="11.5.1";class E1 extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Xs=Kl,Yo=On,Zo=Symbol("nomatch"),R1=7,T1=function(e){const n=Object.create(null),t=Object.create(null),s=[];let r=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:q$};function l(M){return i.noHighlightRe.test(M)}function p(M){let q=M.className+" ";q+=M.parentNode?M.parentNode.className:"";const X=i.languageDetectRe.exec(q);if(X){const ie=Ie(X[1]);return ie||(Go(a.replace("{}",X[1])),Go("Falling back to no-highlight mode for this block.",M)),ie?X[1]:"no-highlight"}return q.split(/\s+/).find(ie=>l(ie)||Ie(ie))}function f(M,q,X){let ie="",ge="";typeof q=="object"?(ie=M,X=q.ignoreIllegals,ge=q.language):(lt("10.7.0","highlight(lang, code, ...args) has been deprecated."),lt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ge=M,ie=q),X===void 0&&(X=!0);const Ce={code:ie,language:ge};Xe("before:highlight",Ce);const Ae=Ce.result?Ce.result:m(Ce.language,Ce.code,X);return Ae.code=Ce.code,Xe("after:highlight",Ae),Ae}function m(M,q,X,ie){const ge=Object.create(null);function Ce(E,H){return E.keywords[H]}function Ae(){if(!x.keywords){B.addText(N);return}let E=0;x.keywordPatternRe.lastIndex=0;let H=x.keywordPatternRe.exec(N),Z="";for(;H;){Z+=N.substring(E,H.index);const oe=$.case_insensitive?H[0].toLowerCase():H[0],ce=Ce(x,oe);if(ce){const[me,Je]=ce;if(B.addText(Z),Z="",ge[oe]=(ge[oe]||0)+1,ge[oe]<=R1&&(U+=Je),me.startsWith("_"))Z+=H[0];else{const xn=$.classNameAliases[me]||me;B.addKeyword(H[0],xn)}}else Z+=H[0];E=x.keywordPatternRe.lastIndex,H=x.keywordPatternRe.exec(N)}Z+=N.substr(E),B.addText(Z)}function Be(){if(N==="")return;let E=null;if(typeof x.subLanguage=="string"){if(!n[x.subLanguage]){B.addText(N);return}E=m(x.subLanguage,N,!0,V[x.subLanguage]),V[x.subLanguage]=E._top}else E=R(N,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(U+=E.relevance),B.addSublanguage(E._emitter,E.language)}function De(){x.subLanguage!=null?Be():Ae(),N=""}function T(E,H){let Z=1;const oe=H.length-1;for(;Z<=oe;){if(!E._emit[Z]){Z++;continue}const ce=$.classNameAliases[E[Z]]||E[Z],me=H[Z];ce?B.addKeyword(me,ce):(N=me,Ae(),N=""),Z++}}function ne(E,H){return E.scope&&typeof E.scope=="string"&&B.openNode($.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(B.addKeyword(N,$.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),N=""):E.beginScope._multi&&(T(E.beginScope,H),N="")),x=Object.create(E,{parent:{value:x}}),x}function z(E,H,Z){let oe=z$(E.endRe,Z);if(oe){if(E["on:end"]){const ce=new jo(E);E["on:end"](H,ce),ce.isMatchIgnored&&(oe=!1)}if(oe){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return z(E.parent,H,Z)}function se(E){return x.matcher.regexIndex===0?(N+=E[0],1):(ee=!0,0)}function ve(E){const H=E[0],Z=E.rule,oe=new jo(Z),ce=[Z.__beforeBegin,Z["on:begin"]];for(const me of ce)if(!!me&&(me(E,oe),oe.isMatchIgnored))return se(H);return Z.skip?N+=H:(Z.excludeBegin&&(N+=H),De(),!Z.returnBegin&&!Z.excludeBegin&&(N=H)),ne(Z,E),Z.returnBegin?0:H.length}function ye(E){const H=E[0],Z=q.substr(E.index),oe=z(x,E,Z);if(!oe)return Zo;const ce=x;x.endScope&&x.endScope._wrap?(De(),B.addKeyword(H,x.endScope._wrap)):x.endScope&&x.endScope._multi?(De(),T(x.endScope,E)):ce.skip?N+=H:(ce.returnEnd||ce.excludeEnd||(N+=H),De(),ce.excludeEnd&&(N=H));do x.scope&&B.closeNode(),!x.skip&&!x.subLanguage&&(U+=x.relevance),x=x.parent;while(x!==oe.parent);return oe.starts&&ne(oe.starts,E),ce.returnEnd?0:H.length}function he(){const E=[];for(let H=x;H!==$;H=H.parent)H.scope&&E.unshift(H.scope);E.forEach(H=>B.openNode(H))}let le={};function b(E,H){const Z=H&&H[0];if(N+=E,Z==null)return De(),0;if(le.type==="begin"&&H.type==="end"&&le.index===H.index&&Z===""){if(N+=q.slice(H.index,H.index+1),!r){const oe=new Error(`0 width match regex (${M})`);throw oe.languageName=M,oe.badRule=le.rule,oe}return 1}if(le=H,H.type==="begin")return ve(H);if(H.type==="illegal"&&!X){const oe=new Error('Illegal lexeme "'+Z+'" for mode "'+(x.scope||"<unnamed>")+'"');throw oe.mode=x,oe}else if(H.type==="end"){const oe=ye(H);if(oe!==Zo)return oe}if(H.type==="illegal"&&Z==="")return 1;if(re>1e5&&re>H.index*3)throw new Error("potential infinite loop, way more iterations than matches");return N+=Z,Z.length}const $=Ie(M);if(!$)throw Xn(a.replace("{}",M)),new Error('Unknown language: "'+M+'"');const C=S1($);let A="",x=ie||C;const V={},B=new i.__emitter(i);he();let N="",U=0,O=0,re=0,ee=!1;try{for(x.matcher.considerAll();;){re++,ee?ee=!1:x.matcher.considerAll(),x.matcher.lastIndex=O;const E=x.matcher.exec(q);if(!E)break;const H=q.substring(O,E.index),Z=b(H,E);O=E.index+Z}return b(q.substr(O)),B.closeAllNodes(),B.finalize(),A=B.toHTML(),{language:M,value:A,relevance:U,illegal:!1,_emitter:B,_top:x}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:M,value:Xs(q),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:q.slice(O-100,O+100),mode:E.mode,resultSoFar:A},_emitter:B};if(r)return{language:M,value:Xs(q),illegal:!1,relevance:0,errorRaised:E,_emitter:B,_top:x};throw E}}function v(M){const q={value:Xs(M),illegal:!1,relevance:0,_top:o,_emitter:new i.__emitter(i)};return q._emitter.addText(M),q}function R(M,q){q=q||i.languages||Object.keys(n);const X=v(M),ie=q.filter(Ie).filter(Ge).map(De=>m(De,M,!1));ie.unshift(X);const ge=ie.sort((De,T)=>{if(De.relevance!==T.relevance)return T.relevance-De.relevance;if(De.language&&T.language){if(Ie(De.language).supersetOf===T.language)return 1;if(Ie(T.language).supersetOf===De.language)return-1}return 0}),[Ce,Ae]=ge,Be=Ce;return Be.secondBest=Ae,Be}function j(M,q,X){const ie=q&&t[q]||X;M.classList.add("hljs"),M.classList.add(`language-${ie}`)}function L(M){let q=null;const X=p(M);if(l(X))return;if(Xe("before:highlightElement",{el:M,language:X}),M.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(M)),i.throwUnescapedHTML))throw new E1("One of your code blocks includes unescaped HTML.",M.innerHTML);q=M;const ie=q.textContent,ge=X?f(ie,{language:X,ignoreIllegals:!0}):R(ie);M.innerHTML=ge.value,j(M,X,ge.language),M.result={language:ge.language,re:ge.relevance,relevance:ge.relevance},ge.secondBest&&(M.secondBest={language:ge.secondBest.language,relevance:ge.secondBest.relevance}),Xe("after:highlightElement",{el:M,result:ge,text:ie})}function Q(M){i=Yo(i,M)}const te=()=>{pe(),lt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ue(){pe(),lt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let fe=!1;function pe(){if(document.readyState==="loading"){fe=!0;return}document.querySelectorAll(i.cssSelector).forEach(L)}function Re(){fe&&pe()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Re,!1);function Le(M,q){let X=null;try{X=q(e)}catch(ie){if(Xn("Language definition for '{}' could not be registered.".replace("{}",M)),r)Xn(ie);else throw ie;X=o}X.name||(X.name=M),n[M]=X,X.rawDefinition=q.bind(null,e),X.aliases&&Ze(X.aliases,{languageName:M})}function Ke(M){delete n[M];for(const q of Object.keys(t))t[q]===M&&delete t[q]}function cn(){return Object.keys(n)}function Ie(M){return M=(M||"").toLowerCase(),n[M]||n[t[M]]}function Ze(M,{languageName:q}){typeof M=="string"&&(M=[M]),M.forEach(X=>{t[X.toLowerCase()]=q})}function Ge(M){const q=Ie(M);return q&&!q.disableAutodetect}function Qe(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=q=>{M["before:highlightBlock"](Object.assign({block:q.el},q))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=q=>{M["after:highlightBlock"](Object.assign({block:q.el},q))})}function dn(M){Qe(M),s.push(M)}function Xe(M,q){const X=M;s.forEach(function(ie){ie[X]&&ie[X](q)})}function on(M){return lt("10.7.0","highlightBlock will be removed entirely in v12.0"),lt("10.7.0","Please use highlightElement now."),L(M)}Object.assign(e,{highlight:f,highlightAuto:R,highlightAll:pe,highlightElement:L,highlightBlock:on,configure:Q,initHighlighting:te,initHighlightingOnLoad:ue,registerLanguage:Le,unregisterLanguage:Ke,listLanguages:cn,getLanguage:Ie,registerAliases:Ze,autoDetection:Ge,inherit:Yo,addPlugin:dn}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=C1,e.regex={concat:nt,lookahead:Gl,either:Fr,optional:U$,anyNumberOfTimes:V$};for(const M in is)typeof is[M]=="object"&&P$(is[M]);return Object.assign(e,is),e};var Yt=T1({}),I1=Yt;Yt.HighlightJS=Yt;Yt.default=Yt;var Dt=I1;const Cs="[A-Za-z$_][0-9A-Za-z$_]*",su=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ru=["true","false","null","undefined","NaN","Infinity"],ou=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],au=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],iu=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],lu=["arguments","this","super","console","window","document","localStorage","module","global"],uu=[].concat(iu,ou,au);function N1(e){const n=e.regex,t=(q,{after:X})=>{const ie="</"+q[0].slice(1);return q.input.indexOf(ie,X)!==-1},s=Cs,r={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(q,X)=>{const ie=q[0].length+q.index,ge=q.input[ie];if(ge==="<"||ge===","){X.ignoreMatch();return}ge===">"&&(t(q,{after:ie})||X.ignoreMatch());let Ce;if((Ce=q.input.substr(ie).match(/^\s+extends\s+/))&&Ce.index===0){X.ignoreMatch();return}}},i={$pattern:Cs,keyword:su,literal:ru,built_in:uu,"variable.language":lu},l="[0-9](_?[0-9])*",p=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${f})((${p})|\\.)?|(${p}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},v={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},R={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"xml"}},j={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,v],subLanguage:"css"}},L={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,v]},Q=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),te={className:"comment",variants:[Q,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},ue=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,j,L,m];v.contains=ue.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(ue)});const fe=[].concat(te,v.contains),pe=fe.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(fe)}]),Re={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:pe},Le={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,n.concat(s,"(",n.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},Ke={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ou,...au]}},cn={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ie={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Re],illegal:/%/},Ze={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ge(q){return n.concat("(?!",q.join("|"),")")}const Qe={match:n.concat(/\b/,Ge([...iu,"super"]),s,n.lookahead(/\(/)),className:"title.function",relevance:0},dn={begin:n.concat(/\./,n.lookahead(n.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Xe={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Re]},on="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(on)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Re]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:pe,CLASS_REFERENCE:Ke},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),cn,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,j,L,te,m,Ke,{className:"attr",begin:s+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[te,e.REGEXP_MODE,{className:"function",begin:on,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:pe}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},Ie,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Re,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},dn,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Re]},Qe,Ze,Le,Xe,{match:/\$[(.]/}]}}function A1(e){const n=N1(e),t=Cs,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},a={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[n.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],l={$pattern:Cs,keyword:su.concat(i),literal:ru,built_in:uu.concat(s),"variable.language":lu},p={className:"meta",begin:"@"+t},f=(v,R,j)=>{const L=v.contains.findIndex(Q=>Q.label===R);if(L===-1)throw new Error("can not find mode to replace");v.contains.splice(L,1,j)};Object.assign(n.keywords,l),n.exports.PARAMS_CONTAINS.push(p),n.contains=n.contains.concat([p,r,a]),f(n,"shebang",e.SHEBANG()),f(n,"use_strict",o);const m=n.contains.find(v=>v.label==="func.def");return m.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}function M1(e){const n=e.regex,t=n.concat(/[A-Z_]/,n.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s=/[A-Za-z0-9._:-]+/,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(a,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),p={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[a,l,i,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[a,o,l,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[p],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[p],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:p}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var Qo=y({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var n=$n(e.language);Ve(function(){return e.language},function(r){n.value=r});var t=F(function(){return e.autodetect||!n.value}),s=F(function(){return!t.value&&!Dt.getLanguage(n.value)});return{className:F(function(){return s.value?"":"hljs "+n.value}),highlightedCode:F(function(){var r;if(s.value)return console.warn('The language "'+n.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(t.value){var a=Dt.highlightAuto(e.code);return n.value=(r=a.language)!==null&&r!==void 0?r:"",a.value}return(a=Dt.highlight(e.code,{language:n.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return _t("pre",{},[_t("code",{class:this.className,innerHTML:this.highlightedCode})])}}),O1={install:function(e){e.component("highlightjs",Qo)},component:Qo};Dt.registerLanguage("typescript",A1);Dt.registerLanguage("xml",M1);NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach);Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value(e){return this.filter(n=>n===e).length>0}});Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(e){var n=this;do{if(Element.prototype.matches.call(n,e))return n;n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1);return null});function tt(e,n,t){return F(()=>{const s=Object.assign({},t.attrs);for(const r of e)n[r]&&(s[r]=n[r]);return s})}const H1=y({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e,n){return{attributes:tt(["disabled"],e,n)}}});function P1(e,n,t,s,r,a){const o=d("router-link");return c(),S(o,G({to:e.href,onClick:n[0]||(n[0]=i=>e.$emit("click"))},e.attributes),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["to"])}var L1=g(H1,[["render",P1]]);const B1=y({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e,n){return{attributes:tt(["disabled"],e,n)}}}),D1=["href"];function q1(e,n,t,s,r,a){return c(),k("a",G({href:e.href,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.attributes),[P(e.$slots,"default")],16,D1)}var V1=g(B1,[["render",q1]]);const U1=/^((http|https|ftp):\/\/)/;function cu(e,n){return Boolean(e)&&!U1.test(n)}const F1=y({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e){const n=Se("router");return{linkType:F(()=>cu(n,e.href)?L1:V1)}}});function z1(e,n,t,s,r,a){return c(),S(rn(e.linkType),G({disabled:e.disabled,href:e.href,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["disabled","href"])}var Ue=g(F1,[["render",z1]]);const j1={},W1={class:"nhsuk-icon nhsuk-icon__arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},K1=_("path",{d:"M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"},null,-1),G1=[K1];function Y1(e,n){return c(),k("svg",W1,G1)}var Z1=g(j1,[["render",Y1]]);const Q1={},X1={class:"nhsuk-icon nhsuk-icon__arrow-right-circle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},J1=_("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),ek=_("path",{d:"M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"},null,-1),nk=[J1,ek];function tk(e,n){return c(),k("svg",X1,nk)}var sk=g(Q1,[["render",tk]]);const rk={},ok={class:"nhsuk-icon nhsuk-icon__arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},ak=_("path",{d:"M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"},null,-1),ik=[ak];function lk(e,n){return c(),k("svg",ok,ik)}var uk=g(rk,[["render",lk]]);const ck={},dk={class:"nhsuk-icon nhsuk-icon__chevron-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},hk=_("path",{d:"M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"},null,-1),pk=[hk];function mk(e,n){return c(),k("svg",dk,pk)}var fk=g(ck,[["render",mk]]);const _k={},gk={class:"nhsuk-icon nhsuk-icon__chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},bk=_("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"},null,-1),vk=[bk];function yk(e,n){return c(),k("svg",gk,vk)}var $k=g(_k,[["render",yk]]);const kk={},wk={class:"nhsuk-icon nhsuk-icon__close",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},Sk=_("path",{d:"M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"},null,-1),xk=[Sk];function Ck(e,n){return c(),k("svg",wk,xk)}var Ek=g(kk,[["render",Ck]]);const Rk={},Tk={class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Ik=_("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"},null,-1),Nk=_("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"},null,-1),Ak=[Ik,Nk];function Mk(e,n){return c(),k("svg",Tk,Ak)}var Ok=g(Rk,[["render",Mk]]);const Hk={},Pk={class:"nhsuk-icon nhsuk-icon__emdash",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"1","aria-hidden":"true"},Lk=_("path",{d:"M0 0h16v1H0z"},null,-1),Bk=[Lk];function Dk(e,n){return c(),k("svg",Pk,Bk)}var qk=g(Hk,[["render",Dk]]);const Vk={},Uk={class:"nhsuk-icon nhsuk-icon__emdash",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"1","aria-hidden":"true"},Fk=_("path",{d:"M0 0h19v1H0z"},null,-1),zk=[Fk];function jk(e,n){return c(),k("svg",Uk,zk)}var Wk=g(Vk,[["render",jk]]);const Kk={},Gk={class:"nhsuk-icon nhsuk-icon__minus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32","aria-hidden":"true"},Yk=_("circle",{cx:"12",cy:"12",r:"10"},null,-1),Zk=_("path",{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M8 12h8"},null,-1),Qk=[Yk,Zk];function Xk(e,n){return c(),k("svg",Gk,Qk)}var Jk=g(Kk,[["render",Xk]]);const ew={},nw={class:"nhsuk-icon nhsuk-icon__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32","aria-hidden":"true"},tw=_("circle",{cx:"12",cy:"12",r:"10"},null,-1),sw=_("path",{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M12 8v8M8 12h8"},null,-1),rw=[tw,sw];function ow(e,n){return c(),k("svg",nw,rw)}var aw=g(ew,[["render",ow]]);const iw={},lw={class:"nhsuk-icon nhsuk-icon__search",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},uw=_("path",{d:"M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"},null,-1),cw=[uw];function dw(e,n){return c(),k("svg",lw,cw)}var hw=g(iw,[["render",dw]]);const pw={},mw={class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none"},fw=_("path",{"stroke-width":"4","stroke-linecap":"round",stroke:"#007f3b",d:"M18.4 7.8l-8.5 8.4L5.6 12"},null,-1),_w=[fw];function gw(e,n){return c(),k("svg",mw,_w)}var bw=g(pw,[["render",gw]]);const vw={ArrowLeft:Z1,ArrowRightCircle:sk,ArrowRight:uk,ChevronLeft:fk,ChevronRight:$k,Close:Ek,Cross:Ok,EmdashSmall:qk,Emdash:Wk,Minus:Jk,Plus:aw,Search:hw,Tick:bw},yw=y({name:"nhs-icon",inheritAttrs:!1,emits:[],props:{icon:{type:String,required:!0}},components:vw});function $w(e,n,t,s,r,a){return c(),S(rn(e.icon),Es(Qt(e.$attrs)),null,16)}var wn=g(yw,[["render",$w]]);const kw=y({name:"nhs-action-link",emits:["click"],inheritAttrs:!1,props:{href:{type:String,required:!0}},components:{NhsLinkSwitcher:Ue,NhsIcon:wn}}),ww={class:"nhsuk-action-link__text"};function Sw(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),k("div",G({class:"nhsuk-action-link"},e.$attrs),[u(i,{class:"nhsuk-action-link__link",onClick:n[0]||(n[0]=l=>e.$emit("click")),href:e.href},{default:h(()=>[u(o,{icon:"arrow-right-circle"}),_("span",ww,[P(e.$slots,"default")])]),_:3},8,["href"])],16)}var xw=g(kw,[["render",Sw]]);const Cw=y({name:"nhs-back-link",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Ue,NhsIcon:wn},props:{href:{type:String,required:!0}}});function Ew(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),k("div",G({class:"nhsuk-back-link"},e.$attrs),[u(i,{class:"nhsuk-back-link__link",onClick:n[0]||(n[0]=l=>e.$emit("click")),href:e.href},{default:h(()=>[u(o,{icon:"chevron-left"}),P(e.$slots,"default")]),_:3},8,["href"])],16)}var Rw=g(Cw,[["render",Ew]]);const Tw=y({name:"nhs-breadcrumb",inheritAttrs:!1,emits:[],props:{ariaLabel:{type:String,default:()=>"Breadcrumb"}}}),Iw=["aria-label"],Nw={class:"nhsuk-width-container"},Aw={class:"nhsuk-breadcrumb__list"};function Mw(e,n,t,s,r,a){return c(),k("nav",G({class:"nhsuk-breadcrumb"},e.$attrs,{"aria-label":e.ariaLabel}),[_("div",Nw,[_("ol",Aw,[P(e.$slots,"default")]),P(e.$slots,"backlink")])],16,Iw)}var Ow=g(Tw,[["render",Mw]]);const Hw=y({name:"nhs-breadcrumb-item",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Ue},props:{href:{type:String}}}),Pw={class:"nhsuk-breadcrumb__item"};function Lw(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("li",Pw,[e.href?(c(),S(o,G({key:0,class:"nhsuk-breadcrumb__link",href:e.href},e.$attrs,{onClick:n[0]||(n[0]=i=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])):W("",!0),e.href?W("",!0):(c(),k("span",G({key:1,class:"nhsuk-breadcrumb__link"},e.$attrs),[P(e.$slots,"default")],16))])}var Bw=g(Hw,[["render",Lw]]);const Dw=y({name:"nhs-breadcrumb-backlink",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Ue},props:{href:{type:String,required:!0}}}),qw={class:"nhsuk-breadcrumb__back"};function Vw(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("p",qw,[u(o,G({class:"nhsuk-breadcrumb__backlink",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var Uw=g(Dw,[["render",Vw]]);const Fw=y({inheritAttrs:!1,emits:["click"],props:{disabled:{type:Boolean,default:()=>!1},href:{type:String}},setup(e,n){return{attributes:tt(["disabled"],e,n)}}}),zw=["aria-disabled"];function jw(e,n,t,s,r,a){return c(),k("button",G({"aria-disabled":e.disabled,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.attributes),[P(e.$slots,"default")],16,zw)}var Ww=g(Fw,[["render",jw]]);const Kw=y({inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Ue},props:{href:{type:String,default:()=>""},disabled:{type:Boolean,default:()=>!1}}});function Gw(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),S(o,G({href:e.href,disabled:e.disabled,role:"button",draggable:"false"},e.$attrs,{onClick:n[0]||(n[0]=i=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href","disabled"])}var du=g(Kw,[["render",Gw]]);const Xo={primary:"nhsuk-button",secondary:"nhsuk-button nhsuk-button--secondary",reverse:"nhsuk-button nhsuk-button--reverse"},Jo={button:Ww,a:du},Yw=y({name:"nhs-button",inheritAttrs:!1,emits:["click"],props:{color:{type:String,default:()=>"primary",validator:e=>e in Xo},disabled:{type:Boolean,default:()=>!1},href:{type:String},element:{type:String,default:()=>"button",validator:e=>e in Jo}},setup(e){const n=F(()=>Xo[e.color]),t=F(()=>e.href?du:Jo[e.element]);return{classes:n,buttonElement:t}}});function Zw(e,n,t,s,r,a){return c(),S(rn(e.buttonElement),G({class:e.classes,href:e.href,disabled:e.disabled},e.$attrs,{onClick:n[0]||(n[0]=o=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["class","href","disabled"])}var Qw=g(Yw,[["render",Zw]]);const Xw=new Set([1,2,3,4,5]),st=y({functional:!0,props:{headingLevel:{type:Number,required:!0,validator:e=>Xw.has(e)}},setup(e,{slots:n}){return()=>n.default?_t(`h${e.headingLevel}`,n.default()):_t(`h${e.headingLevel}`)}}),Jw=y({name:"nhs-card",inheritAttrs:!1,emit:[],props:{clickable:{type:Boolean,default:()=>!1},feature:{type:Boolean,default:()=>!1},heading:{type:String,default:()=>""},headingLevel:{type:Number,default:()=>2},imgUrl:{type:String,default:()=>""},imgAlt:{type:String,default:()=>""},href:{type:String,default:()=>""},description:{type:String,default:()=>""},headingClasses:{type:String,default:()=>""}},components:{NhsHeadingSwitcher:st,NhsLinkSwitcher:Ue},setup(e){const n=Se("router"),t=F(()=>{const i=["nhsuk-card"];return e.clickable&&i.push("nhsuk-card--clickable"),e.feature&&i.push("nhsuk-card--feature"),i.join(" ")}),s=F(()=>{const i=["nhsuk-card__content"];return e.feature&&i.push("nhsuk-card__content--feature"),i.join(" ")}),r=F(()=>{const i=["nhsuk-card__heading"];return e.feature&&i.push("nhsuk-card__heading--feature"),e.headingClasses&&i.push(e.headingClasses),i.join(" ")}),a=F(()=>Boolean(e.href)&&!e.feature);function o(){e.clickable&&a&&(cu(n,e.href)?n.push(e.href):window.location.href=e.href)}return{classes:t,contentClasses:s,headingClassesComputed:r,isHeadingLink:a,onClickCard:o}}}),e0=["src","alt"],n0={key:1},t0={class:"nhsuk-card__description"};function s0(e,n,t,s,r,a){const o=d("nhs-link-switcher"),i=d("nhs-heading-switcher");return c(),k("div",G({onClick:n[0]||(n[0]=l=>e.onClickCard()),class:e.classes},e.$attrs),[e.imgUrl?(c(),k("img",{key:0,class:"nhsuk-card__img",src:e.imgUrl,alt:e.imgAlt},null,8,e0)):W("",!0),_("div",{class:we(e.contentClasses)},[P(e.$slots,"heading",{},()=>[u(i,{"heading-level":e.headingLevel,class:we(e.headingClassesComputed)},{default:h(()=>[e.isHeadingLink?(c(),S(o,{key:0,class:"nhsuk-card__link",href:e.href},{default:h(()=>[w(I(e.heading),1)]),_:1},8,["href"])):(c(),k("div",n0,I(e.heading),1))]),_:1},8,["heading-level","class"])]),P(e.$slots,"description",{},()=>[_("p",t0,I(e.description),1)])],2)],16)}var r0=g(Jw,[["render",s0]]);const o0=y({functional:!0,props:{node:{required:!0}},setup(e){return()=>e.node}}),a0=new Set(["half","third","quarter"]),i0=y({name:"nhs-card-group",inheritAttrs:!1,emit:[],props:{type:{type:String,default:()=>"half",validator:e=>a0.has(e)}},components:{NhsVNode:o0}});function l0(e,n,t,s,r,a){const o=d("nhs-v-node");return c(),k("ul",G({class:"nhsuk-grid-row nhsuk-card-group"},e.$attrs),[e.$slots.default?(c(!0),k(D,{key:0},Oe(e.$slots.default(),(i,l)=>(c(),k("li",{class:we(`nhsuk-grid-column-one-${e.type} nhsuk-card-group__item`),key:l},[u(o,{node:i},null,8,["node"])],2))),128)):W("",!0)],16)}var u0=g(i0,[["render",l0]]);const ea={"non-urgent":"Non-urgent advice: ",urgent:"Urgent advice: ",emergency:"Immediate action required: "},c0=y({name:"nhs-care-card",inheritAttrs:!1,emits:[],props:{heading:{type:String,required:!0},type:{type:String,default:()=>"non-urgent",validator:e=>e in ea},headingLevel:{type:Number,default:()=>3},hiddenText:{type:String,default:()=>""}},components:{NhsHeadingSwitcher:st},setup(e){return{accessibilityText:F(()=>e.hiddenText?e.hiddenText:ea[e.type])}}}),d0={class:"nhsuk-card--care__heading-container"},h0={role:"text"},p0={class:"nhsuk-u-visually-hidden"},m0=_("span",{class:"nhsuk-card--care__arrow","aria-hidden":"true"},null,-1),f0={class:"nhsuk-card__content"};function _0(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),k("div",G({class:`nhsuk-card nhsuk-card--care nhsuk-card--care--${e.type}`},e.$attrs),[_("div",d0,[u(o,{"heading-level":e.headingLevel,class:"nhsuk-card--care__heading"},{default:h(()=>[_("span",h0,[_("span",p0,I(e.accessibilityText),1),w(" "+I(e.heading),1)])]),_:1},8,["heading-level"]),m0]),_("div",f0,[P(e.$slots,"default")])],16)}var g0=g(c0,[["render",_0]]);const b0=y({name:"nhs-contents",inheritAttrs:!1,emit:[],props:{ariaLabel:{type:String,default:()=>"Pages in this guide"},hiddenText:{type:String,default:()=>"Contents"}}}),v0=["aria-label"],y0={class:"nhsuk-u-visually-hidden"},$0={class:"nhsuk-contents-list__list"};function k0(e,n,t,s,r,a){return c(),k("nav",G({class:"nhsuk-contents-list"},e.$attrs,{role:"navigation","aria-label":e.ariaLabel}),[_("h2",y0,I(e.hiddenText),1),_("ol",$0,[P(e.$slots,"default")])],16,v0)}var w0=g(b0,[["render",k0]]);const S0=y({name:"nhs-contents-item",inheritAttrs:!1,components:{NhsLinkSwitcher:Ue},emits:["click"],props:{href:{type:String},ariaCurrent:{type:String,default:()=>"page"}},setup(e){return{attributes:F(()=>{const t={};return e.href||(t["aria-current"]=e.ariaCurrent),t})}}});function x0(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("li",G({class:"nhsuk-contents-list__item"},e.attributes),[e.href?W("",!0):(c(),k("span",G({key:0,class:"nhsuk-contents-list__current"},e.$attrs),[P(e.$slots,"default")],16)),e.href?(c(),S(o,G({key:1,class:"nhsuk-contents-list__link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])):W("",!0)],16)}var C0=g(S0,[["render",x0]]);const E0=y({name:"nhs-details",inheritAttrs:!1,emits:[],props:{text:{type:String,required:!0}}}),R0={class:"nhsuk-details__summary"},T0={class:"nhsuk-details__summary-text"},I0={class:"nhsuk-details__text"};function N0(e,n,t,s,r,a){return c(),k("details",G({class:"nhsuk-details"},e.$attrs),[_("summary",R0,[_("span",T0,I(e.text),1)]),_("div",I0,[P(e.$slots,"default")])],16)}var A0=g(E0,[["render",N0]]);const M0=["tick","cross"],O0=y({name:"nhs-dodont",inheritAttrs:!1,emits:[],components:{NhsIcon:wn,NhsHeadingSwitcher:st},props:{title:{type:String,required:!0},type:{type:String,default:()=>"tick",validator:e=>M0.includes(e)},items:{type:Array,required:!0},headingLevel:{type:Number,default:()=>3}}});function H0(e,n,t,s,r,a){const o=d("nhs-heading-switcher"),i=d("nhs-icon");return c(),k("div",G({class:"nhsuk-do-dont-list"},e.$attrs),[u(o,{"heading-level":e.headingLevel,class:"nhsuk-do-dont-list__label"},{default:h(()=>[w(I(e.title),1)]),_:1},8,["heading-level"]),_("ul",{class:we(`nhsuk-list nhsuk-list--${e.type}`)},[(c(!0),k(D,null,Oe(e.items,(l,p)=>(c(),k("li",{key:p},[u(i,{icon:e.type},null,8,["icon"]),P(e.$slots,"item",{item:l},()=>[w(I(l),1)])]))),128))],2)],16)}var P0=g(O0,[["render",H0]]);const L0=y({name:"nhs-error-summary",inheritAttrs:!1,emits:[],props:{title:{type:String,required:!0}},setup(){const e=$n(null);return Pe(()=>{Ir(()=>{e.value.focus()})}),{errorSummary:e}}}),B0={class:"nhsuk-error-summary__title",id:"error-summary-title"},D0={class:"nhsuk-error-summary__body"};function q0(e,n,t,s,r,a){return c(),k("div",G({ref:"errorSummary",class:"nhsuk-error-summary"},e.$attrs,{"aria-labelledby":"error-summary-title",role:"alert",tabindex:"-1"}),[_("h2",B0,[P(e.$slots,"title",{title:e.title},()=>[w(I(e.title),1)])]),_("div",D0,[P(e.$slots,"default")])],16)}var V0=g(L0,[["render",q0]]);const U0=y({name:"nhs-expander",emits:[],inheritAttrs:!1,props:{text:{type:String,required:!0}}}),F0={class:"nhsuk-details__summary"},z0={class:"nhsuk-details__summary-text"},j0={class:"nhsuk-details__text"};function W0(e,n,t,s,r,a){return c(),k("details",G({class:"nhsuk-details nhsuk-expander"},e.$attrs),[_("summary",F0,[_("span",z0,I(e.text),1)]),_("div",j0,[P(e.$slots,"default")])],16)}var K0=g(U0,[["render",W0]]);const G0=y({name:"nhs-expander-group",emits:[],inheritAttrs:!1});function Y0(e,n,t,s,r,a){return c(),k("div",G({class:"nhsuk-expander-group"},e.$attrs),[P(e.$slots,"default")],16)}var Z0=g(G0,[["render",Y0]]);const Q0=["xl","l","m"],X0=y({name:"nhs-fieldset",inheritAttrs:!1,emits:[],props:{legend:{type:String},pageHeading:{type:Boolean,default:()=>!1},size:{type:String,validator:e=>e?Q0.includes(e):!0}},setup(e){return{classes:F(()=>{let t=["nhsuk-fieldset__legend"];return e.size&&t.push(`nhsuk-fieldset__legend--${e.size}`),t.join(" ")})}}}),J0={class:"nhsuk-fieldset__heading"};function eS(e,n,t,s,r,a){return c(),k("fieldset",G({class:"nhsuk-fieldset"},e.$attrs),[e.legend&&e.pageHeading?(c(),k("legend",{key:0,class:we(e.classes)},[_("h1",J0,[P(e.$slots,"legend",{legend:e.legend},()=>[w(I(e.legend),1)])])],2)):W("",!0),e.legend&&!e.pageHeading?(c(),k("legend",{key:1,class:we(e.classes)},[P(e.$slots,"legend",{legend:e.legend},()=>[w(I(e.legend),1)])],2)):W("",!0),P(e.$slots,"default")],16)}var Us=g(X0,[["render",eS]]);const nS=y({name:"nhs-footer",inheritAttrs:!1,emits:[],props:{hiddenText:{type:String,default:()=>"Support links"},copyright:{type:String,default:()=>"Crown copyright"}}}),tS={role:"contentinfo"},sS={class:"nhsuk-width-container"},rS={key:0,class:"nhsuk-u-visually-hidden"},oS={key:1,class:"nhsuk-footer__list"},aS={class:"nhsuk-footer__copyright"};function iS(e,n,t,s,r,a){return c(),k("footer",tS,[_("div",G({class:"nhsuk-footer",id:"nhsuk-footer"},e.$attrs),[_("div",sS,[e.$slots.default?(c(),k("h2",rS,I(e.hiddenText),1)):W("",!0),e.$slots.default?(c(),k("ul",oS,[P(e.$slots,"default")])):W("",!0),_("p",aS,"\xA9 "+I(e.copyright),1)])],16)])}var lS=g(nS,[["render",iS]]);const uS=y({name:"nhs-footer-item",emits:["click"],inheritAttrs:!1,components:{NhsLinkSwitcher:Ue},props:{href:{type:String,required:!0}}}),cS={class:"nhsuk-footer__list-item"};function dS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("li",cS,[u(o,G({class:"nhsuk-footer__list-item-link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var hS=g(uS,[["render",dS]]);const na={fluid:"nhsuk-width-container-fluid",normal:"nhsuk-width-container"},pS=y({name:"nhs-main",inheritAttrs:!1,emits:[],props:{type:{type:String,default:()=>"normal",validator:e=>e in na}},setup(e){return{classes:F(()=>na[e.type])}}}),mS={class:"nhsuk-main-wrapper",id:"maincontent"};function fS(e,n,t,s,r,a){return c(),k("div",G({class:e.classes},e.$attrs),[_("main",mS,[P(e.$slots,"default")])],16)}var _S=g(pS,[["render",fS]]);const ta={100:"full",75:"three-quarters",66:"two-thirds",50:"one-half",33:"one-third",25:"one-quarter"},gS=y({name:"nhs-col",inheritAttrs:!1,emits:[],props:{span:{type:Number,default:()=>100,validator:e=>e in ta}},setup(e){return{classes:F(()=>`nhsuk-grid-column-${ta[e.span]}`)}}});function bS(e,n,t,s,r,a){return c(),k("div",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var vS=g(gS,[["render",bS]]);const yS=y({name:"nhs-row",inheritAttrs:!1,emits:[]});function $S(e,n,t,s,r,a){return c(),k("div",G({class:"nhsuk-grid-row"},e.$attrs),[P(e.$slots,"default")],16)}var kS=g(yS,[["render",$S]]);const wS=y({components:{NhsLinkSwitcher:Ue},inheritAttrs:!1,emits:[],props:{ariaLabel:{type:String,required:!0},homeHref:{type:String,required:!0},service:{type:Object,required:!0},showTransactional:{type:Boolean,required:!0}},setup(e){function n(){return Object.keys(e.service).length>0&&!e.showTransactional}return{classes:F(()=>{const s=["nhsuk-header__link"];return n()&&s.push("nhsuk-header__link--service"),s.join(" ")}),showService:n}}}),SS=_("svg",{class:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",viewBox:"0 0 40 16"},[_("path",{class:"nhsuk-logo__background",d:"M0 0h40v16H0z"}),_("path",{class:"nhsuk-logo__text",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})],-1),xS={key:0,class:"nhsuk-header__service-name"};function CS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),S(o,G({class:e.classes,href:e.homeHref,"aria-label":e.ariaLabel},e.$attrs),{default:h(()=>[SS,e.showService()?(c(),k("span",xS,I(e.service.name),1)):W("",!0)]),_:1},16,["class","href","aria-label"])}var ES=g(wS,[["render",CS]]);const RS=y({components:{NhsLinkSwitcher:Ue},inheritAttrs:!1,emits:[],props:{homeHref:{type:String,required:!0},organisation:{type:Object,required:!0}},setup(e){return{ariaLabel:F(()=>{const t=[],s=e.organisation.name,r=e.organisation.split,a=e.organisation.descriptor;return s&&t.push(s),r&&t.push(r),a&&t.push(a),t.push("homepage"),t.join(" ")})}}}),TS=["src"],IS={key:1,class:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",viewBox:"0 0 40 16"},NS=_("path",{class:"nhsuk-logo__background",d:"M0 0h40v16H0z"},null,-1),AS=_("path",{class:"nhsuk-logo__text",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"},null,-1),MS=_("image",{src:"https://assets.nhs.uk/images/nhs-logo.png","xlink:href":""},null,-1),OS=[NS,AS,MS],HS={key:2,class:"nhsuk-organisation-name"},PS={key:0,class:"nhsuk-organisation-name-split"},LS={key:3,class:"nhsuk-organisation-descriptor"};function BS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),S(o,G({class:"nhsuk-header__link",href:e.homeHref,"aria-label":e.ariaLabel},e.$attrs),{default:h(()=>[e.organisation.logoURL?(c(),k("img",{key:0,class:"nhsuk-org-logo",src:e.organisation.logoURL,alt:""},null,8,TS)):W("",!0),e.organisation.logoURL?W("",!0):(c(),k("svg",IS,OS)),e.organisation.logoURL?W("",!0):(c(),k("span",HS,[w(I(e.organisation.name)+" ",1),e.organisation.split?(c(),k("span",PS,I(e.organisation.split),1)):W("",!0)])),!e.organisation.logoURL&&e.organisation.descriptor?(c(),k("span",LS,I(e.organisation.descriptor),1)):W("",!0)]),_:1},16,["href","aria-label"])}var DS=g(RS,[["render",BS]]);const qS=y({inheritAttrs:!1,emits:[],components:{HeaderLogoNormal:ES,HeaderLogoOrg:DS},props:{ariaLabel:{type:String,required:!0},homeHref:{type:String,required:!0},service:{type:Object,required:!0},showTransactional:{type:Boolean,required:!0},organisation:{type:Object,required:!0},showNav:{type:Boolean,required:!0},showSearch:{type:Boolean,required:!0}},setup(e){const n=F(()=>{const s=["nhsuk-header__logo"];return!e.showSearch&&!e.showNav&&s.push("nhsuk-header__logo--only"),s.join(" ")}),t=F(()=>Object.keys(e.organisation).length>0);return{classes:n,isOrgLogo:t}}});function VS(e,n,t,s,r,a){const o=d("header-logo-org"),i=d("header-logo-normal");return c(),k("div",G({class:e.classes},e.$attrs),[e.isOrgLogo?(c(),S(o,{key:0,organisation:e.organisation,"home-href":e.homeHref},null,8,["organisation","home-href"])):W("",!0),e.isOrgLogo?W("",!0):(c(),S(i,{key:1,"aria-label":e.ariaLabel,"home-href":e.homeHref,service:e.service,"show-transactional":e.showTransactional},null,8,["aria-label","home-href","service","show-transactional"]))],16)}var US=g(qS,[["render",VS]]);const Zt={toggleNav:"toggle-nav",toggleSearch:"toggle-search"},FS=y({inheritAttrs:!1,emits:[],components:{NhsIcon:wn,NhsLinkSwitcher:Ue},props:{homeHref:{type:String,required:!0},homeText:{type:String,required:!0},navOpen:{type:Boolean,required:!0}},setup(e){const n=F(()=>{const s=["nhsuk-header__navigation"];return e.navOpen&&s.push("js-show"),s.join(" ")}),t=Se(Zt.toggleNav);return{classes:n,toggleNav:t}}}),zS={class:"nhsuk-width-container"},jS={class:"nhsuk-header__navigation-title"},WS=_("span",{id:"label-navigation"},"Menu",-1),KS=_("span",{class:"nhsuk-u-visually-hidden"},"Close menu",-1),GS={class:"nhsuk-header__navigation-list"},YS={class:"nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile"};function ZS(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),k("nav",G({class:e.classes,id:"header-navigation",role:"navigation","aria-label":"Primary navigation","aria-labelledby":"label-navigation"},e.$attrs),[_("div",zS,[_("p",jS,[WS,_("button",{class:"nhsuk-header__navigation-close",id:"close-menu",onClick:n[0]||(n[0]=Mn(l=>e.toggleNav(),["prevent"]))},[u(o,{icon:"close"}),KS])]),_("ul",GS,[_("li",YS,[u(i,{class:"nhsuk-header__navigation-link",href:e.homeHref},{default:h(()=>[w(I(e.homeText)+" ",1),u(o,{icon:"chevron-right"})]),_:1},8,["href"])]),P(e.$slots,"default")])])],16)}var QS=g(FS,[["render",ZS]]);const XS=y({inheritAttrs:!1,emits:["submit-search","update:search-text"],props:{searchAction:{type:String,required:!0},searchInputName:{type:String,required:!0},searchMenuOpen:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},searchText:{type:String,required:!0}},components:{NhsIcon:wn},setup(e,n){const t=Y({searchOpen:!1,currentResultCount:-1,ariaLabelledBy:"",searchTextInternal:e.searchText});Ve(()=>t.searchTextInternal,L=>{t.searchOpen=!0,t.currentResultCount=-1,n.emit("update:search-text",L)});const s=F(()=>{const L=["nhsuk-header__search-toggle"];return e.searchMenuOpen&&L.push("is-active"),L.join(" ")}),r=F(()=>{const L=["nhsuk-header__search-wrap"];return e.searchMenuOpen&&L.push("js-show"),L.join(" ")}),a=F(()=>{const L=["autocomplete__menu"];return e.searchResults.length>0&&t.searchOpen?L.push("autocomplete__menu--visible"):L.push("autocomplete__menu--hidden"),L.join(" ")}),o=F(()=>t.currentResultCount>-1?l(t.currentResultCount):"");function i(L){const Q=["autocomplete__option"];return t.currentResultCount===L&&Q.push("autocomplete__option--focused"),Q.join(" ")}function l(L){return`search-field__option--${L}`}function p(){t.currentResultCount<e.searchResults.length-1&&(t.currentResultCount=t.currentResultCount+1)}function f(){t.currentResultCount>=0&&(t.currentResultCount=t.currentResultCount-1)}function m(){t.currentResultCount=-1}function v(L){L.target.id!=="search-field"&&L.target.id!=="search-results"&&!L.target.id.includes("search-field__option--")&&!L.target.id.includes("search-field-icon__option--")&&(t.searchOpen=!1,t.currentResultCount=-1)}const R=Se(Zt.toggleSearch);function j(L=void 0){L||L===0?n.emit("submit-search",e.searchResults[L]):t.currentResultCount>-1?n.emit("submit-search",e.searchResults[t.currentResultCount]):n.emit("submit-search",t.searchTextInternal),t.searchOpen=!1,t.currentResultCount=-1}return Pe(()=>{document.addEventListener("click",v)}),wt(()=>{document.removeEventListener("click",v)}),xe(K({submitSearch:j,toggleSearchButtonClasses:s,searchWrapClasses:r},J(t)),{toggleSearch:R,searchMenuClasses:a,onArrowDown:p,onArrowUp:f,onMouseOver:m,searchResultClasses:i,searchResultId:l,activeDescendant:o})}}),Fs=e=>(Pa("data-v-10004d3a"),e=e(),La(),e),JS=["aria-expanded"],ex=Fs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Search",-1)),nx=["action"],tx=Fs(()=>_("label",{class:"nhsuk-u-visually-hidden",for:"search-field"},"Search the NHS website",-1)),sx=["name","aria-activedescendant","aria-labelledby"],rx=["id","onClick"],ox=Fs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Search",-1)),ax=Fs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Close search",-1));function ix(e,n,t,s,r,a){const o=d("nhs-icon");return c(),k("div",G({class:"nhsuk-header__search"},e.$attrs),[_("button",{class:we(e.toggleSearchButtonClasses),id:"toggle-search","aria-controls":"search","aria-label":"Open search","aria-expanded":e.searchMenuOpen,onClick:n[0]||(n[0]=i=>e.toggleSearch())},[u(o,{icon:"search"}),ex],10,JS),_("div",{class:we(e.searchWrapClasses),id:"wrap-search"},[_("form",{class:"nhsuk-header__search-form",id:"search",action:e.searchAction,method:"get",role:"search"},[tx,gn(_("input",{class:"nhsuk-search__input",id:"search-field",name:e.searchInputName,type:"search",placeholder:"Search",autocomplete:"off","aria-activedescendant":e.activeDescendant,"aria-labelledby":e.ariaLabelledBy,role:"searchbox","aria-autocomplete":"list","aria-controls":"search-results",onKeydown:[n[1]||(n[1]=Gs(Mn(i=>e.onArrowDown(),["prevent"]),["down"])),n[2]||(n[2]=Gs(Mn(i=>e.onArrowUp(),["prevent"]),["up"])),n[3]||(n[3]=Gs(Mn(i=>e.submitSearch(),["prevent"]),["enter"]))],"onUpdate:modelValue":n[4]||(n[4]=i=>e.searchTextInternal=i),onFocus:n[5]||(n[5]=i=>e.searchOpen=!0)},null,40,sx),[[ks,e.searchTextInternal]]),_("ul",{class:we(e.searchMenuClasses),id:"search-results",role:"listbox"},[(c(!0),k(D,null,Oe(e.searchResults,(i,l)=>(c(),k("li",{class:we(e.searchResultClasses(l)),id:e.searchResultId(l),role:"option",tabindex:"-1","aria-posinset":"1","aria-setsize":"10",onClick:p=>e.submitSearch(l),onMouseover:n[6]||(n[6]=p=>e.onMouseOver()),key:l},[u(o,{id:`search-field-icon__option--${l}`,icon:"search"},null,8,["id"]),w(" "+I(i.text),1)],42,rx))),128))],2),_("button",{class:"nhsuk-search__submit",type:"submit",onClick:n[7]||(n[7]=Mn(i=>e.submitSearch(),["prevent"]))},[u(o,{icon:"search"}),ox]),_("button",{class:"nhsuk-search__close",id:"close-search",onClick:n[8]||(n[8]=Mn(i=>e.toggleSearch(),["prevent"]))},[u(o,{icon:"close"}),ax])],8,nx)],2)],16)}var lx=g(XS,[["render",ix],["__scopeId","data-v-10004d3a"]]);const ux=y({inheritAttrs:!1,components:{NhsLinkSwitcher:Ue},emits:[],props:{service:{type:Object,required:!0}},setup(e){const n=F(()=>{const r=["nhsuk-header__transactional-service-name"];return e.service.name&&e.service.name.length>22&&r.push("nhsuk-header__transactional-service-name--long"),r.join(" ")}),t=F(()=>e.service.href?e.service.href:"/"),s=F(()=>Object.keys(e.service).length>0);return{classes:n,href:t,isService:s}}});function cx(e,n,t,s,r,a){const o=d("nhs-link-switcher");return e.isService?(c(),k("div",G({key:0,class:e.classes},e.$attrs),[u(o,{class:"nhsuk-header__transactional-service-name--link",href:e.href},{default:h(()=>[w(I(e.service.name),1)]),_:1},8,["href"])],16)):W("",!0)}var dx=g(ux,[["render",cx]]);const hx=y({inheritAttrs:!1,emits:[],props:{showNav:{type:Boolean,required:!0},showSearch:{type:Boolean,required:!0},navOpen:{type:Boolean,required:!0}},setup(e){const n=F(()=>{const r=["nhsuk-header__menu"];return e.showSearch||r.push("nhsuk-header__menu--only"),r.join(" ")}),t=F(()=>{const r=["nhsuk-header__menu-toggle"];return e.navOpen&&r.push("is-active"),r.join(" ")}),s=Se(Zt.toggleNav);return{classes:n,menuButtonClasses:t,toggleNav:s}}}),px=["aria-expanded"];function mx(e,n,t,s,r,a){return e.showNav?(c(),k("div",G({key:0,class:e.classes},e.$attrs),[_("button",{class:we(e.menuButtonClasses),id:"toggle-menu","aria-controls":"header-navigation","aria-label":"Open menu","aria-expanded":e.navOpen,onClick:n[0]||(n[0]=o=>e.toggleNav())}," Menu ",10,px)],16)):W("",!0)}var fx=g(hx,[["render",mx]]);const _x=y({inheritAttrs:!1,name:"nhs-header",emits:["submit-search","update:search-text"],props:{showSearch:{type:Boolean,default:!1},showNav:{type:Boolean,default:!1},transactional:{type:Boolean,default:!1},service:{type:Object,default:()=>({})},organisation:{type:Object,default:()=>({})},ariaLabel:{type:String,default:()=>"NHS homepage"},homeHref:{type:String,default:()=>"/"},whiteHeader:{type:Boolean,default:()=>!1},whiteNav:{type:Boolean,default:()=>!1},searchAction:{type:String,default:()=>"https://www.nhs.uk/search/"},searchInputName:{type:String,default:()=>"q"},homeText:{type:String,default:()=>"Home"},searchResults:{type:Array,default:()=>[]},searchText:{type:String,default:()=>""}},components:{HeaderNav:QS,HeaderSearch:lx,HeaderLogo:US,HeaderTransactional:dx,HeaderMenu:fx},setup(e){const n=Y({navOpen:!1,searchOpen:!1});function t(){n.navOpen=!n.navOpen}function s(){n.searchOpen=!n.searchOpen}Ee(Zt.toggleNav,t),Ee(Zt.toggleSearch,s);function r(){return e.transactional&&!e.showSearch&&!e.showNav}const a=F(()=>{const i=["nhsuk-header"];return r()&&i.push("nhsuk-header--transactional"),e.organisation.name&&i.push("nhsuk-header--organisation"),e.whiteHeader&&i.push("nhsuk-header--white"),e.whiteNav&&i.push("nhsuk-header--white-nav"),i.join(" ")}),o=F(()=>{const i=["nhsuk-header__content"];return n.searchOpen&&i.push("js-show"),i.join(" ")});return xe(K({classes:a,showTransactional:r},J(n)),{headerContentClasses:o})}}),gx={class:"nhsuk-width-container nhsuk-header__container"};function bx(e,n,t,s,r,a){const o=d("header-logo"),i=d("header-transactional"),l=d("header-menu"),p=d("header-search"),f=d("header-nav");return c(),k("header",G({class:e.classes,role:"banner"},e.$attrs),[_("div",gx,[u(o,{"home-href":e.homeHref,service:e.service,organisation:e.organisation,"aria-label":e.ariaLabel,"show-transactional":e.showTransactional(),showNav:e.showNav,showSearch:e.showSearch},null,8,["home-href","service","organisation","aria-label","show-transactional","showNav","showSearch"]),e.showTransactional()?(c(),S(i,{key:0,service:e.service},null,8,["service"])):W("",!0),e.showNav||e.showSearch?(c(),k("div",{key:1,class:we(e.headerContentClasses),id:"content-header"},[u(l,{"show-search":e.showSearch,"show-nav":e.showNav,"nav-open":e.navOpen},null,8,["show-search","show-nav","nav-open"]),e.showSearch?(c(),S(p,{key:0,"search-action":e.searchAction,"search-input-name":e.searchInputName,"search-menu-open":e.searchOpen,"search-results":e.searchResults,"search-text":e.searchText,"onUpdate:searchText":n[0]||(n[0]=m=>e.$emit("update:search-text",m)),onSubmitSearch:n[1]||(n[1]=m=>e.$emit("submit-search",m))},null,8,["search-action","search-input-name","search-menu-open","search-results","search-text"])):W("",!0)],2)):W("",!0)]),e.showNav?(c(),S(f,{key:0,"nav-open":e.navOpen,"home-href":e.homeHref,"home-text":e.homeText},{default:h(()=>[P(e.$slots,"default")]),_:3},8,["nav-open","home-href","home-text"])):W("",!0)],16)}var vx=g(_x,[["render",bx]]);const yx=y({inheritAttrs:!1,name:"nhs-header-item",emits:["click"],components:{NhsLinkSwitcher:Ue,NhsIcon:wn},props:{href:{type:String,required:!0}}}),$x={class:"nhsuk-header__navigation-item"};function kx(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),k("li",$x,[u(i,G({onClick:n[0]||(n[0]=l=>e.$emit("click")),class:"nhsuk-header__navigation-link",href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default"),u(o,{icon:"chevron-right"})]),_:3},16,["href"])])}var wx=g(yx,[["render",kx]]);const Sx=y({inheritAttrs:!1,name:"nhs-hero",emits:[],props:{heading:{type:String},imageUrl:{type:String},text:{type:String}},setup(e){const n=F(()=>{const o=["nhsuk-hero"];return e.heading&&e.imageUrl?o.push("nhsuk-hero--image nhsuk-hero--image-description"):e.imageUrl&&o.push("nhsuk-hero--image"),o.join(" ")}),t=F(()=>{const o={};return e.imageUrl&&(o["background-image"]=`url('${e.imageUrl}')`),o}),s=F(()=>{const o=["nhsuk-width-container"];return e.imageUrl||o.push("nhsuk-hero--border"),o.join(" ")}),r=F(()=>e.imageUrl?"nhsuk-hero-content":"nhsuk-hero__wrapper"),a=F(()=>e.text?"nhsuk-u-margin-bottom-3":"");return{sectionClass:n,sectionStyle:t,widthContainerClass:s,heroContentClass:r,headingClass:a}}}),xx={key:0,class:"nhsuk-hero__overlay"},Cx={class:"nhsuk-grid-row"},Ex={class:"nhsuk-grid-column-two-thirds"},Rx={key:0,class:"nhsuk-body-l nhsuk-u-margin-bottom-0"},Tx={key:1,class:"nhsuk-hero__arrow","aria-hidden":"true"},Ix={class:"nhsuk-grid-row"},Nx={class:"nhsuk-grid-column-two-thirds"},Ax={key:0,class:"nhsuk-body-l nhsuk-u-margin-bottom-0"},Mx={key:1,class:"nhsuk-hero__arrow","aria-hidden":"true"};function Ox(e,n,t,s,r,a){return c(),k("section",G({class:e.sectionClass,style:e.sectionStyle},e.$attrs),[e.imageUrl?(c(),k("div",xx,[e.heading?(c(),k("div",{key:0,class:we(e.widthContainerClass)},[_("div",Cx,[_("div",Ex,[_("div",{class:we(e.heroContentClass)},[_("h1",{class:we(e.headingClass)},I(e.heading),3),e.text?(c(),k("p",Rx,I(e.text),1)):W("",!0),e.imageUrl?(c(),k("span",Tx)):W("",!0)],2)])])],2)):W("",!0)])):W("",!0),e.heading&&!e.imageUrl?(c(),k("div",{key:1,class:we(e.widthContainerClass)},[_("div",Ix,[_("div",Nx,[_("div",{class:we(e.heroContentClass)},[_("h1",{class:we(e.headingClass)},I(e.heading),3),e.text?(c(),k("p",Ax,I(e.text),1)):W("",!0),e.imageUrl?(c(),k("span",Mx)):W("",!0)],2)])])],2)):W("",!0)],16)}var Hx=g(Sx,[["render",Ox]]);const Px=y({inheritAttrs:!1,name:"nhs-image",emits:[],props:{src:{type:String,required:!0},alt:{type:String,required:!0},sizes:{type:String,default:()=>""},srcset:{type:String,default:()=>""}},setup(e,n){return{isCaption:F(()=>Boolean(n.slots.default))}}}),Lx=["src","alt","sizes","srcset"],Bx={key:0,class:"nhsuk-image__caption"};function Dx(e,n,t,s,r,a){return c(),k("figure",G({class:"nhsuk-image"},e.$attrs),[_("img",{class:"nhsuk-image__img",src:e.src,alt:e.alt,sizes:e.sizes,srcset:e.srcset},null,8,Lx),e.isCaption?(c(),k("figcaption",Bx,[P(e.$slots,"default")])):W("",!0)],16)}var qx=g(Px,[["render",Dx]]);const Vx=y({inheritAttrs:!1,name:"nhs-list-panel",emits:[],components:{NhsHeadingSwitcher:st,NhsLinkSwitcher:Ue,NhsIcon:wn},props:{label:{type:String},id:{type:String},headingLevel:{type:Number,default:()=>2},disabled:{type:Boolean,default:()=>!1},message:{type:String}},setup(){return{classes:F(()=>["nhsuk-list nhsuk-list--border"].join(" "))}}});function Ux(e,n,t,s,r,a){const o=d("nhs-card");return c(),S(o,G({feature:""},e.$attrs,{"heading-level":e.headingLevel,heading:e.label,id:e.id}),{description:h(()=>[e.disabled?W("",!0):(c(),k("ul",{key:0,class:we(e.classes)},[P(e.$slots,"default")],2)),e.disabled?(c(),k("div",{key:1,class:we(e.classes)},I(e.message),3)):W("",!0)]),_:3},16,["heading-level","heading","id"])}var Fx=g(Vx,[["render",Ux]]);const zx=y({name:"nhs-list-panel-item",emits:["click"],inheritAttrs:!1,components:{NhsLinkSwitcher:Ue},props:{href:{type:String,required:!0}}}),jx={class:"nhsuk-list-panel__item"};function Wx(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("li",jx,[u(o,G({class:"nhsuk-list-panel__link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var Kx=g(zx,[["render",Wx]]);const Gx=y({inheritAttrs:!1,name:"nhs-nav-az",emits:[],props:{ariaLabel:{type:String,default:()=>"A to Z Navigation"}}}),Yx=["aria-label"],Zx={class:"nhsuk-list nhsuk-u-clear nhsuk-u-margin-0",role:"list"};function Qx(e,n,t,s,r,a){return c(),k("nav",G({class:"nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4",id:"nhsuk-nav-a-z",role:"navigation","aria-label":e.ariaLabel},e.$attrs),[_("ol",Zx,[P(e.$slots,"default")])],16,Yx)}var Xx=g(Gx,[["render",Qx]]);const Jx=y({name:"nhs-nav-az-item",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Ue},props:{disabled:{type:Boolean,default:()=>!1},href:{type:String,default:()=>""}}}),eC={class:"nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1"};function nC(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),k("li",eC,[e.disabled?(c(),k("span",G({key:0,class:"nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block"},e.$attrs),[P(e.$slots,"default")],16)):W("",!0),e.disabled?W("",!0):(c(),S(o,G({key:1,class:"nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block",href:e.href,onClick:n[0]||(n[0]=i=>e.$emit("click"))},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"]))])}var tC=g(Jx,[["render",nC]]);const sC=y({inheritAttrs:!1,name:"nhs-pagination",emits:["click-next","click-previous"],props:{ariaLabel:{type:String,default:()=>"Pagination"},previousHref:{type:String},previousPage:{type:String},nextHref:{type:String},nextPage:{type:String}},components:{NhsIcon:wn,NhsLinkSwitcher:Ue}}),rC=["aria-label"],oC={class:"nhsuk-list nhsuk-pagination__list"},aC={key:0,class:"nhsuk-pagination-item--previous"},iC=_("span",{class:"nhsuk-pagination__title"},"Previous",-1),lC=_("span",{class:"nhsuk-u-visually-hidden"},":",-1),uC={class:"nhsuk-pagination__page"},cC={key:1,class:"nhsuk-pagination-item--next"},dC=_("span",{class:"nhsuk-pagination__title"},"Next",-1),hC=_("span",{class:"nhsuk-u-visually-hidden"},":",-1),pC={class:"nhsuk-pagination__page"};function mC(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),k("nav",G({class:"nhsuk-pagination",role:"navigation","aria-label":e.ariaLabel},e.$attrs),[_("ul",oC,[e.previousHref&&e.previousPage?(c(),k("li",aC,[u(i,{class:"nhsuk-pagination__link nhsuk-pagination__link--prev",onClick:n[0]||(n[0]=l=>e.$emit("click-previous")),href:e.previousHref},{default:h(()=>[iC,lC,_("span",uC,I(e.previousPage),1),u(o,{icon:"arrow-left"})]),_:1},8,["href"])])):W("",!0),e.nextHref&&e.nextPage?(c(),k("li",cC,[u(i,{class:"nhsuk-pagination__link nhsuk-pagination__link--next",onClick:n[1]||(n[1]=l=>e.$emit("click-next")),href:e.nextHref},{default:h(()=>[dC,hC,_("span",pC,I(e.nextPage),1),u(o,{icon:"arrow-right"})]),_:1},8,["href"])])):W("",!0)])],16,rC)}var fC=g(sC,[["render",mC]]);const _C=y({inheritAttrs:!1,emits:[],name:"nhs-review-date",props:{lastReview:{type:String,required:!0},nextReview:{type:String,required:!0}}}),gC={class:"nhsuk-body-s"},bC=_("br",null,null,-1);function vC(e,n,t,s,r,a){return c(),k("div",G({class:"nhsuk-review-date"},e.$attrs),[_("p",gC,[w(" Page last reviewed: "+I(e.lastReview),1),bC,w(" Next review due: "+I(e.nextReview),1)])],16)}var yC=g(_C,[["render",vC]]);const $C=y({inheritAttrs:!1,name:"nhs-skip-link",emits:["click"]});function kC(e,n,t,s,r,a){return c(),k("a",G({class:"nhsuk-skip-link",href:"#maincontent",onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.$attrs),[P(e.$slots,"default")],16)}var wC=g($C,[["render",kC]]);const SC=y({inheritAttrs:!1,name:"nhs-summary-list",emits:[],props:{data:{type:Array,required:!0},border:{type:Boolean,default:()=>!0}},setup(e){return{classes:F(()=>{const t=["nhsuk-summary-list"];return e.border||t.push("nhsuk-summary-list--no-border"),t.join(" ")})}}});function xC(e,n,t,s,r,a){return c(),k("dl",G({class:e.classes},e.$attrs),[(c(!0),k(D,null,Oe(e.data,(o,i)=>(c(),k("div",{class:"nhsuk-summary-list__row",key:i},[P(e.$slots,"item",{item:o})]))),128))],16)}var CC=g(SC,[["render",xC]]);const EC=y({emits:[],inheritAttrs:!1});function RC(e,n,t,s,r,a){return c(),k("dt",G({class:"nhsuk-summary-list__key"},e.$attrs),[P(e.$slots,"default")],16)}var TC=g(EC,[["render",RC]]);const IC=y({emits:[],inheritAttrs:!1});function NC(e,n,t,s,r,a){return c(),k("dd",G({class:"nhsuk-summary-list__value"},e.$attrs),[P(e.$slots,"default")],16)}var AC=g(IC,[["render",NC]]);const MC=y({emits:[],inheritAttrs:!1});function OC(e,n,t,s,r,a){return c(),k("dd",G({class:"nhsuk-summary-list__actions"},e.$attrs),[P(e.$slots,"default")],16)}var HC=g(MC,[["render",OC]]);const PC=["key","value","actions"],LC=y({inheritAttrs:!1,name:"NhsSummaryListItem",emits:[],props:{type:{type:String,required:!0,validator:e=>PC.includes(e)}},setup(e){return{componentType:F(()=>e.type==="key"?TC:e.type==="actions"?HC:AC)}}});function BC(e,n,t,s,r,a){return c(),S(rn(e.componentType),Es(Qt(e.$attrs)),{default:h(()=>[P(e.$slots,"default")]),_:3},16)}var DC=g(LC,[["render",BC]]);const qC=y({inheritAttrs:!1,emit:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},responsive:{type:Boolean,default:()=>!0}},components:{NhsHeadingSwitcher:st},setup(e){return{classes:F(()=>e.responsive?"nhsuk-table-responsive":"nhsuk-table")}}});function VC(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),k("div",G({class:"nhsuk-table__panel-with-heading-tab"},e.$attrs),[u(o,{"heading-level":e.headingLevel,class:"nhsuk-table__heading-tab"},{default:h(()=>[w(I(e.heading),1)]),_:1},8,["heading-level"]),_("table",{role:"table",class:we(e.classes)},[P(e.$slots,"default")],2)],16)}var UC=g(qC,[["render",VC]]);const FC=y({inheritAttrs:!1,emit:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},responsive:{type:Boolean,default:()=>!0}},setup(e){return{classes:F(()=>e.responsive?"nhsuk-table-responsive":"nhsuk-table")}}});function zC(e,n,t,s,r,a){return c(),k("table",G({role:"table",class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var jC=g(FC,[["render",zC]]);const WC=y({inheritAttrs:!1,name:"nhs-table",emits:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},caption:{type:String},headers:{type:Array,required:!0},data:{type:Array,required:!0},responsive:{type:Boolean,default:()=>!0}},setup(e){const n=F(()=>e.heading?UC:jC),t=F(()=>e.responsive?"cell":"");return{tableType:n,tableCellRole:t}}}),KC={key:0,class:"nhsuk-table__caption"},GC={role:"rowgroup",class:"nhsuk-table__head"},YC={role:"row"},ZC={class:"nhsuk-table__body"},QC=["role"],XC={key:0,class:"nhsuk-table-responsive__heading"};function JC(e,n,t,s,r,a){return c(),S(rn(e.tableType),G({heading:e.heading,"heading-level":e.headingLevel,responsive:e.responsive},e.$attrs),{default:h(()=>[e.caption?(c(),k("caption",KC,I(e.caption),1)):W("",!0),_("thead",GC,[_("tr",YC,[(c(!0),k(D,null,Oe(e.headers,(o,i)=>(c(),k("th",{class:"nhsuk-table__header",scope:"col",key:i,style:Ln(o.style)},[P(e.$slots,"header",{props:o},()=>[w(I(o.text),1)])],4))),128))])]),_("tbody",ZC,[(c(!0),k(D,null,Oe(e.data,(o,i)=>(c(),k("tr",{class:"nhsuk-table__row",key:i},[(c(!0),k(D,null,Oe(e.headers,(l,p)=>(c(),k("td",{role:e.tableCellRole,class:"nhsuk-table__cell",key:p},[e.responsive?(c(),k("span",XC,I(l.text),1)):W("",!0),P(e.$slots,`item.${l.value}`,{item:o},()=>[w(I(o[l.value]),1)])],8,QC))),128))]))),128))])]),_:3},16,["heading","heading-level","responsive"])}var eE=g(WC,[["render",JC]]);const nE=["","white","grey","green","aqua-green","blue","purple","pink","red","orange","yellow"],tE=y({inheritAttrs:!1,name:"nhs-tag",emits:[],props:{color:{type:String,default:()=>"",validator:e=>nE.includes(e)}},setup(e){return{classes:F(()=>{let t=["nhsuk-tag"];return e.color&&t.push(`nhsuk-tag--${e.color}`),t.join(" ")})}}});function sE(e,n,t,s,r,a){return c(),k("strong",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var rE=g(tE,[["render",sE]]);const oE=y({inheritAttrs:!1,name:"nhs-warning-callout",emits:[],components:{NhsHeadingSwitcher:st},props:{heading:{type:String,required:!0},headingLevel:{type:Number,default:()=>3}},setup(e){function n(){return e.heading.toLowerCase().includes("important")}function t(){return n()?e.heading:""}return{isHeadingContainsImportant:n,showNormalHeading:t}}}),aE={key:0,role:"text"},iE=_("span",{class:"nhsuk-u-visually-hidden"},"Important: ",-1);function lE(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),k("div",G({class:"nhsuk-warning-callout"},e.$attrs),[u(o,{class:"nhsuk-warning-callout__label","heading-level":e.headingLevel},{default:h(()=>[P(e.$slots,"heading",{props:e.heading},()=>[w(I(e.showNormalHeading())+" ",1),e.isHeadingContainsImportant()?W("",!0):(c(),k("span",aE,[iE,w(" "+I(e.heading),1)]))])]),_:3},8,["heading-level"]),P(e.$slots,"default")],16)}var uE=g(oE,[["render",lE]]);const cE=["s"],dE=y({inheritAttrs:!1,name:"nhs-body",emits:[],props:{size:{type:String,validator:e=>cE.includes(e)}},setup(e){return{classes:F(()=>e.size?`nhsuk-body-${e.size}`:"nhsuk-body")}}});function hE(e,n,t,s,r,a){return c(),k("p",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var pE=g(dE,[["render",hE]]);const mE=y({emits:[],inheritAttrs:!1});function fE(e,n,t,s,r,a){return c(),k("ol",Es(Qt(e.$attrs)),[P(e.$slots,"default")],16)}var _E=g(mE,[["render",fE]]);const gE=y({emits:[],inheritAttrs:!1});function bE(e,n,t,s,r,a){return c(),k("ul",Es(Qt(e.$attrs)),[P(e.$slots,"default")],16)}var vE=g(gE,[["render",bE]]);const sa={bullet:"nhsuk-list--bullet",number:"nhsuk-list--number",error:"nhsuk-error-summary__list"},yE=y({inheritAttrs:!1,name:"nhs-list",emits:[],props:{type:{type:String,default:()=>"bullet",validator:e=>e in sa}},setup(e){const n=F(()=>e.type==="number"?_E:vE),t=F(()=>`nhsuk-list ${sa[e.type]}`);return{element:n,classes:t}}});function $E(e,n,t,s,r,a){return c(),S(rn(e.element),G({class:e.classes},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["class"])}var kE=g(yE,[["render",$E]]);const wE=y({inheritAttrs:!1,name:"nhs-error-text",emits:[],props:{hiddenText:{type:String,default:()=>"Error: "},id:{type:String}}}),SE=["id"],xE={class:"nhsuk-u-visually-hidden"};function CE(e,n,t,s,r,a){return c(),k("span",G({class:"nhsuk-error-message",id:e.id},e.$attrs),[_("span",xE,I(e.hiddenText),1),P(e.$slots,"default")],16,SE)}var rt=g(wE,[["render",CE]]);const EE=y({inheritAttrs:!1,emits:[],name:"nhs-hint-text",props:{id:{type:String},element:{type:String,default:()=>"span"}}});function RE(e,n,t,s,r,a){return c(),S(rn(e.element),G({class:"nhsuk-hint"},e.$attrs,{id:e.id}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["id"])}var Sn=g(EE,[["render",RE]]);const TE=y({inheritAttrs:!1,emits:[],name:"nhs-inset-text",props:{hiddenText:{type:String,default:()=>"Information: "}}}),IE={class:"nhsuk-u-visually-hidden"};function NE(e,n,t,s,r,a){return c(),k("div",G({class:"nhsuk-inset-text"},e.$attrs),[_("span",IE,I(e.hiddenText),1),P(e.$slots,"default")],16)}var AE=g(TE,[["render",NE]]);const ra={xl:1,l:2,m:3,s:4,xs:5},ME=y({inheritAttrs:!1,name:"nhs-heading",emits:[],components:{NhsHeadingSwitcher:st},props:{size:{type:String,default:()=>"l",validators:e=>e in ra}},setup(e){return{headingLevel:F(()=>ra[e.size])}}});function OE(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),S(o,G({"heading-level":e.headingLevel,class:`nhsuk-heading-${e.size}`},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["heading-level","class"])}var HE=g(ME,[["render",OE]]);const PE=y({inheritAttrs:!1,emits:[],props:{size:{type:String}},setup(e){return{classes:F(()=>{let t=["nhsuk-label"];return e.size&&t.push(`nhsuk-label--${e.size}`),t.join(" ")})}}});function LE(e,n,t,s,r,a){return c(),k("label",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var hu=g(PE,[["render",LE]]);const BE=y({inheritAttrs:!1,emits:[],components:{NhsLabelNormal:hu},props:{size:{type:String}}}),DE={class:"nhsuk-label-wrapper"};function qE(e,n,t,s,r,a){const o=d("nhs-label-normal");return c(),k("h1",DE,[u(o,G({size:e.size},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["size"])])}var VE=g(BE,[["render",qE]]);const UE=["xl","s"],FE=y({inheritAttrs:!1,name:"nhs-label",emits:[],props:{pageHeading:{type:Boolean,default:()=>!1},size:{type:String,validator:e=>e?UE.includes(e):!0}},setup(e){return{labelType:F(()=>e.pageHeading?VE:hu)}}});function zE(e,n,t,s,r,a){return c(),S(rn(e.labelType),G({size:e.size},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["size"])}var ot=g(FE,[["render",zE]]);const Te={registerValidator:"register-validator",registerErrorStatus:"register-error-status",registerReset:"register-reset",unregisterItem:"unregister-item",registerItemValidator:"register-item-validator",registerItemErrorStatus:"register-item-error-status",registerItemErrorMsg:"register-item-error-msg",registerItemReset:"register-item-reset",unregisterItemGroupItem:"unregister-item-group-item"},jE=y({inheritAttrs:!1,name:"nhs-form",emits:["submit","update:model-value","reset"],props:{modelValue:{type:Boolean,default:()=>!0}},setup(e,n){const t=Y({validators:{},errorStatuses:{},resets:{}});function s(m,v){t.validators[m]=v}function r(m,v){t.errorStatuses[m]=v}function a(m,v){t.resets[m]=v}function o(m){delete t.validators[m],delete t.errorStatuses[m],delete t.resets[m]}Ee(Te.registerValidator,s),Ee(Te.registerErrorStatus,r),Ee(Te.registerReset,a),Ee(Te.unregisterItem,o);function i(){for(const m of Object.values(t.errorStatuses))if(m())return!1;return!0}function l(m){n.emit("update:model-value",m)}function p(){for(const v of Object.values(t.validators))v();const m=i();l(m),n.emit("submit")}function f(){for(const m of Object.values(t.resets))m();n.emit("reset")}return Ve(()=>i(),m=>{l(m)}),{onSubmit:p,onReset:f}}});function WE(e,n,t,s,r,a){return c(),k("form",G({onSubmit:n[0]||(n[0]=Mn(o=>e.onSubmit(),["prevent"])),onReset:n[1]||(n[1]=Mn(o=>e.onReset(),["prevent"]))},e.$attrs),[P(e.$slots,"default")],16)}var KE=g(jE,[["render",WE]]);const GE=y({inheritAttrs:!1,emits:[],props:{error:{type:Boolean,required:!0}},setup(e){return{classes:F(()=>{const t=["nhsuk-form-group"];return e.error&&t.push("nhsuk-form-group--error"),t.join(" ")})}}});function YE(e,n,t,s,r,a){return c(),k("div",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var at=g(GE,[["render",YE]]);const pu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-",ZE=pu.length;function xt(){const e=[];for(let n=0;n<12;n++)e.push(pu.charAt(Math.floor(Math.random()*ZE)));return e.join("")}function Vn(e){return`${e}-hint`}function Un(e){return`${e}-error`}function Xt(e,n){return F(()=>{const t=[];return e.hint&&t.push(Vn(e.id)),n.value&&t.push(Un(e.id)),t.join(" ")})}function QE(e,n){return F(()=>{const t=[];return e.hint&&t.push(Vn(e.id)),n()&&t.push(Un(e.id)),t.join(" ")})}function mu(e,n){for(const t of n){const s=t(e);if(typeof s=="string")return{errorMessage:s,errorStatus:!0}}return{errorMessage:"",errorStatus:!1}}function Jt(e,n){const t=$n(!1),s=$n("");function r(){const{errorMessage:m,errorStatus:v}=mu(n.value,e.rules);t.value=v,s.value=m}function a(){return t.value}function o(){t.value=!1,s.value=""}const i=Se(Te.registerValidator,null),l=Se(Te.registerErrorStatus,null),p=Se(Te.registerReset,null),f=Se(Te.unregisterItem,null);return Pe(()=>{i&&i(e.id,r),l&&l(e.id,a),p&&p(e.id,o)}),wt(()=>{f&&f(e.id)}),{error:t,errorMsg:s,validator:r}}function XE(e,n){const t=$n(!1),s=$n("");function r(){const{errorMessage:R,errorStatus:j}=mu(n.value,e.rules);t.value=j,s.value=R}function a(){return t.value}function o(){t.value=!1,s.value=""}function i(){return s.value}const l=Se(Te.registerItemValidator,null),p=Se(Te.registerItemErrorStatus,null),f=Se(Te.registerItemReset,null),m=Se(Te.registerItemErrorMsg,null),v=Se(Te.unregisterItemGroupItem,null);return Pe(()=>{l&&l(e.id,r),p&&p(e.id,a),m&&m(e.id,i),f&&f(e.id,o)}),wt(()=>{v&&v(e.id)}),{error:t,errorMsg:s,validator:r}}function JE(e){const n=Y({errorMsgs:{},validators:{},errorStatuses:{},resets:{}});function t(L,Q){n.validators[L]=Q}function s(L,Q){n.errorStatuses[L]=Q}function r(L,Q){n.resets[L]=Q}function a(L,Q){n.errorMsgs[L]=Q}function o(L){delete n.validators[L],delete n.errorStatuses[L],delete n.resets[L],delete n.errorMsgs[L]}Ee(Te.registerItemValidator,t),Ee(Te.registerItemReset,r),Ee(Te.registerItemErrorStatus,s),Ee(Te.registerItemErrorMsg,a),Ee(Te.unregisterItemGroupItem,o);function i(){for(const L of Object.values(n.resets))L()}function l(){for(const L of Object.values(n.validators))L()}function p(){for(const L of Object.values(n.errorStatuses))if(L())return!0;return!1}function f(){for(const L in n.errorStatuses)if(n.errorStatuses[L]())return n.errorMsgs[L]();return""}const m=Se(Te.registerValidator,null),v=Se(Te.registerErrorStatus,null),R=Se(Te.registerReset,null),j=Se(Te.unregisterItem,null);return Pe(()=>{m&&m(e.id,l),v&&v(e.id,p),R&&R(e.id,i)}),wt(()=>{j&&j(e.id)}),{errorStatus:p,errorMsg:f,validator:l}}function oa(e,n,t,s,r){n===e&&t(),s.emit(e,r)}function Ct(e,n,t){function s(a=null){oa("blur",e.validateOn,n,t,a)}function r(a=null){oa("change",e.validateOn,n,t,a)}return{onBlur:s,onChange:r}}function Fn(e,n){const t=$n(e.modelValue);return Ve(()=>t.value,s=>{n.emit("update:model-value",s)}),Ve(()=>e.modelValue,s=>{t.value=s}),t}function e2(e,n){const t=Y({internalModel:e.modelValue});return Ve(()=>e.modelValue,s=>{t.internalModel=s}),Ve(()=>t.internalModel,s=>{n.emit("update:model-value",s)}),t}const fu=["2","3","4","5","10","20"],n2=y({inheritAttrs:!1,emits:["update:model-value","focus","blur","change"],name:"nhs-input",components:{NhsFormItem:at,NhsHintText:Sn,NhsLabel:ot,NhsErrorText:rt},props:{width:{type:String,validator:e=>fu.includes(e)},type:{type:String,default:()=>"text"},maxlength:{type:Number},autocomplete:{type:String},inputmode:{type:String},spellcheck:{type:Boolean},disabled:{type:Boolean,default:()=>!1},modelValue:{required:!0},id:{type:String,default:()=>`nhs-input-${xt()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=Fn(e,n),{error:s,errorMsg:r,validator:a}=Jt(e,t),o=tt(["disabled"],e,n),i=F(()=>{const m=["nhsuk-input"];return e.width&&m.push(`nhsuk-input--width-${e.width}`),s.value&&m.push("nhsuk-input--error"),m.join(" ")}),l=Xt(e,s),{onBlur:p,onChange:f}=Ct(e,a,n);return{classes:i,attributes:o,ariaDescribedby:l,hintId:Vn,errorId:Un,onBlur:p,onChange:f,internalModel:t,error:s,errorMsg:r}}}),t2=["id","name","type","aria-describedby","maxlength","inputmode","spellcheck","autocomplete"];function s2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),S(p,{error:e.error},{default:h(()=>[e.label?(c(),S(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[w(I(e.label),1)])]),_:3},8,["for"])):W("",!0),e.hint?(c(),S(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.error?(c(),S(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[w(I(e.errorMsg),1)])]),_:3},8,["id"])):W("",!0),gn(_("input",G({class:e.classes,id:e.id,name:e.name,type:e.type,"aria-describedby":e.ariaDescribedby},e.attributes,{"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f),maxlength:e.maxlength,inputmode:e.inputmode,spellcheck:e.spellcheck,onBlur:n[1]||(n[1]=f=>e.onBlur()),onFocus:n[2]||(n[2]=f=>e.$emit("focus")),onChange:n[3]||(n[3]=f=>e.onChange()),autocomplete:e.autocomplete}),null,16,t2),[[ii,e.internalModel]])]),_:3},8,["error"])}var r2=g(n2,[["render",s2]]);const o2=y({inheritAttrs:!1,name:"nhs-select",emits:["update:model-value","blur","change"],components:{NhsFormItem:at,NhsHintText:Sn,NhsErrorText:rt,NhsLabel:ot},props:{modelValue:{required:!0},disabled:{type:Boolean,default:()=>!1},id:{type:String,default:()=>`nhs-select-${xt()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=Fn(e,n),{error:s,errorMsg:r,validator:a}=Jt(e,t),o=tt(["disabled"],e,n),i=Xt(e,s),{onBlur:l,onChange:p}=Ct(e,a,n);return{classes:F(()=>{const m=["nhsuk-select"];return s.value&&m.push("nhsuk-select--error"),m.join(" ")}),attributes:o,ariaDescribedby:i,hintId:Vn,errorId:Un,onBlur:l,onChange:p,error:s,errorMsg:r,internalModel:t}}}),a2=["id","name","aria-describedby"];function i2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),S(p,{error:e.error},{default:h(()=>[e.label?(c(),S(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[w(I(e.label),1)])]),_:3},8,["for"])):W("",!0),e.hint?(c(),S(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.error?(c(),S(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[w(I(e.errorMsg),1)])]),_:3},8,["id"])):W("",!0),gn(_("select",G({class:e.classes,id:e.id,name:e.name},e.attributes,{"aria-describedby":e.ariaDescribedby,"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f),onBlur:n[1]||(n[1]=f=>e.onBlur()),onChange:n[2]||(n[2]=f=>e.onChange())}),[P(e.$slots,"default")],16,a2),[[oi,e.internalModel]])]),_:3},8,["error"])}var l2=g(o2,[["render",i2]]);const u2=y({name:"nhs-textarea",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],components:{NhsFormItem:at,NhsHintText:Sn,NhsErrorText:rt,NhsLabel:ot},props:{modelValue:{required:!0},disabled:{type:Boolean,default:()=>!1},id:{type:String,default:()=>`nhs-select-${xt()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"},rows:{type:Number,default:()=>5},autocomplete:{type:String}},setup(e,n){const t=Fn(e,n),{error:s,errorMsg:r,validator:a}=Jt(e,t),o=tt(["disabled"],e,n),i=Xt(e,s),{onBlur:l,onChange:p}=Ct(e,a,n);return{classes:F(()=>{const m=["nhsuk-textarea"];return s.value&&m.push("nhsuk-textarea--error"),m.join(" ")}),internalModel:t,error:s,errorMsg:r,attributes:o,ariaDescribedby:i,onBlur:l,onChange:p,hintId:Vn,errorId:Un}}}),c2=["id","rows","name","aria-describedby","autocomplete"];function d2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),S(p,{error:e.error},{default:h(()=>[e.label?(c(),S(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[w(I(e.label),1)])]),_:3},8,["for"])):W("",!0),e.hint?(c(),S(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.error?(c(),S(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[w(I(e.errorMsg),1)])]),_:3},8,["id"])):W("",!0),gn(_("textarea",G({class:e.classes,id:e.id,rows:e.rows,name:e.name,"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f)},e.attributes,{"aria-describedby":e.ariaDescribedby,onBlur:n[1]||(n[1]=f=>e.onBlur()),onChange:n[2]||(n[2]=f=>e.onChange()),onFocus:n[3]||(n[3]=f=>e.$emit("focus")),autocomplete:e.autocomplete}),null,16,c2),[[ks,e.internalModel]])]),_:3},8,["error"])}var h2=g(u2,[["render",d2]]);const p2=y({components:{NhsLabel:ot,NhsFormItem:at},inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{id:{type:String,required:!0},name:{type:String},type:{type:String,default:()=>"text"},width:{type:String,validator:e=>fu.includes(e)},disabled:{type:Boolean,default:()=>!1},label:{type:String},autocomplete:{type:String},rules:{type:Array,default:()=>[]},inputmode:{type:String},modelValue:{required:!0},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=Fn(e,n),{error:s,validator:r}=XE(e,t),{onChange:a,onBlur:o}=Ct(e,r,n),i=F(()=>{const p=["nhsuk-input nhsuk-date-input__input"];return e.width&&p.push(`nhsuk-input--width-${e.width}`),s.value&&p.push("nhsuk-input--error"),p.join(" ")}),l=tt(["disabled"],e,n);return{classes:i,internalModel:t,attributes:l,onChange:a,onBlur:o}}}),m2={class:"nhsuk-date-input__item"},f2=["id","name","type","autocomplete","inputmode"];function _2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-form-item");return c(),k("div",m2,[u(i,{error:!1},{default:h(()=>[e.label?(c(),S(o,{key:0,class:"nhsuk-date-input__label",for:e.id},{default:h(()=>[P(e.$slots,"item-label",{},()=>[w(I(e.label),1)])]),_:3},8,["for"])):W("",!0),gn(_("input",G({class:e.classes,id:e.id,name:e.name,type:e.type,autocomplete:e.autocomplete,inputmode:e.inputmode,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l)},e.attributes,{onChange:n[1]||(n[1]=l=>e.onChange()),onBlur:n[2]||(n[2]=l=>e.onBlur()),onFocus:n[3]||(n[3]=l=>e.$emit("focus"))}),null,16,f2),[[ii,e.internalModel]])]),_:3})])}var g2=g(p2,[["render",_2]]);function hs(e,n){return`${e}-${n}`}function b2(e){function n(r,a){e.emit("blur",hs(r,a))}function t(r,a){e.emit("focus",hs(r,a))}function s(r,a){e.emit("change",hs(r,a))}return{onBlur:n,onFocus:t,onChange:s}}const v2=y({name:"nhs-input-group",inheritAttrs:!1,emits:["blur","focus","change","update:model-value"],components:{NhsInputGroupItem:g2,NhsHintText:Sn,NhsErrorText:rt,NhsFieldset:Us,NhsFormItem:at},props:{id:{type:String,default:()=>`nhs-input-group-${xt()}`},hint:{type:String},label:{type:String},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},items:{type:Array,default:()=>[]},headingSize:{type:String},modelValue:{type:Object,default:()=>({})}},setup(e,n){const t=e2(e,n),{errorStatus:s,errorMsg:r}=JE(e),a=QE(e,s),{onBlur:o,onChange:i,onFocus:l}=b2(n);return K({errorStatus:s,errorMsg:r,hintId:Vn,errorId:Un,ariaDescribedby:a,onChange:i,onBlur:o,onFocus:l,itemGroupItemId:hs},J(t))}}),y2=["id"];function $2(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-input-group-item"),p=d("nhs-fieldset"),f=d("nhs-form-item");return c(),S(f,{error:e.errorStatus()},{default:h(()=>[u(p,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),S(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.errorStatus()?(c(),S(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg()},()=>[w(I(e.errorMsg()),1)])]),_:3},8,["id"])):W("",!0),_("div",{class:"nhsuk-date-input",id:e.id},[(c(!0),k(D,null,Oe(e.items,(m,v)=>(c(),S(l,{label:m.label,width:m.width,type:m.type,autocomplete:m.autocomplete,inputmode:m.inputmode,disabled:m.disabled||e.disabled,id:e.itemGroupItemId(e.id,v),name:m.name,rules:m.rules,"validate-on":m["validate-on"],modelValue:e.internalModel[e.itemGroupItemId(e.id,v)],"onUpdate:modelValue":R=>e.internalModel[e.itemGroupItemId(e.id,v)]=R,key:e.itemGroupItemId(e.id,v),onChange:R=>e.onChange(e.id,v),onBlur:R=>e.onBlur(e.id,v),onFocus:R=>e.onFocus(e.id,v)},{"item-label":h(()=>[P(e.$slots,"item-label",{item:m})]),_:2},1032,["label","width","type","autocomplete","inputmode","disabled","id","name","rules","validate-on","modelValue","onUpdate:modelValue","onChange","onBlur","onFocus"]))),128))],8,y2)]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var k2=g(v2,[["render",$2]]);const w2=y({inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{checkboxValue:{type:String},hint:{type:String},label:{type:String,required:!0},name:{type:String},disabled:{type:Boolean,default:()=>!1},id:{type:String,required:!0},modelValue:{required:!0},conditional:{type:Boolean,default:()=>!1}},components:{NhsLabel:ot,NhsHintText:Sn},setup(e,n){const t=$n(null),s=Y({isChecked:!1}),r=Fn(e,n);function a(){return e.conditional&&s.isChecked}const o=F(()=>{const p={};return e.disabled&&(p.disabled=!0),e.hint&&(p["aria-describedby"]=i()),p});function i(){return`${e.id}-hint`}Pe(()=>{t.value&&(s.isChecked=t.value.checked)});function l(p){p.target&&(s.isChecked=p.target.checked),n.emit("change",e.id)}return{hintId:i,internalModel:r,attributes:o,showConditional:a,checkbox:t,updateChecked:l}}}),S2={class:"nhsuk-checkboxes__item"},x2=["id","name","value"],C2=["id"];function E2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text");return c(),k(D,null,[_("div",S2,[gn(_("input",G({class:"nhsuk-checkboxes__input",id:e.id,name:e.name,type:"checkbox",value:e.checkboxValue,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l)},e.attributes,{ref:"checkbox",onChange:n[1]||(n[1]=(...l)=>e.updateChecked&&e.updateChecked(...l)),onBlur:n[2]||(n[2]=l=>e.$emit("blur",e.id)),onFocus:n[3]||(n[3]=l=>e.$emit("focus",e.id))}),null,16,x2),[[Pr,e.internalModel]]),u(o,{for:e.id,class:"nhsuk-checkboxes__label"},{default:h(()=>[P(e.$slots,"item-label",{},()=>[w(I(e.label),1)])]),_:3},8,["for"]),e.hint?(c(),S(i,{key:0,element:"div",id:e.hintId(),class:"nhsuk-checkboxes__hint"},{default:h(()=>[P(e.$slots,"item-hint",{},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0)]),e.showConditional()?(c(),k("div",{key:0,class:"nhsuk-checkboxes__conditional",id:`conditional-${e.id}`},[P(e.$slots,"item-conditional")],8,C2)):W("",!0)],64)}var R2=g(w2,[["render",E2]]);const T2=y({inheritAttrs:!1,emits:[],props:{divider:{type:String,required:!0}}}),I2={class:"nhsuk-checkboxes__divider"};function N2(e,n,t,s,r,a){return c(),k("div",I2,I(e.divider),1)}var A2=g(T2,[["render",N2]]);const M2=y({name:"nhs-checkboxes",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],components:{NhsFormItem:at,NhsFieldset:Us,NhsErrorText:rt,NhsHintText:Sn},props:{id:{type:String,default:()=>`nhs-checkbox-${xt()}`},hint:{type:String},label:{type:String},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},headingSize:{type:String},modelValue:{type:Object,default:()=>({})},items:{type:Array,default:()=>[]},rules:{type:Array,default:()=>[]},validateOn:{type:String,default:()=>"blur"}},setup(e,n){function t(f){return f.divider?A2:R2}const s=Fn(e,n),{error:r,errorMsg:a,validator:o}=Jt(e,s),i=Xt(e,r),{onBlur:l,onChange:p}=Ct(e,o,n);return{internalModel:s,error:r,errorMsg:a,ariaDescribedby:i,errorId:Un,hintId:Vn,onBlur:l,onChange:p,component:t}}}),O2={class:"nhsuk-checkboxes"};function H2(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-fieldset"),p=d("nhs-form-item");return c(),S(p,{error:e.error},{default:h(()=>[u(l,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),S(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.error?(c(),S(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[w(I(e.errorMsg),1)])]),_:3},8,["id"])):W("",!0),_("div",O2,[(c(!0),k(D,null,Oe(e.items,(f,m)=>(c(),S(rn(e.component(f)),{label:f.label,hint:f.hint,disabled:f.disabled||e.disabled,conditional:f.conditional,id:`${e.id}-${m+1}`,name:f.name,"checkbox-value":f.value,modelValue:e.internalModel,"onUpdate:modelValue":n[0]||(n[0]=v=>e.internalModel=v),key:`${e.id}-${m}`,onBlur:e.onBlur,onChange:e.onChange,onFocus:n[1]||(n[1]=v=>e.$emit("focus",v)),divider:f.divider},{"item-label":h(()=>[P(e.$slots,"item-label",{item:f})]),"item-hint":h(()=>[P(e.$slots,"item-hint",{item:f})]),"item-conditional":h(()=>[P(e.$slots,"item-conditional",{item:f})]),_:2},1032,["label","hint","disabled","conditional","id","name","checkbox-value","modelValue","onBlur","onChange","divider"]))),128))])]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var P2=g(M2,[["render",H2]]);const L2=y({inheritAttrs:!1,props:{name:{type:String},disabled:{type:Boolean,default:!1},id:{type:String,required:!0},label:{type:String},hint:{type:String},radioValue:{type:String,required:!0},divider:{type:String},modelValue:{required:!0}},components:{NhsHintText:Sn,NhsLabel:ot},setup(e,n){const t=Fn(e,n),s=F(()=>{let a={};return e.disabled&&(a.disabled=!0),e.hint&&(a["aria-describedby"]=r()),a});function r(){return`${e.id}-hint`}return{internalModel:t,attributes:s,hintId:r}}}),B2={class:"nhsuk-radios__item"},D2=["id","name","value","disabled"];function q2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text");return c(),k("div",B2,[gn(_("input",G({class:"nhsuk-radios__input",id:e.id,name:e.name,type:"radio",value:e.radioValue},e.attributes,{disabled:e.disabled,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l),onChange:n[1]||(n[1]=l=>e.$emit("change",e.id)),onBlur:n[2]||(n[2]=l=>e.$emit("blur",e.id)),onFocus:n[3]||(n[3]=l=>e.$emit("focus",e.id))}),null,16,D2),[[Lr,e.internalModel]]),e.label?(c(),S(o,{key:0,for:e.id,class:"nhsuk-radios__label"},{default:h(()=>[P(e.$slots,"item-label",{},()=>[w(I(e.label),1)])]),_:3},8,["for"])):W("",!0),e.hint?(c(),S(i,{key:1,element:"div",id:e.hintId(),class:"nhsuk-radios__hint"},{default:h(()=>[P(e.$slots,"item-hint",{},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0)])}var V2=g(L2,[["render",q2]]);const U2=y({inheritAttrs:!1,emits:[],props:{divider:{type:String,required:!0}}}),F2={class:"nhsuk-radios__divider"};function z2(e,n,t,s,r,a){return c(),k("div",F2,I(e.divider),1)}var j2=g(U2,[["render",z2]]);const W2=y({name:"nhs-radios",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{id:{type:String,default:()=>`nhs-radios-${xt()}`},hint:{type:String},label:{type:String},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},headingSize:{type:String},items:{type:Array,required:!0},rules:{type:Array,default:()=>[]},modelValue:{required:!0},validateOn:{type:String,default:()=>"blur"}},components:{NhsHintText:Sn,NhsFormItem:at,NhsFieldset:Us,NhsErrorText:rt},setup(e,n){const t=Fn(e,n),{error:s,errorMsg:r,validator:a}=Jt(e,t),o=Xt(e,s),{onBlur:i,onChange:l}=Ct(e,a,n),p=F(()=>{const v=["nhsuk-radios"];return e.inline&&v.push("nhsuk-radios--inline"),v.join(" ")});function f(v){return v.divider?j2:V2}function m(v,R){return t.value===v&&Boolean(R)}return{classes:p,internalModel:t,error:s,errorMsg:r,ariaDescribedby:o,onBlur:i,onChange:l,errorId:Un,hintId:Vn,component:f,showConditional:m}}}),K2={class:"nhsuk-radios__conditional"};function G2(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-fieldset"),p=d("nhs-form-item");return c(),S(p,{error:e.error},{default:h(()=>[u(l,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),S(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[w(I(e.hint),1)])]),_:3},8,["id"])):W("",!0),e.error?(c(),S(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[w(I(e.errorMsg),1)])]),_:3},8,["id"])):W("",!0),_("div",{class:we(e.classes)},[(c(!0),k(D,null,Oe(e.items,(f,m)=>(c(),k("div",{key:`${e.id}-${m}`},[(c(),S(rn(e.component(f)),{label:f.label,hint:f.hint,disabled:f.disabled||e.disabled,id:`${e.id}-${m+1}`,name:f.name,"radio-value":f.value,modelValue:e.internalModel,"onUpdate:modelValue":n[0]||(n[0]=v=>e.internalModel=v),divider:f.divider,onBlur:e.onBlur,onChange:e.onChange,onFocus:n[1]||(n[1]=v=>e.$emit("focus",v))},{"item-label":h(()=>[P(e.$slots,"item-label",{item:f})]),"item-hint":h(()=>[P(e.$slots,"item-hint",{item:f})]),_:2},1032,["label","hint","disabled","id","name","radio-value","modelValue","divider","onBlur","onChange"])),gn(_("div",K2,[P(e.$slots,"item-conditional",{item:f},()=>[w(I(f),1)])],512),[[Bd,e.showConditional(f.value,f.conditional)]])]))),128))],2)]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var Y2=g(W2,[["render",G2]]);const Z2=[xw,Rw,Ow,Bw,Uw,Qw,r0,u0,g0,w0,C0,A0,P0,V0,K0,Z0,Us,lS,hS,kS,vS,_S,vx,wx,Hx,wn,qx,Fx,Kx,Xx,tC,fC,yC,wC,CC,DC,eE,rE,uE,pE,kE,rt,Sn,AE,HE,ot,KE,r2,l2,h2,k2,P2,Y2],Q2={install:(e,n={})=>{for(const t of Z2)e.component(t.name,t);e.provide("router",n.router)}};const X2=y({props:{id:{type:String,required:!0},tabValue:{required:!0},modelValue:{required:!0}},setup(e,n){const t=Y({checked:e.modelValue});return Ve(()=>e.modelValue,s=>{t.checked=s}),Ve(()=>t.checked,s=>{n.emit("update:model-value",s)}),K({},J(t))}}),J2=["value","id"],eR=["for"];function nR(e,n,t,s,r,a){return c(),k("div",null,[gn(_("input",{type:"radio",value:e.tabValue,"onUpdate:modelValue":n[0]||(n[0]=o=>e.checked=o),id:e.id},null,8,J2),[[Lr,e.checked]]),_("label",{class:"tab",for:e.id},[P(e.$slots,"default",{},void 0,!0)],8,eR)])}var tR=g(X2,[["render",nR],["__scopeId","data-v-16e7006d"]]);const sR="http://json.schemastore.org/web-types",rR="nhsuk-frontend-vue",oR="vue",aR="5.0.0",iR={html:{"types-syntax":"typescript",tags:[{name:"nhs-action-link",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-back-link",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-body",attributes:[{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"size of the body text. (blank or s)"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-breadcrumb",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Breadcrumb",description:"aria-label attribute for breadcrumb container."}],slots:[{name:"default",description:"default vue slots (used for breadcrumb item)"},{name:"backlink",description:"slots for breadcrumb back link"}]},{name:"nhs-breadcrumb-backlink",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"Link for the breadcrumb backlink"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-breadcrumb-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"Link for the breadcrumb item. If not provided, breadcrumb item will show as normal text"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-button",attributes:[{name:"element",value:{kind:"expression",type:"string"},required:!1,description:"Whether to use an <button> or <a> element to create the button. In most cases you will not need to set this as it will be configured automatically if you use href"},{name:"color",value:{kind:"expression",type:"string"},required:!1,default:"primary",description:"Alternative colours of the button. secondary or reverse"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically."},{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"The URL that the button should link to. If this is set, element will be automatically set to <a> if it has not already been defined."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-card",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Text heading of the card."},{name:"heading-classes",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Optional additional classes to add to heading. Separate each class with a space."},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"2",description:"Optional heading level for the card heading."},{name:"href",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The value of the card href attribute"},{name:"clickable",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the class nhsuk-card--clickable will be applied."},{name:"feature",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the class nhsuk-card__heading--feature and nhsuk-card__content--feature will be applied."},{name:"img-url",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The URL of the image in the card"},{name:"img-alt",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The alternative text of the image in the card"},{name:"description",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Text description within the card content."}],slots:[{name:"heading",description:"slot to replace heading with another component"},{name:"description",description:"slot to replace description with another component"}]},{name:"nhs-card-group",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"half",description:"Card group type (half, third, quarter)."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-care-card",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"non-urgent",description:"Care card component variant type - non-urgent, urgent or emergency."},{name:"heading",value:{kind:"expression",type:"string"},required:!0,description:"Heading to be used within the care card component"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the card heading."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Non-Urgent Advice:",description:"Hidden text used for speech playback."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-checkboxes",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-checkbox-<random string>",description:"The id of the checkbox group"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all checkboxes"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of checkbox group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of checkbox group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of checkbox group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of checkbox group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"label":"string","value":"string","disabled":"boolean","name":"string","hint":"string","conditional":"boolean","divider":"string"}'},required:!0,description:"Array of checkbox data objects"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each individual checkbox"},{name:"item-hint","vue-properties":[{name:"item",type:"object"}],description:"slot for hint of each individual checkbox"},{name:"item-conditional","vue-properties":[{name:"item",type:"object"}],description:"slot for conditional component of each individual checkbox"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-contents",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Pages in this guide",description:"Label used for text-to-speech."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Contents",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-contents-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Href value of an item in the contents list. If not provided, item will show as current page"},{name:"aria-current",value:{kind:"expression",type:"string"},required:!1,default:"page",description:"Hidden label on the active page in the list, used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-details",attributes:[{name:"text",value:{kind:"expression",type:"string"},required:!0,description:"Text to be displayed on the details component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-dodont",attributes:[{name:"title",value:{kind:"expression",type:"string"},required:!0,description:"Title to be displayed on the do and don't list component."},{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"tick",description:"Type of do and don't list component, 'cross', 'tick'."},{name:"items",value:{kind:"expression",type:"array"},required:!0,description:"Items to be displayed within the do and don't list component"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the title heading."}],slots:[{name:"item","vue-properties":[{name:"item"}],description:"slot for each list item"}]},{name:"nhs-error-summary",attributes:[{name:"title",value:{kind:"expression",type:"string"},required:!0,description:"Title to be displayed on the do and don't list component."}],slots:[{name:"default",description:"default vue slots"},{name:"title","vue-properties":[{name:"title",type:"string"}],description:"slots for error summary title"}]},{name:"nhs-error-text",attributes:[{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Error:",description:"Hidden text used to text to speech."},{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"Optional id attribute to add to the error message span tag."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-expander",attributes:[{name:"text",value:{kind:"expression",type:"string"},required:!0,description:"Text to be displayed on the expander component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-expander-group",slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-fieldset",attributes:[{name:"legend",value:{kind:"expression",type:"string"},required:!1,description:"Legend text."},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the legend also acts as the heading for the page"},{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"size of heading. xl, l or m"}],slots:[{name:"default",description:"default vue slots"},{name:"legend","vue-properties":[{name:"legend",type:"string"}],description:"fieldset heading slots"}]},{name:"nhs-footer",attributes:[{name:"copyright",value:{kind:"expression",type:"string"},required:!1,default:"Crown copyright",description:"Name of copyright holder."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Support links",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-footer-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The href of a primary navigation item in the footer."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-form",attributes:[{name:"v-model",value:{kind:"expression",type:"boolean"},required:!1,description:"model binding for validity of form"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"submit",description:"on form submit event"},{name:"reset",description:"on form reset event"}]},{name:"nhs-col",attributes:[{name:"span",value:{kind:"expression",type:"number"},required:!1,default:"100",description:"Width of container (100, 75, 66, 33 or 25)."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-main",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"normal",description:"type of main container (normal or fluid). Fluid container fill entire screen width."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-row",slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-header",attributes:[{name:"show-nav",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' to show the navigation links in the header."},{name:"show-search",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' to show the site search input form."},{name:"home-href",value:{kind:"expression",type:"string"},required:!1,default:"/",description:"The href of the link for the logo and mobile home link in the navigation links."},{name:"home-text",value:{kind:"expression",type:"string"},required:!1,default:"Home",description:"Text of home link of navigation in mobile mode."},{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"NHS homepage",description:"Aria label for the logo href."},{name:"transactional",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' if this is a transactional header (with smaller logo)."},{name:"service",value:{kind:"expression",type:'object|{"name":"string","href":"string"}'},required:!1,description:"Object containing the name and href of the service"},{name:"organisation",value:{kind:"expression",type:'object|{"name":"string","descriptor":"string","split":"string","logoURL":"string"}'},required:!1,description:"Settings for header with organisation logo"},{name:"search-action",value:{kind:"expression",type:"string"},required:!1,default:"https://www.nhs.uk/search/",description:"The search action endpoint."},{name:"search-input-name",value:{kind:"expression",type:"string"},required:!1,default:"q",description:"The name for the search field."},{name:"search-results",value:{kind:"expression",type:'array|{"text":"string","value":"any"}'},required:!1,description:"List of search results to display"},{name:"v-model:search-text",value:{kind:"expression",type:"string"},required:!1,description:"Model binding for search input field"},{name:"white-nav",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Toggle white navigation bar."},{name:"white-header",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Toggle white header. "}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"submit-search",arguments:[{name:"text",type:"string"},{name:"value",type:"any"}],description:"submit search event"}]},{name:"nhs-header-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"Link of the header navigation link"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-heading",attributes:[{name:"size",value:{kind:"expression",type:"string"},required:!1,default:"l",description:"Size of heading. xl, l, m, s or xs"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-hero",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!1,description:"Text heading of the hero component."},{name:"text",value:{kind:"expression",type:"string"},required:!1,description:"Text content of the hero component."},{name:"image-url",value:{kind:"expression",type:"string"},required:!1,description:"URL of the image of the hero component."}]},{name:"nhs-hint-text",attributes:[{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"Optional id attribute to add to the hint text tag."},{name:"element",value:{kind:"expression",type:"string"},required:!1,default:"span",description:"Select which element hint text uses - div or span"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-icon",attributes:[{name:"icon",value:{kind:"expression",type:"string"},required:!0,description:"Name of icon."}]},{name:"nhs-image",attributes:[{name:"src",value:{kind:"expression",type:"string"},required:!0,description:"The source location of the image."},{name:"alt",value:{kind:"expression",type:"string"},required:!0,description:"The alt text of the image."},{name:"srcset",value:{kind:"expression",type:"string"},required:!1,description:"A list of image source URLs and their respective sizes. Separate each image with a comma."},{name:"alt",value:{kind:"expression",type:"string"},required:!1,description:"A list of screen sizes for the browser to load the correct image from the srcset images."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-input",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-<random string>",description:"The id of the input."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the input, which is submitted with the form data."},{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"text",description:"Type of input control to render."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, input is disabled"},{name:"width",value:{kind:"expression",type:"string"},required:!1,description:"width of input. (2, 3, 4, 5, 10, 20)"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of input component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of input component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"max-length",value:{kind:"expression",type:"number"},required:!1,description:"maximum number of characters of input field"},{name:"autocomplete",value:{kind:"expression",type:"string"},required:!1,description:'Attribute to identify input purpose, for instance "postal-code" or "username".'},{name:"inputmode",value:{kind:"expression",type:"string"},required:!1,description:"Optional value for inputmode (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)"},{name:"spellcheck",value:{kind:"expression",type:"boolean"},required:!1,description:"Optional field to enable or disable the spellcheck attribute on the input."},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-input-group",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-group-<random string>",description:"The id of the input group."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all inputs"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of input group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of input group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of input group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of input group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"name":"string","type":"string","width":"string","disabled":"boolean","label":"string","autocomplete":"string","rules":"array","inputmode":"string","validate-on":"string"}'},required:!0,description:"Array of input data objects"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each input item"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-inset-text",attributes:[{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Information: ",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-label",attributes:[{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the label also acts as the heading for the page."},{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"Size of the label font. xl or s"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"bullet",description:"Type of list - bullet, number or error"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list-panel",attributes:[{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"The text label of the list panel."},{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"The ID of the label heading."},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"2",description:"Optional heading level for the label heading."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, this indicates there are no items in the list panel."},{name:"message",value:{kind:"expression",type:"string"},required:!1,description:"The text value to display if disabled has been set to true."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list-panel-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The href value of an item in the list panel."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-nav-az",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"A to Z Navigation",description:"aria-label for nav-az component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-nav-az-item",attributes:[{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the navigation item will not be within an anchor element."},{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-pagination",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Pagination",description:"The aria-label of the pagination component."},{name:"previous-href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the previous link href attribute."},{name:"previous-page",value:{kind:"expression",type:"string"},required:!1,description:"The text of the previous link."},{name:"next-href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the next link href attribute."},{name:"next-page",value:{kind:"expression",type:"string"},required:!1,description:"The text of the next link."}],events:[{name:"click-previous",description:"on click previous-page link event"},{name:"click-next",description:"on click next-page link event"}]},{name:"nhs-radios",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-radios-<random string>",description:"The id of the radios group"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all radio items"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of radio group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of radio group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of radio group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of radio group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"label":"string","value":"string","disabled":"boolean","name":"string","hint":"string","conditional":"boolean"}'},required:!0,description:"Array of radio data objects"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each individual radio"},{name:"item-hint","vue-properties":[{name:"item",type:"object"}],description:"slot for hint of each individual radio"},{name:"item-conditional","vue-properties":[{name:"item",type:"object"}],description:"slot for conditional component of each individual radio"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-review-date",attributes:[{name:"last-review",value:{kind:"expression",type:"string"},required:!0,description:"The value of the last review date"},{name:"next-review",value:{kind:"expression",type:"string"},required:!0,description:"The value of the next review date"}]},{name:"nhs-select",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-select-<random string>",description:"The id of the select."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the select, which is submitted with the form data."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, select is disabled"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of select component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of select component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"default",description:"default vue slots. used for adding select options"},{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-skip-link",slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-summary-list",attributes:[{name:"data",value:{kind:"expression",type:"array"},required:!0,description:"Array of row item objects."},{name:"border",value:{kind:"expression",type:"boolean"},required:!1,default:"true",description:"Toggle summary list border."}],slots:[{name:"item","vue-properties":[{name:"item"}],description:"slot for summary-list-items"}]},{name:"nhs-summary-list-item",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!0,description:"Item type. Valid values: key, value and action"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-table",attributes:[{name:"headers",value:{kind:"expression",type:'array|{"text":"string","value":"string","style":"object"}'},required:!0,description:"Array of table head cells."},{name:"data",value:{kind:"expression",type:"array"},required:!0,description:"Array of table rows"},{name:"heading",value:{kind:"expression",type:"string"},required:!1,description:"Heading/label of the table"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the heading."},{name:"caption",value:{kind:"expression",type:"string"},required:!1,description:"Optional caption for the table."},{name:"responsive",value:{kind:"expression",type:"boolean"},required:!1,default:"true",description:"Toggle responsive table"}],slots:[{name:"item.<header_value>","vue-properties":[{name:"item"}],description:"slot for table-items"}]},{name:"nhs-tag",attributes:[{name:"color",value:{kind:"expression",type:"string"},required:!1,description:"Colour of the tags"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-textarea",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-<random string>",description:"The id of the textarea."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the textarea, which is submitted with the form data."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, textarea is disabled"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of textarea component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of textarea component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"rows",value:{kind:"expression",type:"number"},required:!1,default:"5",description:"Optional number of textarea rows."},{name:"autocomplete",value:{kind:"expression",type:"string"},required:!1,description:'Attribute to identify input purpose, for instance "postal-code" or "username".'},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-warning-callout",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!0,description:"Heading to be used within the warning callout component."},{name:"color",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the heading."}],slots:[{name:"default",description:"default vue slots"}]}]}};var lR={$schema:sR,name:rR,framework:oR,version:aR,contributions:iR};const _u=lR.contributions.html.tags,uR=_u.map(e=>e.name),cR=_u.map(e=>{const n=e.attributes||[],t=e.slots||[],s=e.events||[];return{propsDocs:n,slotsDocs:t,eventsDocs:s}}),dR=e=>{const n=uR.indexOf(e);return cR[n]};const hR=y({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Required",value:"required"},{text:"Default",value:"default"},{text:"Description",value:"description"}]});function n(a){if(s(a)){let o=`{
`;const i=JSON.parse(a.split("|")[1]);for(const l in i)o=o+`  ${l}: ${i[l]}
`;return o=o+"}",o}return a}function t(a){return s(a)?a.split("|")[0]:a}function s(a){return a.startsWith("object|")||a.startsWith("array|")}function r(a){return a?"yes":"no"}return xe(K({},J(e)),{isRequired:r,itemTypeObject:n,itemType:t,showCodeBlock:s})}});function pR(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),S(i,{headers:e.headers,data:e.data},{"item.type":h(({item:l})=>[w(I(e.itemType(l.value.type))+" ",1),e.showCodeBlock(l.value.type)?(c(),S(o,{key:0,language:"typescript",code:e.itemTypeObject(l.value.type)},null,8,["code"])):W("",!0)]),"item.required":h(({item:l})=>[w(I(e.isRequired(l.required)),1)]),"item.default":h(({item:l})=>[w(I(l.default||"-"),1)]),_:1},8,["headers","data"])}var mR=g(hR,[["render",pR],["__scopeId","data-v-355c74b8"]]);const fR=y({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Props",value:"vue-properties"},{text:"Description",value:"description"}]});function n(s){return s["vue-properties"]?"object":"-"}function t(s){let r=`{
`;for(const a of s)r=r+`  ${a.name}: ${a.type||"any"}
`;return r=r+`}
`,r}return xe(K({},J(e)),{slotPropsDisplay:t,slotPropsDisplayBlank:n})}});function _R(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),S(i,{headers:e.headers,data:e.data},{"item.vue-properties":h(({item:l})=>[w(I(e.slotPropsDisplayBlank(l))+" ",1),l["vue-properties"]?(c(),S(o,{key:0,language:"typescript",code:e.slotPropsDisplay(l["vue-properties"])},null,8,["code"])):W("",!0)]),_:1},8,["headers","data"])}var gR=g(fR,[["render",_R]]);const bR=y({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Event Value",value:"arguments"},{text:"Description",value:"description"}]});function n(s){return s.arguments?"object":"-"}function t(s){let r=`{
`;for(const a of s)r=r+`  ${a.name}: ${a.type||"any"}
`;return r=r+`}
`,r}return xe(K({},J(e)),{eventsPropsDisplay:t,eventsPropsDisplayBlank:n})}});function vR(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),S(i,{headers:e.headers,data:e.data},{"item.value":h(({item:l})=>[w(I(l.value||"-"),1)]),"item.arguments":h(({item:l})=>[w(I(e.eventsPropsDisplayBlank(l))+" ",1),l.arguments?(c(),S(o,{key:0,language:"typescript",code:e.eventsPropsDisplay(l.arguments)},null,8,["code"])):W("",!0)]),_:1},8,["headers","data"])}var yR=g(bR,[["render",vR]]);const $R=y({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Input",value:"input"},{text:"Description",value:"description"}]});return K({},J(e))}});function kR(e,n,t,s,r,a){const o=d("nhs-table");return c(),S(o,{headers:e.headers,data:e.data},{"item.input":h(i=>[w(I(i.props.input||"-"),1)]),_:1},8,["headers","data"])}var wR=g($R,[["render",kR]]);const SR=y({components:{MethodsTable:wR,EventsTable:yR,SlotsTable:gR,PropsTable:mR,DocTab:tR},props:{heading:{type:String,required:!0}},setup(e){const{propsDocs:n,slotsDocs:t,eventsDocs:s}=dR(e.heading),a=Y({dataProps:n,dataSlots:t,dataEvents:s,dataMethods:[],tab:(()=>n.length>0?"props":t.length>0?"slots":s.length>0?"events":"methods")()});return K({},J(a))}}),xR={class:"heading-container"},CR={class:"tab-container"},ER=w(" Props "),RR=w(" Slots "),TR=w(" Events "),IR=w(" Methods "),NR={class:"table-container"};function AR(e,n,t,s,r,a){const o=d("doc-tab"),i=d("props-table"),l=d("slots-table"),p=d("events-table"),f=d("methods-table"),m=d("nhs-col"),v=d("nhs-row");return c(),S(v,null,{default:h(()=>[u(m,null,{default:h(()=>[_("div",xR,[_("span",null,I(e.heading),1)]),_("div",CR,[e.dataProps.length>0?(c(),S(o,{key:0,id:`${e.heading}-props`,"tab-value":"props",modelValue:e.tab,"onUpdate:modelValue":n[0]||(n[0]=R=>e.tab=R)},{default:h(()=>[ER]),_:1},8,["id","modelValue"])):W("",!0),e.dataSlots.length>0?(c(),S(o,{key:1,id:`${e.heading}-slots`,"tab-value":"slots",modelValue:e.tab,"onUpdate:modelValue":n[1]||(n[1]=R=>e.tab=R)},{default:h(()=>[RR]),_:1},8,["id","modelValue"])):W("",!0),e.dataEvents.length>0?(c(),S(o,{key:2,id:`${e.heading}-events`,"tab-value":"events",modelValue:e.tab,"onUpdate:modelValue":n[2]||(n[2]=R=>e.tab=R)},{default:h(()=>[TR]),_:1},8,["id","modelValue"])):W("",!0),e.dataMethods.length>0?(c(),S(o,{key:3,id:`${e.heading}-methods`,"tab-value":"methods",modelValue:e.tab,"onUpdate:modelValue":n[3]||(n[3]=R=>e.tab=R)},{default:h(()=>[IR]),_:1},8,["id","modelValue"])):W("",!0)]),_("div",NR,[e.tab==="props"?(c(),S(i,{key:0,data:e.dataProps},null,8,["data"])):W("",!0),e.tab==="slots"?(c(),S(l,{key:1,data:e.dataSlots},null,8,["data"])):W("",!0),e.tab==="events"?(c(),S(p,{key:2,data:e.dataEvents},null,8,["data"])):W("",!0),e.tab==="methods"?(c(),S(f,{key:3,data:e.dataMethods},null,8,["data"])):W("",!0)])]),_:1})]),_:1})}var MR=g(SR,[["render",AR],["__scopeId","data-v-3182c5b7"]]);const OR=y({props:{id:{type:String,required:!0},modelValue:{required:!0}},setup(e,n){const t=Y({checked:e.modelValue});return Ve(()=>e.modelValue,s=>{t.checked=s}),Ve(()=>t.checked,s=>{n.emit("update:model-value",s)}),K({},J(t))}}),HR=["id"],PR=["for"];function LR(e,n,t,s,r,a){return c(),k("div",null,[gn(_("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=o=>e.checked=o),id:e.id},null,8,HR),[[Pr,e.checked]]),_("label",{class:"tab",for:e.id},[P(e.$slots,"default",{},void 0,!0)],8,PR)])}var BR=g(OR,[["render",LR],["__scopeId","data-v-6bd7bf4e"]]),DR=`<template>
  <nhs-button @click="clickHandler('primary')">
    Primary Button
  </nhs-button>

  <nhs-button color="secondary" @click="clickHandler('secondary')">
    Secondary Button
  </nhs-button>

  <nhs-button color="reverse" @click="clickHandler('reverse')">
    Reverse Button
  </nhs-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    function clickHandler(msg: string): void {
      alert(msg)
    }

    return {clickHandler}
  }
})
<\/script>
`,qR=`<template>
  <nhs-button disabled>
    Primary Button Disabled
  </nhs-button>

  <nhs-button color="secondary" disabled>
    Secondary Button Disabled
  </nhs-button>

  <nhs-button color="reverse" disabled>
    Reverse Button Disabled
  </nhs-button>
</template>
`,VR=`<template>
  <nhs-action-link href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551">
    Find a minor injuries unit
  </nhs-action-link>
</template>
`,UR=`<template>
  <nhs-back-link href="#">
    Go Back
  </nhs-back-link>
</template>`,FR=`<template>
  <nhs-breadcrumb>
    <nhs-breadcrumb-item href="/level-one">Level one</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two">Level two</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two/level-three">Level three</nhs-breadcrumb-item>
    <template #backlink>
      <nhs-breadcrumb-backlink href="/level-one/level-two/level-three">Back to Level three</nhs-breadcrumb-backlink>
    </template>
  </nhs-breadcrumb>
</template>
`,zR=`<template>
  <nhs-card
    heading="If you need help now, but it\u2019s not an emergency"
    :heading-level="3"
  >
    <template #description>
      <p class="nhsuk-card__description">Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a></p>
    </template>
  </nhs-card>
</template>
`,jR=`<template>
  <nhs-card
    href="#"
    clickable
    heading-classes="nhsuk-heading-m"
    heading="Introduction to care and support"
    description="A quick guide for people who have care and support needs and their carers"
  ></nhs-card>
</template>
`,WR=`<template>
  <nhs-card
    img-url="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
    href="#"
    clickable
    heading="Exercise"
    heading-classes="nhsuk-heading-m"
    description="Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
  ></nhs-card>
</template>
`,KR=`<template>
  <nhs-card
    feature
    heading="Feature card heading"
    heading-classes="nhsuk-heading-m"
    description="Feature card description"
  ></nhs-card>
</template>
`,GR=`<template>
  <h2>Halves</h2>

  <nhs-card-group type="half">
    <nhs-card
      href="#"
      clickable
      heading="Introduction to care and support"
      heading-classes="nhsuk-heading-m"
      description="A quick guide for people who have care and support needs and their carers"
    ></nhs-card>
    <nhs-card
      href="#"
      clickable
      heading="Help from social services and charities"
      heading-classes="nhsuk-heading-m"
      description="Includes helplines, needs assessments, advocacy and reporting abuse"
    ></nhs-card>
    <nhs-card
      href="#"
      clickable
      heading="Money, work and benefits"
      heading-classes="nhsuk-heading-m"
      description="How to pay for care and support, and where you can get help with costs"
    ></nhs-card>
    <nhs-card
      href="#"
      clickable
      heading="Care after a hospital stay"
      heading-classes="nhsuk-heading-m"
      description="Includes hospital discharge and care and support afterwards"
    ></nhs-card>
  </nhs-card-group>

  <h2>Thirds</h2>

  <nhs-card-group type="third">
    <nhs-card
      href="#"
      clickable
      heading="5 steps to mental wellbeing"
      heading-classes="nhsuk-heading-m"
      description="Practical advice to help you feel mentally and emotionally better"
    ></nhs-card>
    <nhs-card
      href="#"
      clickable
      heading="Healthy weight"
      heading-classes="nhsuk-heading-m"
      description="Check your BMI using our healthy weight calculator and find out if you're a healthy weight"
    ></nhs-card>
    <nhs-card
      href="#"
      clickable
      heading="Exercise"
      heading-classes="nhsuk-heading-m"
      description="Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
    ></nhs-card>
  </nhs-card-group>

  <h2>Quarters</h2>

  <nhs-card-group type="quarter">
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          91 <span class="nhsuk-u-visually-hidden">Applicants</span>
        </p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
          Applicants
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          23 <span class="nhsuk-u-visually-hidden">Jobs</span>
        </p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
          Jobs
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          8 <span class="nhsuk-u-visually-hidden">Services</span>
        </p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
          Services
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          33 <span class="nhsuk-u-visually-hidden">Messages</span>
        </p>
        <a href="#" class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state">
          Messages
        </a>
      </template>
    </nhs-card>
  </nhs-card-group>
</template>
`,YR=`<template>
  <nhs-contents>
    <nhs-contents-item>What is AMD?</nhs-contents-item>
    <nhs-contents-item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
      Symptoms
    </nhs-contents-item>
    <nhs-contents-item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
      Getting diagnosed
    </nhs-contents-item>
    <nhs-contents-item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
      Treatments
    </nhs-contents-item>
    <nhs-contents-item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
      Living with AMD
    </nhs-contents-item>
  </nhs-contents>
</template>
`,ZR=`<template>
  <nhs-details text="Where can I find my NHS number?">
    <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
    <p>You can find your NHS number on any document sent to you by the NHS. This may include:</p>
    <ul>
      <li>prescriptions</li>
      <li>test results</li>
      <li>hospital referral letters</li>
      <li>appointment letters</li>
      <li>your NHS medical card</li>
    </ul>
    <p>Ask your GP practice for help if you can't find your NHS number.</p>
  </nhs-details>
</template>`,QR=`<template>
  <nhs-dodont title="Do" type="tick" :items="doItems">
  </nhs-dodont>

  <nhs-dodont title="Don't" type="cross" :items="dontItems">
  </nhs-dodont>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      doItems: [
        'cover blisters that are likely to burst with a soft plaster or dressing',
        'wash your hands before touching a burst blister',
        'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
      ],
      dontItems: [
        'do not burst a blister yourself',
        'do not peel the skin off a burst blister',
        'do not pick at the edges of the remaining skin',
        'do not wear the shoes or use the equipment that caused your blister until it heals'
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,XR=`<template>
  <nhs-dodont title="Do" type="tick" :items="doItems">
    <template #item="{item}">
      <a>{{item}}</a>
    </template>
  </nhs-dodont>

  <nhs-dodont title="Don't" type="cross" :items="dontItems">
    <template #item="{item}">
      <a>{{item}}</a>
    </template>
  </nhs-dodont>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      doItems: [
        'cover blisters that are likely to burst with a soft plaster or dressing',
        'wash your hands before touching a burst blister',
        'allow the fluid in a burst blister to drain before covering it with a plaster or dressing'
      ],
      dontItems: [
        'do not burst a blister yourself',
        'do not peel the skin off a burst blister',
        'do not pick at the edges of the remaining skin',
        'do not wear the shoes or use the equipment that caused your blister until it heals'
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,JR=`<template>
  <nhs-error-summary title="There is a problem">
    <p>
      Describe the errors and how to correct them
    </p>
    <nhs-list type="error">
      <li><a href="#example-error-1">Date of birth must be in the past</a></li>
    </nhs-list>
  </nhs-error-summary>
</template>
`,e3=`<template>
  <nhs-body>
    body normal
  </nhs-body>

  <nhs-body size="s">
    body s
  </nhs-body>
</template>
`,n3=`<template>
  Bullet List
  <nhs-list>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Numbered List
  <nhs-list type="number">
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </nhs-list>

  Error List
  <nhs-list type="error">
    <li><router-link to="/components/list">one</router-link></li>
    <li><router-link to="/components/list">two</router-link></li>
    <li><router-link to="/components/list">three</router-link></li>
  </nhs-list>
</template>
`,t3=`<template>
  <nhs-error-text>
    Error message about full name goes here
  </nhs-error-text>
</template>`,s3=`<template>
  <nhs-hint-text>
    It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.
  </nhs-hint-text>
</template>`,r3=`<template>
  <nhs-inset-text>
    <p>
      You can report any suspected side effect to the
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>.
    </p>
  </nhs-inset-text>
</template>`,o3=`<template>
  <nhs-heading size="xl">
    Heading XL
  </nhs-heading>

  <nhs-heading size="l">
    Heading L
  </nhs-heading>

  <nhs-heading size="m">
    Heading M
  </nhs-heading>

  <nhs-heading size="s">
    Heading S
  </nhs-heading>

  <nhs-heading size="xs">
    Heading XS
  </nhs-heading>
</template>
`,a3=`<template>
  <nhs-label>
    National Insurance number
  </nhs-label>
</template>`,i3=`<template>
  <nhs-label size="s">
    National Insurance number
  </nhs-label>
</template>`,l3=`<template>
  <nhs-label page-heading size="xl">
    National Insurance number
  </nhs-label>
</template>`,u3=`<template>
  <nhs-expander text="Opening times">
    <table>
      <tbody>
        <tr>
          <th><strong>Day of the week</strong></th>
          <th><strong>Opening hours</strong></th>
        </tr>
        <tr>
          <th>Monday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Tuesday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Wednesday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Thursday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Friday</th>
          <td>9am to 6pm</td>
        </tr>
        <tr>
          <th>Saturday</th>
          <td>9am to 1pm</td>
        </tr>
        <tr>
          <th>Sunday</th>
          <td>Closed</td>
        </tr>
      </tbody>
    </table>
  </nhs-expander>
</template>`,c3=`<template>
  <nhs-expander-group>
    <nhs-expander text="How to measure your blood glucose levels">
      <p>Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better.</p>
      <p>You would have been given:</p>
      <ul>
        <li>a blood glucose metre</li>
        <li>small needles called lancets</li>
        <li>a plastic pen to hold the lancest</li>
        <li>small test strips</li>
      </ul>
    </nhs-expander>
    <nhs-expander text="When to check your blood glucose level">
      <p>Try to check your blood:</p>
      <ul>
        <li>before meals</li>
        <li>2 to 3 hours after meals</li>
        <li>before, during (take a break) and after exercise</li>
      </ul>
      <p>This helps you understand your blood glucose levels and how they\u2019re affected by meals and exercise. It should help you have more stable blood glucose levels.</p>
    </nhs-expander>
  </nhs-expander-group>
</template>`,d3=`<template>
  <nhs-fieldset legend="What is your address?">
  </nhs-fieldset>
</template>`,h3=`<template>
  <nhs-fieldset
    legend="What is your address?"
    page-heading size="xl"
  >
  </nhs-fieldset>
</template>`,p3=`<template>
  <nhs-fieldset
    legend="What is your address?"
    page-heading size="xl"
  >
    <nhs-input
      label="Address line 1"
      v-model="addressOne"
    ></nhs-input>
    <nhs-input
      label="Address line 2"
      v-model="addressTwo"
    ></nhs-input>
    <nhs-input
      label="Town or city"
      v-model="city"
    ></nhs-input>
    <nhs-input
      label="County"
      v-model="country"
    ></nhs-input>
  </nhs-fieldset>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      addressOne: '',
      addressTwo: '',
      city: '',
      country: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,m3=`<template>
  <nhs-fieldset
    legend="What is your address?"
  >
    <template #legend="{legend}">
      <a>{{legend}}</a>
    </template>
    <p>body text</p>
  </nhs-fieldset>
</template>
`,f3=`<template>
  <nhs-footer>
    <nhs-footer-item href="https://www.nhs.uk/Pages/nhs-sites.aspx">
      Accessibility statement
    </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/about-us">
      Contact us
    </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/contact-us/">
      Cookies
    </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/about-us/sitemap/">
      Privacy policy
    </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/our-policies/">
      Terms and conditions
    </nhs-footer-item>
  </nhs-footer>
</template>
`,_3=`<template>
  <h4 class="nhsuk-u-margin-bottom-0">Full width (100%)</h4>
  <nhs-row>
    <nhs-col>
      <p>:span="100"</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Halves (50%)</h4>
  <nhs-row>
    <nhs-col :span="50">
      <p>:span="50"</p>
    </nhs-col>
    <nhs-col :span="50">
      <p>:span="50"</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Thirds (33%)</h4>
  <nhs-row>
    <nhs-col :span="66">
      <p>:span="66"</p>
    </nhs-col>
    <nhs-col :span="33">
      <p>:span="33"</p>
    </nhs-col>
  </nhs-row>
  <nhs-row>
    <nhs-col :span="33">
      <p>:span="33"</p>
    </nhs-col>
    <nhs-col :span="66">
      <p>:span="66"</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4 ">Quarters (25%)</h4>
  <nhs-row>
    <nhs-col :span="75">
      <p>:span="75"</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>:span="25"</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>:span="25"</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>:span="25"</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>:span="25"</p>
    </nhs-col>
    <nhs-col :span="25">
      <p>:span="25"</p>
    </nhs-col>
  </nhs-row>
</template>

<style scoped>
  p {
    background: #005eb8;
    padding: 10px;
    color: #ffffff;
  }
</style>
`,g3=`<template>
  <nhs-hero
    heading="We\u2019re here for you"
    text="Helping you take control of your health and wellbeing."
  >
  </nhs-hero>
</template>`,b3=`<template>
  <nhs-hero
    image-url="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  >
  </nhs-hero>
</template>`,v3=`<template>
  <nhs-hero
    heading="We\u2019re here for you"
    text="Helping you take control of your health and wellbeing."
    image-url="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  >
  </nhs-hero>
</template>
`,y3=`<template>
  <nhs-image
    src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg"
    alt="Picture of allergic conjunctivitis"
    srcset="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w"
    sizes="(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw"
  >
    Itchy, red, watering eyes
  </nhs-image>

  <nhs-image
    src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg"
    alt="Picture of allergic conjunctivitis"
  ></nhs-image>
</template>
`,$3=`<template>
  <ol class="nhsuk-list">
    <li v-for="(panel, index) in listPanels" :key="\`panel-\${index}\`">
      <nhs-list-panel
        :label="panel.label" :message="panel.message"
        back-to-top :disabled="panel.disabled"
      >
        <nhs-list-panel-item
          v-for="(item, index) in panel.items"
          :key="\`panel-\${panel.label}-\${index}\`"
          :href="item.href"
        >
          {{item.text}}
        </nhs-list-panel-item>
      </nhs-list-panel>
    </li>
  </ol>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      listPanels: [
        {
          label: 'A',
          items: [
            {
              text: 'AAA',
              href: 'http://localhost:3000/conditions/abdominal-aortic-aneurysm/'
            },
            {
              text: 'Abdominal aortic aneurysm',
              href: 'http://localhost:3000/conditions/abdominal-aortic-aneurysm/'
            },
            {
              text: 'Abscess',
              href: 'http://localhost:3000/conditions/abscess/'
            }
          ]
        },
        {
          label: 'B',
          disabled: true,
          message: 'There are currently no conditions listed'
        },
        {
          label: 'C',
          items: [
            {
              text: 'Chest pain',
              href: 'http://localhost:3000/conditions/chest-pain/'
            },
            {
              text: 'Cold sore',
              href: 'http://localhost:3000/conditions/cold-sores/'
            }
          ]
        },
        {
          label: 'D',
          items: [
            {
              text: 'Dandruff',
              href: 'http://localhost:3000/conditions/dandruff/'
            },
            {
              text: 'Dementia',
              href: 'http://localhost:3000/conditions/dementia/'
            },
            {
              text: 'Dental pain',
              href: 'http://localhost:3000/conditions/toothache/'
            }
          ]
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,k3=`<template>
  <nhs-nav-az>
    <nhs-nav-az-item v-for="item in items" :key="\`nav-\${item.label}\`" :disabled="item.disabled">
      {{item.label}}
    </nhs-nav-az-item>
  </nhs-nav-az>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'A'
        },
        {
          label: 'B',
          disabled: true
        },
        {
          label: 'C'
        },
        {
          label: 'D'
        },
        {
          label: 'E'
        },
        {
          label: 'F'
        },
        {
          label: 'G'
        },
        {
          label: 'H'
        },
        {
          label: 'I'
        },
        {
          label: 'J'
        },
        {
          label: 'K'
        },
        {
          label: 'L'
        },
        {
          label: 'M'
        },
        {
          label: 'N'
        },
        {
          label: 'O'
        },
        {
          label: 'P'
        },
        {
          label: 'Q'
        },
        {
          label: 'R'
        },
        {
          label: 'S'
        },
        {
          label: 'T'
        },
        {
          label: 'U'
        },
        {
          label: 'V'
        },
        {
          label: 'W'
        },
        {
          label: 'X'
        },
        {
          label: 'Y'
        },
        {
          label: 'Z'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,w3=`<template>
  <nhs-pagination
    previous-href="http://localhost:3000/section/treatments" previous-page="Treatments"
    next-href="http://localhost:3000/section/symptoms" next-page="Symptoms"
  ></nhs-pagination>
</template>`,S3=`<template>
  <nhs-review-date
    last-review="12 February 2016"
    next-review="1 February 2019"
  ></nhs-review-date>
</template>`,x3=`<template>
  <nhs-main>
    <nhs-row>
      <nhs-col :span="66">
        <p>To view the skip link component, press tab or navigate to the next element.</p>
        <nhs-skip-link>Skip to main content</nhs-skip-link>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>`,C3=`<template>
  <nhs-summary-list :data="data">
    <template #item="{item}">
      <nhs-summary-list-item type="key">{{item.key}}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
      <nhs-summary-list-item type="actions">
        <router-link :to="item.action">Change</router-link>
      </nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          key: 'Name',
          value: 'Sarah Philips',
          action: '#'
        },
        {
          key: 'Date of birth',
          value: '5 January 1978',
          action: '#'
        },
        {
          key: 'Contact information',
          value: '72 Guild Street<br>London<br>SE23 6FH',
          action: '#'
        },
        {
          key: 'Contact details',
          value: '<p>07700 900457</p><p>sarah.philips@example.com</p>',
          action: '#'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,E3=`<template>
  <nhs-summary-list :data="data">
    <template #item="{item}">
      <nhs-summary-list-item type="key">{{item.key}}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          key: 'Name',
          value: 'Sarah Philips',
          action: '#'
        },
        {
          key: 'Date of birth',
          value: '5 January 1978',
          action: '#'
        },
        {
          key: 'Contact information',
          value: '72 Guild Street<br>London<br>SE23 6FH',
          action: '#'
        },
        {
          key: 'Contact details',
          value: '<p>07700 900457</p><p>sarah.philips@example.com</p>',
          action: '#'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,R3=`<template>
  <nhs-summary-list :data="data" :border="false">
    <template #item="{item}">
      <nhs-summary-list-item type="key">{{item.key}}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          key: 'Name',
          value: 'Sarah Philips',
          action: '#'
        },
        {
          key: 'Date of birth',
          value: '5 January 1978',
          action: '#'
        },
        {
          key: 'Contact information',
          value: '72 Guild Street<br>London<br>SE23 6FH',
          action: '#'
        },
        {
          key: 'Contact details',
          value: '<p>07700 900457</p><p>sarah.philips@example.com</p>',
          action: '#'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,T3=`<template>
  <nhs-table
    :headers="headers"
    :data="items"
    :responsive="false"
  >
    <template #item.classname="{item}">
      <code>{{item.classname}}</code>
    </template>

    <template #item.tag="{item}">
      <nhs-tag :color="item.tag">{{item.tagText}}</nhs-tag>
    </template>
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      headers: [
        {
          text: 'Class name',
          value: 'classname'
        },
        {
          text: 'Tag',
          value: 'tag',
          style: 'width: 120px'
        }
      ],
      items: [
        {
          classname: 'nhsuk-tag',
          tag: '',
          tagText: 'Active'
        },
        {
          classname: 'nhsuk-tag--white',
          tag: 'white',
          tagText: 'Started'
        },
        {
          classname: 'nhsuk-tag--grey',
          tag: 'grey',
          tagText: 'Not started'
        },
        {
          classname: 'nhsuk-tag--green',
          tag: 'green',
          tagText: 'New'
        },
        {
          classname: 'nhsuk-tag--aqua-green',
          tag: 'aqua-green',
          tagText: 'Active'
        },
        {
          classname: 'nhsuk-tag--blue',
          tag: 'blue',
          tagText: 'Pending'
        },
        {
          classname: 'nhsuk-tag--purple',
          tag: 'purple',
          tagText: 'Received'
        },
        {
          classname: 'nhsuk-tag--pink',
          tag: 'pink',
          tagText: 'Sent'
        },
        {
          classname: 'nhsuk-tag--red',
          tag: 'red',
          tagText: 'Rejected'
        },
        {
          classname: 'nhsuk-tag--orange',
          tag: 'orange',
          tagText: 'Declined'
        },
        {
          classname: 'nhsuk-tag--yellow',
          tag: 'yellow',
          tagText: 'Delayed'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,I3=`<template>
  <nhs-warning-callout
    heading="Important"
  >
    <p>
      If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help.
    </p>
  </nhs-warning-callout>
</template>
`,N3=`<template>
  <nhs-warning-callout
    heading="School, nursery or work"
  >
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.
    </p>
  </nhs-warning-callout>
</template>
`,A3=`<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Skin symptoms and possible causes"
    :responsive="false"
  >
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          symptoms: 'Blisters on lips or around the mouth',
          cause: 'cold sores'
        },
        {
          symptoms: 'Itchy, dry, cracked, sore',
          cause: 'eczema'
        },
        {
          symptoms: 'Itchy blisters',
          cause: 'shingles, chickenpox'
        }
      ],
      headers: [
        {
          text: 'Skin symptoms',
          value: 'symptoms'
        },
        {
          text: 'Possible cause',
          value: 'cause'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,M3=`<template>
  <nhs-table
    :headers="headers"
    :data="data"
    heading="Conditions similar to impetigo"
    :responsive="false"
  >
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          symptoms: 'Blisters on lips or around the mouth',
          cause: 'cold sores'
        },
        {
          symptoms: 'Itchy, dry, cracked, sore',
          cause: 'eczema'
        },
        {
          symptoms: 'Itchy blisters',
          cause: 'shingles, chickenpox'
        }
      ],
      headers: [
        {
          text: 'Symptoms',
          value: 'symptoms'
        },
        {
          text: 'Possible cause',
          value: 'cause'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,O3=`<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Ibuprofen syrup dosages for children"
  >
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          age: '3 to 5 months (weighing more than 5kg)',
          howMuch: '2.5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '6 to 11 months',
          howMuch: '2.5l',
          howOften: 'Max 3 to 4 times in 24 hours'
        },
        {
          age: '1 to 3 years',
          howMuch: '5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '4 to 6 years',
          howMuch: '7.5ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '7 to 9 years',
          howMuch: '10ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '10 to 11 years',
          howMuch: '15ml',
          howOften: 'Max 3 times in 24 hours'
        },
        {
          age: '12 to 17 years',
          howMuch: '15ml to 20ml',
          howOften: 'Max 3 to 4 times in 24 hours'
        }
      ],
      headers: [
        {
          text: 'Age',
          value: 'age'
        },
        {
          text: 'How much?',
          value: 'howMuch'
        },
        {
          text: 'How often?',
          value: 'howOften'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,H3=`<template>
  <nhs-input
    label="National Insurance number"
    v-model="model"
  ></nhs-input>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,P3=`<template>
  <nhs-input
    label="Postcode"
    autocomplete="postal-code"
    v-model="model"
  ></nhs-input>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,L3=`<template>
  <nhs-input
    label="National insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,B3=`<template>
  <nhs-input
    label="National Insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    :rules="rules"
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [
        (v: string) => !!v || 'Error message goes here'
      ],
      model: ''
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,D3=`<template>
  <nhs-input
    label="National insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    width="10"
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,q3=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-input
      label="National Insurance number"
      hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
      :rules="rules" v-model="model"
    >
      <template #label="{label}">
        <h1>{{label}}</h1>
      </template>

      <template #hint="{hint}">
        <a>{{hint}}</a>
      </template>

      <template #error="{error}">
        <h2>{{error}}</h2>
      </template>
    </nhs-input>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        Form valid: {{valid}}
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [
        (v: string) => !!v || 'Error message goes here'
      ],
      model: '',
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,V3=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-input
      label="National Insurance number"
      hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
      :rules="rules" v-model="model"
    >
    </nhs-input>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        Form valid: {{valid}}
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [
        (v: string) => !!v || 'Error message goes here'
      ],
      model: '',
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,U3=`<template>
  <nhs-select
    label="Label text goes here"
    v-model="model"
  >
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option disabled>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 2'
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,F3=`<template>
  <nhs-select
    label="Label text goes here"
    hint="Hint text goes here"
    v-model="model"
    :rules="rules"
  >
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [
        (v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here'
      ]
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function): void {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,z3=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-select
      label="Label text goes here"
      hint="Hint text goes here"
      v-model="model"
      :rules="rules"
    >
      <option>NHS.UK frontend option 1</option>
      <option>NHS.UK frontend option 2</option>
      <option>NHS.UK frontend option 3</option>

      <template #label="{label}">
        <h1>{{label}}</h1>
      </template>

      <template #hint="{hint}">
        <a>{{hint}}</a>
      </template>

      <template #error="{error}">
        <h2>{{error}}</h2>
      </template>
    </nhs-select>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Submit</nhs-button>
      </nhs-col>
       <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        Form valid: {{valid}}
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [
        (v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here'
      ],
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('success submission')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,j3=`<template>
  <nhs-textarea
    label="Can you provide more detail?"
    hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,W3=`<template>
  <nhs-textarea
    label="Full address"
    autocomplete="street-address"
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,K3=`<template>
  <nhs-textarea
    label="Why can't you provide a National Insurance number?"
    :rules="rules" v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [
        (v: string) => !!v || 'You must provide an explanation'
      ]
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(itemId: string, validator: Function): void {
      _itemId = itemId
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,G3=`<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-textarea
      label="Why can't you provide a National Insurance number?"
      hint="Hint text"
      :rules="rules" v-model="model"
    >
      <template #label="{label}">
        <h1>{{label}}</h1>
      </template>

      <template #hint="{hint}">
        <h2>{{hint}}</h2>
      </template>

      <template #error="{error}">
        <h3>{{error}}</h3>
      </template>
    </nhs-textarea>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Submit</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [
        (v: string) => !!v || 'You must provide an explanation'
      ],
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('success submission')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,Y3=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number'
        },
        {
          label: 'Month',
          width: '2',
          type: 'number'
        },
        {
          label: 'Year',
          width: '4',
          type: 'number'
        }
      ],
      model: {}
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,Z3=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          autocomplete: 'bday-day'
        },
        {
          label: 'Month',
          width: '2',
          type: 'number',
          autocomplete: 'bday-month'
        },
        {
          label: 'Year',
          width: '4',
          type: 'number',
          autocomplete: 'bday-year'
        }
      ],
      model: {}
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,Q3=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [
            (v: string) => !!v || 'Error message goes here'
          ]
        },
        {
          label: 'Month',
          width: '2',
          type: 'number'
        },
        {
          label: 'Year',
          width: '4',
          type: 'number'
        }
      ],
      model: {}
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,X3=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model" ref="input"
  ></nhs-input-group>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [
            (v: string) => !!v || 'Error message goes here'
          ]
        },
        {
          label: 'Month',
          width: '2',
          type: 'number',
          rules: [
            (v: string) => !!v || 'Error message goes here'
          ]
        },
        {
          label: 'Year',
          width: '4',
          type: 'number',
          rules: [
            (v: string) => !!v || 'Error message goes here'
          ]
        }
      ],
      model: {}
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,J3=`<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-input-group
      label="What is your date of birth?"
      hint="For example, 31 3 1980"
      :items="items" v-model="model" ref="input"
    >
      <template #hint="{hint}">
        <a>{{hint}}</a>
      </template>

      <template #error="{error}">
        {{error}}
      </template>

      <template #item-label="{item}">
        {{item}}
      </template>
    </nhs-input-group>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <p>form valid: {{valid}}</p>
        <p>model value: {{model}}</p>
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [
            (v: string) => !!v || 'Error message goes here'
          ]
        },
        {
          label: 'Month',
          width: '2',
          type: 'number'
        },
        {
          label: 'Year',
          width: '4',
          type: 'number'
        }
      ],
      model: {},
      valid: false
    })

    function onSubmit() {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset() {
      state.model = {}
    }

    return {...toRefs(state), onReset, onSubmit}
  }
})
<\/script>
`,eT=`<template>
  <nhs-radios
    :items="items" v-model="model"
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'no',
      items: [
        {
          label: 'Yes',
          value: 'yes'
        },
        {
          label: 'No',
          value: 'no'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,nT=`<template>
  <nhs-radios
    :items="items" v-model="model" inline
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: 'no',
        items: [
          {
            label: 'Yes',
            value: 'yes'
          },
          {
            label: 'No',
            value: 'no'
          }
        ]
      }
    }
  }
<\/script>`,tT=`<template>
  <nhs-radios
    :items="items" v-model="model" disabled
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      items: [
        {
          label: 'Yes',
          value: 'yes'
        },
        {
          label: 'No',
          value: 'no'
        }
      ]
    })
    return {...toRefs(state)}
  }
})
<\/script>
`,sT=`<template>
  <nhs-radios
    label="How do you want to sign in?" heading-size="l"
    :items="items" v-model="model"
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      items: [
        {
          label: 'Use Government Gateway',
          value: 'gov'
        },
        {
          label: 'Use NHS.UK login',
          value: 'login'
        },
        {
          divider: 'or'
        },
        {
          label: 'Create an account',
          value: 'create'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,rT=`<template>
  <nhs-radios
    label="How do you want to sign in?" page-heading
    :items="items" v-model="model" heading-size="l"
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: '',
        items: [
          {
            label: 'Sign in with Government Gateway',
            value: 'gov',
            hint: 'You\\'ll have a user ID if you\\'ve registered for self assessment or filed a tax return online before.'
          },
          {
            label: 'Sign in with NHS.UK login',
            value: 'login',
            hint: 'You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.'
          }
        ]
      }
    }
  }
<\/script>`,oT=`<template>
  <nhs-radios
    :items="items" v-model="model"
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: '',
        items: [
          {
            label: 'Red',
            value: 'red'
          },
          {
            label: 'Green',
            value: 'green'
          },
          {
            label: 'Blue',
            value: 'blue'
          }
        ]
      }
    }
  }
<\/script>`,aT=`<template>
  <nhs-radios
    :items="items" v-model="model"
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
    :rules="rules" ref="radios"
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'no',
      items: [
        {
          label: 'Yes',
          value: 'yes'
        },
        {
          label: 'No',
          value: 'no'
        }
      ],
      rules: [
        (v: string) => v != 'no' || 'Please select an option'
      ]
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,iT=`<template>
  <nhs-radios
    :items="items" v-model="model"
    label="How would you prefer to be contacted?" heading-size="l"
    hint="Select one option."
    id="contact"
    page-heading
  >
    <template #item-conditional="{item}">
      <nhs-input :label="item.conditionalProps.label" class="nhsuk-u-width-two-thirds" v-model="inputModels[item.value]"></nhs-input>
    </template>
  </nhs-radios>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      model: 'email',
      items: [
        {
          label: 'Email',
          value: 'email',
          conditionalProps: {
            label: 'Email address'
          },
          conditional: true
        },
        {
          label: 'Phone',
          value: 'phone',
          conditionalProps: {
            label: 'Phone number'
          },
          conditional: true
        },
        {
          label: 'Text message',
          value: 'text',
          conditionalProps: {
            label: 'Mobile phone number'
          },
          conditional: true
        }
      ],
      inputModels: {
        email: '',
        phone: '',
        text: ''
      }
    }
  }
})
<\/script>
`,lT=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-radios
      :items="items" v-model="model"
      label="Have you changed your name?"
      hint="This includes changing your last name or spelling your name differently."
      :rules="rules" ref="radios"
    >
      <template #item-label="{item}">
        <h3>{{item}}</h3>
      </template>

      <template #item-hint="{item}">
        <a>{{item}}</a>
      </template>

      <template #hint="{hint}">
        <h2>{{hint}}</h2>
      </template>

      <template #error="{error}">
        <h2>{{error}}</h2>
      </template>
    </nhs-radios>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        Form valid: {{valid}}
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      items: [
        {
          label: 'Yes',
          value: 'yes',
          hint: 'hint text'
        },
        {
          label: 'No',
          value: 'no'
        },
        {
          divider: 'or'
        },
        {
          label: 'Maybe',
          value: 'maybe'
        }
      ],
      rules: [
        (v: string) => !!v || 'Please select an option'
      ],
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset(): void {
      state.model = ''
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,uT=`<template>
  <nhs-care-card heading="Speak to a GP if:">
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
  </nhs-care-card>
</template>
`,cT=`<template>
  <nhs-care-card heading="Ask for an urgent GP appointment if:" type="urgent">
    <ul>
      <li>you're an adult and have chickenpox</li>
      <li>you're pregnant and haven't had chickenpox before and you've been near someone with it </li>
      <li>you have a weakened immune system and you've been near someone with chickenpox</li>
      <li>you think your newborn baby has chickenpox</li>
    </ul>
    <p>In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.</p>
  </nhs-care-card>
</template>`,dT=`<template>
  <nhs-care-card heading="Call 999 if you have sudden chest pain that:" type="emergency">
    <ul>
      <li>spreads to your arms, back, neck or jaw</li>
      <li>makes your chest feel tight or heavy</li>
      <li>also started with shortness of breath, sweating and feeling or being sick</li>
    </ul>
    <p>You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital.</p>
  </nhs-care-card>
</template>
`;const hT={CareCardNonUrgent:uT,CareCardUrgent:cT,CareCardEmergency:dT};var pT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model" heading-size="m"
    label="What is your nationality?"
    hint="If you have more than 1 nationality, select all options that are relevant to you."
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'British',
          value: 'british'
        },
        {
          label: 'Irish',
          value: 'irish'
        },
        {
          label: 'citizen of another country',
          value: 'other'
        }
      ],
      model: []
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,mT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model" page-heading
    label="How do you want to sign in?" heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Sign in with Government Gateway',
          hint: 'You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before.',
          value: 'gov'
        },
        {
          label: 'Sign in with NHS.UK login',
          hint: 'You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.',
          value: 'login'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,fT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Red',
          value: 'red'
        },
        {
          label: 'Green',
          value: 'green'
        },
        {
          label: 'Blue',
          value: 'blue',
          disabled: true
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,_T=`<template>
  <nhs-checkboxes
    :items="items" v-model="model" page-heading
    label="Which types of waste do you transport regularly?"
    hint="Select all that apply." heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Waste from animal carcasses',
          value: 'animal'
        },
        {
          label: 'Waste from mines or quarries',
          value: 'mines'
        },
        {
          label: 'Farm or agricultural waste',
          value: 'farm'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,gT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model" :rules="rules" heading-size="m"
    label="Which types of waste do you transport regularly?"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Waste from animal carcasses',
          value: 'animal'
        },
        {
          label: 'Waste from mines or quarries',
          value: 'mines'
        },
        {
          label: 'Farm or agricultural waste',
          value: 'farm'
        }
      ],
      rules: [
        (v: Array<string>) => v.length > 0 || 'Please select an option'
      ]
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,bT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
    id="contact"
    page-heading
  >
    <template #item-conditional="{item}">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModel[item.conditional.value]"
      ></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Email',
          value: 'email',
          conditionalProps: {
            label: 'Email address'
          },
          conditional: true
        },
        {
          label: 'Phone',
          value: 'phone',
          conditionalProps: {
            label: 'Phone number'
          },
          conditional: true
        },
        {
          label: 'Text message',
          value: 'text',
          conditionalProps: {
            label: 'Mobile phone number'
          },
          conditional: true
        }
      ],
      model: [],
      inputModel: {
        email: '',
        phone: '',
        text: ''
      }
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,vT=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-checkboxes
      :items="items" v-model="model"
      label="What is your nationality?"
      hint="If you have more than 1 nationality, select all options that are relevant to you."
      ref="checkbox" :rules="rules"
    >

      <template #hint="{hint}">
        <a>{{hint}}</a>
      </template>

      <template #item-label="{item}">
        <h3>{{item}}</h3>
      </template>

    </nhs-checkboxes>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        Form valid: {{valid}}
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'British',
          value: 'british'
        },
        {
          label: 'Irish',
          value: 'irish'
        },
        {
          label: 'citizen of another country',
          value: 'other'
        }
      ],
      model: [],
      rules: [
        (v: Array<string>) => v.length > 0 || 'Please select an option'
      ],
      valid: false
    })

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset(): void {
      state.model = []
    }

    return {...toRefs(state), onSubmit, onReset}
  }
})
<\/script>
`,yT=`<template>
  <nhs-checkboxes
    :items="items" v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
    id="contact"
    page-heading
  >
    <template #item-conditional="{item}">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModel[item.conditional.value]"
      ></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Email',
          value: 'email',
          conditionalProps: {
            label: 'Email address'
          },
          conditional: true
        },
        {
          label: 'Phone',
          value: 'phone',
          conditionalProps: {
            label: 'Phone number'
          },
          conditional: true
        },
        {
          label: 'Text message',
          value: 'text',
          conditionalProps: {
            label: 'Mobile phone number'
          },
          conditional: true
        },
        {
          divider: 'or'
        },
        {
          label: 'None of the above',
          value: 'none'
        },
      ],
      model: [],
      inputModel: {
        email: '',
        phone: '',
        text: ''
      }
    })

    return {...toRefs(state)}
  }
})
<\/script>
`;const $T={Checkbox:pT,CheckboxHint:mT,CheckboxDisabled:fT,CheckboxHeading:_T,CheckboxError:gT,CheckboxConditional:bT,CheckboxSlots:vT,CheckboxNonOfAbove:yT};var kT=`<template>
  <nhs-header show-nav show-search>
    <nhs-header-item href="https://www.nhs.uk/conditions">
      Health A-Z
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/live-well/">
      Live Well
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Mental health
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Care and support
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/news/">
      Pregnancy
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/service-search">
      NHS services
    </nhs-header-item>
  </nhs-header>
</template>
`,wT=`<template>
  <nhs-header
    :service="service" transactional
  ></nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Register with a GP',
        href: '/'
      }
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,ST=`<template>
  <nhs-header show-nav show-search :organisation="organisation">
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    })

    return {...toRefs(state)}
  }
})
<\/script>
`,xT=`<template>
  <nhs-header show-nav show-search :organisation="organisation" white-header white-nav>
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    })

    return {...toRefs(state)}
  }
})
<\/script>
`;const CT={Header:kT,HeaderTransactionalName:wT,HeaderOrg:ST,HeaderOrgWhiteNav:xT},ET=xe(K(xe(K(xe(K({ButtonDocs:DR,ButtonDocsDisabled:qR,ActionLink:VR,BackLink:UR,Breadcrumb:FR,CardBasic:zR,CardClickable:jR,CardImage:WR,CardFeature:KR,CardGroup:GR},hT),{ContentsList:YR,Details:ZR,DoDont:QR,DoDontSlots:XR,ErrorSummary:JR,Body:e3,List:n3,ErrorText:t3,HintText:s3,InsetText:r3,Heading:o3,Label:a3,LabelBold:i3,LabelHeading:l3,Expander:u3,ExpanderGroup:c3,Fieldset:d3,FieldsetHeading:h3,FieldsetInput:p3,FieldsetSlots:m3,Footer:f3,Grid:_3}),CT),{Hero:g3,HeroImage:b3,HeroImageText:v3,Image:y3,ListPanel:$3,NavAZ:k3,Pagination:w3,ReviewDate:S3,SkipLink:x3,SummaryList:C3,SummaryListNoAction:E3,SummaryListNoBorder:R3,Tag:T3,WarningCallout:I3,WarningCalloutNonImportant:N3,Table:A3,TablePanel:M3,TableResponsive:O3,Input:H3,InputAutocomplete:P3,InputHint:L3,InputError:B3,InputWidth:D3,InputSlots:q3,Form:V3,Select:U3,SelectError:F3,SelectSlots:z3,Textarea:j3,TextareaAutocomplete:W3,TextareaError:K3,TextareaSlots:G3,DateInput:Y3,DateInputAutocomplete:Z3,DateInputError:Q3,DateInputErrorMulti:X3,DateInputSlots:J3}),$T),{Radio:eT,RadioInline:nT,RadioDisabled:tT,RadioDivider:sT,RadioHint:rT,RadioNoHeading:oT,RadioError:aT,RadioConditional:iT,RadioSlots:lT}),RT=new RegExp("(?:\\<template\\>\\n)([^]+)(?:\\<\\/template\\>)","i"),TT=new RegExp('(?:\\<script lang="ts"\\>\\n)([^]+)(?:\\<\\/script\\>)',"i");function gu(e,n){const t=n.exec(e);return t?t[1]:""}function IT(e){return gu(e,RT).split(`
`).map(t=>t.replace(/^ {2}/,"")).join(`
`)}function NT(e){const n=ET[e];return{templateCode:IT(n),scriptCode:gu(n,TT)}}const AT=y({setup(){function e(n){alert(n)}return{clickHandler:e}}}),MT=w(" Primary Button "),OT=w(" Secondary Button "),HT=w(" Reverse Button ");function PT(e,n,t,s,r,a){const o=d("nhs-button");return c(),k(D,null,[u(o,{onClick:n[0]||(n[0]=i=>e.clickHandler("primary"))},{default:h(()=>[MT]),_:1}),u(o,{color:"secondary",onClick:n[1]||(n[1]=i=>e.clickHandler("secondary"))},{default:h(()=>[OT]),_:1}),u(o,{color:"reverse",onClick:n[2]||(n[2]=i=>e.clickHandler("reverse"))},{default:h(()=>[HT]),_:1})],64)}var LT=g(AT,[["render",PT]]);const BT={},DT=w(" Primary Button Disabled "),qT=w(" Secondary Button Disabled "),VT=w(" Reverse Button Disabled ");function UT(e,n){const t=d("nhs-button");return c(),k(D,null,[u(t,{disabled:""},{default:h(()=>[DT]),_:1}),u(t,{color:"secondary",disabled:""},{default:h(()=>[qT]),_:1}),u(t,{color:"reverse",disabled:""},{default:h(()=>[VT]),_:1})],64)}var FT=g(BT,[["render",UT]]);const zT=y({setup(){const e=Y({doItems:["cover blisters that are likely to burst with a soft plaster or dressing","wash your hands before touching a burst blister","allow the fluid in a burst blister to drain before covering it with a plaster or dressing"],dontItems:["do not burst a blister yourself","do not peel the skin off a burst blister","do not pick at the edges of the remaining skin","do not wear the shoes or use the equipment that caused your blister until it heals"]});return K({},J(e))}});function jT(e,n,t,s,r,a){const o=d("nhs-dodont");return c(),k(D,null,[u(o,{title:"Do",type:"tick",items:e.doItems},{item:h(({item:i})=>[_("a",null,I(i),1)]),_:1},8,["items"]),u(o,{title:"Don't",type:"cross",items:e.dontItems},{item:h(({item:i})=>[_("a",null,I(i),1)]),_:1},8,["items"])],64)}var WT=g(zT,[["render",jT]]);const KT={},GT=w(" body normal "),YT=w(" body s ");function ZT(e,n){const t=d("nhs-body");return c(),k(D,null,[u(t,null,{default:h(()=>[GT]),_:1}),u(t,{size:"s"},{default:h(()=>[YT]),_:1})],64)}var QT=g(KT,[["render",ZT]]);const XT={},JT=w(" Bullet List "),eI=_("li",null,"one",-1),nI=_("li",null,"two",-1),tI=_("li",null,"three",-1),sI=w(" Numbered List "),rI=_("li",null,"one",-1),oI=_("li",null,"two",-1),aI=_("li",null,"three",-1),iI=w(" Error List "),lI=w("one"),uI=w("two"),cI=w("three");function dI(e,n){const t=d("nhs-list"),s=d("router-link");return c(),k(D,null,[JT,u(t,null,{default:h(()=>[eI,nI,tI]),_:1}),sI,u(t,{type:"number"},{default:h(()=>[rI,oI,aI]),_:1}),iI,u(t,{type:"error"},{default:h(()=>[_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[lI]),_:1})]),_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[uI]),_:1})]),_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[cI]),_:1})])]),_:1})],64)}var hI=g(XT,[["render",dI]]);const pI={},mI=w(" Heading XL "),fI=w(" Heading L "),_I=w(" Heading M "),gI=w(" Heading S "),bI=w(" Heading XS ");function vI(e,n){const t=d("nhs-heading");return c(),k(D,null,[u(t,{size:"xl"},{default:h(()=>[mI]),_:1}),u(t,{size:"l"},{default:h(()=>[fI]),_:1}),u(t,{size:"m"},{default:h(()=>[_I]),_:1}),u(t,{size:"s"},{default:h(()=>[gI]),_:1}),u(t,{size:"xs"},{default:h(()=>[bI]),_:1})],64)}var yI=g(pI,[["render",vI]]);const $I={},kI=_("p",null,"body text",-1);function wI(e,n){const t=d("nhs-fieldset");return c(),S(t,{legend:"What is your address?"},{legend:h(({legend:s})=>[_("a",null,I(s),1)]),default:h(()=>[kI]),_:1})}var SI=g($I,[["render",wI]]);const xI={},Fe=e=>(Pa("data-v-ad0936a2"),e=e(),La(),e),CI=Fe(()=>_("h4",{class:"nhsuk-u-margin-bottom-0"},"Full width (100%)",-1)),EI=Fe(()=>_("p",null,':span="100"',-1)),RI=Fe(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Halves (50%)",-1)),TI=Fe(()=>_("p",null,':span="50"',-1)),II=Fe(()=>_("p",null,':span="50"',-1)),NI=Fe(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Thirds (33%)",-1)),AI=Fe(()=>_("p",null,':span="66"',-1)),MI=Fe(()=>_("p",null,':span="33"',-1)),OI=Fe(()=>_("p",null,':span="33"',-1)),HI=Fe(()=>_("p",null,':span="66"',-1)),PI=Fe(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Quarters (25%)",-1)),LI=Fe(()=>_("p",null,':span="75"',-1)),BI=Fe(()=>_("p",null,':span="25"',-1)),DI=Fe(()=>_("p",null,':span="25"',-1)),qI=Fe(()=>_("p",null,':span="25"',-1)),VI=Fe(()=>_("p",null,':span="25"',-1)),UI=Fe(()=>_("p",null,':span="25"',-1));function FI(e,n){const t=d("nhs-col"),s=d("nhs-row");return c(),k(D,null,[CI,u(s,null,{default:h(()=>[u(t,null,{default:h(()=>[EI]),_:1})]),_:1}),RI,u(s,null,{default:h(()=>[u(t,{span:50},{default:h(()=>[TI]),_:1}),u(t,{span:50},{default:h(()=>[II]),_:1})]),_:1}),NI,u(s,null,{default:h(()=>[u(t,{span:66},{default:h(()=>[AI]),_:1}),u(t,{span:33},{default:h(()=>[MI]),_:1})]),_:1}),u(s,null,{default:h(()=>[u(t,{span:33},{default:h(()=>[OI]),_:1}),u(t,{span:66},{default:h(()=>[HI]),_:1})]),_:1}),PI,u(s,null,{default:h(()=>[u(t,{span:75},{default:h(()=>[LI]),_:1}),u(t,{span:25},{default:h(()=>[BI]),_:1}),u(t,{span:25},{default:h(()=>[DI]),_:1}),u(t,{span:25},{default:h(()=>[qI]),_:1}),u(t,{span:25},{default:h(()=>[VI]),_:1}),u(t,{span:25},{default:h(()=>[UI]),_:1})]),_:1})],64)}var zI=g(xI,[["render",FI],["__scopeId","data-v-ad0936a2"]]);const jI=y({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:"",valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),WI=w("Validate"),KI=w("Reset");function GI(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},{label:h(({label:m})=>[_("h1",null,I(m),1)]),hint:h(({hint:m})=>[_("a",null,I(m),1)]),error:h(({error:m})=>[_("h2",null,I(m),1)]),_:1},8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[WI]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[KI]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[w(" Form valid: "+I(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var YI=g(jI,[["render",GI]]);const ZI=y({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:"",valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),QI=w("Validate"),XI=w("Reset");function JI(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},null,8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[QI]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[XI]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[w(" Form valid: "+I(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var eN=g(ZI,[["render",JI]]);const nN=y({setup(){const e=Y({model:"NHS.UK frontend option 1",rules:[s=>s!=="NHS.UK frontend option 1"||"Error message goes here"],valid:!1});function n(){e.valid&&alert("success submission")}function t(){e.model=""}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),tN=_("option",null,"NHS.UK frontend option 1",-1),sN=_("option",null,"NHS.UK frontend option 2",-1),rN=_("option",null,"NHS.UK frontend option 3",-1),oN=w("Submit"),aN=w("Reset");function iN(e,n,t,s,r,a){const o=d("nhs-select"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"Label text goes here",hint:"Hint text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),rules:e.rules},{label:h(({label:m})=>[_("h1",null,I(m),1)]),hint:h(({hint:m})=>[_("a",null,I(m),1)]),error:h(({error:m})=>[_("h2",null,I(m),1)]),default:h(()=>[tN,sN,rN]),_:1},8,["modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[oN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[aN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[w(" Form valid: "+I(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var lN=g(nN,[["render",iN]]);const uN=y({setup(){const e=Y({model:"",rules:[s=>!!s||"You must provide an explanation"],valid:!1});function n(){e.valid&&alert("success submission")}function t(){e.model=""}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),cN=w("Submit"),dN=w("Reset");function hN(e,n,t,s,r,a){const o=d("nhs-textarea"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{onSubmit:n[1]||(n[1]=m=>e.onSubmit()),onReset:n[2]||(n[2]=m=>e.onReset()),modelValue:e.valid,"onUpdate:modelValue":n[3]||(n[3]=m=>e.valid=m)},{default:h(()=>[u(o,{label:"Why can't you provide a National Insurance number?",hint:"Hint text",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},{label:h(({label:m})=>[_("h1",null,I(m),1)]),hint:h(({hint:m})=>[_("h2",null,I(m),1)]),error:h(({error:m})=>[_("h3",null,I(m),1)]),_:1},8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[cN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[dN]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var pN=g(uN,[["render",hN]]);const mN=y({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{},valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model={}}return xe(K({},J(e)),{onReset:t,onSubmit:n})}}),fN=w("Validate"),_N=w("Reset");function gN(e,n,t,s,r,a){const o=d("nhs-input-group"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{onSubmit:n[1]||(n[1]=m=>e.onSubmit()),onReset:n[2]||(n[2]=m=>e.onReset()),modelValue:e.valid,"onUpdate:modelValue":n[3]||(n[3]=m=>e.valid=m)},{default:h(()=>[u(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),ref:"input"},{hint:h(({hint:m})=>[_("a",null,I(m),1)]),error:h(({error:m})=>[w(I(m),1)]),"item-label":h(({item:m})=>[w(I(m),1)]),_:1},8,["items","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[fN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[_N]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[_("p",null,"form valid: "+I(e.valid),1),_("p",null,"model value: "+I(e.model),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var bN=g(mN,[["render",gN]]);const vN=y({setup(){const e=Y({model:"",items:[{label:"Yes",value:"yes",hint:"hint text"},{label:"No",value:"no"},{divider:"or"},{label:"Maybe",value:"maybe"}],rules:[s=>!!s||"Please select an option"],valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),yN=w("Validate"),$N=w("Reset");function kN(e,n,t,s,r,a){const o=d("nhs-radios"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),label:"Have you changed your name?",hint:"This includes changing your last name or spelling your name differently.",rules:e.rules,ref:"radios"},{"item-label":h(({item:m})=>[_("h3",null,I(m),1)]),"item-hint":h(({item:m})=>[_("a",null,I(m),1)]),hint:h(({hint:m})=>[_("h2",null,I(m),1)]),error:h(({error:m})=>[_("h2",null,I(m),1)]),_:1},8,["items","modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[yN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[$N]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[w(" Form valid: "+I(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var wN=g(vN,[["render",kN]]);const SN={CareCardNonUrgent:Il,CareCardUrgent:Nl,CareCardEmergency:Al},xN=y({setup(){const e=Y({items:[{label:"British",value:"british"},{label:"Irish",value:"irish"},{label:"citizen of another country",value:"other"}],model:[],rules:[s=>s.length>0||"Please select an option"],valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=[]}return xe(K({},J(e)),{onSubmit:n,onReset:t})}}),CN=w("Validate"),EN=w("Reset");function RN(e,n,t,s,r,a){const o=d("nhs-checkboxes"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),S(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),label:"What is your nationality?",hint:"If you have more than 1 nationality, select all options that are relevant to you.",ref:"checkbox",rules:e.rules},{hint:h(({hint:m})=>[_("a",null,I(m),1)]),"item-label":h(({item:m})=>[_("h3",null,I(m),1)]),_:1},8,["items","modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[CN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[EN]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[w(" Form valid: "+I(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var TN=g(xN,[["render",RN]]);const IN={Checkbox:Ol,CheckboxHint:Hl,CheckboxDisabled:Pl,CheckboxHeading:Ll,CheckboxError:Bl,CheckboxConditional:Dl,CheckboxSlots:TN,CheckboxNonOfAbove:ql},NN={Header:Vl,HeaderTransactionalName:Ul,HeaderOrg:Fl,HeaderOrgWhiteNav:zl},AN=xe(K(xe(K(xe(K({ButtonDocs:LT,ButtonDocsDisabled:FT,ActionLink:Ml,BackLink:ki,Breadcrumb:wi,CardBasic:xl,CardClickable:Cl,CardImage:El,CardFeature:Tl,CardGroup:Rl},SN),{ContentsList:Si,Details:xi,DoDont:Ci,DoDontSlots:WT,ErrorSummary:jl,Body:QT,List:hI,ErrorText:Ei,HintText:Ri,InsetText:Ti,Heading:yI,Label:Ii,LabelBold:Ni,LabelHeading:Ai,Expander:Mi,ExpanderGroup:Oi,Fieldset:Hi,FieldsetHeading:Pi,FieldsetInput:Li,FieldsetSlots:SI,Footer:Bi,Grid:zI}),NN),{Hero:Di,HeroImage:qi,HeroImageText:Vi,Image:Ui,ListPanel:Fi,NavAZ:zi,Pagination:ji,ReviewDate:Wi,SkipLink:Ki,SummaryList:Gi,SummaryListNoAction:Yi,SummaryListNoBorder:Zi,Tag:Qi,WarningCallout:Xi,WarningCalloutNonImportant:Ji,Table:el,TablePanel:nl,TableResponsive:tl,Input:sl,InputAutocomplete:rl,InputHint:ol,InputError:al,InputWidth:il,InputSlots:YI,Form:eN,Select:ll,SelectError:ul,SelectSlots:lN,Textarea:cl,TextareaAutocomplete:dl,TextareaError:hl,TextareaSlots:pN,DateInput:pl,DateInputAutocomplete:ml,DateInputError:fl,DateInputErrorMulti:_l,DateInputSlots:bN}),IN),{Radio:gl,RadioInline:bl,RadioDisabled:vl,RadioDivider:yl,RadioHint:$l,RadioNoHeading:kl,RadioError:wl,RadioConditional:Sl,RadioSlots:wN});function MN(e){return AN[e]}const ON=y({components:{CodeBlockTab:BR},props:{name:{type:String,required:!0}},setup(e){const{templateCode:n,scriptCode:t}=NT(e.name),s=Y({template:n,script:t,showTemplate:!1,showScript:!1}),r=F(()=>!s.showTemplate&&!s.showScript?{display:"none","margin-bottom":"0px"}:{}),a=F(()=>!s.showTemplate&&!s.showScript?{"border-bottom":"1px solid #d8dde0","margin-bottom":"40px"}:{});return Ve(()=>s.showTemplate,o=>{o&&s.showScript&&(s.showScript=!1)}),Ve(()=>s.showScript,o=>{o&&s.showTemplate&&(s.showTemplate=!1)}),xe(K({getExampleModule:MN},J(s)),{codeContainerStyle:r,expandContainerStyle:a})}}),HN={class:"example_container"},PN=w(" Template "),LN=w(" Script ");function BN(e,n,t,s,r,a){const o=d("code-block-tab"),i=d("highlightjs"),l=d("nhs-col"),p=d("nhs-row");return c(),S(p,null,{default:h(()=>[u(l,null,{default:h(()=>[_("div",HN,[(c(),S(rn(e.getExampleModule(e.name))))]),_("div",{class:"expand_container",style:Ln(e.expandContainerStyle)},[e.template?(c(),S(o,{key:0,id:`${e.name}-template`,modelValue:e.showTemplate,"onUpdate:modelValue":n[0]||(n[0]=f=>e.showTemplate=f)},{default:h(()=>[PN]),_:1},8,["id","modelValue"])):W("",!0),e.script?(c(),S(o,{key:1,id:`${e.name}-script`,modelValue:e.showScript,"onUpdate:modelValue":n[1]||(n[1]=f=>e.showScript=f)},{default:h(()=>[LN]),_:1},8,["id","modelValue"])):W("",!0)],4),_("div",{class:"code_container",style:Ln(e.codeContainerStyle)},[e.showTemplate?(c(),S(i,{key:0,language:"xml",code:e.template},null,8,["code"])):W("",!0),e.showScript?(c(),S(i,{key:1,language:"typescript",code:e.script},null,8,["code"])):W("",!0)],4)]),_:1})]),_:1})}var DN=g(ON,[["render",BN],["__scopeId","data-v-c21464ee"]]);const Wr=Vd(H$);Wr.component("argument-table",MR);Wr.component("code-block",DN);Wr.use(Q2,{router:tn}).use(tn).use(O1).mount("#app");
