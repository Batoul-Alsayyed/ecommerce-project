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
        url:'http://localhost/Foody-backend/login.php',
        data: data
    }).then(function(user){
        console.log(user);
        if(user.data.response!="User Not Found"){
                window.location.href='C:/xampp/htdocs/Ecommerce-project/frontend-user/index.html';

        }
        else{
            alert("Wrong email or password!");
        }
    });
}
