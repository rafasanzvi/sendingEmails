//VARIALBLES
const sendingButton = document.querySelector("#enviar")
const form = document.querySelector("#enviar-mail")

//Inputs variables
const emailField = document.querySelector("#email")
const subjectField = document.querySelector("#asunto")
const messageField = document.querySelector("#mensaje")

//Variable with the regular expression to validate the email field
const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eventListeners()

function eventListeners() {

    //When app start
    document.addEventListener("DOMContentLoaded", initApp)

    //Form inputs
    emailField.addEventListener("blur", validateForm)
    subjectField.addEventListener("blur", validateForm)
    messageField.addEventListener("blur", validateForm)

    //Send form
    form.addEventListener("submit", sendEmail)
}

//FUNCTIONS
function initApp() {

}

function validateForm(e) {

    // console.log(e.target.value)
    // console.log(e.target.type)
    if (e.target.value.length > 0) {

        //Delete errors...
        const error = document.querySelector("p.error")
        if (error) {
            error.remove()
        }


        e.target.classList.remove("border", "border-red-500")
        e.target.classList.add("border", "border-green-500")
    } else {
        e.target.classList.remove("border", "border-green-500")
        e.target.classList.add("border", "border-red-500")

        showError("You have to fill all fields")
    }

    if (e.target.type === "email") {
        // const resultadoEmail = e.target.value.indexOf("@") this is a bad way, we need to check the email with the regular expression
        // console.log(resultadoEmail)
        if (regularExpression.test(e.target.value)) {
            const error = document.querySelector("p.error")
            if (error) {
                error.remove()
            }

            e.target.classList.remove("border", "border-red-500")
            e.target.classList.add("border", "border-green-500")
        } else {
            e.target.classList.add("border", "border-red-500")

            showError("The email is not valid")
        }
    }

    if (regularExpression.test(emailField.value) && subjectField.value !== "" && messageField.value !== "") {
        sendingButton.disabled = false
        sendingButton.classList.remove("cursor-not-allowed", "opacity-50")
    } else {
        sendingButton.disabled = true
    }
}

const showError = (message) => {
    const errorMessage = document.createElement("p")
    errorMessage.textContent = message
    errorMessage.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error")

    const errors = document.querySelectorAll(".error")
    if (errors.length === 0) {
        form.appendChild(errorMessage)
    }
}


function sendEmail(e) {
    e.preventDefault()

    //Show spinner
    const spinner = document.querySelector("#spinner")
    spinner.style.display = "flex"

    //After 3 seconds hide the spinner and showing the message
    setTimeout(() => {
        spinner.style.display = "none"

        //Message of email sent without problems    
        const messageEmailIsSent = document.createElement("p")
        messageEmailIsSent.textContent = "The email has been sent correctly"
        messageEmailIsSent.classList.add("border", "border-blue-500", "bg-blue-500", "text-white", "font-bold", "uppercase", "p-3", "mt-5", "mb-3", "text-center")

        //Insert paragraph before the spinner    
        form.insertBefore(messageEmailIsSent, spinner)

        setTimeout(() => {
            messageEmailIsSent.remove() //Delete message email sent
            restartForm()
        }, 4000)
    }, 4000)
}

//Function to restart the form

function restartForm() {
    form.reset()
}

