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

// const homeLink = document.querySelector("#home");
// const activitiesLink = document.querySelector("#activities");
// const contactLink = document.querySelector("#contact");

let description = document.createElement("p");
let img = document.createElement("img");

description.innerHTML = `Palmerstown Basketball Club is a community-driven organization dedicated to promoting basketball in the heart of Palmerstown, Dublin. We provide a platform for basketball enthusiasts of all ages to come together, play, and socialize.<br>
                <br>
                Our club offers a variety of activities, including:<br>
                <br>
                <span class="bold">Regular Pick-Up Games:</span> Join us for casual, drop-in basketball games at our designated courts. It's a great way to stay active, meet new people, and have fun.<br>
                <span class="bold">Friendly Matches:</span> Compete in friendly matches against other local clubs or organize internal competitions within our own club.<br>
                <span class="bold">Social Events:</span> We host various social events, such as club nights, barbecues, and tournaments, to strengthen the community bond and create lasting memories.<br>
                <br>
                Whether you're a seasoned player looking to hone your skills or a beginner eager to learn the basics, Palmerstown Basketball Club welcomes you with open arms. We prioritize fair play, sportsmanship, and a positive atmosphere for everyone involved.<br>
                <br>
                Join us and experience the joy of basketball in a friendly and supportive community.`

img.setAttribute("src", "images/league.webp");
img.setAttribute("alt", `Basketball League Image`);
img.setAttribute("loading", "lazy");

document.querySelector(".homeSection").appendChild(description);
document.querySelector(".homeSection").appendChild(img);

let sched = document.createElement("section");
let schedDay = document.createElement("h3");
let schedP = document.createElement("p");
let mapDiv = document.createElement("div");
let mapLink = document.createElement("a");

mapLink.href = "https://maps.app.goo.gl/w7u3S41UZzE65krP9";
mapLink.textContent = "Map Link";
mapLink.target = "_blank";
// mapIframe.width = "auto";
// mapIframe.height = "100%";
// mapIframe.style = "border:0;";
// mapIframe.allowfullscreen = "";
// mapIframe.loading = "lazy";
// mapIframe.referrerpolicy = "no-referrer-when-downgrade";
mapDiv.id = "map";
schedDay.textContent = "When and Where Do We Play? "
schedP.textContent = "We usually play every Friday from 7:30pm to 10:00pm at Palmerstown Sports Complex."



document.querySelector("main").appendChild(sched);
sched.appendChild(schedDay);
sched.appendChild(schedP);
sched.appendChild(mapDiv);
mapDiv.appendChild(mapLink);
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 53.34819564564418, lng: -6.376227216366719 }, 
//         zoom: 8
        
//     });
    
// }


let join = document.createElement("section");
let howTo = document.createElement("h3");
let parajoin = document.createElement("p");

const clubLink = document.createElement("a");
clubLink.textContent = "Palmerstown Basketball Club";
clubLink.href = "https://www.facebook.com/groups/322475725034178/";
clubLink.target = "_blank";

howTo.textContent = "Do you wish to join us? ";
parajoin.innerHTML = `Please join our facebook group by  clicking the link below and message Mr. Larry Santiago.`;

document.querySelector("main").appendChild(join);
join.appendChild(howTo);
join.appendChild(parajoin);
join.appendChild(clubLink);


// const visitsDisplay = document.querySelector(".homeVisits");

let numVisits = Number(window.localStorage.getItem("homeVisits-ls")) || 0;
// reviewsDisplay.textContent = numReviews;
// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits + 1;
// } else {    
//     visitsDisplay.textContent = "This is your first review. 🥳 Welcome!";
// }
numVisits++;

localStorage.setItem("homeVisits-ls", numVisits);