$("#button1").click(function() {
    $("#button1").addClass("active")
    $("#button2").removeClass("active")
    $("#button3").removeClass("active")
    $("#button4").removeClass("active")

    $("#image1").removeClass("accessible-hidden")
    $("#image2").addClass("accessible-hidden")
    $("#image3").addClass("accessible-hidden")
    $("#image4").addClass("accessible-hidden")
  });
  $("#button2").click(function() {
    $("#button1").removeClass("active")
    $("#button2").addClass("active")
    $("#button3").removeClass("active")
    $("#button4").removeClass("active")

    $("#image1").addClass("accessible-hidden")
    $("#image2").removeClass("accessible-hidden")
    $("#image3").addClass("accessible-hidden")
    $("#image4").addClass("accessible-hidden")
  });
  $("#button3").click(function() {
    $("#button1").removeClass("active")
    $("#button2").removeClass("active")
    $("#button3").addClass("active")
    $("#button4").removeClass("active")

    $("#image1").addClass("accessible-hidden")
    $("#image2").addClass("accessible-hidden")
    $("#image3").removeClass("accessible-hidden")
    $("#image4").addClass("accessible-hidden")
  });
  $("#button4").click(function() {
    $("#button1").removeClass("active")
    $("#button2").removeClass("active")
    $("#button3").removeClass("active")
    $("#button4").addClass("active")

    $("#image1").addClass("accessible-hidden")
    $("#image2").addClass("accessible-hidden")
    $("#image3").addClass("accessible-hidden")
    $("#image4").removeClass("accessible-hidden")
  });

$("#prev-button").click(function() {
    if ($("#button1").hasClass("active")) {
      $("#button1").removeClass("active");
      $("#button4").addClass("active");
      $("#image4").removeClass("accessible-hidden");
      $("#image1").addClass("accessible-hidden")
    } else if ($("#button4").hasClass("active")) {
        $("#button4").removeClass("active");
        $("#button3").addClass("active");
        $("#image3").removeClass("accessible-hidden");
        $("#image4").addClass("accessible-hidden")
    } else if ($("#button3").hasClass("active")) {
        $("#button3").removeClass("active");
        $("#button2").addClass("active");
        $("#image2").removeClass("accessible-hidden");
        $("#image3").addClass("accessible-hidden")
    } else if ($("#button2").hasClass("active")) {
        $("#button2").removeClass("active");
        $("#button1").addClass("active");
        $("#image1").removeClass("accessible-hidden");
        $("#image2").addClass("accessible-hidden")
    }
  });
  $("#next-button").click(function() {
    if ($("#button1").hasClass("active")) {
      $("#button1").removeClass("active");
      $("#button2").addClass("active");
      $("#image2").removeClass("accessible-hidden");
      $("#image1").addClass("accessible-hidden")
    } else if ($("#button2").hasClass("active")) {
        $("#button2").removeClass("active");
        $("#button3").addClass("active");
        $("#image3").removeClass("accessible-hidden");
        $("#image2").addClass("accessible-hidden")
    } else if ($("#button3").hasClass("active")) {
        $("#button3").removeClass("active");
        $("#button4").addClass("active");
        $("#image4").removeClass("accessible-hidden");
        $("#image3").addClass("accessible-hidden")
    } else if ($("#button4").hasClass("active")) {
        $("#button4").removeClass("active");
        $("#button1").addClass("active");
        $("#image1").removeClass("accessible-hidden");
        $("#image4").addClass("accessible-hidden")
    }
  });
