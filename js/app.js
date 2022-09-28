//VARIALBLES
const sendingButton = document.querySelector("#enviar")

eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", initApp)
}


//FUNCTIONS

function initApp() {
    sendingButton.disabled = true
    sendingButton.classList.add("cursor-not-allowed", "opacity-50")
}