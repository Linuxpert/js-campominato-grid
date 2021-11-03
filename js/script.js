//1.Chiedere all'utente il livello di difficoltà del gioco => promt
//2.generare una griglia di gioco quadrata in base alla difficoltà => if
    //2.1 contentente delle celle => ciclo for
//3.quando l'utente clicca il quadrato cambia colore => click

const grid = document.getElementById("grid");

//chiedere all'utente il livello di difficoltà da 1 a 3
let difficultGame = parseInt(prompt("Inserisci un numero da 1 a 3 per la difficoltà, più il numero è alto più sale la difficoltà."));

//controllo della difficoltà, se l'utente non inserisce un numero tra 1 e 3 il promt compare di nuovo
while((difficultGame < 1) || (difficultGame > 3)) {
    difficultGame = parseInt(prompt("Inserisci un numero da 1 a 3 per la difficoltà, più il numero è alto più sale la difficoltà."));
}


//in base alla difficoltà si generano tot quadrati
if (difficultGame === 1) {

    for(let i = 1; i <= 100; i++){

        let newElem = createSquare ("div", "square1");
        

        newElem.addEventListener("click",
            function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
        );

        grid.appendChild(newElem);

    }
}else if(difficultGame === 2){

    for(let i = 1; i <= 81; i++){

        let newElem = createSquare ("div", "square2");
        
        newElem.addEventListener("click",
            function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
        );

        grid.appendChild(newElem);

    }

}else if(difficultGame === 3){

    for(let i = 1; i <= 49; i++){

        let newElem = createSquare ("div", "square3");

        newElem.addEventListener("click",
            function(){
                this.classList.add("clicked-true");
                newElem.innerText = `${i}`
            }
        );

        grid.appendChild(newElem);

    }
}


//funzioni

function createSquare (squareGen, classPlus) {
    let nodeHundred = document.createElement(squareGen);
    nodeHundred.classList.add(classPlus);

    return nodeHundred;
}


