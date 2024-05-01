const list = ["rock", "paper", "scissors"];

function getCompChoice() {
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

let playerScore = 0;
let compScore = 0;

function playRound(playerResult) {
  let compResult = getCompChoice();
  console.log(`Player: ${playerResult}. Computer: ${compResult}.`);
  if (playerResult === compResult) {
    playerScore++;
    compScore++;
    console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
    return;
  } else if (playerResult === "scissors" && compResult === "paper") {
    playerScore++;
    console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
    return;
  } else if (playerResult === "paper" && compResult === "rock") {
    playerScore++;
    console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
    return;
  } else if (playerResult === "rock" && compResult === "scissors") {
    playerScore++;
    console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
    return;
  } else
    compScore++;
    console.log(`Player: ${playerScore}. Computer: ${compScore}.`);
    return;
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

/* run player choice as an alert window
function getPlayerChoice() {
  let userInput = window.prompt("Enter a choice (rock, paper, scissors):");
  if (list.includes(userInput.toLowerCase())) {
    return userInput;
  } else {
    console.log("Please enter a valid option.");
    return getPlayerChoice();
  }
}*/

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
