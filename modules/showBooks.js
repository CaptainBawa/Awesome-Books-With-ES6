// Importing the variables from the variables.js file.
import { allBooks, addBook, getContact } from './variables.js';

/*
 It sets the display property of the allBooks element to flex, and the display property of the
 addBook and getContact elements to none */
const showBooks = () => {
  allBooks.style.display = 'flex';
  addBook.style.display = 'none';
  getContact.style.display = 'none';
};

// Exporting the showBooks function to be used in other files.
export default showBooks;