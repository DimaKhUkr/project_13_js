!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,a,o,c){try{var i=t[o](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,a)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,s,"next",t)}function s(t){n(c,a,o,i,s,"throw",t)}i(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),c=new T(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=k(c,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?f:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,c),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",v={};function m(){}function y(){}function g(){}var w={};s(w,o,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(S([])));b&&b!==n&&r.call(b,o)&&(w=b);var L=g.prototype=m.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(a,o,c,i){var s=u(t[a],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,s(L,"constructor",g),s(g,"constructor",y),y.displayName=s(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,i,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new E(l(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(L),s(L,i,"Generator"),s(L,o,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return i.type="throw",i.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),l=r.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}));var o=a("bpxeT"),c=a("2TvXO"),i=(o=a("bpxeT"),c=a("2TvXO"),document.getElementById("weather")),s="f5984abfd7be02d0f0f71396692dd7ba",l="Kyiv";function u(){i.innerHTML='<div class="weather__loading"><img src="https://github.com/AlexMakhony/Final_project_js/blob/main/chost.gif?raw=true" alt="Loading..."></div>',navigator.geolocation.getCurrentPosition((function(t){d(t.coords.latitude,t.coords.longitude)}),(function(t){console.error(t),d()}))}function d(t,e){return p.apply(this,arguments)}function p(){return(p=t(o)(t(c).mark((function e(n,r){var a,o,u;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n&&r?"https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&appid=").concat(s,"&units=metric"):"https://api.openweathermap.org/data/2.5/forecast?units=metric&q=".concat(l,"&appid=").concat(s),t.prev=2,t.next=5,fetch(a);case 5:return o=t.sent,t.next=8,o.json();case 8:u=t.sent,o.ok?h(u):i.innerHTML=u.message,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0);case 15:case"end":return t.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function h(t){var e=t.city.coord.lat,n=t.city.coord.lon;console.log(t);var r=t.list[0],a=Math.round(r.main.temp),o=r.weather[0].description,c=t.city.name,s="".concat("https://openweathermap.org/img/wn/").concat(r.weather[0].icon,"@4x.png"),l=(new Date).toLocaleDateString("en-US",{weekday:"short"}),u=(new Date).toLocaleDateString("en-US",{day:"numeric"}).toUpperCase(),d=(new Date).toLocaleDateString("en-US",{month:"short"}),p=(new Date).toLocaleDateString("en-US",{year:"numeric"}).toUpperCase(),h='<div class="header__weather">\n          <div class="temp__info">'.concat(a,'°</div>\n          <div class="status__location">\n            <div class="status">\n              <p class="status__name">').concat(o,'</p>\n            </div>\n            <div class="location">\n              <img src="https://raw.githubusercontent.com/AlexMakhony/Final_project_js/6cf166ba0d110ff0a2ce6b8f26f2dd802ee28f35/Vector.svg" alt="checkpoint">\n              <p class="location__name">').concat(c,'</p>\n              </div>\n            </div>\n          </div>\n          <div class="icon__picture">\n            <img class="weather__picture" src="').concat(s,'" alt="Clouds">\n          </div>\n          <div class="date__wrapper">\n            <div class="day">').concat(l,'</div>\n            <div class="date">').concat(u," ").concat(d," ").concat(p,'</div>\n          </div>\n          <button class="weatherForweek" id="weatherForweek">Weather for 5 days</button>\n          ');i.innerHTML=h,document.getElementById("weatherForweek").addEventListener("click",(function(){return function(t,e){return f.apply(this,arguments)}(e,n)}))}function f(){return(f=t(o)(t(c).mark((function e(n,r){var a,o,l;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(n,"&lon=").concat(r,"&appid=").concat(s,"&units=metric"),t.prev=1,t.next=4,fetch(a);case 4:return o=t.sent,t.next=7,o.json();case 7:l=t.sent,o.ok?v(l):i.innerHTML=l.message,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function v(t){for(var e=[],n=new Date(t.list[0].dt_txt).getDate(),r=new Date(t.list[0].dt_txt).toLocaleDateString("en-US",{weekday:"short"}),a=t.list[0].main.temp,o=t.list[0].main.temp,c=t.list[0].weather[0].icon,s="https://openweathermap.org/img/wn/".concat(c,".png"),l=1;l<t.list.length;l++){var u=new Date(t.list[l].dt_txt),d=u.getDate();if(d!==n){var p=u.toLocaleDateString("en-US",{month:"short"});e.push({dayOfWeek:r,dayOfMonth:n,month:p,tempMin:a,tempMax:o,iconUrl:s}),n=d,r=u.toLocaleDateString("en-US",{weekday:"short"}),a=t.list[l].main.temp,o=t.list[l].main.temp,c=t.list[l].weather[0].icon,s="https://openweathermap.org/img/wn/".concat(c,".png")}else t.list[l].main.temp<a&&(a=t.list[l].main.temp),t.list[l].main.temp>o&&(o=t.list[l].main.temp)}i.innerHTML="";var h=document.createElement("button");i.appendChild(h).classList.add("backBtn"),h.innerHTML="Back",h.addEventListener("click",(function(){window.location.reload()})),e.forEach((function(t){var e=t.dayOfWeek,n=t.dayOfMonth,r=(t.month,t.tempMin),a=t.tempMax,o=t.iconUrl,c='\n        <div class="day__card">\n          <div class="dayOfMonth">'.concat(n,'</div>\n          <div class="dayOfWeek">').concat(e,'</div>\n        </div>\n        <div class="iconUrl">\n            <img class="weather__picture__5days" src="').concat(o,'" alt="weather4days">\n          </div>\n        <div class="icon__status">\n          <div class="tempMax">Max temp:').concat(Math.round(a),'°</div>\n          <div class="tempMin">Min temp:').concat(Math.round(r),"°</div>\n        </div>\n      "),s=document.createElement("div");s.innerHTML=c,i.appendChild(s).classList.add("forecast__wrapper")}))}var m=0,y=0;function g(t){var e=function(t){var e=document.createElement("button");e.textContent=t+1,e.classList="dot",t===y&&e.classList.add("dot-active"),e.addEventListener("click",(function(){F(y=t),g()})),n.appendChild(e)},n=document.querySelector(".pagination");n.innerHTML="",(m=Math.ceil(t/10))>100&&(m=100);var r=document.createElement("button");r.textContent="1",r.classList="dot",0===y&&r.classList.add("dot-active"),r.addEventListener("click",(function(){F(y=0),g()})),n.appendChild(r);var a=document.createElement("button");a.textContent="< Prew",a.classList="prev dot",0===y&&(a.disabled=!0),a.addEventListener("click",(function(){F(--y),g()})),n.insertBefore(a,n.firstChild);var o=Math.max(1,y),c=Math.min(m-1,y+1);if(window.innerWidth>767&&(o=Math.max(1,y-1),c=Math.min(m-1,y+2)),o>1){var i=document.createElement("button");i.textContent="...",i.disabled=!0,i.classList="dots",n.appendChild(i)}for(var s=o;s<c;s++)e(s);if(c<m-1){var l=document.createElement("button");l.textContent="...",l.disabled=!0,l.classList="dots",n.appendChild(l)}if(m>1){var u=document.createElement("button");u.textContent=m,u.classList="dot",y===m-1&&u.classList.add("dot-active"),u.addEventListener("click",(function(){F(y=m-1),g()})),n.appendChild(u)}var d=document.createElement("button");d.textContent="Next >",d.classList="next dot",y===m-1&&(d.disabled=!0),d.addEventListener("click",(function(){F(++y),g()})),n.appendChild(d)}var w="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",_=document.getElementById("main-page"),b=document.querySelector(".wraper__weather"),L=document.getElementById("empty"),x=(document.getElementById("pagination"),document.getElementById("searchForm")),E="",k=0,M=0,j="";function T(t){return S.apply(this,arguments)}function S(){return(S=t(o)(t(c).mark((function e(n){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=j+"&page=".concat(n),console.log(r),t.prev=2,t.next=5,fetch(r,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 5:return t.abrupt("return",t.sent);case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:case"end":return t.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function O(){return C.apply(this,arguments)}function C(){return(C=t(o)(t(c).mark((function e(){var n;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=".concat(w),t.prev=1,t.next=4,fetch(n,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function D(){return(D=t(o)(t(c).mark((function e(){var n,r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:n=t.sent,console.log(n.results),r=n.results.map((function(t){var e=0!==t.media.length?t.media[0]["media-metadata"][2].url:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",n=t.title,r=t.abstract,a=t.published_date,o=t.url,c=t.section,i=t.uri,s=null!==localStorage.getItem("favorite_".concat(i));return'<div class="news-card">\n            <img src="'.concat(e,'" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(c,'</div>\n              <button class="news-card__favorite-btn ').concat(s?"active_btn":"",'" data-news-id="').concat(i,'">\n                ').concat(s?"Remove from Favorite":"Add to Favorite",'\n              </button>\n              <h2 class="news-card__title">').concat(n,'</h2>\n              <p class="news-card__description">').concat(r.length>100?r.substring(0,100)+"...":r,'</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">').concat(new Date(a).toLocaleDateString(),'</div>\n              <a class="news-card__read-more" href="').concat(o,'" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>')})),_.insertAdjacentHTML("beforeend",r.join("")),document.addEventListener("DOMContentLoaded",u);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function F(t){return I.apply(this,arguments)}function I(){return(I=t(o)(t(c).mark((function e(n){var r,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L.setAttribute("hidden",""),t.next=3,T(n);case 3:r=t.sent,console.dir(r.response),0===r.response.docs.length?(Array.from(_.children).forEach((function(t){t!==L&&t!==b&&t.remove()})),console.log(r.response.docs.length),L.removeAttribute("hidden")):Array.from(_.children).forEach((function(t){t!==b&&t!==L&&t.remove()})),a=r.response.docs.map((function(t){var e=t.headline.main,n=0!==t.multimedia?"https://static01.nyt.com/".concat(t.multimedia[0].url):"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",r=t._id,a=t.section_name,o=t.abstract,c=t.pub_date,i=t.web_url,s=null!==localStorage.getItem("favorite_".concat(r));return'\n          <div class="news-card">\n            <img src="'.concat(n,'" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">').concat(a,'</div>\n              <button class="news-card__favorite-btn ').concat(s?"active_btn":"",'" data-news-id="').concat(r,'">\n                ').concat(s?"Remove from Favorite":"Add to Favorite",'\n              </button>\n              <h2 class="news-card__title">').concat(e,'</h2>\n              <p class="news-card__description">').concat(o.length>100?o.substring(0,100)+"...":o,'</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">').concat(new Date(c).toLocaleDateString(),'</div>\n              <a class="news-card__read-more" href="').concat(i,'" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n        ')})),_.insertAdjacentHTML("beforeend",a.join("")),document.addEventListener("DOMContentLoaded",u),k=r.response.meta.hits,console.log(k),g(k);case 12:case"end":return t.stop()}}),e)})))).apply(this,arguments)}x.addEventListener("submit",(function(t){t.preventDefault(),M=0,E=t.target.elements.search.value.trim(),console.log(M,E),j="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(E,"&api-key=").concat(w),F(M)})),_.addEventListener("click",(function(t){null!==t.target.closest(".news-card__favorite-btn")&&function(t){var e=t.target,n=e.dataset.newsId;null!==localStorage.getItem("favorite_".concat(n))?(localStorage.removeItem("favorite_".concat(n)),e.textContent="Add to Favorite",e.classList.remove("active")):(localStorage.setItem("favorite_".concat(n),!0),e.textContent="Remove from Favorite",e.classList.add("active"))}(t)}));o=a("bpxeT"),c=a("2TvXO");var A="u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",U="https://api.nytimes.com/svc/news/v3/content/section-list.json",H=document.getElementById("category-btn");function G(){return(G=t(o)(t(c).mark((function e(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(U,"?api-key=").concat(A),{headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){var e=[],n=!0,r=!1,a=void 0;try{for(var o,c=t.results[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;e.push(i.display_name)}}catch(t){r=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return e})).then((function(t){for(var e=0;e<=5;e++)H.insertAdjacentHTML("beforeend",'<button type="button" class="category_btn">'.concat(t[e],"</button>"));H.insertAdjacentHTML("beforeend",'<select name="Others" class="category_btn select_btn">\n            <option value="Others" hidden>Others</option>\n            </select>');for(var n=document.querySelector(".select_btn"),r=6;r<t.length;r++)n.insertAdjacentHTML("beforeend",'<option value="'.concat(t[r],'">').concat(t[r],"</option>"))}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}!function(){G.apply(this,arguments)}(),function(){D.apply(this,arguments)}(),u()}();
//# sourceMappingURL=favorite.846eb078.js.map
