import{s as T,A as $,i as x,a as R,S as V,N as I,K as B,M as F,b as _}from"./assets/vendor-5bb27eac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const H="https://portfolio-js.b.goit.study/api";async function W(){try{const e=await fetch(`${H}/reviews`);if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch(e){throw console.error("Error fetching reviews:",e),e}}var b=document.querySelectorAll(".tooltip span");window.onmousemove=function(e){for(var t=e.clientX+20+"px",i=e.clientY+20+"px",o=0;o<b.length;o++)b[o].style.top=i,b[o].style.left=t};const z={threshold:[.1]},U=new IntersectionObserver(G,z);document.querySelectorAll("section").forEach(e=>U.observe(e));function G(e){e.forEach(t=>{t.isIntersecting?t.target.classList.add("in-view"):t.target.classList.remove("in-view")})}const y=window.devicePixelRatio>=2?2:1,L=document.body.classList.contains("nowebp")?"jpg":"webp";window.addEventListener("resize",()=>{k().then(h.refresh()).catch(e=>console.error(e))});const S=[{id:1,name:"WatchCharm",alt:"Premium watches collections"},{id:2,name:"StarlightStudio",alt:"Improve your business"},{id:4,name:"Get SH",alt:"Get body in shape, Stay healthy"},{id:5,name:"Fresh HB",alt:"Fresh harvest box helper"},{id:6,name:"Chego",alt:"Jewellery for special"},{id:7,name:"MIMINO hotel",alt:"Great food available to everyone"},{id:8,name:"Ukrainian DO",alt:"Reviving the traditional artistry"},{id:9,name:"OV Diet",alt:"Organic vegetables to your diet today"},{id:10,name:"Power Pulse",alt:"Transforming your body shape"},{id:11,name:"MY Finances",alt:"Manage Your Finances Masterfully"},{id:12,name:"L English",alt:"Joing and learning Eanglish with us"}],D=[{id:11},{id:12},{id:9},{id:5},{id:10},{id:7},{id:6},{id:11},{id:1},{id:8},{id:2},{id:9},{id:4},{id:5},{id:12},{id:6},{id:11}],A=D.slice(3,17);let j="";function E(e,t,i,o,n){let s=n==="jpg"?"./img/covers/project":"https://raw.githubusercontent.com/StasAstenenko/js-gurus/main/src/img/covers/project";j=t.reduce((a,{id:l})=>a+=`<li class="card-of-project"><a class="tooltip" href="${s}${l.toString().padStart(2,"0")}pc@${o}.${n}"><img src="${s}${l.toString().padStart(2,"0")}${i}@${o}.${n}" alt="${e.find(d=>d.id===l).name}"><span>${e.find(d=>d.id===l).alt}</span></a></li>`,""),document.querySelector(".covers-ul").innerHTML=j}async function k(){window.innerWidth<768&&E(S,A,"m",y,L),window.innerWidth>1439?E(S,D,"pc",y,L):E(S,A,"t",y,L)}k();const h=new T(".card-of-project a",{captionsData:"alt",captionDelay:250});h.on("show.simplelightbox",N);h.on("close.simplelightbox",N);h.on("error.simplelightbox",e=>console.error(e));function N(){document.querySelector(".section-covers").classList.toggle("in-view")}new $(".accordion-container",{duration:600,showMultiple:!1});const J=async({email:e,comment:t})=>{const i="https://portfolio-js.b.goit.study/api/requests",{data:o}=await R.post(i,{email:e,comment:t});return o},g=document.querySelector(".js-submit-form"),[v,f]=g,q=document.querySelector(".valid-email-text"),P=document.querySelector(".invalid-email-text"),C=document.querySelector(".invalid-comments-text"),r={valid:"valid-input",invalid:"invalid-input",isVisible:"is-visible"},K=e=>{const i=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e);return i?(v.classList.add(r.valid),q.classList.add(r.isVisible)):(v.classList.add(r.invalid),P.classList.add(r.isVisible)),i},Y=e=>(e?f.classList.add(r.valid):(f.classList.add(r.invalid),C.classList.add(r.isVisible)),!!e),Z=e=>{const t=e.name;t==="userEmail"&&(q.classList.remove(r.isVisible),P.classList.remove(r.isVisible)),t==="userComments"&&C.classList.remove(r.isVisible),e.classList.remove(r.valid),e.classList.remove(r.invalid)},X=()=>{[q,P,C].forEach(i=>{i.classList.remove(r.isVisible)}),[v,f].forEach(i=>{i.classList.remove(r.valid),i.classList.remove(r.invalid)})},M="formData",c=te()||{userEmail:"",userComments:""};v.value=c.userEmail;f.value=c.userComments;g.addEventListener("input",e=>{Z(e.target);const{name:t,value:i}=e.target;c[t]=i.trim(),ee(c)});g.addEventListener("submit",Q);async function Q(e){e.preventDefault();const{userEmail:t,userComments:i}=c,o=K(t),n=Y(i);if(!(!o||!n))try{const s=await J({email:t,comment:i});openModalWithData(s),ie()}catch(s){x.error({title:"Error",message:s.message,position:"topRight"})}}function ee(e,t=M){localStorage.setItem(t,JSON.stringify(e))}function te(e=M){return JSON.parse(localStorage.getItem(e))}function ie(e=M){localStorage.removeItem(e),g.reset(),X(),c.userEmail="",c.userComments=""}const w=document.querySelector(".header-list"),se=document.querySelector(".header-menu"),ne=document.querySelector(".header-menu-container"),oe=document.querySelector(".header-link");se.addEventListener("click",e=>{e.preventDefault(),w.classList.toggle("dropdown-menu")});oe.addEventListener("click",e=>{w.classList.remove("dropdown-menu")});document.addEventListener("click",function(e){!ne.contains(e.target)&&w.classList.contains("dropdown-menu")&&w.classList.remove("dropdown-menu")});const u=document.querySelector(".btn-for-swiper-prev"),m=document.querySelector(".btn-for-swiper-next"),re=document.querySelector(".prj-btn");re.addEventListener("click",function(){const e="https://stasastenenko.github.io/js-gurus/";window.open(e,"_blank")});function O(e){e.isBeginning?(u.disabled=!0,u.classList.add("disabled")):(u.disabled=!1,u.classList.remove("disabled")),e.isEnd?(m.disabled=!0,m.classList.add("disabled")):(m.disabled=!1,m.classList.remove("disabled"))}new V(".projects-swiper",{slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},modules:[I,B,F],navigation:{nextEl:".btn-for-swiper-next",prevEl:".btn-for-swiper-prev"},on:{init:function(){O(this)},slideChange:function(){O(this)}}});function ae(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}async function le(){const e=document.querySelector(".swiper-wrapper-reviews");try{const t=await W();if(!t.length){x.error({title:"Error",message:"Not found",position:"topRight"});return}ae(t),e.innerHTML="",t.forEach(s=>{const a=document.createElement("li");a.classList.add("swiper-slide","swiper-slide-reviews"),a.innerHTML=`
        <div class="review-content">
          <img src="${s.avatar_url}" alt="${s.author}" />
          <div class="review-text">
            <p class="review-author">${s.author}</p>
            <p class="review-comment">${s.review}</p>
          </div>
        </div>
      `,e.appendChild(a)});const i=new V(".swiper-review",{slidesPerView:1,spaceBetween:20,loop:!1,navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0},speed:700,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:20}}});i.on("slideChange",()=>{const s=i.isBeginning,a=i.isEnd,l=document.querySelector(".swiper-button-prev-reviews"),d=document.querySelector(".swiper-button-next-reviews");l&&d&&(l.disabled=s,d.disabled=a)});const o=document.querySelector(".swiper-button-prev-reviews"),n=document.querySelector(".swiper-button-next-reviews");o&&n&&(o.disabled=i.isBeginning,n.disabled=i.isEnd)}catch(t){x.error({title:"Error",message:"Failed to fetch reviews: "+t.message,position:"topRight"})}}document.addEventListener("DOMContentLoaded",()=>{le()});const ce=document.querySelector(".benefits-list");let p=null;ce.addEventListener("click",e=>{if(e.preventDefault(),e.target.closest("li")===null)return;const i=e.target.closest("li").innerHTML;p&&p.close(),p=_.create(`<div class="modal-content">${i}</div>`),p.show()});const de=new $(".ac-container-about",{showMultiple:!0,duration:600,onOpen:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(180deg)"},onClose:function(e){e.querySelector(".ac-about-svg").style.transform="rotate(0deg)"}});de.open(0);new V(".about-swiper",{slidesPerView:6,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},modules:[I,B],navigation:{nextEl:".swiper-button-next"},direction:"horizontal"});
//# sourceMappingURL=commonHelpers.js.map
