// Swiper Slide for Side-Bar
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay:{
        delay: 2000,
    },
    loop: true,
    });


// Swiper Slide for Sale-Products
var swiper = new Swiper(".sale-swp", {
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay:{
        delay: 2000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop: true,
    breakpoints:{
        1600:{
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1300:{
            slidesPerView: 5,
            spaceBetween: 25,
        },
        1000:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        700:{
            slidesPerView: 3,
            spaceBetween: 15
        },
        0:{
            slidesPerView: 2,
            spaceBetween: 10
        },
    }
    });


// Swiper Slide for PC-Products
var swiper = new Swiper(".pc-swp", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
        delay: 2000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop: true,
    breakpoints:{
        1500:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 15
        },
        700:{
            slidesPerView: 3,
            spaceBetween: 15
        },
        0:{
            slidesPerView: 2,
            spaceBetween: 10
        },
    }
    });


// Swiper Slide for Phone-Products
var swiper = new Swiper(".phone-swp", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
        delay: 2000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop: true,
    breakpoints:{
        1500:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1000:{
            slidesPerView: 3,
            spaceBetween: 15
        },
        700:{
            slidesPerView: 3,
            spaceBetween: 15
        },
        0:{
            slidesPerView: 2,
            spaceBetween: 10
        },
    }
    });
    