// PRIMO ESERCIZIO: PALINDROMA

// chiedo all'utente di inserire una parola
// dichiaro una variabile

let userWord = prompt('Inserisci la parola che vuoi analizzare');
let userWord2 = userWord.split("")
userWord2 = userWord2.toString()
let userWordReversed = [];
console.log(userWord2);

// verifico se la parola inserita è palindroma
// dichiaro una funzione

//function verificationWord() {

userWordReversed = userWord.split("")
userWordReversed.reverse()
userWordReversed = userWordReversed.toString()
console.log(userWordReversed);

if (userWord2 == userWordReversed) {
    console.log("La parola è PALINDROMA")

}
else {
    console.log("La parola non è PALINDROMA")
}