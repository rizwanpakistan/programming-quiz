let HTMLquiz = [{
        Question: 'What does HTML stand for?',
        A: 'Hyper Text Markup Language',
        B: 'Home Tool Markup Language',
        C: 'Hyperlink and Text Markup Language',
        D: 'Hyper Text Make Language',
        correct: 'A',
    },
    {
        Question: 'Who is Making the Web standards?',
        A: 'Mozila',
        B: 'The World Wide Web Consortium',
        C: 'Google',
        D: 'Microsoft',
        correct: 'B',
    },
    {
        Question: 'Choose the correct HTML Element for the Largest Heading?',
        A: 'h3',
        B: 'h6',
        C: 'h1',
        D: 'h5',
        correct: 'C',
    },
    {
        Question: 'What is the correct HTML Element for inserting a Line break?',
        A: 'break',
        B: 'br',
        C: 'b',
        D: 'bk',
        correct: 'B',
    },
    {
        Question: 'What is the correct HTML for adding a background color?',
        A: 'body style="bgcolor: red"',
        B: 'body background="red"',
        C: 'body bg="red"',
        D: 'body style="backgroundcolor:red"',
        correct: 'D',
    },
    {
        Question: 'Choose the correct HTML Element to define important text?',
        A: 'To link external stylesheets',
        B: 'To define the character set, page description, keywords, author, and other metadata',
        C: 'To include JavaScript files',
        D: 'To create a form',
        correct: 'B',
    },
    {
        Question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
        A: 'title',
        B: 'alt',
        C: 'src',
        D: 'href',
        correct: 'B',
    },
    {
        Question: 'Which element defines a paragraph in HTML?',
        A: 'p',
        B: 'para',
        C: 'paragraph',
        D: 'pg',
        correct: 'A',
    },
    {
        Question: 'How do you create a hyperlink in HTML?',
        A: 'a href="url" Link /a',
        B: 'link url="url" Link /link',
        C: 'a url="url" Link /a',
        D: 'href="url" Link /href',
        correct: 'A',
    },
    {
        Question: 'Which element is used to define an unordered list in HTML?',
        A: 'ol',
        B: 'ul',
        C: 'li',
        D: 'un orderList',
        correct: 'B',
    },
    {
        Question: 'How do you create an email link in HTML?',
        A: 'a href="mail" email@example.com /a',
        B: 'a href="mailto@example.com" email@example.com /a',
        C: 'mail href="email@example.com" email@example.com /mail',
        D: 'email href="email@example.com" email@example.com /email',
        correct: 'B',
    },
    {
        Question: 'Which element is used to specify a footer for a document or section in HTML?',
        A: 'foot',
        B: 'bottom',
        C: 'footer',
        D: 'section',
        correct: 'C',
    },
    {
        Question: 'What is the correct element for playing video files in HTML?',
        A: 'media',
        B: 'movie',
        C: 'video',
        D: 'file',
        correct: 'C',
    },
    {
        Question: 'Which element is used to define a table in HTML?',
        A: 'table',
        B: 'tab',
        C: 'td',
        D: 'tr',
        correct: 'A',
    },
    {
        Question: 'How do you make a numbered list in HTML?',
        A: 'ul',
        B: 'ol',
        C: 'li',
        D: 'list',
        correct: 'B',
    },

]

let totalHTMLquiz = HTMLquiz.length;
let index = 0;
let right = 0;
let wrong = 0;
document.getElementById('HTMLTotal').innerHTML = `Question ${totalHTMLquiz}`

let htmlQ = document.getElementById('HTMLQuestion');
let HTMLQuizoption = document.querySelectorAll('.options');

function HTMLQuizLoad() {
    if (index == totalHTMLquiz) {
        return endQuiz();
    } else {
        reset();
    }
    let HTMLdata = HTMLquiz[index];
    htmlQ.innerHTML = `${index+1} ) ${HTMLdata.Question}`;
    HTMLQuizoption[0].nextElementSibling.innerHTML = HTMLdata.A;
    HTMLQuizoption[1].nextElementSibling.innerHTML = HTMLdata.B;
    HTMLQuizoption[2].nextElementSibling.innerHTML = HTMLdata.C;
    HTMLQuizoption[3].nextElementSibling.innerHTML = HTMLdata.D;

}

let btn = document.querySelector('button')
button = btn.addEventListener('click', function() {

    let htmlval = optionfun();
    let htmldata = HTMLquiz[index];
    if (htmlval == htmldata.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    HTMLQuizLoad();
    return;
});

function optionfun() {
    let htmlval;
    HTMLQuizoption.forEach((optionValue) => {
        if (optionValue.checked) {
            htmlval = optionValue.value;
        }
    })
    return htmlval
}

function reset() {
    HTMLQuizoption.forEach((optionValue) => {
        if (optionValue) {
            return optionValue.checked = false
        }
    })
}

function endQuiz() {
    let box = document.getElementById('HTMLbox')
    box.innerHTML = `<h1>HTML Quiz Results</h1>
    Score: ${right} of ${totalHTMLquiz} 
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> `
    box.style.textAlign = 'center'
    if (right < 8) {
        document.getElementById('p').innerHTML = 'You must study much harder!'
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!'
    }
}
HTMLQuizLoad();