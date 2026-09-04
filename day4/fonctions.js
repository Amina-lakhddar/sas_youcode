let prompt=require('prompt-sync')();
// //challenge 1
// const a=parseFloat(prompt("entrez le 1er nombre : "));
// const b=parseFloat(prompt("entrez le 2eme nombre : "));
// function addition(a,b){

//     return a+b;
// };
// console.log(addition(a,b));
// //challenge 2
// function produit(a,b){
//     return a*b;
// };
// console.log(produit(a,b));

// //challenge 3
// function maximum(a,b){
//     if(a<b){
//         return b
//     }else {
//         return a
//     }
// };
// console.log(`la valeur max est : ${maximum(a,b)}`);

// //challenge 4
// function minimum(a,b){
//     if(a>b){
//         return b
//     }else {
//         return a
//     }
// };

// console.log(`la valeur min est : ${minimum(a,b)}`);

//challenge 5
const nombre1=prompt("entrez un entier positif : ");
function factorielle(n){
    let facto=1;
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        for(i=2;i<=5;i++){
            facto=facto*i;
        }
        return facto;
    }
};
console.log(`${nombre1}!=${factorielle(nombre1)}`);

//challenge 6
const nombre=prompt("entrez un nombre entier : ");
function fibonacci(nombre){
    let f0=0;
    let f1=1;;
    let fn;
    if(nombre==0){
        return 0;
        
    }else if (nombre==1){
        return 1
    }else{
        for(i=2;i<=nombre;i++){
            fn=f1+f0;
            f0=f1;
            f1=fn;
        };
        return fn;
    };
};
console.log(`la suit de fibonnacci F${nombre} = ${fibonacci(nombre)}`);

//challenge 7
const entier=prompt("entrez un entier positif : ");
function compteur(n){
    for(i=n;i>=0;i--){
        console.log(i)
    }
};
compteur(entier);
//challenge 8
const nombre2=prompt("entrez un nombre entier : ");
function parite(n){
    let est_pair=true;
    if(n%2==0){
        return est_pair;
    }else{
        return !est_pair;
    }
};
console.log(parite(nombre2));