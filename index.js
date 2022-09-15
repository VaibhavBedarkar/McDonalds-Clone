
let container = document.querySelector("#container");

let items = [
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop", name: "Big Mac", price: 120 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop", name: "Quarter Pounder®* with Cheese", price: 150 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop", name: "Double Quarter Pounder®* with Cheese", price: 170 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-qpc-deluxe-burger:1-4-product-tile-desktop", name: "Quarter Pounder®* with Cheese Deluxe", price: 110 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:1-4-product-tile-desktop", name: "Classic McDouble", price: 70 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-4-product-tile-desktop", name: "Quarter Pounder®* with Cheese Bacon", price: 80 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-4-product-tile-desktop", name: "Cheeseburger", price: 100 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop", name: "Big Mac Combo Meal", price: 510 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop", name: "Cheeseburger Combo Meal", price: 750 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:1-4-product-tile-desktop", name: "Classic McDouble", price: 70 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-4-product-tile-desktop", name: "Quarter Pounder®* with Cheese Bacon", price: 80 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-4-product-tile-desktop", name: "Cheeseburger", price: 100 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop", name: "Big Mac Combo Meal", price: 510 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop", name: "Cheeseburger Combo Meal", price: 750 },
    { images: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-4-product-tile-desktop", name: "Quarter Pounder®* with Cheese Bacon", price: 80 },
];

items.forEach(function (element, index) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", element.images);

    let item = document.createElement("h4");
    item.setAttribute("class", "item");
    item.innerText = element.name;

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerText = "₹" + element.price;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");

    card.append(image, item, checkbox, price);
    container.append(card);
});

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let btn = document.querySelector("#order-btn");
let order_img = document.querySelector("#food-img");



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function orderSt(){
    return true;
}


btn.addEventListener("click", function(){
    modal.style.display = "block";

    let prom = new Promise(function (resolve, reject){       
        let ord = orderSt();       

        setTimeout(function (){
            console.log(ord)
            if(ord){
                order_img.src="https://cdn.dribbble.com/users/3846970/screenshots/6893567/mc_dribble_01.gif";
                document.getElementById("orderNo").textContent ='Order #: 143';
                resolve("Order Placed Successful!");
            }else{
                reject("Placed order failed");
            }
        },4000);
    });
})


