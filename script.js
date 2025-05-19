document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.color = 'green';
        this.reset();
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
