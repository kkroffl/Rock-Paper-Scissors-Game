const score = JSON.parse(localStorage.getItem('score')) || { // object
        wins: 0,
        losses: 0,
        ties: 0
      }; 

function playGame(playerMove) { // function
    const random = Math.floor(Math.random() * 3) + 1;
    let computerMove = "";

    if (random === 1) computerMove = "rock";
    else if (random === 2) computerMove = "paper";
    else computerMove = "scissors";

    if (playerMove === computerMove) {
        result = "It's a Tie.";
    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) {
        result = "You win.";
    } else {
        result = "You lose.";
    }

    if (result === "You win.") {
        score.wins += 1;
    } 
    else if (result === "You lose.") {
        score.losses += 1;
    }
    if (result === "It's a Tie.") {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

    console.log(localStorage.getItem('score'));
}

const rockBtn = document.getElementById('rock')
rockBtn.addEventListener('click', () => {
  playGame('rock');
});

const paperBtn = document.getElementById('paper')
paperBtn.addEventListener('click', () => {
  playGame('paper');
});

const scissorsBtn = document.getElementById('scissors')
scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
});

const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
});