const arrayOfColor = ["jaune", "bleu", "rouge", "vert", "blanc", "noir"];
const colorsPressed = document.querySelectorAll(".button");
const playerSpace = document.getElementById("playerSpace");
const submit = document.getElementById("submit");
const eraseBoard = document.getElementById("eraseBoard");
const eraseRow = document.getElementById("eraseRow");
let boardGame = [];
let hintBoard = [];
let numberOftries = 0;

const setUpSpace = () => {
	for (let i = 1; i <= 12; i++) {
		const fullLine = document.createElement("div");
		fullLine.className = "fullLine";
		// player
		const newRow = document.createElement("div");
		newRow.className = "emptyRow";
		const emptySpace1 = document.createElement("div");
		emptySpace1.className = " color emptySpace";
		const emptySpace2 = document.createElement("div");
		emptySpace2.className = " color emptySpace";
		const emptySpace3 = document.createElement("div");
		emptySpace3.className = " color emptySpace";
		const emptySpace4 = document.createElement("div");
		emptySpace4.className = " color emptySpace";
		// Hint
		const newHintRow = document.createElement("div");
		newHintRow.className = "hint";
		const emptyHintSpace1 = document.createElement("div");
		emptyHintSpace1.className = "emptyHint";
		const emptyHintSpace2 = document.createElement("div");
		emptyHintSpace2.className = "emptyHint";
		const emptyHintSpace3 = document.createElement("div");
		emptyHintSpace3.className = "emptyHint";
		const emptyHintSpace4 = document.createElement("div");
		emptyHintSpace4.className = "emptyHint";
		newHintRow.append(
			emptyHintSpace1,
			emptyHintSpace2,
			emptyHintSpace3,
			emptyHintSpace4
		);

		newRow.append(emptySpace1, emptySpace2, emptySpace3, emptySpace4);
		boardGame.push(newRow);
		hintBoard.push(newHintRow);
		fullLine.append(newRow, newHintRow);
		playerSpace.append(fullLine);
	}
};

// exercice 1
const createArrayOfRandomColor = (arrayOfColor) => {
	const arrayOfRandomColor = [];
	for (let i = 0; i <= 3; i++) {
		arrayOfRandomColor[i] = arrayOfColor[Math.floor(Math.random() * 6)];
	}
	return arrayOfRandomColor;
};

// exercice 3
const isTheColorRight = (
	arrayFromGame,
	propositionPlayer,
	arrayOfCoulorFound
) => {
	let numberOfRightColor = 0;

	let rowPosition = numberOftries;
	let childPosition = arrayOfCoulorFound.length;
	propositionPlayer.forEach((color, index) => {
		if (arrayFromGame.includes(color) && !(arrayFromGame[index] === color)) {
			numberOfRightColor++;

			hintBoard[rowPosition].children[childPosition].id = "blanc";
			childPosition++;
		}
		if (arrayFromGame.includes(color) && arrayFromGame[index] === color) {
			arrayFromGame[index] = "";
		}
	});
};

// exercice 2
const comparisonPositionRight = (arrayFromGame, propositionPlayer) => {
	let compteur = 0;
	let colorFound = [];
	let colorPlayerToBeMoreChecked = [];
	let computerColorToComparate = [];
	let rowPosition = numberOftries;
	for (let i = 0; i < arrayFromGame.length; i++) {
		if (arrayFromGame[i] === propositionPlayer[i]) {
			colorFound.push(propositionPlayer[i]);
			hintBoard[rowPosition].children[compteur].id = "rouge";

			compteur++;
		} else {
			colorPlayerToBeMoreChecked.push(propositionPlayer[i]);
			computerColorToComparate.push(arrayFromGame[i]);
		}
	}
	if (compteur === 4) {
		alert("vous avez gagné!");
		resetGame();
	}

	isTheColorRight(
		computerColorToComparate,
		colorPlayerToBeMoreChecked,
		colorFound
	);
};

// Jeu

let playerGuess = [];

let gmGame = createArrayOfRandomColor(arrayOfColor);

setUpSpace();

colorsPressed.forEach((button) => {
	button.addEventListener("click", () => {
		if (playerGuess.length < 4) {
			playerGuess.push(button.value);
			const childId = playerGuess.length - 1;

			boardGame[numberOftries].children[childId].id = button.value;
		} else {
			alert("vous ne pouvez choisir que 4 couleurs");
		}
	});
});

submit.addEventListener("click", () => {
	if (playerGuess.length < 4) {
		alert("Tu dois choisir 4 couleurs");
	} else {
		comparisonPositionRight(gmGame, playerGuess);
		console.log("IA " + gmGame);
		playerGuess = [];
		numberOftries++;
	}

	if (numberOftries === 12) {
		alert("Tu as perdu");
		resetGame();
	}
});

eraseBoard.addEventListener("click", () => {
	resetGame();
});
eraseRow.addEventListener("click", () => {
	const arraySize = boardGame[numberOftries].children.length;
	for (let i = 0; i <= arraySize - 1; i++) {
		boardGame[numberOftries].children[i].id = "";
		playerGuess = [];
	}
});

function resetGame() {
	numberOftries = 0;
	playerSpace.innerHTML = "";
	gmGame = createArrayOfRandomColor(arrayOfColor);
	setUpSpace();
}
