// when #menu is clicked (event):
//     if #link is .hidden:
//         remove .hidden from #link
//     else:
//         add .hidden to #link

$("#hamburger").click(function() {
    console.log("menu click works");
      if ($("#links").hasClass("hidden")) {
        $("#links").removeClass("hidden");
      } else {
        $("#links").addClass("hidden");
      }
    });
