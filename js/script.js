console.log("hello world")
function loggInn(){
    console.log("You clicked me daddy")

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let localStorageEmail = localStorage.getItem("email");
    let localStoragePassword = localStorage.getItem("password");

    // putt in cache her

    console.log(email)
    console.log(password)
}

function opprettBruker(){
    console.log("Det funker")

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatpassword = document.getElementById("repeatpassword").value;

    if (password === repeatpassword) {
        console.log("Completed")
        console.log(email, password, repeatpassword)
        localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)
        window.location.href = "../html/velkommen.html"
    }
    else{
        alert("Try again, passwords did not match")
        console.log("you fucked up")
    }
}
