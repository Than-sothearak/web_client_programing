const title = document.getElementById("main-title");
const subTitle = document.querySelector(".subtitle");
const subTitle2 = document.querySelector(".subtitle2");

const button = document.getElementById("change-btn");
const body = document.querySelector("body");

function changeTheme() {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    title.innerText = "Light Mode Activated!";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    title.innerText = "Dark Mode Activated!";
  }
}

function mouseOver () {
  body.style.backgroundColor = "black";
    body.style.color = "white";
    title.innerText = "Dark Mode Activated!";
}

button.addEventListener("click", changeTheme);

title.innerText = "JavaScript is Awesome!";
subTitle2.innerHTML = "I am <strong>learning</strong> how to code.";

console.log(subTitle.innerText);
