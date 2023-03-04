import { createPopularNews } from './js/sendrequest';
import { startWeatherApp } from './js/weather';
import { getCategories } from './js/categories';
// import { onReadCard } from './js/alredy-read';

getCategories();

createPopularNews();

startWeatherApp();

// const mainPage = document.getElementById('main-page');

// mainPage.addEventListener('click', onReadCard);
