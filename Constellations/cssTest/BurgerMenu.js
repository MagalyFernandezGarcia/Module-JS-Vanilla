const burgerMenu = document.querySelector(".burgerMenu");
const burgerLinks = document.querySelector(".offScreenMenu");

burgerMenu.addEventListener("pointerup", () => {
	burgerMenu.classList.toggle("active");
	burgerLinks.classList.toggle("active");
});
