/** @file create swiper instance for video content on home page */

// import required modules
import Swiper, { Navigation } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.css';

// Set up swiper instance with required geatures
Swiper.use([Navigation]);

function initSwiper() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // message to notify slider is ready - debugging
  console.log(
    '%c %c Swiper Ready',
    'font-size: 12px;background: brown; color: white',
    'font-size: 12px; background: white; color: black;'
  );
}

export { initSwiper };
