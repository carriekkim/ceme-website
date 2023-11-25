
if ($(document).width() > 850) {
    $("#originalA").click(function () {
        $("#fullimageA").removeClass("hidden");
      });

    $('#buttonA').click(function () {
        $("#fullimageA").addClass("hidden");
      });

    $("#originalB").click(function () {
      $("#fullimageB").removeClass("hidden");
    });

    $('#buttonB').click(function () {
        $("#fullimageB").addClass("hidden");
    });

    $("#originalC").click(function () {
      $("#fullimageC").removeClass("hidden");
    });

    $('#buttonC').click(function () {
        $("#fullimageC").addClass("hidden");
    });

  } else {
    $("#originalA").click(function () {
      $("#fullimageA").addClass("hidden");
    });
  }

$(window).on('resize', function () {
    $("#fullimageA, #fullimageB, #fullimageC").addClass("hidden");
});
