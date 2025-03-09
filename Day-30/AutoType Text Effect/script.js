const text = document.getElementById("heading");

const prog = "I have finished 30 days 30 projects...😍😄😃✨🎇🎉";
let idx = 1;

setInterval(writeText, 150);

function writeText() {
  text.innerHTML = prog.slice(0, idx);
  idx++;

  if (idx > prog.length) {
    idx = 1;
  }
}
