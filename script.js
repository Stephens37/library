const myLibrary = []

function Book (title = 'unknown', pages = 'unknown') {
  this.title = title
  this.pages = pages
  this.sayName = function () {
    myLibrary.push(title, pages)
    console.log(myLibrary)
  }
}

const card = document.querySelectorAll('.cards')

function addToLibrary () {
  const htmlTitle = document.getElementById('title').value
  const htmlPages = document.getElementById('pages').value
  const player1 = new Book(htmlTitle, htmlPages)
  player1.sayName()

  const bookDiv = document.createElement('div')
  bookDiv.setAttribute('class', 'bookcard')
  card.appendChild(bookDiv)

  const bookTitle = document.createElement('div')
  bookTitle.setAttribute('class', 'cardtitle')
  bookTitle.innerHTML = htmlTitle
  bookDiv.appendChild(bookTitle)
  const bookPages = document.createElement('div')
  bookPages.setAttribute('class', 'cardpages')
  bookPages.innerHTML = htmlPages
  bookDiv.appendChild(bookPages)
  console.log(bookTitle.innerHTML)
  document.getElementById('book_info').reset()
}
