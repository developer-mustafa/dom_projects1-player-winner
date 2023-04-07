// Selecting elements
const player1scoreDisplay = document.getElementById("player1score");
const player2scoreDisplay = document.getElementById("player2score");
const winningScoreDisplay = document.querySelector("h2 span");
const inputScore = document.getElementById("inputScore");
const player1btn = document.getElementById("player1Btn");
const player2btn = document.getElementById("player2Btn");
const resetButton = document.getElementById("resetBtn");

// Initializing variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

// Winner function
function winner() {
    if (p1Score === winningScore) {
        player1scoreDisplay.classList.add('winner');
    } else {
        player2scoreDisplay.classList.add('winner');
    }
    gameOver = true;
    player1btn.disabled = true;
    player2btn.disabled = true;
}

// Reset function
function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    player1scoreDisplay.textContent = 0;
    player2scoreDisplay.textContent = 0;
    player1scoreDisplay.classList.remove('winner');
    player2scoreDisplay.classList.remove('winner');
    player1btn.disabled = false;
    player2btn.disabled = false;
}

// Player 1 event
player1btn.addEventListener("click", () => {
    if (!gameOver) {
        p1Score++;
        player1scoreDisplay.textContent = p1Score;
        if (p1Score === winningScore) {
            winner();
        }
    }
});

// Player 2 event
player2btn.addEventListener("click", () => {
    if (!gameOver) {
        p2Score++;
        player2scoreDisplay.textContent = p2Score;
        if (p2Score === winningScore) {
            winner();
        }
    }
});

// Input score event
inputScore.addEventListener('change', () => {
    winningScore = Number(inputScore.value);
    winningScoreDisplay.textContent = winningScore;

    // Add this temporary code to make sure the winningScoreDisplay element is visible
    winningScoreDisplay.style.display = 'inline-block';
    console.log(winningScoreDisplay.textContent);
    if (!gameOver) {
        reset();
    }
});


// Reset button event
resetButton.addEventListener('click', reset);
