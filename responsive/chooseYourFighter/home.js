const RDM_BTN = document.getElementById("rdmBtn")

const container = document.querySelector(".cardContainer");


const BOROMIR = document.getElementById("boromir")
const SVEN = document.getElementById("sven")
const CHARLES = document.getElementById("charles")
const GANDALF = document.getElementById("gandalf")





// function verifyRand(){

//     while(BOROMIR.style.order === SVEN.style.order || CHARLES.style.order === SVEN.style.order ||GANDALF.style.order === SVEN.style.order){
//         SVEN.style.order = Math.floor(Math.random() * 3)
//     }

//     while(BOROMIR.style.order === CHARLES.style.order ||CHARLES.style.order === SVEN.style.order || GANDALF.style.order === CHARLES.style.order){
//         CHARLES.style.order = Math.floor(Math.random() * 3)
//     }
//     while(BOROMIR.style.order === GANDALF.style.order || CHARLES.style.order ===GANDALF.style.order ||GANDALF.style.order === SVEN.style.order){
//         GANDALF.style.order = Math.floor(Math.random() * 3)
//     }

//     if(BOROMIR.style.order === SVEN.style.order || CHARLES.style.order === SVEN.style.order ||GANDALF.style.order === SVEN.style.order){
//         SVEN.style.order = Math.floor(Math.random() * 3)

//     }
//     if(BOROMIR.style.order === CHARLES.style.order ||CHARLES.style.order === SVEN.style.order || GANDALF.style.order === CHARLES.style.order){
//         CHARLES.style.order = Math.floor(Math.random() * 3)

//     }
//     if(BOROMIR.style.order === GANDALF.style.order || CHARLES.style.order ===GANDALF.style.order ||GANDALF.style.order === SVEN.style.order){
//         GANDALF.style.order = Math.floor(Math.random() * 3)

//     }
   
// }




RDM_BTN.addEventListener("click", () => {
    
    for(const card of container.children){
        card.style.order = Math.floor(Math.random() * 10);
    }
    // BOROMIR.style.order = Math.floor(Math.random() * 10)
    // SVEN.style.order = Math.floor(Math.random() * 10)
    // CHARLES.style.order = Math.floor(Math.random() * 10)
    // GANDALF.style.order = Math.floor(Math.random() * 10)
    // verifyRand()
    console.log("boromir " + BOROMIR.style.order + " sven " + SVEN.style.order + " charles " + CHARLES.style.order  + " gandalf " + GANDALF.style.order  )

})