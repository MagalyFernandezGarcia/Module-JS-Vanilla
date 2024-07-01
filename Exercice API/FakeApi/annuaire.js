const apiUrl = "http://localhost:3000/";
const tbody = document.querySelector("tbody");

const getContact = async () => {
	try {
		const res = await axios.get(apiUrl + "contacts");
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.error;
	}
};

const displayContact = (contacts) => {
	tbody.innerHTML = "";
	contacts.forEach((contact) => {
		const newRow = document.createElement("tr");

		const tdName = document.createElement("td");
		tdName.textContent = contact.nom;

		const tdFirstName = document.createElement("td");
		tdFirstName.textContent = contact.prenom;

		const tdMail = document.createElement("td");
		tdMail.textContent = contact.email;

		const tdTel = document.createElement("td");
		tdTel.textContent = contact.tel;
		const throwButton = document.createElement("button");
		throwButton.textContent = "🚮";
		throwButton.id = contact.id;
		const changeButton = document.createElement("button");
		changeButton.textContent = "✏️";
		changeButton.id = contact.id;
		const tdActions = document.createElement("td");
		const starImage = document.createElement("img");
		if (contact.favori === false) {
			starImage.setAttribute("src", "../Images/star-empty.svg");
		} else {
			starImage.setAttribute("src", "../Images/star-fill.svg");
		}
		const favoriButton = document.createElement("button");
		favoriButton.id = contact.id;
		favoriButton.append(starImage);

		tdActions.append(throwButton, changeButton, favoriButton);

		newRow.append(tdName, tdFirstName, tdMail, tdTel, tdActions);
		tbody.append(newRow);

		throwButton.addEventListener("click", () => {
			deleteContact(throwButton.id);
		});
		changeButton.addEventListener("click", () => {
			changeForm(contact);
		});
		favoriButton.addEventListener("click", () => {
			if (contact.favori === false) {
				const modifiedFav = {
					favori: true,
				};
				changeFavori(contact.id, modifiedFav);
			} else {
				const modifiedFav = {
					favori: false,
				};
				changeFavori(contact.id, modifiedFav);
			}
		});
	});
};

const init = async () => {
	try {
		const contactsInfo = await getContact();
		displayContact(contactsInfo);
	} catch (error) {
		console.error();
	}
};

const addNewContact = async (contact) => {
	try {
		await axios.post(apiUrl + "contacts", contact);
	} catch (error) {
		console.error();
	}
};

const deleteContact = async (contactId) => {
	try {
		await axios.delete(apiUrl + "contacts/" + contactId);
	} catch (error) {
		console.error();
	}
};

const changeForm = (contact) => {
	console.log(contact);
	const changeRow = document.createElement("tr");
	const tdChangeName = document.createElement("td");
	const inputName = document.createElement("input");
	inputName.name = "nom";
	inputName.type = "text";
	inputName.value = contact.nom;
	const tdChangeFirstName = document.createElement("td");
	const inputFirstName = document.createElement("input");
	inputFirstName.name = "prenom";
	inputFirstName.type = "text";
	inputFirstName.value = contact.prenom;
	const tdChangeMail = document.createElement("td");
	const inputMail = document.createElement("input");
	inputMail.name = "email";
	inputMail.type = "email";
	inputMail.value = contact.email;
	tdChangeTel = document.createElement("td");
	const inputPhone = document.createElement("input");
	inputPhone.name = "tel";
	inputPhone.type = "number";
	inputPhone.value = contact.tel;
	const tdButton = document.createElement("td");
	const changeButton = document.createElement("button");
	changeButton.textContent = "Modifier";
	tdButton.append(changeButton);
	tdChangeTel.append(inputPhone);
	tdChangeMail.append(inputMail);
	tdChangeName.append(inputName);
	tdChangeFirstName.append(inputFirstName);
	changeRow.append(
		tdChangeName,
		tdChangeFirstName,
		tdChangeMail,
		tdChangeTel,
		tdButton
	);
	tbody.append(changeRow);

	changeButton.addEventListener("click", () => {
		const newName = inputName.value;
		const newFirstName = inputFirstName.value;

		const newMail = inputMail.value;
		const newPhone = inputPhone.value;

		console.log(contact.id);
		const modifiedContact = {
			nom: newName,
			prenom: newFirstName,
			email: newMail,
			tel: newPhone,
		};
		console.log(modifiedContact);
		changeData(contact.id, modifiedContact);
	});
};

const changeData = async (id, newContactInfo) => {
	try {
		await axios.put(apiUrl + "contacts/" + id, newContactInfo);
	} catch (error) {
		console.error(error);
	}
};

const changeFavori = async (id, newvalue) => {
	try {
		await axios.patch(apiUrl + "contacts/" + id, newvalue);
	} catch (error) {
		console.error(error);
	}
};

init();

document.addContact.addEventListener("submit", async (e) => {
	e.preventDefault();
	try {
		const contactToAdd = {
			nom: addContact.nom.value,
			prenom: addContact.prenom.value,
			email: addContact.email.value,
			tel: addContact.tel.value,
			favori: false,
		};
		await addNewContact(contactToAdd);
		init();
	} catch (error) {
		console.error(error);
	}
});
