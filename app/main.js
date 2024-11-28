let books = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksApi ()
const elementInsertBooks = document.getElementById('books')


async function getSearchBooksApi() {
    const res = await fetch(endpointApi)
    books = await res.json()
    console.table(books)
    showBooksOnScreen(books)
}

function showBooksOnScreen(booksList) {
    booksList.forEach(book => {
        elementInsertBooks.innerHTML += `
          <div class="book">
    <img class="book__image unavailable" src="${book.imagem}" alt="${book.alt}" />
    <h2 class="book__title">
      ${book.titulo}
    </h2>
    <p class="book__description">${book.autor}</p>
    <p class="book__price" id="price">${book.preco}</p>
    <div class="tags">
      <span class="tag">${book.categoria}</span>
    </div>
  </div>`
    })
}