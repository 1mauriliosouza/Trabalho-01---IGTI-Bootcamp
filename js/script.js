window.addEventListener('load', start);

function start() {
    var inputRed = document.querySelector('#inputRed');
    var inputGreen = document.querySelector('#inputGreen');
    var inputBlue = document.querySelector('#inputBlue');    

    inputRed.addEventListener("change", changeColor);
    inputGreen.addEventListener("change", changeColor);
    inputBlue.addEventListener("change", changeColor);

}

function changeColor() {

    red = inputRed.value;
    green = inputGreen.value;
    blue = inputBlue.value;

    colorRed.value = inputRed.value;
    colorGreen.value = inputGreen.value;
    colorBlue.value = inputBlue.value;

    document.getElementById('color').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';;

}