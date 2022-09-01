
let etat = true;
function myFunction() {
    //var element = document.getElementById("slidebar-container");
    //element.classList.toggle("toggled");
    
    if (etat) {
        slideResize(200);
        etat = false;
    } else {
        slideResize(70);
        etat = true;
    }
    
}

const $ = selector => {
    return document.querySelector(selector);
};

