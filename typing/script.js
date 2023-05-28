
const text = document.getElementById('text');
const input = document.getElementById('input');

const mil = document.getElementById('mil');
const sec = document.getElementById('sec');
const min = document.getElementById('min');

const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')
const restartBtn = document.getElementById('restart')
const stopBtn = document.getElementById('stop')

resetBtn.style.display = "none"
stopBtn.style.display = "none"
restartBtn.style.display = "none"

const arrayData = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse officiis deleniti laudantium expedita ea dolorem ipsam enim dolore neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem veniam incidunt cum perspiciatis mollitia! Deleniti magni deserunt repellat animi? Eum ullam repudiandae cum optio soluta."
]

text.innerHTML = arrayData[1];

input.disabled = true;

let count = 0; 
let second = 0;
let minute = 0;
let isStart = false;

function timer(){
    if(isStart){
        count++; 
        if(count==100){
            count = 0;
            second++;
            if(second==60){
                second = 0;
                minute++;
                min.innerHTML = minute;
            }
            sec.innerHTML = second;
            if(minute==1){
                isStart = false;
                input.disabled = "true"
                restartBtn.style.display = "block"
                resetBtn.style.display = "none"
                stopBtn.style.display = "none"
                checkAccuracy();
            }
        }
        mil.innerHTML = count;
        setTimeout(timer,10);
    }
}

function start(){
    isStart = true;
    resetBtn.style.display = "block";
    stopBtn.style.display = "block";
    startBtn.style.display = "none";
    input.disabled = false;
    timer();
}

function reset(){
    isStart = false;
    minute = 0;
    second = 0
    count = 0;

    min.innerHTML = minute;
    sec.innerHTML = second;
    mil.innerHTML = count;

    input.disabled = "true"
    input.value = ""
    startBtn.style.display = "block";
    resetBtn.style.display = "none";
    stopBtn.style.display = "none";
}

function restart(){
    isStart = false;
    reset();
    startBtn.style.display = "block";
    restartBtn.style.display = "none";
}

function stop(){
    isStart = false;
}

function checkAccuracy(){
    let score = 0;
    const textArr = text.value.split(" ")
    const valArr = input.value.split(" ")
    for(let i=0;i<textArr.length;i++){
        if(textArr[i] == valArr[i]){
            score++;
        }
    }
    
    alert("Score "+(score*(10/textArr.length)))
}