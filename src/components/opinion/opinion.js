



  const slider = document.querySelector('.opinion__slider');

if (slider) {


  let mySwiper = new Swiper(slider, {

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },

    uniqueNavElements: true,

    slidesPerView: 1,

    // Бесконечная прокрутка
    loop: true,

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    //centeredSlides: true,

    // Отступ между слайдами
    spaceBetween: 16,


  });

}




