let selected_items = Cookies.get(`cart`);
let product = document.getElementById(`product`);
let body_html = document.querySelector(`body`);
let cart_parse = JSON.parse(selected_items);

if (Cookies.get(`cart`) === undefined) {
  body_html.insertAdjacentHTML(`afterend`, `<h1 class="grid_align_center" class="text_align_center">EMPTY CART</h1>`)
} else {
  for (i = 0; i < items.length; i++) {
    body_html.insertAdjacentHTML(`afterend`, `<article id="product">
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



