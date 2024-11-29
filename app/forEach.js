const elementInsertBooks = document.getElementById('books')

function showBooksOnScreen(booksList) {
    elementInsertBooks.innerHTML = ''
    booksList.forEach(book => {
        elementInsertBooks.innerHTML += `
          <div class="book">
          <img class="book__image" src="${book.imagem}" alt="${book.alt}" />
          <h2 class="book__title"> ${book.titulo} </h2>
          <p class="book__description">${book.autor}</p>
          <p class="book__price" id="preco">R$${book.preco.toFixed(2)}</p>
          <div class="tags">
          <span class="tag">${book.categoria}</span>
          </div>
  </div>`
    })
}
