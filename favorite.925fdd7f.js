const t=document.getElementById("weather");function e(){t.innerHTML='<div class="weather__loading"><img src="https://github.com/AlexMakhony/Final_project_js/blob/main/chost.gif?raw=true" alt="Loading..."></div>',navigator.geolocation.getCurrentPosition((t=>{n(t.coords.latitude,t.coords.longitude)}),(t=>{console.error(t),n()}))}async function n(e,n){let a;a=e&&n?`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${n}&appid=f5984abfd7be02d0f0f71396692dd7ba&units=metric`:"https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Kyiv&appid=f5984abfd7be02d0f0f71396692dd7ba";try{const e=await fetch(a),n=await e.json();e.ok?function(e){const n=e.city.coord.lat,a=e.city.coord.lon;console.log(e);const s="https://openweathermap.org/img/wn/",o=e.list[0],i=Math.round(o.main.temp),c=o.weather[0].description,d=e.city.name,r=`${s}${o.weather[0].icon}@4x.png`,l=(new Date).toLocaleDateString("en-US",{weekday:"short"}),m=(new Date).toLocaleDateString("en-US",{day:"numeric"}).toUpperCase(),p=(new Date).toLocaleDateString("en-US",{month:"short"}),h=(new Date).toLocaleDateString("en-US",{year:"numeric"}).toUpperCase();let u=`<div class="header__weather">\n          <div class="temp__info">${i}°</div>\n          <div class="status__location">\n            <div class="status">\n              <p class="status__name">${c}</p>\n            </div>\n            <div class="location">\n              <img src="https://raw.githubusercontent.com/AlexMakhony/Final_project_js/6cf166ba0d110ff0a2ce6b8f26f2dd802ee28f35/Vector.svg" alt="checkpoint">\n              <p class="location__name">${d}</p>\n              </div>\n            </div>\n          </div>\n          <div class="icon__picture">\n            <img class="weather__picture" src="${r}" alt="Clouds">\n          </div>\n          <div class="date__wrapper">\n            <div class="day">${l}</div>\n            <div class="date">${m} ${p} ${h}</div>\n          </div>\n          <button class="weatherForweek" id="weatherForweek">Weather for 5 days</button>\n          `;t.innerHTML=u;document.getElementById("weatherForweek").addEventListener("click",(()=>async function(e,n){const a=`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${n}&appid=f5984abfd7be02d0f0f71396692dd7ba&units=metric`;try{const e=await fetch(a),n=await e.json();e.ok?function(e){const n=[];let a=new Date(e.list[0].dt_txt).getDate(),s=new Date(e.list[0].dt_txt).toLocaleDateString("en-US",{weekday:"short"}),o=e.list[0].main.temp,i=e.list[0].main.temp,c=e.list[0].weather[0].icon,d=`https://openweathermap.org/img/wn/${c}.png`;for(let t=1;t<e.list.length;t++){const r=new Date(e.list[t].dt_txt),l=r.getDate();if(l!==a){const m=r.toLocaleDateString("en-US",{month:"short"});n.push({dayOfWeek:s,dayOfMonth:a,month:m,tempMin:o,tempMax:i,iconUrl:d}),a=l,s=r.toLocaleDateString("en-US",{weekday:"short"}),o=e.list[t].main.temp,i=e.list[t].main.temp,c=e.list[t].weather[0].icon,d=`https://openweathermap.org/img/wn/${c}.png`}else e.list[t].main.temp<o&&(o=e.list[t].main.temp),e.list[t].main.temp>i&&(i=e.list[t].main.temp)}t.innerHTML="";const r=document.createElement("button");t.appendChild(r).classList.add("backBtn"),r.innerHTML="Back",r.addEventListener("click",(()=>{window.location.reload()})),n.forEach((e=>{const{dayOfWeek:n,dayOfMonth:a,month:s,tempMin:o,tempMax:i,iconUrl:c}=e,d=`\n        <div class="day__card">\n          <div class="dayOfMonth">${a}</div>\n          <div class="dayOfWeek">${n}</div>\n        </div>\n        <div class="iconUrl">\n            <img class="weather__picture__5days" src="${c}" alt="weather4days">\n          </div>\n        <div class="icon__status">\n          <div class="tempMax">Max temp:${Math.round(i)}°</div>\n          <div class="tempMin">Min temp:${Math.round(o)}°</div>\n        </div>\n      `,r=document.createElement("div");r.innerHTML=d,t.appendChild(r).classList.add("forecast__wrapper")}))}(n):t.innerHTML=n.message}catch(t){console.error(t)}}(n,a)))}(n):t.innerHTML=n.message}catch(t){console.error(t)}}let a=0,s=0;function o(t){const e=document.querySelector(".pagination");e.innerHTML="",a=Math.ceil(t/10),a>100&&(a=100);const n=document.createElement("button");n.textContent="1",n.classList="dot",0===s&&n.classList.add("dot-active"),n.addEventListener("click",(()=>{s=0,u(s),o()})),e.appendChild(n);const i=document.createElement("button");i.textContent="< Prew",i.classList="prev dot",0===s&&(i.disabled=!0),i.addEventListener("click",(()=>{s--,u(s),o()})),e.insertBefore(i,e.firstChild);let c=Math.max(1,s),d=Math.min(a-1,s+1);if(window.innerWidth>767&&(c=Math.max(1,s-1),d=Math.min(a-1,s+2)),c=Math.max(1,s-1),d=Math.min(a-1,s+2),c>1){const t=document.createElement("button");t.textContent="...",t.disabled=!0,t.classList="dots",e.appendChild(t)}for(let t=c;t<d;t++){const n=document.createElement("button");n.textContent=t+1,n.classList="dot",t===s&&n.classList.add("dot-active"),n.addEventListener("click",(()=>{s=t,u(s),o()})),e.appendChild(n)}if(d<a-1){const t=document.createElement("button");t.textContent="...",t.disabled=!0,t.classList="dots",e.appendChild(t)}if(a>1){const t=document.createElement("button");t.textContent=a,t.classList="dot",s===a-1&&t.classList.add("dot-active"),t.addEventListener("click",(()=>{s=a-1,u(s),o()})),e.appendChild(t)}const r=document.createElement("button");r.textContent="Next >",r.classList="next dot",s===a-1&&(r.disabled=!0),r.addEventListener("click",(()=>{s++,u(s),o()})),e.appendChild(r)}const i=document.getElementById("main-page"),c=document.querySelector(".wraper__weather"),d=document.getElementById("empty"),r=(document.getElementById("pagination"),document.getElementById("searchForm"));let l="",m=0,p=0,h="";async function u(t){d.setAttribute("hidden","");const n=await async function(t){const e=h+`&page=${t}`;console.log(e);try{return await fetch(e,{headers:{"Content-Type":"application/json"}}).then((t=>t.json()))}catch(t){console.error(t)}}(t);console.dir(n.response),0===n.response.docs.length?(Array.from(i.children).forEach((t=>{t!==d&&t!==c&&t.remove()})),console.log(n.response.docs.length),d.removeAttribute("hidden")):Array.from(i.children).forEach((t=>{t!==c&&t!==d&&t.remove()}));const a=n.response.docs.map((t=>{const e=t.headline.main,n=0!==t.multimedia?`https://static01.nyt.com/${t.multimedia[0].url}`:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",{_id:a,section_name:s,abstract:o,pub_date:i,web_url:c}=t,d=null!==localStorage.getItem(`favorite_${a}`);return`\n          <div class="news-card">\n            <img src="${n}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${s}</div>\n              <button class="news-card__favorite-btn ${d?"active_btn":""}" data-news-id="${a}">\n                ${d?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${e}</h2>\n              <p class="news-card__description">${o.length>100?o.substring(0,100)+"...":o}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(i).toLocaleDateString()}</div>\n              <a class="news-card__read-more" href="${c}" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>\n        `}));i.insertAdjacentHTML("beforeend",a.join("")),document.addEventListener("DOMContentLoaded",e),m=n.response.meta.hits,console.log(m),o(m)}r.addEventListener("submit",(t=>{t.preventDefault(),p=0,l=t.target.elements.search.value.trim(),console.log(p,l),h=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${l}&api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn`,u(p)})),i.addEventListener("click",(t=>{null!==t.target.closest(".news-card__favorite-btn")&&function(t){const e=t.target,n=e.dataset.newsId;null!==localStorage.getItem(`favorite_${n}`)?(localStorage.removeItem(`favorite_${n}`),e.textContent="Add to Favorite",e.classList.remove("active")):(localStorage.setItem(`favorite_${n}`,!0),e.textContent="Remove from Favorite",e.classList.add("active"))}(t)})),(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=()=>{const n="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")};e.addEventListener("click",a),n.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))}))})();const v=document.getElementById("category-btn");!async function(){try{await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",{headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{const e=[];for(const n of t.results)e.push(n.display_name);return e})).then((t=>{for(let e=0;e<=5;e++)v.insertAdjacentHTML("beforeend",`<button type="button" class="category_btn">${t[e]}</button>`);v.insertAdjacentHTML("beforeend",'<select name="Others" class="category_btn select_btn">\n            <option value="Others" hidden>Others</option>\n            </select>');const e=document.querySelector(".select_btn");for(let n=6;n<t.length;n++)e.insertAdjacentHTML("beforeend",`<option value="${t[n]}">${t[n]}</option>`)}))}catch(t){console.error(t)}}(),async function(){const t=await async function(){try{return await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn",{headers:{"Content-Type":"application/json"}}).then((t=>t.json()))}catch(t){console.error(t)}}();console.log(t.results);const n=t.results.map((t=>{const e=0!==t.media.length?t.media[0]["media-metadata"][2].url:"https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg",{title:n,abstract:a,published_date:s,url:o,section:i,uri:c}=t,d=null!==localStorage.getItem(`favorite_${c}`);return`<div class="news-card">\n            <img src="${e}" alt="заглушка" />\n            <div class="news-card__info">\n              <div class="news-card__category">${i}</div>\n              <button class="news-card__favorite-btn ${d?"active_btn":""}" data-news-id="${c}">\n                ${d?"Remove from Favorite":"Add to Favorite"}\n              </button>\n              <h2 class="news-card__title">${n}</h2>\n              <p class="news-card__description">${a.length>100?a.substring(0,100)+"...":a}</p>\n              <div class="news-card__date-div">\n              <div class="news-card__date">${new Date(s).toLocaleDateString()}</div>\n              <a class="news-card__read-more" href="${o}" target="_blank">Read more</a>\n              </div>\n            </div>\n          </div>`}));i.insertAdjacentHTML("beforeend",n.join("")),document.addEventListener("DOMContentLoaded",e)}(),e();
//# sourceMappingURL=favorite.925fdd7f.js.map
