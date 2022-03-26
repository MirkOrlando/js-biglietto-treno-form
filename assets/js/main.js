/* Il programma dovrà mostrare una form da compilare 
con cui chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km 
(0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale 
va stampato in pagina (formattato con massimo due decimali,
per indicare centesimi sul prezzo). */

const unit_price = 0.21
const underage_discount = 0.2
const over65_discount = 0.4
const elementBtnSubmit = document.getElementById('submit');
const elementBtnReturn = document.getElementById('return');
const ticket = document.querySelector('.container_ticket');


/* estrarre i dati scritti dall'utente nel form */

elementBtnSubmit.addEventListener('click', function () {
    const fullName = document.getElementById('name');
    const tripLengthKm = document.getElementById('km');
    const passengerAge = document.getElementById('age');
    console.log(fullName.value, tripLengthKm.value, passengerAge.value)

    if (fullName.value.length < 1 || fullName.length > 25) {
        alert('In "nome cognome" occorre inserire un valore compreso tra 1 e 25 caratteri');
        fullName.value = '';
        ticket.classList.add('invisible');
    };
    if (tripLengthKm.value < 1 || tripLengthKm.value > 2000) {
        alert('In "km da percorrere" occorre inserire un valore numerico compreso tra 1 e 2000');
        tripLengthKm.value = '';
        ticket.classList.add('invisible');
    };
    if (passengerAge.value === "") {
        alert('Devi selezionare una fascia d\'età');
        ticket.classList.add('invisible');
    };

    /* calcolare il costo del biglietto */
    const standardPrice = unit_price * tripLengthKm.value;
    const underPrice = standardPrice - (standardPrice * underage_discount);
    const over65Price = standardPrice - (standardPrice * over65_discount);
    console.log(standardPrice, underPrice, over65Price);
    const wagonNumber = Math.floor(Math.random() * 20 + 1);
    const cp = Math.floor(Math.random() * 99998 + 1);

    /* visualizzare il risultato */
    if ((fullName.value === '') || (tripLengthKm.value === '') || (passengerAge.value === '')) {
        alert('cortesemente inserire i dati corretti');
    } else {
        ticket.classList.remove('invisible');
    }

    document.getElementById('passenger_name').innerHTML = fullName.value;
    document.getElementById('wagon').innerHTML = wagonNumber;
    document.getElementById('code_cp').innerHTML = cp;

    if (passengerAge.value === 'under') {
        document.getElementById('ticket_type').innerHTML = 'Sconto minorenne';
        document.getElementById('final_price').innerHTML = `${underPrice.toFixed(2)} €`;
    } else if (passengerAge.value === 'over65') {
        document.getElementById('ticket_type').innerHTML = 'Sconto over 65';
        document.getElementById('final_price').innerHTML = `${over65Price.toFixed(2)} €`;
    } else {
        document.getElementById('ticket_type').innerHTML = 'biglietto standard';
        document.getElementById('final_price').innerHTML = `${standardPrice.toFixed(2)} €`;
    };
});

/* annullare la visualizzazione del ticket */
elementBtnReturn.addEventListener('click', function () {
    const fullName = document.getElementById('name').value = '';
    const tripLengthKm = document.getElementById('km').value = '';
    const passengerAge = document.getElementById('age').value = '';

    console.log(fullName, tripLengthKm, passengerAge);

    ticket.classList.add('invisible');
});