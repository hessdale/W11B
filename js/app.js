

let product = document.getElementById(`product`);

for (i = 0; i < items.length; i++) {
    product.insertAdjacentHTML(`afterbegin`,
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
</article>`)
}



function add_to_cart(details) {
    let item = {
        name: `${details[`target`].getAttribute(`name`)}`,
        description: `${details[`target`].getAttribute(`description`)}`,
        price: `${details[`target`].getAttribute(`price`)}`,
        img: `${details[`target`].getAttribute(`img`)}`,
    }
    shopping_cart.push(item);
    let cookies_get = Cookies.get(`cart`);
    let item_json = JSON.stringify(shopping_cart);
    if (cookies_get !== undefined) {
        Cookies.set(`cart`, item_json);
        shopping_cart.push(item);
        console.log(`${details[`target`].getAttribute(`name`)} added to cart`);
    } else {
        Cookies.set(`cart`, item_json);
        shopping_cart.push(item);
        console.log(`${details[`target`].getAttribute(`name`)} added to cart`);
    }
}
let all_buttons = document.querySelectorAll(`#button_click`)
for (i = 0; i < all_buttons.length; i++) {
    all_buttons[i].addEventListener(`click`, add_to_cart);
}

