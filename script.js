/* es-lint disable */

const form = document.getElementById('book_form')
const opening = document.getElementById('newbook')
const closing = document.getElementById('close')

function openForm () {
  form.style.display = 'grid'
}

document.getElementById('newbook').addEventListener('click', openForm)

function closeForm () {
  form.style.display = 'none'
}

closing.addEventListener('click', closeForm)


let myLibrary = []

function Book (title = 'unknown', author = 'unknown', pages = 'unknown') {
  this.title = title
  this.author = author
  this.pages = pages
  this.sayName = function () {
    myLibrary.push(title, author, pages)
    console.log(myLibrary)
  }
}

const tbody = document.querySelector('#tbody')

function addToLibrary () {
  const htmlTitle = document.getElementById('title').value
  const htmlAuthor = document.getElementById('author').value
  const htmlPages = document.getElementById('pages').value
  const player1 = new Book(htmlTitle, htmlAuthor, htmlPages)
  player1.sayName()

  /* function deleteBook() {
    htmlTitle.parentNode.removeChild(htmlTitle)
  } */

  for (i = 0; i < 1; i++) {
    const tableRow = document.createElement('tr')
    tableRow.setAttribute('class', 'tablerow')
    tbody.append(tableRow)

    /*const deleteBook = document.createElement('button')
    deleteBook.onclick(deleteBook())*/

    const read = document.createElement('input')
    read.setAttribute('type', 'checkbox')

    const removeBook = document.createElement('button')
    removeBook.setAttribute('class', 'removebook')
    removeBook.innerHTML = 'Delete'
    tableRow.append(removeBook)

    const bookTitle = document.createElement('td')
    bookTitle.setAttribute('class', 'booktitle')
    bookTitle.innerHTML = htmlTitle
    tableRow.append(bookTitle)

    const bookAuthor = document.createElement('td')
    bookAuthor.setAttribute('class', 'bookauthor')
    bookAuthor.innerHTML = htmlAuthor
    tableRow.append(bookAuthor)

    const bookPages = document.createElement('td')
    bookPages.setAttribute('class', 'bookpages')
    bookPages.innerHTML = htmlPages
    tableRow.append(bookPages)
    function deleteBook (removeTitle, removeAuthor, removePages) {
      removeTitle = myLibrary.indexOf('booktitle')
      removeAuthor = myLibrary.indexOf('bookauthor')
      removePages = myLibrary.indexOf('bookpages')
      myLibrary.splice('booktitle', removeTitle)
      myLibrary.splice('bookauthor', removeAuthor)
      myLibrary.splice('bookpages', removePages)
    }
    removeBook.addEventListener('click', deleteBook)
  }
}

form.addEventListener('submit', addToLibrary)
