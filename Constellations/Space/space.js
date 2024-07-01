const IMG_CONSTELLATION = document.getElementById("imgConstellation");
const PREVIOUS = document.getElementById("previous");
const NEXT = document.getElementById("next");
const jsonAPi = "http://localhost:3000/";

// let arrayOfImages = [
// 	"../images/aries-constellation-01.jpg",
// 	"../images/taurus.jpg",
// ];

// let currentIndex = 0;

// NEXT.addEventListener("click", () => {
// 	currentIndex++;
// 	if (currentIndex === arrayOfImages.length) {
// 		currentIndex = 0;
// 	}
// 	IMG_CONSTELLATION.src = arrayOfImages[currentIndex];
// });

// PREVIOUS.addEventListener("click", () => {
// 	currentIndex--;
// 	if (currentIndex === 0) {
// 		currentIndex = 0;
// 	}
// 	IMG_CONSTELLATION.src = arrayOfImages[currentIndex];
// });

const getConstellations = async () => {
	try {
		const res = await axios.get(jsonAPi + "constellations");
		return res.data;
	} catch (error) {}
};

const fetchImages = async () => {
	const data = await getConstellations();
	return data;
};

let currentIndex = 0;

NEXT.addEventListener("click", async () => {
	try {
		currentIndex++;
		const arrayOfImages = await fetchImages();
		console.log(arrayOfImages.length);

		IMG_CONSTELLATION.src = arrayOfImages[currentIndex].image;
		if (currentIndex === arrayOfImages.length) {
			currentIndex = 0;
			IMG_CONSTELLATION.src = arrayOfImages[currentIndex].image;
		}
	} catch (error) {
		console.error(error);
	}
});

PREVIOUS.addEventListener("click", async () => {
	try {
		currentIndex--;
		const arrayOfImages = await fetchImages();
		console.log(arrayOfImages);
		if (currentIndex === 0) {
			currentIndex = 0;
		}

		IMG_CONSTELLATION.src = arrayOfImages[currentIndex].image;
	} catch (error) {
		console.error(error);
	}
});
