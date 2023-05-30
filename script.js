const myLibrary = []
const page = document.getElementById('pages').innerHTML
const titles = document.getElementById('title').innerHTML

function Book (title, pages) {
  this.title = title
  this.pages = pages
  this.getFullBook = function () {
    return `${this.title} ${this.pages}`
  }
}

const knig = new Book(titles, page)

function formReset () {
  document.getElementById('book_info').reset()
  myLibrary.push(page)
  myLibrary.push(titles)
}


console.log(myLibrary)
