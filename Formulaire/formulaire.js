function setup() {
    // selectionne l'element de classname formulaire
    //const container = document.querySelector(".formulaire"); 

    // selectionne les elements a l'interieur de l'element classname text-form
    //const container = document.querySelector(".text-form ");

    const matches = document.querySelectorAll(".text-form > input"); 

    //const matches = container.querySelectorAll("input"); 
    // selectionne les elements input dans le div avec la classname text_form 
    //const matches = container.querySelectorAll("div.text-form > input"); 
    //listElement = Array.from(matches);
    
    /*for (let i = 0; i < matches.length; i++) {
        matches[i].style.backgroundColor = "red";
      }*/


    matches.forEach(matches => {
        let classname = matches.getAttribute('class');
        matches.setAttribute('placeholder' , classname);
    });
/*
    if (matches == null) {
        console.log('null');
    }else{
        console.log(matches.length);
        
    }*/
}
setup();

var element_nom;
var element_prenom;
var element_email;

let getNom;
let getPrenom;
let getEmail;

function createCarte() {
    const matches = document.querySelector(".cartes");
    let element_container = document.createElement('div');
    element_container.setAttribute('classname','carte');
    
    element_container.style.borderRadius = '5px';
    element_container.style.margin = " 50px auto 0px auto ";
    //element_container.style.marginTop = '50px';
    element_container.style.boxShadow ="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    element_container.style.width = "auto";
    element_container.style.height = 'auto';
    element_container.style.display = 'grid';
    element_container.style.gridTemplateColumns = 'auto 1fr'
    matches.appendChild(element_container);

    //* ************* PHOTO ************** */
    const element_photo = document.createElement('div');
    element_photo.setAttribute('classname','carte_photo');
    element_photo.setAttribute('classname','carte_photo');
    element_photo.style.paddingRight = '10px';
    //element_photo.innerHTML = 'Photo'
    element_container.appendChild(element_photo);

    const image = document.createElement('img');
    image.setAttribute('src','profil.png');
    image.style.padding = '10px 10px';
    image.style.width = '40px'
    element_photo.appendChild(image);
    //* ************* PHOTO ************** *//

    //* ************* INFO ************** *//
    const element_infos = document.createElement('div');
    element_infos.setAttribute('classname','carte_infos');
    element_infos.style.padding = '10px 10px';
    element_infos.style.height = 'auto';
    element_container.appendChild(element_infos);


    element_nom = document.createElement('div');
    element_nom.setAttribute('classname','element_nom');
    //element_nom.innerHTML = getNom.value;
    element_infos.appendChild(element_nom);

    element_prenom = document.createElement('div');
    element_prenom.setAttribute('classname','element_prenom');
    //element_prenom.innerHTML = 'prenom';
    element_infos.appendChild(element_prenom);

    element_email = document.createElement('div');
    element_email.setAttribute('classname','element_email');
    //element_email.innerHTML = 'email';
    element_infos.appendChild(element_email);


    
}





function enregistrer() {
    
    //element_nom.innerHTML = getNom;
    getNom = document.getElementsByClassName("nom");
    getPrenom = document.getElementsByClassName('prenom');
    getEmail = document.getElementsByClassName('email');
    

    element_nom.innerHTML = getNom[0].value;
    element_prenom.innerHTML = getPrenom[0].value;
    element_email.innerHTML = getEmail[0].value;
    
}

function action() {
    createCarte();
    enregistrer();
}