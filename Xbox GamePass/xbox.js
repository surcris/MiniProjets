document.getElementById("btn-menu").onclick = function() {myFunction()};
let etat = true;
document.getElementById("btn-menu").on
function myFunction() {
    if (etat) {
        document.querySelector(':root').style.setProperty('--heightSlide', '200px');
        var e = document.querySelectorAll("div.slidebar-top p");
        for (let index = 0; index < e.length; index++) {
            e[index].style.visibility = "visible";
            
        }
        
        etat = false;
    } else {
        document.querySelector(':root').style.setProperty('--heightSlide', '70px');
        var e = document.querySelectorAll("div.slidebar-top p");
        for (let index = 0; index < e.length; index++) {
            e[index].style.visibility = "hidden";
            
        }
        etat = true;
    }
     
}



function mouseOver() {
    document.querySelector(':root').style.setProperty('--heightSlide', '200px');
    var e = document.querySelectorAll("div.slidebar-top p");
    for (let index = 0; index < e.length; index++) {
        e[index].style.visibility = "visible";
        
    }
    etat = false;
}
  
function mouseOut() {
    document.querySelector(':root').style.setProperty('--heightSlide', '70px');
    var e = document.querySelectorAll("div.slidebar-top p");
    for (let index = 0; index < e.length; index++) {
        e[index].style.visibility = "hidden";
        
    }
    etat = true;
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




