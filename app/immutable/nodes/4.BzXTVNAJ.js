import{t as D,e as A,a as G,s as E,b as ue,c as ye}from"../chunks/B_G1IST3.js";import{i as Q}from"../chunks/MmwkNIPH.js";import{ab as V,az as ae,af as o,ah as s,ag as r,ae as X,d as t,ad as Y,e as ce,aq as me,av as ge,au as L,Y as w,ac as ie}from"../chunks/BUi6LC3r.js";import{i as z}from"../chunks/Bjyu6XA6.js";import{e as J,i as O}from"../chunks/BXctVq_E.js";import{s as F,t as xe,i as oe,b as ne,a as de}from"../chunks/B_XFWXRK.js";import{s as j,r as te}from"../chunks/Bej4_qsT.js";import{p as U}from"../chunks/NCp_TbZO.js";import{g as he,b as le}from"../chunks/DADz807L.js";const T=[{id:1,stageId:1,rocks:[{x:1,y:1,type:"plain"},{x:0,y:3,type:"plain"}],exits:[{x:0,y:0,destGridId:2,spawn:{x:4,y:4}},{x:4,y:2,destGridId:2,spawn:{x:0,y:2}},{x:2,y:4,destGridId:2,spawn:{x:2,y:0}}]},{id:2,stageId:1,rocks:[{x:3,y:1,type:"smooth"}],exits:[{x:1,y:0,destGridId:1,spawn:{x:3,y:4}},{x:4,y:3,destGridId:3,spawn:{x:0,y:1}}]},{id:3,stageId:2,rocks:[{x:1,y:3,type:"smooth"},{x:4,y:1,type:"smooth"}],exits:[{x:0,y:4,destGridId:2,spawn:{x:4,y:0}},{x:4,y:0,destGridId:4,spawn:{x:0,y:4}},{x:2,y:0,destGridId:4,spawn:{x:2,y:4}}]},{id:4,stageId:2,rocks:[{x:0,y:2,type:"smooth"},{x:2,y:3,type:"plain"}],exits:[{x:1,y:4,destGridId:3,spawn:{x:3,y:0}},{x:3,y:0,destGridId:5,spawn:{x:1,y:4}}]},{id:5,stageId:3,rocks:[{x:3,y:4,type:"plain"},{x:1,y:2,type:"plain"}],exits:[{x:0,y:4,destGridId:4,spawn:{x:3,y:0}},{x:1,y:0,destGridId:6,spawn:{x:3,y:0}}]},{id:6,stageId:3,rocks:[{x:0,y:3,type:"smooth"},{x:4,y:3,type:"smooth"}],exits:[{x:0,y:0,destGridId:5,spawn:{x:3,y:0}}]}];var Ie=D('<section><div class="button-row svelte-120f91c"><button>←</button> <div class="svelte-120f91c"><button>↑</button> <button>↓</button></div> <button>→</button></div> <div class="button-row svelte-120f91c"><button>Relic Store</button> <button>World Map</button> <button>Battle</button></div></section>');function _e(P,_){V(_,!1);let v=U(_,"movePlayer",8);const i=ae();Q();var n=Ie(),S=o(n),g=o(S),x=s(g,2),k=o(x),u=s(k,2);r(x);var p=s(x,2);r(S);var y=s(S,2),h=o(y),M=s(h,2),m=s(M,2);r(y),r(n),A("click",g,()=>v()("left")),A("click",k,()=>v()("up")),A("click",u,()=>v()("down")),A("click",p,()=>v()("right")),A("click",h,()=>i("openStore")),A("click",M,()=>i("openMap")),A("click",m,()=>he(le+"/game")),G(P,n),X()}var be=D("<button>Buy</button>"),we=D('<div class="menu-item svelte-p5wbah"><img width="46px" height="46px" class="svelte-p5wbah"> <h4> </h4> <p class="active"><!></p> <p> </p> <p> </p> <!></div>'),Ge=D('<section><button>Travel</button> <div class="menu svelte-p5wbah"><h2>Relic Store</h2> <h4> </h4> <h4> </h4> <div></div></div></section>');function Se(P,_){V(_,!1);let v=U(_,"drachmas",12),i=U(_,"chosenRelic",12),n=U(_,"curGridId",8);const S=j.find(c=>c.id===T.find(d=>d.id===n()).stageId),g=te.filter(c=>c.stageId===S.id),x=ae(),k=c=>{try{if(v()>=c.price){v(v()-c.price),localStorage.setItem("drachmas",v()),i(c),localStorage.setItem("chosenRelicId",c.id),window.location.reload();return}alert("Not enough drachmas to spend!")}catch(d){console.error(d)}};Q();var u=Ge(),p=o(u),y=s(p,2),h=s(o(y),2),M=o(h);r(h);var m=s(h,2),C=o(m);r(m);var q=s(m,2);J(q,5,()=>g,O,(c,d)=>{var W=we(),B=o(W),K=s(B,2),e=o(K,!0);r(K);var a=s(K,2),l=o(a);{var f=$=>{var N=ue("Active");G($,N)};z(l,$=>{t(d).id===i().id&&$(f)})}r(a);var R=s(a,2),b=o(R,!0);r(R);var I=s(R,2),Z=o(I);r(I);var re=s(I,2);{var H=$=>{var N=be();A("click",N,()=>k(t(d))),G($,N)};z(re,$=>{t(d).id!==i().id&&$(H)})}r(W),Y(()=>{F(B,"src",le+"/game/"+t(d).img),F(B,"alt",t(d).name),E(e,t(d).name),E(b,t(d).description),E(Z,`Price: ${t(d).price??""} drachmas`)}),G(c,W)}),r(q),r(y),r(u),Y(c=>{E(M,`Chosen Relic: ${c??""}`),E(C,`Drachmas: ${v()??""}`)},[()=>`${i().name}
    (${j.find(c=>c.id===i().stageId).name})`],ce),A("click",p,()=>x("close")),G(P,u),X()}var ke=D('<p class="svelte-h1j54a">Current Stage</p>'),Re=D('<div class="stage svelte-h1j54a"><h4 class="svelte-h1j54a"> </h4> <!> <p class="svelte-h1j54a"> </p></div>'),$e=D('<section><button>Travel</button> <h2 class="svelte-h1j54a">World Map</h2> <div class="world-map svelte-h1j54a"></div></section>');function Ae(P,_){V(_,!1);let v=U(_,"curGridId",8);const i=ae(),n=j.find(u=>u.id===T.find(p=>p.id===v()).stageId);let S=Math.max(...j.map(u=>u.row));Q();var g=$e(),x=o(g),k=s(x,4);F(k,"style",`grid-template-rows: repeat(${S??""}, 1fr);`),J(k,5,()=>j,O,(u,p)=>{var y=Re(),h=o(y),M=o(h,!0);r(h);var m=s(h,2);{var C=d=>{var W=ke();G(d,W)};z(m,d=>{t(p).id===n.id&&d(C)})}var q=s(m,2),c=o(q);r(q),r(y),Y(()=>{F(y,"style",`grid-column: ${t(p).col??""}; grid-row: ${t(p).row??""};`),xe(y,"current",t(p).id===n.id),E(M,t(p).name),E(c,`Exp. Requirement: ${t(p).expReq??""}`)}),G(u,y)}),r(k),r(g),A("click",x,()=>i("close")),G(P,g),X()}var De=D("<div></div>"),Me=D("<section><h2> </h2> <div></div></section> <!>",1),qe=D('<main class="game-container svelte-191k7nf"><!> <!> <!></main>');function Ue(P,_){V(_,!1);const v=5;let i=L({x:2,y:2}),n=L(1),S=L(j[0].name),g=L(!1),x=L(!1),k=0,u=L(0),p=L(te[0]);const y=e=>{e.key==="ArrowUp"&&(e.preventDefault(),m("up")),e.key==="ArrowDown"&&(e.preventDefault(),m("down")),e.key==="ArrowLeft"&&(e.preventDefault(),m("left")),e.key==="ArrowRight"&&(e.preventDefault(),m("right"))},h=(e,a,l,f)=>{try{if(l.x===e&&l.y===a)return"player";const R=T.find(I=>I.id===f),b=R.rocks.find(I=>I.x===e&&I.y===a);return(b==null?void 0:b.type)==="plain"?"rock-plain":(b==null?void 0:b.type)==="smooth"?"rock-smooth":R.exits.find(I=>I.x===e&&I.y===a)?"exit":""}catch(R){console.error(R)}},M=()=>{const e=T.find(l=>l.id===t(n)).exits.find(l=>l.x===t(i).x&&l.y===t(i).y),a=j.find(l=>l.id===T.find(f=>f.id===e.destGridId).stageId);if(k<a.expReq){alert("Not enough experience to use portal! (Requires "+a.expReq+" experience)");return}e&&(w(n,e.destGridId),localStorage.setItem("curStageId",a.id),localStorage.setItem("gridId",t(n)),w(S,a.name),w(i,e.spawn))},m=e=>{try{let a={...t(i)};if(e==="up"&&(a.y-=1),e==="down"&&(a.y+=1),e==="left"&&(a.x-=1),e==="right"&&(a.x+=1),a.x<0||a.x>=v||a.y<0||a.y>=v)return;const l=T.find(f=>f.id===t(n));l.rocks.find(f=>f.x===a.x&&f.y===a.y)||w(i,a),l.exits.find(f=>f.x===t(i).x&&f.y===t(i).y)&&M()}catch(a){console.error(a)}};me(()=>{oe.set(!0),ne.set(!0),localStorage.getItem("curStageId")&&w(S,j.find(e=>e.id===parseInt(localStorage.getItem("curStageId"))).name),localStorage.getItem("gridId")&&w(n,parseInt(localStorage.getItem("gridId"))),localStorage.getItem("playerExperience")&&(k=parseInt(localStorage.getItem("playerExperience"))),localStorage.getItem("drachmas")&&w(u,parseInt(localStorage.getItem("drachmas"))),localStorage.getItem("chosenRelicId")&&w(p,te.find(e=>e.id===parseInt(localStorage.getItem("chosenRelicId")))),typeof window<"u"&&window.addEventListener("keydown",y)}),ge(()=>{oe.set(!1),ne.set(!1),typeof window<"u"&&window.removeEventListener("keydown",y)}),Q();var C=qe(),q=o(C);{var c=e=>{var a=Me(),l=ie(a),f=o(l),R=o(f,!0);r(f);var b=s(f,2);J(b,5,()=>Array(v),O,(Z,re,H)=>{var $=ye(),N=ie($);J(N,1,()=>Array(v),O,(ve,Ee,se,je)=>{var ee=De();Y((pe,fe)=>{de(ee,`cell ${pe??""} svelte-191k7nf`),F(ee,"style",`background: ${fe??""}`)},[()=>h(se,H,t(i),t(n)),()=>h(se,H,t(i),t(n))==="player"?t(p).style:""],ce),G(ve,ee)}),G(Z,$)}),r(b),r(l);var I=s(l,2);_e(I,{movePlayer:m,$$events:{openStore:()=>w(g,!0),openMap:()=>w(x,!0)}}),Y(()=>{E(R,t(S)),de(b,`grid
    grid-bg-${t(n)??""} svelte-191k7nf`)}),G(e,a)};z(q,e=>{!t(g)&&!t(x)&&e(c)})}var d=s(q,2);{var W=e=>{Se(e,{get drachmas(){return t(u)},get chosenRelic(){return t(p)},get curGridId(){return t(n)},$$events:{close:()=>w(g,!1)}})};z(d,e=>{t(g)&&e(W)})}var B=s(d,2);{var K=e=>{Ae(e,{get curGridId(){return t(n)},$$events:{close:()=>w(x,!1)}})};z(B,e=>{t(x)&&e(K)})}r(C),G(P,C),X()}export{Ue as component};
