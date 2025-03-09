const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const bullets = document.querySelectorAll(".bullet");

const MAX_STEPS = 4;
let currentStep = 1;

nextBtn.addEventListener("click", () => {
  const currentBullet = bullets[currentStep - 1];
  currentBullet.classList.add("completed");
  currentStep++;
  prevBtn.disabled = false;
  if (currentStep === MAX_STEPS) {
    nextBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  const currentBullet = bullets[currentStep - 2];
  currentBullet.classList.remove("completed");
  currentStep--;
  nextBtn.disabled = false;
  if (currentStep === 1) {
    prevBtn.disabled = true;
  }
});
