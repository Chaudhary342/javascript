// function signup(event) {
//     event.preventDefault();
//     var email = document.getElementById("exampleInputEmail1").value;
//     var username = document.getElementById("exampleInputNmae1").value;
//     var pass = document.getElementById("exampleInputPassword1").value;

//     var user = {
//         email: email,
//         username: username,
//         password: pass
//     };
//     var json = JSON.stringify(user);
//     localStorage.setItem(username, json)
//     console.log("User Added")
// }
function signup(event) {
    event.preventDefault();
    var email = document.getElementById("exampleInputEmail1").value;
    var username = document.getElementById("exampleInputNmae1").value;
    var pass = document.getElementById("exampleInputPassword1").value;

    // Check if the username already exists
    if (localStorage.getItem(username) ) {
        alert("Username already exists!")
        return;
    }
    // else if()
    // Check if the email already exists in any user object in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var storedUser = JSON.parse(localStorage.getItem(key));

        if (storedUser.email === email) {
            alert("Email already exists!");
            return;
        }
    }
    var user = {
        email: email,
        username: username,
        password: pass
    };
    var json = JSON.stringify(user);
    localStorage.setItem(json);
    console.log("User Added");
    alert("Signup successful!");
}

// 
// 
function loginfunc(event) {
    event.preventDefault()
    var username = document.getElementById("exampleInputNmae1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    var result = document.getElementById("text");
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    // console.log(data)
    if (user == null) {
        result.style.color = "red"
        result.innerHTML = "Wrong User-Name";
    }
    else if (username == data.username && pass == data.password) {
        result.style.color = "black"
        result.innerHTML = "Logged IN"
        document.getElementById("exampleInputNmae1").value = "";
        document.getElementById("exampleInputPassword1").value = "";
    }
    else {
        result.style.color = "red"
        result.innerHTML = "Wrong Password";
    }
}
