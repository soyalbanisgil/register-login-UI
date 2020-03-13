"use strict";

const logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click", function loginValid(e) {
  e.preventDefault();

  const email = document.getElementById("logEmail").value;
  const pass = document.getElementById("logPass").value;

  let errMsg = document.querySelectorAll("#logForm > small")
  console.log(errMsg)

  //Success login
  if (email == "user@user.com" && pass == "pass") {
    errMsg.forEach(err => {
        window.location = "successLog.html"
    });
  } else if(email == "" && pass == "") {
    errMsg.forEach(err => {
        err.innerText = 'Please Fill The Form';
        err.classList.add("visible");
    });
  } else {
    errMsg.forEach(err => {
        err.innerText = 'Invaild Data';
        err.classList.add("visible")
    });
  }
});


