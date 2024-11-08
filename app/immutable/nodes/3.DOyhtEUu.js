import{s as ke,a as de,b as ue,n as he,r as Ee,o as Ce,d as ye}from"../chunks/scheduler.C5a7OfxR.js";import{S as De,i as Ie,e as D,t as j,s as G,c as I,a as z,b as P,d as V,f as N,k as ge,l as m,m as O,g as ve,h as s,n as _e,j as W}from"../chunks/index.D0FX01Aq.js";import{i as Me}from"../chunks/store.CWnBpkn4.js";function we(l){let f,e,R,S,t,c,i,k,F,p,d,b,U,T,E,g,x,X,H,B,J,Z,y,q,$,L,r="Attack",o,n,_="Special Attack",C,v,M,u,w,A,ee,se,Y,ae,te,re,ie;return{c(){f=D("div"),e=D("div"),R=D("div"),S=j("Player HP: "),t=j(l[2]),c=G(),i=D("div"),k=j("Player MP: "),F=j(l[3]),p=G(),d=D("div"),b=j("Enemy HP: "),U=j(l[4]),T=G(),E=D("div"),g=D("img"),X=G(),H=D("div"),B=D("div"),Z=G(),y=D("img"),$=G(),L=D("button"),L.textContent=r,o=G(),n=D("button"),n.textContent=_,C=G(),v=D("div"),M=j(l[5]),u=G(),w=D("div"),A=j("Experience: "),ee=j(l[0]),se=G(),Y=D("div"),ae=j("Drachmas: "),te=j(l[1]),this.h()},l(h){f=I(h,"DIV",{class:!0});var a=z(f);e=I(a,"DIV",{class:!0});var K=z(e);R=I(K,"DIV",{});var oe=z(R);S=P(oe,"Player HP: "),t=P(oe,l[2]),oe.forEach(V),c=N(K),i=I(K,"DIV",{});var le=z(i);k=P(le,"Player MP: "),F=P(le,l[3]),le.forEach(V),p=N(K),d=I(K,"DIV",{});var ce=z(d);b=P(ce,"Enemy HP: "),U=P(ce,l[4]),ce.forEach(V),K.forEach(V),T=N(a),E=I(a,"DIV",{class:!0});var Q=z(E);g=I(Q,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),X=N(Q),H=I(Q,"DIV",{class:!0});var pe=z(H);B=I(pe,"DIV",{class:!0}),z(B).forEach(V),pe.forEach(V),Z=N(Q),y=I(Q,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Q.forEach(V),$=N(a),L=I(a,"BUTTON",{"data-svelte-h":!0}),ge(L)!=="svelte-ig8gg4"&&(L.textContent=r),o=N(a),n=I(a,"BUTTON",{"data-svelte-h":!0}),ge(n)!=="svelte-11zl5of"&&(n.textContent=_),C=N(a),v=I(a,"DIV",{class:!0});var me=z(v);M=P(me,l[5]),me.forEach(V),u=N(a),w=I(a,"DIV",{class:!0});var ne=z(w);A=P(ne,"Experience: "),ee=P(ne,l[0]),ne.forEach(V),se=N(a),Y=I(a,"DIV",{class:!0});var fe=z(Y);ae=P(fe,"Drachmas: "),te=P(fe,l[1]),fe.forEach(V),a.forEach(V),this.h()},h(){m(e,"class","stats svelte-o0ze0j"),de(g.src,x=l[9].img)||m(g,"src",x),m(g,"alt",l[9].name),m(g,"width","128px"),m(g,"height","128px"),m(g,"class","svelte-o0ze0j"),O(g,"attack",l[6]),O(g,"damage",l[8]),m(B,"class",J=ue(l[7]?l[9].specialEffect:"")+" svelte-o0ze0j"),m(H,"class","special-effect-container svelte-o0ze0j"),m(y,"class","enemy-creature svelte-o0ze0j"),de(y.src,q=l[10].img)||m(y,"src",q),m(y,"alt",l[10].name),m(y,"width","128px"),m(y,"height","128px"),O(y,"enemy-attack",l[8]),O(y,"enemy-damage",l[6]),m(E,"class","creatures svelte-o0ze0j"),m(v,"class","combat-alert svelte-o0ze0j"),m(w,"class","experience svelte-o0ze0j"),m(Y,"class","drachmas svelte-o0ze0j"),m(f,"class","game-container svelte-o0ze0j")},m(h,a){ve(h,f,a),s(f,e),s(e,R),s(R,S),s(R,t),s(e,c),s(e,i),s(i,k),s(i,F),s(e,p),s(e,d),s(d,b),s(d,U),s(f,T),s(f,E),s(E,g),s(E,X),s(E,H),s(H,B),s(E,Z),s(E,y),s(f,$),s(f,L),s(f,o),s(f,n),s(f,C),s(f,v),s(v,M),s(f,u),s(f,w),s(w,A),s(w,ee),s(f,se),s(f,Y),s(Y,ae),s(Y,te),re||(ie=[_e(L,"click",l[12]),_e(n,"click",l[13])],re=!0)},p(h,[a]){a&4&&W(t,h[2]),a&8&&W(F,h[3]),a&16&&W(U,h[4]),a&64&&O(g,"attack",h[6]),a&256&&O(g,"damage",h[8]),a&128&&J!==(J=ue(h[7]?h[9].specialEffect:"")+" svelte-o0ze0j")&&m(B,"class",J),a&256&&O(y,"enemy-attack",h[8]),a&64&&O(y,"enemy-damage",h[6]),a&32&&W(M,h[5]),a&1&&W(ee,h[0]),a&2&&W(te,h[1])},i:he,o:he,d(h){h&&V(f),re=!1,Ee(ie)}}}function be(l,f,e){let R=0,S=0,t={id:1,name:"Demon",img:"demon_creature.png",price:50,hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},c={id:1,name:"Gust of Hermes",img:"relic1.png",description:"Grants the user's summon +5 speed while relic is being used. (Infinite duration, and only one relic can be active at a time)",hpMod:0,attackMod:0,speedMod:5,defenseMod:0,criticalMod:0,mpMod:0,mpRegenMod:0,specialMod:0,price:0},i=t.hp+c.hpMod,k=t.mp+c.mpMod,F=k,p={id:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},d=p.hp,b="",U=0,T=!1,E=!1,g=!1;const x=()=>{if(k!==t.mp+c.mpMod&&k+t.mpRegen+c.mpRegenMod<=t.mp+c.mpMod){e(3,k=k+t.mpRegen+c.mpRegenMod);return}e(3,k=t.mp+c.mpMod)},X=(r,o)=>{if(i-(p.attack-p.attack*r)*o<=0){e(5,b="Defeat!"),e(2,i=0);return}e(2,i=i-(p.attack-p.attack*r)*o)},H=(r,o,n)=>{try{const _=t.speed+c.speedMod;let C=(t.defense+c.defenseMod)/100,v=p.critical/100,M=1,u=!1;if(p.attackType==="Magic"&&(C=0),p.speed<_?u=Math.random()>=.5:u=Math.random()>=.8,U>1&&!u&&!r&&(u=!0),!u&&r&&e(5,b="Enemy was too slow!"),!u&&!r){e(3,k=F),U+=1,q(o,n);return}o===t.attackName&&x(),u&&r&&e(5,b="Both abilities succeeded."),u&&!r&&e(5,b="Your summon was too slow!"),u&&(Math.random()<=v&&(M=1.5),p.attackType==="Poison"&&M===1&&(M=1.5),X(C,M),e(8,g=!0),setTimeout(()=>e(8,g=!1),500))}catch(_){console.error(_)}},B=(r,o,n,_,C)=>{C==="Lifesteal"&&n&&(i+r*o*.2>t.hp+c.hpMod?e(2,i=t.hp+c.hpMod):e(2,i=i+r*o*.2)),H(n,_,C)},J=(r,o,n,_,C)=>{r&&(i+o*n>t.hp+c.hpMod?e(2,i=t.hp+c.hpMod):e(2,i=i+o*n)),H(r,_,C)},Z=(r,o,n,_,C,v,M)=>{if(e(3,k=k-n),M!=="Heal"){if(d-(o-o*C)*_<=0&&r){e(4,d=0),e(5,b="Victory!"),e(0,R+=p.reward*2),e(1,S+=p.reward),e(6,T=!0),setTimeout(()=>e(6,T=!1),500),e(7,E=!0),setTimeout(()=>e(7,E=!1),500);return}r&&(e(4,d=d-(o-o*C)*_),e(6,T=!0),setTimeout(()=>e(6,T=!1),500),e(7,E=!0),setTimeout(()=>e(7,E=!1),500)),B(o,_,r,v,M);return}J(r,o,_,v,M)},y=()=>{(i<=0||d<=0)&&(e(2,i=t.hp+c.hpMod),e(3,k=t.mp+c.mpMod),e(4,d=p.hp),e(5,b=""))},q=(r,o)=>{try{const n=t.attack+c.attackMod,_=t.speed+c.speedMod,C=(t.critical+c.criticalMod)/100;let v=t.special+c.specialMod,M=t.specialCost,u=p.defense/100,w=!1,A=1;if(y(),r===t.specialName2&&(v=t.special2+c.specialMod,M=t.specialCost2),o==="Magic"&&(u=0),_<p.speed?w=Math.random()>=.5:w=Math.random()>=.8,Math.random()<=C&&(A=1.5),o==="Poison"&&A===1&&(A=1.5),r===t.attackName){if(d-(n-n*u)*A<=0&&w){e(4,d=0),e(5,b="Victory!"),e(0,R+=p.reward*2),e(1,S+=p.reward),e(6,T=!0),setTimeout(()=>e(6,T=!1),500);return}w&&(e(4,d=d-(n-n*u)*A),e(6,T=!0),setTimeout(()=>e(6,T=!1),500)),H(w,r,o);return}k>=M?Z(w,v,M,A,u,r,o):e(5,b="Not enough MP!")}catch(n){console.error(n)}};return Ce(()=>{Me.set(!0)}),ye(()=>{Me.set(!1)}),[R,S,i,k,d,b,T,E,g,t,p,q,()=>q(t.attackName,t.attackType),()=>q(t.specialName,t.specialType)]}class ze extends De{constructor(f){super(),Ie(this,f,be,we,ke,{})}}export{ze as component};
