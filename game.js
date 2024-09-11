function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    // picks random number bewteen 0 - 2 (inclusive) 
    let randomChoice = Math.floor(Math.random() * 3);
    return CHOICES[randomChoice];
}