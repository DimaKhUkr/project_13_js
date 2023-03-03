const switchers = document.querySelectorAll('.switcher');
const swtch1 = document.getElementById('theme-switcher');
const swtch2 = document.getElementById('theme-switcher2');

const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
  document.body.classList.add('dark-theme');
}

switchers.forEach(switcher => {
  switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    let theme = 'light';

    if (document.body.classList.contains('dark-theme')) {
      theme = 'dark';
    }

    // if(localStorage.getItem('isChecked-' + switcher.id)) {
    //     localStorage.removeItem('isChecked-' + switcher.id);
    // } else {
    //     localStorage.setItem('isChecked-' + switcher.id, true)
    // }

    localStorage.setItem('theme', theme);
  });
});

let switcher1State = localStorage.getItem('switcher1State');
let switcher2State = localStorage.getItem('switcher2State');

if (switcher1State === 'checked') {
  swtch1.checked = true;
} else {
  swtch1.checked = false;
}

if (switcher2State === 'checked') {
  swtch2.checked = true;
} else {
  swtch2.checked = false;
}

swtch1.addEventListener('click', function () {
  if (swtch1.checked) {
    swtch2.checked = true;
    localStorage.setItem('switcher1State', 'checked');
    localStorage.setItem('switcher2State', 'checked');
  } else {
    swtch2.checked = false;
    localStorage.setItem('switcher1State', 'unchecked');
    localStorage.setItem('switcher2State', 'unchecked');
  }
});

swtch2.addEventListener('click', function () {
  if (swtch2.checked) {
    swtch1.checked = true;
    localStorage.setItem('switcher1State', 'checked');
    localStorage.setItem('switcher2State', 'checked');
  } else {
    swtch1.checked = false;
    localStorage.setItem('switcher1State', 'unchecked');
    localStorage.setItem('switcher2State', 'unchecked');
  }
});
