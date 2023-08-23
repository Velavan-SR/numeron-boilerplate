// Iteration 5: Store the player score and display it on the game over screen
const playAgain = document.getElementById('play-again-button');

playAgain.addEventListener('click',() => {
    location.href = "game.html"
})

const scoreBoard = document.getElementById('score-board')
scoreBoard.innerText = localStorage.getItem('score')