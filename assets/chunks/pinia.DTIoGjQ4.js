import{i as G}from"./@vueuse/motion.CpyOKRAK.js";import{ak as D,bb as H,aJ as J,aA as $,bV as T,b9 as tt,aF as E,aD as M,bv as et,as as st,am as nt,a_ as ot,aN as ct,bx as rt,U as ut}from"../framework.BKJYaCLv.js";/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let B;const R=t=>B=t,K=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function at(){const t=D(!0),o=t.run(()=>H({}));let s=[],e=[];const r=J({install(u){R(r),r._a=u,u.provide(K,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!G?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const U=()=>{};function V(t,o,s,e=U){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&nt()&&ot(r),r}function p(t,...o){t.slice().forEach(s=>{s(...o)})}const ft=t=>t(),A=Symbol(),I=Symbol();function O(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!M(e)?t[s]=O(r,e):t[s]=e}return t}const it=Symbol();function lt(t){return!L(t)||!t.hasOwnProperty(it)}const{assign:v}=Object;function ht(t){return!!(E(t)&&t.effect)}function bt(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const y=rt(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((S,m)=>(S[m]=J(ut(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),S),{}))}return P=q(t,b,o,s,e,!0),P}function q(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),P={deep:!0};let b,y,S=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),H({});let N;function W(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:w.patchFunction,storeId:t,events:_}):(O(e.state.value[t],c),n={type:w.patchObject,payload:c,storeId:t,events:_});const i=N=Symbol();ct().then(()=>{N===i&&(b=!0)}),y=!0,p(S,n,e.state.value[t])}const z=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{v(j,i)})}:U;function Q(){f.stop(),S=[],m=[],e._s.delete(t)}const F=(c,n="")=>{if(A in c)return c[I]=n,c;const i=function(){R(e);const j=Array.from(arguments),g=[],k=[];function Y(l){g.push(l)}function Z(l){k.push(l)}p(m,{args:j,name:i[I],store:h,after:Y,onError:Z});let x;try{x=c.apply(this&&this.$id===t?this:h,j)}catch(l){throw p(k,l),l}return x instanceof Promise?x.then(l=>(p(g,l),l)).catch(l=>(p(k,l),Promise.reject(l))):(p(g,x),x)};return i[A]=!0,i[I]=n,i},X={_p:e,$id:t,$onAction:V.bind(null,m),$patch:W,$reset:z,$subscribe(c,n={}){const i=V(S,c,n.detached,()=>j()),j=f.run(()=>T(()=>e.state.value[t],g=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:w.direct,events:_},g)},v({},P,n)));return i},$dispose:Q},h=tt(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||ft)(()=>e._e.run(()=>(f=D()).run(()=>o({action:F}))));for(const c in C){const n=C[c];if(E(n)&&!ht(n)||M(n))u||(d&&lt(n)&&(E(n)?n.value=d[c]:O(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=F(n,c);C[c]=i,a.actions[c]=n}}return v(h,C),v(et(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,y=!0,h}/*! #__NO_SIDE_EFFECTS__ */function mt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,P){const b=st();return a=a||(b?$(K,null):null),a&&R(a),a=B,a._s.has(e)||(u?q(e,o,r,a):bt(e,r,a)),a._s.get(e)}return f.$id=e,f}const _t=({isClient:t,initialState:o,app:s})=>{const e=at();s.use(e),t?e.state.value=o.pinia||{}:o.pinia=e.state.value};export{mt as d,_t as i};
