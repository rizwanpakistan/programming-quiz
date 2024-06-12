let CSSQuiz = [{
        Question: 'What does CSS stand for?',
        A: 'Cascading Style Sheets  ',
        B: 'Creative Style Sheets',
        C: 'Colorful Style Sheets',
        D: 'Computer Style Sheets',
        correct: 'A',
    },
    {
        Question: 'Which CSS property is used to change the text color of an element?',
        A: 'text-color',
        B: 'fgcolor',
        C: 'color',
        D: 'font-color',
        correct: 'C',
    },
    {
        Question: 'Which CSS property controls the text size?',
        A: 'font-size',
        B: 'font-style',
        C: 'text-style',
        D: 'text-size',
        correct: 'A',
    },
    {
        Question: 'Which property is used to change the font of an element?',
        A: 'font-style',
        B: 'font-weight',
        C: 'font-family',
        D: 'text-family',
        correct: 'C',
    },
    {
        Question: 'How do you make each word in a text start with a capital letter?',
        A: "You can't do that with CSS",
        B: 'text-style:capitalize',
        C: 'transform:capitalize',
        D: 'text-transform:capitalize',
        correct: 'D',
    },
    {
        Question: 'Which property is used to change the left margin of an element?',
        A: 'margin-l',
        B: 'indent',
        C: 'margin-left',
        D: 'padding-left',
        correct: 'C',
    },
    {
        Question: 'What is the default value of the position property?',
        A: 'static',
        B: 'fixed',
        C: 'absolute',
        D: 'relative',
        correct: 'A',
    },
    {
        Question: 'How do you make the text bold?',
        A: 'style:bold;',
        B: 'font-weight:bold;',
        C: 'font:bold;',
        D: 'text-bold',
        correct: 'B',
    },
    {
        Question: "How do you select an element with id 'demo'?",
        A: '*demo',
        B: '#demo',
        C: 'demo',
        D: '.demo',
        correct: 'B',
    },
    {
        Question: "How do you select elements with class name 'test'?",
        A: 'test',
        B: '#test',
        C: '.test ',
        D: '*test',
        correct: 'C',
    },
]
let CSStotal = CSSQuiz.length;
document.getElementById('CSSTotal').innerHTML = `Question ${CSStotal}`
let index = 0;
let right = 0;
let wrong = 0;
let CssQuestion = document.getElementById('CSSQuestion');
let CssOption = document.getElementsByClassName('options');

function CSSQuizLoad() {
    if (index == CSStotal) {
        EndQuiz();
    } else {
        reset();
    }

    let CssData = CSSQuiz[index];
    CssQuestion.innerHTML = `${index+1} ) ${CssData.Question}`
    CssOption[0].nextElementSibling.innerHTML = CssData.A;
    CssOption[1].nextElementSibling.innerHTML = CssData.B;
    CssOption[2].nextElementSibling.innerHTML = CssData.C;
    CssOption[3].nextElementSibling.innerHTML = CssData.D;
}

document.querySelector('button').addEventListener('click', () => {
    let check = optionCheck();
    let CssData = CSSQuiz[index];
    if (check == CssData.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    CSSQuizLoad();
    return;

});

function optionCheck() {
    for (let quizOption of CssOption) {
        if (quizOption.checked) {
            return quizOption.value;
        };
    };
};

function reset() {
    for (let quizOption of CssOption) {
        if (quizOption.checked) {
            return quizOption.checked = false
        }
    }

}

function EndQuiz() {
    let cssBox = document.getElementById('CSSbox');
    cssBox.innerHTML = `<h1>CSS Quiz Results</h1>
    Score: ${right} of ${CSStotal}
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> 
    `
    cssBox.style.textAlign = 'center';

    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }
}
CSSQuizLoad();