let buttonID = document.getElementById("next")!;
let url = "https://icanhazdadjoke.com/";

async function getJoke() {
  let response = await fetch(url, { headers: { Accept: "application/json" } });
  let data = await response.json();
  console.log(data.joke);
}

buttonID.addEventListener("click", getJoke);