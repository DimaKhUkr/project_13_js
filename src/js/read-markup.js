const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const readList = document.querySelector('.read');


isReadEmpty();
// getReadKeys();
// testMarkup();
// testMarkupWithFilter();
// getReadNews(100000008677561);
createReadPage();
// "nyt://article/59fa3c31-ddd7-562c-ab32-e202a892d697"

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

function testMarkup() {
  // Отримуємо всі ключі з localStorage
  const keys = Object.keys(localStorage);

  // Фільтруємо ключі за заданим форматом дати
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const filteredKeys = keys.filter(key => dateRegex.test(key));

  // Створюємо розмітку для кожного ключа та його значення
  const markup = filteredKeys
    .map(key => {
      const queries = JSON.parse(localStorage.getItem(key));
      console.log(queries);

      const paragraphs = queries.map(item => `<p>${item}</p>`).join('');
      return `<h2>${key}</h2>${paragraphs}`;
    })
    .join('');

  // Додаємо розмітку в тег body
  readList.innerHTML = markup;
}

// Формуємо сторінку
async function createReadPage() {
  let markupList = '';
  let markup = '';
  let markupAll = '';
  readList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i += 1) {
    let storageKey = localStorage.key(i);
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dateRegex.test(storageKey)) {
      // малюємо першу розмітку
      
      markupList = markupList + createReadList(storageKey);
      console.log(storageKey);
      // const value = localStorage.getItem(storageKey)
      // console.log(value);

      const values = JSON.parse(localStorage.getItem(storageKey));
      console.log(values);
      for (let i = 0; i < values.length; i += 1) {
        let query = values[i];
        console.log(query);
        const data = await getReadNews(query);
        const news = data.response.docs;
        // console.log(news);
        markup = markup + createReadNews(news[0]);
        
      }
      markupAll = markupList + markup
      // const readItem = document.querySelector('.read');
      // readItem.insertAdjacentHTML('beforeend', markup);
    }
    
  } readList.insertAdjacentHTML('beforeend', markupAll);
}
// Формуємо галерею
function createReadList(storageKey) {
  // const dateTitle = storageKey;
  return `
  <li class="read-item">
      <div class="read-title">
        <h2 class="read-date">${storageKey}</h2>
        <div class="read-arrow"></div>
      </div>
      <ul class="read-gallery">
      </ul>
  </li>
        `;
}

// Формуємо картку новини
function createReadNews(news) {
  const title = news.headline.main;
  const isFavorite = true;

  const photoUrl =
    news.multimedia !== 0
      ? `https://static01.nyt.com/${news.multimedia[0].url}`
      : 'https://via.placeholder.com/400';

  const { _id, section_name, abstract, pub_date, web_url } = news;

  return `
         <li>
          <div class="news-card">
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
              <a class="news-card__read-more" href="${web_url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>
         </div>
      </div>
    </li>
         `;
}

// Відправляємо запит

async function getReadNews(query) {
  try {
    return await fetch(
      `${URL_SEARCH}?fq=_id:("${query}")&api-key=${API_KEY}`
    ).then(resp => resp.json());
  } catch (error) {
    console.error(error);
  }
}

// Перевірка наявності в локал сторідж ключів потрібного формата
// const keys = Object.keys(localStorage);

// keys.filter(key => /^\d{2}\/\d{2}\/\d{4}$/.test(key)).forEach(key => {
//   const value = localStorage.getItem(key);
//   console.log(`Значення для ключа ${key}: ${value}`);
// });

// function getReadKeys() {
//   const keys = Object.keys(localStorage);
//   keys.filter(key => /^\d{2}\/\d{2}\/\d{4}$/.test(key)).forEach(key => {
//   const value = localStorage.getItem(key);
//   console.log(`Значення для ключа ${key}: ${value}`);
// });
// };

// ===============================================
// function testMarcup() {
// // Отримуємо всі ключі з localStorage
// const keys = Object.keys(localStorage);

// // Фільтруємо ключі за заданим форматом дати
// const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
// const filteredKeys = keys.filter(key => dateRegex.test(key));

// // Створюємо розмітку для кожного ключа та його значення
// const markup = filteredKeys.map(key => {
//   const value = JSON.parse(localStorage.getItem(key));
//   const paragraphs = value.map(item => `<p>${item}</p>`).join('');
//   return `<h2>${key}</h2>${paragraphs}`;
// }).join('');

// // Додаємо розмітку в тег body
// readList.innerHTML = markup;
// };

// =========================З перевіркою на унікальність=========
function testMarkupWithFilter() {
  // Отримуємо всі ключі з localStorage
  const keys = Object.keys(localStorage);

  // Фільтруємо ключі за заданим форматом дати
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const filteredKeys = keys.filter(key => dateRegex.test(key));

  // Об'єднуємо значення з однаковими датами, зберігаючи тільки унікальні значення
  const data = {};
  filteredKeys.forEach(key => {
    const value = JSON.parse(localStorage.getItem(key));
    value.forEach(item => {
      if (data[item]) {
        const existingDate = Object.keys(data[item])[0];
        const currentDate = key;
        if (new Date(currentDate) > new Date(existingDate)) {
          data[item] = { [currentDate]: true };
        }
      } else {
        data[item] = { [key]: true };
      }
    });
  });

  // Створюємо розмітку для кожного ключа та його значення
  const markup = Object.keys(data)
    .map(item => {
      const dates = Object.keys(data[item]);
      const paragraphs = `<p>${item}</p>`.repeat(dates.length);
      return `<h2>${dates[0]}</h2>${paragraphs}`;
    })
    .join('');

  // Додаємо розмітку в тег body
  readList.innerHTML = markup;
}
// ==================================================

function testMarkupWithEnotherFilter() {
  // Отримуємо всі ключі з localStorage
  const keys = Object.keys(localStorage);

  // Фільтруємо ключі за заданим форматом дати
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  const filteredKeys = keys.filter(key => dateRegex.test(key));

  // Створюємо об'єкт, де ключами є унікальні значення з localStorage, а значеннями є масиви ключів, які містять ці значення
  const uniqueValues = {};
  filteredKeys.forEach(key => {
    const value = JSON.parse(localStorage.getItem(key));
    value.forEach(item => {
      if (!uniqueValues[item]) {
        uniqueValues[item] = [];
      }
      uniqueValues[item].push(key);
    });
  });

  // Створюємо розмітку для кожного ключа та його значення
  const markup = filteredKeys
    .map(key => {
      const value = JSON.parse(localStorage.getItem(key));
      const paragraphs = value
        .filter(item => uniqueValues[item].indexOf(key) === 0) // Фільтруємо унікальні значення для кожного ключа
        .map(item => `<p>${item}</p>`)
        .join('');
      return `<h2>${key}</h2>${paragraphs}`;
    })
    .join('');

  // Додаємо розмітку в тег body
  readList.innerHTML = markup;
}
