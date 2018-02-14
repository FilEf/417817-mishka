var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelectorAll('.main-nav__list--opened');

navToggle.classList.remove('main-nav__toggle--nojs');

for (var i = 0; i < navList.length; i++) {
  navList[i].classList.remove('main-nav__list--opened');
  navList[i].classList.add('main-nav__list--closed');
}


navToggle.addEventListener('click',function() {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');

    for (var i = 0; i < navList.length; i++) {
      navList[i].classList.remove('main-nav__list--closed');
      navList[i].classList.add('main-nav__list--opened');
    }
  }

  else {
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');

    for (var i = 0; i < navList.length; i++) {
      navList[i].classList.remove('main-nav__list--opened');
      navList[i].classList.add('main-nav__list--closed');
    }
  }
});
