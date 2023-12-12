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

class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  sayName () {
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

  const tableRow = document.createElement('tr')
  tableRow.setAttribute('class', 'tablerow')
  tbody.append(tableRow)

  const bookRead = document.createElement('input')
  bookRead.setAttribute('type', 'checkbox')
  bookRead.setAttribute('class', 'bookread')
  tableRow.append(bookRead)

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

  function deleteBook () {
    myLibrary.splice(this.bookTitle, 3)
    bookRead.remove()
    removeBook.remove()
    bookTitle.remove()
    bookAuthor.remove()
    bookPages.remove()
  }

  const removeBook = document.createElement('button')
  removeBook.setAttribute('class', 'removebook')
  removeBook.innerHTML = 'Delete'
  tableRow.append(removeBook)
  removeBook.addEventListener('click', deleteBook)
}

form.addEventListener('submit', addToLibrary)
