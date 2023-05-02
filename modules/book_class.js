export default class Books {
  constructor(author, title, books, button) {
    this.author = author;
    this.title = title;
    this.books = books;
    this.button = button;
  }

  addBook() {
    const { title } = this;
    const { author } = this;

    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);
  }

  deleteBook() {
    const item = this.button.parentNode;
    const parent = item.parentNode;
    parent.parentNode.removeChild(parent);

    const { id } = this.button;

    for (let i = 0; i < this.books.length; i += 1) {
      if (id.includes(i)) {
        this.books.splice(i, 1);
      }
    }
  }
}