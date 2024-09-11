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



function playGame() {
    const ROUNDS = 5;
    let humanScore = 0;
    let computerScore = 0;
    

    const humanScoreRef = document.querySelector('#human-score');
    const computerScoreRef = document.querySelector('#computer-score');

    computerScoreRef.textContent = `Computer score: ${computerScore}`
    humanScoreRef.textContent = `Human score: ${humanScore}`

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

    for (let i = 0; i < ROUNDS; ++i) {
        let oldHumanScore = humanScore;
        let oldComputerScore = computerScore;

        playRound(getHumanChoice(), getComputerChoice());
        // Update HTML to reflect scores
        if (humanScore > oldHumanScore) {
            humanScoreRef.textContent = `Human score: ${humanScore}`
        }
        if (computerScore > oldComputerScore) {
            computerScoreRef.textContent = `Computer score: ${computerScore}`
        }
    }
}