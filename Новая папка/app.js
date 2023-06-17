let inputText = document.querySelector("input[type='text']"),
    inputEmail = document.querySelector("input[type='email']"),
    submitButton = document.querySelector("input[type='button']");

submitButton.onclick = function () {
    console.log(inputText.value);
    console.log(inputEmail.value)
    inputText.value = ""
    inputEmail.value = ""
}