let prompt=require('prompt-sync')();
//challenge 1
const name=prompt("entrez votre nom : ");
const age=prompt("entrez votre age : ");
const sexe=prompt("entrez votre sexe : ")
const adress_email=prompt("entrez votre adress email : ");
console.log(`bonjour ${name} vous avez ${age} ans , vous etes ${sexe} et votre adresse email est ${adress_email}`);

// challenge 2
const c=prompt("entrer la temperatuer en c ");
const k=c+273.15;
console.log(`la température en kelvin :${k}`);

//challenge 3
const km=prompt("entrez la distance en km");
const yards=km*1093.61;
console.log(`la distance en yards : ${yards}`);

// challenge 4
const km_h=prompt("entrez la vitesse en km/h ");
const ms=km_h*0.27778;
console.log(`la vitesse en m/s : ${ms}`);

// challenge 6
const a=prompt("entrez la valeur de a ");
const b=prompt("entrez la valeur de b");
console.log(`${a}+${b}=${a+b}`);
console.log(`${a}-${b}=${a-b}`);
console.log(`${a}*${b}=${a*b}`);
console.log(`${a}/${b}=${(a/b).toFixed(2)}`);

//challenge 7
const num1=prompt("entre le 1er nombre ");
const num2=prompt("entre le 2eme nombre ");
const num3=prompt("entre le 3eme nombre ");
const moyenne=(num1*2+num2*3+num3*5)/(2+3+5);
console.log(`la moyenne = ${moyenne}`);

// challenge 8
const A=prompt("entrez la valeur de A ");
const B=prompt("entrez la valeur de B ");
const C=prompt("entrez la valeur de C ");
const moyenne_geo=(A*B*C)**(1/3);
console.log(`la moyenne geométrique = ${moyenne_geo}`);

//challenge 9
const x1=prompt("entrez la valeur de x1");
const x2=prompt("entrez la valeur de x2");
const y1=prompt("entrez la valeur de y1");
const y2=prompt("entrez la valeur de y2");
const z1=prompt("entrez la valeur de z1");
const z2=prompt("entrez la valeur de z2");

const distance=Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2);
console.log(`la distance = ${distance}`);

//challenge 10
const r=prompt("entrez la valeur de rayon ");
const PI=3.14;
const volume=(4/3)*PI*r**3;
console.log(`le volume = ${volume}`);

//challenge 11
const longueur=prompt("entrez la longueur de rectangle");
const largeur=prompt("entrez la largeur de rectangle ");
const surface=longueur*largeur;
console.log(`surface = ${surface}`);

// challenge 12
const nombre=prompt("entrez un nombre contient 4 chiffres :");
const chiff1=nombre%10;
let quotion=Math.floor(nombre/10);
const chiff2=quotion%10;
quotion=Math.floor(quotion/10);
const chiff3=quotion%10;
quotion=Math.floor(quotion/10);
const chiff4=quotion%10;
console.log(chiff1,chiff2,chiff3,chiff4);
