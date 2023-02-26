const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
// const photoUrl = `./images/asia.jpg`;

// const inputSearch = document.getElementById('inputrequest');

// inputSearch.addEventListener('submit', articleSearch(e));
const mainPage = document.getElementById('main-page');

export async function articleSearch(query) {
  //   e.preventDefault();
  //   const query = e.value;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
  try {
    return await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(resp => resp.json());
    //   .then(res => console.log(res));
  } catch (error) {
    console.error(error);
  }
}

export async function createMainPage(e) {
  e.preventDefault();
  const query = e.value;
  const photoUrl = './src/images/asia.png';
  mainPage.replaceChildren();
  const response = await articleSearch(query);
  console.dir(response.response.docs);
  const newsCards = response.response.docs.map(news => {
    const title = news.headline.main;
    const {
      _id,
      // photoUrl,
      section_name,
      //   title,
      lead_paragraph,
      pub_date,
      web_url,
    } = news;
    const isFavorite = localStorage.getItem(`favorite_${_id}`) !== null;
    return `
          <div class="news-card">
            <img src="${photoUrl}">
            <div class="news-card__info">
              <div class="news-card__category">${section_name}</div>
              <button class="news-card__favorite-btn ${
                isFavorite ? 'active' : ''
              }" data-news-id="${_id}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
              <h2 class="news-card__title">${title}</h2>
              <p class="news-card__description">${
                lead_paragraph.length > 100
                  ? lead_paragraph.substring(0, 100) + '...'
                  : lead_paragraph
              }</p>
              <div class="news-card__date">${new Date(
                pub_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${web_url}" target="_blank">Read more</a>
            </div>
          </div>
        `;
  });
  mainPage.innerHTML = newsCards.join('');
}

// docs.headline.main - название статьи
// docs.lead_paragraph - начало статьи
// docs.pub_date - дата статьи
// docs.web_url - ссылка на статью
// docs.section_name - категория

// Добавление/удаление новости из избранного
function toggleFavorite(event) {
  const button = event.target;
  const newsId = button.dataset.newsId;

  if (localStorage.getItem(`favorite_${newsId}`) !== null) {
    localStorage.removeItem(`favorite_${newsId}`);
    button.textContent = 'Add to Favorite';
    button.classList.remove('active');
  } else {
    localStorage.setItem(`favorite_${newsId}`, true);
    button.textContent = 'Remove from Favorite';
    button.classList.add('active');
  }
}

mainPage.addEventListener('click', event => {
  const button = event.target.closest('.news-card__favorite-btn');
  if (button !== null) {
    toggleFavorite(event);
  }
});
