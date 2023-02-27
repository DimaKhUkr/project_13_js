import { createMainPage } from './js/sendrequest';

import { mobileMenu } from './js/mobileMenu';

import { weather } from './js/weather';

import { getCategories } from './js/categories';

const inputSearch = document.getElementById('searchForm');

getCategories();

inputSearch.addEventListener('submit', createMainPage);
