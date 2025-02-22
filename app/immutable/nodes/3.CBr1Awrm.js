import{t as Z,a as ee,e as H,s as P}from"../chunks/B_G1IST3.js";import{i as te}from"../chunks/MmwkNIPH.js";import{ab as ae,ad as _e,ae as se,ah as M,af as v,ag as k,at as Ue,d as e,O as Be,au as T,aq as Ge,av as Ve,aw as je,ax as qe,Y as t,e as ge}from"../chunks/BUi6LC3r.js";import{s as fe,r as ve}from"../chunks/Bej4_qsT.js";import{s as B,t as C,a as ke,i as he}from"../chunks/B_XFWXRK.js";import{b as x,g as Oe}from"../chunks/DADz807L.js";import{p as $}from"../chunks/NCp_TbZO.js";import{c as ye}from"../chunks/Jce5emvo.js";const X=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special-effect-2"},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",hp:110,attack:30,attackName:"Gaze",attackType:"Magic",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Petrify",specialType:"Magic",specialEffect:"special-effect-3"},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",hp:60,attack:50,attackName:"Exhale",attackType:"Magic",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Fireball",specialType:"Magic",specialEffect:"special-effect-4"},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",hp:125,attack:50,attackName:"Strike",attackType:"Normal",speed:30,defense:30,critical:10,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Scorch",specialType:"Magic",specialEffect:"special-effect-4"},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",hp:100,attack:50,attackName:"Stab",attackType:"Normal",speed:40,defense:20,critical:50,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Ruin",specialType:"Magic",specialEffect:"special-effect-2"}],be=[{id:1,stageId:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,stageId:1,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15},{id:3,stageId:2,name:"Medusa",img:"medusa_creature.png",reward:5,hp:110,attack:30,attackType:"Magic",speed:30,defense:15,critical:15},{id:4,stageId:2,name:"Baby Dragon",img:"small_dragon_creature.png",reward:5,hp:60,attack:50,attackType:"Magic",speed:60,defense:20,critical:25},{id:5,stageId:3,name:"Skeleton",img:"skeleton_creature.png",reward:12,hp:125,attack:50,attackType:"Normal",speed:30,defense:30,critical:10},{id:6,stageId:3,name:"Skeleton",img:"skeleton_creature_spear.png",reward:12,hp:100,attack:50,attackType:"Normal",speed:40,defense:20,critical:50}];var Ye=Z('<section class="battle-container svelte-b5b362"><div class="battlefield svelte-b5b362"><div class="creatures-container svelte-b5b362"><div class="creature player-creature svelte-b5b362"><img width="128px" height="128px" class="svelte-b5b362"> <div class="shadow svelte-b5b362"></div> <div></div></div> <div class="creature enemy-creature svelte-b5b362"><img width="128px" height="128px" class="svelte-b5b362"> <div class="shadow svelte-b5b362"></div> <div class="enemy-spawn-container svelte-b5b362"><div></div></div></div></div> <div class="floor svelte-b5b362"></div></div></section>');function Fe(p,m){ae(m,!1);let n=$(m,"playerState",8),l=$(m,"enemyState",8);te();var b=Ye(),N=v(b),a=v(N),s=v(a),I=v(s),o=M(I,4);k(s);var g=M(s,2),y=v(g),r=M(y,4),d=v(r);k(r),k(g),k(a),Ue(2),k(N),k(b),_e(()=>{B(I,"src",x+"/game/"+n().creature.img),B(I,"alt",n().creature.name),C(I,"attack",n().isAttacking),C(I,"hurt",l().isAttacking),C(I,"aura",!n().isUsingSpecial),C(I,"player-using-special",n().isUsingSpecial),ke(o,ye(n().isUsingSpecial?n().creature.specialEffect:""),"svelte-b5b362"),B(y,"src",x+"/game/"+l().creature.img),B(y,"alt",l().creature.name),C(y,"enemy-attack",l().isAttacking),C(y,"enemy-hurt",n().isAttacking),C(y,"enemy-spawning",l().isSpawning),ke(d,ye(l().isSpawning?"enemy-spawn":""),"svelte-b5b362")}),ee(p,b),se()}const Je=(p,m)=>{try{const l=[{label:"Name",value:p.name},{label:"HP",value:p.hp+m.hpMod},{label:"Speed",value:p.speed+m.speedMod},{label:"Defense",value:p.defense+m.defenseMod},{label:"Critical",value:p.critical+m.criticalMod},{label:"MP",value:p.mp+m.mpMod},{label:"MP Regen",value:p.mpRegen+m.mpRegenMod},{label:`
Attack Name`,value:p.attackName},{label:"Attack",value:p.attack+m.attackMod},{label:"Attack Type",value:p.attackType},{label:`
Special Name`,value:p.specialName},{label:"Special",value:p.special+m.specialMod},{label:"Special Cost",value:p.specialCost},{label:"Special Type",value:p.specialType}].map(b=>`${b.label}: ${b.value}`).join(`
`);alert(l)}catch(n){console.error(n)}};var Ke=Z("<section><button>Attack</button> <button>Special</button> <button>Mimic Summon</button> <button>View Stats</button> <button>Travel</button></section>");function Qe(p,m){ae(m,!1);let n=$(m,"battleEnemy",8),l=$(m,"playerCreature",8),b=$(m,"swapCreature",8),N=$(m,"chosenRelic",8);te();var a=Ke(),s=v(a),I=M(s,2),o=M(I,2),g=M(o,2),y=Be(()=>Je(l(),N())),r=M(g,2);k(a),H("click",s,()=>n()(l().attackName,l().attackType)),H("contextmenu",s,d=>{d.preventDefault(),n()(l().specialName,l().specialType)}),H("click",I,()=>n()(l().specialName,l().specialType)),H("click",o,function(...d){var _;(_=b())==null||_.apply(this,d)}),H("click",g,function(...d){var _;(_=e(y))==null||_.apply(this,d)}),H("click",r,()=>{Oe(x+"/game/world")}),ee(p,a),se()}var We=Z('<main class="game-container svelte-ku2xkl"><section><h2> </h2> <div class="info svelte-ku2xkl"><div class="info-item svelte-ku2xkl"><div class="experience"> </div> <div class="drachmas"> </div></div> <div class="info-item svelte-ku2xkl"><div> </div> <div> </div> <div> </div></div> <div> </div></div></section> <!> <!></main>');function ct(p,m){ae(m,!1);let n=T(0),l=T(0),b=T(fe[0]),N=X.filter(i=>i.stageId===e(b).id),a=T(N[0]),s=T(ve[0]),I=!1,o=T(e(a).hp+e(s).hpMod),g=T(e(a).mp+e(s).mpMod),y=be.filter(i=>i.stageId===e(b).id),r=T(y[Math.floor(Math.random()*y.length)]),d=T(e(r).hp),_=T(""),ie=0,E=T(!1),L=T(!1),G=T(!1),U=T(!1),z=null,V=null,re=null,ce=null;const Me=()=>{if(e(g)!==e(a).mp+e(s).mpMod&&e(g)+e(a).mpRegen+e(s).mpRegenMod<=e(a).mp+e(s).mpMod){t(g,e(g)+e(a).mpRegen+e(s).mpRegenMod);return}t(g,e(a).mp+e(s).mpMod)},Se=(i,c)=>{if(e(o)-(e(r).attack-e(r).attack*i)*c<=0){t(_,"Defeat!"),t(o,0);return}t(o,e(o)-(e(r).attack-e(r).attack*i)*c)},j=(i,c,f)=>{try{const h=e(a).speed+e(s).speedMod;let u=(e(a).defense+e(s).defenseMod)/100,A=e(r).critical/100,w=1,S=!1;if(e(r).attackType==="Magic"&&(u=0),e(r).speed<h?S=Math.random()>=.5:S=Math.random()>=.8,ie>1&&!S&&!i&&(S=!0),!S&&i&&t(_,"Enemy was too slow!"),!S&&!i){t(g,e(a).mp+e(s).mpMod),ie+=1,ne(c,f);return}c===e(a).attackName&&Me(),S&&i&&t(_,"Both abilities succeeded."),S&&!i&&t(_,"Your summon was too slow!"),S&&(Math.random()<=A&&(w=1.5),e(r).attackType==="Poison"&&w===1&&(w=1.5),Se(u,w),t(G,!0),re=setTimeout(()=>t(G,!1),500))}catch(h){console.error(h)}},Te=(i,c,f,h,u)=>{u==="Lifesteal"&&f&&(e(o)+i*c*.2>e(a).hp+e(s).hpMod?t(o,e(a).hp+e(s).hpMod):t(o,e(o)+i*c*.2)),j(f,h,u)},Ie=(i,c,f,h,u)=>{i&&(e(o)+c*f>e(a).hp+e(s).hpMod?t(o,e(a).hp+e(s).hpMod):t(o,e(o)+c*f)),j(i,h,u)},we=(i,c,f,h,u,A,w)=>{if(t(g,e(g)-f),w!=="Heal"){if(e(d)-(c-c*u)*h<=0&&i){t(d,0),t(_,"Victory!"),t(n,e(n)+e(r).reward*2),t(l,e(l)+e(r).reward),t(E,!0),z=setTimeout(()=>t(E,!1),500),t(L,!0),V=setTimeout(()=>t(L,!1),500);return}i&&(t(d,e(d)-(c-c*u)*h),t(E,!0),z=setTimeout(()=>t(E,!1),500),t(L,!0),V=setTimeout(()=>t(L,!1),500)),Te(c,h,i,A,w);return}Ie(i,c,h,A,w)},le=()=>{(e(o)<=0||e(d)<=0)&&(t(o,e(a).hp+e(s).hpMod),t(g,e(a).mp+e(s).mpMod),t(U,!0),ce=setTimeout(()=>t(U,!1),500),t(r,y[Math.floor(Math.random()*y.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${x+"/game/"+e(r).img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${x+"/game/"+e(r).img.slice(0,-4)+"_attack.png"})`),t(d,e(r).hp),t(_,""))},ne=(i,c)=>{try{const f=e(a).attack+e(s).attackMod,h=e(a).speed+e(s).speedMod,u=(e(a).critical+e(s).criticalMod)/100;let A=e(a).special+e(s).specialMod,w=e(a).specialCost,S=e(r).defense/100,R=!1,D=1;if(e(U))return;if(le(),c==="Magic"&&(S=0),h<e(r).speed?R=Math.random()>=.5:R=Math.random()>=.8,Math.random()<=u&&(D=1.5),c==="Poison"&&D===1&&(D=1.5),i===e(a).attackName){if(e(d)-(f-f*S)*D<=0&&R){t(d,0),t(_,"Victory!"),t(n,e(n)+e(r).reward*2),t(l,e(l)+e(r).reward),t(E,!0),z=setTimeout(()=>t(E,!1),500);return}R&&(t(d,e(d)-(f-f*S)*D),t(E,!0),z=setTimeout(()=>t(E,!1),500)),j(R,i,c);return}e(g)>=w?we(R,A,w,D,S,i,c):t(_,"Not enough MP!")}catch(f){console.error(f)}},xe=()=>{try{const i=e(r);t(o,0),le(),t(a,X.find(c=>c.id===i.id)),t(o,e(a).hp+e(s).hpMod),t(g,e(a).mp+e(s).mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${x+"/game/"+e(a).img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${x+"/game/"+e(a).img.slice(0,-4)+"_hurt.png"})`)}catch(i){console.error(i)}},Ee=()=>{I&&(localStorage.setItem("drachmas",e(l)),localStorage.setItem("playerExperience",e(n)),localStorage.setItem("chosenRelicId",e(s).id))};Ge(()=>{try{const i=localStorage.getItem("drachmas"),c=localStorage.getItem("playerExperience"),f=localStorage.getItem("chosenRelicId"),h=localStorage.getItem("curStageId");he.set(!0),i&&t(l,parseInt(i)),c&&t(n,parseInt(c)),f&&t(s,ve.find(u=>u.id===parseInt(f))),h&&t(b,fe.find(u=>u.id===parseInt(h))),N=X.filter(u=>u.stageId===e(b).id),t(a,N[0]),t(o,e(a).hp+e(s).hpMod),t(g,e(a).mp+e(s).mpMod),document.documentElement.style.setProperty("--player-creature-img-attack",`url(${x+"/game/"+e(a).img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${x+"/game/"+e(a).img.slice(0,-4)+"_hurt.png"})`),y=be.filter(u=>u.stageId===e(b).id),t(r,y[Math.floor(Math.random()*y.length)]),t(d,e(r).hp),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${x+"/game/"+e(r).img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${x+"/game/"+e(r).img.slice(0,-4)+"_attack.png"})`),I=!0}catch(i){console.error(i)}}),Ve(()=>{he.set(!1),clearTimeout(z),clearTimeout(V),clearTimeout(re),clearTimeout(ce)}),je(()=>(e(l),e(n),e(s)),()=>{e(l),e(n),e(s),Ee()}),qe(),te();var q=We(),O=v(q),Y=v(O),Ne=v(Y,!0);k(Y);var oe=M(Y,2),F=v(oe),J=v(F),Pe=v(J);k(J);var pe=M(J,2),Ce=v(pe);k(pe),k(F);var K=M(F,2),Q=v(K),Ae=v(Q);k(Q);var W=M(Q,2),Re=v(W);k(W);var me=M(W,2),De=v(me);k(me),k(K);var de=M(K,2),He=v(de,!0);k(de),k(oe),k(O);var ue=M(O,2);const $e=ge(()=>({creature:e(a),isAttacking:e(E),isUsingSpecial:e(L)})),Le=ge(()=>({creature:e(r),isAttacking:e(G),isSpawning:e(U)}));Fe(ue,{get playerState(){return e($e)},get enemyState(){return e(Le)}});var ze=M(ue,2);Qe(ze,{battleEnemy:ne,get playerCreature(){return e(a)},swapCreature:xe,get chosenRelic(){return e(s)}}),k(q),_e(()=>{P(Ne,e(b).name),P(Pe,`Experience: ${e(n)??""}`),P(Ce,`Drachmas: ${e(l)??""}`),P(Ae,`Player HP: ${e(o)??""}/${e(a).hp??""}`),P(Re,`Player MP: ${e(g)??""}/${e(a).mp??""}`),P(De,`Enemy HP: ${e(d)??""}/${e(r).hp??""}`),P(He,e(_)||"The battle begins...")}),ee(p,q),se()}export{ct as component};
