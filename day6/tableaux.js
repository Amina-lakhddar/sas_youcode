let prompt=require('prompt-sync')();
// //challenge 1
// let entiers1=[1,2,3,4];
// for(i=0;i<=entiers1.length-1;i++){
//     console.log(entiers1[i])
// };

// //challenge 2
// const nombre1=prompt("entrez le nombre des éléments : ");
// let elements1=[];
// for(i=0;i<=nombre1-1;i++){
//     elements1.push(prompt(`entrez l élément ${i+1} : `));
    
// };
// for(i=0;i<=nombre1-1;i++){
//    console.log(elements1[i])
    
// };
// //challenge 3
// const nombre2=prompt("entrez le nombre des éléments : ");
// let elements2=[];
// let somme=0;
// for(i=0;i<=nombre2-1;i++){
//     elements2.push(Number(prompt(`entrez l élément ${i+1} :`)));
//     somme+=elements2[i];
// };
// console.log(somme);
// //challenge 4
// const nombre3=prompt("entrez le nombre des éléments : ");
// let entiers2=[];
// for(i=0;i<=nombre3-1;i++){
//     entiers2.push(Number(prompt(`entrez l élément ${i+1}`)));

// };
// let max=entiers2[0];
// for(i=0;i<=nombre3-1;i++){
//     if(entiers2[i]>max){
//         max=entiers2[i];
//     }

// };
// console.log(max);
// //challenge 5
// const nombre4=prompt("entrez le nombre des éléments : ");
// let entiers3=[];
// for(i=0;i<=nombre4-1;i++){
//     entiers3.push(Number(prompt(`entrez l élément ${i+1}`)));

// };
// let min=entiers3[0];
// for(i=0;i<=nombre4-1;i++){
//     if(entiers2[i]<max){
//         min=entiers2[i];
//     };

// };
// console.log(min);
// // challenge 6
// const entiers4=[];
// const nombre5=prompt("entrez le nombre des élements : ");
// const facteur=prompt("entrez le facteur de multiplication : ");
// for(i=0;i<nombre5;i++){
//     entiers4.push(Number(prompt(`entrez l élément ${i+1} : `))*facteur);

// };
// console.log(entiers4);


// //challenge 7
// const entiers5=[];
// const nombre6=prompt("entrez le nombre des éléments : ");
// for(i=0;i<nombre6;i++){
//     entiers5.push(prompt(`entrez l élément ${i+1} : `))
// };
// console.log(entiers5);
// let min;
// for(i=0;i<nombre6;i++){
//     for(j=i+1;j<nombre6;j++){
//         if(entiers5[i]>=entiers5[j]){
//             min=entiers5[i];
//             entiers5[i]=entiers5[j];
//             entiers5[j]=min;
            
//         };
//     }
// };
// console.log(entiers5);

// //challenge 8
// const tabl1=[5,"amina",true,2023];
// const tabl2=tabl1;
// for(i=0;i<tabl1.length;i++){
//     console.log(tabl1[i])
// };
// for(i=0;i<tabl2.length;i++){
//     console.log(tabl2[i])
// };

// //challenge 9
// const entiers6=[1,2,3,4,5];
// console.log(entiers6);
// let invers=[];
// for(i=entiers6.length-1;i>=0;i--){
//     invers.push(entiers6[i]);
// };
// console.log(invers);

// //challenge 10
// const entiers7=[];
// const nombre_elem=prompt("entrez le nombre des éléments : ");
// for(i=0;i<nombre_elem;i++){
//     entiers7.push(Number(prompt(`entrez l élément ${i+1} : `)));
// };
// let est_exist=false;
// const elem=prompt("entrez l élément qui vous voulez rechercher : ");
// for(i=0;i<nombre_elem;i++){
//     if(entiers7[i]==elem){
//          est_exist=true
//     }
    
// }
// if(est_exist){
//     console.log(`l'element est exist`)
// }
// else{
//     console.log(`${elem} n'exist pas`)
// }

// //challenge 11
// let tabl3=[];
// let nombre7=prompt("entrez le nombre des élément : ");
// for(i=0;i<nombre7;i++){
//     tabl3.push(prompt(`entrez l élément ${i+1} : `))
// }
// console.log(tabl3);
// let valeur1=prompt("entrez la valeur que vous voulez changer : ");
// let valeur2=prompt(`entrez la valeur qui remplace la valeur ${valeur1} `);
// console.log(tabl3);
// for(i=0;i<tabl3.length;i++){
//     if(tabl3[i]==valeur1){
//         tabl3[i]=valeur2
//     }
// }
// console.log(tabl3);

// //challenge 12
// const nombre8=prompt("entrez le nombre des éléments : ")
// const tabl4=[];
// for(i=0;i<nombre8;i++){
//     tabl4.push(prompt(`entrez l élément ${i+1} : `))
// };
// console.log(tabl4)
// for(i=0;i<tabl4.length;i++){
//     if(tabl4[i]%2==0){
//         console.log(tabl4[i])
//     }
// }

// //challenge 13
// const nombre9=prompt("entrez le nombre des éléments : ")
// const tabl5=[];
// for(i=0;i<nombre9;i++){
//     tabl5.push(prompt(`entrez l élément ${i+1} : `))
// };
// console.log(tabl5)
// for(i=0;i<tabl5.length;i++){
//     if(tabl5[i]%2!=0){
//         console.log(tabl5[i])
//     }
// }

// //challenge 14
// const nombre10=prompt("rntrez le nombre des éléments : ");
// const tabl6=[];
// let somme=0;
// for(i=0;i<nombre10;i++){
//     tabl6.push(Number(prompt(`entrez l élément ${i+1} : `)));
//     somme=somme+tabl6[i]
// }
// let moyenne=somme/Number(nombre10);
// console.log(moyenne);

//challenge 15
const nombre11=prompt("entrez le nombre des éléments : ");
const tab1=[];
const tab2=[];
const tab_fusionee=[];
for(i=0;i<nombre11;i++){
    tab1.push(prompt(`entrez l élément ${i+1} de tableau 1 : `));
    tab_fusionee.push(tab1[i])
};
for(i=0;i<nombre11;i++){
    tab2.push(prompt(`entrez l élément ${i+1} de tableau 2 : `));
    tab_fusionee.push(tab2[i])
};
console.log(tab_fusionee)

// function commun(a,b){
//     let result=[];
//     if(a>b){
//         for(i=1;i<=a;i++){
//             if(a%i==0 && b%i==0){
//                 result.push(i);
//             }
//         }
//         return result
//     }else{
//         for(i=1;i<=b;i++){
//             if(a%i==0 && b%i==0){
//                 result.push(i);
                
//             }
//         };
//         return result
//     }
// };
// console.log(commun(9,18))