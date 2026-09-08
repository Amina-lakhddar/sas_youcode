// Mini-Projet : Système de Gestion de Stock dans une Librairie : 
let prompt=require(`prompt-sync`)();
//1. Ajouter un Livre au Stock
const nombre_livre=prompt("entrez le nombre des livres : ")
const livres=[];
let livre={};

for(i=0;i<nombre_livre;i++){
  livre.titre=prompt(`entrez le titre de livre ${i+1} : `);
  livre.auteur=prompt(`entrez l'auteur de livre ${i+1} : `);
  livre.prix=prompt(`entrez le prix de livre ${i+1} : `);
  livre.qt_stoxk=prompt(`entrez la quantié de livre ${i+1} : `);
  livres.push(livre);
  livre={}
};
//Afficher Tous les Livres Disponibles
for(i=0;i<livres.length;i++){
    console.log(`Livre ${i+1} titre:${livres[i].titre}, auteur: ${livres[i].auteur}, prix : ${livres[i].prix}, quantité du stock : ${livres[i].qt_stoxk}`)

}
//Mettre à Jour la Quantité d'un Livre

const ancienne_qt=prompt("entrez la quantité qui vous voulez changer : ");
const nouv_qt=prompt("entrez la nouvelle quantité : ");
const nom_qt=prompt("entrez le nom de livre qui la quantité se stock qui vous voulez changer : ");
for(i=0;i<livres.length;i++){
    if(livres[i].titre==nom_qt && livres[i].qt_stoxk==ancienne_qt){
        livres[i].qt_stoxk=nouv_qt;
    }
}
for(i=0;i<livres.length;i++){
    console.log(`Livre ${i+1} titre:${livres[i].titre}, auteur: ${livres[i].auteur}, prix : ${livres[i].prix}, quantité du stock : ${livres[i].qt_stoxk}`)

}
//Supprimer un Livre du Stock
let numero_livre=prompt("entrez le numero du livre à supprimer : ");
for(i=numero_livre-1;i<livres.length;i++){
            livres[i]=livres[i+1]
        }
livres.length--


for(i=0;i<livres.length;i++){
     console.log(`Livre ${i+1} titre:${livres[i].titre}, auteur: ${livres[i].auteur}, prix : ${livres[i].prix}, quantité du stock : ${livres[i].qt_stoxk}`)
     }

//Afficher le Nombre Total de Livres en Stock

let total_livre=0;
for(i=0;i<livres.length;i++){
    total_livre=total_livre+Number(livres[i].qt_stoxk);
};
console.log(`le nombre total des livres est : ${total_livre}`);

