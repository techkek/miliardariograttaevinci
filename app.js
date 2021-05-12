var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
let vittoria = 0, spesi = 0, count = 0, n, giocate = 0, vittorie = 0, sconfitte = 0, pareggio = 0;
function firstMain(){
    reset();
    main();
}
function main(){
    count = 0;
    vittoria = 0; 
    spesi = 0;
    let estrazioni = document.getElementById('tentativiInput');
    for(i=0; i<estrazioni.value; i++){
        n = Math.floor(Math.random()*30000001);
        estraiBiglietto();
        spesi=spesi+5;
        count++;
    }
    giocate++;
    stampa();
}
function stampa(){
    document.getElementById("estrazioni").innerHTML = "Estrazioni: "+count+".";
    document.getElementById("soldi-spesi").innerHTML = "Soldi spesi: "+spesi+"€.";
    document.getElementById("soldi-vinti").innerHTML = "Soldi vinti: "+vittoria+"€.";
    if(spesi>vittoria){
        document.getElementById("finale").style.color = "red";
        document.getElementById("finale").innerHTML = "Hai perso "+(spesi-vittoria)+"€.";
        sconfitte++;
    }else if(spesi==vittoria){
        document.getElementById("finale").style.color = "orange";
        document.getElementById("finale").innerHTML = "Non hai perso nè vinto nulla.";
        pareggio++;
    }else{
        document.getElementById("finale").style.color = "green";
        document.getElementById("finale").innerHTML = "Hai vinto "+(vittoria-spesi)+"€!";
        vittorie++;
    }
    if(giocate>10 && vittorie>1 && sconfitte>1 || giocate>20)
        document.getElementById("tot").innerHTML = 'Hai perso soldi '+sconfitte+' volte, hai guadagnato soldi '+vittorie+' volte e non hai nè vinto nè perso soldi per '+pareggio+' volte. Totale giocate: '+giocate+'.';
}
function reset(){
    vittorie=0;
    sconfitte=0;
    pareggio=0;
    giocate=0;
    document.getElementById("tot").innerHTML = "";
}
function estraiBiglietto(){
    if(n<5)
        vittoria=vittoria+500000;
    else if(n<30)
        vittoria=vittoria+100000;
    else if(n<280)
        vittoria=vittoria+10000;
    else if(n<5280)
        vittoria=vittoria+1000;
    else if(n<12780)
        vittoria=vittoria+500;
    else if(n<77780)
        vittoria=vittoria+100;
    else if(n<197780)
        vittoria=vittoria+50;
    else if(n<287780)
        vittoria=vittoria+25;
    else if(n<557780)
        vittoria=vittoria+20;
    else if(n<907780)
        vittoria=vittoria+15;
    else if(n<2937780)
        vittoria=vittoria+10;
    else if(n<11547780)
        vittoria=vittoria+5;
}