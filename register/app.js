let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let email = document.getElementById("email");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
let signupBtn = document.getElementById("signupBtn");

let users = [];

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

  if (
    password.value.length < 8
  ) {
    return sweety(
      "error",
      "something went wrong",
      "Password at least 8 character!" || password.value.trim() == ""
    );
  }
  console.log("aagy bi chalaa");

  var userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    day: day.value,
    month: month.value,
    year: year.value,
    password: password.value,
  };

  // console.log("chl rahaa ho =>")
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userObj.gender = gender[i].value;
    }
  }

  users.push(userObj);
  localStorage.setItem("users", JSON.stringify(users));

  let usersFromDB = JSON.parse(localStorage.getItem("users"));

  usersFromDB.push(userObj);
  localStorage.setItem("users", JSON.stringify(usersFromDB));

  sweety("success", "Signup Done", "Congratulations! signup successfully!")
};

signupBtn.addEventListener("click", signupHandler);


    // firstName.value
    // lastName.value
    // email.value
    // day.value
    // month.value
    // year.value