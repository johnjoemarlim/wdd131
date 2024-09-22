const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

console.log("Last Modification:")
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;
