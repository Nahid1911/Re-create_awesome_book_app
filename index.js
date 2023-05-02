import Books from './modules/book_class.js';
import { storeForm, displayBooks } from './modules/functions.js';
import { DateTime } from './modules/luxon.js';
import {
  addButton, newTitle, newAuthor, container, navHome, navBooks, navContact, homeSection,
  bookSection, contactSection,
} from './modules/DOM_Catcher.js';

const books = JSON.parse(localStorage.getItem('form')) || [];

for (let i = 0; i < books.length; i += 1) {
  const book = displayBooks(books[i], i);
  container.innerHTML += book;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const library = new Books(newAuthor.value, newTitle.value, books);
    library.addBook();
    storeForm(books);
    window.location.reload();
  }
  document.getElementById('addNewForm').reset();
});

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const libraryOne = new Books(newAuthor.value, newTitle.value, books, button);
    libraryOne.deleteBook();
    storeForm(books);
  });
});

// SPA

navHome.addEventListener('click', () => {
  navHome.style.color = 'blue';
  navBooks.style.color = 'black';
  navContact.style.color = 'black';
  homeSection.style.display = 'flex';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});
navBooks.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'blue';
  navContact.style.color = 'black';
  homeSection.style.display = 'none';
  bookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});
navContact.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'black';
  navContact.style.color = 'blue';
  homeSection.style.display = 'none';
  bookSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

const timeSlot = document.getElementById('time');

const dt = DateTime.now();

timeSlot.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);