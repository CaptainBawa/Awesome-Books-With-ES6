// Selecting the nav elements with the class names of list, add, and contact.
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');
const date = document.querySelectorAll('.date');

// Selecting the main section elements with the ids of books, add-book, and contact.
const allBooks = document.querySelector('#books');
const addBook = document.querySelector('#add-book');
const getContact = document.querySelector('#contact');

// Exporting the variables to be used in other files.
export {
  list, addBook, getContact, allBooks, add, contact, date,
};