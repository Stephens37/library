/* es-lint disable */


function openForm() {
  document.getElementById('book_form').style.display = 'grid'
}

function closeForm() {
  document.getElementById('book_form').style.display = 'none'
}

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

    // eslint-disable-next-line spaced-comment
    /*const bookAuthor = document.getElementById('authorTable')
    bookAuthor.innerHTML = htmlAuthor
    const bookPages = document.getElementById('pagesTable')
    bookPages.innerHTML = htmlPages*/
    document.getElementById('book_info').reset()
  }
}