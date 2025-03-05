//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const L1Element = document.getElementById('L1');
console.log(L1Element);

const btnElement = document.getElementById('btn');
console.log(btnElement);

btnElement.addEventListener('click', function(){
    console.log('click bottone');
})