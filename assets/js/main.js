
const disclaimerClosing = document.querySelector('.disclaimer.disclaimer--closing');

const disclaimerClose = disclaimerClosing.querySelector('.disclaimer__close');

disclaimerClose.addEventListener('click', () => {
  disclaimerClosing.classList.add('js-close');
})

const header = document.querySelector('header.header');

if (header) {

  const burger = header.querySelector('.header__burger');

  burger.addEventListener('click', function() {
    this.classList.toggle('js-menu-active');
  })

}


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




