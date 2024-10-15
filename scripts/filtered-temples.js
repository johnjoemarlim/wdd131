const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
console.log("Last Modification:")
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Urdaneta Philippines",
		location: "Urdaneta, Philippines",
		dedicated: "2024, April, 28",
		area: 32604,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45856.jpg"
	},
	{
		templeName: "Cebu City Philippines",
		location: "Cebu City, Philippines",
		dedicated: "2010, June, 13",
		area: 29556,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
	},
	{
		templeName: "Manila Philippines",
		location: "Manila, Philippines",
		dedicated: "1982, August, 25",
		area: 26683,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48891.jpg"
	},
	// Add more temple objects here...
  ];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldiesLink = document.querySelector("#oldies");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
	// document.querySelector("main").innerHTML = "";
	// let h2Home = document.createElement("h2");
	h2Element.textContent = "Home";
	// document.querySelector("main").appendChild(h2Home);
	createTempleCard(temples);
})

let h2Element = document.querySelector("h2");


oldiesLink.addEventListener("click", () => {
	h2Element.textContent = "Old";
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900));	
});

newLink.addEventListener("click", () => {
	h2Element.textContent = "New";
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000));	
});

largeLink.addEventListener("click", () => {
	h2Element.textContent = "Large";
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
	h2Element.textContent = "Small";
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
	document.querySelector(".figs-grid").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".figs-grid").appendChild(card);
	});
}