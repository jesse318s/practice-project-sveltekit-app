import{s as ke,a as ue,b as de,n as he,r as be,o as Ee,d as Ce}from"../chunks/scheduler.C5a7OfxR.js";import{S as ye,i as De,e as y,t as P,s as B,c as D,a as R,b as H,d as V,f as L,k as ge,l as m,m as U,g as Ie,h as s,n as _e,j as W}from"../chunks/index.D0FX01Aq.js";import{i as Me}from"../chunks/store.CWnBpkn4.js";function ve(o){let f,e,A,q,t,c,i,k,F,p,u,w,j,T,b,g,x,X,G,O,J,Z,C,z,$,S,r="Attack",l,n,_="Special Attack",E,I,M,d,v,N,ee,se,Y,ae,te,re,ie;return{c(){f=y("div"),e=y("div"),A=y("div"),q=P("Player HP: "),t=P(o[2]),c=B(),i=y("div"),k=P("Player MP: "),F=P(o[3]),p=B(),u=y("div"),w=P("Enemy HP: "),j=P(o[4]),T=B(),b=y("div"),g=y("img"),X=B(),G=y("div"),O=y("div"),Z=B(),C=y("img"),$=B(),S=y("button"),S.textContent=r,l=B(),n=y("button"),n.textContent=_,E=B(),I=y("div"),M=P(o[5]),d=B(),v=y("div"),N=P("Experience: "),ee=P(o[0]),se=B(),Y=y("div"),ae=P("Drachmas: "),te=P(o[1]),this.h()},l(h){f=D(h,"DIV",{class:!0});var a=R(f);e=D(a,"DIV",{class:!0});var K=R(e);A=D(K,"DIV",{});var le=R(A);q=H(le,"Player HP: "),t=H(le,o[2]),le.forEach(V),c=L(K),i=D(K,"DIV",{});var oe=R(i);k=H(oe,"Player MP: "),F=H(oe,o[3]),oe.forEach(V),p=L(K),u=D(K,"DIV",{});var ce=R(u);w=H(ce,"Enemy HP: "),j=H(ce,o[4]),ce.forEach(V),K.forEach(V),T=L(a),b=D(a,"DIV",{class:!0});var Q=R(b);g=D(Q,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),X=L(Q),G=D(Q,"DIV",{class:!0});var pe=R(G);O=D(pe,"DIV",{class:!0}),R(O).forEach(V),pe.forEach(V),Z=L(Q),C=D(Q,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),Q.forEach(V),$=L(a),S=D(a,"BUTTON",{"data-svelte-h":!0}),ge(S)!=="svelte-ig8gg4"&&(S.textContent=r),l=L(a),n=D(a,"BUTTON",{"data-svelte-h":!0}),ge(n)!=="svelte-11zl5of"&&(n.textContent=_),E=L(a),I=D(a,"DIV",{class:!0});var me=R(I);M=H(me,o[5]),me.forEach(V),d=L(a),v=D(a,"DIV",{class:!0});var ne=R(v);N=H(ne,"Experience: "),ee=H(ne,o[0]),ne.forEach(V),se=L(a),Y=D(a,"DIV",{class:!0});var fe=R(Y);ae=H(fe,"Drachmas: "),te=H(fe,o[1]),fe.forEach(V),a.forEach(V),this.h()},h(){m(e,"class","stats svelte-u0bgh7"),ue(g.src,x=o[9].img)||m(g,"src",x),m(g,"alt",o[9].name),m(g,"width","128px"),m(g,"height","128px"),m(g,"class","svelte-u0bgh7"),U(g,"attack",o[6]),U(g,"damage",o[8]),m(O,"class",J=de(o[7]?o[9].specialEffect:"")+" svelte-u0bgh7"),m(G,"class","special-effect-container svelte-u0bgh7"),m(C,"class","enemy-creature svelte-u0bgh7"),ue(C.src,z=o[10].img)||m(C,"src",z),m(C,"alt",o[10].name),m(C,"width","128px"),m(C,"height","128px"),U(C,"enemy-attack",o[8]),U(C,"enemy-damage",o[6]),m(b,"class","creatures svelte-u0bgh7"),m(I,"class","combat-alert svelte-u0bgh7"),m(v,"class","experience svelte-u0bgh7"),m(Y,"class","drachmas svelte-u0bgh7"),m(f,"class","game-container svelte-u0bgh7")},m(h,a){Ie(h,f,a),s(f,e),s(e,A),s(A,q),s(A,t),s(e,c),s(e,i),s(i,k),s(i,F),s(e,p),s(e,u),s(u,w),s(u,j),s(f,T),s(f,b),s(b,g),s(b,X),s(b,G),s(G,O),s(b,Z),s(b,C),s(f,$),s(f,S),s(f,l),s(f,n),s(f,E),s(f,I),s(I,M),s(f,d),s(f,v),s(v,N),s(v,ee),s(f,se),s(f,Y),s(Y,ae),s(Y,te),re||(ie=[_e(S,"click",o[12]),_e(n,"click",o[13])],re=!0)},p(h,[a]){a&4&&W(t,h[2]),a&8&&W(F,h[3]),a&16&&W(j,h[4]),a&64&&U(g,"attack",h[6]),a&256&&U(g,"damage",h[8]),a&128&&J!==(J=de(h[7]?h[9].specialEffect:"")+" svelte-u0bgh7")&&m(O,"class",J),a&256&&U(C,"enemy-attack",h[8]),a&64&&U(C,"enemy-damage",h[6]),a&32&&W(M,h[5]),a&1&&W(ee,h[0]),a&2&&W(te,h[1])},i:he,o:he,d(h){h&&V(f),re=!1,be(ie)}}}function we(o,f,e){let A=0,q=0,t={id:1,name:"Demon",img:"demon_creature.png",price:50,hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},c={id:1,name:"Gust of Hermes",img:"relic1.png",description:"Grants the user's summon +5 speed while relic is being used. (Infinite duration, and only one relic can be active at a time)",hpMod:0,attackMod:0,speedMod:5,defenseMod:0,criticalMod:0,mpMod:0,mpRegenMod:0,specialMod:0,price:0},i=t.hp+c.hpMod,k=t.mp+c.mpMod,F=k,p={id:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},u=p.hp,w="",j=0,T=!1,b=!1,g=!1;const x=()=>{if(k!==t.mp+c.mpMod&&k+t.mpRegen+c.mpRegenMod<=t.mp+c.mpMod){e(3,k=k+t.mpRegen+c.mpRegenMod);return}e(3,k=t.mp+c.mpMod)},X=(r,l)=>{if(i-(p.attack-p.attack*r)*l<=0){e(5,w="Defeat!"),e(2,i=0);return}e(2,i=i-(p.attack-p.attack*r)*l)},G=(r,l,n)=>{try{const _=t.speed+c.speedMod;let E=(t.defense+c.defenseMod)/100,I=p.critical/100,M=1,d=!1;if(p.attackType==="Magic"&&(E=0),p.speed<_?d=Math.random()>=.5:d=Math.random()>=.8,j>1&&!d&&!r&&(d=!0),!d&&r&&e(5,w="Enemy was too slow!"),!d&&!r){e(3,k=F),j+=1,z(l,n);return}l===t.attackName&&x(),d&&r&&e(5,w="Both abilities succeeded."),d&&!r&&e(5,w="Your summon was too slow!"),d&&(Math.random()<=I&&(M=1.5),p.attackType==="Poison"&&M===1&&(M=1.5),X(E,M),e(8,g=!0),setTimeout(()=>e(8,g=!1),500))}catch(_){console.error(_)}},O=(r,l,n,_,E)=>{E==="Lifesteal"&&n&&(i+r*l*.2>t.hp+c.hpMod?e(2,i=t.hp+c.hpMod):e(2,i=i+r*l*.2)),G(n,_,E)},J=(r,l,n,_,E)=>{r&&(i+l*n>t.hp+c.hpMod?e(2,i=t.hp+c.hpMod):e(2,i=i+l*n)),G(r,_,E)},Z=(r,l,n,_,E,I,M)=>{if(e(3,k=k-n),M!=="Heal"){if(u-(l-l*E)*_<=0&&r){e(4,u=0),e(5,w="Victory!"),e(0,A+=p.reward*2),e(1,q+=p.reward),e(6,T=!0),setTimeout(()=>e(6,T=!1),500),e(7,b=!0),setTimeout(()=>e(7,b=!1),500);return}r&&(e(4,u=u-(l-l*E)*_),e(6,T=!0),setTimeout(()=>e(6,T=!1),500),e(7,b=!0),setTimeout(()=>e(7,b=!1),500)),O(l,_,r,I,M);return}J(r,l,_,I,M)},C=()=>{(i<=0||u<=0)&&(e(2,i=t.hp+c.hpMod),e(3,k=t.mp+c.mpMod),e(4,u=p.hp),e(5,w=""))},z=(r,l)=>{try{const n=t.attack+c.attackMod,_=t.speed+c.speedMod,E=(t.critical+c.criticalMod)/100;let I=t.special+c.specialMod,M=t.specialCost,d=p.defense/100,v=!1,N=1;if(C(),r===t.specialName2&&(I=t.special2+c.specialMod,M=t.specialCost2),l==="Magic"&&(d=0),_<p.speed?v=Math.random()>=.5:v=Math.random()>=.8,Math.random()<=E&&(N=1.5),l==="Poison"&&N===1&&(N=1.5),r===t.attackName){if(u-(n-n*d)*N<=0&&v){e(4,u=0),e(5,w="Victory!"),e(0,A+=p.reward*2),e(1,q+=p.reward),e(6,T=!0),setTimeout(()=>e(6,T=!1),500);return}v&&(e(4,u=u-(n-n*d)*N),e(6,T=!0),setTimeout(()=>e(6,T=!1),500)),G(v,r,l);return}k>=M?Z(v,I,M,N,d,r,l):e(5,w="Not enough MP!")}catch(n){console.error(n)}};return Ee(()=>{Me.set(!0)}),Ce(()=>{Me.set(!1)}),[A,q,i,k,u,w,T,b,g,t,p,z,()=>z(t.attackName,t.attackType),()=>z(t.specialName,t.specialType)]}class Re extends ye{constructor(f){super(),De(this,f,we,ve,ke,{})}}export{Re as component};
