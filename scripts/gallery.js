$("#button1").click(function() {
    $("#button1").addClass("active")
    $("#button2").removeClass("active")
    $("#button3").removeClass("active")
    $("#button4").removeClass("active")

    $("#image1").removeClass("hidden")
    $("#image2").addClass("hidden")
    $("#image3").addClass("hidden")
    $("#image4").addClass("hidden")
  });
  $("#button2").click(function() {
    $("#button1").removeClass("active")
    $("#button2").addClass("active")
    $("#button3").removeClass("active")
    $("#button4").removeClass("active")

    $("#image1").addClass("hidden")
    $("#image2").removeClass("hidden")
    $("#image3").addClass("hidden")
    $("#image4").addClass("hidden")
  });
  $("#button3").click(function() {
    $("#button1").removeClass("active")
    $("#button2").removeClass("active")
    $("#button3").addClass("active")
    $("#button4").removeClass("active")

    $("#image1").addClass("hidden")
    $("#image2").addClass("hidden")
    $("#image3").removeClass("hidden")
    $("#image4").addClass("hidden")
  });
  $("#button4").click(function() {
    $("#button1").removeClass("active")
    $("#button2").removeClass("active")
    $("#button3").removeClass("active")
    $("#button4").addClass("active")

    $("#image1").addClass("hidden")
    $("#image2").addClass("hidden")
    $("#image3").addClass("hidden")
    $("#image4").removeClass("hidden")
  });

$("#prev-button").click(function() {
    if ($("#button1").hasClass("active")) {
      $("#button1").removeClass("active");
      $("#button4").addClass("active");
      $("#image4").removeClass("hidden");
      $("#image1").addClass("hidden")
    } else if ($("#button4").hasClass("active")) {
        $("#button4").removeClass("active");
        $("#button3").addClass("active");
        $("#image3").removeClass("hidden");
        $("#image4").addClass("hidden")
    } else if ($("#button3").hasClass("active")) {
        $("#button3").removeClass("active");
        $("#button2").addClass("active");
        $("#image2").removeClass("hidden");
        $("#image3").addClass("hidden")
    } else if ($("#button2").hasClass("active")) {
        $("#button2").removeClass("active");
        $("#button1").addClass("active");
        $("#image1").removeClass("hidden");
        $("#image2").addClass("hidden")
    }
  });
  $("#next-button").click(function() {
    if ($("#button1").hasClass("active")) {
      $("#button1").removeClass("active");
      $("#button2").addClass("active");
      $("#image2").removeClass("hidden");
      $("#image1").addClass("hidden")
    } else if ($("#button2").hasClass("active")) {
        $("#button2").removeClass("active");
        $("#button3").addClass("active");
        $("#image3").removeClass("hidden");
        $("#image2").addClass("hidden")
    } else if ($("#button3").hasClass("active")) {
        $("#button3").removeClass("active");
        $("#button4").addClass("active");
        $("#image4").removeClass("hidden");
        $("#image3").addClass("hidden")
    } else if ($("#button4").hasClass("active")) {
        $("#button4").removeClass("active");
        $("#button1").addClass("active");
        $("#image1").removeClass("hidden");
        $("#image4").addClass("hidden")
    }
  });
