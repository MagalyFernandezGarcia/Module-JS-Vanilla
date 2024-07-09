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
	const hemisphere = document.getElementById(constellation.hemisphere);
	const season = document.querySelector(`.${constellation.season}`);

	const newDiv = document.createElement("div");
	const starImg = document.createElement("img");
	starImg.src = "../../images/whiteStar.png";
	starImg.alt = "étoile blanche";
	starImg.className = "whiteStar";
	newDiv.innerText = constellation.name;

	newDiv.append(starImg);
	season.append(newDiv);
	hemisphere.append(season);
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
