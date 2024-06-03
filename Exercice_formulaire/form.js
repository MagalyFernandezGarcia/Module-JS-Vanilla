const FORM = document.getElementById("form");
const START_DATE = document.getElementById("startDate");
const END_DATE = document.getElementById("endDate");
const OBJECT = document.getElementById("object");

const formValue = {};
const titleTask = {
	name: "Créé par",
	slave: "Attribué à",
	beginDate: "Date de début",
	endingDate: "Date de fin",
};
const arrayOfTasks = [titleTask];

FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	const data = new FormData(event.target);

	data.forEach((value, key) => {
		formValue[key] = value;
	});

	let visualData = "Nouvelle tâche \n";
	for (const key in formValue) {
		visualData += `${key} : ${formValue[key]}\n`;
	}

	alert(visualData);
	OBJECT.innerText = "";
	createNewTask(formValue);
	arrayOfTasks.forEach((task) => {
		insertTask(task);
	});
});

END_DATE.addEventListener("change", () => {
	if (END_DATE.value < START_DATE.value) {
		alert("La date de fin ne peut pas être antérieure à la date de début");
	}
});

START_DATE.addEventListener("change", () => {
	if (END_DATE.value < START_DATE.value) {
		alert("La date de fin ne peut pas être antérieure à la date de début");
	}
});

function insertTask(taskFromArray) {
	const containerDiv = document.createElement("div");
	containerDiv.classList.add("object");
	if (taskFromArray.emergency === "on") {
		containerDiv.classList.add("emergency");
	}
	OBJECT.appendChild(containerDiv);
	for (const key in taskFromArray) {
		if (key !== "emergency") {
			const divElement = document.createElement("div");
			divElement.textContent = taskFromArray[key];

			containerDiv.appendChild(divElement);
		}
	}
}

function createNewTask(formData) {
	arrayOfTasks.push({
		name: formData.name || "",
		slave: formData.choosen || "",
		beginDate: formData.startDate || "",
		endingDate: formData.endDate || "",
		emergency: formData.emergency || "",
	});
}
insertTask(arrayOfTasks[0]);
