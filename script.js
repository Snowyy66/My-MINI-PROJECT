function addToCart(bookName) {
    alert(bookName + ' has been added to your cart!');
}

// Handle the form submission
document.querySelectorAll(".cart-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting
        const bookName = e.target.querySelector("input[name='bookName']").value;
        addToCart(bookName);
    });
});
