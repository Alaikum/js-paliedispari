console.log('Pali e Dispari')


// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita
//  è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero 
// da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il 
// computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione)
// Dichiariamo chi ha vinto.


// faccio inserire la parola 
const parola = prompt('Inserisci una parola')

// console.log(parola)

// lancio la funzione 
isPalindrome(parola)

function isPalindrome(word) {
    // creo un array composto dalle lettere  da cui poi 
    // ottengo una stringa
    let arrayWord = word.split('').join('')
    // console.log(arrayWord)

    // creo l array di controllo  sempre dalla parola
    // perchè se lo copio eventuali modifiche moficano anche
    // l array originale , poi  ottengo la stringa
    let arrayReverse = word.split('').reverse().join('');


    console.log(arrayWord)
    console.log(arrayReverse)

    if (arrayWord === arrayReverse) {
        console.log('La parola è palindroma')
        return;
    }

    console.log('La parola non è palindroma')
    return

}