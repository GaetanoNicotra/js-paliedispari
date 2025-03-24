// PRIMO ESERCIZIO: PALINDROMA

// chiedo all'utente di inserire una parola
// dichiaro una variabile

let userWord = prompt('Inserisci la parola che vuoi analizzare');

console.log(userWord + ' : ' + 'Parola originale');

// richiamo la funzione

let parolaGirata = verificationWord(userWord);

// verifico se la parola inserita è palindroma

if (userWord == parolaGirata) {
    console.log("La parola è PALINDROMA")

}
else {
    console.log("La parola non è PALINDROMA")
}

// dichiaro la funzione per la verifica della parola

function verificationWord(word) {
    let userWordReversed = [];
    userWordReversed = word.split("")
    userWordReversed.reverse()
    userWordReversed = userWordReversed.join("")
    console.log(userWordReversed + ' : ' + 'parola invertita');
    return userWordReversed;
}