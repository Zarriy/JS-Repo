"use strict";
// Selecting the DOM elements
const container = document.querySelector(".container");

let initialValue = 16;
const userInp = Number(
  prompt(
    "Please enter the number of grids you want. You can choose between 1 to 100."
  )
);

let threshold;
if (!userInp || userInp > 100) {
  threshold = initialValue * initialValue + 1;
} else if (userInp <= 100) {
  initialValue = userInp;
  threshold = initialValue * initialValue + 1;
}
// creating divs.
const boxSize = 528 / initialValue;
console.log(boxSize);
for (let x = 1; x < threshold; x++) {
  const div = document.createElement("div");
  div.classList.add("divs");
  div.setAttribute(
    "style",
    `width: ${boxSize}px; height: ${boxSize}px ; background-color: #fff;`
  );

  container.appendChild(div);
}
// since JS goes from start to bottom, thus adding it here after the divs are created.

const divs = document.querySelectorAll(".divs");
console.log(divs);
divs.forEach((div) =>
  div.addEventListener("mouseenter", function (e) {
    console.log(e.target.style.backgroundColor);
    e.target.style.backgroundColor = "#000";
  })
);
