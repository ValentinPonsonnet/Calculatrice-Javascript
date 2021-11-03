/* let nombrea = Number(prompt());
let nombreb = Number(prompt());

function sommeNombreA(nombrea, nombreb){
    let sommeA = nombrea + nombreb;
    return "Le resultat de votre addition est : " + sommeA;
};

function sommeNombreS(nombrea, nombreb){
    let sommeS = nombrea - nombreb;
    return "Le resultat de votre soustraction est : " + sommeS;
};
function sommeNombreM(nombrea, nombreb){
    let sommeM = nombrea * nombreb;
    return "Le resultat de votre multiplication est : " + sommeM;
};
function sommeNombreD(nombrea, nombreb){
    let sommeD = nombrea / nombreb;
    return "Le resultat de votre division est : " + sommeD;
};
/////////machine
console.log(sommeNombreA(nombrea, nombreb));
console.log(sommeNombreS(nombrea, nombreb));
console.log(sommeNombreM(nombrea, nombreb));
console.log(sommeNombreD(nombrea, nombreb)); */

//Faire un random avec Math.floor et Math.random

const Participant = ["Romain", "Antoine","Kevin","Tony", "Lucie", "Valentin"];

const rmd = Participant[Math.floor(Math.random() * Participant.length)];

console.log(rmd);