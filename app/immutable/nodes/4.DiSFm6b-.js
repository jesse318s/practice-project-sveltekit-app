import{s as _e,n as Z,d as ve,o as ye,f as Ie,r as ke}from"../chunks/scheduler.BoReh3vH.js";import{S as me,i as ge,e as S,s as T,t as U,c as R,a as N,y as L,f as A,b as O,d as b,o as B,g as P,h as f,j as Q,B as Y,A as z,n as J,l as W,m as we,k as $,u as be,v as xe,w as Ce,x as Ge,q as Se,p as ee}from"../chunks/index.BklZDJd0.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{s as j,r as X}from"../chunks/relics.DPtkT6jf.js";import{i as te,a as le}from"../chunks/store.Cn0GNUQE.js";import{b as pe,g as Re}from"../chunks/entry.DbWiA12y.js";const M=[{id:1,stageId:1,rocks:[{x:1,y:1},{x:0,y:3}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3},{x:4,y:1}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2},{x:2,y:3}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:5,spawn:{x:1,y:4}}]},{id:5,stageId:3,rocks:[{x:0,y:2},{x:2,y:3}],exits:[{x:0,y:4,destGridId:4,spawn:{x:3,y:0}},{x:1,y:0,destGridId:6,spawn:{x:3,y:0}}]},{id:6,stageId:3,rocks:[{x:2,y:2},{x:0,y:3},{x:4,y:3}],exits:[{x:0,y:0,destGridId:5,spawn:{x:3,y:0}}]}];function ie(i,e,l){const t=i.slice();return t[8]=e[l],t}function se(i){let e;return{c(){e=U("Active")},l(l){e=O(l,"Active")},m(l,t){P(l,e,t)},d(l){l&&b(e)}}}function ne(i){let e,l="Buy",t,s;function n(){return i[6](i[8])}return{c(){e=S("button"),e.textContent=l},l(r){e=R(r,"BUTTON",{"data-svelte-h":!0}),L(e)!=="svelte-yl076z"&&(e.textContent=l)},m(r,v){P(r,e,v),t||(s=z(e,"click",n),t=!0)},p(r,v){i=r},d(r){r&&b(e),t=!1,s()}}}function re(i){let e,l,t,s,n,r=i[8].name+"",v,C,G,E,c,g=i[8].description+"",y,I,u,h,k=i[8].price+"",w,x,d,p,_=i[8].id===i[1].id&&se(),a=i[8].id!==i[1].id&&ne(i);return{c(){e=S("div"),l=S("img"),s=T(),n=S("h4"),v=U(r),C=T(),G=S("p"),_&&_.c(),E=T(),c=S("p"),y=U(g),I=T(),u=S("p"),h=U("Price: "),w=U(k),x=U(" drachmas"),d=T(),a&&a.c(),p=T(),this.h()},l(o){e=R(o,"DIV",{class:!0});var m=N(e);l=R(m,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),s=A(m),n=R(m,"H4",{});var D=N(n);v=O(D,r),D.forEach(b),C=A(m),G=R(m,"P",{class:!0});var V=N(G);_&&_.l(V),V.forEach(b),E=A(m),c=R(m,"P",{});var H=N(c);y=O(H,g),H.forEach(b),I=A(m),u=R(m,"P",{});var q=N(u);h=O(q,"Price: "),w=O(q,k),x=O(q," drachmas"),q.forEach(b),d=A(m),a&&a.l(m),p=A(m),m.forEach(b),this.h()},h(){ve(l.src,t=pe+"/game/"+i[8].img)||B(l,"src",t),B(l,"width","46px"),B(l,"height","46px"),B(l,"alt",i[8].name),B(l,"class","svelte-10kmyxf"),B(G,"class","active"),B(e,"class","menu-item svelte-10kmyxf")},m(o,m){P(o,e,m),f(e,l),f(e,s),f(e,n),f(n,v),f(e,C),f(e,G),_&&_.m(G,null),f(e,E),f(e,c),f(c,y),f(e,I),f(e,u),f(u,h),f(u,w),f(u,x),f(e,d),a&&a.m(e,null),f(e,p)},p(o,m){o[8].id===o[1].id?_||(_=se(),_.c(),_.m(G,null)):_&&(_.d(1),_=null),o[8].id!==o[1].id?a?a.p(o,m):(a=ne(o),a.c(),a.m(e,p)):a&&(a.d(1),a=null)},d(o){o&&b(e),_&&_.d(),a&&a.d()}}}function Ee(i){let e,l,t="Relic Store",s,n,r,v=`${i[1].name}
    (${j.find(i[5]).name})`,C,G,E,c,g,y,I,u=K(i[2]),h=[];for(let k=0;k<u.length;k+=1)h[k]=re(ie(i,u,k));return{c(){e=S("div"),l=S("h2"),l.textContent=t,s=T(),n=S("h4"),r=U("Chosen Relic: "),C=U(v),G=T(),E=S("h4"),c=U("Drachmas: "),g=U(i[0]),y=T(),I=S("div");for(let k=0;k<h.length;k+=1)h[k].c();this.h()},l(k){e=R(k,"DIV",{class:!0});var w=N(e);l=R(w,"H2",{"data-svelte-h":!0}),L(l)!=="svelte-6gh0hs"&&(l.textContent=t),s=A(w),n=R(w,"H4",{});var x=N(n);r=O(x,"Chosen Relic: "),C=O(x,v),x.forEach(b),G=A(w),E=R(w,"H4",{});var d=N(E);c=O(d,"Drachmas: "),g=O(d,i[0]),d.forEach(b),y=A(w),I=R(w,"DIV",{});var p=N(I);for(let _=0;_<h.length;_+=1)h[_].l(p);p.forEach(b),w.forEach(b),this.h()},h(){B(e,"class","menu svelte-10kmyxf")},m(k,w){P(k,e,w),f(e,l),f(e,s),f(e,n),f(n,r),f(n,C),f(e,G),f(e,E),f(E,c),f(E,g),f(e,y),f(e,I);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(I,null)},p(k,[w]){if(w&2&&v!==(v=`${k[1].name}
    (${j.find(k[5]).name})`)&&Q(C,v),w&1&&Q(g,k[0]),w&14){u=K(k[2]);let x;for(x=0;x<u.length;x+=1){const d=ie(k,u,x);h[x]?h[x].p(d,w):(h[x]=re(d),h[x].c(),h[x].m(I,null))}for(;x<h.length;x+=1)h[x].d(1);h.length=u.length}},i:Z,o:Z,d(k){k&&b(e),Y(h,k)}}}function De(i,e,l){let{drachmas:t}=e,{chosenRelic:s}=e,{curGridId:n}=e;const r=j.find(c=>c.id===M.find(g=>g.id===n).stageId),v=X.filter(c=>c.stageId===r.id),C=c=>{try{if(t>=c.price){l(0,t-=c.price),localStorage.setItem("drachmas",t),l(1,s=c),localStorage.setItem("chosenRelicId",c.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(g){console.error(g)}},G=c=>c.id===s.stageId,E=c=>C(c);return i.$$set=c=>{"drachmas"in c&&l(0,t=c.drachmas),"chosenRelic"in c&&l(1,s=c.chosenRelic),"curGridId"in c&&l(4,n=c.curGridId)},[t,s,v,C,n,G,E]}class Te extends me{constructor(e){super(),ge(this,e,De,Ee,_e,{drachmas:0,chosenRelic:1,curGridId:4})}}function ae(i,e,l){const t=i.slice();return t[17]=e[l],t[19]=l,t}function oe(i,e,l){const t=i.slice();return t[17]=e[l],t[21]=l,t}function ce(i){let e,l,t,s,n,r,v,C,G="←",E,c,g,y="↑",I,u,h="↓",k,w,x="→",d,p,_=K(Array(F)),a=[];for(let o=0;o<_.length;o+=1)a[o]=fe(ae(i,_,o));return{c(){e=S("h2"),l=U(i[2]),t=T(),s=S("div");for(let o=0;o<a.length;o+=1)a[o].c();r=T(),v=S("div"),C=S("button"),C.textContent=G,E=T(),c=S("div"),g=S("button"),g.textContent=y,I=T(),u=S("button"),u.textContent=h,k=T(),w=S("button"),w.textContent=x,this.h()},l(o){e=R(o,"H2",{});var m=N(e);l=O(m,i[2]),m.forEach(b),t=A(o),s=R(o,"DIV",{class:!0});var D=N(s);for(let q=0;q<a.length;q+=1)a[q].l(D);D.forEach(b),r=A(o),v=R(o,"DIV",{class:!0});var V=N(v);C=R(V,"BUTTON",{"data-svelte-h":!0}),L(C)!=="svelte-1h6m8u8"&&(C.textContent=G),E=A(V),c=R(V,"DIV",{});var H=N(c);g=R(H,"BUTTON",{"data-svelte-h":!0}),L(g)!=="svelte-1un4tkd"&&(g.textContent=y),I=A(H),u=R(H,"BUTTON",{"data-svelte-h":!0}),L(u)!=="svelte-16pn8vi"&&(u.textContent=h),H.forEach(b),k=A(V),w=R(V,"BUTTON",{"data-svelte-h":!0}),L(w)!=="svelte-87vidd"&&(w.textContent=x),V.forEach(b),this.h()},h(){B(s,"class",n="grid grid-bg-"+i[1]+" svelte-9rwrge"),B(v,"class","button-row")},m(o,m){P(o,e,m),f(e,l),P(o,t,m),P(o,s,m);for(let D=0;D<a.length;D+=1)a[D]&&a[D].m(s,null);P(o,r,m),P(o,v,m),f(v,C),f(v,E),f(v,c),f(c,g),f(c,I),f(c,u),f(v,k),f(v,w),d||(p=[z(C,"click",i[8]),z(g,"click",i[9]),z(u,"click",i[10]),z(w,"click",i[11])],d=!0)},p(o,m){if(m&4&&Q(l,o[2]),m&99){_=K(Array(F));let D;for(D=0;D<_.length;D+=1){const V=ae(o,_,D);a[D]?a[D].p(V,m):(a[D]=fe(V),a[D].c(),a[D].m(s,null))}for(;D<a.length;D+=1)a[D].d(1);a.length=_.length}m&2&&n!==(n="grid grid-bg-"+o[1]+" svelte-9rwrge")&&B(s,"class",n)},d(o){o&&(b(e),b(t),b(s),b(r),b(v)),Y(a,o),d=!1,ke(p)}}}function de(i){let e,l;return{c(){e=S("div"),this.h()},l(t){e=R(t,"DIV",{class:!0,style:!0}),N(e).forEach(b),this.h()},h(){B(e,"class",l="cell "+i[6](i[21],i[19],i[0],i[1])+" svelte-9rwrge"),ee(e,"background",i[6](i[21],i[19],i[0],i[1])==="player"?i[5].style:"")},m(t,s){P(t,e,s)},p(t,s){s&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-9rwrge")&&B(e,"class",l),s&35&&ee(e,"background",t[6](t[21],t[19],t[0],t[1])==="player"?t[5].style:"")},d(t){t&&b(e)}}}function fe(i){let e,l=K(Array(F)),t=[];for(let s=0;s<l.length;s+=1)t[s]=de(oe(i,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=$()},l(s){for(let n=0;n<t.length;n+=1)t[n].l(s);e=$()},m(s,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,n);P(s,e,n)},p(s,n){if(n&99){l=K(Array(F));let r;for(r=0;r<l.length;r+=1){const v=oe(s,l,r);t[r]?t[r].p(v,n):(t[r]=de(v),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(s){s&&b(e),Y(t,s)}}}function ue(i){let e,l="Battle",t,s;return{c(){e=S("button"),e.textContent=l},l(n){e=R(n,"BUTTON",{"data-svelte-h":!0}),L(e)!=="svelte-1th9psb"&&(e.textContent=l)},m(n,r){P(n,e,r),t||(s=z(e,"click",i[13]),t=!0)},d(n){n&&b(e),t=!1,s()}}}function he(i){let e,l;return e=new Te({props:{drachmas:i[4],chosenRelic:i[5],curGridId:i[1]}}),{c(){be(e.$$.fragment)},l(t){xe(e.$$.fragment,t)},m(t,s){Ce(e,t,s),l=!0},p(t,s){const n={};s&16&&(n.drachmas=t[4]),s&32&&(n.chosenRelic=t[5]),s&2&&(n.curGridId=t[1]),e.$set(n)},i(t){l||(J(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Ge(e,t)}}}function Ae(i){let e,l,t,s,n=i[3]?"Close Relic Store":"Relic Store",r,v,C,G,E,c,g=!i[3]&&ce(i),y=!i[3]&&ue(i),I=i[3]&&he(i);return{c(){e=S("div"),g&&g.c(),l=T(),t=S("div"),s=S("button"),r=U(n),v=T(),y&&y.c(),C=T(),I&&I.c(),this.h()},l(u){e=R(u,"DIV",{class:!0});var h=N(e);g&&g.l(h),l=A(h),t=R(h,"DIV",{class:!0});var k=N(t);s=R(k,"BUTTON",{});var w=N(s);r=O(w,n),w.forEach(b),v=A(k),y&&y.l(k),k.forEach(b),C=A(h),I&&I.l(h),h.forEach(b),this.h()},h(){B(t,"class","button-row"),B(e,"class","game-container svelte-9rwrge")},m(u,h){P(u,e,h),g&&g.m(e,null),f(e,l),f(e,t),f(t,s),f(s,r),f(t,v),y&&y.m(t,null),f(e,C),I&&I.m(e,null),G=!0,E||(c=z(s,"click",i[12]),E=!0)},p(u,[h]){u[3]?g&&(g.d(1),g=null):g?g.p(u,h):(g=ce(u),g.c(),g.m(e,l)),(!G||h&8)&&n!==(n=u[3]?"Close Relic Store":"Relic Store")&&Q(r,n),u[3]?y&&(y.d(1),y=null):y||(y=ue(u),y.c(),y.m(t,null)),u[3]?I?(I.p(u,h),h&8&&J(I,1)):(I=he(u),I.c(),J(I,1),I.m(e,null)):I&&(Se(),W(I,1,1,()=>{I=null}),we())},i(u){G||(J(I),G=!0)},o(u){W(I),G=!1},d(u){u&&b(e),g&&g.d(),y&&y.d(),I&&I.d(),E=!1,c()}}}const F=5;function Ne(i,e,l){let t={x:2,y:2},s=1,n=j[0].name,r=!1,v=0,C=0,G=X[0];const E=d=>{d.key==="ArrowUp"&&(d.preventDefault(),y("up")),d.key==="ArrowDown"&&(d.preventDefault(),y("down")),d.key==="ArrowLeft"&&(d.preventDefault(),y("left")),d.key==="ArrowRight"&&(d.preventDefault(),y("right"))},c=(d,p,_,a)=>{try{if(_.x===d&&_.y===p)return"player";const o=M.find(m=>m.id===a);return o.rocks.find(m=>m.x===d&&m.y===p)?"rock":o.exits.find(m=>m.x===d&&m.y===p)?"exit":""}catch(o){console.error(o)}},g=()=>{const d=M.find(_=>_.id===s).exits.find(_=>_.x===t.x&&_.y===t.y),p=j.find(_=>_.id===M.find(a=>a.id===d.destGridId).stageId);if(v<p.expReq){alert("Not enough experience to use portal! (Requires "+p.expReq+" experience)");return}d&&(l(1,s=d.destGridId),localStorage.setItem("curStageId",p.id),l(2,n=p.name),l(0,t=d.spawn))},y=d=>{try{let p={...t};if(d==="up"&&(p.y-=1),d==="down"&&(p.y+=1),d==="left"&&(p.x-=1),d==="right"&&(p.x+=1),p.x<0||p.x>=F||p.y<0||p.y>=F)return;const _=M.find(a=>a.id===s);_.rocks.find(a=>a.x===p.x&&a.y===p.y)||l(0,t=p),_.exits.find(a=>a.x===t.x&&a.y===t.y)&&g()}catch(p){console.error(p)}};return ye(()=>{if(te.set(!0),le.set(!0),localStorage.getItem("curStageId")){const d=j.find(p=>p.id===parseInt(localStorage.getItem("curStageId")));l(1,s=parseInt(M.find(p=>p.stageId===d.id).id)),l(2,n=d.name)}localStorage.getItem("playerExperience")&&(v=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,C=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,G=X.find(d=>d.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",E)}),Ie(()=>{te.set(!1),le.set(!1),typeof window<"u"&&window.removeEventListener("keydown",E)}),[t,s,n,r,C,G,c,y,()=>y("left"),()=>y("up"),()=>y("down"),()=>y("right"),()=>l(3,r=!r),()=>Re(pe+"/game")]}class He extends me{constructor(e){super(),ge(this,e,Ne,Ae,_e,{})}}export{He as component};
