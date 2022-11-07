
let timeMs = 5000;
let exp = 0;
let expAObtenir = 20;
let niveau = 1;
let currentExp = document.querySelector(".lvl p");

function init() {
    let affEXP = exp+"/"+expAObtenir;
    document.querySelector(".lvl h2").innerHTML = "Niveau "+niveau;
    currentExp.innerHTML = affEXP;

    console.log('Current lvl : ' + niveau);
    console.log('Current exp : ' + currentExp.innerHTML);
    exp = exp+10;
    if(exp > expAObtenir){
        niveau= niveau+1;
        exp=exp - expAObtenir;
        expAObtenir=expAObtenir+20;
        
        currentExp.innerHTML = affEXP;
        
        
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
      init();
    
    

}
function lance() {
    
    anime();
    setInterval(anime, timeMs)
}
function lockVertical() {
   
    
}

lockVertical()
lance();


