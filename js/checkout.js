let cart_get = Cookies.get(`cart`);

let body_html = document.querySelector(`body`);
let shopping_cart = [cart_get];

if (Cookies.get(`cart`) === undefined) {
    body_html.insertAdjacentHTML(`afterend`, `<h1 class="grid_align_center" class="text_align_center">EMPTY CART</h1>`)
}
JSON.stringify(cart_get);
JSON.parse(cart_get);

let product = document.getElementById(`product`);

if (cart_get !== undefined) {

    for (i = 0; i < items.length; i++) {
        product.insertAdjacentHTML(`beforeend`,
            `<article id="product_${i}">
<div id="product">
  <img src="${items[i].img}" alt="${items[i].name}">
</div>
<h2>${items[i].name}</h2>
<p>${items[i].description}</p>
<h4>Price: ${items[i].price}</h4>
<div class="cart_icon" id="${items[i].button}">
  <img src="/images/add-to-cart.svg" alt="add to cart icon">
</div>
</article>`)
    }
}

