// Exercice 1

const PHRASE = "Je veux me retourner la tête !";

const PHRASE_ARRAY = PHRASE.split(" ");

const REVERSE_PHRASE = PHRASE_ARRAY.reverse();

const FINAL_PHRASE = REVERSE_PHRASE.join(" ");

// Exercice 3

const TBODY = document.querySelector("tbody");

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
		phone: "0489 37 62 92",
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
		birthDate: "06/06/6666",
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
	CONTACT_ARRAY.forEach((contact) => {
		const NEW_ROW = document.createElement("tr");
		const TDNAME = document.createElement("td");
		const TDFIRSTNAME = document.createElement("td");
		const TDBIRTHDATE = document.createElement("td");
		const TDPHONE = document.createElement("td");
		TDNAME.innerText = contact.name;
		TDFIRSTNAME.innerText = contact.firstName;
		TDBIRTHDATE.innerText = contact.birthDate;
		TDPHONE.innerText = contact.phone;
		NEW_ROW.append(TDNAME, TDFIRSTNAME, TDBIRTHDATE, TDPHONE);
		TBODY.append(NEW_ROW);
	});
}
