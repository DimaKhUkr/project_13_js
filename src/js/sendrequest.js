import { startWeatherApp } from './weather';

const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';

const mainPage = document.getElementById('main-page');
const weather = document.querySelector(`.wraper__weather`);

// let photoUrl = '';

// Запрос на бекенд по полю поиска
async function articleSearch(pageNumber, query) {
  //   e.preventDefault();
  //   const query = e.value;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${pageNumber}&q=${query}&api-key=${API_KEY}`;
  try {
    return await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(resp => resp.json());
    //   .then(res => console.log(res));
  } catch (error) {
    console.error(error);
  }
}

// Запрос на бекенд по популярным новостям при первой загрузке страницы
async function fetchMostPopularNews() {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`;
  try {
    return await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(resp => resp.json());
    // .then(data => console.log(data))
  } catch (error) {
    console.error(error);
  }
}
// results.title - название статьи
// results.abstract - начало статьи
// results.published_date - дата статьи
// results.url - ссылка на статью
// results.section - категория
// results.id - идентификатор статьи
// results.media[0].media-metadata[2].url - ссылка на фото статьи

// Рендеринг новостей по популярным новостям при первой загрузке страницы
export async function createPopularNews() {
  // e.preventDefault();
  const data = await fetchMostPopularNews();
  console.log(data.results);
  const newsCards = data.results.map(news => {
    // проверка на наличие фото в новости
    const photoUrl =
      news.media.length !== 0
        ? news.media[0]['media-metadata'][2].url
        : 'https://via.placeholder.com/400';
    const { title, abstract, published_date, url, section, id } = news;
    const isFavorite = localStorage.getItem(`favorite_${id}`) !== null;
    return `<div class="news-card">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active' : ''
              }" data-news-id="${id}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
              <h2 class="news-card__title">${title}</h2>
              <p class="news-card__description">${
                abstract.length > 100
                  ? abstract.substring(0, 100) + '...'
                  : abstract
              }</p>
              <div class="news-card__date-div">
              <div class="news-card__date">${new Date(
                published_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`;
  });
  mainPage.insertAdjacentHTML('beforeend', newsCards.join(''));
  document.addEventListener('DOMContentLoaded', startWeatherApp);
}

// pageNumber = номер страницы для пагинации.
// Для тестов присваиваем руками номер, дальше в пагинации юзаем.
const pageNumber = 0;

// Рендеринг новостей по полю поиска
export async function createMainPage(e) {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();
  console.log(query);
  // Очищаем страницу от предыдущих новостей оставляя блок с погодой
  Array.from(mainPage.children).forEach(child => {
    if (child !== weather) child.remove();
  });
  const data = await articleSearch(pageNumber, query);
  // console.log(data.response.meta.hits);
  console.dir(data.response);
  if (data.response.docs.length === 0) {
    console.log(data.response.docs.length);
    mainPage.innerHTML = `<div class="news-card">
            <img src="${photoUrl}" alt="заглушка" />
            </div>`;
  }
  const newsCards = data.response.docs.map(news => {
    const title = news.headline.main;
    const photoUrl =
      news.multimedia !== 0
        ? `https://static01.nyt.com/${news.multimedia[0].url}`
        : 'https://via.placeholder.com/400';
    const { _id, section_name, abstract, pub_date, web_url } = news;
    const isFavorite = localStorage.getItem(`favorite_${_id}`) !== null;
    return `
          <div class="news-card">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section_name}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active' : ''
              }" data-news-id="${_id}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
              <h2 class="news-card__title">${title}</h2>
              <p class="news-card__description">${
                abstract.length > 100
                  ? abstract.substring(0, 100) + '...'
                  : abstract
              }</p>
              <div class="news-card__date-div">
              <div class="news-card__date">${new Date(
                pub_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${web_url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>
        `;
  });
  mainPage.insertAdjacentHTML('beforeend', newsCards.join(''));
  // mainPage.innerHTML = newsCards.join('');
  // const weatherCard = document.createElement('div');
  // weatherCard.classList.add('wraper__weather');
  // // mainPage.appendChild(weatherCard);
  // weatherCard.innerHTML = `<div id="weather" class="weather"></div>`;
  // // Проверка размера окна для размещения карточки погоды
  // let position = 0;
  // console.log(window.innerWidth);
  // if (window.innerWidth > 800 && window.innerWidth < 1206) {
  //   // weatherCard.style.width = '100%';
  //   position = 1;
  // } else if (window.innerWidth > 1206) {
  //   position = 2;
  //   // weatherCard.style.width = '';
  // }
  // console.log(position);
  // const insertBeforeElement = mainPage.children[`${position}`];
  // mainPage.insertBefore(weatherCard, insertBeforeElement);
  document.addEventListener('DOMContentLoaded', startWeatherApp);
  e.target.reset();
}

// docs.headline.main - название статьи
// docs.abstract - начало статьи
// docs.pub_date - дата статьи
// docs.web_url - ссылка на статью
// docs.section_name - категория
// docs._id - идентификатор статьи

// Добавление/удаление новости из избранного
function toggleFavorite(event) {
  const button = event.target;
  const newsId = button.dataset.newsId;

  if (localStorage.getItem(`favorite_${newsId}`) !== null) {
    localStorage.removeItem(`favorite_${newsId}`);
    button.textContent = 'Add to Favorite';
    button.classList.remove('active');
  } else {
    localStorage.setItem(`favorite_${newsId}`, true);
    button.textContent = 'Remove from Favorite';
    button.classList.add('active');
  }
}

mainPage.addEventListener('click', event => {
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavorite(event);
  }
});
