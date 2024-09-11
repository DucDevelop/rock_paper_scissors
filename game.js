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
const currentResultRef = document.querySelector('.current-result');



function updateResult() {

    function clearScore() {
        const refs = resultRef.querySelectorAll('p')
        refs.forEach(child => resultRef.removeChild(child))
    }
    
    const rounds = 5;
    const humanResult = document.createElement("p");
    const computerResult = document.createElement("p");
    humanResult.textContent = `Human: ${humanScore}`
    computerResult.textContent = `Computer: ${computerScore}`

    clearScore();
    resultRef.appendChild(humanResult);
    resultRef.appendChild(computerResult);

    if(humanScore === rounds || computerScore === rounds) {
        const winner = document.createElement("p");
        winner.textContent = `Winner: ${humanScore > computerScore ? 'Human' : 'Computer'}`
        resultRef.appendChild(winner);
        endGame();
    }
}

function endGame() {
    const btnContainerRef = document.querySelector('.btn-container');
    const buttons = btnContainerRef.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true)
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
        currentResultRef.textContent = `You lose! "${computerChoice}" beats "${humanChoice}"`;
        computerScore++;
    }
    else if (userWin) {
        currentResultRef.textContent = `You win! "${humanChoice}" beats "${computerChoice}"`;
        humanScore++;
    }
    else {
        currentResultRef.textContent = `Tie! Both chose "${humanChoice}"`;
    }
    updateResult();
}
    
    const btnContainerRef = document.querySelector('.btn-container');
    
    btnContainerRef.addEventListener('click', (e) => {
        playRound(e.target.dataset.choice, getComputerChoice())
    })
    

