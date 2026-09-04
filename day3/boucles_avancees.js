let prompt=require('prompt-sync')();
// //challenge 1
// const nombre1=prompt("entrez un nombre entier : ");
// for(let i=10;i>=1;i=i-1){
//     console.log(`${i}*${nombre1}=${i*nombre1}`);
// };
//challenge 2
const nombre2=prompt("entrez un nombre entier : ")
for(let i=1;i<=nombre2;i++){
    for(let j=1;j<=nombre2-1;j++){
        if(j%2!=0){
           process.stdout.write("Hello ");
        }
    };
};