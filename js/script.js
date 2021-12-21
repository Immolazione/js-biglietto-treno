console.log('JS OK');

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/*
1- Chiedere numero chilometri
2- Chiedere età passeggero
2b- Valutazione valori
3- Calcolare il prezzo del viaggio con gli sconti
4- Print
*/

// 1-2
const userAge = parseInt(prompt('Quanti anni hai?', '24').trim());
console.log(`userAge: ${userAge}`);
const userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?', '100').trim());
console.log(`userKm: ${userKm}`);

if (isNaN(userAge) || isNaN(userKm)) {
    alert('I VALORI INSERITI SONO INVALIDI')
}

// 3
let ticketPrice = 0.21 * userKm;
const youngDiscount = (ticketPrice * 20) / 100;
const elderDiscount = (ticketPrice * 40) / 100;

if (userAge < 18) {
    ticketPrice = ticketPrice - youngDiscount;
} else if (userAge > 65) {
    ticketPrice = ticketPrice - elderDiscount;
}

//4
console.log(`ticketPrice: ${ticketPrice.toFixed(2)} €`);

const displayAge = document.getElementById('age');
displayAge.innerHTML = `Età Passeggero: ${userAge} anni`;

const displayKm = document.getElementById('kms');
displayKm.innerHTML = `Km Percorsi: ${userKm} Km`;

const displayPrice = document.getElementById('price');
displayPrice.innerHTML = `Prezzo Totale: ${ticketPrice.toFixed(2)} €`