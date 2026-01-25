document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        // Simple validation successful
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Please enter both email and password.');
    }
});
