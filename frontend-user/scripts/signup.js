let button = document.getElementById("submit");
button.addEventListener("click", submitclick);
function submitclick(){
    let fullname = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = new FormData();
    data.append('name', fullname);
    data.append('email', email);
    data.append('password', password);
    data.append('type', 'user');

    axios({
        method: 'POST',
        url:'http://127.0.0.1:8000/api/auth/register',
        data: data
    }).then(function (response) {
            console.log(response);
            window.location.href='C:/xampp/htdocs/Ecommerce-project/frontend-user/index.html';
        
    })
}