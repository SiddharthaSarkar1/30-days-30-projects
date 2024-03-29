const starEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");

const colorsArr = ["red", "orange", "lightblue", "lightgreen", "green"];

const updateRating = (index) => {
  starEl.forEach((star, idx) => {
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emojisEl.forEach((emoji) => {
    emoji.style.transform = `translate(-${index * 50}px)`;
    emoji.style.color = colorsArr[index];
  });
};

updateRating(0);

starEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    // console.log("Clicked: ", index);
    updateRating(index);
  });
});
