const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

// Related to SPA
const navHome = document.querySelector('.nav-home');
const navBooks = document.querySelector('.nav-books');
const navContact = document.querySelector('.nav-contact');

const homeSection = document.querySelector('.home');
const bookSection = document.querySelector('.books');
const contactSection = document.querySelector('.contacts');

export {
  addButton, newTitle, newAuthor, container, navHome,
  navBooks, navContact, homeSection, bookSection, contactSection,
};