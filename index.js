
// function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function computerPlay() {
    
    let game = ["Rock", "Paper", "Scissors"]

    // get a random index value of game array
    const randomIndex = Math.floor(Math.random() * game.length);

    // get a random item
    const play = game[randomIndex];

    return play;

}



// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // take the input of user and case-insensitve the input
  let valueofPlayerSelection = playerSelection.toUpperCase()
  let valueofComputerSelection = computerSelection.toUpperCase()

  // Logic : paper beats rock, rock beats scissors but scissors beats paper (X is better than Y, Y is better than Z but Z is better than X)

  /* if (valueofPlayerSelection === "PAPER" && valueofComputerSelection === "ROCK") {
    return `You WIN. ${valueofPlayerSelection} always beats ${valueofComputerSelection}`
    } else if (valueofPlayerSelection === "ROCK" && valueofComputerSelection === "SCISSORS") {
      return `You WIN. ${valueofPlayerSelection} always beats ${valueofComputerSelection}`
    } else if (valueofPlayerSelection === "SCISSORS" && valueofComputerSelection === "PAPER") {
      return `You WIN. ${valueofPlayerSelection} always beats ${valueofComputerSelection}`
    } else if (valueofPlayerSelection === valueofComputerSelection ) {
      return `TIE. ${valueofPlayerSelection} equal ${valueofComputerSelection}`
    } else {
      return  `You Lose. ${valueofComputerSelection} beats ${valueofPlayerSelection}`
    } */

    if (valueofPlayerSelection === "PAPER" && valueofComputerSelection === "ROCK") {
    return result = "WIN"
    } else if (valueofPlayerSelection === "ROCK" && valueofComputerSelection === "SCISSORS") {
      return result = "WIN"
    } else if (valueofPlayerSelection === "SCISSORS" && valueofComputerSelection === "PAPER") {
      return result = "WIN"
    } else if (valueofPlayerSelection === valueofComputerSelection ) {
      return result = "DRAW"
    } else {
      return result = "LOSE"
    }



}

/* 
Write a NEW function called game(). Call the playRound function inside of this one to play a 
5 round game that keeps score and reports a winner or loser at the end. 
 */

function game() {
  for (let i = 0; i < 5; i++) {
  const playerSelection = prompt("What is your play? Please, write one of this option : Rock, Paper or Scissors")
  const computerSelection = computerPlay()

}
}

/* const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */
