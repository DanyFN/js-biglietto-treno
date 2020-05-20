// Calcolo prezzo del treno:
// Il programma dovrà chiedere
// all’utente il numero di chilometri e
// l’età e dovrà calcolare il prezzo totale
// del viaggio.
// Il prezzo del biglietto è definito in
// base ai km (0.21 €cent al km) ma c’è
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65

// chiedo le informazioni all'utente
var km = parseInt(prompt("Quanti km devi percorrere?", "Inserisci i km..."));
var eta = parseInt(prompt("Quanti anni hai?", "Inserisci la tua età..."));

//calcolo il prezzo totale in base ai km
var prezzo = km * 0.21;

//calcolo gli sconti
var sconto20 = prezzo * 20 /100;
var sconto40 = prezzo * 40 /100;

//calcolo le condizioni
if (eta <= 18) {
  document.getElementById('esercizio').innerHTML = "L'utente percorre " + km + " km, " + "ha " + eta +" anni, " +
  " in tutto paga " + (prezzo - sconto20).toFixed(2) + " €";
}else if (eta >=65) {
  document.getElementById('esercizio').innerHTML = "L'utente percorre " + km + " km, " + "ha " + eta +" anni, " +
  " in tutto paga " + (prezzo - sconto40).toFixed(2) + " €";
}else {
  document.getElementById('esercizio').innerHTML = "L'utente percorre " + km + " km, " + "ha " + eta +" anni, " +
  " in tutto paga " + prezzo.toFixed(2) + " €";
}
