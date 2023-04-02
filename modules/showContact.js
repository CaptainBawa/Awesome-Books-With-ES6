// Importing the variables from the variables.js file.
import { getContact, addBook, allBooks } from './variables.js';

/*
 It sets the display property of the getContact element to flex, and the display property of the
 addBook and allBooks elements to none */
const showContact = () => {
  getContact.style.display = 'flex';
  addBook.style.display = 'none';
  allBooks.style.display = 'none';
};

// Exporting the function showContact so that it can be used in other files.
export default showContact;