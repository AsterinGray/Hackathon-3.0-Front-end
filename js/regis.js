//Binusian & Non-Binusian Checker
const binusChecker = (e) => {
  if($(e).attr("id") == "binusian"){
    $("label[for='idcard-leader'").text("Upload Flazz Card")
  } else {
    $("label[for='idcard-leader'").text("Upload ID Card")
  }
}

//Group Name Validator
const validateName = (e) => {
  const len = $(e).val().length;
  if (len < 5 || len > 12) {
    $(e)[0].setCustomValidity("Group name lenght must be between 5 and 12");
    $(e).next("p").text("Group name lenght must be between 5 and 12");
  } else {
    $(e)[0].setCustomValidity("");
    $(e).next("p").text("");
  }
};

//Password Confirmation Validator
const validateConfirmPass = () => {
  if ($("#password").val() === $("#confirm-password").val()) {
    $("#confirm-password")[0].setCustomValidity("");
    $("#confirm-password").next(".invalid-feedback").text("");
  } else {
    $("#confirm-password")[0].setCustomValidity("Passowrd must match");
    $("#confirm-feedback").text("Password doesn't match");
  }
};

//Password Validator
const validatePass = () => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
  );

  console.log($("#password").val())
  if (!$("#password").val().match(regex)) {
    $("#password")[0].setCustomValidity(
      "Password must contain at least 8 characters, including uppercase, lowercase and number"
    );
    $("#pass-feedback").text(
      "Password must contain at least 8 characters, including uppercase, lowercase and number"
    );
  } else {
    $("#password")[0].setCustomValidity("");
    $("#pass-feedback").text("");
  }
};

//Email Validator
const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.match(regex)) {
    $(email)[0].setCustomValidity("");
    $(email).next("p").text("");
  } else {
    $(email)[0].setCustomValidity("Invalid Email");
    $(email).next("p").text("Invalid Email");
  }
};

//Phone Number Validator
const validatePhone = (e) => {
  const len = $(e).val().length;
  if (len < 10) {
    $(e)[0].setCustomValidity("Invalid Phone Number");
    $(e).next("p").text("Invalid Phone Number");
  } else {
    $(e)[0].setCustomValidity("");
    $(e).next("p").text("");
  }
};

changeFile = (e) => {
  var fileName = e.files[0].name;
  $('label[for="' + e.id + '"]').html(fileName);

  if (fileName.includes(".jpg") || fileName.includes(".jpeg") || fileName.includes(".pdf") || fileName.includes(".png")) {
    $(e).prev("p").text("");
    $(e)[0].setCustomValidity("");
  } else {
    $(e).prev("p").text("Invalid File Extension");
    $(e)[0].setCustomValidity("Invalid File Extension");
  }
}