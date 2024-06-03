// L'objet Date

// Plusieurs façons de l'initialiser
//Date du jour
const TODAY = new Date(); 
console.log(TODAY);

//Date à partir d'une chaine de caractère
const BIRTHDAY_AURELIEN = new Date("1989-11-01");
console.log(BIRTHDAY_AURELIEN);

//Dates à partir d'entiers, année, mois-1, jour (Met h,m,s,ms à 0)
const BIRTHDAY_AUDE = new Date(1989, 9, 16);
console.log(BIRTHDAY_AUDE);
//Dates à partir d'entiers, année, mois-1, jour, heure, minute, seconde, millisecondes
const BIRTHDAY_AUDE_FULL_PRECISION = new Date(1989, 9, 16, 15, 24, 2, 234);

//Dates à partir d'un entier : Créé une date à partir du 1/1/1970 et ajoute le nombre de ms en param
const DATE_AU_PIF = new Date(118181818188);
console.log(DATE_AU_PIF);

// Particularité :
// En Js, les mois commencent à 0 et se terminent à 11
console.log( BIRTHDAY_AUDE.getMonth() ); 
// Les jours de la semaine commencent à 0 et terminent à 6 et commencent le dimanche
console.log( BIRTHDAY_AUDE.getDay() );
console.log( new Date(1984, 0, 1).getDay() ); 
// La date par défaut sur laquelle se base Js -> 1/1/1970

// Les fonctions utiles :
// Les get
// Les deux au dessus 👆
console.log(BIRTHDAY_AUDE.getFullYear()); //Donne l'année
console.log(BIRTHDAY_AUDE.getDate()); //Donne le jour du mois (entre 1 et 31)
// Aussi dispo pour Heure-Min-Sec-Msec
console.log(BIRTHDAY_AUDE.getTime()); //Temps écoulé entre le 1/1/1970 et votre date (en ms)

// Les set // dispo avec tous les get vus au dessus
// TODAY.setFullYear(3025);
// console.log(TODAY);
// Si je veux ajouter 8 jours :
TODAY.setDate( TODAY.getDate() + 8); 
// Si on dépasse le max du mois, passera automatiquement à la suite (plus besoin de verif)
console.log(TODAY);

// Formatage :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales
console.log( TODAY.toLocaleDateString("fr-ca") ); //Soit avec juste une locale
const dateOptions = {
    weekday : "long",
    day : "numeric",
    month : "long",
    year : "numeric"
    
}
console.log( TODAY.toLocaleDateString("en-US", dateOptions ) );

// Malheureusement pas de formatage de date plus avancé où on pourrait choisir ordre, séparateur contrairement à bcp d'autres langages... peut-être un jour 🙏

// Librairies JS très utilisées pour gérer les dates
// MomentJs : Plus mise à jouer, dépréciée. Vous risquez de la rencontrer dans d'anciens projets puisqu'elle est encore fonctionnelle en l'état
// DayJs : Celle qui a succédé à Moment (en gardant les mêmes fonctions) : https://day.js.org/

// ---------------------------------------------------------------
// Utilisation de DayJs (après l'avoir soit installé, soit mis le CDN dans le HTML)
// https://day.js.org/docs/en/display/format

// Enfin notre fonction de formatage rêvée !
dayjs.locale("fr");

console.log( dayjs().format('DD ~ MM ~ YYYY') );
console.log( dayjs().format('dddd'));

// Get + Set équivalent
console.log( dayjs().month() ); // get : attention, ça reste mois -1
console.log( dayjs().month(2).format() ); // set : //

// Ajouter X jours/mois/année/etc/etc/etc
console.log( dayjs().add(8, "day").format() );
console.log( dayjs().subtract(1, "month").format() );

