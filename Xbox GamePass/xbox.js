document.getElementById("btn-menu").onclick = function() {myFunction()};
let etat = true;

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

document.getElementById("generator input[type=text]")

function getInputValue() {
    var e = document.querySelector("#generator input[type=number]").value;
    var titre = document.querySelector("#generator input[type=text]").value;
    console.log(e);
    
    if (parseInt(e) > 1) {
        for (let index = 0; index < parseInt(e); index++) {
            createJeux(titre);
        }
    } else {
        createJeux(titre);
    }
    
    
}

function createJeux(titre) {
    var selectDiv = document.getElementById('choix-div');
    var selectBk = document.getElementById('choix-bk');
    var valueDiv = selectDiv.options[selectDiv.selectedIndex].value;
    var valueBk = selectBk.options[selectBk.selectedIndex].value;
    console.log(valueDiv);

    var matches = document.querySelector("div[id="+valueDiv+"] .game");
   // console.log(matches);
    var divJeux = document.createElement('div');
    divJeux.setAttribute('class','jeux');
    matches.appendChild(divJeux);

   
    
    //console.log(divJeux);
    var divCatégorie = document.createElement('div');
    divCatégorie.setAttribute('class','catégorie');
    divJeux.appendChild(divCatégorie);
    var divNj = document.createElement('div');
    divNj.setAttribute('class','name-jeux');
    divJeux.appendChild(divNj);

    
    //console.log(divNj);
    var a = document.createElement('a');
    a.setAttribute('href','Xbox GamePass/xbox.html');
    a.innerHTML = titre;
    divNj.appendChild(a);

    
     
}