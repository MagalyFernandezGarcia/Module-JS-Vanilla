const jsonAPi = "http://localhost:3000/";
const modalConstellation = document.getElementById("modalConstellation");
const getConstellations = async () => {
	try {
		const res = await axios.get(jsonAPi + "constellations");
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
const createLinkName = (constellation) => {
	const hemisphere = document.querySelector(`.${constellation.hemisphere}`);
	const season = hemisphere.querySelector(`.${constellation.season}`);

	const newDiv = document.createElement("div");
	const divName = document.createElement("div");
	const starImg = document.createElement("img");
	starImg.src = "../../images/whiteStar.png";
	starImg.alt = "étoile blanche";
	starImg.className = "whiteStar";
	divName.innerText = constellation.name;

	newDiv.className = "containerName";

	newDiv.append(starImg, divName);
	season.append(newDiv);

	newDiv.addEventListener("click", () => {
		test(constellation);
	});
};

const organiseConstellation = async () => {
	try {
		const allConstellation = await getConstellations();

		allConstellation.forEach((constellation) => {
			createLinkName(constellation);
		});
	} catch (error) {}
};

organiseConstellation();

const activateAccordion = () => {
	const accordion = document.getElementsByClassName("container");

	for (i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", function () {
			this.classList.toggle("active");
		});
	}
};

const test = (constellation) => {
	modalConstellation.style.display = "block";

	const accordionContent = document.querySelector(".accordion");
	accordionContent.innerHTML = "";

	const accordionTitle = document.createElement("h1");
	accordionTitle.innerText = constellation.name;

	const descriptionTitle = document.createElement("div");
	descriptionTitle.innerText = "Small description";
	descriptionTitle.className = "label";
	const imageOfStars = document.createElement("img");
	imageOfStars.src = `../${constellation.imageConstellation}`;
	const divText = document.createElement("div");
	divText.innerText = constellation.quickDescription;
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
	schemaOfStars.src = `../${constellation.imageStars}`;
	const divStarText = document.createElement("div");
	divStarText.innerText = constellation.mostBrillantStars;
	const divSchemaAll = document.createElement("div");
	divSchemaAll.className = "content";
	divSchemaAll.append(schemaOfStars, divStarText);
	const divSchemaContainer = document.createElement("div");
	divSchemaContainer.className = "container";
	divSchemaContainer.append(schemaTitle, divSchemaAll);
	const hrSchema = document.createElement("hr");

	const mythTitle = document.createElement("div");
	mythTitle.innerText = `${constellation.name} in mythologie`;
	mythTitle.className = "label";
	const imageOfMyth = document.createElement("img");
	imageOfMyth.src = `../${constellation.imageMyth}`;
	const divTextMyth = document.createElement("div");
	divTextMyth.innerText = constellation.mythology;
	const divMythAll = document.createElement("div");
	divMythAll.className = "content";
	divMythAll.append(imageOfMyth, divTextMyth);
	const divMythContainer = document.createElement("div");
	divMythContainer.className = "container";
	divMythContainer.append(mythTitle, divMythAll);
	const hrMyth = document.createElement("hr");

	const observTitle = document.createElement("div");
	observTitle.innerText = `Observing ${constellation.name}`;
	observTitle.className = "label";
	const observInstruction = document.createElement("div");
	observInstruction.innerText = constellation.observation;
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
};

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
	modalConstellation.style.display = "none";
});

const northTitle = document.querySelector(".northTitle");
const southTitle = document.querySelector(".southTitle");
const northContent = document.getElementById("north");
const southContent = document.getElementById("south");

southTitle.addEventListener("click", () => {
	northContent.style.display = "none";
	southContent.style.display = "flex";
	northTitle.style.opacity = "50%";
	southTitle.style.opacity = "100%";
});

northTitle.addEventListener("click", () => {
	southContent.style.display = "none";
	northContent.style.display = "flex";
	southTitle.style.opacity = "50%";
	northTitle.style.opacity = "100%";
});
