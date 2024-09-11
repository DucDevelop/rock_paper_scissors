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