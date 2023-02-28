const switcher = document.getElementById('theme-switcher');

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme');
}
if(localStorage.getItem('isCheked')) { 
           switcher.checked = true; 
        } 

switcher.addEventListener('change', function () {
  document.body.classList.toggle('dark-theme');

  let theme = 'light';

  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
  }
if(localStorage.getItem('isCheked')) { 
                localStorage.removeItem('isCheked'); 
            } else {
                localStorage.setItem('isCheked',true) 
            }

  localStorage.setItem('theme', theme);
});

 

       