const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL_SEARCH = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const placeForFavNews = document.getElementById('favorite-articles');

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
      const news = data.response.docs;
      markup = markup + createFavoriteNews(news[0]);
    }
  }
  placeForFavNews.insertAdjacentHTML('beforeend', markup);
}

function createFavoriteNews(news) {
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

async function getFavoriteNews(query) {
  try {
    return await fetch(
      `${URL_SEARCH}?fq=_id:("${query}")&api-key=${API_KEY}`
    ).then(resp => resp.json());
  } catch (error) {
    console.error(error);
  }
}
