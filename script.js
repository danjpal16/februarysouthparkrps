let computerChoiceArray = ["rock", "paper", "scissors"];
let userScore = 1
let compScore = 1;

window.onload = changeUsername;

function changeUsername() {
  var username = prompt("Enter your username"); //asks for your username
  document.getElementById("username").innerText = username; //displays your username
}

let userChoiceText = document.getElementById("displayUserChoice");
let computerChoiceText = document.getElementById("displayComputerChoice");

function playGame(userChoice) {
  let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
  document.getElementById('displayComputerChoice').innerText = computerChoiceArray[randomNumber];
  
  // Convert the userChoice to lower case for consistency
  userChoice = userChoice.toLowerCase();
  
  // Display the user's choice
  userChoiceText.innerText = userChoice;
  
  // Check for a tie
  if (userChoice === computerChoiceArray[randomNumber]) {
    document.getElementById("winnerChoice").innerText = "tie";
    
  }
  // Check if the user wins
  else if (
    (userChoice === 'rock' && computerChoiceArray[randomNumber] === 'scissors') ||
    (userChoice === 'paper' && computerChoiceArray[randomNumber] === 'rock') ||
    (userChoice === 'scissors' && computerChoiceArray[randomNumber] === 'paper')
  ) {
    document.getElementById("winnerChoice").innerText = "win";
    document.getElementById("displayUserScore").innerText = "Your Score: " + userScore++
  }
  // If it's not a tie and the user didn't win, it's a lose
  else {
    document.getElementById("winnerChoice").innerText = "lose";
    document.getElementById("displayComputerScore").innerText = "Computer Score: " + compScore++
  }
}


