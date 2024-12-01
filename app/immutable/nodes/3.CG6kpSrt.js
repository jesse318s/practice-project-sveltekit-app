import{s as xe,d as Se,e as Je,n as Ke,r as $e,o as et,f as tt}from"../chunks/scheduler.BoReh3vH.js";import{S as at,i as st,e as y,t as T,s as v,c as M,a as A,b as C,d as D,f as S,y as be,o as d,z as L,g as lt,h as a,A as Te,j as Y}from"../chunks/index.BklZDJd0.js";import{s as Qe,r as We}from"../chunks/relics.9MHovSS4.js";import{i as Xe}from"../chunks/store.Cn0GNUQE.js";import{b as H,g as rt}from"../chunks/entry.DCmBYaZs.js";const Le=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",hp:125,attack:50,attackName:"Strike",attackType:"Normal",speed:30,defense:30,critical:10,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Scorch",specialType:"Magic",specialEffect:"special-effect-4"},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",hp:100,attack:50,attackName:"Stab",attackType:"Normal",speed:40,defense:20,critical:50,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Ruin",specialType:"Magic",specialEffect:"special-effect-2"}],Ze=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50}];function ct(c){let n,e,O=c[2].name+"",G,j,N,t,r,x,g,I=c[3].hp+"",B,m,h,z,$,R,U=c[3].mp+"",K,Q,w,ee,te,ie,ae=c[6].hp+"",ue,se,P,k,de,le,W,J,re,ke,_,fe,ge,_e,X,l,o,i,u,f="Attack",q,b,E="Special",F,V,Ce,Ne,ce,we,Ee,Pe,oe,De,ve,ze,ne,Oe="Mimic Summon",Re,me,Ue="View Stats",Ve,pe,Ge="Travel",Ae,je;return{c(){n=y("div"),e=y("h2"),G=T(O),j=v(),N=y("div"),t=y("div"),r=T("Player HP: "),x=T(c[4]),g=T("/"),B=T(I),m=v(),h=y("div"),z=T("Player MP: "),$=T(c[5]),R=T("/"),K=T(U),Q=v(),w=y("div"),ee=T("Enemy HP: "),te=T(c[7]),ie=T("/"),ue=T(ae),se=v(),P=y("div"),k=y("img"),W=v(),J=y("div"),ke=v(),_=y("img"),_e=v(),X=y("div"),l=y("div"),i=v(),u=y("button"),u.textContent=f,q=v(),b=y("button"),b.textContent=E,F=v(),V=y("div"),Ce=T(c[8]),Ne=v(),ce=y("div"),we=T("Experience: "),Ee=T(c[0]),Pe=v(),oe=y("div"),De=T("Drachmas: "),ve=T(c[1]),ze=v(),ne=y("button"),ne.textContent=Oe,Re=v(),me=y("button"),me.textContent=Ue,Ve=v(),pe=y("button"),pe.textContent=Ge,this.h()},l(p){n=M(p,"DIV",{class:!0});var s=A(n);e=M(s,"H2",{});var qe=A(e);G=C(qe,O),qe.forEach(D),j=S(s),N=M(s,"DIV",{class:!0});var he=A(N);t=M(he,"DIV",{});var ye=A(t);r=C(ye,"Player HP: "),x=C(ye,c[4]),g=C(ye,"/"),B=C(ye,I),ye.forEach(D),m=S(he),h=M(he,"DIV",{});var Me=A(h);z=C(Me,"Player MP: "),$=C(Me,c[5]),R=C(Me,"/"),K=C(Me,U),Me.forEach(D),Q=S(he),w=M(he,"DIV",{});var Ie=A(w);ee=C(Ie,"Enemy HP: "),te=C(Ie,c[7]),ie=C(Ie,"/"),ue=C(Ie,ae),Ie.forEach(D),he.forEach(D),se=S(s),P=M(s,"DIV",{class:!0});var Z=A(P);k=M(Z,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),W=S(Z),J=M(Z,"DIV",{class:!0}),A(J).forEach(D),ke=S(Z),_=M(Z,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),_e=S(Z),X=M(Z,"DIV",{class:!0});var Fe=A(X);l=M(Fe,"DIV",{class:!0}),A(l).forEach(D),Fe.forEach(D),Z.forEach(D),i=S(s),u=M(s,"BUTTON",{"data-svelte-h":!0}),be(u)!=="svelte-ig8gg4"&&(u.textContent=f),q=S(s),b=M(s,"BUTTON",{"data-svelte-h":!0}),be(b)!=="svelte-172d9ub"&&(b.textContent=E),F=S(s),V=M(s,"DIV",{class:!0});var Ye=A(V);Ce=C(Ye,c[8]),Ye.forEach(D),Ne=S(s),ce=M(s,"DIV",{class:!0});var He=A(ce);we=C(He,"Experience: "),Ee=C(He,c[0]),He.forEach(D),Pe=S(s),oe=M(s,"DIV",{class:!0});var Be=A(oe);De=C(Be,"Drachmas: "),ve=C(Be,c[1]),Be.forEach(D),ze=S(s),ne=M(s,"BUTTON",{"data-svelte-h":!0}),be(ne)!=="svelte-lzajz"&&(ne.textContent=Oe),Re=S(s),me=M(s,"BUTTON",{"data-svelte-h":!0}),be(me)!=="svelte-z72cka"&&(me.textContent=Ue),Ve=S(s),pe=M(s,"BUTTON",{"data-svelte-h":!0}),be(pe)!=="svelte-1hg8zdr"&&(pe.textContent=Ge),s.forEach(D),this.h()},h(){d(N,"class","stats svelte-dfb9zx"),Se(k.src,de=H+"/game/"+c[3].img)||d(k,"src",de),d(k,"width","128px"),d(k,"height","128px"),d(k,"alt",le=c[3].name),d(k,"class","svelte-dfb9zx"),L(k,"attack",c[9]),L(k,"hurt",c[11]),L(k,"player-using-special",c[10]),d(J,"class",re=Je(c[10]?c[3].specialEffect:"")+" svelte-dfb9zx"),d(_,"class","enemy-creature svelte-dfb9zx"),Se(_.src,fe=H+"/game/"+c[6].img)||d(_,"src",fe),d(_,"width","128px"),d(_,"height","128px"),d(_,"alt",ge=c[6].name),L(_,"enemy-attack",c[11]),L(_,"enemy-hurt",c[9]),L(_,"enemy-spawning",c[12]),d(l,"class",o=c[12]?"enemy-spawn":""),d(X,"class","enemy-spawn-container svelte-dfb9zx"),d(P,"class","creatures svelte-dfb9zx"),d(V,"class","combat-alert svelte-dfb9zx"),d(ce,"class","experience svelte-dfb9zx"),d(oe,"class","drachmas svelte-dfb9zx"),d(n,"class","game-container svelte-dfb9zx")},m(p,s){lt(p,n,s),a(n,e),a(e,G),a(n,j),a(n,N),a(N,t),a(t,r),a(t,x),a(t,g),a(t,B),a(N,m),a(N,h),a(h,z),a(h,$),a(h,R),a(h,K),a(N,Q),a(N,w),a(w,ee),a(w,te),a(w,ie),a(w,ue),a(n,se),a(n,P),a(P,k),a(P,W),a(P,J),a(P,ke),a(P,_),a(P,_e),a(P,X),a(X,l),a(n,i),a(n,u),a(n,q),a(n,b),a(n,F),a(n,V),a(V,Ce),a(n,Ne),a(n,ce),a(ce,we),a(ce,Ee),a(n,Pe),a(n,oe),a(oe,De),a(oe,ve),a(n,ze),a(n,ne),a(n,Re),a(n,me),a(n,Ve),a(n,pe),Ae||(je=[Te(u,"click",c[17]),Te(b,"click",c[18]),Te(ne,"click",c[19]),Te(me,"click",c[20]),Te(pe,"click",c[21])],Ae=!0)},p(p,s){s[0]&4&&O!==(O=p[2].name+"")&&Y(G,O),s[0]&16&&Y(x,p[4]),s[0]&8&&I!==(I=p[3].hp+"")&&Y(B,I),s[0]&32&&Y($,p[5]),s[0]&8&&U!==(U=p[3].mp+"")&&Y(K,U),s[0]&128&&Y(te,p[7]),s[0]&64&&ae!==(ae=p[6].hp+"")&&Y(ue,ae),s[0]&8&&!Se(k.src,de=H+"/game/"+p[3].img)&&d(k,"src",de),s[0]&8&&le!==(le=p[3].name)&&d(k,"alt",le),s[0]&512&&L(k,"attack",p[9]),s[0]&2048&&L(k,"hurt",p[11]),s[0]&1024&&L(k,"player-using-special",p[10]),s[0]&1032&&re!==(re=Je(p[10]?p[3].specialEffect:"")+" svelte-dfb9zx")&&d(J,"class",re),s[0]&64&&!Se(_.src,fe=H+"/game/"+p[6].img)&&d(_,"src",fe),s[0]&64&&ge!==(ge=p[6].name)&&d(_,"alt",ge),s[0]&2048&&L(_,"enemy-attack",p[11]),s[0]&512&&L(_,"enemy-hurt",p[9]),s[0]&4096&&L(_,"enemy-spawning",p[12]),s[0]&4096&&o!==(o=p[12]?"enemy-spawn":"")&&d(l,"class",o),s[0]&256&&Y(Ce,p[8]),s[0]&1&&Y(Ee,p[0]),s[0]&2&&Y(ve,p[1])},i:Ke,o:Ke,d(p){p&&D(n),Ae=!1,$e(je)}}}function ot(c,n,e){let O=0,G=0,j=Qe[0],N=Le.filter(l=>l.stageId===j.id),t=N[0],r=We[0],x=!1,g=t.hp+r.hpMod,I=t.mp+r.mpMod,B=Ze.filter(l=>l.stageId===j.id),m=B[Math.floor(Math.random()*B.length)],h=m.hp,z="",$=0,R=!1,U=!1,K=!1,Q=!1,w=null,ee=null,te=null,ie=null;const ae=()=>{if(I!==t.mp+r.mpMod&&I+t.mpRegen+r.mpRegenMod<=t.mp+r.mpMod){e(5,I=I+t.mpRegen+r.mpRegenMod);return}e(5,I=t.mp+r.mpMod)},ue=(l,o)=>{if(g-(m.attack-m.attack*l)*o<=0){e(8,z="Defeat!"),e(4,g=0);return}e(4,g=g-(m.attack-m.attack*l)*o)},se=(l,o,i)=>{try{const u=t.speed+r.speedMod;let f=(t.defense+r.defenseMod)/100,q=m.critical/100,b=1,E=!1;if(m.attackType==="Magic"&&(f=0),m.speed<u?E=Math.random()>=.5:E=Math.random()>=.8,$>1&&!E&&!l&&(E=!0),!E&&l&&e(8,z="Enemy was too slow!"),!E&&!l){e(5,I=t.mp+r.mpMod),$+=1,W(o,i);return}o===t.attackName&&ae(),E&&l&&e(8,z="Both abilities succeeded."),E&&!l&&e(8,z="Your summon was too slow!"),E&&(Math.random()<=q&&(b=1.5),m.attackType==="Poison"&&b===1&&(b=1.5),ue(f,b),e(11,K=!0),te=setTimeout(()=>e(11,K=!1),500))}catch(u){console.error(u)}},P=(l,o,i,u,f)=>{f==="Lifesteal"&&i&&(g+l*o*.2>t.hp+r.hpMod?e(4,g=t.hp+r.hpMod):e(4,g=g+l*o*.2)),se(i,u,f)},k=(l,o,i,u,f)=>{l&&(g+o*i>t.hp+r.hpMod?e(4,g=t.hp+r.hpMod):e(4,g=g+o*i)),se(l,u,f)},de=(l,o,i,u,f,q,b)=>{if(e(5,I=I-i),b!=="Heal"){if(h-(o-o*f)*u<=0&&l){e(7,h=0),e(8,z="Victory!"),e(0,O+=m.reward*2),e(1,G+=m.reward),e(9,R=!0),w=setTimeout(()=>e(9,R=!1),500),e(10,U=!0),ee=setTimeout(()=>e(10,U=!1),500);return}l&&(e(7,h=h-(o-o*f)*u),e(9,R=!0),w=setTimeout(()=>e(9,R=!1),500),e(10,U=!0),ee=setTimeout(()=>e(10,U=!1),500)),P(o,u,l,q,b);return}k(l,o,u,q,b)},le=()=>{(g<=0||h<=0)&&(e(4,g=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),e(12,Q=!0),ie=setTimeout(()=>e(12,Q=!1),500),e(6,m=B[Math.floor(Math.random()*B.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${H+"/game/"+m.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${H+"/game/"+m.img.slice(0,-4)+"_attack.png"})`),e(7,h=m.hp),e(8,z=""))},W=(l,o)=>{try{const i=t.attack+r.attackMod,u=t.speed+r.speedMod,f=(t.critical+r.criticalMod)/100;let q=t.special+r.specialMod,b=t.specialCost,E=m.defense/100,F=!1,V=1;if(Q)return;if(le(),o==="Magic"&&(E=0),u<m.speed?F=Math.random()>=.5:F=Math.random()>=.8,Math.random()<=f&&(V=1.5),o==="Poison"&&V===1&&(V=1.5),l===t.attackName){if(h-(i-i*E)*V<=0&&F){e(7,h=0),e(8,z="Victory!"),e(0,O+=m.reward*2),e(1,G+=m.reward),e(9,R=!0),w=setTimeout(()=>e(9,R=!1),500);return}F&&(e(7,h=h-(i-i*E)*V),e(9,R=!0),w=setTimeout(()=>e(9,R=!1),500)),se(F,l,o);return}I>=b?de(F,q,b,V,E,l,o):e(8,z="Not enough MP!")}catch(i){console.error(i)}},J=()=>{try{const l=m;e(4,g=0),le(),e(3,t=Le.find(o=>o.id===l.id)),e(4,g=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${H+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${H+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`)}catch(l){console.error(l)}},re=()=>{try{const o=[{label:"Name",value:t.name},{label:"HP",value:t.hp+r.hpMod},{label:"Speed",value:t.speed+r.speedMod},{label:"Defense",value:t.defense+r.defenseMod},{label:"Critical",value:t.critical+r.criticalMod},{label:"MP",value:t.mp+r.mpMod},{label:"MP Regen",value:t.mpRegen+r.mpRegenMod},{label:`
Attack Name`,value:t.attackName},{label:"Attack",value:t.attack+r.attackMod},{label:"Attack Type",value:t.attackType},{label:`
Special Name`,value:t.specialName},{label:"Special",value:t.special+r.specialMod},{label:"Special Cost",value:t.specialCost},{label:"Special Type",value:t.specialType}].map(i=>`${i.label}: ${i.value}`).join(`
`);alert(o)}catch(l){console.error(l)}},ke=()=>{x&&(localStorage.setItem("drachmas",G),localStorage.setItem("playerExperience",O),localStorage.setItem("chosenRelicId",r.id))};et(()=>{try{const l=localStorage.getItem("drachmas"),o=localStorage.getItem("playerExperience"),i=localStorage.getItem("chosenRelicId"),u=localStorage.getItem("curStageId");Xe.set(!0),l&&e(1,G=parseInt(l)),o&&e(0,O=parseInt(o)),i&&e(16,r=We.find(f=>f.id===parseInt(i))),u&&e(2,j=Qe.find(f=>f.id===parseInt(u))),N=Le.filter(f=>f.stageId===j.id),e(3,t=N[0]),e(4,g=t.hp+r.hpMod),e(5,I=t.mp+r.mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${H+"/game/"+t.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${H+"/game/"+t.img.slice(0,-4)+"_hurt.png"})`),B=Ze.filter(f=>f.stageId===j.id),e(6,m=B[Math.floor(Math.random()*B.length)]),e(7,h=m.hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${H+"/game/"+m.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${H+"/game/"+m.img.slice(0,-4)+"_attack.png"})`),x=!0}catch(l){console.error(l)}}),tt(()=>{Xe.set(!1),clearTimeout(w),clearTimeout(ee),clearTimeout(te),clearTimeout(ie)});const _=()=>W(t.attackName,t.attackType),fe=()=>W(t.specialName,t.specialType),ge=()=>J(),_e=()=>re(),X=()=>{rt(H+"/game/world")};return c.$$.update=()=>{c.$$.dirty[0]&65539&&ke()},[O,G,j,t,g,I,m,h,z,R,U,K,Q,W,J,re,r,_,fe,ge,_e,X]}class dt extends at{constructor(n){super(),st(this,n,ot,ct,xe,{},null,[-1,-1])}}export{dt as component};
