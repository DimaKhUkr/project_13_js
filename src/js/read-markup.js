// Для кнопок read more та favorite
import { toggleFavoriteNews, isNewsInFavorites } from './local-storage';
const readMain = document.querySelector('.read');

readMain.addEventListener('click', event => {
  console.log('click');
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavoriteNews(event);
  }
});

// Задаємо мінімальну висоту сторінки
const windowHeight = window.innerHeight;
const headerHeight = document.querySelector('header').offsetHeight;
const footerHeight = document.querySelector('footer').offsetHeight;
const mainHeight = document.querySelector('.read-container').offsetHeight;

const main = document.querySelector('.read-container');

const totalHeight = headerHeight + mainHeight + footerHeight;

if (totalHeight < windowHeight) {
  // розраховуємо різницю між висотою вьюпорта і висотою сторінки
  const diff = windowHeight - totalHeight;
  // робимо мінімальну висоту сторінки рівною висоті вьюпорта
  main.style.minHeight = main.offsetHeight + diff + 'px';
}

isReadArticles();

function isReadArticles() {
  // регулярний вираз для перевірки формату ключа
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  // перевіряємо наявність ключа з потрібним форматом
  const key = Object.keys(localStorage).find(k => regex.test(k));
  if (key) {
    // якщо ключ знайдено, викликаємо функцію
    readMarkup();
  }
}

// Розмітка для сторінки, якщо є записи в локальному сховищі
function readMarkup() {
  // отримуємо всі ключі з локального сховища
  const keys = Object.keys(localStorage);

  // створюємо об'єкт для зберігання списку статей за датами
  const articlesByDate = {};

  // перебираємо всі ключі з локального сховища
  for (const key of keys) {
    // перевіряємо, чи є ключ датою у форматі 02/03/2023
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(key)) {
      // якщо ключ є датою, отримуємо список статей для цієї дати
      const articles = JSON.parse(localStorage.getItem(key));
      // додаємо цей список статей до списку за датою
      articlesByDate[key] = articles;
    }
  }
  // створюємо HTML-розмітку для списку статей за датами
  let markup = '';
  for (const key of Object.keys(articlesByDate)) {
    // додаємо заголовок з датою
    markup += `<li class="read-item">
      <div class="read-title">
        <h2 class="read-date">${key}</h2>
        <div class="read-arrow"></div>
      </div>
      <ul class="read-gallery">
    `;
    // створюємо список статей
    for (const article of articlesByDate[key]) {
      // додаємо картку статті
      const isFavorite = isNewsInFavorites(article.favoritId);
      markup += `<li>
          <div class="news-card">
            <img src=${article.img} alt="Article illustration" />
            <div class="news-card__info">
              <div class="news-card__category">${article.category}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
              }" data-news-id="${article.favoritId}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
         <h2 class="news-card__title">${article.title}</h2>
         <p class="news-card__description">
        ${article.description}
        </p>
        <div class="news-card__date-div">
          <div class="news-card__date">
          ${article.dateRead}
       </div>
         <a class="news-card__read-more" href="${article.url}" target="_blank"
         >Read more</a
        >
         </div>
        </div>
        </div>
        </li>`;
    }
    markup += '</ul>';
  }
  // вставляємо HTML-розмітку в елемент
  readMain.innerHTML = markup;
}
