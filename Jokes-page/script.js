const jokeDiv = document.querySelector(".joke");
const btn = document.querySelector(".btn");

// const requestJoke = new XMLHttpRequest();
// requestJoke.open("GET", `https://icanhazdadjoke.com/`);
// requestJoke.send();
// console.log(requestJoke.responseText);

// requestJoke.addEventListener("load", function () {
//   console.log(this.responseText);
//   const data = JSON.parse(this.responseText);
// });
function getAJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      jokeDiv.textContent = data.joke;
    });
}
btn.addEventListener("click", getAJoke);
