const progress = document.querySelector(".progress-done");

setTimeout(() => {
  progress.style.width = progress.dataset.width;
  progress.style.opacity = 1;
}, 500);
