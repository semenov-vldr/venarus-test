const disclaimerClosing = document.querySelector('.disclaimer.disclaimer--closing');

const disclaimerClose = disclaimerClosing.querySelector('.disclaimer__close');

disclaimerClose.addEventListener('click', () => {
  disclaimerClosing.classList.add('js-close');
})
