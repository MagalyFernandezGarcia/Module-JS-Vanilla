// Elements dont j'ai besoin
const BTN_SHUFFLE = document.getElementById("shuffle");
// Récupérer les cards
// Solution 1 :
//const CONTAINER = document.querySelector("container");
//Les cards sont présentes dans CONTAINER.children

// Solution 2 :
const CARDS = document.querySelectorAll(".card");
console.log(CARDS);

// Ajout de l'event
BTN_SHUFFLE.addEventListener("click", () => {
   // Pour chacune des cards, je dois générer un order aléatoire et l'appliquer à la card
//    for(let i = 0; i < CARDS.length; i++){
//         console.log(CARDS[i]);
//    }

    //CARDS.forEach(card => {
    //         console.log(card);
    //    })

    for(const card of CARDS){
        //Math.random() -> génère une valeur entre 0 et 0.999999...
        //Math.random() * CARDS.length -> génère une valeur entre 0 et 4.999999

        card.style.order = Math.floor(Math.random() * CARDS.length * 2);
    }
})

