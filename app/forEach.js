const elementInsertBooks = document.getElementById('books')
const elementValueAllBooksAvailable = document.getElementById('total_value_available_books')


function showBooksOnScreen(booksList) {
    elementValueAllBooksAvailable.innerHTML = ''
    elementInsertBooks.innerHTML = ''
    booksList.forEach(book => {
    let availability = book.quantidade > 0 ? 'book__image' : 'book__image unavailable'
        elementInsertBooks.innerHTML += `
          <div class="book">
          <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
          <h2 class="book__title"> ${book.titulo} </h2>
          <p class="book__description">${book.autor}</p>
          <p class="book__price" id="preco">R$${book.preco.toFixed(2)}</p>
          <div class="tags">
          <span class="tag">${book.categoria}</span>
          </div>
  </div>`
    })
}

