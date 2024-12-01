import{s as ot,d as De,e as et,n as tt,r as nt,o as mt,f as it}from"../chunks/scheduler.BoReh3vH.js";import{S as pt,i as ut,e as h,s as P,t as C,y as dt,c as k,d as T,f as D,a as H,b as E,z as Ee,o,A as X,h as a,g as at,B as be,j as Y}from"../chunks/index.E235STFR.js";import{g as ft}from"../chunks/globals.D0QH3NT1.js";import{s as lt,r as st}from"../chunks/relics.9MHovSS4.js";import{i as rt}from"../chunks/store.Cn0GNUQE.js";import{b as y,g as gt}from"../chunks/entry.Dj4e9VoE.js";const qe=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",hp:125,attack:50,attackName:"Strike",attackType:"Normal",speed:30,defense:30,critical:10,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Scorch",specialType:"Magic",specialEffect:"special-effect-4"},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",hp:100,attack:50,attackName:"Stab",attackType:"Normal",speed:40,defense:20,critical:50,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Ruin",specialType:"Magic",specialEffect:"special-effect-2"}],ct=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50}],{document:ve}=ft;function ht(c){let z,e,w,K,N,J,t,r,Z,l,I,R=c[2].name+"",u,v,M,L,j,q,x,B=c[3].hp+"",Q,me,F,ke,W,_e,$=c[3].mp+"",ie,pe,V,ue,ee,ye,te=c[6].hp+"",de,Me,A,b,s,n,f,g,d,O,S,p,U,G,we,ae,Fe="Attack",Re,le,Ye="Special",je,fe,Ne,Ve,se,Ae,Se,He,re,ze,Pe,Le,ce,Je="Mimic Summon",Be,oe,Qe="View Stats",Oe,ne,We="Travel",Ue,Xe;return{c(){z=h("link"),w=h("link"),N=h("link"),t=h("link"),Z=P(),l=h("div"),I=h("h2"),u=C(R),v=P(),M=h("div"),L=h("div"),j=C("Player HP: "),q=C(c[4]),x=C("/"),Q=C(B),me=P(),F=h("div"),ke=C("Player MP: "),W=C(c[5]),_e=C("/"),ie=C($),pe=P(),V=h("div"),ue=C("Enemy HP: "),ee=C(c[7]),ye=C("/"),de=C(te),Me=P(),A=h("div"),b=h("img"),f=P(),g=h("div"),d=h("div"),S=P(),p=h("img"),we=P(),ae=h("button"),ae.textContent=Fe,Re=P(),le=h("button"),le.textContent=Ye,je=P(),fe=h("div"),Ne=C(c[8]),Ve=P(),se=h("div"),Ae=C("Experience: "),Se=C(c[0]),He=P(),re=h("div"),ze=C("Drachmas: "),Pe=C(c[1]),Le=P(),ce=h("button"),ce.textContent=Je,Be=P(),oe=h("button"),oe.textContent=Qe,Oe=P(),ne=h("button"),ne.textContent=We,this.h()},l(m){const i=dt("svelte-b3m8dq",ve.head);z=k(i,"LINK",{rel:!0,as:!0,href:!0}),w=k(i,"LINK",{rel:!0,as:!0,href:!0}),N=k(i,"LINK",{rel:!0,as:!0,href:!0}),t=k(i,"LINK",{rel:!0,as:!0,href:!0}),i.forEach(T),Z=D(m),l=k(m,"DIV",{class:!0});var _=H(l);I=k(_,"H2",{});var Ze=H(I);u=E(Ze,R),Ze.forEach(T),v=D(_),M=k(_,"DIV",{class:!0});var ge=H(M);L=k(ge,"DIV",{});var Ie=H(L);j=E(Ie,"Player HP: "),q=E(Ie,c[4]),x=E(Ie,"/"),Q=E(Ie,B),Ie.forEach(T),me=D(ge),F=k(ge,"DIV",{});var Te=H(F);ke=E(Te,"Player MP: "),W=E(Te,c[5]),_e=E(Te,"/"),ie=E(Te,$),Te.forEach(T),pe=D(ge),V=k(ge,"DIV",{});var Ce=H(V);ue=E(Ce,"Enemy HP: "),ee=E(Ce,c[7]),ye=E(Ce,"/"),de=E(Ce,te),Ce.forEach(T),ge.forEach(T),Me=D(_),A=k(_,"DIV",{class:!0});var he=H(A);b=k(he,"IMG",{src:!0,width:!0,height:!0,alt:!0}),f=D(he),g=k(he,"DIV",{class:!0});var xe=H(g);d=k(xe,"DIV",{class:!0}),H(d).forEach(T),xe.forEach(T),S=D(he),p=k(he,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),he.forEach(T),we=D(_),ae=k(_,"BUTTON",{"data-svelte-h":!0}),Ee(ae)!=="svelte-ig8gg4"&&(ae.textContent=Fe),Re=D(_),le=k(_,"BUTTON",{"data-svelte-h":!0}),Ee(le)!=="svelte-172d9ub"&&(le.textContent=Ye),je=D(_),fe=k(_,"DIV",{class:!0});var $e=H(fe);Ne=E($e,c[8]),$e.forEach(T),Ve=D(_),se=k(_,"DIV",{class:!0});var Ge=H(se);Ae=E(Ge,"Experience: "),Se=E(Ge,c[0]),Ge.forEach(T),He=D(_),re=k(_,"DIV",{class:!0});var Ke=H(re);ze=E(Ke,"Drachmas: "),Pe=E(Ke,c[1]),Ke.forEach(T),Le=D(_),ce=k(_,"BUTTON",{"data-svelte-h":!0}),Ee(ce)!=="svelte-lzajz"&&(ce.textContent=Je),Be=D(_),oe=k(_,"BUTTON",{"data-svelte-h":!0}),Ee(oe)!=="svelte-z72cka"&&(oe.textContent=Qe),Oe=D(_),ne=k(_,"BUTTON",{"data-svelte-h":!0}),Ee(ne)!=="svelte-1hg8zdr"&&(ne.textContent=We),_.forEach(T),this.h()},h(){o(z,"rel","preload"),o(z,"as","image"),o(z,"href",e=y+"/game/"+c[3].img.slice(0,-4)+"_attack.png"),o(w,"rel","preload"),o(w,"as","image"),o(w,"href",K=y+"/game/"+c[3].img.slice(0,-4)+"_hurt.png"),o(N,"rel","preload"),o(N,"as","image"),o(N,"href",J=y+"/game/"+c[6].img.slice(0,-4)+"_attack.png"),o(t,"rel","preload"),o(t,"as","image"),o(t,"href",r=y+"/game/"+c[6].img.slice(0,-4)+"_hurt.png"),o(M,"class","stats svelte-ik8jtp"),De(b.src,s=y+"/game/"+c[3].img)||o(b,"src",s),o(b,"width","128px"),o(b,"height","128px"),o(b,"alt",n=c[3].name),X(b,"attack",c[9]),X(b,"hurt",c[11]),o(d,"class",O=et(c[10]?c[3].specialEffect:"")+" svelte-ik8jtp"),o(g,"class","special-effect-container svelte-ik8jtp"),o(p,"class","enemy-creature svelte-ik8jtp"),De(p.src,U=y+"/game/"+c[6].img)||o(p,"src",U),o(p,"width","128px"),o(p,"height","128px"),o(p,"alt",G=c[6].name),X(p,"enemy-attack",c[11]),X(p,"enemy-hurt",c[9]),o(A,"class","creatures svelte-ik8jtp"),o(fe,"class","combat-alert svelte-ik8jtp"),o(se,"class","experience svelte-ik8jtp"),o(re,"class","drachmas svelte-ik8jtp"),o(l,"class","game-container svelte-ik8jtp")},m(m,i){a(ve.head,z),a(ve.head,w),a(ve.head,N),a(ve.head,t),at(m,Z,i),at(m,l,i),a(l,I),a(I,u),a(l,v),a(l,M),a(M,L),a(L,j),a(L,q),a(L,x),a(L,Q),a(M,me),a(M,F),a(F,ke),a(F,W),a(F,_e),a(F,ie),a(M,pe),a(M,V),a(V,ue),a(V,ee),a(V,ye),a(V,de),a(l,Me),a(l,A),a(A,b),a(A,f),a(A,g),a(g,d),a(A,S),a(A,p),a(l,we),a(l,ae),a(l,Re),a(l,le),a(l,je),a(l,fe),a(fe,Ne),a(l,Ve),a(l,se),a(se,Ae),a(se,Se),a(l,He),a(l,re),a(re,ze),a(re,Pe),a(l,Le),a(l,ce),a(l,Be),a(l,oe),a(l,Oe),a(l,ne),Ue||(Xe=[be(ae,"click",c[16]),be(le,"click",c[17]),be(ce,"click",c[18]),be(oe,"click",c[19]),be(ne,"click",c[20])],Ue=!0)},p(m,i){i[0]&8&&e!==(e=y+"/game/"+m[3].img.slice(0,-4)+"_attack.png")&&o(z,"href",e),i[0]&8&&K!==(K=y+"/game/"+m[3].img.slice(0,-4)+"_hurt.png")&&o(w,"href",K),i[0]&64&&J!==(J=y+"/game/"+m[6].img.slice(0,-4)+"_attack.png")&&o(N,"href",J),i[0]&64&&r!==(r=y+"/game/"+m[6].img.slice(0,-4)+"_hurt.png")&&o(t,"href",r),i[0]&4&&R!==(R=m[2].name+"")&&Y(u,R),i[0]&16&&Y(q,m[4]),i[0]&8&&B!==(B=m[3].hp+"")&&Y(Q,B),i[0]&32&&Y(W,m[5]),i[0]&8&&$!==($=m[3].mp+"")&&Y(ie,$),i[0]&128&&Y(ee,m[7]),i[0]&64&&te!==(te=m[6].hp+"")&&Y(de,te),i[0]&8&&!De(b.src,s=y+"/game/"+m[3].img)&&o(b,"src",s),i[0]&8&&n!==(n=m[3].name)&&o(b,"alt",n),i[0]&512&&X(b,"attack",m[9]),i[0]&2048&&X(b,"hurt",m[11]),i[0]&1032&&O!==(O=et(m[10]?m[3].specialEffect:"")+" svelte-ik8jtp")&&o(d,"class",O),i[0]&64&&!De(p.src,U=y+"/game/"+m[6].img)&&o(p,"src",U),i[0]&64&&G!==(G=m[6].name)&&o(p,"alt",G),i[0]&2048&&X(p,"enemy-attack",m[11]),i[0]&512&&X(p,"enemy-hurt",m[9]),i[0]&256&&Y(Ne,m[8]),i[0]&1&&Y(Se,m[0]),i[0]&2&&Y(Pe,m[1])},i:tt,o:tt,d(m){m&&(T(Z),T(l)),T(z),T(w),T(N),T(t),Ue=!1,nt(Xe)}}}function kt(c,z,e){let w=0,K=0,N=lt[0],J=qe.filter(s=>s.stageId===N.id),t=J[0],r=st[0],Z=!1,l=t.hp+r.hpMod,I=t.mp+r.mpMod,R=ct.filter(s=>s.stageId===N.id),u=R[Math.floor(Math.random()*R.length)],v=u.hp,M="",L=0,j=!1,q=!1,x=!1,B=null,Q=null,me=null;const F=()=>{if(I!==t.mp+r.mpMod&&I+t.mpRegen+r.mpRegenMod<=t.mp+r.mpMod){e(5,I=I+t.mpRegen+r.mpRegenMod);return}e(5,I=t.mp+r.mpMod)},ke=(s,n)=>{if(l-(u.attack-u.attack*s)*n<=0){e(8,M="Defeat!"),e(4,l=0);return}e(4,l=l-(u.attack-u.attack*s)*n)},W=(s,n,f)=>{try{const g=t.speed+r.speedMod;let d=(t.defense+r.defenseMod)/100,O=u.critical/100,S=1,p=!1;if(u.attackType==="Magic"&&(d=0),u.speed<g?p=Math.random()>=.5:p=Math.random()>=.8,L>1&&!p&&!s&&(p=!0),!p&&s&&e(8,M="Enemy was too slow!"),!p&&!s){e(5,I=t.mp+r.mpMod),L+=1,V(n,f);return}n===t.attackName&&F(),p&&s&&e(8,M="Both abilities succeeded."),p&&!s&&e(8,M="Your summon was too slow!"),p&&(Math.random()<=O&&(S=1.5),u.attackType==="Poison"&&S===1&&(S=1.5),ke(d,S),e(11,x=!0),me=setTimeout(()=>e(11,x=!1),500))}catch(g){console.error(g)}},_e=(s,n,f,g,d)=>{d==="Lifesteal"&&f&&(l+s*n*.2>t.hp+r.hpMod?e(4,l=t.hp+r.hpMod):e(4,l=l+s*n*.2)),W(f,g,d)},$=(s,n,f,g,d)=>{s&&(l+n*f>t.hp+r.hpMod?e(4,l=t.hp+r.hpMod):e(4,l=l+n*f)),W(s,g,d)},ie=(s,n,f,g,d,O,S)=>{if(e(5,I=I-f),S!=="Heal"){if(v-(n-n*d)*g<=0&&s){e(7,v=0),e(8,M="Victory!"),e(0,w+=u.reward*2),e(1,K+=u.reward),e(9,j=!0),B=setTimeout(()=>e(9,j=!1),500),e(10,q=!0),Q=setTimeout(()=>e(10,q=!1),500);return}s&&(e(7,v=v-(n-n*d)*g),e(9,j=!0),B=setTimeout(()=>e(9,j=!1),500),e(10,q=!0),Q=setTimeout(()=>e(10,q=!1),500)),_e(n,g,s,O,S);return}$(s,n,g,O,S)},pe=()=>{(l<=0||v<=0)&&(e(4,l=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),e(6,u=R[Math.floor(Math.random()*R.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${y+"/game/"+u.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${y+"/game/"+u.img.slice(0,-4)+"_attack.png"})`),e(7,v=u.hp),e(8,M=""))},V=(s,n)=>{try{const f=t.attack+r.attackMod,g=t.speed+r.speedMod,d=(t.critical+r.criticalMod)/100;let O=t.special+r.specialMod,S=t.specialCost,p=u.defense/100,U=!1,G=1;if(pe(),n==="Magic"&&(p=0),g<u.speed?U=Math.random()>=.5:U=Math.random()>=.8,Math.random()<=d&&(G=1.5),n==="Poison"&&G===1&&(G=1.5),s===t.attackName){if(v-(f-f*p)*G<=0&&U){e(7,v=0),e(8,M="Victory!"),e(0,w+=u.reward*2),e(1,K+=u.reward),e(9,j=!0),B=setTimeout(()=>e(9,j=!1),500);return}U&&(e(7,v=v-(f-f*p)*G),e(9,j=!0),B=setTimeout(()=>e(9,j=!1),500)),W(U,s,n);return}I>=S?ie(U,O,S,G,p,s,n):e(8,M="Not enough MP!")}catch(f){console.error(f)}},ue=()=>{try{const s=u;e(4,l=0),pe(),e(3,t=qe.find(n=>n.id===s.id)),e(4,l=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${y+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${y+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`)}catch(s){console.error(s)}},ee=()=>{try{const n=[{label:"Name",value:t.name},{label:"HP",value:t.hp+r.hpMod},{label:"Speed",value:t.speed+r.speedMod},{label:"Defense",value:t.defense+r.defenseMod},{label:"Critical",value:t.critical+r.criticalMod},{label:"MP",value:t.mp+r.mpMod},{label:"MP Regen",value:t.mpRegen+r.mpRegenMod},{label:`
Attack Name`,value:t.attackName},{label:"Attack",value:t.attack+r.attackMod},{label:"Attack Type",value:t.attackType},{label:`
Special Name`,value:t.specialName},{label:"Special",value:t.special+r.specialMod},{label:"Special Cost",value:t.specialCost},{label:"Special Type",value:t.specialType}].map(f=>`${f.label}: ${f.value}`).join(`
`);alert(n)}catch(s){console.error(s)}},ye=()=>{Z&&(localStorage.setItem("drachmas",K),localStorage.setItem("playerExperience",w),localStorage.setItem("chosenRelicId",r.id))};mt(()=>{try{const s=localStorage.getItem("drachmas"),n=localStorage.getItem("playerExperience"),f=localStorage.getItem("chosenRelicId"),g=localStorage.getItem("curStageId");rt.set(!0),s&&e(1,K=parseInt(s)),n&&e(0,w=parseInt(n)),f&&e(15,r=st.find(d=>d.id===parseInt(f))),g&&e(2,N=lt.find(d=>d.id===parseInt(g))),J=qe.filter(d=>d.stageId===N.id),e(3,t=J[0]),e(4,l=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${y+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${y+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`),R=ct.filter(d=>d.stageId===N.id),e(6,u=R[Math.floor(Math.random()*R.length)]),e(7,v=u.hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${y+"/game/"+u.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${y+"/game/"+u.img.slice(0,-4)+"_attack.png"})`),Z=!0}catch(s){console.error(s)}}),it(()=>{rt.set(!1),clearTimeout(B),clearTimeout(Q),clearTimeout(me)});const te=()=>V(t.attackName,t.attackType),de=()=>V(t.specialName,t.specialType),Me=()=>ue(),A=()=>ee(),b=()=>{gt(y+"/game/world")};return c.$$.update=()=>{c.$$.dirty[0]&32771&&ye()},[w,K,N,t,l,I,u,v,M,j,q,x,V,ue,ee,r,te,de,Me,A,b]}class Et extends pt{constructor(z){super(),ut(this,z,kt,ht,ot,{},null,[-1,-1])}}export{Et as component};
