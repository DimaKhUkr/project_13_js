import { startWeatherApp } from './weather';
import { updatePagination } from './pagination'

const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';

const mainPage = document.getElementById('main-page');
const weather = document.querySelector(`.wraper__weather`);
const empty = document.getElementById('empty');
const paginationContainer = document.getElementById('pagination');

const inputSearch = document.getElementById('searchForm');

// let photoEmpty = './src/images/empty-page.jpg  ';
// currentPage = номер страницы для пагинации.
// Для тестов присваиваем руками номер, дальше в пагинации юзаем.
let query = '';
let totalItems = 0;
let currentPage = 0;
let url = "";

inputSearch.addEventListener('submit', e => {
  e.preventDefault();
  currentPage = 0;
  query = e.target.elements.search.value.trim();
  console.log(currentPage, query);
  url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
  createMainPage(currentPage);
});

// Запрос на бекенд по полю поиска
async function articleSearch(currentPage) {
  //   e.preventDefault();
  //   const query = e.value;
  url = url + `&page=${currentPage}`;
  console.log(url);
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
        : '/images/asia.png';
    const { title, abstract, published_date, url, section, uri } = news;
    const isFavorite = localStorage.getItem(`favorite_${uri}`) !== null;
    return `<div class="news-card">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active' : ''
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
              <a class="news-card__read-more" href="${url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>`;
  });
  mainPage.insertAdjacentHTML('beforeend', newsCards.join(''));
  document.addEventListener('DOMContentLoaded', startWeatherApp);
}

// Рендеринг новостей по полю поиска
export async function createMainPage(pageNumber) {
  // e.preventDefault();
  empty.setAttribute('hidden', '');
  // const query = e.target.elements.search.value.trim();
  // console.log(query);
  const data = await articleSearch(pageNumber);
  // console.log(data.response.meta.hits);
  console.dir(data.response);
  if (data.response.docs.length === 0) {
    // mainPage.replaceChildren();
    // Очищаем страницу от предыдущих новостей если новых нет
    Array.from(mainPage.children).forEach(child => {
      if (child !== empty && child !== weather) child.remove();
    });
    console.log(data.response.docs.length);
    empty.removeAttribute('hidden');
  } else {
    // Очищаем страницу от предыдущих новостей оставляя блок с погодой
    Array.from(mainPage.children).forEach(child => {
      if (child !== weather && child !== empty) child.remove();
    });
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
  document.addEventListener('DOMContentLoaded', startWeatherApp);
  // e.target.reset();
  totalItems = data.response.meta.hits;
  console.log(totalItems);
  updatePagination(totalItems);
}

// docs.headline.main - название статьи
// docs.abstract - начало статьи
// docs.pub_date - дата статьи
// docs.web_url - ссылка на статью
// docs.section_name - категория
// docs._id - идентификатор статьи

// function initPagination(totalHits) {
//   paginationContainer.innerHTML = '';
//   totalPages = Math.ceil(totalHits / 10);
//   console.log(totalPages);
//   for (let i = 1; i <= 100; i++) {
//     paginationContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button type="button" class="category_btn">${i}</button>`
//     );
//   }
// }
// paginationContainer.addEventListener('click', event => {
//   event.preventDefault();
//   pageNumber = Number(event.target.textContent);
//   console.log(pageNumber, query);

//   createMainPage(pageNumber, query);
// });

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
