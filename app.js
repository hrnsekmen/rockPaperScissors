// SCORE DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const board_div = document.querySelector(".score-board");

// BUTTON DOM
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

// -----------------------------------------------------------

// USER START DATA
let userScore = 0;
let computerScore = 0;

// COMPUTER CHOICE

function letterConverter(letter) {
  if (letter === "rock") return "Rock";

  if (letter === "paper") return "Paper";

  if (letter === "scissor") return "Scissor";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${letterConverter(user)} beats ${letterConverter(
    computer
  )}. You win!🔥🔥🔥`;

  document.getElementById(user).classList.add("btn-win");
  setTimeout(() => {
    document.getElementById(user).classList.remove("btn-win");
  }, 300);

  board_div.classList.add("motion-w");
  setTimeout(() => {
    board_div.classList.remove("motion-w");
  }, 600);
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${letterConverter(computer)} beats ${letterConverter(
    user
  )}. You lose...😔😔😔`;

  document.getElementById(user).classList.add("btn-lose");
  setTimeout(() => {
    document.getElementById(user).classList.remove("btn-lose");
  }, 300);

  board_div.classList.add("motion-l");
  setTimeout(() => {
    board_div.classList.remove("motion-l");
  }, 600);
}

function draw(user, computer) {
  result_p.innerHTML = `IT'S A DRAW!🤪🤪`;

  document.getElementById(user).classList.add("btn-draw");
  setTimeout(() => {
    document.getElementById(user).classList.remove("btn-draw");
  }, 300);

  board_div.classList.add("motion-d");
  setTimeout(() => {
    board_div.classList.remove("motion-d");
  }, 600);
}

// USER CHOICE
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + "_" + computerChoice) {
    // WIN CASES
    case "rock_scissor":
    case "paper_rock":
    case "scissor_rock":
      win(userChoice, computerChoice);
      break;
    // DRAW CASES
    case "rock_rock":
    case "paper_paper":
    case "scissor_scissor":
      draw(userChoice, computerChoice);
      break;
    // LOSE CASES
    case "rock_paper":
    case "paper_scissor":
    case "scissor_rock":
      lose(userChoice, computerChoice);
      break;
  }
}

// MAIN

function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
  });

  scissor_div.addEventListener("click", () => {
    game("scissor");
  });
}

main();
