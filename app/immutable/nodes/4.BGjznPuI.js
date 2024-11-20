import{s as ae,n as W,o as ce,d as de,e as ue}from"../chunks/scheduler.DDstejZ8.js";import{S as he,i as _e,e as P,t as T,s as V,c as j,a as C,b as L,d as b,f as N,o as D,g as z,h as _,y as oe,j as F,z as Q,k as X,A as fe}from"../chunks/index.AvM-2yQu.js";import{e as B}from"../chunks/each.D6YF6ztN.js";import{i as Y,a as Z}from"../chunks/store.DpAzdstQ.js";import{s as K,r as J}from"../chunks/relics.Cv7XHiQm.js";import{b as me}from"../chunks/paths.DaYrCeaF.js";const R=[{id:1,rocks:[{x:1,y:1},{x:3,y:3},{x:0,y:4}],vendors:[{x:2,y:1},{x:3,y:3}],exits:[{x:0,y:0,destGrid:2,spawn:{x:4,y:4}},{x:4,y:2,destGrid:2,spawn:{x:0,y:2}},{x:2,y:4,destGrid:2,spawn:{x:2,y:0}}]},{id:2,rocks:[{x:2,y:2},{x:1,y:3},{x:4,y:1}],vendors:[{x:1,y:2}],exits:[{x:0,y:4,destGrid:1,spawn:{x:4,y:0}},{x:4,y:0,destGrid:1,spawn:{x:0,y:4}},{x:2,y:0,destGrid:1,spawn:{x:2,y:4}}]}];function x(t,e,l){const s=t.slice();return s[23]=e[l],s}function $(t,e,l){const s=t.slice();return s[26]=e[l],s[28]=l,s}function ee(t,e,l){const s=t.slice();return s[26]=e[l],s[30]=l,s}function te(t){let e,l=t[0].x===t[30]&&t[0].y===t[28]?"P":R.find(t[7]).rocks.some(f)?"R":R.find(t[9]).vendors.some(m)?"V":R.find(t[11]).exits.some(k)?"E":"",s,i,a;function f(...r){return t[8](t[30],t[28],...r)}function m(...r){return t[10](t[30],t[28],...r)}function k(...r){return t[12](t[30],t[28],...r)}function p(...r){return t[14](t[30],t[28],...r)}function I(...r){return t[16](t[30],t[28],...r)}function u(...r){return t[18](t[30],t[28],...r)}return{c(){e=P("div"),s=T(l),i=V(),this.h()},l(r){e=j(r,"DIV",{class:!0});var h=C(e);s=L(h,l),i=N(h),h.forEach(b),this.h()},h(){D(e,"class",a="cell "+(t[0].x===t[30]&&t[0].y===t[28]?"player":R.find(t[13]).rocks.some(p)?"rock":R.find(t[15]).vendors.some(I)?"vendor":R.find(t[17]).exits.some(u)?"exit":"")+" svelte-bj142i")},m(r,h){z(r,e,h),_(e,s),_(e,i)},p(r,h){t=r,h&3&&l!==(l=t[0].x===t[30]&&t[0].y===t[28]?"P":R.find(t[7]).rocks.some(f)?"R":R.find(t[9]).vendors.some(m)?"V":R.find(t[11]).exits.some(k)?"E":"")&&F(s,l),h&3&&a!==(a="cell "+(t[0].x===t[30]&&t[0].y===t[28]?"player":R.find(t[13]).rocks.some(p)?"rock":R.find(t[15]).vendors.some(I)?"vendor":R.find(t[17]).exits.some(u)?"exit":"")+" svelte-bj142i")&&D(e,"class",a)},d(r){r&&b(e)}}}function le(t){let e,l=B(Array(H)),s=[];for(let i=0;i<l.length;i+=1)s[i]=te(ee(t,l,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=X()},l(i){for(let a=0;a<s.length;a+=1)s[a].l(i);e=X()},m(i,a){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(i,a);z(i,e,a)},p(i,a){if(a&3){l=B(Array(H));let f;for(f=0;f<l.length;f+=1){const m=ee(i,l,f);s[f]?s[f].p(m,a):(s[f]=te(m),s[f].c(),s[f].m(e.parentNode,e))}for(;f<s.length;f+=1)s[f].d(1);s.length=l.length}},d(i){i&&b(e),Q(s,i)}}}function se(t){let e,l,s="Relic Store",i,a,f,m,k,p,I=B(J),u=[];for(let r=0;r<I.length;r+=1)u[r]=re(x(t,I,r));return{c(){e=P("div"),l=P("h2"),l.textContent=s,i=V(),a=P("p"),f=T("Drachmas: "),m=T(t[4]),k=V(),p=P("div");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=j(r,"DIV",{class:!0});var h=C(e);l=j(h,"H2",{"data-svelte-h":!0}),fe(l)!=="svelte-6gh0hs"&&(l.textContent=s),i=N(h),a=j(h,"P",{});var o=C(a);f=L(o,"Drachmas: "),m=L(o,t[4]),o.forEach(b),k=N(h),p=j(h,"DIV",{});var y=C(p);for(let g=0;g<u.length;g+=1)u[g].l(y);y.forEach(b),h.forEach(b),this.h()},h(){D(e,"class","menu svelte-bj142i")},m(r,h){z(r,e,h),_(e,l),_(e,i),_(e,a),_(a,f),_(a,m),_(e,k),_(e,p);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(p,null)},p(r,h){if(h&16&&F(m,r[4]),h&96){I=B(J);let o;for(o=0;o<I.length;o+=1){const y=x(r,I,o);u[o]?u[o].p(y,h):(u[o]=re(y),u[o].c(),u[o].m(p,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=I.length}},d(r){r&&b(e),Q(u,r)}}}function ne(t){let e;return{c(){e=T("Active")},l(l){e=L(l,"Active")},m(l,s){z(l,e,s)},d(l){l&&b(e)}}}function ie(t){let e,l="Buy",s,i;function a(){return t[20](t[23])}return{c(){e=P("button"),e.textContent=l,this.h()},l(f){e=j(f,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1oeqzjf"&&(e.textContent=l),this.h()},h(){D(e,"class","svelte-bj142i")},m(f,m){z(f,e,m),s||(i=oe(e,"click",a),s=!0)},p(f,m){t=f},d(f){f&&b(e),s=!1,i()}}}function re(t){let e,l,s,i,a,f=t[23].name+"",m,k,p,I,u,r=t[23].description+"",h,o,y,g,w=t[23].price+"",v,O,q,U,E=t[23].id===t[5].id&&ne(),A=t[23].id!==t[5].id&&ie(t);return{c(){e=P("div"),l=P("img"),i=V(),a=P("h3"),m=T(f),k=V(),p=P("p"),E&&E.c(),I=V(),u=P("p"),h=T(r),o=V(),y=P("p"),g=T("Price: "),v=T(w),O=T(" drachmas"),q=V(),A&&A.c(),U=V(),this.h()},l(G){e=j(G,"DIV",{class:!0});var S=C(e);l=j(S,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=N(S),a=j(S,"H3",{});var n=C(a);m=L(n,f),n.forEach(b),k=N(S),p=j(S,"P",{class:!0});var c=C(p);E&&E.l(c),c.forEach(b),I=N(S),u=j(S,"P",{});var d=C(u);h=L(d,r),d.forEach(b),o=N(S),y=j(S,"P",{});var M=C(y);g=L(M,"Price: "),v=L(M,w),O=L(M," drachmas"),M.forEach(b),q=N(S),A&&A.l(S),U=N(S),S.forEach(b),this.h()},h(){ue(l.src,s=me+"/"+t[23].img)||D(l,"src",s),D(l,"width","46px"),D(l,"height","46px"),D(l,"alt",t[23].name),D(l,"class","svelte-bj142i"),D(p,"class","active"),D(e,"class","menu-item svelte-bj142i")},m(G,S){z(G,e,S),_(e,l),_(e,i),_(e,a),_(a,m),_(e,k),_(e,p),E&&E.m(p,null),_(e,I),_(e,u),_(u,h),_(e,o),_(e,y),_(y,g),_(y,v),_(y,O),_(e,q),A&&A.m(e,null),_(e,U)},p(G,S){G[23].id===G[5].id?E||(E=ne(),E.c(),E.m(p,null)):E&&(E.d(1),E=null),G[23].id!==G[5].id?A?A.p(G,S):(A=ie(G),A.c(),A.m(e,U)):A&&(A.d(1),A=null)},d(G){G&&b(e),E&&E.d(),A&&A.d()}}}function pe(t){let e,l,s,i,a,f,m,k=t[3]?"Close Relic Store":"Open Relic Store",p,I,u,r,h=B(Array(H)),o=[];for(let g=0;g<h.length;g+=1)o[g]=le($(t,h,g));let y=t[3]&&se(t);return{c(){e=P("div"),l=P("h2"),s=T(t[2]),i=V(),a=P("div");for(let g=0;g<o.length;g+=1)o[g].c();f=V(),m=P("button"),p=T(k),I=V(),y&&y.c(),this.h()},l(g){e=j(g,"DIV",{class:!0});var w=C(e);l=j(w,"H2",{});var v=C(l);s=L(v,t[2]),v.forEach(b),i=N(w),a=j(w,"DIV",{class:!0});var O=C(a);for(let U=0;U<o.length;U+=1)o[U].l(O);O.forEach(b),f=N(w),m=j(w,"BUTTON",{class:!0});var q=C(m);p=L(q,k),q.forEach(b),I=N(w),y&&y.l(w),w.forEach(b),this.h()},h(){D(a,"class","grid svelte-bj142i"),D(m,"class","svelte-bj142i"),D(e,"class","world svelte-bj142i")},m(g,w){z(g,e,w),_(e,l),_(l,s),_(e,i),_(e,a);for(let v=0;v<o.length;v+=1)o[v]&&o[v].m(a,null);_(e,f),_(e,m),_(m,p),_(e,I),y&&y.m(e,null),u||(r=oe(m,"click",t[19]),u=!0)},p(g,[w]){if(w&4&&F(s,g[2]),w&3){h=B(Array(H));let v;for(v=0;v<h.length;v+=1){const O=$(g,h,v);o[v]?o[v].p(O,w):(o[v]=le(O),o[v].c(),o[v].m(a,null))}for(;v<o.length;v+=1)o[v].d(1);o.length=h.length}w&8&&k!==(k=g[3]?"Close Relic Store":"Open Relic Store")&&F(p,k),g[3]?y?y.p(g,w):(y=se(g),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},i:W,o:W,d(g){g&&b(e),Q(o,g),y&&y.d(),u=!1,r()}}}const H=5;function ye(t,e,l){let s={x:2,y:2},i=1,a=K.find(n=>n.id===i).name,f=!1,m=0,k=J[0];const p=n=>{let c={...s};n==="up"?c.y-=1:n==="down"?c.y+=1:n==="left"?c.x-=1:n==="right"&&(c.x+=1),!(c.x<0||c.x>=H||c.y<0||c.y>=H)&&(!R.find(d=>d.id===i).rocks.some(d=>d.x===c.x&&d.y===c.y)&&!R.find(d=>d.id===i).vendors.some(d=>d.x===c.x&&d.y===c.y)&&l(0,s=c),R.find(d=>d.id===i).exits.some(d=>d.x===s.x&&d.y===s.y)&&I())},I=()=>{let n=R.find(c=>c.id===i).exits.find(c=>c.x===s.x&&c.y===s.y);n&&(l(1,i=n.destGrid),localStorage.setItem("curStageId",i),l(2,a=K.find(c=>c.id===i).name),l(0,s=n.spawn))},u=n=>{if(m>=n.price){l(4,m-=n.price),localStorage.setItem("drachmas",m),l(5,k=n),localStorage.setItem("chosenRelicId",n.id),window.location.reload();return}alert("Not enough drachmas!")};return ce(()=>{Y.set(!0),Z.set(!0),localStorage.getItem("curStageId")&&(l(1,i=parseInt(localStorage.getItem("curStageId"))),l(2,a=K.find(n=>n.id===i).name)),localStorage.getItem("drachmas")&&l(4,m=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,k=J.find(n=>n.id===parseInt(localStorage.getItem("chosenRelicId")))),!(typeof window>"u")&&window.addEventListener("keydown",n=>{n.key==="ArrowUp"?p("up"):n.key==="ArrowDown"?p("down"):n.key==="ArrowLeft"?p("left"):n.key==="ArrowRight"&&p("right")})}),de(()=>{Y.set(!1),Z.set(!1),!(typeof window>"u")&&window.removeEventListener("keydown",n=>{n.key==="ArrowUp"?p("up"):n.key==="ArrowDown"?p("down"):n.key==="ArrowLeft"?p("left"):n.key==="ArrowRight"&&p("right")})}),[s,i,a,f,m,k,u,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,n=>n.id===i,(n,c,d)=>d.x===n&&d.y===c,()=>l(3,f=!f),n=>u(n)]}class Se extends he{constructor(e){super(),_e(this,e,ye,pe,ae,{})}}export{Se as component};
