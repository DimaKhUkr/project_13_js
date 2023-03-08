// ---------------------------  scrolTop  ------------------------------------ //



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "flex";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

const btnOnTop = document.getElementById("myBtn");
btnOnTop.addEventListener(`click`, topFunction);


function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }