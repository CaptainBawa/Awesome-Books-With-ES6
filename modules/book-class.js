// A Book is a thing that has a title and an author.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// It's exporting the Book class so that it can be imported by other files.
export default Book;