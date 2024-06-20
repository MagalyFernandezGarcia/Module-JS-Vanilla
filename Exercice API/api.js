const country = document.getElementById("country");
const postCode = document.getElementById("postCode");
const validationButton = document.getElementById("validation");
const displayResult = document.getElementById("result");

validationButton.addEventListener("click", async () => {
	const selectedCountry = country.value;
	const selectedPostCode = postCode.value;
	try {
		const res = await axios.get(
			`https://api.zippopotam.us/${selectedCountry}/${selectedPostCode}`
		);
		console.log(res.data);

		const arrayOfPlaces = res.data.places;
		const listOfPlaces = arrayOfPlaces
			.map((place) => place["place name"])
			.join(", ");
		displayResult.innerText = `La(les) villes correspondant à votre recheche est(sont) : ${listOfPlaces}`;
	} catch (error) {
		displayResult.innerText = "Oups, je n'ai pas trouvé";
	}
});
