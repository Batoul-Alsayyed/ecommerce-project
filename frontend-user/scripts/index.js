var navLinks = document.getElementById("navLinks");

function showMenu(){
    console.log("clicked");
    navLinks.style.right = "0";
}
function hideMenu(){
    console.log("clicked");
    navLinks.style.right = "-200px";
}
var menu_icon = document.getElementById("menu-icon");
menu_icon.addEventListener("click", showMenu);
var close_icon = document.getElementById("close-icon")
close_icon.addEventListener("click",hideMenu);

// var love_icon = document.getElementsByClassName("fa-heart");
// love_icon.addEventListener("click", love);

document.querySelectorAll('.fa-heart').forEach(item => {
    item.addEventListener('click', event => {
        item.style.color = "blueviolet";
    })
  })

let user_id = localStorage.getItem("user_id");  
console.log('user_id: ',user_id);