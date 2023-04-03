// Importing the modules from the files.
import Book from './modules/book-class.js';
import BooksList from './modules/bookslist.js';
import showAddNewBook from './modules/showAddNewBook.js';
import {
  add, contact, list,
} from './modules/variables.js';
import showContact from './modules/showContact.js';
import showBooks from './modules/showBooks.js';
import dateAndTime from './modules/dateAndTime.js';

// Creating a new instance of the Book class and the BooksList class.
const books = new Book();
const bookslist = new BooksList();

// Calling the methods from the BooksList class.
bookslist.displayBooks();
bookslist.addBook();
bookslist.removeBook();
bookslist.bookFormEvent();
bookslist.saveBooksToLocalStorage();
bookslist.getBooksFromLocalStorage();
bookslist.displayErrorMessage();

// Adding event listeners to the buttons.
add.addEventListener('click', showAddNewBook);
contact.addEventListener('click', showContact);
list.addEventListener('click', showBooks);

// Calling the dateAndTime function.
dateAndTime();
