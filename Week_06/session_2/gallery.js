const mainImg = document.getElementById("main-image")

const thumbnails = document.querySelectorAll(".thumb")

console.log(thumbnails)

thumbnails.forEach(function(thumb) {


  thumb.addEventListener(("click"), function() {

    mainImg.src = thumb.src


    thumbnails.forEach(function (i) {
    i.classList.remove("active")
    })

    
     thumb.classList.add("active")

   
  })


})



// thumbnails[0].addEventListener(("click"), function() {
//  mainImg.src = thumbnails[0].src
// })

// thumbnails[1].addEventListener(("click"), function() {
//  mainImg.src = thumbnails[1].src
// })

// thumbnails[2].addEventListener(("click"), function() {
//  mainImg.src = thumbnails[2].src
// })

// thumbnails[3].addEventListener(("click"), function() {
//  mainImg.src = thumbnails[3].src
// })























// const mainImg = document.getElementById("main-image");

// const thumbnails = document.querySelectorAll(".thumb");

// console.log(thumbnails);

// thumbnails.forEach(function (thumb) {
//   thumb.addEventListener("click", function () {
//     mainImg.src = thumb.src;

//     thumbnails.forEach(function (t) {
//       t.classList.remove("active");
//     });

//     thumb.classList.add("active");
//   });
// });

