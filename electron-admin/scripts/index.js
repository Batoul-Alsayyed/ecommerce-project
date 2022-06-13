//Menu toggle 

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.addEventListener("click", function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');

})
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover', activeLink));

    // if (item.getAttribute('id')=="products"){
    //     console.log("products is hovered")
    // }
function clickingNavLinks(){
    console.log("id = ",this.id);
     if (this.id === "categories"){
        document.getElementsByClassName("categories-table")[0].style.display = "block";
        document.getElementsByClassName("products-table")[0].style.display = "block";
    }
    else if (this.id === "products"){
        document.getElementsByClassName("categories-table")[0].style.display = "none";
        document.getElementsByClassName("products-table")[0].style.display = "block";
    }

    else if (this.id === "dashboard"){
        document.getElementsByClassName("categories-table")[0].style.display = "none";
        document.getElementsByClassName("products-table")[0].style.display = "none";
    }
    else if (this.id === "signout"){
        console.log("signout");
    }
}

    list.forEach((item)=>
    item.addEventListener('click', clickingNavLinks));
    
