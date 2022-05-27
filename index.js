//Create a variable for rock/paper/scissor
var choice = ["Rock", "Paper", "Scissors"];
const ComputerChoice = "Computer has chosen:";
const pHasChosen = "Player has chosen:";


//Function for computer opponent
var rand = choice[(Math.random() * choice.length) | 0]
console.log(ComputerChoice, rand);

//Create function for player, let player pick an alternative from choice array.
var playerChoice = prompt("Please choose Rock, Paper or Scissors");
console.log(pHasChosen, playerChoice); 
if (playerChoice.toLowerCase() && rand.toLowerCase() == "rock" || "paper" ||"scissors" ){ //reads the player choice in lowercase, no matter the input.
    console.log("It's a draw!");
}
    else {
        console.log("Upsie");
    }


    //computerOpp.toLowerCase