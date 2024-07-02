const IMG_CONSTELLATION = document.getElementById("imgConstellation");
const PREVIOUS = document.getElementById("previous");
const NEXT = document.getElementById("next");
const jsonAPi = "http://localhost:3000/";
const divConstellationName = document.getElementById("constellationName");
const hubble = document.getElementById("hubble");
const modalHubble = document.getElementById("modalHubble");
const burgerMenu = document.getElementById("burgerMenu");

const getConstellations = async () => {
	try {
		const res = await axios.get(jsonAPi + "constellations");
		return res.data;
	} catch (error) {}
};

let currentIndex = 0;

PREVIOUS.addEventListener("pointerup", async () => {
	try {
		currentIndex--;
		const arrayOfCOnstellations = await getConstellations();

		if (currentIndex < 0) {
			currentIndex = arrayOfCOnstellations.length - 1;
		}

		IMG_CONSTELLATION.src = arrayOfCOnstellations[currentIndex].image;
		divConstellationName.innerText = arrayOfCOnstellations[currentIndex].name;
	} catch (error) {
		console.error(error);
	}
});

NEXT.addEventListener("pointerup", async () => {
	try {
		currentIndex++;
		const arrayOfCOnstellations = await getConstellations();

		if (currentIndex === arrayOfCOnstellations.length) {
			currentIndex = 0;
		}
		IMG_CONSTELLATION.src = arrayOfCOnstellations[currentIndex].image;
		divConstellationName.innerText = arrayOfCOnstellations[currentIndex].name;
	} catch (error) {
		console.error(error);
	}
});
const getNasaImage = async () => {
	const res = await axios.get(nasaAPI);
	return res.data;
};

hubble.addEventListener("pointerup", async () => {
	const modalHubbleContent = document.querySelector(".modalHubbleContent");
	modalHubbleContent.innerHTML = "";
	const imageOfSpace = await getNasaImage();
	modalHubble.style.display = "block";
	const imageToDisplay = document.createElement("img");
	imageToDisplay.src = imageOfSpace.hdurl;
	modalHubbleContent.append(imageToDisplay);
});

window.addEventListener("pointerup", () => {
	modalHubble.style.display = "none";
});

burgerMenu.addEventListener("pointerup", () => {});
