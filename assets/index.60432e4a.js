var wu=Object.defineProperty,Su=Object.defineProperties;var xu=Object.getOwnPropertyDescriptors;var ns=Object.getOwnPropertySymbols;var Jr=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable;var Xr=(e,n,t)=>n in e?wu(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Q=(e,n)=>{for(var t in n||(n={}))Jr.call(n,t)&&Xr(e,t,n[t]);if(ns)for(var t of ns(n))eo.call(n,t)&&Xr(e,t,n[t]);return e},Re=(e,n)=>Su(e,xu(n));var js=(e,n)=>{var t={};for(var s in e)Jr.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&ns)for(var s of ns(e))n.indexOf(s)<0&&eo.call(e,s)&&(t[s]=e[s]);return t};const Cu=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}};Cu();function gr(e,n){const t=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)t[s[r]]=!0;return n?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ru=gr(Eu);function ca(e){return!!e||e===""}function Bn(e){if(ie(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],r=Oe(s)?Iu(s):Bn(s);if(r)for(const a in r)n[a]=r[a]}return n}else{if(Oe(e))return e;if(Ae(e))return e}}const Tu=/;(?![^(]*\))/g,Nu=/:(.+)/;function Iu(e){const n={};return e.split(Tu).forEach(t=>{if(t){const s=t.split(Nu);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Se(e){let n="";if(Oe(e))n=e;else if(ie(e))for(let t=0;t<e.length;t++){const s=Se(e[t]);s&&(n+=s+" ")}else if(Ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Rs(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Oe(n)&&(e.class=Se(n)),t&&(e.style=Bn(t)),e}function Au(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=et(e[s],n[s]);return t}function et(e,n){if(e===n)return!0;let t=no(e),s=no(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=ie(e),s=ie(n),t||s)return t&&s?Au(e,n):!1;if(t=Ae(e),s=Ae(n),t||s){if(!t||!s)return!1;const r=Object.keys(e).length,a=Object.keys(n).length;if(r!==a)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(i&&!l||!i&&l||!et(e[o],n[o]))return!1}}return String(e)===String(n)}function br(e,n){return e.findIndex(t=>et(t,n))}const N=e=>Oe(e)?e:e==null?"":ie(e)||Ae(e)&&(e.toString===pa||!he(e.toString))?JSON.stringify(e,da,2):String(e),da=(e,n)=>n&&n.__v_isRef?da(e,n.value):mt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,r])=>(t[`${s} =>`]=r,t),{})}:yt(n)?{[`Set(${n.size})`]:[...n.values()]}:Ae(n)&&!ie(n)&&!ma(n)?String(n):n,we={},pt=[],un=()=>{},Mu=()=>!1,Ou=/^on[^a-z]/,Ts=e=>Ou.test(e),vr=e=>e.startsWith("onUpdate:"),Ke=Object.assign,$r=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Hu=Object.prototype.hasOwnProperty,ge=(e,n)=>Hu.call(e,n),ie=Array.isArray,mt=e=>Ns(e)==="[object Map]",yt=e=>Ns(e)==="[object Set]",no=e=>e instanceof Date,he=e=>typeof e=="function",Oe=e=>typeof e=="string",yr=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",ha=e=>Ae(e)&&he(e.then)&&he(e.catch),pa=Object.prototype.toString,Ns=e=>pa.call(e),Pu=e=>Ns(e).slice(8,-1),ma=e=>Ns(e)==="[object Object]",kr=e=>Oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,us=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Is=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Lu=/-(\w)/g,gn=Is(e=>e.replace(Lu,(n,t)=>t?t.toUpperCase():"")),Bu=/\B([A-Z])/g,nt=Is(e=>e.replace(Bu,"-$1").toLowerCase()),As=Is(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ws=Is(e=>e?`on${As(e)}`:""),Vt=(e,n)=>!Object.is(e,n),cs=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ms=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},fs=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let to;const Du=()=>to||(to=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let fn;class qu{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&fn&&(this.parent=fn,this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}run(n){if(this.active){const t=fn;try{return fn=this,n()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(n){if(this.active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Vu(e,n=fn){n&&n.active&&n.effects.push(e)}const wr=e=>{const n=new Set(e);return n.w=0,n.n=0,n},fa=e=>(e.w&Dn)>0,_a=e=>(e.n&Dn)>0,Uu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Dn},Fu=e=>{const{deps:n}=e;if(n.length){let t=0;for(let s=0;s<n.length;s++){const r=n[s];fa(r)&&!_a(r)?r.delete(e):n[t++]=r,r.w&=~Dn,r.n&=~Dn}n.length=t}},er=new WeakMap;let At=0,Dn=1;const nr=30;let ln;const Zn=Symbol(""),tr=Symbol("");class Sr{constructor(n,t=null,s){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Vu(this,s)}run(){if(!this.active)return this.fn();let n=ln,t=Pn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ln,ln=this,Pn=!0,Dn=1<<++At,At<=nr?Uu(this):so(this),this.fn()}finally{At<=nr&&Fu(this),Dn=1<<--At,ln=this.parent,Pn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(so(this),this.onStop&&this.onStop(),this.active=!1)}}function so(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Pn=!0;const ga=[];function kt(){ga.push(Pn),Pn=!1}function wt(){const e=ga.pop();Pn=e===void 0?!0:e}function rn(e,n,t){if(Pn&&ln){let s=er.get(e);s||er.set(e,s=new Map);let r=s.get(t);r||s.set(t,r=wr()),ba(r)}}function ba(e,n){let t=!1;At<=nr?_a(e)||(e.n|=Dn,t=!fa(e)):t=!e.has(ln),t&&(e.add(ln),ln.deps.push(e))}function yn(e,n,t,s,r,a){const o=er.get(e);if(!o)return;let i=[];if(n==="clear")i=[...o.values()];else if(t==="length"&&ie(e))o.forEach((l,p)=>{(p==="length"||p>=s)&&i.push(l)});else switch(t!==void 0&&i.push(o.get(t)),n){case"add":ie(e)?kr(t)&&i.push(o.get("length")):(i.push(o.get(Zn)),mt(e)&&i.push(o.get(tr)));break;case"delete":ie(e)||(i.push(o.get(Zn)),mt(e)&&i.push(o.get(tr)));break;case"set":mt(e)&&i.push(o.get(Zn));break}if(i.length===1)i[0]&&sr(i[0]);else{const l=[];for(const p of i)p&&l.push(...p);sr(wr(l))}}function sr(e,n){for(const t of ie(e)?e:[...e])(t!==ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zu=gr("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(yr)),ju=xr(),Wu=xr(!1,!0),Ku=xr(!0),ro=Gu();function Gu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=ve(this);for(let a=0,o=this.length;a<o;a++)rn(s,"get",a+"");const r=s[n](...t);return r===-1||r===!1?s[n](...t.map(ve)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){kt();const s=ve(this)[n].apply(this,t);return wt(),s}}),e}function xr(e=!1,n=!1){return function(s,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&a===(e?n?cc:Sa:n?wa:ka).get(s))return s;const o=ie(s);if(!e&&o&&ge(ro,r))return Reflect.get(ro,r,a);const i=Reflect.get(s,r,a);return(yr(r)?va.has(r):zu(r))||(e||rn(s,"get",r),n)?i:Pe(i)?!o||!kr(r)?i.value:i:Ae(i)?e?xa(i):Y(i):i}}const Yu=$a(),Zu=$a(!0);function $a(e=!1){return function(t,s,r,a){let o=t[s];if(Ut(o)&&Pe(o)&&!Pe(r))return!1;if(!e&&!Ut(r)&&(Ca(r)||(r=ve(r),o=ve(o)),!ie(t)&&Pe(o)&&!Pe(r)))return o.value=r,!0;const i=ie(t)&&kr(s)?Number(s)<t.length:ge(t,s),l=Reflect.set(t,s,r,a);return t===ve(a)&&(i?Vt(r,o)&&yn(t,"set",s,r):yn(t,"add",s,r)),l}}function Qu(e,n){const t=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&t&&yn(e,"delete",n,void 0),s}function Xu(e,n){const t=Reflect.has(e,n);return(!yr(n)||!va.has(n))&&rn(e,"has",n),t}function Ju(e){return rn(e,"iterate",ie(e)?"length":Zn),Reflect.ownKeys(e)}const ya={get:ju,set:Yu,deleteProperty:Qu,has:Xu,ownKeys:Ju},ec={get:Ku,set(e,n){return!0},deleteProperty(e,n){return!0}},nc=Ke({},ya,{get:Wu,set:Zu}),Cr=e=>e,Ms=e=>Reflect.getPrototypeOf(e);function ts(e,n,t=!1,s=!1){e=e.__v_raw;const r=ve(e),a=ve(n);n!==a&&!t&&rn(r,"get",n),!t&&rn(r,"get",a);const{has:o}=Ms(r),i=s?Cr:t?Tr:Ft;if(o.call(r,n))return i(e.get(n));if(o.call(r,a))return i(e.get(a));e!==r&&e.get(n)}function ss(e,n=!1){const t=this.__v_raw,s=ve(t),r=ve(e);return e!==r&&!n&&rn(s,"has",e),!n&&rn(s,"has",r),e===r?t.has(e):t.has(e)||t.has(r)}function rs(e,n=!1){return e=e.__v_raw,!n&&rn(ve(e),"iterate",Zn),Reflect.get(e,"size",e)}function oo(e){e=ve(e);const n=ve(this);return Ms(n).has.call(n,e)||(n.add(e),yn(n,"add",e,e)),this}function ao(e,n){n=ve(n);const t=ve(this),{has:s,get:r}=Ms(t);let a=s.call(t,e);a||(e=ve(e),a=s.call(t,e));const o=r.call(t,e);return t.set(e,n),a?Vt(n,o)&&yn(t,"set",e,n):yn(t,"add",e,n),this}function io(e){const n=ve(this),{has:t,get:s}=Ms(n);let r=t.call(n,e);r||(e=ve(e),r=t.call(n,e)),s&&s.call(n,e);const a=n.delete(e);return r&&yn(n,"delete",e,void 0),a}function lo(){const e=ve(this),n=e.size!==0,t=e.clear();return n&&yn(e,"clear",void 0,void 0),t}function os(e,n){return function(s,r){const a=this,o=a.__v_raw,i=ve(o),l=n?Cr:e?Tr:Ft;return!e&&rn(i,"iterate",Zn),o.forEach((p,f)=>s.call(r,l(p),l(f),a))}}function as(e,n,t){return function(...s){const r=this.__v_raw,a=ve(r),o=mt(a),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,p=r[e](...s),f=t?Cr:n?Tr:Ft;return!n&&rn(a,"iterate",l?tr:Zn),{next(){const{value:m,done:b}=p.next();return b?{value:m,done:b}:{value:i?[f(m[0]),f(m[1])]:f(m),done:b}},[Symbol.iterator](){return this}}}}function En(e){return function(...n){return e==="delete"?!1:this}}function tc(){const e={get(a){return ts(this,a)},get size(){return rs(this)},has:ss,add:oo,set:ao,delete:io,clear:lo,forEach:os(!1,!1)},n={get(a){return ts(this,a,!1,!0)},get size(){return rs(this)},has:ss,add:oo,set:ao,delete:io,clear:lo,forEach:os(!1,!0)},t={get(a){return ts(this,a,!0)},get size(){return rs(this,!0)},has(a){return ss.call(this,a,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:os(!0,!1)},s={get(a){return ts(this,a,!0,!0)},get size(){return rs(this,!0)},has(a){return ss.call(this,a,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=as(a,!1,!1),t[a]=as(a,!0,!1),n[a]=as(a,!1,!0),s[a]=as(a,!0,!0)}),[e,t,n,s]}const[sc,rc,oc,ac]=tc();function Er(e,n){const t=n?e?ac:oc:e?rc:sc;return(s,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ge(t,r)&&r in s?t:s,r,a)}const ic={get:Er(!1,!1)},lc={get:Er(!1,!0)},uc={get:Er(!0,!1)},ka=new WeakMap,wa=new WeakMap,Sa=new WeakMap,cc=new WeakMap;function dc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(e){return e.__v_skip||!Object.isExtensible(e)?0:dc(Pu(e))}function Y(e){return Ut(e)?e:Rr(e,!1,ya,ic,ka)}function pc(e){return Rr(e,!1,nc,lc,wa)}function xa(e){return Rr(e,!0,ec,uc,Sa)}function Rr(e,n,t,s,r){if(!Ae(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const o=hc(e);if(o===0)return e;const i=new Proxy(e,o===2?s:t);return r.set(e,i),i}function ft(e){return Ut(e)?ft(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function Ca(e){return!!(e&&e.__v_isShallow)}function Ea(e){return ft(e)||Ut(e)}function ve(e){const n=e&&e.__v_raw;return n?ve(n):e}function Ra(e){return ms(e,"__v_skip",!0),e}const Ft=e=>Ae(e)?Y(e):e,Tr=e=>Ae(e)?xa(e):e;function Ta(e){Pn&&ln&&(e=ve(e),ba(e.dep||(e.dep=wr())))}function Na(e,n){e=ve(e),e.dep&&sr(e.dep)}function Pe(e){return!!(e&&e.__v_isRef===!0)}function kn(e){return Ia(e,!1)}function mc(e){return Ia(e,!0)}function Ia(e,n){return Pe(e)?e:new fc(e,n)}class fc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ve(n),this._value=t?n:Ft(n)}get value(){return Ta(this),this._value}set value(n){n=this.__v_isShallow?n:ve(n),Vt(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Ft(n),Na(this))}}function Ot(e){return Pe(e)?e.value:e}const _c={get:(e,n,t)=>Ot(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const r=e[n];return Pe(r)&&!Pe(t)?(r.value=t,!0):Reflect.set(e,n,t,s)}};function Aa(e){return ft(e)?e:new Proxy(e,_c)}function ee(e){const n=ie(e)?new Array(e.length):{};for(const t in e)n[t]=bc(e,t);return n}class gc{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function bc(e,n,t){const s=e[n];return Pe(s)?s:new gc(e,n,t)}class vc{constructor(n,t,s,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Sr(n,()=>{this._dirty||(this._dirty=!0,Na(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const n=ve(this);return Ta(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function $c(e,n,t=!1){let s,r;const a=he(e);return a?(s=e,r=un):(s=e.get,r=e.set),new vc(s,r,a||!r,t)}function Ln(e,n,t,s){let r;try{r=s?e(...s):e()}catch(a){Os(a,n,t)}return r}function cn(e,n,t,s){if(he(e)){const a=Ln(e,n,t,s);return a&&ha(a)&&a.catch(o=>{Os(o,n,t)}),a}const r=[];for(let a=0;a<e.length;a++)r.push(cn(e[a],n,t,s));return r}function Os(e,n,t,s=!0){const r=n?n.vnode:null;if(n){let a=n.parent;const o=n.proxy,i=t;for(;a;){const p=a.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,o,i)===!1)return}a=a.parent}const l=n.appContext.config.errorHandler;if(l){Ln(l,null,10,[e,o,i]);return}}yc(e,t,r,s)}function yc(e,n,t,s=!0){console.error(e)}let _s=!1,rr=!1;const tn=[];let vn=0;const Ht=[];let Mt=null,ct=0;const Pt=[];let In=null,dt=0;const Ma=Promise.resolve();let Nr=null,or=null;function Ir(e){const n=Nr||Ma;return e?n.then(this?e.bind(this):e):n}function kc(e){let n=vn+1,t=tn.length;for(;n<t;){const s=n+t>>>1;zt(tn[s])<e?n=s+1:t=s}return n}function Oa(e){(!tn.length||!tn.includes(e,_s&&e.allowRecurse?vn+1:vn))&&e!==or&&(e.id==null?tn.push(e):tn.splice(kc(e.id),0,e),Ha())}function Ha(){!_s&&!rr&&(rr=!0,Nr=Ma.then(Ba))}function wc(e){const n=tn.indexOf(e);n>vn&&tn.splice(n,1)}function Pa(e,n,t,s){ie(e)?t.push(...e):(!n||!n.includes(e,e.allowRecurse?s+1:s))&&t.push(e),Ha()}function Sc(e){Pa(e,Mt,Ht,ct)}function xc(e){Pa(e,In,Pt,dt)}function Ar(e,n=null){if(Ht.length){for(or=n,Mt=[...new Set(Ht)],Ht.length=0,ct=0;ct<Mt.length;ct++)Mt[ct]();Mt=null,ct=0,or=null,Ar(e,n)}}function La(e){if(Pt.length){const n=[...new Set(Pt)];if(Pt.length=0,In){In.push(...n);return}for(In=n,In.sort((t,s)=>zt(t)-zt(s)),dt=0;dt<In.length;dt++)In[dt]();In=null,dt=0}}const zt=e=>e.id==null?1/0:e.id;function Ba(e){rr=!1,_s=!0,Ar(e),tn.sort((t,s)=>zt(t)-zt(s));const n=un;try{for(vn=0;vn<tn.length;vn++){const t=tn[vn];t&&t.active!==!1&&Ln(t,null,14)}}finally{vn=0,tn.length=0,La(),_s=!1,Nr=null,(tn.length||Ht.length||Pt.length)&&Ba(e)}}function Cc(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||we;let r=t;const a=n.startsWith("update:"),o=a&&n.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=s[f]||we;b?r=t.map(R=>R.trim()):m&&(r=t.map(fs))}let i,l=s[i=Ws(n)]||s[i=Ws(gn(n))];!l&&a&&(l=s[i=Ws(nt(n))]),l&&cn(l,e,6,r);const p=s[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,cn(p,e,6,r)}}function Da(e,n,t=!1){const s=n.emitsCache,r=s.get(e);if(r!==void 0)return r;const a=e.emits;let o={},i=!1;if(!he(e)){const l=p=>{const f=Da(p,n,!0);f&&(i=!0,Ke(o,f))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!i?(s.set(e,null),null):(ie(a)?a.forEach(l=>o[l]=null):Ke(o,a),s.set(e,o),o)}function Hs(e,n){return!e||!Ts(n)?!1:(n=n.slice(2).replace(/Once$/,""),ge(e,n[0].toLowerCase()+n.slice(1))||ge(e,nt(n))||ge(e,n))}let We=null,Ps=null;function gs(e){const n=We;return We=e,Ps=e&&e.type.__scopeId||null,n}function qa(e){Ps=e}function Va(){Ps=null}function h(e,n=We,t){if(!n||e._n)return e;const s=(...r)=>{s._d&&vo(-1);const a=gs(n),o=e(...r);return gs(a),s._d&&vo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ks(e){const{type:n,vnode:t,proxy:s,withProxy:r,props:a,propsOptions:[o],slots:i,attrs:l,emit:p,render:f,renderCache:m,data:b,setupState:R,ctx:W,inheritAttrs:L}=e;let X,se;const ce=gs(e);try{if(t.shapeFlag&4){const me=r||s;X=_n(f.call(me,me,m,a,R,b,W)),se=l}else{const me=n;X=_n(me.length>1?me(a,{attrs:l,slots:i,emit:p}):me(a,null)),se=n.props?l:Ec(l)}}catch(me){Lt.length=0,Os(me,e,1),X=u(qn)}let _e=X;if(se&&L!==!1){const me=Object.keys(se),{shapeFlag:Te}=_e;me.length&&Te&7&&(o&&me.some(vr)&&(se=Rc(se,o)),_e=jt(_e,se))}return t.dirs&&(_e.dirs=_e.dirs?_e.dirs.concat(t.dirs):t.dirs),t.transition&&(_e.transition=t.transition),X=_e,gs(ce),X}const Ec=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ts(t))&&((n||(n={}))[t]=e[t]);return n},Rc=(e,n)=>{const t={};for(const s in e)(!vr(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Tc(e,n,t){const{props:s,children:r,component:a}=e,{props:o,children:i,patchFlag:l}=n,p=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?uo(s,o,p):!!o;if(l&8){const f=n.dynamicProps;for(let m=0;m<f.length;m++){const b=f[m];if(o[b]!==s[b]&&!Hs(p,b))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?uo(s,o,p):!0:!!o;return!1}function uo(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const a=s[r];if(n[a]!==e[a]&&!Hs(t,a))return!0}return!1}function Nc({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Ic=e=>e.__isSuspense;function Ac(e,n){n&&n.pendingBranch?ie(e)?n.effects.push(...e):n.effects.push(e):xc(e)}function Ee(e,n){if(Ve){let t=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===t&&(t=Ve.provides=Object.create(s)),t[e]=n}}function xe(e,n,t=!1){const s=Ve||We;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return t&&he(n)?n.call(s.proxy):n}}const co={};function Ue(e,n,t){return Ua(e,n,t)}function Ua(e,n,{immediate:t,deep:s,flush:r,onTrack:a,onTrigger:o}=we){const i=Ve;let l,p=!1,f=!1;if(Pe(e)?(l=()=>e.value,p=Ca(e)):ft(e)?(l=()=>e,s=!0):ie(e)?(f=!0,p=e.some(ft),l=()=>e.map(se=>{if(Pe(se))return se.value;if(ft(se))return Yn(se);if(he(se))return Ln(se,i,2)})):he(e)?n?l=()=>Ln(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return m&&m(),cn(e,i,3,[b])}:l=un,n&&s){const se=l;l=()=>Yn(se())}let m,b=se=>{m=X.onStop=()=>{Ln(se,i,4)}};if(Wt)return b=un,n?t&&cn(n,i,3,[l(),f?[]:void 0,b]):l(),un;let R=f?[]:co;const W=()=>{if(!!X.active)if(n){const se=X.run();(s||p||(f?se.some((ce,_e)=>Vt(ce,R[_e])):Vt(se,R)))&&(m&&m(),cn(n,i,3,[se,R===co?void 0:R,b]),R=se)}else X.run()};W.allowRecurse=!!n;let L;r==="sync"?L=W:r==="post"?L=()=>Ze(W,i&&i.suspense):L=()=>{!i||i.isMounted?Sc(W):W()};const X=new Sr(l,L);return n?t?W():R=X.run():r==="post"?Ze(X.run.bind(X),i&&i.suspense):X.run(),()=>{X.stop(),i&&i.scope&&$r(i.scope.effects,X)}}function Mc(e,n,t){const s=this.proxy,r=Oe(e)?e.includes(".")?Fa(s,e):()=>s[e]:e.bind(s,s);let a;he(n)?a=n:(a=n.handler,t=n);const o=Ve;_t(this);const i=Ua(r,a.bind(s),t);return o?_t(o):Xn(),i}function Fa(e,n){const t=n.split(".");return()=>{let s=e;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}function Yn(e,n){if(!Ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Pe(e))Yn(e.value,n);else if(ie(e))for(let t=0;t<e.length;t++)Yn(e[t],n);else if(yt(e)||mt(e))e.forEach(t=>{Yn(t,n)});else if(ma(e))for(const t in e)Yn(e[t],n);return e}function v(e){return he(e)?{setup:e,name:e.name}:e}const bs=e=>!!e.type.__asyncLoader,za=e=>e.type.__isKeepAlive;function Oc(e,n){ja(e,"a",n)}function Hc(e,n){ja(e,"da",n)}function ja(e,n,t=Ve){const s=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ls(n,s,t),t){let r=t.parent;for(;r&&r.parent;)za(r.parent.vnode)&&Pc(s,n,t,r),r=r.parent}}function Pc(e,n,t,s){const r=Ls(n,e,s,!0);St(()=>{$r(s[n],r)},t)}function Ls(e,n,t=Ve,s=!1){if(t){const r=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;kt(),_t(t);const i=cn(n,t,e,o);return Xn(),wt(),i});return s?r.unshift(a):r.push(a),a}}const wn=e=>(n,t=Ve)=>(!Wt||e==="sp")&&Ls(e,n,t),Lc=wn("bm"),Le=wn("m"),Bc=wn("bu"),Dc=wn("u"),qc=wn("bum"),St=wn("um"),Vc=wn("sp"),Uc=wn("rtg"),Fc=wn("rtc");function zc(e,n=Ve){Ls("ec",e,n)}let ar=!0;function jc(e){const n=Ka(e),t=e.proxy,s=e.ctx;ar=!1,n.beforeCreate&&ho(n.beforeCreate,e,"bc");const{data:r,computed:a,methods:o,watch:i,provide:l,inject:p,created:f,beforeMount:m,mounted:b,beforeUpdate:R,updated:W,activated:L,deactivated:X,beforeDestroy:se,beforeUnmount:ce,destroyed:_e,unmounted:me,render:Te,renderTracked:Be,renderTriggered:Ge,errorCaptured:dn,serverPrefetch:Ie,expose:Qe,inheritAttrs:Ye,components:Xe,directives:hn,filters:Je}=n;if(p&&Wc(p,s,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const J=o[V];he(J)&&(s[V]=J.bind(t))}if(r){const V=r.call(t,t);Ae(V)&&(e.data=Y(V))}if(ar=!0,a)for(const V in a){const J=a[V],le=he(J)?J.bind(t,t):he(J.get)?J.get.bind(t,t):un,be=!he(J)&&he(J.set)?J.set.bind(t):un,Ce=z({get:le,set:be});Object.defineProperty(s,V,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Me=>Ce.value=Me})}if(i)for(const V in i)Wa(i[V],s,t,V);if(l){const V=he(l)?l.call(t):l;Reflect.ownKeys(V).forEach(J=>{Ee(J,V[J])})}f&&ho(f,e,"c");function M(V,J){ie(J)?J.forEach(le=>V(le.bind(t))):J&&V(J.bind(t))}if(M(Lc,m),M(Le,b),M(Bc,R),M(Dc,W),M(Oc,L),M(Hc,X),M(zc,dn),M(Fc,Be),M(Uc,Ge),M(qc,ce),M(St,me),M(Vc,Ie),ie(Qe))if(Qe.length){const V=e.exposed||(e.exposed={});Qe.forEach(J=>{Object.defineProperty(V,J,{get:()=>t[J],set:le=>t[J]=le})})}else e.exposed||(e.exposed={});Te&&e.render===un&&(e.render=Te),Ye!=null&&(e.inheritAttrs=Ye),Xe&&(e.components=Xe),hn&&(e.directives=hn)}function Wc(e,n,t=un,s=!1){ie(e)&&(e=ir(e));for(const r in e){const a=e[r];let o;Ae(a)?"default"in a?o=xe(a.from||r,a.default,!0):o=xe(a.from||r):o=xe(a),Pe(o)&&s?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[r]=o}}function ho(e,n,t){cn(ie(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Wa(e,n,t,s){const r=s.includes(".")?Fa(t,s):()=>t[s];if(Oe(e)){const a=n[e];he(a)&&Ue(r,a)}else if(he(e))Ue(r,e.bind(t));else if(Ae(e))if(ie(e))e.forEach(a=>Wa(a,n,t,s));else{const a=he(e.handler)?e.handler.bind(t):n[e.handler];he(a)&&Ue(r,a,e)}}function Ka(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:r,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,i=a.get(n);let l;return i?l=i:!r.length&&!t&&!s?l=n:(l={},r.length&&r.forEach(p=>vs(l,p,o,!0)),vs(l,n,o)),a.set(n,l),l}function vs(e,n,t,s=!1){const{mixins:r,extends:a}=n;a&&vs(e,a,t,!0),r&&r.forEach(o=>vs(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const i=Kc[o]||t&&t[o];e[o]=i?i(e[o],n[o]):n[o]}return e}const Kc={data:po,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Kn,directives:Kn,watch:Yc,provide:po,inject:Gc};function po(e,n){return n?e?function(){return Ke(he(e)?e.call(this,this):e,he(n)?n.call(this,this):n)}:n:e}function Gc(e,n){return Kn(ir(e),ir(n))}function ir(e){if(ie(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function je(e,n){return e?[...new Set([].concat(e,n))]:n}function Kn(e,n){return e?Ke(Ke(Object.create(null),e),n):n}function Yc(e,n){if(!e)return n;if(!n)return e;const t=Ke(Object.create(null),e);for(const s in n)t[s]=je(e[s],n[s]);return t}function Zc(e,n,t,s=!1){const r={},a={};ms(a,Bs,1),e.propsDefaults=Object.create(null),Ga(e,n,r,a);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);t?e.props=s?r:pc(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function Qc(e,n,t,s){const{props:r,attrs:a,vnode:{patchFlag:o}}=e,i=ve(r),[l]=e.propsOptions;let p=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let b=f[m];if(Hs(e.emitsOptions,b))continue;const R=n[b];if(l)if(ge(a,b))R!==a[b]&&(a[b]=R,p=!0);else{const W=gn(b);r[W]=lr(l,i,W,R,e,!1)}else R!==a[b]&&(a[b]=R,p=!0)}}}else{Ga(e,n,r,a)&&(p=!0);let f;for(const m in i)(!n||!ge(n,m)&&((f=nt(m))===m||!ge(n,f)))&&(l?t&&(t[m]!==void 0||t[f]!==void 0)&&(r[m]=lr(l,i,m,void 0,e,!0)):delete r[m]);if(a!==i)for(const m in a)(!n||!ge(n,m)&&!0)&&(delete a[m],p=!0)}p&&yn(e,"set","$attrs")}function Ga(e,n,t,s){const[r,a]=e.propsOptions;let o=!1,i;if(n)for(let l in n){if(us(l))continue;const p=n[l];let f;r&&ge(r,f=gn(l))?!a||!a.includes(f)?t[f]=p:(i||(i={}))[f]=p:Hs(e.emitsOptions,l)||(!(l in s)||p!==s[l])&&(s[l]=p,o=!0)}if(a){const l=ve(t),p=i||we;for(let f=0;f<a.length;f++){const m=a[f];t[m]=lr(r,l,m,p[m],e,!ge(p,m))}}return o}function lr(e,n,t,s,r,a){const o=e[t];if(o!=null){const i=ge(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&he(l)){const{propsDefaults:p}=r;t in p?s=p[t]:(_t(r),s=p[t]=l.call(null,n),Xn())}else s=l}o[0]&&(a&&!i?s=!1:o[1]&&(s===""||s===nt(t))&&(s=!0))}return s}function Ya(e,n,t=!1){const s=n.propsCache,r=s.get(e);if(r)return r;const a=e.props,o={},i=[];let l=!1;if(!he(e)){const f=m=>{l=!0;const[b,R]=Ya(m,n,!0);Ke(o,b),R&&i.push(...R)};!t&&n.mixins.length&&n.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!l)return s.set(e,pt),pt;if(ie(a))for(let f=0;f<a.length;f++){const m=gn(a[f]);mo(m)&&(o[m]=we)}else if(a)for(const f in a){const m=gn(f);if(mo(m)){const b=a[f],R=o[m]=ie(b)||he(b)?{type:b}:b;if(R){const W=go(Boolean,R.type),L=go(String,R.type);R[0]=W>-1,R[1]=L<0||W<L,(W>-1||ge(R,"default"))&&i.push(m)}}}const p=[o,i];return s.set(e,p),p}function mo(e){return e[0]!=="$"}function fo(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function _o(e,n){return fo(e)===fo(n)}function go(e,n){return ie(n)?n.findIndex(t=>_o(t,e)):he(n)&&_o(n,e)?0:-1}const Za=e=>e[0]==="_"||e==="$stable",Mr=e=>ie(e)?e.map(_n):[_n(e)],Xc=(e,n,t)=>{const s=h((...r)=>Mr(n(...r)),t);return s._c=!1,s},Qa=(e,n,t)=>{const s=e._ctx;for(const r in e){if(Za(r))continue;const a=e[r];if(he(a))n[r]=Xc(r,a,s);else if(a!=null){const o=Mr(a);n[r]=()=>o}}},Xa=(e,n)=>{const t=Mr(n);e.slots.default=()=>t},Jc=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ve(n),ms(n,"_",t)):Qa(n,e.slots={})}else e.slots={},n&&Xa(e,n);ms(e.slots,Bs,1)},ed=(e,n,t)=>{const{vnode:s,slots:r}=e;let a=!0,o=we;if(s.shapeFlag&32){const i=n._;i?t&&i===1?a=!1:(Ke(r,n),!t&&i===1&&delete r._):(a=!n.$stable,Qa(n,r)),o=n}else n&&(Xa(e,n),o={default:1});if(a)for(const i in r)!Za(i)&&!(i in o)&&delete r[i]};function bn(e,n){const t=We;if(t===null)return e;const s=qs(t)||t.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[o,i,l,p=we]=n[a];he(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(i),r.push({dir:o,instance:s,value:i,oldValue:void 0,arg:l,modifiers:p})}return e}function jn(e,n,t,s){const r=e.dirs,a=n&&n.dirs;for(let o=0;o<r.length;o++){const i=r[o];a&&(i.oldValue=a[o].value);let l=i.dir[s];l&&(kt(),cn(l,t,8,[e.el,i,e,n]),wt())}}function Ja(){return{app:null,config:{isNativeTag:Mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function td(e,n){return function(s,r=null){he(s)||(s=Object.assign({},s)),r!=null&&!Ae(r)&&(r=null);const a=Ja(),o=new Set;let i=!1;const l=a.app={_uid:nd++,_component:s,_props:r,_container:null,_context:a,_instance:null,version:vd,get config(){return a.config},set config(p){},use(p,...f){return o.has(p)||(p&&he(p.install)?(o.add(p),p.install(l,...f)):he(p)&&(o.add(p),p(l,...f))),l},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),l},component(p,f){return f?(a.components[p]=f,l):a.components[p]},directive(p,f){return f?(a.directives[p]=f,l):a.directives[p]},mount(p,f,m){if(!i){const b=u(s,r);return b.appContext=a,f&&n?n(b,p):e(b,p,m),i=!0,l._container=p,p.__vue_app__=l,qs(b.component)||b.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(p,f){return a.provides[p]=f,l}};return l}}function ur(e,n,t,s,r=!1){if(ie(e)){e.forEach((b,R)=>ur(b,n&&(ie(n)?n[R]:n),t,s,r));return}if(bs(s)&&!r)return;const a=s.shapeFlag&4?qs(s.component)||s.component.proxy:s.el,o=r?null:a,{i,r:l}=e,p=n&&n.r,f=i.refs===we?i.refs={}:i.refs,m=i.setupState;if(p!=null&&p!==l&&(Oe(p)?(f[p]=null,ge(m,p)&&(m[p]=null)):Pe(p)&&(p.value=null)),he(l))Ln(l,i,12,[o,f]);else{const b=Oe(l),R=Pe(l);if(b||R){const W=()=>{if(e.f){const L=b?f[l]:l.value;r?ie(L)&&$r(L,a):ie(L)?L.includes(a)||L.push(a):b?(f[l]=[a],ge(m,l)&&(m[l]=f[l])):(l.value=[a],e.k&&(f[e.k]=l.value))}else b?(f[l]=o,ge(m,l)&&(m[l]=o)):Pe(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(W.id=-1,Ze(W,t)):W()}}}const Ze=Ac;function sd(e){return rd(e)}function rd(e,n){const t=Du();t.__VUE__=!0;const{insert:s,remove:r,patchProp:a,createElement:o,createText:i,createComment:l,setText:p,setElementText:f,parentNode:m,nextSibling:b,setScopeId:R=un,cloneNode:W,insertStaticContent:L}=e,X=(g,$,C,A=null,x=null,U=null,D=!1,I=null,F=!!$.dynamicChildren)=>{if(g===$)return;g&&!Tt(g,$)&&(A=re(g),De(g,x,U,!0),g=null),$.patchFlag===-2&&(F=!1,$.dynamicChildren=null);const{type:O,ref:oe,shapeFlag:ne}=$;switch(O){case Hr:se(g,$,C,A);break;case qn:ce(g,$,C,A);break;case ds:g==null&&_e($,C,A,D);break;case q:hn(g,$,C,A,x,U,D,I,F);break;default:ne&1?Be(g,$,C,A,x,U,D,I,F):ne&6?Je(g,$,C,A,x,U,D,I,F):(ne&64||ne&128)&&O.process(g,$,C,A,x,U,D,I,F,ye)}oe!=null&&x&&ur(oe,g&&g.ref,U,$||g,!$)},se=(g,$,C,A)=>{if(g==null)s($.el=i($.children),C,A);else{const x=$.el=g.el;$.children!==g.children&&p(x,$.children)}},ce=(g,$,C,A)=>{g==null?s($.el=l($.children||""),C,A):$.el=g.el},_e=(g,$,C,A)=>{[g.el,g.anchor]=L(g.children,$,C,A,g.el,g.anchor)},me=({el:g,anchor:$},C,A)=>{let x;for(;g&&g!==$;)x=b(g),s(g,C,A),g=x;s($,C,A)},Te=({el:g,anchor:$})=>{let C;for(;g&&g!==$;)C=b(g),r(g),g=C;r($)},Be=(g,$,C,A,x,U,D,I,F)=>{D=D||$.type==="svg",g==null?Ge($,C,A,x,U,D,I,F):Qe(g,$,x,U,D,I,F)},Ge=(g,$,C,A,x,U,D,I)=>{let F,O;const{type:oe,props:ne,shapeFlag:E,transition:H,patchFlag:Z,dirs:ae}=g;if(g.el&&W!==void 0&&Z===-1)F=g.el=W(g.el);else{if(F=g.el=o(g.type,U,ne&&ne.is,ne),E&8?f(F,g.children):E&16&&Ie(g.children,F,null,A,x,U&&oe!=="foreignObject",D,I),ae&&jn(g,null,A,"created"),ne){for(const fe in ne)fe!=="value"&&!us(fe)&&a(F,fe,null,ne[fe],U,g.children,A,x,j);"value"in ne&&a(F,"value",null,ne.value),(O=ne.onVnodeBeforeMount)&&mn(O,A,g)}dn(F,g,g.scopeId,D,A)}ae&&jn(g,null,A,"beforeMount");const de=(!x||x&&!x.pendingBranch)&&H&&!H.persisted;de&&H.beforeEnter(F),s(F,$,C),((O=ne&&ne.onVnodeMounted)||de||ae)&&Ze(()=>{O&&mn(O,A,g),de&&H.enter(F),ae&&jn(g,null,A,"mounted")},x)},dn=(g,$,C,A,x)=>{if(C&&R(g,C),A)for(let U=0;U<A.length;U++)R(g,A[U]);if(x){let U=x.subTree;if($===U){const D=x.vnode;dn(g,D,D.scopeId,D.slotScopeIds,x.parent)}}},Ie=(g,$,C,A,x,U,D,I,F=0)=>{for(let O=F;O<g.length;O++){const oe=g[O]=I?An(g[O]):_n(g[O]);X(null,oe,$,C,A,x,U,D,I)}},Qe=(g,$,C,A,x,U,D)=>{const I=$.el=g.el;let{patchFlag:F,dynamicChildren:O,dirs:oe}=$;F|=g.patchFlag&16;const ne=g.props||we,E=$.props||we;let H;C&&Wn(C,!1),(H=E.onVnodeBeforeUpdate)&&mn(H,C,$,g),oe&&jn($,g,C,"beforeUpdate"),C&&Wn(C,!0);const Z=x&&$.type!=="foreignObject";if(O?Ye(g.dynamicChildren,O,I,C,A,Z,U):D||le(g,$,I,null,C,A,Z,U,!1),F>0){if(F&16)Xe(I,$,ne,E,C,A,x);else if(F&2&&ne.class!==E.class&&a(I,"class",null,E.class,x),F&4&&a(I,"style",ne.style,E.style,x),F&8){const ae=$.dynamicProps;for(let de=0;de<ae.length;de++){const fe=ae[de],en=ne[fe],Cn=E[fe];(Cn!==en||fe==="value")&&a(I,fe,en,Cn,x,g.children,C,A,j)}}F&1&&g.children!==$.children&&f(I,$.children)}else!D&&O==null&&Xe(I,$,ne,E,C,A,x);((H=E.onVnodeUpdated)||oe)&&Ze(()=>{H&&mn(H,C,$,g),oe&&jn($,g,C,"updated")},A)},Ye=(g,$,C,A,x,U,D)=>{for(let I=0;I<$.length;I++){const F=g[I],O=$[I],oe=F.el&&(F.type===q||!Tt(F,O)||F.shapeFlag&70)?m(F.el):C;X(F,O,oe,null,A,x,U,D,!0)}},Xe=(g,$,C,A,x,U,D)=>{if(C!==A){for(const I in A){if(us(I))continue;const F=A[I],O=C[I];F!==O&&I!=="value"&&a(g,I,O,F,D,$.children,x,U,j)}if(C!==we)for(const I in C)!us(I)&&!(I in A)&&a(g,I,C[I],null,D,$.children,x,U,j);"value"in A&&a(g,"value",C.value,A.value)}},hn=(g,$,C,A,x,U,D,I,F)=>{const O=$.el=g?g.el:i(""),oe=$.anchor=g?g.anchor:i("");let{patchFlag:ne,dynamicChildren:E,slotScopeIds:H}=$;H&&(I=I?I.concat(H):H),g==null?(s(O,C,A),s(oe,C,A),Ie($.children,C,oe,x,U,D,I,F)):ne>0&&ne&64&&E&&g.dynamicChildren?(Ye(g.dynamicChildren,E,C,x,U,D,I),($.key!=null||x&&$===x.subTree)&&ei(g,$,!0)):le(g,$,C,oe,x,U,D,I,F)},Je=(g,$,C,A,x,U,D,I,F)=>{$.slotScopeIds=I,g==null?$.shapeFlag&512?x.ctx.activate($,C,A,D,F):an($,C,A,x,U,D,F):M(g,$,F)},an=(g,$,C,A,x,U,D)=>{const I=g.component=hd(g,A,x);if(za(g)&&(I.ctx.renderer=ye),pd(I),I.asyncDep){if(x&&x.registerDep(I,V),!g.el){const F=I.subTree=u(qn);ce(null,F,$,C)}return}V(I,g,$,C,x,U,D)},M=(g,$,C)=>{const A=$.component=g.component;if(Tc(g,$,C))if(A.asyncDep&&!A.asyncResolved){J(A,$,C);return}else A.next=$,wc(A.update),A.update();else $.component=g.component,$.el=g.el,A.vnode=$},V=(g,$,C,A,x,U,D)=>{const I=()=>{if(g.isMounted){let{next:oe,bu:ne,u:E,parent:H,vnode:Z}=g,ae=oe,de;Wn(g,!1),oe?(oe.el=Z.el,J(g,oe,D)):oe=Z,ne&&cs(ne),(de=oe.props&&oe.props.onVnodeBeforeUpdate)&&mn(de,H,oe,Z),Wn(g,!0);const fe=Ks(g),en=g.subTree;g.subTree=fe,X(en,fe,m(en.el),re(en),g,x,U),oe.el=fe.el,ae===null&&Nc(g,fe.el),E&&Ze(E,x),(de=oe.props&&oe.props.onVnodeUpdated)&&Ze(()=>mn(de,H,oe,Z),x)}else{let oe;const{el:ne,props:E}=$,{bm:H,m:Z,parent:ae}=g,de=bs($);if(Wn(g,!1),H&&cs(H),!de&&(oe=E&&E.onVnodeBeforeMount)&&mn(oe,ae,$),Wn(g,!0),ne&&ue){const fe=()=>{g.subTree=Ks(g),ue(ne,g.subTree,g,x,null)};de?$.type.__asyncLoader().then(()=>!g.isUnmounted&&fe()):fe()}else{const fe=g.subTree=Ks(g);X(null,fe,C,A,g,x,U),$.el=fe.el}if(Z&&Ze(Z,x),!de&&(oe=E&&E.onVnodeMounted)){const fe=$;Ze(()=>mn(oe,ae,fe),x)}$.shapeFlag&256&&g.a&&Ze(g.a,x),g.isMounted=!0,$=C=A=null}},F=g.effect=new Sr(I,()=>Oa(g.update),g.scope),O=g.update=F.run.bind(F);O.id=g.uid,Wn(g,!0),O()},J=(g,$,C)=>{$.component=g;const A=g.vnode.props;g.vnode=$,g.next=null,Qc(g,$.props,A,C),ed(g,$.children,C),kt(),Ar(void 0,g.update),wt()},le=(g,$,C,A,x,U,D,I,F=!1)=>{const O=g&&g.children,oe=g?g.shapeFlag:0,ne=$.children,{patchFlag:E,shapeFlag:H}=$;if(E>0){if(E&128){Ce(O,ne,C,A,x,U,D,I,F);return}else if(E&256){be(O,ne,C,A,x,U,D,I,F);return}}H&8?(oe&16&&j(O,x,U),ne!==O&&f(C,ne)):oe&16?H&16?Ce(O,ne,C,A,x,U,D,I,F):j(O,x,U,!0):(oe&8&&f(C,""),H&16&&Ie(ne,C,A,x,U,D,I,F))},be=(g,$,C,A,x,U,D,I,F)=>{g=g||pt,$=$||pt;const O=g.length,oe=$.length,ne=Math.min(O,oe);let E;for(E=0;E<ne;E++){const H=$[E]=F?An($[E]):_n($[E]);X(g[E],H,C,null,x,U,D,I,F)}O>oe?j(g,x,U,!0,!1,ne):Ie($,C,A,x,U,D,I,F,ne)},Ce=(g,$,C,A,x,U,D,I,F)=>{let O=0;const oe=$.length;let ne=g.length-1,E=oe-1;for(;O<=ne&&O<=E;){const H=g[O],Z=$[O]=F?An($[O]):_n($[O]);if(Tt(H,Z))X(H,Z,C,null,x,U,D,I,F);else break;O++}for(;O<=ne&&O<=E;){const H=g[ne],Z=$[E]=F?An($[E]):_n($[E]);if(Tt(H,Z))X(H,Z,C,null,x,U,D,I,F);else break;ne--,E--}if(O>ne){if(O<=E){const H=E+1,Z=H<oe?$[H].el:A;for(;O<=E;)X(null,$[O]=F?An($[O]):_n($[O]),C,Z,x,U,D,I,F),O++}}else if(O>E)for(;O<=ne;)De(g[O],x,U,!0),O++;else{const H=O,Z=O,ae=new Map;for(O=Z;O<=E;O++){const nn=$[O]=F?An($[O]):_n($[O]);nn.key!=null&&ae.set(nn.key,O)}let de,fe=0;const en=E-Z+1;let Cn=!1,Yr=0;const Rt=new Array(en);for(O=0;O<en;O++)Rt[O]=0;for(O=H;O<=ne;O++){const nn=g[O];if(fe>=en){De(nn,x,U,!0);continue}let pn;if(nn.key!=null)pn=ae.get(nn.key);else for(de=Z;de<=E;de++)if(Rt[de-Z]===0&&Tt(nn,$[de])){pn=de;break}pn===void 0?De(nn,x,U,!0):(Rt[pn-Z]=O+1,pn>=Yr?Yr=pn:Cn=!0,X(nn,$[pn],C,null,x,U,D,I,F),fe++)}const Zr=Cn?od(Rt):pt;for(de=Zr.length-1,O=en-1;O>=0;O--){const nn=Z+O,pn=$[nn],Qr=nn+1<oe?$[nn+1].el:A;Rt[O]===0?X(null,pn,C,Qr,x,U,D,I,F):Cn&&(de<0||O!==Zr[de]?Me(pn,C,Qr,2):de--)}}},Me=(g,$,C,A,x=null)=>{const{el:U,type:D,transition:I,children:F,shapeFlag:O}=g;if(O&6){Me(g.component.subTree,$,C,A);return}if(O&128){g.suspense.move($,C,A);return}if(O&64){D.move(g,$,C,ye);return}if(D===q){s(U,$,C);for(let ne=0;ne<F.length;ne++)Me(F[ne],$,C,A);s(g.anchor,$,C);return}if(D===ds){me(g,$,C);return}if(A!==2&&O&1&&I)if(A===0)I.beforeEnter(U),s(U,$,C),Ze(()=>I.enter(U),x);else{const{leave:ne,delayLeave:E,afterLeave:H}=I,Z=()=>s(U,$,C),ae=()=>{ne(U,()=>{Z(),H&&H()})};E?E(U,Z,ae):ae()}else s(U,$,C)},De=(g,$,C,A=!1,x=!1)=>{const{type:U,props:D,ref:I,children:F,dynamicChildren:O,shapeFlag:oe,patchFlag:ne,dirs:E}=g;if(I!=null&&ur(I,null,C,g,!0),oe&256){$.ctx.deactivate(g);return}const H=oe&1&&E,Z=!bs(g);let ae;if(Z&&(ae=D&&D.onVnodeBeforeUnmount)&&mn(ae,$,g),oe&6)te(g.component,C,A);else{if(oe&128){g.suspense.unmount(C,A);return}H&&jn(g,null,$,"beforeUnmount"),oe&64?g.type.remove(g,$,C,x,ye,A):O&&(U!==q||ne>0&&ne&64)?j(O,$,C,!1,!0):(U===q&&ne&384||!x&&oe&16)&&j(F,$,C),A&&qe(g)}(Z&&(ae=D&&D.onVnodeUnmounted)||H)&&Ze(()=>{ae&&mn(ae,$,g),H&&jn(g,null,$,"unmounted")},C)},qe=g=>{const{type:$,el:C,anchor:A,transition:x}=g;if($===q){T(C,A);return}if($===ds){Te(g);return}const U=()=>{r(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:D,delayLeave:I}=x,F=()=>D(C,U);I?I(g.el,U,F):F()}else U()},T=(g,$)=>{let C;for(;g!==$;)C=b(g),r(g),g=C;r($)},te=(g,$,C)=>{const{bum:A,scope:x,update:U,subTree:D,um:I}=g;A&&cs(A),x.stop(),U&&(U.active=!1,De(D,g,$,C)),I&&Ze(I,$),Ze(()=>{g.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},j=(g,$,C,A=!1,x=!1,U=0)=>{for(let D=U;D<g.length;D++)De(g[D],$,C,A,x)},re=g=>g.shapeFlag&6?re(g.component.subTree):g.shapeFlag&128?g.suspense.next():b(g.anchor||g.el),$e=(g,$,C)=>{g==null?$._vnode&&De($._vnode,null,null,!0):X($._vnode||null,g,$,null,null,null,C),La(),$._vnode=g},ye={p:X,um:De,m:Me,r:qe,mt:an,mc:Ie,pc:le,pbc:Ye,n:re,o:e};let pe,ue;return n&&([pe,ue]=n(ye)),{render:$e,hydrate:pe,createApp:td($e,pe)}}function Wn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function ei(e,n,t=!1){const s=e.children,r=n.children;if(ie(s)&&ie(r))for(let a=0;a<s.length;a++){const o=s[a];let i=r[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[a]=An(r[a]),i.el=o.el),t||ei(o,i))}}function od(e){const n=e.slice(),t=[0];let s,r,a,o,i;const l=e.length;for(s=0;s<l;s++){const p=e[s];if(p!==0){if(r=t[t.length-1],e[r]<p){n[s]=r,t.push(s);continue}for(a=0,o=t.length-1;a<o;)i=a+o>>1,e[t[i]]<p?a=i+1:o=i;p<e[t[a]]&&(a>0&&(n[s]=t[a-1]),t[a]=s)}}for(a=t.length,o=t[a-1];a-- >0;)t[a]=o,o=n[o];return t}const ad=e=>e.__isTeleport,Or="components";function d(e,n){return ti(Or,e,!0,n)||e}const ni=Symbol();function on(e){return Oe(e)?ti(Or,e,!1)||e:e||ni}function ti(e,n,t=!0,s=!1){const r=We||Ve;if(r){const a=r.type;if(e===Or){const i=gd(a);if(i&&(i===n||i===gn(n)||i===As(gn(n))))return a}const o=bo(r[e]||a[e],n)||bo(r.appContext[e],n);return!o&&s?a:o}}function bo(e,n){return e&&(e[n]||e[gn(n)]||e[As(gn(n))])}const q=Symbol(void 0),Hr=Symbol(void 0),qn=Symbol(void 0),ds=Symbol(void 0),Lt=[];let Qn=null;function c(e=!1){Lt.push(Qn=e?null:[])}function id(){Lt.pop(),Qn=Lt[Lt.length-1]||null}let $s=1;function vo(e){$s+=e}function si(e){return e.dynamicChildren=$s>0?Qn||pt:null,id(),$s>0&&Qn&&Qn.push(e),e}function y(e,n,t,s,r,a){return si(_(e,n,t,s,r,a,!0))}function w(e,n,t,s,r){return si(u(e,n,t,s,r,!0))}function ys(e){return e?e.__v_isVNode===!0:!1}function Tt(e,n){return e.type===n.type&&e.key===n.key}const Bs="__vInternal",ri=({key:e})=>e!=null?e:null,hs=({ref:e,ref_key:n,ref_for:t})=>e!=null?Oe(e)||Pe(e)||he(e)?{i:We,r:e,k:n,f:!!t}:e:null;function _(e,n=null,t=null,s=0,r=null,a=e===q?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ri(n),ref:n&&hs(n),scopeId:Ps,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(Pr(l,t),a&128&&e.normalize(l)):t&&(l.shapeFlag|=Oe(t)?8:16),$s>0&&!o&&Qn&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Qn.push(l),l}const u=ld;function ld(e,n=null,t=null,s=0,r=null,a=!1){if((!e||e===ni)&&(e=qn),ys(e)){const i=jt(e,n,!0);return t&&Pr(i,t),i}if(bd(e)&&(e=e.__vccOpts),n){n=Xt(n);let{class:i,style:l}=n;i&&!Oe(i)&&(n.class=Se(i)),Ae(l)&&(Ea(l)&&!ie(l)&&(l=Ke({},l)),n.style=Bn(l))}const o=Oe(e)?1:Ic(e)?128:ad(e)?64:Ae(e)?4:he(e)?2:0;return _(e,n,t,s,r,o,a,!0)}function Xt(e){return e?Ea(e)||Bs in e?Ke({},e):e:null}function jt(e,n,t=!1){const{props:s,ref:r,patchFlag:a,children:o}=e,i=n?G(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&ri(i),ref:n&&n.ref?t&&r?ie(r)?r.concat(hs(n)):[r,hs(n)]:hs(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==q?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor}}function k(e=" ",n=0){return u(Hr,null,e,n)}function Ds(e,n){const t=u(ds,null,e);return t.staticCount=n,t}function K(e="",n=!1){return n?(c(),w(qn,null,e)):u(qn,null,e)}function _n(e){return e==null||typeof e=="boolean"?u(qn):ie(e)?u(q,null,e.slice()):typeof e=="object"?An(e):u(Hr,null,String(e))}function An(e){return e.el===null||e.memo?e:jt(e)}function Pr(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(ie(n))t=16;else if(typeof n=="object")if(s&65){const r=n.default;r&&(r._c&&(r._d=!1),Pr(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!(Bs in n)?n._ctx=We:r===3&&We&&(We.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else he(n)?(n={default:n,_ctx:We},t=32):(n=String(n),s&64?(t=16,n=[k(n)]):t=8);e.children=n,e.shapeFlag|=t}function G(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const r in s)if(r==="class")n.class!==s.class&&(n.class=Se([n.class,s.class]));else if(r==="style")n.style=Bn([n.style,s.style]);else if(Ts(r)){const a=n[r],o=s[r];o&&a!==o&&!(ie(a)&&a.includes(o))&&(n[r]=a?[].concat(a,o):o)}else r!==""&&(n[r]=s[r])}return n}function mn(e,n,t,s=null){cn(e,n,7,[t,s])}function He(e,n,t,s){let r;const a=t&&t[s];if(ie(e)||Oe(e)){r=new Array(e.length);for(let o=0,i=e.length;o<i;o++)r[o]=n(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=n(o+1,o,void 0,a&&a[o])}else if(Ae(e))if(e[Symbol.iterator])r=Array.from(e,(o,i)=>n(o,i,void 0,a&&a[i]));else{const o=Object.keys(e);r=new Array(o.length);for(let i=0,l=o.length;i<l;i++){const p=o[i];r[i]=n(e[p],p,i,a&&a[i])}}else r=[];return t&&(t[s]=r),r}function P(e,n,t={},s,r){if(We.isCE||We.parent&&bs(We.parent)&&We.parent.isCE)return u("slot",n==="default"?null:{name:n},s&&s());let a=e[n];a&&a._c&&(a._d=!1),c();const o=a&&oi(a(t)),i=w(q,{key:t.key||`_${n}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function oi(e){return e.some(n=>ys(n)?!(n.type===qn||n.type===q&&!oi(n.children)):!0)?e:null}const cr=e=>e?ai(e)?qs(e)||e.proxy:cr(e.parent):null,ks=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cr(e.parent),$root:e=>cr(e.root),$emit:e=>e.emit,$options:e=>Ka(e),$forceUpdate:e=>()=>Oa(e.update),$nextTick:e=>Ir.bind(e.proxy),$watch:e=>Mc.bind(e)}),ud={get({_:e},n){const{ctx:t,setupState:s,data:r,props:a,accessCache:o,type:i,appContext:l}=e;let p;if(n[0]!=="$"){const R=o[n];if(R!==void 0)switch(R){case 1:return s[n];case 2:return r[n];case 4:return t[n];case 3:return a[n]}else{if(s!==we&&ge(s,n))return o[n]=1,s[n];if(r!==we&&ge(r,n))return o[n]=2,r[n];if((p=e.propsOptions[0])&&ge(p,n))return o[n]=3,a[n];if(t!==we&&ge(t,n))return o[n]=4,t[n];ar&&(o[n]=0)}}const f=ks[n];let m,b;if(f)return n==="$attrs"&&rn(e,"get",n),f(e);if((m=i.__cssModules)&&(m=m[n]))return m;if(t!==we&&ge(t,n))return o[n]=4,t[n];if(b=l.config.globalProperties,ge(b,n))return b[n]},set({_:e},n,t){const{data:s,setupState:r,ctx:a}=e;return r!==we&&ge(r,n)?(r[n]=t,!0):s!==we&&ge(s,n)?(s[n]=t,!0):ge(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:r,propsOptions:a}},o){let i;return!!t[o]||e!==we&&ge(e,o)||n!==we&&ge(n,o)||(i=a[0])&&ge(i,o)||ge(s,o)||ge(ks,o)||ge(r.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ge(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}},cd=Ja();let dd=0;function hd(e,n,t){const s=e.type,r=(n?n.appContext:e.appContext)||cd,a={uid:dd++,vnode:e,type:s,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ya(s,r),emitsOptions:Da(s,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=Cc.bind(null,a),e.ce&&e.ce(a),a}let Ve=null;const _t=e=>{Ve=e,e.scope.on()},Xn=()=>{Ve&&Ve.scope.off(),Ve=null};function ai(e){return e.vnode.shapeFlag&4}let Wt=!1;function pd(e,n=!1){Wt=n;const{props:t,children:s}=e.vnode,r=ai(e);Zc(e,t,r,n),Jc(e,s);const a=r?md(e,n):void 0;return Wt=!1,a}function md(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Ra(new Proxy(e.ctx,ud));const{setup:s}=t;if(s){const r=e.setupContext=s.length>1?_d(e):null;_t(e),kt();const a=Ln(s,e,0,[e.props,r]);if(wt(),Xn(),ha(a)){if(a.then(Xn,Xn),n)return a.then(o=>{$o(e,o,n)}).catch(o=>{Os(o,e,0)});e.asyncDep=a}else $o(e,a,n)}else ii(e,n)}function $o(e,n,t){he(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ae(n)&&(e.setupState=Aa(n)),ii(e,t)}let yo;function ii(e,n,t){const s=e.type;if(!e.render){if(!n&&yo&&!s.render){const r=s.template;if(r){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:i,compilerOptions:l}=s,p=Ke(Ke({isCustomElement:a,delimiters:i},o),l);s.render=yo(r,p)}}e.render=s.render||un}_t(e),kt(),jc(e),wt(),Xn()}function fd(e){return new Proxy(e.attrs,{get(n,t){return rn(e,"get","$attrs"),n[t]}})}function _d(e){const n=s=>{e.exposed=s||{}};let t;return{get attrs(){return t||(t=fd(e))},slots:e.slots,emit:e.emit,expose:n}}function qs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Aa(Ra(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ks)return ks[t](e)}}))}function gd(e){return he(e)&&e.displayName||e.name}function bd(e){return he(e)&&"__vccOpts"in e}const z=(e,n)=>$c(e,n,Wt);function gt(e,n,t){const s=arguments.length;return s===2?Ae(n)&&!ie(n)?ys(n)?u(e,null,[n]):u(e,n):u(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ys(t)&&(t=[t]),u(e,n,t))}const vd="3.2.33",$d="http://www.w3.org/2000/svg",Gn=typeof document!="undefined"?document:null,ko=Gn&&Gn.createElement("template"),yd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const r=n?Gn.createElementNS($d,e):Gn.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,t,s,r,a){const o=t?t.previousSibling:n.lastChild;if(r&&(r===a||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===a||!(r=r.nextSibling)););else{ko.innerHTML=s?`<svg>${e}</svg>`:e;const i=ko.content;if(s){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function kd(e,n,t){const s=e._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function wd(e,n,t){const s=e.style,r=Oe(t);if(t&&!r){for(const a in t)dr(s,a,t[a]);if(n&&!Oe(n))for(const a in n)t[a]==null&&dr(s,a,"")}else{const a=s.display;r?n!==t&&(s.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const wo=/\s*!important$/;function dr(e,n,t){if(ie(t))t.forEach(s=>dr(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=Sd(e,n);wo.test(t)?e.setProperty(nt(s),t.replace(wo,""),"important"):e[s]=t}}const So=["Webkit","Moz","ms"],Gs={};function Sd(e,n){const t=Gs[n];if(t)return t;let s=gn(n);if(s!=="filter"&&s in e)return Gs[n]=s;s=As(s);for(let r=0;r<So.length;r++){const a=So[r]+s;if(a in e)return Gs[n]=a}return n}const xo="http://www.w3.org/1999/xlink";function xd(e,n,t,s,r){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(xo,n.slice(6,n.length)):e.setAttributeNS(xo,n,t);else{const a=Ru(n);t==null||a&&!ca(t)?e.removeAttribute(n):e.setAttribute(n,a?"":t)}}function Cd(e,n,t,s,r,a,o){if(n==="innerHTML"||n==="textContent"){s&&o(s,r,a),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t==null?"":t;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=ca(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}const[li,Ed]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(t&&Number(t[1])<=53)}return[e,n]})();let hr=0;const Rd=Promise.resolve(),Td=()=>{hr=0},Nd=()=>hr||(Rd.then(Td),hr=li());function $n(e,n,t,s){e.addEventListener(n,t,s)}function Id(e,n,t,s){e.removeEventListener(n,t,s)}function Ad(e,n,t,s,r=null){const a=e._vei||(e._vei={}),o=a[n];if(s&&o)o.value=s;else{const[i,l]=Md(n);if(s){const p=a[n]=Od(s,r);$n(e,i,p,l)}else o&&(Id(e,i,o,l),a[n]=void 0)}}const Co=/(?:Once|Passive|Capture)$/;function Md(e){let n;if(Co.test(e)){n={};let t;for(;t=e.match(Co);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[nt(e.slice(2)),n]}function Od(e,n){const t=s=>{const r=s.timeStamp||li();(Ed||r>=t.attached-1)&&cn(Hd(s,t.value),n,5,[s])};return t.value=e,t.attached=Nd(),t}function Hd(e,n){if(ie(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>r=>!r._stopped&&s&&s(r))}else return n}const Eo=/^on[a-z]/,Pd=(e,n,t,s,r=!1,a,o,i,l)=>{n==="class"?kd(e,s,r):n==="style"?wd(e,t,s):Ts(n)?vr(n)||Ad(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ld(e,n,s,r))?Cd(e,n,s,a,o,i,l):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),xd(e,n,s,r))};function Ld(e,n,t,s){return s?!!(n==="innerHTML"||n==="textContent"||n in e&&Eo.test(n)&&he(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Eo.test(n)&&Oe(t)?!1:n in e}const Vn=e=>{const n=e.props["onUpdate:modelValue"];return ie(n)?t=>cs(n,t):n};function Bd(e){e.target.composing=!0}function Ro(e){const n=e.target;n.composing&&(n.composing=!1,Dd(n,"input"))}function Dd(e,n){const t=document.createEvent("HTMLEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t)}const ws={created(e,{modifiers:{lazy:n,trim:t,number:s}},r){e._assign=Vn(r);const a=s||r.props&&r.props.type==="number";$n(e,n?"change":"input",o=>{if(o.target.composing)return;let i=e.value;t?i=i.trim():a&&(i=fs(i)),e._assign(i)}),t&&$n(e,"change",()=>{e.value=e.value.trim()}),n||($n(e,"compositionstart",Bd),$n(e,"compositionend",Ro),$n(e,"change",Ro))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:s,number:r}},a){if(e._assign=Vn(a),e.composing||document.activeElement===e&&(t||s&&e.value.trim()===n||(r||e.type==="number")&&fs(e.value)===n))return;const o=n==null?"":n;e.value!==o&&(e.value=o)}},Lr={deep:!0,created(e,n,t){e._assign=Vn(t),$n(e,"change",()=>{const s=e._modelValue,r=bt(e),a=e.checked,o=e._assign;if(ie(s)){const i=br(s,r),l=i!==-1;if(a&&!l)o(s.concat(r));else if(!a&&l){const p=[...s];p.splice(i,1),o(p)}}else if(yt(s)){const i=new Set(s);a?i.add(r):i.delete(r),o(i)}else o(ci(e,a))})},mounted:To,beforeUpdate(e,n,t){e._assign=Vn(t),To(e,n,t)}};function To(e,{value:n,oldValue:t},s){e._modelValue=n,ie(n)?e.checked=br(n,s.props.value)>-1:yt(n)?e.checked=n.has(s.props.value):n!==t&&(e.checked=et(n,ci(e,!0)))}const Br={created(e,{value:n},t){e.checked=et(n,t.props.value),e._assign=Vn(t),$n(e,"change",()=>{e._assign(bt(e))})},beforeUpdate(e,{value:n,oldValue:t},s){e._assign=Vn(s),n!==t&&(e.checked=et(n,s.props.value))}},ui={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const r=yt(n);$n(e,"change",()=>{const a=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?fs(bt(o)):bt(o));e._assign(e.multiple?r?new Set(a):a:a[0])}),e._assign=Vn(s)},mounted(e,{value:n}){No(e,n)},beforeUpdate(e,n,t){e._assign=Vn(t)},updated(e,{value:n}){No(e,n)}};function No(e,n){const t=e.multiple;if(!(t&&!ie(n)&&!yt(n))){for(let s=0,r=e.options.length;s<r;s++){const a=e.options[s],o=bt(a);if(t)ie(n)?a.selected=br(n,o)>-1:a.selected=n.has(o);else if(et(bt(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function bt(e){return"_value"in e?e._value:e.value}function ci(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const di={created(e,n,t){is(e,n,t,null,"created")},mounted(e,n,t){is(e,n,t,null,"mounted")},beforeUpdate(e,n,t,s){is(e,n,t,s,"beforeUpdate")},updated(e,n,t,s){is(e,n,t,s,"updated")}};function is(e,n,t,s,r){let a;switch(e.tagName){case"SELECT":a=ui;break;case"TEXTAREA":a=ws;break;default:switch(t.props&&t.props.type){case"checkbox":a=Lr;break;case"radio":a=Br;break;default:a=ws}}const o=a[r];o&&o(e,n,t,s)}const qd=["ctrl","shift","alt","meta"],Vd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>qd.some(t=>e[`${t}Key`]&&!n.includes(t))},On=(e,n)=>(t,...s)=>{for(let r=0;r<n.length;r++){const a=Vd[n[r]];if(a&&a(t,n))return}return e(t,...s)},Ud={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ys=(e,n)=>t=>{if(!("key"in t))return;const s=nt(t.key);if(n.some(r=>r===s||Ud[r]===s))return e(t)},Fd={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Nt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:s}){!n!=!t&&(s?n?(s.beforeEnter(e),Nt(e,!0),s.enter(e)):s.leave(e,()=>{Nt(e,!1)}):Nt(e,n))},beforeUnmount(e,{value:n}){Nt(e,n)}};function Nt(e,n){e.style.display=n?e._vod:"none"}const zd=Ke({patchProp:Pd},yd);let Io;function jd(){return Io||(Io=sd(zd))}const Wd=(...e)=>{const n=jd().createApp(...e),{mount:t}=n;return n.mount=s=>{const r=Kd(s);if(!r)return;const a=n._component;!he(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},n};function Kd(e){return Oe(e)?document.querySelector(e):e}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",xt=e=>hi?Symbol(e):"_vr_"+e,Gd=xt("rvlm"),Ao=xt("rvd"),Dr=xt("r"),pi=xt("rl"),pr=xt("rvl"),ht=typeof window!="undefined";function Yd(e){return e.__esModule||hi&&e[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Zs(e,n){const t={};for(const s in n){const r=n[s];t[s]=Array.isArray(r)?r.map(e):e(r)}return t}const Bt=()=>{},Zd=/\/$/,Qd=e=>e.replace(Zd,"");function Qs(e,n,t="/"){let s,r={},a="",o="";const i=n.indexOf("?"),l=n.indexOf("#",i>-1?i:0);return i>-1&&(s=n.slice(0,i),a=n.slice(i+1,l>-1?l:n.length),r=e(a)),l>-1&&(s=s||n.slice(0,l),o=n.slice(l,n.length)),s=nh(s!=null?s:n,t),{fullPath:s+(a&&"?")+a+o,path:s,query:r,hash:o}}function Xd(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Mo(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Jd(e,n,t){const s=n.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&vt(n.matched[s],t.matched[r])&&mi(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function vt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function mi(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!eh(e[t],n[t]))return!1;return!0}function eh(e,n){return Array.isArray(e)?Oo(e,n):Array.isArray(n)?Oo(n,e):e===n}function Oo(e,n){return Array.isArray(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function nh(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/");let r=t.length-1,a,o;for(a=0;a<s.length;a++)if(o=s[a],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(a-(a===s.length?1:0)).join("/")}var Kt;(function(e){e.pop="pop",e.push="push"})(Kt||(Kt={}));var Dt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Dt||(Dt={}));function th(e){if(!e)if(ht){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qd(e)}const sh=/^[^#]+#/;function rh(e,n){return e.replace(sh,"#")+n}function oh(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const Vs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ah(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;n=oh(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ho(e,n){return(history.state?history.state.position-n:-1)+e}const mr=new Map;function ih(e,n){mr.set(e,n)}function lh(e){const n=mr.get(e);return mr.delete(e),n}let uh=()=>location.protocol+"//"+location.host;function fi(e,n){const{pathname:t,search:s,hash:r}=n,a=e.indexOf("#");if(a>-1){let i=r.includes(e.slice(a))?e.slice(a).length:1,l=r.slice(i);return l[0]!=="/"&&(l="/"+l),Mo(l,"")}return Mo(t,e)+s+r}function ch(e,n,t,s){let r=[],a=[],o=null;const i=({state:b})=>{const R=fi(e,location),W=t.value,L=n.value;let X=0;if(b){if(t.value=R,n.value=b,o&&o===W){o=null;return}X=L?b.position-L.position:0}else s(R);r.forEach(se=>{se(t.value,W,{delta:X,type:Kt.pop,direction:X?X>0?Dt.forward:Dt.back:Dt.unknown})})};function l(){o=t.value}function p(b){r.push(b);const R=()=>{const W=r.indexOf(b);W>-1&&r.splice(W,1)};return a.push(R),R}function f(){const{history:b}=window;!b.state||b.replaceState(ke({},b.state,{scroll:Vs()}),"")}function m(){for(const b of a)b();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:p,destroy:m}}function Po(e,n,t,s=!1,r=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:r?Vs():null}}function dh(e){const{history:n,location:t}=window,s={value:fi(e,t)},r={value:n.state};r.value||a(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(l,p,f){const m=e.indexOf("#"),b=m>-1?(t.host&&document.querySelector("base")?e:e.slice(m))+l:uh()+e+l;try{n[f?"replaceState":"pushState"](p,"",b),r.value=p}catch(R){console.error(R),t[f?"replace":"assign"](b)}}function o(l,p){const f=ke({},n.state,Po(r.value.back,l,r.value.forward,!0),p,{position:r.value.position});a(l,f,!0),s.value=l}function i(l,p){const f=ke({},r.value,n.state,{forward:l,scroll:Vs()});a(f.current,f,!0);const m=ke({},Po(s.value,l,null),{position:f.position+1},p);a(l,m,!1),s.value=l}return{location:s,state:r,push:i,replace:o}}function hh(e){e=th(e);const n=dh(e),t=ch(e,n.state,n.location,n.replace);function s(a,o=!0){o||t.pauseListeners(),history.go(a)}const r=ke({location:"",base:e,go:s,createHref:rh.bind(null,e)},n,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function ph(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),hh(e)}function mh(e){return typeof e=="string"||e&&typeof e=="object"}function _i(e){return typeof e=="string"||typeof e=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gi=xt("nf");var Lo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Lo||(Lo={}));function $t(e,n){return ke(new Error,{type:e,[gi]:!0},n)}function Tn(e,n){return e instanceof Error&&gi in e&&(n==null||!!(e.type&n))}const Bo="[^/]+?",fh={sensitive:!1,strict:!1,start:!0,end:!0},_h=/[.+*?^${}()[\]/\\]/g;function gh(e,n){const t=ke({},fh,n),s=[];let r=t.start?"^":"";const a=[];for(const p of e){const f=p.length?[]:[90];t.strict&&!p.length&&(r+="/");for(let m=0;m<p.length;m++){const b=p[m];let R=40+(t.sensitive?.25:0);if(b.type===0)m||(r+="/"),r+=b.value.replace(_h,"\\$&"),R+=40;else if(b.type===1){const{value:W,repeatable:L,optional:X,regexp:se}=b;a.push({name:W,repeatable:L,optional:X});const ce=se||Bo;if(ce!==Bo){R+=10;try{new RegExp(`(${ce})`)}catch(me){throw new Error(`Invalid custom RegExp for param "${W}" (${ce}): `+me.message)}}let _e=L?`((?:${ce})(?:/(?:${ce}))*)`:`(${ce})`;m||(_e=X&&p.length<2?`(?:/${_e})`:"/"+_e),X&&(_e+="?"),r+=_e,R+=20,X&&(R+=-8),L&&(R+=-20),ce===".*"&&(R+=-50)}f.push(R)}s.push(f)}if(t.strict&&t.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function i(p){const f=p.match(o),m={};if(!f)return null;for(let b=1;b<f.length;b++){const R=f[b]||"",W=a[b-1];m[W.name]=R&&W.repeatable?R.split("/"):R}return m}function l(p){let f="",m=!1;for(const b of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const R of b)if(R.type===0)f+=R.value;else if(R.type===1){const{value:W,repeatable:L,optional:X}=R,se=W in p?p[W]:"";if(Array.isArray(se)&&!L)throw new Error(`Provided param "${W}" is an array but it is not repeatable (* or + modifiers)`);const ce=Array.isArray(se)?se.join("/"):se;if(!ce)if(X)b.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${W}"`);f+=ce}}return f}return{re:o,score:s,keys:a,parse:i,stringify:l}}function bh(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function vh(e,n){let t=0;const s=e.score,r=n.score;for(;t<s.length&&t<r.length;){const a=bh(s[t],r[t]);if(a)return a;t++}return r.length-s.length}const $h={type:0,value:""},yh=/[a-zA-Z0-9_]/;function kh(e){if(!e)return[[]];if(e==="/")return[[$h]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(R){throw new Error(`ERR (${t})/"${p}": ${R}`)}let t=0,s=t;const r=[];let a;function o(){a&&r.push(a),a=[]}let i=0,l,p="",f="";function m(){!p||(t===0?a.push({type:0,value:p}):t===1||t===2||t===3?(a.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:p,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),p="")}function b(){p+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:l==="/"?(p&&m(),o()):l===":"?(m(),t=1):b();break;case 4:b(),t=s;break;case 1:l==="("?t=2:yh.test(l)?b():(m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:t=3:f+=l;break;case 3:m(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,f="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${p}"`),m(),o(),r}function wh(e,n,t){const s=gh(kh(e.path),t),r=ke(s,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function Sh(e,n){const t=[],s=new Map;n=qo({strict:!1,end:!0,sensitive:!1},n);function r(f){return s.get(f)}function a(f,m,b){const R=!b,W=Ch(f);W.aliasOf=b&&b.record;const L=qo(n,f),X=[W];if("alias"in f){const _e=typeof f.alias=="string"?[f.alias]:f.alias;for(const me of _e)X.push(ke({},W,{components:b?b.record.components:W.components,path:me,aliasOf:b?b.record:W}))}let se,ce;for(const _e of X){const{path:me}=_e;if(m&&me[0]!=="/"){const Te=m.record.path,Be=Te[Te.length-1]==="/"?"":"/";_e.path=m.record.path+(me&&Be+me)}if(se=wh(_e,m,L),b?b.alias.push(se):(ce=ce||se,ce!==se&&ce.alias.push(se),R&&f.name&&!Do(se)&&o(f.name)),"children"in W){const Te=W.children;for(let Be=0;Be<Te.length;Be++)a(Te[Be],se,b&&b.children[Be])}b=b||se,l(se)}return ce?()=>{o(ce)}:Bt}function o(f){if(_i(f)){const m=s.get(f);m&&(s.delete(f),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(f);m>-1&&(t.splice(m,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function i(){return t}function l(f){let m=0;for(;m<t.length&&vh(f,t[m])>=0&&(f.record.path!==t[m].record.path||!bi(f,t[m]));)m++;t.splice(m,0,f),f.record.name&&!Do(f)&&s.set(f.record.name,f)}function p(f,m){let b,R={},W,L;if("name"in f&&f.name){if(b=s.get(f.name),!b)throw $t(1,{location:f});L=b.record.name,R=ke(xh(m.params,b.keys.filter(ce=>!ce.optional).map(ce=>ce.name)),f.params),W=b.stringify(R)}else if("path"in f)W=f.path,b=t.find(ce=>ce.re.test(W)),b&&(R=b.parse(W),L=b.record.name);else{if(b=m.name?s.get(m.name):t.find(ce=>ce.re.test(m.path)),!b)throw $t(1,{location:f,currentLocation:m});L=b.record.name,R=ke({},m.params,f.params),W=b.stringify(R)}const X=[];let se=b;for(;se;)X.unshift(se.record),se=se.parent;return{name:L,path:W,params:R,matched:X,meta:Rh(X)}}return e.forEach(f=>a(f)),{addRoute:a,resolve:p,removeRoute:o,getRoutes:i,getRecordMatcher:r}}function xh(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function Ch(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Eh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Eh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="boolean"?t:t[s];return n}function Do(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Rh(e){return e.reduce((n,t)=>ke(n,t.meta),{})}function qo(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function bi(e,n){return n.children.some(t=>t===e||bi(e,t))}const vi=/#/g,Th=/&/g,Nh=/\//g,Ih=/=/g,Ah=/\?/g,$i=/\+/g,Mh=/%5B/g,Oh=/%5D/g,yi=/%5E/g,Hh=/%60/g,ki=/%7B/g,Ph=/%7C/g,wi=/%7D/g,Lh=/%20/g;function qr(e){return encodeURI(""+e).replace(Ph,"|").replace(Mh,"[").replace(Oh,"]")}function Bh(e){return qr(e).replace(ki,"{").replace(wi,"}").replace(yi,"^")}function fr(e){return qr(e).replace($i,"%2B").replace(Lh,"+").replace(vi,"%23").replace(Th,"%26").replace(Hh,"`").replace(ki,"{").replace(wi,"}").replace(yi,"^")}function Dh(e){return fr(e).replace(Ih,"%3D")}function qh(e){return qr(e).replace(vi,"%23").replace(Ah,"%3F")}function Vh(e){return e==null?"":qh(e).replace(Nh,"%2F")}function Ss(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Uh(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const a=s[r].replace($i," "),o=a.indexOf("="),i=Ss(o<0?a:a.slice(0,o)),l=o<0?null:Ss(a.slice(o+1));if(i in n){let p=n[i];Array.isArray(p)||(p=n[i]=[p]),p.push(l)}else n[i]=l}return n}function Vo(e){let n="";for(let t in e){const s=e[t];if(t=Dh(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(Array.isArray(s)?s.map(a=>a&&fr(a)):[s&&fr(s)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function Fh(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return n}function It(){let e=[];function n(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Mn(e,n,t,s,r){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,i)=>{const l=m=>{m===!1?i($t(4,{from:t,to:n})):m instanceof Error?i(m):mh(m)?i($t(2,{from:n,to:m})):(a&&s.enterCallbacks[r]===a&&typeof m=="function"&&a.push(m),o())},p=e.call(s&&s.instances[r],n,t,l);let f=Promise.resolve(p);e.length<3&&(f=f.then(l)),f.catch(m=>i(m))})}function Xs(e,n,t,s){const r=[];for(const a of e)for(const o in a.components){let i=a.components[o];if(!(n!=="beforeRouteEnter"&&!a.instances[o]))if(zh(i)){const p=(i.__vccOpts||i)[n];p&&r.push(Mn(p,t,s,a,o))}else{let l=i();r.push(()=>l.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${a.path}"`));const f=Yd(p)?p.default:p;a.components[o]=f;const b=(f.__vccOpts||f)[n];return b&&Mn(b,t,s,a,o)()}))}}return r}function zh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uo(e){const n=xe(Dr),t=xe(pi),s=z(()=>n.resolve(Ot(e.to))),r=z(()=>{const{matched:l}=s.value,{length:p}=l,f=l[p-1],m=t.matched;if(!f||!m.length)return-1;const b=m.findIndex(vt.bind(null,f));if(b>-1)return b;const R=Fo(l[p-2]);return p>1&&Fo(f)===R&&m[m.length-1].path!==R?m.findIndex(vt.bind(null,l[p-2])):b}),a=z(()=>r.value>-1&&Gh(t.params,s.value.params)),o=z(()=>r.value>-1&&r.value===t.matched.length-1&&mi(t.params,s.value.params));function i(l={}){return Kh(l)?n[Ot(e.replace)?"replace":"push"](Ot(e.to)).catch(Bt):Promise.resolve()}return{route:s,href:z(()=>s.value.href),isActive:a,isExactActive:o,navigate:i}}const jh=v({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uo,setup(e,{slots:n}){const t=Y(Uo(e)),{options:s}=xe(Dr),r=z(()=>({[zo(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[zo(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:gt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},a)}}}),Wh=jh;function Kh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Gh(e,n){for(const t in n){const s=n[t],r=e[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((a,o)=>a!==r[o]))return!1}return!0}function Fo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zo=(e,n,t)=>e!=null?e:n!=null?n:t,Yh=v({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:t}){const s=xe(pr),r=z(()=>e.route||s.value),a=xe(Ao,0),o=z(()=>r.value.matched[a]);Ee(Ao,a+1),Ee(Gd,o),Ee(pr,r);const i=kn();return Ue(()=>[i.value,o.value,e.name],([l,p,f],[m,b,R])=>{p&&(p.instances[f]=l,b&&b!==p&&l&&l===m&&(p.leaveGuards.size||(p.leaveGuards=b.leaveGuards),p.updateGuards.size||(p.updateGuards=b.updateGuards))),l&&p&&(!b||!vt(p,b)||!m)&&(p.enterCallbacks[f]||[]).forEach(W=>W(l))},{flush:"post"}),()=>{const l=r.value,p=o.value,f=p&&p.components[e.name],m=e.name;if(!f)return jo(t.default,{Component:f,route:l});const b=p.props[e.name],R=b?b===!0?l.params:typeof b=="function"?b(l):b:null,L=gt(f,ke({},R,n,{onVnodeUnmounted:X=>{X.component.isUnmounted&&(p.instances[m]=null)},ref:i}));return jo(t.default,{Component:L,route:l})||L}}});function jo(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Zh=Yh;function Qh(e){const n=Sh(e.routes,e),t=e.parseQuery||Uh,s=e.stringifyQuery||Vo,r=e.history,a=It(),o=It(),i=It(),l=mc(Rn);let p=Rn;ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Zs.bind(null,T=>""+T),m=Zs.bind(null,Vh),b=Zs.bind(null,Ss);function R(T,te){let j,re;return _i(T)?(j=n.getRecordMatcher(T),re=te):re=T,n.addRoute(re,j)}function W(T){const te=n.getRecordMatcher(T);te&&n.removeRoute(te)}function L(){return n.getRoutes().map(T=>T.record)}function X(T){return!!n.getRecordMatcher(T)}function se(T,te){if(te=ke({},te||l.value),typeof T=="string"){const ue=Qs(t,T,te.path),g=n.resolve({path:ue.path},te),$=r.createHref(ue.fullPath);return ke(ue,g,{params:b(g.params),hash:Ss(ue.hash),redirectedFrom:void 0,href:$})}let j;if("path"in T)j=ke({},T,{path:Qs(t,T.path,te.path).path});else{const ue=ke({},T.params);for(const g in ue)ue[g]==null&&delete ue[g];j=ke({},T,{params:m(T.params)}),te.params=m(te.params)}const re=n.resolve(j,te),$e=T.hash||"";re.params=f(b(re.params));const ye=Xd(s,ke({},T,{hash:Bh($e),path:re.path})),pe=r.createHref(ye);return ke({fullPath:ye,hash:$e,query:s===Vo?Fh(T.query):T.query||{}},re,{redirectedFrom:void 0,href:pe})}function ce(T){return typeof T=="string"?Qs(t,T,l.value.path):ke({},T)}function _e(T,te){if(p!==T)return $t(8,{from:te,to:T})}function me(T){return Ge(T)}function Te(T){return me(ke(ce(T),{replace:!0}))}function Be(T){const te=T.matched[T.matched.length-1];if(te&&te.redirect){const{redirect:j}=te;let re=typeof j=="function"?j(T):j;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=ce(re):{path:re},re.params={}),ke({query:T.query,hash:T.hash,params:T.params},re)}}function Ge(T,te){const j=p=se(T),re=l.value,$e=T.state,ye=T.force,pe=T.replace===!0,ue=Be(j);if(ue)return Ge(ke(ce(ue),{state:$e,force:ye,replace:pe}),te||j);const g=j;g.redirectedFrom=te;let $;return!ye&&Jd(s,re,j)&&($=$t(16,{to:g,from:re}),be(re,re,!0,!1)),($?Promise.resolve($):Ie(g,re)).catch(C=>Tn(C)?Tn(C,2)?C:le(C):V(C,g,re)).then(C=>{if(C){if(Tn(C,2))return Ge(ke(ce(C.to),{state:$e,force:ye,replace:pe}),te||g)}else C=Ye(g,re,!0,pe,$e);return Qe(g,re,C),C})}function dn(T,te){const j=_e(T,te);return j?Promise.reject(j):Promise.resolve()}function Ie(T,te){let j;const[re,$e,ye]=Xh(T,te);j=Xs(re.reverse(),"beforeRouteLeave",T,te);for(const ue of re)ue.leaveGuards.forEach(g=>{j.push(Mn(g,T,te))});const pe=dn.bind(null,T,te);return j.push(pe),lt(j).then(()=>{j=[];for(const ue of a.list())j.push(Mn(ue,T,te));return j.push(pe),lt(j)}).then(()=>{j=Xs($e,"beforeRouteUpdate",T,te);for(const ue of $e)ue.updateGuards.forEach(g=>{j.push(Mn(g,T,te))});return j.push(pe),lt(j)}).then(()=>{j=[];for(const ue of T.matched)if(ue.beforeEnter&&!te.matched.includes(ue))if(Array.isArray(ue.beforeEnter))for(const g of ue.beforeEnter)j.push(Mn(g,T,te));else j.push(Mn(ue.beforeEnter,T,te));return j.push(pe),lt(j)}).then(()=>(T.matched.forEach(ue=>ue.enterCallbacks={}),j=Xs(ye,"beforeRouteEnter",T,te),j.push(pe),lt(j))).then(()=>{j=[];for(const ue of o.list())j.push(Mn(ue,T,te));return j.push(pe),lt(j)}).catch(ue=>Tn(ue,8)?ue:Promise.reject(ue))}function Qe(T,te,j){for(const re of i.list())re(T,te,j)}function Ye(T,te,j,re,$e){const ye=_e(T,te);if(ye)return ye;const pe=te===Rn,ue=ht?history.state:{};j&&(re||pe?r.replace(T.fullPath,ke({scroll:pe&&ue&&ue.scroll},$e)):r.push(T.fullPath,$e)),l.value=T,be(T,te,j,pe),le()}let Xe;function hn(){Xe=r.listen((T,te,j)=>{const re=se(T),$e=Be(re);if($e){Ge(ke($e,{replace:!0}),re).catch(Bt);return}p=re;const ye=l.value;ht&&ih(Ho(ye.fullPath,j.delta),Vs()),Ie(re,ye).catch(pe=>Tn(pe,12)?pe:Tn(pe,2)?(Ge(pe.to,re).then(ue=>{Tn(ue,20)&&!j.delta&&j.type===Kt.pop&&r.go(-1,!1)}).catch(Bt),Promise.reject()):(j.delta&&r.go(-j.delta,!1),V(pe,re,ye))).then(pe=>{pe=pe||Ye(re,ye,!1),pe&&(j.delta?r.go(-j.delta,!1):j.type===Kt.pop&&Tn(pe,20)&&r.go(-1,!1)),Qe(re,ye,pe)}).catch(Bt)})}let Je=It(),an=It(),M;function V(T,te,j){le(T);const re=an.list();return re.length?re.forEach($e=>$e(T,te,j)):console.error(T),Promise.reject(T)}function J(){return M&&l.value!==Rn?Promise.resolve():new Promise((T,te)=>{Je.add([T,te])})}function le(T){return M||(M=!T,hn(),Je.list().forEach(([te,j])=>T?j(T):te()),Je.reset()),T}function be(T,te,j,re){const{scrollBehavior:$e}=e;if(!ht||!$e)return Promise.resolve();const ye=!j&&lh(Ho(T.fullPath,0))||(re||!j)&&history.state&&history.state.scroll||null;return Ir().then(()=>$e(T,te,ye)).then(pe=>pe&&ah(pe)).catch(pe=>V(pe,T,te))}const Ce=T=>r.go(T);let Me;const De=new Set;return{currentRoute:l,addRoute:R,removeRoute:W,hasRoute:X,getRoutes:L,resolve:se,options:e,push:me,replace:Te,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:a.add,beforeResolve:o.add,afterEach:i.add,onError:an.add,isReady:J,install(T){const te=this;T.component("RouterLink",Wh),T.component("RouterView",Zh),T.config.globalProperties.$router=te,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),ht&&!Me&&l.value===Rn&&(Me=!0,me(r.location).catch($e=>{}));const j={};for(const $e in Rn)j[$e]=z(()=>l.value[$e]);T.provide(Dr,te),T.provide(pi,Y(j)),T.provide(pr,l);const re=T.unmount;De.add(T),T.unmount=function(){De.delete(T),De.size<1&&(p=Rn,Xe&&Xe(),l.value=Rn,Me=!1,M=!1),re()}}}}function lt(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function Xh(e,n){const t=[],s=[],r=[],a=Math.max(n.matched.length,e.matched.length);for(let o=0;o<a;o++){const i=n.matched[o];i&&(e.matched.find(p=>vt(p,i))?s.push(i):t.push(i));const l=e.matched[o];l&&(n.matched.find(p=>vt(p,l))||r.push(l))}return[t,s,r]}var S=(e,n)=>{const t=e.__vccOpts||e;for(const[s,r]of n)t[s]=r;return t};const Jh=v({});function ep(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ButtonDocs"}),u(o,{name:"ButtonDocsDisabled"}),u(i,{heading:"nhs-button"})],64)}var np=S(Jh,[["render",ep]]);const Wo=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],tp=v({setup(){const e=z(()=>{const r=new Set(_r.map(a=>(a.name||"").toString()[0].toUpperCase()));return Wo.map(a=>{let o=!0;return r.has(a)&&(o=!1),{text:a,disabled:o}})}),n=z(()=>Wo.map(r=>{const a=_r.filter(o=>(o.name||"").toString()[0].toUpperCase()===r);return a.length===0?{}:{name:r,items:a}}).filter(r=>Object.keys(r).length!==0));function t(r){document.getElementById("panel-"+r).scrollIntoView()}function s(){window.scrollTo(0,0)}return{navItems:e,panels:n,scrollTo:t,toTop:s}}});function sp(e,n,t,s,r,a){const o=d("nhs-nav-az-item"),i=d("nhs-nav-az"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-list-panel-item"),m=d("nhs-list-panel");return c(),y(q,null,[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,null,{default:h(()=>[(c(!0),y(q,null,He(e.navItems,(b,R)=>(c(),w(o,{key:R,disabled:b.disabled,onClick:W=>e.scrollTo(b.text)},{default:h(()=>[k(N(b.text),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:1})]),_:1})]),_:1}),u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[(c(!0),y(q,null,He(e.panels,b=>(c(),w(m,{key:b.name,label:b.name,id:`panel-${b.name}`},{default:h(()=>[(c(!0),y(q,null,He(b.items,(R,W)=>(c(),w(f,{onClick:n[0]||(n[0]=L=>e.toTop()),key:W,href:R.path},{default:h(()=>[k(N(R.name),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["label","id"]))),128))]),_:1})]),_:1})],64)}var rp=S(tp,[["render",sp]]);function Si(e,n){return e.filter(t=>!n.includes(t.name)).sort((t,s)=>t.name<s.name?-1:t.name>s.name?1:0)}function xs(e=""){const n=document.querySelector("html");n&&(e?n.setAttribute("style",`background-color: ${e};`):n.setAttribute("style",""))}const op=v({data(){return{props:[{name:"title",type:"string",required:"yes",description:"Title to be displayed on the do and don't list component."},{name:"type",type:"string",description:"Type of do and don't list component, 'cross', 'tick'. Default: tick"},{name:"items",type:"array",required:"yes",description:"Items to be displayed within the do and don't list component"},{name:"heading-level",type:"number",description:"Optional heading level for the title heading. Default: 3"}],slots:[{name:"item",props:"each item in items prop",description:"slot for each list item"}]}}});function ap(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"DoDont"}),u(o,{name:"DoDontSlots"}),u(i,{heading:"nhs-dodont"})],64)}var ip=S(op,[["render",ap]]);const lp=v({});function up(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ActionLink"}),u(i,{heading:"nhs-action-link"})],64)}var cp=S(lp,[["render",up]]);const dp=v({});function hp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"BackLink"}),u(i,{heading:"nhs-back-link"})],64)}var pp=S(dp,[["render",hp]]);const mp=v({});function fp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Breadcrumb"}),u(i,{heading:"nhs-breadcrumb"}),u(i,{heading:"nhs-breadcrumb-item"}),u(i,{heading:"nhs-breadcrumb-backlink"})],64)}var _p=S(mp,[["render",fp]]);const gp=v({});function bp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"CardBasic"}),u(o,{name:"CardClickable"}),u(o,{name:"CardImage"}),u(o,{name:"CardFeature"}),u(o,{name:"CardGroup"}),u(i,{heading:"nhs-card"}),u(i,{heading:"nhs-card-group"})],64)}var vp=S(gp,[["render",bp]]);const $p=v({});function yp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"CareCardNonUrgent"}),u(o,{name:"CareCardUrgent"}),u(o,{name:"CareCardEmergency"}),u(i,{heading:"nhs-care-card"})],64)}var kp=S($p,[["render",yp]]);const wp=v({});function Sp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ContentsList"}),u(i,{heading:"nhs-contents"}),u(i,{heading:"nhs-contents-item"})],64)}var xp=S(wp,[["render",Sp]]);const Cp=v({});function Ep(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Details"}),u(i,{heading:"nhs-details"})],64)}var Rp=S(Cp,[["render",Ep]]);const Tp=v({});function Np(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ErrorSummary"}),u(i,{heading:"nhs-error-summary"})],64)}var Ip=S(Tp,[["render",Np]]);const Ap=v({});function Mp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Body"}),u(i,{heading:"nhs-body"})],64)}var Op=S(Ap,[["render",Mp]]);const Hp=v({});function Pp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"List"}),u(i,{heading:"nhs-list"})],64)}var Lp=S(Hp,[["render",Pp]]);const Bp=v({});function Dp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ErrorText"}),u(i,{heading:"nhs-error-text"})],64)}var qp=S(Bp,[["render",Dp]]);const Vp=v({});function Up(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"HintText"}),u(i,{heading:"nhs-hint-text"})],64)}var Fp=S(Vp,[["render",Up]]);const zp=v({});function jp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"InsetText"}),u(i,{heading:"nhs-inset-text"})],64)}var Wp=S(zp,[["render",jp]]);const Kp=v({});function Gp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Heading"}),u(i,{heading:"nhs-heading"})],64)}var Yp=S(Kp,[["render",Gp]]);const Zp=v({});function Qp(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Label"}),u(o,{name:"LabelBold"}),u(o,{name:"LabelHeading"}),u(i,{heading:"nhs-label"})],64)}var Xp=S(Zp,[["render",Qp]]);const Jp=v({});function em(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Expander"}),u(o,{name:"ExpanderGroup"}),u(i,{heading:"nhs-expander"}),u(i,{heading:"nhs-expander-group"})],64)}var nm=S(Jp,[["render",em]]);const tm=v({});function sm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Fieldset"}),u(o,{name:"FieldsetHeading"}),u(o,{name:"FieldsetSlots"}),u(i,{heading:"nhs-fieldset"})],64)}var rm=S(tm,[["render",sm]]);const om=v({});function am(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Footer"}),u(i,{heading:"nhs-footer"}),u(i,{heading:"nhs-footer-item"})],64)}var im=S(om,[["render",am]]);const lm=v({});function um(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Grid"}),u(i,{heading:"nhs-main"}),u(i,{heading:"nhs-row"}),u(i,{heading:"nhs-col"})],64)}var cm=S(lm,[["render",um]]);const dm=v({});function hm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Header"}),u(o,{name:"HeaderTransactionalName"}),u(o,{name:"HeaderOrg"}),u(o,{name:"HeaderOrgWhiteNav"}),u(i,{heading:"nhs-header"}),u(i,{heading:"nhs-header-item"})],64)}var pm=S(dm,[["render",hm]]);const mm=v({});function fm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Hero"}),u(o,{name:"HeroImageText"}),u(i,{heading:"nhs-hero"})],64)}var _m=S(mm,[["render",fm]]);const gm=v({});function bm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Image"}),u(i,{heading:"nhs-image"})],64)}var vm=S(gm,[["render",bm]]);const $m=v({});function ym(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ListPanel"}),u(i,{heading:"nhs-list-panel"}),u(i,{heading:"nhs-list-panel-item"})],64)}var km=S($m,[["render",ym]]);const wm=v({});function Sm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"NavAZ"}),u(i,{heading:"nhs-nav-az"}),u(i,{heading:"nhs-nav-az-item"})],64)}var xm=S(wm,[["render",Sm]]);const Cm=v({});function Em(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Pagination"}),u(i,{heading:"nhs-pagination"})],64)}var Rm=S(Cm,[["render",Em]]);const Tm=v({});function Nm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"ReviewDate"}),u(i,{heading:"nhs-review-date"})],64)}var Im=S(Tm,[["render",Nm]]);const Am=v({});function Mm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"SkipLink"}),u(i,{heading:"nhs-skip-link"})],64)}var Om=S(Am,[["render",Mm]]);const Hm=v({});function Pm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"SummaryList"}),u(o,{name:"SummaryListNoBorder"}),u(i,{heading:"nhs-summary-list"}),u(i,{heading:"nhs-summary-list-item"})],64)}var Lm=S(Hm,[["render",Pm]]);const Bm=v({});function Dm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Tag"}),u(i,{heading:"nhs-tag"})],64)}var qm=S(Bm,[["render",Dm]]);const Vm=v({});function Um(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"WarningCallout"}),u(i,{heading:"nhs-warning-callout"})],64)}var Fm=S(Vm,[["render",Um]]);const zm=v({});function jm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Table"}),u(o,{name:"TablePanel"}),u(o,{name:"TableResponsive"}),u(i,{heading:"nhs-table"})],64)}var Wm=S(zm,[["render",jm]]);const Km=v({});function Gm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Input"}),u(o,{name:"InputError"}),u(o,{name:"InputWidth"}),u(o,{name:"InputSlots"}),u(i,{heading:"nhs-input"})],64)}var Ym=S(Km,[["render",Gm]]);const Zm=v({});function Qm(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Form"}),u(i,{heading:"nhs-form"})],64)}var Xm=S(Zm,[["render",Qm]]);const Jm=v({});function ef(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Select"}),u(o,{name:"SelectError"}),u(o,{name:"SelectSlots"}),u(i,{heading:"nhs-select"})],64)}var nf=S(Jm,[["render",ef]]);const tf=v({});function sf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Textarea"}),u(o,{name:"TextareaError"}),u(o,{name:"TextareaSlots"}),u(i,{heading:"nhs-textarea"})],64)}var rf=S(tf,[["render",sf]]);const of=v({});function af(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"DateInputError"}),u(o,{name:"DateInputSlots"}),u(i,{heading:"nhs-input-group"})],64)}var lf=S(of,[["render",af]]);const uf=v({});function cf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"Checkbox"}),u(o,{name:"CheckboxDisabled"}),u(o,{name:"CheckboxError"}),u(o,{name:"CheckboxSlots"}),u(o,{name:"CheckboxConditional"}),u(i,{heading:"nhs-checkboxes"})],64)}var df=S(uf,[["render",cf]]);const hf=v({});function pf(e,n,t,s,r,a){const o=d("code-block"),i=d("argument-table");return c(),y(q,null,[u(o,{name:"RadioError"}),u(o,{name:"RadioDisabled"}),u(o,{name:"RadioDivider"}),u(o,{name:"RadioSlots"}),u(o,{name:"RadioConditional"}),u(i,{heading:"nhs-radios"})],64)}var mf=S(hf,[["render",pf]]);const xi=[{path:"",component:rp,name:"Components"},{path:"/components/action-link",component:cp,name:"Action Link"},{path:"/components/back-link",component:pp,name:"Back Link"},{path:"/components/breadcrumb",component:_p,name:"Breadcrumb"},{path:"/components/button",component:np,name:"Button"},{path:"/components/card",component:vp,name:"Card"},{path:"/components/care-card",component:kp,name:"Care Card"},{path:"/components/contents",component:xp,name:"Contents"},{path:"/components/details",component:Rp,name:"Details"},{path:"/components/dodont",component:ip,name:"Do Don't"},{path:"/components/error-summary",component:Ip,name:"Error Summary"},{path:"/components/body",component:Op,name:"Body"},{path:"/components/list",component:Lp,name:"List"},{path:"/components/error-text",component:qp,name:"Error Text"},{path:"/components/hint-text",component:Fp,name:"Hint Text"},{path:"/components/inset-text",component:Wp,name:"Inset Text"},{path:"/components/heading",component:Yp,name:"Heading"},{path:"/components/label",component:Xp,name:"Label"},{path:"/components/expander",component:nm,name:"Expander"},{path:"/components/fieldset",component:rm,name:"Fieldset"},{path:"/components/footer",component:im,name:"Footer"},{path:"/components/grid",component:cm,name:"Grid"},{path:"/components/header",component:pm,name:"Header"},{path:"/components/hero",component:_m,name:"Hero"},{path:"/components/image",component:vm,name:"Image"},{path:"/components/list-panel",component:km,name:"List Panel"},{path:"/components/nav-az",component:xm,name:"Nav AZ"},{path:"/components/pagination",component:Rm,name:"Pagination"},{path:"/components/review-date",component:Im,name:"Review Date"},{path:"/components/skip-link",component:Om,name:"Skip Link"},{path:"/components/summary-list",component:Lm,name:"Summary List"},{path:"/components/tag",component:qm,name:"Tag"},{path:"/components/warning-callout",component:Fm,name:"Warning Callout"},{path:"/components/table",component:Wm,name:"Table"},{path:"/components/input",component:Ym,name:"Input"},{path:"/components/form",component:Xm,name:"Form"},{path:"/components/select",component:nf,name:"Select"},{path:"/components/textarea",component:rf,name:"Textarea"},{path:"/components/input-group",component:lf,name:"Input Group"},{path:"/components/checkbox",component:df,name:"Checkbox"},{path:"/components/radio",component:mf,name:"Radio"}],_r=Si(xi,["Components"]),ff=v({setup(){const e=Y({title:"NHS.UK frontend Vue",description:"Port of nhsuk-frontend library to vue.js"});return Le(()=>{xs()}),Q({},ee(e))}});function _f(e,n,t,s,r,a){const o=d("nhs-hero"),i=d("nhs-card"),l=d("nhs-card-group"),p=d("nhs-col"),f=d("nhs-row"),m=d("nhs-main");return c(),y(q,null,[u(o,{heading:e.title,text:e.description},null,8,["heading","text"]),u(m,null,{default:h(()=>[u(f,null,{default:h(()=>[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,{heading:"Components",href:"/components",description:"Component documentation and playground",clickable:""}),u(i,{heading:"Examples",href:"/examples",description:"Example pages",clickable:""})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var gf=S(ff,[["render",_f]]);const bf=v({setup(e){function n(){return sn.currentRoute.value.fullPath.split("/").length===2?{text:"Home",href:"/"}:{text:"Components",href:"/components"}}function t(){const s=[{href:"/",text:"Home"}],r=sn.currentRoute.value.fullPath.split("/");return r.length===2&&s.push({text:"Components"}),r.length===3&&(s.push({text:"Components",href:"/components"}),s.push({text:sn.currentRoute.value.name||""})),s}return Le(()=>{xs()}),{breadcrumbItems:t,breadcrumbBackItem:n}}});function vf(e,n,t,s,r,a){const o=d("nhs-breadcrumb-item"),i=d("nhs-breadcrumb-backlink"),l=d("nhs-breadcrumb"),p=d("router-view"),f=d("nhs-main");return c(),y(q,null,[u(l,null,{backlink:h(()=>[u(i,{href:e.breadcrumbBackItem().href},{default:h(()=>[k(N(e.breadcrumbBackItem().text),1)]),_:1},8,["href"])]),default:h(()=>[(c(!0),y(q,null,He(e.breadcrumbItems(),(m,b)=>(c(),w(o,{href:m.href,key:`components-breadcrumb-${b}`},{default:h(()=>[k(N(m.text),1)]),_:2},1032,["href"]))),128))]),_:1}),u(f,null,{default:h(()=>[u(p)]),_:1})],64)}var $f=S(bf,[["render",vf]]);const Nn={"/examples/breadcrumb":{container:!1},"/examples/button-reversed":{containerBg:"#005eb8"},"/examples/footer":{container:!1},"/examples/header":{container:!1},"/examples/header-org":{container:!1},"/examples/header-org-white":{container:!1},"/examples/header-org-white-nav":{container:!1},"/examples/header-transactional":{container:!1},"/examples/header-transactional-name":{container:!1},"/examples/header-logo":{container:!1},"/examples/header-nav":{container:!1},"/examples/header-search":{container:!1},"/examples/hero":{container:!1},"/examples/hero-image":{container:!1},"/examples/hero-image-text":{container:!1},"/examples/header-service":{container:!1},"/examples/header-service-nav":{container:!1},"/examples/card-group":{containerSize:100}},yf=v({setup(){function e(){return n(),""}function n(){const a=sn.currentRoute.value.path;if(!(a in Nn)){xs("#f0f4f5");return}xs(Nn[a].bodyBg||"#f0f4f5")}function t(){const a=sn.currentRoute.value.path;return a in Nn?{"background-color":Nn[a].containerBg||"none"}:{"background-color":"none"}}const s=z(()=>{const a=sn.currentRoute.value.path;return a in Nn&&Nn[a].containerSize||66}),r=z(()=>{const a=sn.currentRoute.value.path;return a in Nn?Nn[a].container!==!1:!0});return{containerSize:s,hasContainer:r,containerStyle:t,id:e}}}),kf=["id"];function wf(e,n,t,s,r,a){const o=d("router-view"),i=d("nhs-col"),l=d("nhs-row"),p=d("nhs-main");return e.hasContainer?(c(),y("div",{key:0,id:e.id(),style:Bn(e.containerStyle())},[u(p,null,{default:h(()=>[u(l,null,{default:h(()=>[u(i,{span:e.containerSize},{default:h(()=>[u(o)]),_:1},8,["span"])]),_:1})]),_:1})],12,kf)):(c(),w(o,{key:1,id:e.id()},null,8,["id"]))}var Sf=S(yf,[["render",wf]]);const xf=v({setup(){function e(){return sn.currentRoute.value.path==="/examples"?"router-view":Sf}return{component:e}}});function Cf(e,n,t,s,r,a){return c(),w(on(e.component()))}var Ef=S(xf,[["render",Cf]]);const Rf=v({setup(){return{examples:z(()=>Ny.map(n=>{let r=n,{name:t}=r,s=js(r,["name"]);return t||(t=""),Re(Q({},s),{name:t.toString().replace("examples-","")})}))}}}),Tf=k("Home"),Nf=k("Examples"),If=k("Home");function Af(e,n,t,s,r,a){const o=d("nhs-breadcrumb-item"),i=d("nhs-breadcrumb-backlink"),l=d("nhs-breadcrumb"),p=d("router-link"),f=d("nhs-main");return c(),y(q,null,[u(l,null,{backlink:h(()=>[u(i,{href:"/"},{default:h(()=>[If]),_:1})]),default:h(()=>[u(o,{href:"/"},{default:h(()=>[Tf]),_:1}),u(o,null,{default:h(()=>[Nf]),_:1})]),_:1}),u(f,null,{default:h(()=>[_("ul",null,[(c(!0),y(q,null,He(e.examples,(m,b)=>(c(),y("li",{key:`example-${b}`},[u(p,{to:m.path},{default:h(()=>[k(N(m.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})],64)}var Mf=S(Rf,[["render",Af]]);const Of={},Hf=k(" Go Back ");function Pf(e,n){const t=d("nhs-back-link");return c(),w(t,{href:"#"},{default:h(()=>[Hf]),_:1})}var Ci=S(Of,[["render",Pf]]);const Lf={},Bf=k("Level one"),Df=k("Level two"),qf=k("Level three"),Vf=k(" Back to Level three ");function Uf(e,n){const t=d("nhs-breadcrumb-item"),s=d("nhs-breadcrumb-backlink"),r=d("nhs-breadcrumb");return c(),w(r,null,{backlink:h(()=>[u(s,{href:"/level-one/level-two/level-three"},{default:h(()=>[Vf]),_:1})]),default:h(()=>[u(t,{href:"/level-one"},{default:h(()=>[Bf]),_:1}),u(t,{href:"/level-one/level-two"},{default:h(()=>[Df]),_:1}),u(t,{href:"/level-one/level-two/level-three"},{default:h(()=>[qf]),_:1})]),_:1})}var Ei=S(Lf,[["render",Uf]]);const Ff={},zf=k(" Save and continue ");function jf(e,n){const t=d("nhs-button");return c(),w(t,null,{default:h(()=>[zf]),_:1})}var Wf=S(Ff,[["render",jf]]);const Kf={},Gf=k(" Link button ");function Yf(e,n){const t=d("nhs-button");return c(),w(t,{href:"/"},{default:h(()=>[Gf]),_:1})}var Zf=S(Kf,[["render",Yf]]);const Qf={},Xf=k(" Disabled button ");function Jf(e,n){const t=d("nhs-button");return c(),w(t,{disabled:""},{default:h(()=>[Xf]),_:1})}var e_=S(Qf,[["render",Jf]]);const n_={},t_=k(" Find my location ");function s_(e,n){const t=d("nhs-button");return c(),w(t,{color:"secondary"},{default:h(()=>[t_]),_:1})}var r_=S(n_,[["render",s_]]);const o_={},a_=k(" Save and continue ");function i_(e,n){const t=d("nhs-button");return c(),w(t,{color:"reverse"},{default:h(()=>[a_]),_:1})}var l_=S(o_,[["render",i_]]);const u_={},c_=k("What is AMD?"),d_=k(" Symptoms "),h_=k(" Getting diagnosed "),p_=k(" Treatments "),m_=k(" Living with AMD ");function f_(e,n){const t=d("nhs-contents-item"),s=d("nhs-contents");return c(),w(s,null,{default:h(()=>[u(t,null,{default:h(()=>[c_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/"},{default:h(()=>[d_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/"},{default:h(()=>[h_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/"},{default:h(()=>[p_]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/"},{default:h(()=>[m_]),_:1})]),_:1})}var Ri=S(u_,[["render",f_]]);const __={},g_=_("p",null,"An NHS number is a 10 digit number, like 485 777 3456.",-1),b_=_("p",null,"You can find your NHS number on any document sent to you by the NHS. This may include:",-1),v_=_("ul",null,[_("li",null,"prescriptions"),_("li",null,"test results"),_("li",null,"hospital referral letters"),_("li",null,"appointment letters"),_("li",null,"your NHS medical card")],-1),$_=_("p",null,"Ask your GP practice for help if you can't find your NHS number.",-1);function y_(e,n){const t=d("nhs-details");return c(),w(t,{text:"Where can I find my NHS number?"},{default:h(()=>[g_,b_,v_,$_]),_:1})}var Ti=S(__,[["render",y_]]);const k_=v({setup(){const e=Y({doItems:["cover blisters that are likely to burst with a soft plaster or dressing","wash your hands before touching a burst blister","allow the fluid in a burst blister to drain before covering it with a plaster or dressing"],dontItems:["do not burst a blister yourself","do not peel the skin off a burst blister","do not pick at the edges of the remaining skin","do not wear the shoes or use the equipment that caused your blister until it heals"]});return Q({},ee(e))}});function w_(e,n,t,s,r,a){const o=d("nhs-dodont");return c(),y(q,null,[u(o,{title:"Do",type:"tick",items:e.doItems},null,8,["items"]),u(o,{title:"Don't",type:"cross",items:e.dontItems},null,8,["items"])],64)}var Ni=S(k_,[["render",w_]]);const S_={},x_=k(" Error message about full name goes here ");function C_(e,n){const t=d("nhs-error-text");return c(),w(t,null,{default:h(()=>[x_]),_:1})}var Ii=S(S_,[["render",C_]]);const E_={},R_=k(" It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019. ");function T_(e,n){const t=d("nhs-hint-text");return c(),w(t,null,{default:h(()=>[R_]),_:1})}var Ai=S(E_,[["render",T_]]);const N_={},I_=_("p",null,[k(" You can report any suspected side effect to the "),_("a",{href:"https://yellowcard.mhra.gov.uk/",title:"External website"}," UK safety scheme "),k(". ")],-1);function A_(e,n){const t=d("nhs-inset-text");return c(),w(t,null,{default:h(()=>[I_]),_:1})}var Mi=S(N_,[["render",A_]]);const M_={},O_=k(" National Insurance number ");function H_(e,n){const t=d("nhs-label");return c(),w(t,null,{default:h(()=>[O_]),_:1})}var Oi=S(M_,[["render",H_]]);const P_={},L_=k(" National Insurance number ");function B_(e,n){const t=d("nhs-label");return c(),w(t,{size:"s"},{default:h(()=>[L_]),_:1})}var Hi=S(P_,[["render",B_]]);const D_={},q_=k(" National Insurance number ");function V_(e,n){const t=d("nhs-label");return c(),w(t,{"page-heading":"",size:"xl"},{default:h(()=>[q_]),_:1})}var Pi=S(D_,[["render",V_]]);const U_={},F_=_("table",null,[_("tbody",null,[_("tr",null,[_("th",null,[_("strong",null,"Day of the week")]),_("th",null,[_("strong",null,"Opening hours")])]),_("tr",null,[_("th",null,"Monday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Tuesday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Wednesday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Thursday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Friday"),_("td",null,"9am to 6pm")]),_("tr",null,[_("th",null,"Saturday"),_("td",null,"9am to 1pm")]),_("tr",null,[_("th",null,"Sunday"),_("td",null,"Closed")])])],-1);function z_(e,n){const t=d("nhs-expander");return c(),w(t,{text:"Opening times"},{default:h(()=>[F_]),_:1})}var Li=S(U_,[["render",z_]]);const j_={},W_=_("p",null," Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better. ",-1),K_=_("p",null,"You would have been given:",-1),G_=_("ul",null,[_("li",null,"a blood glucose metre"),_("li",null,"small needles called lancets"),_("li",null,"a plastic pen to hold the lancest"),_("li",null,"small test strips")],-1),Y_=_("p",null,"Try to check your blood:",-1),Z_=_("ul",null,[_("li",null,"before meals"),_("li",null,"2 to 3 hours after meals"),_("li",null,"before, during (take a break) and after exercise")],-1),Q_=_("p",null," This helps you understand your blood glucose levels and how they\u2019re affected by meals and exercise. It should help you have more stable blood glucose levels. ",-1);function X_(e,n){const t=d("nhs-expander"),s=d("nhs-expander-group");return c(),w(s,null,{default:h(()=>[u(t,{text:"How to measure your blood glucose levels"},{default:h(()=>[W_,K_,G_]),_:1}),u(t,{text:"When to check your blood glucose level"},{default:h(()=>[Y_,Z_,Q_]),_:1})]),_:1})}var Bi=S(j_,[["render",X_]]);const J_={};function eg(e,n){const t=d("nhs-fieldset");return c(),w(t,{legend:"What is your address?"})}var Di=S(J_,[["render",eg]]);const ng={};function tg(e,n){const t=d("nhs-fieldset");return c(),w(t,{legend:"What is your address?","page-heading":"",size:"xl"})}var qi=S(ng,[["render",tg]]);const sg=v({setup(){const e=Y({addressOne:"",addressTwo:"",city:"",country:""});return Q({},ee(e))}});function rg(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-fieldset");return c(),w(i,{legend:"What is your address?","page-heading":"",size:"xl"},{default:h(()=>[u(o,{label:"Address line 1",modelValue:e.addressOne,"onUpdate:modelValue":n[0]||(n[0]=l=>e.addressOne=l)},null,8,["modelValue"]),u(o,{label:"Address line 2",modelValue:e.addressTwo,"onUpdate:modelValue":n[1]||(n[1]=l=>e.addressTwo=l)},null,8,["modelValue"]),u(o,{label:"Town or city",modelValue:e.city,"onUpdate:modelValue":n[2]||(n[2]=l=>e.city=l)},null,8,["modelValue"]),u(o,{label:"County",modelValue:e.country,"onUpdate:modelValue":n[3]||(n[3]=l=>e.country=l)},null,8,["modelValue"])]),_:1})}var Vi=S(sg,[["render",rg]]);const og={},ag=k(" Accessibility statement "),ig=k(" Contact us "),lg=k(" Cookies "),ug=k(" Privacy policy "),cg=k(" Terms and conditions ");function dg(e,n){const t=d("nhs-footer-item"),s=d("nhs-footer");return c(),w(s,null,{default:h(()=>[u(t,{href:"https://www.nhs.uk/Pages/nhs-sites.aspx"},{default:h(()=>[ag]),_:1}),u(t,{href:"https://www.nhs.uk/about-us"},{default:h(()=>[ig]),_:1}),u(t,{href:"https://www.nhs.uk/contact-us/"},{default:h(()=>[lg]),_:1}),u(t,{href:"https://www.nhs.uk/about-us/sitemap/"},{default:h(()=>[ug]),_:1}),u(t,{href:"https://www.nhs.uk/our-policies/"},{default:h(()=>[cg]),_:1})]),_:1})}var Ui=S(og,[["render",dg]]);const hg={};function pg(e,n){const t=d("nhs-hero");return c(),w(t,{heading:"We\u2019re here for you",text:"Helping you take control of your health and wellbeing."})}var Fi=S(hg,[["render",pg]]);const mg={};function fg(e,n){const t=d("nhs-hero");return c(),w(t,{"image-url":"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"})}var zi=S(mg,[["render",fg]]);const _g={};function gg(e,n){const t=d("nhs-hero");return c(),w(t,{heading:"We\u2019re here for you",text:"Helping you take control of your health and wellbeing.","image-url":"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"})}var ji=S(_g,[["render",gg]]);const bg={},vg=k(" Itchy, red, watering eyes ");function $g(e,n){const t=d("nhs-image");return c(),y(q,null,[u(t,{src:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",alt:"Picture of allergic conjunctivitis",srcset:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w",sizes:"(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw"},{default:h(()=>[vg]),_:1}),u(t,{src:"https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg",alt:"Picture of allergic conjunctivitis"})],64)}var Wi=S(bg,[["render",$g]]);const yg=v({setup(){const e=Y({listPanels:[{label:"A",items:[{text:"AAA",href:"http://localhost:3000/conditions/abdominal-aortic-aneurysm/"},{text:"Abdominal aortic aneurysm",href:"http://localhost:3000/conditions/abdominal-aortic-aneurysm/"},{text:"Abscess",href:"http://localhost:3000/conditions/abscess/"}]},{label:"B",disabled:!0,message:"There are currently no conditions listed"},{label:"C",items:[{text:"Chest pain",href:"http://localhost:3000/conditions/chest-pain/"},{text:"Cold sore",href:"http://localhost:3000/conditions/cold-sores/"}]},{label:"D",items:[{text:"Dandruff",href:"http://localhost:3000/conditions/dandruff/"},{text:"Dementia",href:"http://localhost:3000/conditions/dementia/"},{text:"Dental pain",href:"http://localhost:3000/conditions/toothache/"}]}]});return Q({},ee(e))}}),kg={class:"nhsuk-list"};function wg(e,n,t,s,r,a){const o=d("nhs-list-panel-item"),i=d("nhs-list-panel");return c(),y("ol",kg,[(c(!0),y(q,null,He(e.listPanels,(l,p)=>(c(),y("li",{key:`panel-${p}`},[u(i,{label:l.label,message:l.message,"back-to-top":"",disabled:l.disabled},{default:h(()=>[(c(!0),y(q,null,He(l.items,(f,m)=>(c(),w(o,{key:`panel-${l.label}-${m}`,href:f.href},{default:h(()=>[k(N(f.text),1)]),_:2},1032,["href"]))),128))]),_:2},1032,["label","message","disabled"])]))),128))])}var Ki=S(yg,[["render",wg]]);const Sg=v({setup(){const e=Y({items:[{label:"A"},{label:"B",disabled:!0},{label:"C"},{label:"D"},{label:"E"},{label:"F"},{label:"G"},{label:"H"},{label:"I"},{label:"J"},{label:"K"},{label:"L"},{label:"M"},{label:"N"},{label:"O"},{label:"P"},{label:"Q"},{label:"R"},{label:"S"},{label:"T"},{label:"U"},{label:"V"},{label:"W"},{label:"X"},{label:"Y"},{label:"Z"}]});return Q({},ee(e))}});function xg(e,n,t,s,r,a){const o=d("nhs-nav-az-item"),i=d("nhs-nav-az");return c(),w(i,null,{default:h(()=>[(c(!0),y(q,null,He(e.items,l=>(c(),w(o,{key:`nav-${l.label}`,disabled:l.disabled},{default:h(()=>[k(N(l.label),1)]),_:2},1032,["disabled"]))),128))]),_:1})}var Gi=S(Sg,[["render",xg]]);const Cg={};function Eg(e,n){const t=d("nhs-pagination");return c(),w(t,{"previous-href":"http://localhost:3000/section/treatments","previous-page":"Treatments","next-href":"http://localhost:3000/section/symptoms","next-page":"Symptoms"})}var Yi=S(Cg,[["render",Eg]]);const Rg={};function Tg(e,n){const t=d("nhs-review-date");return c(),w(t,{"last-review":"12 February 2016","next-review":"1 February 2019"})}var Zi=S(Rg,[["render",Tg]]);const Ng={},Ig=_("p",null,"To view the skip link component, press tab or navigate to the next element.",-1),Ag=k("Skip to main content");function Mg(e,n){const t=d("nhs-skip-link"),s=d("nhs-col"),r=d("nhs-row"),a=d("nhs-main");return c(),w(a,null,{default:h(()=>[u(r,null,{default:h(()=>[u(s,{span:66},{default:h(()=>[Ig,u(t,null,{default:h(()=>[Ag]),_:1})]),_:1})]),_:1})]),_:1})}var Qi=S(Ng,[["render",Mg]]);const Og=v({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return Q({},ee(e))}}),Hg=k("Change");function Pg(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("router-link"),l=d("nhs-summary-list");return c(),w(l,{data:e.data},{item:h(({item:p})=>[u(o,{type:"key"},{default:h(()=>[k(N(p.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:p.value},null,8,["innerHTML"]),u(o,{type:"actions"},{default:h(()=>[u(i,{to:p.action},{default:h(()=>[Hg]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["data"])}var Xi=S(Og,[["render",Pg]]);const Lg=v({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return Q({},ee(e))}});function Bg(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("nhs-summary-list");return c(),w(i,{data:e.data},{item:h(({item:l})=>[u(o,{type:"key"},{default:h(()=>[k(N(l.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:l.value},null,8,["innerHTML"])]),_:1},8,["data"])}var Ji=S(Lg,[["render",Bg]]);const Dg=v({setup(){const e=Y({data:[{key:"Name",value:"Sarah Philips",action:"#"},{key:"Date of birth",value:"5 January 1978",action:"#"},{key:"Contact information",value:"72 Guild Street<br>London<br>SE23 6FH",action:"#"},{key:"Contact details",value:"<p>07700 900457</p><p>sarah.philips@example.com</p>",action:"#"}]});return Q({},ee(e))}});function qg(e,n,t,s,r,a){const o=d("nhs-summary-list-item"),i=d("nhs-summary-list");return c(),w(i,{data:e.data,border:!1},{item:h(({item:l})=>[u(o,{type:"key"},{default:h(()=>[k(N(l.key),1)]),_:2},1024),u(o,{type:"value",innerHTML:l.value},null,8,["innerHTML"])]),_:1},8,["data"])}var el=S(Dg,[["render",qg]]);const Vg=v({setup(){const e=Y({headers:[{text:"Class name",value:"classname"},{text:"Tag",value:"tag",style:"width: 120px"}],items:[{classname:"nhsuk-tag",tag:"",tagText:"Active"},{classname:"nhsuk-tag--white",tag:"white",tagText:"Started"},{classname:"nhsuk-tag--grey",tag:"grey",tagText:"Not started"},{classname:"nhsuk-tag--green",tag:"green",tagText:"New"},{classname:"nhsuk-tag--aqua-green",tag:"aqua-green",tagText:"Active"},{classname:"nhsuk-tag--blue",tag:"blue",tagText:"Pending"},{classname:"nhsuk-tag--purple",tag:"purple",tagText:"Received"},{classname:"nhsuk-tag--pink",tag:"pink",tagText:"Sent"},{classname:"nhsuk-tag--red",tag:"red",tagText:"Rejected"},{classname:"nhsuk-tag--orange",tag:"orange",tagText:"Declined"},{classname:"nhsuk-tag--yellow",tag:"yellow",tagText:"Delayed"}]});return Q({},ee(e))}});function Ug(e,n,t,s,r,a){const o=d("nhs-tag"),i=d("nhs-table");return c(),w(i,{headers:e.headers,data:e.items,responsive:!1},{"item.classname":h(({item:l})=>[_("code",null,N(l.classname),1)]),"item.tag":h(({item:l})=>[u(o,{color:l.tag},{default:h(()=>[k(N(l.tagText),1)]),_:2},1032,["color"])]),_:1},8,["headers","data"])}var nl=S(Vg,[["render",Ug]]);const Fg={},zg=_("p",null," If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject yourself in the outer thigh before seeking emergency medical help. ",-1);function jg(e,n){const t=d("nhs-warning-callout");return c(),w(t,{heading:"Important"},{default:h(()=>[zg]),_:1})}var tl=S(Fg,[["render",jg]]);const Wg={},Kg=_("p",null," Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared. ",-1);function Gg(e,n){const t=d("nhs-warning-callout");return c(),w(t,{heading:"School, nursery or work"},{default:h(()=>[Kg]),_:1})}var sl=S(Wg,[["render",Gg]]);const Yg=v({setup(){const e=Y({data:[{symptoms:"Blisters on lips or around the mouth",cause:"cold sores"},{symptoms:"Itchy, dry, cracked, sore",cause:"eczema"},{symptoms:"Itchy blisters",cause:"shingles, chickenpox"}],headers:[{text:"Skin symptoms",value:"symptoms"},{text:"Possible cause",value:"cause"}]});return Q({},ee(e))}});function Zg(e,n,t,s,r,a){const o=d("nhs-table");return c(),w(o,{headers:e.headers,data:e.data,caption:"Skin symptoms and possible causes",responsive:!1},null,8,["headers","data"])}var rl=S(Yg,[["render",Zg]]);const Qg=v({setup(){const e=Y({data:[{symptoms:"Blisters on lips or around the mouth",cause:"cold sores"},{symptoms:"Itchy, dry, cracked, sore",cause:"eczema"},{symptoms:"Itchy blisters",cause:"shingles, chickenpox"}],headers:[{text:"Symptoms",value:"symptoms"},{text:"Possible cause",value:"cause"}]});return Q({},ee(e))}});function Xg(e,n,t,s,r,a){const o=d("nhs-table");return c(),w(o,{headers:e.headers,data:e.data,heading:"Conditions similar to impetigo",responsive:!1},null,8,["headers","data"])}var ol=S(Qg,[["render",Xg]]);const Jg=v({setup(){const e=Y({data:[{age:"3 to 5 months (weighing more than 5kg)",howMuch:"2.5ml",howOften:"Max 3 times in 24 hours"},{age:"6 to 11 months",howMuch:"2.5l",howOften:"Max 3 to 4 times in 24 hours"},{age:"1 to 3 years",howMuch:"5ml",howOften:"Max 3 times in 24 hours"},{age:"4 to 6 years",howMuch:"7.5ml",howOften:"Max 3 times in 24 hours"},{age:"7 to 9 years",howMuch:"10ml",howOften:"Max 3 times in 24 hours"},{age:"10 to 11 years",howMuch:"15ml",howOften:"Max 3 times in 24 hours"},{age:"12 to 17 years",howMuch:"15ml to 20ml",howOften:"Max 3 to 4 times in 24 hours"}],headers:[{text:"Age",value:"age"},{text:"How much?",value:"howMuch"},{text:"How often?",value:"howOften"}]});return Q({},ee(e))}});function eb(e,n,t,s,r,a){const o=d("nhs-table");return c(),w(o,{headers:e.headers,data:e.data,caption:"Ibuprofen syrup dosages for children"},null,8,["headers","data"])}var al=S(Jg,[["render",eb]]);const nb=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function tb(e,n,t,s,r,a){const o=d("nhs-input");return c(),w(o,{label:"National Insurance number",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var il=S(nb,[["render",tb]]);const sb=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function rb(e,n,t,s,r,a){const o=d("nhs-input");return c(),w(o,{label:"Postcode",autocomplete:"postal-code",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var ll=S(sb,[["render",rb]]);const ob=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function ab(e,n,t,s,r,a){const o=d("nhs-input");return c(),w(o,{label:"National insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var ul=S(ob,[["render",ab]]);const ib=v({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:""});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function lb(e,n,t,s,r,a){const o=d("nhs-input");return c(),w(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["rules","modelValue"])}var cl=S(ib,[["render",lb]]);const ub=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function cb(e,n,t,s,r,a){const o=d("nhs-input");return c(),w(o,{label:"National insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",width:"10",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var dl=S(ub,[["render",cb]]);const db=v({setup(){const e=Y({model:"NHS.UK frontend option 2"});return Q({},ee(e))}}),hb=_("option",null,"NHS.UK frontend option 1",-1),pb=_("option",null,"NHS.UK frontend option 2",-1),mb=_("option",{disabled:""},"NHS.UK frontend option 3",-1);function fb(e,n,t,s,r,a){const o=d("nhs-select");return c(),w(o,{label:"Label text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},{default:h(()=>[hb,pb,mb]),_:1},8,["modelValue"])}var hl=S(db,[["render",fb]]);const _b=v({setup(){const e=Y({model:"NHS.UK frontend option 1",rules:[s=>s!=="NHS.UK frontend option 1"||"Error message goes here"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}}),gb=_("option",null,"NHS.UK frontend option 1",-1),bb=_("option",null,"NHS.UK frontend option 2",-1),vb=_("option",null,"NHS.UK frontend option 3",-1);function $b(e,n,t,s,r,a){const o=d("nhs-select");return c(),w(o,{label:"Label text goes here",hint:"Hint text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),rules:e.rules},{default:h(()=>[gb,bb,vb]),_:1},8,["modelValue","rules"])}var pl=S(_b,[["render",$b]]);const yb=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function kb(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),w(o,{label:"Can you provide more detail?",hint:"Don't include personal or financial information, eg your National Insurance number or credit card details.",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var ml=S(yb,[["render",kb]]);const wb=v({setup(){const e=Y({model:""});return Q({},ee(e))}});function Sb(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),w(o,{label:"Full address",autocomplete:"street-address",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["modelValue"])}var fl=S(wb,[["render",Sb]]);const xb=v({setup(){const e=Y({model:"",rules:[s=>!!s||"You must provide an explanation"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function Cb(e,n,t,s,r,a){const o=d("nhs-textarea");return c(),w(o,{label:"Why can't you provide a National Insurance number?",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["rules","modelValue"])}var _l=S(xb,[["render",Cb]]);const Eb=v({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number"},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{}});return Q({},ee(e))}});function Rb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),w(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var gl=S(Eb,[["render",Rb]]);const Tb=v({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",autocomplete:"bday-day"},{label:"Month",width:"2",type:"number",autocomplete:"bday-month"},{label:"Year",width:"4",type:"number",autocomplete:"bday-year"}],model:{}});return Q({},ee(e))}});function Nb(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),w(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var bl=S(Tb,[["render",Nb]]);const Ib=v({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{}});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function Ab(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),w(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var vl=S(Ib,[["render",Ab]]);const Mb=v({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Year",width:"4",type:"number",rules:[s=>!!s||"Error message goes here"]}],model:{}});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function Ob(e,n,t,s,r,a){const o=d("nhs-input-group");return c(),w(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var $l=S(Mb,[["render",Ob]]);const Hb=v({setup(){const e=Y({model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});return Q({},ee(e))}});function Pb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var yl=S(Hb,[["render",Pb]]);const Lb={data(){return{model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}}};function Bb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i),inline:"",label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var kl=S(Lb,[["render",Bb]]);const Db=v({setup(){const e=Y({model:"",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});return Q({},ee(e))}});function qb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),disabled:"",label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently."},null,8,["items","modelValue"])}var wl=S(Db,[["render",qb]]);const Vb=v({setup(){const e=Y({model:"",items:[{label:"Use Government Gateway",value:"gov"},{label:"Use NHS.UK login",value:"login"},{divider:"or"},{label:"Create an account",value:"create"}]});return Q({},ee(e))}});function Ub(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{label:"How do you want to sign in?","heading-size":"l",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var Sl=S(Vb,[["render",Ub]]);const Fb={data(){return{model:"",items:[{label:"Sign in with Government Gateway",value:"gov",hint:"You'll have a user ID if you've registered for self assessment or filed a tax return online before."},{label:"Sign in with NHS.UK login",value:"login",hint:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."}]}}};function zb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{label:"How do you want to sign in?","page-heading":"",items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i),"heading-size":"l"},null,8,["items","modelValue"])}var xl=S(Fb,[["render",zb]]);const jb={data(){return{model:"",items:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"}]}}};function Wb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{items:r.items,modelValue:r.model,"onUpdate:modelValue":n[0]||(n[0]=i=>r.model=i)},null,8,["items","modelValue"])}var Cl=S(jb,[["render",Wb]]);const Kb=v({setup(){const e=Y({model:"no",items:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],rules:[s=>s!="no"||"Please select an option"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function Gb(e,n,t,s,r,a){const o=d("nhs-radios");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),label:"Have you changed your name?","heading-size":"m",hint:"This includes changing your last name or spelling your name differently.",rules:e.rules,ref:"radios"},null,8,["items","modelValue","rules"])}var El=S(Kb,[["render",Gb]]);const Yb=v({data(){return{model:"email",items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0}],inputModels:{email:"",phone:"",text:""}}}});function Zb(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-radios");return c(),w(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?","heading-size":"l",hint:"Select one option.",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModels[l.value],"onUpdate:modelValue":p=>e.inputModels[l.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var Rl=S(Yb,[["render",Zb]]);const Qb={},Xb=_("p",{class:"nhsuk-card__description"},[k(" Go to "),_("a",{href:"#"},"111.nhs.uk"),k(" or "),_("a",{href:"#"},"call 111")],-1);function Jb(e,n){const t=d("nhs-card");return c(),w(t,{heading:"If you need help now, but it\u2019s not an emergency","heading-level":3},{description:h(()=>[Xb]),_:1})}var Tl=S(Qb,[["render",Jb]]);const ev={};function nv(e,n){const t=d("nhs-card");return c(),w(t,{href:"#",clickable:"","heading-classes":"nhsuk-heading-m",heading:"Introduction to care and support",description:"A quick guide for people who have care and support needs and their carers"})}var Nl=S(ev,[["render",nv]]);const tv={};function sv(e,n){const t=d("nhs-card");return c(),w(t,{"img-url":"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",href:"#",clickable:"",heading:"Exercise","heading-classes":"nhsuk-heading-m",description:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})}var Il=S(tv,[["render",sv]]);const rv={},ov=_("h2",null,"Halves",-1),av=_("h2",null,"Thirds",-1),iv=_("h2",null,"Quarters",-1),lv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[k(" 91 "),_("span",{class:"nhsuk-u-visually-hidden"},"Applicants")],-1),uv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Applicants ",-1),cv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[k(" 23 "),_("span",{class:"nhsuk-u-visually-hidden"},"Jobs")],-1),dv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Jobs ",-1),hv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[k(" 8 "),_("span",{class:"nhsuk-u-visually-hidden"},"Services")],-1),pv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Services ",-1),mv=_("p",{class:"nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1"},[k(" 33 "),_("span",{class:"nhsuk-u-visually-hidden"},"Messages")],-1),fv=_("a",{href:"#",class:"nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"}," Messages ",-1);function _v(e,n){const t=d("nhs-card"),s=d("nhs-card-group");return c(),y(q,null,[ov,u(s,{type:"half"},{default:h(()=>[u(t,{href:"#",clickable:"",heading:"Introduction to care and support","heading-classes":"nhsuk-heading-m",description:"A quick guide for people who have care and support needs and their carers"}),u(t,{href:"#",clickable:"",heading:"Help from social services and charities","heading-classes":"nhsuk-heading-m",description:"Includes helplines, needs assessments, advocacy and reporting abuse"}),u(t,{href:"#",clickable:"",heading:"Money, work and benefits","heading-classes":"nhsuk-heading-m",description:"How to pay for care and support, and where you can get help with costs"}),u(t,{href:"#",clickable:"",heading:"Care after a hospital stay","heading-classes":"nhsuk-heading-m",description:"Includes hospital discharge and care and support afterwards"})]),_:1}),av,u(s,{type:"third"},{default:h(()=>[u(t,{href:"#",clickable:"",heading:"5 steps to mental wellbeing","heading-classes":"nhsuk-heading-m",description:"Practical advice to help you feel mentally and emotionally better"}),u(t,{href:"#",clickable:"",heading:"Healthy weight","heading-classes":"nhsuk-heading-m",description:"Check your BMI using our healthy weight calculator and find out if you're a healthy weight"}),u(t,{href:"#",clickable:"",heading:"Exercise","heading-classes":"nhsuk-heading-m",description:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})]),_:1}),iv,u(s,{type:"quarter"},{default:h(()=>[u(t,{clickable:""},{heading:h(()=>[lv,uv]),_:1}),u(t,{clickable:""},{heading:h(()=>[cv,dv]),_:1}),u(t,{clickable:""},{heading:h(()=>[hv,pv]),_:1}),u(t,{clickable:""},{heading:h(()=>[mv,fv]),_:1})]),_:1})],64)}var Al=S(rv,[["render",_v]]);const gv={};function bv(e,n){const t=d("nhs-card");return c(),w(t,{feature:"",heading:"Feature card heading","heading-classes":"nhsuk-heading-m",description:"Feature card description"})}var Ml=S(gv,[["render",bv]]);const vv=[{path:"/examples/card-basic",component:Tl,name:"Card - Basic card"},{path:"/examples/card-clickable",component:Nl,name:"Card - Clickable card"},{path:"/examples/card-image",component:Il,name:"Card - card with an image"},{path:"/examples/card-group",component:Al,name:"Card - Card group"},{path:"/examples/card-feature",component:Ml,name:"Card - Feature card"}],$v={},yv=_("ul",null,[_("li",null,"you're not sure it's chickenpox"),_("li",null,"the skin around the blisters is red, hot or painful (signs of infection)"),_("li",null,[k("your child is "),_("a",{href:"https://www.nhs.uk/conditions/dehydration"},"dehydrated")]),_("li",null,"you're concerned about your child or they get worse")],-1),kv=_("p",null," Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk. ",-1);function wv(e,n){const t=d("nhs-care-card");return c(),w(t,{heading:"Speak to a GP if:"},{default:h(()=>[yv,kv]),_:1})}var Ol=S($v,[["render",wv]]);const Sv={},xv=_("ul",null,[_("li",null,"you're an adult and have chickenpox"),_("li",null," you're pregnant and haven't had chickenpox before and you've been near someone with it "),_("li",null,"you have a weakened immune system and you've been near someone with chickenpox"),_("li",null,"you think your newborn baby has chickenpox")],-1),Cv=_("p",null," In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out. ",-1);function Ev(e,n){const t=d("nhs-care-card");return c(),w(t,{heading:"Ask for an urgent GP appointment if:",type:"urgent"},{default:h(()=>[xv,Cv]),_:1})}var Hl=S(Sv,[["render",Ev]]);const Rv={},Tv=_("ul",null,[_("li",null,"spreads to your arms, back, neck or jaw"),_("li",null,"makes your chest feel tight or heavy"),_("li",null,"also started with shortness of breath, sweating and feeling or being sick")],-1),Nv=_("p",null," You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital. ",-1);function Iv(e,n){const t=d("nhs-care-card");return c(),w(t,{heading:"Call 999 if you have sudden chest pain that:",type:"emergency"},{default:h(()=>[Tv,Nv]),_:1})}var Pl=S(Rv,[["render",Iv]]);const Av=[{path:"/examples/care-card-non-urgent",component:Ol,name:"Card - Care card non-urgent (blue)"},{path:"/examples/care-card-urgent",component:Hl,name:"Card - Care card urgent (red)"},{path:"/examples/care-card-emergency",component:Pl,name:"Card - Care card emergency (red and black)"}],Mv={},Ov=k(" Find a minor injuries unit ");function Hv(e,n){const t=d("nhs-action-link");return c(),w(t,{href:"https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551"},{default:h(()=>[Ov]),_:1})}var Ll=S(Mv,[["render",Hv]]);const Pv=[{path:"/examples/action-link",component:Ll,name:"Action link"}],Lv=v({setup(){const e=Y({items:[{label:"British",value:"british"},{label:"Irish",value:"irish"},{label:"citizen of another country",value:"other"}],model:[]});return Q({},ee(e))}});function Bv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"heading-size":"m",label:"What is your nationality?",hint:"If you have more than 1 nationality, select all options that are relevant to you."},null,8,["items","modelValue"])}var Bl=S(Lv,[["render",Bv]]);const Dv=v({setup(){const e=Y({model:[],items:[{label:"Sign in with Government Gateway",hint:"You\u2019ll have a user ID if you\u2019ve registered for Self Assessment or filed a tax return online before.",value:"gov"},{label:"Sign in with NHS.UK login",hint:"You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",value:"login"}]});return Q({},ee(e))}});function qv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"page-heading":"",label:"How do you want to sign in?","heading-size":"m"},null,8,["items","modelValue"])}var Dl=S(Dv,[["render",qv]]);const Vv=v({setup(){const e=Y({model:[],items:[{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue",disabled:!0}]});return Q({},ee(e))}});function Uv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i)},null,8,["items","modelValue"])}var ql=S(Vv,[["render",Uv]]);const Fv=v({setup(){const e=Y({model:[],items:[{label:"Waste from animal carcasses",value:"animal"},{label:"Waste from mines or quarries",value:"mines"},{label:"Farm or agricultural waste",value:"farm"}]});return Q({},ee(e))}});function zv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),"page-heading":"",label:"Which types of waste do you transport regularly?",hint:"Select all that apply.","heading-size":"m"},null,8,["items","modelValue"])}var Vl=S(Fv,[["render",zv]]);const jv=v({setup(){const e=Y({model:[],items:[{label:"Waste from animal carcasses",value:"animal"},{label:"Waste from mines or quarries",value:"mines"},{label:"Farm or agricultural waste",value:"farm"}],rules:[s=>s.length>0||"Please select an option"]});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}});function Wv(e,n,t,s,r,a){const o=d("nhs-checkboxes");return c(),w(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=i=>e.model=i),rules:e.rules,"heading-size":"m",label:"Which types of waste do you transport regularly?"},null,8,["items","modelValue","rules"])}var Ul=S(jv,[["render",Wv]]);const Kv=v({setup(){const e=Y({items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0}],model:[],inputModel:{email:"",phone:"",text:""}});return Q({},ee(e))}});function Gv(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-checkboxes");return c(),w(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?",hint:"Select all options that are relevant to you.","heading-size":"l",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModel[l.conditional.value],"onUpdate:modelValue":p=>e.inputModel[l.conditional.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var Fl=S(Kv,[["render",Gv]]);const Yv=v({setup(){const e=Y({items:[{label:"Email",value:"email",conditionalProps:{label:"Email address"},conditional:!0},{label:"Phone",value:"phone",conditionalProps:{label:"Phone number"},conditional:!0},{label:"Text message",value:"text",conditionalProps:{label:"Mobile phone number"},conditional:!0},{divider:"or"},{label:"None of the above",value:"none"}],model:[],inputModel:{email:"",phone:"",text:""}});return Q({},ee(e))}});function Zv(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-checkboxes");return c(),w(i,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=l=>e.model=l),label:"How would you prefer to be contacted?",hint:"Select all options that are relevant to you.","heading-size":"l",id:"contact","page-heading":""},{"item-conditional":h(({item:l})=>[u(o,{label:l.conditionalProps.label,class:"nhsuk-u-width-two-thirds",modelValue:e.inputModel[l.conditional.value],"onUpdate:modelValue":p=>e.inputModel[l.conditional.value]=p},null,8,["label","modelValue","onUpdate:modelValue"])]),_:1},8,["items","modelValue"])}var zl=S(Yv,[["render",Zv]]);const Qv=[{path:"/examples/checkbox",component:Bl,name:"Checkboxes"},{path:"/examples/checkbox-hint",component:Dl,name:"Checkboxes with hint text"},{path:"/examples/checkbox-disabled",component:ql,name:"Checkboxes with disabled item"},{path:"/examples/checkbox-heading",component:Vl,name:"Checkboxes with legend as page heading"},{path:"/examples/checkbox-error",component:Ul,name:"Checkboxes with error message"},{path:"/examples/checkbox-conditional",component:Fl,name:"Checkboxes with conditional content"},{path:"/examples/checkbox-non-of-above",component:zl,name:'Checkboxes with "none of the above" option'}],Xv={},Jv=k(" Health A-Z "),e$=k(" Live Well "),n$=k(" Mental health "),t$=k(" Care and support "),s$=k(" Pregnancy "),r$=k(" NHS services ");function o$(e,n){const t=d("nhs-header-item"),s=d("nhs-header");return c(),w(s,{"show-nav":"","show-search":""},{default:h(()=>[u(t,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[Jv]),_:1}),u(t,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[e$]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[n$]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[t$]),_:1}),u(t,{href:"https://www.nhs.uk/news/"},{default:h(()=>[s$]),_:1}),u(t,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[r$]),_:1})]),_:1})}var jl=S(Xv,[["render",o$]]);const a$={};function i$(e,n){const t=d("nhs-header");return c(),w(t)}var l$=S(a$,[["render",i$]]);const u$={};function c$(e,n){const t=d("nhs-header");return c(),w(t,{transactional:""})}var d$=S(u$,[["render",c$]]);const h$=v({setup(){const e=Y({service:{name:"Register with a GP",href:"/"}});return Q({},ee(e))}});function p$(e,n,t,s,r,a){const o=d("nhs-header");return c(),w(o,{service:e.service,transactional:""},null,8,["service"])}var Wl=S(h$,[["render",p$]]);const m$={},f$=k(" Health A-Z "),_$=k(" Live Well "),g$=k(" Mental health "),b$=k(" Care and support "),v$=k(" Pregnancy "),$$=k(" NHS services ");function y$(e,n){const t=d("nhs-header-item"),s=d("nhs-header");return c(),w(s,{"show-nav":""},{default:h(()=>[u(t,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[f$]),_:1}),u(t,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[_$]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[g$]),_:1}),u(t,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[b$]),_:1}),u(t,{href:"https://www.nhs.uk/news/"},{default:h(()=>[v$]),_:1}),u(t,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[$$]),_:1})]),_:1})}var k$=S(m$,[["render",y$]]);const w$=v({setup(){const e=Y({searchItems:[{text:"Item one",value:"item_one"},{text:"Item two",value:"item_two"},{text:"Car one",value:"car_one"}],searchText:""});function n(){return e.searchItems.filter(s=>s.text.toLowerCase().includes(e.searchText.toLowerCase())&&e.searchText)}function t(s){alert(s)}return Re(Q({},ee(e)),{searchResults:n,onSubmitSearch:t})}}),S$=k(" Health A-Z "),x$=k(" Live Well "),C$=k(" Care and support "),E$=k(" Health news "),R$=k(" Services near you ");function T$(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),w(i,{"show-search":"","search-results":e.searchResults(),"search-text":e.searchText,"onUpdate:search-text":n[0]||(n[0]=l=>e.searchText=l),onSubmitSearch:e.onSubmitSearch},{default:h(()=>[u(o,{href:"https://www.nhs.uk/conditions"},{default:h(()=>[S$]),_:1}),u(o,{href:"https://www.nhs.uk/live-well/"},{default:h(()=>[x$]),_:1}),u(o,{href:"https://www.nhs.uk/conditions/social-care-and-support/"},{default:h(()=>[C$]),_:1}),u(o,{href:"https://www.nhs.uk/news/"},{default:h(()=>[E$]),_:1}),u(o,{href:"https://www.nhs.uk/service-search"},{default:h(()=>[R$]),_:1})]),_:1},8,["search-results","search-text","onSubmitSearch"])}var N$=S(w$,[["render",T$]]);const I$=v({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return Q({},ee(e))}}),A$=k("Your hospital visit"),M$=k("Wards and departments"),O$=k("Conditions and treatments"),H$=k("Our people"),P$=k("Our research");function L$(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),w(i,{"show-nav":"","show-search":"",organisation:e.organisation},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[A$]),_:1}),u(o,{href:"#"},{default:h(()=>[M$]),_:1}),u(o,{href:"#"},{default:h(()=>[O$]),_:1}),u(o,{href:"#"},{default:h(()=>[H$]),_:1}),u(o,{href:"#"},{default:h(()=>[P$]),_:1})]),_:1},8,["organisation"])}var Kl=S(I$,[["render",L$]]);const B$=v({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return Q({},ee(e))}}),D$=k("Your hospital visit"),q$=k("Wards and departments"),V$=k("Conditions and treatments"),U$=k("Our people"),F$=k("Our research");function z$(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),w(i,{"show-nav":"","show-search":"",organisation:e.organisation,"white-header":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[D$]),_:1}),u(o,{href:"#"},{default:h(()=>[q$]),_:1}),u(o,{href:"#"},{default:h(()=>[V$]),_:1}),u(o,{href:"#"},{default:h(()=>[U$]),_:1}),u(o,{href:"#"},{default:h(()=>[F$]),_:1})]),_:1},8,["organisation"])}var j$=S(B$,[["render",z$]]);const W$=v({setup(){const e=Y({organisation:{name:"Anytown Anyplace",split:"Anywhere",descriptor:"NHS Foundation Trust"}});return Q({},ee(e))}}),K$=k("Your hospital visit"),G$=k("Wards and departments"),Y$=k("Conditions and treatments"),Z$=k("Our people"),Q$=k("Our research");function X$(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),w(i,{"show-nav":"","show-search":"",organisation:e.organisation,"white-header":"","white-nav":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[K$]),_:1}),u(o,{href:"#"},{default:h(()=>[G$]),_:1}),u(o,{href:"#"},{default:h(()=>[Y$]),_:1}),u(o,{href:"#"},{default:h(()=>[Z$]),_:1}),u(o,{href:"#"},{default:h(()=>[Q$]),_:1})]),_:1},8,["organisation"])}var Gl=S(W$,[["render",X$]]);const J$=v({setup(){const e=Y({service:{name:"Prototype kit"}});return Q({},ee(e))}});function ey(e,n,t,s,r,a){const o=d("nhs-header");return c(),w(o,{service:e.service},null,8,["service"])}var ny=S(J$,[["render",ey]]);const ty=v({setup(){const e=Y({service:{name:"Digital service manual"}});return Q({},ee(e))}}),sy=k("NHS service standard"),ry=k("Design system"),oy=k("Content style guide"),ay=k("Accessibility"),iy=k("Community and contribution");function ly(e,n,t,s,r,a){const o=d("nhs-header-item"),i=d("nhs-header");return c(),w(i,{service:e.service,"show-nav":"","show-search":""},{default:h(()=>[u(o,{href:"#"},{default:h(()=>[sy]),_:1}),u(o,{href:"#"},{default:h(()=>[ry]),_:1}),u(o,{href:"#"},{default:h(()=>[oy]),_:1}),u(o,{href:"#"},{default:h(()=>[ay]),_:1}),u(o,{href:"#"},{default:h(()=>[iy]),_:1})]),_:1},8,["service"])}var uy=S(ty,[["render",ly]]);const cy=[{path:"/examples/header",component:jl,name:"Header"},{path:"/examples/header-nav",component:k$,name:"Header with navigation"},{path:"/examples/header-search",component:N$,name:"Header with search"},{path:"/examples/header-logo",component:l$,name:"Header with logo only"},{path:"/examples/header-service",component:ny,name:"Header with a service name"},{path:"/examples/header-service-nav",component:uy,name:"Header with a service name, search and navigation"},{path:"/examples/header-transactional",component:d$,name:"Header transactional"},{path:"/examples/header-transactional-name",component:Wl,name:"Header transactional with service name"},{path:"/examples/header-org",component:Kl,name:"Header organisational"},{path:"/examples/header-org-white",component:j$,name:"Header organisational with white header"},{path:"/examples/header-org-white-nav",component:Gl,name:"Header organisational with white header and navigation"}],dy={},hy=_("p",null,"Describe the errors and how to correct them",-1),py=_("li",null,[_("a",{href:"#example-error-1"},"Date of birth must be in the past")],-1);function my(e,n){const t=d("nhs-list"),s=d("nhs-error-summary");return c(),w(s,{title:"There is a problem"},{default:h(()=>[hy,u(t,{type:"error"},{default:h(()=>[py]),_:1})]),_:1})}var Yl=S(dy,[["render",my]]);const fy=v({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:""});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}}),_y=_("p",null,[k(" Optional description of the errors and how to correct them. "),_("br"),k(" Note that the error summary should receive focus on page load using the JavaScript that comes with this component. ")],-1),gy=_("li",null,[_("a",{href:"#input-with-error-message"},"Link to input error with explanation")],-1),by=Ds("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",37),vy=Ds("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",97);function $y(e,n,t,s,r,a){const o=d("nhs-list"),i=d("nhs-error-summary"),l=d("nhs-input");return c(),y(q,null,[u(i,{title:"There is a problem"},{default:h(()=>[_y,u(o,{type:"error"},{default:h(()=>[gy]),_:1})]),_:1}),by,u(l,{label:"National Insurance number",hint:"Clicking an error summary link should scroll the top of this input's label into view.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=p=>e.model=p)},null,8,["rules","modelValue"]),vy],64)}var yy=S(fy,[["render",$y]]);const ky=v({setup(){const e=Y({rules:[s=>!!s||"Please select an option"],model:"",radioItems:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]});let n;function t(s,r){n=r}return Ee("register-validator",t),Le(()=>{n()}),Q({},ee(e))}}),wy=_("p",null,[k(" Optional description of the errors and how to correct them. "),_("br"),k(" Note that the error summary should receive focus on page load using the JavaScript that comes with this component. ")],-1),Sy=_("li",null,[_("a",{href:"#"},"Link to radio error with explanation (Note how it links to the first radio)")],-1),xy=Ds("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",37),Cy=Ds("<br><br><br><br><br><br>\u2195 Intentionally long page to demonstrate error summary link scrolling behaviour \u2195<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>",97);function Ey(e,n,t,s,r,a){const o=d("nhs-list"),i=d("nhs-error-summary"),l=d("nhs-radios");return c(),y(q,null,[u(i,{title:"There is a problem"},{default:h(()=>[wy,u(o,{type:"error"},{default:h(()=>[Sy]),_:1})]),_:1}),xy,u(l,{label:"Have you changed your name?",hint:"Clicking an error summary link should scroll the top of this radio fieldset into view.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=p=>e.model=p),items:e.radioItems,"heading-size":"m"},null,8,["rules","modelValue","items"]),Cy],64)}var Ry=S(ky,[["render",Ey]]);const Ty=[{path:"/examples/error-summary",component:Yl,name:"Error summary"},{path:"/examples/error-summary-link-to-input",component:yy,name:"Error summary with link to an input field"},{path:"/examples/error-summary-link-to-radio",component:Ry,name:"Error summary with link to a radio field"}],Zl=[{path:"",component:Mf,name:"Examples"},...Pv,{path:"/examples/back-link",component:Ci,name:"Back link"},{path:"/examples/breadcrumb",component:Ei,name:"Breadcrumb"},{path:"/examples/button",component:Wf,name:"Button"},{path:"/examples/button-link",component:Zf,name:"Button as a link"},{path:"/examples/button-disabled",component:e_,name:"Button disabled"},{path:"/examples/button-secondary",component:r_,name:"Button secondary"},{path:"/examples/button-reversed",component:l_,name:"Button reverse"},...vv,...Av,{path:"/examples/contents-list",component:Ri,name:"Contents list"},{path:"/examples/details",component:Ti,name:"Details"},{path:"/examples/do-dont",component:Ni,name:"Do and Don't list"},...Ty,{path:"/examples/error-text",component:Ii,name:"Error message"},{path:"/examples/hint-text",component:Ai,name:"Hint"},{path:"/examples/inset-text",component:Mi,name:"Inset text"},{path:"/examples/label",component:Oi,name:"Label"},{path:"/examples/label-bold",component:Hi,name:"Label with bold text"},{path:"/examples/label-heading",component:Pi,name:"Label as page heading"},{path:"/examples/expander",component:Li,name:"Expander"},{path:"/examples/expander-group",component:Bi,name:"Expander group"},{path:"/examples/fieldset",component:Di,name:"Fieldset"},{path:"/examples/fieldset-heading",component:qi,name:"Fieldset as page heading"},{path:"/examples/fieldset-input",component:Vi,name:"Fieldset with inputs"},{path:"/examples/footer",component:Ui,name:"Footer"},...cy,{path:"/examples/hero",component:Fi,name:"Hero"},{path:"/examples/hero-image",component:zi,name:"Hero with image"},{path:"/examples/hero-image-text",component:ji,name:"Hero with image with content"},{path:"/examples/image",component:Wi,name:"Images"},{path:"/examples/list-panel",component:Ki,name:"List Panel"},{path:"/examples/nav-az",component:Gi,name:"Nav AZ"},{path:"/examples/pagination",component:Yi,name:"Pagination"},{path:"/examples/review-date",component:Zi,name:"Review date"},{path:"/examples/skip-link",component:Qi,name:"Skip link"},{path:"/examples/summary-list",component:Xi,name:"Summary list"},{path:"/examples/summary-list-no-action",component:Ji,name:"Summary list without actions"},{path:"/examples/summary-list-no-border",component:el,name:"Summary list without border"},{path:"/examples/tag",component:nl,name:"Tag"},{path:"/examples/warning-callout",component:tl,name:"Warning callout"},{path:"/examples/warning-callout-non-important",component:sl,name:"Warning callout with custom heading"},{path:"/examples/table",component:rl,name:"Table"},{path:"/examples/table-panel",component:ol,name:"Table as a panel"},{path:"/examples/table-responsive",component:al,name:"Responsive table"},{path:"/examples/input",component:il,name:"Input"},{path:"/examples/input-autocomplete",component:ll,name:"Input with autocomplete attribute"},{path:"/examples/input-hint",component:ul,name:"Input with hint text"},{path:"/examples/input-error",component:cl,name:"Input with error message"},{path:"/examples/input-width",component:dl,name:"Input with width modifier"},{path:"/examples/select",component:hl,name:"Select"},{path:"/examples/select-error",component:pl,name:"Select with hint text and error message"},{path:"/examples/textarea",component:ml,name:"Textarea"},{path:"/examples/textarea-autocomplete",component:fl,name:"Textarea with autocomplete attribute"},{path:"/examples/textarea-error",component:_l,name:"Textarea with error message"},{path:"/examples/date-input",component:gl,name:"Date input"},{path:"/examples/date-input-autocomplete",component:bl,name:"Date input with autocomplete attribute"},{path:"/examples/date-input-error",component:vl,name:"Date input with error"},{path:"/examples/date-input-error-multi",component:$l,name:"Date input with multiple errors"},...Qv,{path:"/examples/radio",component:yl,name:"Radios"},{path:"/examples/radio-inline",component:kl,name:"Radios inline"},{path:"/examples/radio-disabled",component:wl,name:"Radios disabled"},{path:"/examples/radio-divider",component:Sl,name:"Radios with a divider"},{path:"/examples/radio-hint",component:xl,name:"Radios with hint text"},{path:"/examples/radio-no-heading",component:Cl,name:"Radios without fieldset"},{path:"/examples/radio-error",component:El,name:"Radios with hint text and error message"},{path:"/examples/radio-conditional",component:Rl,name:"Radios with conditional content"}].map(e=>{const s=e,{name:n}=s,t=js(s,["name"]);return Re(Q({},t),{name:`examples-${n}`})}),Ny=Si(Zl,["examples-Examples"]),Iy=[{path:"/",component:gf},{path:"/components",component:$f,children:xi},{path:"/examples",component:Ef,children:Zl},{path:"/:catchAll(.*)",redirect:"/"}];var sn=Qh({history:ph(),routes:Iy});const Ay=v({setup(){const e=Y({footerLinks:[{text:"Github",href:"https://github.com/xLasercut/nhsuk-frontend-vue"}]}),n=z(()=>!sn.currentRoute.value.fullPath.includes("/examples/"));return Re(Q({},ee(e)),{showFooter:n})}});function My(e,n,t,s,r,a){const o=d("nhs-footer-item"),i=d("nhs-footer");return e.showFooter?(c(),w(i,{key:0},{default:h(()=>[(c(!0),y(q,null,He(e.footerLinks,(l,p)=>(c(),w(o,{key:p,href:l.href},{default:h(()=>[k(N(l.text),1)]),_:2},1032,["href"]))),128))]),_:1})):K("",!0)}var Oy=S(Ay,[["render",My]]);const Hy=v({setup(){const e=Y({searchText:""});function n(){return _r.filter(r=>(r.name||"").toString().toLowerCase().includes(e.searchText.toLowerCase())&&e.searchText).map(r=>({text:r.name,value:r.path})).slice(0,10)}function t(r){sn.push(r.value)}const s=z(()=>!sn.currentRoute.value.fullPath.includes("/examples/"));return Re(Q({},ee(e)),{filteredSearchResults:n,submitSearch:t,showHeader:s})}});function Py(e,n,t,s,r,a){const o=d("nhs-header");return e.showHeader?(c(),w(o,{key:0,"search-results":e.filteredSearchResults(),"search-text":e.searchText,"onUpdate:search-text":n[0]||(n[0]=i=>e.searchText=i),onSubmitSearch:e.submitSearch,"show-search":""},null,8,["search-results","search-text","onSubmitSearch"])):K("",!0)}var Ly=S(Hy,[["render",Py]]);const By=v({components:{SiteFooter:Oy,SiteHeader:Ly}});function Dy(e,n,t,s,r,a){const o=d("site-header"),i=d("router-view"),l=d("site-footer");return c(),y(q,null,[u(o),u(i),u(l)],64)}var qy=S(By,[["render",Dy]]);var Vr={exports:{}};function Ur(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&Ur(t)}),e}Vr.exports=Ur;Vr.exports.default=Ur;var Vy=Vr.exports;class Ko{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ql(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Hn(e,...n){const t=Object.create(null);for(const s in e)t[s]=e[s];return n.forEach(function(s){for(const r in s)t[r]=s[r]}),t}const Uy="</span>",Go=e=>!!e.kind,Fy=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((s,r)=>`${s}${"_".repeat(r+1)}`)].join(" ")}return`${n}${e}`};class zy{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Ql(n)}openNode(n){if(!Go(n))return;let t=n.kind;n.sublanguage?t=`language-${t}`:t=Fy(t,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!Go(n)||(this.buffer+=Uy)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}class Fr{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t={kind:n,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(s=>this._walk(n,s)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Fr._collapse(t)})))}}class jy extends Fr{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const s=n.root;s.kind=t,s.sublanguage=!0,this.add(s)}toHTML(){return new zy(this,this.options).value()}finalize(){return!0}}function Gt(e){return e?typeof e=="string"?e:e.source:null}function Xl(e){return tt("(?=",e,")")}function Wy(e){return tt("(?:",e,")*")}function Ky(e){return tt("(?:",e,")?")}function tt(...e){return e.map(t=>Gt(t)).join("")}function Gy(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function zr(...e){const n=Gy(e);return"("+(n.capture?"":"?:")+e.map(s=>Gt(s)).join("|")+")"}function Jl(e){return new RegExp(e.toString()+"|").exec("").length-1}function Yy(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Zy=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function jr(e,{joinWith:n}){let t=0;return e.map(s=>{t+=1;const r=t;let a=Gt(s),o="";for(;a.length>0;){const i=Zy.exec(a);if(!i){o+=a;break}o+=a.substring(0,i.index),a=a.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?o+="\\"+String(Number(i[1])+r):(o+=i[0],i[0]==="("&&t++)}return o}).map(s=>`(${s})`).join(n)}const Qy=/\b\B/,eu="[a-zA-Z]\\w*",Wr="[a-zA-Z_]\\w*",nu="\\b\\d+(\\.\\d+)?",tu="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",su="\\b(0b[01]+)",Xy="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Jy=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=tt(n,/.*\b/,e.binary,/\b.*/)),Hn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,s)=>{t.index!==0&&s.ignoreMatch()}},e)},Yt={begin:"\\\\[\\s\\S]",relevance:0},e1={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Yt]},n1={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Yt]},t1={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Us=function(e,n,t={}){const s=Hn({scope:"comment",begin:e,end:n,contains:[]},t);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=zr("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:tt(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},s1=Us("//","$"),r1=Us("/\\*","\\*/"),o1=Us("#","$"),a1={scope:"number",begin:nu,relevance:0},i1={scope:"number",begin:tu,relevance:0},l1={scope:"number",begin:su,relevance:0},u1={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Yt,{begin:/\[/,end:/\]/,relevance:0,contains:[Yt]}]}]},c1={scope:"title",begin:eu,relevance:0},d1={scope:"title",begin:Wr,relevance:0},h1={begin:"\\.\\s*"+Wr,relevance:0},p1=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ls=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Qy,IDENT_RE:eu,UNDERSCORE_IDENT_RE:Wr,NUMBER_RE:nu,C_NUMBER_RE:tu,BINARY_NUMBER_RE:su,RE_STARTERS_RE:Xy,SHEBANG:Jy,BACKSLASH_ESCAPE:Yt,APOS_STRING_MODE:e1,QUOTE_STRING_MODE:n1,PHRASAL_WORDS_MODE:t1,COMMENT:Us,C_LINE_COMMENT_MODE:s1,C_BLOCK_COMMENT_MODE:r1,HASH_COMMENT_MODE:o1,NUMBER_MODE:a1,C_NUMBER_MODE:i1,BINARY_NUMBER_MODE:l1,REGEXP_MODE:u1,TITLE_MODE:c1,UNDERSCORE_TITLE_MODE:d1,METHOD_GUARD:h1,END_SAME_AS_BEGIN:p1});function m1(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function f1(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function _1(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=m1,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function g1(e,n){!Array.isArray(e.illegal)||(e.illegal=zr(...e.illegal))}function b1(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function v1(e,n){e.relevance===void 0&&(e.relevance=1)}const $1=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(s=>{delete e[s]}),e.keywords=t.keywords,e.begin=tt(t.beforeMatch,Xl(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},y1=["of","and","for","in","not","or","if","then","parent","list","value"],k1="keyword";function ru(e,n,t=k1){const s=Object.create(null);return typeof e=="string"?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach(function(a){Object.assign(s,ru(e[a],n,a))}),s;function r(a,o){n&&(o=o.map(i=>i.toLowerCase())),o.forEach(function(i){const l=i.split("|");s[l[0]]=[a,w1(l[0],l[1])]})}}function w1(e,n){return n?Number(n):S1(e)?0:1}function S1(e){return y1.includes(e.toLowerCase())}const Yo={},Jn=e=>{console.error(e)},Zo=(e,...n)=>{console.log(`WARN: ${e}`,...n)},ut=(e,n)=>{Yo[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Yo[`${e}/${n}`]=!0)},Cs=new Error;function ou(e,n,{key:t}){let s=0;const r=e[t],a={},o={};for(let i=1;i<=n.length;i++)o[i+s]=r[i],a[i+s]=!0,s+=Jl(n[i-1]);e[t]=o,e[t]._emit=a,e[t]._multi=!0}function x1(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Jn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Cs;if(typeof e.beginScope!="object"||e.beginScope===null)throw Jn("beginScope must be object"),Cs;ou(e,e.begin,{key:"beginScope"}),e.begin=jr(e.begin,{joinWith:""})}}function C1(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Jn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Cs;if(typeof e.endScope!="object"||e.endScope===null)throw Jn("endScope must be object"),Cs;ou(e,e.end,{key:"endScope"}),e.end=jr(e.end,{joinWith:""})}}function E1(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function R1(e){E1(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),x1(e),C1(e)}function T1(e){function n(o,i){return new RegExp(Gt(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,i]),this.matchAt+=Jl(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(l=>l[1]);this.matcherRe=n(jr(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(i);if(!l)return null;const p=l.findIndex((m,b)=>b>0&&m!==void 0),f=this.matchIndexes[p];return l.splice(0,p),Object.assign(l,f)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const l=new t;return this.rules.slice(i).forEach(([p,f])=>l.addRule(p,f)),l.compile(),this.multiRegexes[i]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,l){this.rules.push([i,l]),l.type==="begin"&&this.count++}exec(i){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let p=l.exec(i);if(this.resumingScanAtSamePosition()&&!(p&&p.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,p=f.exec(i)}return p&&(this.regexIndex+=p.position+1,this.regexIndex===this.count&&this.considerAll()),p}}function r(o){const i=new s;return o.contains.forEach(l=>i.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&i.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&i.addRule(o.illegal,{type:"illegal"}),i}function a(o,i){const l=o;if(o.isCompiled)return l;[f1,b1,R1,$1].forEach(f=>f(o,i)),e.compilerExtensions.forEach(f=>f(o,i)),o.__beforeBegin=null,[_1,g1,v1].forEach(f=>f(o,i)),o.isCompiled=!0;let p=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),p=o.keywords.$pattern,delete o.keywords.$pattern),p=p||/\w+/,o.keywords&&(o.keywords=ru(o.keywords,e.case_insensitive)),l.keywordPatternRe=n(p,!0),i&&(o.begin||(o.begin=/\B|\b/),l.beginRe=n(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=n(l.end)),l.terminatorEnd=Gt(l.end)||"",o.endsWithParent&&i.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+i.terminatorEnd)),o.illegal&&(l.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(f){return N1(f==="self"?o:f)})),o.contains.forEach(function(f){a(f,l)}),o.starts&&a(o.starts,i),l.matcher=r(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Hn(e.classNameAliases||{}),a(e)}function au(e){return e?e.endsWithParent||au(e.starts):!1}function N1(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Hn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:au(e)?Hn(e,{starts:e.starts?Hn(e.starts):null}):Object.isFrozen(e)?Hn(e):e}var I1="11.5.1";class A1 extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Js=Ql,Qo=Hn,Xo=Symbol("nomatch"),M1=7,O1=function(e){const n=Object.create(null),t=Object.create(null),s=[];let r=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:jy};function l(M){return i.noHighlightRe.test(M)}function p(M){let V=M.className+" ";V+=M.parentNode?M.parentNode.className:"";const J=i.languageDetectRe.exec(V);if(J){const le=Ie(J[1]);return le||(Zo(a.replace("{}",J[1])),Zo("Falling back to no-highlight mode for this block.",M)),le?J[1]:"no-highlight"}return V.split(/\s+/).find(le=>l(le)||Ie(le))}function f(M,V,J){let le="",be="";typeof V=="object"?(le=M,J=V.ignoreIllegals,be=V.language):(ut("10.7.0","highlight(lang, code, ...args) has been deprecated."),ut("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),be=M,le=V),J===void 0&&(J=!0);const Ce={code:le,language:be};Je("before:highlight",Ce);const Me=Ce.result?Ce.result:m(Ce.language,Ce.code,J);return Me.code=Ce.code,Je("after:highlight",Me),Me}function m(M,V,J,le){const be=Object.create(null);function Ce(E,H){return E.keywords[H]}function Me(){if(!x.keywords){D.addText(I);return}let E=0;x.keywordPatternRe.lastIndex=0;let H=x.keywordPatternRe.exec(I),Z="";for(;H;){Z+=I.substring(E,H.index);const ae=$.case_insensitive?H[0].toLowerCase():H[0],de=Ce(x,ae);if(de){const[fe,en]=de;if(D.addText(Z),Z="",be[ae]=(be[ae]||0)+1,be[ae]<=M1&&(F+=en),fe.startsWith("_"))Z+=H[0];else{const Cn=$.classNameAliases[fe]||fe;D.addKeyword(H[0],Cn)}}else Z+=H[0];E=x.keywordPatternRe.lastIndex,H=x.keywordPatternRe.exec(I)}Z+=I.substr(E),D.addText(Z)}function De(){if(I==="")return;let E=null;if(typeof x.subLanguage=="string"){if(!n[x.subLanguage]){D.addText(I);return}E=m(x.subLanguage,I,!0,U[x.subLanguage]),U[x.subLanguage]=E._top}else E=R(I,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(F+=E.relevance),D.addSublanguage(E._emitter,E.language)}function qe(){x.subLanguage!=null?De():Me(),I=""}function T(E,H){let Z=1;const ae=H.length-1;for(;Z<=ae;){if(!E._emit[Z]){Z++;continue}const de=$.classNameAliases[E[Z]]||E[Z],fe=H[Z];de?D.addKeyword(fe,de):(I=fe,Me(),I=""),Z++}}function te(E,H){return E.scope&&typeof E.scope=="string"&&D.openNode($.classNameAliases[E.scope]||E.scope),E.beginScope&&(E.beginScope._wrap?(D.addKeyword(I,$.classNameAliases[E.beginScope._wrap]||E.beginScope._wrap),I=""):E.beginScope._multi&&(T(E.beginScope,H),I="")),x=Object.create(E,{parent:{value:x}}),x}function j(E,H,Z){let ae=Yy(E.endRe,Z);if(ae){if(E["on:end"]){const de=new Ko(E);E["on:end"](H,de),de.isMatchIgnored&&(ae=!1)}if(ae){for(;E.endsParent&&E.parent;)E=E.parent;return E}}if(E.endsWithParent)return j(E.parent,H,Z)}function re(E){return x.matcher.regexIndex===0?(I+=E[0],1):(ne=!0,0)}function $e(E){const H=E[0],Z=E.rule,ae=new Ko(Z),de=[Z.__beforeBegin,Z["on:begin"]];for(const fe of de)if(!!fe&&(fe(E,ae),ae.isMatchIgnored))return re(H);return Z.skip?I+=H:(Z.excludeBegin&&(I+=H),qe(),!Z.returnBegin&&!Z.excludeBegin&&(I=H)),te(Z,E),Z.returnBegin?0:H.length}function ye(E){const H=E[0],Z=V.substr(E.index),ae=j(x,E,Z);if(!ae)return Xo;const de=x;x.endScope&&x.endScope._wrap?(qe(),D.addKeyword(H,x.endScope._wrap)):x.endScope&&x.endScope._multi?(qe(),T(x.endScope,E)):de.skip?I+=H:(de.returnEnd||de.excludeEnd||(I+=H),qe(),de.excludeEnd&&(I=H));do x.scope&&D.closeNode(),!x.skip&&!x.subLanguage&&(F+=x.relevance),x=x.parent;while(x!==ae.parent);return ae.starts&&te(ae.starts,E),de.returnEnd?0:H.length}function pe(){const E=[];for(let H=x;H!==$;H=H.parent)H.scope&&E.unshift(H.scope);E.forEach(H=>D.openNode(H))}let ue={};function g(E,H){const Z=H&&H[0];if(I+=E,Z==null)return qe(),0;if(ue.type==="begin"&&H.type==="end"&&ue.index===H.index&&Z===""){if(I+=V.slice(H.index,H.index+1),!r){const ae=new Error(`0 width match regex (${M})`);throw ae.languageName=M,ae.badRule=ue.rule,ae}return 1}if(ue=H,H.type==="begin")return $e(H);if(H.type==="illegal"&&!J){const ae=new Error('Illegal lexeme "'+Z+'" for mode "'+(x.scope||"<unnamed>")+'"');throw ae.mode=x,ae}else if(H.type==="end"){const ae=ye(H);if(ae!==Xo)return ae}if(H.type==="illegal"&&Z==="")return 1;if(oe>1e5&&oe>H.index*3)throw new Error("potential infinite loop, way more iterations than matches");return I+=Z,Z.length}const $=Ie(M);if(!$)throw Jn(a.replace("{}",M)),new Error('Unknown language: "'+M+'"');const C=T1($);let A="",x=le||C;const U={},D=new i.__emitter(i);pe();let I="",F=0,O=0,oe=0,ne=!1;try{for(x.matcher.considerAll();;){oe++,ne?ne=!1:x.matcher.considerAll(),x.matcher.lastIndex=O;const E=x.matcher.exec(V);if(!E)break;const H=V.substring(O,E.index),Z=g(H,E);O=E.index+Z}return g(V.substr(O)),D.closeAllNodes(),D.finalize(),A=D.toHTML(),{language:M,value:A,relevance:F,illegal:!1,_emitter:D,_top:x}}catch(E){if(E.message&&E.message.includes("Illegal"))return{language:M,value:Js(V),illegal:!0,relevance:0,_illegalBy:{message:E.message,index:O,context:V.slice(O-100,O+100),mode:E.mode,resultSoFar:A},_emitter:D};if(r)return{language:M,value:Js(V),illegal:!1,relevance:0,errorRaised:E,_emitter:D,_top:x};throw E}}function b(M){const V={value:Js(M),illegal:!1,relevance:0,_top:o,_emitter:new i.__emitter(i)};return V._emitter.addText(M),V}function R(M,V){V=V||i.languages||Object.keys(n);const J=b(M),le=V.filter(Ie).filter(Ye).map(qe=>m(qe,M,!1));le.unshift(J);const be=le.sort((qe,T)=>{if(qe.relevance!==T.relevance)return T.relevance-qe.relevance;if(qe.language&&T.language){if(Ie(qe.language).supersetOf===T.language)return 1;if(Ie(T.language).supersetOf===qe.language)return-1}return 0}),[Ce,Me]=be,De=Ce;return De.secondBest=Me,De}function W(M,V,J){const le=V&&t[V]||J;M.classList.add("hljs"),M.classList.add(`language-${le}`)}function L(M){let V=null;const J=p(M);if(l(J))return;if(Je("before:highlightElement",{el:M,language:J}),M.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(M)),i.throwUnescapedHTML))throw new A1("One of your code blocks includes unescaped HTML.",M.innerHTML);V=M;const le=V.textContent,be=J?f(le,{language:J,ignoreIllegals:!0}):R(le);M.innerHTML=be.value,W(M,J,be.language),M.result={language:be.language,re:be.relevance,relevance:be.relevance},be.secondBest&&(M.secondBest={language:be.secondBest.language,relevance:be.secondBest.relevance}),Je("after:highlightElement",{el:M,result:be,text:le})}function X(M){i=Qo(i,M)}const se=()=>{me(),ut("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ce(){me(),ut("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let _e=!1;function me(){if(document.readyState==="loading"){_e=!0;return}document.querySelectorAll(i.cssSelector).forEach(L)}function Te(){_e&&me()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Te,!1);function Be(M,V){let J=null;try{J=V(e)}catch(le){if(Jn("Language definition for '{}' could not be registered.".replace("{}",M)),r)Jn(le);else throw le;J=o}J.name||(J.name=M),n[M]=J,J.rawDefinition=V.bind(null,e),J.aliases&&Qe(J.aliases,{languageName:M})}function Ge(M){delete n[M];for(const V of Object.keys(t))t[V]===M&&delete t[V]}function dn(){return Object.keys(n)}function Ie(M){return M=(M||"").toLowerCase(),n[M]||n[t[M]]}function Qe(M,{languageName:V}){typeof M=="string"&&(M=[M]),M.forEach(J=>{t[J.toLowerCase()]=V})}function Ye(M){const V=Ie(M);return V&&!V.disableAutodetect}function Xe(M){M["before:highlightBlock"]&&!M["before:highlightElement"]&&(M["before:highlightElement"]=V=>{M["before:highlightBlock"](Object.assign({block:V.el},V))}),M["after:highlightBlock"]&&!M["after:highlightElement"]&&(M["after:highlightElement"]=V=>{M["after:highlightBlock"](Object.assign({block:V.el},V))})}function hn(M){Xe(M),s.push(M)}function Je(M,V){const J=M;s.forEach(function(le){le[J]&&le[J](V)})}function an(M){return ut("10.7.0","highlightBlock will be removed entirely in v12.0"),ut("10.7.0","Please use highlightElement now."),L(M)}Object.assign(e,{highlight:f,highlightAuto:R,highlightAll:me,highlightElement:L,highlightBlock:an,configure:X,initHighlighting:se,initHighlightingOnLoad:ce,registerLanguage:Be,unregisterLanguage:Ge,listLanguages:dn,getLanguage:Ie,registerAliases:Qe,autoDetection:Ye,inherit:Qo,addPlugin:hn}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString=I1,e.regex={concat:tt,lookahead:Xl,either:zr,optional:Ky,anyNumberOfTimes:Wy};for(const M in ls)typeof ls[M]=="object"&&Vy(ls[M]);return Object.assign(e,ls),e};var Zt=O1({}),H1=Zt;Zt.HighlightJS=Zt;Zt.default=Zt;var qt=H1;const Es="[A-Za-z$_][0-9A-Za-z$_]*",iu=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],lu=["true","false","null","undefined","NaN","Infinity"],uu=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],cu=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],du=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],hu=["arguments","this","super","console","window","document","localStorage","module","global"],pu=[].concat(du,uu,cu);function P1(e){const n=e.regex,t=(V,{after:J})=>{const le="</"+V[0].slice(1);return V.input.indexOf(le,J)!==-1},s=Es,r={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(V,J)=>{const le=V[0].length+V.index,be=V.input[le];if(be==="<"||be===","){J.ignoreMatch();return}be===">"&&(t(V,{after:le})||J.ignoreMatch());let Ce;if((Ce=V.input.substr(le).match(/^\s+extends\s+/))&&Ce.index===0){J.ignoreMatch();return}}},i={$pattern:Es,keyword:iu,literal:lu,built_in:pu,"variable.language":hu},l="[0-9](_?[0-9])*",p=`\\.(${l})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${f})((${p})|\\.)?|(${p}))[eE][+-]?(${l})\\b`},{begin:`\\b(${f})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},R={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},W={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},L={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},X=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),se={className:"comment",variants:[X,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},ce=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,W,L,m];b.contains=ce.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(ce)});const _e=[].concat(se,b.contains),me=_e.concat([{begin:/\(/,end:/\)/,keywords:i,contains:["self"].concat(_e)}]),Te={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:me},Be={variants:[{match:[/class/,/\s+/,s,/\s+/,/extends/,/\s+/,n.concat(s,"(",n.concat(/\./,s),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,s],scope:{1:"keyword",3:"title.class"}}]},Ge={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...uu,...cu]}},dn={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ie={variants:[{match:[/function/,/\s+/,s,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Te],illegal:/%/},Qe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Ye(V){return n.concat("(?!",V.join("|"),")")}const Xe={match:n.concat(/\b/,Ye([...du,"super"]),s,n.lookahead(/\(/)),className:"title.function",relevance:0},hn={begin:n.concat(/\./,n.lookahead(n.concat(s,/(?![0-9A-Za-z$_(])/))),end:s,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Je={match:[/get|set/,/\s+/,s,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Te]},an="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,s,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(an)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Te]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:me,CLASS_REFERENCE:Ge},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),dn,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,W,L,se,m,Ge,{className:"attr",begin:s+n.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[se,e.REGEXP_MODE,{className:"function",begin:an,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:me}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:r.begin,end:r.end},{match:a},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},Ie,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Te,e.inherit(e.TITLE_MODE,{begin:s,className:"title.function"})]},{match:/\.\.\./,relevance:0},hn,{match:"\\$"+s,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Te]},Xe,Qe,Be,Je,{match:/\$[(.]/}]}}function L1(e){const n=P1(e),t=Es,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},a={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[n.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],l={$pattern:Es,keyword:iu.concat(i),literal:lu,built_in:pu.concat(s),"variable.language":hu},p={className:"meta",begin:"@"+t},f=(b,R,W)=>{const L=b.contains.findIndex(X=>X.label===R);if(L===-1)throw new Error("can not find mode to replace");b.contains.splice(L,1,W)};Object.assign(n.keywords,l),n.exports.PARAMS_CONTAINS.push(p),n.contains=n.contains.concat([p,r,a]),f(n,"shebang",e.SHEBANG()),f(n,"use_strict",o);const m=n.contains.find(b=>b.label==="func.def");return m.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}function B1(e){const n=e.regex,t=n.concat(/[A-Z_]/,n.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s=/[A-Za-z0-9._:-]+/,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(a,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),p={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:s,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[a,l,i,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[a,o,l,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[p],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[p],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:p}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var Jo=v({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var n=kn(e.language);Ue(function(){return e.language},function(r){n.value=r});var t=z(function(){return e.autodetect||!n.value}),s=z(function(){return!t.value&&!qt.getLanguage(n.value)});return{className:z(function(){return s.value?"":"hljs "+n.value}),highlightedCode:z(function(){var r;if(s.value)return console.warn('The language "'+n.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(t.value){var a=qt.highlightAuto(e.code);return n.value=(r=a.language)!==null&&r!==void 0?r:"",a.value}return(a=qt.highlight(e.code,{language:n.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return gt("pre",{},[gt("code",{class:this.className,innerHTML:this.highlightedCode})])}}),D1={install:function(e){e.component("highlightjs",Jo)},component:Jo};qt.registerLanguage("typescript",L1);qt.registerLanguage("xml",B1);var q1=Object.defineProperty,V1=Object.defineProperties,U1=Object.getOwnPropertyDescriptors,ea=Object.getOwnPropertySymbols,F1=Object.prototype.hasOwnProperty,z1=Object.prototype.propertyIsEnumerable,na=(e,n,t)=>n in e?q1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Kr=(e,n)=>{for(var t in n||(n={}))F1.call(n,t)&&na(e,t,n[t]);if(ea)for(var t of ea(n))z1.call(n,t)&&na(e,t,n[t]);return e},mu=(e,n)=>V1(e,U1(n));NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach);Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value(e){return this.filter(n=>n===e).length>0}});Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);Element.prototype.closest||(Element.prototype.closest=function(e){var n=this;do{if(Element.prototype.matches.call(n,e))return n;n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1);return null});function st(e,n,t){return z(()=>{const s=Object.assign({},t.attrs);for(const r of e)n[r]&&(s[r]=n[r]);return s})}var B=(e,n)=>{const t=e.__vccOpts||e;for(const[s,r]of n)t[s]=r;return t};const j1=v({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e,n){return{attributes:st(["disabled"],e,n)}}});function W1(e,n,t,s,r,a){const o=d("router-link");return c(),w(o,G({to:e.href,onClick:n[0]||(n[0]=i=>e.$emit("click"))},e.attributes),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["to"])}var K1=B(j1,[["render",W1]]);const G1=v({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e,n){return{attributes:st(["disabled"],e,n)}}}),Y1=["href"];function Z1(e,n,t,s,r,a){return c(),y("a",G({href:e.href,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.attributes),[P(e.$slots,"default")],16,Y1)}var Q1=B(G1,[["render",Z1]]);const X1=/^((http|https|ftp):\/\/)/;function fu(e,n){return Boolean(e)&&!X1.test(n)}const J1=v({inheritAttrs:!1,emits:["click"],props:{href:{type:String,required:!0},disabled:{type:Boolean,default:()=>!1}},setup(e){const n=xe("router");return{linkType:z(()=>fu(n,e.href)?K1:Q1)}}});function ek(e,n,t,s,r,a){return c(),w(on(e.linkType),G({disabled:e.disabled,href:e.href,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["disabled","href"])}var Fe=B(J1,[["render",ek]]);const nk={},tk={class:"nhsuk-icon nhsuk-icon__arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},sk=_("path",{d:"M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"},null,-1),rk=[sk];function ok(e,n){return c(),y("svg",tk,rk)}var ak=B(nk,[["render",ok]]);const ik={},lk={class:"nhsuk-icon nhsuk-icon__arrow-right-circle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},uk=_("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),ck=_("path",{d:"M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"},null,-1),dk=[uk,ck];function hk(e,n){return c(),y("svg",lk,dk)}var pk=B(ik,[["render",hk]]);const mk={},fk={class:"nhsuk-icon nhsuk-icon__arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},_k=_("path",{d:"M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"},null,-1),gk=[_k];function bk(e,n){return c(),y("svg",fk,gk)}var vk=B(mk,[["render",bk]]);const $k={},yk={class:"nhsuk-icon nhsuk-icon__chevron-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},kk=_("path",{d:"M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"},null,-1),wk=[kk];function Sk(e,n){return c(),y("svg",yk,wk)}var xk=B($k,[["render",Sk]]);const Ck={},Ek={class:"nhsuk-icon nhsuk-icon__chevron-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Rk=_("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"},null,-1),Tk=[Rk];function Nk(e,n){return c(),y("svg",Ek,Tk)}var Ik=B(Ck,[["render",Nk]]);const Ak={},Mk={class:"nhsuk-icon nhsuk-icon__close",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},Ok=_("path",{d:"M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"},null,-1),Hk=[Ok];function Pk(e,n){return c(),y("svg",Mk,Hk)}var Lk=B(Ak,[["render",Pk]]);const Bk={},Dk={class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},qk=_("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"},null,-1),Vk=_("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"},null,-1),Uk=[qk,Vk];function Fk(e,n){return c(),y("svg",Dk,Uk)}var zk=B(Bk,[["render",Fk]]);const jk={},Wk={class:"nhsuk-icon nhsuk-icon__emdash",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"1","aria-hidden":"true"},Kk=_("path",{d:"M0 0h16v1H0z"},null,-1),Gk=[Kk];function Yk(e,n){return c(),y("svg",Wk,Gk)}var Zk=B(jk,[["render",Yk]]);const Qk={},Xk={class:"nhsuk-icon nhsuk-icon__emdash",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"1","aria-hidden":"true"},Jk=_("path",{d:"M0 0h19v1H0z"},null,-1),ew=[Jk];function nw(e,n){return c(),y("svg",Xk,ew)}var tw=B(Qk,[["render",nw]]);const sw={},rw={class:"nhsuk-icon nhsuk-icon__minus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32","aria-hidden":"true"},ow=_("circle",{cx:"12",cy:"12",r:"10"},null,-1),aw=_("path",{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M8 12h8"},null,-1),iw=[ow,aw];function lw(e,n){return c(),y("svg",rw,iw)}var uw=B(sw,[["render",lw]]);const cw={},dw={class:"nhsuk-icon nhsuk-icon__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32","aria-hidden":"true"},hw=_("circle",{cx:"12",cy:"12",r:"10"},null,-1),pw=_("path",{fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",d:"M12 8v8M8 12h8"},null,-1),mw=[hw,pw];function fw(e,n){return c(),y("svg",dw,mw)}var _w=B(cw,[["render",fw]]);const gw={},bw={class:"nhsuk-icon nhsuk-icon__search",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},vw=_("path",{d:"M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"},null,-1),$w=[vw];function yw(e,n){return c(),y("svg",bw,$w)}var kw=B(gw,[["render",yw]]);const ww={},Sw={class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none"},xw=_("path",{"stroke-width":"4","stroke-linecap":"round",stroke:"#007f3b",d:"M18.4 7.8l-8.5 8.4L5.6 12"},null,-1),Cw=[xw];function Ew(e,n){return c(),y("svg",Sw,Cw)}var Rw=B(ww,[["render",Ew]]);const Tw={ArrowLeft:ak,ArrowRightCircle:pk,ArrowRight:vk,ChevronLeft:xk,ChevronRight:Ik,Close:Lk,Cross:zk,EmdashSmall:Zk,Emdash:tw,Minus:uw,Plus:_w,Search:kw,Tick:Rw},Nw=v({name:"nhs-icon",inheritAttrs:!1,emits:[],props:{icon:{type:String,required:!0}},components:Tw});function Iw(e,n,t,s,r,a){return c(),w(on(e.icon),Rs(Xt(e.$attrs)),null,16)}var Sn=B(Nw,[["render",Iw]]);const Aw=v({name:"nhs-action-link",emits:["click"],inheritAttrs:!1,props:{href:{type:String,required:!0}},components:{NhsLinkSwitcher:Fe,NhsIcon:Sn}}),Mw={class:"nhsuk-action-link__text"};function Ow(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),y("div",G({class:"nhsuk-action-link"},e.$attrs),[u(i,{class:"nhsuk-action-link__link",onClick:n[0]||(n[0]=l=>e.$emit("click")),href:e.href},{default:h(()=>[u(o,{icon:"arrow-right-circle"}),_("span",Mw,[P(e.$slots,"default")])]),_:3},8,["href"])],16)}var Hw=B(Aw,[["render",Ow]]);const Pw=v({name:"nhs-back-link",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Fe,NhsIcon:Sn},props:{href:{type:String,required:!0}}});function Lw(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),y("div",G({class:"nhsuk-back-link"},e.$attrs),[u(i,{class:"nhsuk-back-link__link",onClick:n[0]||(n[0]=l=>e.$emit("click")),href:e.href},{default:h(()=>[u(o,{icon:"chevron-left"}),P(e.$slots,"default")]),_:3},8,["href"])],16)}var Bw=B(Pw,[["render",Lw]]);const Dw=v({name:"nhs-breadcrumb",inheritAttrs:!1,emits:[],props:{ariaLabel:{type:String,default:()=>"Breadcrumb"}}}),qw=["aria-label"],Vw={class:"nhsuk-width-container"},Uw={class:"nhsuk-breadcrumb__list"};function Fw(e,n,t,s,r,a){return c(),y("nav",G({class:"nhsuk-breadcrumb"},e.$attrs,{"aria-label":e.ariaLabel}),[_("div",Vw,[_("ol",Uw,[P(e.$slots,"default")]),P(e.$slots,"backlink")])],16,qw)}var zw=B(Dw,[["render",Fw]]);const jw=v({name:"nhs-breadcrumb-item",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Fe},props:{href:{type:String}}}),Ww={class:"nhsuk-breadcrumb__item"};function Kw(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("li",Ww,[e.href?(c(),w(o,G({key:0,class:"nhsuk-breadcrumb__link",href:e.href},e.$attrs,{onClick:n[0]||(n[0]=i=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])):K("",!0),e.href?K("",!0):(c(),y("span",G({key:1,class:"nhsuk-breadcrumb__link"},e.$attrs),[P(e.$slots,"default")],16))])}var Gw=B(jw,[["render",Kw]]);const Yw=v({name:"nhs-breadcrumb-backlink",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Fe},props:{href:{type:String,required:!0}}}),Zw={class:"nhsuk-breadcrumb__back"};function Qw(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("p",Zw,[u(o,G({class:"nhsuk-breadcrumb__backlink",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var Xw=B(Yw,[["render",Qw]]);const Jw=v({inheritAttrs:!1,emits:["click"],props:{disabled:{type:Boolean,default:()=>!1},href:{type:String}},setup(e,n){return{attributes:st(["disabled"],e,n)}}}),e0=["aria-disabled"];function n0(e,n,t,s,r,a){return c(),y("button",G({"aria-disabled":e.disabled,onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.attributes),[P(e.$slots,"default")],16,e0)}var t0=B(Jw,[["render",n0]]);const s0=v({inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Fe},props:{href:{type:String,default:()=>""},disabled:{type:Boolean,default:()=>!1}}});function r0(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),w(o,G({href:e.href,disabled:e.disabled,role:"button",draggable:"false"},e.$attrs,{onClick:n[0]||(n[0]=i=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href","disabled"])}var _u=B(s0,[["render",r0]]);const ta={primary:"nhsuk-button",secondary:"nhsuk-button nhsuk-button--secondary",reverse:"nhsuk-button nhsuk-button--reverse"},sa={button:t0,a:_u},o0=v({name:"nhs-button",inheritAttrs:!1,emits:["click"],props:{color:{type:String,default:()=>"primary",validator:e=>e in ta},disabled:{type:Boolean,default:()=>!1},href:{type:String},element:{type:String,default:()=>"button",validator:e=>e in sa}},setup(e){const n=z(()=>ta[e.color]),t=z(()=>e.href?_u:sa[e.element]);return{classes:n,buttonElement:t}}});function a0(e,n,t,s,r,a){return c(),w(on(e.buttonElement),G({class:e.classes,href:e.href,disabled:e.disabled},e.$attrs,{onClick:n[0]||(n[0]=o=>e.$emit("click"))}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["class","href","disabled"])}var i0=B(o0,[["render",a0]]);const l0=new Set([1,2,3,4,5]),rt=v({functional:!0,props:{headingLevel:{type:Number,required:!0,validator:e=>l0.has(e)}},setup(e,{slots:n}){return()=>n.default?gt(`h${e.headingLevel}`,n.default()):gt(`h${e.headingLevel}`)}}),u0=v({name:"nhs-card",inheritAttrs:!1,emit:[],props:{clickable:{type:Boolean,default:()=>!1},feature:{type:Boolean,default:()=>!1},heading:{type:String,default:()=>""},headingLevel:{type:Number,default:()=>2},imgUrl:{type:String,default:()=>""},imgAlt:{type:String,default:()=>""},href:{type:String,default:()=>""},description:{type:String,default:()=>""},headingClasses:{type:String,default:()=>""}},components:{NhsHeadingSwitcher:rt,NhsLinkSwitcher:Fe},setup(e){const n=xe("router"),t=z(()=>{const i=["nhsuk-card"];return e.clickable&&i.push("nhsuk-card--clickable"),e.feature&&i.push("nhsuk-card--feature"),i.join(" ")}),s=z(()=>{const i=["nhsuk-card__content"];return e.feature&&i.push("nhsuk-card__content--feature"),i.join(" ")}),r=z(()=>{const i=["nhsuk-card__heading"];return e.feature&&i.push("nhsuk-card__heading--feature"),e.headingClasses&&i.push(e.headingClasses),i.join(" ")}),a=z(()=>Boolean(e.href)&&!e.feature);function o(){e.clickable&&a&&(fu(n,e.href)?n.push(e.href):window.location.href=e.href)}return{classes:t,contentClasses:s,headingClassesComputed:r,isHeadingLink:a,onClickCard:o}}}),c0=["src","alt"],d0={key:1},h0={class:"nhsuk-card__description"};function p0(e,n,t,s,r,a){const o=d("nhs-link-switcher"),i=d("nhs-heading-switcher");return c(),y("div",G({onClick:n[0]||(n[0]=l=>e.onClickCard()),class:e.classes},e.$attrs),[e.imgUrl?(c(),y("img",{key:0,class:"nhsuk-card__img",src:e.imgUrl,alt:e.imgAlt},null,8,c0)):K("",!0),_("div",{class:Se(e.contentClasses)},[P(e.$slots,"heading",{},()=>[u(i,{"heading-level":e.headingLevel,class:Se(e.headingClassesComputed)},{default:h(()=>[e.isHeadingLink?(c(),w(o,{key:0,class:"nhsuk-card__link",href:e.href},{default:h(()=>[k(N(e.heading),1)]),_:1},8,["href"])):(c(),y("div",d0,N(e.heading),1))]),_:1},8,["heading-level","class"])]),P(e.$slots,"description",{},()=>[_("p",h0,N(e.description),1)])],2)],16)}var m0=B(u0,[["render",p0]]);const f0=v({functional:!0,props:{node:{required:!0}},setup(e){return()=>e.node}}),_0=new Set(["half","third","quarter"]),g0=v({name:"nhs-card-group",inheritAttrs:!1,emit:[],props:{type:{type:String,default:()=>"half",validator:e=>_0.has(e)}},components:{NhsVNode:f0}});function b0(e,n,t,s,r,a){const o=d("nhs-v-node");return c(),y("ul",G({class:"nhsuk-grid-row nhsuk-card-group"},e.$attrs),[e.$slots.default?(c(!0),y(q,{key:0},He(e.$slots.default(),(i,l)=>(c(),y("li",{class:Se(`nhsuk-grid-column-one-${e.type} nhsuk-card-group__item`),key:l},[u(o,{node:i},null,8,["node"])],2))),128)):K("",!0)],16)}var v0=B(g0,[["render",b0]]);const ra={"non-urgent":"Non-urgent advice: ",urgent:"Urgent advice: ",emergency:"Immediate action required: "},$0=v({name:"nhs-care-card",inheritAttrs:!1,emits:[],props:{heading:{type:String,required:!0},type:{type:String,default:()=>"non-urgent",validator:e=>e in ra},headingLevel:{type:Number,default:()=>3},hiddenText:{type:String,default:()=>""}},components:{NhsHeadingSwitcher:rt},setup(e){return{accessibilityText:z(()=>e.hiddenText?e.hiddenText:ra[e.type])}}}),y0={class:"nhsuk-card--care__heading-container"},k0={role:"text"},w0={class:"nhsuk-u-visually-hidden"},S0=_("span",{class:"nhsuk-card--care__arrow","aria-hidden":"true"},null,-1),x0={class:"nhsuk-card__content"};function C0(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),y("div",G({class:`nhsuk-card nhsuk-card--care nhsuk-card--care--${e.type}`},e.$attrs),[_("div",y0,[u(o,{"heading-level":e.headingLevel,class:"nhsuk-card--care__heading"},{default:h(()=>[_("span",k0,[_("span",w0,N(e.accessibilityText),1),k(" "+N(e.heading),1)])]),_:1},8,["heading-level"]),S0]),_("div",x0,[P(e.$slots,"default")])],16)}var E0=B($0,[["render",C0]]);const R0=v({name:"nhs-contents",inheritAttrs:!1,emit:[],props:{ariaLabel:{type:String,default:()=>"Pages in this guide"},hiddenText:{type:String,default:()=>"Contents"}}}),T0=["aria-label"],N0={class:"nhsuk-u-visually-hidden"},I0={class:"nhsuk-contents-list__list"};function A0(e,n,t,s,r,a){return c(),y("nav",G({class:"nhsuk-contents-list"},e.$attrs,{role:"navigation","aria-label":e.ariaLabel}),[_("h2",N0,N(e.hiddenText),1),_("ol",I0,[P(e.$slots,"default")])],16,T0)}var M0=B(R0,[["render",A0]]);const O0=v({name:"nhs-contents-item",inheritAttrs:!1,components:{NhsLinkSwitcher:Fe},emits:["click"],props:{href:{type:String},ariaCurrent:{type:String,default:()=>"page"}},setup(e){return{attributes:z(()=>{const t={};return e.href||(t["aria-current"]=e.ariaCurrent),t})}}});function H0(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("li",G({class:"nhsuk-contents-list__item"},e.attributes),[e.href?K("",!0):(c(),y("span",G({key:0,class:"nhsuk-contents-list__current"},e.$attrs),[P(e.$slots,"default")],16)),e.href?(c(),w(o,G({key:1,class:"nhsuk-contents-list__link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])):K("",!0)],16)}var P0=B(O0,[["render",H0]]);const L0=v({name:"nhs-details",inheritAttrs:!1,emits:[],props:{text:{type:String,required:!0}}}),B0={class:"nhsuk-details__summary"},D0={class:"nhsuk-details__summary-text"},q0={class:"nhsuk-details__text"};function V0(e,n,t,s,r,a){return c(),y("details",G({class:"nhsuk-details"},e.$attrs),[_("summary",B0,[_("span",D0,N(e.text),1)]),_("div",q0,[P(e.$slots,"default")])],16)}var U0=B(L0,[["render",V0]]);const F0=["tick","cross"],z0=v({name:"nhs-dodont",inheritAttrs:!1,emits:[],components:{NhsIcon:Sn,NhsHeadingSwitcher:rt},props:{title:{type:String,required:!0},type:{type:String,default:()=>"tick",validator:e=>F0.includes(e)},items:{type:Array,required:!0},headingLevel:{type:Number,default:()=>3}}});function j0(e,n,t,s,r,a){const o=d("nhs-heading-switcher"),i=d("nhs-icon");return c(),y("div",G({class:"nhsuk-do-dont-list"},e.$attrs),[u(o,{"heading-level":e.headingLevel,class:"nhsuk-do-dont-list__label"},{default:h(()=>[k(N(e.title),1)]),_:1},8,["heading-level"]),_("ul",{class:Se(`nhsuk-list nhsuk-list--${e.type}`)},[(c(!0),y(q,null,He(e.items,(l,p)=>(c(),y("li",{key:p},[u(i,{icon:e.type},null,8,["icon"]),P(e.$slots,"item",{item:l},()=>[k(N(l),1)])]))),128))],2)],16)}var W0=B(z0,[["render",j0]]);const K0=v({name:"nhs-error-summary",inheritAttrs:!1,emits:[],props:{title:{type:String,required:!0}},setup(){const e=kn(null);return Le(()=>{Ir(()=>{e.value.focus()})}),{errorSummary:e}}}),G0={class:"nhsuk-error-summary__title",id:"error-summary-title"},Y0={class:"nhsuk-error-summary__body"};function Z0(e,n,t,s,r,a){return c(),y("div",G({ref:"errorSummary",class:"nhsuk-error-summary"},e.$attrs,{"aria-labelledby":"error-summary-title",role:"alert",tabindex:"-1"}),[_("h2",G0,[P(e.$slots,"title",{title:e.title},()=>[k(N(e.title),1)])]),_("div",Y0,[P(e.$slots,"default")])],16)}var Q0=B(K0,[["render",Z0]]);const X0=v({name:"nhs-expander",emits:[],inheritAttrs:!1,props:{text:{type:String,required:!0}}}),J0={class:"nhsuk-details__summary"},eS={class:"nhsuk-details__summary-text"},nS={class:"nhsuk-details__text"};function tS(e,n,t,s,r,a){return c(),y("details",G({class:"nhsuk-details nhsuk-expander"},e.$attrs),[_("summary",J0,[_("span",eS,N(e.text),1)]),_("div",nS,[P(e.$slots,"default")])],16)}var sS=B(X0,[["render",tS]]);const rS=v({name:"nhs-expander-group",emits:[],inheritAttrs:!1});function oS(e,n,t,s,r,a){return c(),y("div",G({class:"nhsuk-expander-group"},e.$attrs),[P(e.$slots,"default")],16)}var aS=B(rS,[["render",oS]]);const iS=["xl","l","m"],lS=v({name:"nhs-fieldset",inheritAttrs:!1,emits:[],props:{legend:{type:String},pageHeading:{type:Boolean,default:()=>!1},size:{type:String,validator:e=>e?iS.includes(e):!0}},setup(e){return{classes:z(()=>{let t=["nhsuk-fieldset__legend"];return e.size&&t.push(`nhsuk-fieldset__legend--${e.size}`),t.join(" ")})}}}),uS={class:"nhsuk-fieldset__heading"};function cS(e,n,t,s,r,a){return c(),y("fieldset",G({class:"nhsuk-fieldset"},e.$attrs),[e.legend&&e.pageHeading?(c(),y("legend",{key:0,class:Se(e.classes)},[_("h1",uS,[P(e.$slots,"legend",{legend:e.legend},()=>[k(N(e.legend),1)])])],2)):K("",!0),e.legend&&!e.pageHeading?(c(),y("legend",{key:1,class:Se(e.classes)},[P(e.$slots,"legend",{legend:e.legend},()=>[k(N(e.legend),1)])],2)):K("",!0),P(e.$slots,"default")],16)}var Fs=B(lS,[["render",cS]]);const dS=v({name:"nhs-footer",inheritAttrs:!1,emits:[],props:{hiddenText:{type:String,default:()=>"Support links"},copyright:{type:String,default:()=>"Crown copyright"}}}),hS={role:"contentinfo"},pS={class:"nhsuk-width-container"},mS={key:0,class:"nhsuk-u-visually-hidden"},fS={key:1,class:"nhsuk-footer__list"},_S={class:"nhsuk-footer__copyright"};function gS(e,n,t,s,r,a){return c(),y("footer",hS,[_("div",G({class:"nhsuk-footer",id:"nhsuk-footer"},e.$attrs),[_("div",pS,[e.$slots.default?(c(),y("h2",mS,N(e.hiddenText),1)):K("",!0),e.$slots.default?(c(),y("ul",fS,[P(e.$slots,"default")])):K("",!0),_("p",_S,"\xA9 "+N(e.copyright),1)])],16)])}var bS=B(dS,[["render",gS]]);const vS=v({name:"nhs-footer-item",emits:["click"],inheritAttrs:!1,components:{NhsLinkSwitcher:Fe},props:{href:{type:String,required:!0}}}),$S={class:"nhsuk-footer__list-item"};function yS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("li",$S,[u(o,G({class:"nhsuk-footer__list-item-link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var kS=B(vS,[["render",yS]]);const oa={fluid:"nhsuk-width-container-fluid",normal:"nhsuk-width-container"},wS=v({name:"nhs-main",inheritAttrs:!1,emits:[],props:{type:{type:String,default:()=>"normal",validator:e=>e in oa}},setup(e){return{classes:z(()=>oa[e.type])}}}),SS={class:"nhsuk-main-wrapper",id:"maincontent"};function xS(e,n,t,s,r,a){return c(),y("div",G({class:e.classes},e.$attrs),[_("main",SS,[P(e.$slots,"default")])],16)}var CS=B(wS,[["render",xS]]);const aa={100:"full",75:"three-quarters",66:"two-thirds",50:"one-half",33:"one-third",25:"one-quarter"},ES=v({name:"nhs-col",inheritAttrs:!1,emits:[],props:{span:{type:Number,default:()=>100,validator:e=>e in aa}},setup(e){return{classes:z(()=>`nhsuk-grid-column-${aa[e.span]}`)}}});function RS(e,n,t,s,r,a){return c(),y("div",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var TS=B(ES,[["render",RS]]);const NS=v({name:"nhs-row",inheritAttrs:!1,emits:[]});function IS(e,n,t,s,r,a){return c(),y("div",G({class:"nhsuk-grid-row"},e.$attrs),[P(e.$slots,"default")],16)}var AS=B(NS,[["render",IS]]);const MS=v({components:{NhsLinkSwitcher:Fe},inheritAttrs:!1,emits:[],props:{ariaLabel:{type:String,required:!0},homeHref:{type:String,required:!0},service:{type:Object,required:!0},showTransactional:{type:Boolean,required:!0}},setup(e){function n(){return Object.keys(e.service).length>0&&!e.showTransactional}return{classes:z(()=>{const s=["nhsuk-header__link"];return n()&&s.push("nhsuk-header__link--service"),s.join(" ")}),showService:n}}}),OS=_("svg",{class:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",viewBox:"0 0 40 16"},[_("path",{class:"nhsuk-logo__background",d:"M0 0h40v16H0z"}),_("path",{class:"nhsuk-logo__text",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})],-1),HS={key:0,class:"nhsuk-header__service-name"};function PS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),w(o,G({class:e.classes,href:e.homeHref,"aria-label":e.ariaLabel},e.$attrs),{default:h(()=>[OS,e.showService()?(c(),y("span",HS,N(e.service.name),1)):K("",!0)]),_:1},16,["class","href","aria-label"])}var LS=B(MS,[["render",PS]]);const BS=v({components:{NhsLinkSwitcher:Fe},inheritAttrs:!1,emits:[],props:{homeHref:{type:String,required:!0},organisation:{type:Object,required:!0}},setup(e){return{ariaLabel:z(()=>{const t=[],s=e.organisation.name,r=e.organisation.split,a=e.organisation.descriptor;return s&&t.push(s),r&&t.push(r),a&&t.push(a),t.push("homepage"),t.join(" ")})}}}),DS=["src"],qS={key:1,class:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",viewBox:"0 0 40 16"},VS=_("path",{class:"nhsuk-logo__background",d:"M0 0h40v16H0z"},null,-1),US=_("path",{class:"nhsuk-logo__text",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"},null,-1),FS=_("image",{src:"https://assets.nhs.uk/images/nhs-logo.png","xlink:href":""},null,-1),zS=[VS,US,FS],jS={key:2,class:"nhsuk-organisation-name"},WS={key:0,class:"nhsuk-organisation-name-split"},KS={key:3,class:"nhsuk-organisation-descriptor"};function GS(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),w(o,G({class:"nhsuk-header__link",href:e.homeHref,"aria-label":e.ariaLabel},e.$attrs),{default:h(()=>[e.organisation.logoURL?(c(),y("img",{key:0,class:"nhsuk-org-logo",src:e.organisation.logoURL,alt:""},null,8,DS)):K("",!0),e.organisation.logoURL?K("",!0):(c(),y("svg",qS,zS)),e.organisation.logoURL?K("",!0):(c(),y("span",jS,[k(N(e.organisation.name)+" ",1),e.organisation.split?(c(),y("span",WS,N(e.organisation.split),1)):K("",!0)])),!e.organisation.logoURL&&e.organisation.descriptor?(c(),y("span",KS,N(e.organisation.descriptor),1)):K("",!0)]),_:1},16,["href","aria-label"])}var YS=B(BS,[["render",GS]]);const ZS=v({inheritAttrs:!1,emits:[],components:{HeaderLogoNormal:LS,HeaderLogoOrg:YS},props:{ariaLabel:{type:String,required:!0},homeHref:{type:String,required:!0},service:{type:Object,required:!0},showTransactional:{type:Boolean,required:!0},organisation:{type:Object,required:!0},showNav:{type:Boolean,required:!0},showSearch:{type:Boolean,required:!0}},setup(e){const n=z(()=>{const s=["nhsuk-header__logo"];return!e.showSearch&&!e.showNav&&s.push("nhsuk-header__logo--only"),s.join(" ")}),t=z(()=>Object.keys(e.organisation).length>0);return{classes:n,isOrgLogo:t}}});function QS(e,n,t,s,r,a){const o=d("header-logo-org"),i=d("header-logo-normal");return c(),y("div",G({class:e.classes},e.$attrs),[e.isOrgLogo?(c(),w(o,{key:0,organisation:e.organisation,"home-href":e.homeHref},null,8,["organisation","home-href"])):K("",!0),e.isOrgLogo?K("",!0):(c(),w(i,{key:1,"aria-label":e.ariaLabel,"home-href":e.homeHref,service:e.service,"show-transactional":e.showTransactional},null,8,["aria-label","home-href","service","show-transactional"]))],16)}var XS=B(ZS,[["render",QS]]);const Qt={toggleNav:"toggle-nav",toggleSearch:"toggle-search"},JS=v({inheritAttrs:!1,emits:[],components:{NhsIcon:Sn,NhsLinkSwitcher:Fe},props:{homeHref:{type:String,required:!0},homeText:{type:String,required:!0},navOpen:{type:Boolean,required:!0}},setup(e){const n=z(()=>{const s=["nhsuk-header__navigation"];return e.navOpen&&s.push("js-show"),s.join(" ")}),t=xe(Qt.toggleNav);return{classes:n,toggleNav:t}}}),ex={class:"nhsuk-width-container"},nx={class:"nhsuk-header__navigation-title"},tx=_("span",{id:"label-navigation"},"Menu",-1),sx=_("span",{class:"nhsuk-u-visually-hidden"},"Close menu",-1),rx={class:"nhsuk-header__navigation-list"},ox={class:"nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile"};function ax(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),y("nav",G({class:e.classes,id:"header-navigation",role:"navigation","aria-label":"Primary navigation","aria-labelledby":"label-navigation"},e.$attrs),[_("div",ex,[_("p",nx,[tx,_("button",{class:"nhsuk-header__navigation-close",id:"close-menu",onClick:n[0]||(n[0]=On(l=>e.toggleNav(),["prevent"]))},[u(o,{icon:"close"}),sx])]),_("ul",rx,[_("li",ox,[u(i,{class:"nhsuk-header__navigation-link",href:e.homeHref},{default:h(()=>[k(N(e.homeText)+" ",1),u(o,{icon:"chevron-right"})]),_:1},8,["href"])]),P(e.$slots,"default")])])],16)}var ix=B(JS,[["render",ax]]);const lx=v({inheritAttrs:!1,emits:["submit-search","update:search-text"],props:{searchAction:{type:String,required:!0},searchInputName:{type:String,required:!0},searchMenuOpen:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},searchText:{type:String,required:!0}},components:{NhsIcon:Sn},setup(e,n){const t=Y({searchOpen:!1,currentResultCount:-1,ariaLabelledBy:"",searchTextInternal:e.searchText});Ue(()=>t.searchTextInternal,L=>{t.searchOpen=!0,t.currentResultCount=-1,n.emit("update:search-text",L)});const s=z(()=>{const L=["nhsuk-header__search-toggle"];return e.searchMenuOpen&&L.push("is-active"),L.join(" ")}),r=z(()=>{const L=["nhsuk-header__search-wrap"];return e.searchMenuOpen&&L.push("js-show"),L.join(" ")}),a=z(()=>{const L=["autocomplete__menu"];return e.searchResults.length>0&&t.searchOpen?L.push("autocomplete__menu--visible"):L.push("autocomplete__menu--hidden"),L.join(" ")}),o=z(()=>t.currentResultCount>-1?l(t.currentResultCount):"");function i(L){const X=["autocomplete__option"];return t.currentResultCount===L&&X.push("autocomplete__option--focused"),X.join(" ")}function l(L){return`search-field__option--${L}`}function p(){t.currentResultCount<e.searchResults.length-1&&(t.currentResultCount=t.currentResultCount+1)}function f(){t.currentResultCount>=0&&(t.currentResultCount=t.currentResultCount-1)}function m(){t.currentResultCount=-1}function b(L){L.target.id!=="search-field"&&L.target.id!=="search-results"&&!L.target.id.includes("search-field__option--")&&!L.target.id.includes("search-field-icon__option--")&&(t.searchOpen=!1,t.currentResultCount=-1)}const R=xe(Qt.toggleSearch);function W(L=void 0){L||L===0?n.emit("submit-search",e.searchResults[L]):t.currentResultCount>-1?n.emit("submit-search",e.searchResults[t.currentResultCount]):n.emit("submit-search",t.searchTextInternal),t.searchOpen=!1,t.currentResultCount=-1}return Le(()=>{document.addEventListener("click",b)}),St(()=>{document.removeEventListener("click",b)}),mu(Kr({submitSearch:W,toggleSearchButtonClasses:s,searchWrapClasses:r},ee(t)),{toggleSearch:R,searchMenuClasses:a,onArrowDown:p,onArrowUp:f,onMouseOver:m,searchResultClasses:i,searchResultId:l,activeDescendant:o})}}),zs=e=>(qa("data-v-15f48b6e"),e=e(),Va(),e),ux=["aria-expanded"],cx=zs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Search",-1)),dx=["action"],hx=zs(()=>_("label",{class:"nhsuk-u-visually-hidden",for:"search-field"},"Search the NHS website",-1)),px=["name","aria-activedescendant","aria-labelledby"],mx=["id","onClick"],fx=zs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Search",-1)),_x=zs(()=>_("span",{class:"nhsuk-u-visually-hidden"},"Close search",-1));function gx(e,n,t,s,r,a){const o=d("nhs-icon");return c(),y("div",G({class:"nhsuk-header__search"},e.$attrs),[_("button",{class:Se(e.toggleSearchButtonClasses),id:"toggle-search","aria-controls":"search","aria-label":"Open search","aria-expanded":e.searchMenuOpen,onClick:n[0]||(n[0]=i=>e.toggleSearch())},[u(o,{icon:"search"}),cx],10,ux),_("div",{class:Se(e.searchWrapClasses),id:"wrap-search"},[_("form",{class:"nhsuk-header__search-form",id:"search",action:e.searchAction,method:"get",role:"search"},[hx,bn(_("input",{class:"nhsuk-search__input",id:"search-field",name:e.searchInputName,type:"search",placeholder:"Search",autocomplete:"off","aria-activedescendant":e.activeDescendant,"aria-labelledby":e.ariaLabelledBy,role:"searchbox","aria-autocomplete":"list","aria-controls":"search-results",onKeydown:[n[1]||(n[1]=Ys(On(i=>e.onArrowDown(),["prevent"]),["down"])),n[2]||(n[2]=Ys(On(i=>e.onArrowUp(),["prevent"]),["up"])),n[3]||(n[3]=Ys(On(i=>e.submitSearch(),["prevent"]),["enter"]))],"onUpdate:modelValue":n[4]||(n[4]=i=>e.searchTextInternal=i),onFocus:n[5]||(n[5]=i=>e.searchOpen=!0)},null,40,px),[[ws,e.searchTextInternal]]),_("ul",{class:Se(e.searchMenuClasses),id:"search-results",role:"listbox"},[(c(!0),y(q,null,He(e.searchResults,(i,l)=>(c(),y("li",{class:Se(e.searchResultClasses(l)),id:e.searchResultId(l),role:"option",tabindex:"-1","aria-posinset":"1","aria-setsize":"10",onClick:p=>e.submitSearch(l),onMouseover:n[6]||(n[6]=p=>e.onMouseOver()),key:l},[u(o,{id:`search-field-icon__option--${l}`,icon:"search"},null,8,["id"]),k(" "+N(i.text),1)],42,mx))),128))],2),_("button",{class:"nhsuk-search__submit",type:"submit",onClick:n[7]||(n[7]=On(i=>e.submitSearch(),["prevent"]))},[u(o,{icon:"search"}),fx]),_("button",{class:"nhsuk-search__close",id:"close-search",onClick:n[8]||(n[8]=On(i=>e.toggleSearch(),["prevent"]))},[u(o,{icon:"close"}),_x])],8,dx)],2)],16)}var bx=B(lx,[["render",gx],["__scopeId","data-v-15f48b6e"]]);const vx=v({inheritAttrs:!1,components:{NhsLinkSwitcher:Fe},emits:[],props:{service:{type:Object,required:!0}},setup(e){const n=z(()=>{const r=["nhsuk-header__transactional-service-name"];return e.service.name&&e.service.name.length>22&&r.push("nhsuk-header__transactional-service-name--long"),r.join(" ")}),t=z(()=>e.service.href?e.service.href:"/"),s=z(()=>Object.keys(e.service).length>0);return{classes:n,href:t,isService:s}}});function $x(e,n,t,s,r,a){const o=d("nhs-link-switcher");return e.isService?(c(),y("div",G({key:0,class:e.classes},e.$attrs),[u(o,{class:"nhsuk-header__transactional-service-name--link",href:e.href},{default:h(()=>[k(N(e.service.name),1)]),_:1},8,["href"])],16)):K("",!0)}var yx=B(vx,[["render",$x]]);const kx=v({inheritAttrs:!1,emits:[],props:{showNav:{type:Boolean,required:!0},showSearch:{type:Boolean,required:!0},navOpen:{type:Boolean,required:!0}},setup(e){const n=z(()=>{const r=["nhsuk-header__menu"];return e.showSearch||r.push("nhsuk-header__menu--only"),r.join(" ")}),t=z(()=>{const r=["nhsuk-header__menu-toggle"];return e.navOpen&&r.push("is-active"),r.join(" ")}),s=xe(Qt.toggleNav);return{classes:n,menuButtonClasses:t,toggleNav:s}}}),wx=["aria-expanded"];function Sx(e,n,t,s,r,a){return e.showNav?(c(),y("div",G({key:0,class:e.classes},e.$attrs),[_("button",{class:Se(e.menuButtonClasses),id:"toggle-menu","aria-controls":"header-navigation","aria-label":"Open menu","aria-expanded":e.navOpen,onClick:n[0]||(n[0]=o=>e.toggleNav())}," Menu ",10,wx)],16)):K("",!0)}var xx=B(kx,[["render",Sx]]);const Cx=v({inheritAttrs:!1,name:"nhs-header",emits:["submit-search","update:search-text"],props:{showSearch:{type:Boolean,default:!1},showNav:{type:Boolean,default:!1},transactional:{type:Boolean,default:!1},service:{type:Object,default:()=>({})},organisation:{type:Object,default:()=>({})},ariaLabel:{type:String,default:()=>"NHS homepage"},homeHref:{type:String,default:()=>"/"},whiteHeader:{type:Boolean,default:()=>!1},whiteNav:{type:Boolean,default:()=>!1},searchAction:{type:String,default:()=>"https://www.nhs.uk/search/"},searchInputName:{type:String,default:()=>"q"},homeText:{type:String,default:()=>"Home"},searchResults:{type:Array,default:()=>[]},searchText:{type:String,default:()=>""}},components:{HeaderNav:ix,HeaderSearch:bx,HeaderLogo:XS,HeaderTransactional:yx,HeaderMenu:xx},setup(e){const n=Y({navOpen:!1,searchOpen:!1});function t(){n.navOpen=!n.navOpen}function s(){n.searchOpen=!n.searchOpen}Ee(Qt.toggleNav,t),Ee(Qt.toggleSearch,s);function r(){return e.transactional&&!e.showSearch&&!e.showNav}const a=z(()=>{const i=["nhsuk-header"];return r()&&i.push("nhsuk-header--transactional"),e.organisation.name&&i.push("nhsuk-header--organisation"),e.whiteHeader&&i.push("nhsuk-header--white"),e.whiteNav&&i.push("nhsuk-header--white-nav"),i.join(" ")}),o=z(()=>{const i=["nhsuk-header__content"];return n.searchOpen&&i.push("js-show"),i.join(" ")});return mu(Kr({classes:a,showTransactional:r},ee(n)),{headerContentClasses:o})}}),Ex={class:"nhsuk-width-container nhsuk-header__container"};function Rx(e,n,t,s,r,a){const o=d("header-logo"),i=d("header-transactional"),l=d("header-menu"),p=d("header-search"),f=d("header-nav");return c(),y("header",G({class:e.classes,role:"banner"},e.$attrs),[_("div",Ex,[u(o,{"home-href":e.homeHref,service:e.service,organisation:e.organisation,"aria-label":e.ariaLabel,"show-transactional":e.showTransactional(),showNav:e.showNav,showSearch:e.showSearch},null,8,["home-href","service","organisation","aria-label","show-transactional","showNav","showSearch"]),e.showTransactional()?(c(),w(i,{key:0,service:e.service},null,8,["service"])):K("",!0),e.showNav||e.showSearch?(c(),y("div",{key:1,class:Se(e.headerContentClasses),id:"content-header"},[u(l,{"show-search":e.showSearch,"show-nav":e.showNav,"nav-open":e.navOpen},null,8,["show-search","show-nav","nav-open"]),e.showSearch?(c(),w(p,{key:0,"search-action":e.searchAction,"search-input-name":e.searchInputName,"search-menu-open":e.searchOpen,"search-results":e.searchResults,"search-text":e.searchText,"onUpdate:searchText":n[0]||(n[0]=m=>e.$emit("update:search-text",m)),onSubmitSearch:n[1]||(n[1]=m=>e.$emit("submit-search",m))},null,8,["search-action","search-input-name","search-menu-open","search-results","search-text"])):K("",!0)],2)):K("",!0)]),e.showNav?(c(),w(f,{key:0,"nav-open":e.navOpen,"home-href":e.homeHref,"home-text":e.homeText},{default:h(()=>[P(e.$slots,"default")]),_:3},8,["nav-open","home-href","home-text"])):K("",!0)],16)}var Tx=B(Cx,[["render",Rx]]);const Nx=v({inheritAttrs:!1,name:"nhs-header-item",emits:["click"],components:{NhsLinkSwitcher:Fe,NhsIcon:Sn},props:{href:{type:String,required:!0}}}),Ix={class:"nhsuk-header__navigation-item"};function Ax(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),y("li",Ix,[u(i,G({onClick:n[0]||(n[0]=l=>e.$emit("click")),class:"nhsuk-header__navigation-link",href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default"),u(o,{icon:"chevron-right"})]),_:3},16,["href"])])}var Mx=B(Nx,[["render",Ax]]);const Ox=v({inheritAttrs:!1,name:"nhs-hero",emits:[],props:{heading:{type:String},imageUrl:{type:String},text:{type:String}},setup(e){const n=z(()=>{const o=["nhsuk-hero"];return e.heading&&e.imageUrl?o.push("nhsuk-hero--image nhsuk-hero--image-description"):e.imageUrl&&o.push("nhsuk-hero--image"),o.join(" ")}),t=z(()=>{const o={};return e.imageUrl&&(o["background-image"]=`url('${e.imageUrl}')`),o}),s=z(()=>{const o=["nhsuk-width-container"];return e.imageUrl||o.push("nhsuk-hero--border"),o.join(" ")}),r=z(()=>e.imageUrl?"nhsuk-hero-content":"nhsuk-hero__wrapper"),a=z(()=>e.text?"nhsuk-u-margin-bottom-3":"");return{sectionClass:n,sectionStyle:t,widthContainerClass:s,heroContentClass:r,headingClass:a}}}),Hx={key:0,class:"nhsuk-hero__overlay"},Px={class:"nhsuk-grid-row"},Lx={class:"nhsuk-grid-column-two-thirds"},Bx={key:0,class:"nhsuk-body-l nhsuk-u-margin-bottom-0"},Dx={key:1,class:"nhsuk-hero__arrow","aria-hidden":"true"},qx={class:"nhsuk-grid-row"},Vx={class:"nhsuk-grid-column-two-thirds"},Ux={key:0,class:"nhsuk-body-l nhsuk-u-margin-bottom-0"},Fx={key:1,class:"nhsuk-hero__arrow","aria-hidden":"true"};function zx(e,n,t,s,r,a){return c(),y("section",G({class:e.sectionClass,style:e.sectionStyle},e.$attrs),[e.imageUrl?(c(),y("div",Hx,[e.heading?(c(),y("div",{key:0,class:Se(e.widthContainerClass)},[_("div",Px,[_("div",Lx,[_("div",{class:Se(e.heroContentClass)},[_("h1",{class:Se(e.headingClass)},N(e.heading),3),e.text?(c(),y("p",Bx,N(e.text),1)):K("",!0),e.imageUrl?(c(),y("span",Dx)):K("",!0)],2)])])],2)):K("",!0)])):K("",!0),e.heading&&!e.imageUrl?(c(),y("div",{key:1,class:Se(e.widthContainerClass)},[_("div",qx,[_("div",Vx,[_("div",{class:Se(e.heroContentClass)},[_("h1",{class:Se(e.headingClass)},N(e.heading),3),e.text?(c(),y("p",Ux,N(e.text),1)):K("",!0),e.imageUrl?(c(),y("span",Fx)):K("",!0)],2)])])],2)):K("",!0)],16)}var jx=B(Ox,[["render",zx]]);const Wx=v({inheritAttrs:!1,name:"nhs-image",emits:[],props:{src:{type:String,required:!0},alt:{type:String,required:!0},sizes:{type:String,default:()=>""},srcset:{type:String,default:()=>""}},setup(e,n){return{isCaption:z(()=>Boolean(n.slots.default))}}}),Kx=["src","alt","sizes","srcset"],Gx={key:0,class:"nhsuk-image__caption"};function Yx(e,n,t,s,r,a){return c(),y("figure",G({class:"nhsuk-image"},e.$attrs),[_("img",{class:"nhsuk-image__img",src:e.src,alt:e.alt,sizes:e.sizes,srcset:e.srcset},null,8,Kx),e.isCaption?(c(),y("figcaption",Gx,[P(e.$slots,"default")])):K("",!0)],16)}var Zx=B(Wx,[["render",Yx]]);const Qx=v({inheritAttrs:!1,name:"nhs-list-panel",emits:[],components:{NhsHeadingSwitcher:rt,NhsLinkSwitcher:Fe,NhsIcon:Sn},props:{label:{type:String},id:{type:String},headingLevel:{type:Number,default:()=>2},disabled:{type:Boolean,default:()=>!1},message:{type:String}},setup(){return{classes:z(()=>["nhsuk-list nhsuk-list--border"].join(" "))}}});function Xx(e,n,t,s,r,a){const o=d("nhs-card");return c(),w(o,G({feature:""},e.$attrs,{"heading-level":e.headingLevel,heading:e.label,id:e.id}),{description:h(()=>[e.disabled?K("",!0):(c(),y("ul",{key:0,class:Se(e.classes)},[P(e.$slots,"default")],2)),e.disabled?(c(),y("div",{key:1,class:Se(e.classes)},N(e.message),3)):K("",!0)]),_:3},16,["heading-level","heading","id"])}var Jx=B(Qx,[["render",Xx]]);const eC=v({name:"nhs-list-panel-item",emits:["click"],inheritAttrs:!1,components:{NhsLinkSwitcher:Fe},props:{href:{type:String,required:!0}}}),nC={class:"nhsuk-list-panel__item"};function tC(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("li",nC,[u(o,G({class:"nhsuk-list-panel__link",onClick:n[0]||(n[0]=i=>e.$emit("click")),href:e.href},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"])])}var sC=B(eC,[["render",tC]]);const rC=v({inheritAttrs:!1,name:"nhs-nav-az",emits:[],props:{ariaLabel:{type:String,default:()=>"A to Z Navigation"}}}),oC=["aria-label"],aC={class:"nhsuk-list nhsuk-u-clear nhsuk-u-margin-0",role:"list"};function iC(e,n,t,s,r,a){return c(),y("nav",G({class:"nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4",id:"nhsuk-nav-a-z",role:"navigation","aria-label":e.ariaLabel},e.$attrs),[_("ol",aC,[P(e.$slots,"default")])],16,oC)}var lC=B(rC,[["render",iC]]);const uC=v({name:"nhs-nav-az-item",inheritAttrs:!1,emits:["click"],components:{NhsLinkSwitcher:Fe},props:{disabled:{type:Boolean,default:()=>!1},href:{type:String,default:()=>""}}}),cC={class:"nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1"};function dC(e,n,t,s,r,a){const o=d("nhs-link-switcher");return c(),y("li",cC,[e.disabled?(c(),y("span",G({key:0,class:"nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block"},e.$attrs),[P(e.$slots,"default")],16)):K("",!0),e.disabled?K("",!0):(c(),w(o,G({key:1,class:"nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block",href:e.href,onClick:n[0]||(n[0]=i=>e.$emit("click"))},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["href"]))])}var hC=B(uC,[["render",dC]]);const pC=v({inheritAttrs:!1,name:"nhs-pagination",emits:["click-next","click-previous"],props:{ariaLabel:{type:String,default:()=>"Pagination"},previousHref:{type:String},previousPage:{type:String},nextHref:{type:String},nextPage:{type:String}},components:{NhsIcon:Sn,NhsLinkSwitcher:Fe}}),mC=["aria-label"],fC={class:"nhsuk-list nhsuk-pagination__list"},_C={key:0,class:"nhsuk-pagination-item--previous"},gC=_("span",{class:"nhsuk-pagination__title"},"Previous",-1),bC=_("span",{class:"nhsuk-u-visually-hidden"},":",-1),vC={class:"nhsuk-pagination__page"},$C={key:1,class:"nhsuk-pagination-item--next"},yC=_("span",{class:"nhsuk-pagination__title"},"Next",-1),kC=_("span",{class:"nhsuk-u-visually-hidden"},":",-1),wC={class:"nhsuk-pagination__page"};function SC(e,n,t,s,r,a){const o=d("nhs-icon"),i=d("nhs-link-switcher");return c(),y("nav",G({class:"nhsuk-pagination",role:"navigation","aria-label":e.ariaLabel},e.$attrs),[_("ul",fC,[e.previousHref&&e.previousPage?(c(),y("li",_C,[u(i,{class:"nhsuk-pagination__link nhsuk-pagination__link--prev",onClick:n[0]||(n[0]=l=>e.$emit("click-previous")),href:e.previousHref},{default:h(()=>[gC,bC,_("span",vC,N(e.previousPage),1),u(o,{icon:"arrow-left"})]),_:1},8,["href"])])):K("",!0),e.nextHref&&e.nextPage?(c(),y("li",$C,[u(i,{class:"nhsuk-pagination__link nhsuk-pagination__link--next",onClick:n[1]||(n[1]=l=>e.$emit("click-next")),href:e.nextHref},{default:h(()=>[yC,kC,_("span",wC,N(e.nextPage),1),u(o,{icon:"arrow-right"})]),_:1},8,["href"])])):K("",!0)])],16,mC)}var xC=B(pC,[["render",SC]]);const CC=v({inheritAttrs:!1,emits:[],name:"nhs-review-date",props:{lastReview:{type:String,required:!0},nextReview:{type:String,required:!0}}}),EC={class:"nhsuk-body-s"},RC=_("br",null,null,-1);function TC(e,n,t,s,r,a){return c(),y("div",G({class:"nhsuk-review-date"},e.$attrs),[_("p",EC,[k(" Page last reviewed: "+N(e.lastReview),1),RC,k(" Next review due: "+N(e.nextReview),1)])],16)}var NC=B(CC,[["render",TC]]);const IC=v({inheritAttrs:!1,name:"nhs-skip-link",emits:["click"]});function AC(e,n,t,s,r,a){return c(),y("a",G({class:"nhsuk-skip-link",href:"#maincontent",onClick:n[0]||(n[0]=o=>e.$emit("click"))},e.$attrs),[P(e.$slots,"default")],16)}var MC=B(IC,[["render",AC]]);const OC=v({inheritAttrs:!1,name:"nhs-summary-list",emits:[],props:{data:{type:Array,required:!0},border:{type:Boolean,default:()=>!0}},setup(e){return{classes:z(()=>{const t=["nhsuk-summary-list"];return e.border||t.push("nhsuk-summary-list--no-border"),t.join(" ")})}}});function HC(e,n,t,s,r,a){return c(),y("dl",G({class:e.classes},e.$attrs),[(c(!0),y(q,null,He(e.data,(o,i)=>(c(),y("div",{class:"nhsuk-summary-list__row",key:i},[P(e.$slots,"item",{item:o})]))),128))],16)}var PC=B(OC,[["render",HC]]);const LC=v({emits:[],inheritAttrs:!1});function BC(e,n,t,s,r,a){return c(),y("dt",G({class:"nhsuk-summary-list__key"},e.$attrs),[P(e.$slots,"default")],16)}var DC=B(LC,[["render",BC]]);const qC=v({emits:[],inheritAttrs:!1});function VC(e,n,t,s,r,a){return c(),y("dd",G({class:"nhsuk-summary-list__value"},e.$attrs),[P(e.$slots,"default")],16)}var UC=B(qC,[["render",VC]]);const FC=v({emits:[],inheritAttrs:!1});function zC(e,n,t,s,r,a){return c(),y("dd",G({class:"nhsuk-summary-list__actions"},e.$attrs),[P(e.$slots,"default")],16)}var jC=B(FC,[["render",zC]]);const WC=["key","value","actions"],KC=v({inheritAttrs:!1,name:"NhsSummaryListItem",emits:[],props:{type:{type:String,required:!0,validator:e=>WC.includes(e)}},setup(e){return{componentType:z(()=>e.type==="key"?DC:e.type==="actions"?jC:UC)}}});function GC(e,n,t,s,r,a){return c(),w(on(e.componentType),Rs(Xt(e.$attrs)),{default:h(()=>[P(e.$slots,"default")]),_:3},16)}var YC=B(KC,[["render",GC]]);const ZC=v({inheritAttrs:!1,emit:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},responsive:{type:Boolean,default:()=>!0}},components:{NhsHeadingSwitcher:rt},setup(e){return{classes:z(()=>e.responsive?"nhsuk-table-responsive":"nhsuk-table")}}});function QC(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),y("div",G({class:"nhsuk-table__panel-with-heading-tab"},e.$attrs),[u(o,{"heading-level":e.headingLevel,class:"nhsuk-table__heading-tab"},{default:h(()=>[k(N(e.heading),1)]),_:1},8,["heading-level"]),_("table",{role:"table",class:Se(e.classes)},[P(e.$slots,"default")],2)],16)}var XC=B(ZC,[["render",QC]]);const JC=v({inheritAttrs:!1,emit:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},responsive:{type:Boolean,default:()=>!0}},setup(e){return{classes:z(()=>e.responsive?"nhsuk-table-responsive":"nhsuk-table")}}});function eE(e,n,t,s,r,a){return c(),y("table",G({role:"table",class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var nE=B(JC,[["render",eE]]);const tE=v({inheritAttrs:!1,name:"nhs-table",emits:[],props:{heading:{type:String},headingLevel:{type:Number,default:()=>3},caption:{type:String},headers:{type:Array,required:!0},data:{type:Array,required:!0},responsive:{type:Boolean,default:()=>!0}},setup(e){const n=z(()=>e.heading?XC:nE),t=z(()=>e.responsive?"cell":"");return{tableType:n,tableCellRole:t}}}),sE={key:0,class:"nhsuk-table__caption"},rE={role:"rowgroup",class:"nhsuk-table__head"},oE={role:"row"},aE={class:"nhsuk-table__body"},iE=["role"],lE={key:0,class:"nhsuk-table-responsive__heading"};function uE(e,n,t,s,r,a){return c(),w(on(e.tableType),G({heading:e.heading,"heading-level":e.headingLevel,responsive:e.responsive},e.$attrs),{default:h(()=>[e.caption?(c(),y("caption",sE,N(e.caption),1)):K("",!0),_("thead",rE,[_("tr",oE,[(c(!0),y(q,null,He(e.headers,(o,i)=>(c(),y("th",{class:"nhsuk-table__header",scope:"col",key:i,style:Bn(o.style)},[P(e.$slots,"header",{props:o},()=>[k(N(o.text),1)])],4))),128))])]),_("tbody",aE,[(c(!0),y(q,null,He(e.data,(o,i)=>(c(),y("tr",{class:"nhsuk-table__row",key:i},[(c(!0),y(q,null,He(e.headers,(l,p)=>(c(),y("td",{role:e.tableCellRole,class:"nhsuk-table__cell",key:p},[e.responsive?(c(),y("span",lE,N(l.text),1)):K("",!0),P(e.$slots,`item.${l.value}`,{item:o},()=>[k(N(o[l.value]),1)])],8,iE))),128))]))),128))])]),_:3},16,["heading","heading-level","responsive"])}var cE=B(tE,[["render",uE]]);const dE=["","white","grey","green","aqua-green","blue","purple","pink","red","orange","yellow"],hE=v({inheritAttrs:!1,name:"nhs-tag",emits:[],props:{color:{type:String,default:()=>"",validator:e=>dE.includes(e)}},setup(e){return{classes:z(()=>{let t=["nhsuk-tag"];return e.color&&t.push(`nhsuk-tag--${e.color}`),t.join(" ")})}}});function pE(e,n,t,s,r,a){return c(),y("strong",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var mE=B(hE,[["render",pE]]);const fE=v({inheritAttrs:!1,name:"nhs-warning-callout",emits:[],components:{NhsHeadingSwitcher:rt},props:{heading:{type:String,required:!0},headingLevel:{type:Number,default:()=>3}},setup(e){function n(){return e.heading.toLowerCase().includes("important")}function t(){return n()?e.heading:""}return{isHeadingContainsImportant:n,showNormalHeading:t}}}),_E={key:0,role:"text"},gE=_("span",{class:"nhsuk-u-visually-hidden"},"Important: ",-1);function bE(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),y("div",G({class:"nhsuk-warning-callout"},e.$attrs),[u(o,{class:"nhsuk-warning-callout__label","heading-level":e.headingLevel},{default:h(()=>[P(e.$slots,"heading",{props:e.heading},()=>[k(N(e.showNormalHeading())+" ",1),e.isHeadingContainsImportant()?K("",!0):(c(),y("span",_E,[gE,k(" "+N(e.heading),1)]))])]),_:3},8,["heading-level"]),P(e.$slots,"default")],16)}var vE=B(fE,[["render",bE]]);const $E=["s"],yE=v({inheritAttrs:!1,name:"nhs-body",emits:[],props:{size:{type:String,validator:e=>$E.includes(e)}},setup(e){return{classes:z(()=>e.size?`nhsuk-body-${e.size}`:"nhsuk-body")}}});function kE(e,n,t,s,r,a){return c(),y("p",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var wE=B(yE,[["render",kE]]);const SE=v({emits:[],inheritAttrs:!1});function xE(e,n,t,s,r,a){return c(),y("ol",Rs(Xt(e.$attrs)),[P(e.$slots,"default")],16)}var CE=B(SE,[["render",xE]]);const EE=v({emits:[],inheritAttrs:!1});function RE(e,n,t,s,r,a){return c(),y("ul",Rs(Xt(e.$attrs)),[P(e.$slots,"default")],16)}var TE=B(EE,[["render",RE]]);const ia={bullet:"nhsuk-list--bullet",number:"nhsuk-list--number",error:"nhsuk-error-summary__list"},NE=v({inheritAttrs:!1,name:"nhs-list",emits:[],props:{type:{type:String,default:()=>"bullet",validator:e=>e in ia}},setup(e){const n=z(()=>e.type==="number"?CE:TE),t=z(()=>`nhsuk-list ${ia[e.type]}`);return{element:n,classes:t}}});function IE(e,n,t,s,r,a){return c(),w(on(e.element),G({class:e.classes},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["class"])}var AE=B(NE,[["render",IE]]);const ME=v({inheritAttrs:!1,name:"nhs-error-text",emits:[],props:{hiddenText:{type:String,default:()=>"Error: "},id:{type:String}}}),OE=["id"],HE={class:"nhsuk-u-visually-hidden"};function PE(e,n,t,s,r,a){return c(),y("span",G({class:"nhsuk-error-message",id:e.id},e.$attrs),[_("span",HE,N(e.hiddenText),1),P(e.$slots,"default")],16,OE)}var ot=B(ME,[["render",PE]]);const LE=v({inheritAttrs:!1,emits:[],name:"nhs-hint-text",props:{id:{type:String},element:{type:String,default:()=>"span"}}});function BE(e,n,t,s,r,a){return c(),w(on(e.element),G({class:"nhsuk-hint"},e.$attrs,{id:e.id}),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["id"])}var xn=B(LE,[["render",BE]]);const DE=v({inheritAttrs:!1,emits:[],name:"nhs-inset-text",props:{hiddenText:{type:String,default:()=>"Information: "}}}),qE={class:"nhsuk-u-visually-hidden"};function VE(e,n,t,s,r,a){return c(),y("div",G({class:"nhsuk-inset-text"},e.$attrs),[_("span",qE,N(e.hiddenText),1),P(e.$slots,"default")],16)}var UE=B(DE,[["render",VE]]);const la={xl:1,l:2,m:3,s:4,xs:5},FE=v({inheritAttrs:!1,name:"nhs-heading",emits:[],components:{NhsHeadingSwitcher:rt},props:{size:{type:String,default:()=>"l",validators:e=>e in la}},setup(e){return{headingLevel:z(()=>la[e.size])}}});function zE(e,n,t,s,r,a){const o=d("nhs-heading-switcher");return c(),w(o,G({"heading-level":e.headingLevel,class:`nhsuk-heading-${e.size}`},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["heading-level","class"])}var jE=B(FE,[["render",zE]]);const WE=v({inheritAttrs:!1,emits:[],props:{size:{type:String}},setup(e){return{classes:z(()=>{let t=["nhsuk-label"];return e.size&&t.push(`nhsuk-label--${e.size}`),t.join(" ")})}}});function KE(e,n,t,s,r,a){return c(),y("label",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var gu=B(WE,[["render",KE]]);const GE=v({inheritAttrs:!1,emits:[],components:{NhsLabelNormal:gu},props:{size:{type:String}}}),YE={class:"nhsuk-label-wrapper"};function ZE(e,n,t,s,r,a){const o=d("nhs-label-normal");return c(),y("h1",YE,[u(o,G({size:e.size},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["size"])])}var QE=B(GE,[["render",ZE]]);const XE=["xl","s"],JE=v({inheritAttrs:!1,name:"nhs-label",emits:[],props:{pageHeading:{type:Boolean,default:()=>!1},size:{type:String,validator:e=>e?XE.includes(e):!0}},setup(e){return{labelType:z(()=>e.pageHeading?QE:gu)}}});function e2(e,n,t,s,r,a){return c(),w(on(e.labelType),G({size:e.size},e.$attrs),{default:h(()=>[P(e.$slots,"default")]),_:3},16,["size"])}var at=B(JE,[["render",e2]]);const Ne={registerValidator:"register-validator",registerErrorStatus:"register-error-status",registerReset:"register-reset",unregisterItem:"unregister-item",registerItemValidator:"register-item-validator",registerItemErrorStatus:"register-item-error-status",registerItemErrorMsg:"register-item-error-msg",registerItemReset:"register-item-reset",unregisterItemGroupItem:"unregister-item-group-item"},n2=v({inheritAttrs:!1,name:"nhs-form",emits:["submit","update:model-value","reset"],props:{modelValue:{type:Boolean,default:()=>!0}},setup(e,n){const t=Y({validators:{},errorStatuses:{},resets:{}});function s(m,b){t.validators[m]=b}function r(m,b){t.errorStatuses[m]=b}function a(m,b){t.resets[m]=b}function o(m){delete t.validators[m],delete t.errorStatuses[m],delete t.resets[m]}Ee(Ne.registerValidator,s),Ee(Ne.registerErrorStatus,r),Ee(Ne.registerReset,a),Ee(Ne.unregisterItem,o);function i(){for(const m of Object.values(t.errorStatuses))if(m())return!1;return!0}function l(m){n.emit("update:model-value",m)}function p(){for(const b of Object.values(t.validators))b();const m=i();l(m),n.emit("submit")}function f(){for(const m of Object.values(t.resets))m();n.emit("reset")}return Ue(()=>i(),m=>{l(m)}),{onSubmit:p,onReset:f}}});function t2(e,n,t,s,r,a){return c(),y("form",G({onSubmit:n[0]||(n[0]=On(o=>e.onSubmit(),["prevent"])),onReset:n[1]||(n[1]=On(o=>e.onReset(),["prevent"]))},e.$attrs),[P(e.$slots,"default")],16)}var s2=B(n2,[["render",t2]]);const r2=v({inheritAttrs:!1,emits:[],props:{error:{type:Boolean,required:!0}},setup(e){return{classes:z(()=>{const t=["nhsuk-form-group"];return e.error&&t.push("nhsuk-form-group--error"),t.join(" ")})}}});function o2(e,n,t,s,r,a){return c(),y("div",G({class:e.classes},e.$attrs),[P(e.$slots,"default")],16)}var it=B(r2,[["render",o2]]);const bu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-",a2=bu.length;function Ct(){const e=[];for(let n=0;n<12;n++)e.push(bu.charAt(Math.floor(Math.random()*a2)));return e.join("")}function Un(e){return`${e}-hint`}function Fn(e){return`${e}-error`}function Jt(e,n){return z(()=>{const t=[];return e.hint&&t.push(Un(e.id)),n.value&&t.push(Fn(e.id)),t.join(" ")})}function i2(e,n){return z(()=>{const t=[];return e.hint&&t.push(Un(e.id)),n()&&t.push(Fn(e.id)),t.join(" ")})}function vu(e,n){for(const t of n){const s=t(e);if(typeof s=="string")return{errorMessage:s,errorStatus:!0}}return{errorMessage:"",errorStatus:!1}}function es(e,n){const t=kn(!1),s=kn("");function r(){const{errorMessage:m,errorStatus:b}=vu(n.value,e.rules);t.value=b,s.value=m}function a(){return t.value}function o(){t.value=!1,s.value=""}const i=xe(Ne.registerValidator,null),l=xe(Ne.registerErrorStatus,null),p=xe(Ne.registerReset,null),f=xe(Ne.unregisterItem,null);return Le(()=>{i&&i(e.id,r),l&&l(e.id,a),p&&p(e.id,o)}),St(()=>{f&&f(e.id)}),{error:t,errorMsg:s,validator:r}}function l2(e,n){const t=kn(!1),s=kn("");function r(){const{errorMessage:R,errorStatus:W}=vu(n.value,e.rules);t.value=W,s.value=R}function a(){return t.value}function o(){t.value=!1,s.value=""}function i(){return s.value}const l=xe(Ne.registerItemValidator,null),p=xe(Ne.registerItemErrorStatus,null),f=xe(Ne.registerItemReset,null),m=xe(Ne.registerItemErrorMsg,null),b=xe(Ne.unregisterItemGroupItem,null);return Le(()=>{l&&l(e.id,r),p&&p(e.id,a),m&&m(e.id,i),f&&f(e.id,o)}),St(()=>{b&&b(e.id)}),{error:t,errorMsg:s,validator:r}}function u2(e){const n=Y({errorMsgs:{},validators:{},errorStatuses:{},resets:{}});function t(L,X){n.validators[L]=X}function s(L,X){n.errorStatuses[L]=X}function r(L,X){n.resets[L]=X}function a(L,X){n.errorMsgs[L]=X}function o(L){delete n.validators[L],delete n.errorStatuses[L],delete n.resets[L],delete n.errorMsgs[L]}Ee(Ne.registerItemValidator,t),Ee(Ne.registerItemReset,r),Ee(Ne.registerItemErrorStatus,s),Ee(Ne.registerItemErrorMsg,a),Ee(Ne.unregisterItemGroupItem,o);function i(){for(const L of Object.values(n.resets))L()}function l(){for(const L of Object.values(n.validators))L()}function p(){for(const L of Object.values(n.errorStatuses))if(L())return!0;return!1}function f(){for(const L in n.errorStatuses)if(n.errorStatuses[L]())return n.errorMsgs[L]();return""}const m=xe(Ne.registerValidator,null),b=xe(Ne.registerErrorStatus,null),R=xe(Ne.registerReset,null),W=xe(Ne.unregisterItem,null);return Le(()=>{m&&m(e.id,l),b&&b(e.id,p),R&&R(e.id,i)}),St(()=>{W&&W(e.id)}),{errorStatus:p,errorMsg:f,validator:l}}function ua(e,n,t,s,r){n===e&&t(),s.emit(e,r)}function Et(e,n,t){function s(a=null){ua("blur",e.validateOn,n,t,a)}function r(a=null){ua("change",e.validateOn,n,t,a)}return{onBlur:s,onChange:r}}function zn(e,n){const t=kn(e.modelValue);return Ue(()=>t.value,s=>{n.emit("update:model-value",s)}),Ue(()=>e.modelValue,s=>{t.value=s}),t}function c2(e,n){const t=Y({internalModel:e.modelValue});return Ue(()=>e.modelValue,s=>{t.internalModel=s}),Ue(()=>t.internalModel,s=>{n.emit("update:model-value",s)}),t}const $u=["2","3","4","5","10","20"],d2=v({inheritAttrs:!1,emits:["update:model-value","focus","blur","change"],name:"nhs-input",components:{NhsFormItem:it,NhsHintText:xn,NhsLabel:at,NhsErrorText:ot},props:{width:{type:String,validator:e=>$u.includes(e)},type:{type:String,default:()=>"text"},maxlength:{type:Number},autocomplete:{type:String},inputmode:{type:String},spellcheck:{type:Boolean},disabled:{type:Boolean,default:()=>!1},modelValue:{required:!0},id:{type:String,default:()=>`nhs-input-${Ct()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=zn(e,n),{error:s,errorMsg:r,validator:a}=es(e,t),o=st(["disabled"],e,n),i=z(()=>{const m=["nhsuk-input"];return e.width&&m.push(`nhsuk-input--width-${e.width}`),s.value&&m.push("nhsuk-input--error"),m.join(" ")}),l=Jt(e,s),{onBlur:p,onChange:f}=Et(e,a,n);return{classes:i,attributes:o,ariaDescribedby:l,hintId:Un,errorId:Fn,onBlur:p,onChange:f,internalModel:t,error:s,errorMsg:r}}}),h2=["id","name","type","aria-describedby","maxlength","inputmode","spellcheck","autocomplete"];function p2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),w(p,{error:e.error},{default:h(()=>[e.label?(c(),w(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[k(N(e.label),1)])]),_:3},8,["for"])):K("",!0),e.hint?(c(),w(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.error?(c(),w(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[k(N(e.errorMsg),1)])]),_:3},8,["id"])):K("",!0),bn(_("input",G({class:e.classes,id:e.id,name:e.name,type:e.type,"aria-describedby":e.ariaDescribedby},e.attributes,{"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f),maxlength:e.maxlength,inputmode:e.inputmode,spellcheck:e.spellcheck,onBlur:n[1]||(n[1]=f=>e.onBlur()),onFocus:n[2]||(n[2]=f=>e.$emit("focus")),onChange:n[3]||(n[3]=f=>e.onChange()),autocomplete:e.autocomplete}),null,16,h2),[[di,e.internalModel]])]),_:3},8,["error"])}var m2=B(d2,[["render",p2]]);const f2=v({inheritAttrs:!1,name:"nhs-select",emits:["update:model-value","blur","change"],components:{NhsFormItem:it,NhsHintText:xn,NhsErrorText:ot,NhsLabel:at},props:{modelValue:{required:!0},disabled:{type:Boolean,default:()=>!1},id:{type:String,default:()=>`nhs-select-${Ct()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=zn(e,n),{error:s,errorMsg:r,validator:a}=es(e,t),o=st(["disabled"],e,n),i=Jt(e,s),{onBlur:l,onChange:p}=Et(e,a,n);return{classes:z(()=>{const m=["nhsuk-select"];return s.value&&m.push("nhsuk-select--error"),m.join(" ")}),attributes:o,ariaDescribedby:i,hintId:Un,errorId:Fn,onBlur:l,onChange:p,error:s,errorMsg:r,internalModel:t}}}),_2=["id","name","aria-describedby"];function g2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),w(p,{error:e.error},{default:h(()=>[e.label?(c(),w(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[k(N(e.label),1)])]),_:3},8,["for"])):K("",!0),e.hint?(c(),w(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.error?(c(),w(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[k(N(e.errorMsg),1)])]),_:3},8,["id"])):K("",!0),bn(_("select",G({class:e.classes,id:e.id,name:e.name},e.attributes,{"aria-describedby":e.ariaDescribedby,"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f),onBlur:n[1]||(n[1]=f=>e.onBlur()),onChange:n[2]||(n[2]=f=>e.onChange())}),[P(e.$slots,"default")],16,_2),[[ui,e.internalModel]])]),_:3},8,["error"])}var b2=B(f2,[["render",g2]]);const v2=v({name:"nhs-textarea",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],components:{NhsFormItem:it,NhsHintText:xn,NhsErrorText:ot,NhsLabel:at},props:{modelValue:{required:!0},disabled:{type:Boolean,default:()=>!1},id:{type:String,default:()=>`nhs-select-${Ct()}`},name:{type:String},rules:{type:Array,default:()=>[]},label:{type:String,default:()=>""},hint:{type:String,default:()=>""},validateOn:{type:String,default:()=>"blur"},rows:{type:Number,default:()=>5},autocomplete:{type:String}},setup(e,n){const t=zn(e,n),{error:s,errorMsg:r,validator:a}=es(e,t),o=st(["disabled"],e,n),i=Jt(e,s),{onBlur:l,onChange:p}=Et(e,a,n);return{classes:z(()=>{const m=["nhsuk-textarea"];return s.value&&m.push("nhsuk-textarea--error"),m.join(" ")}),internalModel:t,error:s,errorMsg:r,attributes:o,ariaDescribedby:i,onBlur:l,onChange:p,hintId:Un,errorId:Fn}}}),$2=["id","rows","name","aria-describedby","autocomplete"];function y2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text"),l=d("nhs-error-text"),p=d("nhs-form-item");return c(),w(p,{error:e.error},{default:h(()=>[e.label?(c(),w(o,{key:0,for:e.id},{default:h(()=>[P(e.$slots,"label",{label:e.label},()=>[k(N(e.label),1)])]),_:3},8,["for"])):K("",!0),e.hint?(c(),w(i,{key:1,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.error?(c(),w(l,{key:2,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[k(N(e.errorMsg),1)])]),_:3},8,["id"])):K("",!0),bn(_("textarea",G({class:e.classes,id:e.id,rows:e.rows,name:e.name,"onUpdate:modelValue":n[0]||(n[0]=f=>e.internalModel=f)},e.attributes,{"aria-describedby":e.ariaDescribedby,onBlur:n[1]||(n[1]=f=>e.onBlur()),onChange:n[2]||(n[2]=f=>e.onChange()),onFocus:n[3]||(n[3]=f=>e.$emit("focus")),autocomplete:e.autocomplete}),null,16,$2),[[ws,e.internalModel]])]),_:3},8,["error"])}var k2=B(v2,[["render",y2]]);const w2=v({components:{NhsLabel:at,NhsFormItem:it},inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{id:{type:String,required:!0},name:{type:String},type:{type:String,default:()=>"text"},width:{type:String,validator:e=>$u.includes(e)},disabled:{type:Boolean,default:()=>!1},label:{type:String},autocomplete:{type:String},rules:{type:Array,default:()=>[]},inputmode:{type:String},modelValue:{required:!0},validateOn:{type:String,default:()=>"blur"}},setup(e,n){const t=zn(e,n),{error:s,validator:r}=l2(e,t),{onChange:a,onBlur:o}=Et(e,r,n),i=z(()=>{const p=["nhsuk-input nhsuk-date-input__input"];return e.width&&p.push(`nhsuk-input--width-${e.width}`),s.value&&p.push("nhsuk-input--error"),p.join(" ")}),l=st(["disabled"],e,n);return{classes:i,internalModel:t,attributes:l,onChange:a,onBlur:o}}}),S2={class:"nhsuk-date-input__item"},x2=["id","name","type","autocomplete","inputmode"];function C2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-form-item");return c(),y("div",S2,[u(i,{error:!1},{default:h(()=>[e.label?(c(),w(o,{key:0,class:"nhsuk-date-input__label",for:e.id},{default:h(()=>[P(e.$slots,"item-label",{},()=>[k(N(e.label),1)])]),_:3},8,["for"])):K("",!0),bn(_("input",G({class:e.classes,id:e.id,name:e.name,type:e.type,autocomplete:e.autocomplete,inputmode:e.inputmode,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l)},e.attributes,{onChange:n[1]||(n[1]=l=>e.onChange()),onBlur:n[2]||(n[2]=l=>e.onBlur()),onFocus:n[3]||(n[3]=l=>e.$emit("focus"))}),null,16,x2),[[di,e.internalModel]])]),_:3})])}var E2=B(w2,[["render",C2]]);function ps(e,n){return`${e}-${n}`}function R2(e){function n(r,a){e.emit("blur",ps(r,a))}function t(r,a){e.emit("focus",ps(r,a))}function s(r,a){e.emit("change",ps(r,a))}return{onBlur:n,onFocus:t,onChange:s}}const T2=v({name:"nhs-input-group",inheritAttrs:!1,emits:["blur","focus","change","update:model-value"],components:{NhsInputGroupItem:E2,NhsHintText:xn,NhsErrorText:ot,NhsFieldset:Fs,NhsFormItem:it},props:{id:{type:String,default:()=>`nhs-input-group-${Ct()}`},hint:{type:String},label:{type:String},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},items:{type:Array,default:()=>[]},headingSize:{type:String},modelValue:{type:Object,default:()=>({})}},setup(e,n){const t=c2(e,n),{errorStatus:s,errorMsg:r}=u2(e),a=i2(e,s),{onBlur:o,onChange:i,onFocus:l}=R2(n);return Kr({errorStatus:s,errorMsg:r,hintId:Un,errorId:Fn,ariaDescribedby:a,onChange:i,onBlur:o,onFocus:l,itemGroupItemId:ps},ee(t))}}),N2=["id"];function I2(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-input-group-item"),p=d("nhs-fieldset"),f=d("nhs-form-item");return c(),w(f,{error:e.errorStatus()},{default:h(()=>[u(p,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),w(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.errorStatus()?(c(),w(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg()},()=>[k(N(e.errorMsg()),1)])]),_:3},8,["id"])):K("",!0),_("div",{class:"nhsuk-date-input",id:e.id},[(c(!0),y(q,null,He(e.items,(m,b)=>(c(),w(l,{label:m.label,width:m.width,type:m.type,autocomplete:m.autocomplete,inputmode:m.inputmode,disabled:m.disabled||e.disabled,id:e.itemGroupItemId(e.id,b),name:m.name,rules:m.rules,"validate-on":m["validate-on"],modelValue:e.internalModel[e.itemGroupItemId(e.id,b)],"onUpdate:modelValue":R=>e.internalModel[e.itemGroupItemId(e.id,b)]=R,key:e.itemGroupItemId(e.id,b),onChange:R=>e.onChange(e.id,b),onBlur:R=>e.onBlur(e.id,b),onFocus:R=>e.onFocus(e.id,b)},{"item-label":h(()=>[P(e.$slots,"item-label",{item:m})]),_:2},1032,["label","width","type","autocomplete","inputmode","disabled","id","name","rules","validate-on","modelValue","onUpdate:modelValue","onChange","onBlur","onFocus"]))),128))],8,N2)]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var A2=B(T2,[["render",I2]]);const M2=v({inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{checkboxValue:{type:String},hint:{type:String},label:{type:String,required:!0},name:{type:String},disabled:{type:Boolean,default:()=>!1},id:{type:String,required:!0},modelValue:{required:!0},conditional:{type:Boolean,default:()=>!1}},components:{NhsLabel:at,NhsHintText:xn},setup(e,n){const t=kn(null),s=Y({isChecked:!1}),r=zn(e,n);function a(){return e.conditional&&s.isChecked}const o=z(()=>{const p={};return e.disabled&&(p.disabled=!0),e.hint&&(p["aria-describedby"]=i()),p});function i(){return`${e.id}-hint`}Le(()=>{t.value&&(s.isChecked=t.value.checked)});function l(p){p.target&&(s.isChecked=p.target.checked),n.emit("change",e.id)}return{hintId:i,internalModel:r,attributes:o,showConditional:a,checkbox:t,updateChecked:l}}}),O2={class:"nhsuk-checkboxes__item"},H2=["id","name","value"],P2=["id"];function L2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text");return c(),y(q,null,[_("div",O2,[bn(_("input",G({class:"nhsuk-checkboxes__input",id:e.id,name:e.name,type:"checkbox",value:e.checkboxValue,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l)},e.attributes,{ref:"checkbox",onChange:n[1]||(n[1]=(...l)=>e.updateChecked&&e.updateChecked(...l)),onBlur:n[2]||(n[2]=l=>e.$emit("blur",e.id)),onFocus:n[3]||(n[3]=l=>e.$emit("focus",e.id))}),null,16,H2),[[Lr,e.internalModel]]),u(o,{for:e.id,class:"nhsuk-checkboxes__label"},{default:h(()=>[P(e.$slots,"item-label",{},()=>[k(N(e.label),1)])]),_:3},8,["for"]),e.hint?(c(),w(i,{key:0,element:"div",id:e.hintId(),class:"nhsuk-checkboxes__hint"},{default:h(()=>[P(e.$slots,"item-hint",{},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0)]),e.showConditional()?(c(),y("div",{key:0,class:"nhsuk-checkboxes__conditional",id:`conditional-${e.id}`},[P(e.$slots,"item-conditional")],8,P2)):K("",!0)],64)}var B2=B(M2,[["render",L2]]);const D2=v({inheritAttrs:!1,emits:[],props:{divider:{type:String,required:!0}}}),q2={class:"nhsuk-checkboxes__divider"};function V2(e,n,t,s,r,a){return c(),y("div",q2,N(e.divider),1)}var U2=B(D2,[["render",V2]]);const F2=v({name:"nhs-checkboxes",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],components:{NhsFormItem:it,NhsFieldset:Fs,NhsErrorText:ot,NhsHintText:xn},props:{id:{type:String,default:()=>`nhs-checkbox-${Ct()}`},hint:{type:String},label:{type:String},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},headingSize:{type:String},modelValue:{type:Object,default:()=>({})},items:{type:Array,default:()=>[]},rules:{type:Array,default:()=>[]},validateOn:{type:String,default:()=>"blur"}},setup(e,n){function t(f){return f.divider?U2:B2}const s=zn(e,n),{error:r,errorMsg:a,validator:o}=es(e,s),i=Jt(e,r),{onBlur:l,onChange:p}=Et(e,o,n);return{internalModel:s,error:r,errorMsg:a,ariaDescribedby:i,errorId:Fn,hintId:Un,onBlur:l,onChange:p,component:t}}}),z2={class:"nhsuk-checkboxes"};function j2(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-fieldset"),p=d("nhs-form-item");return c(),w(p,{error:e.error},{default:h(()=>[u(l,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),w(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.error?(c(),w(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[k(N(e.errorMsg),1)])]),_:3},8,["id"])):K("",!0),_("div",z2,[(c(!0),y(q,null,He(e.items,(f,m)=>(c(),w(on(e.component(f)),{label:f.label,hint:f.hint,disabled:f.disabled||e.disabled,conditional:f.conditional,id:`${e.id}-${m+1}`,name:f.name,"checkbox-value":f.value,modelValue:e.internalModel,"onUpdate:modelValue":n[0]||(n[0]=b=>e.internalModel=b),key:`${e.id}-${m}`,onBlur:e.onBlur,onChange:e.onChange,onFocus:n[1]||(n[1]=b=>e.$emit("focus",b)),divider:f.divider},{"item-label":h(()=>[P(e.$slots,"item-label",{item:f})]),"item-hint":h(()=>[P(e.$slots,"item-hint",{item:f})]),"item-conditional":h(()=>[P(e.$slots,"item-conditional",{item:f})]),_:2},1032,["label","hint","disabled","conditional","id","name","checkbox-value","modelValue","onBlur","onChange","divider"]))),128))])]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var W2=B(F2,[["render",j2]]);const K2=v({inheritAttrs:!1,props:{name:{type:String},disabled:{type:Boolean,default:!1},id:{type:String,required:!0},label:{type:String},hint:{type:String},radioValue:{type:String,required:!0},divider:{type:String},modelValue:{required:!0}},components:{NhsHintText:xn,NhsLabel:at},setup(e,n){const t=zn(e,n),s=z(()=>{let a={};return e.disabled&&(a.disabled=!0),e.hint&&(a["aria-describedby"]=r()),a});function r(){return`${e.id}-hint`}return{internalModel:t,attributes:s,hintId:r}}}),G2={class:"nhsuk-radios__item"},Y2=["id","name","value","disabled"];function Z2(e,n,t,s,r,a){const o=d("nhs-label"),i=d("nhs-hint-text");return c(),y("div",G2,[bn(_("input",G({class:"nhsuk-radios__input",id:e.id,name:e.name,type:"radio",value:e.radioValue},e.attributes,{disabled:e.disabled,"onUpdate:modelValue":n[0]||(n[0]=l=>e.internalModel=l),onChange:n[1]||(n[1]=l=>e.$emit("change",e.id)),onBlur:n[2]||(n[2]=l=>e.$emit("blur",e.id)),onFocus:n[3]||(n[3]=l=>e.$emit("focus",e.id))}),null,16,Y2),[[Br,e.internalModel]]),e.label?(c(),w(o,{key:0,for:e.id,class:"nhsuk-radios__label"},{default:h(()=>[P(e.$slots,"item-label",{},()=>[k(N(e.label),1)])]),_:3},8,["for"])):K("",!0),e.hint?(c(),w(i,{key:1,element:"div",id:e.hintId(),class:"nhsuk-radios__hint"},{default:h(()=>[P(e.$slots,"item-hint",{},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0)])}var Q2=B(K2,[["render",Z2]]);const X2=v({inheritAttrs:!1,emits:[],props:{divider:{type:String,required:!0}}}),J2={class:"nhsuk-radios__divider"};function eR(e,n,t,s,r,a){return c(),y("div",J2,N(e.divider),1)}var nR=B(X2,[["render",eR]]);const tR=v({name:"nhs-radios",inheritAttrs:!1,emits:["update:model-value","blur","change","focus"],props:{id:{type:String,default:()=>`nhs-radios-${Ct()}`},hint:{type:String},label:{type:String},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:()=>!1},pageHeading:{type:Boolean,default:()=>!1},headingSize:{type:String},items:{type:Array,required:!0},rules:{type:Array,default:()=>[]},modelValue:{required:!0},validateOn:{type:String,default:()=>"blur"}},components:{NhsHintText:xn,NhsFormItem:it,NhsFieldset:Fs,NhsErrorText:ot},setup(e,n){const t=zn(e,n),{error:s,errorMsg:r,validator:a}=es(e,t),o=Jt(e,s),{onBlur:i,onChange:l}=Et(e,a,n),p=z(()=>{const b=["nhsuk-radios"];return e.inline&&b.push("nhsuk-radios--inline"),b.join(" ")});function f(b){return b.divider?nR:Q2}function m(b,R){return t.value===b&&Boolean(R)}return{classes:p,internalModel:t,error:s,errorMsg:r,ariaDescribedby:o,onBlur:i,onChange:l,errorId:Fn,hintId:Un,component:f,showConditional:m}}}),sR={class:"nhsuk-radios__conditional"};function rR(e,n,t,s,r,a){const o=d("nhs-hint-text"),i=d("nhs-error-text"),l=d("nhs-fieldset"),p=d("nhs-form-item");return c(),w(p,{error:e.error},{default:h(()=>[u(l,{legend:e.label,"page-heading":e.pageHeading,"aria-describedby":e.ariaDescribedby,size:e.headingSize},{default:h(()=>[e.hint?(c(),w(o,{key:0,element:"div",id:e.hintId(e.id)},{default:h(()=>[P(e.$slots,"hint",{hint:e.hint},()=>[k(N(e.hint),1)])]),_:3},8,["id"])):K("",!0),e.error?(c(),w(i,{key:1,id:e.errorId(e.id)},{default:h(()=>[P(e.$slots,"error",{error:e.errorMsg},()=>[k(N(e.errorMsg),1)])]),_:3},8,["id"])):K("",!0),_("div",{class:Se(e.classes)},[(c(!0),y(q,null,He(e.items,(f,m)=>(c(),y("div",{key:`${e.id}-${m}`},[(c(),w(on(e.component(f)),{label:f.label,hint:f.hint,disabled:f.disabled||e.disabled,id:`${e.id}-${m+1}`,name:f.name,"radio-value":f.value,modelValue:e.internalModel,"onUpdate:modelValue":n[0]||(n[0]=b=>e.internalModel=b),divider:f.divider,onBlur:e.onBlur,onChange:e.onChange,onFocus:n[1]||(n[1]=b=>e.$emit("focus",b))},{"item-label":h(()=>[P(e.$slots,"item-label",{item:f})]),"item-hint":h(()=>[P(e.$slots,"item-hint",{item:f})]),_:2},1032,["label","hint","disabled","id","name","radio-value","modelValue","divider","onBlur","onChange"])),bn(_("div",sR,[P(e.$slots,"item-conditional",{item:f},()=>[k(N(f),1)])],512),[[Fd,e.showConditional(f.value,f.conditional)]])]))),128))],2)]),_:3},8,["legend","page-heading","aria-describedby","size"])]),_:3},8,["error"])}var oR=B(tR,[["render",rR]]);const aR=[Hw,Bw,zw,Gw,Xw,i0,m0,v0,E0,M0,P0,U0,W0,Q0,sS,aS,Fs,bS,kS,AS,TS,CS,Tx,Mx,jx,Sn,Zx,Jx,sC,lC,hC,xC,NC,MC,PC,YC,cE,mE,vE,wE,AE,ot,xn,UE,jE,at,s2,m2,b2,k2,A2,W2,oR],iR={install:(e,n={})=>{for(const t of aR)e.component(t.name,t);e.provide("router",n.router)}};const lR=v({props:{id:{type:String,required:!0},tabValue:{required:!0},modelValue:{required:!0}},setup(e,n){const t=Y({checked:e.modelValue});return Ue(()=>e.modelValue,s=>{t.checked=s}),Ue(()=>t.checked,s=>{n.emit("update:model-value",s)}),Q({},ee(t))}}),uR=["value","id"],cR=["for"];function dR(e,n,t,s,r,a){return c(),y("div",null,[bn(_("input",{type:"radio",value:e.tabValue,"onUpdate:modelValue":n[0]||(n[0]=o=>e.checked=o),id:e.id},null,8,uR),[[Br,e.checked]]),_("label",{class:"tab",for:e.id},[P(e.$slots,"default",{},void 0,!0)],8,cR)])}var hR=S(lR,[["render",dR],["__scopeId","data-v-db40c284"]]);const pR="http://json.schemastore.org/web-types",mR="nhsuk-frontend-vue",fR="vue",_R="5.1.1",gR={html:{"types-syntax":"typescript",tags:[{name:"nhs-action-link",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-back-link",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-body",attributes:[{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"size of the body text. (blank or s)"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-breadcrumb",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Breadcrumb",description:"aria-label attribute for breadcrumb container."}],slots:[{name:"default",description:"default vue slots (used for breadcrumb item)"},{name:"backlink",description:"slots for breadcrumb back link"}]},{name:"nhs-breadcrumb-backlink",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"Link for the breadcrumb backlink"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-breadcrumb-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"Link for the breadcrumb item. If not provided, breadcrumb item will show as normal text"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-button",attributes:[{name:"element",value:{kind:"expression",type:"string"},required:!1,description:"Whether to use an <button> or <a> element to create the button. In most cases you will not need to set this as it will be configured automatically if you use href"},{name:"color",value:{kind:"expression",type:"string"},required:!1,default:"primary",description:"Alternative colours of the button. secondary or reverse"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the button should be disabled. For button and input elements, disabled and aria-disabled attributes will be set automatically."},{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"The URL that the button should link to. If this is set, element will be automatically set to <a> if it has not already been defined."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-card",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Text heading of the card."},{name:"heading-classes",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Optional additional classes to add to heading. Separate each class with a space."},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"2",description:"Optional heading level for the card heading."},{name:"href",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The value of the card href attribute"},{name:"clickable",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the class nhsuk-card--clickable will be applied."},{name:"feature",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the class nhsuk-card__heading--feature and nhsuk-card__content--feature will be applied."},{name:"img-url",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The URL of the image in the card"},{name:"img-alt",value:{kind:"expression",type:"string"},required:!1,default:"",description:"The alternative text of the image in the card"},{name:"description",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Text description within the card content."}],slots:[{name:"heading",description:"slot to replace heading with another component"},{name:"description",description:"slot to replace description with another component"}]},{name:"nhs-card-group",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"half",description:"Card group type (half, third, quarter)."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-care-card",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"non-urgent",description:"Care card component variant type - non-urgent, urgent or emergency."},{name:"heading",value:{kind:"expression",type:"string"},required:!0,description:"Heading to be used within the care card component"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the card heading."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Non-Urgent Advice:",description:"Hidden text used for speech playback."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-checkboxes",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-checkbox-<random string>",description:"The id of the checkbox group"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all checkboxes"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of checkbox group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of checkbox group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of checkbox group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of checkbox group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"label":"string","value":"string","disabled":"boolean","name":"string","hint":"string","conditional":"boolean","divider":"string"}'},required:!0,description:"Array of checkbox data objects"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each individual checkbox"},{name:"item-hint","vue-properties":[{name:"item",type:"object"}],description:"slot for hint of each individual checkbox"},{name:"item-conditional","vue-properties":[{name:"item",type:"object"}],description:"slot for conditional component of each individual checkbox"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-contents",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Pages in this guide",description:"Label used for text-to-speech."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Contents",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-contents-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!1,default:"",description:"Href value of an item in the contents list. If not provided, item will show as current page"},{name:"aria-current",value:{kind:"expression",type:"string"},required:!1,default:"page",description:"Hidden label on the active page in the list, used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-details",attributes:[{name:"text",value:{kind:"expression",type:"string"},required:!0,description:"Text to be displayed on the details component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-dodont",attributes:[{name:"title",value:{kind:"expression",type:"string"},required:!0,description:"Title to be displayed on the do and don't list component."},{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"tick",description:"Type of do and don't list component, 'cross', 'tick'."},{name:"items",value:{kind:"expression",type:"array"},required:!0,description:"Items to be displayed within the do and don't list component"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the title heading."}],slots:[{name:"item","vue-properties":[{name:"item"}],description:"slot for each list item"}]},{name:"nhs-error-summary",attributes:[{name:"title",value:{kind:"expression",type:"string"},required:!0,description:"Title to be displayed on the do and don't list component."}],slots:[{name:"default",description:"default vue slots"},{name:"title","vue-properties":[{name:"title",type:"string"}],description:"slots for error summary title"}]},{name:"nhs-error-text",attributes:[{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Error:",description:"Hidden text used to text to speech."},{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"Optional id attribute to add to the error message span tag."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-expander",attributes:[{name:"text",value:{kind:"expression",type:"string"},required:!0,description:"Text to be displayed on the expander component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-expander-group",slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-fieldset",attributes:[{name:"legend",value:{kind:"expression",type:"string"},required:!1,description:"Legend text."},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the legend also acts as the heading for the page"},{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"size of heading. xl, l or m"}],slots:[{name:"default",description:"default vue slots"},{name:"legend","vue-properties":[{name:"legend",type:"string"}],description:"fieldset heading slots"}]},{name:"nhs-footer",attributes:[{name:"copyright",value:{kind:"expression",type:"string"},required:!1,default:"Crown copyright",description:"Name of copyright holder."},{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Support links",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-footer-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The href of a primary navigation item in the footer."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-form",attributes:[{name:"v-model",value:{kind:"expression",type:"boolean"},required:!1,description:"model binding for validity of form"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"submit",description:"on form submit event"},{name:"reset",description:"on form reset event"}]},{name:"nhs-col",attributes:[{name:"span",value:{kind:"expression",type:"number"},required:!1,default:"100",description:"Width of container (100, 75, 66, 33 or 25)."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-main",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"normal",description:"type of main container (normal or fluid). Fluid container fill entire screen width."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-row",slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-header",attributes:[{name:"show-nav",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' to show the navigation links in the header."},{name:"show-search",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' to show the site search input form."},{name:"home-href",value:{kind:"expression",type:"string"},required:!1,default:"/",description:"The href of the link for the logo and mobile home link in the navigation links."},{name:"home-text",value:{kind:"expression",type:"string"},required:!1,default:"Home",description:"Text of home link of navigation in mobile mode."},{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"NHS homepage",description:"Aria label for the logo href."},{name:"transactional",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Set to 'true' if this is a transactional header (with smaller logo)."},{name:"service",value:{kind:"expression",type:'object|{"name":"string","href":"string"}'},required:!1,description:"Object containing the name and href of the service"},{name:"organisation",value:{kind:"expression",type:'object|{"name":"string","descriptor":"string","split":"string","logoURL":"string"}'},required:!1,description:"Settings for header with organisation logo"},{name:"search-action",value:{kind:"expression",type:"string"},required:!1,default:"https://www.nhs.uk/search/",description:"The search action endpoint."},{name:"search-input-name",value:{kind:"expression",type:"string"},required:!1,default:"q",description:"The name for the search field."},{name:"search-results",value:{kind:"expression",type:'array|{"text":"string","value":"any"}'},required:!1,description:"List of search results to display"},{name:"v-model:search-text",value:{kind:"expression",type:"string"},required:!1,description:"Model binding for search input field"},{name:"white-nav",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Toggle white navigation bar."},{name:"white-header",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Toggle white header. "}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"submit-search",arguments:[{name:"text",type:"string"},{name:"value",type:"any"}],description:"submit search event"}]},{name:"nhs-header-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"Link of the header navigation link"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-heading",attributes:[{name:"size",value:{kind:"expression",type:"string"},required:!1,default:"l",description:"Size of heading. xl, l, m, s or xs"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-hero",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!1,description:"Text heading of the hero component."},{name:"text",value:{kind:"expression",type:"string"},required:!1,description:"Text content of the hero component."},{name:"image-url",value:{kind:"expression",type:"string"},required:!1,description:"URL of the image of the hero component."}]},{name:"nhs-hint-text",attributes:[{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"Optional id attribute to add to the hint text tag."},{name:"element",value:{kind:"expression",type:"string"},required:!1,default:"span",description:"Select which element hint text uses - div or span"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-icon",attributes:[{name:"icon",value:{kind:"expression",type:"string"},required:!0,description:"Name of icon."}]},{name:"nhs-image",attributes:[{name:"src",value:{kind:"expression",type:"string"},required:!0,description:"The source location of the image."},{name:"alt",value:{kind:"expression",type:"string"},required:!0,description:"The alt text of the image."},{name:"srcset",value:{kind:"expression",type:"string"},required:!1,description:"A list of image source URLs and their respective sizes. Separate each image with a comma."},{name:"alt",value:{kind:"expression",type:"string"},required:!1,description:"A list of screen sizes for the browser to load the correct image from the srcset images."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-input",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-<random string>",description:"The id of the input."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the input, which is submitted with the form data."},{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"text",description:"Type of input control to render."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, input is disabled"},{name:"width",value:{kind:"expression",type:"string"},required:!1,description:"width of input. (2, 3, 4, 5, 10, 20)"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of input component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of input component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"max-length",value:{kind:"expression",type:"number"},required:!1,description:"maximum number of characters of input field"},{name:"autocomplete",value:{kind:"expression",type:"string"},required:!1,description:'Attribute to identify input purpose, for instance "postal-code" or "username".'},{name:"inputmode",value:{kind:"expression",type:"string"},required:!1,description:"Optional value for inputmode (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)"},{name:"spellcheck",value:{kind:"expression",type:"boolean"},required:!1,description:"Optional field to enable or disable the spellcheck attribute on the input."},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-input-group",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-group-<random string>",description:"The id of the input group."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all inputs"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of input group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of input group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of input group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of input group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"name":"string","type":"string","width":"string","disabled":"boolean","label":"string","autocomplete":"string","rules":"array","inputmode":"string","validate-on":"string"}'},required:!0,description:"Array of input data objects"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each input item"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-inset-text",attributes:[{name:"hidden-text",value:{kind:"expression",type:"string"},required:!1,default:"Information: ",description:"Hidden text used for text-to-speech."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-label",attributes:[{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Whether the label also acts as the heading for the page."},{name:"size",value:{kind:"expression",type:"string"},required:!1,description:"Size of the label font. xl or s"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!1,default:"bullet",description:"Type of list - bullet, number or error"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list-panel",attributes:[{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"The text label of the list panel."},{name:"id",value:{kind:"expression",type:"string"},required:!1,description:"The ID of the label heading."},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"2",description:"Optional heading level for the label heading."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, this indicates there are no items in the list panel."},{name:"message",value:{kind:"expression",type:"string"},required:!1,description:"The text value to display if disabled has been set to true."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-list-panel-item",attributes:[{name:"href",value:{kind:"expression",type:"string"},required:!0,description:"The href value of an item in the list panel."}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-nav-az",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"A to Z Navigation",description:"aria-label for nav-az component."}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-nav-az-item",attributes:[{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If set to true, then the navigation item will not be within an anchor element."},{name:"href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the link href attribute"}],slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-pagination",attributes:[{name:"aria-label",value:{kind:"expression",type:"string"},required:!1,default:"Pagination",description:"The aria-label of the pagination component."},{name:"previous-href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the previous link href attribute."},{name:"previous-page",value:{kind:"expression",type:"string"},required:!1,description:"The text of the previous link."},{name:"next-href",value:{kind:"expression",type:"string"},required:!1,description:"The value of the next link href attribute."},{name:"next-page",value:{kind:"expression",type:"string"},required:!1,description:"The text of the next link."}],events:[{name:"click-previous",description:"on click previous-page link event"},{name:"click-next",description:"on click next-page link event"}]},{name:"nhs-radios",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-radios-<random string>",description:"The id of the radios group"},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Disable all radio items"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of radio group"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of radio group"},{name:"page-heading",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"Wraps label of radio group inside a heading tag"},{name:"heading-size",value:{kind:"expression",type:"string"},required:!1,description:"Changes size of radio group label. (m, l, xl)"},{name:"items",value:{kind:"expression",type:'array|{"label":"string","value":"string","disabled":"boolean","name":"string","hint":"string","conditional":"boolean"}'},required:!0,description:"Array of radio data objects"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"item-label","vue-properties":[{name:"item",type:"object"}],description:"slot for label of each individual radio"},{name:"item-hint","vue-properties":[{name:"item",type:"object"}],description:"slot for hint of each individual radio"},{name:"item-conditional","vue-properties":[{name:"item",type:"object"}],description:"slot for conditional component of each individual radio"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event",arguments:[{name:"id",type:"string"}]},{name:"focus",description:"on focus event",arguments:[{name:"id",type:"string"}]},{name:"change",description:"on change event",arguments:[{name:"id",type:"string"}]}]},{name:"nhs-review-date",attributes:[{name:"last-review",value:{kind:"expression",type:"string"},required:!0,description:"The value of the last review date"},{name:"next-review",value:{kind:"expression",type:"string"},required:!0,description:"The value of the next review date"}]},{name:"nhs-select",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-select-<random string>",description:"The id of the select."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the select, which is submitted with the form data."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, select is disabled"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of select component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of select component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"default",description:"default vue slots. used for adding select options"},{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-skip-link",slots:[{name:"default",description:"default vue slots"}],events:[{name:"click",description:"on click event"}]},{name:"nhs-summary-list",attributes:[{name:"data",value:{kind:"expression",type:"array"},required:!0,description:"Array of row item objects."},{name:"border",value:{kind:"expression",type:"boolean"},required:!1,default:"true",description:"Toggle summary list border."}],slots:[{name:"item","vue-properties":[{name:"item"}],description:"slot for summary-list-items"}]},{name:"nhs-summary-list-item",attributes:[{name:"type",value:{kind:"expression",type:"string"},required:!0,description:"Item type. Valid values: key, value and action"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-table",attributes:[{name:"headers",value:{kind:"expression",type:'array|{"text":"string","value":"string","style":"object"}'},required:!0,description:"Array of table head cells."},{name:"data",value:{kind:"expression",type:"array"},required:!0,description:"Array of table rows"},{name:"heading",value:{kind:"expression",type:"string"},required:!1,description:"Heading/label of the table"},{name:"heading-level",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the heading."},{name:"caption",value:{kind:"expression",type:"string"},required:!1,description:"Optional caption for the table."},{name:"responsive",value:{kind:"expression",type:"boolean"},required:!1,default:"true",description:"Toggle responsive table"}],slots:[{name:"item.<header_value>","vue-properties":[{name:"item"}],description:"slot for table-items"}]},{name:"nhs-tag",attributes:[{name:"color",value:{kind:"expression",type:"string"},required:!1,description:"Colour of the tags"}],slots:[{name:"default",description:"default vue slots"}]},{name:"nhs-textarea",attributes:[{name:"v-model",value:{kind:"expression",type:"any"},required:!0,description:"model binding for value of item"},{name:"id",value:{kind:"expression",type:"string"},required:!1,default:"nhs-input-<random string>",description:"The id of the textarea."},{name:"name",value:{kind:"expression",type:"string"},required:!1,description:"The name of the textarea, which is submitted with the form data."},{name:"disabled",value:{kind:"expression",type:"boolean"},required:!1,default:"false",description:"If true, textarea is disabled"},{name:"label",value:{kind:"expression",type:"string"},required:!1,description:"Label of textarea component"},{name:"hint",value:{kind:"expression",type:"string"},required:!1,description:"Hint of textarea component"},{name:"rules",value:{kind:"expression",type:"array"},required:!1,description:"Accepts an array of functions that return either True or a String with an error message"},{name:"rows",value:{kind:"expression",type:"number"},required:!1,default:"5",description:"Optional number of textarea rows."},{name:"autocomplete",value:{kind:"expression",type:"string"},required:!1,description:'Attribute to identify input purpose, for instance "postal-code" or "username".'},{name:"validate-on",value:{kind:"expression",type:"string"},required:!1,default:"blur",description:"Determines when to auto apply validation. (blur, change or null)"}],slots:[{name:"label","vue-properties":[{name:"label",type:"string"}],description:"slot for label"},{name:"hint","vue-properties":[{name:"hint",type:"string"}],description:"slot for hint"},{name:"error","vue-properties":[{name:"error",type:"string"}],description:"slot for error message"}],events:[{name:"blur",description:"on blur event"},{name:"focus",description:"on focus event"},{name:"change",description:"on change event"}]},{name:"nhs-warning-callout",attributes:[{name:"heading",value:{kind:"expression",type:"string"},required:!0,description:"Heading to be used within the warning callout component."},{name:"color",value:{kind:"expression",type:"number"},required:!1,default:"3",description:"Optional heading level for the heading."}],slots:[{name:"default",description:"default vue slots"}]}]}};var bR={$schema:pR,name:mR,framework:fR,version:_R,contributions:gR};const yu=bR.contributions.html.tags,vR=yu.map(e=>e.name),$R=yu.map(e=>{const n=e.attributes||[],t=e.slots||[],s=e.events||[];return{propsDocs:n,slotsDocs:t,eventsDocs:s}}),yR=e=>{const n=vR.indexOf(e);return $R[n]};const kR=v({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Required",value:"required"},{text:"Default",value:"default"},{text:"Description",value:"description"}]});function n(a){if(s(a)){let o=`{
`;const i=JSON.parse(a.split("|")[1]);for(const l in i)o=o+`  ${l}: ${i[l]}
`;return o=o+"}",o}return a}function t(a){return s(a)?a.split("|")[0]:a}function s(a){return a.startsWith("object|")||a.startsWith("array|")}function r(a){return a?"yes":"no"}return Re(Q({},ee(e)),{isRequired:r,itemTypeObject:n,itemType:t,showCodeBlock:s})}});function wR(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),w(i,{headers:e.headers,data:e.data},{"item.type":h(({item:l})=>[k(N(e.itemType(l.value.type))+" ",1),e.showCodeBlock(l.value.type)?(c(),w(o,{key:0,language:"typescript",code:e.itemTypeObject(l.value.type)},null,8,["code"])):K("",!0)]),"item.required":h(({item:l})=>[k(N(e.isRequired(l.required)),1)]),"item.default":h(({item:l})=>[k(N(l.default||"-"),1)]),_:1},8,["headers","data"])}var SR=S(kR,[["render",wR],["__scopeId","data-v-79be1e8f"]]);const xR=v({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Props",value:"vue-properties"},{text:"Description",value:"description"}]});function n(s){return s["vue-properties"]?"object":"-"}function t(s){let r=`{
`;for(const a of s)r=r+`  ${a.name}: ${a.type||"any"}
`;return r=r+`}
`,r}return Re(Q({},ee(e)),{slotPropsDisplay:t,slotPropsDisplayBlank:n})}});function CR(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),w(i,{headers:e.headers,data:e.data},{"item.vue-properties":h(({item:l})=>[k(N(e.slotPropsDisplayBlank(l))+" ",1),l["vue-properties"]?(c(),w(o,{key:0,language:"typescript",code:e.slotPropsDisplay(l["vue-properties"])},null,8,["code"])):K("",!0)]),_:1},8,["headers","data"])}var ER=S(xR,[["render",CR]]);const RR=v({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Event Value",value:"arguments"},{text:"Description",value:"description"}]});function n(s){return s.arguments?"object":"-"}function t(s){let r=`{
`;for(const a of s)r=r+`  ${a.name}: ${a.type||"any"}
`;return r=r+`}
`,r}return Re(Q({},ee(e)),{eventsPropsDisplay:t,eventsPropsDisplayBlank:n})}});function TR(e,n,t,s,r,a){const o=d("highlightjs"),i=d("nhs-table");return c(),w(i,{headers:e.headers,data:e.data},{"item.value":h(({item:l})=>[k(N(l.value||"-"),1)]),"item.arguments":h(({item:l})=>[k(N(e.eventsPropsDisplayBlank(l))+" ",1),l.arguments?(c(),w(o,{key:0,language:"typescript",code:e.eventsPropsDisplay(l.arguments)},null,8,["code"])):K("",!0)]),_:1},8,["headers","data"])}var NR=S(RR,[["render",TR]]);const IR=v({props:{data:{type:Array,required:!0}},setup(){const e=Y({headers:[{text:"Name",value:"name"},{text:"Input",value:"input"},{text:"Description",value:"description"}]});return Q({},ee(e))}});function AR(e,n,t,s,r,a){const o=d("nhs-table");return c(),w(o,{headers:e.headers,data:e.data},{"item.input":h(i=>[k(N(i.props.input||"-"),1)]),_:1},8,["headers","data"])}var MR=S(IR,[["render",AR]]);const OR=v({components:{MethodsTable:MR,EventsTable:NR,SlotsTable:ER,PropsTable:SR,DocTab:hR},props:{heading:{type:String,required:!0}},setup(e){const{propsDocs:n,slotsDocs:t,eventsDocs:s}=yR(e.heading),a=Y({dataProps:n,dataSlots:t,dataEvents:s,dataMethods:[],tab:(()=>n.length>0?"props":t.length>0?"slots":s.length>0?"events":"methods")()});return Q({},ee(a))}}),HR={class:"heading-container"},PR={class:"tab-container"},LR=k(" Props "),BR=k(" Slots "),DR=k(" Events "),qR=k(" Methods "),VR={class:"table-container"};function UR(e,n,t,s,r,a){const o=d("doc-tab"),i=d("props-table"),l=d("slots-table"),p=d("events-table"),f=d("methods-table"),m=d("nhs-col"),b=d("nhs-row");return c(),w(b,null,{default:h(()=>[u(m,null,{default:h(()=>[_("div",HR,[_("span",null,N(e.heading),1)]),_("div",PR,[e.dataProps.length>0?(c(),w(o,{key:0,id:`${e.heading}-props`,"tab-value":"props",modelValue:e.tab,"onUpdate:modelValue":n[0]||(n[0]=R=>e.tab=R)},{default:h(()=>[LR]),_:1},8,["id","modelValue"])):K("",!0),e.dataSlots.length>0?(c(),w(o,{key:1,id:`${e.heading}-slots`,"tab-value":"slots",modelValue:e.tab,"onUpdate:modelValue":n[1]||(n[1]=R=>e.tab=R)},{default:h(()=>[BR]),_:1},8,["id","modelValue"])):K("",!0),e.dataEvents.length>0?(c(),w(o,{key:2,id:`${e.heading}-events`,"tab-value":"events",modelValue:e.tab,"onUpdate:modelValue":n[2]||(n[2]=R=>e.tab=R)},{default:h(()=>[DR]),_:1},8,["id","modelValue"])):K("",!0),e.dataMethods.length>0?(c(),w(o,{key:3,id:`${e.heading}-methods`,"tab-value":"methods",modelValue:e.tab,"onUpdate:modelValue":n[3]||(n[3]=R=>e.tab=R)},{default:h(()=>[qR]),_:1},8,["id","modelValue"])):K("",!0)]),_("div",VR,[e.tab==="props"?(c(),w(i,{key:0,data:e.dataProps},null,8,["data"])):K("",!0),e.tab==="slots"?(c(),w(l,{key:1,data:e.dataSlots},null,8,["data"])):K("",!0),e.tab==="events"?(c(),w(p,{key:2,data:e.dataEvents},null,8,["data"])):K("",!0),e.tab==="methods"?(c(),w(f,{key:3,data:e.dataMethods},null,8,["data"])):K("",!0)])]),_:1})]),_:1})}var FR=S(OR,[["render",UR],["__scopeId","data-v-72edb082"]]);const zR=v({props:{id:{type:String,required:!0},modelValue:{required:!0,type:Boolean}},setup(e,n){const t=Y({checked:e.modelValue});return Ue(()=>e.modelValue,s=>{t.checked=s}),Ue(()=>t.checked,s=>{n.emit("update:model-value",s)}),Q({},ee(t))}}),jR=["id"],WR=["for"];function KR(e,n,t,s,r,a){return c(),y("div",null,[bn(_("input",{type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=o=>e.checked=o),id:e.id},null,8,jR),[[Lr,e.checked]]),_("label",{class:"tab",for:e.id},[P(e.$slots,"default",{},void 0,!0)],8,WR)])}var GR=S(zR,[["render",KR],["__scopeId","data-v-fa2d7f80"]]),YR=`<template>
  <nhs-button @click="clickHandler('primary')"> Primary Button </nhs-button>

  <nhs-button color="secondary" @click="clickHandler('secondary')"> Secondary Button </nhs-button>

  <nhs-button color="reverse" @click="clickHandler('reverse')"> Reverse Button </nhs-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function clickHandler(msg: string): void {
      alert(msg);
    }

    return { clickHandler };
  }
});
<\/script>
`,ZR=`<template>
  <nhs-button disabled> Primary Button Disabled </nhs-button>

  <nhs-button color="secondary" disabled> Secondary Button Disabled </nhs-button>

  <nhs-button color="reverse" disabled> Reverse Button Disabled </nhs-button>
</template>
`,QR=`<template>
  <nhs-action-link href="https://www.nhs.uk/service-search/minor-injuries-unit/locationsearch/551">
    Find a minor injuries unit
  </nhs-action-link>
</template>
`,XR=`<template>
  <nhs-back-link href="#"> Go Back </nhs-back-link>
</template>
`,JR=`<template>
  <nhs-breadcrumb>
    <nhs-breadcrumb-item href="/level-one">Level one</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two">Level two</nhs-breadcrumb-item>
    <nhs-breadcrumb-item href="/level-one/level-two/level-three">Level three</nhs-breadcrumb-item>
    <template #backlink>
      <nhs-breadcrumb-backlink href="/level-one/level-two/level-three">
        Back to Level three
      </nhs-breadcrumb-backlink>
    </template>
  </nhs-breadcrumb>
</template>
`,eT=`<template>
  <nhs-card heading="If you need help now, but it\u2019s not an emergency" :heading-level="3">
    <template #description>
      <p class="nhsuk-card__description">
        Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>
      </p>
    </template>
  </nhs-card>
</template>
`,nT=`<template>
  <nhs-card
    href="#"
    clickable
    heading-classes="nhsuk-heading-m"
    heading="Introduction to care and support"
    description="A quick guide for people who have care and support needs and their carers"
  ></nhs-card>
</template>
`,tT=`<template>
  <nhs-card
    img-url="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
    href="#"
    clickable
    heading="Exercise"
    heading-classes="nhsuk-heading-m"
    description="Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"
  ></nhs-card>
</template>
`,sT=`<template>
  <nhs-card
    feature
    heading="Feature card heading"
    heading-classes="nhsuk-heading-m"
    description="Feature card description"
  ></nhs-card>
</template>
`,rT=`<template>
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
        <a
          href="#"
          class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"
        >
          Applicants
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          23 <span class="nhsuk-u-visually-hidden">Jobs</span>
        </p>
        <a
          href="#"
          class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"
        >
          Jobs
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          8 <span class="nhsuk-u-visually-hidden">Services</span>
        </p>
        <a
          href="#"
          class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"
        >
          Services
        </a>
      </template>
    </nhs-card>
    <nhs-card clickable>
      <template #heading>
        <p class="nhsuk-heading-xl nhsuk-u-font-size-64 nhsuk-u-margin-bottom-1">
          33 <span class="nhsuk-u-visually-hidden">Messages</span>
        </p>
        <a
          href="#"
          class="nhsuk-card__link nhsuk-u-font-weight-normal nhsuk-u-font-size-19 nhsuk-link--no-visited-state"
        >
          Messages
        </a>
      </template>
    </nhs-card>
  </nhs-card-group>
</template>
`,oT=`<template>
  <nhs-contents>
    <nhs-contents-item>What is AMD?</nhs-contents-item>
    <nhs-contents-item
      href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/"
    >
      Symptoms
    </nhs-contents-item>
    <nhs-contents-item
      href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/"
    >
      Getting diagnosed
    </nhs-contents-item>
    <nhs-contents-item
      href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/"
    >
      Treatments
    </nhs-contents-item>
    <nhs-contents-item
      href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/"
    >
      Living with AMD
    </nhs-contents-item>
  </nhs-contents>
</template>
`,aT=`<template>
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
</template>
`,iT=`<template>
  <nhs-dodont title="Do" type="tick" :items="doItems"> </nhs-dodont>

  <nhs-dodont title="Don't" type="cross" :items="dontItems"> </nhs-dodont>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,lT=`<template>
  <nhs-dodont title="Do" type="tick" :items="doItems">
    <template #item="{ item }">
      <a>{{ item }}</a>
    </template>
  </nhs-dodont>

  <nhs-dodont title="Don't" type="cross" :items="dontItems">
    <template #item="{ item }">
      <a>{{ item }}</a>
    </template>
  </nhs-dodont>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,uT=`<template>
  <nhs-error-summary title="There is a problem">
    <p>Describe the errors and how to correct them</p>
    <nhs-list type="error">
      <li><a href="#example-error-1">Date of birth must be in the past</a></li>
    </nhs-list>
  </nhs-error-summary>
</template>
`,cT=`<template>
  <nhs-body> body normal </nhs-body>

  <nhs-body size="s"> body s </nhs-body>
</template>
`,dT=`<template>
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
`,hT=`<template>
  <nhs-error-text> Error message about full name goes here </nhs-error-text>
</template>
`,pT=`<template>
  <nhs-hint-text>
    It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56
    C\u2019.
  </nhs-hint-text>
</template>
`,mT=`<template>
  <nhs-inset-text>
    <p>
      You can report any suspected side effect to the
      <a href="https://yellowcard.mhra.gov.uk/" title="External website"> UK safety scheme </a>.
    </p>
  </nhs-inset-text>
</template>
`,fT=`<template>
  <nhs-heading size="xl"> Heading XL </nhs-heading>

  <nhs-heading size="l"> Heading L </nhs-heading>

  <nhs-heading size="m"> Heading M </nhs-heading>

  <nhs-heading size="s"> Heading S </nhs-heading>

  <nhs-heading size="xs"> Heading XS </nhs-heading>
</template>
`,_T=`<template>
  <nhs-label> National Insurance number </nhs-label>
</template>
`,gT=`<template>
  <nhs-label size="s"> National Insurance number </nhs-label>
</template>
`,bT=`<template>
  <nhs-label page-heading size="xl"> National Insurance number </nhs-label>
</template>
`,vT=`<template>
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
</template>
`,$T=`<template>
  <nhs-expander-group>
    <nhs-expander text="How to measure your blood glucose levels">
      <p>
        Testing your blood at home is quick and easy, although it can be uncomfortable. It does get
        better.
      </p>
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
      <p>
        This helps you understand your blood glucose levels and how they\u2019re affected by meals and
        exercise. It should help you have more stable blood glucose levels.
      </p>
    </nhs-expander>
  </nhs-expander-group>
</template>
`,yT=`<template>
  <nhs-fieldset legend="What is your address?"> </nhs-fieldset>
</template>
`,kT=`<template>
  <nhs-fieldset legend="What is your address?" page-heading size="xl"> </nhs-fieldset>
</template>
`,wT=`<template>
  <nhs-fieldset legend="What is your address?" page-heading size="xl">
    <nhs-input label="Address line 1" v-model="addressOne"></nhs-input>
    <nhs-input label="Address line 2" v-model="addressTwo"></nhs-input>
    <nhs-input label="Town or city" v-model="city"></nhs-input>
    <nhs-input label="County" v-model="country"></nhs-input>
  </nhs-fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      addressOne: '',
      addressTwo: '',
      city: '',
      country: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,ST=`<template>
  <nhs-fieldset legend="What is your address?">
    <template #legend="{ legend }">
      <a>{{ legend }}</a>
    </template>
    <p>body text</p>
  </nhs-fieldset>
</template>
`,xT=`<template>
  <nhs-footer>
    <nhs-footer-item href="https://www.nhs.uk/Pages/nhs-sites.aspx">
      Accessibility statement
    </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/about-us"> Contact us </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/contact-us/"> Cookies </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/about-us/sitemap/"> Privacy policy </nhs-footer-item>
    <nhs-footer-item href="https://www.nhs.uk/our-policies/">
      Terms and conditions
    </nhs-footer-item>
  </nhs-footer>
</template>
`,CT=`<template>
  <h4 class="nhsuk-u-margin-bottom-0">Full width (100%)</h4>
  <nhs-row>
    <nhs-col>
      <p>:span="100"</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4">Halves (50%)</h4>
  <nhs-row>
    <nhs-col :span="50">
      <p>:span="50"</p>
    </nhs-col>
    <nhs-col :span="50">
      <p>:span="50"</p>
    </nhs-col>
  </nhs-row>
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4">Thirds (33%)</h4>
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
  <h4 class="nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4">Quarters (25%)</h4>
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
`,ET=`<template>
  <nhs-hero
    heading="We\u2019re here for you"
    text="Helping you take control of your health and wellbeing."
  >
  </nhs-hero>
</template>
`,RT=`<template>
  <nhs-hero
    image-url="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  >
  </nhs-hero>
</template>
`,TT=`<template>
  <nhs-hero
    heading="We\u2019re here for you"
    text="Helping you take control of your health and wellbeing."
    image-url="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"
  >
  </nhs-hero>
</template>
`,NT=`<template>
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
`,IT=`<template>
  <ol class="nhsuk-list">
    <li v-for="(panel, index) in listPanels" :key="\`panel-\${index}\`">
      <nhs-list-panel
        :label="panel.label"
        :message="panel.message"
        back-to-top
        :disabled="panel.disabled"
      >
        <nhs-list-panel-item
          v-for="(item, index) in panel.items"
          :key="\`panel-\${panel.label}-\${index}\`"
          :href="item.href"
        >
          {{ item.text }}
        </nhs-list-panel-item>
      </nhs-list-panel>
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,AT=`<template>
  <nhs-nav-az>
    <nhs-nav-az-item v-for="item in items" :key="\`nav-\${item.label}\`" :disabled="item.disabled">
      {{ item.label }}
    </nhs-nav-az-item>
  </nhs-nav-az>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,MT=`<template>
  <nhs-pagination
    previous-href="http://localhost:3000/section/treatments"
    previous-page="Treatments"
    next-href="http://localhost:3000/section/symptoms"
    next-page="Symptoms"
  ></nhs-pagination>
</template>
`,OT=`<template>
  <nhs-review-date last-review="12 February 2016" next-review="1 February 2019"></nhs-review-date>
</template>
`,HT=`<template>
  <nhs-main>
    <nhs-row>
      <nhs-col :span="66">
        <p>To view the skip link component, press tab or navigate to the next element.</p>
        <nhs-skip-link>Skip to main content</nhs-skip-link>
      </nhs-col>
    </nhs-row>
  </nhs-main>
</template>
`,PT=`<template>
  <nhs-summary-list :data="data">
    <template #item="{ item }">
      <nhs-summary-list-item type="key">{{ item.key }}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
      <nhs-summary-list-item type="actions">
        <router-link :to="item.action">Change</router-link>
      </nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,LT=`<template>
  <nhs-summary-list :data="data">
    <template #item="{ item }">
      <nhs-summary-list-item type="key">{{ item.key }}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,BT=`<template>
  <nhs-summary-list :data="data" :border="false">
    <template #item="{ item }">
      <nhs-summary-list-item type="key">{{ item.key }}</nhs-summary-list-item>
      <nhs-summary-list-item type="value" v-html="item.value"></nhs-summary-list-item>
    </template>
  </nhs-summary-list>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,DT=`<template>
  <nhs-table :headers="headers" :data="items" :responsive="false">
    <template #item.classname="{ item }">
      <code>{{ item.classname }}</code>
    </template>

    <template #item.tag="{ item }">
      <nhs-tag :color="item.tag">{{ item.tagText }}</nhs-tag>
    </template>
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,qT=`<template>
  <nhs-warning-callout heading="Important">
    <p>
      If you develop symptoms of anaphylaxis, such as difficulty breathing, you should inject
      yourself in the outer thigh before seeking emergency medical help.
    </p>
  </nhs-warning-callout>
</template>
`,VT=`<template>
  <nhs-warning-callout heading="School, nursery or work">
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is usually
      5 days after the spots first appeared.
    </p>
  </nhs-warning-callout>
</template>
`,UT=`<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Skin symptoms and possible causes"
    :responsive="false"
  >
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,FT=`<template>
  <nhs-table
    :headers="headers"
    :data="data"
    heading="Conditions similar to impetigo"
    :responsive="false"
  >
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,zT=`<template>
  <nhs-table :headers="headers" :data="data" caption="Ibuprofen syrup dosages for children">
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,jT=`<template>
  <nhs-input label="National Insurance number" v-model="model"></nhs-input>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,WT=`<template>
  <nhs-input label="Postcode" autocomplete="postal-code" v-model="model"></nhs-input>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,KT=`<template>
  <nhs-input
    label="National insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,GT=`<template>
  <nhs-input
    label="National Insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    :rules="rules"
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: ''
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,YT=`<template>
  <nhs-input
    label="National insurance number"
    hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
    width="10"
    v-model="model"
  >
  </nhs-input>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,ZT=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-input
      label="National Insurance number"
      hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
      :rules="rules"
      v-model="model"
    >
      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-input>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: '',
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,QT=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-input
      label="National Insurance number"
      hint="It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."
      :rules="rules"
      v-model="model"
    >
    </nhs-input>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      rules: [(v: string) => !!v || 'Error message goes here'],
      model: '',
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,XT=`<template>
  <nhs-select label="Label text goes here" v-model="model">
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option disabled>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 2'
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,JT=`<template>
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
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [(v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here']
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function): void {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,eN=`<template>
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

      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-select>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Submit</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 1',
      rules: [(v: string) => v !== 'NHS.UK frontend option 1' || 'Error message goes here'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('success submission');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,nN=`<template>
  <nhs-textarea
    label="Can you provide more detail?"
    hint="Don't include personal or financial information, eg your National Insurance number or credit card details."
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,tN=`<template>
  <nhs-textarea label="Full address" autocomplete="street-address" v-model="model"></nhs-textarea>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,sN=`<template>
  <nhs-textarea
    label="Why can't you provide a National Insurance number?"
    :rules="rules"
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [(v: string) => !!v || 'You must provide an explanation']
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(itemId: string, validator: Function): void {
      _itemId = itemId;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,rN=`<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-textarea
      label="Why can't you provide a National Insurance number?"
      hint="Hint text"
      :rules="rules"
      v-model="model"
    >
      <template #label="{ label }">
        <h1>{{ label }}</h1>
      </template>

      <template #hint="{ hint }">
        <h2>{{ hint }}</h2>
      </template>

      <template #error="{ error }">
        <h3>{{ error }}</h3>
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
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [(v: string) => !!v || 'You must provide an explanation'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('success submission');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,oN=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items"
    v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,aN=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items"
    v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,iN=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items"
    v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
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
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,lN=`<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items"
    v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        },
        {
          label: 'Month',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        },
        {
          label: 'Year',
          width: '4',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        }
      ],
      model: {}
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,uN=`<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-input-group
      label="What is your date of birth?"
      hint="For example, 31 3 1980"
      :items="items"
      v-model="model"
    >
      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        {{ error }}
      </template>

      <template #item-label="{ item }">
        {{ item }}
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
        <p>form valid: {{ valid }}</p>
        <p>model value: {{ model }}</p>
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
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
    });

    function onSubmit() {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset() {
      state.model = {};
    }

    return { ...toRefs(state), onReset, onSubmit };
  }
});
<\/script>
`,cN=`<template>
  <nhs-radios
    :items="items"
    v-model="model"
    label="Have you changed your name?"
    heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,dN=`<template>
  <nhs-radios
    :items="items"
    v-model="model"
    inline
    label="Have you changed your name?"
    heading-size="m"
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
    };
  }
};
<\/script>
`,hN=`<template>
  <nhs-radios
    :items="items"
    v-model="model"
    disabled
    label="Have you changed your name?"
    heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });
    return { ...toRefs(state) };
  }
});
<\/script>
`,pN=`<template>
  <nhs-radios
    label="How do you want to sign in?"
    heading-size="l"
    :items="items"
    v-model="model"
  ></nhs-radios>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,mN=`<template>
  <nhs-radios
    label="How do you want to sign in?"
    page-heading
    :items="items"
    v-model="model"
    heading-size="l"
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
          hint: "You'll have a user ID if you've registered for self assessment or filed a tax return online before."
        },
        {
          label: 'Sign in with NHS.UK login',
          value: 'login',
          hint: 'You\u2019ll have an account if you\u2019ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.'
        }
      ]
    };
  }
};
<\/script>
`,fN=`<template>
  <nhs-radios :items="items" v-model="model"></nhs-radios>
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
    };
  }
};
<\/script>
`,_N=`<template>
  <nhs-radios
    :items="items"
    v-model="model"
    label="Have you changed your name?"
    heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
    :rules="rules"
    ref="radios"
  ></nhs-radios>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

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
      rules: [(v: string) => v != 'no' || 'Please select an option']
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,gN=`<template>
  <nhs-radios
    :items="items"
    v-model="model"
    label="How would you prefer to be contacted?"
    heading-size="l"
    hint="Select one option."
    id="contact"
    page-heading
  >
    <template #item-conditional="{ item }">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModels[item.value]"
      ></nhs-input>
    </template>
  </nhs-radios>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    };
  }
});
<\/script>
`,bN=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-radios
      :items="items"
      v-model="model"
      label="Have you changed your name?"
      hint="This includes changing your last name or spelling your name differently."
      :rules="rules"
      ref="radios"
    >
      <template #item-label="{ item }">
        <h3>{{ item }}</h3>
      </template>

      <template #item-hint="{ item }">
        <a>{{ item }}</a>
      </template>

      <template #hint="{ hint }">
        <h2>{{ hint }}</h2>
      </template>

      <template #error="{ error }">
        <h2>{{ error }}</h2>
      </template>
    </nhs-radios>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
      rules: [(v: string) => !!v || 'Please select an option'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = '';
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,vN=`<template>
  <nhs-care-card heading="Speak to a GP if:">
    <ul>
      <li>you're not sure it's chickenpox</li>
      <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
      <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
      <li>you're concerned about your child or they get worse</li>
    </ul>
    <p>
      Tell the receptionist you think it's chickenpox before going in. They may recommend a special
      appointment time if other patients are at risk.
    </p>
  </nhs-care-card>
</template>
`,$N=`<template>
  <nhs-care-card heading="Ask for an urgent GP appointment if:" type="urgent">
    <ul>
      <li>you're an adult and have chickenpox</li>
      <li>
        you're pregnant and haven't had chickenpox before and you've been near someone with it
      </li>
      <li>you have a weakened immune system and you've been near someone with chickenpox</li>
      <li>you think your newborn baby has chickenpox</li>
    </ul>
    <p>
      In these situations, your GP can prescribe medicine to prevent complications. You need to take
      it within 24 hours of the spots coming out.
    </p>
  </nhs-care-card>
</template>
`,yN=`<template>
  <nhs-care-card heading="Call 999 if you have sudden chest pain that:" type="emergency">
    <ul>
      <li>spreads to your arms, back, neck or jaw</li>
      <li>makes your chest feel tight or heavy</li>
      <li>also started with shortness of breath, sweating and feeling or being sick</li>
    </ul>
    <p>
      You could be having a heart attack. Call 999 immediately as you need immediate treatment in
      hospital.
    </p>
  </nhs-care-card>
</template>
`;const kN={CareCardNonUrgent:vN,CareCardUrgent:$N,CareCardEmergency:yN};var wN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    heading-size="m"
    label="What is your nationality?"
    hint="If you have more than 1 nationality, select all options that are relevant to you."
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,SN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    page-heading
    label="How do you want to sign in?"
    heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,xN=`<template>
  <nhs-checkboxes :items="items" v-model="model"></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,CN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    page-heading
    label="Which types of waste do you transport regularly?"
    hint="Select all that apply."
    heading-size="m"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,EN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    :rules="rules"
    heading-size="m"
    label="Which types of waste do you transport regularly?"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue';

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
      rules: [(v: Array<string>) => v.length > 0 || 'Please select an option']
    });

    let _itemId: string;
    let _validator: Function;

    function registerValidator(id: string, validator: Function) {
      _itemId = id;
      _validator = validator;
    }

    provide('register-validator', registerValidator);

    onMounted(() => {
      _validator();
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,RN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
    id="contact"
    page-heading
  >
    <template #item-conditional="{ item }">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModel[item.conditional.value]"
      ></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,TN=`<template>
  <nhs-form v-model="valid" @submit="onSubmit()" @reset="onReset()">
    <nhs-checkboxes
      :items="items"
      v-model="model"
      label="What is your nationality?"
      hint="If you have more than 1 nationality, select all options that are relevant to you."
      ref="checkbox"
      :rules="rules"
    >
      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #item-label="{ item }">
        <h3>{{ item }}</h3>
      </template>
    </nhs-checkboxes>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33"> Form valid: {{ valid }} </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
      rules: [(v: Array<string>) => v.length > 0 || 'Please select an option'],
      valid: false
    });

    function onSubmit(): void {
      if (state.valid) {
        alert('submit form');
      }
    }

    function onReset(): void {
      state.model = [];
    }

    return { ...toRefs(state), onSubmit, onReset };
  }
});
<\/script>
`,NN=`<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    label="How would you prefer to be contacted?"
    hint="Select all options that are relevant to you."
    heading-size="l"
    id="contact"
    page-heading
  >
    <template #item-conditional="{ item }">
      <nhs-input
        :label="item.conditionalProps.label"
        class="nhsuk-u-width-two-thirds"
        v-model="inputModel[item.conditional.value]"
      ></nhs-input>
    </template>
  </nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

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
        }
      ],
      model: [],
      inputModel: {
        email: '',
        phone: '',
        text: ''
      }
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`;const IN={Checkbox:wN,CheckboxHint:SN,CheckboxDisabled:xN,CheckboxHeading:CN,CheckboxError:EN,CheckboxConditional:RN,CheckboxSlots:TN,CheckboxNonOfAbove:NN};var AN=`<template>
  <nhs-header show-nav show-search>
    <nhs-header-item href="https://www.nhs.uk/conditions"> Health A-Z </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/live-well/"> Live Well </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Mental health
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Care and support
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/news/"> Pregnancy </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/service-search"> NHS services </nhs-header-item>
  </nhs-header>
</template>
`,MN=`<template>
  <nhs-header :service="service" transactional></nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Register with a GP',
        href: '/'
      }
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,ON=`<template>
  <nhs-header show-nav show-search :organisation="organisation">
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`,HN=`<template>
  <nhs-header show-nav show-search :organisation="organisation" white-header white-nav>
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    });

    return { ...toRefs(state) };
  }
});
<\/script>
`;const PN={Header:AN,HeaderTransactionalName:MN,HeaderOrg:ON,HeaderOrgWhiteNav:HN},LN=Re(Q(Re(Q(Re(Q({ButtonDocs:YR,ButtonDocsDisabled:ZR,ActionLink:QR,BackLink:XR,Breadcrumb:JR,CardBasic:eT,CardClickable:nT,CardImage:tT,CardFeature:sT,CardGroup:rT},kN),{ContentsList:oT,Details:aT,DoDont:iT,DoDontSlots:lT,ErrorSummary:uT,Body:cT,List:dT,ErrorText:hT,HintText:pT,InsetText:mT,Heading:fT,Label:_T,LabelBold:gT,LabelHeading:bT,Expander:vT,ExpanderGroup:$T,Fieldset:yT,FieldsetHeading:kT,FieldsetInput:wT,FieldsetSlots:ST,Footer:xT,Grid:CT}),PN),{Hero:ET,HeroImage:RT,HeroImageText:TT,Image:NT,ListPanel:IT,NavAZ:AT,Pagination:MT,ReviewDate:OT,SkipLink:HT,SummaryList:PT,SummaryListNoAction:LT,SummaryListNoBorder:BT,Tag:DT,WarningCallout:qT,WarningCalloutNonImportant:VT,Table:UT,TablePanel:FT,TableResponsive:zT,Input:jT,InputAutocomplete:WT,InputHint:KT,InputError:GT,InputWidth:YT,InputSlots:ZT,Form:QT,Select:XT,SelectError:JT,SelectSlots:eN,Textarea:nN,TextareaAutocomplete:tN,TextareaError:sN,TextareaSlots:rN,DateInput:oN,DateInputAutocomplete:aN,DateInputError:iN,DateInputErrorMulti:lN,DateInputSlots:uN}),IN),{Radio:cN,RadioInline:dN,RadioDisabled:hN,RadioDivider:pN,RadioHint:mN,RadioNoHeading:fN,RadioError:_N,RadioConditional:gN,RadioSlots:bN}),BN=new RegExp("(?:\\<template\\>\\n)([^]+)(?:\\<\\/template\\>)","i"),DN=new RegExp('(?:\\<script lang="ts"\\>\\n)([^]+)(?:\\<\\/script\\>)',"i");function ku(e,n){const t=n.exec(e);return t?t[1]:""}function qN(e){return ku(e,BN).split(`
`).map(t=>t.replace(/^ {2}/,"")).join(`
`)}function VN(e){const n=LN[e];return{templateCode:qN(n),scriptCode:ku(n,DN)}}const UN=v({setup(){function e(n){alert(n)}return{clickHandler:e}}}),FN=k(" Primary Button "),zN=k(" Secondary Button "),jN=k(" Reverse Button ");function WN(e,n,t,s,r,a){const o=d("nhs-button");return c(),y(q,null,[u(o,{onClick:n[0]||(n[0]=i=>e.clickHandler("primary"))},{default:h(()=>[FN]),_:1}),u(o,{color:"secondary",onClick:n[1]||(n[1]=i=>e.clickHandler("secondary"))},{default:h(()=>[zN]),_:1}),u(o,{color:"reverse",onClick:n[2]||(n[2]=i=>e.clickHandler("reverse"))},{default:h(()=>[jN]),_:1})],64)}var KN=S(UN,[["render",WN]]);const GN={},YN=k(" Primary Button Disabled "),ZN=k(" Secondary Button Disabled "),QN=k(" Reverse Button Disabled ");function XN(e,n){const t=d("nhs-button");return c(),y(q,null,[u(t,{disabled:""},{default:h(()=>[YN]),_:1}),u(t,{color:"secondary",disabled:""},{default:h(()=>[ZN]),_:1}),u(t,{color:"reverse",disabled:""},{default:h(()=>[QN]),_:1})],64)}var JN=S(GN,[["render",XN]]);const eI=v({setup(){const e=Y({doItems:["cover blisters that are likely to burst with a soft plaster or dressing","wash your hands before touching a burst blister","allow the fluid in a burst blister to drain before covering it with a plaster or dressing"],dontItems:["do not burst a blister yourself","do not peel the skin off a burst blister","do not pick at the edges of the remaining skin","do not wear the shoes or use the equipment that caused your blister until it heals"]});return Q({},ee(e))}});function nI(e,n,t,s,r,a){const o=d("nhs-dodont");return c(),y(q,null,[u(o,{title:"Do",type:"tick",items:e.doItems},{item:h(({item:i})=>[_("a",null,N(i),1)]),_:1},8,["items"]),u(o,{title:"Don't",type:"cross",items:e.dontItems},{item:h(({item:i})=>[_("a",null,N(i),1)]),_:1},8,["items"])],64)}var tI=S(eI,[["render",nI]]);const sI={},rI=k(" body normal "),oI=k(" body s ");function aI(e,n){const t=d("nhs-body");return c(),y(q,null,[u(t,null,{default:h(()=>[rI]),_:1}),u(t,{size:"s"},{default:h(()=>[oI]),_:1})],64)}var iI=S(sI,[["render",aI]]);const lI={},uI=k(" Bullet List "),cI=_("li",null,"one",-1),dI=_("li",null,"two",-1),hI=_("li",null,"three",-1),pI=k(" Numbered List "),mI=_("li",null,"one",-1),fI=_("li",null,"two",-1),_I=_("li",null,"three",-1),gI=k(" Error List "),bI=k("one"),vI=k("two"),$I=k("three");function yI(e,n){const t=d("nhs-list"),s=d("router-link");return c(),y(q,null,[uI,u(t,null,{default:h(()=>[cI,dI,hI]),_:1}),pI,u(t,{type:"number"},{default:h(()=>[mI,fI,_I]),_:1}),gI,u(t,{type:"error"},{default:h(()=>[_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[bI]),_:1})]),_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[vI]),_:1})]),_("li",null,[u(s,{to:"/components/list"},{default:h(()=>[$I]),_:1})])]),_:1})],64)}var kI=S(lI,[["render",yI]]);const wI={},SI=k(" Heading XL "),xI=k(" Heading L "),CI=k(" Heading M "),EI=k(" Heading S "),RI=k(" Heading XS ");function TI(e,n){const t=d("nhs-heading");return c(),y(q,null,[u(t,{size:"xl"},{default:h(()=>[SI]),_:1}),u(t,{size:"l"},{default:h(()=>[xI]),_:1}),u(t,{size:"m"},{default:h(()=>[CI]),_:1}),u(t,{size:"s"},{default:h(()=>[EI]),_:1}),u(t,{size:"xs"},{default:h(()=>[RI]),_:1})],64)}var NI=S(wI,[["render",TI]]);const II={},AI=_("p",null,"body text",-1);function MI(e,n){const t=d("nhs-fieldset");return c(),w(t,{legend:"What is your address?"},{legend:h(({legend:s})=>[_("a",null,N(s),1)]),default:h(()=>[AI]),_:1})}var OI=S(II,[["render",MI]]);const HI={},ze=e=>(qa("data-v-5d706027"),e=e(),Va(),e),PI=ze(()=>_("h4",{class:"nhsuk-u-margin-bottom-0"},"Full width (100%)",-1)),LI=ze(()=>_("p",null,':span="100"',-1)),BI=ze(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Halves (50%)",-1)),DI=ze(()=>_("p",null,':span="50"',-1)),qI=ze(()=>_("p",null,':span="50"',-1)),VI=ze(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Thirds (33%)",-1)),UI=ze(()=>_("p",null,':span="66"',-1)),FI=ze(()=>_("p",null,':span="33"',-1)),zI=ze(()=>_("p",null,':span="33"',-1)),jI=ze(()=>_("p",null,':span="66"',-1)),WI=ze(()=>_("h4",{class:"nhsuk-u-margin-bottom-0 nhsuk-u-margin-top-4"},"Quarters (25%)",-1)),KI=ze(()=>_("p",null,':span="75"',-1)),GI=ze(()=>_("p",null,':span="25"',-1)),YI=ze(()=>_("p",null,':span="25"',-1)),ZI=ze(()=>_("p",null,':span="25"',-1)),QI=ze(()=>_("p",null,':span="25"',-1)),XI=ze(()=>_("p",null,':span="25"',-1));function JI(e,n){const t=d("nhs-col"),s=d("nhs-row");return c(),y(q,null,[PI,u(s,null,{default:h(()=>[u(t,null,{default:h(()=>[LI]),_:1})]),_:1}),BI,u(s,null,{default:h(()=>[u(t,{span:50},{default:h(()=>[DI]),_:1}),u(t,{span:50},{default:h(()=>[qI]),_:1})]),_:1}),VI,u(s,null,{default:h(()=>[u(t,{span:66},{default:h(()=>[UI]),_:1}),u(t,{span:33},{default:h(()=>[FI]),_:1})]),_:1}),u(s,null,{default:h(()=>[u(t,{span:33},{default:h(()=>[zI]),_:1}),u(t,{span:66},{default:h(()=>[jI]),_:1})]),_:1}),WI,u(s,null,{default:h(()=>[u(t,{span:75},{default:h(()=>[KI]),_:1}),u(t,{span:25},{default:h(()=>[GI]),_:1}),u(t,{span:25},{default:h(()=>[YI]),_:1}),u(t,{span:25},{default:h(()=>[ZI]),_:1}),u(t,{span:25},{default:h(()=>[QI]),_:1}),u(t,{span:25},{default:h(()=>[XI]),_:1})]),_:1})],64)}var eA=S(HI,[["render",JI],["__scopeId","data-v-5d706027"]]);const nA=v({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:"",valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),tA=k("Validate"),sA=k("Reset");function rA(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},{label:h(({label:m})=>[_("h1",null,N(m),1)]),hint:h(({hint:m})=>[_("a",null,N(m),1)]),error:h(({error:m})=>[_("h2",null,N(m),1)]),_:1},8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[tA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[sA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[k(" Form valid: "+N(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var oA=S(nA,[["render",rA]]);const aA=v({setup(){const e=Y({rules:[s=>!!s||"Error message goes here"],model:"",valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),iA=k("Validate"),lA=k("Reset");function uA(e,n,t,s,r,a){const o=d("nhs-input"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"National Insurance number",hint:"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019.",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},null,8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[iA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[lA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[k(" Form valid: "+N(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var cA=S(aA,[["render",uA]]);const dA=v({setup(){const e=Y({model:"NHS.UK frontend option 1",rules:[s=>s!=="NHS.UK frontend option 1"||"Error message goes here"],valid:!1});function n(){e.valid&&alert("success submission")}function t(){e.model=""}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),hA=_("option",null,"NHS.UK frontend option 1",-1),pA=_("option",null,"NHS.UK frontend option 2",-1),mA=_("option",null,"NHS.UK frontend option 3",-1),fA=k("Submit"),_A=k("Reset");function gA(e,n,t,s,r,a){const o=d("nhs-select"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{label:"Label text goes here",hint:"Hint text goes here",modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),rules:e.rules},{label:h(({label:m})=>[_("h1",null,N(m),1)]),hint:h(({hint:m})=>[_("a",null,N(m),1)]),error:h(({error:m})=>[_("h2",null,N(m),1)]),default:h(()=>[hA,pA,mA]),_:1},8,["modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[fA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[_A]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[k(" Form valid: "+N(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var bA=S(dA,[["render",gA]]);const vA=v({setup(){const e=Y({model:"",rules:[s=>!!s||"You must provide an explanation"],valid:!1});function n(){e.valid&&alert("success submission")}function t(){e.model=""}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),$A=k("Submit"),yA=k("Reset");function kA(e,n,t,s,r,a){const o=d("nhs-textarea"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{onSubmit:n[1]||(n[1]=m=>e.onSubmit()),onReset:n[2]||(n[2]=m=>e.onReset()),modelValue:e.valid,"onUpdate:modelValue":n[3]||(n[3]=m=>e.valid=m)},{default:h(()=>[u(o,{label:"Why can't you provide a National Insurance number?",hint:"Hint text",rules:e.rules,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},{label:h(({label:m})=>[_("h1",null,N(m),1)]),hint:h(({hint:m})=>[_("h2",null,N(m),1)]),error:h(({error:m})=>[_("h3",null,N(m),1)]),_:1},8,["rules","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[$A]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[yA]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}var wA=S(vA,[["render",kA]]);const SA=v({setup(){const e=Y({items:[{label:"Day",width:"2",type:"number",rules:[s=>!!s||"Error message goes here"]},{label:"Month",width:"2",type:"number"},{label:"Year",width:"4",type:"number"}],model:{},valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model={}}return Re(Q({},ee(e)),{onReset:t,onSubmit:n})}}),xA=k("Validate"),CA=k("Reset");function EA(e,n,t,s,r,a){const o=d("nhs-input-group"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{onSubmit:n[1]||(n[1]=m=>e.onSubmit()),onReset:n[2]||(n[2]=m=>e.onReset()),modelValue:e.valid,"onUpdate:modelValue":n[3]||(n[3]=m=>e.valid=m)},{default:h(()=>[u(o,{label:"What is your date of birth?",hint:"For example, 31 3 1980",items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m)},{hint:h(({hint:m})=>[_("a",null,N(m),1)]),error:h(({error:m})=>[k(N(m),1)]),"item-label":h(({item:m})=>[k(N(m),1)]),_:1},8,["items","modelValue"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[xA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[CA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[_("p",null,"form valid: "+N(e.valid),1),_("p",null,"model value: "+N(e.model),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var RA=S(SA,[["render",EA]]);const TA=v({setup(){const e=Y({model:"",items:[{label:"Yes",value:"yes",hint:"hint text"},{label:"No",value:"no"},{divider:"or"},{label:"Maybe",value:"maybe"}],rules:[s=>!!s||"Please select an option"],valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=""}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),NA=k("Validate"),IA=k("Reset");function AA(e,n,t,s,r,a){const o=d("nhs-radios"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),label:"Have you changed your name?",hint:"This includes changing your last name or spelling your name differently.",rules:e.rules,ref:"radios"},{"item-label":h(({item:m})=>[_("h3",null,N(m),1)]),"item-hint":h(({item:m})=>[_("a",null,N(m),1)]),hint:h(({hint:m})=>[_("h2",null,N(m),1)]),error:h(({error:m})=>[_("h2",null,N(m),1)]),_:1},8,["items","modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[NA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[IA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[k(" Form valid: "+N(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var MA=S(TA,[["render",AA]]);const OA={CareCardNonUrgent:Ol,CareCardUrgent:Hl,CareCardEmergency:Pl},HA=v({setup(){const e=Y({items:[{label:"British",value:"british"},{label:"Irish",value:"irish"},{label:"citizen of another country",value:"other"}],model:[],rules:[s=>s.length>0||"Please select an option"],valid:!1});function n(){e.valid&&alert("submit form")}function t(){e.model=[]}return Re(Q({},ee(e)),{onSubmit:n,onReset:t})}}),PA=k("Validate"),LA=k("Reset");function BA(e,n,t,s,r,a){const o=d("nhs-checkboxes"),i=d("nhs-button"),l=d("nhs-col"),p=d("nhs-row"),f=d("nhs-form");return c(),w(f,{modelValue:e.valid,"onUpdate:modelValue":n[1]||(n[1]=m=>e.valid=m),onSubmit:n[2]||(n[2]=m=>e.onSubmit()),onReset:n[3]||(n[3]=m=>e.onReset())},{default:h(()=>[u(o,{items:e.items,modelValue:e.model,"onUpdate:modelValue":n[0]||(n[0]=m=>e.model=m),label:"What is your nationality?",hint:"If you have more than 1 nationality, select all options that are relevant to you.",ref:"checkbox",rules:e.rules},{hint:h(({hint:m})=>[_("a",null,N(m),1)]),"item-label":h(({item:m})=>[_("h3",null,N(m),1)]),_:1},8,["items","modelValue","rules"]),u(p,null,{default:h(()=>[u(l,{span:33},{default:h(()=>[u(i,{type:"submit"},{default:h(()=>[PA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[u(i,{type:"reset"},{default:h(()=>[LA]),_:1})]),_:1}),u(l,{span:33},{default:h(()=>[k(" Form valid: "+N(e.valid),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}var DA=S(HA,[["render",BA]]);const qA={Checkbox:Bl,CheckboxHint:Dl,CheckboxDisabled:ql,CheckboxHeading:Vl,CheckboxError:Ul,CheckboxConditional:Fl,CheckboxSlots:DA,CheckboxNonOfAbove:zl},VA={Header:jl,HeaderTransactionalName:Wl,HeaderOrg:Kl,HeaderOrgWhiteNav:Gl},UA=Re(Q(Re(Q(Re(Q({ButtonDocs:KN,ButtonDocsDisabled:JN,ActionLink:Ll,BackLink:Ci,Breadcrumb:Ei,CardBasic:Tl,CardClickable:Nl,CardImage:Il,CardFeature:Ml,CardGroup:Al},OA),{ContentsList:Ri,Details:Ti,DoDont:Ni,DoDontSlots:tI,ErrorSummary:Yl,Body:iI,List:kI,ErrorText:Ii,HintText:Ai,InsetText:Mi,Heading:NI,Label:Oi,LabelBold:Hi,LabelHeading:Pi,Expander:Li,ExpanderGroup:Bi,Fieldset:Di,FieldsetHeading:qi,FieldsetInput:Vi,FieldsetSlots:OI,Footer:Ui,Grid:eA}),VA),{Hero:Fi,HeroImage:zi,HeroImageText:ji,Image:Wi,ListPanel:Ki,NavAZ:Gi,Pagination:Yi,ReviewDate:Zi,SkipLink:Qi,SummaryList:Xi,SummaryListNoAction:Ji,SummaryListNoBorder:el,Tag:nl,WarningCallout:tl,WarningCalloutNonImportant:sl,Table:rl,TablePanel:ol,TableResponsive:al,Input:il,InputAutocomplete:ll,InputHint:ul,InputError:cl,InputWidth:dl,InputSlots:oA,Form:cA,Select:hl,SelectError:pl,SelectSlots:bA,Textarea:ml,TextareaAutocomplete:fl,TextareaError:_l,TextareaSlots:wA,DateInput:gl,DateInputAutocomplete:bl,DateInputError:vl,DateInputErrorMulti:$l,DateInputSlots:RA}),qA),{Radio:yl,RadioInline:kl,RadioDisabled:wl,RadioDivider:Sl,RadioHint:xl,RadioNoHeading:Cl,RadioError:El,RadioConditional:Rl,RadioSlots:MA});function FA(e){return UA[e]}const zA=v({components:{CodeBlockTab:GR},props:{name:{type:String,required:!0}},setup(e){const{templateCode:n,scriptCode:t}=VN(e.name),s=Y({template:n,script:t,showTemplate:!1,showScript:!1}),r=z(()=>!s.showTemplate&&!s.showScript?{display:"none","margin-bottom":"0px"}:{}),a=z(()=>!s.showTemplate&&!s.showScript?{"border-bottom":"1px solid #d8dde0","margin-bottom":"40px"}:{});return Ue(()=>s.showTemplate,o=>{o&&s.showScript&&(s.showScript=!1)}),Ue(()=>s.showScript,o=>{o&&s.showTemplate&&(s.showTemplate=!1)}),Re(Q({getExampleModule:FA},ee(s)),{codeContainerStyle:r,expandContainerStyle:a})}}),jA={class:"example_container"},WA=k(" Template "),KA=k(" Script ");function GA(e,n,t,s,r,a){const o=d("code-block-tab"),i=d("highlightjs"),l=d("nhs-col"),p=d("nhs-row");return c(),w(p,null,{default:h(()=>[u(l,null,{default:h(()=>[_("div",jA,[(c(),w(on(e.getExampleModule(e.name))))]),_("div",{class:"expand_container",style:Bn(e.expandContainerStyle)},[e.template?(c(),w(o,{key:0,id:`${e.name}-template`,modelValue:e.showTemplate,"onUpdate:modelValue":n[0]||(n[0]=f=>e.showTemplate=f)},{default:h(()=>[WA]),_:1},8,["id","modelValue"])):K("",!0),e.script?(c(),w(o,{key:1,id:`${e.name}-script`,modelValue:e.showScript,"onUpdate:modelValue":n[1]||(n[1]=f=>e.showScript=f)},{default:h(()=>[KA]),_:1},8,["id","modelValue"])):K("",!0)],4),_("div",{class:"code_container",style:Bn(e.codeContainerStyle)},[e.showTemplate?(c(),w(i,{key:0,language:"xml",code:e.template},null,8,["code"])):K("",!0),e.showScript?(c(),w(i,{key:1,language:"typescript",code:e.script},null,8,["code"])):K("",!0)],4)]),_:1})]),_:1})}var YA=S(zA,[["render",GA],["__scopeId","data-v-3e30a839"]]);const Gr=Wd(qy);Gr.component("argument-table",FR);Gr.component("code-block",YA);Gr.use(iR,{router:sn}).use(sn).use(D1).mount("#app");
