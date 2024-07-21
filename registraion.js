function back() {
    window.location = "index.html"
}
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let register_btn = document.querySelector(".submit")

register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ===""){
        alert("please fill data")
    } else {
        let users = {
            username : username.value ,
            email : email.value ,
            password : password.value 
        }
        localStorage.setItem("users" , JSON.stringify(users));
        alert("Sign up Successfully !!")
        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})

