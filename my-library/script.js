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
const bookShelf = document.querySelector(".bookShelf");

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
