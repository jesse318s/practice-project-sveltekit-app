function S(){}function T(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function J(){return Object.create(null)}function q(t){t.forEach(C)}function K(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function V(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function X(t){return Object.keys(t).length===0}function H(t,...n){if(t==null){for(const i of n)i(void 0);return S}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Y(t,n,e){t.$$.on_destroy.push(H(n,e))}function Z(t,n,e,i){if(t){const r=w(t,n,e,i);return t[0](r)}}function w(t,n,e,i){return t[1]&&i?T(e.ctx.slice(),t[1](i(n))):e.ctx}function $(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function tt(t,n,e,i,r,u){if(r){const c=w(n,e,i,u);t.p(c,r)}}function nt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function et(t){return t??""}let p=!1;function it(){p=!0}function rt(){p=!1}function P(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function B(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:P(1,r,D=>n[e[D]].claim_order,o))-1;i[l]=e[a]+1;const v=a+1;e[v]=l,r=Math.max(v,r)}const u=[],c=[];let s=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<u.length&&c[l].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(c[l],a)}}function L(t,n){if(p){for(B(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ct(t,n,e){p&&!e?L(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function ut(){return E(" ")}function ot(){return E("")}function at(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _t(t){return t.dataset.svelteH}function dt(t){return Array.from(t.childNodes)}function O(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){O(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const l=e(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function ht(t,n,e){return z(t,n,e,M)}function F(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>E(n),!0)}function mt(t){return F(t," ")}function pt(t,n){n=""+n,t.data!==n&&(t.data=n)}function yt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function bt(t,n,e){t.classList.toggle(n,!!e)}function I(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function gt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(r)):u===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function xt(t,n){return new t(n)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Et(t){y().$$.on_mount.push(t)}function vt(t){y().$$.after_update.push(t)}function Nt(t){y().$$.on_destroy.push(t)}function kt(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=I(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],N=[];let _=[];const k=[],j=Promise.resolve();let x=!1;function R(){x||(x=!0,j.then(W))}function wt(){return R(),j}function U(t){_.push(t)}const g=new Set;let f=0;function W(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,b(n),G(n.$$)}}catch(n){throw d.length=0,f=0,n}for(b(null),d.length=0,f=0;N.length;)N.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];g.has(e)||(g.add(e),e())}_.length=0}while(d.length);for(;k.length;)k.pop()();x=!1,g.clear(),b(t)}function G(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function At(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{X as A,U as B,At as C,m as D,b as E,C as F,d as G,R as H,it as I,rt as J,V as K,bt as L,et as M,_t as N,at as O,Nt as P,Z as Q,gt as R,tt as S,nt as T,$ as U,kt as V,st as W,ut as a,dt as b,ht as c,F as d,M as e,lt as f,mt as g,L as h,ct as i,pt as j,Y as k,ot as l,vt as m,S as n,Et as o,ft as p,yt as q,N as r,Q as s,E as t,xt as u,wt as v,q as w,J as x,W as y,K as z};