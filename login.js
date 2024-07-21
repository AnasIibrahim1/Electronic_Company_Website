let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector(".submit")
let getUser = localStorage.getItem("users")
let switches = false;

loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value==="" || password.value===""){
        alert("please fill data ")
    } else {
        if(localStorage.getItem("users")){
            if ( JSON.parse(getUser).username === username.value.trim() && (JSON.parse(getUser).password === password.value))
            {
            alert("Login Successfully !!")
                setTimeout ( () => {
                    window.location = "index.html"
                } , 1500)
                switches = true;
                localStorage.setItem("switch" , switches)
            }
        } else {
            alert("No User Found First !!")
            let conf = confirm("Want to Sign up ?")
            if(conf){
                window.location = "registration.html"
            }
        }

    }
})

function back() {
    window.location = "index.html"
}