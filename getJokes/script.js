const jokeDiv = document.querySelector(".joke");
const btn = document.querySelector(".btn");

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
