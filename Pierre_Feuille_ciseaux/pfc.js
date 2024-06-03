const STONE = document.getElementById("stone")
const LEAF = document.getElementById("leaf")
const SCISSORS = document.getElementById("scissors")
const IA_IMG = document.getElementById("iaImg")
const RESULT = document.getElementById("result")
const PLAYER_SCORE = document.getElementById("playerScore")
const IA_SCORE = document.getElementById("iaScore")
const TOTAL_PLAYER = document.getElementById("totalPlayer")
const TOTAL_IA = document.getElementById("totalIa")
const ARRAY_OF_IMG = ["./images/hand-fist-solid.svg", "./images/hand-regular.svg", "./images/hand-scissors-regular.svg"]
const REPLAY = document.getElementById("replay")
const ERASED = document.getElementById("erased")





IA_SCORE.innerText = 0
PLAYER_SCORE.innerText = 0


if (localStorage.getItem("player") !== null) {
    TOTAL_PLAYER.innerText = localStorage.getItem("player")

} else {
    TOTAL_PLAYER.innerText = 0
}
if (localStorage.getItem("ia") !== null) {
    TOTAL_IA.innerText = localStorage.getItem("ia")

} else {
    TOTAL_IA.innerText = 0
}








function setIaImg() {

    let randomNumber = Math.floor(Math.random() * 3)
    IA_IMG.src = ARRAY_OF_IMG[randomNumber]

}

function iaHand() {

    let currentIndex = 0;


    const changeImgInterval = setInterval(() => {
        const nextImg = ARRAY_OF_IMG[currentIndex];
        IA_IMG.src = nextImg;
        currentIndex = (currentIndex + 1) % ARRAY_OF_IMG.length;
    },
        300);


    setTimeout(() => {
        clearInterval(changeImgInterval); setIaImg();
    }, 2000);




}


// function verifyVictory() {

//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[0] && isStoneClicked === true) {
//         RESULT.innerText = "Egalité"
//         isStoneClicked = false
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[1] && isStoneClicked === true) {
//         RESULT.innerText = "Perdu"
//         IA_SCORE.innerText++
//         isStoneClicked = false
//         if (IA_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)

//         }
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[2] && isStoneClicked === true) {
//         RESULT.innerText = "Gagné"
//         PLAYER_SCORE.innerText++
//         isStoneClicked = false
//         if (PLAYER_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)
//         }
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[0] && isLeafClicked === true) {
//         RESULT.innerText = "Gagné"
//         PLAYER_SCORE.innerText++
//         isLeafClicked = false
//         if (PLAYER_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)
//         }
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[1] && isLeafClicked === true) {
//         RESULT.innerText = "Egalité"
//         isLeafClicked = false
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[2] && isLeafClicked === true) {
//         RESULT.innerText = "Perdu"
//         IA_SCORE.innerText++
//         isLeafClicked = false
//         if (IA_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)

//         }
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[0] && isScissorsClicked === true) {
//         RESULT.innerText = "Perdu"
//         IA_SCORE.innerText++
//         isScissorsClicked = false
//         if (IA_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)

//         }
//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[1] && isScissorsClicked === true) {
//         RESULT.innerText = "Gagné"
//         PLAYER_SCORE.innerText++
//         isScissorsClicked = false
//         if (PLAYER_SCORE.innerText == 3) {
//             STONE.removeEventListener("click", handleStoneClick)
//             LEAF.removeEventListener("click", handleLeafClick)
//             SCISSORS.removeEventListener("click", handleScissorsClick)
//         }

//     }
//     if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[2] && isScissorsClicked === true) {
//         RESULT.innerText = "Egalité"
//         isScissorsClicked = false
//     }

// }
function victoryCorrection() {
    if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[2] && isScissorsClicked === true ||
        IA_IMG.getAttribute("src") === ARRAY_OF_IMG[1] && isLeafClicked === true ||
        IA_IMG.getAttribute("src") === ARRAY_OF_IMG[0] && isStoneClicked === true) {
        RESULT.innerText = "Egalité"

    } else if (IA_IMG.getAttribute("src") === ARRAY_OF_IMG[0] && isLeafClicked === true ||
        IA_IMG.getAttribute("src") === ARRAY_OF_IMG[2] && isStoneClicked === true ||
        IA_IMG.getAttribute("src") === ARRAY_OF_IMG[1] && isScissorsClicked === true) {
        RESULT.innerText = "Gagné"
        PLAYER_SCORE.innerText++

        if (PLAYER_SCORE.innerText == 3) {
            STONE.removeEventListener("click", handleStoneClick)
            LEAF.removeEventListener("click", handleLeafClick)
            SCISSORS.removeEventListener("click", handleScissorsClick)
        }

    } else {
        RESULT.innerText = "Perdu"
        IA_SCORE.innerText++
        if (IA_SCORE.innerText == 3) {
            STONE.removeEventListener("click", handleStoneClick)
            LEAF.removeEventListener("click", handleLeafClick)
            SCISSORS.removeEventListener("click", handleScissorsClick)

        }

    }
    isLeafClicked = false
    isScissorsClicked = false
    isStoneClicked = false
}



let isStoneClicked = false
let isLeafClicked = false
let isScissorsClicked = false



function addTotal() {
    if (PLAYER_SCORE.innerText == 3) {
        TOTAL_PLAYER.innerText++
    }

    if (IA_SCORE.innerText == 3) {
        TOTAL_IA.innerText++
    }
}


function handleStoneClick() {
    iaHand()
    setTimeout(victoryCorrection, 2001)
    isStoneClicked = true


}


function handleLeafClick() {
    iaHand()
    setTimeout(victoryCorrection, 2001)
    isLeafClicked = true

}

function handleScissorsClick() {
    iaHand()
    setTimeout(victoryCorrection, 2001)
    isScissorsClicked = true

}


STONE.addEventListener("click", handleStoneClick)


LEAF.addEventListener("click", handleLeafClick)

SCISSORS.addEventListener("click", handleScissorsClick)


REPLAY.addEventListener("click", () => {
    addTotal()
    refresh()
})

function refresh() {
    PLAYER_SCORE.innerText = 0
    IA_SCORE.innerText = 0
    RESULT.innerText = "Cliquez sur une image pour jouer"
    IA_IMG.src = "./images/question-solid.svg"
    STONE.addEventListener("click", handleStoneClick)
    LEAF.addEventListener("click", handleLeafClick)
    SCISSORS.addEventListener("click", handleScissorsClick)
    localStorage.setItem("player", TOTAL_PLAYER.innerText)
    localStorage.setItem("ia", TOTAL_IA.innerText)

}


ERASED.addEventListener("click", () => {
    localStorage.removeItem("player")
    localStorage.removeItem("ia")
    TOTAL_PLAYER.innerText = 0
    TOTAL_IA.innerText = 0
})




