let prompt=require('prompt-sync')();
// //challenge 1
// const chaine=prompt("entrez entrez  un text :");
// console.log(chaine);

// // challenge 2

// const text=prompt("entrez un text : ");
// let i=0;
// let a=0;
// do{
//     if(text[i]!=" "){
//         a++
//     };
//     i++;
// }while(text[i]!=undefined);
// console.log(a);

// //challenge 3
// const chaine1=prompt("entrez la premiere chaine du caractere :");
// const chaine2=prompt("entrez la deuxieme chaine du caractere :");
// console.log(chaine1+" "+chaine2);

// //challenge 4
// const chaine3=prompt("entrez la premiere chaine du caractere :");
// const chaine4=prompt("entrez la deuxieme chaine du caractere :");
// if(chaine3==chaine4){
//     console.log("ils sont identiques");
// }else{
//     console.log("ils sont differents");
// };
// //challenge 5
// const chaine5=prompt("entrez une chaine du caractere : ");
// // for(i=chaine5.length;i>=0;i--){
// //     console.log(chaine5[i]);
// // };
// x="youcode";
// s=""
// for(i=1;i<=x.length-1;i++){
//     s=s+x[i]
// }
// console.log(x[0].toUpperCase()+s);

// //challenge 6
// const chaine6=prompt("entrez une chaine des caractere '6'");
// const caractere=prompt("entrez un caractere : ");
// let concur=0;
// for(i=0;i<=chaine6.length;i++){
//     if(chaine6[i]==caractere){
//         concur++
//     }
// };
// console.log(concur);

// //challenge 7
// const chaine7=prompt("entrez une chaine de caractere :");
// console.log(chaine7.toUpperCase());

// //challenge 8
// const chaine8=prompt("entrez une chaine de caractere :");
// console.log(chaine8.toLowerCase());
//challenge 9

const chaine9=prompt("entrez une chaine de caractere :");
let a=0;
for(i=0;i<=chaine9.length-1;i++){
    if(chaine9[i]==" "){
        continue
    }else{
        a++;
    }
};
console.log(a)
// //challenge 10
// const chaine10=prompt("entrez une chaine du caractere : ");
// const sous_chaine=prompt("entrez une sous chaine :");
// if(chaine10.includes(sous_chaine)){
//     console.log("il s'existe ")
// }else{
//     console.log("il n'existe pas")
// };

// //challenge palindrome
// //methode 1
// const chaine11=prompt("entrez un mot :")
// let inverse=""
// for(i=chaine11.length-1;i>=0;i--){
//     inverse=inverse+chaine11[i];
// };
// if(chaine11===inverse){
//     console.log(`${chaine11} est palindrome`)
// }
// else{
//     console.log(`${chaine11} n'est pas palindrome`)
// };
// //methode 2
// let i=0;
// let j=chaine11.length-1;
// est_palnidrome=true;
// do{
//     if(chaine11[i]!=chaine11[j]){
//         est_palnidrome=false;
//     };
//     i++;
//     j--;
// }while(i<=chaine11.length-1 && j>=0);
// if(est_palnidrome){
//      console.log(`${chaine11} est palindrome`)
// }else{
//     console.log(`${chaine11} n'est pas palindrome`)
// };