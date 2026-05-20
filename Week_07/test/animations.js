$("#fadeOutBtn").click(function ( ){
    $("#box").fadeOut(1000)
})

$("#fadeInBtn").click(function() {
    $("#box").fadeIn(1000)
})


$("#slideBtn").click(function() {
  $("#box").slideToggle();
})


// $(".dropdown-trigger").hover(
    
// function () {
//     $(".dropdown-menu").slideDown("fast")
// },

// function () {
//   $(".dropdown-menu").stop(true, true).slideUp("fast")
// }

// )

$(".dropdown-trigger").click(
function () {
    $(".dropdown-menu").slideToggle("fast")
},

)

$(".acc-header").click(function() {
     $(this).next(".acc-panel").slideToggle()
})
