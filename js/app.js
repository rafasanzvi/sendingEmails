//VARIALBLES
const sendingButton = document.querySelector("#enviar")
const form = document.querySelector("#enviar-mail")

//Inputs variables
const emailField = document.querySelector("#email")
const subjectField = document.querySelector("#asunto")
const messageField = document.querySelector("#mensaje")

eventListeners()

function eventListeners() {
    //When app start
    document.addEventListener("DOMContentLoaded", initApp)

    //Form inputs
    emailField.addEventListener("blur", validateForm)
    subjectField.addEventListener("blur", validateForm)
    messageField.addEventListener("blur", validateForm)
}


//FUNCTIONS

function initApp() {
    sendingButton.disabled = true
    sendingButton.classList.add("cursor-not-allowed", "opacity-50")
}

function validateForm(e) {
    // console.log(e.target.value)
    if (e.target.value.length > 0) {
        console.log("There is something in the input")
    } else {
        e.target.classList.add("border", "border-red-500")

        showError()
    }
}

const showError = () => {
    const errorMessage = document.createElement("p")
    errorMessage.textContent = "You have to fill all fields"
    errorMessage.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error")

    const errors = document.querySelectorAll(".error")
    if (errors.length === 0) {
        form.appendChild(errorMessage)
    }
}

