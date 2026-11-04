const items=[["Monogram Graphic T-shirt",650,"#5A3A25"],["Winged T-shirt",650,"#7A5236"],["Live Forever 2.0 T-shirt",700,"#3B2416"],["Nexus T-shirt",800,"#9A7048"],["Pantone 2.0 T-shirt",700,"#C9A47C"],["OG Cap",500,"#6B4630"]];
const fmt=n=>"R "+n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g," ");
document.getElementById("products").insertAdjacentHTML("beforeend",items.map(p=>`<article class="card"><div class="img"><svg style="color:${p[2]}" aria-hidden="true"><use href="#tee"/></svg></div><h3>${p[0]}</h3><div class="row"><span class="price">${fmt(p[1])}</span><button class="add" type="button">Add</button></div></article>`).join(""));
let n=0;const c=document.getElementById("count");
document.addEventListener("click",e=>{if(e.target.classList.contains("add")){n++;c.textContent=n;e.target.textContent="Added";setTimeout(()=>e.target.textContent="Add",1200)}});
document.getElementById("sub").addEventListener("submit",e=>{e.preventDefault();document.getElementById("msg").textContent="Thanks, you’re on the list.";e.target.reset()});

{const src=document.querySelector("#feat .pop .track"),dst=document.querySelector("#p-vtan .track");if(src&&dst)src.querySelectorAll(".slide").forEach(f=>dst.appendChild(f.cloneNode(true)));const ct=document.querySelector("#caps .track"),dt=document.querySelector("#feat2 .track");if(ct&&dt){const f=[...ct.querySelectorAll(".slide")];dt.prepend(f[1].cloneNode(true));dt.append(f[0].cloneNode(true))}}
document.querySelectorAll(".car").forEach(c=>{const t=c.querySelector(".track"),s=[...t.children],d=c.querySelector(".dots");
s.forEach((_,i)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Photo "+(i+1));b.onclick=()=>t.scrollTo({left:i*t.clientWidth,behavior:"smooth"});d.appendChild(b)});
const up=()=>{const i=Math.round(t.scrollLeft/t.clientWidth);[...d.children].forEach((b,k)=>b.setAttribute("aria-current",k===i))};
t.addEventListener("scroll",up,{passive:true});up();
c.querySelector(".prev").onclick=()=>t.scrollBy({left:-t.clientWidth,behavior:"smooth"});
c.querySelector(".next").onclick=()=>t.scrollBy({left:t.clientWidth,behavior:"smooth"});
if(s.length<2){c.querySelectorAll(".cbtn").forEach(b=>b.hidden=true);d.hidden=true}
t.addEventListener("keydown",e=>{if(e.key==="ArrowRight")t.scrollBy({left:t.clientWidth,behavior:"smooth"});if(e.key==="ArrowLeft")t.scrollBy({left:-t.clientWidth,behavior:"smooth"})})});
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{b.parentElement.querySelectorAll("button").forEach(x=>x.setAttribute("aria-selected",x===b));b.closest("section").querySelectorAll(".dpanel").forEach(p=>p.hidden=p.dataset.p!==b.dataset.t)});
document.querySelectorAll(".pw").forEach(w=>{const btn=w.querySelector(".feat"),pop=w.querySelector(".pop"),mq=matchMedia("(hover:hover) and (min-width:901px)");let t;
btn.querySelector("img").src=pop.querySelector(".slide img").src;
const set=o=>{if(o){document.querySelectorAll(".pw.open").forEach(x=>{if(x!==w){x.classList.remove("open");x.querySelector(".feat").setAttribute("aria-expanded",false)}});w.classList.toggle("flip",w.getBoundingClientRect().right+360>innerWidth)}w.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);if(o)pop.querySelector(".track").dispatchEvent(new Event("scroll"))};
w.addEventListener("mouseenter",()=>{if(mq.matches){clearTimeout(t);set(true)}});
w.addEventListener("mouseleave",()=>{if(mq.matches)t=setTimeout(()=>set(false),250)});
w.addEventListener("focusin",()=>{if(mq.matches)set(true)});
btn.addEventListener("click",()=>set(mq.matches?true:!w.classList.contains("open")));
pop.querySelector(".x").addEventListener("click",()=>{set(false);btn.focus()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
document.addEventListener("click",e=>{if(!w.contains(e.target))set(false)})});
document.querySelectorAll("[data-from]").forEach(i=>{const s=document.querySelector(i.dataset.from);if(s)i.src=s.src});
document.querySelectorAll("[data-pick]").forEach(a=>a.addEventListener("click",()=>{const b=document.querySelector('#'+(a.dataset.sec||'tshirts')+' .tabs button[data-t="'+a.dataset.pick+'"]');if(b)b.click()}));
(()=>{const C=[{"n": "Black", "h": "#151515", "s": "images/cap-black.jpg", "t": "Embroidered R. mark."}, {"n": "White", "h": "#FFFFFF", "s": "images/cap-white.jpg", "t": "Embroidered R. mark."}, {"n": "Sky blue", "h": "#2F9BE0", "s": "images/cap-sky-blue.jpg", "t": "Embroidered R. mark."}, {"n": "Red", "h": "#E0231F", "s": "images/cap-red.jpg", "t": "Embroidered R. mark."}, {"n": "Royal blue", "h": "#2230D8", "s": "images/cap-royal-blue.jpg", "t": "Embroidered R. mark."}, {"n": "Indigo", "h": "#4B35D6", "s": "images/cap-indigo.jpg", "t": "Embroidered with the Revenge. script."}, {"n": "Navy", "h": "#14173A", "s": "images/cap-navy.jpg", "t": "Embroidered R. mark."}];const sw=document.getElementById("sw"),img=document.getElementById("capimg"),nm=document.getElementById("capname"),note=document.getElementById("capnote"),msg=document.getElementById("capmsg");let cur=4;
const show=i=>{cur=i;img.src=C[i].s;img.alt=C[i].n+" cap";nm.textContent=C[i].n;note.textContent=C[i].t+" Five-panel cap with a short brim and a side eyelet.";msg.textContent="";[...sw.children].forEach((b,k)=>{b.setAttribute("aria-checked",k===i);b.tabIndex=k===i?0:-1})};
C.forEach((c,i)=>{const b=document.createElement("button");b.type="button";b.className="sw";b.setAttribute("role","radio");b.setAttribute("aria-label",c.n);b.title=c.n;b.innerHTML='<span style="background:'+c.h+'"></span>';b.onclick=()=>show(i);b.onkeydown=e=>{const d=e.key==="ArrowRight"||e.key==="ArrowDown"?1:e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:0;if(d){e.preventDefault();show((cur+d+C.length)%C.length);sw.children[cur].focus()}};sw.appendChild(b)});
show(cur);
window.pickCap=nm2=>{const i=C.findIndex(c=>c.n===nm2);if(i>-1)show(i)};
document.querySelectorAll(".capmenu").forEach(m=>{m.innerHTML=C.map(c=>'<a href="#caps" data-cap="'+c.n+'"><img alt="" src="'+c.s+'"><strong>'+c.n+'</strong></a>').join("")});
document.querySelectorAll(".chips2").forEach(m=>{m.innerHTML=C.map(c=>'<a href="#caps" data-cap="'+c.n+'" title="'+c.n+'" aria-label="'+c.n+'"><span style="background:'+c.h+'"></span></a>').join("")});
document.addEventListener("click",e=>{const a=e.target.closest("[data-cap]");if(a)pickCap(a.dataset.cap)});
document.getElementById("capadd").onclick=()=>{n++;document.getElementById("count").textContent=n;msg.textContent="Added: "+C[cur].n+" cap"}})();
