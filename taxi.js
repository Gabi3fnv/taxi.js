"use strict";
// Exo 1 : Le taxi
// John essaie de rentrer chez lui en taxi.
// Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
// Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
// Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
// rouges de chez lui.
// À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
// Deux possibilités de fin :
// - Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
// qu’il lui a fallu x changements de taxi pour y arriver
// - Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
// Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
// Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
// Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements

let hero="John";
let SanteMentale = 10;
let nbEssais = 0;
let feuxRouges = 30; //commencer à 30 feux rouges possibles//
let nbChangementdetaxis = 0;

let musiques=[];
musiques.push('Anissa - Wejdene','Got The Life - Korn','Despacito - Luis Fonsi','Hysteria - Muse','Djomb - Bosh'); //index 0, 1, 2, 3, 4


function radio() {
  nbEssais++;

    const musiqueChoisie = musiques[Math.floor(Math.random() * musiques.length)];//générateur de musique aléatoire 
  
    // Simuler les effets de chaque porte.
    if (musiqueChoisie == musiques[0]) { //si la musique choisie est anissa (index 0 = anissa)
      nbChangementdetaxis ++; //dès qu'il entend cette musique il change de taxi
      SanteMentale -=1;} //anissa fait perdre 1pts de sante mentale

  return musiqueChoisie; 
  }


while (SanteMentale >0 && feuxRouges >0){
  const musiqueChoisie = radio();
  console.log(`La musique qui se joue est ${musiqueChoisie}. Santé mentale actuelle : ${SanteMentale}`);
  feuxRouges-- //réduire le nombre de feux rouges à chaque tour (pour consommer les 30 au max)
  console.log(`Il lui a fallu ${nbChangementdetaxis} changements de taxis pour y arriver`);
if (SanteMentale == 0) {
  console.log("Explosion");
  break;
} 
}

console.log("Jojo a terminé l'aventure avec une santé mentale finale de : " +SanteMentale);

console.log(`Nombre de feux rouges effectués : ${nbEssais}`);

//comment augmenter la proba que anissa tombe? il est très rare de tomber à 0 de santé mentale
