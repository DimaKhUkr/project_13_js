!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r);var c=r("bpxeT"),s=r("2TvXO"),o="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",i="https://api.nytimes.com/svc/search/v2/articlesearch.json",d=document.getElementById("favorite-articles");function l(){return u.apply(this,arguments)}function u(){return(u=e(c)(e(s).mark((function n(){var t,a,r,c,o,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="",d.innerHTML="",a=0;case 3:if(!(a<localStorage.length)){e.next=15;break}if(!(r=localStorage.key(a)).includes("favorite")){e.next=12;break}return c=r.slice(9,r.length),e.next=9,p(c);case 9:o=e.sent,i=o.response.docs,t+=f(i[0]);case 12:a++,e.next=3;break;case 15:""===t&&(t='\n  <div class="favorite-news__none">\n    <p class="favorite-news__none__title">We haven\'t found news on this page</p>\n  </div>'),d.insertAdjacentHTML("beforeend",t);case 17:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function f(e){var n=e.headline.main,t=0===e.multimedia.length?"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg":"https://static01.nyt.com/".concat(e.multimedia[0].url),a=e._id,r=e.section_name,c=e.abstract,s=e.pub_date,o=e.web_url;return'\n          <div class="news-card">\n            <img src="'.concat(t,'" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(r,'</div>\n              <button class="news-card__favorite-btn ').concat("active_btn",'" data-news-id="').concat(a,'">\n                ').concat("Remove from Favorite",'\n              </button>\n              <h2 class="news-card__title">').concat(n,'</h2>\n              <p class="news-card__description">').concat(c.length>100?c.substring(0,100)+"...":c,'</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">').concat(new Date(s).toLocaleDateString(),'</div>\n              <a class="news-card__read-more" href="').concat(o,'" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n        ')}function p(e){return v.apply(this,arguments)}function v(){return(v=e(c)(e(s).mark((function n(t){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i,'?fq=_id:("').concat(t,'")&api-key=').concat(o)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}l(),d.addEventListener("click",(function(e){null!==e.target.closest(".news-card__favorite-btn")&&function(e){var n=e.target.dataset.newsId;localStorage.removeItem("favorite_".concat(n)),l()}(e)}))}();
//# sourceMappingURL=favorite.6c10a2ce.js.map