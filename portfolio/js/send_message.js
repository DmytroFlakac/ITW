document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showToast("Message sent successfully!");
                form.reset();
            } else {
                showToast("Failed to send message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast("Failed to send message. Please try again later.");
        });
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        toastMessage.textContent = message;
        toast.style.display = 'block';

        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000); // Toast disappears after 3 seconds
    }
});