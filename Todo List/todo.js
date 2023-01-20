let getDiv = document.getElementById("todo-aff");

let create_index = 0;
let etatEdit = 0;
const etatArray = [];
function creationTache(tache) {
    

    let divContainer = document.createElement("div");
    divContainer.setAttribute("id","div-container-"+create_index);
    divContainer.style.width = "340px";
    divContainer.style.height = "40px";
    divContainer.style.display = "flex";
    divContainer.style.flexDirection = "row";
	divContainer.style.justifyContent = "space-between";
    divContainer.style.alignItems = "center";
    getDiv.appendChild(divContainer);

    let divLeft = document.createElement("div");
    divLeft.setAttribute("class","div-left");
    divLeft.style.display = "flex";
    divLeft.style.flexDirection = "row";
	divLeft.style.justifyContent = "flex-start";
    divLeft.style.alignItems = "center";
    divContainer.appendChild(divLeft);

    let divMenu = document.createElement("div");
    divMenu.setAttribute("class","menu");
    divMenu.setAttribute("id",""+create_index);
    divContainer.appendChild(divMenu);

    let inputLeft = document.createElement("input");
    inputLeft.setAttribute("id","in-checkbox-"+create_index);
    inputLeft.setAttribute("onchange","Check(this,"+create_index+")") ;
    inputLeft.type = "checkbox";
    divLeft.appendChild(inputLeft);

    let pLeft = document.createElement("p");
    pLeft.setAttribute("id","text"+create_index);
    pLeft.style.marginLeft = "10px";
    pLeft.innerHTML = tache;
    divLeft.appendChild(pLeft);


    let inputMenu = document.createElement("input");
    
    inputMenu.type = "image";
    inputMenu.src = "dot.png";
    inputMenu.style.width = "25px";
    inputMenu.style.height = "25px";
    inputMenu.setAttribute("onclick","maskMenu("+create_index+")");
    divMenu.appendChild(inputMenu);

    let divTaskMenu = document.createElement("div");
    divTaskMenu.setAttribute("class","div-task-menu-"+create_index);
    divTaskMenu.style.position = "fixed";
    divMenu.appendChild(divTaskMenu);
    

    let ulTaskMenu = document.createElement("ul");
    ulTaskMenu.setAttribute("class","task-menu-"+create_index);
    ulTaskMenu.style.position = "absolute";
    ulTaskMenu.style.top = "-55px";
    ulTaskMenu.style.left = "35px";
    ulTaskMenu.style.listStyle = "none";
    ulTaskMenu.style.padding = "5px";
    ulTaskMenu.style.backgroundColor = "white";
    ulTaskMenu.style.borderRadius = "3px";
    ulTaskMenu.style.transform = "scale(0)";
    divTaskMenu.appendChild(ulTaskMenu);

    let liTaskMenu = [document.createElement("li"),document.createElement("li")];
    //liTaskMenu[0].innerHTML = "Edit";
    let inputEdit = document.createElement("button");
    inputEdit.innerHTML = "Edit";
    inputEdit.setAttribute("onclick","editButton("+create_index+")");
    //liTaskMenu[1].innerHTML = "Delete";
    let inputDelete = document.createElement("button");
    inputDelete.innerHTML = "Delete";
    inputDelete.setAttribute("onclick","removeTache("+create_index+")");

    divTaskMenu.appendChild(ulTaskMenu);
    liTaskMenu.forEach(liTaskMenu => {
        ulTaskMenu.appendChild(liTaskMenu);
    });

    liTaskMenu[0].appendChild(inputEdit);
    liTaskMenu[1].appendChild(inputDelete);

    etatArray.push({Id:create_index, etatMenu:0, etatCheckbox:0});
    create_index++;
    
}

function checkId(elem)
{
    console.log("id : "+elem.parentNode.id);
    return elem.parentNode.id
}
function maskMenu(elem) {
    
    console.log("Element : "+elem);
    let getMenu = document.getElementsByClassName("task-menu-"+elem);
    
    console.log("taille : "+ etatArray.length);
    console.log(etatArray[elem].etatMenu);
    switch (etatArray[elem].etatMenu) {
        case 0:
            etatArray[elem].etatMenu = 1;
            getMenu[0].style.transform= "scale(1)";
            break;
        case 1:
            etatArray[elem].etatMenu = 0;
            getMenu[0].style.transform = "scale(0)";
            break;
        default:
        
    }
    
}

function removeTache(elem) {
    
    const getP = document.getElementById("div-container-"+elem);
    getP.remove();

    etatArray[elem] = null;
    console.log("Element : "+(elem+1)+ " a été supprimer.");
}

function removeAllTache() {
    
    const getP = document.querySelectorAll("[id^=div-container]");
    console.log("getP : "+getP.length);
    for (let index = 0; index < getP.length; index++) {
        
        if (getP[index] != null) {
            console.log("Element : "+index);
            console.log(getP[index]);

            getP[index].remove();
            
        }
        
    }
    //supprime tant qu'il ya des élement dans le tableau
    while (etatArray.length) { 
        etatArray.pop(); 
    }
    create_index = 0;
    console.log("Toutes les taches ont été supprimer.");
    
    
    
}


var input = document.getElementById("inputText");
input.addEventListener("keypress", function(event) {
    if (event.key  === "Enter" && (etatEdit == 0 && input.value!= "")) {
        event.preventDefault();
        creationTache(input.value);
        input.value= "";
        
    }
});

    
function editButton(elem) {
    etatEdit = 1;

    // selection le 1er element p avec l'id elem
    const getP = document.getElementById("text"+elem);

    console.log(getP.innerHTML);

    var input = document.getElementById("inputText");
    input.value = getP.innerHTML;
    console.log(" 1 : "+input.value);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && etatEdit == 1) {
            event.preventDefault();
            getP.innerHTML = input.value;
            console.log(" 1 : "+getP.value);
            input.value= "";
            etatEdit=0;
        }
    });

}

function Check(value,elem) {
    console.log(value.checked);
    const getP = document.getElementById("text"+elem);
    if (value.checked == true) {
        getP.style.textDecoration = "line-through";
        etatArray[elem].etatCheckbox = 1;
    }else{
        getP.style.textDecoration = "none";
        etatArray[elem].etatCheckbox = 0;
    }
    
};

function completBtn() {
    console.log("tableau : "+etatArray.length);
    let getP;
    console.log(" =======COMPLET=======");
    for (let index = 0; index < etatArray.length; index++) {
        
      
        if (etatArray[index] != null) {
            switch (etatArray[index].etatCheckbox) {
                case 0:
                    getP = document.getElementById("div-container-"+index);
                    getP.style.display = "none";
                    break;
                case 1:
                    getP = document.getElementById("div-container-"+index);
                    console.log(etatArray[index]);
                    getP.style.display = "flex";
                    break;
                default:
                    break;
            }
        }
        
    }
    console.log(" =======END=======");
};

function enCourBtn() {
    console.log("tableau : "+etatArray.length);
    let getP;
    console.log(" ======EN COUR=======");
    
    for (let index = 0; index < etatArray.length; index++) {
        if (etatArray[index] != null) {
            switch (etatArray[index].etatCheckbox) {
                case 0:
                    getP = document.getElementById("div-container-"+index);
                    getP.style.display = "flex";
                    break;
                case 1:
                    getP = document.getElementById("div-container-"+index);
                    console.log(etatArray[index]);
                    getP.style.display = "none";
                    break;
                default:
                    break;
            }
        }
     
        
    }
    console.log(" =======END=======");
};

function toutBtn() {
    console.log("tableau : "+etatArray.length);
    let getP;
    console.log(" =======TOUT=======");
    
    for (let index = 0; index < etatArray.length; index++) {

        if (etatArray[index] != null) {
            console.log(etatArray[index]);

            getP = document.getElementById("div-container-"+index);
            getP.style.display = "flex";
        }
        
    }
    
    console.log(" =======END=======");
};

function affTab() {
    console.log(" =======AFF TAB=======");
    console.log("Taille : "+etatArray.length);
    for (let index = 0; index < etatArray.length; index++) {
        //console.log("index : " + index);
        console.log(etatArray[index]);
    }
    console.log(" =======END=======");
}