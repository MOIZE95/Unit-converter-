function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    var outputValue;

    // Convert input value to meters
    if (inputUnit === "cm") {
        outputValue = inputValue / 100;
    } else if (inputUnit === "inch") {
        outputValue = inputValue * 0.0254;
    } else if (inputUnit === "m") {
        outputValue = inputValue;
    } else if (inputUnit === "km") {
        outputValue = inputValue * 1000;
    }

    // Convert meters to output unit
    if (outputUnit === "cm") {
        outputValue *= 100;
    } else if (outputUnit === "inch") {
        outputValue /= 0.0254;
    } else if (outputUnit === "m") {
        outputValue = outputValue;
    } else if (outputUnit === "km") {
        outputValue /= 1000;
    }

    var body = document.querySelector("body");
    body.style.backgroundColor = getRandomColor();

    var outputField = document.getElementById("outputValue");
    outputField.value = outputValue;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
