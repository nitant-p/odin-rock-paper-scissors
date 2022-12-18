let playerWins = 0;
let computerWins = 0;

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
            playerWins++;
        } else {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        }
    } else if (difference == 0) {
        result = "Tie!";
    } else {
        if (difference < 0) {
            result = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        } else {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWins++;
        }
    }

    return result;

}

function game() {
    
    playerWins. computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose your weapon!");
        let computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection}, computer chose ${computerSelection}.
            ${playRound(computerSelection, playerSelection)}`);
    }

    if (playerWins > computerWins) {
        console.log("You won in the end! Wins: " + playerWins);
    } else {
        console.log("Looks like you lost... :(  Wins: " + playerWins);
    }

}