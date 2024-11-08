import{s as Ee,d as ue,e as ge,n as ke,r as ve,o as Ce,f as Te}from"../chunks/scheduler.BoReh3vH.js";import{S as Ie,i as ze,e as C,t as b,s as H,c as T,a as q,b as R,d as P,f as j,y as Me,o as n,z as B,g as De,h as t,A as _e,j as $}from"../chunks/index.DhL7nboW.js";import{i as ye}from"../chunks/store.BxR7W1V8.js";const Pe=[{id:1,name:"Demon",img:"demon_creature.png",price:50,hp:60,attack:50,attackName:"Slash",attackType:"Normal",speed:60,defense:20,critical:25,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Harvest",specialType:"Lifesteal",specialEffect:"special-effect-1"},{id:2,name:"Lizard",img:"lizard_creature.png",price:50,hp:110,attack:30,attackName:"Impale",attackType:"Normal",speed:30,defense:15,critical:15,mp:100,mpRegen:25,special:75,specialCost:100,specialName:"Inject",specialType:"Poison",specialEffect:"special_effect_2"}],we=[{id:1,name:"Gust of Hermes",img:"relic1.png",description:"Grants the user's summon +5 speed while relic is being used. (Infinite duration, and only one relic can be active at a time)",hpMod:0,attackMod:0,speedMod:5,defenseMod:0,criticalMod:0,mpMod:0,mpRegenMod:0,specialMod:0,price:0},{id:2,name:"Spark of Zeus",img:"relic2.png",description:"Grants the user's summon +15 attack while relic is being used. (Infinite duration, and only one relic can be active at a time)",hpMod:0,attackMod:15,speedMod:0,defenseMod:0,criticalMod:0,mpMod:0,mpRegenMod:0,specialMod:0,price:150},{id:3,name:"Cup of Dionysus",img:"relic3.png",description:"Grants the user's summon +25 MP regen while relic is being used. (Infinite duration, and only one relic can be active at a time)",hpMod:0,attackMod:0,speedMod:0,defenseMod:0,criticalMod:0,mpMod:0,mpRegenMod:25,specialMod:0,price:300}],ae=[{id:1,name:"Demon",img:"demon_creature.png",reward:3,hp:60,attack:50,attackType:"Normal",speed:60,defense:20,critical:25},{id:2,name:"Lizard",img:"lizard_creature.png",reward:3,hp:110,attack:30,attackType:"Normal",speed:30,defense:15,critical:15}];function be(c){let p,e,V,O,s,i,m,E,J,l,g,I,U,z,v,_,L,Y,G,S,K,Z,k,Q,W,ee,D,re="Attack",te,a,o="Special Attack",d,u,y,N,h,M,w,A,F,ce,se,le,de;return{c(){p=C("div"),e=C("div"),V=C("div"),O=b("Player HP: "),s=b(c[2]),i=H(),m=C("div"),E=b("Player MP: "),J=b(c[3]),l=H(),g=C("div"),I=b("Enemy HP: "),U=b(c[5]),z=H(),v=C("div"),_=C("img"),Y=H(),G=C("div"),S=C("div"),Z=H(),k=C("img"),ee=H(),D=C("button"),D.textContent=re,te=H(),a=C("button"),a.textContent=o,d=H(),u=C("div"),y=b(c[6]),N=H(),h=C("div"),M=b("Experience: "),w=b(c[0]),A=H(),F=C("div"),ce=b("Drachmas: "),se=b(c[1]),this.h()},l(f){p=T(f,"DIV",{class:!0});var r=q(p);e=T(r,"DIV",{class:!0});var X=q(e);V=T(X,"DIV",{});var oe=q(V);O=R(oe,"Player HP: "),s=R(oe,c[2]),oe.forEach(P),i=j(X),m=T(X,"DIV",{});var ie=q(m);E=R(ie,"Player MP: "),J=R(ie,c[3]),ie.forEach(P),l=j(X),g=T(X,"DIV",{});var ne=q(g);I=R(ne,"Enemy HP: "),U=R(ne,c[5]),ne.forEach(P),X.forEach(P),z=j(r),v=T(r,"DIV",{class:!0});var x=q(v);_=T(x,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),Y=j(x),G=T(x,"DIV",{class:!0});var fe=q(G);S=T(fe,"DIV",{class:!0}),q(S).forEach(P),fe.forEach(P),Z=j(x),k=T(x,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),x.forEach(P),ee=j(r),D=T(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Me(D)!=="svelte-ig8gg4"&&(D.textContent=re),te=j(r),a=T(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Me(a)!=="svelte-11zl5of"&&(a.textContent=o),d=j(r),u=T(r,"DIV",{class:!0});var he=q(u);y=R(he,c[6]),he.forEach(P),N=j(r),h=T(r,"DIV",{class:!0});var pe=q(h);M=R(pe,"Experience: "),w=R(pe,c[0]),pe.forEach(P),A=j(r),F=T(r,"DIV",{class:!0});var me=q(F);ce=R(me,"Drachmas: "),se=R(me,c[1]),me.forEach(P),r.forEach(P),this.h()},h(){n(e,"class","stats svelte-qz431e"),ue(_.src,L=c[10].img)||n(_,"src",L),n(_,"alt",c[10].name),n(_,"width","128px"),n(_,"height","128px"),n(_,"class","svelte-qz431e"),B(_,"attack",c[7]),B(_,"hurt",c[9]),n(S,"class",K=ge(c[8]?c[10].specialEffect:"")+" svelte-qz431e"),n(G,"class","special-effect-container svelte-qz431e"),n(k,"class","enemy-creature svelte-qz431e"),ue(k.src,Q=c[4].img)||n(k,"src",Q),n(k,"alt",W=c[4].name),n(k,"width","128px"),n(k,"height","128px"),B(k,"enemy-attack",c[9]),B(k,"enemy-hurt",c[7]),n(v,"class","creatures svelte-qz431e"),n(D,"class","svelte-qz431e"),n(a,"class","svelte-qz431e"),n(u,"class","combat-alert svelte-qz431e"),n(h,"class","experience svelte-qz431e"),n(F,"class","drachmas svelte-qz431e"),n(p,"class","game-container svelte-qz431e")},m(f,r){De(f,p,r),t(p,e),t(e,V),t(V,O),t(V,s),t(e,i),t(e,m),t(m,E),t(m,J),t(e,l),t(e,g),t(g,I),t(g,U),t(p,z),t(p,v),t(v,_),t(v,Y),t(v,G),t(G,S),t(v,Z),t(v,k),t(p,ee),t(p,D),t(p,te),t(p,a),t(p,d),t(p,u),t(u,y),t(p,N),t(p,h),t(h,M),t(h,w),t(p,A),t(p,F),t(F,ce),t(F,se),le||(de=[_e(D,"click",c[12]),_e(a,"click",c[13])],le=!0)},p(f,[r]){r&4&&$(s,f[2]),r&8&&$(J,f[3]),r&32&&$(U,f[5]),r&128&&B(_,"attack",f[7]),r&512&&B(_,"hurt",f[9]),r&256&&K!==(K=ge(f[8]?f[10].specialEffect:"")+" svelte-qz431e")&&n(S,"class",K),r&16&&!ue(k.src,Q=f[4].img)&&n(k,"src",Q),r&16&&W!==(W=f[4].name)&&n(k,"alt",W),r&512&&B(k,"enemy-attack",f[9]),r&128&&B(k,"enemy-hurt",f[7]),r&64&&$(y,f[6]),r&1&&$(w,f[0]),r&2&&$(se,f[1])},i:ke,o:ke,d(f){f&&P(p),le=!1,ve(de)}}}function qe(c,p,e){let V=0,O=0,s=Pe[0],i=we[0],m=s.hp+i.hpMod,E=s.mp+i.mpMod,J=E,l=ae[Math.floor(Math.random()*ae.length)],g=l.hp,I="",U=0,z=!1,v=!1,_=!1,L=null,Y=null,G=null;const S=()=>{if(E!==s.mp+i.mpMod&&E+s.mpRegen+i.mpRegenMod<=s.mp+i.mpMod){e(3,E=E+s.mpRegen+i.mpRegenMod);return}e(3,E=s.mp+i.mpMod)},K=(a,o)=>{if(m-(l.attack-l.attack*a)*o<=0){e(6,I="Defeat!"),e(2,m=0);return}e(2,m=m-(l.attack-l.attack*a)*o)},Z=(a,o,d)=>{try{const u=s.speed+i.speedMod;let y=(s.defense+i.defenseMod)/100,N=l.critical/100,h=1,M=!1;if(l.attackType==="Magic"&&(y=0),l.speed<u?M=Math.random()>=.5:M=Math.random()>=.8,U>1&&!M&&!a&&(M=!0),!M&&a&&e(6,I="Enemy was too slow!"),!M&&!a){e(3,E=J),U+=1,D(o,d);return}o===s.attackName&&S(),M&&a&&e(6,I="Both abilities succeeded."),M&&!a&&e(6,I="Your summon was too slow!"),M&&(Math.random()<=N&&(h=1.5),l.attackType==="Poison"&&h===1&&(h=1.5),K(y,h),e(9,_=!0),G=setTimeout(()=>e(9,_=!1),500))}catch(u){console.error(u)}},k=(a,o,d,u,y)=>{y==="Lifesteal"&&d&&(m+a*o*.2>s.hp+i.hpMod?e(2,m=s.hp+i.hpMod):e(2,m=m+a*o*.2)),Z(d,u,y)},Q=(a,o,d,u,y)=>{a&&(m+o*d>s.hp+i.hpMod?e(2,m=s.hp+i.hpMod):e(2,m=m+o*d)),Z(a,u,y)},W=(a,o,d,u,y,N,h)=>{if(e(3,E=E-d),h!=="Heal"){if(g-(o-o*y)*u<=0&&a){e(5,g=0),e(6,I="Victory!"),e(0,V+=l.reward*2),e(1,O+=l.reward),e(7,z=!0),L=setTimeout(()=>e(7,z=!1),500),e(8,v=!0),Y=setTimeout(()=>e(8,v=!1),500);return}a&&(e(5,g=g-(o-o*y)*u),e(7,z=!0),L=setTimeout(()=>e(7,z=!1),500),e(8,v=!0),Y=setTimeout(()=>e(8,v=!1),500)),k(o,u,a,N,h);return}Q(a,o,u,N,h)},ee=()=>{(m<=0||g<=0)&&(e(2,m=s.hp+i.hpMod),e(3,E=s.mp+i.mpMod),e(4,l=ae[Math.floor(Math.random()*ae.length)]),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${"/practice-project-sveltekit-app/"+l.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${"/practice-project-sveltekit-app/"+l.img.slice(0,-4)+"_attack.png"})`),e(5,g=l.hp),e(6,I=""))},D=(a,o)=>{try{const d=s.attack+i.attackMod,u=s.speed+i.speedMod,y=(s.critical+i.criticalMod)/100;let N=s.special+i.specialMod,h=s.specialCost,M=l.defense/100,w=!1,A=1;if(ee(),o==="Magic"&&(M=0),u<l.speed?w=Math.random()>=.5:w=Math.random()>=.8,Math.random()<=y&&(A=1.5),o==="Poison"&&A===1&&(A=1.5),a===s.attackName){if(g-(d-d*M)*A<=0&&w){e(5,g=0),e(6,I="Victory!"),e(0,V+=l.reward*2),e(1,O+=l.reward),e(7,z=!0),L=setTimeout(()=>e(7,z=!1),500);return}w&&(e(5,g=g-(d-d*M)*A),e(7,z=!0),L=setTimeout(()=>e(7,z=!1),500)),Z(w,a,o);return}E>=h?W(w,N,h,A,M,a,o):e(6,I="Not enough MP!")}catch(d){console.error(d)}};return Ce(()=>{document.documentElement.style.setProperty("--player-creature-img-attack",`url(${"/practice-project-sveltekit-app/"+s.img.slice(0,-4)+"_attack.png"})`),document.documentElement.style.setProperty("--player-creature-img-hurt",`url(${"/practice-project-sveltekit-app/"+s.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-hurt",`url(${"/practice-project-sveltekit-app/"+l.img.slice(0,-4)+"_hurt.png"})`),document.documentElement.style.setProperty("--enemy-creature-img-attack",`url(${"/practice-project-sveltekit-app/"+l.img.slice(0,-4)+"_attack.png"})`),ye.set(!0)}),Te(()=>{ye.set(!1),clearTimeout(L),clearTimeout(Y),clearTimeout(G)}),[V,O,m,E,l,g,I,z,v,_,s,D,()=>D(s.attackName,s.attackType),()=>D(s.specialName,s.specialType)]}class Ae extends Ie{constructor(p){super(),ze(this,p,qe,be,Ee,{})}}export{Ae as component};
