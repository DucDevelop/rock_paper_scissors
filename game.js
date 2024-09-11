const CHOICES = ["rock", "paper", "scissors"];

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



let humanScore = 0;
let computerScore = 0;
const resultRef = document.querySelector('.results');

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
        resultRef.textContent = `You lose! "${computerChoice}" beats "${humanChoice}"`;
        computerScore++;
    }
    else if (userWin) {
        resultRef.textContent = `You win! "${humanChoice}" beats "${computerChoice}"`;
        humanScore++;
    }
    else {
        resultRef.textContent = `Tie! Both chose "${humanChoice}"`;
    }
    
}
    
    const btnContainerRef = document.querySelector('.btn-container');
    
    btnContainerRef.addEventListener('click', (e) => {
        playRound(e.target.dataset.choice, getComputerChoice())
    })
    

