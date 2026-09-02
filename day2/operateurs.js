const prompt=require('prompt-sync')();
// //challenge 1
// const nombre1=prompt("entrer le premeir nombre entier : ");
// const nombre2=prompt("entrer le deuxieme nombre entier : ");
// const somme=nombre1+nombre2;
// const soustraction=nombre1-nombre2;
// const produit=nombre1*nombre2;
// const division=nombre1/nombre2;
// console.log(`somme=${somme}`);
// console.log(`soustraction=${soustraction}`);
// console.log(`produit=${produit}`);
// console.log(`division=${division}`);

// //challenge 2
// let a=prompt("entrer la valeur de A : ");
// let b=prompt("entrer la valeur de B : ");
// let c;
// c=a;
// a=b;
// b=c;
// console.log(`A=${a} B=${b}`);

// //challenge 3
// let nombre=prompt("entrez un nombre : ");
// console.log(nombre+=nombre);
// console.log(nombre-=nombre);
// console.log(nombre*=nombre);
// console.log(nombre/=nombre);
//challenge 4
const val1=prompt("entrez le 1er nombre : ");
const val2=prompt("entrez le 2eme nombre : ");
if(val1==val2){
    console.log("ils sont identique");
}
else if(val1>val2){
    console.log(`${val1}>${val2}`)
}
else{
   console.log(`${val1}<${val2}`)
};

//challenge 5
let sec=prompt("entrez le nombre des secondes : ");
const heures=Math.floor(sec/360);
let rest=sec%360;
const minutes=Math.floor(rest/60);
rest=rest%60;
sec=rest;
console.log(`${heures}h:${minutes}min:${sec}s`);

//challenge 6
const num=prompt("entrez un nombre entier : ");
if(num>=10||num<=100){
    console.log(`${num} est appartient à l interval compris entre 10 et 100`)
}
else{
    console.log(`${num} n'est appartient à l interval compris entre 10 et 100`)
};

//challenge 7
const prix=prompt("entrez le prix de produit : ");
const pourcentage=prompt("entrez la valeur du pourcentage : ");
const prix_final=prix-prix*pourcentage;
const montant_pourcentage=prix*pourcentage;
console.log(`le prix finzl est : ${prix_final},et le montant de pourcentage est : ${montant_pourcentage}`);

//challenge 8
const age=prompt("entrez votre age : ");
const status=prompt("vous etes un étudiant ? : ");
if(age>=18 || status=="oui"){
    console.log("vous etes admis à l activité principalement")
}else {
    console.log("vous etes admis à l activité comme un visiteur")
}