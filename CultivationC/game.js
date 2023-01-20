let etatBtnMenu = true;
let timeMs = 5000;
let point = 0;
let exp = 0;
let expAObtenir = 20;
let niveau = 1;
const listDivStats = new Map();


class Stats{
    vitalite = 0;
    intelligence = 0;
    agilite = 0;
    force = 0;
    sagesse = 0;
    pointDispo = 0;
}
let stat = new Stats();

function initListStats() {

    listDivStats.set("vitalite",document.querySelector(".vita h3"));
    listDivStats.set("intelligence",document.querySelector(".intel h3"));
    listDivStats.set("agilite",document.querySelector(".agi h3"));
    listDivStats.set("force",document.querySelector(".force h3"));
    listDivStats.set("sagesse",document.querySelector(".sag h3"));
    listDivStats.set("pointDispo",document.querySelector(".point h2"));



    
    //console.log(listDivStats.get("vitalite").innerHTML);
}
function affListStats() {

    listDivStats.get("vitalite").innerHTML ="Vie : " + stat.vitalite;
    listDivStats.get("intelligence").innerHTML ="Intelligence : " + stat.intelligence;
    listDivStats.get("agilite").innerHTML = "Agilité : " + stat.agilite;
    listDivStats.get("force").innerHTML = "Force : " + stat.force;
    listDivStats.get("sagesse").innerHTML = "Sagesse : " + stat.sagesse;
    listDivStats.get("pointDispo").innerHTML = "Point disponible : " +stat.pointDispo;
    //console.log(listDivStats.get("vitalite").innerHTML);
}
let btnVita = document.querySelector(".vita ").onclick =  function() {
    affListStats();
}

var btn = document.querySelector(".stats .vita .la");
btn.onclick = function() {
    console.log("hee")
    alert("button was clicked");
}

function adde() {
    stat.vitalite++;
    console.log(stat.vitalite);
    listDivStats.get("vitalite").innerHTML ="Vie : " + stat.vitalite;
    
    alert("button was clicked");
}
document.querySelector(".btn-intel").onclick = function() {
    stat.intelligence++;
    alert("button was clicked");
};
document.querySelector(".btn-agi").onclick = function() {
    stat.agilite++;
    alert("button was clicked");
};
document.querySelector(".btn-force").onclick = function() {
    stat.force++;
    alert("button was clicked");
};
document.querySelector(".btn-sag").onclick = function() {
    stat.sagesse++;
    alert("button was clicked");
};
function addPointStats() {

    
    //console.log(listDivStats.get("vitalite").innerHTML);
}



function initXP() {
    
    let affEXP = exp+"/"+expAObtenir;
    let currentExp = document.querySelector(".lvl p");
    document.querySelector(".lvl h2").innerHTML = "Niveau "+niveau;
    console.log(btn.value)
    currentExp.innerHTML = affEXP;

    //console.log('Current lvl : ' + niveau);
    //console.log('Current exp : ' + currentExp.innerHTML);
    exp = exp+10;
    if(exp > expAObtenir){
        niveau= niveau+1;
        exp=exp - expAObtenir;
        expAObtenir=expAObtenir+20;
        stat.pointDispo++
        
        currentExp.innerHTML = affEXP;
        
        affListStats();
    }
    
}

function observChangeSizeElem(elem) {
    let observ = elem.getBoundingClientRect();
    //let width = observ.width;
    //let height = observ.height;

}
index = 0;
function expTimer() {
    let pTimer = document.querySelector(".expTime");
    pTimer.innerHTML = index+" s";
    
    if(index == 10){
        
        index = 0;
    }
    index++;
    
}
function anime() {
    
    
    let mp3 = document.querySelector(".mp3");
    mp3.animate([
        // étapes/keyframes
        { width: '0%' },
        { width: '100%' }
      ], {
        // temporisation
        duration: timeMs,
        iterations: 1
      });
      initXP();
    
    

}
function lance() {
    initListStats();
    affListStats();
    
    anime();
    setInterval(anime, timeMs)
}
document.querySelector("#menu-button").onclick = function() {menuAff()};
function menuAff() {
    //let btn = document.querySelector("#menu-button");
    let menu = document.querySelector(".stats");
    console.log(etatBtnMenu)
    if(etatBtnMenu){
        menu.style.visibility = "visible";
        etatBtnMenu = false;

    }else{
        menu.style.visibility = "hidden";
        etatBtnMenu = true;
    }
}


//lockVertical()
lance();


