
const timerElement = document.getElementById("timer");
const btnEtat = document.getElementById("etatTime");
const btnRes = document.getElementById("reset");
const departMinutes = 1;
let temps = departMinutes * 60;
let minutes,secondes;
let pause = true;
let stopT = 1000;

function getdepartMinutes() {
    return departMinutes;
}

function stop() {
    btnEtat.innerHTML = "Start";
    pause = true;
    console.log(temps);
}
function start() {
    btnEtat.innerHTML = "Pause";
    pause = false;
}

function etatTimer() {
    switch (pause) {
        case false:
            stop();
            break;
        case true:
            start();
            break;
        default:
            break;
    }
}



function chronoT() {
        minutes = parseInt(temps / 60, 10);
        secondes = parseInt(temps % 60, 10);
        

        //si minutes < 10 alors "0" + minutes(si c'est vrai) sinon minutes(si c'est faux)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;
       
        timerElement.innerHTML = `${minutes}:${secondes}`;
        temps = temps <= 0 ? 0 : temps - 1
}

function affTimer() {
    if (!pause) {
        chronoT();
    }
}

var chrono = setInterval(affTimer, stopT);

function resetTimer() {
    stop();
    temps = getdepartMinutes() * 60;
    chronoT();
    console.log(temps);
}