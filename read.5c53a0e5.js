!function(){var e;titleEl=document.querySelector(".read-title"),readGallery=document.querySelector(".read-gallery"),arrow=document.querySelector(".read-arrow"),console.log(arrow),titleEl.addEventListener("click",(function(){var e=readGallery.scrollHeight;readGallery.classList.contains("active")?(readGallery.classList.remove("active"),arrow.classList.remove("read-arrow__active"),readGallery.style.height="0px"):(readGallery.classList.add("active"),arrow.classList.add("read-arrow__active"),readGallery.style.height=e+"px")})),e=readGallery.scrollHeight,readGallery.style.transition="height 0.7s",readGallery.style.overflow="hidden",readGallery.classList.contains("active")?(arrow.classList.add("read-arrow__active"),readGallery.style.height=e+"px"):(arrow.classList.remove("read-arrow__active"),readGallery.style.height="0px")}();
//# sourceMappingURL=read.5c53a0e5.js.map
