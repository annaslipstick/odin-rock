//Create a variable for rock/paper/scissor
const choice = ["Rock", "Paper", "Scissors"];
const ComputerChoice = "Computer has chosen:";

//Function for computer opponent
const computerOpp = Math.floor(Math.random() * choice.length);
console.log( ComputerChoice, computerOpp, choice[computerOpp]);

//Create function for player
console.log(choice)
