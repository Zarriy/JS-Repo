const faqBox = document.querySelectorAll(".faq-box");
const icons = document.querySelector(".iconss");

console.log(icons);
faqBox.forEach((box) => box.addEventListener("click", addActive));

let elementChild;
function addActive(e) {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    elementChild = document.querySelector(
      `.${this.firstElementChild.className}`
    );
    elementChild.firstElementChild.name = "remove-outline";
  } else {
    elementChild.firstElementChild.name = "add-outline";
  }
}
