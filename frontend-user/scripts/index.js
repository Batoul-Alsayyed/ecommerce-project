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