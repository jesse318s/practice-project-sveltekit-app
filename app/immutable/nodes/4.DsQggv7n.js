import{s as he,n as Z,d as pe,o as ge,f as ve,r as ye}from"../chunks/scheduler.BoReh3vH.js";import{S as _e,i as me,e as b,s as R,t as P,c as C,a as D,y as q,f as E,b as V,d as x,o as T,g as A,h as p,j as X,B as Y,A as H,n as F,l as Q,m as ke,k as $,u as Ie,v as xe,w as we,x as be,q as Ce}from"../chunks/index.BklZDJd0.js";import{e as z}from"../chunks/each.D6YF6ztN.js";import{s as J,r as W}from"../chunks/relics.CGlwEWe2.js";import{i as ee,a as te}from"../chunks/store.Cn0GNUQE.js";import{b as Se,g as Ge}from"../chunks/entry.B5RLgRgG.js";const j=[{id:1,stageId:1,rocks:[{x:1,y:1},{x:0,y:3}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3},{x:4,y:1}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2},{x:2,y:3}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:3,spawn:{x:1,y:4}}]}];function le(n,e,l){const t=n.slice();return t[7]=e[l],t}function ie(n){let e;return{c(){e=P("Active")},l(l){e=V(l,"Active")},m(l,t){A(l,e,t)},d(l){l&&x(e)}}}function ne(n){let e,l="Buy",t,i;function o(){return n[5](n[7])}return{c(){e=b("button"),e.textContent=l},l(r){e=C(r,"BUTTON",{"data-svelte-h":!0}),q(e)!=="svelte-yl076z"&&(e.textContent=l)},m(r,y){A(r,e,y),t||(i=H(e,"click",o),t=!0)},p(r,y){n=r},d(r){r&&x(e),t=!1,i()}}}function re(n){let e,l,t,i,o,r=n[7].name+"",y,S,I,u,_,h=n[7].description+"",c,s,g,w,G=n[7].price+"",B,U,v,m,d=n[7].id===n[1].id&&ie(),a=n[7].id!==n[1].id&&ne(n);return{c(){e=b("div"),l=b("img"),i=R(),o=b("h3"),y=P(r),S=R(),I=b("p"),d&&d.c(),u=R(),_=b("p"),c=P(h),s=R(),g=b("p"),w=P("Price: "),B=P(G),U=P(" drachmas"),v=R(),a&&a.c(),m=R(),this.h()},l(k){e=C(k,"DIV",{class:!0});var f=D(e);l=C(f,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=E(f),o=C(f,"H3",{});var N=D(o);y=V(N,r),N.forEach(x),S=E(f),I=C(f,"P",{class:!0});var O=D(I);d&&d.l(O),O.forEach(x),u=E(f),_=C(f,"P",{});var L=D(_);c=V(L,h),L.forEach(x),s=E(f),g=C(f,"P",{});var K=D(g);w=V(K,"Price: "),B=V(K,G),U=V(K," drachmas"),K.forEach(x),v=E(f),a&&a.l(f),m=E(f),f.forEach(x),this.h()},h(){pe(l.src,t=Se+"/game/"+n[7].img)||T(l,"src",t),T(l,"width","46px"),T(l,"height","46px"),T(l,"alt",n[7].name),T(l,"class","svelte-10kmyxf"),T(I,"class","active"),T(e,"class","menu-item svelte-10kmyxf")},m(k,f){A(k,e,f),p(e,l),p(e,i),p(e,o),p(o,y),p(e,S),p(e,I),d&&d.m(I,null),p(e,u),p(e,_),p(_,c),p(e,s),p(e,g),p(g,w),p(g,B),p(g,U),p(e,v),a&&a.m(e,null),p(e,m)},p(k,f){k[7].id===k[1].id?d||(d=ie(),d.c(),d.m(I,null)):d&&(d.d(1),d=null),k[7].id!==k[1].id?a?a.p(k,f):(a=ne(k),a.c(),a.m(e,m)):a&&(a.d(1),a=null)},d(k){k&&x(e),d&&d.d(),a&&a.d()}}}function Re(n){let e,l,t="Relic Store",i,o,r,y,S,I,u=z(n[2]),_=[];for(let h=0;h<u.length;h+=1)_[h]=re(le(n,u,h));return{c(){e=b("div"),l=b("h2"),l.textContent=t,i=R(),o=b("p"),r=P("Drachmas: "),y=P(n[0]),S=R(),I=b("div");for(let h=0;h<_.length;h+=1)_[h].c();this.h()},l(h){e=C(h,"DIV",{class:!0});var c=D(e);l=C(c,"H2",{"data-svelte-h":!0}),q(l)!=="svelte-6gh0hs"&&(l.textContent=t),i=E(c),o=C(c,"P",{});var s=D(o);r=V(s,"Drachmas: "),y=V(s,n[0]),s.forEach(x),S=E(c),I=C(c,"DIV",{});var g=D(I);for(let w=0;w<_.length;w+=1)_[w].l(g);g.forEach(x),c.forEach(x),this.h()},h(){T(e,"class","menu svelte-10kmyxf")},m(h,c){A(h,e,c),p(e,l),p(e,i),p(e,o),p(o,r),p(o,y),p(e,S),p(e,I);for(let s=0;s<_.length;s+=1)_[s]&&_[s].m(I,null)},p(h,[c]){if(c&1&&X(y,h[0]),c&14){u=z(h[2]);let s;for(s=0;s<u.length;s+=1){const g=le(h,u,s);_[s]?_[s].p(g,c):(_[s]=re(g),_[s].c(),_[s].m(I,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=u.length}},i:Z,o:Z,d(h){h&&x(e),Y(_,h)}}}function Ee(n,e,l){let{drachmas:t}=e,{chosenRelic:i}=e,{curGridId:o}=e;const r=J.find(u=>u.id===j.find(_=>_.id===o).stageId),y=W.filter(u=>u.stageId===r.id),S=u=>{try{if(t>=u.price){l(0,t-=u.price),localStorage.setItem("drachmas",t),l(1,i=u),localStorage.setItem("chosenRelicId",u.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(_){console.error(_)}},I=u=>S(u);return n.$$set=u=>{"drachmas"in u&&l(0,t=u.drachmas),"chosenRelic"in u&&l(1,i=u.chosenRelic),"curGridId"in u&&l(4,o=u.curGridId)},[t,i,y,S,o,I]}class De extends _e{constructor(e){super(),me(this,e,Ee,Re,he,{drachmas:0,chosenRelic:1,curGridId:4})}}function se(n,e,l){const t=n.slice();return t[17]=e[l],t[19]=l,t}function ae(n,e,l){const t=n.slice();return t[17]=e[l],t[21]=l,t}function oe(n){let e,l,t,i,o,r,y,S="←",I,u,_,h="↑",c,s,g="↓",w,G,B="→",U,v,m=z(Array(M)),d=[];for(let a=0;a<m.length;a+=1)d[a]=de(se(n,m,a));return{c(){e=b("h2"),l=P(n[2]),t=R(),i=b("div");for(let a=0;a<d.length;a+=1)d[a].c();o=R(),r=b("div"),y=b("button"),y.textContent=S,I=R(),u=b("div"),_=b("button"),_.textContent=h,c=R(),s=b("button"),s.textContent=g,w=R(),G=b("button"),G.textContent=B,this.h()},l(a){e=C(a,"H2",{});var k=D(e);l=V(k,n[2]),k.forEach(x),t=E(a),i=C(a,"DIV",{class:!0});var f=D(i);for(let L=0;L<d.length;L+=1)d[L].l(f);f.forEach(x),o=E(a),r=C(a,"DIV",{class:!0});var N=D(r);y=C(N,"BUTTON",{"data-svelte-h":!0}),q(y)!=="svelte-1h6m8u8"&&(y.textContent=S),I=E(N),u=C(N,"DIV",{class:!0});var O=D(u);_=C(O,"BUTTON",{"data-svelte-h":!0}),q(_)!=="svelte-1un4tkd"&&(_.textContent=h),c=E(O),s=C(O,"BUTTON",{"data-svelte-h":!0}),q(s)!=="svelte-16pn8vi"&&(s.textContent=g),O.forEach(x),w=E(N),G=C(N,"BUTTON",{"data-svelte-h":!0}),q(G)!=="svelte-87vidd"&&(G.textContent=B),N.forEach(x),this.h()},h(){T(i,"class","grid svelte-lcty9u"),T(u,"class","svelte-lcty9u"),T(r,"class","button-row svelte-lcty9u")},m(a,k){A(a,e,k),p(e,l),A(a,t,k),A(a,i,k);for(let f=0;f<d.length;f+=1)d[f]&&d[f].m(i,null);A(a,o,k),A(a,r,k),p(r,y),p(r,I),p(r,u),p(u,_),p(u,c),p(u,s),p(r,w),p(r,G),U||(v=[H(y,"click",n[8]),H(_,"click",n[9]),H(s,"click",n[10]),H(G,"click",n[11])],U=!0)},p(a,k){if(k&4&&X(l,a[2]),k&67){m=z(Array(M));let f;for(f=0;f<m.length;f+=1){const N=se(a,m,f);d[f]?d[f].p(N,k):(d[f]=de(N),d[f].c(),d[f].m(i,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=m.length}},d(a){a&&(x(e),x(t),x(i),x(o),x(r)),Y(d,a),U=!1,ye(v)}}}function ce(n){let e,l;return{c(){e=b("div"),this.h()},l(t){e=C(t,"DIV",{class:!0}),D(e).forEach(x),this.h()},h(){T(e,"class",l="cell "+n[6](n[21],n[19],n[0],n[1])+" svelte-lcty9u")},m(t,i){A(t,e,i)},p(t,i){i&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-lcty9u")&&T(e,"class",l)},d(t){t&&x(e)}}}function de(n){let e,l=z(Array(M)),t=[];for(let i=0;i<l.length;i+=1)t[i]=ce(ae(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=$()},l(i){for(let o=0;o<t.length;o+=1)t[o].l(i);e=$()},m(i,o){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,o);A(i,e,o)},p(i,o){if(o&67){l=z(Array(M));let r;for(r=0;r<l.length;r+=1){const y=ae(i,l,r);t[r]?t[r].p(y,o):(t[r]=ce(y),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&x(e),Y(t,i)}}}function fe(n){let e,l="Battle",t,i;return{c(){e=b("button"),e.textContent=l},l(o){e=C(o,"BUTTON",{"data-svelte-h":!0}),q(e)!=="svelte-17w86ff"&&(e.textContent=l)},m(o,r){A(o,e,r),t||(i=H(e,"click",n[13]),t=!0)},d(o){o&&x(e),t=!1,i()}}}function ue(n){let e,l;return e=new De({props:{drachmas:n[4],chosenRelic:n[5],curGridId:n[1]}}),{c(){Ie(e.$$.fragment)},l(t){xe(e.$$.fragment,t)},m(t,i){we(e,t,i),l=!0},p(t,i){const o={};i&16&&(o.drachmas=t[4]),i&32&&(o.chosenRelic=t[5]),i&2&&(o.curGridId=t[1]),e.$set(o)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){be(e,t)}}}function Te(n){let e,l,t,i,o=n[3]?"Close Relic Store":"Relic Store",r,y,S,I,u,_,h=!n[3]&&oe(n),c=!n[3]&&fe(n),s=n[3]&&ue(n);return{c(){e=b("div"),h&&h.c(),l=R(),t=b("div"),i=b("button"),r=P(o),y=R(),c&&c.c(),S=R(),s&&s.c(),this.h()},l(g){e=C(g,"DIV",{class:!0});var w=D(e);h&&h.l(w),l=E(w),t=C(w,"DIV",{class:!0});var G=D(t);i=C(G,"BUTTON",{});var B=D(i);r=V(B,o),B.forEach(x),y=E(G),c&&c.l(G),G.forEach(x),S=E(w),s&&s.l(w),w.forEach(x),this.h()},h(){T(t,"class","button-row svelte-lcty9u"),T(e,"class","game-container svelte-lcty9u")},m(g,w){A(g,e,w),h&&h.m(e,null),p(e,l),p(e,t),p(t,i),p(i,r),p(t,y),c&&c.m(t,null),p(e,S),s&&s.m(e,null),I=!0,u||(_=H(i,"click",n[12]),u=!0)},p(g,[w]){g[3]?h&&(h.d(1),h=null):h?h.p(g,w):(h=oe(g),h.c(),h.m(e,l)),(!I||w&8)&&o!==(o=g[3]?"Close Relic Store":"Relic Store")&&X(r,o),g[3]?c&&(c.d(1),c=null):c||(c=fe(g),c.c(),c.m(t,null)),g[3]?s?(s.p(g,w),w&8&&F(s,1)):(s=ue(g),s.c(),F(s,1),s.m(e,null)):s&&(Ce(),Q(s,1,1,()=>{s=null}),ke())},i(g){I||(F(s),I=!0)},o(g){Q(s),I=!1},d(g){g&&x(e),h&&h.d(),c&&c.d(),s&&s.d(),u=!1,_()}}}const M=5;function Ae(n,e,l){let t={x:2,y:2},i=1,o=J[0].name,r=!1,y=0,S=0,I=W[0];const u=v=>{v.key==="ArrowUp"&&(v.preventDefault(),c("up")),v.key==="ArrowDown"&&(v.preventDefault(),c("down")),v.key==="ArrowLeft"&&(v.preventDefault(),c("left")),v.key==="ArrowRight"&&(v.preventDefault(),c("right"))},_=(v,m,d,a)=>{try{if(d.x===v&&d.y===m)return"player";const k=j.find(f=>f.id===a);return k.rocks.find(f=>f.x===v&&f.y===m)?"rock":k.exits.find(f=>f.x===v&&f.y===m)?"exit":""}catch(k){console.error(k)}},h=()=>{const v=j.find(d=>d.id===i).exits.find(d=>d.x===t.x&&d.y===t.y),m=J.find(d=>d.id===j.find(a=>a.id===v.destGridId).stageId);if(y<m.expReq){alert("Not enough experience to use portal! (Requires "+m.expReq+" experience)");return}v&&(l(1,i=v.destGridId),localStorage.setItem("curStageId",m.id),l(2,o=m.name),l(0,t=v.spawn))},c=v=>{try{let m={...t};if(v==="up"&&(m.y-=1),v==="down"&&(m.y+=1),v==="left"&&(m.x-=1),v==="right"&&(m.x+=1),m.x<0||m.x>=M||m.y<0||m.y>=M)return;const d=j.find(a=>a.id===i);d.rocks.find(a=>a.x===m.x&&a.y===m.y)||l(0,t=m),d.exits.find(a=>a.x===t.x&&a.y===t.y)&&h()}catch(m){console.error(m)}};return ge(()=>{if(ee.set(!0),te.set(!0),localStorage.getItem("curStageId")){const v=J.find(m=>m.id===parseInt(localStorage.getItem("curStageId")));l(1,i=parseInt(j.find(m=>m.stageId===v.id).id)),l(2,o=v.name)}localStorage.getItem("playerExperience")&&(y=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,S=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,I=W.find(v=>v.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",u)}),ve(()=>{ee.set(!1),te.set(!1),typeof window<"u"&&window.removeEventListener("keydown",u)}),[t,i,o,r,S,I,_,c,()=>c("left"),()=>c("up"),()=>c("down"),()=>c("right"),()=>l(3,r=!r),()=>Ge("/practice-project-sveltekit-app/game")]}class qe extends _e{constructor(e){super(),me(this,e,Ae,Te,he,{})}}export{qe as component};
