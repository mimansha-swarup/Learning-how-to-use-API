const txtinput = document.querySelector("#inpt-text");
const button = document.querySelector("#inpt-btn");
const outputarea = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function requiredURL(streng) {
    return serverURL + "?" + "text=" + streng;

}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function translateFunc() {
    var inptText = txtinput.value



    fetch(requiredURL(inptText))
        .then(response => response.json())
        .then(json => {


            outputarea.innerText = json.contents.translated;
        })
        .catch(errorHandler)

}

button.addEventListener('click', translateFunc)