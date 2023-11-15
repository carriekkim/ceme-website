
$('.accordion-header').click(function () {
  var isItemOpen = $(this).hasClass("open");
  $(".accordion-item").removeClass("open");
  if (!isItemOpen) {
    $(this).addClass("open");
  }

  $('.accordion-content').not($(this).next()).addClass('hidden');

  $(this).next('.accordion-content').toggleClass('hidden');
});
