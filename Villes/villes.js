const main = document.querySelector("main");

const arrayOfCities = [
	{
		name: "Beijing",
		image: "./images/beijing.png",
		country: "Chine",
		continent: "Asie",
		nbResidents: " 22,18 millions",
	},
	{
		name: "Bruxelles",
		image: "./images/brussels.jpg",
		country: "Belgique",
		continent: "Europe",
		nbResidents: " 1,209 millions",
	},
	{
		name: "Buenos Aires",
		image: "./images/buenosaires.jpeg",
		country: "Argentine",
		continent: "Amérique",
		nbResidents: " 3 millions",
	},
	{
		name: "Lisbone",
		image: "./images/lisboa.jpg",
		country: "Portugal",
		continent: "Europe",
		nbResidents: null,
	},

	{
		name: "Londres",
		image: "./images/london.jpg",
		country: "Royaumes-Unis",
		continent: "Europe",
		nbResidents: " 9,74 millions",
	},
	{
		name: "Madrid",
		image: "./images/madrid.jpg",
		country: "Espagne",
		continent: "Europe",
		nbResidents: " 3 millions",
	},
	{
		name: "Ottawa",
		image: "./images/ottawa.jpg",
		country: "Canada",
		continent: "Amérique",
		nbResidents: null,
	},
	{
		name: "Paris",
		image: "./images/paris.jpg",
		country: "France",
		continent: "Europe",
		nbResidents: " 2,161 millions",
	},
	{
		name: "Rome",
		image: "./images/rome.jpg",
		country: "Italie",
		continent: "Europe",
		nbResidents: "2,873 millions",
	},
	{
		name: "Tokyo",
		image: "./images/tokyo.jpg",
		country: "Japon",
		continent: "Asie",
		nbResidents: " 13,96 millions",
	},
	{
		name: "Washington",
		image: "./images/washington.jpg",
		country: "Etats-Unis",
		continent: "Amérique",
		nbResidents: null,
	},
	{
		name: "Zagreb",
		image: "./images/zagreb.jpg",
		country: "Croatie",
		continent: "Europe",
		nbResidents: null,
	},
];
const filtre = document.getElementById("filtre");

if (!filtre.value || filtre.value === "all") {
	displayCards(arrayOfCities);
} else {
	const filteredCities = arrayOfCities.filter(
		(city) => city.continent === filtre.value
	);
	displayCards(filteredCities);
}

function constructCard(cityObject) {
	const containerDiv = document.createElement("div");
	containerDiv.className = "cards";
	const pinDiv = document.createElement("img");
	const imgDiv = document.createElement("img");
	const nameDiv = document.createElement("div");
	const countryDiv = document.createElement("div");
	const continentDiv = document.createElement("div");
	const populationDiv = document.createElement("div");
	pinDiv.src = "./images/red-drawing-pin.png";
	pinDiv.className = "pin";
	imgDiv.src = cityObject.image;
	imgDiv.className = "pictures";
	containerDiv.style.transform = `rotate(${randomRotate()}deg)`;
	nameDiv.innerText = cityObject.name;
	countryDiv.innerText = cityObject.country;
	continentDiv.innerText = cityObject.continent;
	populationDiv.innerText = populationDiv.innerText =
		"Population :" + (cityObject.nbResidents ?? " Donnée inconnue");
	containerDiv.append(
		pinDiv,
		imgDiv,
		nameDiv,
		countryDiv,
		continentDiv,
		populationDiv
	);
	main.append(containerDiv);
}

function displayCards(arrayOfcities) {
	arrayOfcities.forEach((city) => {
		constructCard(city);
	});
}

function randomRotate() {
	return Math.floor(Math.random() * 13) - 6;
}

filtre.addEventListener("change", () => {
	main.innerHTML = "";
	if (filtre.value === "all") {
		displayCards(arrayOfCities);
	} else {
		const filteredCities = arrayOfCities.filter(
			(city) => city.continent === filtre.value
		);
		displayCards(filteredCities);
	}
});
