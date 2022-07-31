"use strict";
// Computer generates a random number and that number will be associated with a value.
let game = true;
let playerSelect;
let playerScore = 0;
let ComputerScore = 0;
// selecting the dom elements.
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");

//creating div and p
const div = document.createElement("div");
const p = document.createElement("p");
const playerScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");

const computerInput = function () {
  let num = Math.round(Math.random() * 2) + 1;
  if (num === 1) {
    return "scissor";
  } else if (num === 2) {
    return "paper";
  } else if (num === 3) {
    return "rock";
  }
};

function playGame(plInput) {
  if (game) {
    const userInp = plInput;
    const computerGuess = computerInput();
    console.log(userInp, computerGuess);

    if (
      (userInp === "scissor" && computerGuess === "paper") ||
      (userInp === "paper" && computerGuess === "rock") ||
      (userInp === "rock" && computerGuess === "scissor")
    ) {
      playerScore++;
      return `Congratulations, ${userInp} is stronger than ${computerGuess}. You Won.`;
    } else if (userInp === computerGuess) {
      return `OOPS, You seem to be intelligent as Computer. Both chose ${userInp}`;
    } else {
      ComputerScore++;
      return `Alas. Your ${userInp} can't beat ${computerGuess}. Try again...`;
    }
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    const listItems = ["rock", "paper", "scissor"];
    const result = playGame(listItems[id]);
    console.log(result);

    p.textContent = result;
    playerScoreDisplay.textContent = `Player : ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${ComputerScore}`;
    div.appendChild(p);
    div.appendChild(playerScoreDisplay);
    div.appendChild(computerScoreDisplay);
    container.appendChild(div);
  })
);

// // now gets the user input.

// // adding argument.
// // scissor > paper
// // paper > rock
// // rock > scissor
// for (let x = 1; x <= 5; x++) {
//   // if (game) {
//   //   const userInp = playerSelect;
//   //   const computerGuess = computerInput();
//   //   if (userInp === computerGuess) {
//   //     console.log("OOPS, You seem to as intelligent as Computer.");
//   //   }
//   //   if (userInp === "scissor") {
//   //     if (computerGuess === "paper") {
//   //       console.log("Congratulations You win");
//   //     } else if (computerGuess === "rock") {
//   //       console.log("Sorry, you lose. Try Again");
//   //     }
//   //   }
//   //   if (userInp === "paper") {
//   //     if (computerGuess === "rock") {
//   //       console.log(
//   //         "Congratulations, Paper is stronger than rock and you won 🎉."
//   //       );
//   //     } else if (computerGuess === "scissor") {
//   //       console.log("Alas, Your paper cannot withstand Scissor");
//   //     }
//   //   }
//   //   if (userInp === "rock") {
//   //     if (computerGuess === "scissor") {
//   //       console.log(
//   //         "Congratulation 🍾,, Your Rock is stronger than Scissor. You won."
//   //       );
//   //     } else if (computerGuess === "paper") {
//   //       console.log('Alas, Rock can"t beat the paper. ');
//   //     }
//   //   }
//   // }
//
