(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,Ce=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),Ie=new WeakMap;let pt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ce&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ie.set(t,e))}return e}toString(){return this.cssText}};const Nt=r=>new pt(typeof r=="string"?r:r+"",void 0,Oe),P=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new pt(t,r,Oe)},Ht=(r,e)=>{if(Ce)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=ne.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},ke=Ce?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Nt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bt,defineProperty:Ft,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Gt,getOwnPropertySymbols:Vt,getPrototypeOf:qt}=Object,L=globalThis,Me=L.trustedTypes,Wt=Me?Me.emptyScript:"",we=L.reactiveElementPolyfillSupport,K=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?Wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ue=(r,e)=>!Bt(r,e),Ne={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class B extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Ft(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=zt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=qt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,i=[...Gt(t),...Vt(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ke(n))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ht(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:le).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:le;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ue)(this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$Ej()}catch(n){throw e=!1,this._$Ej(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[K("elementProperties")]=new Map,B[K("finalized")]=new Map,we==null||we({ReactiveElement:B}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,ce=J.trustedTypes,He=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+T,Kt=`<${ut}>`,N=document,Q=()=>N.createComment(""),Y=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,Jt=r=>ft(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",xe=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,Fe=/>/g,k=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,Ge=/"/g,gt=/^(?:script|style|textarea|title)$/i,Xt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=Xt(1),z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ve=new WeakMap,M=N.createTreeWalker(N,129);function mt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return He!==void 0?He.createHTML(e):e}const Qt=(r,e)=>{const t=r.length-1,i=[];let n,s=e===2?"<svg>":"",o=W;for(let c=0;c<t;c++){const a=r[c];let l,h,p=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===W?h[1]==="!--"?o=Be:h[1]!==void 0?o=Fe:h[2]!==void 0?(gt.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=k):h[3]!==void 0&&(o=k):o===k?h[0]===">"?(o=n??W,p=-1):h[1]===void 0?p=-2:(p=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?k:h[3]==='"'?Ge:ze):o===Ge||o===ze?o=k:o===Be||o===Fe?o=W:(o=k,n=void 0);const u=o===k&&r[c+1].startsWith("/>")?" ":"";s+=o===W?a+Kt:p>=0?(i.push(l),a.slice(0,p)+dt+a.slice(p)+T+u):a+T+(p===-2?c:u)}return[mt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class Z{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Qt(e,t);if(this.el=Z.createElement(l,i),M.currentNode=this.el.content,t===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=M.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const p of n.getAttributeNames())if(p.endsWith(dt)){const d=h[o++],u=n.getAttribute(p).split(T),I=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:I[2],strings:u,ctor:I[1]==="."?Zt:I[1]==="?"?er:I[1]==="@"?tr:ye}),n.removeAttribute(p)}else p.startsWith(T)&&(a.push({type:6,index:s}),n.removeAttribute(p));if(gt.test(n.tagName)){const p=n.textContent.split(T),d=p.length-1;if(d>0){n.textContent=ce?ce.emptyScript:"";for(let u=0;u<d;u++)n.append(p[u],Q()),M.nextNode(),a.push({type:2,index:++s});n.append(p[d],Q())}}}else if(n.nodeType===8)if(n.data===ut)a.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(T,p+1))!==-1;)a.push({type:7,index:s}),p+=T.length-1}s++}}static createElement(e,t){const i=N.createElement("template");return i.innerHTML=e,i}}function G(r,e,t=r,i){var o,c;if(e===z)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=Y(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=G(r,n._$AS(r,e.values),n,i)),e}class Yt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??N).importNode(t,!0);M.currentNode=n;let s=M.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new te(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new rr(s,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(s=M.nextNode(),o++)}return M.currentNode=N,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),Y(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Jt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Z.createElement(mt(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new Yt(n,this),c=o.u(this.options);o.p(t),this.$(c),this._$AH=o}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Z(e)),t}T(e){ft(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new te(this.k(Q()),this.k(Q()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ye{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=G(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==z,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=G(this,c[i+a],t,a),l===z&&(l=this._$AH[a]),o||(o=!Y(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.O(e)}O(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Zt extends ye{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===m?void 0:e}}class er extends ye{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class tr extends ye{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??m)===z)return;const i=this._$AH,n=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class rr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const Ee=J.litHtmlPolyfillSupport;Ee==null||Ee(Z,te),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.1.1");const ir=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new te(e.insertBefore(Q(),s),s,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ir(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return z}}var ht;y._$litElement$=!0,y.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:y});const Ae=globalThis.litElementPolyfillSupport;Ae==null||Ae({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ue},sr=(r=nr,e,t)=>{const{kind:i,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.C(o,void 0,r),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function _(r){return(e,t)=>typeof t=="object"?sr(r,e,t):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return _({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const or=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ar(r){return(e,t)=>{const{slot:i,selector:n}=r??{},s="slot"+(i?`[name=${i}]`:":not([name])");return or(e,t,{get(){var a;const o=(a=this.renderRoot)==null?void 0:a.querySelector(s),c=(o==null?void 0:o.assignedElements(r))??[];return n===void 0?c:c.filter(l=>l.matches(n))}})}}function he(r){return r=r||[],Array.isArray(r)?r:[r]}function w(r){return`[Vaadin.Router] ${r}`}function lr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const pe="module",de="nomodule",Se=[pe,de];function qe(r){if(!r.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function _t(r){if(!r||!$(r.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!H(r.action)&&!Array.isArray(r.children)&&!H(r.children)&&!ue(e)&&!t.some(i=>$(r[i])))throw new Error(w(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if($(e))qe(e);else if(Se.some(i=>i in e))Se.forEach(i=>i in e&&qe(e[i]));else throw new Error(w('Expected route bundle to include either "'+de+'" or "'+pe+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(w(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function We(r){he(r).forEach(e=>_t(e))}function Ke(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===pe?t.setAttribute("type",pe):e===de&&t.setAttribute(de,""),t.async=!0),new Promise((i,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,i(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function cr(r){return $(r)?Ke(r):Promise.race(Se.filter(e=>e in r).map(e=>Ke(r[e],e)))}function X(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function ue(r){return typeof r=="object"&&!!r}function H(r){return typeof r=="function"}function $(r){return typeof r=="string"}function vt(r){const e=new Error(w(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const F=new class{};function hr(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function Je(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||hr(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;X("go",{pathname:n,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const pr={activate(){window.document.addEventListener("click",Je)},inactivate(){window.document.removeEventListener("click",Je)}},dr=/Trident/.test(navigator.userAgent);dr&&!H(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Xe(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;X("go",{pathname:e,search:t,hash:i})}const ur={activate(){window.addEventListener("popstate",Xe)},inactivate(){window.removeEventListener("popstate",Xe)}};var q=Et,fr=Te,gr=yr,mr=$t,_r=xt,yt="/",bt="./",vr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Te(r,e){for(var t=[],i=0,n=0,s="",o=e&&e.delimiter||yt,c=e&&e.delimiters||bt,a=!1,l;(l=vr.exec(r))!==null;){var h=l[0],p=l[1],d=l.index;if(s+=r.slice(n,d),n=d+h.length,p){s+=p[1],a=!0;continue}var u="",I=r[n],jt=l[2],Lt=l[3],Dt=l[4],re=l[5];if(!a&&s.length){var $e=s.length-1;c.indexOf(s[$e])>-1&&(u=s[$e],s=s.slice(0,$e))}s&&(t.push(s),s="",a=!1);var It=u!==""&&I!==void 0&&I!==u,kt=re==="+"||re==="*",Mt=re==="?"||re==="*",Le=u||o,De=Lt||Dt;t.push({name:jt||i++,prefix:u,delimiter:Le,optional:Mt,repeat:kt,partial:It,pattern:De?br(De):"[^"+U(Le)+"]+?"})}return(s||n<r.length)&&t.push(s+r.substr(n)),t}function yr(r,e){return $t(Te(r,e))}function $t(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){s+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(h=o(l[p],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(p===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function U(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function br(r){return r.replace(/([=!:$/()])/g,"\\$1")}function wt(r){return r&&r.sensitive?"":"i"}function $r(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function wr(r,e,t){for(var i=[],n=0;n<r.length;n++)i.push(Et(r[n],e,t).source);return new RegExp("(?:"+i.join("|")+")",wt(t))}function xr(r,e,t){return xt(Te(r,t),e,t)}function xt(r,e,t){t=t||{};for(var i=t.strict,n=t.start!==!1,s=t.end!==!1,o=U(t.delimiter||yt),c=t.delimiters||bt,a=[].concat(t.endsWith||[]).map(U).concat("$").join("|"),l=n?"^":"",h=r.length===0,p=0;p<r.length;p++){var d=r[p];if(typeof d=="string")l+=U(d),h=p===r.length-1&&c.indexOf(d[d.length-1])>-1;else{var u=d.repeat?"(?:"+d.pattern+")(?:"+U(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=U(d.prefix)+"("+u+")?":l+="(?:"+U(d.prefix)+"("+u+"))?":l+=U(d.prefix)+"("+u+")"}}return s?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,wt(t))}function Et(r,e,t){return r instanceof RegExp?$r(r,e):Array.isArray(r)?wr(r,e,t):xr(r,e,t)}q.parse=fr;q.compile=gr;q.tokensToFunction=mr;q.tokensToRegExp=_r;const{hasOwnProperty:Er}=Object.prototype,Re=new Map;Re.set("|false",{keys:[],pattern:/(?:)/});function Qe(r){try{return decodeURIComponent(r)}catch{return r}}function Ar(r,e,t,i,n){t=!!t;const s=`${r}|${t}`;let o=Re.get(s);if(!o){const l=[];o={keys:l,pattern:q(r,l,{end:t,strict:r===""})},Re.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const h=o.keys[l-1],p=h.name,d=c[l];(d!==void 0||!Er.call(a,p))&&(h.repeat?a[p]=d?d.split(h.delimiter).map(Qe):[]:a[p]=d&&Qe(d))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function At(r,e,t,i,n){let s,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=Ar(a,e,!h,i,n),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const d=h[c];d.parent=r;let u=s.path.length;u>0&&e.charAt(u)==="/"&&(u+=1),o=At(d,e.substr(u),t,s.keys,s.params)}const p=o.next(l);if(!p.done)return{done:!1,value:p.value};o=null,c++}return{done:!0}}}}function Pr(r){if(H(r.route.action))return r.route.action(r)}function Sr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function Rr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Cr(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const n={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class ee{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Pr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){We(e);const t=[...he(e)];this.root.__children=t}addRoutes(e){return We(e),this.root.__children.push(...he(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,$(e)?{pathname:e}:e),i=At(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,p){const d=p===null&&s.value.route;return s=o||i.next(d),o=null,!l&&(s.done||!Sr(h,s.value.route))?(o=s,Promise.resolve(F)):s.done?Promise.reject(vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Cr(c,s.value),Promise.resolve(n(c)).then(u=>u!=null&&u!==F?(c.result=u.result||u,c):a(l,h,u)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Rr(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}ee.pathToRegexp=q;const{pathToRegexp:Ye}=ee,Ze=new Map;function Pt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,Pt(r,s,s.__children||s.children)}}function et(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function tt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Or(r,e={}){if(!(r instanceof ee))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,n)=>{let s=et(t,i);if(!s&&(t.clear(),Pt(t,r.root,r.root.__children),s=et(t,i),!s))throw new Error(`Route "${i}" not found`);let o=Ze.get(s.fullPath);if(!o){let a=tt(s),l=s.parent;for(;l;){const u=tt(l);u&&(a=u.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=Ye.parse(a),p=Ye.tokensToFunction(h),d=Object.create(null);for(let u=0;u<h.length;u++)$(h[u])||(d[h[u].name]=!0);o={toPath:p,keys:d},Ze.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let p=0;p<l.length;p++){const d=l[p];o.keys[d]||(a[d]=n[d])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let rt=[];function Ur(r){rt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),rt=r}const Tr=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},jr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function it(r,e){return r.classList.add(e),new Promise(t=>{if(Tr(r)){const i=r.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${n}`),jr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const Lr=256;function Pe(r){return r!=null}function Dr(r){const e=Object.assign({},r);return delete e.next,e}function b({pathname:r="",search:e="",hash:t="",chain:i=[],params:n={},redirectFrom:s,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>oe(x.pathToRegexp.compile(St(a))(Object.assign({},n,l)),o)}}function nt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Ir(r,e){e.location=b(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function se(r,e,t){if(H(r))return r.apply(t,e)}function st(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return se(t[r],e,t)}}function kr(r,e){if(!Array.isArray(r)&&!ue(r))throw new Error(w(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=he(r);for(let i=0;i<t.length;i++)_t(t[i]),e.__children.push(t[i])}function ie(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function oe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function St(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class x extends ee{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&ee.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=x.NavigationTrigger;x.setTriggers.apply(x,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=b({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();H(t.children)&&(i=i.then(()=>t.children(Dr(e))).then(s=>{!Pe(s)&&!H(t.children)&&(s=t.children),kr(s,t)}));const n={redirect:s=>nt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return se(t.action,[e,n],t)}).then(s=>{if(Pe(s)&&(s instanceof HTMLElement||s.redirect||s===F))return s;if($(t.redirect))return n.redirect(t.redirect);if(t.bundle)return cr(t.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Pe(s))return s;if($(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},$(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=b(s),t&&this.__updateBrowserHistory(s,i===1),X("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ie(this.__outlet&&this.__outlet.children),this.location=b(Object.assign(n,{resolver:this})),X("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const s=i!==t?i:e,c=oe(St(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,p)=>l.next(void 0,h,p).then(d=>d===null||d===F?c?l:h.parent!==null?a(l,h.parent,d):d:d);return a(i).then(l=>{if(l===null||l===F)throw vt(s);return l&&l!==F&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Ir(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(w(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${lr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>nt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),i[a].element.location=b(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=b(e,i[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=b(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const s=b(t);return e.then(o=>{if(this.__isLatestRender(t))return st("onBeforeLeave",[s,i,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,n){const s=b(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return st("onBeforeEnter",[s,i,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Lr)throw new Error(w(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===i)e.chain[n].element=s,i=s;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===i&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&ie(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ie(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const s=b(e);se(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ie(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=b(e,e.chain[t].route);se(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&i&&o){const c=ue(o)&&o.leave||"leaving",a=ue(o)&&o.enter||"entering";n.push(it(t,c)),n.push(it(i,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;$(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){Ur(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Or(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(x.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=$(e)?this.__createUrl(e,"http://a"):e;return X("go",{pathname:t,search:i,hash:n})}}const Mr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Nr(){function r(){return!0}return Rt(r)}function Hr(){try{return Br()?!0:Fr()?ae?!zr():!Nr():!1}catch{return!1}}function Br(){return localStorage.getItem("vaadin.developmentmode.force")}function Fr(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function zr(){return!!(ae&&Object.keys(ae).map(e=>ae[e]).filter(e=>e.productionMode).length>0)}function Rt(r,e){if(typeof r!="function")return;const t=Mr.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const ot=function(r,e){if(window.Vaadin.developmentMode)return Rt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Hr());function Gr(){}const Vr=function(){if(typeof ot=="function")return ot(Gr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Vr();x.NavigationTrigger={POPSTATE:ur,CLICK:pr};const g={profile:null,setProfile(r,e){this.profile=r,e&&e()}};var qr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,Ct=(r,e,t,i)=>{for(var n=i>1?void 0:i?Wr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&qr(e,t,n),n};let fe=class extends y{constructor(){super(...arguments),this.on=!1}render(){return f`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target;if(this.on=e==null?void 0:e.checked,this.on){document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode");const t=document.querySelectorAll("a");t.forEach(i=>{i.classList.add("dark-link")}),t.forEach(i=>{i.classList.remove("light-link")})}else{document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode");const t=document.querySelectorAll("a");t.forEach(i=>{i.classList.add("light-link")}),t.forEach(i=>{i.classList.remove("dark-link")})}}};fe.styles=P`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
    }
    .slider {
      display: inline-block;
      border: 1px solid;
      border-radius: 0.75em;
      background-color: black;
      height: 1.5em;
      width: 2.75em;
      margin-left: 1em;
      position: relative;
      transition: background-color
        0.5s;
    }
    .slider:has(input:checked) {
      background-color: grey;
    }
    input {
      appearance: none;
      background-color: white;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: absolute;
      left: 0;
      transition: left 0.5s;
    }
    input:checked {
      left: 1.5em;
    }
  `;Ct([_({reflect:!0,type:Boolean})],fe.prototype,"on",2);fe=Ct([S("toggle-switch")],fe);var Kr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ot=(r,e,t,i)=>{for(var n=i>1?void 0:i?Jr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Kr(e,t,n),n};let ge=class extends y{constructor(){super(...arguments),this.open=!1}render(){return f`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu">
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};ge.styles=P`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid;
      background: white;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
      color: black;
    }
  `;Ot([_({reflect:!0,type:Boolean})],ge.prototype,"open",2);ge=Ot([S("drop-down")],ge);var Xr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Ut=(r,e,t,i)=>{for(var n=i>1?void 0:i?Qr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Xr(e,t,n),n};let me=class extends y{constructor(){super(...arguments),this.username=""}signOut(){g.setProfile(null),x.go("/app/")}render(){return f`
      <header>
        <div class="subHeader">
          <div>CPCB</div>
        </div>
        <a href="./home">Home</a>
        <a href="./recipes">My Recipes</a>
        <div class="subHeader">
          <drop-down>
            ${this.username}
            <ul slot="menu">
              <li>Settings</li>
              <li><toggle-switch>Mode</toggle-switch></li>
              <li><button @click="${this.signOut}">Sign out</button></li>
            </ul>
          </drop-down>
          <img class="profilePic" src="/images/profile.webp"/>
        </div>
      </header>
    `}};me.styles=P`
    .subHeader {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    
    .profilePic {
      height: 30px;
      width: 30px;
    }

    header {
      display: flex;
      justify-content: space-between;
      height: 30px;
      margin-bottom: 20px;
      background-color: darkGreen;
      color: white;
      padding: 10px;
    }

    a {
      text-decoration: none;
      font-size: 18px;
      color: white;
    }

    .profilePic {
      height: 30px;
      width: 30px;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
      color: white;
    }

    button {
      padding: 5px;
      border-radius: 7px;
      border: 2px solid darkGreen;
      background: none;
      font-size: 16px;
      curser: pointer;
      transition: all 0.3s ease;
    }
    button:hover {
      background-color: lightGrey;
    }
    button:active {
      background-color: darkGrey;
    }
  `;Ut([_()],me.prototype,"username",2);me=Ut([S("header-nav")],me);var Yr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,O=(r,e,t,i)=>{for(var n=i>1?void 0:i?Zr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Yr(e,t,n),n};let E=class extends y{constructor(){super(...arguments),this.title="",this.text="",this.ingredients="",this.instructions="",this.recipeImage="",this.save=()=>{},this.showSave=!1,this.showModal=!1}getFilterableValue(){return this.text}setVisible(r){this.style.display=r?"block":"none"}toggleModal(){this.showModal=!this.showModal,console.log("Toggle: "+this.showModal)}render(){return f`
      <div class="card">
        ${this.recipeImage==""?f`<img class="image" src="/images/italian.png" alt="recipe image">`:f`<img class="image" src=${this.recipeImage} alt="recipe image" />`}
        <h2>${this.title}</h2>
        <div class="content">
          <p>${this.text}</p>
        </div>
        ${this.showSave?f`<button @click=${this.save}>Save to My Recipes</button>`:f`<button @click=${this.save}>Unsave</button>`}
        <button class="read" @click=${this.toggleModal}>
          Read
          <svg class="icon">
            <use href="/icons/cooking.svg#icon-recipe" />
          </svg>
        </button>
      </div>

      ${this.showModal?f`
        <div class="modal">
          <div class="modal-content"}>
            <span class="close" @click=${this.toggleModal}>&times;</span>
            ${this.recipeImage==""?f`<img class="image" src="/images/italian.png" alt="recipe image">`:f`<img class="image" src=${this.recipeImage} alt="recipe image" />`}
            <h1>${this.title}</h1>
            <p>${this.text}</p>
            <h2>Ingredients:</h2>
            <svg class="icon">
              <use href="/icons/cooking.svg#icon-measure" />
            </svg>
            <p>${this.ingredients.split(`
`).map(r=>f`${r}<br>`)}<p>
            <h2>Instructions:</h2>
            <svg class="icon">
              <use href="/icons/cooking.svg#icon-mix" />
            </svg>
            <p>${this.instructions.split(`
`).map(r=>f`${r}<br>`)}<p>
          </div>
        </div>
      `:""}
    `}};E.styles=P`
    :host {
      display: block;
      border: 2px solid;
      border-radius: 12px;
      overflow: hidden;
      width: 400px;
      height: 530px;
      background-color: white;
    }
    h1 {
      color: darkGreen;
      margin-bottom: 20px;
    }
    h2 {
      margin-left: 15px;
      margin-bottom: 0px;
      font-size: 24px;
      color: black;
    }
    p {
      font-size: 16px;
      font-weight: normal;
      margin-left: 15px;
    }
    .image {
      width: 400px;
      height: 300px;
      object-fit: cover;
    }
    .content {
      padding: 20px;
      background-color: white;
      height: 75px;
      color: black;
    }

    button {
      margin-left: 10px;
      margin-right: 20px;
      padding: 5px;
      border-radius: 7px;
      border: 2px solid darkGreen;
      background: none;
      font-size: 16px;
      curser: pointer;
      transition: all 0.3s ease;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    button:hover {
      background-color: lightGrey;
    }
    button:active {
      background-color: darkGrey;
    }
    .read {
      margin-left: 0px;
    }

    .modal {
      display: block;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    .modal-content {
      background-color: #fefefe;
      margin: 10% auto; 
      padding: 20px;
      border: 3px solid darkGreen;
      border-radius: 20px;
      width: 60%;
      color: black;
    }
    
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }    

    svg.icon {
      display: inline;
      height: 1.3em;
      width: 1.3em;
      vertical-align: top;
      fill: currentColor;
    }
  `;O([_({reflect:!0,type:String}),_({type:String})],E.prototype,"title",2);O([_({type:String})],E.prototype,"text",2);O([_({type:String})],E.prototype,"ingredients",2);O([_({type:String})],E.prototype,"instructions",2);O([_({type:String})],E.prototype,"recipeImage",2);O([_({type:Function})],E.prototype,"save",2);O([_({type:Boolean})],E.prototype,"showSave",2);O([_({type:Boolean})],E.prototype,"showModal",2);E=O([S("recipe-card")],E);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var n=i>1?void 0:i?ti(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ei(e,t,n),n};let _e=class extends y{render(){return f`
      <div class="filter">
        <div><h2 class="secHead">Filter Results:<h2></div>
        <input type="text" @input="${this.filterItems}" placeholder="Search...">
        <div class="row">
          <slot name="item"></slot>
        </div>
      </div>
    `}firstUpdated(){var e;((e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="item"]'))||console.warn("Slot element not found.")}filterItems(r){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector('slot[name="item"]'),t=e?e.assignedElements():[];console.log(t);const i=r.target.value.toLowerCase();t.forEach(s=>{const o=s,c=o.getFilterableValue().toLowerCase().includes(i);console.log(i),console.log(o.getFilterableValue()),console.log(c),o.setVisible(c)})}};_e.styles=P`
    :host {
      margin-top: 40px;
      display: block;
      margin-bottom: 100px;
    }

    .row {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 75px;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px
    }

    .filter {
      margin-top: 15px;
      margin-left: 20px;
      margin-rigth: 20px;
    }

    input {
      width: 380px;
      margin-left: 20px;
      margin-bottom: 20px;
      padding: 5px;
      font-size: 16px;
      border: 2px solid darkGreen;
      border-radius: 4px;
    }
    
    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-left: 20px;
      margin-top: 20px;
    }
  `;Tt([ar({selector:'[slot="item"]'})],_e.prototype,"items",2);_e=Tt([S("filter-control")],_e);var ri=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,be=(r,e,t,i)=>{for(var n=i>1?void 0:i?ii(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ri(e,t,n),n};let V=class extends y{constructor(){super(...arguments),this.title="",this.imageUrl="",this.link=""}getFilterableValue(){return this.title}setVisible(r){this.style.display=r?"block":"none"}render(){return f`
      <a href="${this.link}">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="content">
          <div class="title">${this.title}</div>
        </div>
      </a>
    `}};V.styles=P`
    :host {
      display: block;
      width: 400px; /* Adjust width as needed */
      margin-top: 100px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.2s ease-in-out;
    }

    :host(:hover) {
      transform: scale(1.05);
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      width: 100%;
      height: 150px; /* Adjust height as needed */
      object-fit: cover; /* Ensure the image covers the area */
    }

    .content {
      padding: 15px;
      background: #f0f0f0; /* Light grey background, adjust as needed */
    }

    .title {
      margin-top: 10px;
      font-size: 16px; /* Adjust size as needed */
      color: #333; /* Dark grey text color */
      text-align: center;
    }
  `;be([_({type:String})],V.prototype,"title",2);be([_({type:String})],V.prototype,"imageUrl",2);be([_({type:String})],V.prototype,"link",2);V=be([S("cuisine-card")],V);const at=window.location.origin+"/api";function j(r){return console.log(at),`${at}${r}`}var ni=Object.defineProperty,si=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var n=i>1?void 0:i?si(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ni(e,t,n),n};let ve=class extends y{constructor(){super(...arguments),this.recipes=[],this.searchTerm=""}render(){var r;return f`
      <div>
        <header-nav username=${(r=g.profile)==null?void 0:r.email}></header-nav>
        <h1>Cal Poly Cookbook</h1>
        <div class="home">
          <h2>Search All Recipes with a keyword:</h2>
          <form @submit="${this.handleSubmit}">
            <input type="text" placeholder="Search Term" .value="${this.searchTerm}" @input="${e=>this.searchTerm=e.target.value}" required>
            <button type="submit">Search</button>
          </form>
        </div>
        <filter-control>
          ${this.recipes.map(e=>f`
              <recipe-card slot="item" title=${e.title} text=${e.description} ingredients=${e.ingredients} instructions=${e.instructions} recipeImage=${e.recipeImage} .save="${()=>{this.saveRecipe(e._id||"")}}" .showSave=${!0}></recipe-card>
              `)}
        </filter-control>
      </div>
      `}static get styles(){return P`
      .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h1 {
        color: darkGreen;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      h2 {
        margin-left: 20px;
        margin-bottom: 20px;
      }
      form {
        align-self: flex-center;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        gap: 10px;
      }
      input {
        width: 200px;
        padding: 5px;
        font-size: 16px;
        border: 2px solid darkGreen;
        border-radius: 4px;
      }
      button {
        padding: 5px;
        border-radius: 7px;
        border: 2px solid darkGreen;
        background: none;
        font-size: 16px;
        curser: pointer;
        transition: all 0.3s ease;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }
      button:hover {
        background-color: lightGrey;
      }
      button:active {
        background-color: darkGrey;
      }
    `}saveRecipe(r){return new Promise((e,t)=>{var i;fetch(j("/profiles/"+((i=g.profile)==null?void 0:i.email)+"/recipe"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({recipeId:r})}).then(n=>n.ok?n.json():null).then(n=>{e(n),g.profile&&(g.profile.recipes=[...g.profile.recipes,r],x.go("/app/recipes"))}).catch(n=>{console.error("Put error:",n),t(n)})})}handleSubmit(r){r.preventDefault(),this.searchRecipes(this.searchTerm)}searchRecipes(r){return new Promise((e,t)=>{try{fetch(j("/recipes/search/"+r)).then(i=>{if(i.ok)return i.json();throw new Error(`Server responded with ${i.status}: ${i.statusText}`)}).then(i=>{this.recipes=i,e(i)}).catch(i=>{console.error("Search Error:",i),t(i)})}catch(i){console.log("Error: "+i)}})}};je([v()],ve.prototype,"recipes",2);je([v()],ve.prototype,"searchTerm",2);ve=je([S("home-page")],ve);var oi=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,C=(r,e,t,i)=>{for(var n=i>1?void 0:i?ai(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&oi(e,t,n),n};let A=class extends y{constructor(){var r;super(...arguments),this.path="",this.title="",this.description="",this.ingredients="",this.instructions="",this.recipeImage="",this.status="",this.recipes=[],this.recipeIDs=((r=g.profile)==null?void 0:r.recipes)||[]}render(){var r;return f`
      <div>
        <header-nav username=${(r=g.profile)==null?void 0:r.email}></header-nav>
        <h1>My Recipes</h1>
        <section class="Recipes">
          <div class="RecipeRow">
            ${this.recipes.map(e=>f`<recipe-card slot="item" title=${e.title} text=${e.description} ingredients=${e.ingredients} instructions=${e.instructions} recipeImage=${e.recipeImage} .save="${()=>{this.removeRecipe(e._id||"")}}" .showSave=${!1}></recipe-card>`)}
          </div>
        </section>
        <h2>Create Recipe:<h2>
        <form @submit="${this.addRecipe}">
          <div class="leftForm">
            <input type="text" placeholder="Title" .value="${this.title}" @input="${e=>this.title=e.target.value}" required>
            <input type="text" placeholder="Description" class="desc" .value="${this.description}" @input="${e=>this.description=e.target.value}" required>
            <input name="photo" type="file" @change="${this._handlePhotoSelected}"/>
            ${this.recipeImage!=""?f`<img class="photo" src=${this.recipeImage}/>`:""}
          </div>
          <textarea id="paragraphInput" rows="10" cols="50" placeholder="Add a list of ingredients" .value="${this.ingredients}" @input="${e=>this.ingredients=e.target.value}" required></textarea>
          <textarea id="paragraphInput" rows="10" cols="50" placeholder="Add a list of instructions" .value="${this.instructions}" @input="${e=>this.instructions=e.target.value}" required></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
      `}static get styles(){return P`
      h1 {
        color: darkGreen;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      h2 {
        margin-left: 30px;
        margin-bottom: 20px;
        margin-top: 50px;
      }

      form {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: 100px;
        gap: 20px;
      }

      .photo {
        width: 200px;
      }

      .leftForm {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .desc {
        width: 400px;
      }

      .recipe {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding-bottom: 30px;
      }
      
      .Recipes {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .RecipeRow {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 75px;
      }

      input {
        width: 200px;
        padding: 5px;
        font-size: 16px;
        border: 2px solid darkGreen;
        border-radius: 4px;
      }
      button {
        padding: 5px;
        border-radius: 7px;
        border: 2px solid darkGreen;
        background: none;
        font-size: 16px;
        curser: pointer;
        transition: all 0.3s ease;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }
      button:hover {
        background-color: lightGrey;
      }
      button:active {
        background-color: darkGrey;
      }

      textArea {
        width: 300px;
        height: 300px;
        overflow-y: auto;
        resize: none;
        padding: 10px;
        border: 2px solid darkGreen;
        border-radius: 4px;
        font-size: 14px;
        font: arial;
      }
    `}async fetchData(){if(g.profile){const r=g.profile.recipes.map(e=>fetch(j("/recipes/"+e)).then(t=>{if(t.ok)return t.json();throw new Error(`Failed to fetch recipe with ID ${e}`)}).catch(t=>(console.error("Fetch error for recipe ID "+e+":",t),null)));try{const e=await Promise.all(r);this.recipes=e.filter(t=>t!==null),console.log("Fetched all recipes")}catch(e){console.error("Error fetching recipes:",e)}}}connectedCallback(){super.connectedCallback(),this.fetchData()}removeRecipe(r){return new Promise((e,t)=>{var i;fetch(j("/profiles/"+((i=g.profile)==null?void 0:i.email)+"/remove-recipe"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({recipeId:r})}).then(n=>n.ok?n.json():null).then(n=>{console.log("Removed recipe: "+r),e(n),g.profile&&(g.profile.recipes=g.profile.recipes.filter(s=>s!==r)),this.fetchData()}).catch(n=>{console.error("Put error:",n),t(n)})})}async addRecipe(r){r.preventDefault();const e={title:this.title,description:this.description,ingredients:this.ingredients,instructions:this.instructions,recipeImage:this.recipeImage};try{const t=await this.putData(e);if(this.status="Recipe Added",console.log("Recipe Added!"),t&&g.profile)try{await this.profileUpdate(g.profile.email,t),console.log("Profile updated with new recipe ID"),g.profile.recipes=[...g.profile.recipes,t],this.fetchData(),this.title="",this.description="",this.ingredients="",this.instructions="",this.recipeImage=""}catch(i){console.error("Error mapping recipe to profile:",i)}}catch(t){console.error("Error Adding Recipe:",t),this.status="Recipe addition Unsuccessful"}}putData(r){return new Promise((e,t)=>{fetch(j("/recipes/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(i=>i.ok?i.json():null).then(i=>{e(i._id)}).catch(i=>{console.error("Put error:",i),t(i)})})}profileUpdate(r,e){return new Promise((t,i)=>{fetch(j("/profiles/"+r+"/recipe"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({recipeId:e})}).then(n=>n.ok?n.json():null).then(n=>{t(n)}).catch(n=>{console.error("Put error:",n),i(n)})})}_handlePhotoSelected(r){const t=r.target.files[0];new Promise((n,s)=>{const o=new FileReader;o.onload=()=>n(o.result),o.onerror=c=>s(c),o.readAsDataURL(t)}).then(n=>{this.recipeImage=n}).catch(n=>{console.error("Error reading file:",n)})}};C([_()],A.prototype,"path",2);C([v()],A.prototype,"title",2);C([v()],A.prototype,"description",2);C([v()],A.prototype,"ingredients",2);C([v()],A.prototype,"instructions",2);C([v()],A.prototype,"recipeImage",2);C([v()],A.prototype,"status",2);C([v()],A.prototype,"recipes",2);C([v()],A.prototype,"recipeIDs",2);A=C([S("recipe-page")],A);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,hi=(r,e,t,i)=>{for(var n=i>1?void 0:i?ci(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&li(e,t,n),n};let lt=class extends y{render(){var r,e;return f`
      <div>
        <header-nav username="NicholasMicali"></header-nav>
        <h1>My Profile</h1>
        <div>${((r=g.profile)==null?void 0:r.name)??"N/A"}</div>
        <div>${((e=g.profile)==null?void 0:e.email)??"N/A"}</div>
      </div>
      `}static get styles(){return P`
      h1 {
        background-color: blue;
        color: white;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      h2 {
        margin-left: 30px;
        margin-bottom: 20px;
      }
    `}};lt=hi([S("profile-page")],lt);var pi=Object.defineProperty,di=Object.getOwnPropertyDescriptor,D=(r,e,t,i)=>{for(var n=i>1?void 0:i?di(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&pi(e,t,n),n};let R=class extends y{constructor(){super(...arguments),this.email="",this.password="",this.confirmPassword="",this.name="",this.isSigningUp=!1,this.status=""}render(){return f`
      <div class="loginPage">
        <h1>Welcome to the Cal Poly Cookbook</h1>
        <img class="CB" src="/images/CPCB.png" alt="CPCB"></img>
        <div class="tabs">
          ${this.isSigningUp?f`
            <div class="row">
              <div>Already have an account?</div>
              <button @click="${()=>this.isSigningUp=!1}">Login</button>
            </div>
          `:""}
          ${this.isSigningUp?"":f`
            <div class="row">
              <div>Don't have an account?</div>
              <button @click="${()=>this.isSigningUp=!0}">Sign Up</button>
            </div>
          `}
        </div>
      
        ${this.isSigningUp?this.renderSignUp():this.renderLogin()}

        <h2>${this.status}</h2>
      </div>
    `}renderLogin(){return f`
      <form @submit="${this.login}">
        <input type="email" placeholder="Email" .value="${this.email}" @input="${r=>this.email=r.target.value}" required>
        <input type="password" placeholder="Password" .value="${this.password}" @input="${r=>this.password=r.target.value}" required>
        <button type="submit">Login</button>
      </form>
    `}renderSignUp(){return f`
      <form @submit="${this.signup}">
        <input type="text" placeholder="Username" .value="${this.name}" @input="${r=>this.name=r.target.value}" required>
        <input type="email" placeholder="Email" .value="${this.email}" @input="${r=>this.email=r.target.value}" required>
        <input type="password" placeholder="Password" .value="${this.password}" @input="${r=>this.password=r.target.value}" required>
        <input type="password" placeholder="Confirm Password" .value="${this.confirmPassword}" @input="${r=>this.confirmPassword=r.target.value}" required>
        <button type="submit">Sign Up</button>
      </form>
    `}async login(r){r.preventDefault();try{await this.fetchData(this.email,this.password),this.profile?(g.setProfile(this.profile),x.go("/app/home")):this.status="incorrect password"}catch(e){console.error("Error logging in:",e)}}fetchData(r,e){return new Promise((t,i)=>{fetch(j("/profiles/auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:e})}).then(n=>n.status===200?n.json():null).then(n=>{n&&(this.profile=n),t(n)}).catch(n=>{console.error("Fetch error:",n),i(n)})})}async signup(r){r.preventDefault();const e={email:this.email,name:this.name,password:this.password,recipes:[]};try{await this.putData(e),this.status="Sign Up Successful",console.log("Signed Up!"),this.isSigningUp=!1}catch(t){console.error("Error Signing Up:",t),this.status="Sign Up Unsuccessful"}}putData(r){return new Promise((e,t)=>{fetch(j("/profiles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(i=>i.ok?i.json():null).then(i=>{this.profile=i,e(i)}).catch(i=>{console.error("Post error:",i),t(i)})})}};R.styles=P`
    .loginPage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .CB {
      width: 300px;
      height: 300px;
      margin-bottom: 80px;
    }

    .tabs {
      margin-bottom: 10px;
    }

    .row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }

    h1 {
      color: darkGreen;
      padding: 10px;
      text-align: center;
      margin-bottom: 30px;
    }

    input {
      width: 200px;
      padding: 5px;
      font-size: 16px;
      border: 2px solid darkGreen;
      border-radius: 4px;
    }
    button {
      padding: 5px;
      border-radius: 7px;
      border: 2px solid darkGreen;
      background: none;
      font-size: 16px;
      curser: pointer;
      transition: all 0.3s ease;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    button:hover {
      background-color: lightGrey;
    }
    button:active {
      background-color: darkGrey;
    }
  `;D([v()],R.prototype,"email",2);D([v()],R.prototype,"password",2);D([v()],R.prototype,"confirmPassword",2);D([v()],R.prototype,"name",2);D([v()],R.prototype,"isSigningUp",2);D([v()],R.prototype,"status",2);D([v()],R.prototype,"profile",2);R=D([S("login-page")],R);var ui=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,gi=(r,e,t,i)=>{for(var n=i>1?void 0:i?fi(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ui(e,t,n),n};let ct=class extends y{firstUpdated(){var e;new x((e=this.shadowRoot)==null?void 0:e.querySelector("#outlet")).setRoutes([{path:"/app/",component:"login-page"},{path:"/app/home",component:"home-page"},{path:"/app/profile",component:"profile-page"},{path:"/app/recipes",component:"recipe-page"}])}render(){return f`
      <div>
        <div id="outlet"></div>
      </div>
    `}static get styles(){return P`
      /* Your CSS styles */
    `}};ct=gi([S("main-app")],ct);
