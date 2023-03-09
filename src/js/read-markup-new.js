//===============Для кнопок read more та favorite================
import { toggleFavoriteNews, isNewsInFavorites } from './local-storage';
const readMain = document.querySelector('.read');
const mainReadContainer = document.querySelector('.read-container');

mainReadContainer.addEventListener('click', event => {
  console.log('click');
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavoriteNews(event);
  }
});

//======================= Задаємо мінімальну висоту сторінки =============
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

// перевіряємо чи є прочитані статті
function isReadArticles() {
  if (localStorage.getItem('read_news')) {
    readMarkup();
  }
}

// ====================var8====================
function readMarkup() {
main.innerHTML = '';
const news = JSON.parse(localStorage.getItem("read_news"));

// створюємо об'єкт, де властивості - це дата, а значення - це масив статей
const articlesByDate = {};
news.forEach(article => {
const date = new Date(Number(article.dateRead));
const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;

// створюємо масив статей для даної дати, якщо його ще немає
if (!articlesByDate[formattedDate]) {
articlesByDate[formattedDate] = [];
}

// перевіряємо, чи є стаття з таким заголовком вже доданою раніше
const existingArticle = articlesByDate[formattedDate].find(a => a.title === article.title);

if (!existingArticle) {
// якщо статті з таким заголовком ще не було, додаємо її до масиву статей даної дати
articlesByDate[formattedDate].unshift(article);
} else {
// якщо стаття з таким заголовком вже є, то порівнюємо дати і залишаємо тільки більш пізню
const existingArticleDate = new Date(Number(existingArticle.dateRead));
if (date > existingArticleDate) {
articlesByDate[formattedDate] = articlesByDate[formattedDate].filter(a => a.title !== article.title);
articlesByDate[formattedDate].unshift(article);
}
}
});

// сортуємо об'єкт за датою в зворотньому порядку
const sortedDates = Object.keys(articlesByDate).sort((a, b) => new Date(b) - new Date(a));

// створюємо елементи списку і додаємо їх до сторінки
const list = document.createElement("ul");
list.classList.add("read");
const isFavorite = isNewsInFavorites(article.favoritId);
sortedDates.forEach(date => {
const articlesList = articlesByDate[date]
.sort((a, b) => new Date(b.dateRead) - new Date(a.dateRead))
.map(article => `<li>
          <div class="news-card">
            <img src=${article.img} alt="Article illustration" />
            <div class="news-card__info">
              <div class="news-card__category">${article.category}</div>
          /* <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
              }" data-news-id="${article.favoritId}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>         */
         <h2 class="news-card__title">${article.title}</h2>
         <p class="news-card__description">
        ${article.description}
        </p>
        <div class="news-card__date-div">
          <div class="news-card__date">
          ${article.publishDate}
       </div>
         <a class="news-card__read-more" href="${article.readMore}" target="blank"
         >Read more</a
        >
         </div>
        </div>
        </div>
        </li>` ).join('');
    
const listItem = `<li class="read-item">
 <div class="read-title">
<h2 class="read-date">${date}</h2>
<div class="read-arrow"></div>
</div>
<ul class="read-gallery">${articlesList}</ul> </li> ` ;

list.insertAdjacentHTML('beforeend', listItem);
});

  mainReadContainer.appendChild(list);
};