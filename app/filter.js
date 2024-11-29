const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id)
    const category = btnElement.value

    let filteredBooks = category === 'available' ? filterByAvailability() : filterByCategory(category)
    showBooksOnScreen(filteredBooks);

    if (category == 'available') {
        const totalValue = sumAllValues(filteredBooks)
        console.log('Total Value:', totalValue);
        showAllValueBooksAvailable(totalValue)
    }

}

function sumAllValues(filteredBooks) {
    return filteredBooks.reduce((total, book) => total + book.preco, 0);
}


function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);

}


function showAllValueBooksAvailable(totalValue) {
    elementValueAllBooksAvailable.innerHTML = `
    <div class="books__available">
            <p>All available books for $ <span id="valor">${totalValue}</span></p>
        </div>`;


}