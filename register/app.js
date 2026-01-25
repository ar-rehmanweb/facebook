let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
let signupBtn = document.getElementById("signupBtn");

// Initialize users from localStorage correctly
let users = JSON.parse(localStorage.getItem("users")) || [];

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};

const signupHandler = () => {
  if (
    firstName.value.trim() == "" ||
    lastName.value.trim() == "" ||
    email.value.trim() == "" ||
    day.value.trim() == "" ||
    month.value.trim() == "" ||
    year.value.trim() == "" || password.value.trim() == ""
  ) {
    return sweety(
      "error",
      "something went wrong",
      "Please Enter all fields!"
    );
  }

  if (password.value.length < 8) {
    return sweety(
      "error",
      "something went wrong",
      "Password at least 8 character!"
    );
  }

  var userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    day: day.value,
    month: month.value,
    year: year.value,
    password: password.value,
  };

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userObj.gender = gender[i].value;
    }
  }

  // Add new user to the array
  users.push(userObj);
  // Update localStorage with the new array
  localStorage.setItem("users", JSON.stringify(users));

  sweety("success", "Signup Done", "Congratulations! signup successfully!");
  
  // Redirect to login page after short delay
  setTimeout(() => {
    window.location.href = "../login/login.html";
  }, 2000);
};

signupBtn.addEventListener("click", signupHandler);