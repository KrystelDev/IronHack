let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

//Escuchar al evento del submit del formulario
myForm.addEventListener("submit", onSubmit);

// NO FUNCIONA - MIRAR -
// const onSubmit = (event) => {
//   console.log("on click!");
//   event.preventDefault();
// };

function onSubmit(event) {
  console.log("on click!");
  event.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields of the form...";

    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");

    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    //limpiar
    nameInput.value = "";
    emailInput.value = "";
  }
}
