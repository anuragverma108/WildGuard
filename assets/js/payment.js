// Function to handle payment submission
function handlePayment(event) {
    event.preventDefault(); // Prevent form submission and page reload
    
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");
    const paymentMessage = document.getElementById("paymentMessage");
    
    // Reset payment message for each new submission
    paymentMessage.classList.add("hidden");

    // Validate card payment fields
    if (!cardNumber.checkValidity() || !expiryDate.checkValidity() || !cvv.checkValidity()) {
        alert("Please ensure all fields are correctly filled.");
        return;
    }

    // Show the payment message and hide the fields after successful submission
    paymentMessage.textContent = "Payment via card is confirmed! Thank you for your payment.";
    paymentMessage.classList.remove("hidden");
}
