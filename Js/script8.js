let PythonQuiz = [{
        Question: 'print(2 ** 3) What is the output of the following code? ',
        A: '5',
        B: '6',
        C: '8',
        D: '9',
        correct: 'C',
    },
    {
        Question: 'Which of the following is a mutable data type in Python?',
        A: 'Tuple',
        B: 'String',
        C: 'List',
        D: 'Integer',
        correct: 'C',
    },
    {
        Question: 'How do you start a function in Python?',
        A: 'function myFunction():',
        B: 'def myFunction():',
        C: 'define myFunction():',
        D: 'func myFunction():',
        correct: 'B',
    },
    {
        Question: 'Which of the following is a Python tuple?',
        A: '[1, 2, 3]',
        B: "{1, 2, 3}",
        C: "(1, 2, 3)",
        D: "<1, 2, 3>",
        correct: 'C',
    },
    {
        Question: 'print(5 // 2) What is the output of the following code?',
        A: '2.5',
        B: '2',
        C: '3',
        D: '2.0',
        correct: 'B',
    },
    {
        Question: 'How do you create a dictionary in Python?',
        A: 'dict = {key1, key2, key3}',
        B: 'dict = [key1: value1, key2: value2]',
        C: 'dict = {key1: value1, key2: value2}',
        D: 'dict = (key1: value1, key2: value2)',
        correct: 'C',
    },
    {
        Question: 'Which of the following is used to define a block of code in Python?',
        A: 'Curly braces {}',
        B: 'Parentheses ()',
        C: 'Indentation',
        D: 'Square brackets []',
        correct: 'C',
    },
    {
        Question: 'How do you start a comment in Python?',
        A: '//',
        B: '--',
        C: '#',
        D: '/* */',
        correct: '',
    },
    {
        Question: 'How do you add an element to a list in Python?',
        A: 'list.add(element)',
        B: 'list.append(element)',
        C: 'list.insert(element)',
        D: 'list.push(element)',
        correct: 'B',
    },
    {
        Question: 'print("Hello" * 3) What will be the output of the following code?',
        A: 'Hello 3',
        B: 'HelloHelloHello',
        C: 'Hello Hello Hello',
        D: 'Error',
        correct: 'B',
    },
];
let pythontotal = PythonQuiz.length;
let index = 0;
let right = 0;
let wrong = 0;
document.getElementById('PythonTotal').innerHTML = `Question ${pythontotal}`;
let PythonQuestion = document.getElementById('PythonQuestion');
let PythonOption = document.getElementsByClassName('options');

function PythonQuizLoad() {
    if (index == pythontotal) {
        EndQuiz();
    } else {
        reset();
    }
    let PythonData = PythonQuiz[index];
    PythonQuestion.innerHTML = `${index+1} ) ${PythonData.Question}`
    PythonOption[0].nextElementSibling.innerHTML = PythonData.A;
    PythonOption[1].nextElementSibling.innerHTML = PythonData.B;
    PythonOption[2].nextElementSibling.innerHTML = PythonData.C;
    PythonOption[3].nextElementSibling.innerHTML = PythonData.D;
};

document.querySelector('button').addEventListener('click', () => {
    let valcheck = PythonValue();
    let PythonData = PythonQuiz[index];
    if (valcheck == PythonData.correct) {
        right++;
    } else {
        wrong++
    };
    index++;
    PythonQuizLoad();
    return;
})

function PythonValue() {
    for (let val of PythonOption) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of PythonOption) {
        if (val.checked) {
            return val.checked = false;
        };
    };
};

function EndQuiz() {
    let Pythonbox = document.getElementById('Pythonbox');
    Pythonbox.style.textAlign = 'center';
    Pythonbox.innerHTML = `<h1>Python Quiz Results</h1>
    Score: ${right} of ${pythontotal} <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a>`;

    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }
}
PythonQuizLoad();