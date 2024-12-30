const winter = document.querySelector(".winter");
const spring = document.querySelector(".spring");
const summer = document.querySelector(".summer");
const autumn = document.querySelector(".autumn");
const seasons = document.querySelector(".seasons");


function winterSeason() {
    document.body.style.backgroundImage = "url('https://wp-top.ru/wp-content/uploads/2023/04/zima-luna-nebo-goluboy-derevya.jpg')";
    seasons.innerHTML = "";
    const div = document.createElement("div");
    seasons.appendChild(div);
    div.className = "winter";
    div.textContent = "December";
    const div1 = document.createElement("div");
    seasons.appendChild(div1);
    div1.className = "winter";
    div1.textContent = "january";
    const div2 = document.createElement("div");
    seasons.appendChild(div2);
    div2.className = "winter";
    div2.textContent = "february";
    return div;
}
winter.addEventListener("click", winterSeason);
function springSeason() {
    document.body.style.backgroundImage = "url('https://images3.alphacoders.com/135/1353957.png')";
    seasons.innerHTML = "";
    const div = document.createElement("div");
    seasons.appendChild(div);
    div.className = "spring";
    div.textContent = "March";
    const div1 = document.createElement("div");
    seasons.appendChild(div1);
    div1.className = "spring";
    div1.textContent = "April";
    const div2 = document.createElement("div");
    seasons.appendChild(div2);
    div2.className = "spring";
    div2.textContent = "May";
    return div;
}
spring.addEventListener("click", springSeason);

function summerSeason() {
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/RgAXADr.jpg')";
    seasons.innerHTML = "";
    const div = document.createElement("div");
    seasons.appendChild(div);
    div.className = "summer";
    div.textContent = "june";
    const div1 = document.createElement("div");
    seasons.appendChild(div1);
    div1.className = "summer";
    div1.textContent = "July";
    const div2 = document.createElement("div");
    seasons.appendChild(div2);
    div2.className = "summer";
    div2.textContent = "August";
    return div;
}
summer.addEventListener("click", summerSeason);
function autumnSeason() {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ed/e6/09/ede6097ddabc439e4fc3a558c8eedf55.jpg')";
    seasons.innerHTML = "";
    const div = document.createElement("div");
    seasons.appendChild(div);
    div.className = "autumn";
    div.textContent = "September";
    const div1 = document.createElement("div");
    seasons.appendChild(div1);
    div1.className = "autumn";
    div1.textContent = "October";
    const div2 = document.createElement("div");
    seasons.appendChild(div2);
    div2.className = "autumn";
    div2.textContent = "November";
    return div;
}
autumn.addEventListener("click", autumnSeason);




