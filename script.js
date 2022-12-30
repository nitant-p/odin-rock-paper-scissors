let playerWins = 0;
let computerWins = 0;
let rounds = 0;

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
    rounds++;
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

function selectItem(e) {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    logCurrent(playRound(computerSelection, playerSelection));
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', selectItem));

const currentRound = document.querySelector('.currentRound');
const scoreBox = document.querySelector('.score');

const roundsBox = document.querySelector('.rounds');

function logCurrent(result) {
    currentRound.textContent = result;
    let score = `Player Wins: ${playerWins} Computer Wins: ${computerWins}`;
    scoreBox.textContent = score;
    roundsBox.textContent = "Rounds: " + rounds;
    if (rounds == 5) {
        determineWinner();
    }
}

function determineWinner() {
    let result;
    if (playerWins > computerWins) {
        result = "You are the final winner!";
    } else if (computerWins > playerWins) {
        result = "You lost... computer wins";
    } else {
        result = "Tie in the end!";
    }
    scoreBox.textContent = result;
    playerWins = 0; 
    computerWins = 0;
    rounds = 0;

}