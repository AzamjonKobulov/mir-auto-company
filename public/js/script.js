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

var swiper = new Swiper('.swiper-hero', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev',
  },
});

var swiper = new Swiper('.swiper-free-mode', {
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
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

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
