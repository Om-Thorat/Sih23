var je=Object.defineProperty;var Ce=(t,e,n)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ne=(t,e,n)=>(Ce(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function b(){}function pe(t){return t()}function ge(){return Object.create(null)}function F(t){t.forEach(pe)}function he(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Y;function X(t,e){return t===e?!0:(Y||(Y=document.createElement("a")),Y.href=e,t===Y.href)}function ke(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function oe(t){return document.createTextNode(t)}function w(){return oe(" ")}function O(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.data!==e&&(t.data=e)}function J(t,e){t.value=e??""}function Ae(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let fe;function G(t){fe=t}const U=[],le=[];let z=[];const me=[],Ee=Promise.resolve();let se=!1;function He(){se||(se=!0,Ee.then(be))}function ie(t){z.push(t)}const re=new Set;let B=0;function be(){if(B!==0)return;const t=fe;do{try{for(;B<U.length;){const e=U[B];B++,G(e),Me(e.$$)}}catch(e){throw U.length=0,B=0,e}for(G(null),U.length=0,B=0;le.length;)le.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];re.has(n)||(re.add(n),n())}z.length=0}while(U.length);for(;me.length;)me.pop()();se=!1,re.clear(),G(t)}function Me(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}function Se(t){const e=[],n=[];z.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),z=e}const Q=new Set;let q;function Oe(){q={r:0,c:[],p:q}}function Fe(){q.r||F(q.c),q=q.p}function _(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),q.c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function j(t){t&&t.c()}function v(t,e,n){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),ie(()=>{const s=t.$$.on_mount.map(pe).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...s):F(s),t.$$.on_mount=[]}),l.forEach(ie)}function y(t,e){const n=t.$$;n.fragment!==null&&(Se(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(t,e){t.$$.dirty[0]===-1&&(U.push(t),He(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,n,r,l,s,u,o=[-1]){const a=fe;G(t);const f=t.$$={fragment:null,ctx:[],props:s,update:b,not_equal:l,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ge(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};u&&u(f.root);let c=!1;if(f.ctx=n?n(t,e.props||{},(p,m,...$)=>{const g=$.length?$[0]:m;return f.ctx&&l(f.ctx[p],f.ctx[p]=g)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](g),c&&Ne(t,p)),m}):[],f.update(),c=!0,F(f.before_update),f.fragment=r?r(f.ctx):!1,e.target){if(e.hydrate){const p=Le(e.target);f.fragment&&f.fragment.l(p),p.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&_(t.$$.fragment),v(t,e.target,e.anchor),be()}G(a)}class H{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){y(this,1),this.$destroy=b}$on(e,n){if(!he(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pe);function qe(t){let e,n,r,l,s,u;return{c(){e=h("div"),n=h("img"),l=w(),s=h("span"),u=oe(t[1]),i(n,"class","h-2/3 px-4"),X(n.src,r=t[0])||i(n,"src",r),i(n,"alt",""),i(s,"class","text-xl"),i(e,"class","flex flex-row h-full items-center bg-[#1d1f1f] p-3 rounded-[2rem] w-full")},m(o,a){L(o,e,a),d(e,n),d(e,l),d(e,s),d(s,u)},p(o,[a]){a&1&&!X(n.src,r=o[0])&&i(n,"src",r),a&2&&$e(u,o[1])},i:b,o:b,d(o){o&&k(e)}}}function Te(t,e,n){let{svg:r}=e,{text:l}=e;return t.$$set=s=>{"svg"in s&&n(0,r=s.svg),"text"in s&&n(1,l=s.text)},[r,l]}class W extends H{constructor(e){super(),E(this,e,Te,qe,A,{svg:0,text:1})}}function Ze(t){let e;return{c(){e=h("label"),e.innerHTML='<input type="file" style="display: none;"/> <img class="pt-5 scale-90" src="/image.svg" alt="Upload"/> <span class="ibm text-xl">Upload Image</span>',i(e,"class","h-full bg-[#1d1f1f] flex flex-col justify-evenly items-center rounded-[2rem] w-[18%] cursor-pointer ml-5")},m(n,r){L(n,e,r)},p:b,i:b,o:b,d(n){n&&k(e)}}}class we extends H{constructor(e){super(),E(this,e,null,Ze,A,{})}}const R=[];function _e(t,e=b){let n;const r=new Set;function l(o){if(A(t,o)&&(t=o,n)){const a=!R.length;for(const f of r)f[1](),R.push(f,t);if(a){for(let f=0;f<R.length;f+=2)R[f][0](R[f+1]);R.length=0}}}function s(o){l(o(t))}function u(o,a=b){const f=[o,a];return r.add(f),r.size===1&&(n=e(l,s)||b),o(t),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:l,update:s,subscribe:u}}const K=_e("dumb"),xe=_e("pfft");function Ie(t){let e,n,r,l,s,u,o,a;return{c(){e=h("div"),n=h("button"),n.textContent="Random app name",r=w(),l=h("div"),s=h("img"),i(n,"class","w-1/2 flex justify-center items-center"),X(s.src,u="/"+t[0]+".png")||i(s,"src",u),i(s,"alt","Farmer"),i(s,"class","h-20 scale-90 transition-all cursor-pointer hover:scale-100"),i(l,"class","flex justify-center items-center h-20 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0 position absolute right-3"),i(e,"class","flex flex-row items-center h-1/6 border-b-2 border-white border-opacity-40 absolute top-0 w-full ibm text-xl position-realtive ")},m(f,c){L(f,e,c),d(e,n),d(e,r),d(e,l),d(l,s),o||(a=O(n,"click",t[1]),o=!0)},p(f,[c]){c&1&&!X(s.src,u="/"+f[0]+".png")&&i(s,"src",u)},i:b,o:b,d(f){f&&k(e),o=!1,a()}}}function Be(t,e,n){let{job:r}=e;function l(){K.set("dumb")}return t.$$set=s=>{"job"in s&&n(0,r=s.job)},[r,l]}class ve extends H{constructor(e){super(),E(this,e,Be,Ie,A,{job:0})}}function Re(t){let e,n,r,l,s,u,o,a,f,c,p,m,$;return n=new ve({props:{job:"Farmer"}}),s=new we({}),a=new W({props:{svg:"reviewed.svg",text:"Reviewed crops"}}),c=new W({props:{svg:"yet.svg",text:"Yet to be reviewed"}}),m=new W({props:{svg:"",text:"What's gonna go here?"}}),{c(){e=h("div"),j(n.$$.fragment),r=w(),l=h("div"),j(s.$$.fragment),u=w(),o=h("div"),j(a.$$.fragment),f=w(),j(c.$$.fragment),p=w(),j(m.$$.fragment),i(o,"class","flex flex-col gap-6 h-full justify-between w-1/4 "),i(l,"class","flex items-center gap-10 h-[40svh] w-full justify-center"),i(e,"class","flex flex-row min-h-[70%] w-screen items-center justify-evenly")},m(g,N){L(g,e,N),v(n,e,null),d(e,r),d(e,l),v(s,l,null),d(l,u),d(l,o),v(a,o,null),d(o,f),v(c,o,null),d(o,p),v(m,o,null),$=!0},p:b,i(g){$||(_(n.$$.fragment,g),_(s.$$.fragment,g),_(a.$$.fragment,g),_(c.$$.fragment,g),_(m.$$.fragment,g),$=!0)},o(g){x(n.$$.fragment,g),x(s.$$.fragment,g),x(a.$$.fragment,g),x(c.$$.fragment,g),x(m.$$.fragment,g),$=!1},d(g){g&&k(e),y(n),y(s),y(a),y(c),y(m)}}}class Ue extends H{constructor(e){super(),E(this,e,null,Re,A,{})}}function ze(t){let e;return{c(){e=h("div"),e.innerHTML='<div class="w-3/4 relative h-full flex items-center"><div class="absolute left-0 flex gap-5"><a href="https://desilog.in">Illustrations from Desilog</a> <a href="/about">About</a></div> <span class="absolute right-0">An entry for SIH&#39;23 with 💖</span></div>',i(e,"class","h-[12%] w-full absolute bottom-0 border-t-2 border-white border-opacity-40 flex justify-center text-white/60")},m(n,r){L(n,e,r)},p:b,i:b,o:b,d(n){n&&k(e)}}}class We extends H{constructor(e){super(),E(this,e,null,ze,A,{})}}function De(t){let e,n,r,l,s,u,o,a;return{c(){e=h("div"),n=h("button"),n.textContent="Random app name",r=w(),l=h("div"),s=w(),u=h("button"),u.textContent="यादृच्छिक पाठ ऐप नाम",i(n,"class","w-1/2 flex justify-center items-center"),i(l,"class","w-[2px] h-full bg-white/40"),i(u,"class","w-1/2 flex justify-center items-center"),i(e,"class","flex flex-row h-1/6 border-b-2 border-white border-opacity-40 absolute top-0 w-full ibm text-xl")},m(f,c){L(f,e,c),d(e,n),d(e,r),d(e,l),d(e,s),d(e,u),o||(a=[O(n,"click",t[0]),O(u,"click",t[0])],o=!0)},p:b,i:b,o:b,d(f){f&&k(e),o=!1,F(a)}}}function Ge(t){function e(){K.set("dumb")}return[e]}class ye extends H{constructor(e){super(),E(this,e,Ge,De,A,{})}}function Ke(t){let e,n,r,l,s,u,o,a,f,c,p,m,$,g,N,T,Z,ue,S,ce,I,ae,V,ee,D,te,de;return e=new ye({}),{c(){j(e.$$.fragment),n=w(),r=h("div"),l=h("div"),s=M("svg"),u=M("path"),o=M("path"),a=w(),f=h("input"),c=w(),p=h("div"),m=M("svg"),$=M("g"),g=M("path"),N=M("path"),T=M("rect"),Z=M("rect"),ue=w(),S=h("input"),ce=w(),I=h("button"),I.textContent="login >",ae=w(),V=h("span"),ee=oe(t[3]),i(u,"fill-rule","evenodd"),i(u,"clip-rule","evenodd"),i(u,"d","M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"),i(u,"fill","white"),i(o,"fill-rule","evenodd"),i(o,"clip-rule","evenodd"),i(o,"d","M3 14C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14C13 11.2386 10.7614 9 8 9C5.23858 9 3 11.2386 3 14ZM4 14C4 13.6547 4.04375 13.3196 4.12602 13C4.57006 11.2748 6.13616 10 8 10C9.86384 10 11.4299 11.2748 11.874 13C11.9562 13.3196 12 13.6547 12 14H4Z"),i(o,"fill","white"),i(s,"class","h-10 translate-y-1 px-2"),i(s,"xmlns","http://www.w3.org/2000/svg"),i(s,"viewBox","0 0 16 20"),i(s,"fill","none"),i(s,"x","0px"),i(s,"y","0px"),i(f,"placeholder","Username"),i(f,"class","bg-[#1d1f1f] h-full w-full text-lg focus:outline-none"),i(l,"class","flex flex-row w-full items-center bg-[#1d1f1f] p-3 rounded-2xl focus-within:outline outline-white"),i(g,"d","M12,28a4,4,0,1,0,4,4A4,4,0,0,0,12,28Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,34Z"),i(N,"d","M30.65,38H45a1,1,0,0,0,.83-.45L47,35.87l1,1.65a1,1,0,0,0,.86.48H55a1,1,0,0,0,.78-.38l4-5a1,1,0,0,0,.15-1l-2-5A1,1,0,0,0,57,26H30.65a14,14,0,1,0,0,12ZM6,32a12,12,0,0,1,23.08-4.62A1,1,0,0,0,30,28H56.32l1.53,3.83L54.52,36H49.37l-1.52-2.52A1,1,0,0,0,47,33a1,1,0,0,0-.85.44L44.46,36H30a1,1,0,0,0-.92.62A12,12,0,0,1,6,32Z"),i(T,"x","48"),i(T,"y","30"),i(T,"width","4"),i(T,"height","2"),i(Z,"x","32"),i(Z,"y","30"),i(Z,"width","12"),i(Z,"height","2"),i($,"data-name","Layer 2"),i(m,"class","h-10 translate-y-1 stroke-white stroke-1 px-2"),i(m,"xmlns","http://www.w3.org/2000/svg"),i(m,"viewBox","0 0 64 80"),i(m,"x","0px"),i(m,"y","0px"),Ae(m,"fill","white"),i(S,"placeholder","Password"),i(S,"class","bg-[#1d1f1f] h-full w-full text-lg focus:outline-none"),i(p,"class","flex flex-row w-full items-center bg-[#1d1f1f] p-3 rounded-2xl focus-within:outline outline-white"),i(I,"class","btn btn-outline w-full rounded-2xl h-10 hover:bg-green-300"),i(V,"class","text-red-500"),i(r,"class","flex flex-col gap-3 items-center")},m(C,P){v(e,C,P),L(C,n,P),L(C,r,P),d(r,l),d(l,s),d(s,u),d(s,o),d(l,a),d(l,f),J(f,t[0]),d(r,c),d(r,p),d(p,m),d(m,$),d($,g),d($,N),d($,T),d($,Z),d(p,ue),d(p,S),J(S,t[1]),d(r,ce),d(r,I),t[7](I),d(r,ae),d(r,V),d(V,ee),D=!0,te||(de=[O(f,"input",t[5]),O(S,"input",t[6]),O(I,"click",t[4])],te=!0)},p(C,[P]){P&1&&f.value!==C[0]&&J(f,C[0]),P&2&&S.value!==C[1]&&J(S,C[1]),(!D||P&8)&&$e(ee,C[3])},i(C){D||(_(e.$$.fragment,C),D=!0)},o(C){x(e.$$.fragment,C),D=!1},d(C){C&&(k(n),k(r)),y(e,C),t[7](null),te=!1,F(de)}}}function Ve(t,e,n){let r,l,s,u,o="";xe.subscribe(m=>{s=m});async function a(){n(2,u.innerText="logging in ...",u),u.classList.add("bg-green-300"),u.classList.add("text-black");let $=await(await fetch(`/login?user=${r}&pass=${l}&job=${s}`)).json();$[0]=="nope"?(n(3,o=$[1]),n(2,u.innerText="login >",u),u.classList.remove("bg-green-300"),u.classList.remove("text-black")):K.set($[1])}function f(){r=this.value,n(0,r)}function c(){l=this.value,n(1,l)}function p(m){le[m?"unshift":"push"](()=>{u=m,n(2,u)})}return[r,l,u,o,a,f,c,p]}class Ye extends H{constructor(e){super(),E(this,e,Ve,Ke,A,{})}}function Je(t){let e,n,r,l,s,u,o,a,f;return e=new ye({}),{c(){j(e.$$.fragment),n=w(),r=h("div"),l=h("button"),l.innerHTML='<div class="aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0"><img src="/Farmer.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100"/></div> <span class="text-3xl pt-5 ibm">log in as Farmer</span>',s=w(),u=h("button"),u.innerHTML='<div class="aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0"><img src="/Scientist.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100"/></div> <span class="text-3xl pt-5 ibm">log in as Scientist</span>',i(l,"class","flex w-1/5 items-center justify-center flex-col"),i(u,"class","flex w-1/5 items-center justify-center flex-col"),i(r,"class","flex flex-row min-h-[70%] w-screen items-center justify-evenly")},m(c,p){v(e,c,p),L(c,n,p),L(c,r,p),d(r,l),d(r,s),d(r,u),o=!0,a||(f=[O(l,"click",t[1]),O(u,"click",t[2])],a=!0)},p:b,i(c){o||(_(e.$$.fragment,c),o=!0)},o(c){x(e.$$.fragment,c),o=!1},d(c){c&&(k(n),k(r)),y(e,c),a=!1,F(f)}}}function Qe(t){function e(l){return K.set("loggingin"),xe.set(l),null}return[e,()=>{e("farmer")},()=>{e("scientist")}]}class Xe extends H{constructor(e){super(),E(this,e,Qe,Je,A,{})}}function et(t){let e,n,r,l,s,u,o,a,f,c,p,m,$;return n=new ve({props:{job:"Scientist"}}),s=new we({}),a=new W({props:{svg:"reviewed.svg",text:"Reviewed crops"}}),c=new W({props:{svg:"eye.svg",text:"Birds eye view"}}),m=new W({props:{svg:"",text:"What's gonna go here?"}}),{c(){e=h("div"),j(n.$$.fragment),r=w(),l=h("div"),j(s.$$.fragment),u=w(),o=h("div"),j(a.$$.fragment),f=w(),j(c.$$.fragment),p=w(),j(m.$$.fragment),i(o,"class","flex flex-col gap-6 h-full justify-between w-1/4 "),i(l,"class","flex items-center gap-10 h-[40svh] w-full justify-center"),i(e,"class","flex flex-row min-h-[70%] w-screen items-center justify-evenly")},m(g,N){L(g,e,N),v(n,e,null),d(e,r),d(e,l),v(s,l,null),d(l,u),d(l,o),v(a,o,null),d(o,f),v(c,o,null),d(o,p),v(m,o,null),$=!0},p:b,i(g){$||(_(n.$$.fragment,g),_(s.$$.fragment,g),_(a.$$.fragment,g),_(c.$$.fragment,g),_(m.$$.fragment,g),$=!0)},o(g){x(n.$$.fragment,g),x(s.$$.fragment,g),x(a.$$.fragment,g),x(c.$$.fragment,g),x(m.$$.fragment,g),$=!1},d(g){g&&k(e),y(n),y(s),y(a),y(c),y(m)}}}class tt extends H{constructor(e){super(),E(this,e,null,et,A,{})}}function nt(t){let e,n;return e=new Xe({}),{c(){j(e.$$.fragment)},m(r,l){v(e,r,l),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}function rt(t){let e,n;return e=new tt({}),{c(){j(e.$$.fragment)},m(r,l){v(e,r,l),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}function lt(t){let e,n;return e=new Ue({}),{c(){j(e.$$.fragment)},m(r,l){v(e,r,l),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}function st(t){let e,n;return e=new Ye({}),{c(){j(e.$$.fragment)},m(r,l){v(e,r,l),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){y(e,r)}}}function it(t){let e;return{c(){e=h("span"),e.textContent="hi"},m(n,r){L(n,e,r)},i:b,o:b,d(n){n&&k(e)}}}function ot(t){let e,n,r,l,s,u;const o=[it,st,lt,rt,nt],a=[];function f(c,p){return c[0]=="loggedin"?0:c[0]=="loggingin"?1:c[0]=="farmer"?2:c[0]=="scientist"?3:4}return n=f(t),r=a[n]=o[n](t),s=new We({}),{c(){e=h("main"),r.c(),l=w(),j(s.$$.fragment),i(e,"class","bg-[#111212] text-white flex flex-col min-h-[100svh] justify-center items-center gap-5")},m(c,p){L(c,e,p),a[n].m(e,null),d(e,l),v(s,e,null),u=!0},p(c,[p]){let m=n;n=f(c),n!==m&&(Oe(),x(a[m],1,1,()=>{a[m]=null}),Fe(),r=a[n],r||(r=a[n]=o[n](c),r.c()),_(r,1),r.m(e,l))},i(c){u||(_(r),_(s.$$.fragment,c),u=!0)},o(c){x(r),x(s.$$.fragment,c),u=!1},d(c){c&&k(e),a[n].d(),y(s)}}}function ft(t,e,n){let r;return K.subscribe(l=>{n(0,r=l),console.log(r)}),[r]}class ut extends H{constructor(e){super(),E(this,e,ft,ot,A,{})}}new ut({target:document.getElementById("app")});