//challenge 1
const personne={
    nom:"lakhddar",
    prenom:"Amina",
    age:20
}
console.log(`Nom : ${personne.nom}`);
console.log(`Prenom : ${personne.prenom}`);
console.log(`Age : ${personne.age}`);

//challenge 2
const etudiant={
    nom:"Lakhddar",
    prenom:"Amina",
    notes:[15,12,20]
};
console.log(`Nom : ${etudiant.nom}`);
console.log(`Prenom : ${etudiant.prenom}`);
for(i=0;i<etudiant.notes.length;i++){
    console.log(`note ${i+1}:${etudiant.notes[i]}`)
}

//challenge 3
const rectangle={
    longueur:15,
    largeur:27
};

function air(rec){
    return rec.longueur*rec.largeur
};
console.log(`l'air du rectangle : ${air(rectangle)}`);

//challenge 4
const point={
    x:2,
    y:0
};
console.log(`x=${point.x}, y=${point.y}`);
point.x=3;
point.y=1;
console.log(`x=${point.x}, y=${point.y}`);

//challenge 5

const livre={
    nom:"L'étranger",
    auteur:"Albert Camus",
    annee:1942
};
function info_livre(L){
    console.log(`nom du livre:${L.nom} , son écrivain est :${L.auteur} , et l'année de pub:${L.annee}`)
}
info_livre(livre);
