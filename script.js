let $ = (id)=>{
    return document.getElementById(id);

}

let name = $("name");
let dob = $("dob");
let genders = document.getElementsByName("gender");
let email = $("email")
let mobile = $("mobile");
let pwd = $("pwd");
let reenterpwd = $("reenterpwd");
let course = $("course");
let submitBtn = $("submit");
let nameErrorMsg = $("name-error");
let dobErrorMsg = $("dob-error");
let genderErrorMsg = $("gender-error");
let emailErrorMsg = $("email-error");
let mobileErrorMsg = $("mobile-error");
let passwordErrorMsg = $("password-error");
let reenterpasswordErrorMsg = $("reenter-password-error");
let courseErrorMsg =$("course-error-msg");


function checkGender() {
    let genderChecked = false;
    let i = 0;
    while (!genderChecked && i < genders.length) {
        if (genders[i].checked) {
            genderChecked = true;
        }
            
        i++;        
    }

    if (!genderChecked) {
        genderErrorMsg.textContent = "Please select a gender";
    }
    
}

submitBtn.onclick=function(){
    event.preventDefault();
    
    if(name.value===""){
        //name.nextSibling.nodeValue="Name can't be empty";
        nameErrorMsg.textContent = "Name can't be empty";
    }

    if(dob.value===""){
        dobErrorMsg.textContent = "DOB can't be empty";
    }
    
  checkGender();
if(email.value===""){
    emailErrorMsg.textContent ="Please enter an email address";
}

if(mobile.value===""||mobile.value.length!==10)
    {
        mobileErrorMsg.textContent = "Please enter a 10 digit mobile number";
    }
if(pwd.value === ""||pwd.value.length<8){
   passwordErrorMsg.textContent = "Password must be atleast 8 characters"
}

if(pwd.value!==""&&pwd.value.length>=8&&pwd.value!==reenterpwd.value){
    reenterpasswordErrorMsg.textContent = "Both the passwords must be same";
}

if(course.value===""){
    courseErrorMsg.textContent="Please select a course";
}

else{
    alert("Student Registered");
}
}