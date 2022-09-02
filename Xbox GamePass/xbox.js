
let etat = true;
function myFunction() {
    var r = document.querySelector(':root');
    var element = document.getElementById("slidebar-container");
    element.classList.toggle("toggled");
    
    if (etat) {
        r.style.setProperty('--heightSlide', '200px');
        etat = false;
    } else {
        r.style.setProperty('--heightSlide', '70px');
        etat = true;
    }
    
}

const $ = selector => {
    return document.querySelector(selector);
};

