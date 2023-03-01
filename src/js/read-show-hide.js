// // Працює лише перший заголовок

// const titleEl = document.querySelector('.read-title');
// const readGallery = document.querySelector('.read-gallery');
// const arrow = document.querySelector('.read-arrow')

// titleEl.addEventListener('click', onClick);

//   defaultPosition();
//   function onClick() {

//     const box_height = readGallery.scrollHeight
//     if (!readGallery.classList.contains('active')) {
//       readGallery.classList.add('active')
//       arrow.classList.add('read-arrow__active')
//       readGallery.style.height = box_height + 'px'
//     }
//     else {
//       readGallery.classList.remove('active')
//       arrow.classList.remove('read-arrow__active')
//       readGallery.style.height = '0px'
//     }

// };

//   function defaultPosition() {
//     const box_height = readGallery.scrollHeight
//     readGallery.style.transition = 'height 0.7s';
//     readGallery.style.overflow = 'hidden';

//     if (readGallery.classList.contains('active')) {
//       arrow.classList.add('read-arrow__active')
//       readGallery.style.height = box_height + 'px'
//     }
//     else {
//       arrow.classList.remove('read-arrow__active')
//       readGallery.style.height = '0px'
//     }

// };

// ==================================================

// // Працює лише останній заголовок

// const titleEls = document.querySelectorAll('.read-title');
// console.log(titleEls);

// for (const title of titleEls) {
//   title.addEventListener('click', onClick);
//   readGallery = title.nextElementSibling;
//   arrow = title.lastElementChild;
//   console.log(readGallery);
//   console.log(arrow);
//   defaultPosition();
// }

// function onClick() {
//   const box_height = readGallery.scrollHeight;
//   if (!readGallery.classList.contains('active')) {
//     readGallery.classList.add('active');
//     arrow.classList.add('read-arrow__active');
//     readGallery.style.height = box_height + 'px';
//   } else {
//     readGallery.classList.remove('active');
//     arrow.classList.remove('read-arrow__active');
//     readGallery.style.height = '0px';
//   }
// }

// function defaultPosition() {
//   const box_height = readGallery.scrollHeight;
//   readGallery.style.transition = 'height 0.7s';
//   readGallery.style.overflow = 'hidden';

//   if (readGallery.classList.contains('active')) {
//     arrow.classList.add('read-arrow__active');
//     readGallery.style.height = box_height + 'px';
//   } else {
//     arrow.classList.remove('read-arrow__active');
//     readGallery.style.height = '0px';
//   }
// }

// ==================================================

// Працює лише останній заголовок
const titleEls = document.querySelectorAll('.read-title');
console.log(titleEls);

titleEls.forEach(function (title) {
  title.addEventListener('click', onClick);
  readGallery = title.nextElementSibling;
  arrow = title.lastElementChild;
  console.log(readGallery);
  console.log(arrow);
  defaultPosition();
});

function onClick() {
  const box_height = readGallery.scrollHeight;
  if (!readGallery.classList.contains('active')) {
    readGallery.classList.add('active');
    arrow.classList.add('read-arrow__active');
    readGallery.style.height = box_height + 'px';
  } else {
    readGallery.classList.remove('active');
    arrow.classList.remove('read-arrow__active');
    readGallery.style.height = '0px';
  }
}

function defaultPosition() {
  const box_height = readGallery.scrollHeight;
  readGallery.style.transition = 'height 700ms';
  readGallery.style.overflow = 'hidden';

  if (readGallery.classList.contains('active')) {
    arrow.classList.add('read-arrow__active');
    readGallery.style.height = box_height + 'px';
  } else {
    arrow.classList.remove('read-arrow__active');
    readGallery.style.height = '0px';
  }
}
