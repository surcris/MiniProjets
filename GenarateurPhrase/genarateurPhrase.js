let citationArray = [];
citationArray.push({citation:"La beauté est dans les yeux de celui qui regarde.",auteur:"Oscar Wilde"});
citationArray.push({citation:"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",auteur:"Nelson Mandela"});
citationArray.push({citation:"Fais de ta vie un rêve, et d'un rêve, une réalité.",auteur:"Antoine de Saint-Exupéry"});
citationArray.push({citation:"Le souvenir, c'est la présence invisible.",auteur:"Victor Hugo"});
citationArray.push({citation:"La vie sans musique est tout simplement une erreur, une fatigue, un exil.",auteur:"Friedrich Nietzsche"});
citationArray.push({citation:"Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",auteur:"Gandhi"});
citationArray.push({citation:"Un problème sans solution est un problème mal posé.",auteur:"Albert Einstein"});
citationArray.push({citation:"Si ceux qui disent du mal de moi savaient exactement ce que je pense d'eux, ils en diraient bien davantage.",auteur:"Sacha Guitry"});

let lastChiff = -1;
function generer() {
   
    let randomNum = randomChiff();
    //console.log(" 1er "+randomNum);

    while (randomNum == lastChiff) {
        //console.log(" 2eme "+lastChiff+" : " +randomNum);
        randomNum = randomChiff();
        
    }
    
    
    affCitAut(randomNum)
    //console.log(" 3eme "+lastChiff+" : " +randomNum);
    lastChiff = randomNum;
}

function hasWhiteSpace(s) {
    
    return s.indexOf(' ') > -1;
}
function randomChiff() {
    return Math.floor(Math.random() * (citationArray.length-1));
}

function affCitAut(elem) {
    let getPCitation = document.getElementById("citation");
    let getPAuteur = document.getElementById("auteur");

    getPCitation.style.fontWeight = "bold";
    getPCitation.style.fontSize = "20px";
    getPAuteur.style.fontStyle = "italic";
    getPCitation.innerHTML = "";
    getPAuteur.innerHTML = "";

    getPCitation.innerHTML = citationArray[elem].citation;
    getPAuteur.innerHTML = citationArray[elem].auteur;
    let ty = getPCitation.innerHTML;
    
    detectSpace(ty)
}

function detectSpace(params) {
    let compteur = 0;
    let compteurS = 0;

    
    for (let index = 0; index < params.length; index++) {
        
        if (params[index] == ' ' && params[index-1] != ' ') {
            compteur++;
        }
        if (params[index] == ' ') {
            compteurS++;
        }

    }
    compteur++;

    console.log("Nombre de mots : "+compteur);
    console.log("Nombre d'espace : "+compteurS);
    console.log("space : "+params.split(" "));
    console.log("space : "+params.split(" ").length);
}