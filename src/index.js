import { createMainPage, createPopularNews } from './js/sendrequest';

import { mobileMenu } from './js/mobileMenu';

import { startWeatherApp } from './js/weather';

import { getCategories } from './js/categories';

getCategories();

createPopularNews();

startWeatherApp();

// const inputSearch = document.getElementById('searchForm');

// inputSearch.addEventListener('submit', (e) => {
//  const query = e.target.elements.search.value.trim();
//     createMainPage()
// });
