const myLibrary = []

function Book (title = 'unknown', pages = 'unknown') {
  this.title = title
  this.pages = pages
  this.sayName = function () {
    myLibrary.push(title, pages)
    console.log(myLibrary)
  }
}

const bookDiv = document.createElement('div')
bookDiv.classList.add('bookcard')
const bookTitle = document.createElement('div')
bookTitle.classList.add('title')
bookDiv.appendChild(bookTitle)
const bookPages = document.createElement('div')
bookPages.classList.add('pages')
bookDiv.appendChild(bookPages)


function addToLibrary () {
  const htmlTitle = document.getElementById('title').value
  const htmlPages = document.getElementById('pages').value
  const player1 = new Book(htmlTitle, htmlPages)
  player1.sayName()

  const bookDiv = document.createElement('div')
  bookDiv.classList.add('bookcard')

  const bookTitle = document.createElement('div')
  bookTitle.classList.add('cardtitle')
  bookTitle.innerHTML = htmlTitle
  bookDiv.appendChild(bookTitle)
  const bookPages = document.createElement('div')
  bookPages.classList.add('cardpages')
  bookPages.innerHTML = htmlPages
  bookDiv.appendChild(bookPages)

  document.getElementById('book_info').reset()
}

