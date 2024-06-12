let DataBaseQuiz = [{
        Question: 'What does SQL stand for?',
        A: 'Structured Query Language',
        B: 'Simple Query Language',
        C: 'Standard Query Language',
        D: 'Sequential Query Language',
        correct: 'A',
    },
    {
        Question: 'Which of the following is a NoSQL database?',
        A: 'MySQL',
        B: 'PostgreSQL',
        C: 'MongoDB',
        D: 'SQLite',
        correct: 'C',
    },
    {
        Question: 'Which SQL command is used to retrieve data from a database?',
        A: 'GET',
        B: 'RETRIEVE',
        C: 'FETCH',
        D: 'SELECT',
        correct: 'D',
    },
    {
        Question: 'What does the ACID acronym stand for in database systems?',
        A: 'Atomicity, Consistency, Isolation, Durability',
        B: 'Accuracy, Consistency, Isolation, Durability',
        C: 'Atomicity, Consistency, Integrity, Durability',
        D: 'Atomicity, Consistency, Isolation, Dependency',
        correct: 'A',
    },
    {
        Question: 'Which of the following is a primary key?',
        A: 'A unique identifier for a record',
        B: 'A foreign key in another table',
        C: 'An index on a column',
        D: 'A non-unique identifier for a record',
        correct: 'A',
    },
    {
        Question: 'What is normalization in databases?',
        A: 'Organizing data to reduce redundancy',
        B: 'Denormalizing data for faster access',
        C: 'Encrypting data for security',
        D: 'Indexing data for quick retrieval',
        correct: 'A',
    },
    {
        Question: 'Which command is used to remove all records from a table but keep the table structure?',
        A: 'DROP',
        B: 'DELETE',
        C: 'TRUNCATE',
        D: 'REMOVE',
        correct: 'C',
    },
    {
        Question: 'What is a foreign key?',
        A: 'A unique key for each record',
        B: 'A key used to link two tables together',
        C: 'A key that cannot be null',
        D: 'A key that is automatically incremented',
        correct: 'B',
    },
    {
        Question: 'Which SQL function is used to count the number of rows in a table?',
        A: 'SUM()',
        B: 'COUNT()',
        C: 'TOTAL()',
        D: 'ROWS()',
        correct: 'B',
    },
    {
        Question: 'What type of database is best suited for handling large volumes of unstructured data?',
        A: 'Relational databases',
        B: 'NoSQL databases',
        C: 'In-memory databases',
        D: 'Distributed databases',
        correct: 'B',
    }
]
let DataBaseTotal = DataBaseQuiz.length;
document.getElementById('databaseTotal').innerHTML = `Question: ${DataBaseTotal}`;
let index = 0;
let right = 0;
let wrong = 0;
let databaseQuestion = document.getElementById('dataBaseQuestion');
let dataBaseOption = document.getElementsByClassName('options');

function DataBaseQuizLoad() {
    if (index == DataBaseTotal) {
        EndQuiz();
    } else {
        reset();
    }

    let DataBase = DataBaseQuiz[index];
    databaseQuestion.innerHTML = `${index+1} ) ${DataBase.Question}`;
    dataBaseOption[0].nextElementSibling.innerHTML = DataBase.A;
    dataBaseOption[1].nextElementSibling.innerHTML = DataBase.B;
    dataBaseOption[2].nextElementSibling.innerHTML = DataBase.C;
    dataBaseOption[3].nextElementSibling.innerHTML = DataBase.D
}
DataBaseQuizLoad();

document.querySelector('button').addEventListener('click', () => {
    let optVal = valueCheck();
    let DataBase = DataBaseQuiz[index];
    if (optVal == DataBase.correct) {
        right++;
    } else {
        wrong++;
    };
    index++;
    DataBaseQuizLoad();
    return;
});

function valueCheck() {
    for (let val of dataBaseOption) {
        if (val.checked) {
            return val.value;
        };
    };
};

function reset() {
    for (let val of dataBaseOption) {
        if (val.checked) {
            return val.checked = false;
        };
    };
};

function EndQuiz() {
    let DataBasebox = document.getElementById('dataBasebox');
    DataBasebox.style.textAlign = 'center';
    DataBasebox.innerHTML = ` <h1>Data Base Quiz Results</h1>
    Score: ${right} of ${DataBaseTotal}
    <p id="p"></p>
    <a href="index.html" class="btn btn-primary">Back to home</a> 
    `
    if (right < 5) {
        document.getElementById('p').innerHTML = 'You must study much harder!';
    } else {
        document.getElementById('p').innerHTML = 'You can be proud of yourself!';
    }
}