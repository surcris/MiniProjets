let displayCalc = document.getElementById("aff-calcul");
let displayResul = document.getElementById("aff-result");
let displayHisto;
let getRltCalc = document.getElementById("rlt-calculs");


//let aff = display.innerHTML;
//selectionne tous les elements commençant par btn
// document.querySelectorAll("[class^=btn]")

function divResultat(resultat) {
    let element_resultat = document.createElement('div');
    element_resultat.setAttribute('id','rlt-calcul');
    element_resultat.style.height ='50px';
    element_resultat.style.display = 'flex';
    element_resultat.style.flexDirection = 'column';
    element_resultat.style.flexWrap = 'nowrap';
    element_resultat.style.justifyContent = 'center';
    element_resultat.style.alignItems = 'flex-end';
    element_resultat.style.alignContent = 'stretch';

    getRltCalc.appendChild(element_resultat);
    element_resultat.innerHTML = resultat;
    displayHisto = document.getElementById("rlt-calcul");
}



let buttons = Array.from(document.querySelectorAll("[class^=btn]")); 
buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        
        switch (e.target.innerText) {
            case 'C':
                displayCalc.innerText = "";
                displayResul.innerText = "";
                break;
            case '←':
                if (displayCalc.innerText) {
                    displayCalc.innerText = displayCalc.innerText.slice(0,-1);
                }
                break;
            case '=':
                
                try {
                    
                    displayResul.innerText = eval(displayCalc.innerText);
                    divResultat( displayCalc.innerText + ' = ' + displayResul.innerText);
                    
                } catch (error) {
                    divResultat(displayCalc.innerText + ' = ' + 'Error');
                    
                    displayResul.innerText = 'Error';
                    
                }
                
                
                break;
            default:
                displayCalc.innerText += e.target.innerText;
                displayResul.innerText = "";
                
        }
    });
});


