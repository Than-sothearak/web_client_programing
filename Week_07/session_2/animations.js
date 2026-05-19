$(".menu-icon").click(function () {
  $(".nav-links-mobile").stop(true, true).slideToggle("fast");
});

$("#fadeOutBtn").click(function () {
  $("#box").fadeOut("slow");
})

$("#fadeInBtn").click(function () {
  $("#box").fadeIn("slow");
})

$("#slideBtn").click(function () {
  $("#box").slideToggle("slow");
})

$(".dropdown-trigger").hover(
  function () {
    $(this).find(".dropdown-menu").stop(true, false).slideDown(150);
  },
  function () {
    $(this).find(".dropdown-menu").stop(true, false).slideUp(150);
  },

  
);
  

$(".acc-header").click(function () {
  $(this).next(".acc-panel").slideToggle();
});