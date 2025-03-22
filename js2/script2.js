// SECONDO ESERCIZIO: PARI E DISPARI

// chiedo all'utente di scegliere pari o dispari

let sceltaUtente = prompt("Scegli Pari o Dispari").toLowerCase();
console.log('Hai scelto' + ' ' + sceltaUtente);

// chiedo all'utente di scegliere un numero da 1 a 5

let sceltaNumeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log('Il tuo numero è' + ' ' + sceltaNumeroUtente);

// stampo il numero random richiamando la funzione creata in precedenza

let risultatoRandom = randomNumber()

// verifico se il numero inserito dall'utente è compreso tra 1 e 5

if (sceltaUtente < 1 || sceltaUtente > 5) {
    console.log('ERRORE: Hai inserito zero o un numero maggiore di 6');
}
else {

    // stampo il risultato della somma richiamando la funzione sum 

    let risultatoSomma = controllo(sceltaNumeroUtente, risultatoRandom)
    console.log('La somma dei numeri è =' + ' ' + risultatoSomma)

    // verifico se l'utente ha vinto 

    if (risultatoSomma === 'dispari' && sceltaUtente === 'dispari') {
        console.log('Hai Vinto')
    }
    else if (risultatoSomma === 'pari' && sceltaUtente === 'pari') {
        console.log('Hai vinto')
    }
    else {
        console.log('Hai perso')
    }
}


// *******  FUNZIONI  *******

// funzione per generare un numero random da 1 a 5 
// dichiaro la funzione

function randomNumber() {
    valoreGenerato = Math.floor(Math.random() * 5) + 1;
    console.log('Il numero del computer è' + ' ' + valoreGenerato)
    return valoreGenerato;
}

// funzione per sommare due numeri e capire se la somma è Ppari o dispari
// dichiaro la funzione

function controllo(a, b,) {
    let sum = a + b;
    if (sum % 2 === 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}
