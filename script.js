const myLibrary = []

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
    const bookTitle = document.getElementById('titleTable')
    bookTitle.innerHTML = htmlTitle
    
    const bookAuthor = document.getElementById('authorTable')
    bookAuthor.innerHTML = htmlAuthor
    const bookPages = document.getElementById('pagesTable')
    bookPages.innerHTML = htmlPages
    
    document.getElementById('book_info').reset()
  }
}
