const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup Laguage",
        c: "H <sup>2</sup> O",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cars SUVs Sailboats",
        c: "Central Style  Sheets",
        correct: "a",
    },
    {
        question: "What year did JavaScript appear?",
        a: "1899",
        b: "2005",
        c: "1995",
        correct: "c",
    },
    {
        question: "Who is the author of the JavaScript language?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        correct: "b",
    },
    {
        question: "What language is this project written in?",
        a: "JavaScript",
        b: "Ruby",
        c: "C++",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 class="result">You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button class="submit" onclick="location.reload()">Reload</button>
            `;
        }
    }
});

