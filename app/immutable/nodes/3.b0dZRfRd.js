import{s as ut,d as Re,e as ct,n as ot,r as dt,o as ft,f as gt}from"../chunks/scheduler.BoReh3vH.js";import{S as ht,i as kt,e as d,t as T,s as C,c as f,a as M,b,d as v,f as D,y as De,o as m,z as B,g as _t,h as a,A as ve,j as J}from"../chunks/index.BklZDJd0.js";import{s as nt,r as mt}from"../chunks/relics.9MHovSS4.js";import{i as pt}from"../chunks/store.Cn0GNUQE.js";import{b as H,g as yt}from"../chunks/entry.81xWpP38.js";const We=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",hp:125,attack:50,attackName:"Strike",attackType:"Normal",speed:30,defense:30,critical:10,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Scorch",specialType:"Magic",specialEffect:"special-effect-4"},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",hp:100,attack:50,attackName:"Stab",attackType:"Normal",speed:40,defense:20,critical:50,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Ruin",specialType:"Magic",specialEffect:"special-effect-2"}],it=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50}];function vt(o){let p,e,L=o[2].name+"",U,G,N,t,n,ae,k,I=o[3].hp+"",z,i,y,P,se,q,O=o[3].mp+"",Q,W,w,le,re,ie,ce=o[6].hp+"",ue,oe,X,j,F,V,h,de,fe,Me,ne,Ie,Z,ge,l,r,c,_,g,Y,S,E,R,A,Se,Ae,Ee,He,K,Xe="Attack",ze,x,Ze="Special",Be,he,Ne,Le,me,Oe,we,Ue,pe,Ge,Pe,je,$,xe="Mimic Summon",Fe,ee,$e="View Stats",Ye,te,et="Travel",Je,tt;return{c(){p=d("div"),e=d("h2"),U=T(L),G=C(),N=d("div"),t=d("div"),n=T("Player HP: "),ae=T(o[4]),k=T("/"),z=T(I),i=C(),y=d("div"),P=T("Player MP: "),se=T(o[5]),q=T("/"),Q=T(O),W=C(),w=d("div"),le=T("Enemy HP: "),re=T(o[7]),ie=T("/"),ue=T(ce),oe=C(),X=d("div"),j=d("div"),F=d("div"),V=d("div"),h=d("img"),Me=C(),ne=d("div"),Ie=C(),Z=d("div"),l=C(),r=d("div"),c=d("img"),Y=C(),S=d("div"),E=C(),R=d("div"),A=d("div"),Ae=C(),Ee=d("div"),He=C(),K=d("button"),K.textContent=Xe,ze=C(),x=d("button"),x.textContent=Ze,Be=C(),he=d("div"),Ne=T(o[8]),Le=C(),me=d("div"),Oe=T("Experience: "),we=T(o[0]),Ue=C(),pe=d("div"),Ge=T("Drachmas: "),Pe=T(o[1]),je=C(),$=d("button"),$.textContent=xe,Fe=C(),ee=d("button"),ee.textContent=$e,Ye=C(),te=d("button"),te.textContent=et,this.h()},l(u){p=f(u,"DIV",{class:!0});var s=M(p);e=f(s,"H2",{});var at=M(e);U=b(at,L),at.forEach(v),G=D(s),N=f(s,"DIV",{class:!0});var ke=M(N);t=f(ke,"DIV",{});var Te=M(t);n=b(Te,"Player HP: "),ae=b(Te,o[4]),k=b(Te,"/"),z=b(Te,I),Te.forEach(v),i=D(ke),y=f(ke,"DIV",{});var Ce=M(y);P=b(Ce,"Player MP: "),se=b(Ce,o[5]),q=b(Ce,"/"),Q=b(Ce,O),Ce.forEach(v),W=D(ke),w=f(ke,"DIV",{});var be=M(w);le=b(be,"Enemy HP: "),re=b(be,o[7]),ie=b(be,"/"),ue=b(be,ce),be.forEach(v),ke.forEach(v),oe=D(s),X=f(s,"DIV",{class:!0});var st=M(X);j=f(st,"DIV",{class:!0});var qe=M(j);F=f(qe,"DIV",{class:!0});var Ve=M(F);V=f(Ve,"DIV",{class:!0});var _e=M(V);h=f(_e,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Me=D(_e),ne=f(_e,"DIV",{class:!0}),M(ne).forEach(v),Ie=D(_e),Z=f(_e,"DIV",{class:!0}),M(Z).forEach(v),_e.forEach(v),l=D(Ve),r=f(Ve,"DIV",{class:!0});var ye=M(r);c=f(ye,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),Y=D(ye),S=f(ye,"DIV",{class:!0}),M(S).forEach(v),E=D(ye),R=f(ye,"DIV",{class:!0});var lt=M(R);A=f(lt,"DIV",{class:!0}),M(A).forEach(v),lt.forEach(v),ye.forEach(v),Ve.forEach(v),Ae=D(qe),Ee=f(qe,"DIV",{class:!0}),M(Ee).forEach(v),qe.forEach(v),st.forEach(v),He=D(s),K=f(s,"BUTTON",{class:!0,"data-svelte-h":!0}),De(K)!=="svelte-19y3ioo"&&(K.textContent=Xe),ze=D(s),x=f(s,"BUTTON",{class:!0,"data-svelte-h":!0}),De(x)!=="svelte-172d9ub"&&(x.textContent=Ze),Be=D(s),he=f(s,"DIV",{class:!0});var rt=M(he);Ne=b(rt,o[8]),rt.forEach(v),Le=D(s),me=f(s,"DIV",{class:!0});var Ke=M(me);Oe=b(Ke,"Experience: "),we=b(Ke,o[0]),Ke.forEach(v),Ue=D(s),pe=f(s,"DIV",{class:!0});var Qe=M(pe);Ge=b(Qe,"Drachmas: "),Pe=b(Qe,o[1]),Qe.forEach(v),je=D(s),$=f(s,"BUTTON",{class:!0,"data-svelte-h":!0}),De($)!=="svelte-zspdcm"&&($.textContent=xe),Fe=D(s),ee=f(s,"BUTTON",{class:!0,"data-svelte-h":!0}),De(ee)!=="svelte-wou4mf"&&(ee.textContent=$e),Ye=D(s),te=f(s,"BUTTON",{class:!0,"data-svelte-h":!0}),De(te)!=="svelte-1hg8zdr"&&(te.textContent=et),s.forEach(v),this.h()},h(){m(N,"class","stats svelte-q02luc"),Re(h.src,de=H+"/game/"+o[3].img)||m(h,"src",de),m(h,"width","128px"),m(h,"height","128px"),m(h,"alt",fe=o[3].name),m(h,"class","svelte-q02luc"),B(h,"attack",o[9]),B(h,"hurt",o[11]),B(h,"player-using-special",o[10]),m(ne,"class","shadow svelte-q02luc"),m(Z,"class",ge=ct(o[10]?o[3].specialEffect:"")+" svelte-q02luc"),m(V,"class","creature player-creature svelte-q02luc"),Re(c.src,_=H+"/game/"+o[6].img)||m(c,"src",_),m(c,"width","128px"),m(c,"height","128px"),m(c,"alt",g=o[6].name),m(c,"class","svelte-q02luc"),B(c,"enemy-attack",o[11]),B(c,"enemy-hurt",o[9]),B(c,"enemy-spawning",o[12]),m(S,"class","shadow svelte-q02luc"),m(A,"class",Se=o[12]?"enemy-spawn":""),m(R,"class","enemy-spawn-container svelte-q02luc"),m(r,"class","creature enemy-creature svelte-q02luc"),m(F,"class","creatures-container svelte-q02luc"),m(Ee,"class","floor svelte-q02luc"),m(j,"class","battlefield svelte-q02luc"),m(X,"class","battle-container svelte-q02luc"),m(K,"class","svelte-q02luc"),m(x,"class","svelte-q02luc"),m(he,"class","combat-alert svelte-q02luc"),m(me,"class","experience svelte-q02luc"),m(pe,"class","drachmas svelte-q02luc"),m($,"class","svelte-q02luc"),m(ee,"class","svelte-q02luc"),m(te,"class","svelte-q02luc"),m(p,"class","game-container svelte-q02luc")},m(u,s){_t(u,p,s),a(p,e),a(e,U),a(p,G),a(p,N),a(N,t),a(t,n),a(t,ae),a(t,k),a(t,z),a(N,i),a(N,y),a(y,P),a(y,se),a(y,q),a(y,Q),a(N,W),a(N,w),a(w,le),a(w,re),a(w,ie),a(w,ue),a(p,oe),a(p,X),a(X,j),a(j,F),a(F,V),a(V,h),a(V,Me),a(V,ne),a(V,Ie),a(V,Z),a(F,l),a(F,r),a(r,c),a(r,Y),a(r,S),a(r,E),a(r,R),a(R,A),a(j,Ae),a(j,Ee),a(p,He),a(p,K),a(p,ze),a(p,x),a(p,Be),a(p,he),a(he,Ne),a(p,Le),a(p,me),a(me,Oe),a(me,we),a(p,Ue),a(p,pe),a(pe,Ge),a(pe,Pe),a(p,je),a(p,$),a(p,Fe),a(p,ee),a(p,Ye),a(p,te),Je||(tt=[ve(K,"click",o[17]),ve(K,"contextmenu",o[18]),ve(x,"click",o[19]),ve($,"click",o[14]),ve(ee,"click",o[15]),ve(te,"click",o[20])],Je=!0)},p(u,s){s[0]&4&&L!==(L=u[2].name+"")&&J(U,L),s[0]&16&&J(ae,u[4]),s[0]&8&&I!==(I=u[3].hp+"")&&J(z,I),s[0]&32&&J(se,u[5]),s[0]&8&&O!==(O=u[3].mp+"")&&J(Q,O),s[0]&128&&J(re,u[7]),s[0]&64&&ce!==(ce=u[6].hp+"")&&J(ue,ce),s[0]&8&&!Re(h.src,de=H+"/game/"+u[3].img)&&m(h,"src",de),s[0]&8&&fe!==(fe=u[3].name)&&m(h,"alt",fe),s[0]&512&&B(h,"attack",u[9]),s[0]&2048&&B(h,"hurt",u[11]),s[0]&1024&&B(h,"player-using-special",u[10]),s[0]&1032&&ge!==(ge=ct(u[10]?u[3].specialEffect:"")+" svelte-q02luc")&&m(Z,"class",ge),s[0]&64&&!Re(c.src,_=H+"/game/"+u[6].img)&&m(c,"src",_),s[0]&64&&g!==(g=u[6].name)&&m(c,"alt",g),s[0]&2048&&B(c,"enemy-attack",u[11]),s[0]&512&&B(c,"enemy-hurt",u[9]),s[0]&4096&&B(c,"enemy-spawning",u[12]),s[0]&4096&&Se!==(Se=u[12]?"enemy-spawn":"")&&m(A,"class",Se),s[0]&256&&J(Ne,u[8]),s[0]&1&&J(we,u[0]),s[0]&2&&J(Pe,u[1])},i:ot,o:ot,d(u){u&&v(p),Je=!1,dt(tt)}}}function Mt(o,p,e){let L=0,U=0,G=nt[0],N=We.filter(l=>l.stageId===G.id),t=N[0],n=mt[0],ae=!1,k=t.hp+n.hpMod,I=t.mp+n.mpMod,z=it.filter(l=>l.stageId===G.id),i=z[Math.floor(Math.random()*z.length)],y=i.hp,P="",se=0,q=!1,O=!1,Q=!1,W=!1,w=null,le=null,re=null,ie=null;const ce=()=>{if(I!==t.mp+n.mpMod&&I+t.mpRegen+n.mpRegenMod<=t.mp+n.mpMod){e(5,I=I+t.mpRegen+n.mpRegenMod);return}e(5,I=t.mp+n.mpMod)},ue=(l,r)=>{if(k-(i.attack-i.attack*l)*r<=0){e(8,P="Defeat!"),e(4,k=0);return}e(4,k=k-(i.attack-i.attack*l)*r)},oe=(l,r,c)=>{try{const _=t.speed+n.speedMod;let g=(t.defense+n.defenseMod)/100,Y=i.critical/100,S=1,E=!1;if(i.attackType==="Magic"&&(g=0),i.speed<_?E=Math.random()>=.5:E=Math.random()>=.8,se>1&&!E&&!l&&(E=!0),!E&&l&&e(8,P="Enemy was too slow!"),!E&&!l){e(5,I=t.mp+n.mpMod),se+=1,h(r,c);return}r===t.attackName&&ce(),E&&l&&e(8,P="Both abilities succeeded."),E&&!l&&e(8,P="Your summon was too slow!"),E&&(Math.random()<=Y&&(S=1.5),i.attackType==="Poison"&&S===1&&(S=1.5),ue(g,S),e(11,Q=!0),re=setTimeout(()=>e(11,Q=!1),500))}catch(_){console.error(_)}},X=(l,r,c,_,g)=>{g==="Lifesteal"&&c&&(k+l*r*.2>t.hp+n.hpMod?e(4,k=t.hp+n.hpMod):e(4,k=k+l*r*.2)),oe(c,_,g)},j=(l,r,c,_,g)=>{l&&(k+r*c>t.hp+n.hpMod?e(4,k=t.hp+n.hpMod):e(4,k=k+r*c)),oe(l,_,g)},F=(l,r,c,_,g,Y,S)=>{if(e(5,I=I-c),S!=="Heal"){if(y-(r-r*g)*_<=0&&l){e(7,y=0),e(8,P="Victory!"),e(0,L+=i.reward*2),e(1,U+=i.reward),e(9,q=!0),w=setTimeout(()=>e(9,q=!1),500),e(10,O=!0),le=setTimeout(()=>e(10,O=!1),500);return}l&&(e(7,y=y-(r-r*g)*_),e(9,q=!0),w=setTimeout(()=>e(9,q=!1),500),e(10,O=!0),le=setTimeout(()=>e(10,O=!1),500)),X(r,_,l,Y,S);return}j(l,r,_,Y,S)},V=()=>{(k<=0||y<=0)&&(e(4,k=t.hp+n.hpMod),e(5,I=t.mp+n.mpMod),e(12,W=!0),ie=setTimeout(()=>e(12,W=!1),500),e(6,i=z[Math.floor(Math.random()*z.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${H+"/game/"+i.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${H+"/game/"+i.img.slice(0,-4)+"_attack.png"})`),e(7,y=i.hp),e(8,P=""))},h=(l,r)=>{try{const c=t.attack+n.attackMod,_=t.speed+n.speedMod,g=(t.critical+n.criticalMod)/100;let Y=t.special+n.specialMod,S=t.specialCost,E=i.defense/100,R=!1,A=1;if(W)return;if(V(),r==="Magic"&&(E=0),_<i.speed?R=Math.random()>=.5:R=Math.random()>=.8,Math.random()<=g&&(A=1.5),r==="Poison"&&A===1&&(A=1.5),l===t.attackName){if(y-(c-c*E)*A<=0&&R){e(7,y=0),e(8,P="Victory!"),e(0,L+=i.reward*2),e(1,U+=i.reward),e(9,q=!0),w=setTimeout(()=>e(9,q=!1),500);return}R&&(e(7,y=y-(c-c*E)*A),e(9,q=!0),w=setTimeout(()=>e(9,q=!1),500)),oe(R,l,r);return}I>=S?F(R,Y,S,A,E,l,r):e(8,P="Not enough MP!")}catch(c){console.error(c)}},de=()=>{try{const l=i;e(4,k=0),V(),e(3,t=We.find(r=>r.id===l.id)),e(4,k=t.hp+n.hpMod),e(5,I=t.mp+n.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${H+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${H+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`)}catch(l){console.error(l)}},fe=()=>{try{const r=[{label:"Name",value:t.name},{label:"HP",value:t.hp+n.hpMod},{label:"Speed",value:t.speed+n.speedMod},{label:"Defense",value:t.defense+n.defenseMod},{label:"Critical",value:t.critical+n.criticalMod},{label:"MP",value:t.mp+n.mpMod},{label:"MP Regen",value:t.mpRegen+n.mpRegenMod},{label:`
Attack Name`,value:t.attackName},{label:"Attack",value:t.attack+n.attackMod},{label:"Attack Type",value:t.attackType},{label:`
Special Name`,value:t.specialName},{label:"Special",value:t.special+n.specialMod},{label:"Special Cost",value:t.specialCost},{label:"Special Type",value:t.specialType}].map(c=>`${c.label}: ${c.value}`).join(`
`);alert(r)}catch(l){console.error(l)}},Me=()=>{ae&&(localStorage.setItem("drachmas",U),localStorage.setItem("playerExperience",L),localStorage.setItem("chosenRelicId",n.id))};ft(()=>{try{const l=localStorage.getItem("drachmas"),r=localStorage.getItem("playerExperience"),c=localStorage.getItem("chosenRelicId"),_=localStorage.getItem("curStageId");pt.set(!0),l&&e(1,U=parseInt(l)),r&&e(0,L=parseInt(r)),c&&e(16,n=mt.find(g=>g.id===parseInt(c))),_&&e(2,G=nt.find(g=>g.id===parseInt(_))),N=We.filter(g=>g.stageId===G.id),e(3,t=N[0]),e(4,k=t.hp+n.hpMod),e(5,I=t.mp+n.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${H+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${H+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`),z=it.filter(g=>g.stageId===G.id),e(6,i=z[Math.floor(Math.random()*z.length)]),e(7,y=i.hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${H+"/game/"+i.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${H+"/game/"+i.img.slice(0,-4)+"_attack.png"})`),ae=!0}catch(l){console.error(l)}}),gt(()=>{pt.set(!1),clearTimeout(w),clearTimeout(le),clearTimeout(re),clearTimeout(ie)});const ne=()=>h(t.attackName,t.attackType),Ie=l=>{l.preventDefault(),h(t.specialName,t.specialType)},Z=()=>h(t.specialName,t.specialType),ge=()=>{yt(H+"/game/world")};return o.$$.update=()=>{o.$$.dirty[0]&65539&&Me()},[L,U,G,t,k,I,i,y,P,q,O,Q,W,h,de,fe,n,ne,Ie,Z,ge]}class Dt extends ht{constructor(p){super(),kt(this,p,Mt,vt,ut,{},null,[-1,-1])}}export{Dt as component};