const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
console.log("Last Modification:")
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const temp = document.querySelector("#currenttemp");
temperature = 10;
temp.innerHTML = temperature;
const conditions = document.querySelector("#currentcondition");
conditions.innerHTML = "Partly Cloudy";
const wind = document.querySelector("#windspeed");
windspeed = 5;
wind.innerHTML = windspeed;

function calculateWindChill(temperature, windspeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16);
    return windChill;
}

if (temperature <= 10 && windspeed > 4.8) {
    const windchill = document.querySelector("#currentwindchill");
    const windChillValue = calculateWindChill(temperature, windspeed);
    windchill.innerHTML = windChillValue.toFixed(1);

} else {
    windchill.innerHTML = "N/A";
}
