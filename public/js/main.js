$(document).ready(function () {
  const hamburger = $('.hamburger');
  const menu = $('header .nav .nav__menu');

  hamburger.click(function () {
    menu.slideToggle('400');
    menu.toggleClass('show');
  });
});
