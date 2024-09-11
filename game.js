const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // picks random number bewteen 0 - 2 (inclusive) 
    let randomChoice = Math.floor(Math.random() * 3);
    return CHOICES[randomChoice];
}

function getHumanChoice() {
    
    // picks random number bewteen 0 - 2 (inclusive) 
    let choice = prompt('Please enter one of the following: "rock", "paper", "scissors"').toLocaleLowerCase().trim()
    if (CHOICES.includes(choice)) {
        return choice;
    }
    return getComputerChoice();
}

function playRound (humanChoice, computerChoice) {
    let computerWin = false;
    let userWin = false;

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        userWin = true;
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerWin = true;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        userWin = true;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerWin = true;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        userWin = true;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerWin = true;
    }



    if (computerWin) {
        console.log(`You lose! "${computerChoice}" beats "${humanChoice}"`);
        computerScore++;
    }
    else if (userWin) {
        console.log(`You win! "${humanChoice}" beats "${computerChoice}"`);
        humanScore++;
    }
    else {
        console.log(`Tie! Both chose "${humanChoice}"`);
    }
    
}