const themeBtn = document.getElementById("themeBtn");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

themeBtn.addEventListener("click", function () {

  if (body.style.backgroundColor === "black") {

    // LIGHT MODE
    body.style.backgroundColor = "#f5f5f5";
    body.style.color = "black";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";

    themeBtn.innerText = "🌙 Dark Mode";

  } else {

    // DARK MODE
    body.style.backgroundColor = "black";
    body.style.color = "white";

    navbar.style.backgroundColor = "black";
    navbar.style.color = "white";
    themeBtn.innerText = "☀️ Light Mode";
  }

});