function compileOut(books) {
  return out = books.filter((book) => book.borrows[0].returned === false);
}
function trimArray (array, length) {
  while (array.length > length) {
    array.pop();
  }
  return array;
}
function sumCounts (counts) {
  let sum = counts.reduce((totalCounts, count) => {
        return totalCounts += count;
  });
  return sum;
}
////////////////////^helper fxns^///////////////////////////
////////////////////////////////////////////////////////////
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return compileOut(books).length;
}

function getMostPopularBooks(books) {
  const popularBooks = [];
    books.map((book) => popularBooks.push({name : book.title, count : book.borrows.length}));
    popularBooks.sort((book1, book2) => book1.count > book2.count ? -1 : 1)
  const topFive = trimArray(popularBooks, 5);
  return topFive;
}

function getMostCommonGenres(books) {
  let genres = [];
  books.map((book) => {
     if (genres.every((genre) => genre.name !== book.genre)) {genres.push({"name" : book.genre, "count" : 0})}
    });
  genres.forEach((genre) => {
    genre.count = books.reduce((count, book) => {
      if (book.genre === genre.name) count++;
      return count;
    },0);
  });
  genres.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1);
  return trimArray(genres, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => {
    let fullName = `${author.name.first} ${author.name.last}`
    let borrowCount = 0;
    let booksWritten = [];
    books.forEach((book) => {
      if (book.authorId === author.id) booksWritten.push(book);
    });
    let counts = [];
    booksWritten.forEach((book) => {
      counts.push(book.borrows.length);
    });
    popularAuthors.push({name : fullName, count : sumCounts(counts)});    
  });
  popularAuthors.sort((auth1, auth2) => auth1.count > auth2.count ? -1 : 1);
  return trimArray(popularAuthors, 5);
}
//////////////////////////fin///////////////////////////////
////////////////////////////////////////////////////////////

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
