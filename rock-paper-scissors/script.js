const list = ["rock", "paper", "scissors"];

function getCompChoice() {
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

function getPlayerChoice() {
  let userInput = window.prompt("Enter a choice (rock, paper, scissors):");
  if (list.includes(userInput.toLowerCase())) {
    return userInput;
  } else {
    console.log("Please enter a valid option.");
    return getPlayerChoice();
  }
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, compSelection) {
  let compResult = getCompChoice();
  let playerResult = getPlayerChoice();
  console.log(`Player: ${playerResult}. Computer: ${compResult}.`);
  if (playerResult === compResult) {
    playerScore++;
    compScore++;
    return "Tie!";
  } else if (playerResult === "scissors") {
    (compResult === "paper");
    playerScore++;
    return "You win!";
  } else if (playerResult === "paper") {
    (compResult === "rock");
    playerScore++;
    return "You win!";
  } else if (playerResult === "rock") {
    (compResult === "scissors");
    playerScore++;
    return "You win!";
    } else compScore++;
    return "You lose!";
}

function playMatch() {
  playerScore = 0;
  compScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Player score is ${playerScore}. Computer score is ${compScore}.`);
  }
  if (playerScore > compScore) {
    return "You win! Congratulations!";
  } else if (playerScore < compScore) {
    return "The computer wins! Better luck next time!";
  } else playerScore === compScore;
  return "Tie!";
}
