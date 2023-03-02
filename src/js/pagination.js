import { createMainPage } from "./sendrequest";
// const API_KEY = 'u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn';
// // const mainPage = document.getElementById('main-page');
// // const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

// // =========================================

// const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

// let totalItems = 0;
let totalPage = 0;
let currentPage = 0;
let itemsPerPage = 10;

// async function fetchNews(offset) {
//   const url = `${apiUrl}&sort=newest&page=${currentPage}&fq=news_desk:("Sports")&type_of_material:("News")&begin_date=20220101&end_date=20220301`;

//   try {
//     const response = await fetch(url + `&offset=${offset}`);
//     const data = await response.json();
//     totalItems = data.response.meta.hits;
//     console.log(data.response.docs);
//     return data.response.docs;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }

export function updatePagination(totalItems) {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  totalPage = Math.ceil(totalItems / itemsPerPage);

  // Додаю кнопку першої сторінки
  const firstBtn = document.createElement('button');
  firstBtn.textContent = '1';
  firstBtn.classList = 'dot';
  if (currentPage === 0) {
    firstBtn.classList.add('active');
  }
  firstBtn.addEventListener('click', () => {
    currentPage = 0;
    createMainPage(currentPage);
    updatePagination();
  });
  pagination.appendChild(firstBtn);

  // Додаю кнопку Prev
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '< Prew';
  prevBtn.classList = 'prev dot';
  if (currentPage === 0) {
    prevBtn.disabled = true;
  }
  prevBtn.addEventListener('click', () => {
    currentPage--;
    createMainPage(currentPage);
    updatePagination();
  });
  pagination.insertBefore(prevBtn, pagination.firstChild);

  // Додаю кнопку "..."
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPage - 1, currentPage + 2);

  if (startPage > 1) {
    const dotsBtn = document.createElement('button');
    dotsBtn.textContent = '...';
    dotsBtn.disabled = true;
    dotsBtn.classList = 'dots';
    pagination.appendChild(dotsBtn);
  }

  for (let i = startPage; i < endPage; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.classList = 'dot';
    if (i === currentPage) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
      currentPage = i;
      createMainPage(currentPage);
      updatePagination();
    });
    pagination.appendChild(btn);
  }

  if (endPage < totalPage - 1) {
    const dotsBtn = document.createElement('button');
    dotsBtn.textContent = '...';
    dotsBtn.disabled = true;
    dotsBtn.classList = 'dots';
    pagination.appendChild(dotsBtn);
  }

  // Додаю кнопку останьої сторінки
  if (totalPage > 1) {
    const lastBtn = document.createElement('button');
    lastBtn.textContent = totalPage;
    lastBtn.classList = 'dot';
    if (currentPage === totalPage - 1) {
      lastBtn.classList.add('active');
    }
    lastBtn.addEventListener('click', () => {
      currentPage = totalPage - 1;
      createMainPage(currentPage);
      updatePagination();
    });
    pagination.appendChild(lastBtn);
  }

  // Додаю кнопку Next
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next >';
  nextBtn.classList = 'next dot';
  if (currentPage === totalPage - 1) {
    nextBtn.disabled = true;
  }
  nextBtn.addEventListener('click', () => {
    currentPage++;
    createMainPage(currentPage);
    updatePagination();
  });
  pagination.appendChild(nextBtn);
}
