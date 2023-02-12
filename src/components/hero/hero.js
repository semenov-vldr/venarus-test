
{

  const portfolioSwiper = document.querySelector('.hero__slider');

  if (portfolioSwiper) {

    let mySwiper = new Swiper(portfolioSwiper, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
      },

      uniqueNavElements: true,

      // Бесконечная прокрутка
      //loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,


      // Отступ между слайдами
      //spaceBetween: 40,

      // Стартовый слайд
      initialSlide: 0,

      effect: 'coverflow',
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },

      // Брейк поинты (адаптив)
      // Ширина экрана
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 12,
      //   },
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      //
      //   1100: {
      //     spaceBetween: 40,
      //   },
      // }
    });

  }






}
