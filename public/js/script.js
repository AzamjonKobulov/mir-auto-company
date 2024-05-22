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

var swiper = new Swiper('.comfort-slider-free-mode', {
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1920: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
  },
});

var swiper = new Swiper('.comfort-slider', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.route-slider', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  loop: true,
  navigation: {
    nextEl: '.route-slider-next',
    prevEl: '.route-slider-prev',
  },
});
