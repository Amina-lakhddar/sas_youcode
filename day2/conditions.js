const prompt=require('prompt-sync')();
//challenge 1
const nombre=prompt("entrez un nombre entier :");
if(nombre%2==0){
    console.log(`${nombre} est un nombre pair`)
}
else{
    console.log(`${nombre} est un nombre impair`)

};

//challenge 2
const caractere=prompt("entrez un caractere alphabitique");
switch(caractere){
    case'a':
    case'e':
    case'i':
    case'o':
    case'y':
    console.log(`La lettre "${caractere}" est une voyelle`);
        break;
    default:
        console.log(`La lettre "${caractere}" est une consonne `);
};
//challenge 3
const a=prompt("entrer le 1er nombre entier : ");
const b=prompt("entrez le 2eme nombre entier : ");
if(a==b){
    console.log((a+b)*3)
}
else{
    console.log(a+b)
};
//challenge 4
const A=prompt("entrez la valeur de a : ");
const B=prompt("entrez la valeur de b :");
const C=prompt("entrez la valeur de c : ");
const delta=B**2-4*A*C;
if(delta>0){
    const x1=(-B-Math.sqrt(delta))/2*A;
    const x2=(-B+Math.sqrt(delta))/2*A;
    console.log(`x1:${x1} x2:${x2}`);
}else if(delta=0){
    const x=(-B)/2*A;
    console.log(`x:${x}`)
}
else{
    console.log("ensemble vide")
};

//challenge 5
const nombre_annee=prompt("entrez le nombre des annees : ");
const menu=prompt("choisissez l un des choix (mois,jours,heures,minutes,secondes)")
switch(menu){
    case 'mois':
        console.log(`le nombre des mois : ${nombre_annee*12}`);
        break;
    case 'jours':
        console.log(`le nombre des jours : ${nombre_annee*365}`);
        break;
    case 'heures':
        console.log(`le nombre des heures : ${nombre_annee*365*24}`);
        break;
    case 'minutes':
        console.log(`le nombre des minutes : ${nombre_annee*365*24*60}`);
        break;
    case 'secondes':
        console.log(`le nombre des secondes: ${nombre_annee*365*24*60*60}`);
        break;
    default:
        console.log("choix incorrect");
        break;
};

//challenge 6
const num=prompt("entrez un entier :");
if(num>0){
    console.log("positif")
} else if(num<0){
    console.log("negatif")
}else{
    console.log("null")
};

//challenge 7
const lettre=prompt("entrez une lettre : ");
if(lettre.charCodeAt(0)>=65 || lettre.charCodeAt(0)<=65){
    console.log(`${lettre} est majuscule `)
}
else{
    console.log(`${lettre} est miniscule`)
};

//challenge 8
const moyenne=prompt("entrez la moyenne de vos notes : ");
if(moyenne<10){
    console.log("vous etes recalé");
}
else if(moyenne<12){
    console.log("vous etes passable");
}else if(moyenne<14){
    console.log("vous etes assez bien")
}else if(moyenne<16){
    console.log("vous etes bien")
}else{
    console.log("vous etes tres bien")
};

//challenge 9
const alphabet=prompt("entrez un caractere alphabitique : ");
if(alphabet.charCodeAt(0)>=65 && alphabet.charCodeAt(0)<=90){
    console.log(`${alphabet} est majuscule`)
}
else{
    console.log(`${alphabet} est miniscule`)
};

//challenge 10