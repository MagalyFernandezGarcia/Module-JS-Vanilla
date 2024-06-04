// Exercice 1

const PHRASE = "Je veux me retourner la tête !";

const PHRASE_ARRAY = PHRASE.split("");

const REVERSE_PHRASE = PHRASE_ARRAY.reverse();

const FINAL_PHRASE = REVERSE_PHRASE.join("");

console.log(FINAL_PHRASE);

// Exercice 3

const TBODY = document.querySelector("tbody");
const UP_ARROW = document.querySelectorAll(".up");
const DOWN_ARROW = document.querySelectorAll(".down");
const UP_DATE_ARROW = document.getElementById("upDate");
const DOWN_DATE_ARROW = document.getElementById("downDate");

const CONTACT_ARRAY = [
	{
		name: "Fernandez",
		firstName: "Magaly",
		birthDate: "19/03/1991",
		phone: "0475 28 19 36",
	},
	{
		name: "Samsoen",
		firstName: "Anne",
		birthDate: "10/06/1960",
		phone: "0474 58 20 21",
	},
	{
		name: "Gathy",
		firstName: "Arnaud",
		birthDate: "02/04/1991",
		phone: "3615",
	},
	{
		name: "Fernandez",
		firstName: "Jenny",
		birthDate: "28/04/1989",
		phone: "0836 65 65 65",
	},
	{
		name: "Lagasse",
		firstName: "Bénédicte",
		birthDate: "02/07/1994",
		phone: "118 218",
	},
	{
		name: "Lauro",
		firstName: "Lara",
		birthDate: "01/01/1001",
		phone: "911",
	},
];

displayContacts(CONTACT_ARRAY);

function displayContacts(CONTACT_ARRAY) {
	TBODY.innerHTML = "";
	CONTACT_ARRAY.forEach((contact) => {
		const NEW_ROW = document.createElement("tr");
		for (const key in contact) {
			const TD = document.createElement("td");
			TD.innerText = contact[key];
			NEW_ROW.append(TD);
		}

		TBODY.append(NEW_ROW);
		// const TDNAME = document.createElement("td");
		// const TDFIRSTNAME = document.createElement("td");
		// const TDBIRTHDATE = document.createElement("td");
		// const TDPHONE = document.createElement("td");
		// TDNAME.innerText = contact.name;
		// TDFIRSTNAME.innerText = contact.firstName;
		// TDBIRTHDATE.innerText = contact.birthDate;
		// TDPHONE.innerText = contact.phone;
		// NEW_ROW.append(TDNAME, TDFIRSTNAME, TDBIRTHDATE, TDPHONE);

		TBODY.append(NEW_ROW);
	});
}

UP_ARROW.forEach((arrow) =>
	arrow.addEventListener("click", () => {
		TBODY.innerHTML = "";
		if (arrow.id === "upName") {
			const sortArray = CONTACT_ARRAY.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
			displayContacts(sortArray);
		} else {
			const sortArray = CONTACT_ARRAY.sort(function (a, b) {
				return a.firstName.localeCompare(b.firstName);
			});
			displayContacts(sortArray);
		}
	})
);

DOWN_ARROW.forEach((arrow) =>
	arrow.addEventListener("click", () => {
		TBODY.innerHTML = "";
		if (arrow.id === "downName") {
			const sortArray = CONTACT_ARRAY.sort(function (a, b) {
				return b.name.localeCompare(a.name);
			});
			displayContacts(sortArray);
		} else {
			const sortArray = CONTACT_ARRAY.sort(function (a, b) {
				return b.firstName.localeCompare(a.firstName);
			});
			displayContacts(sortArray);
		}
	})
);

UP_DATE_ARROW.addEventListener("click", () => {
	TBODY.innerHTML = "";
	const sortedArray = CONTACT_ARRAY.sort((a, b) => {
		const dateA = new Date(`${a.birthDate.split("/").reverse().join("/")}`);
		const dateB = new Date(`${b.birthDate.split("/").reverse().join("/")}`);
		return dateA - dateB;
	});

	displayContacts(sortedArray);
});

DOWN_DATE_ARROW.addEventListener("click", () => {
	TBODY.innerHTML = "";
	const sortedArray = CONTACT_ARRAY.sort((a, b) => {
		const dateA = new Date(`${a.birthDate.split("/").reverse().join("/")}`);
		const dateB = new Date(`${b.birthDate.split("/").reverse().join("/")}`);
		return dateB - dateA;
	});

	displayContacts(sortedArray);
});
const SEARCH = document.getElementById("search");

SEARCH.addEventListener("input", () => {
	const searched = SEARCH.value;
	const newContact = CONTACT_ARRAY.filter(
		(contact) =>
			contact.firstName.includes(searched) ||
			contact.name.includes(searched) ||
			contact.phone.includes(searched)
	);

	displayContacts(newContact);
});
