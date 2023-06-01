const myLibrary = []

function Book(title = 'unknown', pages = 'unknown') {
  this.title = title
  this.pages = pages
  this.sayName = function () {
    myLibrary.push(title, pages)
    console.log(myLibrary)
  }
}


function addToLibrary () {
  const player1 = new Book(document.getElementById('title').value, document.getElementById('pages').value)
  player1.sayName()
}

