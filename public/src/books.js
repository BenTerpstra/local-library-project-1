function trimArray (array, length) {
  while (array.length > length) {
    array.pop();
  }
  return array;
}
//const trimArray = require('./toolbox.js'); //didn't work
//import {trimArray} from ("/toolbox.js");  //didn't work
//I guess I'll just paste them all in as needed
function compileOut(books) {
  return out = books.filter((book) => book.borrows[0].returned === false);
}
function compileIn(books) {
  return notOut = books.filter((book) => book.borrows[0].returned !== false);
}
////////////////////^helper fxns^///////////////////////////
////////////////////////////////////////////////////////////
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returnStatus = [];
  const booksOut = compileOut(books);
  const booksIn = compileIn(books);
  returnStatus.push(booksOut);
  returnStatus.push(booksIn);
  return returnStatus;
}

function getBorrowersForBook(book, accounts) {
  const bookBorrows = book.borrows;
  const bookBorrowers = [];
  const borrowers = bookBorrows.forEach((borrow) => {
    bookBorrowers.push(Object.assign(borrow, accounts.find((account) => borrow.id === (account.id))));
  })
  trimArray(bookBorrowers, 10);
  return bookBorrowers;
}
//////////////////////////fin///////////////////////////////
////////////////////////////////////////////////////////////

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
