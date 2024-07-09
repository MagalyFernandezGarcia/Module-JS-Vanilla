const jsonAPi = "http://localhost:3000/";
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
const nameOfconst = document.querySelectorAll(".containerName");

nameOfconst.forEach((constellation) => () => {
	constellation.addEventListener("click", () => {
		console.log("coucou");
	});
});
