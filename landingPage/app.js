// Open the sign-in form
function openSignInForm() {
    document.getElementById("signin-form").style.display = "block";
}

// Close the sign-in form
function closeSignInForm() {
    document.getElementById("signin-form").style.display = "none";
}

// Close the sign-in form if the overlay is clicked
window.onclick = function(event) {
    if (event.target === document.getElementById("signin-form")) {
        document.getElementById("signin-form").style.display = "none";
    }
};
