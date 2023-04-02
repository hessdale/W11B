let selected_items = Cookies.get(`cart`);
let product = document.getElementById(`product`);

let cart_parse = JSON.parse(selected_items);
shopping_cart.push(cart_parse)
if (Cookies.get(`cart`) === undefined) {
  product.insertAdjacentHTML(`beforebegin`, `<h1 class="grid_align_center" class="text_align_center">EMPTY CART</h1>`)
} else {
  for (i = 0; i < shopping_cart[0].length; i++) {
    product.insertAdjacentHTML(`afterend`, `<article id="product">
  <div id="product">
    <img src="${cart_parse[i].img}" alt="camera product">
  </div>
  <h2>${cart_parse[i].name}</h2>
  <p>${cart_parse[i].description}</p>
  <h4>Price: ${cart_parse[i].price}</h4>
<h2>Quantity:</h2>
  </article>`)
  }
};




