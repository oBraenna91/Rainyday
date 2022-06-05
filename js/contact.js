const form = document.querySelector("#contact-form");

 form.onsubmit = function () {
    event.preventDefault();   

    const contactName = document.querySelector("#contact-name");

    console.log(contactName.value);
 }

 const contactName = document.querySelector("#contact-name");
 const nameError = document.querySelector("#name-error");
 const contactEmail = document.querySelector("#contact-email");
 const emailError = document.querySelector("#email-error");
 const contactSubject = document.querySelector("#contact-subject");
 const subjectError = document.querySelector("#subject-error");

 function validateForm () {
    event.preventDefault(); 

    if(checkLength(contactName.value, 4) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }
    if(checkLength(contactSubject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if(validateEmail(contactEmail.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    console.log("hello");
 }

 form.addEventListener("submit", validateForm )

 function checkLength (value, len) {
     if(value.trim().length > len) {
         return true;
     } else {
         return false;
     }
 }

 function validateEmail(contactEmail) {
     const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(contactEmail);
    return patternMatches ;
 } 