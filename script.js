//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const L1Element = document.getElementById('L1');
console.log(L1Element);

const btnElement = document.getElementById('btn');
console.log(btnElement);

//aggiunta eventi che si dovranno verificare se clicco sul bottone
btnElement.addEventListener('click', function(){
    //stampa click sul bottone
    console.log('click bottone');
    //stampo tutto ciò che riguarda l'immagine, che comparirà quando cliccherò sul bottone
    console.log(btnElement.src);
    console.log(btnElement.alt);
    console.log(btnElement.id);

    

})