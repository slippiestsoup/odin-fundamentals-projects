function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand
};

function getPlayerChoice() {
    let userInput = window.prompt('Enter a choice (rock, paper, scissors):')
    return userInput
  };
  
function playRound(playerSelection, computerSelection) {
    let compResult = getComputerChoice();
    let playerResult = getPlayerChoice();
    if (playerResult===compResult) {
        return 'Tie!';
    } else if (playerResult==='paper') {
       if (compResult==='scissors')
         return'You lose! Scissors beats paper!';
       else 
         return 'You win! Paper beats rock!';
    } else if (playerResult==='scissors') {
        if (compResult==='paper')
         return 'You win! Scissors beats paper!';
        else
         return 'You lose! Rock beats scissors!';
    } else if (playerResult==='rock') {
        if (compResult==='scissors')
         return 'You win! Rock beats scissors!';
        else
        return 'You lose! Paper beats rock!';
    } 
}