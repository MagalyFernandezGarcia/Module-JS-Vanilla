const cardAll = document.querySelectorAll(".card");
const jsonAPi = "http://localhost:3000/";

let count = 0;

const initialise = () => {
	cardAll.forEach((card) => {
		const newImg = document.createElement("img");
		newImg.src = "../../images/backCard.jpg";
		// window.addEventListener("load", () => {
		// 	newImg.src = "../../images/backCard.jpg";
		// });
		newImg.className = "imgCard";
		newImg.id = count;
		card.innerHTML = "";
		card.classList.add("back");
		card.style.display = "block";
		card.append(newImg);
		count++;
	});
	selectImg(arrayOfrandomConstellations());
};

const getConstellations = async () => {
	try {
		const res = await axios.get(jsonAPi + "constellations");
		 console.log(await res)
		// await new Promise((res) => setTimeout(() => {res()}, 3000))
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

const arrayOfrandomConstellations = async () => {
	const arrayOfConstellations = await getConstellations();

	const finalArray = [];
	for (let i = 0; i < 4; i++) {
		const newConstellation =
			arrayOfConstellations[
				Math.floor(Math.random() * arrayOfConstellations.length)
			];
		const isAlreadyIn = finalArray.some(
			(element) => element === newConstellation
		);
		if (isAlreadyIn === true) {
			i--;
		} else {
			finalArray.push(newConstellation, newConstellation);
		}
	}

	return finalArray;
};
const flipCard = (urls) => {
	console.log(urls);
	let counterClick = 0;
	cardAll.forEach((card, index) => {
		card.addEventListener("click", () => {
			counterClick++;
			const imgCard = document.getElementById(index);

			if (card.classList.contains("back")) {
				imgCard.src = urls[index];

				card.classList.remove("back");
				card.classList.add("front");
			} else {
				imgCard.src = "../../images/backCard.jpg";

				card.classList.remove("front");
				card.classList.add("back");
			}
			if (counterClick === 2) {
				compareCards();
				counterClick = 0;
			}
		});
	});
};

const selectImg = async (array) => {
	const waitedArray = await array;
	const allImgCards = document.querySelectorAll(".imgCard");
	const arrayofUrl = [];
	allImgCards.forEach((img) => {
		const random = Math.floor(Math.random() * waitedArray.length);

		// img.src = `../${waitedArray[random].imageConstellation}`;
		arrayofUrl.push(`../${waitedArray[random].imageConstellation}`);
		waitedArray.splice(random, 1);
	});
	flipCard(arrayofUrl);
};

let victoryCount = 0;
const compareCards = () => {
	const flippedCards = document.querySelectorAll(".front");

	let urlArray = [];
	flippedCards.forEach((flippedCard) => {
		const imageFlipped = flippedCard.querySelector(".imgCard");
		urlArray.push(imageFlipped.src);
	});

	if (urlArray[0] === urlArray[1]) {
		setTimeout(() => {
			flippedCards.forEach((flippedCard) => {
				flippedCard.classList.remove("front");
				flippedCard.classList.add("back");
				flippedCard.style.display = "none";
			});
		}, 1000);
		victoryCount++;
	} else {
		setTimeout(() => {
			flippedCards.forEach((flippedCard) => {
				const imageFlipped = flippedCard.querySelector(".imgCard");
				flippedCard.classList.remove("front");
				flippedCard.classList.add("back");
				imageFlipped.src = "../../images/backCard.jpg";
			});
		}, 1000);
	}

	if (victoryCount === 4) {
		const main = document.querySelector("main");
		const winTextDiv = document.createElement("h2");
		winTextDiv.innerText = "Félicitation, vous avez gagné!";
		const resetBtn = document.createElement("button");
		resetBtn.innerText = "Fermer";
		resetBtn.className = "reset";
		const winDiv = document.createElement("div");
		winDiv.className = "winDiv";
		winDiv.append(winTextDiv, resetBtn);
		main.append(winDiv);

		resetBtn.addEventListener("click", () => {
			count = 0;

			initialise();
			winDiv.style.display = "none";
		});
	}
};
initialise();
