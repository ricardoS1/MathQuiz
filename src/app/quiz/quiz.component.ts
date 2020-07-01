import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        loadDoc();
        setValues();
    }

    newQuestions() {
        setValues();
    }

    pullAnswer() {
        getAnswer(randnum);
    }
}

let jsonData;
let randnum;

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            jsonData = this.response;
            jsonData = (JSON.parse(jsonData));
            console.log(jsonData[2].value1);
        }
    };
    xhttp.open('GET', 'http://127.0.0.1:5000/', false);
    xhttp.send();
    // console.log(jsonData);
    return;
}

function setValues() {
    const num = Math.floor(Math.random() * 12);
    console.log(jsonData);
    // @ts-ignore
    document.getElementById('value1').value = jsonData[num].value1.toString();
    // @ts-ignore
    document.getElementById('value2').value = jsonData[num].value2.toString();
    document.getElementById('question').innerHTML = 'QuestionID ' + jsonData[num].questionId.toString();
    document.getElementById('operator').innerHTML = jsonData[num].operator.toString();
    randnum = num;
    return;
}

function getAnswer(n) {
    let ans;
    // @ts-ignore
    const submitted = (document.getElementById('answer').value);
    const v1 = jsonData[n].value1;
    const v2 = jsonData[n].value2;
    const op = jsonData[n].operator;
    if (op === '+') {
        console.log('Real Ans ' + (v1 + v2));
        ans = (v1 + v2);
    }
    if (op === '-') {
        console.log('Real Ans ' + (v1 - v2));
        ans = (v1 - v2);
    }
    if (op === '*') {
        console.log('Real Ans ' + (v1 * v2));
        ans = (v1 * v2);
    }
    if (op === '/') {
        console.log('Real Ans ' + (v1 / v2));
        ans = (v1 / v2);
    }
    if (parseFloat(submitted) !== parseFloat(ans)) {
        window.alert('Your answer is incorrect. The correct answer is: ' + ans);
    }
    else {
        window.alert('Your answer is correct. Well done!!!...');
    }
}
