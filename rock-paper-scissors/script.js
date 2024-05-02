const choices = document.querySelector("#choices");
const choicePara = document.querySelector("#choicePara");
choices.appendChild(choicePara);
const scores = document.querySelector("#scores");
const scorePara = document.querySelector("#scorePara");
scores.appendChild(scorePara);
const finalText = document.querySelector("#finalText");
const finalWin = document.querySelector("#finalWin");
finalText.appendChild(finalWin);


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
  } else compScore++;
  updateChoice(playerResult, compResult);
  updateScore(playerScore, compScore);
  if (playerScore != 5 && compScore != 5) {
    return finalWin.textContent = "";
  } else if (playerScore === 5 && playerScore === compScore) {
    return finalWin.textContent = "Tie!", playerScore = 0, compScore = 0;
  } else if (playerScore === 5 && playerScore > compScore) {
    return finalWin.textContent = "You Win! Congratulations!", playerScore = 0, compScore = 0;
  } else (compScore === 5 && compScore > playerScore);
  return finalWin.textContent = "You lose! Try again!", playerScore = 0, compScore = 0;
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