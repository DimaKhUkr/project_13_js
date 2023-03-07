import { loadFromStorage, toggleFavoriteNews } from './local-storage';
import {onReadCard} from './alredy-read';

const STOR_KEY_FAV = 'favorites';

const placeForFavNews = document.getElementById('favorite-articles');

createFavoritePage();

placeForFavNews.addEventListener('click', event => {
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavoriteNews(event);
    createFavoritePage();
  }
});

// ----- функція створення сторінки обраних новин
function createFavoritePage() {
  let markup = '';

  placeForFavNews.innerHTML = '';

  const currentData = loadFromStorage(STOR_KEY_FAV);
  if (currentData !== undefined) { 
  currentData.forEach(news => (markup = markup + createFavoriteNewsCard(news)));
  }
  
  if (markup === '' || currentData === undefined) markup = noNewsInFavorite();

  placeForFavNews.insertAdjacentHTML('beforeend', markup);
}

// ----- функція картинки коли нема вибраних новин
function noNewsInFavorite() {
  return `
  <div class="favorite-news__none">
    <p class="favorite-news__none__title">We haven't found news on this page</p>
  </div>`;
}

// ----- функція створення картки новини
function createFavoriteNewsCard(news) {

  const { _id, section_name, abstract, pub_date, web_url, photoUrl, title } =
    news;
  return `
            <div class="news-card" id="${_id}">
              <img src="${photoUrl}" alt="заглушка" />
              <div class="news-card__info">
                <div class="news-card__category">${section_name}</div>
                <button class="news-card__favorite-btn active_btn"
                data-news-id="${_id}">
                  'Remove from Favorite'
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
                <a href="${web_url}" target="_blank">Read more</a>
                </button>
                </div>
              </div>
            </div>
          `;
}

placeForFavNews.addEventListener('click', onReadCard);