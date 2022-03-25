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

elementBtnSubmit.addEventListener('click', function(){
    const fullName = document.getElementById('name').value;
    if (fullName.length < 1 || fullName.length > 25) {
        alert('In "nome cognome" occorre inserire un valore compreso tra 1 e 25 caratteri')
        fullName.value=''
    }
    const tripLengthKm = document.getElementById('km').value;
    if (tripLengthKm.length < 1 || tripLengthKm.length > 2000) {
        alert('In "km da percorrere" occorre inserire un valore compreso tra 1 e 25 chilometri')
        tripLengthKm.value=''
    }
    const passengerAge = document.getElementById('age').value;
    if (passengerAge === "") {
        alert('Devi selezionare una fascia d\'età')
        passengerAge.value=''
    }
    console.log(fullName, tripLengthKm, passengerAge)

    document.getElementById('passenger_name').innerHTML = fullName

    /* calcolare il costo del biglietto */
    const standardPrice = unit_price * tripLengthKm;
    const underPrice = standardPrice - (standardPrice*underage_discount);
    const over65Price = standardPrice - (standardPrice*over65_discount);
    console.log(standardPrice, underPrice, over65Price)
    const wagonNumber = Math.floor(Math.random()*20+1)
    const cp = Math.floor(Math.random()*99998+1)

    if ((fullName.value='') || (tripLengthKm.value='') || (passengerAge.value='')) {
        ticket.innerHTML = 'I DATI INSERITI NON SONO CORRETTI'
    } else {
        ticket.classList.remove('invisible')
    }

    /* visualizzare il risultato */
    document.getElementById('wagon').innerHTML = wagonNumber;
    document.getElementById('code_cp').innerHTML = cp;


    if (passengerAge === 'under') {
        document.getElementById('ticket_type').innerHTML = 'Sconto minorenne';
        document.getElementById('final_price').innerHTML = `${underPrice.toFixed(2)} €`;
    } else if (passengerAge === 'over65') {
        document.getElementById('ticket_type').innerHTML = 'Sconto over 65';
        document.getElementById('final_price').innerHTML = `${over65Price.toFixed(2)} €`;
    } else {
        document.getElementById('ticket_type').innerHTML = 'biglietto standard';
        document.getElementById('final_price').innerHTML = `${standardPrice.toFixed(2)} €`;
    };    
});

/* annullare la visualizzazione del ticket */
elementBtnReturn.addEventListener('click', function(){
    const fullName = document.getElementById('name').value = '';
    const tripLengthKm = document.getElementById('km').value = '';
    const passengerAge = document.getElementById('age').value = '';

    console.log(fullName, tripLengthKm, passengerAge)

    ticket.classList.add('invisible');
});