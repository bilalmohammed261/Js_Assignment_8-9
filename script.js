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
let flag = true;

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
    flag = false;
    
}

function clearErrorMessages(){
    nameErrorMsg.textContent ="";
    dobErrorMsg.textContent ="";
    genderErrorMsg.textContent ="";
    emailErrorMsg.textContent ="";
    mobileErrorMsg.textContent ="";
    passwordErrorMsg.textContent ="";
    reenterpasswordErrorMsg.textContent ="";
    courseErrorMsg.textContent ="";

}
submitBtn.onclick=function(){
    event.preventDefault();
    clearErrorMessages();
    if(name.value===""){
        //name.nextSibling.nodeValue="Name can't be empty";
        nameErrorMsg.textContent = "Name can't be empty";
        flag = false;
    }

    if(dob.value===""){
        dobErrorMsg.textContent = "DOB can't be empty";
        flag = false;
    }
    
  checkGender();
if(email.value===""){
    emailErrorMsg.textContent ="Please enter an email address";
    flag = false;
}

if(mobile.value===""||mobile.value.length!==10)
    {
        mobileErrorMsg.textContent = "Please enter a 10 digit mobile number";
        flag = false;
    }
if(pwd.value === ""||pwd.value.length<8){
   passwordErrorMsg.textContent = "Password must be atleast 8 characters";
   flag = false;
}

if(pwd.value!==""&&pwd.value.length>=8&&pwd.value!==reenterpwd.value){
    reenterpasswordErrorMsg.textContent = "Both the passwords must be same";
    flag = false;
}

if(course.value===""){
    courseErrorMsg.textContent="Please select a course";
    flag = false;
}

if(!flag){
    alert("Student Registered");
}
}