
const choices = new Map([
    [0, "Rock"],
    [1, "Paper"],
    [2, "Scissors"],
    ["rock", 0],
    ["paper", 1],
    ["scissors", 2]
  ]);

function getComputerChoice() {
    intChoice =  Math.floor(Math.random() * 3);
    return choices.get(intChoice);
}

function playRound(computerSelection, playerSelection) {
    let result = "did not work";
    difference = choices.get(computerSelection.toLowerCase()) - choices.get(playerSelection.toLowerCase());
    if (Math.abs(difference) == 1) {
        if (difference < 0) {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (difference == 0) {
        result = "Tie!";
    } else {
        if (difference < 0) {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    return result;

}

function game() {
    
}