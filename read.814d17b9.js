!function(){var a=document.querySelector(".read");!function(){if(0===a.children.length){console.log("empty");a.innerHTML='<li class="read-item-empty"><h2>Nothing read yet</h2><div class="read-empty"></div></li > '}console.log("Not empty")}(),function(){var n=Object.keys(localStorage),e={},r=!0,t=!1,l=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var d=c.value;if(/^\d{2}\/\d{2}\/\d{4}$/.test(d)){var o=JSON.parse(localStorage.getItem(d));e[d]=o}}}catch(a){t=!0,l=a}finally{try{r||null==i.return||i.return()}finally{if(t)throw l}}var s="",v=!0,y=!1,u=void 0;try{for(var f,h=Object.keys(e)[Symbol.iterator]();!(v=(f=h.next()).done);v=!0){var m=f.value;s+='<li class="read-item">\n      <div class="read-title">\n        <h2 class="read-date">'.concat(m,'</h2>\n        <div class="read-arrow"></div>\n      </div>\n      <ul class="read-gallery">\n    ');var _=!0,g=!1,w=void 0;try{for(var p,S=e[m][Symbol.iterator]();!(_=(p=S.next()).done);_=!0){var b=p.value;s+='<li>\n          <div class="news-card">\n            <img src='.concat(b.img,' alt="Article illustration" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(b.category,'</div>\n        \n         <h2 class="news-card__title">').concat(b.title,'</h2>\n         <p class="news-card__description">\n        ').concat(b.description,'\n        </p>\n        <div class="news-card__date-div">\n          <div class="news-card__date">\n          ').concat(b.dateRead,'\n       </div>\n         <a class="news-card__read-more" href="').concat(b.url,'" target="_blank"\n         >Read more</a\n        >\n         </div>\n        </div>\n        </div>\n        </li>')}}catch(a){g=!0,w=a}finally{try{_||null==S.return||S.return()}finally{if(g)throw w}}s+="</ul>"}}catch(a){y=!0,u=a}finally{try{v||null==h.return||h.return()}finally{if(y)throw u}}a.innerHTML=s}()}();
//# sourceMappingURL=read.814d17b9.js.map