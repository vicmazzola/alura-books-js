let books = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getSearchBooksApi()



async function getSearchBooksApi() {
    const res = await fetch(endpointApi)
    books = await res.json()
    const booksOnSale = applyDiscount(books)
    showBooksOnScreen(booksOnSale)
}

