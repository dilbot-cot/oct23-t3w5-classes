
// Import Library class, Book class, Audiobooks class, Games class, Movies class, Music class

const { Book } = require("./Book");
const { Media } = require("./Media");
const { Library } = require("./library");

// Create instances of classes
// Lord of the Rings as an instance of Book class

let lotr = new Book("fellowship of the ring")
let lotr2 = new Book("two towers", "second")
console.log(lotr);

// Do things with those instances

// Create an instance of a Library
// add media instances into the Library

let libraryInstance = new Library();
libraryInstance.books.push(lotr);

// Log the data in the library
console.log(libraryInstance);

console.log(libraryInstance.books[0].name);

console.log(libraryInstance.books.length);

console.log(Book.count);
lotr2 = null
Book.removeBook();
console.log(Book.count);

console.log(libraryInstance.books[0].getBookName())