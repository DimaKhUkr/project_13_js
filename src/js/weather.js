"use strict";

const form = document.getElementById(`search-form`);
const weather = document.getElementById(`weather`);
const APP_ID = 'f5984abfd7be02d0f0f71396692dd7ba';
const defaultCity = 'Kyiv';

async function loadWeather(lat, lon) {
  // Вставляем гифку пока ожидаем ответ от АПИ
  weather.innerHTML = `
    <div class="weather__loading">
      <img src="./" alt="Loading...">
    </div>
  `;
  let serverApi;
  if (lat && lon) {
    serverApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${APP_ID}`;
  } else {
    serverApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${defaultCity}&appid=${APP_ID}`;
  }
  const response = await fetch(serverApi, {
    method: `GET`,
  });
  const responseResult = await response.json();
  if (response.ok) {
    getWeather(responseResult);
  } else {
    weather.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  //  Обрабатывем и выводим данные
  console.log(data);
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;
  const currentDayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'short' });
  const currentDay = new Date().toLocaleDateString('en-US', { day: 'numeric' }).toUpperCase();
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });
  const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' }).toUpperCase();

  // Разметка HTML
  let template = `<div class="header__weather">
    <div class="temp__info">${temp}°</div>
    <div class="status__location">
      <div class="status">
        <p class="status__name">${weatherStatus}</p>
      </div>
      <div class="location">
        <img src="./svg/vector.svg" alt="checkpoint">
        <p class="location__name">${location}</p>
      </div>
    </div>
  </div>
  <div class="icon__picture">
    <img class="weather__picture" src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Clouds">
  </div>
  <div class="date__wrapper">
    <div class="day">${currentDayOfWeek}</div>
    <div class="date">${currentDay} ${currentMonth} ${currentYear}</div>
  </div>
  <button class="weatherForweek" id="weatherForweek">Weather for 5 days</button>
  `;
  weather.innerHTML = template;
//   const weatherForweek = document.getElementById(`weatherForweek`);
//   weatherForweek.addEventListener(`click`, getWeatherForWeek);
}

// Получение геолокации пользователя
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        loadWeather(lat, lon);
      },
      () => {
        loadWeather();
      }
    );
  } else {
    loadWeather();
  }
}

// Проверочка
if (weather) {
  getLocation();
}











// КОД НЕ ТРОГАЙТЕ, завтра буду поправлять 


// ПОГОДА НА 5 дней

// function getWeatherForWeek() {
//   let lat, lon;
//   // получаем текущую геолокацию пользователя
//   navigator.geolocation.getCurrentPosition(
//   (position) => {
//   lat = position.coords.latitude;
//   lon = position.coords.longitude;
//   getWeatherData(APP_ID, lat, lon);
//   },
//   // Если геолокация недоступна, используем координаты Киева
//   () => {
//   lat = 50.4501;
//   lon = 30.5234;
//   getWeatherData(APP_ID, lat, lon);
//   }
//   );
  
//   function getWeatherData(APP_ID, lat, lon) {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
//   fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//   const weatherData = [];
//    // Парсим данные о погоде на 7 дней
//    let currentDate = new Date(data.list[0].dt_txt).getDate(); // Проверяем дату
//    let dayOfWeek = new Date(data.list[0].dt_txt).toLocaleDateString("en-US", { weekday: "short" }); // Получаем день недели
//    let tempMin = data.list[0].main.temp;
//    let tempMax = data.list[0].main.temp;
//    let iconCode = data.list[0].weather[0].icon;
//    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
//    for (let i = 1; i < data.list.length; i++) {
//      const dt = new Date(data.list[i].dt_txt);
//      const date = dt.getDate();
//      if (date !== currentDate) { // Считаем данные за текущий день и добавляем в массив
//        const month = dt.toLocaleDateString("en-US", { month: "short" });
//        weatherData.push({
//          dayOfWeek,
//          dayOfMonth: currentDate,
//          month,
//          tempMin,
//          tempMax,
//          iconUrl,
//        });
//        // Обновляем данные для следующего дня
//        currentDate = date;
//        dayOfWeek = dt.toLocaleDateString("en-US", { weekday: "short" });
//        tempMin = data.list[i].main.temp;
//        tempMax = data.list[i].main.temp;
//        iconCode = data.list[i].weather[0].icon;
//        iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
//      } else { 
//       // Обновляем данные для текущего дня
//        if (data.list[i].main.temp < tempMin) {
//          tempMin = data.list[i].main.temp;
//        }
//        if (data.list[i].main.temp > tempMax) {
//          tempMax = data.list[i].main.temp;
//        }
//      }
//    }

//    // Выводим данные в нужном формате
//     weather.innerHTML = '';
//   //  Кнопка BACK
//     const backBtn = document.createElement("button");
//     weather.appendChild(backBtn).classList.add("backBtn");
//     backBtn.innerHTML = `Back`
//     backBtn.addEventListener(`click`, () => {
//       loadWeather(lat, lon);
//     });

//     weatherData.forEach((day) => {
//       const { dayOfWeek, dayOfMonth, month, tempMin, tempMax, iconUrl } = day;

//       const weatherInfo = `
//         <div class="day__card">
//           <div class="dayOfMonth">${dayOfMonth}</div>
//           <div class="dayOfWeek">${dayOfWeek}</div>
//         </div>
//         <div class="iconUrl">
//             <img class="weather__picture__5days" src="${iconUrl}" alt="weather4days">
//           </div>
//         <div class="icon__status">
//           <div class="tempMax">Max temp:${Math.round(tempMax)}°</div>
//           <div class="tempMin">Min temp:${Math.round(tempMin)}°</div>
//         </div>
//       `;
//       const dayDiv = document.createElement("div");
//       dayDiv.innerHTML = weatherInfo;
//       weather.appendChild(dayDiv).classList.add("forecast__wrapper");
// });
//  })
//  .catch((error) => console.error(error));
// }}