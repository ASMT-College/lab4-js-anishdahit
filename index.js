function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
   
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}



function validateForm(){
    const nameRegex = /^[a-zA-Z ]{5,20}$/;
    const phoneRegex = /^[]0-9]{10}$/
    const emailRegex = /^[A-Za-z0-9 ]+@[a-zA-z]+.[a-zA-z]{2,3}$/;
    const pwRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (!nameRegex(test(name)){
        seterror("name", "*name is not valid");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (!emailRegex.test(email)){
        seterror("email", "*Email not match");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (!phoneRegex(phone)){
        seterror("phone", "*Phone number not match!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (!pwRegex.test(password)){

        
        seterror("pass", "*Password does not match!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

