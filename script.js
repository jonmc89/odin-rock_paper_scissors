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
  let choiceText;
  switch (computerChoice) {
    case 1:
      choiceText = "rock";
      break;
    case 2:
      choiceText = "paper";
      break;
    case 3:
      choiceText = "scissors";
      break;
  }
  document.getElementById("computer_text").innerHTML =
    "The computer chose " + choiceText;
  return choiceText;
}

let userRockChoice = "rock";
let userPaperChoice = "paper";
let userScissorsChoice = "scissors";

// Stores answer in a variable, based on the button clicked. Then displays text in user message box.

let humanChoice;

document.getElementById("rock").addEventListener("click", function () {
  humanChoice = "rock";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
  console.log(humanChoice);
});
document.getElementById("paper").addEventListener("click", function () {
  humanChoice = "paper";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
  console.log(humanChoice);
});
document.getElementById("scissors").addEventListener("click", function () {
  humanChoice = "scissors";
  document.getElementById("user_message").innerHTML =
    "You chose " + humanChoice + "!";
  console.log(humanChoice);
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(humanChoice, computerChoice);
  }
}

playGame();
