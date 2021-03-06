var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonDefult = document.getElementById("defult");
var buttonRandom = document.getElementById("random");

// first CSS STYLE presented ( of background )
css.textContent = "linear-gradient(to right, rgb(224, 87, 87) , yellow)";

function defultGradient(){
    body.style.background = "linear-gradient(to right, rgb(224, 87, 87) , yellow)";
    css.textContent = "linear-gradient(to right, rgb(224, 87, 87) , yellow)";
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"; // adding text content to h3
}

function randomValue(){
    return Math.floor(Math.random() * 256);
}

function randomGradient(){
    var x = randomValue();
    var y = randomValue();
    var z = randomValue();
    var a = randomValue();
    var b = randomValue();
    var c = randomValue();
    var bgColor = "linear-gradient(to right, rgb(" + x + "," + y + "," + z + "), rgb(" + a + "," + b + "," + c + ")";
    document.body.style.background = bgColor;
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonDefult.addEventListener("click", defultGradient);

buttonRandom.addEventListener("click", randomGradient);