// when #menu is clicked (event):
//     if #link is .hidden:
//         remove .hidden from #link
//     else:
//         add .hidden to #link

$("#hamburger").click(function() {
    console.log("menu click works");
      if ($("#links").hasClass("accessible-hidden")) {
        $("#links").removeClass("accessible-hidden");
      } else {
        $("#links").addClass("accessible-hidden");
      }
    });
