const choices = document.querySelector("#choices");
const scores = document.querySelector("#scores");
const choicePara = document.querySelector("#choicePara");
const scorePara = document.querySelector("#scorePara");
choices.appendChild(choicePara);
scores.appendChild(scorePara);

const list = ["rock", "paper", "scissors"];

function getCompChoice() {
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

let playerScore = 0;
let compScore = 0;

function updateChoice(playerResult, compResult) {
  choicePara.textContent = ""
  choicePara.textContent = `Player: ${playerResult}. Computer: ${compResult}.`;
};

function updateScore(playerScore, compScore) {
  scorePara.textContent = ""
  scorePara.textContent = `Player: ${playerScore}. Computer: ${compScore}.`;
}

function playRound(playerResult) {
  let compResult = getCompChoice();
  if (playerResult === compResult) {
    playerScore++;
    compScore++;
  } else if (playerResult === "scissors" && compResult === "paper") {
    playerScore++;
  } else if (playerResult === "paper" && compResult === "rock") {
    playerScore++;
  } else if (playerResult === "rock" && compResult === "scissors") {
    playerScore++;
  } else
    compScore++;
  updateChoice(playerResult, compResult);
  updateScore(playerScore, compScore);
}

let rockGame = document.querySelector("#rock");
let paperGame = document.querySelector("#paper");
let scissorsGame = document.querySelector("#scissors");

rockGame.addEventListener("click", () => {
  playRound("rock");
});
paperGame.addEventListener("click", () => {
  playRound("paper");
});
scissorsGame.addEventListener("click", () => {
  playRound("scissors");
});

/* Play 5 rounds in a row with score tracking.
function playMatch() {
  playerScore = 0;
  compScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `Player score is ${playerScore}. Computer score is ${compScore}.`
    );
  }
  if (playerScore > compScore) {
    return "You win! Congratulations!";
  } else if (playerScore < compScore) {
    return "The computer wins! Better luck next time!";
  } else playerScore === compScore;
  return "Tie!";
}
*/
