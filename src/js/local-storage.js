const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const STOR_KEY = 'favorites';

function toggleFavoriteNews(event) {
  const button = event.target;
  const newsId = button.dataset.newsId;

  if (button.textContent.includes('Add')) {
    button.textContent = 'Remove from Favorite';
    button.classList.add('active_btn');
    addNewsToLocalStorage(newsId);
  } else {
    console.log('delete from fav');
    button.textContent = 'Add to Favorite';
    button.classList.remove('active_btn');
    deleteNewsFromLocalStorage(newsId);
  }
}

// ----- функція додавання новини в ЛС
async function addNewsToLocalStorage(newsId) {

  // -----  перевіряємо чи додається "погана" новина
  if (newsId.includes('video') || newsId.includes('slideshow')) {
    return console.log('wrong news');
  }

  // ----- запит до бекенду
  const data = await getFavoriteNews(newsId);
  const news = data.response.docs[0];
  // console.log('news=', news);

  // ----- змінні для об'єкту з новиною
  const { _id, section_name, abstract, pub_date, web_url } = news;
  const title = news.headline.main;
  const photoUrl =
    news.multimedia.length === 0
      ? 'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg'
      : `https://static01.nyt.com/${news.multimedia[0].url}`;

  // ----- запис об'єку новини в ЛС
  const newsObject = {
    _id,
    section_name,
    abstract,
    pub_date,
    web_url,
    photoUrl,
    title,
  };

  const currentData = loadFromStorage(STOR_KEY);
  if (currentData === undefined) {
    saveToStorage(STOR_KEY, [newsObject]);
  } else {
    currentData.push(newsObject);
    saveToStorage(STOR_KEY, currentData);
  }
}

// ----- функція видалення новини з ЛС
function deleteNewsFromLocalStorage(newsId) {
  const currentData = loadFromStorage(STOR_KEY);
  const newsIndex = currentData.findIndex(news => news._id === newsId);
  currentData.splice(newsIndex, 1);
  saveToStorage(STOR_KEY, currentData);
}

// ----- функція запису даних в ЛС, пара ключ/значення
function saveToStorage(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error(error);
  }
}

// ----- функція завантаження даних з ЛС по ключу або und якщо не існує
function loadFromStorage(key) {
  try {
    const localData = localStorage.getItem(key);
    return localData === null ? undefined : JSON.parse(localData);
  } catch (error) {
    console.error(error);
  }
}

// ----- функція запиту на бекенд
async function getFavoriteNews(query) {
  try {
    return await fetch(
      `${URL_SEARCH}?fq=_id:("${query}")&api-key=${API_KEY}`
    ).then(resp => resp.json());
    //   .then(res => console.log(res))
  } catch (error) {
    console.error(error);
  }
}

// функція перевірки у вибраному при відмальовці картки новини
function isNewsInFavorites(newsId) {
  const currentData = loadFromStorage(STOR_KEY);
  const isFavorit = currentData.some(news => news._id === newsId);
  return isFavorit;
}

export { loadFromStorage, toggleFavoriteNews, isNewsInFavorites };
