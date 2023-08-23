// Iteration 2: Generate 2 random number and display it on the screen
const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
let number1 = randomNum();
let number2 = randomNum();
num1.innerText = number1;
num2.innerText = number2;
let score = 0;

function randomNum(){

    let x = Math.floor(Math.random()*100)+1;
    return x;

}

// Iteration 3: Make the options button functional

const relButtons = document.getElementById('buttons');
relButtons.addEventListener('click',(e) => {
    compareNums(e.target.id);
})

function compareNums(op){
    if (op=='greater-than' && number1>number2 || op=='lesser-than' && number1<number2 || op=='equal-to' && number1==number2){
        score++;
        newNums();
        time=6;
    }else{
        gameOver()
    }
}

function newNums(){
    number1 = randomNum();
    number2 = randomNum();
    num1.innerText = number1;
    num2.innerText = number2;
}

// Iteration 4: Build a timer for the game

const timerr = document.getElementById('timer');
let time = 6;

function timer(){
    if(time==1){
        gameOver();
    }
    time--
    timerr.innerText = time;
 }

setInterval(timer,1000)

function gameOver(){
    window.location.href = "gameover.html"
    localStorage.setItem('score',score)
}