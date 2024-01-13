const countdownEl = document.getElementById("countdown");

const startMinutes = 10;
let time = startMinutes * 60;

setInterval(() => {
  updateCounter();
}, 1000);

function updateCounter() {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  countdownEl.innerHTML = `${min}:${sec}`;
  if (time > 0) {
    time--;
  }
}
