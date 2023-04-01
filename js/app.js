let shopping_cart = [];
let items = [
    {
        name: `Pentax Camera`,
        description: `Capture life's fleeting moments with stunning clarity using the Pentax camera. From vibrant landscapes to
        intimate portraits, its advanced features and exceptional image quality will bring your vision to life. Elevate
        your photography and express yourself like never before.`,
        price: `$250`,
        img: `/images/pentax_camera.webp`,
        button: `add_pentax`
    }
    , {
        name: `Nikon Camera`,
        description: `Experience the art of photography like never before with the Nikon camera. Equipped with cutting-edge
        technology and unparalleled precision, it empowers you to unleash your creativity and capture life's precious
        moments in breathtaking detail. Elevate your photography and make memories that last a lifetime.`,
        price: `$300`,
        img: `/images/nikon_camera.webp`,
        button: `add_nikon`
    }, {
        name: `Canon Camera`,
        description: `Unleash your inner artist with the Canon camera. Designed for those who demand excellence, its advanced
        features and superior image quality enable you to capture stunning photographs and videos with ease. From
        unforgettable moments to artistic expression, the Canon camera will help you make them come alive.`,
        price: `$450`,
        img: `/images/canon_camera.webp`,
        button: `add_canon`
    }, {
        name: `Small Canon Camera`,
        description: `Capture life's precious moments with the Canon point and shoot camera. Designed for convenience and ease of
        use, it packs powerful features into a compact and portable package. Whether you're on vacation or simply
        enjoying a day out, the Canon point and shoot camera is perfect for capturing memories on the go.`,
        price: `$90`,
        img: `/images/canon_film_camera.webp`,
        button: `add_small_canon`
    }, {
        name: `SD Card`,
        description: `Securely store and transfer your precious memories with a camera SD card. Offering reliable and high-speed
        performance, it provides ample storage capacity to hold your photos and videos. Whether you're a professional
        photographer or a casual shooter, a camera SD card is an essential accessory for your photography gear.`,
        price: `$65`,
        img: `/images/camera_sd_card.jpeg`,
        button: `add_sd`
    }, {
        name: `Camera Lens`,
        description: `Unlock your creativity and capture stunning images with a camera lens. Designed to provide precise and clear
        focus, it enables you to frame your subject with clarity and detail. Whether you're shooting portraits or
        landscapes, a camera lens is an essential accessory that can take your photography to the next level.`,
        price: `$150`,
        img: `/images/camera_lens.webp`,
        button: `add_lens`
    }
];

let product = document.getElementById(`product`);

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

let add_pentax = document.getElementById(`add_pentax`);
let add_nikon = document.getElementById(`add_nikon`);
let add_canon = document.getElementById(`add_canon`);
let add_small_canon = document.getElementById(`add_small_canon`);
let add_sd = document.getElementById(`add_sd`);
let add_lens = document.getElementById(`add_lens`);

function add_to_cart(details) {
    let cookies_get = Cookies.get(`cart`);
    let string_cookies = JSON.stringify(cookies_get);
    let string_details = JSON.stringify(details);
    let cookie_add = string_details + string_cookies
    if (cookies_get === undefined) {
        Cookies.set(`cart`, string_details);
        shopping_cart.push(details);
        console.log(`${details.name} added to cart`);
    } else {
        Cookies.set(`cart`, cookie_add);
        shopping_cart.push(details);
        console.log(`${details.name} added to cart`);
    }
}

add_pentax.addEventListener(`click`, () => { add_to_cart(items[0]) });
add_nikon.addEventListener(`click`, () => { add_to_cart(items[1]) });
add_canon.addEventListener(`click`, () => { add_to_cart(items[2]) });
add_small_canon.addEventListener(`click`, () => { add_to_cart(items[3]) });
add_sd.addEventListener(`click`, () => { add_to_cart(items[4]) });
add_lens.addEventListener(`click`, () => { add_to_cart(items[5]) });

