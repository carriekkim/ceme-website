$(document).ready(function () {
  $('.accordion-header').click(function () {
    $('.accordion-content').toggleClass('hidden')
    if ($('.accordion-content').hasClass('hidden')) {
      $('.icon').removeClass('rotate-icon');
    } else {
      $('.icon').addClass('rotate-icon');
    }
  });
});
