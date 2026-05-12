const mainImg = document.getElementById("main-image");

const thumbnails = document.querySelectorAll(".thumb");

console.log(thumbnails);

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    mainImg.src = thumb.src;

    thumbnails.forEach(function (t) {
      t.classList.remove("active");
    });

    thumb.classList.add("active");
  });
});

