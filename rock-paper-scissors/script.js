function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand
};

function getPlayerChoice() {
    const userInput = window.prompt('Enter a choice (rock, paper, scissors):')
};

let compResult = getComputerChoice();

let playerResult = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerResult==='paper' && compResult==='scissors') {
       return 'You lose! Scissors beats paper!';
    } else if (playerResult==='scissors' && compResult==='rock') {
        return 'You lose! Rock beats scissors!';
    } else if (playerResult==='rock' && compResult==='paper') {
        return 'You lose! Paper beats rock!';
    } else if (playerResult==='paper' && compResult==='rock') {
        return 'You win! Paper beats rock!';
    } else if (playerResult==='rock' && compResult==='scissors') {
        return 'You win! Rock beats scissors!';
    } else if (playerResult==='scissors' && compResult==='paper') {
        return 'You win! Scissors beats paper!';
    } else if (playerResult==='rock' && compResult==='rock') {
        return 'Tie!';
    } else if (playerResult==='paper' && compResult==='paper') {
        return 'Tie!';
    } else if (playerResult==='scissors' && compResult==='scissors') {
        return 'Tie!';
    }
}