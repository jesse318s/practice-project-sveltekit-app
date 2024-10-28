import{_ as te}from"../chunks/preload-helper.C1FmrZbK.js";import{s as R,q as A,n as V,r as ae,c as z,u as se,v as ne,w as le,x as oe,o as re,y as ie}from"../chunks/scheduler.Bi983TZg.js";import{S as F,i as N,e as m,s as E,c as p,a as y,y as I,f as S,d as h,o as a,g as j,h as u,z as Q,t as ce,b as de,u as X,A as ue,v as Y,w as Z,n as B,l as P,x as ee}from"../chunks/index.ChPCIeRW.js";import{i as J}from"../chunks/store.Dbxiv85R.js";const ve=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,fe=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:fe},Symbol.toStringTag,{value:"Module"}));function ge(c){let t,s,n,e,d='<i class="fas fa-bars"></i>',i,r,_='<a class="navbar-brand mx-1" href="#home"><h1 class="text-shadow">JS</h1></a> <ul class="navbar-nav me-auto font-weight-bold mx-1"><li class="nav-item"><a class="nav-link" href="#home">Home</a></li> <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li> <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li> <li class="nav-item"><a class="nav-link" href="#about">About</a></li> <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li></ul>',$,v,b,f='<div class="font-weight-bold">My Resume</div>',l,o,g,M,O,x,U="Mode",C,L,K,W;return{c(){t=m("header"),s=m("nav"),n=m("div"),e=m("button"),e.innerHTML=d,i=E(),r=m("div"),r.innerHTML=_,$=E(),v=m("div"),b=m("a"),b.innerHTML=f,l=E(),o=m("div"),g=m("i"),O=E(),x=m("aside"),x.textContent=U,this.h()},l(k){t=p(k,"HEADER",{id:!0});var w=y(t);s=p(w,"NAV",{class:!0});var G=y(s);n=p(G,"DIV",{class:!0});var T=y(n);e=p(T,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-label":!0,"data-svelte-h":!0}),I(e)!=="svelte-1h3z2ra"&&(e.innerHTML=d),i=S(T),r=p(T,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),I(r)!=="svelte-c6x9ku"&&(r.innerHTML=_),$=S(T),v=p(T,"DIV",{class:!0});var q=y(v);b=p(q,"A",{class:!0,href:!0,"data-svelte-h":!0}),I(b)!=="svelte-7ye1v8"&&(b.innerHTML=f),l=S(q),o=p(q,"DIV",{class:!0,tabindex:!0,role:!0,"aria-label":!0});var D=y(o);g=p(D,"I",{class:!0}),y(g).forEach(h),O=S(D),x=p(D,"ASIDE",{class:!0,"data-svelte-h":!0}),I(x)!=="svelte-ckgqgm"&&(x.textContent=U),D.forEach(h),q.forEach(h),T.forEach(h),G.forEach(h),w.forEach(h),this.h()},h(){a(e,"class","navbar-toggler"),a(e,"type","button"),a(e,"data-bs-toggle","collapse"),a(e,"data-bs-target","#navbarSupportedContent"),a(e,"aria-controls","navbarSupportedContent"),a(e,"aria-label","Toggle navigation"),a(r,"class","collapse navbar-collapse"),a(r,"id","navbarSupportedContent"),a(b,"class","btn btn-primary me-4"),a(b,"href","https://www.linkedin.com/in/jesse-sites/"),a(g,"class",M=A(`fas fa-adjust fa-2x ${c[0]?"moon":"sun"}`)+" svelte-6o1q9s"),a(x,"class","font-weight-bold"),a(o,"class",C=A(`toggle-mode me-4 ${c[0]?"link-dark":"link-warning"}`)+" svelte-6o1q9s"),a(o,"tabindex","0"),a(o,"role","button"),a(o,"aria-label","Toggle light mode"),a(v,"class","d-flex align-items-center text-center"),a(n,"class","container-fluid"),a(s,"class",L=A(`navbar navbar-expand-lg fixed-top overflow-hidden ${c[0]?"navbar-light bg-light":"navbar-dark bg-dark"}`)+" svelte-6o1q9s"),a(t,"id","home")},m(k,w){j(k,t,w),u(t,s),u(s,n),u(n,e),u(n,i),u(n,r),u(n,$),u(n,v),u(v,b),u(v,l),u(v,o),u(o,g),u(o,O),u(o,x),K||(W=[Q(o,"click",c[1]),Q(o,"keydown",c[2])],K=!0)},p(k,[w]){w&1&&M!==(M=A(`fas fa-adjust fa-2x ${k[0]?"moon":"sun"}`)+" svelte-6o1q9s")&&a(g,"class",M),w&1&&C!==(C=A(`toggle-mode me-4 ${k[0]?"link-dark":"link-warning"}`)+" svelte-6o1q9s")&&a(o,"class",C),w&1&&L!==(L=A(`navbar navbar-expand-lg fixed-top overflow-hidden ${k[0]?"navbar-light bg-light":"navbar-dark bg-dark"}`)+" svelte-6o1q9s")&&a(s,"class",L)},i:V,o:V,d(k){k&&h(t),K=!1,ae(W)}}}function he(c,t,s){let n;z(c,J,i=>s(0,n=i));const e=()=>{J.update(i=>!i)};return[n,e,i=>{(i.key==="Enter"||i.key===" ")&&e()}]}class me extends F{constructor(t){super(),N(this,t,he,ge,R,{})}}function pe(c){let t,s,n,e;return{c(){t=m("footer"),s=m("div"),n=ce("© 2024 Copyright: Jesse Sites"),this.h()},l(d){t=p(d,"FOOTER",{});var i=y(t);s=p(i,"DIV",{class:!0});var r=y(s);n=de(r,"© 2024 Copyright: Jesse Sites"),r.forEach(h),i.forEach(h),this.h()},h(){a(s,"class",e=`bg-gradient text-center p-3 ${c[0]?"bg-light text-dark":"bg-dark text-light"}`)},m(d,i){j(d,t,i),u(t,s),u(s,n)},p(d,[i]){i&1&&e!==(e=`bg-gradient text-center p-3 ${d[0]?"bg-light text-dark":"bg-dark text-light"}`)&&a(s,"class",e)},i:V,o:V,d(d){d&&h(t)}}}function be(c,t,s){let n;return z(c,J,e=>s(0,n=e)),[n]}class _e extends F{constructor(t){super(),N(this,t,be,pe,R,{})}}const{document:H}=ve;function $e(c){let t,s,n,e,d,i,r,_,$,v;d=new me({});const b=c[2].default,f=se(b,c,c[1],null);return _=new _e({}),{c(){t=m("meta"),s=m("meta"),n=E(),e=m("div"),X(d.$$.fragment),i=E(),f&&f.c(),r=E(),X(_.$$.fragment),this.h()},l(l){const o=ue("svelte-6o4uad",H.head);t=p(o,"META",{name:!0,content:!0}),s=p(o,"META",{name:!0,content:!0}),o.forEach(h),n=S(l),e=p(l,"DIV",{class:!0});var g=y(e);Y(d.$$.fragment,g),i=S(g),f&&f.l(g),r=S(g),Y(_.$$.fragment,g),g.forEach(h),this.h()},h(){a(t,"name","Jesse Sites - SvelteKit App"),a(t,"content","Website created using Vite and SvelteKit"),a(s,"name","description"),a(s,"content","The personal website of Jesse Sites"),H.title="Jesse Sites - SvelteKit App",a(e,"class",$=`app ${c[0]?"bg-light text-dark":"bg-dark text-light"}`)},m(l,o){u(H.head,t),u(H.head,s),j(l,n,o),j(l,e,o),Z(d,e,null),u(e,i),f&&f.m(e,null),u(e,r),Z(_,e,null),v=!0},p(l,[o]){f&&f.p&&(!v||o&2)&&ne(f,b,l,l[1],v?oe(b,l[1],o,null):le(l[1]),null),(!v||o&1&&$!==($=`app ${l[0]?"bg-light text-dark":"bg-dark text-light"}`))&&a(e,"class",$)},i(l){v||(B(d.$$.fragment,l),B(f,l),B(_.$$.fragment,l),v=!0)},o(l){P(d.$$.fragment,l),P(f,l),P(_.$$.fragment,l),v=!1},d(l){l&&(h(n),h(e)),h(t),h(s),ee(d),f&&f.d(l),ee(_)}}}function ke(c,t,s){let n;z(c,J,r=>s(0,n=r));let{$$slots:e={},$$scope:d}=t;const i=[];return re(async()=>{if(!(typeof document>"u"))try{const r=await te(()=>import("../chunks/mdb.es.min.CEZqwKaM.js"),[],import.meta.url),_=document.querySelectorAll(".collapse"),v=[document.querySelector(".navbar-toggler"),...document.querySelectorAll(".accordion-button")];_.forEach((b,f)=>{const l=new r.Collapse(b,{toggle:!1}),o=v[f],g=()=>l.toggle();o.addEventListener("click",g),i.push(()=>{o.removeEventListener("click",g)})})}catch(r){console.error(r)}}),ie(()=>{i.forEach(r=>r()),i.length=0}),c.$$set=r=>{"$$scope"in r&&s(1,d=r.$$scope)},[n,d,e]}class Te extends F{constructor(t){super(),N(this,t,ke,$e,R,{})}}export{Te as component,Se as universal};
