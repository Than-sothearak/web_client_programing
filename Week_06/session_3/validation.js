const form = document.getElementById("register-form")


form.addEventListener(("submit"), function(event) {
  event.preventDefault();


//Validation username input
  const nameInput = document.getElementById("username")
  const nameError = document.getElementById("name-error")
  //default value error 
  nameError.innerText = "" 
  nameInput.style.border = "2px solid gray"

  if (nameInput.value === "") {
   nameError.innerText = "Please write your name"
  nameInput.style.border = "2px solid red"
  } else if (nameInput.value.length < 3 ) {
     nameError.innerText = "Name should have more then 3 charactor"
  nameInput.style.border = "2px solid red"
  }

}
//

//Validation Password

// write code here

//

//Validation confirm password
// write code here
//


)




