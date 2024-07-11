const submitBtn = document.getElementById("submit");
const contactModal = document.getElementById("modalContact");
const contactModalContent = document.querySelector(".modalContactContent");

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
		const contactForm = document.querySelector(".contactForm");
		console.log("before reset : " + contactForm);
		contactForm.reset();
		console.log("after reset : " + contactForm);
		contactModal.style.display = "none";
		contactModalContent.innerHTML = "";
	});
	contactModalContent.append(receptionDiv, valueOfInput, addingCloseBtn);
	contactModal.append(contactModalContent);
});
