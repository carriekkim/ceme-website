// $(".accordion-item").click(function() {
//   var isItemOpen = $(this).hasClass("open");
//   $(".accordion-item").removeClass("open");
//   if (!isItemOpen) {
//     $(this).addClass("open");
//   }
// });

$('.accordion-header').click(function() {
    var isItemOpen = $(this).hasClass("open");
  $(".accordion-item").removeClass("open");
  if (!isItemOpen) {
    $(this).addClass("open");
  }
    // Optionally, you can close other open items when one is opened
    $('.accordion-content').not($(this).next()).addClass('hidden');

    // Toggle the 'hidden' class on the content next to the clicked header
    $(this).next('.accordion-content').toggleClass('hidden');
  });
