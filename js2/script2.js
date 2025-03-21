// SECONDO ESERCIZIO: PARI E DISPARI

// chiedo all'utente di scegliere pari o dispari

let sceltaUtente = prompt("Scegli Pari o Dispari");
console.log('Hai scelto' + ' ' + sceltaUtente);

// chiedo all'utente di scegliere un numero da 1 a 5

let sceltaNumeroUtente = prompt("Scegli un numero da 1 a 5");
console.log('Il tuo numero è' + ' ' + sceltaNumeroUtente);

// genero un numero random da 1 a 5 per il computer tramite una funzione
// dichiaro la funzione

function randomNumber (){
    valoreGenerato = Math.floor(Math.random() * 5) + 1;
    console.log('Il numero del computer è'+  ' ' + valoreGenerato )
    return valoreGenerato;
}

let risultatoRandom = randomNumber()
