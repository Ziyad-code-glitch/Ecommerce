// Sale-Products Items Data From JSON File
fetch('js/products-sec-items.json')
    .then(response => response.json())
    .then(data => {

        // add all data to var allProductsJson
        allProductsJson = data;

        let saleProducts = document.getElementById("sale-products");
        let pcProducts = document.getElementById("pc-products");
        let phoneProducts = document.getElementById("phone-products");

        data.forEach(product => {
            
            if (product.old_price) {

                let percentDisc = Math.floor( (product.old_price - product.price) / product.old_price * 100 );
                saleProducts.innerHTML += `
                
                    <div class="product swiper-slide">
                        <span class="sale-present">%${percentDisc}</span>
    
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
                            <p class="old-price">$${product.old_price}</p>
                        </div> 
                    </div>
                    
                `
                
            }

        });

        data.forEach(product => {

                pcProducts.innerHTML += `
                
                    <div class="product swiper-slide">

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
                        </div> 
                    </div>
                    
                `

        });

        data.forEach(product => {
            
                phoneProducts.innerHTML += `
                
                    <div class="product swiper-slide">
    
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
                        </div> 
                    </div>
                    
                `
                
        });


    });