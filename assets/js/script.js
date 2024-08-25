// hero-sec swip
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// plans swip
var swiper = new Swiper(".plans", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    },
  },
});