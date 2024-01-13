const jokeContainerEl = document.getElementById("joke_container");
const jokeBtnEl = document.getElementById("joke_button");

const API_URL = "https://icanhazdadjoke.com/";

getJoke();

async function getJoke() {
    const res = await fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await res.json();
    jokeContainerEl.innerHTML = data.joke;
}

jokeBtnEl.addEventListener('click', getJoke);