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

// INIZIO DELLA "function" PER IL COUNTDOWN
setInterval(function () {
    // DICHIARAZIONE DELLA DATA E ORA ATTUALI
    const now = new Date();
    // DICHIARAZIONE DELLA DATA DEL COUNTDOWN
    const tomorrowLesson = new Date("2023-02-08 09:30");

    const msNow = now.getTime();
    const msTomorrow = tomorrowLesson.getTime();
    const msToTomorrow = msTomorrow - msNow;
    const sToTomorrow = parseInt(msToTomorrow / 1000);

    // CALCOLO DIFFERENZA TRA ORA ATTUALE E ORA DELLA SCADENZA
    const seconds = sToTomorrow % 60;
    const minutes = parseInt(sToTomorrow / 60) % 60;
    const hours = parseInt(sToTomorrow / 60 / 60) % 24;
    const days = parseInt(sToTomorrow / 60 / 60 / 24);

    // STAMPO NELLA PAGINA IL COUNTDOWN AGGIUNGENDO LO "0" QUANDO IL NUMERO E' < 10
    seconsElement.innerHTML = (seconds < 10) ? '0' + seconds : seconds;
    minutsElement.innerHTML = (minutes < 10) ? '0' + minutes : minutes;
    hoursElement.innerHTML = (hours < 10) ? '0' + hours : hours;
    daysElement.innerHTML = (days < 10) ? '0' + days : days;

    // FUNZIONE PER TENERE IL COUNTDOWN AGGIORNATO
}, 1000);

// METODO ALTERNATIVO:

/*
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
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
*/