let wordToGuess = mots[Math.floor(Math.random() * mots.length)];
let wordGuessing = new Array(wordToGuess.length);
wordGuessing.fill("_");
const DIV_WTG = document.getElementById("wordToGuess");
const INPUT_LETTER = document.getElementById("letter");
const DIV_INDICATIONS = document.getElementById("indication");
const DIV_LETTERS_USED = document.getElementById("letterUsed");
const IMG_HANGMAN = document.getElementById("hangman");

let lettersAlreadyUsed = [];
let errors = 0;
const LOSE_ERRORS = 7;
initGame();

DIV_WTG.textContent = wordGuessing.join(" ");
INPUT_LETTER.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		const userLetter = INPUT_LETTER.value.toUpperCase();
		const REGEX1LETTRE = /^[a-z]$/i;
		if (
			REGEX1LETTRE.test(userLetter) &&
			!lettersAlreadyUsed.includes(userLetter)
		) {
			if (wordToGuess.includes(userLetter)) {
				lettersAlreadyUsed.push(userLetter);
				for (const indice of wordToGuess) {
					if (wordToGuess[indice === userLetter]) {
						wordGuessing[indice] = userLetter;
					}
				}
				DIV_WTG.innerText = wordGuessing.join(" ");
				DIV_INDICATIONS.textContent = `la lettre ${userLetter} est bien présente dans le mot`;
				INPUT_LETTER.value = "";
			} else {
				errors++;
				IMG_HANGMAN.src = `"./Images/pendu${errors}.png"`;
				DIV_INDICATIONS.textContent = "La lettre n'est pas dans le mot";
			}
			if (errors === LOSE_ERRORS) {
				DIV_INDICATIONS.innerText = "Loser";
				DIV_WTG.innerText = wordToGuess.split().join(" ");
				INPUT_LETTER.disabled = true;
			}
			if (!wordGuessing.includes("_")) {
				DIV_INDICATIONS.innerText = "Bien joué";
				INPUT_LETTER.disabled = true;
			}
		} else {
			if (REGEX1LETTRE.test(userLetter)) {
				DIV_INDICATIONS.innerText = "Vous n'avez pas entré une lettre";
			} else {
				DIV_INDICATIONS.textContent = "Vous avez déjà proposé cette lettre";
			}
		}
	}
});

function initGame() {
	wordToGuess = mots[Math.floor(Math.random() * mots.length)];
	wordGuessing = new Array(wordToGuess.length);
	wordGuessing.fill("_");
	DIV_WTG.textContent = wordGuessing.join(" ");
	lettersAlreadyUsed = [];
	errors = 0;
	DIV_INDICATIONS.innerText = "Entrez une lettre";
	IMG_HANGMAN.src = "./Images/pendu0.png";
	INPUT_LETTER.disabled = false;
}
