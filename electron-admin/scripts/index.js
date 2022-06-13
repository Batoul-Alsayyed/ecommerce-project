// Get products


//Menu toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// if (item.getAttribute('id')=="products"){
//     console.log("products is hovered")
// }
function clickingNavLinks() {
  console.log("id = ", this.id);
  if (this.id === "categories") {
    document.getElementsByClassName("categories-table")[0].style.display =
      "block";
    document.getElementsByClassName("products-table")[0].style.display =
      "block";
  } else if (this.id === "products") {
    document.getElementsByClassName("categories-table")[0].style.display =
      "none";
    document.getElementsByClassName("products-table")[0].style.display =
      "block";
  } else if (this.id === "dashboard") {
    document.getElementsByClassName("categories-table")[0].style.display =
      "none";
    document.getElementsByClassName("products-table")[0].style.display = "none";
  } else if (this.id === "signout") {
    console.log("signout");
  }
}

list.forEach((item) => item.addEventListener("click", clickingNavLinks));

let products = document.querySelector(".products-table");

function getProducts() {
  axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/products",
  }).then(function (response) {
    // console.log(response.data.products.length);
    // console.log(response.data.products[0]["price"]);

    for (let product = 0; product < response.data.products.length; product++) {
        products.innerHTML += `
        <tr>
        <td>${response.data.products[product]["id"]}</td>
        <td>${response.data.products[product]["name"]}</td>
        <td>${response.data.products[product]["description"]}</td>
        <td>${response.data.products[product]["price"]}$</td>
        <td>${response.data.products[product]["quantity"]}</td>
        <td>${response.data.products[product]["category_id"]}</td>
        <td>${response.data.products[product]["img_link"]}</td>
      </tr>`;
    }
  });
}


//getting categories from database



 let categories = document.querySelector(".categories-table");

 function getCategories() {
   axios({
     method: "GET",
     url: "http://127.0.0.1:8000/api/categories",
   }).then(function (response) {
     console.log(response.data.categories.length);
     console.log(response.data.categories[0]["category_name"]);

     for (let category = 0; category < response.data.categories.length; category++) {
        categories.innerHTML += 
         `<tr>
         <td>${response.data.categories[category]["id"]}</td>
         <td>${response.data.categories[category]["category_name"]}</td>
         </tr>`
     }
   });
 }
 getProducts();
 getCategories();
 