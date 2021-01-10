import Swiper, { Navigation, Pagination } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

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
}

export { initSwiper };
