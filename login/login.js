let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", loginHandler);

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message
  });
};

const loginHandler = () => {
    if(email.value.trim() === "" || password.value.trim() === ""){
        return sweety(
            "error",
            "something went wrong",
            "Please Enter all fields!"
          );
    }
}

 let usersFromDB = JSON.parse(localStorage.getItem("users"));

 for(let i=0; i < usersFromDB.length; i++){
    let user = usersFromDB[i];

    if(usersFromDB[i]?.email === email.value ){
        if(usersFromDB[i]?.password === password.value){
            return sweety(
                "success",
                "Login Successful",
                "Welcome back " + usersFromDB[i]?.firstName + "!"
              );
        }
        break;
    }
 }
      
