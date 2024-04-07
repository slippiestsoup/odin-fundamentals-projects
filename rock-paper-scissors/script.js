function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand
};

function getPlayerChoice() {
    let userInput = window.prompt('Enter a choice (rock, paper, scissors):')
    return userInput
};

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    let compResult = getComputerChoice();
    let playerResult = getPlayerChoice();
    console.log(`Player: ${playerResult}, Computer: ${compResult}`);
    if (playerResult===compResult) {
        playerScore++;
        compScore++;
        return 'Tie!';
    } else if (playerResult==='paper') {
       if (compResult==='scissors') {
         compScore++;
         return 'You lose! Scissors beats paper!';
        } else 
         playerScore++;
         return 'You win! Paper beats rock!';
    } else if (playerResult==='scissors') {
        if (compResult==='paper') {
         playerScore++;
         return 'You win! Scissors beats paper!';
        } else
         compScore++;
         return 'You lose! Rock beats scissors!';
    } else if (playerResult==='rock') {
        if (compResult==='scissors') {
         playerScore++;
         return 'You win! Rock beats scissors!';
        } else
         compScore++;
        return 'You lose! Paper beats rock!';
    } 
};

function playMatch() {
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(`Player score is ${playerScore}, computer score is ${compScore}`);
    };
    if (playerScore>compScore) {
      return "You win! Congratulations!";
    } else if (playerScore<compScore) {
        return "The computer wins! Better luck next time!";
    } else (playerScore===compScore) 
        return "Tie!";
};