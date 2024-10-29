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



// function addContactInformation(contactName, contactNumber) {
//     let contactSection = document.createElement("section");
//     let contactInfo = document.createElement("p");
//     // let number = document.createElement("p");
//     let facebookAcc = document.createElement("a");
//     let contactDiv = document.getElementById("contactPerson");
//     const label = document.createElement('span');
//     label.textContent = 'Facebook: ';

//     let linkDiv = document.createElement("div");
//     linkDiv.setAttribute("id", "linkContainer");

//     facebookAcc.setAttribute("id", "contactLink")
//     facebookAcc.href = "https://www.facebook.com/larry.santiago.507";
//     facebookAcc.textContent = "Larry Santiago";
//     facebookAcc.target = "_blank";

//     contactInfo.innerHTML = `Name: ${contactName}<br>
//                             Mobile: ${contactNumber}`;
//     // number.innerHTML = `<span class="label">Mobile:</span> ${contactNumber}`;
    
//     linkDiv.appendChild(label);
//     linkDiv.appendChild(facebookAcc);
    
//     contactSection.appendChild(contactInfo);
//     // contactSection.appendChild(facebookAcc);
//     contactSection.appendChild(linkDiv);
//     // contactSection.appendChild(number);
//     // contactSection.appendChild(facebookAcc);
//     contactDiv.appendChild(contactSection);

// }

// addContactInformation("Larry Santiago", "0861033609");

let numVisits = Number(window.localStorage.getItem("contactsVisits-ls")) || 0;
// reviewsDisplay.textContent = numReviews;
// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits + 1;
// } else {    
//     visitsDisplay.textContent = "This is your first review. 🥳 Welcome!";
// }
numVisits++;

localStorage.setItem("contactsVisits-ls", numVisits);