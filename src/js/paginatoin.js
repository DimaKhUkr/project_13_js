const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
// const mainPage = document.getElementById('main-page');
const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

// ========================================

const perPage = 10;
// let currentPage = 0;

export function pagination() {
  async function fetchNews(offset) {
    const response = await fetch(`${apiUrl}&offset=${offset}`);
    const data = await response.json();
    console.log('это function fetchNews');
    const dataResponse = data.response;
    console.log(offset);
    console.log(dataResponse);
    return dataResponse;
  }

  function totalPages() {
    fetchNews(0)
      .then(data => {
        // console.log(data);
        const totalHits = data.meta.hits;
        totalPages = Math.ceil(totalHits / perPage);
        console.log(totalPages);
        // initPagination(totalPages);
        // markupPage(1);
      })
      .catch(error => console.error(error));
  }

  function markupPage(pageNumber) {
    const offset = (pageNumber - 1) * perPage;
    const mainPage = document.getElementById('main-page');
    mainPage.innerHTML = '';

    fetchNews(offset).then(news => {
      news.forEach(article => {
        const articleLink = document.createElement('a');
        articleLink.href = article.web_url;
        articleLink.target = '_blank';

        const articleCard = document.createElement('div');
        articleCard.className = 'card';

        if (article.multimedia && article.multimedia.length > 0) {
          const img = article.multimedia[0];
          const imgUrl = `https://www.nytimes.com/${img.url}`;
          const articleImg = document.createElement('img');
          articleImg.src = imgUrl;
          articleCard.appendChild(articleImg);
        }

        const articleTitle = document.createElement('h2');
        articleTitle.innerText = article.headline.main;
        articleCard.appendChild(articleTitle);

        const articleDescription = document.createElement('p');
        articleDescription.innerText = article.abstract;
        articleCard.appendChild(articleDescription);

        articleLink.dataset._id = article._id;
        articleLink.appendChild(articleCard);
        mainPage.appendChild(articleLink);
      });

      const articleLinks = document.querySelectorAll('#main-page a');
      articleLinks.forEach(articleLink => {
        console.log(articleLinks);
        articleLink.addEventListener('click', event => {
          event.preventDefault();
          console.log(event);
          const articleId = articleLink.dataset._id;
          console.log(articleId);
          return articleId;
        });
      });
    });
  }

  function initPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    console.log('это function initPagination');
    console.log(totalPages);
    totalPages.then(totalPages => {
      console.log(totalPages);
      for (let i = 0; i < totalPages; i++) {
        console.log(i);
        const pageLink = document.createElement('a');
        pageLink.innerText = i + 1;
        pageLink.href = articleId;

        pageLink.addEventListener('click', event => {
          event.preventDefault();
          displayPage(i + 1);
        });
        console.log(totalPages);
        paginationContainer.appendChild(pageLink);
        console.log('это function initPagination конец');
      }
    });
  }

  initPagination(totalPages());
  markupPage(0);
}
