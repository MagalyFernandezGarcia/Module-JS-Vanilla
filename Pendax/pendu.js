const WORDTOGUESS = document.getElementById("word");
const PLAYER_GUESS = document.getElementById("input");

const PLAYED = document.getElementById("played");
const VICTORY = document.getElementById("victory");
const LOOSE = document.getElementById("loose");
const RETRY = document.querySelectorAll(".retry");
const HANGED = document.getElementById("potence");
const ERASED = document.getElementById("erased");
const WIN_MODAL = document.getElementById("winModal");
const LOOSE_MODAL = document.getElementById("looseModal");
const RETRY_BTN = document.getElementById("retryBtn");

let randomWord = mots[Math.floor(Math.random() * mots.length + 1)];

let nbrOfLives = 6;
let letterUsed = [];

let hiddenWord = randomWord.replace(/./g, "_");

if (localStorage.getItem("win") !== null) {
	VICTORY.innerText = localStorage.getItem("win");
} else {
	VICTORY.innerText = 0;
}
if (localStorage.getItem("loose") !== null) {
	LOOSE.innerText = localStorage.getItem("loose");
} else {
	LOOSE.innerText = 0;
}

WORDTOGUESS.innerText = hiddenWord;

PLAYER_GUESS.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		let letterGuessed = PLAYER_GUESS.value.toUpperCase();
		let newHiddenWord = "";
		let isLestterOk = false;

		if (
			isNaN(letterGuessed) &&
			letterGuessed.length === 1 &&
			letterGuessed !== ""
		) {
			verifyLetter(letterGuessed);

			for (let i = 0; i < randomWord.length; i++) {
				if (letterGuessed === randomWord[i]) {
					newHiddenWord += letterGuessed;
					isLestterOk = true;
				} else {
					newHiddenWord += hiddenWord[i];
				}
			}
			if (isLestterOk === false) {
				letterUsed.push(letterGuessed);
				PLAYED.innerText = letterUsed;
				nbrOfLives--;
				switch (nbrOfLives) {
					case 5:
						HANGED.src = "./Images/pendu1.png";
						break;
					case 4:
						HANGED.src = "./Images/pendu2.png";
						break;
					case 3:
						HANGED.src = "./Images/pendu3.png";
						break;
					case 2:
						HANGED.src = "./Images/pendu4.png";
						break;
					case 1:
						HANGED.src = "./Images/pendu5.png";
						break;
					case 0:
						HANGED.src = "./Images/pendu6.png";
						break;
				}
			} else {
				isLestterOk = false;
			}
			hiddenWord = newHiddenWord;
			WORDTOGUESS.innerText = hiddenWord;

			PLAYER_GUESS.value = "";

			if (hiddenWord === randomWord) {
				WIN_MODAL.style.display = "block";
				VICTORY.innerText = +1;
				localStorage.setItem("win", VICTORY.innerText);
				retry();
			}
			if (nbrOfLives <= 0) {
				LOOSE_MODAL.style.display = "block";
				LOOSE.innerText = +1;
				localStorage.setItem("loose", LOOSE.innerText);
			}
		} else {
			alert("Il faut rentrer une lettre");
			PLAYER_GUESS.value = "";
		}
	}
});

RETRY.forEach((button) => {
	button.addEventListener("click", () => {
		retry();
	});
});

function retry() {
	nbrOfLives = 6;
	PLAYED.innerText = "";
	randomWord = mots[Math.floor(Math.random() * mots.length + 1)];
	hiddenWord = randomWord.replace(/./g, "_");
	WORDTOGUESS.innerText = hiddenWord;
	WIN_MODAL.style.display = "none";
	LOOSE_MODAL.style.display = "none";
	HANGED.src = "./Images/pendu0.png";
}

function verifyLetter(guess) {
	for (let i = 0; i < letterUsed.length; i++) {
		if (guess === letterUsed[i]) {
			alert("vous avez déjà essayé cette lettre");
			letterUsed.splice(i, 1);
			nbrOfLives++;
		}
	}
}

RETRY_BTN.addEventListener("click", () => {
	if (
		letterUsed.length > 0 ||
		HANGED.getAttribute("src") !== "./Images/pendu0.png"
	) {
		alert("Tricheur! Tu prends une défaite en pénalité");
	}
	for (let i = 0; i < hiddenWord.length; i++) {
		if (hiddenWord[i] !== "_") {
			alert("Tricheur! Tu prends une défaite en pénalité");
		}
	}

	LOOSE.innerText++;
	localStorage.setItem("loose", LOOSE.innerText);
	retry();
});

ERASED.addEventListener("click", () => {
	localStorage.clear();
	retry();
	VICTORY.innerText = 0;
	LOOSE.innerText = 0;
});
// PLAYER_GUESS.addEventListener("keypress", (e) => {
// 	if (e.key === "Enter") {
// 		let letterGuessed = PLAYER_GUESS.value.toUpperCase();
// 		let newHiddenWord = "";
// 		let isLestterOk = false;

// 		for (let i = 0; i < randomWord.length; i++) {
// 			if (letterGuessed === randomWord[i]) {
// 				newHiddenWord += letterGuessed + " ";
// 				isLestterOk = true;
// 			} else {
// 				if (hiddenWord[2 * i] === "_") {
// 					newHiddenWord += "_ ";
// 				} else {
// 					newHiddenWord += hiddenWord[2 * i] + " ";
// 				}
// 			}
// 		}
// 		if (isLestterOk === false) {
// 			letterUsed.push(letterGuessed);
// 			PLAYED.innerText = letterUsed;
// 			nbrOfLives--;
// 			LIFE.innerText = nbrOfLives;
// 		} else {
// 			isLestterOk = false;
// 		}

// 		hiddenWord = newHiddenWord;
// 		WORDTOGUESS.innerText = hiddenWord;
// 		console.log(hiddenWord);

// 		PLAYER_GUESS.value = "";
// 	}
// });

console.log(randomWord);
