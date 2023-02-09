const header = document.querySelector('header.header');

if (header) {

  const burger = header.querySelector('.header__burger');

  burger.addEventListener('click', function() {
    this.classList.toggle('js-menu-active');
  })

}
