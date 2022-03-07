// scores of game
let playerScore = 0
let computerScore = 0


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
    playerScore++;
    result = "YOU WIN"
  } else if (valueofPlayerSelection === "ROCK" && valueofComputerSelection === "SCISSORS") {
    playerScore++;
    result = "YOU WIN"
  } else if (valueofPlayerSelection === "SCISSORS" && valueofComputerSelection === "PAPER") {
     playerScore++;
    result = "YOU WIN"
  } else if (valueofPlayerSelection === valueofComputerSelection) {
    computerScore++;
    result = "DRAW"
  } else {
    result = "YOU LOSE"
  }
  resultOfGame.innerHTML = result
  playerScoreGame.innerHTML = playerScore
  computerScoreGame.innerHTML = computerScore
  // return playerScore, computerScore
}



// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
// 1. Select Elements
const computerSelection = document.getElementById("ComputerSelection")
const playerSelection = document.getElementById("PlayerSelection")
const resultOfGame = document.getElementById("Result")
let playerScoreGame = document.getElementById("PlayerScore")
let computerScoreGame = document.getElementById("ComputerScore")
/* const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors") */
const selectionChoice = document.querySelectorAll("button")


// 2. Add Event Listeners


selectionChoice.forEach(choice => choice.addEventListener("click", (e) => {
  let playerChoice = e.target.id
  playerSelection.innerHTML = playerChoice;
  let computerChoice = computerPlay();
  computerSelection.innerHTML = computerChoice
  playRound(playerChoice, computerChoice)
}))

/* rock.addEventListener("click", playRound(playerSelection = "rock", computerSelection))
paper.addEventListener("click", playRound(playerSelection = "paper", computerSelection))
scissors.addEventListener("click", playRound(playerSelection = "scissors", computerSelection)) */



/* 
Write a NEW function called game(). Call the playRound function inside of this one to play a 
5 round game that keeps score and reports a winner or loser at the end. 
 */

/* function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("What is your play? Please, write one of this option : Rock, Paper or Scissors")
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
}
} */

/* const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */
