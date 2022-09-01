let getImg = document.getElementsByClassName("img");
let getDiv = document.getElementById("img-gamer");
let getScore = document.getElementsByClassName("score");

function btnImage() {
    
}

function pierre() {
    let getBtn = document.getElementById("pierre");
    //if(getBtn.clicked){
        getImg[0].src = "images/pierre.jpg"
        // ("scr","images/pierre.jpg");
        //getDiv.appendChild(getImg[0])
        console.log(getImg[0])
    //}
}
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
        getImg[0].src = "images/choix.jpg";
        getImg[1].src = "images/choix.jpg";
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
    getTimer.innerHTML = `${secondes}`;
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
            getImg[1].src = "images/feuille.jpg";
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
            getImg[1].src = "images/pierre.jpg";
            choixC = 3;
            //getBtn = null;
        break;
       
    }
}

function gamer() {

    switch (choix) {
        case 1:
            
            getBtn = document.getElementById("feuille");
            getImg[0].src = "images/feuille.jpg";
            
            //getBtn = null;
            break;
        case 2:
            
            getBtn = document.getElementById("ciseaux");
            getImg[0].src = "images/ciseaux.png";
            
            //getBtn = null;
            break;
        case 3:
            
            getBtn = document.getElementById("pierre");
            getImg[0].src = "images/pierre.jpg";
            
            //getBtn = null;
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
    }else if(choix==1 && choixC==3){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
    }else if(choix==2 && choixC==1){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
    }else if(choix==2 && choixC==2){

    }else if(choix==2 && choixC==3){
        gamerC++;
        getScore[1].innerHTML = gamerC;
        console.log(gamerC);
    }else if(choix==3 && choixC==1){
        gamerC++;
        getScore[1].innerHTML = gamerC;
        console.log(gamerC);
    }else if(choix==3 && choixC==2){
        gamerP++;
        getScore[0].innerHTML = gamerP;
        console.log(gamerP);
    }else if(choix==3 && choixC==3){

    }
    
    // switch (choix && choixC) {
    //     case 1 && 1:
            
    //         break;
    //     case 1 && 2:
    //         gamerC++;
    //         getScore[1].innerHTML = gamerC;
    //         console.log(gamerC);
    //         break;
    //     case 1 && 3:
    //         gamerP++;
    //         getScore[0].innerHTML = gamerP;
    //         console.log(gamerP);
    //         break;  
    //     case 2 && 1:
    //         gamerP++;
    //         getScore[0].innerHTML = gamerP;
    //         console.log(gamerP);
    //     break;
    //     case 2 && 2:
        
    //         break;
    //     case 2 && 3:
    //         gamerC++;
    //         getScore[1].innerHTML = gamerC;
    //         console.log(gamerC);
    //         break;  
    //     case 3 && 1:
    //         gamerC++;
    //         getScore[1].innerHTML = gamerC;
    //         console.log(gamerC);
    //     break;
    //     case 3 && 2:
    //         gamerP++;
    //         getScore[0].innerHTML = gamerP;
    //         console.log(gamerP);
    //         break;
    //     case 3 && 3:
    
    //         break;        
    //     default:
    //         break;
    // }
}