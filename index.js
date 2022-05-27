//Create a variable for rock/paper/scissor
var choice = ["Rock", "Paper", "Scissors"];
const ComputerChoice = "Computer has chosen:";
const pHasChosen = "Player has chosen:";


//Function for computer opponent
var rand = choice[(Math.random() * choice.length) | 0]
console.log(ComputerChoice, rand);



//Create function for player, let player pick an alternative from choice array.
var playerChoice = prompt("Please choose Rock, Paper or Scissors");


//Compares the results of computer and players
console.log(pHasChosen, playerChoice); 
if (playerChoice.toLowerCase() === rand.toLowerCase()){ //reads the player and computer choice in lowercase, no matter the input. Compares them to each other
    console.log("It's a draw!");
}//From here on out, choose a winner. VERY inefficient code.
    else if (playerChoice.toLowerCase() === "rock" && rand.toLowerCase() === "scissors"){ 
        console.log("Player has won!");
    }
    else if (playerChoice.toLowerCase() === "scissor" && rand.toLowerCase() === "paper"){ 
        console.log("Player has won!");
        
    }
    else if (playerChoice.toLowerCase() === "paper" && rand.toLowerCase() === "rock"){ 
        console.log("Player has won!");
        // Computer wins
    }    else if (playerChoice.toLowerCase() === "paper" && rand.toLowerCase() === "scissors"){ 
        console.log("Computer has won!");
    }
    else if (playerChoice.toLowerCase() === "rock" && rand.toLowerCase() === "paper"){ 
        console.log("Computer has won!");
        
    }else if (playerChoice.toLowerCase() === "scissors" && rand.toLowerCase() === "rock"){ 
        console.log("Computer has won!");
        
    }
     else   console.log("Please choose a valid option");{
    }
