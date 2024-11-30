const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id)
    const category = btnElement.value

    let filteredBooks = category === 'available' ? filterByAvailability() : filterByCategory(category)
    showBooksOnScreen(filteredBooks);

    if (category === 'available') {
        const totalValue = sumAllValues(filteredBooks);
        console.log('Total Value:', totalValue);
        showAllValueBooksAvailable(totalValue)
    } else {
        elementValueAllBooksAvailable.innerHTML = '';
    }

}



function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);

}


function showAllValueBooksAvailable(totalValue) {
    console.log("Updating total_value_available_books:", totalValue);
    elementValueAllBooksAvailable.innerHTML = `
    <div class="books__available">
<p>All available books for: <span class="break-mobile"><br></span>R$<span id="valor">${totalValue.toFixed(2)}</span></p>        </div>`;


}