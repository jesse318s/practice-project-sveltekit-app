import{s as _e,n as Z,d as ye,o as ve,f as Ie,r as ke}from"../chunks/scheduler.BoReh3vH.js";import{S as me,i as pe,e as R,s as T,t as U,c as E,a as N,y as H,f as A,b as z,d as x,o as B,g as P,h as d,j as Q,B as Y,A as L,n as J,l as W,m as be,k as $,u as we,v as xe,w as Ce,x as Se,q as Ge,p as ee}from"../chunks/index.BklZDJd0.js";import{e as j}from"../chunks/each.D6YF6ztN.js";import{s as M,r as X}from"../chunks/relics.9MHovSS4.js";import{i as te,a as le}from"../chunks/store.Cn0GNUQE.js";import{b as ge,g as Re}from"../chunks/entry.DDjDVLXQ.js";const F=[{id:1,stageId:1,rocks:[{x:1,y:1,type:"plain"},{x:0,y:3,type:"plain"}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1,type:"smooth"}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3,type:"smooth"},{x:4,y:1,type:"smooth"}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2,type:"smooth"},{x:2,y:3,type:"plain"}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:5,spawn:{x:1,y:4}}]},{id:5,stageId:3,rocks:[{x:3,y:4,type:"plain"},{x:1,y:2,type:"plain"}],exits:[{x:0,y:4,destGridId:4,spawn:{x:3,y:0}},{x:1,y:0,destGridId:6,spawn:{x:3,y:0}}]},{id:6,stageId:3,rocks:[{x:0,y:3,type:"smooth"},{x:4,y:3,type:"smooth"}],exits:[{x:0,y:0,destGridId:5,spawn:{x:3,y:0}}]}];function ie(s,e,l){const t=s.slice();return t[8]=e[l],t}function se(s){let e;return{c(){e=U("Active")},l(l){e=z(l,"Active")},m(l,t){P(l,e,t)},d(l){l&&x(e)}}}function ne(s){let e,l="Buy",t,i;function n(){return s[6](s[8])}return{c(){e=R("button"),e.textContent=l},l(r){e=E(r,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-yl076z"&&(e.textContent=l)},m(r,g){P(r,e,g),t||(i=L(e,"click",n),t=!0)},p(r,g){s=r},d(r){r&&x(e),t=!1,i()}}}function re(s){let e,l,t,i,n,r=s[8].name+"",g,S,G,D,c,m=s[8].description+"",y,v,f,u,I=s[8].price+"",b,C,h,k,_=s[8].id===s[1].id&&se(),a=s[8].id!==s[1].id&&ne(s);return{c(){e=R("div"),l=R("img"),i=T(),n=R("h4"),g=U(r),S=T(),G=R("p"),_&&_.c(),D=T(),c=R("p"),y=U(m),v=T(),f=R("p"),u=U("Price: "),b=U(I),C=U(" drachmas"),h=T(),a&&a.c(),k=T(),this.h()},l(o){e=E(o,"DIV",{class:!0});var p=N(e);l=E(p,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=A(p),n=E(p,"H4",{});var w=N(n);g=z(w,r),w.forEach(x),S=A(p),G=E(p,"P",{class:!0});var V=N(G);_&&_.l(V),V.forEach(x),D=A(p),c=E(p,"P",{});var q=N(c);y=z(q,m),q.forEach(x),v=A(p),f=E(p,"P",{});var O=N(f);u=z(O,"Price: "),b=z(O,I),C=z(O," drachmas"),O.forEach(x),h=A(p),a&&a.l(p),k=A(p),p.forEach(x),this.h()},h(){ye(l.src,t=ge+"/game/"+s[8].img)||B(l,"src",t),B(l,"width","46px"),B(l,"height","46px"),B(l,"alt",s[8].name),B(l,"class","svelte-10kmyxf"),B(G,"class","active"),B(e,"class","menu-item svelte-10kmyxf")},m(o,p){P(o,e,p),d(e,l),d(e,i),d(e,n),d(n,g),d(e,S),d(e,G),_&&_.m(G,null),d(e,D),d(e,c),d(c,y),d(e,v),d(e,f),d(f,u),d(f,b),d(f,C),d(e,h),a&&a.m(e,null),d(e,k)},p(o,p){o[8].id===o[1].id?_||(_=se(),_.c(),_.m(G,null)):_&&(_.d(1),_=null),o[8].id!==o[1].id?a?a.p(o,p):(a=ne(o),a.c(),a.m(e,k)):a&&(a.d(1),a=null)},d(o){o&&x(e),_&&_.d(),a&&a.d()}}}function Ee(s){let e,l,t="Relic Store",i,n,r,g=`${s[1].name}
    (${M.find(s[5]).name})`,S,G,D,c,m,y,v,f=j(s[2]),u=[];for(let I=0;I<f.length;I+=1)u[I]=re(ie(s,f,I));return{c(){e=R("div"),l=R("h2"),l.textContent=t,i=T(),n=R("h4"),r=U("Chosen Relic: "),S=U(g),G=T(),D=R("h4"),c=U("Drachmas: "),m=U(s[0]),y=T(),v=R("div");for(let I=0;I<u.length;I+=1)u[I].c();this.h()},l(I){e=E(I,"DIV",{class:!0});var b=N(e);l=E(b,"H2",{"data-svelte-h":!0}),H(l)!=="svelte-6gh0hs"&&(l.textContent=t),i=A(b),n=E(b,"H4",{});var C=N(n);r=z(C,"Chosen Relic: "),S=z(C,g),C.forEach(x),G=A(b),D=E(b,"H4",{});var h=N(D);c=z(h,"Drachmas: "),m=z(h,s[0]),h.forEach(x),y=A(b),v=E(b,"DIV",{});var k=N(v);for(let _=0;_<u.length;_+=1)u[_].l(k);k.forEach(x),b.forEach(x),this.h()},h(){B(e,"class","menu svelte-10kmyxf")},m(I,b){P(I,e,b),d(e,l),d(e,i),d(e,n),d(n,r),d(n,S),d(e,G),d(e,D),d(D,c),d(D,m),d(e,y),d(e,v);for(let C=0;C<u.length;C+=1)u[C]&&u[C].m(v,null)},p(I,[b]){if(b&2&&g!==(g=`${I[1].name}
    (${M.find(I[5]).name})`)&&Q(S,g),b&1&&Q(m,I[0]),b&14){f=j(I[2]);let C;for(C=0;C<f.length;C+=1){const h=ie(I,f,C);u[C]?u[C].p(h,b):(u[C]=re(h),u[C].c(),u[C].m(v,null))}for(;C<u.length;C+=1)u[C].d(1);u.length=f.length}},i:Z,o:Z,d(I){I&&x(e),Y(u,I)}}}function De(s,e,l){let{drachmas:t}=e,{chosenRelic:i}=e,{curGridId:n}=e;const r=M.find(c=>c.id===F.find(m=>m.id===n).stageId),g=X.filter(c=>c.stageId===r.id),S=c=>{try{if(t>=c.price){l(0,t-=c.price),localStorage.setItem("drachmas",t),l(1,i=c),localStorage.setItem("chosenRelicId",c.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(m){console.error(m)}},G=c=>c.id===i.stageId,D=c=>S(c);return s.$$set=c=>{"drachmas"in c&&l(0,t=c.drachmas),"chosenRelic"in c&&l(1,i=c.chosenRelic),"curGridId"in c&&l(4,n=c.curGridId)},[t,i,g,S,n,G,D]}class Te extends me{constructor(e){super(),pe(this,e,De,Ee,_e,{drachmas:0,chosenRelic:1,curGridId:4})}}function ae(s,e,l){const t=s.slice();return t[17]=e[l],t[19]=l,t}function oe(s,e,l){const t=s.slice();return t[17]=e[l],t[21]=l,t}function ce(s){let e,l,t,i,n,r,g,S,G="←",D,c,m,y="↑",v,f,u="↓",I,b,C="→",h,k,_=j(Array(K)),a=[];for(let o=0;o<_.length;o+=1)a[o]=fe(ae(s,_,o));return{c(){e=R("h2"),l=U(s[2]),t=T(),i=R("div");for(let o=0;o<a.length;o+=1)a[o].c();r=T(),g=R("div"),S=R("button"),S.textContent=G,D=T(),c=R("div"),m=R("button"),m.textContent=y,v=T(),f=R("button"),f.textContent=u,I=T(),b=R("button"),b.textContent=C,this.h()},l(o){e=E(o,"H2",{});var p=N(e);l=z(p,s[2]),p.forEach(x),t=A(o),i=E(o,"DIV",{class:!0});var w=N(i);for(let O=0;O<a.length;O+=1)a[O].l(w);w.forEach(x),r=A(o),g=E(o,"DIV",{class:!0});var V=N(g);S=E(V,"BUTTON",{"data-svelte-h":!0}),H(S)!=="svelte-1h6m8u8"&&(S.textContent=G),D=A(V),c=E(V,"DIV",{});var q=N(c);m=E(q,"BUTTON",{"data-svelte-h":!0}),H(m)!=="svelte-1un4tkd"&&(m.textContent=y),v=A(q),f=E(q,"BUTTON",{"data-svelte-h":!0}),H(f)!=="svelte-16pn8vi"&&(f.textContent=u),q.forEach(x),I=A(V),b=E(V,"BUTTON",{"data-svelte-h":!0}),H(b)!=="svelte-87vidd"&&(b.textContent=C),V.forEach(x),this.h()},h(){B(i,"class",n="grid grid-bg-"+s[1]+" svelte-1lzg1px"),B(g,"class","button-row")},m(o,p){P(o,e,p),d(e,l),P(o,t,p),P(o,i,p);for(let w=0;w<a.length;w+=1)a[w]&&a[w].m(i,null);P(o,r,p),P(o,g,p),d(g,S),d(g,D),d(g,c),d(c,m),d(c,v),d(c,f),d(g,I),d(g,b),h||(k=[L(S,"click",s[8]),L(m,"click",s[9]),L(f,"click",s[10]),L(b,"click",s[11])],h=!0)},p(o,p){if(p&4&&Q(l,o[2]),p&99){_=j(Array(K));let w;for(w=0;w<_.length;w+=1){const V=ae(o,_,w);a[w]?a[w].p(V,p):(a[w]=fe(V),a[w].c(),a[w].m(i,null))}for(;w<a.length;w+=1)a[w].d(1);a.length=_.length}p&2&&n!==(n="grid grid-bg-"+o[1]+" svelte-1lzg1px")&&B(i,"class",n)},d(o){o&&(x(e),x(t),x(i),x(r),x(g)),Y(a,o),h=!1,ke(k)}}}function de(s){let e,l;return{c(){e=R("div"),this.h()},l(t){e=E(t,"DIV",{class:!0,style:!0}),N(e).forEach(x),this.h()},h(){B(e,"class",l="cell "+s[6](s[21],s[19],s[0],s[1])+" svelte-1lzg1px"),ee(e,"background",s[6](s[21],s[19],s[0],s[1])==="player"?s[5].style:"")},m(t,i){P(t,e,i)},p(t,i){i&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-1lzg1px")&&B(e,"class",l),i&35&&ee(e,"background",t[6](t[21],t[19],t[0],t[1])==="player"?t[5].style:"")},d(t){t&&x(e)}}}function fe(s){let e,l=j(Array(K)),t=[];for(let i=0;i<l.length;i+=1)t[i]=de(oe(s,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=$()},l(i){for(let n=0;n<t.length;n+=1)t[n].l(i);e=$()},m(i,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,n);P(i,e,n)},p(i,n){if(n&99){l=j(Array(K));let r;for(r=0;r<l.length;r+=1){const g=oe(i,l,r);t[r]?t[r].p(g,n):(t[r]=de(g),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&x(e),Y(t,i)}}}function he(s){let e,l="Battle",t,i;return{c(){e=R("button"),e.textContent=l},l(n){e=E(n,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-1th9psb"&&(e.textContent=l)},m(n,r){P(n,e,r),t||(i=L(e,"click",s[13]),t=!0)},d(n){n&&x(e),t=!1,i()}}}function ue(s){let e,l;return e=new Te({props:{drachmas:s[4],chosenRelic:s[5],curGridId:s[1]}}),{c(){we(e.$$.fragment)},l(t){xe(e.$$.fragment,t)},m(t,i){Ce(e,t,i),l=!0},p(t,i){const n={};i&16&&(n.drachmas=t[4]),i&32&&(n.chosenRelic=t[5]),i&2&&(n.curGridId=t[1]),e.$set(n)},i(t){l||(J(e.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),l=!1},d(t){Se(e,t)}}}function Ae(s){let e,l,t,i,n=s[3]?"Close Relic Store":"Relic Store",r,g,S,G,D,c,m=!s[3]&&ce(s),y=!s[3]&&he(s),v=s[3]&&ue(s);return{c(){e=R("div"),m&&m.c(),l=T(),t=R("div"),i=R("button"),r=U(n),g=T(),y&&y.c(),S=T(),v&&v.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var u=N(e);m&&m.l(u),l=A(u),t=E(u,"DIV",{class:!0});var I=N(t);i=E(I,"BUTTON",{});var b=N(i);r=z(b,n),b.forEach(x),g=A(I),y&&y.l(I),I.forEach(x),S=A(u),v&&v.l(u),u.forEach(x),this.h()},h(){B(t,"class","button-row"),B(e,"class","game-container svelte-1lzg1px")},m(f,u){P(f,e,u),m&&m.m(e,null),d(e,l),d(e,t),d(t,i),d(i,r),d(t,g),y&&y.m(t,null),d(e,S),v&&v.m(e,null),G=!0,D||(c=L(i,"click",s[12]),D=!0)},p(f,[u]){f[3]?m&&(m.d(1),m=null):m?m.p(f,u):(m=ce(f),m.c(),m.m(e,l)),(!G||u&8)&&n!==(n=f[3]?"Close Relic Store":"Relic Store")&&Q(r,n),f[3]?y&&(y.d(1),y=null):y||(y=he(f),y.c(),y.m(t,null)),f[3]?v?(v.p(f,u),u&8&&J(v,1)):(v=ue(f),v.c(),J(v,1),v.m(e,null)):v&&(Ge(),W(v,1,1,()=>{v=null}),be())},i(f){G||(J(v),G=!0)},o(f){W(v),G=!1},d(f){f&&x(e),m&&m.d(),y&&y.d(),v&&v.d(),D=!1,c()}}}const K=5;function Ne(s,e,l){let t={x:2,y:2},i=1,n=M[0].name,r=!1,g=0,S=0,G=X[0];const D=h=>{h.key==="ArrowUp"&&(h.preventDefault(),y("up")),h.key==="ArrowDown"&&(h.preventDefault(),y("down")),h.key==="ArrowLeft"&&(h.preventDefault(),y("left")),h.key==="ArrowRight"&&(h.preventDefault(),y("right"))},c=(h,k,_,a)=>{try{if(_.x===h&&_.y===k)return"player";const o=F.find(w=>w.id===a),p=o.rocks.find(w=>w.x===h&&w.y===k);return(p==null?void 0:p.type)==="plain"?"rock-plain":(p==null?void 0:p.type)==="smooth"?"rock-smooth":o.exits.find(w=>w.x===h&&w.y===k)?"exit":""}catch(o){console.error(o)}},m=()=>{const h=F.find(_=>_.id===i).exits.find(_=>_.x===t.x&&_.y===t.y),k=M.find(_=>_.id===F.find(a=>a.id===h.destGridId).stageId);if(g<k.expReq){alert("Not enough experience to use portal! (Requires "+k.expReq+" experience)");return}h&&(l(1,i=h.destGridId),localStorage.setItem("curStageId",k.id),localStorage.setItem("gridId",i),l(2,n=k.name),l(0,t=h.spawn))},y=h=>{try{let k={...t};if(h==="up"&&(k.y-=1),h==="down"&&(k.y+=1),h==="left"&&(k.x-=1),h==="right"&&(k.x+=1),k.x<0||k.x>=K||k.y<0||k.y>=K)return;const _=F.find(a=>a.id===i);_.rocks.find(a=>a.x===k.x&&a.y===k.y)||l(0,t=k),_.exits.find(a=>a.x===t.x&&a.y===t.y)&&m()}catch(k){console.error(k)}};return ve(()=>{te.set(!0),le.set(!0),localStorage.getItem("curStageId")&&l(2,n=M.find(h=>h.id===parseInt(localStorage.getItem("curStageId"))).name),localStorage.getItem("gridId")&&l(1,i=parseInt(localStorage.getItem("gridId"))),localStorage.getItem("playerExperience")&&(g=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,S=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,G=X.find(h=>h.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",D)}),Ie(()=>{te.set(!1),le.set(!1),typeof window<"u"&&window.removeEventListener("keydown",D)}),[t,i,n,r,S,G,c,y,()=>y("left"),()=>y("up"),()=>y("down"),()=>y("right"),()=>l(3,r=!r),()=>Re(ge+"/game")]}class qe extends me{constructor(e){super(),pe(this,e,Ne,Ae,_e,{})}}export{qe as component};
