const button = document.querySelector("button");

button.addEventListener("click", () => {
  let input = document.querySelector("input");
  input.select();
  document.execCommand("copy");
});
