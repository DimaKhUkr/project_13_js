import { createMainPage } from './sendrequest';

let totalPage = 0;
let currentPage = 0;
let itemsPerPage = 10;

export function updatePagination(totalItems) {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  totalPage = Math.ceil(totalItems / itemsPerPage);
  if (totalPage > 100) {
    totalPage = 100;
  }

  // Додаю кнопку першої сторінки
  const firstBtn = document.createElement('button');
  firstBtn.textContent = '1';
  firstBtn.classList = 'dot';
  if (currentPage === 0) {
    firstBtn.classList.add('dot-active');
  }
  firstBtn.addEventListener('click', () => {
    currentPage = 0;
    loader();
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
    loader();
  });
  pagination.insertBefore(prevBtn, pagination.firstChild);

  let startPage = Math.max(1, currentPage);
  let endPage = Math.min(totalPage - 1, currentPage + 1);

  if (window.innerWidth > 767) {
    startPage = Math.max(1, currentPage - 1);
    endPage = Math.min(totalPage - 1, currentPage + 2);
  }

  // Додаю першу кнопку "..."
  if (startPage > 1) {
    const dotsBtn = document.createElement('button');
    dotsBtn.textContent = '...';
    dotsBtn.disabled = true;
    dotsBtn.classList = 'dots';
    pagination.appendChild(dotsBtn);
  }

  // Додаю інші кнопки
  for (let i = startPage; i < endPage; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.classList = 'dot';
    if (i === currentPage) {
      btn.classList.add('dot-active');
    }
    btn.addEventListener('click', () => {
      currentPage = i;
      loader();
    });
    pagination.appendChild(btn);
  }

  // Додаю другу кнопку "..."
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
      lastBtn.classList.add('dot-active');
    }
    lastBtn.addEventListener('click', () => {
      currentPage = totalPage - 1;
      loader();
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
    loader();
  });
  pagination.appendChild(nextBtn);
}

function loaderOff() {
  document.getElementById('loader-container').style.display = 'none';
  document.getElementById('pagination').style.display = 'flex';
}

function loaderOn() {
  document.getElementById('loader-container').style.display = 'flex';
  document.getElementById('pagination').style.display = 'none';
}

function loader() {
  loaderOn();
  setTimeout(loaderOff, 1000);
  createMainPage(currentPage);
  updatePagination();
}
// ---------------------------------------------------------------------
import { getNewsByCategory } from './categories';

let totalPages = 0;
let currentPageCategory = 0;
let offsetPage = 0;
// let category;

export function updatePaginationCategoties(category) {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';
  itemsPerPage = 20;
  // totalPages = Math.ceil(totalResults / itemsPerPage);
  totalPages = 25;
  // console.log('категория в начале пагинации', category);

  // Додаю кнопку першої сторінки
  const firstBtn = document.createElement('button');
  firstBtn.textContent = '1';
  firstBtn.classList = 'dot';
  if (currentPageCategory === 0) {
    firstBtn.classList.add('dot-active');
  }
  firstBtn.addEventListener('click', () => {
    currentPageCategory = 0;
    loaderCategoties(category);
  });
  pagination.appendChild(firstBtn);

  // Додаю кнопку Prev
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '< Prew';
  prevBtn.classList = 'prev dot';
  if (currentPageCategory === 0) {
    prevBtn.disabled = true;
  }
  prevBtn.addEventListener('click', () => {
    currentPageCategory--;
    loaderCategoties(category);
  });
  pagination.insertBefore(prevBtn, pagination.firstChild);

  let startPage = Math.max(1, currentPageCategory);
  let endPage = Math.min(totalPages - 1, currentPageCategory + 1);

  if (window.innerWidth > 767) {
    startPage = Math.max(1, currentPageCategory - 1);
    endPage = Math.min(totalPages - 1, currentPageCategory + 2);
  }

  // Додаю першу кнопку "..."
  if (startPage > 1) {
    const dotsBtn = document.createElement('button');
    dotsBtn.textContent = '...';
    dotsBtn.disabled = true;
    dotsBtn.classList = 'dots';
    pagination.appendChild(dotsBtn);
  }

  // Додаю інші кнопки
  for (let i = startPage; i < endPage; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.classList = 'dot';
    if (i === currentPageCategory) {
      btn.classList.add('dot-active');
    }
    btn.addEventListener('click', () => {
      currentPageCategory = i;
      loaderCategoties(category);
    });
    pagination.appendChild(btn);
  }

  // Додаю другу кнопку "..."
  if (endPage < totalPages - 1) {
    const dotsBtn = document.createElement('button');
    dotsBtn.textContent = '...';
    dotsBtn.disabled = true;
    dotsBtn.classList = 'dots';
    pagination.appendChild(dotsBtn);
  }

  // Додаю кнопку останьої сторінки
  if (totalPages > 1) {
    const lastBtn = document.createElement('button');
    lastBtn.textContent = totalPages;
    lastBtn.classList = 'dot';
    if (currentPageCategory === totalPages - 1) {
      lastBtn.classList.add('dot-active');
    }
    lastBtn.addEventListener('click', () => {
      currentPageCategory = totalPages - 1;
      loaderCategoties(category);
    });
    pagination.appendChild(lastBtn);
  }

  // Додаю кнопку Next
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next >';
  nextBtn.classList = 'next dot';
  if (currentPageCategory === totalPages - 1) {
    nextBtn.disabled = true;
  }
  nextBtn.addEventListener('click', () => {
    currentPageCategory++;
    // console.log('сейчас страница ', currentPageCategory);
    // console.log('Общее число страниц ', totalPages);
    loaderCategoties(category);
  });
  pagination.appendChild(nextBtn);
}

function loaderCategoties(category) {
  offsetPage = currentPageCategory * 20;
  loaderOn();
  setTimeout(loaderOff, 1000);
  // console.log(offsetPage);
  // console.log('категория в конце пагинации', category);
  getNewsByCategory(offsetPage, category);

  updatePaginationCategoties(category);
}
