
let playerSelection = "just a value"
let replayInput = "just a value"
let choice = ["Rock", "Paper", "Scissors"];
let computerSelection = choice[(Math.random() * choice.length) | 0].toLowerCase();
console.log("Computer chose " + computerSelection);



function playerPlay(playerSelection){
    playerSelection = prompt("Please choose Rock, Paper or Scissors");
    console.log("Player chose " + playerSelection);
    return(playerSelection);
}

let pInput = playerPlay().toLowerCase();



function playRound() {  

    if (pInput == computerSelection){ 
        console.log("It's a draw!");
    }
    else if (pInput == "scissors" && computerSelection == "paper") {
        console.log("Player win!");
    }
    else if (pInput == "rock" && computerSelection == "scissors") {
        console.log("Player win!");
    }
    else if (pInput == "paper" && computerSelection == "rock") {
        console.log("Player win!");
    }
    else if (pInput == "paper" && computerSelection == "scissors") {
        console.log("Computer win!");
    }
    else if (pInput == "rock" && computerSelection == "paper") {
        console.log("Computer win!");
    }
    else if (pInput == "scissors" && computerSelection == "rock") {
        console.log("Computer win!");
    }
    else {
        console.log("It's a me, mario");
    } 
  }
  
 
  function playAgain(replayInput) {
    replayInput = prompt("Do you want to play again? Write 'yes' or 'no'").toLowerCase();
    if (replayInput = "yes") {
    return(pInput)
  }
    else {
        console.log("How rude of you!")
        } 
  }

let playAgainDecision = playAgain().toLowerCase

playRound(pInput)

