const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const readList = document.querySelector('.read');

isReadEmpty();
// getReadNews(100000008677561);
createReadPage();


// Для порожньої сторінки
function isReadEmpty() {
    if (readList.children.length === 0) {
        console.log('empty');
        const markup = '<li class="read-item-empty"><h2>Nothing read yet</h2></li>';
        readList.innerHTML = markup;
    } console.log('Not empty');
};

// Формуємо сторінку
async function createReadPage() {
  let markup = '';
  readList.innerHTML = '';
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let storageKey = localStorage.key(i);
  let storageKey = "nyt://article/59fa3c31-ddd7-562c-ab32-e202a892d697";
  const data = await getReadNews(storageKey);
  const news = data.response.docs;
  markup = markup + createReadNews(news[0]);
// }
  
  readList.insertAdjacentHTML('beforeend', markup);
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
const keys = Object.keys(localStorage);

keys.filter(key => /^\d{2}\/\d{2}\/\d{4}$/.test(key)).forEach(key => {
  const value = localStorage.getItem(key);
  console.log(`Значення для ключа ${key}: ${value}`);
});