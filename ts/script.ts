let buttonID = document.getElementById("next")!;
let contentID = document.getElementById("content")!;
let url = "https://icanhazdadjoke.com/";
let data:any;

async function getJoke() {
  let response = await fetch(url, { headers: { Accept: "application/json" } });
  data = await response.json();
  console.log(data.joke);
  contentID.innerHTML = `${data.joke}`;
}

function handleClick() {
    getJoke();
}

buttonID.addEventListener("click", handleClick);