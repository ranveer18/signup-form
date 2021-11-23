let menuToggleMark = 0;
var toggleMenu = () => {
  if (menuToggleMark === 0) {
    document.getElementById("mobile-nav").style.display = "flex";
    menuToggleMark = 1;
  } else {
    document.getElementById("mobile-nav").style.display = "none";
    menuToggleMark = 0;
  }
};

const submitForm = document.getElementById("submit-form");

submitForm.addEventListener("click", function () {
  formValidation();
});

function formValidation() {
  let x = document.forms["signup"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  x = document.forms["signup"]["femail"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
  x = document.forms["signup"]["username"].value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
  x = document.forms["signup"]["fpassword"].value;
  if (x == "") {
    alert("Password must be filled out");
    return false;
  }
  if (x.length < 8) {
    alert("Password must be atleast 8 Characters long");
    return false;
  }
  let x2 = document.forms["signup"]["password2"].value;
  if (x2 == "" || x != x2) {
    alert("Password does not matched");
    console.log("Before False");
    return false;
  }

  return false;
}
