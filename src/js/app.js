import * as flsFunctions from "./modules/functions.js";
import * as mainFunc from "./modules/main.js";
import ScrollReveal from "scrollreveal";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";

const swiperPopular = new Swiper(".popular__container", {
  modules: [Navigation, Pagination],
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
});
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

sr.reveal(
  `.home__title, .popular__container, .subscribe__container, .footer__container`
);
sr.reveal(`.home__description, .footer__info`, { delay: 500 });
sr.reveal(`.home__search`, { delay: 600 });
sr.reveal(`.home__value`, { delay: 700 });
sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos__img`, { interval: 100 });
sr.reveal(`.value__images, .contact__content`, { origin: "left" });
sr.reveal(`.value__content, .contact__images`, { origin: "right" });
