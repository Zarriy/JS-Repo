const jokeDiv = document.querySelector(".joke");

const requestJoke = new XMLHttpRequest();
requestJoke("GET", "https://icanhazdadjoke.com/");
requestJoke.send();
console.log(requestJoke.responseText);
