// Jsnack 3
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


const reverseString = (stringToReverse) => stringToReverse.split('').reverse().join('');


const userString = prompt("Inserisci una parola");
console.log(reverseString(userString));

alert(`La tua parola al contrario è:  ${reverseString(userString)}`);