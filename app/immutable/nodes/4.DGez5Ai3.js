import{s as _e,n as Z,d as ve,o as ye,f as ke,r as Ie}from"../chunks/scheduler.BoReh3vH.js";import{S as me,i as ge,e as x,s as E,t as j,c as S,a as T,y as H,f as D,b as V,d as I,o as R,g as N,h as g,j as X,B as Y,A as L,n as F,l as Q,m as be,k as $,u as we,v as Ce,w as xe,x as Se,q as Ge,p as ee}from"../chunks/index.BklZDJd0.js";import{e as M}from"../chunks/each.D6YF6ztN.js";import{s as J,r as W}from"../chunks/relics.anhpFv9_.js";import{i as te,a as le}from"../chunks/store.Cn0GNUQE.js";import{b as pe,g as Re}from"../chunks/entry.C9CuTfDD.js";const z=[{id:1,stageId:1,rocks:[{x:1,y:1},{x:0,y:3}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3},{x:4,y:1}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2},{x:2,y:3}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:3,spawn:{x:1,y:4}}]}];function se(i,e,l){const t=i.slice();return t[7]=e[l],t}function ie(i){let e;return{c(){e=j("Active")},l(l){e=V(l,"Active")},m(l,t){N(l,e,t)},d(l){l&&I(e)}}}function ne(i){let e,l="Buy",t,s;function n(){return i[5](i[7])}return{c(){e=x("button"),e.textContent=l},l(a){e=S(a,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-yl076z"&&(e.textContent=l)},m(a,p){N(a,e,p),t||(s=L(e,"click",n),t=!0)},p(a,p){i=a},d(a){a&&I(e),t=!1,s()}}}function re(i){let e,l,t,s,n,a=i[7].name+"",p,w,b,_,u,o=i[7].description+"",d,r,h,C,B=i[7].price+"",A,O,v,k,y=i[7].id===i[1].id&&ie(),c=i[7].id!==i[1].id&&ne(i);return{c(){e=x("div"),l=x("img"),s=E(),n=x("h3"),p=j(a),w=E(),b=x("p"),y&&y.c(),_=E(),u=x("p"),d=j(o),r=E(),h=x("p"),C=j("Price: "),A=j(B),O=j(" drachmas"),v=E(),c&&c.c(),k=E(),this.h()},l(f){e=S(f,"DIV",{class:!0});var m=T(e);l=S(m,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),s=D(m),n=S(m,"H3",{});var G=T(n);p=V(G,a),G.forEach(I),w=D(m),b=S(m,"P",{class:!0});var P=T(b);y&&y.l(P),P.forEach(I),_=D(m),u=S(m,"P",{});var q=T(u);d=V(q,o),q.forEach(I),r=D(m),h=S(m,"P",{});var U=T(h);C=V(U,"Price: "),A=V(U,B),O=V(U," drachmas"),U.forEach(I),v=D(m),c&&c.l(m),k=D(m),m.forEach(I),this.h()},h(){ve(l.src,t=pe+"/game/"+i[7].img)||R(l,"src",t),R(l,"width","46px"),R(l,"height","46px"),R(l,"alt",i[7].name),R(l,"class","svelte-10kmyxf"),R(b,"class","active"),R(e,"class","menu-item svelte-10kmyxf")},m(f,m){N(f,e,m),g(e,l),g(e,s),g(e,n),g(n,p),g(e,w),g(e,b),y&&y.m(b,null),g(e,_),g(e,u),g(u,d),g(e,r),g(e,h),g(h,C),g(h,A),g(h,O),g(e,v),c&&c.m(e,null),g(e,k)},p(f,m){f[7].id===f[1].id?y||(y=ie(),y.c(),y.m(b,null)):y&&(y.d(1),y=null),f[7].id!==f[1].id?c?c.p(f,m):(c=ne(f),c.c(),c.m(e,k)):c&&(c.d(1),c=null)},d(f){f&&I(e),y&&y.d(),c&&c.d()}}}function Ee(i){let e,l,t="Relic Store",s,n,a,p,w,b,_=M(i[2]),u=[];for(let o=0;o<_.length;o+=1)u[o]=re(se(i,_,o));return{c(){e=x("div"),l=x("h2"),l.textContent=t,s=E(),n=x("p"),a=j("Drachmas: "),p=j(i[0]),w=E(),b=x("div");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var d=T(e);l=S(d,"H2",{"data-svelte-h":!0}),H(l)!=="svelte-6gh0hs"&&(l.textContent=t),s=D(d),n=S(d,"P",{});var r=T(n);a=V(r,"Drachmas: "),p=V(r,i[0]),r.forEach(I),w=D(d),b=S(d,"DIV",{});var h=T(b);for(let C=0;C<u.length;C+=1)u[C].l(h);h.forEach(I),d.forEach(I),this.h()},h(){R(e,"class","menu svelte-10kmyxf")},m(o,d){N(o,e,d),g(e,l),g(e,s),g(e,n),g(n,a),g(n,p),g(e,w),g(e,b);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(b,null)},p(o,[d]){if(d&1&&X(p,o[0]),d&14){_=M(o[2]);let r;for(r=0;r<_.length;r+=1){const h=se(o,_,r);u[r]?u[r].p(h,d):(u[r]=re(h),u[r].c(),u[r].m(b,null))}for(;r<u.length;r+=1)u[r].d(1);u.length=_.length}},i:Z,o:Z,d(o){o&&I(e),Y(u,o)}}}function De(i,e,l){let{drachmas:t}=e,{chosenRelic:s}=e,{curGridId:n}=e;const a=J.find(_=>_.id===z.find(u=>u.id===n).stageId),p=W.filter(_=>_.stageId===a.id),w=_=>{try{if(t>=_.price){l(0,t-=_.price),localStorage.setItem("drachmas",t),l(1,s=_),localStorage.setItem("chosenRelicId",_.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(u){console.error(u)}},b=_=>w(_);return i.$$set=_=>{"drachmas"in _&&l(0,t=_.drachmas),"chosenRelic"in _&&l(1,s=_.chosenRelic),"curGridId"in _&&l(4,n=_.curGridId)},[t,s,p,w,n,b]}class Te extends me{constructor(e){super(),ge(this,e,De,Ee,_e,{drachmas:0,chosenRelic:1,curGridId:4})}}function ae(i,e,l){const t=i.slice();return t[17]=e[l],t[19]=l,t}function oe(i,e,l){const t=i.slice();return t[17]=e[l],t[21]=l,t}function ce(i){let e,l,t,s,n,a,p,w,b="←",_,u,o,d="↑",r,h,C="↓",B,A,O="→",v,k,y=M(Array(K)),c=[];for(let f=0;f<y.length;f+=1)c[f]=fe(ae(i,y,f));return{c(){e=x("h2"),l=j(i[2]),t=E(),s=x("div");for(let f=0;f<c.length;f+=1)c[f].c();a=E(),p=x("div"),w=x("button"),w.textContent=b,_=E(),u=x("div"),o=x("button"),o.textContent=d,r=E(),h=x("button"),h.textContent=C,B=E(),A=x("button"),A.textContent=O,this.h()},l(f){e=S(f,"H2",{});var m=T(e);l=V(m,i[2]),m.forEach(I),t=D(f),s=S(f,"DIV",{class:!0});var G=T(s);for(let U=0;U<c.length;U+=1)c[U].l(G);G.forEach(I),a=D(f),p=S(f,"DIV",{class:!0});var P=T(p);w=S(P,"BUTTON",{"data-svelte-h":!0}),H(w)!=="svelte-1h6m8u8"&&(w.textContent=b),_=D(P),u=S(P,"DIV",{class:!0});var q=T(u);o=S(q,"BUTTON",{"data-svelte-h":!0}),H(o)!=="svelte-1un4tkd"&&(o.textContent=d),r=D(q),h=S(q,"BUTTON",{"data-svelte-h":!0}),H(h)!=="svelte-16pn8vi"&&(h.textContent=C),q.forEach(I),B=D(P),A=S(P,"BUTTON",{"data-svelte-h":!0}),H(A)!=="svelte-87vidd"&&(A.textContent=O),P.forEach(I),this.h()},h(){R(s,"class",n="grid grid-bg-"+i[1]+" svelte-1bjw4cs"),R(u,"class","svelte-1bjw4cs"),R(p,"class","button-row svelte-1bjw4cs")},m(f,m){N(f,e,m),g(e,l),N(f,t,m),N(f,s,m);for(let G=0;G<c.length;G+=1)c[G]&&c[G].m(s,null);N(f,a,m),N(f,p,m),g(p,w),g(p,_),g(p,u),g(u,o),g(u,r),g(u,h),g(p,B),g(p,A),v||(k=[L(w,"click",i[8]),L(o,"click",i[9]),L(h,"click",i[10]),L(A,"click",i[11])],v=!0)},p(f,m){if(m&4&&X(l,f[2]),m&99){y=M(Array(K));let G;for(G=0;G<y.length;G+=1){const P=ae(f,y,G);c[G]?c[G].p(P,m):(c[G]=fe(P),c[G].c(),c[G].m(s,null))}for(;G<c.length;G+=1)c[G].d(1);c.length=y.length}m&2&&n!==(n="grid grid-bg-"+f[1]+" svelte-1bjw4cs")&&R(s,"class",n)},d(f){f&&(I(e),I(t),I(s),I(a),I(p)),Y(c,f),v=!1,Ie(k)}}}function de(i){let e,l;return{c(){e=x("div"),this.h()},l(t){e=S(t,"DIV",{class:!0,style:!0}),T(e).forEach(I),this.h()},h(){R(e,"class",l="cell "+i[6](i[21],i[19],i[0],i[1])+" svelte-1bjw4cs"),ee(e,"background",i[6](i[21],i[19],i[0],i[1])==="player"?i[5].style:"")},m(t,s){N(t,e,s)},p(t,s){s&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-1bjw4cs")&&R(e,"class",l),s&35&&ee(e,"background",t[6](t[21],t[19],t[0],t[1])==="player"?t[5].style:"")},d(t){t&&I(e)}}}function fe(i){let e,l=M(Array(K)),t=[];for(let s=0;s<l.length;s+=1)t[s]=de(oe(i,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=$()},l(s){for(let n=0;n<t.length;n+=1)t[n].l(s);e=$()},m(s,n){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,n);N(s,e,n)},p(s,n){if(n&99){l=M(Array(K));let a;for(a=0;a<l.length;a+=1){const p=oe(s,l,a);t[a]?t[a].p(p,n):(t[a]=de(p),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(s){s&&I(e),Y(t,s)}}}function ue(i){let e,l="Battle",t,s;return{c(){e=x("button"),e.textContent=l},l(n){e=S(n,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-1th9psb"&&(e.textContent=l)},m(n,a){N(n,e,a),t||(s=L(e,"click",i[13]),t=!0)},d(n){n&&I(e),t=!1,s()}}}function he(i){let e,l;return e=new Te({props:{drachmas:i[4],chosenRelic:i[5],curGridId:i[1]}}),{c(){we(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,s){xe(e,t,s),l=!0},p(t,s){const n={};s&16&&(n.drachmas=t[4]),s&32&&(n.chosenRelic=t[5]),s&2&&(n.curGridId=t[1]),e.$set(n)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){Se(e,t)}}}function Ae(i){let e,l,t,s,n=i[3]?"Close Relic Store":"Relic Store",a,p,w,b,_,u,o=!i[3]&&ce(i),d=!i[3]&&ue(i),r=i[3]&&he(i);return{c(){e=x("div"),o&&o.c(),l=E(),t=x("div"),s=x("button"),a=j(n),p=E(),d&&d.c(),w=E(),r&&r.c(),this.h()},l(h){e=S(h,"DIV",{class:!0});var C=T(e);o&&o.l(C),l=D(C),t=S(C,"DIV",{class:!0});var B=T(t);s=S(B,"BUTTON",{});var A=T(s);a=V(A,n),A.forEach(I),p=D(B),d&&d.l(B),B.forEach(I),w=D(C),r&&r.l(C),C.forEach(I),this.h()},h(){R(t,"class","button-row svelte-1bjw4cs"),R(e,"class","game-container svelte-1bjw4cs")},m(h,C){N(h,e,C),o&&o.m(e,null),g(e,l),g(e,t),g(t,s),g(s,a),g(t,p),d&&d.m(t,null),g(e,w),r&&r.m(e,null),b=!0,_||(u=L(s,"click",i[12]),_=!0)},p(h,[C]){h[3]?o&&(o.d(1),o=null):o?o.p(h,C):(o=ce(h),o.c(),o.m(e,l)),(!b||C&8)&&n!==(n=h[3]?"Close Relic Store":"Relic Store")&&X(a,n),h[3]?d&&(d.d(1),d=null):d||(d=ue(h),d.c(),d.m(t,null)),h[3]?r?(r.p(h,C),C&8&&F(r,1)):(r=he(h),r.c(),F(r,1),r.m(e,null)):r&&(Ge(),Q(r,1,1,()=>{r=null}),be())},i(h){b||(F(r),b=!0)},o(h){Q(r),b=!1},d(h){h&&I(e),o&&o.d(),d&&d.d(),r&&r.d(),_=!1,u()}}}const K=5;function Ne(i,e,l){let t={x:2,y:2},s=1,n=J[0].name,a=!1,p=0,w=0,b=W[0];const _=v=>{v.key==="ArrowUp"&&(v.preventDefault(),d("up")),v.key==="ArrowDown"&&(v.preventDefault(),d("down")),v.key==="ArrowLeft"&&(v.preventDefault(),d("left")),v.key==="ArrowRight"&&(v.preventDefault(),d("right"))},u=(v,k,y,c)=>{try{if(y.x===v&&y.y===k)return"player";const f=z.find(m=>m.id===c);return f.rocks.find(m=>m.x===v&&m.y===k)?"rock":f.exits.find(m=>m.x===v&&m.y===k)?"exit":""}catch(f){console.error(f)}},o=()=>{const v=z.find(y=>y.id===s).exits.find(y=>y.x===t.x&&y.y===t.y),k=J.find(y=>y.id===z.find(c=>c.id===v.destGridId).stageId);if(p<k.expReq){alert("Not enough experience to use portal! (Requires "+k.expReq+" experience)");return}v&&(l(1,s=v.destGridId),localStorage.setItem("curStageId",k.id),l(2,n=k.name),l(0,t=v.spawn))},d=v=>{try{let k={...t};if(v==="up"&&(k.y-=1),v==="down"&&(k.y+=1),v==="left"&&(k.x-=1),v==="right"&&(k.x+=1),k.x<0||k.x>=K||k.y<0||k.y>=K)return;const y=z.find(c=>c.id===s);y.rocks.find(c=>c.x===k.x&&c.y===k.y)||l(0,t=k),y.exits.find(c=>c.x===t.x&&c.y===t.y)&&o()}catch(k){console.error(k)}};return ye(()=>{if(te.set(!0),le.set(!0),localStorage.getItem("curStageId")){const v=J.find(k=>k.id===parseInt(localStorage.getItem("curStageId")));l(1,s=parseInt(z.find(k=>k.stageId===v.id).id)),l(2,n=v.name)}localStorage.getItem("playerExperience")&&(p=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,w=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,b=W.find(v=>v.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",_)}),ke(()=>{te.set(!1),le.set(!1),typeof window<"u"&&window.removeEventListener("keydown",_)}),[t,s,n,a,w,b,u,d,()=>d("left"),()=>d("up"),()=>d("down"),()=>d("right"),()=>l(3,a=!a),()=>Re(pe+"/game")]}class qe extends me{constructor(e){super(),ge(this,e,Ne,Ae,_e,{})}}export{qe as component};
