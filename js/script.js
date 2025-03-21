// PRIMO ESERCIZIO: PALINDROMA

// chiedo all'utente di inserire una parola
// dichiaro una variabile

let userWord = prompt('Inserisci la parola che vuoi analizzare');
let userWordReversed = [];
console.log(userWord);

// verifico se la parola inserita è palindroma
// dichiaro una funzione

//function verificationWord(){
    userWordReversed = userWord.split("")
    userWordReversed.reverse()
    console.log(userWordReversed);

