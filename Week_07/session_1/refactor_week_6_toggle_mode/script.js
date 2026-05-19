// $(document).ready(function () {

//   $("#themeBtn").click(function () {

//     $("body").toggleClass("dark-mode");

//     if ($("body").hasClass("dark-mode")) {
//       $("#themeBtn").text("☀️ Light Mode");
//     } else {
//       $("#themeBtn").text("🌙 Dark Mode");
//     }

//   });

// });

const themeBtn = document.getElementById("themeBtn");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

themeBtn.addEventListener("click", function () {



  body.classList.toggle("dark-mode");


// Toggle visibility
$("p").toggle();


  // if (body.classList.contains("dark-mode")) {
  //   themeBtn.textContent = "☀️ Light Mode";
  //   navbar.classList.add("dark-mode");
  // } else {
  //   themeBtn.textContent = "🌙 Dark Mode";
  //   navbar.classList.remove("dark-mode");
  // }

}); 