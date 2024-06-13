const IMG_CONSTELLATION = document.getElementById("imgConstellation");
const PREVIOUS = document.getElementById("previous");
const NEXT = document.getElementById("next");

let arrayOfImages = [
	"../images/aries-constellation-01.jpg",
	"../images/taurus.jpg",
];

let currentIndex = 0;

NEXT.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex === arrayOfImages.length) {
		currentIndex = 0;
	}
	IMG_CONSTELLATION.src = arrayOfImages[currentIndex];
});

PREVIOUS.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex === 0) {
		currentIndex = 0;
	}
	IMG_CONSTELLATION.src = arrayOfImages[currentIndex];
});
