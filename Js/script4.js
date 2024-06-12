let NodeQuiz = [{
        Question: 'What is Node.js built on?',
        A: 'JavaScript',
        B: 'Python',
        C: 'Ruby',
        D: 'PHP',
        correct: 'A',
    },
    {
        Question: 'Which of the following is a Node.js web application framework?',
        A: 'Django',
        B: 'Flask',
        C: 'Express',
        D: 'Laravel',
        correct: 'C',
    },
    {
        Question: 'How do you install a Node.js package?',
        A: 'npm install <package-name>',
        B: 'node install <package-name>',
        C: 'npm get <package-name>',
        D: 'node get <package-name>',
        correct: 'A',
    },
    {
        Question: 'What does the "fs" module in Node.js stand for?',
        A: 'File Structure',
        B: 'File System',
        C: 'File Script',
        D: 'File Storage',
        correct: 'B',
    },
    {
        Question: 'Which method is used to create a server in Node.js?',
        A: 'http.createServer()',
        B: 'http.newServer()',
        C: 'http.startServer()',
        D: 'http.initServer()',
        correct: 'A',
    },
    {
        Question: 'What does "npm" stand for?',
        A: 'Node Package Manager',
        B: 'Node Project Manager',
        C: 'Node Programming Manager',
        D: 'Node Package Module',
        correct: 'A',
    },
    {
        Question: 'How do you include a module in Node.js?',
        A: 'import <module>',
        B: 'include <module>',
        C: 'require("< module >")',
        D: 'load <module>',
        correct: 'C',
    },
    {
        Question: 'Which of the following is used to handle asynchronous operations in Node.js?',
        A: 'Callbacks',
        B: 'Promises',
        C: 'Async/Await',
        D: 'All of the above',
        correct: 'D',
    },
    {
        Question: 'What is the default scope of Node.js modules?',
        A: 'Global',
        B: 'Local to the module',
        C: 'Private',
        D: 'Public',
        correct: 'B',
    },
    {
        Question: 'Which command is used to check the Node.js version?',
        A: 'node -v',
        B: 'node --version',
        C: 'npm -v',
        D: 'Both a and b',
        correct: 'D',
    }
]
let NodeTotal = NodeQuiz.length;
document.getElementById('NodeTotal').innerHTML = `Question: ${NodeTotal}`;
let index = 0;
let right = 0;
let wrong = 0;
let nodeQuestion = document.getElementById('NodeQuestion');
let NodeOptions = document.getElementsByClassName('options');

function NodeQuizLoad() {
    if (index == NodeTotal) {
        endQuiz();
    } else {
        reset();
    }
    let Nodedata = NodeQuiz[index];
    nodeQuestion.innerHTML = `${index+1} ) ${Nodedata.Question}`;
    NodeOptions[0].nextElementSibling.innerHTML = Nodedata.A;
    NodeOptions[1].nextElementSibling.innerHTML = Nodedata.B;
    NodeOptions[2].nextElementSibling.innerHTML = Nodedata.C;
    NodeOptions[3].nextElementSibling.innerHTML = Nodedata.D;
}
document.querySelector('button').addEventListener('click', () => {
    let valCheck = NodeOptionCheck();
    let Nodedata = NodeQuiz[index];
    if (valCheck == Nodedata.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    NodeQuizLoad();
    return
});

function NodeOptionCheck() {
    for (let val of NodeOptions) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of NodeOptions) {
        if (val.checked) {
            return val.checked = false;
        };
    };
};

function endQuiz() {
    let box = document.getElementById('Nodebox');
    box.style.textAlign = 'center';
    box.innerHTML = `<h1>Node JS Quiz Results</h1>
    Score: ${right} of ${NodeTotal}
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> 
    `
    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!'
    }
}
NodeQuizLoad();