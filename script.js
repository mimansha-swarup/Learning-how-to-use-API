const txtinput = document.querySelector("#inpt-text");
const button = document.querySelector("#inpt-btn");
const outputarea = document.querySelector("#output-txt");

function translateFunc() {

    outputarea.innerHTML = "hello " + txtinput.value
}

button.addEventListener('click', translateFunc)