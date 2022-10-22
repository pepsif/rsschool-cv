

let body = document.querySelector('body');

fieldGenerator()

let fieldSet = document.querySelector(".fieldset");
let fields = document.querySelectorAll('.field');
let emptyField = document.getElementById("16");


// console.log(emptyField)

fieldSet.addEventListener("click", getCoordianteField);

function getCoordianteField(event) {
    let divClick = event.target.closest("DIV");
    if (!divClick) return
    let clickX = divClick.offsetLeft;
    let clickY = divClick.offsetTop;
    let emptyFieldX = fieldSet.querySelector(".empty-field").offsetLeft;
    let emptyFieldY = fieldSet.querySelector(".empty-field").offsetTop;
    

    
    if (clickX === emptyFieldX && Math.abs(clickY - emptyFieldY) < 130) {
       
    //  console.log( divParent,emptyField)
      
      console.log(emptyField)
      divClick.replaceWith(emptyField)
        
    
    }
    if(clickY === emptyFieldY && Math.abs(clickX - emptyFieldX) <130 ) {
      
        console.log(divClick.id)
    }

   

}

// console.log( fieldSet.children[0].after(fieldSet.children[15]) ) 

// console.log( fieldSet.childNodes[0] )




function randomizer() {

}

function fieldGenerator() {
    // create TABLEBLOCK
    let tableBlock = document.createElement("div")
    tableBlock.classList.add("table-block")
    body.append(tableBlock)

    // create buttons-block
    let buttonsBlock = document.createElement("div");
    buttonsBlock.classList.add("buttons-block");
    tableBlock.append(buttonsBlock)

    // create table-info-block 
    let infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    tableBlock.append(infoBlock)

    // create and append in tableblock table buttons
    let buttonsNames = ["Shufle and start", "Stop", "Save", "Results"]

    for (let i = 0; i <= 3; i++) {
        let tableButton = document.createElement("button");
        tableButton.classList.add('table-button');
        tableButton.textContent = buttonsNames[i];
        buttonsBlock.append(tableButton);
    }

    // create table info-block
    let infoNames = ["Moves", "moves count", "Time", "Time count"]

    for (let i = 0; i <= 3; i++) {
        let infobutton = document.createElement("span");
        infobutton.classList.add('info-element');
        infobutton.textContent = infoNames[i];
        infoBlock.append(infobutton);
    }

    // create fieldset
    let fieldSet = document.createElement("div");
    fieldSet.classList.add('fieldset');
    body.append(fieldSet);
   
    // create field

    for (let i = 1; i <= 16; i++) {
        let field = document.createElement("div");
        field.classList.add('field');
        field.id = i;

        let number = document.createElement("p");
        number.innerHTML = i;
        number.classList.add('number');
        field.append(number);

        fieldSet.append(field)
    }
    fieldSet.children[15].classList.add("empty-field");
    fieldSet.children[15].textContent = "";

}












