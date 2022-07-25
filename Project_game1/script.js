"use strict";
// Computer generates a random number and that number will be associated with a value.
let game = true;

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

// now gets the user input.

// adding argument.
// scissor > paper
// paper > rock
// rock > scissor
for (let x = 1; x <= 5; x++) {
  if (game) {
    const userInp = prompt(
      `Choose one among the following? 
        Scissor, Rock or Paper`
    ).toLowerCase();
    const computerGuess = computerInput();
    if (userInp === computerGuess) {
      console.log("OOPS, You seem to as intelligent as Computer.");
    }

    if (userInp === "scissor") {
      if (computerGuess === "paper") {
        console.log("Congratulations You win");
      } else if (computerGuess === "rock") {
        console.log("Sorry, you lose. Try Again");
      }
    }

    if (userInp === "paper") {
      if (computerGuess === "rock") {
        console.log(
          "Congratulations, Paper is stronger than rock and you won 🎉."
        );
      } else if (computerGuess === "scissor") {
        console.log("Alas, Your paper cannot withstand Scissor");
      }
    }

    if (userInp === "rock") {
      if (computerGuess === "scissor") {
        console.log(
          "Congratulation 🍾,, Your Rock is stronger than Scissor. You won."
        );
      } else if (computerGuess === "paper") {
        console.log('Alas, Rock can"t beat the paper. ');
      }
    }
  }
}
