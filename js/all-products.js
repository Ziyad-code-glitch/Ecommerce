// All-Products Items Data From JSON File
fetch('js/products-sec-items.json')
    .then(response => response.json())
    .then(data => {

        // add all data to var allProductsJson
        allProductsJson = data;

        let allProducts = document.querySelector('.products-dev');

        data.forEach(product => {
            
                let oldPrice = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                let percentDisc = product.old_price ? `<span class="sale-present">%${Math.floor( (product.old_price - product.price) / product.old_price * 100 )}</span>` : "";;

                allProducts.innerHTML += `
                    <div class="product swiper-slide">
                        ${percentDisc}
    
                        <div class="sale-icons">
                            <span><i onclick ="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span></i>
                            <span><i class="fa-solid fa-heart"></i></span></i>
                            <span><i class="fa-solid fa-share"></i></span></i>
                        </div>
                        
                        <div class="img-product">
                            <img src="${product.img}" alt="">
                            <img class="img-hover"  src="${product.img_hover}" alt="">
                        </div>
    
                        <h3 class="name-product"><a href="#">${product.name}</a></h3>
    
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
    
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${oldPrice}
                        </div> 
                    </div>
                    
                `
                
            

        });

    });


// Open & Close Filter-Menue through Filter-Btn
let filter = document.querySelector('.filter');
let filterBtn = document.querySelector('.filter-btn');

filterBtn.onclick = () => {

    filter.classList.toggle('active');

}