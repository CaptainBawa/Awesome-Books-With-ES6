// Importing the variables from the variables.js file.
import {
  addBook, allBooks, getContact,
} from './variables.js';

/*
 It changes the display property of the addBook element to flex, and changes the display property of
 the allBooks and getContact elements to none */
const showAddNewBook = () => {
  addBook.style.display = 'flex';
  allBooks.style.display = 'none';
  getContact.style.display = 'none';
};

// Exporting the showAddNewBook function to be used in other files.
export default showAddNewBook;