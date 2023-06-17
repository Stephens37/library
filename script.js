/* es-lint disable */

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

const table = document.querySelector('#table')

function addToLibrary () {
  const htmlTitle = document.getElementById('title').value
  const htmlAuthor = document.getElementById('author').value
  const htmlPages = document.getElementById('pages').value
  const player1 = new Book(htmlTitle, htmlAuthor, htmlPages)
  player1.sayName()

  for (i = 0; i < myLibrary.length; i++) {
    const tableRow = document.createElement('tr')
    tableRow.setAttribute('class', 'tablerow')
    table.append(tableRow)

    const bookTitle = document.createElement('td')
    bookTitle.innerHTML = htmlTitle
    tableRow.append(htmlTitle)
    
    const bookAuthor = document.createElement('td')
    bookAuthor.innerHTML = htmlAuthor
    tableRow.append(htmlAuthor)

    const bookPages = document.createElement('td')
    bookPages.innerHTML = htmlPages
    tableRow.append(htmlPages)
    // eslint-disable-next-line spaced-comment
    /*const bookAuthor = document.getElementById('authorTable')
    bookAuthor.innerHTML = htmlAuthor
    const bookPages = document.getElementById('pagesTable')
    bookPages.innerHTML = htmlPages*/
    document.getElementById('book_info').reset()
    myLibrary.reset()
  }
}
