
let computerScore = 0;
let playerScore = 0 ;
let winner;
let i = 0

while (i < 5) { 

let playerSelection = "just a value"
let replayInput = "just a value"
let choice = ["Rock", "Paper", "Scissors"];
let computerSelection = choice[(Math.random() * choice.length) | 0].toLowerCase();




function playerPlay(playerSelection){
    playerSelection = prompt("Please choose Rock, Paper or Scissors");
    console.log("Player chose " + playerSelection);
    return(playerSelection);
}

let pInput = playerPlay().toLowerCase();
console.log("Computer chose " + computerSelection);



function playRound() {  

    if (pInput == computerSelection){ 
        console.log("It's a draw!");
        winner = "It's a draw!";
        i++;
        return winner;
    }
    else if (pInput == "scissors" && computerSelection == "paper") {
        console.log("Player win!");
        winner = "Player win!";
        i++;
        return   winner;
    }
    else if (pInput == "rock" && computerSelection == "scissors") {
        console.log("Player win!");
        winner = "Player win!";
        i++;
        return winner;
    }
    else if (pInput == "paper" && computerSelection == "rock") {
        winner = "Player win!";
        console.log("Player win!");
        i++;
        return winner;
    }
    else if (pInput == "paper" && computerSelection == "scissors") {
        console.log("Computer win!");
        winner = "Computer win!";
        i++;
        return winner;
    }
    else if (pInput == "rock" && computerSelection == "paper") {
        console.log("Computer win!");
        winner = "Computer win!";
        i++;
        return winner;
    }
    else if (pInput == "scissors" && computerSelection == "rock") {
        console.log("Computer win!");
        winner = "Computer win!";
        i++;
        return winner;
    }
    else {
        console.log("You have chosen an invalid option");
        winner = "Computer win!";
        i++;
        return winner;
    } 
  }
  
 
  
playRound()

if (winner == "Player win!") {
    playerScore++;
}
else if (winner == "It's a draw!") {
    
}
else {
    computerScore++;
}

console.log("Computer's score = " + computerScore);
console.log("Player's score = " + playerScore);


replayInput = prompt("Do you want to play again? Write 'yes' or 'no'").toLowerCase();

if (replayInput == "yes" && i < 5) {
        console.log("How kind of you! \n This is a best of 5!");
        console.log("Amount of rounds played: " + i);
    }
else if  (replayInput == "no" && i < 5) {
        console.log("How rude of you!");
        console.log("Amount of rounds played: " + i);
        i++;
        i++;
        i++;
        i++;
        i++;
        } 
else if (i < 5) {
    console.log("Invalid alternative, lets play again!");
    console.log("Amount of rounds played: " + i);
}
else {
    console.log("Computer's score = " + computerScore);
    console.log("Player's score = " + playerScore);
}
}

console.log("Five rounds has now been played \n The game is now over, thank you for participating!");
console.log("Computer's score = " + computerScore);
console.log("Player's score = " + playerScore);



//let playAgainDecision = playAgain().toLowerCase();
