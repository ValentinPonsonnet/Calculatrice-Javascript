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

//Faire un random avec Math.floor et Math.random / Lotto V.1

/* const Participant = ["Romain", "Antoine","Kevin","Anthony", "Lucie", "Valentin"];

const rmd = Participant[Math.floor(Math.random() * Participant.length)];

console.log(rmd); */

/* //Lotto V.2
//Les résultats du Lotto
const ResultatLotto = [10, 9, 12, 50, 61];
// Tableau des tickets
const Ticket = [50, 7, 12, 24, 11];
// Variable de travail
let match = 0;
// On créer une fonction qui compare avec 3 entrer (défini dans la parenthèse)
function compare(res, ticket, nom){
// On créer une première boucle for qui boucle sur le premier tableau
    for(i=0;i<res.length;i++){
        // Creation d'une pute
        let check = res[i];
        // On créer une deuxièmes boucles for boucle sur le deuxième tableau
        for(j=0;j<ticket.length;j++){
            // On verifie s'il y a correspondance
            if(check == ticket[j]){
                // On incrémente de 1 à chaque correspondance
                match++;
                
            }

        };

    };

    //console.log(match)
    // Créer les conditions
    if(match==1){
        let result = nom + " à gagner 100$, parce qu'il a eu 1 numéro !"
        console.log(result)
    }
    else if(match==2){
        let result = nom + " à gagner 400$, parce qu'il a eu 2 numéros !"
        console.log(result)
    }
    else if(match==3){
        let result = nom + " à gagner 600$, parce qu'il a eu 3 numéros !"
        console.log(result)
    }
    else if(match==4){
        let result = nom + " à gagner 800$, parce qu'il a eu 4 numéros !"
        console.log(result)
    }
    else if(match==5){
        let result = nom + " à gagner 1000$, parce qu'il a eu 5 numéros !"
        console.log(result)
    }
    else {
        console.log("Aucun Match !")
    };
};

compare(ResultatLotto, Ticket, "Thomas")
compare(ResultatLotto, Ticket, "Jean") */
