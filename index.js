//Create a variable for rock/paper/scissor
var choice = ["Rock", "Paper", "Scissors"];
const ComputerChoice = "Computer has chosen:";
const pHasChosen = "Player has chosen:";
var  i = 0



while (i < 5) {

//Function for computer opponent
var rand = choice[(Math.random() * choice.length) | 0]

var playerScore = 0

//Create function for player, let player pick an alternative from choice array.
var playerChoice = prompt("Please choose Rock, Paper or Scissors");


//While loop works, endlessly, figure out how to limit the while loop when a winner has 5 scores.

//Compares the results of computer and players
console.log(pHasChosen, playerChoice); 
if (playerChoice.toLowerCase() === rand.toLowerCase()){ //reads the player and computer choice in lowercase, no matter the input. Compares them to each other
    console.log(ComputerChoice, rand);
    console.log("It's a draw!");
}//From here on out, choose a winner. VERY inefficient code.
    else if (playerChoice.toLowerCase() === "rock" && rand.toLowerCase() === "scissors"){ 
        console.log(ComputerChoice, rand);
        console.log("Player has won!");
        
        console.log("Player score:", playerScore +1)
    }
    else if (playerChoice.toLowerCase() === "scissor" && rand.toLowerCase() === "paper"){ 
        console.log(ComputerChoice, rand);
        console.log("Player has won!");
        
        console.log("Player score:", playerScore +1)
        
    }
    else if (playerChoice.toLowerCase() === "paper" && rand.toLowerCase() === "rock"){ 
        console.log(ComputerChoice, rand);
        console.log("Player has won!");
        console.log("Player score:", playerScore +1)
        // Computer wins
    }    else if (playerChoice.toLowerCase() === "paper" && rand.toLowerCase() === "scissors"){ 
        console.log(ComputerChoice, rand);
        console.log("Computer has won!");
    }
    else if (playerChoice.toLowerCase() === "rock" && rand.toLowerCase() === "paper"){ 
        console.log(ComputerChoice, rand);
        console.log("Computer has won!");
        
    }else if (playerChoice.toLowerCase() === "scissors" && rand.toLowerCase() === "rock"){ 
        console.log(ComputerChoice, rand);
        console.log("Computer has won!");
        
    }
     else   console.log("Please choose a valid option");{
    }
}