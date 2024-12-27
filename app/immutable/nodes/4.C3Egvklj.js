import{s as Z,e as I,a as G,c as k,b as R,N as B,g as T,f as w,p as N,i as M,h,O as H,n as z,w as Te,V as oe,t as A,d as q,j as re,W as ee,K as Re,q as X,L as Ne,o as De,P as Pe,l as he}from"../chunks/scheduler.Cbetkgfn.js";import{S as te,i as le,a as j,t as L,c as ne,b as ae,d as ce,m as de,e as fe,g as se}from"../chunks/index.OYoryRwg.js";import{e as K}from"../chunks/each.D6YF6ztN.js";import{s as W,r as ie}from"../chunks/relics.Bej4_qsT.js";import{i as ue,b as _e}from"../chunks/store.CKltHNWN.js";import{g as Oe,b as Ge}from"../chunks/entry.D4NSC_9p.js";const J=[{id:1,stageId:1,rocks:[{x:1,y:1,type:"plain"},{x:0,y:3,type:"plain"}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1,type:"smooth"}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3,type:"smooth"},{x:4,y:1,type:"smooth"}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2,type:"smooth"},{x:2,y:3,type:"plain"}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:5,spawn:{x:1,y:4}}]},{id:5,stageId:3,rocks:[{x:3,y:4,type:"plain"},{x:1,y:2,type:"plain"}],exits:[{x:0,y:4,destGridId:4,spawn:{x:3,y:0}},{x:1,y:0,destGridId:6,spawn:{x:3,y:0}}]},{id:6,stageId:3,rocks:[{x:0,y:3,type:"smooth"},{x:4,y:3,type:"smooth"}],exits:[{x:0,y:0,destGridId:5,spawn:{x:3,y:0}}]}];function Ae(n){let e,l,t,i="←",s,r,c,d="↑",u,C,m="↓",a,o,f="→",v,x,D,O="Relic Store",y,b,S="World Map",g,p,E="Battle",_,U;return{c(){e=I("section"),l=I("div"),t=I("button"),t.textContent=i,s=G(),r=I("div"),c=I("button"),c.textContent=d,u=G(),C=I("button"),C.textContent=m,a=G(),o=I("button"),o.textContent=f,v=G(),x=I("div"),D=I("button"),D.textContent=O,y=G(),b=I("button"),b.textContent=S,g=G(),p=I("button"),p.textContent=E,this.h()},l(V){e=k(V,"SECTION",{});var $=R(e);l=k($,"DIV",{class:!0});var P=R(l);t=k(P,"BUTTON",{"data-svelte-h":!0}),B(t)!=="svelte-1h6m8u8"&&(t.textContent=i),s=T(P),r=k(P,"DIV",{class:!0});var Y=R(r);c=k(Y,"BUTTON",{"data-svelte-h":!0}),B(c)!=="svelte-1un4tkd"&&(c.textContent=d),u=T(Y),C=k(Y,"BUTTON",{"data-svelte-h":!0}),B(C)!=="svelte-16pn8vi"&&(C.textContent=m),Y.forEach(w),a=T(P),o=k(P,"BUTTON",{"data-svelte-h":!0}),B(o)!=="svelte-87vidd"&&(o.textContent=f),P.forEach(w),v=T($),x=k($,"DIV",{class:!0});var F=R(x);D=k(F,"BUTTON",{"data-svelte-h":!0}),B(D)!=="svelte-769qna"&&(D.textContent=O),y=T(F),b=k(F,"BUTTON",{"data-svelte-h":!0}),B(b)!=="svelte-7p0q63"&&(b.textContent=S),g=T(F),p=k(F,"BUTTON",{"data-svelte-h":!0}),B(p)!=="svelte-1th9psb"&&(p.textContent=E),F.forEach(w),$.forEach(w),this.h()},h(){N(r,"class","svelte-120f91c"),N(l,"class","button-row svelte-120f91c"),N(x,"class","button-row svelte-120f91c")},m(V,$){M(V,e,$),h(e,l),h(l,t),h(l,s),h(l,r),h(r,c),h(r,u),h(r,C),h(l,a),h(l,o),h(e,v),h(e,x),h(x,D),h(x,y),h(x,b),h(x,g),h(x,p),_||(U=[H(t,"click",n[2]),H(c,"click",n[3]),H(C,"click",n[4]),H(o,"click",n[5]),H(D,"click",n[6]),H(b,"click",n[7]),H(p,"click",n[8])],_=!0)},p:z,i:z,o:z,d(V){V&&w(e),_=!1,Te(U)}}}function qe(n,e,l){let{movePlayer:t}=e;const i=oe(),s=()=>t("left"),r=()=>t("up"),c=()=>t("down"),d=()=>t("right"),u=()=>i("openStore"),C=()=>i("openMap"),m=()=>Oe(Ge+"/game");return n.$$set=a=>{"movePlayer"in a&&l(0,t=a.movePlayer)},[t,i,s,r,c,d,u,C,m]}class Be extends te{constructor(e){super(),le(this,e,qe,Ae,Z,{movePlayer:0})}}function pe(n,e,l){const t=n.slice();return t[10]=e[l],t}function me(n){let e;return{c(){e=A("Active")},l(l){e=q(l,"Active")},m(l,t){M(l,e,t)},d(l){l&&w(e)}}}function ge(n){let e,l="Buy",t,i;function s(){return n[8](n[10])}return{c(){e=I("button"),e.textContent=l},l(r){e=k(r,"BUTTON",{"data-svelte-h":!0}),B(e)!=="svelte-zqp817"&&(e.textContent=l)},m(r,c){M(r,e,c),t||(i=H(e,"click",s),t=!0)},p(r,c){n=r},d(r){r&&w(e),t=!1,i()}}}function ve(n){let e,l,t,i,s,r=n[10].name+"",c,d,u,C,m,a=n[10].description+"",o,f,v,x,D=n[10].price+"",O,y,b,S,g=n[10].id===n[1].id&&me(),p=n[10].id!==n[1].id&&ge(n);return{c(){e=I("div"),l=I("img"),i=G(),s=I("h4"),c=A(r),d=G(),u=I("p"),g&&g.c(),C=G(),m=I("p"),o=A(a),f=G(),v=I("p"),x=A("Price: "),O=A(D),y=A(" drachmas"),b=G(),p&&p.c(),S=G(),this.h()},l(E){e=k(E,"DIV",{class:!0});var _=R(e);l=k(_,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),i=T(_),s=k(_,"H4",{});var U=R(s);c=q(U,r),U.forEach(w),d=T(_),u=k(_,"P",{class:!0});var V=R(u);g&&g.l(V),V.forEach(w),C=T(_),m=k(_,"P",{});var $=R(m);o=q($,a),$.forEach(w),f=T(_),v=k(_,"P",{});var P=R(v);x=q(P,"Price: "),O=q(P,D),y=q(P," drachmas"),P.forEach(w),b=T(_),p&&p.l(_),S=T(_),_.forEach(w),this.h()},h(){Re(l.src,t=Ge+"/game/"+n[10].img)||N(l,"src",t),N(l,"width","46px"),N(l,"height","46px"),N(l,"alt",n[10].name),N(l,"class","svelte-p5wbah"),N(u,"class","active"),N(e,"class","menu-item svelte-p5wbah")},m(E,_){M(E,e,_),h(e,l),h(e,i),h(e,s),h(s,c),h(e,d),h(e,u),g&&g.m(u,null),h(e,C),h(e,m),h(m,o),h(e,f),h(e,v),h(v,x),h(v,O),h(v,y),h(e,b),p&&p.m(e,null),h(e,S)},p(E,_){E[10].id===E[1].id?g||(g=me(),g.c(),g.m(u,null)):g&&(g.d(1),g=null),E[10].id!==E[1].id?p?p.p(E,_):(p=ge(E),p.c(),p.m(e,S)):p&&(p.d(1),p=null)},d(E){E&&w(e),g&&g.d(),p&&p.d()}}}function Me(n){let e,l,t="Travel",i,s,r,c="Relic Store",d,u,C,m=`${n[1].name}
    (${W.find(n[7]).name})`,a,o,f,v,x,D,O,y,b,S=K(n[2]),g=[];for(let p=0;p<S.length;p+=1)g[p]=ve(pe(n,S,p));return{c(){e=I("section"),l=I("button"),l.textContent=t,i=G(),s=I("div"),r=I("h2"),r.textContent=c,d=G(),u=I("h4"),C=A("Chosen Relic: "),a=A(m),o=G(),f=I("h4"),v=A("Drachmas: "),x=A(n[0]),D=G(),O=I("div");for(let p=0;p<g.length;p+=1)g[p].c();this.h()},l(p){e=k(p,"SECTION",{});var E=R(e);l=k(E,"BUTTON",{"data-svelte-h":!0}),B(l)!=="svelte-149vi4f"&&(l.textContent=t),i=T(E),s=k(E,"DIV",{class:!0});var _=R(s);r=k(_,"H2",{"data-svelte-h":!0}),B(r)!=="svelte-6gh0hs"&&(r.textContent=c),d=T(_),u=k(_,"H4",{});var U=R(u);C=q(U,"Chosen Relic: "),a=q(U,m),U.forEach(w),o=T(_),f=k(_,"H4",{});var V=R(f);v=q(V,"Drachmas: "),x=q(V,n[0]),V.forEach(w),D=T(_),O=k(_,"DIV",{});var $=R(O);for(let P=0;P<g.length;P+=1)g[P].l($);$.forEach(w),_.forEach(w),E.forEach(w),this.h()},h(){N(s,"class","menu svelte-p5wbah")},m(p,E){M(p,e,E),h(e,l),h(e,i),h(e,s),h(s,r),h(s,d),h(s,u),h(u,C),h(u,a),h(s,o),h(s,f),h(f,v),h(f,x),h(s,D),h(s,O);for(let _=0;_<g.length;_+=1)g[_]&&g[_].m(O,null);y||(b=H(l,"click",n[6]),y=!0)},p(p,[E]){if(E&2&&m!==(m=`${p[1].name}
    (${W.find(p[7]).name})`)&&re(a,m),E&1&&re(x,p[0]),E&22){S=K(p[2]);let _;for(_=0;_<S.length;_+=1){const U=pe(p,S,_);g[_]?g[_].p(U,E):(g[_]=ve(U),g[_].c(),g[_].m(O,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=S.length}},i:z,o:z,d(p){p&&w(e),ee(g,p),y=!1,b()}}}function Ue(n,e,l){let{drachmas:t}=e,{chosenRelic:i}=e,{curGridId:s}=e;const r=W.find(o=>o.id===J.find(f=>f.id===s).stageId),c=ie.filter(o=>o.stageId===r.id),d=oe(),u=o=>{try{if(t>=o.price){l(0,t-=o.price),localStorage.setItem("drachmas",t),l(1,i=o),localStorage.setItem("chosenRelicId",o.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(f){console.error(f)}},C=()=>d("close"),m=o=>o.id===i.stageId,a=o=>u(o);return n.$$set=o=>{"drachmas"in o&&l(0,t=o.drachmas),"chosenRelic"in o&&l(1,i=o.chosenRelic),"curGridId"in o&&l(5,s=o.curGridId)},[t,i,c,d,u,s,C,m,a]}class Ve extends te{constructor(e){super(),le(this,e,Ue,Me,Z,{drachmas:0,chosenRelic:1,curGridId:5})}}function ye(n,e,l){const t=n.slice();return t[5]=e[l],t}function $e(n){let e,l="Current Stage";return{c(){e=I("p"),e.textContent=l,this.h()},l(t){e=k(t,"P",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-1nnd0gv"&&(e.textContent=l),this.h()},h(){N(e,"class","svelte-h1j54a")},m(t,i){M(t,e,i)},d(t){t&&w(e)}}}function Ie(n){let e,l,t=n[5].name+"",i,s,r,c,d,u=n[5].expReq+"",C,m,a=n[5].id===n[1].id&&$e();return{c(){e=I("div"),l=I("h4"),i=A(t),s=G(),a&&a.c(),r=G(),c=I("p"),d=A("Exp. Requirement: "),C=A(u),m=G(),this.h()},l(o){e=k(o,"DIV",{class:!0,style:!0});var f=R(e);l=k(f,"H4",{class:!0});var v=R(l);i=q(v,t),v.forEach(w),s=T(f),a&&a.l(f),r=T(f),c=k(f,"P",{class:!0});var x=R(c);d=q(x,"Exp. Requirement: "),C=q(x,u),x.forEach(w),m=T(f),f.forEach(w),this.h()},h(){N(l,"class","svelte-h1j54a"),N(c,"class","svelte-h1j54a"),N(e,"class","stage svelte-h1j54a"),X(e,"grid-column",n[5].col),X(e,"grid-row",n[5].row),Ne(e,"current",n[5].id===n[1].id)},m(o,f){M(o,e,f),h(e,l),h(l,i),h(e,s),a&&a.m(e,null),h(e,r),h(e,c),h(c,d),h(c,C),h(e,m)},p:z,d(o){o&&w(e),a&&a.d()}}}function je(n){let e,l,t="Travel",i,s,r="World Map",c,d,u,C,m=K(W),a=[];for(let o=0;o<m.length;o+=1)a[o]=Ie(ye(n,m,o));return{c(){e=I("section"),l=I("button"),l.textContent=t,i=G(),s=I("h2"),s.textContent=r,c=G(),d=I("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=k(o,"SECTION",{});var f=R(e);l=k(f,"BUTTON",{"data-svelte-h":!0}),B(l)!=="svelte-149vi4f"&&(l.textContent=t),i=T(f),s=k(f,"H2",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-r7pviw"&&(s.textContent=r),c=T(f),d=k(f,"DIV",{class:!0,style:!0});var v=R(d);for(let x=0;x<a.length;x+=1)a[x].l(v);v.forEach(w),f.forEach(w),this.h()},h(){N(s,"class","svelte-h1j54a"),N(d,"class","world-map svelte-h1j54a"),X(d,"grid-template-rows","repeat("+n[2]+", 1fr)")},m(o,f){M(o,e,f),h(e,l),h(e,i),h(e,s),h(e,c),h(e,d);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(d,null);u||(C=H(l,"click",n[4]),u=!0)},p(o,[f]){if(f&2){m=K(W);let v;for(v=0;v<m.length;v+=1){const x=ye(o,m,v);a[v]?a[v].p(x,f):(a[v]=Ie(x),a[v].c(),a[v].m(d,null))}for(;v<a.length;v+=1)a[v].d(1);a.length=m.length}},i:z,o:z,d(o){o&&w(e),ee(a,o),u=!1,C()}}}function He(n,e,l){let{curGridId:t}=e;const i=oe(),s=W.find(d=>d.id===J.find(u=>u.id===t).stageId);let r=Math.max(...W.map(d=>d.row));const c=()=>i("close");return n.$$set=d=>{"curGridId"in d&&l(3,t=d.curGridId)},[i,s,r,t,c]}class We extends te{constructor(e){super(),le(this,e,He,je,Z,{curGridId:3})}}function ke(n,e,l){const t=n.slice();return t[16]=e[l],t[18]=l,t}function be(n,e,l){const t=n.slice();return t[16]=e[l],t[20]=l,t}function we(n){let e,l,t,i,s,r,c,d,u,C=K(Array(Q)),m=[];for(let a=0;a<C.length;a+=1)m[a]=xe(ke(n,C,a));return d=new Be({props:{movePlayer:n[8]}}),d.$on("openStore",n[9]),d.$on("openMap",n[10]),{c(){e=I("section"),l=I("h2"),t=A(n[2]),i=G(),s=I("div");for(let a=0;a<m.length;a+=1)m[a].c();c=G(),ae(d.$$.fragment),this.h()},l(a){e=k(a,"SECTION",{});var o=R(e);l=k(o,"H2",{});var f=R(l);t=q(f,n[2]),f.forEach(w),i=T(o),s=k(o,"DIV",{class:!0});var v=R(s);for(let x=0;x<m.length;x+=1)m[x].l(v);v.forEach(w),o.forEach(w),c=T(a),ce(d.$$.fragment,a),this.h()},h(){N(s,"class",r="grid grid-bg-"+n[1]+" svelte-191k7nf")},m(a,o){M(a,e,o),h(e,l),h(l,t),h(e,i),h(e,s);for(let f=0;f<m.length;f+=1)m[f]&&m[f].m(s,null);M(a,c,o),de(d,a,o),u=!0},p(a,o){if((!u||o&4)&&re(t,a[2]),o&195){C=K(Array(Q));let f;for(f=0;f<C.length;f+=1){const v=ke(a,C,f);m[f]?m[f].p(v,o):(m[f]=xe(v),m[f].c(),m[f].m(s,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=C.length}(!u||o&2&&r!==(r="grid grid-bg-"+a[1]+" svelte-191k7nf"))&&N(s,"class",r)},i(a){u||(j(d.$$.fragment,a),u=!0)},o(a){L(d.$$.fragment,a),u=!1},d(a){a&&(w(e),w(c)),ee(m,a),fe(d,a)}}}function Ce(n){let e,l;return{c(){e=I("div"),this.h()},l(t){e=k(t,"DIV",{class:!0,style:!0}),R(e).forEach(w),this.h()},h(){N(e,"class",l="cell "+n[7](n[20],n[18],n[0],n[1])+" svelte-191k7nf"),X(e,"background",n[7](n[20],n[18],n[0],n[1])==="player"?n[6].style:"")},m(t,i){M(t,e,i)},p(t,i){i&3&&l!==(l="cell "+t[7](t[20],t[18],t[0],t[1])+" svelte-191k7nf")&&N(e,"class",l),i&67&&X(e,"background",t[7](t[20],t[18],t[0],t[1])==="player"?t[6].style:"")},d(t){t&&w(e)}}}function xe(n){let e,l=K(Array(Q)),t=[];for(let i=0;i<l.length;i+=1)t[i]=Ce(be(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=he()},l(i){for(let s=0;s<t.length;s+=1)t[s].l(i);e=he()},m(i,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,s);M(i,e,s)},p(i,s){if(s&195){l=K(Array(Q));let r;for(r=0;r<l.length;r+=1){const c=be(i,l,r);t[r]?t[r].p(c,s):(t[r]=Ce(c),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&w(e),ee(t,i)}}}function Ee(n){let e,l;return e=new Ve({props:{drachmas:n[5],chosenRelic:n[6],curGridId:n[1]}}),e.$on("close",n[11]),{c(){ae(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,i){de(e,t,i),l=!0},p(t,i){const s={};i&32&&(s.drachmas=t[5]),i&64&&(s.chosenRelic=t[6]),i&2&&(s.curGridId=t[1]),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){fe(e,t)}}}function Se(n){let e,l;return e=new We({props:{curGridId:n[1]}}),e.$on("close",n[12]),{c(){ae(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,i){de(e,t,i),l=!0},p(t,i){const s={};i&2&&(s.curGridId=t[1]),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){L(e.$$.fragment,t),l=!1},d(t){fe(e,t)}}}function Le(n){let e,l,t,i,s=!n[3]&&!n[4]&&we(n),r=n[3]&&Ee(n),c=n[4]&&Se(n);return{c(){e=I("main"),s&&s.c(),l=G(),r&&r.c(),t=G(),c&&c.c(),this.h()},l(d){e=k(d,"MAIN",{class:!0});var u=R(e);s&&s.l(u),l=T(u),r&&r.l(u),t=T(u),c&&c.l(u),u.forEach(w),this.h()},h(){N(e,"class","game-container svelte-191k7nf")},m(d,u){M(d,e,u),s&&s.m(e,null),h(e,l),r&&r.m(e,null),h(e,t),c&&c.m(e,null),i=!0},p(d,[u]){!d[3]&&!d[4]?s?(s.p(d,u),u&24&&j(s,1)):(s=we(d),s.c(),j(s,1),s.m(e,l)):s&&(se(),L(s,1,1,()=>{s=null}),ne()),d[3]?r?(r.p(d,u),u&8&&j(r,1)):(r=Ee(d),r.c(),j(r,1),r.m(e,t)):r&&(se(),L(r,1,1,()=>{r=null}),ne()),d[4]?c?(c.p(d,u),u&16&&j(c,1)):(c=Se(d),c.c(),j(c,1),c.m(e,null)):c&&(se(),L(c,1,1,()=>{c=null}),ne())},i(d){i||(j(s),j(r),j(c),i=!0)},o(d){L(s),L(r),L(c),i=!1},d(d){d&&w(e),s&&s.d(),r&&r.d(),c&&c.d()}}}const Q=5;function ze(n,e,l){let t={x:2,y:2},i=1,s=W[0].name,r=!1,c=!1,d=0,u=0,C=ie[0];const m=y=>{y.key==="ArrowUp"&&(y.preventDefault(),f("up")),y.key==="ArrowDown"&&(y.preventDefault(),f("down")),y.key==="ArrowLeft"&&(y.preventDefault(),f("left")),y.key==="ArrowRight"&&(y.preventDefault(),f("right"))},a=(y,b,S,g)=>{try{if(S.x===y&&S.y===b)return"player";const p=J.find(_=>_.id===g),E=p.rocks.find(_=>_.x===y&&_.y===b);return(E==null?void 0:E.type)==="plain"?"rock-plain":(E==null?void 0:E.type)==="smooth"?"rock-smooth":p.exits.find(_=>_.x===y&&_.y===b)?"exit":""}catch(p){console.error(p)}},o=()=>{const y=J.find(S=>S.id===i).exits.find(S=>S.x===t.x&&S.y===t.y),b=W.find(S=>S.id===J.find(g=>g.id===y.destGridId).stageId);if(d<b.expReq){alert("Not enough experience to use portal! (Requires "+b.expReq+" experience)");return}y&&(l(1,i=y.destGridId),localStorage.setItem("curStageId",b.id),localStorage.setItem("gridId",i),l(2,s=b.name),l(0,t=y.spawn))},f=y=>{try{let b={...t};if(y==="up"&&(b.y-=1),y==="down"&&(b.y+=1),y==="left"&&(b.x-=1),y==="right"&&(b.x+=1),b.x<0||b.x>=Q||b.y<0||b.y>=Q)return;const S=J.find(g=>g.id===i);S.rocks.find(g=>g.x===b.x&&g.y===b.y)||l(0,t=b),S.exits.find(g=>g.x===t.x&&g.y===t.y)&&o()}catch(b){console.error(b)}};return De(()=>{ue.set(!0),_e.set(!0),localStorage.getItem("curStageId")&&l(2,s=W.find(y=>y.id===parseInt(localStorage.getItem("curStageId"))).name),localStorage.getItem("gridId")&&l(1,i=parseInt(localStorage.getItem("gridId"))),localStorage.getItem("playerExperience")&&(d=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&l(5,u=parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&l(6,C=ie.find(y=>y.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",m)}),Pe(()=>{ue.set(!1),_e.set(!1),typeof window<"u"&&window.removeEventListener("keydown",m)}),[t,i,s,r,c,u,C,a,f,()=>l(3,r=!0),()=>l(4,c=!0),()=>l(3,r=!1),()=>l(4,c=!1)]}class Ze extends te{constructor(e){super(),le(this,e,ze,Le,Z,{})}}export{Ze as component};
