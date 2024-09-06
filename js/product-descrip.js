// Change Product Image
let bigImage = document.querySelector('.big-img .bg-img');
let smallImages = document.querySelectorAll('.sm-img img');


smallImages.forEach(img => {

    img.addEventListener('click', function() {

        bigImage.src = this.src;

    });

});
