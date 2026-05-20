
  $("#themeBtn").click(function () {

    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $("#themeBtn").text("☀️ Light Mode");
    } else {
      $("#themeBtn").text("🌙 Dark Mode");
    }

  });


