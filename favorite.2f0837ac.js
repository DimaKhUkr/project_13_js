function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register("5XSq5",(function(t,n){e(t.exports,"createMainPage",(function(){return g})),e(t.exports,"createPopularNews",(function(){return f}));var a=o("bkgkh"),s=o("2nhTy"),r=o("8unPu");const i=document.getElementById("main-page"),c=document.querySelector(".wraper__weather"),d=document.getElementById("empty"),l=document.getElementById("searchForm");let u="",p=0,m=0,h="",v="https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn";async function f(){c.removeAttribute("hidden");const e=await async function(){try{return await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",{headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(e){console.error(e)}}();console.log(e.results);const t=e.results.map((e=>{const t=0!==e.media.length?e.media[0]["media-metadata"][2].url:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",{id:n,title:a,abstract:o,published_date:s,url:r,section:i,uri:c}=e,d=null!==localStorage.getItem(`favorite_${c}`);return`<div class="news-card" id="${n}">\n            <img src="${t}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${i}</div>\n              <button class="news-card__favorite-btn ${d?"active_btn":""}" data-news-id="${c}">\n                ${d?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${a}</h2>\n              <p class="news-card__description">${o.length>100?o.substring(0,100)+"...":o}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(s).toLocaleDateString()}</div>\n              <button class="btn-read-more news-card__read-more">\n              <a href="${r}" target="_blank">Read more</a>\n              </button>\n              </div>\n            </div>\n          </div>`}));i.insertAdjacentHTML("beforeend",t.join("")),document.addEventListener("DOMContentLoaded",a.startWeatherApp)}async function g(e,t){d.setAttribute("hidden","");const n=await async function(e,t){h=t?v+`&page=${e}`+`&fq=pub_date:(${t})`:v+`&page=${e}`,console.log(h);try{return await fetch(h,{headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(e){console.error(e)}}(e,t);console.dir(n.response),0===n.response.docs.length?(Array.from(i.children).forEach((e=>{e!==d&&e!==c&&e.remove()})),console.log(n.response.docs.length),d.removeAttribute("hidden"),c.setAttribute("hidden",""),l.elements.search.value=""):(Array.from(i.children).forEach((e=>{e!==c&&e!==d&&e.remove()})),c.removeAttribute("hidden"));const o=n.response.docs.map((e=>{const t=e.headline.main,n=0!==e.multimedia.length?`https://static01.nyt.com/${e.multimedia[0].url}`:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",{_id:a,section_name:o,abstract:s,pub_date:r,web_url:i}=e,c=null!==localStorage.getItem(`favorite_${a}`);return`\n          <div class="news-card" id="${a}">\n            <img src="${n}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${o}</div>\n              <button class="news-card__favorite-btn ${c?"active_btn":""}" data-news-id="${a}">\n                ${c?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${t}</h2>\n              <p class="news-card__description">${s.length>100?s.substring(0,100)+"...":s}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(r).toLocaleDateString()}</div>\n              <button class="btn-read-more news-card__read-more">\n              <ahref="${i}" target="_blank">Read more</ahref=>\n              </button>\n              </div>\n            </div>\n          </div>\n        `}));i.insertAdjacentHTML("beforeend",o.join("")),document.addEventListener("DOMContentLoaded",a.startWeatherApp),p=n.response.meta.hits,console.log(p),l.elements.search.value="",0!==n.response.docs.length&&(0,s.updatePagination)(p)}l.addEventListener("submit",(e=>{e.preventDefault(),m=0,u=e.target.elements.search.value.trim(),console.log(m,u),v+=`&q=${u}`,g(m)})),i.addEventListener("click",(e=>{null!==e.target.closest(".news-card__favorite-btn")&&function(e){const t=e.target,n=t.dataset.newsId;null!==localStorage.getItem(`favorite_${n}`)?(localStorage.removeItem(`favorite_${n}`),t.textContent="Add to Favorite",t.classList.remove("active_btn")):(localStorage.setItem(`favorite_${n}`,!0),t.textContent="Remove from Favorite",t.classList.add("active_btn"))}(e)})),i.addEventListener("click",r.onReadCard)})),o.register("bkgkh",(function(t,n){e(t.exports,"startWeatherApp",(function(){return o}));const a=document.getElementById("weather");function o(){a.innerHTML='<div class="weather__loading"><img src="https://github.com/AlexMakhony/Final_project_js/blob/main/chost.gif?raw=true" alt="Loading..."></div>',navigator.geolocation.getCurrentPosition((e=>{s(e.coords.latitude,e.coords.longitude)}),(e=>{console.error(e),s()}))}async function s(e,t){let n;n=e&&t?`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=f5984abfd7be02d0f0f71396692dd7ba&units=metric`:"https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Kyiv&appid=f5984abfd7be02d0f0f71396692dd7ba";try{const e=await fetch(n),t=await e.json();e.ok?function(e){const t=e.city.coord.lat,n=e.city.coord.lon;console.log(e);const o="https://openweathermap.org/img/wn/",s=e.list[0],r=Math.round(s.main.temp),i=s.weather[0].description,c=e.city.name,d=`${o}${s.weather[0].icon}@4x.png`,l=(new Date).toLocaleDateString("en-US",{weekday:"short"}),u=(new Date).toLocaleDateString("en-US",{day:"numeric"}).toUpperCase(),p=(new Date).toLocaleDateString("en-US",{month:"short"}),m=(new Date).toLocaleDateString("en-US",{year:"numeric"}).toUpperCase();let h=`<div class="header__weather">\n          <div class="temp__info">${r}°</div>\n          <div class="status__location">\n            <div class="status">\n              <p class="status__name">${i}</p>\n            </div>\n            <div class="location">\n              <img src="https://raw.githubusercontent.com/AlexMakhony/Final_project_js/6cf166ba0d110ff0a2ce6b8f26f2dd802ee28f35/Vector.svg" alt="checkpoint">\n              <p class="location__name">${c}</p>\n              </div>\n            </div>\n          </div>\n          <div class="icon__picture">\n            <img class="weather__picture" src="${d}" alt="Clouds">\n          </div>\n          <div class="date__wrapper">\n            <div class="day">${l}</div>\n            <div class="date">${u} ${p} ${m}</div>\n          </div>\n          <button class="weatherForweek" id="weatherForweek">Weather for 5 days</button>\n          `;a.innerHTML=h;document.getElementById("weatherForweek").addEventListener("click",(()=>async function(e,t){const n=`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=f5984abfd7be02d0f0f71396692dd7ba&units=metric`;try{const e=await fetch(n),t=await e.json();e.ok?function(e){const t=[];let n=new Date(e.list[0].dt_txt).getDate(),o=new Date(e.list[0].dt_txt).toLocaleDateString("en-US",{weekday:"short"}),s=e.list[0].main.temp,r=e.list[0].main.temp,i=e.list[0].weather[0].icon,c=`https://openweathermap.org/img/wn/${i}.png`;for(let a=1;a<e.list.length;a++){const d=new Date(e.list[a].dt_txt),l=d.getDate();if(l!==n){const u=d.toLocaleDateString("en-US",{month:"short"});t.push({dayOfWeek:o,dayOfMonth:n,month:u,tempMin:s,tempMax:r,iconUrl:c}),n=l,o=d.toLocaleDateString("en-US",{weekday:"short"}),s=e.list[a].main.temp,r=e.list[a].main.temp,i=e.list[a].weather[0].icon,c=`https://openweathermap.org/img/wn/${i}.png`}else e.list[a].main.temp<s&&(s=e.list[a].main.temp),e.list[a].main.temp>r&&(r=e.list[a].main.temp)}a.innerHTML="";const d=document.createElement("button");a.appendChild(d).classList.add("backBtn"),d.innerHTML="Back",d.addEventListener("click",(()=>{window.location.reload()})),t.forEach((e=>{const{dayOfWeek:t,dayOfMonth:n,month:o,tempMin:s,tempMax:r,iconUrl:i}=e,c=`\n        <div class="day__card">\n          <div class="dayOfMonth">${n}</div>\n          <div class="dayOfWeek">${t}</div>\n        </div>\n        <div class="iconUrl">\n            <img class="weather__picture__5days" src="${i}" alt="weather4days">\n          </div>\n        <div class="icon__status">\n          <div class="tempMax">Max temp:${Math.round(r)}°</div>\n          <div class="tempMin">Min temp:${Math.round(s)}°</div>\n        </div>\n      `,d=document.createElement("div");d.innerHTML=c,a.appendChild(d).classList.add("forecast__wrapper")}))}(t):a.innerHTML=t.message}catch(e){console.error(e)}}(t,n)))}(t):a.innerHTML=t.message}catch(e){console.error(e)}}})),o.register("2nhTy",(function(t,n){e(t.exports,"updatePagination",(function(){return i}));var a=o("5XSq5");let s=0,r=0;function i(e){const t=document.querySelector(".pagination");t.innerHTML="",s=Math.ceil(e/10),s>100&&(s=100);const n=document.createElement("button");n.textContent="1",n.classList="dot",0===r&&n.classList.add("dot-active"),n.addEventListener("click",(()=>{r=0,d()})),t.appendChild(n);const a=document.createElement("button");a.textContent="< Prew",a.classList="prev dot",0===r&&(a.disabled=!0),a.addEventListener("click",(()=>{r--,d()})),t.insertBefore(a,t.firstChild);let o=Math.max(1,r),i=Math.min(s-1,r+1);if(window.innerWidth>767&&(o=Math.max(1,r-1),i=Math.min(s-1,r+2)),o>1){const e=document.createElement("button");e.textContent="...",e.disabled=!0,e.classList="dots",t.appendChild(e)}for(let e=o;e<i;e++){const n=document.createElement("button");n.textContent=e+1,n.classList="dot",e===r&&n.classList.add("dot-active"),n.addEventListener("click",(()=>{r=e,d()})),t.appendChild(n)}if(i<s-1){const e=document.createElement("button");e.textContent="...",e.disabled=!0,e.classList="dots",t.appendChild(e)}if(s>1){const e=document.createElement("button");e.textContent=s,e.classList="dot",r===s-1&&e.classList.add("dot-active"),e.addEventListener("click",(()=>{r=s-1,d()})),t.appendChild(e)}const c=document.createElement("button");c.textContent="Next >",c.classList="next dot",r===s-1&&(c.disabled=!0),c.addEventListener("click",(()=>{r++,d()})),t.appendChild(c)}function c(){document.getElementById("loader-container").style.display="none",document.getElementById("pagination").style.display="flex"}function d(){document.getElementById("loader-container").style.display="flex",document.getElementById("pagination").style.display="none",setTimeout(c,1e3),(0,a.createMainPage)(r),i()}})),o.register("8unPu",(function(t,n){e(t.exports,"onReadCard",(function(){return o}));const a=[];function o(e){let t=null;const n=(new Date).toLocaleDateString("en-GB");if(e.target.closest(".news-card__read-more")){if(t=e.target.closest(".news-card"),t&&t.classList.add("reading_card"),a.includes(`${t.id}`))return;a.push(`${t.id}`),localStorage.setItem(`${n}`,JSON.stringify(a))}}}));var s=o("5XSq5"),r=o("bkgkh");const i=document.getElementById("category-btn"),c=document.getElementById("main-page"),d=document.querySelector(".wraper__weather"),l=document.getElementById("empty");async function u(e){const t=`https://api.nytimes.com/svc/news/v3/content/nyt/${e}.json?api-key=t8X9JXlP7JTQb4JOFaZ7soveQbwr46sH`;try{const e=await fetch(t,{headers:{"Content-Type":"application/json"}}),n=(await e.json()).results;console.log(n),function(e){l.setAttribute("hidden",""),0===e.length?(Array.from(c.children).forEach((e=>{e!==l&&e!==d&&e.remove()})),console.log(e.length),l.removeAttribute("hidden"),d.setAttribute("hidden","")):(Array.from(c.children).forEach((e=>{e!==d&&e!==l&&e.remove()})),d.removeAttribute("hidden"));const t=e.map((e=>{const t=null!==e.multimedia?e.multimedia[2].url:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",{section:n,abstract:a,title:o,url:s,uri:r,published_date:i}=e,c=null!==localStorage.getItem(`favorite_${r}`);return`<div class ="news-card">\n        <img src="${t}" alt="photo"/>\n        <div class="news-card__info">\n        <div class="news-card__category">${n}</div>\n        <button class="news-card__favorite-btn ${c?"active_btn":""}" data-news-id="${r}">\n                ${c?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${o}</h2>\n              <p class="news-card__description">${a.length>100?a.substring(0,100)+"...":a}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(i).toLocaleDateString()}</div>\n              <a class="news-card__read-more" href="${s}" target="_blank">Read more</a>\n            </div>\n          </div>\n          </div>`})).join("");c.insertAdjacentHTML("beforeend",t)}(n)}catch(e){console.error(e)}}!async function(){try{await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=t8X9JXlP7JTQb4JOFaZ7soveQbwr46sH",{headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{const t=[];for(const n of e.results)t.push(n.display_name);return t})).then((e=>{if(window.innerWidth<768){i.insertAdjacentHTML("beforeend",'<select name="Others" class="select_btn">\n            <option value="Others" hidden>Categories</option>\n            </select>');const t=document.querySelector(".select_btn");for(let n=0;n<e.length;n++)t.insertAdjacentHTML("beforeend",`<option value="${e[n]}">${e[n]}</option>`)}if(window.innerWidth>=768&&window.innerWidth<1280){for(let t=0;t<=3;t++)i.insertAdjacentHTML("beforeend",`<button type="button" class="category_btn">${e[t]}</button>`);i.insertAdjacentHTML("beforeend",'<select name="Others" class="select_btn">\n            <option value="Others" hidden>Others</option>\n            </select>');const t=document.querySelector(".select_btn");for(let n=4;n<e.length;n++)t.insertAdjacentHTML("beforeend",`<option value="${e[n]}">${e[n]}</option>`)}if(window.innerWidth>=1280){for(let t=0;t<=5;t++)i.insertAdjacentHTML("beforeend",`<button type="button" class="category_btn">${e[t]}</button>`);i.insertAdjacentHTML("beforeend",'<select name="Others" class="select_btn">\n            <option value="Others" hidden>Others</option>\n            </select>');const t=document.querySelector(".select_btn");for(let n=6;n<e.length;n++)t.insertAdjacentHTML("beforeend",`<option value="${e[n]}">${e[n]}</option>`)}document.querySelectorAll(".category_btn").forEach((e=>{e.addEventListener("click",(async t=>{t.preventDefault();const n=e.textContent.toLowerCase();console.log(n),u(n)}))}));document.querySelector(".select_btn").addEventListener("change",(async e=>{const t=e.currentTarget.value.toLowerCase();e.preventDefault(),console.log(t),u(t)}))}))}catch(e){console.error(e)}}(),(0,s.createPopularNews)(),(0,r.startWeatherApp)();
//# sourceMappingURL=favorite.2f0837ac.js.map