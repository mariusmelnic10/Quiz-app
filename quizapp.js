const answerbtn1 = document.getElementById("answer1");
const answerbtn2 = document.getElementById("answer2");
const answerbtn3 = document.getElementById("answer3");
const answerbtn4 = document.getElementById("answer4");
const skip = document.getElementById("skipbtn");

answerbtn1.addEventListener("click", listen1)
answerbtn2.addEventListener("click", listen2)
answerbtn3.addEventListener("click", listen3)
answerbtn4.addEventListener("click", listen4)
skip.addEventListener("click", skip1)


const questions = [
    {
        question: "What is the capital of France?",    
        answers: [
            {text: 'Paris' correct: true}
            {text: 'Denver' correct: false}
            {text: 'Chisinau' correct: false}
            {text: 'Roma' correct: false}
        ]

        question: "Which planet is the closest to the sun?",    
        answers: [
            {text: 'Mercury' correct: true}
            {text: 'Venus' correct: false}
            {text: 'Uranus' correct: false}
            {text: 'Earth' correct: false}
        ]

        question: "What is the smallest unit of matter",    
        answers: [
            {text: 'Atom' correct: true}
            {text: 'Molecule' correct: false}
            {text: 'Sodium' correct: false}
            {text: 'Electrons' correct: false}
        ]

        question: "What is the scientific theory that explains the origin of the universe?",    
        answers: [
            {text: 'The Big Bang Theory' correct: true}
            {text: 'The Theory of Relativity' correct: false}
            {text: 'String Theory' correct: false}
            {text: 'Theory of Gravity' correct: false}
        ]
    }
]

function listen1() {
    console.log("red button was used")

};

function listen2() {
    console.log("blue button was used")
};

function listen3() {
    console.log("yellow button was used")
    
};

function listen4() {
    console.log("green button was used")
};      

function skip1() {
    console.log("You just skipped")
}   
