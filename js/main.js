/*
 Sfruttiamo le timing functions per fare il conto alla rovescia
 per la correzione di domani! Ogni secondo il nostro countdown
 dovrà scalare fino alle 9:30 di domani mattina!
*/

// AGGANCIO AGLI "id" DI GIOTNI, ORE, MIN. E SEC. DAL HTML
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutsElement = document.getElementById("minutes");
const seconsElement = document.getElementById("seconds");

// DICHIARO LA DATA E L'ORA DEL TERMINE DEL COUNTDOWN
const endTime = new Date();
endTime.setDate(endTime.getDate() + 1);
endTime.setHours(9, 30, 0, 0);

// INIZIO DELLA "function" PER IL COUNTDOWN
function countDown() {

    // DICHIARAZIONE DELLA DATA E ORA ATTUALI
    const now = new Date();

    const difference = endTime - now;

    // CALCOLO DIFFERENZA TRA ORA ATTUALE E ORA DELLA SCADENZA
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));     
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // COLLEGAMENTO DEI TEMPI IMPOSTATI AGLI "id" HTML
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutsElement.innerHTML = minutes;
    seconsElement.innerHTML = seconds;   
}

// FUNZIONE PER TENERE IL COUNTDOWN AGGIORNATO
setInterval(countDown, 1000);