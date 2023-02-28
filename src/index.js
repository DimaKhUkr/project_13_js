import { createMainPage } from './js/sendrequest';

import { mobileMenu } from './js/mobileMenu';

import { getLocation } from './js/weather';

import { getCategories } from './js/categories';

const inputSearch = document.getElementById('searchForm');

getCategories();

inputSearch.addEventListener('submit', createMainPage);
// document.addEventListener('DOMContentLoaded', getLocation);
