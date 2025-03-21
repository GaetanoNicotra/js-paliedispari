// SECONDO ESERCIZIO: PARI E DISPARI

// chiedo all'utente di scegliere pari o dispari

let sceltaUtente = prompt("Scegli Pari o Dispari");
console.log('Hai scelto' + ' ' + sceltaUtente);

// chiedo all'utente di scegliere un numero da 1 a 5

let sceltaNumeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log('Il tuo numero è' + ' ' + sceltaNumeroUtente);

// stampo il numero random richiamando la funzione creata in precedenza

let risultatoRandom = randomNumber()

// verifico se il numero inserito dall'utente è compreso tra 1 e 5
// creo un ciclo for
//for(;sceltaUtente < 1 || sceltaUtente > 6;){
//sceltaUtente = parseInt(prompt('ERRORE: Hai inserito zero o un numero maggiore di 6'))

// controllo la somma e restituisco l'esito della giocata

let risultatoSomma = controllo(sceltaNumeroUtente, risultatoRandom)
console.log('La somma dei numeri è = ' + ' ' +risultatoSomma )

if (sceltaUtente == sum) {
    console.log('Hai Vinto')
}
else {
    console.log('Hai perso')
}



// *******  FUNZIONI  *******

// funzione per generare un numero random da 1 a 5 
// dichiaro la funzione

function randomNumber() {
    valoreGenerato = Math.floor(Math.random() * 5) + 1;
    console.log('Il numero del computer è' + ' ' + valoreGenerato)
    return valoreGenerato;
}

function controllo(a, b,) {
    sum = a + b;
    if ((a + b) % 3 == 0) {
        
    }
    else if ((a + b) % 2 == 0) {
        
    }
    return sum;
}
