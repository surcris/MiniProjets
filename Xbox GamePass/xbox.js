
let etat = true;
function myFunction() {
    var r = document.querySelector(':root');
    var element = document.getElementById("slidebar-container");
    var btn = document.getElementById("menu-button");
    element.classList.toggle("toggled");
    
    if (etat) {
        r.style.setProperty('--heightSlide', '200px');
        btn.style.paddingRight = "142px";
        etat = false;
    } else {
        r.style.setProperty('--heightSlide', '68px');
        btn.style.paddingRight = "10px";
        etat = true;
    }
    
}

const $ = selector => {
    return document.querySelector(selector);
};

