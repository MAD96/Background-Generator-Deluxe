var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
     ")";

    css.textContent = body.style.background + ";";
}


/*Not working yet!*/
function copyElement(){
    if(setGradient){
        /*Getting the textfield*/ 
    var copyText = css.textContent;
        /*Selecting the text field */
    copyText.select();
    copyText.setSelectionRange(0,99999);
    /*Copying text*/
    document.execCommand("copy");
    alert("Copied!");
    }
}


color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
color3.addEventListener("input",setGradient);

button.addEventListener("click",copyElement);
