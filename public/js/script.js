const header = document.querySelector('header');
const nav = document.querySelector('nav');

function scrollHeader() {
  if (window.scrollY > 100) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
}

window.addEventListener('scroll', scrollHeader);

var swiper = new Swiper('.hero-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev',
  },
});
