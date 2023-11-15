// when window is narrow (< 850px):
//     add .hidden to #navbar1
//     remove .hidden from #navbar2

// when window is wide (> 850px):
//     add .hidden to #navbar2
//     remove .hidden from #navbar1

$(document).ready(function() {
    console.log("loading works");
    if ($(document).width() < 850) {
      $("#navbar1").addClass("hidden");
      $("#navbar2").removeClass("hidden");
    } else {
      $("#navbar2").addClass("hidden");
    }
  });

  // when #navbar1 is resized (max width: 600px):
  //     add .hidden to #navbar1
  //     remove .hidden from #navbar2

  $(window).resize(function() {
    console.log("resizing works");
      if ($(document).width() < 850) {
        // TODO: snippet(s) to respond when the screen size is less than TODO_SCREEN_WIDTH
        $("#navbar1").addClass("hidden");
        $("#navbar2").removeClass("hidden");
        if (!$("#links").hasClass("hidden")) {
          $("#links").addClass("hidden");
        }
      } else {
        // TODO: snippet(s) to respond when the screen size greater than or equal to the TODO_SCREEN_WIDTH
        $("#navbar2").addClass("hidden");
        $("#navbar1").removeClass("hidden");
      }
    });
