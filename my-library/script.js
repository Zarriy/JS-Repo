const libraryBooks = [];

const addToLibrary = function (book, author, publication, read) {
  // function to add to library books in the array.
  libraryBooks.push({ book, author, publication, read });
};
addToLibrary("Split the Difference", "Micheal Von", 2011, false);

addToLibrary("Gap Selling", "Unknown", 2022, false);

addToLibrary("the prince", "Machievali", 1500, true);
addToLibrary("Thinking Fast and slow", "Daniel Kahenman", 2013, true);
addToLibrary("Atomic Habbits", "James Clear", 2018, true);

//selecting the dom elements.
const openbtn = document.querySelector(".open");
const closebtn = document.querySelector(".closing-icon");
const form = document.querySelector(".form-add");
const bookShelf = document.querySelector(".bookShelf");

// adding event listener to openbtn
openbtn.addEventListener("click", function () {
  form.classList.add("active");
  openbtn.style.display = "none";
});
// adding event listener to closing btn.
closebtn.addEventListener("click", function () {
  form.classList.remove("active");
  openbtn.style.display = "inline-block";
});
//writing a function that loops over the array and displays the results on the screen.
function displayBooks(arr) {
  for (let x = 0; x < arr.length; x++) {
    const html = `<div class="book book-${x}">
    <h1>${arr[x].book}</h1>
    <span>Author: ${arr[x].author}</span>
    <span>Publication: ${arr[x].publication}</span>
    <span>Read: ${arr[x].read}</span>
  </div>`;

    bookShelf.insertAdjacentHTML("afterbegin", html);
  }
}
displayBooks(libraryBooks);

// getting data from the data DOM.
const bookNameInput = document.querySelector("#name");
const bookAuthorInput = document.querySelector("#author");
const bookPublInput = document.querySelector("#publ-Year");

const btnEvent = document.querySelector(".btnEvent");

btnEvent.addEventListener("click", function (e) {
  e.preventDefault();
  const readInput = document.querySelector(".readBox:checked");
  addToLibrary(
    bookNameInput.value,
    bookAuthorInput.value,
    bookPublInput.value,
    readInput.value
  );
  displayBooks(libraryBooks.slice(libraryBooks.length - 1));
  bookNameInput.value =
    bookAuthorInput.value =
    bookPublInput.value =
    readInput.checked =
      "";
  form.classList.remove("active");
  openbtn.style.display = "inline-block";
});
