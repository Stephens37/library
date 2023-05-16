let myLibrary = [];

function Book(name, pages) {
  this.name = name
  this.pages = pages
  this.getFullBook = function () {
    return `${this.name} ${this.pages}`
  }
}

const knig = new Book('hi ', '24')

function addBookToLibrary () {
  // for (i = 0; i < myLibrary.length; i++) {
  myLibrary.push(knig)
  console.log(myLibrary)
}
// }

addBookToLibrary()
