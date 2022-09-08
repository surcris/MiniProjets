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
let compteurDivJeux=0;
function getInputValue() {
    var e = document.querySelector("#generator input[type=number]").value;
    var titre = document.querySelector("#generator input[type=text]").value;
    //console.log(e);
    
    if (parseInt(e) > 1) {
        for (let index = 0; index < parseInt(e); index++,compteurDivJeux++) {
            createJeux(titre,compteurDivJeux);
        }
    } else {
        createJeux(titre,compteurDivJeux);
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
    var selectDiv = document.querySelectorAll('#'+who.parentNode.parentNode.id+' div[class^="jeux-"]');
    if (initial > -((selectDiv.length*180)-(selectDiv.length%7)*180)) {
        initial -= 180 * 7;
        for (let index = 0; index < selectDiv.length; index++) {
            selectDiv[index].style.transform = "translateX(" + initial + "px)";
            
            
        } 
   }
    
    
}

function buttonPrec(who) {
    var selectDiv = document.querySelectorAll('#'+who.parentNode.parentNode.id+' div[class^="jeux-"]');
    if (initial < 0) {
        initial += 180 * 7;
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
    console.log("////////////////////////");
    var selectDivAJ = document.querySelectorAll('div[id^="ajout-container-"]');

    

    for (let index = 0; index < selectDivAJ.length; index++) {
        var selectDiv = document.querySelector('div[id^="ajout-container-'+(index+1)+'"] div[class^="jeux-"]');
        console.log(selectDiv);
        
        if (selectDiv) {
            console.log("il ya des div Jeux");
            var selectButton = document.querySelectorAll('div[id^="ajout-container-'+(index+1)+'"] .pagination input');

            for (let index = 0; index < selectButton.length; index++) {
                console.log("button : "+index+" visible");
                selectButton[index].style.visibility = 'visible'
                
            }
        }

        
       
        
    }
    
    
    console.log("////////////////////////");
}
detectsJeux();