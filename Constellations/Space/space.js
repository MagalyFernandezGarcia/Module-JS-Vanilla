const IMG_CONSTELLATION = document.getElementById("imgConstellation");
const PREVIOUS = document.getElementById("previous");
const NEXT = document.getElementById("next");
const jsonAPi = "http://localhost:3000/";
const divConstellationName = document.getElementById("constellationName");
const hubble = document.getElementById("hubble");
const modalHubble = document.getElementById("modalHubble");
const modalConstellation = document.getElementById("modalConstellation");

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
	const modalHubbleContent = document.getElementById("modalHubbleContent");
	modalHubbleContent.innerHTML = "";
	const imageOfSpace = await getNasaImage();
	modalHubble.style.display = "block";
	const imageToDisplay = document.createElement("img");
	imageToDisplay.src = imageOfSpace.hdurl;
	const closeHubble = document.createElement("button");
	closeHubble.innerText = "X";
	closeHubble.className = "close";

	modalHubbleContent.append(closeHubble, imageToDisplay);

	closeHubble.addEventListener("click", () => {
		modalHubble.style.display = "none";
	});
});

const activateAccordion = () => {
	const accordion = document.getElementsByClassName("container");

	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function () {
			this.classList.toggle("active");
		});
	}
};

IMG_CONSTELLATION.addEventListener("click", async () => {
	modalConstellation.style.display = "block";
	const constellationInfo = await getConstellations();
	const actualConst = constellationInfo[currentIndex];

	const accordionContent = document.querySelector(".accordion");
	accordionContent.innerHTML = "";

	const accordionTitle = document.createElement("h1");
	accordionTitle.innerText = actualConst.name;

	const descriptionTitle = document.createElement("div");
	descriptionTitle.innerText = "Small description";
	descriptionTitle.className = "label";
	const imageOfStars = document.createElement("img");
	imageOfStars.src = actualConst.imageConstellation;
	const divText = document.createElement("div");
	divText.innerText = actualConst.quickDescription;
	const divDescriptionAll = document.createElement("div");
	divDescriptionAll.className = "content";
	divDescriptionAll.append(imageOfStars, divText);
	const divDescriptionContainer = document.createElement("div");
	divDescriptionContainer.className = "container";
	divDescriptionContainer.append(descriptionTitle, divDescriptionAll);
	const hrDescription = document.createElement("hr");

	const schemaTitle = document.createElement("div");
	schemaTitle.innerText = "The stars that compose it";
	schemaTitle.className = "label";
	const schemaOfStars = document.createElement("img");
	schemaOfStars.src = actualConst.imageStars;
	const divStarText = document.createElement("div");
	divStarText.innerText = actualConst.mostBrillantStars;
	const divSchemaAll = document.createElement("div");
	divSchemaAll.className = "content";
	divSchemaAll.append(schemaOfStars, divStarText);
	const divSchemaContainer = document.createElement("div");
	divSchemaContainer.className = "container";
	divSchemaContainer.append(schemaTitle, divSchemaAll);
	const hrSchema = document.createElement("hr");

	const mythTitle = document.createElement("div");
	mythTitle.innerText = `${actualConst.name} in mythologie`;
	mythTitle.className = "label";
	const imageOfMyth = document.createElement("img");
	imageOfMyth.src = actualConst.imageMyth;
	const divTextMyth = document.createElement("div");
	divTextMyth.innerText = actualConst.mythology;
	const divMythAll = document.createElement("div");
	divMythAll.className = "content";
	divMythAll.append(imageOfMyth, divTextMyth);
	const divMythContainer = document.createElement("div");
	divMythContainer.className = "container";
	divMythContainer.append(mythTitle, divMythAll);
	const hrMyth = document.createElement("hr");

	const observTitle = document.createElement("div");
	observTitle.innerText = `Observing ${actualConst.name}`;
	observTitle.className = "label";
	const observInstruction = document.createElement("div");
	observInstruction.innerText = actualConst.observation;
	observInstruction.className = "content";
	const divObservContainer = document.createElement("div");
	divObservContainer.className = "container";
	divObservContainer.append(observTitle, observInstruction);
	const hrObs = document.createElement("hr");

	accordionContent.append(
		accordionTitle,
		divDescriptionContainer,
		hrDescription,
		divSchemaContainer,
		hrSchema,
		divMythContainer,
		hrMyth,
		divObservContainer,
		hrObs
	);
	activateAccordion();
});

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
	modalHubble.style.display = "none";
	modalConstellation.style.display = "none";
});
