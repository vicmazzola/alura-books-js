const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id)
    const category = btnElement.value
    let filteredBooks = category == 'available' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category)
    showBooksOnScreen(filteredBooks);
    console.table(filteredBooks);

}