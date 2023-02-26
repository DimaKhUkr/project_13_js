import { createMainPage } from './js/sendrequest';
import { getCategories } from './js/categories';

const inputSearch = document.getElementById('searchForm');

getCategories();

inputSearch.addEventListener('submit', createMainPage);
