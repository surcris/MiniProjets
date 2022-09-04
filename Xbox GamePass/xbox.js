document.getElementById("btn-menu").onclick = function() {myFunction()};
let etat = true;

function myFunction() {
    if (etat) {
        document.querySelector(':root').style.setProperty('--heightSlide', '200px');
        etat = false;
    } else {
        document.querySelector(':root').style.setProperty('--heightSlide', '70px');
        etat = true;
    }
    
    
}


let l;
let index;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    initialSlide: 0,
    on: {
        realIndexChange: function () {
        index = swiper.realIndex + 1; /* slide 1 => slides[1] */
        l = swiper.slides[index];
        //l.style.color = "red";
        
        
        },
    },
});




