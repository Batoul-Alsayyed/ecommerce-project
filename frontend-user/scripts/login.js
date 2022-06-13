let button = document.getElementById("submit");
button.addEventListener("click", submitclick);
function submitclick(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    axios({
        method: 'POST',
        url:'http://127.0.0.1:8000/api/auth/login',
        data: data
    }).then(function(user){
        if(user.data.response!="User Not Found"){
                window.location.href='C:/xampp/htdocs/Ecommerce-project/frontend-user/index.html';
                localStorage.setItem("user_id",user.data.user.id);
                console.log("user_id",user.data.user.id);
        }
        else{
            alert("Wrong email or password!");
        }
    });
}
