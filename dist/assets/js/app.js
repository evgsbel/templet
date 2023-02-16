"use strict";

//masked inputs

Inputmask({
  "mask": "+7 (999) 999 - 99 - 99"
}).mask('.phone-mask');
$('[data-fancybox=""]').fancybox({
  // Options will go here
});

// mobile menu
$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.hide-menu');
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close');
  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    btnMenu.classList.remove('is-active');
  };
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});