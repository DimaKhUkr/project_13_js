!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("4LMMA"),i=window.innerHeight,c=document.querySelector("header").offsetHeight,o=document.querySelector("footer").offsetHeight,d=document.querySelector(".read-container").offsetHeight,s=document.querySelector(".read-container"),l=c+d+o;if(l<i){var f=i-l;s.style.minHeight=s.offsetHeight+f+"px"}localStorage.getItem("read_news")&&function(){s.innerHTML="";var e=JSON.parse(localStorage.getItem("read_news")),t={};e.forEach((function(e){var n=new Date(Number(e.dateRead)),a="".concat(("0"+n.getDate()).slice(-2),"/").concat(("0"+(n.getMonth()+1)).slice(-2),"/").concat(n.getFullYear());t[a]||(t[a]=[]);var r=t[a].find((function(t){return t.title===e.title}));r?n>new Date(Number(r.dateRead))&&(t[a]=t[a].filter((function(t){return t.title!==e.title})),t[a].unshift(e)):t[a].unshift(e)}));var n=Object.keys(t).sort((function(e,t){return new Date(t)-new Date(e)})),a=document.createElement("ul");a.classList.add("read"),n.forEach((function(e){var n=t[e].sort((function(e,t){return new Date(t.dateRead)-new Date(e.dateRead)})).map((function(e){var t=(0,r.isNewsInFavorites)(e.favoritId);return'<li>\n          <div class="news-card">\n            <img src='.concat(e.img,' alt="Article illustration" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(e.category,'</div>\n              <button class="news-card__favorite-btn ').concat(t?"active_btn":"",'" data-news-id="').concat(e.favoritId,'">\n                ').concat(t?"Remove from Favorite":"Add to Favorite",'\n              </button>\n                   <h2 class="news-card__title">').concat(e.title,'</h2>\n         <p class="news-card__description">\n        ').concat(e.description,'\n        </p>\n        <div class="news-card__date-div">\n          <div class="news-card__date">\n          ').concat(e.publishDate,'\n       </div>\n         <a class="news-card__read-more" href="').concat(e.readMore,'" target="blank"\n         >Read more</a\n        >\n         </div>\n        </div>\n        </div>\n        </li>')})).join(""),i='<li class="read-item">\n <div class="read-title">\n<h2 class="read-date">'.concat(e,'</h2>\n<div class="read-arrow"></div>\n</div>\n<ul class="read-gallery">').concat(n,"</ul> </li> ");a.insertAdjacentHTML("beforeend",i)})),s.appendChild(a)}(),s.addEventListener("click",(function(e){null!==e.target.closest(".news-card__favorite-btn")&&(0,r.toggleFavoriteNews)(e)}))}();
//# sourceMappingURL=read.4137cfb5.js.map
