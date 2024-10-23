const reviewsDisplay = document.querySelector(".reviews");

let numBisita = Number(window.localStorage.getItem("numBisita-ls")) || 0;
// reviewsDisplay.textContent = numReviews;
if (numBisita !== 0) {
    reviewsDisplay.textContent = numBisita + 1;
} else {    
    reviewsDisplay.textContent = "This is your first review. 🥳 Welcome!";
}
numBisita++;

localStorage.setItem("numBisita-ls", numBisita);



// // 1️⃣ Initialize display element variable
// const visitsDisplay = document.querySelector(".asdf");

// // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits + 1;
// } else {
// 	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
// }

// // 4️⃣ increment the number of visits by one.
// numVisits++;

// // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("numVisits-ls", numVisits);

// // 💡A client can view the l