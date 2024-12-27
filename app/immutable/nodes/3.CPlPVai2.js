import{s as ve,e as y,a as O,c as _,b as D,g as B,f as C,K as ye,p as h,L as J,M as we,i as Ee,h as a,n as _e,N as he,O as pe,w as Ge,z as Ne,t as U,d as H,j as re,o as je,P as qe}from"../chunks/scheduler.Cbetkgfn.js";import{S as Ce,i as Te,b as De,d as Pe,m as Ae,a as Ve,t as Re,e as Ue}from"../chunks/index.OYoryRwg.js";import{s as He,r as Oe}from"../chunks/relics.Bej4_qsT.js";import{i as Be}from"../chunks/store.CKltHNWN.js";import{b as Z,g as Fe}from"../chunks/entry.CoELHX39.js";const Me=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",hp:125,attack:50,attackName:"Strike",attackType:"Normal",speed:30,defense:30,critical:10,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Scorch",specialType:"Magic",specialEffect:"special-effect-4"},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",hp:100,attack:50,attackName:"Stab",attackType:"Normal",speed:40,defense:20,critical:50,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Ruin",specialType:"Magic",specialEffect:"special-effect-2"}],ze=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50}];function Ke(t){let s,e,f,i,n,P,l,r,g,k,c,V,o,u,p,q,b,T,M,Q,z,L,x,ae,G;return{c(){s=y("section"),e=y("div"),f=y("div"),i=y("div"),n=y("img"),r=O(),g=y("div"),k=O(),c=y("div"),o=O(),u=y("div"),p=y("img"),T=O(),M=y("div"),Q=O(),z=y("div"),L=y("div"),ae=O(),G=y("div"),this.h()},l(S){s=_(S,"SECTION",{class:!0});var v=D(s);e=_(v,"DIV",{class:!0});var se=D(e);f=_(se,"DIV",{class:!0});var $=D(f);i=_($,"DIV",{class:!0});var W=D(i);n=_(W,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),r=B(W),g=_(W,"DIV",{class:!0}),D(g).forEach(C),k=B(W),c=_(W,"DIV",{class:!0}),D(c).forEach(C),W.forEach(C),o=B($),u=_($,"DIV",{class:!0});var X=D(u);p=_(X,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),T=B(X),M=_(X,"DIV",{class:!0}),D(M).forEach(C),Q=B(X),z=_(X,"DIV",{class:!0});var K=D(z);L=_(K,"DIV",{class:!0}),D(L).forEach(C),K.forEach(C),X.forEach(C),$.forEach(C),ae=B(se),G=_(se,"DIV",{class:!0}),D(G).forEach(C),se.forEach(C),v.forEach(C),this.h()},h(){ye(n.src,P=Z+"/game/"+t[3].img)||h(n,"src",P),h(n,"width","128px"),h(n,"height","128px"),h(n,"alt",l=t[3].name),h(n,"class","svelte-b5b362"),J(n,"attack",t[0]),J(n,"hurt",t[1]),J(n,"aura",!t[2]),J(n,"player-using-special",t[2]),h(g,"class","shadow svelte-b5b362"),h(c,"class",V=we(t[2]?t[3].specialEffect:"")+" svelte-b5b362"),h(i,"class","creature player-creature svelte-b5b362"),ye(p.src,q=Z+"/game/"+t[5].img)||h(p,"src",q),h(p,"width","128px"),h(p,"height","128px"),h(p,"alt",b=t[5].name),h(p,"class","svelte-b5b362"),J(p,"enemy-attack",t[1]),J(p,"enemy-hurt",t[0]),J(p,"enemy-spawning",t[4]),h(M,"class","shadow svelte-b5b362"),h(L,"class",x=t[4]?"enemy-spawn":""),h(z,"class","enemy-spawn-container svelte-b5b362"),h(u,"class","creature enemy-creature svelte-b5b362"),h(f,"class","creatures-container svelte-b5b362"),h(G,"class","floor svelte-b5b362"),h(e,"class","battlefield svelte-b5b362"),h(s,"class","battle-container svelte-b5b362")},m(S,v){Ee(S,s,v),a(s,e),a(e,f),a(f,i),a(i,n),a(i,r),a(i,g),a(i,k),a(i,c),a(f,o),a(f,u),a(u,p),a(u,T),a(u,M),a(u,Q),a(u,z),a(z,L),a(e,ae),a(e,G)},p(S,[v]){v&8&&!ye(n.src,P=Z+"/game/"+S[3].img)&&h(n,"src",P),v&8&&l!==(l=S[3].name)&&h(n,"alt",l),v&1&&J(n,"attack",S[0]),v&2&&J(n,"hurt",S[1]),v&4&&J(n,"aura",!S[2]),v&4&&J(n,"player-using-special",S[2]),v&12&&V!==(V=we(S[2]?S[3].specialEffect:"")+" svelte-b5b362")&&h(c,"class",V),v&32&&!ye(p.src,q=Z+"/game/"+S[5].img)&&h(p,"src",q),v&32&&b!==(b=S[5].name)&&h(p,"alt",b),v&2&&J(p,"enemy-attack",S[1]),v&1&&J(p,"enemy-hurt",S[0]),v&16&&J(p,"enemy-spawning",S[4]),v&16&&x!==(x=S[4]?"enemy-spawn":"")&&h(L,"class",x)},i:_e,o:_e,d(S){S&&C(s)}}}function Ye(t,s,e){let{playerIsAttacking:f}=s,{enemyIsAttacking:i}=s,{playerIsUsingSpecial:n}=s,{playerCreature:P}=s,{enemyIsSpawning:l}=s,{enemyCreature:r}=s;return t.$$set=g=>{"playerIsAttacking"in g&&e(0,f=g.playerIsAttacking),"enemyIsAttacking"in g&&e(1,i=g.enemyIsAttacking),"playerIsUsingSpecial"in g&&e(2,n=g.playerIsUsingSpecial),"playerCreature"in g&&e(3,P=g.playerCreature),"enemyIsSpawning"in g&&e(4,l=g.enemyIsSpawning),"enemyCreature"in g&&e(5,r=g.enemyCreature)},[f,i,n,P,l,r]}class Je extends Ce{constructor(s){super(),Te(this,s,Ye,Ke,ve,{playerIsAttacking:0,enemyIsAttacking:1,playerIsUsingSpecial:2,playerCreature:3,enemyIsSpawning:4,enemyCreature:5})}}const Le=(t,s)=>{try{const f=[{label:"Name",value:t.name},{label:"HP",value:t.hp+s.hpMod},{label:"Speed",value:t.speed+s.speedMod},{label:"Defense",value:t.defense+s.defenseMod},{label:"Critical",value:t.critical+s.criticalMod},{label:"MP",value:t.mp+s.mpMod},{label:"MP Regen",value:t.mpRegen+s.mpRegenMod},{label:`
Attack Name`,value:t.attackName},{label:"Attack",value:t.attack+s.attackMod},{label:"Attack Type",value:t.attackType},{label:`
Special Name`,value:t.specialName},{label:"Special",value:t.special+s.specialMod},{label:"Special Cost",value:t.specialCost},{label:"Special Type",value:t.specialType}].map(i=>`${i.label}: ${i.value}`).join(`
`);alert(f)}catch(e){console.error(e)}};function Qe(t){let s,e,f="Attack",i,n,P="Special",l,r,g="Mimic Summon",k,c,V="View Stats",o,u,p="Travel",q,b;return{c(){s=y("section"),e=y("button"),e.textContent=f,i=O(),n=y("button"),n.textContent=P,l=O(),r=y("button"),r.textContent=g,k=O(),c=y("button"),c.textContent=V,o=O(),u=y("button"),u.textContent=p},l(T){s=_(T,"SECTION",{});var M=D(s);e=_(M,"BUTTON",{"data-svelte-h":!0}),he(e)!=="svelte-19y3ioo"&&(e.textContent=f),i=B(M),n=_(M,"BUTTON",{"data-svelte-h":!0}),he(n)!=="svelte-172d9ub"&&(n.textContent=P),l=B(M),r=_(M,"BUTTON",{"data-svelte-h":!0}),he(r)!=="svelte-zspdcm"&&(r.textContent=g),k=B(M),c=_(M,"BUTTON",{"data-svelte-h":!0}),he(c)!=="svelte-1wutj5b"&&(c.textContent=V),o=B(M),u=_(M,"BUTTON",{"data-svelte-h":!0}),he(u)!=="svelte-1hg8zdr"&&(u.textContent=p),M.forEach(C)},m(T,M){Ee(T,s,M),a(s,e),a(s,i),a(s,n),a(s,l),a(s,r),a(s,k),a(s,c),a(s,o),a(s,u),q||(b=[pe(e,"click",t[4]),pe(e,"contextmenu",t[5]),pe(n,"click",t[6]),pe(r,"click",function(){Ne(t[2])&&t[2].apply(this,arguments)}),pe(c,"click",function(){Ne(Le(t[1],t[3]))&&Le(t[1],t[3]).apply(this,arguments)}),pe(u,"click",t[7])],q=!0)},p(T,[M]){t=T},i:_e,o:_e,d(T){T&&C(s),q=!1,Ge(b)}}}function We(t,s,e){let{battleEnemy:f}=s,{playerCreature:i}=s,{swapCreature:n}=s,{chosenRelic:P}=s;const l=()=>f(i.attackName,i.attackType),r=c=>{c.preventDefault(),f(i.specialName,i.specialType)},g=()=>f(i.specialName,i.specialType),k=()=>{Fe(Z+"/game/world")};return t.$$set=c=>{"battleEnemy"in c&&e(0,f=c.battleEnemy),"playerCreature"in c&&e(1,i=c.playerCreature),"swapCreature"in c&&e(2,n=c.swapCreature),"chosenRelic"in c&&e(3,P=c.chosenRelic)},[f,i,n,P,l,r,g,k]}class Xe extends Ce{constructor(s){super(),Te(this,s,We,Qe,ve,{battleEnemy:0,playerCreature:1,swapCreature:2,chosenRelic:3})}}function Ze(t){let s,e,f,i=t[3].name+"",n,P,l,r,g,k,c,V,o,u,p,q,b,T,M,Q,z,L=t[4].hp+"",x,ae,G,S,v,se,$=t[4].mp+"",W,X,K,ue,ce,m,d=t[7].hp+"",N,A,w,ee=(t[9]||"The battle begins...")+"",j,R,F,le,ne,Y;return F=new Je({props:{playerIsAttacking:t[10],enemyIsAttacking:t[12],playerIsUsingSpecial:t[11],playerCreature:t[4],enemyIsSpawning:t[13],enemyCreature:t[7]}}),ne=new Xe({props:{battleEnemy:t[14],playerCreature:t[4],swapCreature:t[15],chosenRelic:t[2]}}),{c(){s=y("main"),e=y("section"),f=y("h2"),n=U(i),P=O(),l=y("div"),r=y("div"),g=y("div"),k=U("Experience: "),c=U(t[0]),V=O(),o=y("div"),u=U("Drachmas: "),p=U(t[1]),q=O(),b=y("div"),T=y("div"),M=U("Player HP: "),Q=U(t[5]),z=U("/"),x=U(L),ae=O(),G=y("div"),S=U("Player MP: "),v=U(t[6]),se=U("/"),W=U($),X=O(),K=y("div"),ue=U("Enemy HP: "),ce=U(t[8]),m=U("/"),N=U(d),A=O(),w=y("div"),j=U(ee),R=O(),De(F.$$.fragment),le=O(),De(ne.$$.fragment),this.h()},l(I){s=_(I,"MAIN",{class:!0});var E=D(s);e=_(E,"SECTION",{});var te=D(e);f=_(te,"H2",{});var ie=D(f);n=H(ie,i),ie.forEach(C),P=B(te),l=_(te,"DIV",{class:!0});var oe=D(l);r=_(oe,"DIV",{class:!0});var ke=D(r);g=_(ke,"DIV",{class:!0});var Ie=D(g);k=H(Ie,"Experience: "),c=H(Ie,t[0]),Ie.forEach(C),V=B(ke),o=_(ke,"DIV",{class:!0});var be=D(o);u=H(be,"Drachmas: "),p=H(be,t[1]),be.forEach(C),ke.forEach(C),q=B(oe),b=_(oe,"DIV",{class:!0});var me=D(b);T=_(me,"DIV",{});var fe=D(T);M=H(fe,"Player HP: "),Q=H(fe,t[5]),z=H(fe,"/"),x=H(fe,L),fe.forEach(C),ae=B(me),G=_(me,"DIV",{});var ge=D(G);S=H(ge,"Player MP: "),v=H(ge,t[6]),se=H(ge,"/"),W=H(ge,$),ge.forEach(C),X=B(me),K=_(me,"DIV",{});var de=D(K);ue=H(de,"Enemy HP: "),ce=H(de,t[8]),m=H(de,"/"),N=H(de,d),de.forEach(C),me.forEach(C),A=B(oe),w=_(oe,"DIV",{});var Se=D(w);j=H(Se,ee),Se.forEach(C),oe.forEach(C),te.forEach(C),R=B(E),Pe(F.$$.fragment,E),le=B(E),Pe(ne.$$.fragment,E),E.forEach(C),this.h()},h(){h(g,"class","experience"),h(o,"class","drachmas"),h(r,"class","info-item svelte-ku2xkl"),h(b,"class","info-item svelte-ku2xkl"),h(l,"class","info svelte-ku2xkl"),h(s,"class","game-container svelte-ku2xkl")},m(I,E){Ee(I,s,E),a(s,e),a(e,f),a(f,n),a(e,P),a(e,l),a(l,r),a(r,g),a(g,k),a(g,c),a(r,V),a(r,o),a(o,u),a(o,p),a(l,q),a(l,b),a(b,T),a(T,M),a(T,Q),a(T,z),a(T,x),a(b,ae),a(b,G),a(G,S),a(G,v),a(G,se),a(G,W),a(b,X),a(b,K),a(K,ue),a(K,ce),a(K,m),a(K,N),a(l,A),a(l,w),a(w,j),a(s,R),Ae(F,s,null),a(s,le),Ae(ne,s,null),Y=!0},p(I,E){(!Y||E[0]&8)&&i!==(i=I[3].name+"")&&re(n,i),(!Y||E[0]&1)&&re(c,I[0]),(!Y||E[0]&2)&&re(p,I[1]),(!Y||E[0]&32)&&re(Q,I[5]),(!Y||E[0]&16)&&L!==(L=I[4].hp+"")&&re(x,L),(!Y||E[0]&64)&&re(v,I[6]),(!Y||E[0]&16)&&$!==($=I[4].mp+"")&&re(W,$),(!Y||E[0]&256)&&re(ce,I[8]),(!Y||E[0]&128)&&d!==(d=I[7].hp+"")&&re(N,d),(!Y||E[0]&512)&&ee!==(ee=(I[9]||"The battle begins...")+"")&&re(j,ee);const te={};E[0]&1024&&(te.playerIsAttacking=I[10]),E[0]&4096&&(te.enemyIsAttacking=I[12]),E[0]&2048&&(te.playerIsUsingSpecial=I[11]),E[0]&16&&(te.playerCreature=I[4]),E[0]&8192&&(te.enemyIsSpawning=I[13]),E[0]&128&&(te.enemyCreature=I[7]),F.$set(te);const ie={};E[0]&16&&(ie.playerCreature=I[4]),E[0]&4&&(ie.chosenRelic=I[2]),ne.$set(ie)},i(I){Y||(Ve(F.$$.fragment,I),Ve(ne.$$.fragment,I),Y=!0)},o(I){Re(F.$$.fragment,I),Re(ne.$$.fragment,I),Y=!1},d(I){I&&C(s),Ue(F),Ue(ne)}}}function xe(t,s,e){let f=0,i=0,n=He[0],P=Me.filter(m=>m.stageId===n.id),l=P[0],r=Oe[0],g=!1,k=l.hp+r.hpMod,c=l.mp+r.mpMod,V=ze.filter(m=>m.stageId===n.id),o=V[Math.floor(Math.random()*V.length)],u=o.hp,p="",q=0,b=!1,T=!1,M=!1,Q=!1,z=null,L=null,x=null,ae=null;const G=()=>{if(c!==l.mp+r.mpMod&&c+l.mpRegen+r.mpRegenMod<=l.mp+r.mpMod){e(6,c=c+l.mpRegen+r.mpRegenMod);return}e(6,c=l.mp+r.mpMod)},S=(m,d)=>{if(k-(o.attack-o.attack*m)*d<=0){e(9,p="Defeat!"),e(5,k=0);return}e(5,k=k-(o.attack-o.attack*m)*d)},v=(m,d,N)=>{try{const A=l.speed+r.speedMod;let w=(l.defense+r.defenseMod)/100,ee=o.critical/100,j=1,R=!1;if(o.attackType==="Magic"&&(w=0),o.speed<A?R=Math.random()>=.5:R=Math.random()>=.8,q>1&&!R&&!m&&(R=!0),!R&&m&&e(9,p="Enemy was too slow!"),!R&&!m){e(6,c=l.mp+r.mpMod),q+=1,K(d,N);return}d===l.attackName&&G(),R&&m&&e(9,p="Both abilities succeeded."),R&&!m&&e(9,p="Your summon was too slow!"),R&&(Math.random()<=ee&&(j=1.5),o.attackType==="Poison"&&j===1&&(j=1.5),S(w,j),e(12,M=!0),x=setTimeout(()=>e(12,M=!1),500))}catch(A){console.error(A)}},se=(m,d,N,A,w)=>{w==="Lifesteal"&&N&&(k+m*d*.2>l.hp+r.hpMod?e(5,k=l.hp+r.hpMod):e(5,k=k+m*d*.2)),v(N,A,w)},$=(m,d,N,A,w)=>{m&&(k+d*N>l.hp+r.hpMod?e(5,k=l.hp+r.hpMod):e(5,k=k+d*N)),v(m,A,w)},W=(m,d,N,A,w,ee,j)=>{if(e(6,c=c-N),j!=="Heal"){if(u-(d-d*w)*A<=0&&m){e(8,u=0),e(9,p="Victory!"),e(0,f+=o.reward*2),e(1,i+=o.reward),e(10,b=!0),z=setTimeout(()=>e(10,b=!1),500),e(11,T=!0),L=setTimeout(()=>e(11,T=!1),500);return}m&&(e(8,u=u-(d-d*w)*A),e(10,b=!0),z=setTimeout(()=>e(10,b=!1),500),e(11,T=!0),L=setTimeout(()=>e(11,T=!1),500)),se(d,A,m,ee,j);return}$(m,d,A,ee,j)},X=()=>{(k<=0||u<=0)&&(e(5,k=l.hp+r.hpMod),e(6,c=l.mp+r.mpMod),e(13,Q=!0),ae=setTimeout(()=>e(13,Q=!1),500),e(7,o=V[Math.floor(Math.random()*V.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${Z+"/game/"+o.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${Z+"/game/"+o.img.slice(0,-4)+"_attack.png"})`),e(8,u=o.hp),e(9,p=""))},K=(m,d)=>{try{const N=l.attack+r.attackMod,A=l.speed+r.speedMod,w=(l.critical+r.criticalMod)/100;let ee=l.special+r.specialMod,j=l.specialCost,R=o.defense/100,F=!1,le=1;if(Q)return;if(X(),d==="Magic"&&(R=0),A<o.speed?F=Math.random()>=.5:F=Math.random()>=.8,Math.random()<=w&&(le=1.5),d==="Poison"&&le===1&&(le=1.5),m===l.attackName){if(u-(N-N*R)*le<=0&&F){e(8,u=0),e(9,p="Victory!"),e(0,f+=o.reward*2),e(1,i+=o.reward),e(10,b=!0),z=setTimeout(()=>e(10,b=!1),500);return}F&&(e(8,u=u-(N-N*R)*le),e(10,b=!0),z=setTimeout(()=>e(10,b=!1),500)),v(F,m,d);return}c>=j?W(F,ee,j,le,R,m,d):e(9,p="Not enough MP!")}catch(N){console.error(N)}},ue=()=>{try{const m=o;e(5,k=0),X(),e(4,l=Me.find(d=>d.id===m.id)),e(5,k=l.hp+r.hpMod),e(6,c=l.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${Z+"/game/"+l.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${Z+"/game/"+l.img.slice(0,-4)+"_hurt.png"})`)}catch(m){console.error(m)}},ce=()=>{g&&(localStorage.setItem("drachmas",i),localStorage.setItem("playerExperience",f),localStorage.setItem("chosenRelicId",r.id))};return je(()=>{try{const m=localStorage.getItem("drachmas"),d=localStorage.getItem("playerExperience"),N=localStorage.getItem("chosenRelicId"),A=localStorage.getItem("curStageId");Be.set(!0),m&&e(1,i=parseInt(m)),d&&e(0,f=parseInt(d)),N&&e(2,r=Oe.find(w=>w.id===parseInt(N))),A&&e(3,n=He.find(w=>w.id===parseInt(A))),P=Me.filter(w=>w.stageId===n.id),e(4,l=P[0]),e(5,k=l.hp+r.hpMod),e(6,c=l.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${Z+"/game/"+l.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${Z+"/game/"+l.img.slice(0,-4)+"_hurt.png"})`),V=ze.filter(w=>w.stageId===n.id),e(7,o=V[Math.floor(Math.random()*V.length)]),e(8,u=o.hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${Z+"/game/"+o.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${Z+"/game/"+o.img.slice(0,-4)+"_attack.png"})`),g=!0}catch(m){console.error(m)}}),qe(()=>{Be.set(!1),clearTimeout(z),clearTimeout(L),clearTimeout(x),clearTimeout(ae)}),t.$$.update=()=>{t.$$.dirty[0]&7&&ce()},[f,i,r,n,l,k,c,o,u,p,b,T,M,Q,K,ue]}class lt extends Ce{constructor(s){super(),Te(this,s,xe,Ze,ve,{},null,[-1,-1])}}export{lt as component};
