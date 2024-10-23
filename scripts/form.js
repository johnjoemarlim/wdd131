const year = document.querySelector("#currentyear");
const today = new Date();


year.innerHTML = today.getFullYear();
console.log("Last Modification:")
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const productName = document.getElementById("productName");



products.forEach(product => {
  const prod = document.createElement("option");
  prod.value = product.id;
  prod.text = product.name.replace(/\b[a-z]/g, (match) => match.toUpperCase());
  productName.appendChild(prod);
});

// let formSubmitted = false;

// let numBisita = Number(window.localStorage.getItem("numBisita-ls")) || 0;

// document.getElementById('f1').addEventListener('submit', (event) => {
//   event.preventDefault();

//   const reviewsDisplay = document.querySelector(".reviews");

  
    
  
//   reviewsDisplay.textContent = numBisita;
  
//   numBisita++;

//   localStorage.setItem("numBisita-ls", numBisita);
 
// });
// if (!formSubmitted) {
//   products.forEach(product => {
//     const prod = document.createElement("option");
//     prod.value = product.id;
//     prod.text = product.name.replace(/\b[a-z]/g, (match) => match.toUpperCase());
//     productName.appendChild(prod);
//   });
//   formSubmitted = true;
// }

// let reviewCounter = 0;

// document.getElementById("#f1").addEventListener("submit", (event) => {
//   event.preventDefault();
//   displayReviews(numReviews)
// });








// reviewsDisplay.textContent = "Hello";




// function setChapterList() {
//   localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
// }

// function setNumReviews() {
//   localStorage.setItem("reviews-ls", numReviews);
// }

// function getNumReviews() {
//   return JSON.parse(localStorage.getItem("review-ls"));
// }
