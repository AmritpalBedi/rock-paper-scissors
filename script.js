function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// TODO: Function that plays a round of the game

let wins = 0;
let losses = 0;
let ties = 0;

function gameRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();
    playerSelection = titleCase(playerSelectionLower);
    if (playerSelectionLower == computerSelectionLower) {
        ties++;
        return `You Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    else if (playerSelectionLower == "rock") {
        if (computerSelectionLower == "paper") {
            losses++;
            return "You Lose! Paper beats Rock";
        }
        else {
            wins++;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelectionLower == "paper") {
        if (computerSelectionLower == "scissors") {
            losses++;
            return "You Lose! Scissors beats Paper";
        }
        else {
            wins++;
            return "You Win! Paper beats Rock";
        }
    }
    else {
        if (computerSelectionLower == "rock") {
            losses++;
            return "You Lose! Rock beats Scissors";
        }
        else {
            wins++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function titleCase(move) {
    let first = move[0];
    first = first.toUpperCase();
    return move.replace(move[0], first);
}

function game(move) {
    let computerSelection;
    let playerSelection = move;

    computerSelection = getComputerChoice();

    const results = document.querySelector('#results');
    results.textContent = `${(gameRound(playerSelection, computerSelection))}`;

    if (wins == 5) {
        alert("You Win!");
        wins = 0;
        losses = 0;
        ties = 0;
    } 
    else if (losses == 5) {
        alert("You Lose! Better luck next time");
        wins = 0;
        losses = 0;
        ties = 0;
    } 
    
    const score = document.querySelector('#score');
    score.textContent = `Wins ${wins} || Ties ${ties} || Losses ${losses}`;

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});

