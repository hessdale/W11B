let shopping_cart = [];
let items = [
    {
        name: `Pentax Camera`,
        description: `Pentax Camera with 50mm lens`,
        price: `$250`
    }
    , {
        name: `Nikon Camera`,
        description: `Nikon Camera with 50mm lens`,
        price: `$300`
    }, {
        name: `Canon Camera`,
        description: `Canon Camerea with 50mm lens`,
        price: `$450`
    }, {
        name: `Small Canon Camera`,
        description: `Canon point and shoot camera`,
        price: `$90`
    }, {
        name: `SD Card`,
        description: `128GB SD card`,
        price: `$65`
    }, {
        name: `Camera Lens`,
        description: `50mm Camera lens`,
        price: `$150`
    }
];

let add_pentax = document.getElementById(`add_pentax`);
let add_nikon = document.getElementById(`add_nikon`);
let add_canon = document.getElementById(`add_canon`);
let add_small_canon = document.getElementById(`add_small_canon`);
let add_sd = document.getElementById(`add_sd`);
let add_lens = document.getElementById(`add_lens`);



function add_to_cart(details) {
    let cookies_get = Cookies.get(`cart`)
    let string_details = JSON.stringify(details);
    let cookie_add = string_details + cookies_get
    if (cookies_get === undefined) {
        Cookies.set(`cart`, string_details);
        console.log(`added to cart`);
    } else {
        Cookies.set(`cart`, cookie_add);
        console.log(`added to cart`);
    }
}

add_pentax.addEventListener(`click`, () => { add_to_cart(items[0]) });
add_nikon.addEventListener(`click`, () => { add_to_cart(items[1]) });
add_canon.addEventListener(`click`, () => { add_to_cart(items[2]) });
add_small_canon.addEventListener(`click`, () => { add_to_cart(items[3]) });
add_sd.addEventListener(`click`, () => { add_to_cart(items[4]) });
add_lens.addEventListener(`click`, () => { add_to_cart(items[5]) });
