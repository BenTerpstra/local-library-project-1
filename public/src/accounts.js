function compileOut(books) {
  return out = books.filter((book) => book.borrows[0].returned === false);
}
////////////////////^helper fxns^///////////////////////////
////////////////////////////////////////////////////////////
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function getTotalNumberOfBorrows(account, books) {
  let user = account.id;
  let userBorrows = 0;
    books.forEach((book) => {
       book.borrows.forEach((borrow) => {if (borrow.id === user) return userBorrows++})
    });
  return userBorrows;
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((acc1, acc2) => acc1.name.last < acc2.name.last ? -1 : 1);
  return sorted;
}

function getBooksPossessedByAccount(account, books, authors) {
  let user = account.id;
  let userHas = [];
  let out = compileOut(books);
  out.forEach((book) => { 
    if (book.borrows[0].id === user) {
      let findAuthor = (author) => {if (author.id === book.authorId) return author};
      Object.assign(book, {"author" : authors.find((author) => author.id === book.authorId)});
      userHas.push(book);
      console.log(userHas);
    }
  });
  return userHas;
}
//////////////////////////fin///////////////////////////////
////////////////////////////////////////////////////////////

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
