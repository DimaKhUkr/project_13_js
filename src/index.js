import { createMainPage } from './js/sendrequest';

import { mobileMenu } from './js/mobileMenu';

import { startWeatherApp } from './js/weather';

import { getCategories } from './js/categories';

const inputSearch = document.getElementById('searchForm');

getCategories();

startWeatherApp();

inputSearch.addEventListener('submit', createMainPage);
