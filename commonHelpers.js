import{s as B,A as x,S as b,N as P,K as q,M as O,i as y,b as k}from"./assets/vendor-73b736a9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const C="https://portfolio-js.b.goit.study/api";async function V(){try{const e=await fetch(`${C}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw console.error("Error fetching reviews:",e),e}}var m=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var o=e.clientX+20+"px",r=e.clientY+20+"px",i=0;i<m.length;i++)m[i].style.top=r,m[i].style.left=o};const A={threshold:[.1]},I=new IntersectionObserver(N,A);document.querySelectorAll("section").forEach(e=>I.observe(e));function N(e){e.forEach(o=>{o.isIntersecting?o.target.classList.add("in-view"):o.target.classList.remove("in-view")})}const f=window.devicePixelRatio>=2?2:1,v=document.body.classList.contains("nowebp")?"jpg":"webp";window.addEventListener("resize",()=>{$().then(w.refresh()).catch(e=>console.error(e))});const h=[{id:1,name:"WatchCharm",alt:"Premium watches collections"},{id:2,name:"StarlightStudio",alt:"Improve your business"},{id:4,name:"Get SH",alt:"Get body in shape, Stay healthy"},{id:5,name:"Fresh HB",alt:"Fresh harvest box helper"},{id:6,name:"Chego",alt:"Jewellery for special"},{id:7,name:"MIMINO hotel",alt:"Great food available to everyone"},{id:8,name:"Ukrainian DO",alt:"Reviving the traditional artistry"},{id:9,name:"OV Diet",alt:"Organic vegetables to your diet today"},{id:10,name:"Power Pulse",alt:"Transforming your body shape"},{id:11,name:"MY Finances",alt:"Manage Your Finances Masterfully"},{id:12,name:"L English",alt:"Joing and learning Eanglish with us"}],M=[{id:11},{id:12},{id:9},{id:5},{id:10},{id:7},{id:6},{id:11},{id:1},{id:8},{id:2},{id:9},{id:4},{id:5},{id:12},{id:6},{id:11}],L=M.slice(3,17);let S="";function g(e,o,r,i,t){let n=t==="jpg"?"./img/covers/project":"https://raw.githubusercontent.com/StasAstenenko/js-gurus/main/src/img/covers/project";S=o.reduce((s,{id:a})=>s+=`<li class="card-of-project"><a class="tooltip" href="${n}${a.toString().padStart(2,"0")}pc@${i}.${t}"><img src="${n}${a.toString().padStart(2,"0")}${r}@${i}.${t}" alt="${e.find(c=>c.id===a).name}"><span>${e.find(c=>c.id===a).alt}</span></a></li>`,""),document.querySelector(".covers-ul").innerHTML=S}async function $(){window.innerWidth<768&&g(h,L,"m",f,v),window.innerWidth>1439?g(h,M,"pc",f,v):g(h,L,"t",f,v)}$();const w=new B(".card-of-project a",{captionsData:"alt",captionDelay:250});w.on("show.simplelightbox",j);w.on("close.simplelightbox",j);w.on("error.simplelightbox",e=>console.error(e));function j(){document.querySelector(".section-covers").classList.toggle("in-view")}new x(".accordion-container",{duration:600,showMultiple:!1});const p=document.querySelector(".header-list"),R=document.querySelector(".header-menu"),D=document.querySelector(".header-menu-container"),F=document.querySelector(".header-link");R.addEventListener("click",e=>{e.preventDefault(),p.classList.toggle("dropdown-menu")});F.addEventListener("click",e=>{p.classList.remove("dropdown-menu")});document.addEventListener("click",function(e){!D.contains(e.target)&&p.classList.contains("dropdown-menu")&&p.classList.remove("dropdown-menu")});const l=document.querySelector(".btn-for-swiper-prev"),d=document.querySelector(".btn-for-swiper-next"),T=document.querySelector(".prj-btn");T.addEventListener("click",function(){const e="https://stasastenenko.github.io/js-gurus/";window.open(e,"_blank")});function E(e){e.isBeginning?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled")),e.isEnd?(d.disabled=!0,d.classList.add("disabled")):(d.disabled=!1,d.classList.remove("disabled"))}new b(".projects-swiper",{slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},modules:[P,q,O],navigation:{nextEl:".btn-for-swiper-next",prevEl:".btn-for-swiper-prev"},on:{init:function(){E(this)},slideChange:function(){E(this)}}});async function H(){const e=document.querySelector(".swiper-wrapper-reviews");try{const o=await V();if(!o.length){y.error({title:"Error",message:"Not found",position:"topRight"});return}e.innerHTML="",o.forEach(n=>{const s=document.createElement("li");s.classList.add("swiper-slide","swiper-slide-reviews"),s.innerHTML=`
        <div class="review-content">
          <img src="${n.avatar_url}" alt="${n.author}" />
          <div class="review-text">
            <p class="review-author">${n.author}</p>
            <p class="review-comment">${n.review}</p>
          </div>
        </div>
      `,e.appendChild(s)});const r=new b(".swiper-review",{slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0},speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:20}}});r.on("slideChange",()=>{const n=r.isBeginning,s=r.isEnd,a=document.querySelector(".swiper-button-prev-reviews"),c=document.querySelector(".swiper-button-next-reviews");a&&c&&(a.disabled=n,c.disabled=s)});const i=document.querySelector(".swiper-button-prev-reviews"),t=document.querySelector(".swiper-button-next-reviews");i&&t&&(i.disabled=r.isBeginning,t.disabled=r.isEnd)}catch(o){y.error({title:"Error",message:"Failed to fetch reviews: "+o.message,position:"topRight"})}}document.addEventListener("DOMContentLoaded",()=>{H()});const W=document.querySelector(".benefits-list");let u=null;W.addEventListener("click",e=>{if(e.preventDefault(),e.target.closest("li")===null)return;const r=e.target.closest("li").innerHTML;u&&u.close(),u=k.create(`<div class="modal-content">${r}</div>`),u.show()});const _=new x(".ac-container-about",{showMultiple:!0,duration:600,onOpen:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(180deg)"},onClose:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(0deg)"}});_.open(0);new b(".about-swiper",{slidesPerView:6,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},modules:[P,q],navigation:{nextEl:".swiper-button-next"},direction:"horizontal"});
//# sourceMappingURL=commonHelpers.js.map
