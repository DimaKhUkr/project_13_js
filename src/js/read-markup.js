const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const readList = document.querySelector('.read');


isReadEmpty();
// getReadKeys();
testMarkup2();
// testMarkupWithFilter();
// createReadPage();


// Для порожньої сторінки
function isReadEmpty() {
  if (readList.children.length === 0) {
    console.log('empty');
    const markup =
      '<li class="read-item-empty"><h2>Nothing read yet</h2><div class="read-empty"></div></li > ';
    readList.innerHTML = markup;
  }
  console.log('Not empty');
}


function testMarkup2() {

  // отримуємо всі ключі з локального сховища
  const keys = Object.keys(localStorage);

  // створюємо об'єкт для зберігання списку статей за датами
  const articlesByDate = {};

  // перебираємо всі ключі з локального сховища
  for (const key of keys) {
    // перевіряємо, чи є ключ датою у форматі 02/03/2023
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dateRegex.test(key)) {
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
      // додаємо елемент списку з назвою статті
      markup += `<li>
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
          ${article.dateRead}
       </div>
         <a class="news-card__read-more" href="${article.url}" target="_blank"
         >Read more</a
        >
         </div>
        </div>
        </div>
        </li>`  
        ;
    }
    markup += '</ul>';
  }

  // вставляємо HTML-розмітку у елемент
  readList.innerHTML = markup;
} 





