dayjs.locale("fr");

const tHead = document.getElementById("thead");

const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");

// dayjs

const date = dayjs("2024-05-20");

const startWeek = dayjs("2024-05-20").format("DD/MM");
const endWeek = dayjs(date).add(6, "day").format("DD/MM");

week1.innerText = `Semaine du ${startWeek} au ${dayjs(date)
	.add(6, "day")
	.format("DD/MM")}`;
week2.innerText = `Semaine du ${dayjs(date)
	.add(7, "day")
	.format("DD/MM")} au ${dayjs(date).add(13, "day").format("DD/MM")}`;
week3.innerText = `Semaine du ${dayjs(date)
	.add(14, "day")
	.format("DD/MM")} au ${dayjs(date).add(20, "day").format("DD/MM")}`;
week4.innerText = `Semaine du ${dayjs(date)
	.add(21, "day")
	.format("DD/MM")} au ${dayjs(date).add(27, "day").format("DD/MM")}`;

buildThead();

function buildThead() {
	const buildTH = document.createElement("th");
	buildTH.innerText = "";
	tHead.appendChild(buildTH);
	for (let i = 0; i <= 6; i++) {
		const buildTH = document.createElement("th");
		buildTH.innerText = dayjs("2024-05-20").add(i, "day").format("dddd");
		tHead.appendChild(buildTH);
	}
}

// Vanilla

// const date = new Date(2024, 5, 20);
// console.log(date);
// const createDate = `Semaine du ${date.getDate()}/0${date.getMonth()} au ${
// 	date.getDate() + 6
// }/0${date.getMonth()}`;
// week1.innerText = createDate;
// //

// week2.innerText = `Semaine du ${date.getDate(
// 	date.setDate(date.getDate() + 7)
// )}/0${date.getMonth()} au ${date.getDate(
// 	date.setDate(date.getDate() + 5)
// )}/0${date.getMonth()}`;
// week3.innerText = `Semaine du ${date.getDate(
// 	date.setDate(date.getDate() + 1)
// )}/0${date.getMonth()} au ${date.getDate(
// 	date.setDate(date.getDate() + 6)
// )}/0${date.getMonth()}`;
// week4.innerText = `Semaine du ${date.getDate(
// 	date.setDate(date.getDate() + 1)
// )}/0${date.getMonth()} au ${date.getDate(
// 	date.setDate(date.getDate() + 6)
// )}/0${date.getMonth()}`;

// buildThead();

// function buildThead() {
// 	const weekday = [
// 		"Dimanche",
// 		"Lundi",
// 		"Mardi",
// 		"Mercredi",
// 		"Jeudi",
// 		"Vendredi",
// 		"Samedi",
// 	];
// 	for (let i = 0; i <= 7; i++) {
// 		if (i === 0) {
// 			const buildTH = document.createElement("th");
// 			buildTH.innerText = "";
// 			tHead.appendChild(buildTH);
// 		} else if (i === 7) {
// 			const buildTH = document.createElement("th");
// 			buildTH.innerText = weekday[0];
// 			tHead.appendChild(buildTH);
// 		} else {
// 			const buildTH = document.createElement("th");
// 			buildTH.innerText = weekday[i];
// 			tHead.appendChild(buildTH);
// 		}
// 	}
// }

// correction

// let currentDate = new Date("2024-05-20");

// const weekTd = document.querySelectorAll(".week");
// weekTd.forEach((td) => {
// 	td.textContent = `Semaine du ${currentDate
// 		.toLocaleDateString("fr")
// 		.substring(0, 5)} au `;

// 	currentDate.setDate(currentDate.getDate() + 6);
// 	td.textContent += currentDate.toLocaleDateString("fr").substring(0, 5);
// 	currentDate.setDate(currentDate.getDate() + 1);
// });
// let weekday = new Date("2024-05-20");
// let weekdayTh = document.querySelectorAll(" th:not(:first-child");

// weekdayTh.forEach((th) => {
// 	th.textContent = weekday.toLocaleDateString("fr", { weekday: "long" });
// 	weekday.setDate(weekday.getDate() + 1);
// });
