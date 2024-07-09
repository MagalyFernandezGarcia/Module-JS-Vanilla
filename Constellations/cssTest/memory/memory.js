const cardAll = document.querySelectorAll(".card");

cardAll.forEach((card) => {
	const newImg = document.createElement("img");
	newImg.src = "../../images/backCard.jpg";
	newImg.className = "imgCard";
	card.append(newImg);
});
