/* Exploring Array Manipulation in JavaScript
Tasks 1 thru 4 */

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
let arrBooks = []

Book.prototype.displayInfo = function() {
    console.log('Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}');   
}

Book.prototype.addBooks = function(newTitle, newAuthor, newPages) {
    arrBooks.push(newTitle);
    arrBooks.push(newAuthor);
    arrBooks.push(newPages);
}

Book.prototype.searchBooks = function(given) {
    let searchbook1 = arrBooks.filter(book => this.title === given);
    let searchbook2 = arrBooks.filter(book => this.author === given);
    console.log(searchbook)
}

Book.prototype.filterBooks = function(arrBooks) {
    let filterbook = arrBooks.filter(book => this.pages > 100);
    console.log(filterbook);
}

Book.prototype.mapBooks = function(arrBooks) {
    let mapit1 = arrBooks.map(title => title["Title: "]);
    let mapit2 = arrBooks.map(author => author["Author: "]);
}

