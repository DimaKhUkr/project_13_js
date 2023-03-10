let gallery;
document.querySelectorAll('.read-title').forEach(title =>
  title.addEventListener('click', () => {
    parent = title.parentNode;
    gallery = title.nextElementSibling;
    const box_height = gallery.scrollHeight;
    
    if (parent.classList.contains('read-active')) {
      parent.classList.remove('read-active');
      gallery.style.height = '0px';
    } else {
      document
        .querySelectorAll('.read-item')
        .forEach(child => child.classList.remove('read-active'));
      parent.classList.toggle('read-active');
      gallery.style.height = box_height + 'px';
    }
  })
);


