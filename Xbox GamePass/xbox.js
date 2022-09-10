document.getElementById("btn-menu").onclick = function() {myFunction()};
let etat = true;

function myFunction() {
    var d = document.querySelector("#slidebar-box");
    var e = document.querySelectorAll("div.slidebar-top p");
    if (x.matches) {
        if (etat) {
            document.querySelector(':root').style.setProperty('--heightSlide', '200px');
            
            for (let index = 0; index < e.length; index++) {
                e[index].style.visibility = "visible";
                
            }
            d.style.visibility = "visible";
            etat = false;
        } else {
            document.querySelector(':root').style.setProperty('--heightSlide', '70px');

            for (let index = 0; index < e.length; index++) {
                e[index].style.visibility = "hidden";
                
            }
            d.style.visibility = "hidden";
            etat = true;
        }
    } else {
       
        if (etat) {
            document.querySelector(':root').style.setProperty('--heightSlide', '200px');
           
            for (let index = 0; index < e.length; index++) {
                e[index].style.visibility = "visible";
                
            }
            
            etat = false;
        } else {
            document.querySelector(':root').style.setProperty('--heightSlide', '70px');
            
            for (let index = 0; index < e.length; index++) {
                e[index].style.visibility = "hidden";
                
            }
            etat = true;
        }
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
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
    
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },
//     initialSlide: 0,
//     on: {
//         realIndexChange: function () {
//         index = swiper.realIndex + 1; /* slide 1 => slides[1] */
//         l = swiper.slides[index];
//         //l.style.color = "red";
        
        
//         },
//     },
// });

document.getElementById("generator input[type=text]")
let compteurDivJeux = 0;
function getInputValue() {
    var e = document.querySelector("#generator input[type=number]").value;
    var titre = document.querySelector("#generator input[type=text]").value;
    //console.log(e);
    
    if (parseInt(e) > 1) {
        for (let index = 0; index < parseInt(e); index++,compteurDivJeux++) {
            createJeux(titre,compteurDivJeux);
        }
    } else {
        createJeux(titre);
        compteurDivJeux++
    }
    
    
}

function createJeux(titre) {
    var selectDiv = document.getElementById('choix-div');
    var selectBk = document.getElementById('choix-bk');
    var valueDiv = selectDiv.options[selectDiv.selectedIndex].value;
    var valueBk = selectBk.options[selectBk.selectedIndex].value;
    //console.log(valueDiv);

    var matches = document.querySelector("div[id="+valueDiv+"] .game");
    //console.log(matches);
    var divJeux = document.createElement('div');
    divJeux.setAttribute('class','jeux-'+compteurDivJeux);
    divJeux.setAttribute('style','background-image: url(images/'+valueBk+')');
    matches.appendChild(divJeux);

    
    //console.log(divJeux);
    var divCatégorie = document.createElement('div');
    divCatégorie.setAttribute('class','catégorie');
    divJeux.appendChild(divCatégorie);
    var divNj = document.createElement('div');
    divNj.setAttribute('class','name-jeux');
    divJeux.appendChild(divNj);


    var a = document.createElement('a');
    a.setAttribute('href','Xbox GamePass/xbox.html');
    a.innerHTML = titre+" - "+(compteurDivJeux + 1);
    divNj.appendChild(a);

    detectsJeux();
}
let initial = 0;
function buttonNext(who) {
    var d = document.getElementById("main");
    //console.log(d.offsetWidth);

    var selectDiv = document.querySelectorAll('#'+who.parentNode.parentNode.id+' div[class^="jeux-"]');
    if (initial > -((selectDiv.length*180)-(selectDiv.length%7)*180)) {
        initial -= 180 * Math.trunc(d.offsetWidth / 180);
        for (let index = 0; index < selectDiv.length; index++) {
            selectDiv[index].style.transform = "translateX(" + initial + "px)";
            
            
        } 
   }
    
    
}

function buttonPrec(who) {
    var d = document.getElementById("main");
    //console.log(d.offsetWidth);

    var selectDiv = document.querySelectorAll('#'+who.parentNode.parentNode.id+' div[class^="jeux-"]');
    if (initial < 0) {
        initial += 180 * Math.trunc(d.offsetWidth / 180);
        for (let index = 0; index < selectDiv.length; index++) {
            selectDiv[index].style.transform = "translateX(" + initial + "px)";
            
        }
    }
    
}

function detectJeux(div) {
    var selectDiv = document.querySelector(' #'+div+' div[class^="jeux-"]');
    if (selectDiv) {
        var selectButton = document.querySelectorAll('#'+div+' .pagination input');
    
        for (let index = 0; index < selectButton.length; index++) {
            selectButton[index].visibility = 'visible'
            
        }
    }
    
}

function detectsJeux() {
    
    var selectDivAJ = document.querySelectorAll('div[id^="ajout-container-"]');

    for (let index = 0; index < selectDivAJ.length; index++) {
        var selectDiv = document.querySelector('div[id^="ajout-container-'+(index+1)+'"] div[class^="jeux-"]');

        if (selectDiv) {
            var selectButton = document.querySelectorAll('div[id^="ajout-container-'+(index+1)+'"] .pagination input');

            for (let index = 0; index < selectButton.length; index++) {
                
                selectButton[index].style.visibility = 'visible'
                
            }
        }

    }
    
}
detectsJeux();
var x = window.matchMedia("(max-width: 600px)")
function medi(elem) {
    var d = document.querySelector("#slidebar-box");
    if (elem.matches) {
        d.style.visibility = "hidden";
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
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
        
    } else {
        d.style.visibility = "visible";
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
        
    }
}
medi(x);
x.addListener(medi);


document.querySelector(".slidebar-top div:last-child input").onclick = function() {myForm()};
document.querySelector(".slidebar-top div:last-child p").onclick = function() {myForm()};

function myForm() {
    var form = document.querySelector("#formulaire");
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }else{
        form.style.visibility = "visible"
    }
    //console.log(form.currentStyle["opacity"] );
    //form.style.visibility 
}