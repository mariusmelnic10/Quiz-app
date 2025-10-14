const answerbtn1 = document.getElementById("answer1");
const answerbtn2 = document.getElementById("answer2");
const answerbtn3 = document.getElementById("answer3");
const answerbtn4 = document.getElementById("answer4");

answerbtn1.addEventListener("click", listen1)
answerbtn2.addEventListener("click", listen2)
answerbtn3.addEventListener("click", listen3)
answerbtn4.addEventListener("click", listen4)

function listen1() {
    console.log("first button was used")
};

function listen2() {
    console.log("second button was used")
};

function listen3() {
    console.log("third button was used")
};

function listen4() {
    console.log("fourth button was used")
};