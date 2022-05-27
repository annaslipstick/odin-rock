//Create a variable for rock/paper/scissor
const choice = ["Rock", "Paper", "Scissors"];
const ComputerChoice = "Computer has chosen:";
const pHasChosen = "Player has chosen:";

//Function for computer opponent
const computerOpp = Math.floor(Math.random() * choice.length);
console.log(ComputerChoice, computerOpp, choice[computerOpp]);

//Create function for player, let player pick an alternative from choice array.
var playerChoice = prompt("Please choose Rock, Paper or Scissors");
console.log(pHasChosen, playerChoice);
if (playerChoice.toLowerCase() == "rock"){
    console.log("You have chosen Rock");
}
    else {
        console.log("Upsie");
    }
