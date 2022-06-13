// Get products
getProducts();

let products = document.querySelector(".products");
function getProducts() {
  axios({
    method: "GET",
    url: "http://127.0.0.1:8000/api/products",
  }).then(function (response) {
    // console.log(response.data.products.length);
    // console.log(response.data.products[0]["price"]);

    for (let product = 0; product < response.data.products.length; product++) {
      let products_col = document.querySelector(".products-col");
      let row = document.querySelector(".row");

      // console.log(product);
      if (product === 0) {
        products_col.innerHTML = `<div class="products-col">
            <img src="../assets/products/charisse-kenion-dah-jZWgzx8-unsplash.jpg" alt="">
            <h3>${response.data.products[product]["name"]} <i class="fa-solid fa-heart"></i></h3>
            <p>${response.data.products[product]["description"]}</p>
            <p>${response.data.products[product]["price"]}$</p>
        </div>`;
      } else {
        if (product % 3 != 0) {
          row.innerHTML += `<div class="products-col">
                <img src="../assets/products/charisse-kenion-dah-jZWgzx8-unsplash.jpg" alt="">
                <h3>${response.data.products[product]["name"]} <i class="fa-solid fa-heart"></i></h3>
                <p>${response.data.products[product]["description"]}</p>
                <p>${response.data.products[product]["price"]}$</p>
            </div>`;
        } else {
          products_col.innerHTML += `<div class="products-col">
                <img src="../assets/products/charisse-kenion-dah-jZWgzx8-unsplash.jpg" alt="">
                <h3>${response.data.products[product]["name"]} <i class="fa-solid fa-heart"></i></h3>
                <p>${response.data.products[product]["description"]}</p>
                <p>${response.data.products[product]["price"]}$</p>
            </div>`;
        }
      }
    }
  });


  let user_id = localStorage.getItem("user_id");
  console.log(user_id);

  setTimeout(() => { 
    alert("You can like your favorite items now. Thank you for waiting!");

    document.querySelectorAll(".fa-heart").forEach((item) => {
        item.addEventListener("click", function(){
            if (user_id){
                item.style.color = "blueviolet";
                return;
            }
            else{
                alert("You can't like products without logging in!")
            }
        });
   });
    }, 5000);
}


  

