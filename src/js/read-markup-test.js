//===============Для кнопок read more та favorite================
import { toggleFavoriteNews, isNewsInFavorites } from './local-storage';
const readMain = document.querySelector('.read');

// readMain.addEventListener('click', event => {
//   console.log('click');
//   const button = event.target.closest('.news-card__favorite-btn');
//   if (button !== null) {
//     toggleFavoriteNews(event);
//   }
// });

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

function isReadArticles() {
  if (localStorage.getItem('read_news')) {
    readMarkup();
  }
}

// // ======== вар 1 ==============================
// // Отримуємо значення ключа з локального сховища
// const readNews = JSON.parse(localStorage.getItem("read_news"));

// // Сортуємо статті по властивості dateRead в порядку спадання
// readNews.sort((a, b) => b.dateRead - a.dateRead);

// // Створюємо об'єкт для збереження статей за датою
// const newsByDate = {};

// // Проходимось по всіх статтях та розподіляємо їх за датами
// readNews.forEach(article => {
//   const date = new Date(Number(article.dateRead));
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();
//   const formattedDate = `${day}/${month}/${year}`;

//   if (!newsByDate[formattedDate]) {
//     newsByDate[formattedDate] = [article];
//   } else {
//     newsByDate[formattedDate].push(article);
//   }
// });

// // Виводимо статті по датам з відповідними заголовками
// for (const [date, articles] of Object.entries(newsByDate)) {
//   const header = document.createElement("h2");
//   header.textContent = date;
//   document.body.appendChild(header);

//   articles.forEach(article => {
//     const articleDiv = document.createElement("div");

//     const title = document.createElement("h3");
//     title.textContent = article.title;
//     articleDiv.appendChild(title);

//     const description = document.createElement("p");
//     description.textContent = article.description;
//     articleDiv.appendChild(description);

//     const readMoreLink = document.createElement("a");
//     readMoreLink.href = article.readMore;
//     readMoreLink.textContent = "Read more";
//     articleDiv.appendChild(readMoreLink);

//     readMain.appendChild(articleDiv);
//   });
// }


// // =============== вар 2 ===========================
// const readNews = JSON.parse(localStorage.getItem('read_news'));

// // Сортуємо масив за властивістю dateRead
// readNews.sort((a, b) => b.dateRead - a.dateRead);

// // Створюємо список ul
// const ul = document.createElement('ul');

// // Проходимося по кожному об'єкту і додаємо елемент li з заголовком статті та div зі списком прочитаних статей
// for (const article of readNews) {
//   const li = document.createElement('li');
//   const title = document.createElement('h2');
//   const date = new Date(parseInt(article.dateRead)).toLocaleDateString('en-GB'); // Форматуємо дату у форматі дд/мм/рррр
//   title.textContent = `${date}: ${article.title}`;
//   const div = document.createElement('div');
//   const p = document.createElement('p');
//   p.textContent = 'Read articles:';
//   div.appendChild(p);
//   for (const readArticle of readNews.filter(a => a.dateRead === article.dateRead)) {
//     const a = document.createElement('a');
//     a.href = readArticle.readMore;
//     a.textContent = readArticle.title;
//     div.appendChild(a);
//   }
//   li.appendChild(title);
//   li.appendChild(div);
//   ul.appendChild(li);
// }

// // Додаємо список на сторінку
// readMain.appendChild(ul);

// // ===================== 3 вар ==================
// const readNews = JSON.parse(localStorage.getItem('read_news'));

// // Створюємо об'єкт, щоб зберегти список статей з однаковим заголовком
// const articlesByTitle = {};

// // Проходимося по кожній статті та додаємо її до відповідного масиву в об'єкті
// for (const article of readNews) {
// if (!articlesByTitle[article.title]) {
// articlesByTitle[article.title] = [article];
// } else {
// articlesByTitle[article.title].push(article);
// }
// }

// // Створюємо список ul
// const ul = document.createElement('ul');

// // Проходимося по кожному масиву статей з однаковим заголовком та додаємо елемент li з заголовком статті та div зі списком прочитаних статей
// for (const articles of Object.values(articlesByTitle)) {
// const li = document.createElement('li');
// const title = document.createElement('h2');
// const date = new Date(parseInt(articles[0].dateRead)).toLocaleDateString('en-GB'); // Форматуємо дату у форматі дд/мм/рррр
// title.textContent = `${date}: ${articles[0].title}`;
// const div = document.createElement('div');
// const p = document.createElement('p');
// p.textContent = 'Read articles:';
// div.appendChild(p);
// for (const article of articles) {
// const a = document.createElement('a');
// a.href = article.readMore;
// a.textContent = article.title;
// div.appendChild(a);
// }
// li.appendChild(title);
// li.appendChild(div);
// ul.appendChild(li);
// }

// // Додаємо список на сторінку
// readMain.appendChild(ul);


// // ============ вар 4 ==============================
// const readNews = JSON.parse(localStorage.getItem('read_news'));

// // Створюємо об'єкт для зберігання статей за датою
// const articlesByDate = {};

// // Групуємо статті за датою
// for (const article of readNews) {
//   const date = new Date(parseInt(article.dateRead)).toLocaleDateString('en-GB');
//   if (!articlesByDate[date]) {
//     articlesByDate[date] = [article];
//   } else {
//     articlesByDate[date].push(article);
//   }
// }

// // Створюємо список ul
// const ul = document.createElement('ul');

// // Проходимося по кожній даті і створюємо відповідні елементи списку
// for (const date in articlesByDate) {
//   const li = document.createElement('li');
//   const title = document.createElement('h2');
//   title.textContent = date;
//   li.appendChild(title);

//   const articles = articlesByDate[date];

//   // Сортуємо статті за спаданням за датою
//   articles.sort((a, b) => b.dateRead - a.dateRead);

//   const div = document.createElement('div');
//   const p = document.createElement('p');
//   p.textContent = 'Read articles:';
//   div.appendChild(p);

//   // Додаємо посилання на прочитані статті
//   for (const article of articles) {
//     const a = document.createElement('a');
//     a.href = article.readMore;
//     a.textContent = article.title;
//     div.appendChild(a);
//   }

//   li.appendChild(div);
//   ul.appendChild(li);
// }

// // Додаємо список на сторінку
// readMain.appendChild(ul);

// readMain.insertAdjacentElement


// // ================== вар 5 ========================
// const readNews = JSON.parse(localStorage.getItem('read_news'));

// // Створюємо об'єкт для зберігання статей за датою
// const articlesByDate = {};

// // Групуємо статті за датою
// for (const article of readNews) {
// const date = new Date(parseInt(article.dateRead)).toLocaleDateString('en-GB');
// if (!articlesByDate[date]) {
// articlesByDate[date] = [article];
// } else {
// articlesByDate[date].push(article);
// }
// }

// // Створюємо список ul
// const ul = document.createElement('ul');

// // Проходимося по кожній даті і створюємо відповідні елементи списку
// for (const date in articlesByDate) {
// const articles = articlesByDate[date];

// // Сортуємо статті за спаданням за датою
// articles.sort((a, b) => b.dateRead - a.dateRead);

// let articleLinks = '';
// for (const article of articles) {
// articleLinks += `<a href="${article.readMore}">${article.title}</a>`;
// }

// const li = `<li> <h2>${date}</h2> <div> <p>Read articles:</p> ${articleLinks} </div> </li>` ;

// ul.insertAdjacentHTML('beforeend', li);
// }

// // Додаємо список на сторінку
// readMain.insertAdjacentElement('beforeend', ul);

// // ============ вар 6 ======================
// const news = JSON.parse(localStorage.getItem("read_news"));

// // створюємо об'єкт, де властивості - це дата, а значення - це масив статей
// const articlesByDate = {};
// news.forEach(article => {
//   const date = new Date(Number(article.dateRead));
//   const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
  
//   // створюємо масив статей для даної дати, якщо його ще немає
//   if (!articlesByDate[formattedDate]) {
//     articlesByDate[formattedDate] = [];
//   }
  
//   // перевіряємо, чи є стаття з таким заголовком вже доданою раніше
//   const existingArticle = articlesByDate[formattedDate].find(a => a.title === article.title);
  
//   if (!existingArticle) {
//     // якщо статті з таким заголовком ще не було, додаємо її до масиву статей даної дати
//     articlesByDate[formattedDate].unshift(article);
//   } else {
//     // якщо стаття з таким заголовком вже є, то порівнюємо дати і залишаємо тільки більш пізню
//     const existingArticleDate = new Date(Number(existingArticle.dateRead));
//     if (date > existingArticleDate) {
//       articlesByDate[formattedDate] = articlesByDate[formattedDate].filter(a => a.title !== article.title);
//       articlesByDate[formattedDate].unshift(article);
//     }
//   }
// });

// // сортуємо об'єкт за датою в зворотньому порядку
// const sortedDates = Object.keys(articlesByDate).sort((a, b) => new Date(b) - new Date(a));

// // створюємо елементи списку і додаємо їх до сторінки
// const list = document.createElement("ul");
// sortedDates.forEach(date => {
//   const listItem = document.createElement("li");
//   listItem.textContent = date;
  
//   const articlesList = document.createElement("ul");
//   articlesByDate[date].sort((a, b) => new Date(b.dateRead) - new Date(a.dateRead)).forEach(article => {
//     const articleListItem = document.createElement("li");
//     const articleLink = document.createElement("a");
//     articleLink.href = article.readMore;
//     articleLink.textContent = article.title;
//     articleListItem.appendChild(articleLink);
//     articlesList.appendChild(articleListItem);
//   });
  
//   listItem.appendChild(articlesList);
//   list.appendChild(listItem);
// });

// readMain.appendChild(list);

// // ============= вар 7! ==============================
// const news = JSON.parse(localStorage.getItem("read_news"));

// // створюємо об'єкт, де властивості - це дата, а значення - це масив статей
// const articlesByDate = {};
// news.forEach(article => {
// const date = new Date(Number(article.dateRead));
// const formattedDate = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;

// // створюємо масив статей для даної дати, якщо його ще немає
// if (!articlesByDate[formattedDate]) {
// articlesByDate[formattedDate] = [];
// }

// // перевіряємо, чи є стаття з таким заголовком вже доданою раніше
// const existingArticle = articlesByDate[formattedDate].find(a => a.title === article.title);

// if (!existingArticle) {
// // якщо статті з таким заголовком ще не було, додаємо її до масиву статей даної дати
// articlesByDate[formattedDate].unshift(article);
// } else {
// // якщо стаття з таким заголовком вже є, то порівнюємо дати і залишаємо тільки більш пізню
// const existingArticleDate = new Date(Number(existingArticle.dateRead));
// if (date > existingArticleDate) {
// articlesByDate[formattedDate] = articlesByDate[formattedDate].filter(a => a.title !== article.title);
// articlesByDate[formattedDate].unshift(article);
// }
// }
// });

// // сортуємо об'єкт за датою в зворотньому порядку
// const sortedDates = Object.keys(articlesByDate).sort((a, b) => new Date(b) - new Date(a));

// // створюємо елементи списку і додаємо їх до сторінки
// // const list = document.createElement("ul");
// // const isFavorite = isNewsInFavorites(article.favoritId);
// sortedDates.forEach(date => {
// const articlesList = articlesByDate[date]
// .sort((a, b) => new Date(b.dateRead) - new Date(a.dateRead))
// .map(article => `<li>
//           <div class="news-card">
//             <img src=${article.img} alt="Article illustration" />
//             <div class="news-card__info">
//               <div class="news-card__category">${article.category}</div>
          
//          <h2 class="news-card__title">${article.title}</h2>
//          <p class="news-card__description">
//         ${article.description}
//         </p>
//         <div class="news-card__date-div">
//           <div class="news-card__date">
//           ${article.publishDate}
//        </div>
//          <a class="news-card__read-more" href="${article.readMore}" target="blank"
//          >Read more</a
//         >
//          </div>
//         </div>
//         </div>
//         </li>` ).join('');
    
// /* <button class="news-card__favorite-btn ${
//                 isFavorite ? 'active_btn' : ''
//               }" data-news-id="${article.favoritId}">
//                 ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
//               </button>         */

// const listItem = `<li class="read-item">
//       <div class="read-title">
//         <h2 class="read-date">${date}</h2>
//         <div class="read-arrow"></div>
//       </div>
//       <ul class="read-gallery">${articlesList}</ul> </li> ` ;

// list.insertAdjacentHTML('beforeend', listItem);
// });

// readMain.appendChild(list);

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
// const isFavorite = isNewsInFavorites(article.favoritId);
sortedDates.forEach(date => {
const articlesList = articlesByDate[date]
.sort((a, b) => new Date(b.dateRead) - new Date(a.dateRead))
.map(article => `<li>
          <div class="news-card">
            <img src=${article.img} alt="Article illustration" />
            <div class="news-card__info">
              <div class="news-card__category">${article.category}</div>
          
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
    
/* <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
              }" data-news-id="${article.favoritId}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>         */

const listItem = `<li class="read-item">
 <div class="read-title">
<h2 class="read-date">${date}</h2>
<div class="read-arrow"></div>
</div>
<ul class="read-gallery">${articlesList}</ul> </li> ` ;

list.insertAdjacentHTML('beforeend', listItem);
});

  main.appendChild(list);
};