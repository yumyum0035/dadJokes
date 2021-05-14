import { key } from "./config.js" ;

let buttonID = document.getElementById("next");
let contentID = document.getElementById("content");
const apiKey = key();
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}`;
const jokeURL = "https://icanhazdadjoke.com/";

async function getJoke() {
  let response = await fetch(jokeURL, { headers: { Accept: "application/json" } });
  let data = await response.json();
  contentID.innerHTML = `${data.joke}`;
}

async function getWeather() {
  let response = await fetch(weatherURL);
  let data = await response.json();
  showWeather(data.weather[0]);
}

function showWeather(weather){
  let title = document.createElement("h3");
  document.getElementById("container-0").appendChild(title);
  title.innerHTML = `${weather.main}`;
  let description = document.createElement("p");
  document.getElementById("container-0").appendChild(description);
  description.innerHTML = `${weather.description}`;
}

function handleClick() {
  getJoke();
}

function handleWeather() {
  getWeather();
}

buttonID.addEventListener("click", handleClick);
handleWeather();