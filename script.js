//Dit laat je menu van donker naar licht gaan.
let darkLink = document.querySelectorAll("nav a")[0];
let lightLink = document.querySelectorAll("nav a")[1];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);


//Dit is de functie voor je hamburger icon.
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "none") {
		navMenu.style.display = "flex";
	} else {
		navMenu.style.display = "none";
	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);
