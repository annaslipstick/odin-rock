

let i = 0
while (i < 5) { 

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
let computerScore = 0
let playerScore = 0 



function playRound() {  

    if (pInput == computerSelection){ 
        console.log("It's a draw!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "scissors" && computerSelection == "paper") {
        console.log("Player win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "rock" && computerSelection == "scissors") {
        console.log("Player win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "paper" && computerSelection == "rock") {
        console.log("Player win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "paper" && computerSelection == "scissors") {
        console.log("Computer win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "rock" && computerSelection == "paper") {
        console.log("Computer win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else if (pInput == "scissors" && computerSelection == "rock") {
        console.log("Computer win!");
        i++;
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
    else {
        console.log("You have chosen an invalid option");
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
        i++;
    } 
  }
  
 
  
playRound()
replayInput = prompt("Do you want to play again? Write 'yes' or 'no'").toLowerCase();

if (replayInput == "yes") {
        console.log("How kind of you! \n This is a best of 5!");
        console.log("Amount of rounds played: " + i);
        console.log("Computer's score = " + computerScore);
        console.log("Player's score = " + playerScore);
    }
else if  (replayInput == "no") {
        console.log("How rude of you!");
        console.log("Amount of rounds played: " + i);
        i++;
        i++;
        i++;
        i++;
        i++;
        } 
else {
    console.log("Invalid alternative, lets play again!");
    console.log("Amount of rounds played: " + i);
}
}

console.log("Five rounds has now been played \n The game is now over, thank you for participating!");




//let playAgainDecision = playAgain().toLowerCase();
