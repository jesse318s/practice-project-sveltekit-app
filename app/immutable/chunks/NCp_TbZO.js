import{K as Y,L as h,e as B,S as M,M as N,N as U,P as x,d as v,O as b,Q as C,R as g,T as G,V,W as Z,X as $,Y as w,q as z,Z as K,_ as Q}from"./BUi6LC3r.js";import{c as W}from"./irZ35E_t.js";function F(r,a,_,l){var L;var R=(_&Q)!==0,d=!U||(_&x)!==0,c=(_&C)!==0,T=(_&K)!==0,E=!1,u;c?[u,E]=W(()=>r[a]):u=r[a];var q=M in r||N in r,s=c&&(((L=Y(r,a))==null?void 0:L.set)??(q&&a in r&&(e=>r[a]=e)))||void 0,n=l,P=!0,S=!1,O=()=>(S=!0,P&&(P=!1,T?n=g(l):n=l),n);u===void 0&&l!==void 0&&(s&&d&&G(a),u=O(),s&&s(u));var i;if(d)i=()=>{var e=r[a];return e===void 0?O():(P=!0,S=!1,e)};else{var A=(R?b:B)(()=>r[a]);A.f|=h,i=()=>{var e=v(A);return e!==void 0&&(n=void 0),e===void 0?n:e}}if((_&V)===0)return i;if(s){var D=r.$$legacy;return function(e,t){return arguments.length>0?((!d||!t||D||E)&&s(t?i():e),e):i()}}var I=!1,m=z(u),f=b(()=>{var e=i(),t=v(m);return I?(I=!1,t):m.v=e});return R||(f.equals=Z),function(e,t){if(arguments.length>0){const o=t?v(f):d&&c?$(e):e;return f.equals(o)||(I=!0,w(m,o),S&&n!==void 0&&(n=o),g(()=>v(f))),e}return v(f)}}export{F as p};
