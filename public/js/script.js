document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1500,
  });
});

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

// Mobile Menu
const mobileMenuBtns = document.querySelectorAll('#mobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('translate-x-full');
  document.body.classList.toggle('overflow-hidden');
};

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener('click', toggleMobileMenu);
});

document.querySelectorAll('#mobileMenu ul a').forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// Active Link Function
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('#mobileMenu .nav-link');

  function setActiveLink() {
    let fromTop = window.scrollY + 100;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.getAttribute('href'));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('text-brand-dark');
      } else {
        link.classList.remove('text-brand-dark');
      }
    });

    mobileNavLinks.forEach((link) => {
      let section = document.querySelector(link.getAttribute('href'));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('text-brand-blue');
      } else {
        link.classList.remove('text-brand-blue');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});

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

var swiper = new Swiper('.slider-comfort-auto', {
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
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: '.route-slider-next',
    prevEl: '.route-slider-prev',
  },
});
