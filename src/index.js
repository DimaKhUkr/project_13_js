import { createMainPage } from './js/sendrequest';
import { mobileMenu } from './js/mobileMenu';
const inputSearch = document.getElementById('searchForm');

inputSearch.addEventListener('submit', createMainPage);
