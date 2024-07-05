const submitBtn = document.getElementById("submit");
const contactModal = document.getElementById("modalContact");
const contactModalContent = document.querySelector(".modalContactContent");
const inputName = document.getElementById("name");
const errorName = document.getElementById("errorName");
const inputFirstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("errorFirstName");
const inputMail = document.getElementById("mail");
const errorMail = document.getElementById("errorMail");

const dataInput = (formulaire) => {
	const allValue = document.createElement("div");
	allValue.className = "valueConteneur";
	for (let pair of formulaire.entries()) {
		const newDivName = document.createElement("div");
		newDivName.innerText = pair[0];
		const newDivValue = document.createElement("div");
		newDivValue.innerText = pair[1];
		const pairedValue = document.createElement("div");
		pairedValue.append(newDivName, newDivValue);
		pairedValue.className = "valueContent";
		allValue.append(pairedValue);
	}
	return allValue;
};
// submitBtn.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	const form = event.target.closest("form");
// 	const formData = new FormData(form);

// 	if (!inputName.checkValidity()) {
// 		if (inputName.validity.tooLong) {
// 			errorName.innerText = "Le nom ne doit pas dépasser 200 caractères.";
// 		}
// 		if (inputName.validity.patternMismatch) {
// 			errorName.innerText = "Le nom ne doit pas contenir de chiffres.";
// 		}
// 		if (inputName.validity.valueMissing) {
// 			errorName.innerText = "Le nom est obligatoire";
// 		}

// 		inputName.className = "errorInput";
// 		inputName.focus();
// 		return;
// 	} else if (!inputFirstName.checkValidity()) {
// 		console.log("test");
// 		if (inputFirstName.validity.tooLong) {
// 			errorFirstName.innerText =
// 				"Le prénom ne doit pas dépasser 200 caractères.";
// 		}
// 		if (inputFirstName.validity.patternMismatch) {
// 			errorFirstName.innerText = "Le prénom ne doit pas contenir de chiffres.";
// 		}

// 		inputFirstName.className = "errorInput";
// 		inputFirstName.focus();
// 		return;
// 	} else if (inputMail.validity.valueMissing) {
// 		errorFirstName.innerText = "Le mail est obligatoire";
// 		return;
// 	}

// 	contactModal.style.display = "block";
// 	const receptionDiv = document.createElement("div");
// 	receptionDiv.innerText =
// 		"Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais. Vous trouverez-ci dessous une copie des information reçue.";
// 	const valueOfInput = dataInput(formData);
// 	const addingCloseBtn = document.createElement("button");
// 	addingCloseBtn.className = "close";
// 	addingCloseBtn.textContent = "Fermer";
// 	addingCloseBtn.addEventListener("click", () => {
// 		contactModal.style.display = "none";
// 		contactModalContent.innerHTML = "";
// 	});
// 	contactModalContent.append(receptionDiv, valueOfInput, addingCloseBtn);
// 	contactModal.append(contactModalContent);
// });

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const data = new FormData(event.target);
	contactModal.style.display = "block";
	const receptionDiv = document.createElement("div");
	receptionDiv.innerText =
		"Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais. Vous trouverez-ci dessous une copie des information reçue.";
	const valueOfInput = dataInput(data);
	const addingCloseBtn = document.createElement("button");
	addingCloseBtn.className = "close";
	addingCloseBtn.textContent = "Fermer";
	addingCloseBtn.addEventListener("click", () => {
		contactModal.style.display = "none";
		contactModalContent.innerHTML = "";
	});
	contactModalContent.append(receptionDiv, valueOfInput, addingCloseBtn);
	contactModal.append(contactModalContent);
});
