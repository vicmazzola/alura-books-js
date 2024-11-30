function sumAllValues(filteredBooks) {
    return filteredBooks.reduce((total, book) => total + book.preco, 0);
}

