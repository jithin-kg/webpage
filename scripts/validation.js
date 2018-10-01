
var errStatus = false;

document.getElementById("firstName").onfocus = onMouseFocus;
document.getElementById("email").onfocus = onMouseFocus;
document.getElementById("password1").onfocus = onMouseFocus;
document.getElementById("password2").onfocus = onMouseFocus;
//document.getElementsByClassName("form-control").onfocus = onMouseFocus;

function validate(){

    event.preventDefault()
     var fName = document.forms["regForm"]["fName"].value;
     var lName = document.forms["regForm"]["lName"].value;
     var email = document.forms["regForm"]["email"].value;
     var password1 = document.forms["regForm"]["pass1"].value;
     var password2 = document.forms["regForm"]["pass2"].value;
   

    if(fName == ""){
        errStatus = true;
    
        changeColor("firstName");
       // document.getElementById("firstName").style.borderColor = "red";
        document.getElementById("firstName").placeholder = "name must be atleast 3 character"  ;

    } let re = /\S+@\S+\.\S+/;
    if(email == "" || !re.test(email) ){  //||  || password1 =="" || password2 ==""
    console.log("inside email");
        errStatus = true;  
        changeColor("email");
        document.getElementById("email").placeholder = "Enter a valid Email"  
    }

    if(password1 == "" || password2 =="" || password1 != password2){
        errStatus = true;
        changeColor("password1");
        changeColor("password2");
        document.getElementById("password1").placeholder = "password doesnt match or empty"; 
        document.getElementById("password2").placeholder = "password doesnt match or empty"   
    }
    
    if(!errStatus){
        console.log("inside last retutn");
        success();
        return true;
    }



}

function onMouseFocus(){
   if(errStatus){
       errStatus = false;
       changeColor("id");

   }
    
}

function changeColor(id){
    if(errStatus){
        document.getElementById(id).style.borderColor = "red";
    }else {
        document.getElementById("firstName").style.borderColor = "#b2e0d2";
        document.getElementById("email").style.borderColor = "#b2e0d2";
        document.getElementById("password1").style.borderColor = "#b2e0d2";
        document.getElementById("password2").style.borderColor = "#b2e0d2";

        document.getElementById("firstName").placeholder = "First name*"  
        document.getElementById("email").placeholder = "Email*"  
        document.getElementById("password1").placeholder = "password*"
        document.getElementById("password2").placeholder = "Confirm password"    

    }   

}
function success(){

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("company").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("address").value = "";


}
