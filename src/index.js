import { createMainPage, createPopularNews } from './js/sendrequest';

import { startWeatherApp } from './js/weather';

import { getCategories } from './js/categories';

getCategories();

createPopularNews();

startWeatherApp();

// const inputSearch = document.getElementById('searchForm');


