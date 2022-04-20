console.log("Bienvenido a este juego del portfolio!");

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Cual es la diferencia entre ser y no ser?",
        choice1: "<JavaScript>",
        choice2: "<JavaScrdsipt>",
        choice3: "<JavaScrdsfgipt>",
        choice4: "<JavaScdsgsdgript>",
        answer: 1
    },
    {
        question: "where es la diferencia entre ser y no ser?",
        choice1: "<JavaScript>",
        choice2: "<JavaScrdsipt>",
        choice3: "<JavaScrdsfgipt>",
        choice4: "<JavaScdsgsdgript>",
        answer: 4
    },
    {
        question: "who es la diferencia entre ser y no ser?",
        choice1: "<JavaScript>",
        choice2: "<JavaScrdsipt>",
        choice3: "<JavaScrdsfgipt>",
        choice4: "<JavaScdsgsdgript>",
        answer: 1
    },
    {
        question: "waht es la diferencia entre ser y no ser?",
        choice1: "<JavaScript>",
        choice2: "<JavaScrdsipt>",
        choice3: "<JavaScrdsfgipt>",
        choice4: "<JavaScdsgsdgript>",
        answer: 3
    }
]
    
//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [ ... questions];    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
       const number = choice.dataset['number'];
       choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;

};

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);

            getNewQuestion();
        }, 1000 );
    });
});



startGame();

