import { isNewsInFavorites, isNewsInRead } from './local-storage';

const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

const categoryBtn = document.getElementById('category-btn');
const mainPage = document.getElementById('main-page');
const weather = document.querySelector(`.wraper__weather`);
const empty = document.getElementById('empty');
// getCategories();
let totalPages = 0;
let offsetPage = 0;
let category = '';

// --------Запрос на бекенд для получения списка категорий и прорисовка кнопок
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

        // -----------------Для кнопок
        const selectHeader = document.querySelector('.select_header');
        const categoryBtns = document.querySelectorAll('.category_btn');
        categoryBtns.forEach(btn => {
          btn.addEventListener('click', async event => {
            event.preventDefault();
            if (selectHeader.classList.contains('is-active')) {
              selectHeader.classList.remove('is-active');
              selectBtn.classList.remove('is-active');
            }

            category = btn.textContent.toLowerCase();
            // console.log(category);
            // console.log(offsetPage);
            getNewsByCategory(offsetPage, category);
          });
        });

        // -------------------Для селектора

        const categoryFromSelect = document.querySelectorAll('.select_item');
        categoryFromSelect.forEach(category => {
          category.addEventListener('click', chooseCategory);
        });
        function chooseCategory(event) {
          event.preventDefault();
          category = event.target.textContent.toLowerCase();
          console.log(category);
          // console.log('item');
          const selectCurrentName = document.querySelector('.select_current');
          selectCurrentName.textContent = event.target.textContent;
          //---------- Заменяем знаки для правильного http запроса
          category = category.replace('/', '%2F');
          category = category.replace('&', '%26');
          category = category.replace(/ /g, '%20');
          getNewsByCategory(offsetPage, category);
          // console.log('item');

          // ------   Скрываем форму категорий убрав IS-ACTIVE --------- //
          const selectHeader = document.querySelector('.select_header');
          const selectBtn = document.querySelector('.select_btn');
          selectBtn.classList.remove('is-active');
          selectHeader.classList.remove('is-active');
        }

        const selectBtn = document.querySelector('.select_btn');
      });
  } catch (error) {
    console.error(error);
  }
}
import { updatePaginationCategoties } from './pagination';

// ---------------Запрос на бекенд для получения опреденной категории

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
    // console.log(news);
    // console.log(totalResults);
    renderResult(news);
  } catch (error) {
    console.error(error);
  }
}
// ----------Рендеринг страницы после получения запроса по определенной категории

function renderResult(news) {
  empty.setAttribute('hidden', '');

  if (news.length === 0) {
    // Очищаем страницу от предыдущих новостей если новых нет
    Array.from(mainPage.children).forEach(child => {
      if (child !== empty && child !== weather) child.remove();
    });
    // console.log(news.length);
    empty.removeAttribute('hidden');
    weather.setAttribute('hidden', '');
  } else {
    // Очищаем страницу от предыдущих новостей оставляя блок с погодой
    Array.from(mainPage.children).forEach(child => {
      if (child !== weather && child !== empty) child.remove();
    });
    weather.removeAttribute('hidden');
  }
  const markup = news
    .map(resultSearch => {
      // -------------Проверка на наличие фото в массиве
      let photo;
      if (
        resultSearch.multimedia !== null &&
        resultSearch.multimedia.length >= 3 &&
        resultSearch.multimedia[2].url !== undefined
      ) {
        photo = resultSearch.multimedia[2].url;
      } else if (
        resultSearch.multimedia !== null &&
        resultSearch.multimedia.length >= 2 &&
        resultSearch.multimedia[1].url !== undefined
      ) {
        photo = resultSearch.multimedia[1].url;
      } else {
        photo =
          'https://user-images.githubusercontent.com/110947394/222411348-dc3ba506-91e5-4318-9a9e-89fcf1a764a8.jpg';
      }
      // ----------Деструктуризация и прорисовка карточки новостей

      const { section, abstract, title, url, uri, published_date } =
        resultSearch;
      const isFavorite = isNewsInFavorites(uri);
      const isRead = isNewsInRead(uri);
      // const isFavorite = localStorage.getItem(`favorite_${uri}`) !== null;
      return `<div class ="news-card
      ${isRead ? 'reading_card' : ''}
      " id="${uri}">
      ${isRead ? '<p class="text-alredy-read">Already read</p>' : ''}
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
              <button class="btn-read-more news-card__read-more">
              <a href="${url}" target="_blank">Read more</a>
              </button>
            </div>
          </div>
          </div>`;
    })
    .join('');
  mainPage.insertAdjacentHTML('beforeend', markup);

  updatePaginationCategoties(category);
}
