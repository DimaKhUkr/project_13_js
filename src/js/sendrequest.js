import { startWeatherApp } from './weather';
import { updatePagination } from './pagination';
import { onReadCard } from './alredy-read';

const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';

const mainPage = document.getElementById('main-page');
const weather = document.querySelector(`.wraper__weather`);
const empty = document.getElementById('empty');
const inputSearch = document.getElementById('searchForm');

let query = '';
let totalItems = 0;
let currentPage = 0;
// let url = '';
let arr = [];
let dateCal;
let urlFetch = '';
let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${API_KEY}`;

inputSearch.addEventListener('submit', e => {
  e.preventDefault();
  currentPage = 0;
  query = e.target.elements.search.value.trim();
  console.log(currentPage, query);
  url = url + `&q=${query}`;
  createMainPage(currentPage);
});

// Запрос на бекенд по полю поиска
async function articleSearch(currentPage, dateCal) {
  if (!dateCal) {
    urlFetch = url + `&page=${currentPage}`;
  } else {
    urlFetch = url + `&page=${currentPage}` + `&fq=pub_date:(${dateCal})`;
  }
  console.log(urlFetch);
  try {
    return await fetch(urlFetch, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(resp => resp.json());
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
  } catch (error) {
    console.error(error);
  }
}

// Рендеринг новостей по популярным новостям при первой загрузке страницы
export async function createPopularNews() {
  weather.removeAttribute('hidden');
  const data = await fetchMostPopularNews();
  console.log(data.results);
  const newsCards = data.results.map(news => {
    // проверка на наличие фото в новости
    const photoUrl =
      news.media.length !== 0
        ? news.media[0]['media-metadata'][2].url
        : 'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg';
    const { id, title, abstract, published_date, url, section, uri } = news;
    const isFavorite = localStorage.getItem(`favorite_${uri}`) !== null;
    return `<div class="news-card" id="${id}">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
              }" data-news-id="${uri}">
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
              <button class="btn-read-more news-card__read-more">
              <a href="${url}" target="_blank">Read more</a>
              </button>
              </div>
            </div>
          </div>`;
  });
  mainPage.insertAdjacentHTML('beforeend', newsCards.join(''));
  document.addEventListener('DOMContentLoaded', startWeatherApp);
}

// Рендеринг новостей по полю поиска
export async function createMainPage(pageNumber, dateCal) {
  empty.setAttribute('hidden', '');
  // const query = e.target.elements.search.value.trim();
  // console.log(query);
  const data = await articleSearch(pageNumber, dateCal);
  console.dir(data.response);
  if (data.response.docs.length === 0) {
    // Очищаем страницу от предыдущих новостей если новых нет
    Array.from(mainPage.children).forEach(child => {
      if (child !== empty && child !== weather) child.remove();
    });
    console.log(data.response.docs.length);
    empty.removeAttribute('hidden');
    weather.setAttribute('hidden', '');
    inputSearch.elements.search.value = '';
  } else {
    // Очищаем страницу от предыдущих новостей оставляя блок с погодой
    Array.from(mainPage.children).forEach(child => {
      if (child !== weather && child !== empty) child.remove();
    });
    weather.removeAttribute('hidden');
  }
  const newsCards = data.response.docs.map(news => {
    const title = news.headline.main;
    const photoUrl =
      news.multimedia.length !== 0
        ? `https://static01.nyt.com/${news.multimedia[0].url}`
        : 'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg';
    const { _id, section_name, abstract, pub_date, web_url } = news;
    const isFavorite = localStorage.getItem(`favorite_${_id}`) !== null;
    return `
          <div class="news-card" id="${_id}">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section_name}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
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
              <button class="btn-read-more news-card__read-more">
              <ahref="${web_url}" target="_blank">Read more</ahref=>
              </button>
              </div>
            </div>
          </div>
        `;
  });
  mainPage.insertAdjacentHTML('beforeend', newsCards.join(''));
  document.addEventListener('DOMContentLoaded', startWeatherApp);
  // e.target.reset();
  totalItems = data.response.meta.hits;
  console.log(totalItems);
  inputSearch.elements.search.value = '';
  if (data.response.docs.length !== 0) updatePagination(totalItems);
}

// Добавление/удаление новости из избранного
function toggleFavorite(event) {
  const button = event.target;
  const newsId = button.dataset.newsId;

  if (localStorage.getItem(`favorite_${newsId}`) !== null) {
    localStorage.removeItem(`favorite_${newsId}`);
    button.textContent = 'Add to Favorite';
    button.classList.remove('active_btn');
  } else {
    localStorage.setItem(`favorite_${newsId}`, true);
    button.textContent = 'Remove from Favorite';
    button.classList.add('active_btn');
  }
}

mainPage.addEventListener('click', event => {
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavorite(event);
  }
});

mainPage.addEventListener('click', onReadCard);
