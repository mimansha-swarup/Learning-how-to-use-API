const txtinput = document.querySelector("#inpt-text");
const button = document.querySelector("#inpt-btn");
const outputarea = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

const requiredURL=streng => serverURL + "?" + "text=" + streng;

const errorHandler= error =>{
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


const translateFunc=() =>{
    var inptText = txtinput.value

    fetch(requiredURL(inptText))
        .then(response => response.json())
        .then(json => {


            outputarea.innerText = json.contents.translated;
        })
        .catch(errorHandler)

}

button.addEventListener('click', translateFunc)