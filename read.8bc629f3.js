let e;document.querySelectorAll(".read-title").forEach((t=>t.addEventListener("click",(()=>{parent=t.parentNode,e=t.nextElementSibling;const a=e.scrollHeight;parent.classList.contains("read-active")?(parent.classList.remove("read-active"),e.style.height="0px"):(document.querySelectorAll(".read-item").forEach((e=>e.classList.remove("read-active"))),parent.classList.toggle("read-active"),e.style.height=a+"px")}))));
//# sourceMappingURL=read.8bc629f3.js.map
