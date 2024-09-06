// Open & Close Cart-Menue
let cartMenue = document.querySelector('.cart-menue');
let openIcon = document.querySelector('.icon-cart');
let closeIcon = document.querySelector('.close-cart');

openIcon.onclick = function () {
    cartMenue.style.right = "0px";
}

closeIcon.onclick = function () {
    cartMenue.style.right = "-500px";
}


// Open & Close Links Menue
let linksMenue = document.querySelector('.header .bottom-nav .links ul');
let openBtn = document.querySelector('.header .bottom-nav .links .open-menue-btn');
let closeBtn = document.querySelector('.header .bottom-nav .links ul .close-menue-btn');
let bgOverlay = document.querySelector('.header .bottom-nav .links ul .bg-overlay');

openBtn.onclick = function(){
    linksMenue.style.left = "0px";
    bgOverlay.style.right = "0px";
}

closeBtn.onclick = function(){
    linksMenue.style.left = "-500px";
    bgOverlay.style.right = "-100%";
}

bgOverlay.onclick = function(){
    linksMenue.style.left = "-500px";
    bgOverlay.style.right = "-100%";
}


// add products-sec-items to cart through add cart btn
let allProductsJson;

let cartItems = document.querySelector('.items-in-cart');

let cartProducts = [];

function addToCart(id, btn) {

    cartProducts.push(allProductsJson[id]);

    btn.classList.add("active");

    getCartItems();
}

let countItem = document.querySelector('.count-item');
let priceCartHead = document.querySelector('.price-cart-head');

let countItemCart = document.querySelector('.count-item-cart');
let priceCartSubtotal = document.querySelector('.price-cart-subtotal');

function getCartItems() {
    let total_price = 0;
    let item_c = "";

    for (let i = 0; i < cartProducts.length; i++) {

        item_c += `
        
            <div class="item">
                <img src="${cartProducts[i].img}" alt="">
                <div class="content">
                    <h4>${cartProducts[i].name}</h4>
                    <p class="item-price">${cartProducts[i].price}</p>
                </div>
                <button onclick ="removeFromCart(${i})" class="item-delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `
        total_price += cartProducts[i].price;
    }

    cartItems.innerHTML = item_c;

    countItem.innerHTML = cartProducts.length;
    priceCartHead.innerHTML = "$" + total_price;

    countItemCart.innerHTML = `(${cartProducts.length} Items in Cart)`;
    priceCartSubtotal.innerHTML = "$" + total_price;
}


// Remove products-sec from Cart-menue through Remove Btn
function removeFromCart(index) {
    
    cartProducts.splice(index,1);

    getCartItems();


    let addToCartBtns = document.querySelectorAll('.fa-cart-plus');

    for (let i = 0; i < addToCartBtns.length; i++) {
        
        addToCartBtns[i].classList.remove("active");

        cartProducts.forEach(product => {

            if (product.id == i) {
                
                addToCartBtns[i].classList.add("active");

            }

        })
    }

}


// Scroll Up Btn
let scrollBtn = document.querySelector('.scroll-up');

window.onscroll = function() {

    scrollFunction();
    console.log(window.innerHeight);

};

function scrollFunction() {

    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

}

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

})

