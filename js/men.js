import { productArray } from "./constants/mensList.js";
const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="product">
        <div style="background-image: url(${product.image})" class="product-background-image"></div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <form class="select-size">
                    <select name="product" class="select-button">
                        <option value="Select size">Select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option> 
                    </select>
                </form>
        <div class="product-price"> Price:${product.price} USD</div>
        <button class="product-button" data-product="${product.id}">Add to cart</button>
    </div>
    `
})

const buttons = document.querySelectorAll("button") ;
buttons.forEach(function(button){
    button.onclick = function(event){ 
        const itemToAdd =  productArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }
})

function showCart(cartItems){
    cart.style.display = "block";
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartList.innerHTML += 
        `
        <div class ="cart-item">
            <h4>${cartElement.name}</h4>
            <div style="background-image: url(${cartElement.image})" class="cart-image">
        </div>
        `
    })
    totalContainer.innerHTML = `Total: ${total} USD`;
}
