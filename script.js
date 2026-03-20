const form = document.querySelector("form")
const inputElm = document.getElementById("email-input")
const hiddenText = document.getElementById("hidden-text")
const errorIcon = document.getElementById("error-icon")


form.addEventListener('submit', handleValidation)

function handleValidation(e){
  e.preventDefault()
    if(inputElm.value){
    if(!inputElm.checkValidity()){
        inputElm.classList.add("red-border")
        errorIcon.classList.remove("hidden");
        hiddenText.classList.remove("hidden");
    }else{
        inputElm.classList.remove("red-border")
        errorIcon.classList.add("hidden");
        hiddenText.classList.add("hidden");
        inputElm.value = '';  }
    }else{
        // hiddenText.textContent = "You have not typed in your email address"
        hiddenText.classList.remove("hidden");
    }
}