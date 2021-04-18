

let idMain = document.getElementById("main");
window.onload = heeHaw();

function heeHaw() {
    for (let i = 1; i <= 100; i++) {
        let num = String(i);
        //if divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            idMain.innerHTML += "Hee Haw!<br>";
            //console.log("Hee Haw!");
        }
        //divisible by 3 and not 5
        else if (i % 3 === 0 && i % 5 !== 0) {
            idMain.innerHTML += "Hee!<br>";
            //console.log("Hee!");
        }
        //divisible by 5 and not 3
        else if (i % 5 === 0 && i % 3 !== 0) {
            idMain.innerHTML += "Haw!<br>";
            //.log("Haw!");
        }
        //otherwise print number
        else {
            idMain.innerHTML += num + "<br>";
            //console.log(num);
        }
    }
}