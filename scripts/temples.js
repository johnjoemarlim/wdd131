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