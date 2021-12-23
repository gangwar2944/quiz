console.log('hyy bro this is vishal gangwar')
const quizeDB =[
    {
        question:"1) HTML stands for -",
        a:'HighText Machine Language',
        b:'HyperText and links Markup Language',
        c:'HyperText Markup Language',
        d:'None of these',
        ans:"ans1"
    },
    {
        question:"2) How to create a hyperlink in HTML?",
        a:'<a href = "www.javatpoint.com"> javaTpoint.com </a>',
        b:'<a url = "www.javatpoint.com" javaTpoint.com /a>',
        c:'<a link = "www.javatpoint.com"> javaTpoint.com </a>',
        d:'<a> www.javatpoint.com <javaTpoint.com /a>',
        ans:"ans1"
    },
    {
        question:"3) The correct sequence of HTML tags for starting a webpage is -",
        a:'Head, Title, HTML, body',
        b:'HTML, Body, Title, Head',
        c:'HTML, Head, Title, Body',
        d:'HTML, Head, Title, Body',
        ans:"ans3"
    },
    {
        question:"4)Which of the following element is responsible for making the text bold in HTML?",
        a:'<pre>',
        b:'<a>',
        c:'<b>',
        d:'<br>',
        ans:'ans3'
    },
    {
        question:"5) Which of the following tag is used to insert a line-break in HTML?",
        a:'<br>',
        b:'<a>',
        c:'<pre>',
        d:'<b>',
        ans:'ans1'
    },
    {
        question:"6) How to create an unordered list (a list with the list items in bullets) in HTML?",
        a:'<ul>',
        b:'<ol>',
        c:'<li>',
        d:'<i>',
        ans:'ans1'
    },
]
const question = document.querySelector(".question");
const option1 =document.getElementById('option1');
const option2 =document.getElementById('option2');
const option3 =document.getElementById('option3');
const option4 =document.getElementById('option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList =quizeDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
           answer = curAnsElem.id
        }
    });
    return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
  
    
    if(checkedAnswer==quizeDB[questionCount].ans){
        score++;
    }
    questionCount++;

    deselectAll();
    if(questionCount<quizeDB.length){
        loadQuestion();
    }
    else {
        showScore.innerHTML=`
       <h3> your score is ${score}/${quizeDB.length}</h3>
       <button class="btn" onclick="location.reload()">play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})