const title = document.getElementById("main-title");
const button = document.getElementById("change-btn");
const subtitle = document.querySelector(".subtitle");
const body = document.querySelector("body");


body.style.backgroundColor = "white"
subtitle.innerHTML = `<p>${body.style.backgroundColor}</p>`;

console.log(body.style.backgroundColor)
function changeTheme() {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    console.log(body.style.backgroundColor)
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    console.log(body.style.backgroundColor)
  }
}

button.addEventListener("click", changeTheme);
