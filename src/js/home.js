//  дадавання активної сторінки навігації
document
  .querySelector(`.nav__link[href="${window.location.pathname}"]`)
  .classList.add('nav__link-current');

//  дадавання активної сторінки навігації в мобільному меню
document
  .querySelector(`.navbar-mobile__link[href="${window.location.pathname}"]`)
  .classList.add('navbar-mobile__link--current');

document
  .querySelector(`.navbar-mobile__link[href="${window.location.pathname}"]`)
  .children[0].classList.add('navbar-mobile__icon-wrapper--current');

document
  .querySelector(`.navbar-mobile__link[href="${window.location.pathname}"]`)
  .children[1].classList.add('add-icon');
