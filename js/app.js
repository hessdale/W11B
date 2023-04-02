//defining a place to insert the html for the products
let product = document.getElementById(`product`);
//using a for loop to insert html for the items in the shared items variable
for (i = 0; i < items.length; i++) {
    product.insertAdjacentHTML(`beforebegin`,
        `<article id="product">
<div id="product">
  <img src="${items[i].img}" alt="${items[i].name}">
</div>
<h2>${items[i].name}</h2>
<p>${items[i].description}</p>
<h4>Price: ${items[i].price}</h4>
<button class="cart_icon" id="button_click" name="${items[i].name}" description="${items[i].description}" price="${items[i].price}" img="${items[i].img}">
  ADD TO CART
</button>
</article>`);
};
//function that adds certain items to cart depending on whats clicked
function add_to_cart(details) {
    //defiining the lay out of each item
    let item = {
        name: `${details[`target`].getAttribute(`name`)}`,
        description: `${details[`target`].getAttribute(`description`)}`,
        price: `${details[`target`].getAttribute(`price`)}`,
        img: `${details[`target`].getAttribute(`img`)}`,
    }
    //pushing item to cart variable
    shopping_cart.push(item);
    //getting cookies from cart
    let cookies_get = Cookies.get(`cart`);
    //stringifying them into usable data
    let item_json = JSON.stringify(shopping_cart);
    //sets cookies cart to item string
    Cookies.set(`cart`, item_json);
    //message to show what was added to cart
    console.log(`${details[`target`].getAttribute(`name`)} added to cart`);
};
//defining all buttons for add to cart on page
let all_buttons = document.querySelectorAll(`#button_click`);
//usinga for loop to add event listeners to all the buttons
for (i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener(`click`, add_to_cart);
};

