

let idMain = document.getElementById("main");
let idButton = document.getElementById("submit");
let steps = document.getElementById("steps");
let errorMessage = document.getElementById("error");

idButton.onclick = function() {
    //clears page
    idMain.innerHTML = "";
    //checks if integer is positive an a number
    console.log(isNaN(steps.value));
    if (!validation(steps.value)) {
        errorMessage.style.visibility = "visible";
        return false;
    }
    //starts to print
    heeHawR(1, steps.value);
};

function validation(x) {
    errorMessage.style.visibility = "hidden";
    return (validateNeg(x) && validateInt(x));
}

function validateNeg(x) {
    return x >= 0;
}

function validateInt(x) {
    return !isNaN(x);
}

function heeHawR(currentStep, steps) {
    let num = String(currentStep);
    //base case
    if (currentStep > steps) {
        return "";
    }
    //if divisible by 3 and 5
    if (currentStep % 3 === 0 && currentStep % 5 === 0) {
        idMain.innerHTML += "Hee Haw!<br>";
    }
    //divisible by 3 and not 5
    else if (currentStep % 3 === 0 && currentStep % 5 !== 0) {
        idMain.innerHTML += "Hee!<br>";
    }
    //divisible by 5 and not 3
    else if (currentStep % 5 === 0 && currentStep % 3 !== 0) {
        idMain.innerHTML += "Haw!<br>";
    }
    //otherwise print number
    else {
        idMain.innerHTML += num + "<br>";
    }
    return heeHawR(currentStep + 1, steps);
}