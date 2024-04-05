function getComputerChoice() {
    const list = ['rock', 'paper', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand
};