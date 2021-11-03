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

let uno = prompt("entrez un nombre");
let dos = prompt("entrez un nombre");
let operator = prompt("entrez un opérateur");


function compute(operator,One,Two)
{
    One = parseInt(One); Two = parseInt(Two);
    if (operator == "+") {
        return One + Two;
    }
    else if (operator == "*")
    {
        return One * Two;
    }
     else if (operator == "-")
    {
        return One - Two;
    }
    else if  (operator == "/")
    {
        return One / Two;
    }
    else
    {
        return "syntax error";
    }
};