let RubyQuiz = [{
        Question: 'What is the command to output text in Ruby?',
        A: 'printf',
        B: 'echo',
        C: 'console.log',
        D: 'puts',
        correct: 'D',
    },

    {
        Question: 'How do you define a method in Ruby?',
        A: 'function myMethod',
        B: 'def myMethod',
        C: 'define myMethod',
        D: 'method myMethod',
        correct: 'B',
    },
    {
        Question: 'What is the correct syntax to create a new instance of a class in Ruby?',
        A: 'ClassName.new',
        B: 'new ClassName',
        C: 'ClassName.create',
        D: 'create ClassName',
        correct: 'A',
    },
    {
        Question: 'Which of the following is not a valid variable name in Ruby?',
        A: '@variable',
        B: '$variable',
        C: 'variable',
        D: '2variable',
        correct: 'D',
    },
    {
        Question: 'What does the yield keyword do in Ruby?',
        A: 'It defines a block',
        B: 'It passes control to a block',
        C: 'It creates a lambda function',
        D: 'It defines a constant',
        correct: 'B',
    },
    {
        Question: 'How do you create an array in Ruby?',
        A: 'array = {}',
        B: 'array = []',
        C: 'array = ()',
        D: 'array = ||',
        correct: 'B',
    },
    {
        Question: 'Which method is called when an object is initialized in Ruby?',
        A: 'initialize',
        B: 'constructor',
        C: 'init',
        D: 'new',
        correct: 'A',
    },
    {
        Question: 'What is a mixin in Ruby?',
        A: 'A way to inherit multiple classes',
        B: 'A way to add functionality to classes using modules',
        C: 'A special type of class',
        D: 'A built-in Ruby function',
        correct: 'B',
    },
    {
        Question: 'How do you comment a single line in Ruby?',
        A: '//',
        B: '##',
        C: '--',
        D: '#',
        correct: 'D',
    },
    {
        Question: '5.times { print "Hello " }',
        A: 'Hello Hello Hello Hello Hello',
        B: 'Hello 5',
        C: '5 Hello',
        D: 'Hello',
        correct: 'A',
    },
]
let rubytotal = RubyQuiz.length;
let index = 0;
let right = 0;
let wrong = 0;
document.getElementById('RubyTotal').innerHTML = `Question ${rubytotal}`;
let rubyQuestion = document.getElementById('RubyQuestion');
let rubyOptions = document.getElementsByClassName('options');

function RubyQuizLoad() {
    if (index == rubytotal) {
        EndQuiz();
    } else {
        reset();
    }
    let rubyData = RubyQuiz[index];
    rubyQuestion.innerHTML = `${index+1} ) ${rubyData.Question}`;
    rubyOptions[0].nextElementSibling.innerHTML = rubyData.A;
    rubyOptions[1].nextElementSibling.innerHTML = rubyData.B;
    rubyOptions[2].nextElementSibling.innerHTML = rubyData.C;
    rubyOptions[3].nextElementSibling.innerHTML = rubyData.D;
}

document.querySelector('button').addEventListener('click', () => {
    let valcheck = RubyValue();
    let rubyData = RubyQuiz[index];
    if (valcheck == rubyData.correct) {
        right++;
    } else {
        wrong++;
    };
    index++;
    RubyQuizLoad();
    return;
});

function RubyValue() {
    for (let val of rubyOptions) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of rubyOptions) {
        if (val.checked) {
            return val.checked = false;
        };
    };
};

function EndQuiz() {
    let rubybox = document.getElementById('Rubybox');
    rubybox.style.textAlign = 'center';
    rubybox.innerHTML = ` <h1>Ruby Quiz Results</h1>
    Score: ${right} of ${rubytotal} <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a>`;

    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }

}
RubyQuizLoad();