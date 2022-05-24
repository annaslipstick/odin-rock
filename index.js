//Create a variable for rock/paper/scissor
const choice = ["Rock", "Paper", "Scissors"];

//Function for computer opponent
const computerOpp = Math.floor(Math.random() * choice.length);
console.log(computerOpp, choice[computerOpp]);

//Create function for player
