const IMG_CONSTELLATION = document.getElementById("imgConstellation");
const PREVIOUS = document.getElementById("previous");
const NEXT = document.getElementById("next");
const jsonAPi = "http://localhost:3000/";
const divConstellationName = document.getElementById("constellationName");

const getConstellations = async () => {
	try {
		const res = await axios.get(jsonAPi + "constellations");
		return res.data;
	} catch (error) {}
};

const fetchConstellation = async () => {
	const data = await getConstellations();
	return data;
};

let currentIndex = 0;

NEXT.addEventListener("click", async () => {
	try {
		currentIndex++;
		const arrayOfCOnstellations = await fetchConstellation();
		console.log(arrayOfCOnstellations.length);

		IMG_CONSTELLATION.src = arrayOfCOnstellations[currentIndex].image;
		divConstellationName.innerText = arrayOfCOnstellations.name;
		if (currentIndex === arrayOfCOnstellations.length) {
			currentIndex = 0;
			IMG_CONSTELLATION.src = arrayOfCOnstellations[0].image;
		}
	} catch (error) {
		console.error(error);
	}
});

PREVIOUS.addEventListener("click", async () => {
	try {
		console.log("index begin " + currentIndex);
		currentIndex--;
		const arrayOfCOnstellations = await fetchConstellation();
		console.log(arrayOfCOnstellations[currentIndex].image);

		console.log("index end " + currentIndex);
		if (currentIndex < 0) {
			currentIndex = arrayOfCOnstellations.length;
		} else {
			IMG_CONSTELLATION.src = arrayOfCOnstellations[currentIndex].image;
		}
	} catch (error) {
		console.error(error);
	}
});
