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
  let startPage = Math.max(1, currentPage);
  let endPage = Math.min(totalPage - 1, currentPage + 1);

  if (window.innerWidth > 767) {
    startPage = Math.max(1, currentPage - 1);
    endPage = Math.min(totalPage - 1, currentPage + 2);
  }
  // Додаю першу кнопку "..."
  startPage = Math.max(1, currentPage - 1);
  endPage = Math.min(totalPage - 1, currentPage + 2);

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
      createMainPage(currentPage);
      updatePagination();
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
