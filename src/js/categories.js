const API_KEY = 't8X9JXlP7JTQb4JOFaZ7soveQbwr46sH';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

const categoryBtn = document.getElementById('category-btn');

// getCategories();

export async function getCategories() {
  try {
    return await fetch(`${URL}?api-key=${API_KEY}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      //   .then(cat => console.log(cat.results));
      .then(cat => {
        const arrayOfCategories = [];
        for (const arr of cat.results) {
          arrayOfCategories.push(arr.display_name);
        }
        // console.log(arrayOfCategories);
        return arrayOfCategories;
      })
      .then(arrayOfCategories => {
        // for (const arrbtn of arrayOfCategories) {
        for (let i = 0; i <= 5; i++) {
          categoryBtn.insertAdjacentHTML(
            'beforeend',
            `<button type="button" class="category_btn">${arrayOfCategories[i]}</button>`
          );
        }
        categoryBtn.insertAdjacentHTML(
          'beforeend',
          `<select name="Others" class="select_btn">
            <option value="Others" hidden>Others</option>
            </select>`
        );
        const selectBtn = document.querySelector('.select_btn');
        for (let i = 6; i < arrayOfCategories.length; i++) {
          selectBtn.insertAdjacentHTML(
            'beforeend',
            `<option value="${arrayOfCategories[i]}">${arrayOfCategories[i]}</option>`
          );
        }

        // Для кнопок

        const categoryBtns = document.querySelectorAll('.category_btn');
        categoryBtns.forEach(btn => {
          btn.addEventListener('click', async () => {
            event.preventDefault();
            const category = btn.textContent.toLowerCase();
            console.log(category);
            getNewsByCategory(category);
          });
        });

        // Для селектора

        selectBtn.addEventListener('change', async event => {
          const category = event.currentTarget.value.toLowerCase();
          event.preventDefault();
          console.log(category);
          getNewsByCategory(category);
        });
      });
  } catch (error) {
    console.error(error);
  }
}

async function getNewsByCategory(category) {
  const urlCategory = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${API_KEY}`;
  try {
    const response = await fetch(urlCategory, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const news = data.results;
    console.log(news);
    renderResult(news);
  } catch (error) {
    console.error(error);
  }
}

const listCards = document.querySelector('.list-cards');

function renderResult(news) {
  if (news === null) {
    return (listCards.innerHTML = '<h1>No news</h1>');
  }
  const isFavorite =
    localStorage.getItem(`favorite_${resultsSearch.uri}`) !== null;
  const markup = news
    .map(
      resultSearch =>
        `<div class ="news-card">
        <img src="${resultSearch.multimedia[3].url}" alt="${
          resultSearch.multimedia[3].caption
        }"/>
        <div class="news-card__info">
        <div class="news-card__category">${resultSearch.section}</div>
        <button class="news-card__favorite-btn ${
          isFavorite ? 'active' : ''
        }" data-news-id="${resultSearch.uri}">
                ${isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
              </button>
              <h2 class="news-card__title">${resultSearch.title}</h2>
              <p class="news-card__description">${
                resultSearch.abstract.length > 100
                  ? resultSearch.abstract.substring(0, 100) + '...'
                  : resultSearch.abstract
              }</p>
              <div class="news-card__date">${new Date(
                resultSearch.published_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${
                resultSearch.url
              }" target="_blank">Read more</a>
            </div>
          </div>
        `
    )
    .join('');
  listCards.insertAdjacentHTML('beforeend', markup);
}
