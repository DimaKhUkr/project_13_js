titleEl = document.querySelector('.read-title');
readGallery = document.querySelector('.read-gallery');
arrow = document.querySelector('.read-arrow')
console.log(arrow);

titleEl.addEventListener('click', onClick);


  default_position();
  function onClick() {

    const box_height = readGallery.scrollHeight
    if (!readGallery.classList.contains('active')) {
      readGallery.classList.add('active')
      arrow.classList.add('read-arrow__active')
      readGallery.style.height = box_height + 'px'
    }
    else {
      readGallery.classList.remove('active')
      arrow.classList.remove('read-arrow__active')
      readGallery.style.height = '0px'
    }

};

  function default_position() {
    const box_height = readGallery.scrollHeight
    readGallery.style.transition = 'height 0.7s';
    readGallery.style.overflow = 'hidden';

    if (readGallery.classList.contains('active')) {
      arrow.classList.add('read-arrow__active')
      readGallery.style.height = box_height + 'px'
    }
    else {
      arrow.classList.remove('read-arrow__active')
      readGallery.style.height = '0px'
    }

};