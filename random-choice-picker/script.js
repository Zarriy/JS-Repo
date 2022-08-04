const textArea = document.querySelector("#enterValue");
const choicesDiv = document.querySelector(".enteredValues");

textArea.addEventListener("keyup", contentUpdate);

function contentUpdate(e) {
  const tags = textArea.value;
  const arrTags = tags
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  choicesDiv.innerHTML = "";
  arrTags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("choices");
    span.textContent = tag;
    choicesDiv.appendChild(span);
  });
  if (e.key === "Enter") {
    const times = 30;
    setTimeout(() => {
      textArea.value = "";
      textArea.blur();
    }, 100);
    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      addHighLight(randomTag);
      setTimeout(() => {
        removeHighLight(randomTag);
      }, 100);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const random = pickRandomTag();
        addHighLight(random);
      }, 100);
    }, times * 100);
  }
}

// next stage is adding the random color
function pickRandomTag() {
  const tags = document.querySelectorAll(".choices");

  return tags[Math.floor(Math.random() * tags.length)];
}
function addHighLight(tags) {
  tags.classList.add("highlight");
}
function removeHighLight(tags) {
  tags.classList.remove("highlight");
}
