function validate(){
    console.log("validate");

    var emailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.forms["registerForm"]["email"].value;
    console.log(email);

    console.log(emailRegx.test(String(email)));
    if ((emailRegx.test(String(email)))) {
      alert("email must be filled out");
      return false;
    }
   
    return true;
}
