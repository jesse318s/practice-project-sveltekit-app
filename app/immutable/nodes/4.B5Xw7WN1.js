import{s as he,n as Z,d as pe,o as ve,f as ge,r as ye}from"../chunks/scheduler.BoReh3vH.js";import{S as _e,i as me,e as C,s as R,t as P,c as x,a as D,y as O,f as G,b as U,d as k,o as T,g as A,h as _,j as X,B as Y,A as z,n as F,l as Q,m as ke,k as $,u as we,v as Ie,w as be,x as Ce,q as xe}from"../chunks/index.BklZDJd0.js";import{e as H}from"../chunks/each.D6YF6ztN.js";import{r as W,s as K}from"../chunks/relics.CGlwEWe2.js";import{i as ee,a as te}from"../chunks/store.Cn0GNUQE.js";import{b as Se,g as Ee}from"../chunks/entry.skcxBGpn.js";const J=[{id:1,rocks:[{x:1,y:1},{x:3,y:3},{x:0,y:3}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,rocks:[{x:1,y:3},{x:4,y:1}],exits:[{x:0,y:4,destGridId:1,spawn:{x:4,y:0}},{x:4,y:0,destGridId:1,spawn:{x:0,y:4}},{x:2,y:0,destGridId:1,spawn:{x:2,y:4}}]}];function le(n,e,l){const t=n.slice();return t[6]=e[l],t}function ie(n){let e;return{c(){e=P("Active")},l(l){e=U(l,"Active")},m(l,t){A(l,e,t)},d(l){l&&k(e)}}}function ne(n){let e,l="Buy",t,i;function o(){return n[5](n[6])}return{c(){e=C("button"),e.textContent=l},l(r){e=x(r,"BUTTON",{"data-svelte-h":!0}),O(e)!=="svelte-yl076z"&&(e.textContent=l)},m(r,y){A(r,e,y),t||(i=z(e,"click",o),t=!0)},p(r,y){n=r},d(r){r&&k(e),t=!1,i()}}}function re(n){let e,l,t,i,o,r=n[6].name+"",y,S,u,I,m,d=n[6].description+"",c,s,v,b,E=n[6].price+"",B,V,g,p,h=n[6].id===n[1].id&&ie(),a=n[6].id!==n[1].id&&ne(n);return{c(){e=C("div"),l=C("img"),i=R(),o=C("h3"),y=P(r),S=R(),u=C("p"),h&&h.c(),I=R(),m=C("p"),c=P(d),s=R(),v=C("p"),b=P("Price: "),B=P(E),V=P(" drachmas"),g=R(),a&&a.c(),p=R(),this.h()},l(w){e=x(w,"DIV",{class:!0});var f=D(e);l=x(f,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=G(f),o=x(f,"H3",{});var N=D(o);y=U(N,r),N.forEach(k),S=G(f),u=x(f,"P",{class:!0});var q=D(u);h&&h.l(q),q.forEach(k),I=G(f),m=x(f,"P",{});var L=D(m);c=U(L,d),L.forEach(k),s=G(f),v=x(f,"P",{});var M=D(v);b=U(M,"Price: "),B=U(M,E),V=U(M," drachmas"),M.forEach(k),g=G(f),a&&a.l(f),p=G(f),f.forEach(k),this.h()},h(){pe(l.src,t=Se+"/"+n[6].img)||T(l,"src",t),T(l,"width","46px"),T(l,"height","46px"),T(l,"alt",n[6].name),T(l,"class","svelte-d2hwqd"),T(u,"class","active"),T(e,"class","menu-item svelte-d2hwqd")},m(w,f){A(w,e,f),_(e,l),_(e,i),_(e,o),_(o,y),_(e,S),_(e,u),h&&h.m(u,null),_(e,I),_(e,m),_(m,c),_(e,s),_(e,v),_(v,b),_(v,B),_(v,V),_(e,g),a&&a.m(e,null),_(e,p)},p(w,f){w[6].id===w[1].id?h||(h=ie(),h.c(),h.m(u,null)):h&&(h.d(1),h=null),w[6].id!==w[1].id?a?a.p(w,f):(a=ne(w),a.c(),a.m(e,p)):a&&(a.d(1),a=null)},d(w){w&&k(e),h&&h.d(),a&&a.d()}}}function Re(n){let e,l,t="Relic Store",i,o,r,y,S,u,I=H(n[2]),m=[];for(let d=0;d<I.length;d+=1)m[d]=re(le(n,I,d));return{c(){e=C("div"),l=C("h2"),l.textContent=t,i=R(),o=C("p"),r=P("Drachmas: "),y=P(n[0]),S=R(),u=C("div");for(let d=0;d<m.length;d+=1)m[d].c();this.h()},l(d){e=x(d,"DIV",{class:!0});var c=D(e);l=x(c,"H2",{"data-svelte-h":!0}),O(l)!=="svelte-6gh0hs"&&(l.textContent=t),i=G(c),o=x(c,"P",{});var s=D(o);r=U(s,"Drachmas: "),y=U(s,n[0]),s.forEach(k),S=G(c),u=x(c,"DIV",{});var v=D(u);for(let b=0;b<m.length;b+=1)m[b].l(v);v.forEach(k),c.forEach(k),this.h()},h(){T(e,"class","menu svelte-d2hwqd")},m(d,c){A(d,e,c),_(e,l),_(e,i),_(e,o),_(o,r),_(o,y),_(e,S),_(e,u);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(u,null)},p(d,[c]){if(c&1&&X(y,d[0]),c&14){I=H(d[2]);let s;for(s=0;s<I.length;s+=1){const v=le(d,I,s);m[s]?m[s].p(v,c):(m[s]=re(v),m[s].c(),m[s].m(u,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=I.length}},i:Z,o:Z,d(d){d&&k(e),Y(m,d)}}}function Ge(n,e,l){let{drachmas:t}=e,{chosenRelic:i}=e,{curGridId:o}=e;const r=W.filter(u=>u.stageId===o),y=u=>{if(t>=u.price){l(0,t-=u.price),localStorage.setItem("drachmas",t),l(1,i=u),localStorage.setItem("chosenRelicId",u.id),window.location.reload();return}alert("Not enough drachmas to spend!")},S=u=>y(u);return n.$$set=u=>{"drachmas"in u&&l(0,t=u.drachmas),"chosenRelic"in u&&l(1,i=u.chosenRelic),"curGridId"in u&&l(4,o=u.curGridId)},[t,i,r,y,o,S]}class De extends _e{constructor(e){super(),me(this,e,Ge,Re,he,{drachmas:0,chosenRelic:1,curGridId:4})}}function se(n,e,l){const t=n.slice();return t[17]=e[l],t[19]=l,t}function oe(n,e,l){const t=n.slice();return t[17]=e[l],t[21]=l,t}function ae(n){let e,l,t,i,o,r,y,S="Left",u,I,m,d="Up",c,s,v="Down",b,E,B="Right",V,g,p=H(Array(j)),h=[];for(let a=0;a<p.length;a+=1)h[a]=fe(se(n,p,a));return{c(){e=C("h2"),l=P(n[2]),t=R(),i=C("div");for(let a=0;a<h.length;a+=1)h[a].c();o=R(),r=C("div"),y=C("button"),y.textContent=S,u=R(),I=C("div"),m=C("button"),m.textContent=d,c=R(),s=C("button"),s.textContent=v,b=R(),E=C("button"),E.textContent=B,this.h()},l(a){e=x(a,"H2",{});var w=D(e);l=U(w,n[2]),w.forEach(k),t=G(a),i=x(a,"DIV",{class:!0});var f=D(i);for(let L=0;L<h.length;L+=1)h[L].l(f);f.forEach(k),o=G(a),r=x(a,"DIV",{class:!0});var N=D(r);y=x(N,"BUTTON",{"data-svelte-h":!0}),O(y)!=="svelte-b3x30h"&&(y.textContent=S),u=G(N),I=x(N,"DIV",{class:!0});var q=D(I);m=x(q,"BUTTON",{"data-svelte-h":!0}),O(m)!=="svelte-zcznvd"&&(m.textContent=d),c=G(q),s=x(q,"BUTTON",{"data-svelte-h":!0}),O(s)!=="svelte-1x8a6xp"&&(s.textContent=v),q.forEach(k),b=G(N),E=x(N,"BUTTON",{"data-svelte-h":!0}),O(E)!=="svelte-du436l"&&(E.textContent=B),N.forEach(k),this.h()},h(){T(i,"class","grid svelte-1wyo1eo"),T(I,"class","svelte-1wyo1eo"),T(r,"class","button-row svelte-1wyo1eo")},m(a,w){A(a,e,w),_(e,l),A(a,t,w),A(a,i,w);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(i,null);A(a,o,w),A(a,r,w),_(r,y),_(r,u),_(r,I),_(I,m),_(I,c),_(I,s),_(r,b),_(r,E),V||(g=[z(y,"click",n[8]),z(m,"click",n[9]),z(s,"click",n[10]),z(E,"click",n[11])],V=!0)},p(a,w){if(w&4&&X(l,a[2]),w&67){p=H(Array(j));let f;for(f=0;f<p.length;f+=1){const N=se(a,p,f);h[f]?h[f].p(N,w):(h[f]=fe(N),h[f].c(),h[f].m(i,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=p.length}},d(a){a&&(k(e),k(t),k(i),k(o),k(r)),Y(h,a),V=!1,ye(g)}}}function ce(n){let e,l;return{c(){e=C("div"),this.h()},l(t){e=x(t,"DIV",{class:!0}),D(e).forEach(k),this.h()},h(){T(e,"class",l="cell "+n[6](n[21],n[19],n[0],n[1])+" svelte-1wyo1eo")},m(t,i){A(t,e,i)},p(t,i){i&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-1wyo1eo")&&T(e,"class",l)},d(t){t&&k(e)}}}function fe(n){let e,l=H(Array(j)),t=[];for(let i=0;i<l.length;i+=1)t[i]=ce(oe(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=$()},l(i){for(let o=0;o<t.length;o+=1)t[o].l(i);e=$()},m(i,o){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,o);A(i,e,o)},p(i,o){if(o&67){l=H(Array(j));let r;for(r=0;r<l.length;r+=1){const y=oe(i,l,r);t[r]?t[r].p(y,o):(t[r]=ce(y),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&k(e),Y(t,i)}}}function de(n){let e,l="Battle",t,i;return{c(){e=C("button"),e.textContent=l},l(o){e=x(o,"BUTTON",{"data-svelte-h":!0}),O(e)!=="svelte-17w86ff"&&(e.textContent=l)},m(o,r){A(o,e,r),t||(i=z(e,"click",n[13]),t=!0)},d(o){o&&k(e),t=!1,i()}}}function ue(n){let e,l;return e=new De({props:{drachmas:n[4],chosenRelic:n[5],curGridId:n[1]}}),{c(){we(e.$$.fragment)},l(t){Ie(e.$$.fragment,t)},m(t,i){be(e,t,i),l=!0},p(t,i){const o={};i&16&&(o.drachmas=t[4]),i&32&&(o.chosenRelic=t[5]),i&2&&(o.curGridId=t[1]),e.$set(o)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){Ce(e,t)}}}function Te(n){let e,l,t,i,o=n[3]?"Close Relic Store":"Relic Store",r,y,S,u,I,m,d=!n[3]&&ae(n),c=!n[3]&&de(n),s=n[3]&&ue(n);return{c(){e=C("div"),d&&d.c(),l=R(),t=C("div"),i=C("button"),r=P(o),y=R(),c&&c.c(),S=R(),s&&s.c(),this.h()},l(v){e=x(v,"DIV",{class:!0});var b=D(e);d&&d.l(b),l=G(b),t=x(b,"DIV",{class:!0});var E=D(t);i=x(E,"BUTTON",{});var B=D(i);r=U(B,o),B.forEach(k),y=G(E),c&&c.l(E),E.forEach(k),S=G(b),s&&s.l(b),b.forEach(k),this.h()},h(){T(t,"class","button-row svelte-1wyo1eo"),T(e,"class","game-container svelte-1wyo1eo")},m(v,b){A(v,e,b),d&&d.m(e,null),_(e,l),_(e,t),_(t,i),_(i,r),_(t,y),c&&c.m(t,null),_(e,S),s&&s.m(e,null),u=!0,I||(m=z(i,"click",n[12]),I=!0)},p(v,[b]){v[3]?d&&(d.d(1),d=null):d?d.p(v,b):(d=ae(v),d.c(),d.m(e,l)),(!u||b&8)&&o!==(o=v[3]?"Close Relic Store":"Relic Store")&&X(r,o),v[3]?c&&(c.d(1),c=null):c||(c=de(v),c.c(),c.m(t,null)),v[3]?s?(s.p(v,b),b&8&&F(s,1)):(s=ue(v),s.c(),F(s,1),s.m(e,null)):s&&(xe(),Q(s,1,1,()=>{s=null}),ke())},i(v){u||(F(s),u=!0)},o(v){Q(s),u=!1},d(v){v&&k(e),d&&d.d(),c&&c.d(),s&&s.d(),I=!1,m()}}}const j=5;function Ae(n,e,l){let t={x:2,y:2},i=1,o=K.find(g=>g.id===i).name,r=!1,y=0,S=0,u=W[0];const I=g=>{g.key==="ArrowUp"&&(g.preventDefault(),c("up")),g.key==="ArrowDown"&&(g.preventDefault(),c("down")),g.key==="ArrowLeft"&&(g.preventDefault(),c("left")),g.key==="ArrowRight"&&(g.preventDefault(),c("right"))},m=(g,p,h,a)=>{if(h.x===g&&h.y===p)return"player";const w=J.find(f=>f.id===a);return w.rocks.find(f=>f.x===g&&f.y===p)?"rock":w.exits.find(f=>f.x===g&&f.y===p)?"exit":""},d=()=>{const g=J.find(p=>p.id===i).exits.find(p=>p.x===t.x&&p.y===t.y);if(y<K.find(p=>p.id===g.destGridId).expReq){alert("Not enough experience to enter!");return}g&&(l(1,i=g.destGridId),localStorage.setItem("curStageId",i),l(2,o=K.find(p=>p.id===i).name),l(0,t=g.spawn))},c=g=>{let p={...t};if(g==="up"&&(p.y-=1),g==="down"&&(p.y+=1),g==="left"&&(p.x-=1),g==="right"&&(p.x+=1),p.x<0||p.x>=j||p.y<0||p.y>=j)return;const h=J.find(a=>a.id===i);h.rocks.find(a=>a.x===p.x&&a.y===p.y)||l(0,t=p),h.exits.find(a=>a.x===t.x&&a.y===t.y)&&d()};return ve(()=>{ee.set(!0),te.set(!0),localStorage.getItem("curStageId")&&(l(1,i=parseInt(localStorage.getItem("curStageId"))),l(2,o=K.find(g=>g.id===i).name)),localStorage.getItem("playerExperience")&&(y=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,S=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,u=W.find(g=>g.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",I)}),ge(()=>{ee.set(!1),te.set(!1),typeof window<"u"&&window.removeEventListener("keydown",I)}),[t,i,o,r,S,u,m,c,()=>c("left"),()=>c("up"),()=>c("down"),()=>c("right"),()=>l(3,r=!r),()=>Ee("/practice-project-sveltekit-app/game")]}class Oe extends _e{constructor(e){super(),me(this,e,Ae,Te,he,{})}}export{Oe as component};
