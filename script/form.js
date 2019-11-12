/*
This form will include:
+ Animation
+ Validation
+ Local data collection
*/


let formMain = document.querySelectorAll("form div");
console.log(formMain);

/*Animate form*/

// We say for every div element, we add the following attribute
// for (let i=formMain.length-1; i>= 00 ; i-- ) {
//     formMain[i].setAttribute("data-aos", "zoom");
//     formMain[i].setAttribute("data-aos-offset", "150");
//     formMain[i].setAttribute("data-aos-easing", "linear");
//     formMain[i].setAttribute("data-aos-duration", "3000");
//     formMain[i].setAttribute("data-aos-anchor-placement", "bottom-bottom");
// }

/* Structure */
loadChoices("previous-selection");
/* Validation */
let authorisation = document.forms[0]["id-auth"];
idAuthToHide = document.querySelector("div#drivers-license");
idAuthToHide.style.display = "none";
loadAuth();
// Function to continue inifinitively
function loadAuth() {
    authorisation.addEventListener("input", function () {
        let idAuth = authorisation.value;
        let idAuthToHide;
        let idAuthToAppear;
        if (idAuth == "passport") {
            idAuthToHide = document.querySelector("div#drivers-license");
            idAuthToAppear = document.querySelector("div#passport");
        } else {
            idAuthToHide = document.querySelector("div#passport");
            idAuthToAppear = document.querySelector("div#drivers-license");
        }
        idAuthToHide.style.display = "none";
        idAuthToAppear.style.display = "block";
        // loadAuth();
    });
}




/* Local */
/* Validation */
// Things to check
/*
name
email
credit card

*/
// Email Validation
let name = document.forms[0]["first-name"].value;
console.log(name)
localStorage.setItem("first-name", name);
// Get all values

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}



// Import text to check if it's all numbers
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        alert('Your name have accepted : you can try another');
        return true;
    } else {
        alert('Please input alphabet characters only');
        return false;
    }
}



