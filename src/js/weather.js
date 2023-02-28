"use strict";
// second req

export const weather = document.getElementById(`weather`);
export const APP_ID = 'f5984abfd7be02d0f0f71396692dd7ba';
export const defaultCity = 'Kyiv'


// ---------------   Ищем геопозицию  ---------------  //

// Проверочка наличия формы
// if (weather) {
//   startWeatherApp();
// }


export function startWeatherApp() {
      weather.innerHTML = `<div class="weather__loading">Wait a second plz...</div>`;
      // weather.innerHTML = `<div class="weather__loading"><img src="./src/images/1492.gif" alt="Loading..."></div>`;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          // вызываем функцию для получения прогноза погоды
          getWeatherForOneDay(lat, lon);
        },
        (error) => {
          // обрабатываем ошибку получения геолокации
          console.error(error);
        }
      );
    }

// ---------------   Функция для получения прогноза погоды на 1 день  ---------------  //

export async function getWeatherForOneDay(lat, lon) {
  // Вставляем условие, что если не работает геолокация на Браузере, то мы определяем погоду для Киева //
  let weatherForToday;
  if (lat && lon) {
    weatherForToday = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
  } else {
    weatherForToday = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${defaultCity}&appid=${APP_ID}`;
  }
  // Вставляем гифку пока ожидаем ответ от АПИ
  // weather.innerHTML = `<div class="weather__loading"><img src="loading.gif" alt="Loading..."></div>`;
  try {
    const response = await fetch(weatherForToday);
    const responseResult = await response.json();
    // Если мы получили респонс, то запускаем функцию работы с ДАННЫМИ dataForOneDay
    if (response.ok) {
          dataForOneDay(responseResult);
        } else {
          weather.innerHTML = responseResult.message;
        }
  } catch (error) {
    console.error(error);
  }
}

// ---------------   Функция обработки data API погоды на 1 день  ---------------  //

export function dataForOneDay(data) {
    //  Обрабатывем и выводим данные
    const lat = data.coord.lat;
    const lon = data.coord.lon;
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
    // !!!!!!! НУЖНО РАЗОБРАТЬСЯ С СВГ и вставить 
              // <img src="Vector.svg" alt="checkpoint">
        let template = `<div class="header__weather">
          <div class="temp__info">${temp}°</div>
          <div class="status__location">
            <div class="status">
              <p class="status__name">${weatherStatus}</p>
            </div>
            <div class="location">
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
        const weatherForweek = document.getElementById(`weatherForweek`);
        weatherForweek.addEventListener(`click`, () => getWeatherForFiveDays(lat, lon));
    }


// ---------------   Функция для получения прогноза погоды на 5 дней  ---------------  //


export async function getWeatherForFiveDays(lat, lon) {
    const weatherForFiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
    try {
      const response = await fetch(weatherForFiveDay);
      const responseResultWeek = await response.json();
      if (response.ok) {
        dataForWeek(responseResultWeek);
      } else {
        weather.innerHTML = responseResultWeek.message;
      }
    } catch (error) {
      console.error(error);
    }
  }

// ---------------   Функция обработки data API погоды на 1 день  ---------------  //

export function dataForWeek(data) {
  const weatherData = [];
   // Парсим данные о погоде на 7 дней
   let currentDate = new Date(data.list[0].dt_txt).getDate(); // Проверяем дату
   let dayOfWeek = new Date(data.list[0].dt_txt).toLocaleDateString("en-US", { weekday: "short" }); // Получаем день недели
   let tempMin = data.list[0].main.temp;
   let tempMax = data.list[0].main.temp;
   let iconCode = data.list[0].weather[0].icon;
   let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
   for (let i = 1; i < data.list.length; i++) {
     const dt = new Date(data.list[i].dt_txt);
     const date = dt.getDate();
     if (date !== currentDate) { // Считаем данные за текущий день и добавляем в массив
       const month = dt.toLocaleDateString("en-US", { month: "short" });
       weatherData.push({
         dayOfWeek,
         dayOfMonth: currentDate,
         month,
         tempMin,
         tempMax,
         iconUrl,
       });
       // Обновляем данные для следующего дня
       currentDate = date;
       dayOfWeek = dt.toLocaleDateString("en-US", { weekday: "short" });
       tempMin = data.list[i].main.temp;
       tempMax = data.list[i].main.temp;
       iconCode = data.list[i].weather[0].icon;
       iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
     } else { 
      // Обновляем данные для текущего дня
       if (data.list[i].main.temp < tempMin) {
         tempMin = data.list[i].main.temp;
       }
       if (data.list[i].main.temp > tempMax) {
         tempMax = data.list[i].main.temp;
       }
     }
   }

  //  Разметка HTML!!!
    weather.innerHTML = '';
  //  Кнопка BACK
    const backBtn = document.createElement("button");
    weather.appendChild(backBtn).classList.add("backBtn");
    backBtn.innerHTML = `Back`
    backBtn.addEventListener(`click`, () => {
      window.location.reload();
    });

    weatherData.forEach((day) => {
      const { dayOfWeek, dayOfMonth, month, tempMin, tempMax, iconUrl } = day;

      const weatherInfo = `
        <div class="day__card">
          <div class="dayOfMonth">${dayOfMonth}</div>
          <div class="dayOfWeek">${dayOfWeek}</div>
        </div>
        <div class="iconUrl">
            <img class="weather__picture__5days" src="${iconUrl}" alt="weather4days">
          </div>
        <div class="icon__status">
          <div class="tempMax">Max temp:${Math.round(tempMax)}°</div>
          <div class="tempMin">Min temp:${Math.round(tempMin)}°</div>
        </div>
      `;
      const dayDiv = document.createElement("div");
      dayDiv.innerHTML = weatherInfo;
      weather.appendChild(dayDiv).classList.add("forecast__wrapper");
});
}