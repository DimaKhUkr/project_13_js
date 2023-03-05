const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/news/v3/content/nyt/all.json';

const placeForFavNews = document.getElementById('favorite-articles');
// const ifNewsInFavorite = false;

createFavoritePage();

placeForFavNews.addEventListener('click', event => {
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    removeFromFavorite(event);
  }
});

function removeFromFavorite(event) {
  const button = event.target;
  const newsId = button.dataset.newsId;

  localStorage.removeItem(`favorite_${newsId}`);
  createFavoritePage();
}

async function createFavoritePage() {
  let markup = '';

  placeForFavNews.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    let storageKey = localStorage.key(i);

    if (storageKey.includes('favorite')) {
      let favoriteQuery = storageKey.slice(9, storageKey.length);
      const data = await getFavoriteNews(favoriteQuery);
      const news = data.results;
      markup = markup + createFavoriteNews(news[0]);
    }
  }

  if (markup === '') markup = noNewsInFavorite();

  placeForFavNews.insertAdjacentHTML('beforeend', markup);
}

function noNewsInFavorite() {
  return `
  <div class="favorite-news__none">
    <p class="favorite-news__none__title">We haven't found news on this page</p>
  </div>`;
}

function createFavoriteNews(news) {
  // const title = news.headline.main;
  const isFavorite = true;
  console.log(news);
  console.log(news.multimedia);
  const photoUrl =
    (news.multimedia === null || 0)
      ? 'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg'
      : `https://static01.nyt.com/${news.multimedia[0].url}`;

  const { uri, section, abstract, published_date, url, title } = news;

  return `
          <div class="news-card">
            <img src="${photoUrl}" alt="заглушка" />
            <div class="news-card__info">
              <div class="news-card__category">${section}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active_btn' : ''
              }" data-news-id="${uri}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
              <h2 class="news-card__title">${title}</h2>
              <p class="news-card__description">${abstract
                // abstract !== ""
                //   ? abstract.substring(0, 100) + '...'
                //   : abstract
              }</p>
              <div class="news-card__date-div">
              <div class="news-card__date">${new Date(
                published_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${url}" target="_blank">Read more</a>
              </div>
            </div>
          </div>
        `;
}

async function getFavoriteNews(query) {
  try {
    return await fetch(
      `${URL_SEARCH}?fq=uri:${query}&api-key=${API_KEY}`
    ).then(resp => resp.json());
  } catch (error) {
    console.error(error);
  }
}
