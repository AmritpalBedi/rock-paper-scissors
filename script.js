function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// TODO: Function that plays a round of the game

function gameRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower == computerSelectionLower) {
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else if (playerSelectionLower == "rock") {
        if (computerSelectionLower == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelectionLower == "paper") {
        if (computerSelectionLower == "scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "You Win! Paper beats Rock";
        }
    }
    else {
        if (computerSelectionLower == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else {
            return "You Win! Scissors beats Paper";
        }
    }
}