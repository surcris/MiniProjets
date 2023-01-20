let getImg = document.querySelectorAll("#aff-game div[class^='joueur'] img");

let getScore = document.getElementsByClassName("score");
let getManch = document.getElementsByClassName("manche-score");
let divmanch = 0;



let choix = 0;
function feuille() {
    choix = 1;
}
function ciseaux() {
    choix = 2;
}
function pierre() {
    choix = 3;
}

function btnStart() {
    
    if (depart) {
        getImg[0].src = "images/time_clock.png";
        getImg[1].src = "images/time_clock.png";
        affTimer();
    }
}

let getTimer = document.getElementById("timer");
let secondes = 3;
let depart = false;
let getBtn;
let numR = 0;
function affTimer() {
    secondes = secondes < 10 ? secondes : secondes;
    getTimer.innerHTML ="time : "+`${secondes}`;
    secondes = secondes < 0 ? 0 : secondes - 1;
    
    if(secondes < 0){
        //numR = ;
        computer(randomChiff());
        gamer()
        gagnat();
        depart = false;
        secondes = 3;
        numR = 0;
        choix = 0;
        choixC = 0;
        
    }
}

function etatGame() {
    divmanch++;
    getManch[0].innerHTML = divmanch;
    depart = true;
}

var chrono = setInterval(btnStart, 1000);

function randomChiff() {
    return Math.floor((Math.random() * 3)+1);
}
let choixC = 0;
function computer(numR) {

    switch (numR) {
        case 1:
            console.log("feuille")
            getImg[1].src = "images/hand.png";
            choixC = 1;
            //getBtn = null;
            break;
        case 2:
            console.log("ciseaux")
            getImg[1].src = "images/ciseaux.png";
            choixC = 2;
            //getBtn = null;
            break;
        case 3:
            console.log("pierre")
            getImg[1].src = "images/fisted-hand.png";
            choixC = 3;
            //getBtn = null;
        break;
       
    }
}

function gamer() {
    console.log("choisi:");
    switch (choix) {
        case 1:
            
            getBtn = document.querySelector("#btn-choix input#Feuille");
            getImg[0].src = "images/hand.png";
            
            break;
        case 2:
            
            getBtn = document.getElementById("#btn-choix input#Ciseaux");
            getImg[0].src = "images/ciseaux.png";
            
            break;
        case 3:
            
            getBtn = document.getElementById("#btn-choix input#Pierre");
            getImg[0].src = "images/fisted-hand.png";
            
        break;
        
    }
}

let gamerP= 0,gamerC = 0;

function gagnat() {
    console.log("gamer : "+ choix + "computer : "+ choixC);
    if (choix==1 && choixC==1) {
        
    }else if(choix==1 && choixC==1){

    }else if(choix==1 && choixC==2){
        gamerC++;
        getScore[1].innerHTML = gamerC;
        console.log(gamerC);
        ajoutHist(0,1);
    }else if(choix==1 && choixC==3){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
        ajoutHist(1,0);
    }else if(choix==2 && choixC==1){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
        ajoutHist(1,0);
    }else if(choix==2 && choixC==2){
        ajoutHist(0,0);
    }else if(choix==2 && choixC==3){
        gamerC++;
        getScore[1].innerHTML = gamerC;
        console.log(gamerC);
        ajoutHist(0,1);
    }else if(choix==3 && choixC==1){
        gamerC++;
        getScore[1].innerHTML = gamerC;
        console.log(gamerC);
        ajoutHist(0,1);
    }else if(choix==3 && choixC==2){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
        ajoutHist(1,0);
    }else if(choix==3 && choixC==3){
        ajoutHist(0,0);
    }
    
   
}

function ajoutHist(v,p) {
    var e = document.querySelector("#historique #aff-hist .hist-score ");
    //console.log(e);
    let table = "<tr><th>"+v+"</th><th>"+divmanch+"</th><th>"+p+"</th></tr>";
    e.innerHTML += table;
}

document.querySelector("#solo input").onclick = function() {myFunction()};

function myFunction() {
    document.querySelector("#acceuil").style.transform = "scale(0)";
    document.querySelector("#jeux").style.transform = "scale(1)";
}


document.querySelector("#jeux .btn-menu input").onclick = function() {retour()};

function retour() {
    document.querySelector("#jeux").style.transform = "scale(0)";
    document.querySelector("#acceuil").style.transform = "scale(1)";
}

document.querySelector(".btn-jouer input").onclick = function() {etatGame()};


document.querySelector("#multi input").onclick = function() {test()};
function test() {
    document.querySelector("#gohou").style.transform = "scale(1)";
    document.querySelector("#acceuil").style.transform = "scale(0)";
    
}
document.querySelector("#gohou input").onclick = function() {p()};
function p() {
    document.querySelector("#gohou").style.transform = "scale(0)";
    document.querySelector("#acceuil").style.transform = "scale(1)";
    
}

document.querySelector("#historique .close input").onclick = function() {closeHist()};
function closeHist() {
    document.querySelector("#historique").style.transform = "scale(0)";
    
    
}

document.querySelector(".btn-histo input").onclick = function() {openHist()};
function openHist() {
    document.querySelector("#historique").style.transform = "scale(1)";
    
    
}