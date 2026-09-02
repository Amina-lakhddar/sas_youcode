let prompt=require('prompt-sync')();
//challenge 1
const nombre1=prompt("entrez un entier :");
for(let i=1;i<=10;i++){
    console.log(`${nombre1}*${i}=${nombre1*i}`);
};

//challenge 2
const nombre2=prompt("entrez un nombre eniter : ");
let facto=1;
for(let i=1;i<=nombre2;i++){
    facto=facto*i;
};
console.log(`${nombre2}!=${facto}`);

//challenge 3
const nombre3=prompt("entrez un nombre entier : ");
let somme=0;
for(let i=1;i<=nombre3;i++){
    somme=somme+i;
};
console.log(`la somme = ${somme}`);

//challenge 4
const nombre4=prompt("entrez un nombre entier 4: ");
let i=1;
let a=1;
while(a<=nombre4){
    if(i%2!=0){
        console.log(i);
        a++;
    };
    i++;
};

//challenge 5
let base=prompt("entrez une base : ");
const exposant=prompt("entrer un exposant : ");
let puissance=1;
for(let i=1;i<=exposant;i++){
    puissance=puissance*base;
};
console.log(`${base}^${exposant}=${puissance}`);

//challenge 6
const n=prompt("entrez un nombre entier : ");

