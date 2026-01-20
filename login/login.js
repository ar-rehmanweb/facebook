function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email !== "" && password !== "") {
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter email and password");
    }
}