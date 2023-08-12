///// separate .js file for helper functions /////
function trimArray (array, length) {
  while (array.length > length) {
    array.pop();
  }
  return array;
}
function compileOut(books) {
  return out = books.filter((book) => book.borrows[0].returned === false);
}
function compileIn(books) {
  return notOut = books.filter((book) => book.borrows[0].returned !== false);
}
function sumCounts (counts) {
  let sum = counts.reduce((totalCounts, count) => {
        return totalCounts += count;
  });
  return sum;
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

module.exports = {
  trimArray,
  compileOut,
  compileIn,
  sumCounts,
}; // I tried to figure out how to export/import/require, but I couldn't get it to work, so I just copy/pasted from the toolbox file.