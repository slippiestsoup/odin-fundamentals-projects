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
  console.log(`Player: ${playerResult}, comp: ${compResult}`);
  if (playerResult === compResult) {
    playerScore++;
    compScore++;
    return "Tie!";
  } else if (playerResult === "paper") {
    if (compResult === "scissors") {
      compScore++;
      return "You lose! Scissors beats paper!";
    } else playerScore++;
    return "You win! Paper beats rock!";
  } else if (playerResult === "scissors") {
    if (compResult === "paper") {
      playerScore++;
      return "You win! Scissors beats paper!";
    } else compScore++;
    return "You lose! Rock beats scissors!";
  } else if (playerResult === "rock") {
    if (compResult === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors!";
    } else compScore++;
    return "You lose! Paper beats rock!";
  }
}

function playMatch() {
  playerScore = 0;
  compScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Player score is ${playerScore}, comp score is ${compScore}`);
  }
  if (playerScore > compScore) {
    return "You win! Congratulations!";
  } else if (playerScore < compScore) {
    return "The computer wins! Better luck next time!";
  } else playerScore === compScore;
  return "Tie!";
}
