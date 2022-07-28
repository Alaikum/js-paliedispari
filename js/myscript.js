console.log('Pali e Dispari')


// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita
//  è palindroma




// faccio inserire la parola 
const parola = prompt('Inserisci una parola o una frase')

// console.log(parola)

// lancio la funzione 
isPalindrome(parola)

function isPalindrome(word) {



    // creo un array composto dalle lettere  da cui poi 
    // ottengo una stringa
    let arrayWord = word.split('');
    // console.log(arrayWord)
    let arrayNoSpaceWord = []

    // trova e rimuove lo spazio 
    for (let i = 0; i < arrayWord.length; i++) {
        
        if (arrayWord[i] != ' ') {
            // console.log('trovato il non spazio')
            arrayNoSpaceWord.push(arrayWord[i])
        }
        
    }

    arrayNoSpaceWord=arrayNoSpaceWord.join('')
    console.log(arrayNoSpaceWord)

   
    // creo l array di controllo  sempre dalla parola
    // perchè se lo copio eventuali modifiche moficano anche
    // l array originale , poi  ottengo la stringa
    let arrayReverse = word.split('').reverse();

    let arrayNoSpaceReverse = []

     // trova e rimuove lo spazio 
     for (let i = 0; i < arrayReverse.length; i++) {
        
        if (arrayReverse[i] != ' ') {
            // console.log('trovato il non spazio')
            arrayNoSpaceReverse.push(arrayReverse[i])
        }
        
    }

    arrayNoSpaceReverse=arrayNoSpaceReverse.join('')
    console.log(arrayNoSpaceReverse)


    if (arrayNoSpaceWord === arrayNoSpaceReverse) {
        console.log('La parola o la frase è palindroma')
        return;
    }

    console.log('La parola o la frase non è palindroma')
    return

}




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero 
// da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il 
// computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione)
// Dichiariamo chi ha vinto.

// funzione per numeri random da 1 a 5 

function randomNumberOneFive() {

    let num = Math.floor(Math.random() * 5 + 1)
    return num
}


// funzione per capire se un numero è pari,
// se è falso da FALSE come risultato
function isEven(number) {
    let even = false
    if (number % 2 === 0) {
        even = true

    }
    return even
}



// creo il collegamento con il bottone 
const buttonElement = document.getElementById('play')

// metto l'evento che da inizio al gioco 
buttonElement.addEventListener('click', function () {

    const pariOdispari = document.getElementById('pari-o-dispari')
    // console.log(pariOdispari.value)
    const sceltaGiocatore = parseFloat(pariOdispari.value)

    const numeroScelto = document.getElementById('numero-scelto')
    // console.log(numeroScelto.value)

    // lo trasformo in un valore numerico 
    const numeroDelGiocatore = parseFloat(numeroScelto.value)
    // console.log(numeroDelGiocatore)
    const numeroComputer = randomNumberOneFive()

    let somma = numeroDelGiocatore + numeroComputer
    console.log(somma)

    let risultato = isEven(somma)


    // tre opzioni vittori con pariOdispari, vittoria con dispari
    // o sconfitta 
    if (sceltaGiocatore === 0 && risultato === true) {
        console.log('hai vinto')

    } else if (sceltaGiocatore === 1 && risultato === false) {
        console.log('hai vinto')
    } else {
        console.log('hai perso')
    }






})




