!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r);var c=r("bpxeT"),o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e};var i=r("2TvXO"),s="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",l="https://api.nytimes.com/svc/search/v2/articlesearch.json",d=document.querySelector(".read");function u(){return(u=e(c)(e(i).mark((function n(){var t,a,r,c,o,s,l,u,h,_;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="",a="",r="",d.innerHTML="",c=0;case 5:if(!(c<localStorage.length)){e.next=29;break}if(o=localStorage.key(c),!/^\d{2}\/\d{2}\/\d{4}$/.test(o)){e.next=26;break}t+=f(o),console.log(o),s=JSON.parse(localStorage.getItem(o)),console.log(s),l=0;case 14:if(!(l<s.length)){e.next=25;break}return u=s[l],console.log(u),e.next=19,v(u);case 19:h=e.sent,_=h.response.docs,a+=p(_[0]);case 22:l+=1,e.next=14;break;case 25:r=t+a;case 26:c+=1,e.next=5;break;case 29:d.insertAdjacentHTML("beforeend",r);case 30:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function f(e){return'\n  <li class="read-item">\n      <div class="read-title">\n        <h2 class="read-date">'.concat(e,'</h2>\n        <div class="read-arrow"></div>\n      </div>\n      <ul class="read-gallery">\n      </ul>\n  </li>\n        ')}function p(e){var n=e.headline.main,t=0!==e.multimedia?"https://static01.nyt.com/".concat(e.multimedia[0].url):"https://via.placeholder.com/400",a=e._id,r=e.section_name,c=e.abstract,o=e.pub_date,i=e.web_url;return'\n         <li>\n          <div class="news-card">\n            <img src="'.concat(t,'" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(r,'</div>\n              <button class="news-card__favorite-btn ').concat("active_btn",'" data-news-id="').concat(a,'">\n                ').concat("Remove from Favorite",'\n              </button>\n              <h2 class="news-card__title">').concat(n,'</h2>\n              <p class="news-card__description">').concat(c.length>100?c.substring(0,100)+"...":c,'</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">').concat(new Date(o).toLocaleDateString(),'</div>\n              <a class="news-card__read-more" href="').concat(i,'" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n         </div>\n      </div>\n    </li>\n         ')}function v(e){return h.apply(this,arguments)}function h(){return(h=e(c)(e(i).mark((function n(t){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(l,'?fq=_id:("').concat(t,'")&api-key=').concat(s)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}!function(){if(0===d.children.length){console.log("empty");d.innerHTML='<li class="read-item-empty"><h2>Nothing read yet</h2><div class="read-empty"></div></li > '}console.log("Not empty")}(),function(){u.apply(this,arguments)}()}();
//# sourceMappingURL=read.630af159.js.map
