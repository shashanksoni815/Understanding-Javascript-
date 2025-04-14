let signup_form = document.getElementById("sign-up-form")
let signup_btn = document.getElementById("signup-btn")
let login_btn = document.getElementById("login-btn")
let logOut = document.getElementById("log-out")

let home = document.getElementById("home")
console.log(home)

let check = 0;

signup_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let username = document.getElementById("user").value
    let mail = document.getElementById("mail").value
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirm-pass").value

    console.log(username)
    console.log(mail)
    console.log(password)
    console.log(confirmpassword)

    if (username && password && mail && confirmpassword) {
        alert("Signup Successful")

        if (check == 0) {
            let signup_box = document.getElementById("signup")
            let login_box = document.getElementById("login")
            signup_box.style.display = "none"
            login_box.style.display = "block"
            check = 1;
            
        }

    } else {
        alert("enter your details")
    }

// username.value = ""
// mail.value = ""
// password.value = ""
// confirmpassword.value = ""


})

login_btn.addEventListener("click", (e) => {
    e.preventDefault()
    let mail = document.getElementById("mail").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    console.log(email)
    console.log(pass)
    
    if (pass && email) {

        if( mail == email && password == pass  ) {
            alert("Login Successful")
            if (check == 1) {
                let signup_box = document.getElementById("signup")
                let login_box = document.getElementById("login")
                signup_box.style.display = "none"
                login_box.style.display = "none"
                home.style.display = "block"

                check = 2;
                
            }
        } else{
            alert("Enter correct Details")
        }
    } else {
        alert("enter your details")
    }
})

logOut.addEventListener("click", () => {

    if (check == 2) {
        alert("Log out Successful")

        let signup_box = document.getElementById("signup")
        let login_box = document.getElementById("login")
        signup_box.style.display = "block"
        login_box.style.display = "none"
        home.style.display = "none"

        check = 0;
        
    }
})

