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
const elementBtnSubmit = document.getElementById('submit')
const elementBtnReturn = document.getElementById('return')


/* estrarre i dati scritti dall'utente nel form */

elementBtnSubmit.addEventListener('click', function(){
    const fullName = document.getElementById('name').value;
    if (fullName.length < 1 || fullName.length > 25) {
        alert('In "nome cognome" puoi inserire da un minimo di 1 carattere fino a un massimo di 25 carattere')
    }
    const tripLengthKm = document.getElementById('km').value;
    const passengerAge = document.getElementById('age').value;
    console.log(fullName, tripLengthKm, passengerAge)

    document.getElementById('passenger_name').innerHTML = fullName



    /* calcolare il costo del biglietto */
    const standardPrice = unit_price * tripLengthKm;
    const underPrice = standardPrice - (standardPrice*underage_discount);
    const over65Price = standardPrice - (standardPrice*over65_discount);
    console.log(standardPrice, underPrice, over65Price)
    const wagonNumber = Math.floor(Math.random()*20+1)
    const cp = Math.floor(Math.random()*99998+1)
    const ticket = document.querySelector('.container_ticket').classList.remove('invisible')

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

elementBtnReturn.addEventListener('click', function(){
    const fullName = document.getElementById('name').value = '';
    const tripLengthKm = document.getElementById('km').value = '';
    const passengerAge = document.getElementById('age').value = '';

    console.log(standardPrice, underPrice, over65Price)

    const ticket = document.querySelector('.container_ticket').classList.add('invisible');
});