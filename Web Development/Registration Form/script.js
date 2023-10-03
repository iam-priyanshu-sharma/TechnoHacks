function validation() {
    if (document.FormFill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username";
        return false;
    }
    else if (document.FormFill.Username.value < 6) {
        document.getElementById("result").innerHTML = "Atleast 6-char.";
        return false;
    }
    else if (document.FormFill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter Your Email*";
        return false;
    }
    else if (document.FormFill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter Your Password*";
        return false;
    }
    else if (document.FormFill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be 6-digit";
        return false;
    }
    else if (document.FormFill.CPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password";
        return false;
    }
    else if (document.FormFill.Password.value !== document.FormFill.CPassword.value) {
        document.getElementById("result").innerHTML = "Password didn't matched";
        return false;
    }
    else if (document.FormFill.Password.value == document.FormFill.CPassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
}
var popup = document.getElementById('popup');
function CloseSlide() {
    popup.classList.remove("open-slide");
}