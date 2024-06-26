const main = document.querySelector("main");
const modal = document.querySelector(".modal-content");
const mainModal = document.getElementById("myModal");

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
		name: "Lisbonne",
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

const cardsOfCities = document.querySelectorAll(".cards");

cardsOfCities.forEach((card) => {
	card.addEventListener("click", async () => {
		mainModal.style.display = "block";
		modal.innerHTML = "";
		modal.style.display = "block";
		let city = card.children[2].innerText;
		try {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APITOKEN}&units=metric&lang=fr`
			);

			const closeButton = document.createElement("button");
			const minTemp = document.createElement("div");
			const maxTemp = document.createElement("div");
			const feelTemp = document.createElement("div");
			const actualTemp = document.createElement("div");
			const weather = document.createElement("div");
			const iconDiv = document.createElement("img");
			const humidity = document.createElement("div");
			const pressure = document.createElement("div");
			const windSpeed = document.createElement("div");
			const sunset = document.createElement("div");
			const sunrise = document.createElement("div");
			let icon = res.data.weather[0].icon;
			closeButton.id = "close";
			closeButton.className = "close";
			closeButton.innerText = "X";
			minTemp.innerText = `Température minimale : ${res.data.main.temp_min} °C`;
			maxTemp.innerText = `Température maximale : ${res.data.main.temp_max} °C`;
			actualTemp.innerText = `Température actuelle : ${res.data.main.temp} °C`;
			feelTemp.innerText = `Ressenti : ${res.data.main.feels_like} °C`;
			weather.innerText = res.data.weather[0].description;
			iconDiv.setAttribute(
				"src",
				`https://openweathermap.org/img/wn/${icon}.png`
			);
			humidity.innerText = `Taux d'humidité : ${res.data.main.humidity} % `;
			pressure.innerText = `Pression atmosphérique : ${res.data.main.pressure} hPa`;
			windSpeed.innerText = `Vitesse du vent : ${res.data.wind.speed} m/s`;
			sunrise.innerText = `Le soleil se lève à : ${new Date(
				res.data.sys.sunrise * 1000
			).toLocaleTimeString()} `;
			sunset.innerText = `Le soleil se couche à : ${new Date(
				res.data.sys.sunset * 1000
			).toLocaleTimeString()}`;

			modal.append(
				minTemp,
				maxTemp,
				actualTemp,
				feelTemp,
				weather,
				iconDiv,
				humidity,
				pressure,
				windSpeed,
				sunrise,
				sunset,
				closeButton
			);
			const closeModal = document.getElementById("close");

			closeModal.addEventListener("click", () => {
				mainModal.style.display = "none";
				modal.style.display = "none";
			});
		} catch (error) {
			console.log(error);
		}
	});
});
