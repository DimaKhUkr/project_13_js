const e=document.querySelector(".read");!function(){if(0===e.children.length){console.log("empty");const t='<li class="read-item-empty"><h2>Nothing read yet</h2></li>';e.innerHTML=t}console.log("Not empty")}(),async function(){let t="";e.innerHTML="";const n=(await async function(e){try{return await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=_id:("${e}")&api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn`).then((e=>e.json()))}catch(e){console.error(e)}}("nyt://article/59fa3c31-ddd7-562c-ab32-e202a892d697")).response.docs;t+=function(e){const t=e.headline.main,n=!0,a=0!==e.multimedia?`https://static01.nyt.com/${e.multimedia[0].url}`:"https://via.placeholder.com/400",{_id:c,section_name:s,abstract:i,pub_date:o,web_url:r}=e;return`\n          <div class="news-card">\n            <img src="${a}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${s}</div>\n              <button class="news-card__favorite-btn ${n?"active_btn":""}" data-news-id="${c}">\n                ${n?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${t}</h2>\n              <p class="news-card__description">${i.length>100?i.substring(0,100)+"...":i}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(o).toLocaleDateString()}</div>\n              <a class="news-card__read-more" href="${r}" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n        `}(n[0]),e.insertAdjacentHTML("beforeend",t)}();Object.keys(localStorage).filter((e=>/^\d{2}\/\d{2}\/\d{4}$/.test(e))).forEach((e=>{const t=localStorage.getItem(e);console.log(`Значення для ключа ${e}: ${t}`)}));
//# sourceMappingURL=read.84177017.js.map
