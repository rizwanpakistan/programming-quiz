let JavaQuiz = [{
        Question: 'What is the default value of an uninitialized boolean variable in Java?',
        A: 'true',
        B: 'false',
        C: '0',
        D: 'null',
        correct: 'B',
    },

    {
        Question: 'Which of the following is not a Java feature?',
        A: 'Object-oriented',
        B: 'Use of pointers',
        C: 'Portable',
        D: 'Dynamic',
        correct: 'B',
    },
    {
        Question: 'What is the size of an int data type in Java?',
        A: '8-bit',
        B: '16-bit',
        C: '32-bit',
        D: '64-bit',
        correct: 'C',
    },
    {
        Question: 'How do you declare a constant in Java?',
        A: 'constant int MAX = 100;',
        B: 'final int MAX = 100;',
        C: 'static int MAX = 100;',
        D: 'const int MAX = 100;',
        correct: 'B',
    },
    {
        Question: 'Which of the following is the correct syntax for the main method in Java?',
        A: 'public static void main(String args[])',
        B: 'public void main(String args[])',
        C: 'public static main(String args[])',
        D: 'd) static public void main(String args[])',
        correct: 'A',
    },
    {
        Question: 'Which of the following is used to create an instance of a class in Java?',
        A: 'new',
        B: 'create',
        C: 'instance',
        D: 'generate',
        correct: 'A',
    },
    {
        Question: "What is the purpose of the super keyword in Java?",
        A: 'To create a new class',
        B: 'To refer to the parent class',
        C: 'To declare a constant',
        D: 'To handle exceptions',
        correct: 'B',
    },
    {
        Question: 'Which of the following is not an access modifier in Java?',
        A: 'public',
        B: 'private',
        C: 'protected',
        D: 'external',
        correct: 'D',
    },
    {
        Question: 'How do you define an abstract method in Java?',
        A: 'abstract void myMethod();',
        B: 'void abstract myMethod();',
        C: 'void myMethod() abstract;',
        D: 'abstract myMethod() void;',
        correct: 'A',
    },
    {
        Question: 'Which collection class allows you to access its elements by a unique key?',
        A: 'List',
        B: 'Set',
        C: 'Map',
        D: 'Array',
        correct: 'C',
    },
]
let Javatotal = JavaQuiz.length;
let index = 0;
let right = 0;
let wrong = 0;
document.getElementById('JavaTotal').innerHTML = `Question ${Javatotal}`;
let javaQuestion = document.getElementById('JavaQuestion');
let javaOption = document.getElementsByClassName('options');

function JavaQuizLoad() {
    if (index == Javatotal) {
        EndQuiz();
    } else {
        reset();
    }

    let javaData = JavaQuiz[index];
    javaQuestion.innerHTML = `${index+1} ) ${javaData.Question}`
    javaOption[0].nextElementSibling.innerHTML = javaData.A;
    javaOption[1].nextElementSibling.innerHTML = javaData.B;
    javaOption[2].nextElementSibling.innerHTML = javaData.C;
    javaOption[3].nextElementSibling.innerHTML = javaData.D

}
JavaQuizLoad();

document.querySelector('button').addEventListener('click', function() {
    let valuecheck = JavaValue();
    let javaData = JavaQuiz[index];
    if (valuecheck == javaData.correct) {
        right++;
    } else {
        wrong++;
    };
    index++;
    JavaQuizLoad();
    return;
});

function JavaValue() {
    for (let val of javaOption) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of javaOption) {
        if (val.checked) {
            return val.checked = false
        };
    };
};

function EndQuiz() {
    let JavaBox = document.getElementById('Javabox');
    JavaBox.style.textAlign = 'center';
    JavaBox.innerHTML = ` <h1>Java Quiz Results</h1>
    Score: ${right} of ${Javatotal}
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a>`;
    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }
}