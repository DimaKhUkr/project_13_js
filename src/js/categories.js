// import { startWeatherApp } from './weather';

const API_KEY = 't8X9JXlP7JTQb4JOFaZ7soveQbwr46sH';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

const categoryBtn = document.getElementById('category-btn');
const mainPage = document.getElementById('main-page');
const weather = document.querySelector(`.wraper__weather`);
const empty = document.getElementById('empty');
// getCategories();
let totalPages = 0;
let offsetPage = 0;
let category = '';

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
        if (window.innerWidth < 768) {
          categoryBtn.insertAdjacentHTML(
            'beforeend',
            `<div class="select">
            <div class="select_header">
              <div class="select_current">Categories</div>
            </div>
            <div class="select_btn">
            </div>
        </div>`
          );
          const selectBtn1 = document.querySelector('.select_btn');
          const selectHeader = document.querySelector('.select_header');
          // добавляем обработчик событий клика на элемент .select_header
          selectHeader.addEventListener('click', function () {
            if (selectHeader.classList.contains('is-active')) {
              selectHeader.classList.remove('is-active');
              selectBtn.classList.remove('is-active');
            } else {
              selectHeader.classList.add('is-active');
              selectBtn.classList.add('is-active');
            }
          });
          for (let i = 0; i < arrayOfCategories.length; i++) {
            selectBtn1.insertAdjacentHTML(
              'beforeend',
              `<div class="select_item" value="${arrayOfCategories[i]}">${arrayOfCategories[i]}</div>`
            );
          }
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1280) {
          for (let i = 0; i <= 3; i++) {
            categoryBtn.insertAdjacentHTML(
              'beforeend',
              `<button type="button" class="category_btn">${arrayOfCategories[i]}</button>`
            );
          }
          categoryBtn.insertAdjacentHTML(
            'beforeend',
            `<div class="select">
            <div class="select_header">
              <div class="select_current">Others</div>
            </div>
            <div class="select_btn">
            </div>
        </div>`
          );
          const selectBtn2 = document.querySelector('.select_btn');
          const selectHeader = document.querySelector('.select_header');
          // добавляем обработчик событий клика на элемент .select_header
          selectHeader.addEventListener('click', function () {
            if (selectHeader.classList.contains('is-active')) {
              selectHeader.classList.remove('is-active');
              selectBtn.classList.remove('is-active');
            } else {
              selectHeader.classList.add('is-active');
              selectBtn.classList.add('is-active');
            }
          });
          for (let i = 4; i < arrayOfCategories.length; i++) {
            selectBtn2.insertAdjacentHTML(
              'beforeend',
              `<div class="select_item" value="${arrayOfCategories[i]}">${arrayOfCategories[i]}</div>`
            );
          }
        }
        if (window.innerWidth >= 1280) {
          for (let i = 0; i <= 5; i++) {
            categoryBtn.insertAdjacentHTML(
              'beforeend',
              `<button type="button" class="category_btn">${arrayOfCategories[i]}</button>`
            );
          }
          categoryBtn.insertAdjacentHTML(
            'beforeend',
            `<div class="select">
            <div class="select_header">
              <div class="select_current">Others</div>
            </div>
            <div class="select_btn">
            </div>
        </div>`
          );
          const selectBtn3 = document.querySelector('.select_btn');
          const selectHeader = document.querySelector('.select_header');
          // добавляем обработчик событий клика на элемент .select_header
          selectHeader.addEventListener('click', function () {
            if (selectHeader.classList.contains('is-active')) {
              selectHeader.classList.remove('is-active');
              selectBtn.classList.remove('is-active');
            } else {
              selectHeader.classList.add('is-active');
              selectBtn.classList.add('is-active');
            }
          });
          for (let i = 6; i < arrayOfCategories.length; i++) {
            selectBtn3.insertAdjacentHTML(
              'beforeend',
              `<div class="select_item" value="${arrayOfCategories[i]}">${arrayOfCategories[i]}</div>`
            );
          }
        }

        // Для кнопок

        const categoryBtns = document.querySelectorAll('.category_btn');
        categoryBtns.forEach(btn => {
          btn.addEventListener('click', async event => {
            event.preventDefault();
            category = btn.textContent.toLowerCase();
            // console.log(category);
            // console.log(offsetPage);
            getNewsByCategory(offsetPage, category);
          });
        });

        // Для селектора
        const categoryFromSelect = document.querySelectorAll('.select_item');
        categoryFromSelect.forEach(category => {
          category.addEventListener('click', chooseCategory);
        });
        function chooseCategory(event) {
          selectBtn.classList.remove('is-active');
          event.preventDefault();
          category = event.target.textContent.toLowerCase();
          // console.log(category);
          console.log('item');
          getNewsByCategory(offsetPage, category);      
          // console.log('item');
        }

        const selectBtn = document.querySelector('.select_btn');
        // selectBtn.addEventListener('change', async event => {
        //   const category = event.currentTarget.value.toLowerCase();
        //   event.preventDefault();
        //   console.log(category);
        //   console.log('btn')
        //   getNewsByCategory(category);
        // });
      });
  } catch (error) {
    console.error(error);
  }
}
import { updatePaginationCategoties } from './pagination';

export async function getNewsByCategory(offsetPage, category) {
  // console.log("категория в начале функции", category);
  const urlCategory = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?offset=${offsetPage}&api-key=${API_KEY}`;
  // console.log(urlCategory);
  try {
    const response = await fetch(urlCategory, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const news = data.results;
    // const totalResults = data.num_results;
    console.log(news);
    // console.log(totalResults);
    renderResult(news, totalResults);
  } catch (error) {
    console.error(error);
  }
}

function renderResult(news, totalResults) {
  empty.setAttribute('hidden', '');
  // const data = await articleSearch(pageNumber);
  // console.dir(data.response);
  if (news.length === 0) {
    // Очищаем страницу от предыдущих новостей если новых нет
    Array.from(mainPage.children).forEach(child => {
      if (child !== empty && child !== weather) child.remove();
    });
    // console.log(news.length);
    empty.removeAttribute('hidden');
    weather.setAttribute('hidden', '');
    // inputSearch.elements.search.value = '';
  } else {
    // Очищаем страницу от предыдущих новостей оставляя блок с погодой
    Array.from(mainPage.children).forEach(child => {
      if (child !== weather && child !== empty) child.remove();
    });
    weather.removeAttribute('hidden');
  }
  const markup = news
    .map(resultSearch => {
      const photo =
        resultSearch.multimedia !== null
          ? resultSearch.multimedia[2].url
          : 'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg';
      const { section, abstract, title, url, uri, published_date } =
        resultSearch;
      const isFavorite = localStorage.getItem(`favorite_${uri}`) !== null;
      return `<div class ="news-card">
        <img src="${photo}" alt="photo"/>
        <div class="news-card__info">
        <div class="news-card__category">${section}</div>
        <button class="news-card__favorite-btn ${
          isFavorite ? 'active_btn' : ''
        }" data-news-id="${uri}">
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
                published_date
              ).toLocaleDateString()}</div>
              <a class="news-card__read-more" href="${url}" target="_blank">Read more</a>
            </div>
          </div>
          </div>`;
    })
    .join('');
  mainPage.insertAdjacentHTML('beforeend', markup);

  updatePaginationCategoties(category);
  // document.addEventListener('DOMContentLoaded', startWeatherApp);

}
