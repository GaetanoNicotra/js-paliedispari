// PRIMO ESERCIZIO: PALINDROMA

// chiedo all'utente di inserire una parola
// dichiaro una variabile

let userWord = prompt('Inserisci la parola che vuoi analizzare');
let userWordReversed = [];
console.log(userWord);

// verifico se la parola inserita è palindroma
// dichiaro una funzione

//function verificationWord() {

userWordReversed = userWord.split("")
userWordReversed.reverse()
userWordReversed = userWordReversed.join("")
console.log(userWordReversed);

if (userWord == userWordReversed) {
    console.log("La parola è PALINDROMA")

}
else {
    console.log("La parola non è PALINDROMA")
}