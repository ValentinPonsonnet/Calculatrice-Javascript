let nombrea = Number(prompt());
let nombreb = Number(prompt());

alert(sommeNombreA(nombrea, nombreb));
alert(sommeNombreS(nombrea, nombreb));
alert(sommeNombreM(nombrea, nombreb));
alert(sommeNombreD(nombrea, nombreb));



function sommeNombreA(nombrea, nombreb){
    let sommeA = nombrea + nombreb;
    return console.log("Le resultat de votre addition est : " + sommeA);
}
function sommeNombreS(nombrea, nombreb){
    let sommeS = nombrea - nombreb;
    return console.log("Le resultat de votre soustraction est : " + sommeS);
}
function sommeNombreM(nombrea, nombreb){
    let sommeM = nombrea * nombreb;
    return console.log("Le resultat de votre multiplication est : " + sommeM);
}
function sommeNombreD(nombrea, nombreb){
    let sommeD = nombrea / nombreb;
    return console.log("Le resultat de votre division est : " + sommeD);
}