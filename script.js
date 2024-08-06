//Scoring numbers
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

document.getElementById("player_score_cards").innerHTML = humanScore;
document.getElementById("computer_score_cards").innerHTML = computerScore;
document.getElementById("round_score_cards").innerHTML = roundCounter;

document.getElementById("computer_text").innerHTML = "Awaiting user choice!";

// Computer choice logic
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

let userRockChoice = "rock";
let userPaperChoice = "paper";
let userScissorsChoice = "scissors";

// Stores answer in a variable, based on the button clicked. Then displays text in user message box.
document.getElementById("rock").addEventListener("click", function () {
  humanChoice = "rock";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
});
document.getElementById("paper").addEventListener("click", function () {
  humanChoice = "paper";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
});
document.getElementById("scissors").addEventListener("click", function () {
  humanChoice = "scissors";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
});

//Play round logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "You Tied";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You Win";
  } else {
    computerScore++;
    return "You Lose";
  }
}

getComputerChoice();
