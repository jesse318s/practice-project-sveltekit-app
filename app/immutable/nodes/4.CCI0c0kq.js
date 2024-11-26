import{s as _e,n as Z,d as ve,o as ye,f as ke,r as Ie}from"../chunks/scheduler.BoReh3vH.js";import{S as me,i as ge,e as x,s as E,t as j,c as S,a as T,y as H,f as D,b as V,d as I,o as R,g as N,h as g,j as X,B as Y,A as L,n as F,l as Q,m as be,k as $,u as we,v as Ce,w as xe,x as Se,q as Ge,p as ee}from"../chunks/index.BklZDJd0.js";import{e as M}from"../chunks/each.D6YF6ztN.js";import{s as J,r as W}from"../chunks/relics.anhpFv9_.js";import{i as te,a as le}from"../chunks/store.Cn0GNUQE.js";import{b as pe,g as Re}from"../chunks/entry.FzMtv3mS.js";const z=[{id:1,stageId:1,rocks:[{x:1,y:1},{x:0,y:3}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3},{x:4,y:1}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2},{x:2,y:3}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:3,spawn:{x:1,y:4}}]}];function ie(s,e,l){const t=s.slice();return t[7]=e[l],t}function se(s){let e;return{c(){e=j("Active")},l(l){e=V(l,"Active")},m(l,t){N(l,e,t)},d(l){l&&I(e)}}}function re(s){let e,l="Buy",t,i;function r(){return s[5](s[7])}return{c(){e=x("button"),e.textContent=l},l(a){e=S(a,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-yl076z"&&(e.textContent=l)},m(a,p){N(a,e,p),t||(i=L(e,"click",r),t=!0)},p(a,p){s=a},d(a){a&&I(e),t=!1,i()}}}function ne(s){let e,l,t,i,r,a=s[7].name+"",p,w,b,_,u,o=s[7].description+"",d,n,h,C,B=s[7].price+"",A,O,v,k,y=s[7].id===s[1].id&&se(),c=s[7].id!==s[1].id&&re(s);return{c(){e=x("div"),l=x("img"),i=E(),r=x("h3"),p=j(a),w=E(),b=x("p"),y&&y.c(),_=E(),u=x("p"),d=j(o),n=E(),h=x("p"),C=j("Price: "),A=j(B),O=j(" drachmas"),v=E(),c&&c.c(),k=E(),this.h()},l(f){e=S(f,"DIV",{class:!0});var m=T(e);l=S(m,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=D(m),r=S(m,"H3",{});var G=T(r);p=V(G,a),G.forEach(I),w=D(m),b=S(m,"P",{class:!0});var P=T(b);y&&y.l(P),P.forEach(I),_=D(m),u=S(m,"P",{});var q=T(u);d=V(q,o),q.forEach(I),n=D(m),h=S(m,"P",{});var U=T(h);C=V(U,"Price: "),A=V(U,B),O=V(U," drachmas"),U.forEach(I),v=D(m),c&&c.l(m),k=D(m),m.forEach(I),this.h()},h(){ve(l.src,t=pe+"/game/"+s[7].img)||R(l,"src",t),R(l,"width","46px"),R(l,"height","46px"),R(l,"alt",s[7].name),R(l,"class","svelte-10kmyxf"),R(b,"class","active"),R(e,"class","menu-item svelte-10kmyxf")},m(f,m){N(f,e,m),g(e,l),g(e,i),g(e,r),g(r,p),g(e,w),g(e,b),y&&y.m(b,null),g(e,_),g(e,u),g(u,d),g(e,n),g(e,h),g(h,C),g(h,A),g(h,O),g(e,v),c&&c.m(e,null),g(e,k)},p(f,m){f[7].id===f[1].id?y||(y=se(),y.c(),y.m(b,null)):y&&(y.d(1),y=null),f[7].id!==f[1].id?c?c.p(f,m):(c=re(f),c.c(),c.m(e,k)):c&&(c.d(1),c=null)},d(f){f&&I(e),y&&y.d(),c&&c.d()}}}function Ee(s){let e,l,t="Relic Store",i,r,a,p,w,b,_=M(s[2]),u=[];for(let o=0;o<_.length;o+=1)u[o]=ne(ie(s,_,o));return{c(){e=x("div"),l=x("h2"),l.textContent=t,i=E(),r=x("p"),a=j("Drachmas: "),p=j(s[0]),w=E(),b=x("div");for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var d=T(e);l=S(d,"H2",{"data-svelte-h":!0}),H(l)!=="svelte-6gh0hs"&&(l.textContent=t),i=D(d),r=S(d,"P",{});var n=T(r);a=V(n,"Drachmas: "),p=V(n,s[0]),n.forEach(I),w=D(d),b=S(d,"DIV",{});var h=T(b);for(let C=0;C<u.length;C+=1)u[C].l(h);h.forEach(I),d.forEach(I),this.h()},h(){R(e,"class","menu svelte-10kmyxf")},m(o,d){N(o,e,d),g(e,l),g(e,i),g(e,r),g(r,a),g(r,p),g(e,w),g(e,b);for(let n=0;n<u.length;n+=1)u[n]&&u[n].m(b,null)},p(o,[d]){if(d&1&&X(p,o[0]),d&14){_=M(o[2]);let n;for(n=0;n<_.length;n+=1){const h=ie(o,_,n);u[n]?u[n].p(h,d):(u[n]=ne(h),u[n].c(),u[n].m(b,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=_.length}},i:Z,o:Z,d(o){o&&I(e),Y(u,o)}}}function De(s,e,l){let{drachmas:t}=e,{chosenRelic:i}=e,{curGridId:r}=e;const a=J.find(_=>_.id===z.find(u=>u.id===r).stageId),p=W.filter(_=>_.stageId===a.id),w=_=>{try{if(t>=_.price){l(0,t-=_.price),localStorage.setItem("drachmas",t),l(1,i=_),localStorage.setItem("chosenRelicId",_.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(u){console.error(u)}},b=_=>w(_);return s.$$set=_=>{"drachmas"in _&&l(0,t=_.drachmas),"chosenRelic"in _&&l(1,i=_.chosenRelic),"curGridId"in _&&l(4,r=_.curGridId)},[t,i,p,w,r,b]}class Te extends me{constructor(e){super(),ge(this,e,De,Ee,_e,{drachmas:0,chosenRelic:1,curGridId:4})}}function ae(s,e,l){const t=s.slice();return t[17]=e[l],t[19]=l,t}function oe(s,e,l){const t=s.slice();return t[17]=e[l],t[21]=l,t}function ce(s){let e,l,t,i,r,a,p,w,b="←",_,u,o,d="↑",n,h,C="↓",B,A,O="→",v,k,y=M(Array(K)),c=[];for(let f=0;f<y.length;f+=1)c[f]=fe(ae(s,y,f));return{c(){e=x("h2"),l=j(s[2]),t=E(),i=x("div");for(let f=0;f<c.length;f+=1)c[f].c();a=E(),p=x("div"),w=x("button"),w.textContent=b,_=E(),u=x("div"),o=x("button"),o.textContent=d,n=E(),h=x("button"),h.textContent=C,B=E(),A=x("button"),A.textContent=O,this.h()},l(f){e=S(f,"H2",{});var m=T(e);l=V(m,s[2]),m.forEach(I),t=D(f),i=S(f,"DIV",{class:!0});var G=T(i);for(let U=0;U<c.length;U+=1)c[U].l(G);G.forEach(I),a=D(f),p=S(f,"DIV",{class:!0});var P=T(p);w=S(P,"BUTTON",{"data-svelte-h":!0}),H(w)!=="svelte-1h6m8u8"&&(w.textContent=b),_=D(P),u=S(P,"DIV",{class:!0});var q=T(u);o=S(q,"BUTTON",{"data-svelte-h":!0}),H(o)!=="svelte-1un4tkd"&&(o.textContent=d),n=D(q),h=S(q,"BUTTON",{"data-svelte-h":!0}),H(h)!=="svelte-16pn8vi"&&(h.textContent=C),q.forEach(I),B=D(P),A=S(P,"BUTTON",{"data-svelte-h":!0}),H(A)!=="svelte-87vidd"&&(A.textContent=O),P.forEach(I),this.h()},h(){R(i,"class",r="grid grid-bg-"+s[1]+" svelte-79jmr6"),R(u,"class","svelte-79jmr6"),R(p,"class","button-row svelte-79jmr6")},m(f,m){N(f,e,m),g(e,l),N(f,t,m),N(f,i,m);for(let G=0;G<c.length;G+=1)c[G]&&c[G].m(i,null);N(f,a,m),N(f,p,m),g(p,w),g(p,_),g(p,u),g(u,o),g(u,n),g(u,h),g(p,B),g(p,A),v||(k=[L(w,"click",s[8]),L(o,"click",s[9]),L(h,"click",s[10]),L(A,"click",s[11])],v=!0)},p(f,m){if(m&4&&X(l,f[2]),m&99){y=M(Array(K));let G;for(G=0;G<y.length;G+=1){const P=ae(f,y,G);c[G]?c[G].p(P,m):(c[G]=fe(P),c[G].c(),c[G].m(i,null))}for(;G<c.length;G+=1)c[G].d(1);c.length=y.length}m&2&&r!==(r="grid grid-bg-"+f[1]+" svelte-79jmr6")&&R(i,"class",r)},d(f){f&&(I(e),I(t),I(i),I(a),I(p)),Y(c,f),v=!1,Ie(k)}}}function de(s){let e,l;return{c(){e=x("div"),this.h()},l(t){e=S(t,"DIV",{class:!0,style:!0}),T(e).forEach(I),this.h()},h(){R(e,"class",l="cell "+s[6](s[21],s[19],s[0],s[1])+" svelte-79jmr6"),ee(e,"background",s[6](s[21],s[19],s[0],s[1])==="player"?s[5].style:"")},m(t,i){N(t,e,i)},p(t,i){i&3&&l!==(l="cell "+t[6](t[21],t[19],t[0],t[1])+" svelte-79jmr6")&&R(e,"class",l),i&35&&ee(e,"background",t[6](t[21],t[19],t[0],t[1])==="player"?t[5].style:"")},d(t){t&&I(e)}}}function fe(s){let e,l=M(Array(K)),t=[];for(let i=0;i<l.length;i+=1)t[i]=de(oe(s,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=$()},l(i){for(let r=0;r<t.length;r+=1)t[r].l(i);e=$()},m(i,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(i,r);N(i,e,r)},p(i,r){if(r&99){l=M(Array(K));let a;for(a=0;a<l.length;a+=1){const p=oe(i,l,a);t[a]?t[a].p(p,r):(t[a]=de(p),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(i){i&&I(e),Y(t,i)}}}function ue(s){let e,l="Battle",t,i;return{c(){e=x("button"),e.textContent=l},l(r){e=S(r,"BUTTON",{"data-svelte-h":!0}),H(e)!=="svelte-1th9psb"&&(e.textContent=l)},m(r,a){N(r,e,a),t||(i=L(e,"click",s[13]),t=!0)},d(r){r&&I(e),t=!1,i()}}}function he(s){let e,l;return e=new Te({props:{drachmas:s[4],chosenRelic:s[5],curGridId:s[1]}}),{c(){we(e.$$.fragment)},l(t){Ce(e.$$.fragment,t)},m(t,i){xe(e,t,i),l=!0},p(t,i){const r={};i&16&&(r.drachmas=t[4]),i&32&&(r.chosenRelic=t[5]),i&2&&(r.curGridId=t[1]),e.$set(r)},i(t){l||(F(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){Se(e,t)}}}function Ae(s){let e,l,t,i,r=s[3]?"Close Relic Store":"Relic Store",a,p,w,b,_,u,o=!s[3]&&ce(s),d=!s[3]&&ue(s),n=s[3]&&he(s);return{c(){e=x("div"),o&&o.c(),l=E(),t=x("div"),i=x("button"),a=j(r),p=E(),d&&d.c(),w=E(),n&&n.c(),this.h()},l(h){e=S(h,"DIV",{class:!0});var C=T(e);o&&o.l(C),l=D(C),t=S(C,"DIV",{class:!0});var B=T(t);i=S(B,"BUTTON",{});var A=T(i);a=V(A,r),A.forEach(I),p=D(B),d&&d.l(B),B.forEach(I),w=D(C),n&&n.l(C),C.forEach(I),this.h()},h(){R(t,"class","button-row svelte-79jmr6"),R(e,"class","game-container svelte-79jmr6")},m(h,C){N(h,e,C),o&&o.m(e,null),g(e,l),g(e,t),g(t,i),g(i,a),g(t,p),d&&d.m(t,null),g(e,w),n&&n.m(e,null),b=!0,_||(u=L(i,"click",s[12]),_=!0)},p(h,[C]){h[3]?o&&(o.d(1),o=null):o?o.p(h,C):(o=ce(h),o.c(),o.m(e,l)),(!b||C&8)&&r!==(r=h[3]?"Close Relic Store":"Relic Store")&&X(a,r),h[3]?d&&(d.d(1),d=null):d||(d=ue(h),d.c(),d.m(t,null)),h[3]?n?(n.p(h,C),C&8&&F(n,1)):(n=he(h),n.c(),F(n,1),n.m(e,null)):n&&(Ge(),Q(n,1,1,()=>{n=null}),be())},i(h){b||(F(n),b=!0)},o(h){Q(n),b=!1},d(h){h&&I(e),o&&o.d(),d&&d.d(),n&&n.d(),_=!1,u()}}}const K=5;function Ne(s,e,l){let t={x:2,y:2},i=1,r=J[0].name,a=!1,p=0,w=0,b=W[0];const _=v=>{v.key==="ArrowUp"&&(v.preventDefault(),d("up")),v.key==="ArrowDown"&&(v.preventDefault(),d("down")),v.key==="ArrowLeft"&&(v.preventDefault(),d("left")),v.key==="ArrowRight"&&(v.preventDefault(),d("right"))},u=(v,k,y,c)=>{try{if(y.x===v&&y.y===k)return"player";const f=z.find(m=>m.id===c);return f.rocks.find(m=>m.x===v&&m.y===k)?"rock":f.exits.find(m=>m.x===v&&m.y===k)?"exit":""}catch(f){console.error(f)}},o=()=>{const v=z.find(y=>y.id===i).exits.find(y=>y.x===t.x&&y.y===t.y),k=J.find(y=>y.id===z.find(c=>c.id===v.destGridId).stageId);if(p<k.expReq){alert("Not enough experience to use portal! (Requires "+k.expReq+" experience)");return}v&&(l(1,i=v.destGridId),localStorage.setItem("curStageId",k.id),l(2,r=k.name),l(0,t=v.spawn))},d=v=>{try{let k={...t};if(v==="up"&&(k.y-=1),v==="down"&&(k.y+=1),v==="left"&&(k.x-=1),v==="right"&&(k.x+=1),k.x<0||k.x>=K||k.y<0||k.y>=K)return;const y=z.find(c=>c.id===i);y.rocks.find(c=>c.x===k.x&&c.y===k.y)||l(0,t=k),y.exits.find(c=>c.x===t.x&&c.y===t.y)&&o()}catch(k){console.error(k)}};return ye(()=>{if(te.set(!0),le.set(!0),localStorage.getItem("curStageId")){const v=J.find(k=>k.id===parseInt(localStorage.getItem("curStageId")));l(1,i=parseInt(z.find(k=>k.stageId===v.id).id)),l(2,r=v.name)}localStorage.getItem("playerExperience")&&(p=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(4,w=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(5,b=W.find(v=>v.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",_)}),ke(()=>{te.set(!1),le.set(!1),typeof window<"u"&&window.removeEventListener("keydown",_)}),[t,i,r,a,w,b,u,d,()=>d("left"),()=>d("up"),()=>d("down"),()=>d("right"),()=>l(3,a=!a),()=>Re(pe+"/game")]}class qe extends me{constructor(e){super(),ge(this,e,Ne,Ae,_e,{})}}export{qe as component};
