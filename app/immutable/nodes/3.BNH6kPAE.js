import{s as We,d as Ce,e as qe,n as Fe,r as Xe,o as Ze,f as xe}from"../chunks/scheduler.BoReh3vH.js";import{S as $e,i as et,e as y,t as T,s as S,c as M,a as z,b as C,d as R,f as N,y as Me,o as d,z as Z,g as tt,h as a,A as Ie,j as F}from"../chunks/index.BklZDJd0.js";import{s as Ye,r as Je}from"../chunks/relics.CGlwEWe2.js";import{i as Ke}from"../chunks/store.Cn0GNUQE.js";import{b as B,g as at}from"../chunks/entry.C5-1SYYW.js";const Ae=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"}],Qe=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50},{id:7,stageId:3,name:"Skeleton",img:"skeleton_creature_bow.png",reward:12,hp:100,attack:40,attackType:"Normal",speed:70,defense:20,critical:50}];function st(c){let p,e,L=c[2].name+"",G,q,E,t,l,x,f,k=c[3].hp+"",V,m,g,j,$,D,O=c[3].mp+"",Q,Y,A,ce,oe,fe,J=c[6].hp+"",pe,ge,H,_,K,ee,ne,W,X,me,he,I,ie,s,o,n,h="Attack",u,b,P="Special",v,w,U,Ee,te,be,ve,Pe,ae,Se,Te,Ne,se,He="Mimic Summon",je,re,ze="View Stats",De,le,Be="Travel",we,Le;return{c(){p=y("div"),e=y("h2"),G=T(L),q=S(),E=y("div"),t=y("div"),l=T("Player HP: "),x=T(c[4]),f=T("/"),V=T(k),m=S(),g=y("div"),j=T("Player MP: "),$=T(c[5]),D=T("/"),Q=T(O),Y=S(),A=y("div"),ce=T("Enemy HP: "),oe=T(c[7]),fe=T("/"),pe=T(J),ge=S(),H=y("div"),_=y("img"),ne=S(),W=y("div"),X=y("div"),he=S(),I=y("img"),o=S(),n=y("button"),n.textContent=h,u=S(),b=y("button"),b.textContent=P,v=S(),w=y("div"),U=T(c[8]),Ee=S(),te=y("div"),be=T("Experience: "),ve=T(c[0]),Pe=S(),ae=y("div"),Se=T("Drachmas: "),Te=T(c[1]),Ne=S(),se=y("button"),se.textContent=He,je=S(),re=y("button"),re.textContent=ze,De=S(),le=y("button"),le.textContent=Be,this.h()},l(i){p=M(i,"DIV",{class:!0});var r=z(p);e=M(r,"H2",{});var Oe=z(e);G=C(Oe,L),Oe.forEach(R),q=N(r),E=M(r,"DIV",{class:!0});var ue=z(E);t=M(ue,"DIV",{});var ke=z(t);l=C(ke,"Player HP: "),x=C(ke,c[4]),f=C(ke,"/"),V=C(ke,k),ke.forEach(R),m=N(ue),g=M(ue,"DIV",{});var _e=z(g);j=C(_e,"Player MP: "),$=C(_e,c[5]),D=C(_e,"/"),Q=C(_e,O),_e.forEach(R),Y=N(ue),A=M(ue,"DIV",{});var ye=z(A);ce=C(ye,"Enemy HP: "),oe=C(ye,c[7]),fe=C(ye,"/"),pe=C(ye,J),ye.forEach(R),ue.forEach(R),ge=N(r),H=M(r,"DIV",{class:!0});var de=z(H);_=M(de,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),ne=N(de),W=M(de,"DIV",{class:!0});var Ue=z(W);X=M(Ue,"DIV",{class:!0}),z(X).forEach(R),Ue.forEach(R),he=N(de),I=M(de,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),de.forEach(R),o=N(r),n=M(r,"BUTTON",{"data-svelte-h":!0}),Me(n)!=="svelte-ig8gg4"&&(n.textContent=h),u=N(r),b=M(r,"BUTTON",{"data-svelte-h":!0}),Me(b)!=="svelte-172d9ub"&&(b.textContent=P),v=N(r),w=M(r,"DIV",{class:!0});var Ge=z(w);U=C(Ge,c[8]),Ge.forEach(R),Ee=N(r),te=M(r,"DIV",{class:!0});var Re=z(te);be=C(Re,"Experience: "),ve=C(Re,c[0]),Re.forEach(R),Pe=N(r),ae=M(r,"DIV",{class:!0});var Ve=z(ae);Se=C(Ve,"Drachmas: "),Te=C(Ve,c[1]),Ve.forEach(R),Ne=N(r),se=M(r,"BUTTON",{"data-svelte-h":!0}),Me(se)!=="svelte-lzajz"&&(se.textContent=He),je=N(r),re=M(r,"BUTTON",{"data-svelte-h":!0}),Me(re)!=="svelte-z72cka"&&(re.textContent=ze),De=N(r),le=M(r,"BUTTON",{"data-svelte-h":!0}),Me(le)!=="svelte-16av4zt"&&(le.textContent=Be),r.forEach(R),this.h()},h(){d(E,"class","stats svelte-1nsr9j6"),Ce(_.src,K=B+"/game/"+c[3].img)||d(_,"src",K),d(_,"width","128px"),d(_,"height","128px"),d(_,"alt",ee=c[3].name),d(_,"class","svelte-1nsr9j6"),Z(_,"attack",c[9]),Z(_,"hurt",c[11]),d(X,"class",me=qe(c[10]?c[3].specialEffect:"")+" svelte-1nsr9j6"),d(W,"class","special-effect-container svelte-1nsr9j6"),d(I,"class","enemy-creature svelte-1nsr9j6"),Ce(I.src,ie=B+"/game/"+c[6].img)||d(I,"src",ie),d(I,"width","128px"),d(I,"height","128px"),d(I,"alt",s=c[6].name),Z(I,"enemy-attack",c[11]),Z(I,"enemy-hurt",c[9]),d(H,"class","creatures svelte-1nsr9j6"),d(w,"class","combat-alert svelte-1nsr9j6"),d(te,"class","experience svelte-1nsr9j6"),d(ae,"class","drachmas svelte-1nsr9j6"),d(p,"class","game-container svelte-1nsr9j6")},m(i,r){tt(i,p,r),a(p,e),a(e,G),a(p,q),a(p,E),a(E,t),a(t,l),a(t,x),a(t,f),a(t,V),a(E,m),a(E,g),a(g,j),a(g,$),a(g,D),a(g,Q),a(E,Y),a(E,A),a(A,ce),a(A,oe),a(A,fe),a(A,pe),a(p,ge),a(p,H),a(H,_),a(H,ne),a(H,W),a(W,X),a(H,he),a(H,I),a(p,o),a(p,n),a(p,u),a(p,b),a(p,v),a(p,w),a(w,U),a(p,Ee),a(p,te),a(te,be),a(te,ve),a(p,Pe),a(p,ae),a(ae,Se),a(ae,Te),a(p,Ne),a(p,se),a(p,je),a(p,re),a(p,De),a(p,le),we||(Le=[Ie(n,"click",c[16]),Ie(b,"click",c[17]),Ie(se,"click",c[18]),Ie(re,"click",c[19]),Ie(le,"click",c[20])],we=!0)},p(i,r){r[0]&4&&L!==(L=i[2].name+"")&&F(G,L),r[0]&16&&F(x,i[4]),r[0]&8&&k!==(k=i[3].hp+"")&&F(V,k),r[0]&32&&F($,i[5]),r[0]&8&&O!==(O=i[3].mp+"")&&F(Q,O),r[0]&128&&F(oe,i[7]),r[0]&64&&J!==(J=i[6].hp+"")&&F(pe,J),r[0]&8&&!Ce(_.src,K=B+"/game/"+i[3].img)&&d(_,"src",K),r[0]&8&&ee!==(ee=i[3].name)&&d(_,"alt",ee),r[0]&512&&Z(_,"attack",i[9]),r[0]&2048&&Z(_,"hurt",i[11]),r[0]&1032&&me!==(me=qe(i[10]?i[3].specialEffect:"")+" svelte-1nsr9j6")&&d(X,"class",me),r[0]&64&&!Ce(I.src,ie=B+"/game/"+i[6].img)&&d(I,"src",ie),r[0]&64&&s!==(s=i[6].name)&&d(I,"alt",s),r[0]&2048&&Z(I,"enemy-attack",i[11]),r[0]&512&&Z(I,"enemy-hurt",i[9]),r[0]&256&&F(U,i[8]),r[0]&1&&F(ve,i[0]),r[0]&2&&F(Te,i[1])},i:Fe,o:Fe,d(i){i&&R(p),we=!1,Xe(Le)}}}function rt(c,p,e){let L=0,G=0,q=Ye[0],E=Ae.filter(s=>s.stageId===q.id),t=E[0],l=Je[0],x=!1,f=t.hp+l.hpMod,k=t.mp+l.mpMod,V=Qe.filter(s=>s.stageId===q.id),m=V[Math.floor(Math.random()*V.length)],g=m.hp,j="",$=0,D=!1,O=!1,Q=!1,Y=null,A=null,ce=null;const oe=()=>{if(k!==t.mp+l.mpMod&&k+t.mpRegen+l.mpRegenMod<=t.mp+l.mpMod){e(5,k=k+t.mpRegen+l.mpRegenMod);return}e(5,k=t.mp+l.mpMod)},fe=(s,o)=>{if(f-(m.attack-m.attack*s)*o<=0){e(8,j="Defeat!"),e(4,f=0);return}e(4,f=f-(m.attack-m.attack*s)*o)},J=(s,o,n)=>{try{const h=t.speed+l.speedMod;let u=(t.defense+l.defenseMod)/100,b=m.critical/100,P=1,v=!1;if(m.attackType==="Magic"&&(u=0),m.speed<h?v=Math.random()>=.5:v=Math.random()>=.8,$>1&&!v&&!s&&(v=!0),!v&&s&&e(8,j="Enemy was too slow!"),!v&&!s){e(5,k=t.mp+l.mpMod),$+=1,K(o,n);return}o===t.attackName&&oe(),v&&s&&e(8,j="Both abilities succeeded."),v&&!s&&e(8,j="Your summon was too slow!"),v&&(Math.random()<=b&&(P=1.5),m.attackType==="Poison"&&P===1&&(P=1.5),fe(u,P),e(11,Q=!0),ce=setTimeout(()=>e(11,Q=!1),500))}catch(h){console.error(h)}},pe=(s,o,n,h,u)=>{u==="Lifesteal"&&n&&(f+s*o*.2>t.hp+l.hpMod?e(4,f=t.hp+l.hpMod):e(4,f=f+s*o*.2)),J(n,h,u)},ge=(s,o,n,h,u)=>{s&&(f+o*n>t.hp+l.hpMod?e(4,f=t.hp+l.hpMod):e(4,f=f+o*n)),J(s,h,u)},H=(s,o,n,h,u,b,P)=>{if(e(5,k=k-n),P!=="Heal"){if(g-(o-o*u)*h<=0&&s){e(7,g=0),e(8,j="Victory!"),e(0,L+=m.reward*2),e(1,G+=m.reward),e(9,D=!0),Y=setTimeout(()=>e(9,D=!1),500),e(10,O=!0),A=setTimeout(()=>e(10,O=!1),500);return}s&&(e(7,g=g-(o-o*u)*h),e(9,D=!0),Y=setTimeout(()=>e(9,D=!1),500),e(10,O=!0),A=setTimeout(()=>e(10,O=!1),500)),pe(o,h,s,b,P);return}ge(s,o,h,b,P)},_=()=>{(f<=0||g<=0)&&(e(4,f=t.hp+l.hpMod),e(5,k=t.mp+l.mpMod),e(6,m=V[Math.floor(Math.random()*V.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${B+"/practice-project-sveltekit-app/"+m.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${B+"/practice-project-sveltekit-app/"+m.img.slice(0,-4)+"_attack.png"})`),e(7,g=m.hp),e(8,j=""))},K=(s,o)=>{try{const n=t.attack+l.attackMod,h=t.speed+l.speedMod,u=(t.critical+l.criticalMod)/100;let b=t.special+l.specialMod,P=t.specialCost,v=m.defense/100,w=!1,U=1;if(_(),o==="Magic"&&(v=0),h<m.speed?w=Math.random()>=.5:w=Math.random()>=.8,Math.random()<=u&&(U=1.5),o==="Poison"&&U===1&&(U=1.5),s===t.attackName){if(g-(n-n*v)*U<=0&&w){e(7,g=0),e(8,j="Victory!"),e(0,L+=m.reward*2),e(1,G+=m.reward),e(9,D=!0),Y=setTimeout(()=>e(9,D=!1),500);return}w&&(e(7,g=g-(n-n*v)*U),e(9,D=!0),Y=setTimeout(()=>e(9,D=!1),500)),J(w,s,o);return}k>=P?H(w,b,P,U,v,s,o):e(8,j="Not enough MP!")}catch(n){console.error(n)}},ee=()=>{try{const s=m;e(4,f=0),_(),e(3,t=Ae.find(o=>o.id===s.id)),e(4,f=t.hp+l.hpMod),e(5,k=t.mp+l.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${B+"/practice-project-sveltekit-app/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${B+"/practice-project-sveltekit-app/"+t.img.slice(0,-4)+"_hurt.png"})`)}catch(s){console.error(s)}},ne=()=>{try{const o=[{label:"Name",value:t.name},{label:"HP",value:t.hp+l.hpMod},{label:"Speed",value:t.speed+l.speedMod},{label:"Defense",value:t.defense+l.defenseMod},{label:"Critical",value:t.critical+l.criticalMod},{label:"MP",value:t.mp+l.mpMod},{label:"MP Regen",value:t.mpRegen+l.mpRegenMod},{label:`
Attack Name`,value:t.attackName},{label:"Attack",value:t.attack+l.attackMod},{label:"Attack Type",value:t.attackType},{label:`
Special Name`,value:t.specialName},{label:"Special",value:t.special+l.specialMod},{label:"Special Cost",value:t.specialCost},{label:"Special Type",value:t.specialType}].map(n=>`${n.label}: ${n.value}`).join(`
`);alert(o)}catch(s){console.error(s)}},W=()=>{x&&(localStorage.setItem("drachmas",G),localStorage.setItem("playerExperience",L),localStorage.setItem("chosenRelicId",l.id))};Ze(()=>{try{const s=localStorage.getItem("drachmas"),o=localStorage.getItem("playerExperience"),n=localStorage.getItem("chosenRelicId"),h=localStorage.getItem("curStageId");Ke.set(!0),s&&e(1,G=parseInt(s)),o&&e(0,L=parseInt(o)),n&&e(15,l=Je.find(u=>u.id===parseInt(n))),h&&e(2,q=Ye.find(u=>u.id===parseInt(h))),E=Ae.filter(u=>u.stageId===q.id),e(3,t=E[0]),e(4,f=t.hp+l.hpMod),e(5,k=t.mp+l.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${B+"/practice-project-sveltekit-app/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${B+"/practice-project-sveltekit-app/"+t.img.slice(0,-4)+"_hurt.png"})`),V=Qe.filter(u=>u.stageId===q.id),e(6,m=V[Math.floor(Math.random()*V.length)]),e(7,g=m.hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${B+"/practice-project-sveltekit-app/"+m.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${B+"/practice-project-sveltekit-app/"+m.img.slice(0,-4)+"_attack.png"})`),x=!0}catch(s){console.error(s)}}),xe(()=>{Ke.set(!1),clearTimeout(Y),clearTimeout(A),clearTimeout(ce)});const X=()=>K(t.attackName,t.attackType),me=()=>K(t.specialName,t.specialType),he=()=>ee(),I=()=>ne(),ie=()=>{at("/practice-project-sveltekit-app/game/world")};return c.$$.update=()=>{c.$$.dirty[0]&32771&&W()},[L,G,q,t,f,k,m,g,j,D,O,Q,K,ee,ne,l,X,me,he,I,ie]}class mt extends $e{constructor(p){super(),et(this,p,rt,st,We,{},null,[-1,-1])}}export{mt as component};
