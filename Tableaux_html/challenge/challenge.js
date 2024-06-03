const CREATE_LABEL = document.createElement("label");

constructForm();

function constructForm() {
	const TABLE_BODY = document.getElementById("tbody");
	const NEW_ROW = document.createElement("tr");

	for (let i = 0; i < 5; i++) {
		const CREATE_TD = document.createElement("td");
		const CREATE_INPUT = document.createElement("input");
		if (i === 0) {
			NEW_ROW.appendChild(CREATE_TD);
			CREATE_TD.appendChild(CREATE_INPUT);
			CREATE_INPUT.type = "file";
			CREATE_INPUT.setAttribute("id", i);
			CREATE_INPUT.name = i;

			TABLE_BODY.appendChild(NEW_ROW);
		} else if (i === 4) {
			NEW_ROW.appendChild(CREATE_TD);

			const button = document.createElement("button");
			button.innerText = "Soumettre";
			button.setAttribute("id", "btn");
			CREATE_TD.appendChild(button);
			TABLE_BODY.appendChild(NEW_ROW);
		} else {
			NEW_ROW.appendChild(CREATE_TD);
			CREATE_TD.appendChild(CREATE_INPUT);
			CREATE_INPUT.name = i;

			CREATE_INPUT.setAttribute("id", i);
			TABLE_BODY.appendChild(NEW_ROW);
		}
	}
}

const BTN = document.getElementById("btn");

BTN.addEventListener("click", () => {
	const FILE_INPUT = document.getElementById("0");
	const NAME_INPUT = document.getElementById("1");
	const FIRSTNAME_INPUT = document.getElementById("2");
	const ADJ = document.getElementById("3");

	let listArray = [];
	listArray.push({
		avatar: FILE_INPUT.value,
		name: NAME_INPUT.value,
		firstName: FIRSTNAME_INPUT.value,
		adj: ADJ.value,
	});
	insertList(listArray);
});

function insertList(listArray) {
	const TABLE_BODY = document.getElementById("tbody");
	listArray.forEach((item) => {
		const newRow = document.createElement("tr");

		Object.values(item).forEach((value) => {
			const newCell = document.createElement("td");
			newCell.innerText = value;
			newRow.appendChild(newCell);
		});

		TABLE_BODY.appendChild(newRow);
	});
}
