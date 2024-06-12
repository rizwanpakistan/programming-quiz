let JSQuiz = [{
        Question: 'How do you declare a JavaScript variable?',
        A: 'var carName;',
        B: 'variable carName;',
        C: 'Varname = varname',
        D: 'v carName;',
        correct: 'A',
    },
    {
        Question: 'What will the following code return: Boolean(10 > 9)',
        A: 'null',
        B: 'true',
        C: 'false',
        D: 'NaN',
        correct: 'B',
    },
    {
        Question: 'Which operator is used to assign a value to a variable?',
        A: '=',
        B: '[]',
        C: '-',
        D: '{}',
        correct: 'A',
    },
    {
        Question: 'Which event occurs when the user clicks on an HTML element?',
        A: 'onclick ',
        B: 'onmouseover',
        C: 'onchange',
        D: 'onmouseclick',
        correct: 'A',
    },
    {
        Question: "How can you detect the client's browser name?",
        A: 'browser.name  ',
        B: 'client.navName',
        C: 'navigator.appName',
        D: 'browser.client',
        correct: 'C',
    },
    {
        Question: 'JavaScript is the same as Java.',
        A: 'little bit',
        B: 'Same',
        C: 'No',
        D: 'Yes',
        correct: 'C',
    },
    {
        Question: 'How can you add a comment in a JavaScript?',
        A: '//This is a comment ',
        B: "'This is a comment",
        C: '!--This is a comment--',
        D: '#this is comment',
        correct: 'A',
    },
    {
        Question: 'How does a FOR loop start?',
        A: 'for (i = 0; i <= 5)',
        B: 'for (i <= 5; i++)',
        C: 'for i = 1 to 5',
        D: 'for (i = 0; i <= 5; i++) ',
        correct: 'D',
    },
    {
        Question: 'How does a WHILE loop start?',
        A: 'while (i <= 10) ',
        B: 'while (i <= 10; i++)',
        C: 'while i = 1 to 10',
        D: 'while i <= 1 to 10',
        correct: 'A',
    },
    {
        Question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        A: 'if i =! 5 then',
        B: 'if (i != 5)  ',
        C: 'if (i <> 5)',
        D: 'if i <> 5',
        correct: 'B',
    },
]
let JStotal = JSQuiz.length;
document.getElementById('JSTotal').innerHTML = `Question ${JStotal}`
let index = 0;
let right = 0;
let wrong = 0;
let JSQuestion = document.getElementById('JSSQuestion');
let JSoptions = document.querySelectorAll('.options');


function JSQuizLoad() {
    if (index == JStotal) {
        EndQuiz();
    } else {
        reset();
    }

    let JsData = JSQuiz[index];
    JSQuestion.innerHTML = `${index+1} ) ${JsData.Question}`;
    JSoptions[0].nextElementSibling.innerHTML = JsData.A;
    JSoptions[1].nextElementSibling.innerHTML = JsData.B;
    JSoptions[2].nextElementSibling.innerHTML = JsData.C;
    JSoptions[3].nextElementSibling.innerHTML = JsData.D;
}
document.querySelector('button').addEventListener('click', () => {
    let ValueCheck = JSValue();
    let JsData = JSQuiz[index];
    if (ValueCheck == JsData.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    JSQuizLoad();
    return;
})

function JSValue() {
    // for (let Jsopt of JSoptions) {
    //     if (Jsopt.checked) {
    //         console.log(Jsopt.value);
    //     } else {
    //         console.log('no');
    //     }
    // }
    let val_retrun
    JSoptions.forEach((checkvalue) => {
        if (checkvalue.checked) {
            val_retrun = checkvalue.value;
        }
    })
    return val_retrun
}

function reset() {
    JSoptions.forEach((checkvalue) => {
        if (checkvalue) {
            return checkvalue.checked = false;
        }
    })
}

function EndQuiz() {
    let JSbox = document.getElementById('JSbox');
    JSbox.style.textAlign = 'center';
    JSbox.innerHTML = ` <h1>Java Script Quiz Results</h1>
    Score: ${right} of ${JStotal}
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> 
    `
    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }
}
JSQuizLoad();