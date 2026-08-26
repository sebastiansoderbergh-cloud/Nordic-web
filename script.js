function gaTillKontakt() {
    document.getElementById("kontakt").scrollIntoView();
}
function gaTillKontakt() {
    document.getElementById("kontakt").scrollIntoView({
        behavior: "smooth"
    });
}
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.style.display = "block";
    form.reset();
});
const bookingForm = document.getElementById("booking-form");
const bookingMessage = document.getElementById("booking-message");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        bookingMessage.style.display = "block";
        bookingForm.reset();
    });
}