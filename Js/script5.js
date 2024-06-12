let ReactQuiz = [{
        Question: 'What is React.js primarily used for?',
        A: 'Server-side scripting',
        B: 'Data analysis',
        C: 'Building user interfaces',
        D: 'Network security',
        correct: 'C',
    },
    {
        Question: 'Which company developed React.js?',
        A: 'Google',
        B: 'Microsoft',
        C: 'Facebook',
        D: 'Apple',
        correct: 'C',
    },
    {
        Question: 'How do you create a React component?',
        A: 'By using the component keyword',
        B: 'By using the React.createComponent function',
        C: 'By using a class or function',
        D: 'By using the module.exports function',
        correct: 'C',
    },
    {
        Question: 'What is the purpose of the render() method in React?',
        A: 'To compile JSX code',
        B: 'To render HTML to the DOM',
        C: 'To handle user events',
        D: 'To fetch data from APIs',
        correct: 'B',
    },
    {
        Question: 'How do you pass data to a child component in React?',
        A: 'Using states',
        B: 'Using events',
        C: 'Using props',
        D: 'Using context',
        correct: 'C',
    },
    {
        Question: 'What is a state in React?',
        A: 'A function to fetch data',
        B: 'An object to store component data',
        C: 'A method to handle events',
        D: 'A hook to manage side effects',
        correct: 'B',
    },
    {
        Question: 'Which hook is used to add state to functional components in React?',
        A: 'useEffect',
        B: 'useState',
        C: 'useReducer',
        D: 'useContext',
        correct: 'B',
    },
    {
        Question: 'How do you handle side effects in React functional components?',
        A: 'Using useState',
        B: 'Using useEffect',
        C: 'Using useRef',
        D: 'Using useReducer',
        correct: 'B',
    },
    {
        Question: 'What does JSX stand for in React?',
        A: 'JavaScript XML',
        B: 'avaScript Extended',
        C: 'Java Syntax Extension',
        D: 'JavaScript XHTML',
        correct: 'A',
    },
    {
        Question: 'Which command is used to create a new React application using Create React App?',
        A: 'npx create-react-app <app-name>',
        B: 'npm new react-app <app-name>',
        C: 'npm create-react-app <app-name>',
        D: 'node create-react-app <app-name>',
        correct: 'A',
    }
]
let reactTotal = ReactQuiz.length;
document.getElementById('ReactTotal').innerHTML = `Question: ${reactTotal}`;
let index = 0;
let right = 0;
let wrong = 0;
let reactQuestion = document.getElementById('ReactQuestion');
let reactOption = document.getElementsByClassName('options');

function ReactQuizLoad() {
    if (index == reactTotal) {
        EndQuiz();
    } else {
        reset();
    }
    let reactData = ReactQuiz[index];
    reactQuestion.innerHTML = `${index+1} ) ${reactData.Question}`;
    reactOption[0].nextElementSibling.innerHTML = reactData.A;
    reactOption[1].nextElementSibling.innerHTML = reactData.B;
    reactOption[2].nextElementSibling.innerHTML = reactData.C;
    reactOption[3].nextElementSibling.innerHTML = reactData.D
}
document.querySelector('button').addEventListener('click', () => {
    let valCheck = ReackValueCheck();
    let reactData = ReactQuiz[index];
    if (valCheck == reactData.correct) {
        right++;
    } else {
        wrong++;
    };
    index++;
    ReactQuizLoad();
    return;
});

function ReackValueCheck() {
    for (let val of reactOption) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of reactOption) {
        if (val.checked) {
            return val.checked = false
        };
    };
};

function EndQuiz() {
    let box = document.getElementById('Reactbox');
    box.style.textAlign = 'center';
    box.innerHTML = `<h1> React JS Quiz Results</h1>
    Score: ${right} of ${reactTotal};
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> 
    `
    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!'
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!'
    }

}
ReactQuizLoad();